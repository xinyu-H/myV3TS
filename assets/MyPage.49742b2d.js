import{r as a,d as e,c as s,b as t,u as n,F as o,e as l,o as c,g as r,m as i,t as p,p as d,k as m,i as u,a as g,M as h,U as _,j as f}from"./index.f60f425d.js";import{_ as v}from"./houcdc0426e.js";const y=a([{name:"操作手册",icon:"orders-o",path:"",type:"page"},{name:"消息通知",icon:"chat-o",path:"",type:"page"},{name:"二维码",icon:"qr",path:"/QrPage",type:"page"},{name:"退出登录",icon:"back-top",type:"button",rotate:"rotate(-90deg)"}]),b=""+new URL("7.f8a047c3.jpg",import.meta.url).href,k=a=>(d("data-v-d9c2b673"),a=a(),m(),a),j={class:"myPage"},w={class:"header_top"},P={class:"header_top_left"},x=["src"],C=k((()=>t("div",{class:"header_top_right"},[t("p",null,"学号：123456"),t("p",null,"余额：660")],-1))),I=k((()=>t("div",{class:"header_bottom"},[t("p",null,"软件工程专业（六）班")],-1))),M={class:"myPage_item"},T=["onClick"],U=v(e({__name:"MyPage",setup(e){const d=u("$Utils");let m=a(b);return(a,e)=>{const u=f("van-icon");return c(),s("div",j,[t("header",null,[t("div",w,[t("div",P,[t("img",{src:n(m),alt:"",onClick:e[0]||(e[0]=a=>async function(){await d.Tools.uploadImg((a=>{m.value=a}))}())},null,8,x)]),C]),I]),t("div",M,[(c(!0),s(o,null,l(n(y),((a,e)=>(c(),s("div",{key:e,class:"",onClick:e=>function(a){if("page"===a.type){if(!a.path)return d.Message.showToast("暂未开通此模块");g.push(a.path)}else"退出登录"===a.name&&h.alertToast("确定要退出登录吗？",!0).then((a=>{a&&_.cleraSessionItem(),g.go(0)}))}(a)},[r(u,{name:a.icon,size:"22",class:"icon1",style:i(`transform:${a.rotate}`)},null,8,["name","style"]),t("span",null,p(a.name),1),r(u,{name:"arrow",class:"icon2"})],8,T)))),128))])])}}}),[["__scopeId","data-v-d9c2b673"]]);export{U as default};