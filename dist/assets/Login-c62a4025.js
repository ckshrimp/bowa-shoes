import{_ as b,k as v,l as y,i as S,E as D,b as L,c as x,d as c,h as l,w as p,q as C,v as u,p as N,g as k,j as q}from"./index-acee48e4.js";import{u as I}from"./store-bb461411.js";const V=e=>(N("data-v-df09dcb7"),e=e(),k(),e),z={id:"container"},B={id:"all"},J=V(()=>c("div",{id:"title"},"會員登入",-1)),R=q('<label for="email" data-v-df09dcb7>信箱</label><input type="text" id="email" name="email" placeholder="請填完整信箱" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" required data-v-df09dcb7><label for="password" data-v-df09dcb7>密碼</label><input type="password" id="password" name="password" placeholder="請填完整密碼" data-v-df09dcb7><input id="Login-button" type="submit" value="登入" data-v-df09dcb7>',5),j=[R],E={id:"other"},F={__name:"Login",setup(e){const r=v(),n=y().query,_=S("config"),d=I(),i=async()=>{const o=d.cartData;let t=JSON.parse(JSON.stringify(o));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",t),t},f=async o=>{try{d.updateCartData(o),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await i())}catch(t){console.log("%c 更新本地資料失敗","color: white; font-weight: bold",t)}},g=async o=>{o.preventDefault();const t=new FormData(o.target),a=t.get("email"),h=t.get("password"),m=await i(),w={email:a,password:h,cartList:m.cartList};try{const s=await C(w,`${_.apiUrl}/login`);s.result?(await f(s.cartList),console.log("檢查是否有query::",n.fromPage),n.fromPage==="cart"?(console.log("導到購物車"),r.push("/shopCart")):(console.log("導到首頁"),r.push("/"))):error.value="登入失敗，請檢查信箱和密碼"}catch(s){console.error("處理登入時出現錯誤:",s)}};return(o,t)=>{const a=D("router-link");return L(),x("div",z,[c("div",B,[J,c("form",{onSubmit:g},j,32),c("div",E,[l(a,{to:"/Register"},{default:p(()=>[u("註冊")]),_:1}),l(a,{to:"/product"},{default:p(()=>[u("忘記密碼")]),_:1})])])])}}},T=b(F,[["__scopeId","data-v-df09dcb7"]]);export{T as default};