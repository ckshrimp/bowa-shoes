import{_ as D,l as S,m as C,i as L,r as _,s as k,b as m,c as x,j as N,w as c,A as q,d as o,k as f,F as I,q as V,t as B,v as g,p as F,g as z,D as J}from"./index-e6bdfac7.js";import{u as M}from"./store-b01a15ce.js";import{M as P}from"./Modal-d1992967.js";/* empty css                                                              */const T=r=>(F("data-v-21b3b34a"),r=r(),z(),r),$={id:"container"},j={id:"all"},O=T(()=>o("div",{id:"title"},"會員登入",-1)),R=J('<label for="email" data-v-21b3b34a>信箱</label><input type="text" id="email" name="email" placeholder="請填完整信箱" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" required data-v-21b3b34a><label for="password" data-v-21b3b34a>密碼</label><input type="password" id="password" name="password" placeholder="請填完整密碼" data-v-21b3b34a><input id="Login-button" type="submit" value="登入" data-v-21b3b34a>',5),A=[R],E={id:"other"},U={__name:"Login",setup(r){S();const i=C().query,v=L("config"),d=M(),s=_(""),a=_(!1),u=async()=>{const e=d.cartData;let t=JSON.parse(JSON.stringify(e));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",t),t},b=async e=>{try{d.updateCartData(e),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await u())}catch(t){console.log("%c 更新本地資料失敗","color: white; font-weight: bold",t)}},w=async e=>{e.preventDefault();const t=new FormData(e.target),n=t.get("email"),p=t.get("password"),h=await u(),y={email:n,password:p,cartList:h.cartList};try{const l=await V(y,`${v.apiUrl}/login`);l.result?(await b(l.cartList),console.log("檢查是否有query::",i.fromPage),i.fromPage==="cart"?(s.value="登入成功 自動跳轉到購物車",a.value=!0,setTimeout(()=>{window.location.href="/shopCart"},2e3)):(s.value="登入成功 自動跳轉到會員中心",a.value=!0,setTimeout(()=>{window.location.href="/memberCenter"},2e3))):(error.value="登入失敗，請檢查信箱和密碼",s.value="登入失敗請重新登入",a.value=!0)}catch(l){s.value="登入失敗請重新登入",a.value=!0,console.error("處理登入時出現錯誤:",l)}};return(e,t)=>{const n=k("router-link");return m(),x(I,null,[a.value?(m(),N(P,{key:0,onClose:t[0]||(t[0]=p=>a.value=!1)},{default:c(()=>[o("p",null,B(s.value),1)]),_:1})):q("",!0),o("div",$,[o("div",j,[O,o("form",{onSubmit:w},A,32),o("div",E,[f(n,{to:"/register"},{default:c(()=>[g("註冊")]),_:1}),f(n,{to:"/forgetPassword"},{default:c(()=>[g("忘記密碼")]),_:1})])])])],64)}}},X=D(U,[["__scopeId","data-v-21b3b34a"]]);export{X as default};
