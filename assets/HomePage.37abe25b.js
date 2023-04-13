import{r as v,T as s,d as Y,n as _,w as G,f as J,o as l,c as h,b as g,F,e as A,u as y,g as b,h as V,i as N,j as D,t as T,k as Q,l as K,m as Z,p as $}from"./index.5acec26a.js";import{_ as ee}from"./houcdc0426e.js";const te=""+new URL("1.0494591f.jpg",import.meta.url).href,ae=""+new URL("3.46c91dcd.jpg",import.meta.url).href,ne=""+new URL("4.4ae934d8.jpg",import.meta.url).href,oe=v([{name:"\u626B\u4E00\u626B",icon:"scan",path:"ScanPage"},{name:"\u5B9A\u4F4D",icon:"location-o",path:"MapPage"},{name:"\u4E8C\u7EF4\u7801",icon:"qr",path:"QrPage"}]),M=v([{img:te,strList:[{name:"\u7EA2\u70E7\u8089"},{name:"\u53EF\u4E50\u9E21\u7FC5"},{name:"\u918B\u6E9C\u767D\u83DC"},{name:"\u7EA2\u70E7\u6392\u9AA8"},{name:"\u897F\u7EA2\u67FF\u7092\u9E21\u86CB"},{name:"\u82B9\u83DC\u7092\u9999\u5E72"},{name:"\u571F\u8C46\u70E7\u725B\u8089"},{name:"\u9EBB\u5A46\u8C46\u8150"},{name:"\u5E72\u9505\u83DC\u82B1"},{name:"\u9178\u8FA3\u571F\u8C46\u4E1D"}]},{img:ae,strList:[{name:"\u4E1C\u5B89\u5B50\u9E21"},{name:"\u6E05\u84B8\u6B66\u660C\u9C7C"},{name:"\u65E0\u4E3A\u718F\u9E2D"},{name:"\u8FA3\u5B50\u9E21"},{name:"\u5317\u4EAC\u70E4\u9E2D"},{name:"\u56DB\u5DDD\u9EBB\u5A46\u8C46\u8150"},{name:"\u897F\u6E56\u918B\u9C7C"},{name:"\u98DE\u9F99\u6C64"},{name:"\u4E1C\u5761\u8089"},{name:"\u814A\u5473\u5408\u84B8"}]},{img:ne,strList:[{name:"\u7198\u9C7C\u7119\u9762"},{name:"\u70B8\u7D2B\u9165\u8089"},{name:"\u714E\u6252\u9752\u9C7C\u5934\u5C3E"},{name:"\u7261\u4E39\u71D5\u83DC"},{name:"\u6C74\u4EAC\u70E4\u9E2D"},{name:"\u70B8\u516B\u5757"},{name:"\u6E05\u6C64\u9C8D\u9C7C"},{name:"\u5957\u56DB\u5B9D"},{name:"\u9178\u8FA3\u4E4C\u9C7C\u86CB\u6C64"},{name:"\u6876\u5B50\u9E21"}]}]),re=v([{name:"\u70DF\u82B1",icon:"fire-o",color:"red"},{name:"\u7FA4\u70DF",icon:"fire-o",color:"red"},{name:"\u632F\u52A8",icon:"bell",color:"#399"},{name:"\u62CD\u7167",icon:"photograph",color:"#39f"},{name:"\u901A\u8BDD",icon:"phone",color:"green"}]),C={title:{text:"\u9500\u552E\u7EDF\u8BA1",subtext:"\u9500\u552E\u91CF",left:"right"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:6,borderColor:"#fff",borderWidth:0},data:[{value:1048,name:"\u7F8A\u6BDB\u886B"},{value:735,name:"\u76AE\u9774"},{value:580,name:"\u5927\u8863"},{value:484,name:"\u62A4\u76EE\u955C"},{value:300,name:"\u767B\u5C71\u6756"}],labelLine:{show:!0},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};var e={},ie=function(a,t,r,i,u,w,p,f){return!(a+r<u||u+p<a||t+i<w||w+f<t)},se=function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),e.init=function(){e.canvas=document.createElement("canvas"),e.canvas.width=e.cw=window.innerWidth,e.canvas.height=e.ch=window.innerHeight,e.particles=[],e.partCount=500,e.fireworks=[],e.mx=e.cw/5,e.my=e.ch/5,e.currentHue=30,e.partSpeed=4,e.partSpeedVariance=8,e.partWind=100,e.partFriction=6,e.partGravity=1,e.hueMin=0,e.hueMax=360,e.fworkSpeed=3,e.fworkAccel=.5,e.hueVariance=60,e.flickerDensity=20,e.showShockwave=!0,e.showTarget=!1,e.clearAlpha=20,e.stop="",document.querySelector(".canvasOverlay").appendChild(e.canvas),e.ctx=e.canvas.getContext("2d"),e.ctx.lineCap="round",e.ctx.lineJoin="round",e.lineWidth=1,e.bindEvents(),e.canvasLoop(),e.canvas.onselectstart=function(){return!1}},e.createParticles=function(a,t,r){for(var i=e.partCount;i--;){var u={x:a,y:t,coordLast:[{x:a,y:t},{x:a,y:t},{x:a,y:t}],angle:s.getRandom(0,360),speed:s.getRandom(e.partSpeed-e.partSpeedVariance<=0?1:e.partSpeed-e.partSpeedVariance,e.partSpeed+e.partSpeedVariance),friction:1-e.partFriction/100,gravity:e.partGravity/2,hue:s.getRandom(r-e.hueVariance,r+e.hueVariance),brightness:s.getRandom(50,80),alpha:s.getRandom(40,100)/100,decay:s.getRandom(10,50)/1e3,wind:(s.getRandom(0,e.partWind)-e.partWind/2)/25,lineWidth:e.lineWidth};e.particles.push(u)}},e.updateParticles=function(){for(var a=e.particles.length;a--;){var t=e.particles[a],r=t.angle*Math.PI/180,i=Math.cos(r)*t.speed,u=Math.sin(r)*t.speed;t.speed*=t.friction,t.coordLast[2].x=t.coordLast[1].x,t.coordLast[2].y=t.coordLast[1].y,t.coordLast[1].x=t.coordLast[0].x,t.coordLast[1].y=t.coordLast[0].y,t.coordLast[0].x=t.x,t.coordLast[0].y=t.y,t.x+=i,t.y+=u,t.y+=t.gravity,t.angle+=t.wind,t.alpha-=t.decay,(!ie(0,0,e.cw,e.ch,t.x-t.radius,t.y-t.radius,t.radius*2,t.radius*2)||t.alpha<.05)&&e.particles.splice(a,1)}},e.drawParticles=function(){for(var a=e.particles.length;a--;){var t=e.particles[a],r=s.getRandom(1,3)-1;if(e.ctx.beginPath(),e.ctx.moveTo(Math.round(t.coordLast[r].x),Math.round(t.coordLast[r].y)),e.ctx.lineTo(Math.round(t.x),Math.round(t.y)),e.ctx.closePath(),e.ctx.strokeStyle="hsla("+t.hue+", 100%, "+t.brightness+"%, "+t.alpha+")",e.ctx.stroke(),e.flickerDensity>0){var i=50-e.flickerDensity;if(s.getRandom(0,i)===i){e.ctx.beginPath(),e.ctx.arc(Math.round(t.x),Math.round(t.y),s.getRandom(t.lineWidth,t.lineWidth+3)/2,0,Math.PI*2,!1),e.ctx.closePath();var u=s.getRandom(50,100)/100;e.ctx.fillStyle="hsla("+t.hue+", 100%, "+t.brightness+"%, "+u+")",e.ctx.fill()}}}},e.createFireworks=function(a,t,r,i){var u={x:a,y:t,startX:a,startY:t,hitX:!1,hitY:!1,coordLast:[{x:a,y:t},{x:a,y:t},{x:a,y:t}],targetX:r,targetY:i,speed:e.fworkSpeed,angle:Math.atan2(i-t,r-a),shockwaveAngle:Math.atan2(i-t,r-a)+90*(Math.PI/180),acceleration:e.fworkAccel/100,hue:e.currentHue,brightness:s.getRandom(50,80),alpha:s.getRandom(50,100)/100,lineWidth:e.lineWidth};e.fireworks.push(u)},e.updateFireworks=function(){for(var a=e.fireworks.length;a--;){var t=e.fireworks[a];e.ctx.lineWidth=t.lineWidth;const r=Math.cos(t.angle)*t.speed,i=Math.sin(t.angle)*t.speed;t.speed*=1+t.acceleration,t.coordLast[2].x=t.coordLast[1].x,t.coordLast[2].y=t.coordLast[1].y,t.coordLast[1].x=t.coordLast[0].x,t.coordLast[1].y=t.coordLast[0].y,t.coordLast[0].x=t.x,t.coordLast[0].y=t.y,t.startX>=t.targetX?t.x+r<=t.targetX?(t.x=t.targetX,t.hitX=!0):t.x+=r:t.x+r>=t.targetX?(t.x=t.targetX,t.hitX=!0):t.x+=r,t.startY>=t.targetY?t.y+i<=t.targetY?(t.y=t.targetY,t.hitY=!0):t.y+=i:t.y+i>=t.targetY?(t.y=t.targetY,t.hitY=!0):t.y+=i,t.hitX&&t.hitY&&(e.createParticles(t.targetX,t.targetY,t.hue),e.fireworks.splice(a,1))}},e.drawFireworks=function(){var a=e.fireworks.length;for(e.ctx.globalCompositeOperation="lighter";a--;){var t=e.fireworks[a];e.ctx.lineWidth=t.lineWidth;var r=s.getRandom(1,3)-1;e.ctx.beginPath(),e.ctx.moveTo(Math.round(t.coordLast[r].x),Math.round(t.coordLast[r].y)),e.ctx.lineTo(Math.round(t.x),Math.round(t.y)),e.ctx.closePath(),e.ctx.strokeStyle="hsla("+t.hue+", 100%, "+t.brightness+"%, "+t.alpha+")",e.ctx.stroke(),e.showTarget&&(e.ctx.save(),e.ctx.beginPath(),e.ctx.arc(Math.round(t.targetX),Math.round(t.targetY),s.getRandom(1,8),0,Math.PI*2,!1),e.ctx.closePath(),e.ctx.lineWidth=1,e.ctx.stroke(),e.ctx.restore()),e.showShockwave&&(e.ctx.save(),e.ctx.translate(Math.round(t.x),Math.round(t.y)),e.ctx.rotate(t.shockwaveAngle),e.ctx.beginPath(),e.ctx.arc(0,0,1*(t.speed/5),0,Math.PI,!0),e.ctx.strokeStyle="hsla("+t.hue+", 100%, "+t.brightness+"%, "+s.getRandom(25,60)/100+")",e.ctx.lineWidth=t.lineWidth,e.ctx.stroke(),e.ctx.restore())}},e.bindEvents=function(){window.onresize=function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.canvas.width=e.cw=window.innerWidth,e.canvas.height=e.ch=window.innerHeight,e.ctx.lineCap="round",e.ctx.lineJoin="round"},100)}},e.clear=function(){e.particles=[],e.fireworks=[],e.ctx.clearRect(0,0,e.cw,e.ch)},e.canvasLoop=function(){e.stop=requestAnimationFrame(e.canvasLoop),e.ctx.globalCompositeOperation="destination-out",e.ctx.fillStyle="rgba(100,0,0,"+e.clearAlpha/100+")",e.ctx.fillRect(0,0,e.cw,e.ch),e.updateFireworks(),e.updateParticles(),e.drawFireworks(),e.drawParticles()},e.init()};const k={self:e,Fireworks:se},ue={class:"HomePage padding"},ce={class:"HomePage_header radius flex_around"},le=["onClick"],de={class:"HomePage_items flex_around padding"},he=["onClick"],me={class:"HomePage_banner"},ge={class:"scrollDivC"},ve=Y({__name:"HomePage",setup(a){const t=$("$Utils"),r=$("$Echarts");function i(o){f(o)}let u=null,w=0,p=0;_(()=>{f(0)});function f(o){w=0,p=0;let n=document.querySelectorAll(".scrollDiv")[o],x=n.querySelector(".scrollDivC").querySelector("div");clearInterval(u),u=setInterval(()=>{n&&(w=n.scrollTop,n.scrollTop++,p=n.scrollTop,w===p&&(M.value[o].strList.push(M.value[o].strList.shift()),n.scrollTop=n.scrollTop-x.offsetHeight))},30)}let B=v(!1),d=v(!1),R=null,I=null;function O(o){if(o.name==="\u70DF\u82B1"&&(d.value=!0,_(()=>{document.querySelector(".canvasOverlay").style.background="rgba(0, 0, 0, 0)",new k.Fireworks,W(),I=setTimeout(()=>{d.value=!1},4e3)})),o.name==="\u7FA4\u70DF"&&(d.value=!0,_(()=>{document.querySelector(".canvasOverlay").style.background="rgba(0, 0, 0, 0.8)",new k.Fireworks,R=setInterval(()=>{W()},600)})),o.icon==="bell"){if(!("vibrate"in navigator))return t.Message.failToast("\u4E0D\u652F\u6301\u632F\u52A8");B.value=!0,navigator.vibrate([300,100,200,100,100,100,500,100,300,100,200,100,100,50,50,50,150,200,200]),setTimeout(()=>{B.value=!1},3e3)}if(o.icon==="photograph"){let n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("id","file"),n.setAttribute("accept","image/*"),n.click(),n.onchange=async function(m){let x=m.target;t.Message.successToast("",await t.Tools.toBase64(x.files[0]),"100")}}o.icon==="phone"&&(location.href="tel://12345")}G(d,o=>{if(!o){clearInterval(R),clearTimeout(I),window.cancelAnimationFrame(k.self.stop);let n=document.querySelector(".canvasOverlay"),m=n==null?void 0:n.querySelector("canvas");n==null||n.removeChild(m)}});function W(){k.self.currentHue=t.Tools.getRandom(0,360);let o=t.Tools.getRandom(100,window.innerWidth-100),n=t.Tools.getRandom(100,window.innerHeight/2-100);k.self.createFireworks(window.innerWidth/2,window.innerHeight,o,n)}const H=v();let L=null,E=v(0);_(()=>{let o=r.init(H.value);C&&o.setOption(C),q(o,C),o.on("mouseover",n=>{z(),o.dispatchAction({type:"downplay",dataIndex:[...new Array(C.series[0].data.length).keys()]}),o.dispatchAction({type:"highlight",dataIndex:n.dataIndex})}),o.on("mouseout",()=>{q(o,C)})});function q(o,n){L=setInterval(()=>{o.dispatchAction({type:"downplay",dataIndex:[...new Array(n.series[0].data.length).keys()]}),o.dispatchAction({type:"highlight",dataIndex:E.value}),E.value++,E.value>=5&&(E.value=0)},2e3)}function z(){clearInterval(L)}return J(()=>{clearInterval(u),clearInterval(L)}),(o,n)=>{const m=D("van-icon"),x=D("van-swipe-item"),U=D("van-swipe"),j=D("van-overlay");return l(),h("div",ue,[g("div",ce,[(l(!0),h(F,null,A(y(oe),(c,S)=>(l(),h("div",{class:"padding",key:c.icon,onClick:P=>o.$router.push(c.path)},[b(m,{class:"icon",name:c.icon},null,8,["name"]),g("p",null,T(c.name),1)],8,le))),128))]),g("div",{class:"HomePage_echarts padding",ref_key:"EchartsDom",ref:H},null,512),g("div",de,[(l(!0),h(F,null,A(y(re),(c,S)=>(l(),h("div",{key:c.icon,class:"padding",onClick:P=>O(c)},[b(m,{class:Q(["icon",y(B)?"shake":""]),name:c.icon,color:c.color},null,8,["class","name","color"]),g("p",null,T(c.name),1)],8,he))),128))]),g("div",me,[b(U,{class:"my-swipe",autoplay:8e3,onChange:i},{default:V(()=>[(l(!0),h(F,null,A(y(M),(c,S)=>(l(),K(x,{class:"scrollDiv",key:S,style:Z(`background:url(${c.img}) no-repeat; background-size: 100% 100%;`)},{default:V(()=>[g("div",ge,[(l(!0),h(F,null,A(c.strList,(P,X)=>(l(),h("div",{key:X},T(P.name),1))),128))])]),_:2},1032,["style"]))),128))]),_:1})]),b(j,{show:y(d),onClick:n[0]||(n[0]=c=>N(d)?d.value=!1:d=!1),class:"canvasOverlay"},null,8,["show"])])}}});const xe=ee(ve,[["__scopeId","data-v-7ee988a8"]]);export{xe as default};
