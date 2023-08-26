const user=require('./userModel')
const product=require('./productModel')
const cart=require('./cartModel')
const mysql=require('./mysql')
const order=require('./orderModel')


module.exports={
    user,
    product,
    cart,
    mysql,
    order,
}