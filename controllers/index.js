const user=require('./userController')
const cart=require('./cartController')
const product=require('./productController')
const order=require('./orderController')
const models = require('../models')



const homePage=(req,res)=>{
    res.render('test')
}
const forgetPassword=(req,res)=>{
    res.render('forgetPassword')
}

const test=async(req,res)=>{
    try{
        const data=await models.mysql.test()
        res.json(data)
    }catch(error){
        console.error('發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

module.exports={
    user,
    cart,
    product,
    homePage,
    forgetPassword,
    test,
    order,
}