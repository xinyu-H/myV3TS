import{a as I,l as g,n as N,o as v,c as m,e as l,t as y,u as S,k as e,F as V,q as D,b as A,w as C,v as M,x as q,r as k,p as H,j as K,y as W,z as x}from"./index.305a4749.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";const u=p=>(H("data-v-4726f1f4"),p=p(),K(),p),P=u(()=>e("h3",null,"\u5B50\u7EC4\u4EF6",-1)),z=u(()=>e("span",{style:{"font-size":"1.3vw"}},"\u554A\u554A\u662F",-1)),U={class:"news"},$=["innerHTML"],G={class:"print-info",ref:"print",id:"printto"},J=u(()=>e("h2",null,"\u8BBF\u5BA2\u5355",-1)),O={class:"pboxs"},Q={class:"ptitle"},R=u(()=>e("span",null,"\u8BBF\u5BA2\u4FE1\u606F",-1)),X=u(()=>e("p",null,[e("span",null,"\u6765\u8BBF\u4EBA\uFF1A"),l('"\u672A\u586B"')],-1)),Y=u(()=>e("p",null,[e("span",null,"\u6027\u522B\uFF1A"),l('"\u672A\u586B" ')],-1)),Z=u(()=>e("p",null,[e("span",null,"\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"),l('"\u672A\u586B" ')],-1)),ee=u(()=>e("p",null,[e("span",null,"\u8054\u7CFB\u65B9\u5F0F\uFF1A"),l('"\u672A\u586B" ')],-1)),te=u(()=>e("p",null,[e("span",null,"\u6765\u8BBF\u5355\u4F4D\uFF1A"),l('"\u672A\u586B" ')],-1)),ue=u(()=>e("p",null,[e("span",null,"\u643A\u5E26\u7269\u54C1\uFF1A"),l('"\u672A\u586B"')],-1)),le={class:"pboxs"},se={class:"ptitle"},oe=u(()=>e("span",null,"\u8BBF\u95EE\u4FE1\u606F",-1)),ne=u(()=>e("p",null,[e("span",null,"\u88AB\u8BBF\u4EBA\uFF1A"),l('"\u672A\u586B"')],-1)),ae=u(()=>e("p",null,[e("span",null,"\u8054\u7CFB\u65B9\u5F0F\uFF1A"),l('"\u672A\u586B" ')],-1)),ce=u(()=>e("p",null,[e("span",null,"\u5F00\u59CB\u65F6\u95F4\uFF1A"),l('"\u672A\u586B"')],-1)),ie=u(()=>e("p",null,[e("span",null,"\u7ED3\u675F\u65F6\u95F4\uFF1A"),l('"\u672A\u586B"')],-1)),re={class:"qrcode",style:{display:"flex","justify-content":"center"}},de={id:"qrcode",ref:"qrcode"},pe=u(()=>e("div",{style:{width:"100%",height:"40px"}},null,-1)),_e=I({__name:"PageBChild",setup(p){let a,c=0,f=0;function E(){M(()=>{const o=document.querySelector(".news"),n=o.querySelectorAll("div")[0];clearInterval(a),!(n.offsetHeight<o.offsetHeight)&&(a=setInterval(()=>{if(o&&(c=o.scrollTop,o.scrollTop++,f=o.scrollTop,c===f)){const t=n.querySelectorAll("p")[0];n.removeChild(t),n.appendChild(t)}},30))})}const i=g(!1),d=q("ageKey"),b=q("nameKey");let L=/\p{Unified_Ideograph}/u,_=0,h="\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A<br/>1.\u7981\u6B62<br/>2.<br/>3.<br/>",T=h.split("<br/>"),w=[];const F=g([]);return N(()=>{var n;clearInterval(a);for(let t=0;t<h.length;t++)if(L.test(h[t])){let r=document.querySelector(".news"),s=document.createElement("span");s.innerHTML=h[t],s.style.fontSize="1.5vw",s.style.opacity="0",s.setAttribute("class","span"),(n=document.querySelector("body"))==null||n.appendChild(s);let B=document.querySelector(".span");_=Math.floor((r==null?void 0:r.offsetWidth)/(B==null?void 0:B.offsetWidth));break}console.log(_),T.forEach(t=>{w.push(Math.ceil(t.length/_))}),w.forEach((t,r)=>{for(let s=0;s<t;s++)F.value.push(T[r].substr(s*_,_))});let o=[];F.value.forEach(t=>{o.push(t.replace(/ /g,"&nbsp;"))}),F.value=o,E()}),(o,n)=>{const t=k("font"),r=k("el-dialog");return v(),m("div",null,[P,l(" "+y(S(b))+" -- "+y(S(d))+" ",1),z,e("div",U,[e("div",null,[(v(!0),m(V,null,D(F.value,(s,B)=>(v(),m("p",{innerHTML:s},null,8,$))),256))])]),A(r,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s)},{default:C(()=>[e("div",G,[J,e("div",O,[e("p",Q,[A(t,null,{default:C(()=>[l("|")]),_:1}),l(),R]),X,Y,Z,ee,te,ue]),e("div",le,[e("p",se,[A(t,null,{default:C(()=>[l("|")]),_:1}),oe]),ne,ae,ce,ie]),e("div",re,[e("div",de,null,512)]),pe],512)]),_:1},8,["modelValue"])])}}});const fe=j(_e,[["__scopeId","data-v-4726f1f4"]]),Be=I({__name:"PageB",setup(p){const a=g(23),c=g("\u4FAF\u65B0\u5B87");x("ageKey",a),x("nameKey",c),x("updateNameKey",f);function f(i){c.value=c.value+i}W(i=>{const d=setTimeout(()=>{console.log("\u6267\u884C setTimeout")},1e3);i(()=>{clearTimeout(d)})});function E(){a.value++}return(i,d)=>(v(),m("div",null,[l(y(c.value)+" -- "+y(a.value)+" ",1),e("button",{onClick:d[0]||(d[0]=b=>E())},"clickWatchEffect"),A(fe)]))}});export{Be as default};
