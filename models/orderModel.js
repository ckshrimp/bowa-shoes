const { query } = require('express')
const mysql = require('./mysql')
const mailer = require('../mailer')

const isInventoryEnough = async (orderData) => {
    const cartList = orderData.cartList
    const inventoryShortage = await checkInventory(cartList)
    console.log('inventoryShortage', inventoryShortage);
    if (inventoryShortage) {
        return false
    }
    return true
}
const isTotalPriceCorrect = async (orderData, memberID) => {
    const cartList = orderData.cartList

    // 0.計算實際價格 如果與前端顯示不相等，無法成立訂單

    let realTotalPrice = 0
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const [{ price }] = await mysql.getPriceByProductSizeID(product.productSizeID)
        realTotalPrice += price * product.quantity
    }
    if (memberID) {
        const [{ level }] = await mysql.getVIPStatus(memberID)
        if (level == 1) {
            realTotalPrice *= 0.8
        } else {
            if (realTotalPrice > 10000) {
                realTotalPrice *= 0.9
            }
        }
    } else {
        if (realTotalPrice > 10000) {
            realTotalPrice *= 0.9
        }
    }
    const shippingCostCondition = await mysql.getShippingCostCondition()
    const shippingCost = calculateShippingCost(shippingCostCondition, realTotalPrice)
    const { totalPrice } = orderData
    realTotalPrice += shippingCost
    console.log('前端給的總價', totalPrice, '實際總價', realTotalPrice);
    if (totalPrice != realTotalPrice) {
        return false
    }
    //金額不同的話退回
    return true
}

const calculateShippingCost = (shippingCostCondition, totalPrice) => {
    for (let i = shippingCostCondition.length - 1; i >= 0; i--) {
        if (totalPrice >= shippingCostCondition[i].consumeTotal) {
            return shippingCostCondition[i].shippingCost
        }
    }
}

const createOrder = async (memberID, orderData) => {
    const { cartList, recipientInfo, paymentMethodID, deliveryMethodID, shippingCost, totalPrice, remark, discount } = orderData
    const id = await mysql.createOrder(memberID, shippingCost, paymentMethodID, deliveryMethodID, totalPrice, discount, remark)
    const [{ orderID }] = await mysql.getOrderID(id)
    const [{ email }] = await mysql.getEmailByMemberID(memberID)
    console.log(`對${email}寄送信件`);
    mailer.sendMailForOrder(email, orderID)
    //成立訂單完成
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const { productSizeID, quantity } = product
        const { inventory } = await mysql.getInventoryByProductSizeID(productSizeID)
        const [{ price }] = await mysql.getPriceByProductSizeID(productSizeID)
        const remainder = inventory - quantity
        await mysql.updateInventory(productSizeID, remainder)
        await mysql.createOrderProduct(orderID, productSizeID, quantity, price)
    }
    await mysql.createOrderRecipientInfo(orderID, recipientInfo)
    //減去庫存並填入訂單表格完成
    
    //清除會員購物車
    await mysql.clearCart(memberID)
    //會員累積總消費金額，確認是否升級
    let [{ level, consumeTotal }] = await mysql.getVIPStatus(memberID)
    consumeTotal = consumeTotal + totalPrice-shippingCost
    if (consumeTotal > 10000 && level == 0) {
        level = 1
    }
    await mysql.updateVIPStatus(memberID, level, consumeTotal)
    return orderID
}
const checkInventory = async (cartList) => {
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]
        const { inventory } = await mysql.getInventoryByProductSizeID(product.productSizeID)
        console.log(product.quantity, inventory);
        if (product.quantity > inventory) {
            return true
        }
    }
    return false
}

const getOrderDetail = async (orderID) => {
    const productList = await mysql.getOrderProduct(orderID)
    const productData = Promise.all(productList.map(async (product) => {
        const [{ productID, productName, productSize }] = await mysql.getNameAndSizeByProductSizeID(product.productSizeID);
        const [{ imgSrc }] = await mysql.getImgSrcByProductID(productID)
        return {
            ...product,
            productID,
            productName,
            imgSrc,
            productSize
        };
    }))
    return productData
}

const returnOrderProduct = async (returnData,memberID) => {
    const { orderID, reason, productList,refundInfo } = returnData
    if (orderID && reason && productList && refundInfo) {

        const id=await mysql.createOrderReturn(orderID,reason)
        const [{returnID}]=await mysql.getReturnID(id)

        let returnTotal=0
        for(let i=0;i<productList.length;i++){
            const product=productList[i]
            const { productSizeID, quantity } = product
            await mysql.createReturnProduct(returnID, productSizeID, quantity)
            await mysql.changeOrderProductStatus(orderID, productSizeID)
            //計算價錢扣除總消費金額
            const [{discount}]=await mysql.getDiscountByOrderID(orderID)
            const [{currentPrice}]=await mysql.getCurrentPrice(orderID,productSizeID)

            returnTotal += currentPrice*quantity*discount
        }
        const {bankCode,refundAccountName,refundAccount}=refundInfo
        await mysql.createRefundInfo(returnID,bankCode,refundAccountName,refundAccount)
        await mysql.changeOrderStatus(orderID)

        //扣掉總消費，檢查等級
        let [{consumeTotal}]=await mysql.getConsumeTotal(memberID)
        consumeTotal -= returnTotal
        if(consumeTotal<10000){
            const level=0
            await mysql.updateVIPStatus(memberID,level,consumeTotal)
        }else{
            const level=1
            await mysql.updateVIPStatus(memberID,level,consumeTotal)
        }

        return true
    }
    return false
}
const getOrderList = async (memberID) => {
    const orderList = await mysql.getOrderList(memberID)
    for(let i=0;i<orderList.length;i++){
        const order=orderList[i]
        if (order.doneDate) {
            const doneTime = new Date(order.doneDate);
            const currentTime = new Date()
            if (604800000 > currentTime - doneTime > 0) {  //現在時間為訂單完成時間的7天內
                order.returnAvailable = true
            } else {
                order.returnAvailable = false
            }
        }
    }
    return orderList
}
const getOrderInfo = async (orderID) => {
    const [orderInfo] = await mysql.getOrderInfo(orderID)
    if (orderInfo.doneDate) {
        const doneTime = new Date(orderInfo.doneDate);
        const currentTime = new Date()
        if (604800000 > currentTime - doneTime > 0) {
            orderInfo.returnAvailable = true
        } else {
            orderInfo.returnAvailable = false
        }
    }
    return orderInfo
}

const checkMemberID = async (orderID, memberID) => {
    const authorizedMemberID = await mysql.getMemberIDOfOrder(orderID)
    if (memberID != authorizedMemberID) {
        return false
    }
    return true
}

module.exports = {
    createOrder,
    isTotalPriceCorrect,
    isInventoryEnough,
    getOrderDetail,
    returnOrderProduct,
    getOrderInfo,
    checkMemberID,
    getOrderList,
}