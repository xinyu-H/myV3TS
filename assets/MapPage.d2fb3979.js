import{d as e,r as a,z as t,c as o,u as n,b as s,t as l,g as u,w as r,y as i,i as d,j as v,o as c,h as g,p,k as f}from"./index.fa4688e6.js";import{_ as m}from"./houcdc0426e.js";const w=e=>(p("data-v-8ed97ee3"),e=e(),f(),e),M={class:"mapPage"},_=w((()=>s("div",{id:"container"},null,-1))),h={key:0,class:"radius padding"},y=w((()=>s("p",null,"您现在的位置是：",-1))),k=m(e({__name:"MapPage",setup(e){const p=d("$Utils"),f=a("");let m=null,w=null,k=a([0,0]),C=a([0,0]),L=a(!1);function b(e){L.value=!0,k.value=[+e.coords.longitude,+e.coords.latitude],C.value=[+e.coords.longitude,+e.coords.latitude],p.AMap.load().then((async e=>{await p.AMap.convertGps(e,C.value).then((e=>{k.value=e,C.value=e})),f.value=await j(e,C.value);const a=new e.Map("container");a.setCenter(k.value,!0),a.setZoom(18,!0),A(a,e),T(a,e),p.Message.closeLoadingToast(),a.on("click",(e=>{})),a.on("moveend",(async t=>{let o=a.getCenter();C.value=[o.lng,o.lat],a.remove(w),A(a,e),k.value=[o.lng,o.lat],a.remove(m),T(a,e),f.value=await j(e,C.value)+`(${C.value[0]}，${C.value[1]})`}))}))}function A(e,a){w=new a.Marker({position:new a.LngLat(C.value[0],C.value[1]),title:"北京"}),e.add(w)}function T(e,a){m=new a.Circle({center:new a.LngLat(k.value[0],k.value[1]),radius:50,fillColor:"#e6f3ff",strokeColor:"#b3dbff",strokeWeight:2}),e.add(m)}async function j(e,a){return await p.AMap.reGeocoder(e,a).then((e=>e.formattedAddress))}return t((()=>{p.Message.showLoadingToast(),navigator.geolocation&&navigator.geolocation.getCurrentPosition(b)})),setTimeout((()=>{L.value||p.Message.failToast("浏览器不支持获取当前位置")}),5e3),(e,a)=>{const t=v("van-button");return c(),o("div",M,[_,n(L)?(c(),o("footer",h,[y,s("p",null,l(f.value),1),u(t,{type:"primary"},{default:r((()=>[g("确定")])),_:1})])):i("",!0)])}}}),[["__scopeId","data-v-8ed97ee3"]]);export{k as default};
