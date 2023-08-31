const mysql=require('./mysql')

// const getDetailsByCartList=async(memberID,cartList)=>{
//     if(cartList.length==0 && memberID){
//         cartList=await mysql.getCartList(memberID)
//     }//防止本地購物車被清空
    
//     for(let i=0;i<cartList.length;i++){
//         const product=cartList[i]
//         const productSizeID=product.productSizeID
//         let quantity=product.quantity
//         const {productID}=await mysql.getProductIDByProductSizeID(productSizeID)
//         const inventory=await mysql.getInventoryByProductID(productID)
//         const [thisSizeData]=inventory.filter((product)=>{
//             return product.productSizeID==productSizeID
//         })

//         const thisSizeInventory=thisSizeData.inventory
//         let inventoryShortage=false
//         if(thisSizeInventory<quantity){
//             product.quantity=thisSizeInventory
//             inventoryShortage=true
//             //這邊把購物車內庫存不足的商品數量調整至庫存數，未實測
//             await mysql.updateProductSizeQuantityInCart(memberID,productSizeID,thisSizeInventory)
//         }
//         //這邊把此productSize的物件移至陣列第一項
//         const [thisProductSize]=inventory.filter((product)=>{
//             return product.productSizeID==productSizeID
//         })
//         const index=inventory.indexOf(thisProductSize)
//         inventory.splice(index,1)[0]
//         inventory.unshift(thisProductSize)
//         //到這
//         const [{imgSrc}]=await mysql.getImgSrcByProductID(productID)//加入縮圖
//         product.imgSrc=imgSrc
//         product.productID=productID
//         const otherSizeInventory=inventory.filter((product)=>{
//             return product.inventory!=0
//         })
//         product.inventory=otherSizeInventory
//         product.inventoryShortage=inventoryShortage
        
//         //這邊拿金額跟名字
//         const [{price,productName}]=await mysql.getProductNameAndPrice(productID)
//         product.price=price
//         product.productName=productName
        
//     }

//     return cartList
// }

//用map改良測試
const getDetailsByCartList=async(memberID,cartList)=>{
    if(cartList.length==0 && memberID){
        cartList=await mysql.getCartList(memberID)
    }//防止本地購物車被清空
    const cartData = await Promise.all(cartList.map(async(product)=>{
        const productSizeID=product.productSizeID
        let quantity=product.quantity
        const {productID}=await mysql.getProductIDByProductSizeID(productSizeID)
        const inventory=await mysql.getInventoryByProductID(productID)
        const [thisSizeData]=inventory.filter((product)=>{
            return product.productSizeID==productSizeID
        })
        const thisSizeInventory=thisSizeData.inventory
        let inventoryShortage=false
        if(thisSizeInventory<quantity){
            product.quantity=thisSizeInventory
            inventoryShortage=true
            //這邊把購物車內庫存不足的商品數量調整至庫存數，未實測
            await mysql.updateProductSizeQuantityInCart(memberID,productSizeID,thisSizeInventory)
        }
        //這邊把此productSize的物件移至陣列第一項
        const [thisProductSize]=inventory.filter((product)=>{
            return product.productSizeID==productSizeID
        })
        const index=inventory.indexOf(thisProductSize)
        inventory.splice(index,1)[0]
        inventory.unshift(thisProductSize)
        const [{imgSrc}]=await mysql.getImgSrcByProductID(productID)//加入縮圖
        const otherSizeInventory=inventory.filter((product)=>{
            return product.inventory!=0
        })
        
        //這邊拿金額跟名字
        const [{price,productName}]=await mysql.getProductNameAndPrice(productID)
        product.price=price
        return {
            ...product,
            inventoryShortage:inventoryShortage,
            productName,
            inventory:otherSizeInventory,
            productID,
            imgSrc,
        }
    }))
    

    return cartData
}



const addProductSizeToCart = async (productData, memberID,cartList) => {
    if(cartList.length==0 &&memberID){
        cartList=await mysql.getCartList(memberID)
    }//防止本地購物車被清空

    let { productSizeID, quantity } = productData


    const productSizeAlreadyInCart=cartList.filter((product) => {
        return product.productSizeID == productSizeID
    })
    if (productSizeAlreadyInCart.length!=0) {
        const originalQuantity=productSizeAlreadyInCart[0].quantity
        const newQuantity=originalQuantity+quantity
        cartList=cartList.map((product)=>{
            if(product.productSizeID==productSizeID){
                product.quantity=newQuantity
                return product
            }else{
                return product
            }

        })
        if(memberID){
            await mysql.changeProductSizeQuantityInCart(productSizeID,newQuantity,memberID)
        }
        return cartList
    } else {
        const product={productSizeID,quantity}
        cartList.push(product)
        if(memberID){
            const result = await mysql.addProductSizeToCart(productSizeID, quantity, memberID)
        }
        return cartList
    }
}

const addGuestCartToMemberCart=async(guestCartList,memberID)=>{
    memberCartList = await mysql.getCartList(memberID)
    for(let i=0;i<guestCartList.length;i++){
        const product=guestCartList[i]
        const {productSizeID,quantity}=product
        let productSizeAlreadyInCart=memberCartList.filter((product) => {
            return product.productSizeID == productSizeID
        })
        if (productSizeAlreadyInCart.length!=0) {
            const originalQuantity=productSizeAlreadyInCart[0].quantity
            const newQuantity=originalQuantity+quantity
            await mysql.changeProductSizeQuantityInCart(productSizeID,newQuantity,memberID)
        } else {
            const result = await mysql.addProductSizeToCart(productSizeID, quantity, memberID)
        }
    }
    return true
}
const changeAllSizeAndQuantityInCart=async(memberID,cartList)=>{
    await mysql.clearCart(memberID)
    for(let i=0;i<cartList.length;i++){
        const product=cartList[i]
        const {productSizeID,quantity}=product
        const result= await mysql.addProductSizeToCart(productSizeID,quantity,memberID)
    }
    return 
}
const changeSizeAndQuantityInCart=async(memberID,cartList)=>{
    await mysql.clearCart(memberID)
    for(let i=0;i<cartList.length;i++){
        const product=cartList[i]
        const {productSizeID,quantity}=product
        const result= await mysql.addProductSizeToCart(productSizeID,quantity,memberID)
    }
    return 
}

module.exports={
    addProductSizeToCart,
    addGuestCartToMemberCart,
    getDetailsByCartList,
    changeSizeAndQuantityInCart,
    changeAllSizeAndQuantityInCart,
}