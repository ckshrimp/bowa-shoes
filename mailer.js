const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'BowaShoes@gmail.com',
        pass: 'wvcidqbjzwvfttoo',
    },
});

const sendMailForAuthenticate = (mailAddress, code) => {
    transporter.sendMail({
        from: 'BowaShoes@gmail.com',
        to: `${mailAddress}`,
        subject: 'BOWA鞋店註冊帳號驗證',
        html: `您的註冊帳號驗證碼為${code}`,
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}

const sendMailForSetPassword = (mailAddress, code) => {
    transporter.sendMail({
        from: 'BowaShoes@gmail.com',
        to: `${mailAddress}`,
        subject: 'BOWA鞋店密碼重設驗證信',
        html: `您的密碼重設驗證碼為${code}`,
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}

const sendMailForRegister = (mailAddress) => {
    transporter.sendMail({
        from: 'BowaShoes@gmail.com',
        to: `${mailAddress}`,
        subject: 'BOWA鞋店註冊成功通知信',
        html: `感謝您的註冊`,
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}

const sendMailForOrder = (mailAddress,orderID) => {
    transporter.sendMail({
        from: 'BowaShoes@gmail.com',
        to: `${mailAddress}`,
        subject: 'BOWA鞋店訂購成功通知信',
        html: `感謝您的訂購，您的訂單編號為${orderID}，可至會員中心之訂單查詢功能，查詢訂單詳細內容`,
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}


module.exports={
    sendMailForAuthenticate,
    sendMailForSetPassword,
    sendMailForRegister,
    sendMailForOrder,
}