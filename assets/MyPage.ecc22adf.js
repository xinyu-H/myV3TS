import{r as d,d as F,c as a,b as e,u as r,F as v,e as f,o as n,g as _,t as y,p as C,k as E,i as k,a as A,j as I}from"./index.5d5453c2.js";import{_ as B}from"./houcdc0426e.js";const D=d([{name:"\u64CD\u4F5C\u624B\u518C",icon:"orders-o",path:""},{name:"\u6D88\u606F\u901A\u77E5",icon:"chat-o",path:""},{name:"\u4E8C\u7EF4\u7801",icon:"qr",path:"/QrPage"}]),P=""+new URL("7.df5d4187.jpg",import.meta.url).href,p=t=>(C("data-v-38e7b47e"),t=t(),E(),t),b={class:"myPage"},w={class:"header_top"},S={class:"header_top_left"},x=["src"],M=p(()=>e("div",{class:"header_top_right"},[e("p",null,"\u5B66\u53F7\uFF1A123456"),e("p",null,"\u4F59\u989D\uFF1A660")],-1)),$=p(()=>e("div",{class:"header_bottom"},[e("p",null,"\u8F6F\u4EF6\u5DE5\u7A0B\u4E13\u4E1A\uFF08\u516D\uFF09\u73ED")],-1)),j={class:"myPage_item"},L=["onClick"],U=F({__name:"MyPage",setup(t){const u=k("$Utils");let c=d(P);function m(s){if(!s.path)return u.Message.showToast("\u6682\u672A\u5F00\u901A\u6B64\u6A21\u5757");A.push(s.path)}async function h(){await u.Tools.uploadImg(s=>{c.value=s})}return(s,i)=>{const l=I("van-icon");return n(),a("div",b,[e("header",null,[e("div",w,[e("div",S,[e("img",{src:r(c),alt:"",onClick:i[0]||(i[0]=o=>h())},null,8,x)]),M]),$]),e("div",j,[(n(!0),a(v,null,f(r(D),(o,g)=>(n(),a("div",{key:g,class:"",onClick:N=>m(o)},[_(l,{name:o.icon,size:"22",class:"icon1"},null,8,["name"]),e("span",null,y(o.name),1),_(l,{name:"arrow",class:"icon2"})],8,L))),128))])])}}});const q=B(U,[["__scopeId","data-v-38e7b47e"]]);export{q as default};
