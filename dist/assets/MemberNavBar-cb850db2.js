/* empty css                                                                */import{r as i,E as u,b as m,c as v,d as t,v as e,h as s,w as n,f as b}from"./index-acee48e4.js";const _={id:"MemberNav-nav"},d=t("i",{class:"fa fa-bars"},null,-1),f=t("div",{class:"logout MemberNav-button"},"登出",-1),g={__name:"MemberNavBar",setup(M){const a=i(!1),r=()=>{a.value=!a.value},l=c=>{a.value=!1};return(c,N)=>{const o=u("router-link");return m(),v("div",_,[t("div",{class:"menu-toggle MemberNav-button",onClick:r},[e(" 會員服務 "),d]),t("ul",{id:"MemberNav-navList",class:b({active:a.value})},[t("div",{class:"MemberNav-button goBack",onClick:l}," X"),s(o,{to:"/memberCenter",class:"center MemberNav-button"},{default:n(()=>[e("會員中心")]),_:1}),s(o,{to:"/memberProfile",class:"detail MemberNav-button"},{default:n(()=>[e("會員資料")]),_:1}),s(o,{to:"/memberFavor",class:"favor MemberNav-button"},{default:n(()=>[e("我的收藏")]),_:1}),s(o,{to:"/recipient",class:"recipient MemberNav-button"},{default:n(()=>[e("我的訂單")]),_:1}),f],2)])}}};export{g as _};
