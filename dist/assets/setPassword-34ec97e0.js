import{_ as P,h as y,m as b,i as x,r as l,b as v,c as D,k,w as B,A as S,d as e,B as _,E as m,F as q,q as F,t as I,p as M,g as N}from"./index-a6ac2222.js";import{M as V}from"./Modal-966c6659.js";/* empty css                                                              */const n=r=>(M("data-v-218f9189"),r=r(),N(),r),C={id:"container"},R={id:"all"},U=n(()=>e("div",{id:"title"},"修改密碼",-1)),E=n(()=>e("label",{for:"password1"},"新密碼",-1)),T=n(()=>e("label",{for:"password2"},"再次輸入新密碼",-1)),$=n(()=>e("input",{id:"setPassword-button",type:"submit",value:"送出修改"},null,-1)),j={__name:"setPassword",setup(r){const c=y();b().query;const f=x("config"),a=l(""),t=l(!1),u=l(""),d=l(""),w=c.currentRoute.value.params.email,h=async i=>{i.preventDefault();const s=new FormData(i.target),o=s.get("first");s.get("second");const g={email:w,password:o};if(u.value===d.value)try{(await F(g,`${f.apiUrl}/setNewPassword`)).result?(a.value=" 更改密碼成功 將自動跳轉登入畫面 ",t.value=!0,setTimeout(()=>{c.push("/Login")},2e3)):(error.value="更改密碼失敗",a.value="更改密碼失敗",t.value=!0)}catch(p){a.value="更改密碼失敗",t.value=!0,console.error("更改密碼失敗:",p)}else a.value="二次密碼不相符",t.value=!0};return(i,s)=>(v(),D(q,null,[t.value?(v(),k(V,{key:0,onClose:s[0]||(s[0]=o=>t.value=!1)},{default:B(()=>[e("p",null,I(a.value),1)]),_:1})):S("",!0),e("div",C,[e("div",R,[U,e("form",{onSubmit:h},[E,_(e("input",{type:"password",id:"setPassword-first","onUpdate:modelValue":s[1]||(s[1]=o=>u.value=o),name:"first",placeholder:"請填寫新密碼",required:""},null,512),[[m,u.value]]),T,_(e("input",{type:"password",id:"setPassword-sec","onUpdate:modelValue":s[2]||(s[2]=o=>d.value=o),name:"second",placeholder:"請再次填寫新密碼",required:""},null,512),[[m,d.value]]),$],32)])])],64))}},H=P(j,[["__scopeId","data-v-218f9189"]]);export{H as default};
