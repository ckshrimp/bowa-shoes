const mysql = require('./mysql.js')

const getProductListObject = async (condition = false) => {
    let productList
    if (!condition) {
        productList = await mysql.getProductData()
    }
    if (condition) {
        const { colume, row } = condition
        productList = await mysql.getProductData(colume, row)
    }
    let data = {}
    productList.forEach((product) => {
        let key = product.productID
        data[key] = product
    })
    return data
}


const formatInventoryDataToAPI = (inventoryData) => {
    const result = inventoryData.reduce((acc, obj) => {
        const { productID, ...rest } = obj;
        if (!acc[productID]) {
            acc[productID] = [];
        }
        acc[productID].push(rest);
        return acc;
    }, {});
    return result
}


const getProductDataByProductID = async (productID) => {
    const [{ model }] = await mysql.getModelByProductID(productID)
    const condition = ['model', model]
    const result = await mysql.getProductData(condition)
    for (let i = 0; i < result.length; i++) {
        const productData = result[i]
        const id = productData.productID
        const inventoryData = await mysql.getInventoryByProductID(id);
        productData.inventory = inventoryData;
        const imgSrc = await mysql.getImgSrcByProductID(id)
        productData.imgSrc= imgSrc
    }
    //將使用者點選的product移至第一項
    const [thisProduct]=result.filter((product)=>{
        return product.productID==productID
    })
    const index=result.indexOf(thisProduct)
    result.splice(index,1)[0]
    result.unshift(thisProduct)
    return result
}

const getTypeList=async()=>{
    const result={brandType:await mysql.getBrandTypeList(),
        categoryType:await mysql.getCategoryTypeList(),
        genderType:await mysql.getGenderTypeList()
    }
    return result
}

const getProductListWithImg=async()=>{
    const productList=await mysql.getProductData()
    for(let i=0;i<productList.length;i++){
        const product=productList[i]
        const productID=product.productID
        const [{imgSrc}]=await mysql.getImgSrcByProductID(productID)
        product.imgSrc=imgSrc
    }
    return productList
}
const getProductListByConditionWithImg=async(condition)=>{
    const productList=await mysql.getProductData(condition)
    for(let i=0;i<productList.length;i++){
        const product=productList[i]
        const productID=product.productID
        const [{imgSrc}]=await mysql.getImgSrcByProductID(productID)
        product.imgSrc=imgSrc
    }
    return productList
}
const getHomePageData = async()=>{
    const productList = await mysql.getThreeNewProduct()
    for(let i=0;i<productList.length;i++){
        const product=productList[i]
        const productID=product.productID
        const [{imgSrc}]=await mysql.getImgSrcByProductID(productID)
        product.imgSrc=imgSrc
    }
    return {productList}
}
module.exports = {
    getProductDataByProductID,
    getTypeList,
    getProductListWithImg,
    getProductListByConditionWithImg,
    getHomePageData,
}