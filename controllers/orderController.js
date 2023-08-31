const models = require('../models')

const createOrder = async (req, res) => {
    try {
        console.log('購物車結帳，成立訂單');
        const orderData = req.body
        //確認所有庫存足夠，進行三步驟 0.確認庫存與計算實際價格 如果與庫存不足或價格與前端顯示不相等，無法成立訂單 
        //1.成立訂單 2.減去商品庫存 3.把商品資料寫入訂單表格
        if (!await models.order.isInventoryEnough(orderData)) {
            const errorMessage = '您選購之商品庫存不足，請至購物車查看詳情'
            const data = { orderID: false, errorMessage }
            return res.json(data)
        }
        let memberID = req.header.authorization ? models.user.getmemberIDByJWT(req) : false
        if (!await models.order.isTotalPriceCorrect(orderData, memberID)) {
            const errorMessage = '商品價格已進行變更，請重新結帳'
            const data = { orderID: false, errorMessage }
            return res.json(data)
        }

        //如果表單包含註冊資料，則自動註冊
        if (orderData.recipientInfo.recipientEMail) {
            console.log('自動註冊');
            memberID = await models.user.autoRegister(orderData)

        }
        if (!memberID) {
            const errorMessage = '此信箱已註冊，請登入後再進行結帳'
            const data = { orderID: false, errorMessage }
            return res.json(data)
        }
        console.log('開始成立訂單');
        const orderID = await models.order.createOrder(memberID, orderData)
        if (orderID) {
            const data = { orderID }
            return res.json(data)
        }
        if (!orderID) {
            const errorMessage = '訂單成立失敗，請重新結帳'
            const data = { orderID:false, errorMessage }
            return res.json(data)
        }
    } catch (error) {
        console.error('結帳時發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }

}

const getOrderFormOption = async (req, res) => {
    try {
        console.log('取得訂單表單選項');
        const paymentMethod = await models.mysql.getPaymentMethod()
        const deliveryMethod = await models.mysql.getdeliveryMethod()
        const shippingCostCondition = await models.mysql.getShippingCostCondition()
        const data = { paymentMethod, deliveryMethod, shippingCostCondition }
        console.log(data);
        return res.json(data)
    } catch (error) {
        console.error('取得訂單表單選項發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const getMemberOrder = async (req, res) => {
    try {
        console.log('會員訂單清單');
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        const data = await models.order.getOrderList(memberID)
        return res.json(data)
    } catch (error) {
        console.error('讀取會員訂單清單發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const getOrderDetail = async (req, res) => {
    try {
        console.log('訂單詳細資訊');
        const { orderID } = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        if(!await models.order.checkMemberID(orderID,memberID)){
            return res.json({result:false,errorMessage:'無權限進行此操作'})
        }
        const orderInfo = await models.order.getOrderInfo(orderID)
        const productList = await models.order.getOrderDetail(orderID)
        const data = { orderInfo, productList }
        return res.json(data)
    } catch (error) {
        console.error('讀取訂單詳細資訊發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const createOrderQA = async (req, res) => {
    try{
        console.log('新增問與答');
        const { orderID, content } = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        if(!await models.order.checkMemberID(orderID,memberID)){
            return res.json({result:false,errorMessage:'無權限進行此操作'})
        }
        await models.mysql.createOrderQA(orderID, memberID, content)
        const QAList = await models.mysql.getOrderQA(orderID)
        const data = { result: true, QAList }
        return res.json(data)
    }catch (error) {
        console.error('新增問答發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}
const getOrderQA = async (req, res) => {
    try{
        console.log('讀取問與答');
        const { orderID } = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        if(!await models.order.checkMemberID(orderID,memberID)){
            return res.json({result:false,errorMessage:'無權限進行此操作'})
        }
        const QAList = await models.mysql.getOrderQA(orderID)
        const data = { QAList }
        return res.json(data)
    }catch (error) {
        console.error('讀取問答發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const cancelOrder = async (req, res) => {
    try{
        console.log('取消訂單');
        const { orderID } = req.body
        await models.mysql.setOrderStatus(orderID,)
        await models.mysql.CreateOrderCancel(orderID)
    }catch (error) {
        console.error('取消訂單發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const returnOrderProduct = async (req, res) => {
    try{
        console.log('退貨');
        const returnData = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        const orderID=returnData.orderID
        if(!await models.order.checkMemberID(orderID,memberID)){
            return res.json({result:false,errorMessage:'無權限進行此操作'})
        }
        const result = await models.order.returnOrderProduct(returnData,memberID)
        const data = { result }
        if (!result) {
            data.message = '請輸入退款原因'
            return res.json(data)
        }
        return res.json(data)
    }catch (error) {
        console.error('進行退貨發生錯誤',error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}



module.exports = {
    createOrder,
    getOrderFormOption,
    getMemberOrder,
    getOrderDetail,
    createOrderQA,
    getOrderQA,
    returnOrderProduct,

}