import{_ as U,r as l,o as x,a as j,b as i,c as d,d as e,F as g,e as w,n as S,u as k,f as V,p as E,g as D,i as G,h as q,j as H,w as A,T as J,k as K,t as O}from"./index-e6bdfac7.js";import{L as Q}from"./Loading-dc1e90ea.js";const X=""+new URL("left-3a542cec.png",import.meta.url).href,Y=""+new URL("right-f4b86531.png",import.meta.url).href,L=""+new URL("banner_1-f9ad9749.png",import.meta.url).href,P=""+new URL("banner_2-32a8919c.png",import.meta.url).href,R=""+new URL("banner_3-f9ca8f0f.png",import.meta.url).href;const F=r=>(E("data-v-00f9f2ee"),r=r(),D(),r),Z={class:"fade-banner"},ee=["src","title"],te=F(()=>e("img",{src:X,class:"icon"},null,-1)),ne=[te],oe=F(()=>e("img",{src:Y,class:"icon"},null,-1)),ae=[oe],se={class:"banner-indicator"},ie=["onClick"],re={__name:"Banner",setup(r){const t=l({listBanner:[{img:L,description:"Image 1 description",url:L},{img:P,description:"Image 2 description",url:P},{img:R,description:"Image 2 description",url:R}],interval:4e3,autoSwitch:!0,setHeight:450}),f=l(null),o=l(0),_=l(),a=l(),h=l(null);t.value.setHeight;const u=t.value.listBanner,c=l(t.value.setHeight),B=()=>{window.innerWidth<=720?c.value=150:window.innerWidth>720&&window.innerWidth<1024?c.value=300:window.innerWidth>1024&&(c.value=t.value.setHeight)},b=()=>{t.value.autoSwitch===!0&&(f.value=setInterval(()=>{m("right")},t.value.interval))},$=()=>{clearInterval(f.value)},p=()=>{t.value.listBanner&&t.value.listBanner.forEach((n,s)=>{s===o.value&&(h.value=n.description)})},N=()=>{$(),p()},T=()=>{b()},I=n=>{for(let s of _.value)s.style.opacity="0";W(n),_.value.length!==0&&(_.value[n].style.opacity="1")},W=n=>{for(let s of a.value)s.style.backgroundColor="rgba(221, 221, 221, 0.541)";a.value.length!==0&&(a.value[n].style.backgroundColor="#ffffff")},m=n=>{n==="right"?(o.value++,o.value===t.value.listBanner.length&&(o.value=0)):(o.value--,o.value===-1&&(o.value=t.value.listBanner.length-1)),I(o.value),p()},z=n=>{o.value=n,I(o.value),p()},M=()=>{t.value.listBanner&&t.value.listBanner.forEach((n,s)=>{s===o.value&&n.url!==""&&n.url!==null&&(window.location.href=n.url)})};return x(()=>{b(),B(),window.addEventListener("resize",B)}),j(()=>{$()}),(n,s)=>(i(),d("div",{class:"banner-container",style:S({height:c.value+"px",minHeight:c.value+"px"}),onMouseenter:N,onMouseleave:T},[e("ul",Z,[(i(!0),d(g,null,w(k(u),(v,C)=>(i(),d("li",{class:"rotation-banner",ref_for:!0,ref_key:"rotationRef",ref:_,style:S({height:c.value+"px",minHeight:c.value+"px"}),key:C},[e("img",{class:"banner-img",onClick:M,src:v.img,title:h.value},null,8,ee)],4))),128))]),e("span",{class:"left-button",onClick:s[0]||(s[0]=v=>m("left"))},ne),e("span",{class:"right-button",onClick:s[1]||(s[1]=v=>m("right"))},ae),e("ul",se,[(i(!0),d(g,null,w(k(u).length,v=>(i(),d("span",{key:v,class:"barExternal",onClick:C=>z(v-1)},[e("li",{ref_for:!0,ref_key:"indicatorRef",ref:a,class:V(["default-indicator",{"active-indicator":v-1===0}])},null,2)],8,ie))),128))])],36))}},ce=U(re,[["__scopeId","data-v-00f9f2ee"]]);const y=r=>(E("data-v-c4f555ca"),r=r(),D(),r),le={key:1,id:"Home-app"},ue={id:"home-container"},de=y(()=>e("div",{class:"home-title"},"最新商品",-1)),_e={id:"home-newProduct-Frame"},ve=["onClick"],fe=["src"],he=["onClick"],pe=y(()=>e("div",{class:"home-title"},"服務",-1)),me=y(()=>e("div",{id:"home-ourService-Frame"},null,-1)),ge={__name:"Home",setup(r){const t=G("config"),f=l(!0),o=l([]),_=a=>{router.push({name:"Product",params:{id:a},props:{id:a}})};return x(async()=>{try{let a=await q(`${t.apiUrl}/homePageData`);o.value=a.productList}catch(a){console.error("最新資料載入失敗","color: red; font-weight: bold",a)}setTimeout(()=>{f.value=!1},1e3)}),(a,h)=>(i(),H(J,{name:"fade",mode:"out-in"},{default:A(()=>[f.value===!0?(i(),H(Q,{key:0})):(i(),d("div",le,[K(ce),e("div",ue,[de,e("div",_e,[(i(!0),d(g,null,w(o.value,u=>(i(),d("div",{key:u,class:"home-newProduct-Group"},[e("div",{class:"home-newProduct-Pic",onClick:c=>_(u.productID)},[e("img",{src:`${k(t).picUrl}/`+u.imgSrc,alt:"Product Image"},null,8,fe)],8,ve),e("div",{class:"home-newProduct-Name",onClick:c=>_(u.productID)},O(u.productName),9,he)]))),128))]),pe,me])]))]),_:1}))}},ye=U(ge,[["__scopeId","data-v-c4f555ca"]]);export{ye as default};
