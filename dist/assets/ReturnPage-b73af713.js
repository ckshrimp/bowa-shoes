import{i as E,h as H,m as O,r as n,L as j,o as x,q,s as Y,b as p,c as h,k as G,w as F,A as N,d as e,l as J,t as r,u as V,F as w,e as K,B as o,E as f,M,v as I,D as Q,f as W,N as X}from"./index-10037a5e.js";import"./store-a05e07ad.js";import{M as Z}from"./Modal-e3383a26.js";/* empty css                                                                *//* empty css                                                              */const ee=["id"],te={id:"returnPage-container"},ae={id:"returnPage-all"},re={class:"returnPage-title"},se={id:"returnPage-main-detail-frame"},ne={class:"returnPage-main-detail"},le={class:"returnPage-main-detail"},oe={class:"returnPage-main-detail"},ue={class:"returnPage-main-detail"},ie={class:"returnPage-main-detail"},de={class:"returnPage-main-detail"},ce={class:"returnPage-main-detail"},ve={class:"returnPage-main-detail"},ge={class:"returnPage-main-detail-big"},pe=Q('<div class="returnPage-title">訂單資料</div><div class="returnPage-frame-header"><div class="returnPage-detail returnPage-detail-header returnPage-radius"></div><div class="returnPage-detail returnPage-detail-header returnPage-ID">商品名稱</div><div class="returnPage-detail returnPage-detail-header returnPage-price">單價</div><div class="returnPage-detail returnPage-detail-header returnPage-count">數量</div><div class="returnPage-detail returnPage-detail-header returnPage-total">總價</div></div>',2),_e={class:"returnPage-detail returnPage-detail-header returnPage-radius"},me=["value","disabled"],Pe={class:"returnPage-detail returnPage-ID"},he={class:"returnPage-productName"},fe={class:"returnPage-productSize"},be={class:"returnPage-detail returnPage-price"},ye={class:"returnPage-detail returnPage-count"},De={class:"returnPage-detail returnPage-total"},ke=e("div",{class:"returnPage-title"},"退貨資訊",-1),Re={class:"returnPage-form"},qe=e("label",{class:"returnPage-input-title"},"退貨原因",-1),Fe=e("label",{class:"returnPage-input-title"},"銀行代碼",-1),Ne=e("label",{class:"returnPage-input-title"},"退款戶名",-1),Ve=e("label",{class:"returnPage-input-title"},"退款帳號",-1),we={class:"returnPage-input-title"},Ue={__name:"ReturnPage",setup(Me){const D=E("config"),k=H(),C=O(),R=n(!1),S=n(""),b=n(!1),l=n({}),y=n([]),u=n(null),i=n([]),d=n(""),c=n(""),v=n(""),g=n(""),_=n(!1),m=C.params.id,$=(s,t)=>s*t,B=s=>{const t=new Date(s);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},U=s=>{const t=new Date(s);return`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`},T=async()=>{let s,t=i.value.map(a=>({productSizeID:a.productSizeID,quantity:a.quantity})),P={orderID:m,reason:d.value,refundInfo:{bankCode:c.value,refundAccountName:v.value,refundAccount:g.value},productList:t};console.log("送出的資料",P);try{return s=await q(P,`${D.apiUrl}/returnOrderProduct`),s.result?k.push({name:"Redirect",query:{pageFrom:"return",status:"true"}}):k.push({name:"Redirect",query:{pageFrom:"return",status:"false"}})}catch{console.log("失敗")}},z=()=>{u.value&&u.value.scrollTo({top:u.value.scrollHeight,behavior:"smooth"})};j([d,c,v,g,_,i],async()=>{b.value=A()&&i.value.length>0,b.value===!0&&(await X(),z())});const A=()=>d.value.trim()!==""&&c.value.trim()!==""&&v.value.trim()!==""&&g.value.trim()!==""&&_.value;return x(async()=>{let s;try{s=await q({orderID:m},`${D.apiUrl}/orderDetail`),l.value=s.orderInfo,y.value=s.productList,console.log(y.value)}catch(t){console.error("%c 讀取訂單失敗::::::Error:::","color: red; font-weight: bold",t)}u.value=n("messageFrame")}),(s,t)=>{const P=Y("router-link");return p(),h(w,null,[R.value?(p(),G(Z,{key:0,onClose:t[0]||(t[0]=a=>R.value=!1)},{default:F(()=>[e("p",null,r(S.value),1)]),_:1})):N("",!0),e("section",{id:V(m)},[e("div",te,[e("div",ae,[J(P,{to:"/recipient",class:"returnPage-button"},{default:F(()=>[I("回到訂單")]),_:1}),e("div",{id:"returnPage-Big-Frame",ref_key:"messageFrame",ref:u},[e("div",re,"訂單編號 "+r(V(m)),1),e("div",se,[e("div",ne,"訂單日期: "+r(B(l.value.orderDate))+" "+r(U(l.value.orderDate)),1),e("div",le,"收件人: "+r(l.value.recipientName),1),e("div",oe,"收件地址: "+r(l.value.recipientAddress),1),e("div",ue,"收件電話: "+r(l.value.recipientPhoneNumber),1),e("div",ie,"運送方式: "+r(l.value.deliveryMethod),1),e("div",de,"訂單狀態: "+r(l.value.orderStatus),1),e("div",ce,"付款方式: "+r(l.value.paymentMethod),1),e("div",ve,"總金額: "+r(l.value.total)+" 元",1),e("div",ge,"備註: "+r(l.value.orderRemark),1)]),pe,(p(!0),h(w,null,K(y.value,a=>(p(),h("div",{class:W(["returnPage-frame",{"returnPage-disabled":a.isReturn===1}]),key:a},[e("div",_e,[o(e("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=L=>i.value=L),value:a,disabled:a.isReturn===1},null,8,me),[[M,i.value]])]),e("div",Pe,[e("div",he,r(a.productName),1),e("div",fe,"尺寸:"+r(a.productSize),1)]),e("div",be,r(a.currentprice)+"元",1),e("div",ye,r(a.quantity),1),e("div",De,r($(a.currentprice,a.quantity))+"元",1)],2))),128)),ke,e("div",Re,[qe,o(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>d.value=a),class:"returnPage-input",placeholder:"請填寫退貨原因",required:""},null,512),[[f,d.value]]),Fe,o(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>c.value=a),class:"returnPage-input",placeholder:"請填寫銀行代碼3碼",pattern:"\\d{3}",required:""},null,512),[[f,c.value]]),Ne,o(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>v.value=a),class:"returnPage-input",placeholder:"請填寫帳戶姓名",required:""},null,512),[[f,v.value]]),Ve,o(e("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>g.value=a),class:"returnPage-input",placeholder:"請填寫帳戶帳號",required:""},null,512),[[f,g.value]]),e("label",we,[o(e("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=a=>_.value=a),required:""},null,512),[[M,_.value]]),I(" 同意規定 ")]),b.value?(p(),h("button",{key:0,class:"returnPage-send-button",onClick:T},"送出退貨")):N("",!0)])],512)])])],8,ee)],64)}}};export{Ue as default};
