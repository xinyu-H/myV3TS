import{y as g,d as c,o as y,c as _,g as e,w as n,x as a,t as m,u as s,h as p,z as b,A as h,B as P,C as $,D as k,E as C}from"./index.44a9e657.js";import{_ as v}from"./aaacdc0426e.js";const w=g("Store1",{state:()=>({sex:"\u7537",height:170,hobby:["\u5531","\u8DF3","rap"]}),getters:{getSex(){return this.sex},getHeight(o){return o.height*2},getHobby(){return this.hobby},doubleNum(o){return o.height*2}},actions:{updateSex(o){this.sex=this.sex+o},addHeight(){this.height++},updateHobby(o){this.hobby.push(o)}}}),D=c({__name:"PageA",setup(o){const d=w();function f(){d.addHeight()}return(r,u)=>{const t=p("el-button"),i=p("el-row");return y(),_("div",null,[e(i,{class:"mb-4"},{default:n(()=>[e(t,{onClick:u[0]||(u[0]=l=>f())},{default:n(()=>[a("Default")]),_:1}),e(t,{type:"primary",onClick:u[1]||(u[1]=l=>r.$router.push("PageB"))},{default:n(()=>[a("PageB")]),_:1}),e(t,{type:"success",onClick:u[2]||(u[2]=l=>r.$router.push("PageC"))},{default:n(()=>[a("PageC")]),_:1}),e(t,{type:"info",onClick:u[3]||(u[3]=l=>r.$router.push("Work1"))},{default:n(()=>[a("Work1")]),_:1}),e(t,{type:"warning",onClick:u[4]||(u[4]=l=>r.$router.push("PageD"))},{default:n(()=>[a("PageD")]),_:1}),e(t,{type:"danger",onClick:u[5]||(u[5]=l=>r.$router.push("PageE"))},{default:n(()=>[a("PageE")]),_:1}),e(t,{onClick:u[6]||(u[6]=l=>r.$router.push("PageF"))},{default:n(()=>[a("PageF")]),_:1})]),_:1}),e(i,{class:"mb-4"},{default:n(()=>[e(t,{plain:"",onClick:u[7]||(u[7]=l=>r.$router.push("PageG"))},{default:n(()=>[a("PageG")]),_:1}),e(t,{type:"primary",plain:""},{default:n(()=>[a("Primary")]),_:1}),e(t,{type:"success",plain:""},{default:n(()=>[a("Success")]),_:1}),e(t,{type:"info",plain:""},{default:n(()=>[a("Info")]),_:1}),e(t,{type:"warning",plain:""},{default:n(()=>[a("Warning")]),_:1}),e(t,{type:"danger",plain:""},{default:n(()=>[a("Danger")]),_:1})]),_:1}),e(i,{class:"mb-4"},{default:n(()=>[e(t,{round:""},{default:n(()=>[a("Round")]),_:1}),e(t,{type:"primary",round:""},{default:n(()=>[a("Primary")]),_:1}),e(t,{type:"success",round:""},{default:n(()=>[a("Success")]),_:1}),e(t,{type:"info",round:""},{default:n(()=>[a("Info")]),_:1}),e(t,{type:"warning",round:""},{default:n(()=>[a("Warning")]),_:1}),e(t,{type:"danger",round:""},{default:n(()=>[a("Danger")]),_:1})]),_:1}),e(i,null,{default:n(()=>[e(t,{icon:s(b),circle:""},null,8,["icon"]),e(t,{type:"primary",icon:s(h),circle:""},null,8,["icon"]),e(t,{type:"success",icon:s(P),circle:""},null,8,["icon"]),e(t,{type:"info",icon:s($),circle:""},null,8,["icon"]),e(t,{type:"warning",icon:s(k),circle:""},null,8,["icon"]),e(t,{type:"danger",icon:s(C),circle:""},null,8,["icon"])]),_:1}),a(" "+m(s(d).height),1)])}}});const B=v(D,[["__scopeId","data-v-b48b2614"]]);export{B as default};
