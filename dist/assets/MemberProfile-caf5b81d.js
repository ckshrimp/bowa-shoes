import{_ as V,i as x,h as B,r as l,y as F,z as L,o as E,j,b as c,c as f,k as A,w as G,A as h,d as e,l as q,J as z,t as r,B as w,E as I,C as J,F as R,p as T,g as Y,q as k}from"./index-a6ac2222.js";import{_ as H}from"./MemberNavBar-7bb9040c.js";import{M as K}from"./Modal-966c6659.js";import"./store-467a2af1.js";/* empty css                                                                *//* empty css                                                              */const s=g=>(T("data-v-75393e63"),g=g(),Y(),g),O={id:"memberProfile-container"},Q={id:"memberProfile-all"},W={id:"memberProfile-Frame"},X=s(()=>e("div",{id:"memberProfile-title"},"會員資料",-1)),Z=["onSubmit"],ee={class:"profile-item"},te=s(()=>e("label",{class:"item-label"},"帳號：",-1)),oe={class:"profile-item"},le=s(()=>e("label",{class:"item-label"},"電話：",-1)),ae=["disabled"],se={key:0,type:"submit"},ne={class:"profile-item"},ie=s(()=>e("label",{class:"item-label"},"姓名：",-1)),ue=["disabled"],de={key:0,type:"submit"},re={class:"profile-item"},ve=s(()=>e("label",{class:"item-label"},"性別：",-1)),ce=["disabled"],me=s(()=>e("option",{value:"男"},"男",-1)),_e=s(()=>e("option",{value:"女"},"女",-1)),pe=s(()=>e("option",{value:"其他"},"其他",-1)),be=[me,_e,pe],fe={key:0,type:"submit"},he={class:"profile-item"},ge=s(()=>e("label",{class:"item-label"},"生日：",-1)),ye={class:"profile-item"},Me=s(()=>e("label",{class:"item-label"},"地址：",-1)),$e=["disabled"],we={key:0,type:"submit"},ke={__name:"MemberProfile",setup(g){const m=x("config"),D=B(),_=l(!1),y=l(""),P=l(""),p=l(""),b=l(""),v=l(""),U=l(""),M=l(""),n=l(!1),i=l(!1),u=l(!1),d=l(!1),C=l(!1),$=o=>{o==="phone"&&(n.value=!n.value),o==="name"&&(i.value=!i.value),o==="gender"&&(u.value=!u.value),o==="address"&&(d.value=!d.value)},S=o=>{const t=new Date(o);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},N=async()=>{let o;if(C.value){if(n.value&&(console.log({phoneNumber:p.value}),o=await k({phoneNumber:p.value},`${m.apiUrl}/changeMemberInfo`),n.value=!n.value),i.value&&(console.log({name:b.value}),o=await k({name:b.value},`${m.apiUrl}/changeMemberInfo`),i.value=!i.value),u.value){let t;v.value==="男"&&(t="男"),v.value==="女"&&(t="女"),v.value==="其他"&&(t="其他"),o=await k({gender:t},`${m.apiUrl}/changeMemberInfo`),u.value=!u.value}d.value&&(o=await k({address:M.value},`${m.apiUrl}/changeMemberInfo`),d.value=!d.value),o.result===!0&&(y.value="修改成功",_.value=!0),o.result===!1&&(y.value="修改失敗",_.value=!0);return}C.value||(y.value="修改失敗",_.value=!0,D.push({path:"/"}))};return F(async()=>{L().then(o=>{let t=o.isLogin;C.value=t,console.log("%c 登入狀況::","color: red; font-weight: bold",t)}).catch(o=>{console.log("重新讀取")})}),E(async()=>{try{let o=await j(`${m.apiUrl}/memberCenter`);P.value=o.email,p.value=o.phoneNumber,b.value=o.name,v.value=o.gender,U.value=S(o.birthday),M.value=o.address}catch{console.error()}}),(o,t)=>(c(),f(R,null,[_.value?(c(),A(K,{key:0,onClose:t[0]||(t[0]=a=>_.value=!1)},{default:G(()=>[e("p",null,r(y.value),1)]),_:1})):h("",!0),e("div",O,[e("div",Q,[q(H),e("div",W,[X,e("form",{id:"memberProfile-profile",onSubmit:z(N,["prevent"])},[e("div",ee,[te,e("span",null,r(P.value),1)]),e("div",oe,[le,w(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),disabled:!n.value},null,8,ae),[[I,p.value]]),e("button",{type:"button",onClick:t[2]||(t[2]=a=>$("phone"))},r(n.value?"取消":"修改"),1),n.value?(c(),f("button",se,"保存")):h("",!0)]),e("div",ne,[ie,w(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>b.value=a),disabled:!i.value},null,8,ue),[[I,b.value]]),e("button",{type:"button",onClick:t[4]||(t[4]=a=>$("name"))},r(i.value?"取消":"修改"),1),i.value?(c(),f("button",de,"保存")):h("",!0)]),e("div",re,[ve,w(e("select",{"onUpdate:modelValue":t[5]||(t[5]=a=>v.value=a),disabled:!u.value},be,8,ce),[[J,v.value]]),e("button",{type:"button",onClick:t[6]||(t[6]=a=>$("gender"))},r(u.value?"取消":"修改"),1),u.value?(c(),f("button",fe,"保存")):h("",!0)]),e("div",he,[ge,e("span",null,r(U.value),1)]),e("div",ye,[Me,w(e("input",{"onUpdate:modelValue":t[7]||(t[7]=a=>M.value=a),disabled:!d.value},null,8,$e),[[I,M.value]]),e("button",{type:"button",onClick:t[8]||(t[8]=a=>$("address"))},r(d.value?"取消":"修改"),1),d.value?(c(),f("button",we,"保存")):h("",!0)])],40,Z)])])])],64))}},Ne=V(ke,[["__scopeId","data-v-75393e63"]]);export{Ne as default};
