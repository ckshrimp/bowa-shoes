import{h as q,i as H,r as i,x as j,y as E,z as R,o as K,q as I,b as s,c as l,k as z,w as P,A as u,d as a,l as Q,T as W,F as f,t as v,u as L,e as S,f as N,B as X,C as Y}from"./index-10037a5e.js";import{u as Z}from"./store-a05e07ad.js";import{M as ee}from"./Modal-e3383a26.js";import{L as te}from"./Loading-3199938a.js";/* empty css                                                              */const oe={class:"product-container"},ae={key:1,id:"all"},se={id:"leftArea"},le={key:0,id:"productPic"},re={id:"preview"},ce=["src"],ie={id:"selectList"},ue=["onClick"],ne=["src"],de={id:"rightArea"},ve={key:0,id:"productDetail"},_e={key:1,id:"productDetail"},pe={class:"group"},me={id:"name"},ge={id:"Price"},ye={id:"gender"},he={class:"group"},fe=a("div",{class:"title"},"顏色",-1),ke={id:"colorGroup"},Se=["onClick"],De=["src"],Ce={class:"group"},Ie=a("div",{class:"title"},"尺寸",-1),Le={id:"sizeGroup"},$e=["onClick"],we={key:0,class:"group"},be=a("div",{class:"title"},"數量",-1),ze={id:"countGroup"},Pe={key:1,id:"buttonGroup"},Ne={class:"productDes"},xe={__name:"Product",props:["id"],setup(B){const F=B,D=q(),_=H("config"),$=Z(),p=i(!0),n=i([]),r=i(n[0]),c=i(null),d=i(1),k=i(""),m=i([]),y=i(""),g=i(!1),C=i(null),w=i(!1),T=async o=>{try{$.updateCartData(o);return}catch{console.log("更新本地資料失敗")}},U=async()=>{const o=$.cartData;let e=JSON.parse(JSON.stringify(o));return console.log(e,"拿到本地資料"),e},M=o=>{console.log(o,"已選擇"),k.value=o.imgSrc},x=(o,e)=>{r.value=n.value.find(t=>t.style===o),c.value=null,d.value=1,console.log(m.value),b(e.imgSrc),k.value=m.value[0].imgSrc},b=o=>{m.value=o.map(e=>({imgSrc:`/${e.imgSrc}`}))},A=o=>{o.inventory!==0&&(c.value=o)},G=j(()=>{if(!c.value)return[];const o=r.value.inventory.find(e=>e.productSizeID===c.value.productSizeID);return Array.from({length:o.inventory+1},(e,t)=>t)}),V=async()=>{if(r.value.productID&&r.value.productName&&c.value&&d.value){let o={productSizeID:c.value.productSizeID};console.log("加入收藏：",o);try{await I(o,`${_.apiUrl}/addFavor`)!==!1?(y.value="加入收藏成功",g.value=!0):(y.value="加入收藏失敗",g.value=!0)}catch{console.error("加入收藏失敗")}}},J=async()=>{let o,e,t;try{e=await U(),e.cartList||(e.cartList=[])}catch{console.error("讀取本地資料失敗")}r.value.productID&&r.value.productName&&c.value&&d.value&&(o={productData:{productSizeID:c.value.productSizeID,quantity:parseInt(d.value)},cartList:e.cartList});try{t=await I(o,`${_.apiUrl}/addProductToCart`),t.result!==!1?(y.value="加入購物車成功",g.value=!0):(y.value="加入購物車失敗",g.value=!0)}catch{console.error("加入購物車失敗")}try{await T(t.cartList)}catch{console.error("更新本地失敗")}};E(async()=>{R().then(o=>{let e=o.isLogin;w.value=e,console.log("%c 登入狀況::","color: red; font-weight: bold",e)}).catch(o=>{console.log("重新讀取")})}),K(async()=>{console.log("傳遞的id:",C.value);let o={productID:C.value};try{let e=await I(o,`${_.apiUrl}/product`);e===void 0?D.push({name:"Home"}):(n.value=e,r.value=n.value[0],k.value=n.value[0].imgSrc[0].imgSrc,m.value=n.value[0].imgSrc,b(m.value))}catch{D.push({name:"Home"})}setTimeout(()=>{p.value=!1},1e3)}),C.value=F.id;const O=()=>{D.back()};return(o,e)=>(s(),l(f,null,[g.value?(s(),z(ee,{key:0,onClose:e[0]||(e[0]=t=>g.value=!1)},{default:P(()=>[a("p",null,v(y.value),1)]),_:1})):u("",!0),a("div",oe,[p.value===!1?(s(),l("button",{key:0,class:"product-back-button",onClick:O},"回上一頁")):u("",!0),Q(W,{name:"fade",mode:"out-in"},{default:P(()=>[p.value===!0?(s(),z(te,{key:0})):(s(),l("div",ae,[a("div",se,[p.value?u("",!0):(s(),l("div",le,[a("div",re,[a("img",{src:`${L(_).picUrl}/${k.value}`},null,8,ce)]),a("div",ie,[(s(!0),l(f,null,S(m.value,t=>(s(),l("div",{key:t.imgSrc,class:"smallPic",onClick:h=>M(t)},[a("img",{src:`${L(_).picUrl}/${t.imgSrc}`},null,8,ne)],8,ue))),128))])]))]),a("div",de,[p.value?(s(),l("div",ve)):u("",!0),p.value?u("",!0):(s(),l("div",_e,[a("div",pe,[a("div",me,v(r.value.productName),1),a("div",ge,"$"+v(r.value.price),1),a("div",ye,v(r.value.genderType),1)]),a("div",he,[fe,a("div",ke,[(s(!0),l(f,null,S(n.value,t=>(s(),l("div",{key:t.style,class:N(["color",{active:t.style===r.value.style}]),onClick:h=>x(t.style,t)},[a("img",{src:` ${L(_).picUrl}/${t.imgSrc[0].imgSrc}`},null,8,De)],10,Se))),128))])]),a("div",Ce,[Ie,a("div",Le,[(s(!0),l(f,null,S(r.value.inventory,t=>(s(),l("div",{key:t.productSizeID,class:N(["size","smallButton",{outOfStock:t.inventory===0,active:t===c.value}]),onClick:h=>A(t)},v(t.productSize),11,$e))),128))])]),c.value?(s(),l("div",we,[be,a("div",ze,[X(a("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t)},[(s(!0),l(f,null,S(G.value,t=>(s(),l("option",{key:t},v(t),1))),128))],512),[[Y,d.value]])])])):u("",!0),d.value>0&&c.value!==null?(s(),l("div",Pe,[w.value?(s(),l("button",{key:0,class:"add",onClick:V},"加入收藏")):u("",!0),a("button",{class:"add",onClick:J},"加入購物車")])):u("",!0),a("div",Ne,v(r.value.remark),1)]))])]))]),_:1})])],64))}};export{xe as default};
