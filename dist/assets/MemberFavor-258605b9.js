import{_ as F}from"./MemberNavBar-6bdb8689.js";import{i as $,h as b,r as s,y as I,z as M,o as N,j as z,b as c,c as u,k as T,w as x,A as g,d as r,l as B,F as m,e as U,t as n,u as P,q as y}from"./index-1c6f3158.js";import{u as J}from"./store-09b99b65.js";import{M as V}from"./Modal-728e6302.js";/* empty css                                                                *//* empty css                                                              */const j=""+new URL("addToCart-87fbb5a8.png",import.meta.url).href;const q={id:"favor-container"},O={id:"favor-all"},R={id:"favor-Frame"},A=r("div",{id:"favor-title"},"我的收藏",-1),E={id:"favor-favorList"},G={key:0,id:"favor-noList"},H=["onClick"],K=["onClick"],Q=["src"],W={class:"favor-productDetail"},X={class:"favor-productName"},Y={class:"favor-gender"},Z={class:"favor-price"},oo=["onClick"],to=r("img",{src:j,class:"icon"},null,-1),eo=[to],uo={__name:"MemberFavor",setup(ro){const l=$("config"),f=J(),C=b(),i=s(!1),v=s(""),w=s(!1),d=s([]),_=s(!0),h=async()=>{const o=f.cartData;let e=JSON.parse(JSON.stringify(o));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",e),e},D=async o=>{try{f.updateCartData(o),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await h())}catch(e){console.log("更新本地資料失敗",e)}},L=async o=>{let e,t,a;try{t=await h(),t.cartList||(t.cartList=[])}catch{console.error("讀取本地資料失敗")}e={productData:{productSizeID:o,quantity:1},cartList:t.cartList};try{a=await y(e,`${l.apiUrl}/addProductToCart`),a.result!==!1?(v.value="加入購物車成功",i.value=!0):(v.value="加入購物車失敗",i.value=!0)}catch{console.error("加入購物車失敗")}try{console.log(a.cartList),await D(a.cartList)}catch(p){console.error("更新本地失敗",p)}};function k(o){C.push({name:"Product",params:{id:o},props:{id:o}})}const S=async o=>{try{(await y({productSizeID:o},`${l.apiUrl}/deleteFavor`)).result?(d.value=d.value.filter(t=>t.productSizeID!==o),console.log("從收藏移除成功")):console.error("從收藏移除失敗")}catch(e){console.error("從收藏移除失敗:",e)}};return I(async()=>{M().then(o=>{let e=o.isLogin;w.value=e,console.log("%c 登入狀況::","color: red; font-weight: bold",e)}).catch(o=>{console.log("重新讀取")})}),N(async()=>{try{let o=await z(`${l.apiUrl}/myFavor`);o.length===0?_.value=!0:_.value=!1,d.value=o}catch{console.error()}}),(o,e)=>(c(),u(m,null,[i.value?(c(),T(V,{key:0,onClose:e[0]||(e[0]=t=>i.value=!1)},{default:x(()=>[r("p",null,n(v.value),1)]),_:1})):g("",!0),r("div",q,[r("div",O,[B(F),r("div",R,[A,r("div",E,[_.value===!0?(c(),u("div",G,"收藏尚無商品")):g("",!0),(c(!0),u(m,null,U(d.value,t=>(c(),u("div",{class:"favor-product",key:t.productSizeID},[r("div",{class:"favor-delete",onClick:a=>S(t.productSizeID)},"x",8,H),r("div",{class:"favor-productPic",onClick:a=>k(t.productID)},[r("img",{src:`${P(l).picUrl}/`+t.imgSrc},null,8,Q)],8,K),r("div",W,[r("div",X,n(t.productName),1),r("div",Y,n(t.genderType)+" 尺寸："+n(t.productSize),1),r("div",Z,n(t.price)+" $",1)]),r("div",{class:"favor-addToCart",onClick:a=>L(t.productSizeID)},eo,8,oo)]))),128))])])])])],64))}};export{uo as default};
