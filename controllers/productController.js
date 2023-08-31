const models = require('../models')

const getProductList = async (req, res) => {
	try {
		console.log('獲取商品清單');
		const data = await models.product.getProductListWithImg()
		res.json(data)
	} catch (error) {
		console.error('獲取商品清單發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}

}

const getProductListByCondition = async (req, res) => {
	try {
		console.log('藉由條件獲取商品清單');
		const [condition] = Object.entries(req.body)
		console.log(condition);
		const data = await models.product.getProductListByConditionWithImg(condition)
		res.json(data)
	} catch (error) {
		console.error('藉由條件獲取商品清單發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}

}
const getProductData = async (req, res) => {
	try {
		console.log('獲取商品資訊');
		const { productID } = req.body
		const data = await models.product.getProductDataByProductID(productID)
		res.json(data)
	} catch (error) {
		console.error('進入商品頁面發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}
}
const getProductDataFromCart = async (req, res) => {
	try {
		console.log('獲取商品資訊');
		const { productSizeID } = req.body
		const { productID } = await models.mysql.getProductIDByProductSizeID(productSizeID)
		const data = await models.product.getProductDataByProductID(productID)
		res.json(data)
	} catch (error) {
		console.error('從購物車獲取商品資訊發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}
}


const getProductDataThroughCartOrFavor = async (req, res) => {
	try {
		console.log('從購物車或最愛進入商品頁面');
		const { productSizeID } = req.body
		const { productID } = await models.mysql.getProductIDByProductSizeID(productSizeID)
		const data = await models.product.getProductDataForAPIByProductID(productID)
		res.json(data)
	} catch (error) {
		console.error('從購物車或最愛進入商品頁面發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}

}

const getTypeList = async (req, res) => {
	try {
		console.log('獲取類別清單');
		const data = await models.product.getTypeList()
		return res.json(data)
	} catch (error) {
		console.error('獲取商品類別清單發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}
}

const getHomePageData=async(req,res)=>{
	try{
		console.log('獲取首頁資訊');
		const data = await models.product.getHomePageData()
		return res.json(data)
	}catch(error){
		console.error('獲取首頁資訊發生錯誤：', error)
		res.status(500).json({ error: '伺服器發生錯誤' });
	}
}


module.exports = {
	getProductList,
	getProductData,
	getProductListByCondition,
	getProductDataThroughCartOrFavor,
	getTypeList,
	getProductDataFromCart,
	getHomePageData,

}