const models = require('../models')
// 修改尺寸，修改數量，刪除單項

const getSimpleCartData = async (req, res) => {
    try{
        console.log('獲取簡易購物車資訊');
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        if (!memberID) return res.json(false)
        const cartList = await models.mysql.getCartList(memberID)
        const data = { cartList }
        res.json(data)
        return
    }catch(error){
        console.error('獲取簡易購物車發生錯誤'.error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }

}
const getCartData = async (req, res) => {
    try{
        console.log('獲取購物車詳細資訊');
        const cartList = req.body.cartList ?? []
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        console.log(memberID)
        if (memberID) {
            await models.cart.changeAllSizeAndQuantityInCart(memberID, cartList)        //如果已登入將本地購物車更新寫入資料庫
            const cartData = await models.cart.getDetailsByCartList(memberID, cartList)     //取得購物車商品之詳細資訊並把庫存不足者進行調整
            const newCartList = await models.mysql.getCartList(memberID)                    //取得最新的購物車簡易資訊
            const [{ level, consumeTotal }] = await models.mysql.getVIPStatus(memberID)
            const data = { cartData, cartList: newCartList, level, consumeTotal }
    
            res.json(data)
        }
        if(!memberID){
            const cartData = await models.cart.getDetailsByCartList(memberID, cartList)     //取得購物車商品之詳細資訊並把庫存不足者進行調整
            const data={cartData,cartList}
            res.json(data)
        }
        // const shippingCost= await models.mysql.getShippingCostCondition()
        // const data={cartList,shippingCost}
        return
    } catch(error){
        console.error('讀取購物車資訊時發生錯誤'.error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }

}
const addProductSizeToCart = async (req, res) => {
    try{
        console.log('加入商品至購物車');
        const {productData,cartList} = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        const newCartList=await models.cart.addProductSizeToCart(productData, memberID,cartList)
        const data = { cartList:newCartList }
        res.json(data)
    } catch(error){
        console.error('加入商品至購物車時發生錯誤'.error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}

const updateCart = async (req, res) => {
    try{
        console.log('更改購物車內商品數量');
        const { cartList } = req.body
        const memberID = req.cookies.jwtToken ? models.user.getmemberIDByJWT(req) : false
        if(memberID){
            await models.cart.changeAllSizeAndQuantityInCart(memberID, cartList)
        }
        const data = {result:true ,message:'已更新購物車'}
        return res.json(data)
    }catch(error){
        console.error('更改購物車內商品數量發生錯誤'.error)
        res.status(500).json({ error: '伺服器發生錯誤' });
    }
}








module.exports = {
    getCartData,
    updateCart,
    addProductSizeToCart,
    getSimpleCartData,
}