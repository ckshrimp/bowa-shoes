import{_ as S}from"./MemberNavBar-7bb9040c.js";import{i as F,h as $,r as d,y as b,z as I,o as M,j as N,b as c,c as u,k as z,w as T,A as h,d as r,l as x,F as g,e as B,t as n,u as U,q as m}from"./index-a6ac2222.js";import{u as P}from"./store-467a2af1.js";import{M as J}from"./Modal-966c6659.js";/* empty css                                                                *//* empty css                                                              */const V=""+new URL("addToCart-87fbb5a8.png",import.meta.url).href;const j={id:"favor-container"},q={id:"favor-all"},O={id:"favor-Frame"},R=r("div",{id:"favor-title"},"我的收藏",-1),A={id:"favor-favorList"},E={key:0,id:"favor-noList"},G=["onClick"],H=["onClick"],K=["src"],Q={class:"favor-productDetail"},W={class:"favor-productName"},X={class:"favor-gender"},Y={class:"favor-price"},Z=["onClick"],oo=r("img",{src:V,class:"icon"},null,-1),to=[oo],lo={__name:"MemberFavor",setup(eo){const i=F("config"),p=P(),y=$(),l=d(!1),v=d(""),C=d(!1),s=d([]),f=async()=>{const o=p.cartData;let e=JSON.parse(JSON.stringify(o));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",e),e},w=async o=>{try{p.updateCartData(o),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await f())}catch(e){console.log("更新本地資料失敗",e)}},D=async o=>{let e,t,a;try{t=await f(),t.cartList||(t.cartList=[])}catch{console.error("讀取本地資料失敗")}e={productData:{productSizeID:o,quantity:1},cartList:t.cartList};try{a=await m(e,`${i.apiUrl}/addProductToCart`),a.result!==!1?(v.value="加入購物車成功",l.value=!0):(v.value="加入購物車失敗",l.value=!0)}catch{console.error("加入購物車失敗")}try{console.log(a.cartList),await w(a.cartList)}catch(_){console.error("更新本地失敗",_)}};function L(o){y.push({name:"Product",params:{id:o},props:{id:o}})}const k=async o=>{try{(await m({productSizeID:o},`${i.apiUrl}/deleteFavor`)).result?(s.value=s.value.filter(t=>t.productSizeID!==o),console.log("從收藏移除成功")):console.error("從收藏移除失敗")}catch(e){console.error("從收藏移除失敗:",e)}};return b(async()=>{I().then(o=>{let e=o.isLogin;C.value=e,console.log("%c 登入狀況::","color: red; font-weight: bold",e)}).catch(o=>{console.log("重新讀取")})}),M(async()=>{try{let o=await N(`${i.apiUrl}/myFavor`);s.value=o}catch{console.error()}}),(o,e)=>(c(),u(g,null,[l.value?(c(),z(J,{key:0,onClose:e[0]||(e[0]=t=>l.value=!1)},{default:T(()=>[r("p",null,n(v.value),1)]),_:1})):h("",!0),r("div",j,[r("div",q,[x(S),r("div",O,[R,r("div",A,[s.value===[]?(c(),u("div",E,"收藏尚無商品")):h("",!0),(c(!0),u(g,null,B(s.value,t=>(c(),u("div",{class:"favor-product",key:t.productSizeID},[r("div",{class:"favor-delete",onClick:a=>k(t.productSizeID)},"x",8,G),r("div",{class:"favor-productPic",onClick:a=>L(t.productID)},[r("img",{src:`${U(i).picUrl}/`+t.imgSrc},null,8,K)],8,H),r("div",Q,[r("div",W,n(t.productName),1),r("div",X,n(t.genderType)+" 尺寸："+n(t.productSize),1),r("div",Y,n(t.price)+" $",1)]),r("div",{class:"favor-addToCart",onClick:a=>D(t.productSizeID)},to,8,Z)]))),128))])])])])],64))}};export{lo as default};
