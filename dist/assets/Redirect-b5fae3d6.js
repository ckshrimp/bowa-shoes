import{l,E as d,b as o,c as p,d as i,t as m,u as a,A as n,w as c,B as u,v as _}from"./index-acee48e4.js";const f={id:"container"},y={id:"all"},g={id:"message"},b={__name:"Redirect",setup(k){const e=l().query;let t="",s="";return console.log(e.pageFrom),e.pageFrom==="recipient"&&(s="main",e.status==="true"&&(e.payment==="信用卡"&&(t="信用卡付款成功 訂單成立"),e.payment==="現金"&&(t="訂單成立")),e.status==="false"&&(t="訂單失敗 請重新下訂單")),e.pageFrom==="return"&&(s="recipient",e.status==="true"&&(t="申請退貨成功"),e.status==="false"&&(t="申請退貨失敗 請重新申請退貨")),(h,x)=>{const r=d("router-link");return o(),p("div",f,[i("div",y,[i("div",g,m(a(t)),1),a(s)==="main"?(o(),n(r,{key:0,to:"/",class:"button"},{default:c(()=>[_("回到首頁")]),_:1})):u("",!0),a(s)==="recipient"?(o(),n(r,{key:1,to:"/recipient",class:"button"},{default:c(()=>[_("回到訂單")]),_:1})):u("",!0)])])}}};export{b as default};