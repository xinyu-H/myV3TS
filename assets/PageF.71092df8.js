import{d as _,r as y,n as a,o as f,c as m,b as i,g as x,h,j as w,A as b,y as g,z as F}from"./index.73130ad8.js";import{_ as v}from"./houcdc0426e.js";const A=l=>(g("data-v-907b3863"),l=l(),F(),l),S={class:"pageF-content"},C=A(()=>i("div",{class:"snow_box"},null,-1)),D={class:"box"},B=_({__name:"PageF",setup(l){const r=y(!1),u=["\u2744","\u2746","\u2741","\u2745","\u2743","\u273D","\u273A","\u2742","\u273C","\u274B","\u2734","\u2749","\u274A","\u273B","\u2733","\u2748","\u2739","\u2732","\u2737","\u2738","\u2747"];a(()=>{setInterval(()=>{var n;let t=p(),e=document.createElement("div");e.setAttribute("y",String(s(1,1.5))),e.setAttribute("x",String(s(-.1,.1,2))),e.classList.add("snow"),e.style.width="10px",e.style.height="10px",e.style.position="relative",e.style.position="absolute",e.style.top="-20px",e.style.opacity=String(s(.4,.9)),e.style.color=r.value?t:"#FFF",e.style.left=s(0,window.innerWidth)+"px",e.style.transform=`scale(${s(.4,1)})`,e.style.textShadow=`0 0 10px ${r.value?t:"#FFF"}`,e.innerHTML=u[s(0,20,1)],(n=document.querySelector(".snow_box"))==null||n.appendChild(e)},30),document.querySelectorAll(".snow").forEach(t=>{t.style.left=s(0,window.innerWidth)+"px",t.style.transform=`scale(${s(.4,1.4)})`})});function c(){a(()=>{document.querySelectorAll(".snow").forEach(t=>{+t.style.top.slice(0,-2)>window.innerHeight&&t.remove(),t.style.top=+t.style.top.slice(0,-2)+Number(t.getAttribute("y"))+"px",t.style.left=+t.style.left.slice(0,-2)+Number(t.getAttribute("x"))+"px"})})}setInterval(c,20);function s(o,t,e){let n=+Math.abs(Math.random()*(t-o+1)+o-1).toFixed(2);return e===2?+(Math.random()*(t-o+1)+o-1).toFixed(2):e===1?+Math.ceil(Math.random()*(t-o+1)+o-1):n<o?s(o,t,e):n}const d=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function p(){let o="#";for(let t=0;t<6;t++)o+=d[s(0,15,1)];return o}return(o,t)=>{const e=w("el-button");return f(),m("div",S,[C,i("div",D,[x(e,{type:"primary",onClick:t[0]||(t[0]=n=>r.value=!r.value)},{default:h(()=>[b("\u53D8\u8272")]),_:1})])])}}});const E=v(B,[["__scopeId","data-v-907b3863"]]);export{E as default};
