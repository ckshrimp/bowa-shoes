import{_ as lt,i as rt,h as nt,r as v,x as G,G as q,y as it,z as ut,o as vt,q as j,b as u,c as _,k as H,w as $,A as dt,d as s,l as Q,T as pt,F as I,t as f,H as ht,e as N,u as _t,v as R,B as K,C as W,p as ft,g as Ct}from"./index-a6ac2222.js";import{u as gt}from"./store-467a2af1.js";import{M as yt}from"./Modal-966c6659.js";import{L as Dt}from"./Loading-f672881b.js";/* empty css                                                              */const D=m=>(ft("data-v-6a539fd2"),m=m(),Ct(),m),mt={id:"shopCart-container"},St={key:1,id:"shopCart-all"},Lt=D(()=>s("div",{id:"shopCart-title"},"購物車",-1)),wt={id:"shopCart-main"},It={id:"shopCartFrame"},kt=["onClick"],Pt=["onClick"],zt=["src"],bt={class:"shopCart-productDetail"},qt=["onClick"],$t=D(()=>s("div",{class:"shopCart-gender"},"男",-1)),Nt={class:"shopCart-select"},Tt=["onUpdate:modelValue","onChange"],Vt=["value"],Mt=["onUpdate:modelValue","onChange"],Ut=["value"],At={class:"shopCart-price"},Bt={id:"shopCart-priceFrame"},Ft={id:"shopCart-box"},Jt=D(()=>s("div",{id:"shopCart-little"},"小計",-1)),Ot={class:"shopCart-priceLeft"},Et=D(()=>s("div",{id:"shopCart-discount"},"折扣",-1)),Gt={class:"shopCart-priceLeft"},jt=D(()=>s("div",{id:"shopCart-total"},"總計(不含運費)",-1)),Ht={class:"shopCart-priceLeft"},Qt={__name:"ShopCart",setup(m){const k=rt("config"),P=gt(),T=nt(),S=v(!1),z=v(""),r=v({cartList:[]}),l=v({cartData:[]}),L=v(0),d=G(()=>tt()),p=v("無折扣"),V=G(()=>at()),C=q(new Array(l.value.cartData.length).fill(null)),n=q(new Array(l.value.cartData.length).fill(null)),g=q(new Array(l.value.cartData.length).fill([])),M=v(!1),U=v(!0),A=v(!1),B=async()=>{const t=P.cartData;let a=JSON.parse(JSON.stringify(t));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",a),a},y=async t=>{try{P.updateCartData(t),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await B())}catch{console.log("更新本地資料失敗")}},X=async t=>{try{P.updatePriceData(t)}catch{console.log("更新本地資料失敗")}};function F(t,a){const o=l.value.cartData[t],c=C[t],e=o.inventory.find(h=>h.productSize===c);if(e){const h=e.inventory;g[t]=new Array(h).fill().map((w,i)=>i+1),a||(n[t]=1)}else g[t]=[],n[t]=null}const Y=async t=>{const a=l.value.cartData[t],o=C[t],c=n[t],e=a.inventory.find(i=>i.productSize===o).productSizeID,h=r.value.cartList.findIndex(i=>i.productSizeID===e),w=a.inventory.find(i=>i.productSizeID===e).inventory;if(h!==-1){const i=r.value.cartList[h],b=i.quantity+c;b<=w?(i.quantity=b,n[h]=b):(i.quantity=w,n[h]=w),r.value.cartList.splice(t,1),C.splice(t,1),n.splice(t,1),g.splice(t,1),l.value.cartData=r.value.cartList.map(O=>{const E=l.value.cartData.find(ct=>ct.productSizeID===O.productSizeID);return console.log(E,"搜尋到的資料更改=-=-=-=-=-=-="),{...E,quantity:O.quantity}})}else F(t,!1),r.value.cartList.splice(t,1,{productSizeID:e,quantity:c,productSize:o}),l.value.cartData[t].productSizeID=e,l.value.cartData[t].quantity=c,l.value.cartData[t].productSize=o,await y(r.value.cartList)},Z=async(t,a)=>{r.value.cartList[t].quantity=a;const o=l.value.cartData[t];o.quantity=a,await y(r.value.cartList)};function J(t){T.push({name:"Product",params:{id:t},props:{id:t}})}function x(t){const a=l.value.cartData[t],o=n[t];return a.price*o}function tt(){return l.value.cartData.reduce((t,a,o)=>{const c=n[o];return t+a.price*c},0)}function at(){if(d.value>=1e4&&L.value===0&&(p.value="9折"),L.value===1&&(p.value="8折"),d.value<1e4&&L.value===0&&(p.value="無折扣"),p.value==="無折扣")return d.value;if(p.value==="9折")return d.value*.9;if(p.value==="8折")return d.value*.8}const et=async t=>{r.value.cartList.splice(t,1),l.value.cartData.splice(t,1),C.splice(t,1),n.splice(t,1),g.splice(t,1),y(r.value.cartList),M.value===!0&&await j(r.value,`${k.apiUrl}/updateCart`)},ot=async()=>{let t={subTotal:d.value,discount:p.value,totalPrice:V.value};X(t),y(r.value.cartList),T.push("/shopCartNext")},st=async()=>{if(d.value!==0)return ot();z.value="購物車沒有商品",S.value=!0,console.log("購物車沒有商品")};return it(async()=>{ut().then(t=>{let a=t.isLogin;M.value=a,console.log("%c 登入狀況::","color: red; font-weight: bold",a)}).catch(t=>{console.log("重新讀取")})}),vt(async()=>{let t=await B();const a=await j(t,`${k.apiUrl}/cart`);l.value={cartData:a.cartData},r.value={cartList:a.cartList},a.level&&(L.value=a.level),console.log("%c cartData::ref已寫入","color: green; font-weight: bold",l.value),console.log("%c cartList::ref已寫入","color: green; font-weight: bold",r.value),console.log("%c memberLevel::ref已寫入","color: green; font-weight: bold",a.level),y(r.value.cartList),l.value.cartData.forEach((o,c)=>{C[c]=o.inventory[0].productSize,n[c]=o.quantity>o.inventory[0].inventory?o.inventory[0].inventory:o.quantity,F(c,!0),A.value=a.cartData.some(e=>e.inventoryShortage),A.value&&(z.value="有部分商品缺貨 購物車商品已更改",S.value=!0)}),setTimeout(()=>{U.value=!1},1e3)}),(t,a)=>(u(),_(I,null,[S.value?(u(),H(yt,{key:0,onClose:a[0]||(a[0]=o=>S.value=!1)},{default:$(()=>[s("p",null,f(z.value),1)]),_:1})):dt("",!0),s("div",mt,[Q(pt,{name:"fade",mode:"out-in"},{default:$(()=>[U.value===!0?(u(),H(Dt,{key:0})):(u(),_("div",St,[Lt,s("div",wt,[s("div",It,[Q(ht,{name:"list",tag:"ul"},{default:$(()=>[(u(!0),_(I,null,N(l.value.cartData,(o,c)=>(u(),_("div",{key:c,class:"shopCart-product"},[s("div",{class:"shopCart-delete",onClick:e=>et(c)},"x",8,kt),s("div",{onClick:e=>J(o.productID),class:"shopCart-productPic"},[s("img",{src:`${_t(k).picUrl}/`+o.imgSrc},null,8,zt)],8,Pt),s("div",bt,[s("div",{onClick:e=>J(o.productID),class:"shopCart-productName"},f(o.productName),9,qt),$t,s("div",Nt,[R(" 尺寸 "),K(s("select",{class:"shopCart-size","onUpdate:modelValue":e=>C[c]=e,onChange:e=>Y(c)},[(u(!0),_(I,null,N(o.inventory,e=>(u(),_("option",{key:e.productSizeID,value:e.productSize},f(e.productSize),9,Vt))),128))],40,Tt),[[W,C[c]]]),R(" 數量 "),K(s("select",{class:"shopCart-count","onUpdate:modelValue":e=>n[c]=e,onChange:e=>Z(c,n[c])},[(u(!0),_(I,null,N(g[c],e=>(u(),_("option",{key:e,value:e},f(e),9,Ut))),128))],40,Mt),[[W,n[c]]])])]),s("div",At,f(x(c))+"$",1)]))),128))]),_:1})]),s("div",Bt,[s("div",Ft,[Jt,s("div",Ot,f(d.value),1),Et,s("div",Gt,f(p.value),1),jt,s("div",Ht,f(V.value),1)]),s("button",{id:"shopCart-next",onClick:a[1]||(a[1]=o=>st())},"下一步")])])]))]),_:1})])],64))}},Zt=lt(Qt,[["__scopeId","data-v-6a539fd2"]]);export{Zt as default};