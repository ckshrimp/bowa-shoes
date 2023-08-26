const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USERNAME || 'root',
    port: process.env.MYSQL_PORT || 3306,
    password: process.env.MYSQL_PASSWORD || 'lions64',
    database: process.env.DATABASENAME || 'bowaStore'
});

//會員相關

const getNameById = async (id) => {
    try{
        const sqlString = `SELECT name FROM member_Info WHERE memberID = ? `
        const value=[id]
        const [result]=await connection.execute(sqlString,value);
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getDataByEmail = async (email) => {              
    try {
        const sqlString = `SELECT * FROM member_Info WHERE Email = ? `
        const value = [email]
        const [result] = await connection.execute(sqlString,value);
        return result
    } catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createMemberInfo=async(info)=>{
    try {
        const { email, password, name, birthday, gender, phoneNumber, address }=info
        console.log(birthday);
        const sqlString=`INSERT INTO member_Info (Name, Email, Password, Birthday,Gender,PhoneNumber,Address,AccountStatus,consumeTotal) VALUES(?,?,?,?,?,?,?,0,0)`
        const value=[name,email,password,birthday,gender,phoneNumber,address]                
        const result=await connection.execute(sqlString,value);
        console.log('新增成功');
    } catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getMemberData=async(memberID)=>{
    try{
        const sqlString=`select email,name,birthday,gender,phoneNumber,address,level,point,consumeTotal from member_Info where memberID=?`
        const [[result]]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const setMemberData=async(name,gender,phoneNumber,address,memberID)=>{
    try{
        const sqlString=`update member_Info set name=?,gender=?,phoneNumber=?,address=? where memberID=? `
        const [result]=await connection.execute(sqlString,[name,gender,phoneNumber,address,memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getVIPStatus=async(memberID)=>{
    try{
        const sqlString=`select level,consumeTotal from member_info WHERE memberID=?`
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const updateVIPStatus=async(memberID,level,consumeTotal)=>{
    try{
        const sqlString=`update member_Info set level=?,consumeTotal=? WHERE memberID=?`
        const [result]=await connection.execute(sqlString,[level,consumeTotal,memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createVerificationCode=async(email,code)=>{
    try{
        const sqlString=`insert into verificationCode(email,code) values(?,?)`
        const [result]=await connection.execute(sqlString,[email,code])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const deleteVerificationCode=async(email)=>{
    try{
        const sqlString=`delete from verificationCode WHERE email = ?`
        const [result]=await connection.execute(sqlString,[email])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getVerificationCode=async(email)=>{
    try{
        const sqlString=`select code,generateTime from verificationCode WHERE email = ?`
        const [result]=await connection.execute(sqlString,[email])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getEmailFromVerificationCode=async()=>{
    try{
        const sqlString=`select email from verificationCode `
        const [result]=await connection.execute(sqlString)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getMemberIDByEmail=async(email)=>{
    try{
        const sqlString = `select memberID from member_Info WHERE email=?`
        const [result]=await connection.execute(sqlString,[email])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getEmailByMemberID=async(memberID)=>{
    try{
        const sqlString=`select email from member_Info WHERE memberID=?`
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const updateMemberInfo=async(memberID,info,value)=>{
    try{
        const sqlString=`update member_Info set ${info} = ? WHERE memberID = ?`
        console.log(info,value,memberID);
        const [result]=await connection.execute(sqlString,[value,memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getConsumeTotal=async(memberID)=>{
    const sqlString=`select consumeTotal from member_Info WHERE memberID=?`
    const [result]=await connection.execute(sqlString,[memberID])
    return result
}
//產品相關
const getProductData=async(conditionList=false)=>{
    try{
        if(!conditionList){
            const sqlString = `SELECT productID,productName,price,remark,series,model,style FROM product WHERE isPublished=1`
            const [result]=await connection.execute(sqlString);
            return result
        }
        if(conditionList){
            const [condition,conditionValue]=conditionList
            const sqlString =`select productID,productName,price,remark,series,model,style from product 
            left join brandType on brandType.brandTypeID=Product.brandTypeID
            left join categoryType on categoryType.categoryTypeID=Product.categoryTypeID
            left join genderType on genderType.genderTypeID=Product.genderTypeID
            WHERE ${condition} = ? and isPublished=1`
            const [result]=await connection.execute(sqlString,[conditionValue])
            return result
        }
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getModelByProductID=async(id)=>{
    try{
        const sqlString=`SELECT model FROM product WHERE productID = ?`
        const [result]=await connection.execute(sqlString,[id])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getInventoryByModel=async(model)=>{                                   //
    try{
        const sqlString=`select ps.productID,ps.productSizeID,ps.inventory,ss.productSize
        from productSize ps
        left join product p on p.productID = ps.productID
        left join sizespecifications ss on ps.sizeID=ss.sizeID
        where p.model = ?;`
        const [result]=await connection.execute(sqlString,[model])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getInventoryByProductID=async(productID)=>{                                  //用productID獲得庫存數量，用於商品的詳細頁面中顯示可加入購物車數量
    try{
        const sqlString=`select ps.productSizeID,ps.inventory,ss.productSize
        from productSize ps
        left join product p on p.productID = ps.productID
        left join sizespecifications ss on ps.sizeID=ss.sizeID
        where p.productID = ?;`
        const [result]=await connection.execute(sqlString,[productID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getProductIDByProductSizeID=async(productSizeID)=>{
    try{
        const sqlString=`SELECT productID FROM productSize where productSizeID = ?`
        const [[result]]=await connection.execute(sqlString,[productSizeID])
        
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getInventoryByProductSizeID=async(productSizeID)=>{                   //用productSizeID取出庫存數，用來查詢購物車內商品是否超過庫存
    try{
        const sqlString=`SELECT inventory FROM productSize where productSizeID = ?`
        const [[result]]=await connection.execute(sqlString,[productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getImgSrcByProductID=async(productID)=>{
    try{
        const sqlString=`select imgSrc from productImgSrc where productID = ?`
        const [result]=await connection.execute(sqlString,[productID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getBrandTypeList=async()=>{
    try{
        const sqlString=`select brandType from brandType;`
        const [result]=await connection.execute(sqlString)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getCategoryTypeList=async()=>{
    try{
        const sqlString=`select categoryType from categoryType;`
        const [result]=await connection.execute(sqlString)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getGenderTypeList=async()=>{
    try{
        const sqlString=`select genderType from genderType;;`
        const [result]=await connection.execute(sqlString)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getProductNameAndPrice=async(productID)=>{
    try{
        const sqlString=`select productName,price from product where productID=?`
        const [result]=await connection.execute(sqlString,[productID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const updateInventory=async(productSizeID,inventory)=>{
    try{
        const sqlString=`update productSize set inventory = ? WHERE productSizeID = ?`
        const [result]=await connection.execute(sqlString,[inventory,productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getPriceByProductSizeID=async(productSizeID)=>{
    try{
        const sqlString=`select p.price from product p  left join productSize ps on p.productID=ps.productID WHERE ps.productSizeID = ?;`
        const [result]=await connection.execute(sqlString,[productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getNameAndPriceAndGenderTypeAndSizeByProductSizeID=async(productSizeID)=>{
    try{
        const sqlString=`select p.productID,p.productName,g.genderType,p.price,ss.productSize
        from productSize ps
        left join product p on p.productID=ps.productID
        left join genderType g on p.genderTypeID=g.genderTypeID
        left join sizespecifications ss on ss.sizeID=ps.sizeID
        WHERE ps.productSizeID=?;`
        const [result]=await connection.execute(sqlString,[productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getNameAndSizeByProductSizeID=async(productSizeID)=>{
    try{
        const sqlString=`select p.productID,p.productName,p.price,ss.productSize
        from productSize ps
        left join product p on p.productID=ps.productID
        left join sizespecifications ss on ss.sizeID=ps.sizeID
        WHERE ps.productSizeID=?;`
        const [result]=await connection.execute(sqlString,[productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
//購物車、最愛相關
const addProductSizeToCart=async(productSizeID,quantity,memberID)=>{          //加入商品到購物車
    try{
        console.log(productSizeID,quantity,memberID);
        const sqlString=`insert into member_shoppingCartList(productSizeID,quantity,memberID) values(?,?,?);`
        const [result]=await connection.execute(sqlString,[productSizeID,quantity,memberID])
        return
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getCartList=async(memberID)=>{                             
    try{
        const sqlString=`select ms.productSizeID,ms.quantity,ss.productSize
        from member_shoppingCartList  ms
        left join productSize ps on ps.productSizeID=ms.productSizeID
        left join sizespecifications ss on ss.sizeID= ps.sizeID where memberID= ?`
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const changeProductSizeQuantityInCart=async(productSizeID,quantity,memberID)=>{//改變購物車表格內的商品數量
    try{
        const sqlString=`UPDATE member_shoppingCartList SET quantity = ? WHERE memberID= ? and productSizeID = ? `
        const result=await connection.execute(sqlString,[quantity,memberID,productSizeID])
        return
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getFavorList=async(memberID)=>{
    try{
        const sqlString=`select * from member_favoritesList where memberID= ?`
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        throw error
    }
}
const addProductToFavor=async(memberID,productSizeID)=>{
    try{
        const sqlString=`insert into member_favoriteslist (memberID,productSizeID) values (?,?)`
        const [result]=await connection.execute(sqlString,[memberID,productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const clearCart=async(memberID)=>{
    try{
        const sqlString=`delete from member_shoppingCartList where memberID= ? `
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const updateProductSizeQuantityInCart=async(memberID,productSizeID,quantity)=>{
    try{
        const sqlString=`update member_shoppingcartList set quantity = ? WHERE memberID=? and productSizeID = ?`
        const [result]=await connection.execute(sqlString,[quantity,memberID,productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const deleteFavor=async(memberID,productSizeID)=>{
    try{
        const sqlString=`delete from member_favoriteslist where memberID= ? and productSizeID=? `
        const [result]=await connection.execute(sqlString,[memberID,productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
//訂單相關
const getOrderList=async(memberID)=>{
    try{
        const sqlString=`select orderID,orderDate,total,dm.deliveryMethod,os.orderStatus,mo.doneDate
        from member_order mo
        left join  deliveryMethod dm on dm.deliveryMethodID=mo.deliveryMethodID
        left join orderStatus os on os.orderStatusID=mo.orderStatusID
        where memberID =?`
        const [result]=await connection.execute(sqlString,[memberID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createOrder=async(memberID,shippingCost,paymentMethodID,deliveryMethodID,totalPrice,discount,remark)=>{
    try{
        const sqlString=`insert into member_order(memberID,shippingCost,paymentMethodID,deliveryMethodID,total,discount,orderRemark,orderStatusID,paymentStatusID)
        values(?,?,?,?,?,?,?,1,1);`//oderStatusID=1是待付款
        console.log(memberID,shippingCost,paymentMethodID,deliveryMethodID,totalPrice,discount,remark);
        const [result]=await connection.execute(sqlString,[memberID,shippingCost,paymentMethodID,deliveryMethodID,totalPrice,discount,remark])
        return result.insertId
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createOrderProduct=async(orderID,productSizeID,quantity,price)=>{
    try{
        const sqlString=`insert into orderProduct(orderID,productSizeID,quantity,currentPrice) values(?,?,?,?);`
        const [result]=await connection.execute(sqlString,[orderID,productSizeID,quantity,price])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getOrderID=async(id)=>{
    try{
        const sqlString=`SELECT orderID FROM member_order WHERE ID = ? `
        const [result]=await connection.execute(sqlString,[id])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createOrderRecipientInfo=async(orderID,recipientInfo)=>{
    try{
        const {recipientName,recipientAddress,recipientPhoneNumber}=recipientInfo
        const sqlString=`insert into order_recipientInfo (orderID,recipientName,recipientAddress,recipientPhoneNumber ) values (?,?,?,?)`
        const [result]=await connection.execute(sqlString,[orderID,recipientName,recipientAddress,recipientPhoneNumber])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getPaymentMethod=async()=>{
    try{
        const [result]=await connection.execute(`select * from paymentMethod;`)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getdeliveryMethod=async()=>{
    try{
        const [result]=await connection.execute(`select * from deliveryMethod;`)
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getShippingCostCondition=async()=>{
    try{
        const [result]=await connection.execute(`select * from shippingCostCondition;`)
        return  result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getOrderProduct=async(orderID)=>{
    try{
        const sqlString=`select productSizeID,quantity,currentprice,isReturn from orderProduct WHERE orderID = ?`
        const [result]=await connection.execute(sqlString,[orderID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createOrderQA=async(orderID,memberID,content)=>{
    try{
        const sqlString=`insert into orderqarecord (orderID,speaker,content) values (?,?,?)`
        const [result]=await connection.execute(sqlString,[orderID,memberID,content])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getOrderQA=async(orderID)=>{
    try{
        const sqlString=`select speaker,content,QATime from orderqarecord WHERE orderID=?`
        const [result]=await connection.execute(sqlString,[orderID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getOrderInfo=async(orderID)=>{
    try{
        const sqlString=`select mo.orderID,mo.orderDate,mo.total,dm.deliveryMethod,pm.paymentMethod,mo.orderRemark,
        mo.orderDate,mo.payDate,mo.deliveryDate,mo.doneDate,mo.discount,
        ori.recipientName,ori.recipientAddress,ori.recipientPhoneNumber,os.orderStatus
        from member_order mo
        left join deliveryMethod dm on dm.deliveryMethodID=mo.deliveryMethodID
        left join paymentMethod pm on pm.paymentMethodID=mo.paymentMethodID
        left join order_recipientInfo ori on ori.orderID=mo.orderID
        left join orderStatus os on os.orderStatusID=mo.orderStatusID
        where mo.orderID =?`
        const [result]=await connection.execute(sqlString,[orderID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const changeOrderProductStatus=async(orderID,productSizeID)=>{
    try{
        const sqlString=`update orderProduct set isReturn = 1 WHERE orderID=? and productSizeID = ?`
        const [result]=await connection.execute(sqlString,[orderID,productSizeID])
        return result
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const createOrderReturn=async(orderID,reason)=>{
    try{
        const sqlString=`insert into orderReturn(orderID,returnReason)values(?,?);`
        const [result]=await connection.execute(sqlString,[orderID,reason])
        return result.insertId
    }catch(error){
        console.log('進行資料庫操作時發生錯誤');
        throw error
    }
}
const getMemberIDOfOrder=async(orderID)=>{
    const sqlString=`select memberID from member_order WHERE orderID=?`
    const [result]=await connection.execute(sqlString,[orderID])
    console.log(result);
    const [{memberID}]=result
    return memberID
}
const changeOrderStatus=async(orderID)=>{
    const [[{orderStatusID}]]=await connection.execute(`select orderStatusID from orderStatus WHERE orderStatus='退貨處理中'`)
    const sqlString=`update member_order set orderStatusID=? WHERE orderID=?`
    const [result]=await connection.execute(sqlString,[orderStatusID,orderID])
    return result
}
const createRefundInfo=async(returnID,bankCode,refundAccountName,refundAccount)=>{
    const sqlString=`insert into orderRefundInfo (returnID,bankCode,refundAccountName,refundAccount) values (?,?,?,?)`
    const [result]=await connection.execute(sqlString,[returnID,bankCode,refundAccountName,refundAccount])
    return result
}
const getDiscountByOrderID=async(orderID)=>{
    const sqlString=`select discount from member_order WHERE orderID = ? `
    const [result]=await connection.execute(sqlString,[orderID])
    return result
}
const getCurrentPrice=async(orderID,productSizeID)=>{
    const sqlString=`select currentPrice from orderProduct WHERE orderID=? and productSizeID=?`
    const [result]=await connection.execute(sqlString,[orderID,productSizeID])
    return result
}
const getReturnID=async(id)=>{
    console.log(id);
    const sqlString=`select returnID from orderReturn WHERE id= ?`
    const [result]=await connection.execute(sqlString,[id])
    return result
}
const createReturnProduct=async(returnID, productSizeID, quantity)=>{
    const sqlString=`insert into returnProduct (returnID, productSizeID, quantity) values(?,?,?)`
    const [result]=await connection.execute(sqlString,[returnID, productSizeID, quantity])
    return result
}

module.exports={
    getDataByEmail,
    createMemberInfo,
    getNameById,
    getProductData,
    getModelByProductID,
    getInventoryByModel,
    getInventoryByProductID,
    addProductSizeToCart,
    getCartList,  
    changeProductSizeQuantityInCart,
    getInventoryByProductSizeID,
    getProductIDByProductSizeID,
    getFavorList,
    addProductToFavor,
    getImgSrcByProductID,
    getGenderTypeList,
    getCategoryTypeList,
    getBrandTypeList,
    getProductNameAndPrice,
    getMemberData,
    setMemberData,
    clearCart,
    getOrderList,
    createOrder,
    createOrderProduct,
    updateInventory,
    updateProductSizeQuantityInCart,
    getOrderID,
    getVIPStatus,
    updateVIPStatus,
    createVerificationCode,
    deleteVerificationCode,
    getVerificationCode,
    getEmailFromVerificationCode,
    createOrderRecipientInfo,
    getPaymentMethod,
    getdeliveryMethod,
    getShippingCostCondition,
    getMemberIDByEmail,
    getEmailByMemberID,
    updateMemberInfo,
    getOrderProduct,
    createOrderQA,
    getOrderQA,
    getPriceByProductSizeID,
    getNameAndPriceAndGenderTypeAndSizeByProductSizeID,
    getNameAndSizeByProductSizeID,
    deleteFavor,
    getOrderInfo,
    changeOrderProductStatus,
    createOrderReturn,
    getMemberIDOfOrder,
    changeOrderStatus,
    createRefundInfo,
    getDiscountByOrderID,
    getCurrentPrice,
    getConsumeTotal,
    getReturnID,
    createReturnProduct,

}

