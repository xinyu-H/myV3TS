import{d as D,r as c,m as b,o as C,c as w,u as k,b as f,t as x,g as L,w as B,v as E,s as P,h as S,x as T,p as I,q as N}from"./index.44a9e657.js";import{_ as V}from"./aaacdc0426e.js";const F=s=>(I("data-v-cfc38bd9"),s=s(),N(),s),$={class:"mapPage"},A=F(()=>f("div",{id:"container"},null,-1)),G={key:0,class:"radius padding"},U=F(()=>f("p",null,"\u60A8\u73B0\u5728\u7684\u4F4D\u7F6E\u662F\uFF1A",-1)),j=D({__name:"MapPage",setup(s){const n=P("$Utils"),d=c("");let i=null,v=null,u=c([0,0]),a=c([0,0]),y=50,_=c(!1);b(()=>{n.Alert.showLoadingToast(),navigator.geolocation&&navigator.geolocation.getCurrentPosition(p)}),setTimeout(()=>{_.value||n.Alert.failToast("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u83B7\u53D6\u5F53\u524D\u4F4D\u7F6E")},5e3),p({coords:{longitude:116.274114,latitude:39.840426}});function p(o){_.value=!0,u.value=[+o.coords.longitude,+o.coords.latitude],a.value=[+o.coords.longitude,+o.coords.latitude],n.AMap.load().then(async e=>{await n.AMap.convertGps(e,a.value).then(l=>{u.value=l,a.value=l}),d.value=await h(e,a.value);const t=new e.Map("container");t.setCenter(u.value,!0),t.setZoom(18,!0),g(t,e),m(t,e),n.Alert.closeLoadingToast(),t.on("click",l=>{}),t.on("moveend",async l=>{let r=t.getCenter();a.value=[r.lng,r.lat],t.remove(v),g(t,e),u.value=[r.lng,r.lat],t.remove(i),m(t,e),d.value=await h(e,a.value)+`(${a.value[0]}\uFF0C${a.value[1]})`})})}function g(o,e){v=new e.Marker({position:new e.LngLat(a.value[0],a.value[1]),title:"\u5317\u4EAC"}),o.add(v)}function m(o,e){i=new e.Circle({center:new e.LngLat(u.value[0],u.value[1]),radius:y,fillColor:"#e6f3ff",strokeColor:"#b3dbff",strokeWeight:2}),o.add(i)}async function h(o,e){return await n.AMap.reGeocoder(o,e).then(t=>t.formattedAddress)}return(o,e)=>{const t=S("van-button");return C(),w("div",$,[A,k(_)?(C(),w("footer",G,[U,f("p",null,x(d.value),1),L(t,{type:"primary"},{default:B(()=>[T("\u786E\u5B9A")]),_:1})])):E("",!0)])}}});const Z=V(j,[["__scopeId","data-v-cfc38bd9"]]);export{Z as default};
