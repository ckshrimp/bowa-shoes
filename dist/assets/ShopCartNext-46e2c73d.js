import{_ as Y,i as Z,k as ee,r as n,x as q,y as te,z as oe,o as le,m as ae,b as i,c as s,d as t,B as v,C as d,G as m,I as ne,v as ie,D as $,F as R,e as z,t as h,q as J,p as se,g as re}from"./index-acee48e4.js";import{u as ue}from"./store-bb461411.js";/* empty css                                                              */const a=D=>(se("data-v-27f18506"),D=D(),re(),D),de={id:"shopCart-container"},ce={id:"all"},ve=a(()=>t("div",{id:"title"},"訂單資料",-1)),pe={id:"main"},he={key:0,id:"DetailFrame"},_e={key:0},me=a(()=>t("label",null,"尚未登入? ",-1)),ye=a(()=>t("div",null,"*為必填資料",-1)),fe={key:0,for:"email"},ge=a(()=>t("br",null,null,-1)),be=a(()=>t("label",{for:"name"},"收件人姓名 *",-1)),we=a(()=>t("br",null,null,-1)),De=a(()=>t("label",{for:"phoneNumber"},"收件人手機 *",-1)),ke=a(()=>t("br",null,null,-1)),xe=a(()=>t("label",{for:"address"},"運送地址 *",-1)),Ie={key:2,for:"birthday"},Le={key:4,for:"agree"},Me=a(()=>t("br",null,null,-1)),Se=a(()=>t("br",null,null,-1)),Ce=a(()=>t("label",{for:"payment"},"付款方式 *",-1)),Ne=a(()=>t("option",{value:"尚未選擇付款方式"},"尚未選擇付款方式",-1)),Fe=["value"],Ve=a(()=>t("label",{for:"delivery"},"運送方式 *",-1)),qe=a(()=>t("option",{value:"尚未選擇運送方式"},"尚未選擇運送方式",-1)),Ue=["value"],Pe=a(()=>t("label",{for:"remark"},"備註",-1)),Te={id:"priceFrame"},Be={id:"box"},Oe=a(()=>t("div",{id:"little"},"小計",-1)),$e={class:"priceLeft"},Re=a(()=>t("div",{id:"discount"},"折扣",-1)),ze={class:"priceLeft"},Je=a(()=>t("div",{id:"delivery"},"運送方式",-1)),Ee={class:"priceLeft"},We=a(()=>t("div",{id:"shipping"},"運費",-1)),je={class:"priceLeft"},Ae=a(()=>t("div",{id:"total"},"應付總金額",-1)),Ge={class:"priceLeft"},He={__name:"ShopCartNext",setup(D){const S=Z("config"),C=ue(),k=ee(),r=n(!1),U=n(!0),x=n(""),y=n(""),I=n("0000/00/00"),f=n(""),g=n(""),N=n(""),F=n(!1),P=n([]),V=n([]),T=n("尚未選擇運送方式"),_=n("尚未選擇付款方式"),p=n("尚未選擇運送方式"),b=n(0),c=n("無折扣"),L=n(),B=q(()=>G()),O=q(()=>H()),M=async()=>{const l=C.cartData;let e=JSON.parse(JSON.stringify(l));return console.log("%c vue拿到本地資料","color: yellow; font-weight: bold",e),e},E=async l=>{try{C.updateCartData(l),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await M())}catch{console.log("%c更新本地資料失敗","color: white; font-weight: bold")}},W=async l=>{try{C.updatePriceData(l),console.log("%c 已更新本地購物車資料","color: white; font-weight: bold",await M())}catch{console.log("%c 更新本地資料失敗","color: white; font-weight: bold")}},j=async l=>{k.push({name:"Login",query:{fromPage:"cart"}})},A=l=>{for(let e=l.length-1;e>=0;e--)if(B.value>=l[e].consumeTotal)return l[e].shippingCost};function G(){if(console.log("------------計算總金額------------"),c.value==="無折扣")return console.log("無折扣"),b.value;if(c.value==="9折")return console.log("9折"),b.value*.9;if(c.value==="8折")return console.log("8折"),b.value*.8}const H=()=>B.value+L.value,K=q(()=>r.value===!0?(console.log("進入已登入判斷"),y.value&&f.value&&g.value&&p.value!=="尚未選擇運送方式"&&_.value!=="尚未選擇付款方式"):(console.log("進入未登入判斷"),x.value&&y.value&&f.value&&I.value!=="0000/00/00"&&g.value&&p.value!=="尚未選擇運送方式"&&F.value===!0&&_.value!=="尚未選擇付款方式")),Q=async l=>{l.preventDefault();let e=await M(),o;c.value==="9折"&&(o=.9),c.value==="8折"&&(o=.8),c.value==="無折扣"&&(o=1);let w;const u={cartList:e.cartList,recipientInfo:{recipientName:y.value,recipientAddress:g.value,recipientPhoneNumber:f.value},paymentMethodID:_.value,deliveryMethodID:p.value,discount:o,shippingCost:parseFloat(L.value),totalPrice:O.value,remark:N.value};return r.value?(console.log("%c 送出的訂單資料","color: white; font-weight: bold",u),w=await J(u,`${S.apiUrl}/createOrder`)):(u.recipientInfo.recipientBirthday=I.value,u.recipientInfo.recipientEMail=x.value,console.log("%c 送出的訂單資料","color: white; font-weight: bold",u),w=await J(u,`${S.apiUrl}/createOrder`)),w.orderID!==!1?(await E([]),await W({}),_.value===2?(console.log("%c現金付款成功","color: green; font-weight: bold"),k.push({name:"Redirect",query:{pageFrom:"recipient",status:"true",payment:"現金"}})):(console.log("%c前往信用卡付款","color: green; font-weight: bold"),k.push({name:"Redirect",query:{pageFrom:"recipient",status:"true",payment:"信用卡"}}))):(console.log("%c訂單成立失敗","color: green; font-weight: bold"),k.push({name:"Redirect",query:{pageFrom:"recipient",status:"false"}}))},X=()=>{let l=V.value.find(e=>e.deliveryMethodID===p.value).methodDetail;T.value=l};return te(async()=>{oe().then(l=>{let e=l.isLogin;r.value=e,console.log("登入狀況::",e)}).catch(l=>{console.log("重新讀取")})}),le(async()=>{let{price:l}=await M(),{paymentMethod:e,deliveryMethod:o,shippingCostCondition:w}=await ae(`${S.apiUrl}/orderFormOption`);b.value=l.subTotal,c.value=l.discount,P.value=e,V.value=o;let u=A(w);console.log("計算出運費",u),L.value=u,U.value=!1}),(l,e)=>(i(),s("div",de,[t("div",ce,[ve,t("div",pe,[U.value?v("",!0):(i(),s("div",he,[r.value===!1?(i(),s("div",_e,[me,t("label",{onClick:j},"點擊登入")])):v("",!0),ye,t("div",null,[r.value===!1?(i(),s("label",fe,"信箱 *")):v("",!0),r.value===!1?d((i(),s("input",{key:1,type:"text",id:"email",name:"email","onUpdate:modelValue":e[0]||(e[0]=o=>x.value=o),placeholder:"請填寫完整信箱",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",required:""},null,512)),[[m,x.value]]):v("",!0),ge,be,d(t("input",{type:"text",id:"buyerName",name:"name","onUpdate:modelValue":e[1]||(e[1]=o=>y.value=o),placeholder:"請填寫收件人姓名",required:""},null,512),[[m,y.value]]),we,De,d(t("input",{type:"text",id:"phoneNumber",name:"phoneNumber","onUpdate:modelValue":e[2]||(e[2]=o=>f.value=o),placeholder:"請填寫手機",pattern:"^09\\d{8}$",required:""},null,512),[[m,f.value]]),ke,xe,d(t("input",{type:"text",id:"address",name:"address","onUpdate:modelValue":e[3]||(e[3]=o=>g.value=o),placeholder:"請填寫運送地址",required:""},null,512),[[m,g.value]]),r.value===!1?(i(),s("label",Ie,"生日 *")):v("",!0),r.value===!1?d((i(),s("input",{key:3,type:"date",id:"birthday",name:"birthday","onUpdate:modelValue":e[4]||(e[4]=o=>I.value=o)},null,512)),[[m,I.value]]):v("",!0),r.value===!1?(i(),s("label",Le,[d(t("input",{type:"radio",id:"agree",name:"agree","onUpdate:modelValue":e[5]||(e[5]=o=>F.value=o),value:!0,required:""},null,512),[[ne,F.value]]),ie(" 加入會員並同意會員規範,預設登入密碼為手機號碼 ")])):v("",!0),Me,Se,Ce,d(t("select",{id:"payment",name:"payment","onUpdate:modelValue":e[6]||(e[6]=o=>_.value=o),required:""},[Ne,(i(!0),s(R,null,z(P.value,o=>(i(),s("option",{key:o.paymentMethodID,value:o.paymentMethodID},h(o.paymentMethod),9,Fe))),128))],512),[[$,_.value]]),Ve,d(t("select",{id:"delivery",name:"delivery","onUpdate:modelValue":e[7]||(e[7]=o=>p.value=o),onChange:e[8]||(e[8]=o=>X(p.value)),required:""},[qe,(i(!0),s(R,null,z(V.value,o=>(i(),s("option",{key:o.deliveryMethodID,value:o.deliveryMethodID},h(o.deliveryMethod),9,Ue))),128))],544),[[$,p.value]]),Pe,d(t("input",{type:"text",id:"remark",name:"remark","onUpdate:modelValue":e[9]||(e[9]=o=>N.value=o),placeholder:"備註"},null,512),[[m,N.value]])])])),t("div",Te,[t("div",Be,[Oe,t("div",$e,h(b.value),1),Re,t("div",ze,h(c.value),1),Je,t("div",Ee,h(T.value),1),We,t("div",je,h(L.value),1),Ae,t("div",Ge,h(O.value),1)]),K.value?(i(),s("button",{key:0,id:"next",onClick:Q},"送出訂單")):v("",!0)])])])]))}},Ye=Y(He,[["__scopeId","data-v-27f18506"]]);export{Ye as default};