import{a as I,j as d,n as K,o as i,c as _,e as k,t as g,u as S,k as C,b as A,w as F,F as x,l as D,p as b,r as q,q as H,v as L,x as N,y as M,z as V,A as w}from"./index.7050c2e0.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";const W=n=>(L("data-v-4bc4139d"),n=n(),N(),n),j=W(()=>C("h3",null,"\u5B59\u7EC4\u4EF6",-1)),z={class:"scrollDiv"},U={class:"scrollDivC"},G=I({__name:"PageBChildChild",setup(n){const u=d([{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]},{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]},{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]}]);let s=0,m=0,v=0;function p(o){c(o)}K(()=>{c(0)});function c(o){m=0,v=0;let e=document.querySelectorAll(".scrollDiv")[o],t=e.querySelector(".scrollDivC").querySelector("div");e.scrollTop=0,clearInterval(s),s=setInterval(()=>{e&&(m=e.scrollTop,e.scrollTop++,v=e.scrollTop,m===v&&(u.value[o].list.push(u.value[o].list.shift()),console.log("\u89E6\u5E95",e.scrollTop),e.scrollTop=e.scrollTop-t.offsetHeight))},30)}const B=b("ageKey"),f=b("nameKey");b("updateNameKey");const h=d(0);d(!1);const y=d();function E(){h.value++,y.value.setActiveItem(h.value%4)}return(o,e)=>{const a=q("el-carousel-item"),t=q("el-carousel");return i(),_("div",null,[j,k(" "+g(S(f))+" -- "+g(S(B))+" ",1),C("button",{onClick:e[0]||(e[0]=r=>E())},"updateData"),A(t,{height:"200px",autoplay:!0,interval:1e4,loop:!0,ref_key:"carousel",ref:y,onChange:p},{default:F(()=>[(i(!0),_(x,null,D(u.value,(r,l)=>(i(),H(a,{name:l.toString()},{default:F(()=>[C("div",z,[C("div",U,[(i(!0),_(x,null,D(r.list,(T,ee)=>(i(),_("div",{key:l},g(T.name),1))),128))])])]),_:2},1032,["name"]))),256))]),_:1},512)])}}});const J=$(G,[["__scopeId","data-v-4bc4139d"]]),P=n=>(L("data-v-86b344e0"),n=n(),N(),n),O=P(()=>C("h3",null,"\u5B50\u7EC4\u4EF6",-1)),Q=P(()=>C("span",{style:{"font-size":"1.3vw"}},"\u554A\u554A\u662F",-1)),R={class:"news"},X=["innerHTML"],Y=I({__name:"PageBChild",setup(n){let u,s=0,m=0;function v(){K(()=>{const e=document.querySelector(".news"),a=e.querySelectorAll("div")[0];clearInterval(u),!(a.offsetHeight<e.offsetHeight)&&(u=setInterval(()=>{if(e&&(s=e.scrollTop,e.scrollTop++,m=e.scrollTop,s===m)){const t=a.querySelectorAll("p")[0];a.removeChild(t),a.appendChild(t)}},30))})}d(!1);const p=b("ageKey"),c=b("nameKey");let B=/\p{Unified_Ideograph}/u,f=0,h="\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A<br/>1.\u7981\u6B62<br/>2.<br/>3.<br/>",y=h.split("<br/>"),E=[];const o=d([]);return M(()=>{var a;clearInterval(u);for(let t=0;t<h.length;t++)if(B.test(h[t])){let r=document.querySelector(".news"),l=document.createElement("span");l.innerHTML=h[t],l.style.fontSize="1.5vw",l.style.opacity="0",l.setAttribute("class","span"),(a=document.querySelector("body"))==null||a.appendChild(l);let T=document.querySelector(".span");f=Math.floor((r==null?void 0:r.offsetWidth)/(T==null?void 0:T.offsetWidth));break}console.log(f),y.forEach(t=>{E.push(Math.ceil(t.length/f))}),E.forEach((t,r)=>{for(let l=0;l<t;l++)o.value.push(y[r].substr(l*f,f))});let e=[];o.value.forEach(t=>{e.push(t.replace(/ /g,"&nbsp;"))}),o.value=e,v()}),(e,a)=>(i(),_("div",null,[O,k(" "+g(S(c))+" -- "+g(S(p))+" ",1),Q,C("div",R,[C("div",null,[(i(!0),_(x,null,D(o.value,(t,r)=>(i(),_("p",{innerHTML:t},null,8,X))),256))])]),A(J)]))}});const Z=$(Y,[["__scopeId","data-v-86b344e0"]]),ue=I({__name:"PageB",setup(n){const u=d(23),s=d("\u4FAF\u65B0\u5B87");w("ageKey",u),w("nameKey",s),w("updateNameKey",m);function m(p){s.value=s.value+p}V(p=>{const c=setTimeout(()=>{console.log("\u6267\u884C setTimeout")},1e3);p(()=>{clearTimeout(c)})});function v(){u.value++}return(p,c)=>(i(),_("div",null,[k(g(s.value)+" -- "+g(u.value)+" ",1),C("button",{onClick:c[0]||(c[0]=B=>v())},"clickWatchEffect"),A(Z)]))}});export{ue as default};
