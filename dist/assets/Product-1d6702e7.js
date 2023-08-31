import{h as q,i as H,r as i,x as j,y as E,z as R,o as K,q as I,b as s,c as l,k as z,w as P,A as u,d as a,l as Q,T as W,F as f,t as y,u as L,e as S,f as N,B as X,C as Y}from"./index-bb11416d.js";import{u as Z}from"./store-f4a3a2de.js";import{M as ee}from"./Modal-721e8b5c.js";import{L as te}from"./Loading-414674df.js";/* empty css                                                              */const oe={class:"product-container"},ae={key:1,id:"all"},se={id:"leftArea"},le={key:0,id:"productPic"},re={id:"preview"},ce=["src"],ie={id:"selectList"},ue=["onClick"],ne=["src"],de={id:"rightArea"},ve={key:0,id:"productDetail"},_e={key:1,id:"productDetail"},pe={class:"group"},me={id:"name"},ye={id:"Price"},ge={class:"group"},he=a("div",{class:"title"},"顏色",-1),fe={id:"colorGroup"},ke=["onClick"],Se=["src"],De={class:"group"},Ce=a("div",{class:"title"},"尺寸",-1),Ie={id:"sizeGroup"},Le=["onClick"],$e={key:0,class:"group"},we=a("div",{class:"title"},"數量",-1),be={id:"countGroup"},ze={key:1,id:"buttonGroup"},Pe={class:"productDes"},Te={__name:"Product",props:["id"],setup(B){const F=B,D=q(),v=H("config"),$=Z(),_=i(!0),n=i([]),r=i(n[0]),c=i(null),d=i(1),k=i(""),p=i([]),g=i(""),m=i(!1),C=i(null),w=i(!1),U=async o=>{try{$.updateCartData(o);return}catch{console.log("更新本地資料失敗")}},M=async()=>{const o=$.cartData;let e=JSON.parse(JSON.stringify(o));return console.log(e,"拿到本地資料"),e},T=o=>{console.log(o,"已選擇"),k.value=o.imgSrc},x=(o,e)=>{r.value=n.value.find(t=>t.style===o),c.value=null,d.value=1,console.log(p.value),b(e.imgSrc),k.value=p.value[0].imgSrc},b=o=>{p.value=o.map(e=>({imgSrc:`/${e.imgSrc}`}))},A=o=>{o.inventory!==0&&(c.value=o)},G=j(()=>{if(!c.value)return[];const o=r.value.inventory.find(e=>e.productSizeID===c.value.productSizeID);return Array.from({length:o.inventory+1},(e,t)=>t)}),V=async()=>{if(r.value.productID&&r.value.productName&&c.value&&d.value){let o={productSizeID:c.value.productSizeID};console.log("加入收藏：",o);try{await I(o,`${v.apiUrl}/addFavor`)!==!1?(g.value="加入收藏成功",m.value=!0):(g.value="加入收藏失敗",m.value=!0)}catch{console.error("加入收藏失敗")}}},J=async()=>{let o,e,t;try{e=await M(),e.cartList||(e.cartList=[])}catch{console.error("讀取本地資料失敗")}r.value.productID&&r.value.productName&&c.value&&d.value&&(o={productData:{productSizeID:c.value.productSizeID,quantity:parseInt(d.value)},cartList:e.cartList});try{t=await I(o,`${v.apiUrl}/addProductToCart`),t.result!==!1?(g.value="加入購物車成功",m.value=!0):(g.value="加入購物車失敗",m.value=!0)}catch{console.error("加入購物車失敗")}try{await U(t.cartList)}catch{console.error("更新本地失敗")}};E(async()=>{R().then(o=>{let e=o.isLogin;w.value=e,console.log("%c 登入狀況::","color: red; font-weight: bold",e)}).catch(o=>{console.log("重新讀取")})}),K(async()=>{console.log("傳遞的id:",C.value);let o={productID:C.value};try{let e=await I(o,`${v.apiUrl}/product`);e===void 0?D.push({name:"Home"}):(n.value=e,r.value=n.value[0],k.value=n.value[0].imgSrc[0].imgSrc,p.value=n.value[0].imgSrc,b(p.value))}catch{D.push({name:"Home"})}setTimeout(()=>{_.value=!1},1e3)}),C.value=F.id;const O=()=>{D.back()};return(o,e)=>(s(),l(f,null,[m.value?(s(),z(ee,{key:0,onClose:e[0]||(e[0]=t=>m.value=!1)},{default:P(()=>[a("p",null,y(g.value),1)]),_:1})):u("",!0),a("div",oe,[_.value===!1?(s(),l("button",{key:0,class:"product-back-button",onClick:O},"回上一頁")):u("",!0),Q(W,{name:"fade",mode:"out-in"},{default:P(()=>[_.value===!0?(s(),z(te,{key:0})):(s(),l("div",ae,[a("div",se,[_.value?u("",!0):(s(),l("div",le,[a("div",re,[a("img",{src:`${L(v).picUrl}/${k.value}`},null,8,ce)]),a("div",ie,[(s(!0),l(f,null,S(p.value,t=>(s(),l("div",{key:t.imgSrc,class:"smallPic",onClick:h=>T(t)},[a("img",{src:`${L(v).picUrl}/${t.imgSrc}`},null,8,ne)],8,ue))),128))])]))]),a("div",de,[_.value?(s(),l("div",ve)):u("",!0),_.value?u("",!0):(s(),l("div",_e,[a("div",pe,[a("div",me,y(r.value.productName),1),a("div",ye,"$"+y(r.value.price),1)]),a("div",ge,[he,a("div",fe,[(s(!0),l(f,null,S(n.value,t=>(s(),l("div",{key:t.style,class:N(["color",{active:t.style===r.value.style}]),onClick:h=>x(t.style,t)},[a("img",{src:` ${L(v).picUrl}/${t.imgSrc[0].imgSrc}`},null,8,Se)],10,ke))),128))])]),a("div",De,[Ce,a("div",Ie,[(s(!0),l(f,null,S(r.value.inventory,t=>(s(),l("div",{key:t.productSizeID,class:N(["size","smallButton",{outOfStock:t.inventory===0,active:t===c.value}]),onClick:h=>A(t)},y(t.productSize),11,Le))),128))])]),c.value?(s(),l("div",$e,[we,a("div",be,[X(a("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t)},[(s(!0),l(f,null,S(G.value,t=>(s(),l("option",{key:t},y(t),1))),128))],512),[[Y,d.value]])])])):u("",!0),d.value>0&&c.value!==null?(s(),l("div",ze,[w.value?(s(),l("button",{key:0,class:"add",onClick:V},"加入收藏")):u("",!0),a("button",{class:"add",onClick:J},"加入購物車")])):u("",!0),a("div",Pe,y(r.value.remark),1)]))])]))]),_:1})])],64))}};export{Te as default};
