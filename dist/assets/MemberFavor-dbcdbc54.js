import{_ as L}from"./MemberNavBar-cb850db2.js";import{i as S,k as F,r as i,y as $,z as I,o as M,m as N,b as d,c as _,A as b,w as z,B,d as r,h as x,F as h,e as T,t as s,u as P,q as g}from"./index-acee48e4.js";import{u as U}from"./store-bb461411.js";import{M as J}from"./Modal-326d273c.js";/* empty css                                                                *//* empty css                                                              */const V={id:"favor-container"},q={id:"favor-all"},O={id:"favor-Frame"},j=r("div",{id:"favor-title"},"我的收藏",-1),A={id:"favor-favorList"},E=["onClick"],R=["onClick"],G=["src"],H={class:"favor-productDetail"},K={class:"favor-productName"},Q={class:"favor-gender"},W={class:"favor-price"},X=["onClick"],so={__name:"MemberFavor",setup(Y){const c=S("config"),p=U(),m=F(),n=i(!1),u=i(""),y=i(!1),l=i([]),f=async()=>{const o=p.cartData;let e=JSON.parse(JSON.stringify(o));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",e),e},C=async o=>{try{p.updateCartData(o),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await f())}catch(e){console.log("更新本地資料失敗",e)}},D=async o=>{let e,t,a;try{t=await f(),t.cartList||(t.cartList=[])}catch{console.error("讀取本地資料失敗")}e={productData:{productSizeID:o,quantity:1},cartList:t.cartList};try{a=await g(e,`${c.apiUrl}/addProductToCart`),a.result!==!1?(u.value="加入購物車成功",n.value=!0):(u.value="加入購物車失敗",n.value=!0)}catch{console.error("加入購物車失敗")}try{console.log(a.cartList),await C(a.cartList)}catch(v){console.error("更新本地失敗",v)}};function w(o){m.push({name:"Product",params:{id:o},props:{id:o}})}const k=async o=>{try{(await g({productSizeID:o},`${c.apiUrl}/deleteFavor`)).result?(l.value=l.value.filter(t=>t.productSizeID!==o),console.log("從收藏移除成功")):console.error("從收藏移除失敗")}catch(e){console.error("從收藏移除失敗:",e)}};return $(async()=>{I().then(o=>{let e=o.isLogin;y.value=e,console.log("%c 登入狀況::","color: red; font-weight: bold",e)}).catch(o=>{console.log("重新讀取")})}),M(async()=>{try{let o=await N(`${c.apiUrl}/myFavor`);l.value=o}catch{console.error()}}),(o,e)=>(d(),_(h,null,[n.value?(d(),b(J,{key:0,onClose:e[0]||(e[0]=t=>n.value=!1)},{default:z(()=>[r("p",null,s(u.value),1)]),_:1})):B("",!0),r("div",V,[r("div",q,[x(L),r("div",O,[j,r("div",A,[(d(!0),_(h,null,T(l.value,t=>(d(),_("div",{class:"favor-product",key:t.productSizeID},[r("div",{class:"favor-delete",onClick:a=>k(t.productSizeID)},"x",8,E),r("div",{class:"favor-productPic",onClick:a=>w(t.productID)},[r("img",{src:`${P(c).apiUrl}/`+t.imgSrc},null,8,G)],8,R),r("div",H,[r("div",K,s(t.productName),1),r("div",Q,s(t.genderType)+" 尺寸："+s(t.productSize),1),r("div",W,s(t.price)+" $",1)]),r("div",{class:"favor-addToCart",onClick:a=>D(t.productSizeID)},"加入購物車",8,X)]))),128))])])])])],64))}};export{so as default};
