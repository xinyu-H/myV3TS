import{r as e,d as a,o as t,c as l,b as s,g as i,t as n,y as o,a as r,i as c,n as u,j as m,q as p,z as d,x as v,w as f,F as g,e as h,u as _,A as x,B as y,h as b,l as L,p as C,k as S,C as k}from"./index.b9778689.js";import{_ as j}from"./houcdc0426e.js";import{S as w}from"./state.6308f9fc.js";const H=""+new URL("1.abc6199c.jpg",import.meta.url).href,T=""+new URL("2.24fb3039.jpg",import.meta.url).href,U=""+new URL("3.ce361100.jpg",import.meta.url).href,A=""+new URL("4.bbeefd69.jpg",import.meta.url).href,O=""+new URL("5.e90afe81.jpg",import.meta.url).href,V=""+new URL("6.f8852856.jpg",import.meta.url).href,P=""+new URL("7.79b9d361.jpg",import.meta.url).href,R=e([{title:"羊毛衫",index:0},{title:"T恤",index:1},{title:"牛仔裤",index:2},{title:"羽绒服",index:3},{title:"双肩包",index:4}]),q=e([{name:"RFSD短袖t恤男夏季纯棉宽松国潮潮流衣服大码港风半袖体恤",price:"66.00",originalCost:"83.00",img:H,evaluate:"",star:4,merchant:"并不富裕的小店",sales:6},{name:"HELLO KOMA夏季纯棉短袖t恤男女宽松潮流潮牌ins五分半袖圆领上衣",price:"116.00",originalCost:"166.00",img:T,evaluate:"宽松，舒适",star:5,merchant:"HELLO KOMA潮流品牌店",sales:16},{name:"乔普森男女同款夏季短袖纯棉夏季新款薄款半袖体恤男打底衫上衣潮",price:"89.00",originalCost:"99.00",img:U,evaluate:"低调奢华。",star:4,merchant:"乔普森男装",sales:62},{name:"2023夏季短袖t恤男宽松大码ins潮流百搭纯棉男生印花字母半袖潮牌",price:"49.00",originalCost:"69.00",img:A,evaluate:"",star:4,merchant:"并不富裕的小店",sales:8},{name:"高克T恤华夫格over设计感size男针织小众重5分袖五短袖重磅小领口",price:"33.80",originalCost:"45.30",img:O,evaluate:"",star:3,merchant:"美人庄",sales:1},{name:"HELLO KOMA港风重磅纯棉短袖t恤男宽松潮流圆领体恤五分半袖上衣",price:"99.00",originalCost:"119.00",img:V,evaluate:"动画风，我的爱",star:4,merchant:"HELLO KOMA潮流品牌店",sales:125},{name:"2023国外热卖中国12生肖虎印T恤，欧美流行文化奈秀nyshow黑白T恤",price:"69.00",originalCost:"89.00",img:P,evaluate:"",star:4,merchant:"奈秀 NYSHOW",sales:125}]),D={class:"good_car"},E={class:"content_info_box radius"},z=["src"],B={class:"info_box_info padding"},I={key:0,class:"info_evaluate"},M={class:"info_price"},K={class:"info_merchant"},F=j(a({__name:"GoodCar",props:["item"],setup(e){let a=c("initStyle");return(c,p)=>{const d=m("van-text-ellipsis"),v=m("van-rate");return t(),l("div",D,[s("div",E,[s("img",{src:e.item.img,alt:"",onClick:p[0]||(p[0]=e=>{r.push("FittingPage")})},null,8,z),s("div",B,[i(d,{rows:"2",content:e.item.name,onClickAction:p[1]||(p[1]=e=>{u((()=>{a()}))}),"expand-text":"展开","collapse-text":" 收起"},null,8,["content"]),e.item.evaluate?(t(),l("p",I,'"'+n(e.item.evaluate)+'"',1)):o("",!0),s("p",M,[s("span",null,"￥"+n(e.item.price),1),s("span",null,"￥"+n(e.item.originalCost),1)]),i(v,{modelValue:e.item.star,"onUpdate:modelValue":p[2]||(p[2]=a=>e.item.star=a),readonly:"",size:12,color:"#ffd21e","void-icon":"star","void-color":"#eee"},null,8,["modelValue"]),s("p",K,"月售 "+n(e.item.sales),1)])])])}}}),[["__scopeId","data-v-935ff653"]]),G={class:"shoppingPage padding"},N={class:"shoppingPage_header"},W={class:"shoppingPage_content"},Y={class:"shoppingPage_content_sidebar"},J={class:"shoppingPage_content_info"},Q={class:"hintBox"},X={class:"loadingDom box_center"},Z=(e=>(C("data-v-88cf9ce6"),e=e(),S(),e))((()=>s("span",null,"加载中...",-1))),$={class:"noMoreDom"},ee=j(a({__name:"ShoppingPage",setup(a){const r=w(),c=e(),C=e(!1),S=e("");const j=e(0);S.value=R.value[j.value].title;const H=e(!1),T=e(!1);function U(){let e=document.querySelectorAll(".cardDiv");e.forEach(((a,t)=>{(t+1)%2==0?(a.style.left="50%",A(e,a,t,!0)):A(e,a,t,!1)})),function(){let e=document.querySelector(".hintBox");e.style.position="absolute",e.style.top=O()+"px"}()}function A(e,a,t,l){let s=function(e,a){let t=[];for(let l=1;l<e;l++)a&&l%2==0&&t.push(l),a||l%2!=1||t.push(l);return t}(t,l),i=0;s.forEach((l=>{i+=e[l-1].offsetHeight,t-1===l&&(a.style.top=i+"px")}))}function O(e){let a=q.value.length,t=document.querySelectorAll(".cardDiv")[a-1],l=document.querySelectorAll(".cardDiv")[a-2],s=t.offsetTop+t.offsetHeight>l.offsetTop+l.offsetHeight?t:l,i=s.offsetTop+s.offsetHeight,n=document.querySelector(".hintBox");return e?i+n.offsetHeight:i}return p(H,(e=>{e&&setTimeout((()=>{H.value=!1,q.value.push(...q.value),u(U)}),1e3)})),k("initStyle",U),d((()=>{u(U)})),(e,a)=>{const u=m("van-search"),p=m("van-icon"),d=m("van-sidebar-item"),k=m("van-sidebar"),w=m("van-loading"),U=m("van-back-top");return t(),l("div",G,[s("div",N,[s("div",{class:v(["shoppingPage_header_text",C.value?"hideText":""])},n(S.value),3),i(u,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:v(["searchItem",C.value?"":"hideItem"]),placeholder:"请输入搜索关键词"},null,8,["modelValue","class"]),s("div",{class:"searchIcon box_center",onClick:a[1]||(a[1]=e=>{c.value||(C.value=!C.value)})},[i(p,{name:"search",size:"24"})])]),s("div",W,[s("div",Y,[i(k,{modelValue:j.value,"onUpdate:modelValue":a[2]||(a[2]=e=>j.value=e),class:"vantSidebar"},{default:f((()=>[(t(!0),l(g,null,h(_(R),((e,a)=>(t(),L(d,{key:e.index,title:e.title,onClick:a=>function(e){S.value=e.title}(e)},null,8,["title","onClick"])))),128))])),_:1},8,["modelValue"])]),s("div",J,[s("div",{class:"vantList",onScroll:a[3]||(a[3]=e=>function(){let e=document.querySelector(".vantList");e.scrollTop+e.offsetHeight+1>=O(!0)&&(q.value.length>=50?T.value=!0:H.value=!0)}())},[(t(!0),l(g,null,h(_(q),((e,a)=>(t(),l("div",{key:a,class:"cardDiv"},[i(F,{item:e,index:a},null,8,["item","index"])])))),128)),s("div",Q,[x(s("div",X,[i(w,{size:"16"}),b("   "),Z],512),[[y,H.value]]),x(s("div",$,"没有更多了",512),[[y,T.value]])])],32),_(r).isShowBackTop?(t(),L(U,{key:0,bottom:"10vh",offset:"500",target:".vantList"})):o("",!0)])])])}}}),[["__scopeId","data-v-88cf9ce6"]]);export{ee as default};
