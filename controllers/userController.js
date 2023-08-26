const models = require('../models')

const isLogin = async (req, res) => {           //判斷有無登入
    try{
        console.log('檢查登入狀態');
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false  //解密JWT拿到memberID
        if (!memberID) {
            const data = { isLogin: false }         //無登入
            return res.json(data)
        }
        const [{ name }] = await models.mysql.getNameById(memberID)
        const data = { isLogin: true, memberID: memberID, name: name }  //有登入
        return res.json(data)
    }catch(error){
        console.error('檢查登入狀態發生錯誤'.error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}


const loginAuthenticate = async (req, res) => { //提交登入表單進行驗證
    try{
        console.log('進行登入驗證');
        const user = req.body
        const loginResult = await models.user.checkLogin(user)  //登入驗證，成功則回傳token
        if (!loginResult) {
            const data = { result: false, errorMessage: '帳號密碼錯誤' }
            console.log('登入驗證失敗');
            return res.json(data)
        }
        if (loginResult) {
            //將token存入req.header
            req.header.authorization = `${loginResult}`
            //如果購物車有東西，加入會員購物車
            const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
            if (req.body.cartList) {
                const cartList = req.body.cartList
                models.cart.addGuestCartToMemberCart(cartList, memberID)
            }
            //結束
            const cartList = await models.mysql.getCartList(memberID)
            console.log('cartList',cartList);
            //找出購物車資料給前端儲存在本地
            const data = { result: true, cartList: cartList }
            return res.json(data)
        }
    }catch(error){
        console.error('進行登入發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}


const registerAuthenticate = async (req, res) => {
    try{
        console.log('進行註冊驗證');
        const user = req.body
        console.log(user);
        const registerResult = await models.user.checkRegister(user)
        if (!registerResult) {
            const data = { result: false, errorMessage: '此帳號已註冊' }
            console.log('註冊失敗');
            return res.json(data)
        }
        if (registerResult) {
            const data = { result: true }
            console.log('註冊成功');
            return res.json(data)
        }
    }catch(error){
        console.error('進行註冊發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const memberCenter = async (req, res) => {
    try{
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        if (!memberID) return res.json({ errorMessage: '尚未登入' })
        const data = await models.mysql.getMemberData(memberID)
        return res.json(data)
    }catch(error){
        console.error('進入會員中心發生錯誤：',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const forgetPassword = async(req, res) => {
    try{
        console.log('發送忘記密碼信件');
        const { email } = req.body
        const result=await models.user.createVerificationCode(email)
        const data={result}
        return res.json(data)
    }catch(error){
        console.error('發送忘記密碼信件發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}
const forgetPasswordAuthenticate=async(req,res)=>{
    try{
        console.log('確認驗證碼');
        const {email,code}=req.body
        if(await models.user.verificationCodeAuthenticate(email,code)){
            const data={result:true}
            return res.json(data)
        }else{
            const data={result:false}
            return res.json(data)
        }
    }catch(error){
        console.error('確認驗證碼發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}



const changeMemberData = async (req, res) => {
    try{
        console.log('更改會員資料');
        const { name, gender, phoneNumber, address } = req.body
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        const data = await models.mysql.setMemberData(name, gender, phoneNumber, address, memberID)
        console.log(data);
        res.json(data)
        return
    }catch(error){
        console.error('更改會員資料發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const changeMemberInfo = async (req,res) => {
    try{
        console.log('更改單項會員資料');
        console.log(req.body);
        const [memberInfo]=Object.entries(req.body)
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        await models.user.updateMemberInfo(memberID,memberInfo)
        const data = {result:true}
        res.json(data)
    }catch(error){
        console.error('更改會員資料發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const getFavorData = async (req, res) => {
    try{
        console.log('獲取最愛資訊');
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        const data = await models.user.getFavorData(memberID)
        console.log(data);
        return res.json(data)
    }catch(error){
        console.error('讀取最愛資訊發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}
const addFavorData =async(req,res) =>{
    try{
        console.log('加入最愛');
        const {productSizeID}=req.body
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        const result=await models.user.addProductToFavor(memberID,productSizeID)
        const data={result}
        return res.json(data)
    }catch(error){
        console.error('讀取最愛資訊發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}
const deleteFavor=async(req,res)=>{
    try{
        console.log('刪除最愛');
        const {productSizeID}=req.body
        const memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        const result=await models.user.deleteFavor(memberID,productSizeID)
        const data={result}
        return res.json(data)
    }catch(error){
        console.error('刪除最愛發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const logout=async(req,res)=>{
    try{
        console.log('登出');
        req.header.authorization = false
        const data={result:true}
        return res.json(data)
    }catch(error){
        console.error('進行登出發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const getCannedResponse=async(req,res)=>{
    try{
        console.log('罐頭訊息');
        const [message]=await models.mysql.getCannedResponse()
        const data={message}
        return res.json(data)
    }catch(error){
        console.error('查詢罐頭訊息發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

module.exports = {
    isLogin,
    loginAuthenticate,
    registerAuthenticate,
    memberCenter,
    changeMemberData,
    getFavorData,
    addFavorData,
    deleteFavor,
    forgetPassword,
    changeMemberInfo,
    forgetPasswordAuthenticate,
    logout,
    getCannedResponse,
}