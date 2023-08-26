const mysql = require("./mysql")
const mailer = require('../mailer')
const jwt = require('jsonwebtoken')
const jwtKey = 'bowastore';


const checkLogin = async (user) => {                                                       //登入驗證

        const { email, password } = user                                               //使用者提交的帳號密碼
        const [userData] = await mysql.getDataByEmail(email)                                       //找到資料庫中的帳號資料
        if (!userData) {
            return false
        }
        if (userData) {
            if (password != userData.password) {
                return false
            }
            if (password == userData.password) {
                const memberID = userData.memberID
                const token = jwt.sign({ memberID: memberID }, jwtKey, { expiresIn: 86400 });
                return token
            }
        }
}

const checkRegister = async (user) => {
    const email = user.email
    if (await isRegistered(email)) {
        return false
    }
    if (!await isRegistered(email)) {
        await mysql.createMemberInfo(user)
        mailer.sendMailForRegister(email) //寄信
        return true
    }
}

const isRegistered = async (email) => {
    const data = await mysql.getDataByEmail(email)
    if (data.length == 0) {
        return false
    }
    if (data.length == 1) {
        return true
    }
}
const isEmailAuthenticated = async (id) => {
    const status = mysql.getAccountStatus(id)
    if (!status) {
        return false
    }
    if (status) {
        return true
    }
}

const setPassword = async (mail, password) => {
    const result = await mysql.putData('userAuthenticate', 'password', password, `mail=${mail}`)
    console.log(result);
    return result
}

const getFavorData = async (memberID) => {
    const favorList = await mysql.getFavorList(memberID)
    const updatedFavorList = await Promise.all(favorList.map(async (product) => {
        const [{ productID, productName, price, genderType, productSize }] = await mysql.getNameAndPriceAndGenderTypeAndSizeByProductSizeID(product.productSizeID);
        const [{ imgSrc }] = await mysql.getImgSrcByProductID(productID)
        return {
            ...product,
            productID,
            productName,
            price,
            genderType,
            imgSrc,
            productSize
        };
    }));

    return updatedFavorList
}
const addProductToFavor = async (memberID, productSizeID) => {
    const favorList = await mysql.getFavorList(memberID)
    if (favorList.some((product) => product.productSizeID == productSizeID)) {
        return false
    }
    await mysql.addProductToFavor(memberID, productSizeID)
    return true
}
const deleteFavor = async (memberID, productSizeID) => {
    await mysql.deleteFavor(memberID, productSizeID)
    return true
}

const getmemberIDByJWT = (req) => jwt.verify(req.header.authorization, jwtKey, (error, result) => {
    try {
        console.log('驗證memberID:', result);
        const memberID = result.memberID
        return memberID
    }catch{
        console.log('JWT解密失敗');
        throw error
    }
});

const createVerificationCode = async (email) => {
    const code = getVerificationCode()
    mailer.sendMailForSetPassword(email, code)
    const emailList = await mysql.getEmailFromVerificationCode()
    if (emailList.some((item) => item.email == email)) {
        await mysql.deleteVerificationCode(email)
    }
    await mysql.createVerificationCode(email, code)
    return true
}
const getVerificationCode = () => {
    const code = Math.floor(Math.random() * 90000) + 10000
    return code
}
const verificationCodeAuthenticate = async (email, postCode) => {
    const verificationCode = await mysql.getVerificationCode(email)
    if (verificationCode.length == 0) {
        console.log('沒有驗證碼');
        return false
    }
    const [{ code, generateTime }] = verificationCode
    const givenTime = new Date(generateTime);
    const currentTime = new Date()
    console.log('驗證碼創建時間：', givenTime, '現在時間：', currentTime);
    if (300000 > currentTime - givenTime > 0) {
        console.log('驗證碼有效期間內');
        if (code == postCode) {
            console.log('驗證碼正確');
            await mysql.deleteVerificationCode(email)
            return true
        } else {
            console.log('驗證碼錯誤');
        }
    } else {
        console.log('驗證碼過期');
    }
    return false
}

const autoRegister = async (orderData) => {           //  結帳自動註冊
    const { recipientInfo } = orderData
    const { recipientEMail, recipientBirthday, recipientName, recipientAddress, recipientPhoneNumber } = recipientInfo
    if (await isRegistered(recipientEMail)) {
        console.log('信箱重複');
        return false

    }
    const info = {
        email: recipientEMail,
        password: recipientPhoneNumber,
        name: recipientName,
        birthday: recipientBirthday,
        gender: '未選擇',
        phoneNumber: recipientPhoneNumber,
        address: recipientAddress
    }
    await mysql.createMemberInfo(info)
    const [{ memberID }] = await mysql.getMemberIDByEmail(info.email)
    return memberID
}

const updateMemberInfo = async (memberID, memberInfo) => {
    const [info, value] = memberInfo
    console.log('1', info, value);
    const result = await mysql.updateMemberInfo(memberID, info, value)
    return result
}
module.exports = {
    checkLogin,
    setPassword,
    isRegistered,
    checkRegister,
    isEmailAuthenticated,
    getFavorData,
    getmemberIDByJWT,
    createVerificationCode,
    autoRegister,
    verificationCodeAuthenticate,
    updateMemberInfo,
    addProductToFavor,
    deleteFavor,
}