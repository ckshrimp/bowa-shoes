import{i as m,h,r as o,o as D,j as f,s as g,b as s,c as d,d as t,l as _,F as y,e as k,D as I,w as p,v as c,t as r,k as R,A as $}from"./index-a6ac2222.js";import{_ as x}from"./MemberNavBar-7bb9040c.js";/* empty css                                                              */import"./store-467a2af1.js";import"./Modal-966c6659.js";/* empty css                                                                */const F={id:"recipient-container"},N={id:"recipient-all"},V={id:"recipient-Frame"},w=t("div",{id:"recipient-title"},"我的訂單",-1),B={id:"recipient-recipientList"},S=I('<div class="order-item order-header"><div class="order-detail recipient-ID">訂單編號</div><div class="order-detail recipient-date">訂單日期</div><div class="order-detail recipient-price">訂單價格</div><div class="order-detail">配送方式</div><div class="order-detail recipient-status">訂單狀態</div></div>',1),b={class:"order-detail recipient-date"},C={class:"order-detail recipient-price"},M={class:"order-detail"},j={class:"order-detail recipient-status"},A=t("br",null,null,-1),z={__name:"Recipient",setup(L){const u=m("config");h(),o(!1),o("");const n=o(),v=i=>{const a=new Date(i);return`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`};return D(async()=>{try{let i=await f(`${u.apiUrl}/myOrder`);n.value=i}catch{console.error()}}),(i,a)=>{const l=g("router-link");return s(),d("div",F,[t("div",N,[_(x),t("div",V,[w,t("div",B,[S,(s(!0),d(y,null,k(n.value,e=>(s(),d("div",{class:"order-item",key:e.orderID},[_(l,{to:{name:"SingleRecipient",params:{id:e.orderID}},class:"order-detail recipient-ID"},{default:p(()=>[c(r(e.orderID),1)]),_:2},1032,["to"]),t("div",b,r(v(e.orderDate)),1),t("div",C,r(e.total)+" $",1),t("div",M,r(e.deliveryMethod),1),t("div",j,[c(r(e.orderStatus)+" ",1),A,e.returnAvailable?(s(),R(l,{key:0,to:{name:"ReturnRecipient",params:{id:e.orderID}}},{default:p(()=>[c("申請退貨")]),_:2},1032,["to"])):$("",!0)])]))),128))])])])])}}};export{z as default};
