const express=require('express')
const router=express.Router()
const controllers=require('../controllers')
router.get('/',controllers.homePage)                    //進入首頁
router.get('/isLogin',controllers.user.isLogin)                    //傳送登入狀態到前端
router.post('/loginPost',controllers.user.loginAuthenticate)       //進行登入驗證
// router.get('/register',controllers.user.register)       //進入註冊頁面
// router.get('/login',controllers.user.login)             //進入登入頁面
// router.post('/register/authenticate',controllers.user.registerAuthenticate) //進行註冊驗證
// router.get('/logout',controllers.user.logout)           //登出+回首頁


router.post('/test',controllers.user.loginAuthenticate)
router.get('/test2',controllers.user.isLogin)
router.post('/test3',controllers.user.registerAuthenticate)
router.get('/test4',controllers.product.getProductList)
router.post('/test5',controllers.product.getProductData)
router.post('/test6',controllers.product.getProductListByCondition)
router.post('/test7',controllers.product.getProductData)
router.post('/test8',controllers.cart.addProductSizeToCart)
router.post('/test9',controllers.cart.getCartData)
router.get('/test10',controllers.user.getFavorData)
router.get('/test11',controllers.product.getTypeList)
router.get('/test12',controllers.cart.getSimpleCartData)
router.get('/test13',controllers.user.memberCenter) 
router.post('/test14',controllers.user.changeMemberData)
router.post('/test15',controllers.user.changeMemberData)
// router.post('/test16',controllers.cart.changeAllSizeAndQuantityInCart)
router.get('/test17',controllers.order.getMemberOrder) 
router.post('/test18',controllers.order.createOrder) 
router.get('/srctest',controllers.test)
router.post('/test19',controllers.user.forgetPassword) 
router.get('/test20',controllers.order.getOrderFormOption)
router.get('/test21',controllers.test)

router.post('/forgetPassword',controllers.user.forgetPassword)
router.post('/createCode',controllers.user.forgetPassword)
router.post('/codeAuthenticate',controllers.user.forgetPasswordAuthenticate)
router.get('/forgetPasswordPage',controllers.forgetPassword)
router.get('/ttt',controllers.test)




router.get('/isLogin',controllers.user.isLogin)
router.post('/login',controllers.user.loginAuthenticate)
router.post('/register',controllers.user.registerAuthenticate)
router.post('/productList',controllers.product.getProductList)
router.post('/productListByCondition',controllers.product.getProductListByCondition)
router.post('/product',controllers.product.getProductData)
router.post('/addProductToCart',controllers.cart.addProductSizeToCart)
router.get('/typeList',controllers.product.getTypeList)
router.post('/cart',controllers.cart.getCartData)
router.get('/simpleCart',controllers.cart.getSimpleCartData)
router.get('/memberCenter',controllers.user.memberCenter) 
router.post('/updateMemberData',controllers.user.changeMemberData)
router.post('/updateCart',controllers.cart.updateCart)
router.get('/orderList',controllers.order.getMemberOrder)
router.get('/myFavor',controllers.user.getFavorData)
router.post('/addFavor',controllers.user.addFavorData)
router.get('/myOrder',controllers.order.getMemberOrder)
router.post('/productSize',controllers.product.getProductDataFromCart)
router.post('/createOrder',controllers.order.createOrder) 
router.get('/orderFormOption',controllers.order.getOrderFormOption)
router.post('/changeMemberInfo',controllers.user.changeMemberInfo)
router.get('/logout',controllers.user.logout)
router.post('/deleteFavor',controllers.user.deleteFavor)

router.post('/orderDetail',controllers.order.getOrderDetail)
router.post('/orderQAList',controllers.order.getOrderQA)
router.post('/createOrderQA',controllers.order.createOrderQA)
router.get('/cannedResponse',controllers.user.getCannedResponse)
router.post('/returnOrderProduct',controllers.order.returnOrderProduct)
router.get('/homePageData',controllers.product.getHomePageData)
router.post('/setNewPassword',controllers.user.setNewPassword)


module.exports=router