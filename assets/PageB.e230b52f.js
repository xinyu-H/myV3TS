import{d as x,r as p,n as P,o as i,c as _,x as D,t as E,u as b,b as C,g as I,w as k,F as S,e as w,i as H,s as B,h as q,p as K,q as L,m as M,G as V,H as T}from"./index.44a9e657.js";import{_ as N}from"./aaacdc0426e.js";const W=n=>(K("data-v-571cc5b5"),n=n(),L(),n),j=W(()=>C("h3",null,"\u5B59\u7EC4\u4EF6",-1)),z={class:"scrollDiv"},G={class:"scrollDivC"},U=x({__name:"PageBChildChild",setup(n){const l=p([{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]},{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]},{list:[{name:"\u54C8\u54C81"},{name:"\u54C8\u54C82"},{name:"\u54C8\u54C83"},{name:"\u54C8\u54C84"},{name:"\u54C8\u54C85"},{name:"\u54C8\u54C86"},{name:"\u54C8\u54C87"},{name:"\u54C8\u54C88"},{name:"\u54C8\u54C89"},{name:"\u54C8\u54C810"}]}]);let s=0,m=0,f=0;function d(a){c(a)}P(()=>{c(0)});function c(a){m=0,f=0;let e=document.querySelectorAll(".scrollDiv")[a],u=e.querySelector(".scrollDivC").querySelector("div");e.scrollTop=0,clearInterval(s),s=setInterval(()=>{e&&(m=e.scrollTop,e.scrollTop++,f=e.scrollTop,m===f&&(l.value[a].list.push(l.value[a].list.shift()),e.scrollTop=e.scrollTop-u.offsetHeight))},30)}const g=B("ageKey"),v=B("nameKey");B("updateNameKey");const h=p(0);p(!1);const F=p();function y(){h.value++,F.value.setActiveItem(h.value%4)}return(a,e)=>{const o=q("el-carousel-item"),u=q("el-carousel");return i(),_("div",null,[j,D(" "+E(b(v))+" -- "+E(b(g))+" ",1),C("button",{onClick:e[0]||(e[0]=r=>y())},"updateData"),I(u,{height:"200px",autoplay:!0,interval:1e4,loop:!0,ref_key:"carousel",ref:F,onChange:d},{default:k(()=>[(i(!0),_(S,null,w(l.value,(r,t)=>(i(),H(o,{name:t.toString()},{default:k(()=>[C("div",z,[C("div",G,[(i(!0),_(S,null,w(r.list,(A,ee)=>(i(),_("div",{key:t},E(A.name),1))),128))])])]),_:2},1032,["name"]))),256))]),_:1},512)])}}});const J=N(U,[["__scopeId","data-v-571cc5b5"]]),$=n=>(K("data-v-e9a09f1b"),n=n(),L(),n),O=$(()=>C("h3",null,"\u5B50\u7EC4\u4EF6",-1)),Q=$(()=>C("span",{style:{"font-size":"1.3vw"}},"\u554A\u554A\u662F",-1)),R={class:"news"},X=["innerHTML"],Y=x({__name:"PageBChild",setup(n){let l,s=0,m=0;function f(){P(()=>{const e=document.querySelector(".news"),o=e.querySelectorAll("div")[0];clearInterval(l),!(o.offsetHeight<e.offsetHeight)&&(l=setInterval(()=>{if(e&&(s=e.scrollTop,e.scrollTop++,m=e.scrollTop,s===m)){const u=o.querySelectorAll("p")[0];o.removeChild(u),o.appendChild(u)}},30))})}p(!1);const d=B("ageKey"),c=B("nameKey");let g=/\p{Unified_Ideograph}/u,v=0,h="\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\uFF1A<br/>1.\u7981\u6B62\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A\u9884\u7EA6\u8BA2\u9910\u6CE8\u610F\u4E8B\u9879\uFF1A<br/>2.<br/>3.<br/>",F=h.split("<br/>"),y=[];const a=p([]);return M(()=>{var o;clearInterval(l);for(let u=0;u<h.length;u++)if(g.test(h[u])){let r=document.querySelector(".news"),t=document.createElement("span");t.innerHTML=h[u],t.style.fontSize="1.5vw",t.style.opacity="0",t.setAttribute("class","span"),(o=document.querySelector("body"))==null||o.appendChild(t);let A=document.querySelector(".span");v=Math.floor((r==null?void 0:r.offsetWidth)/(A==null?void 0:A.offsetWidth));break}console.log(v),F.forEach(u=>{y.push(Math.ceil(u.length/v))}),y.forEach((u,r)=>{for(let t=0;t<u;t++)a.value.push(F[r].substr(t*v,v))});let e=[];a.value.forEach(u=>{e.push(u.replace(/ /g,"&nbsp;"))}),a.value=e,f()}),(e,o)=>(i(),_("div",null,[O,D(" "+E(b(c))+" -- "+E(b(d))+" ",1),Q,C("div",R,[C("div",null,[(i(!0),_(S,null,w(a.value,(u,r)=>(i(),_("p",{innerHTML:u},null,8,X))),256))])]),I(J,{ref:"PageBChildChildVuePage"},null,512)]))}});const Z=N(Y,[["__scopeId","data-v-e9a09f1b"]]),le=x({__name:"PageB",setup(n){const l=p(23),s=p("\u4FAF\u65B0\u5B87");T("ageKey",l),T("nameKey",s),T("updateNameKey",m);function m(d){s.value=s.value+d}V(d=>{const c=setTimeout(()=>{console.log("\u6267\u884C setTimeout")},1e3);d(()=>{clearTimeout(c)})});function f(){l.value++}return(d,c)=>(i(),_("div",null,[D(E(s.value)+" -- "+E(l.value)+" ",1),C("button",{onClick:c[0]||(c[0]=g=>f())},"clickWatchEffect"),I(Z)]))}});export{le as default};
