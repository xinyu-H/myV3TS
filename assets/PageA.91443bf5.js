import{H as e,d as t,c as a,g as i,w as n,h as r,t as u,u as s,j as l,o,I as c,J as d,K as p,L as g,N as h,O as f}from"./index.60c936b2.js";import{_ as y}from"./houcdc0426e.js";const _=e("Store1",{state:()=>({sex:"男",height:170,hobby:["唱","跳","rap"],isSwiperSlide:!0}),getters:{getSex(){return this.sex},getHeight:e=>2*e.height,getHobby(){return this.hobby},doubleNum:e=>2*e.height},actions:{updateSex(e){this.sex=this.sex+e},addHeight(){this.height++},updateHobby(e){this.hobby.push(e)},updateIsSwiperSlide(){this.isSwiperSlide=!this.isSwiperSlide}}}),b=y(t({__name:"PageA",setup(e){const t=_();return(e,y)=>{const _=l("el-button"),b=l("el-row");return o(),a("div",null,[i(b,{class:"mb-4"},{default:n((()=>[i(_,{onClick:y[0]||(y[0]=e=>{t.addHeight()})},{default:n((()=>[r("Default")])),_:1}),i(_,{type:"primary",onClick:y[1]||(y[1]=t=>e.$router.push("PageB"))},{default:n((()=>[r("PageB")])),_:1}),i(_,{type:"success",onClick:y[2]||(y[2]=t=>e.$router.push("PageC"))},{default:n((()=>[r("PageC")])),_:1}),i(_,{type:"info",onClick:y[3]||(y[3]=t=>e.$router.push("Work1"))},{default:n((()=>[r("Work1")])),_:1}),i(_,{type:"warning",onClick:y[4]||(y[4]=t=>e.$router.push("PageD"))},{default:n((()=>[r("PageD")])),_:1}),i(_,{type:"danger",onClick:y[5]||(y[5]=t=>e.$router.push("PageE"))},{default:n((()=>[r("PageE")])),_:1}),i(_,{onClick:y[6]||(y[6]=t=>e.$router.push("PageF"))},{default:n((()=>[r("PageF")])),_:1})])),_:1}),i(b,{class:"mb-4"},{default:n((()=>[i(_,{plain:"",onClick:y[7]||(y[7]=t=>e.$router.push("PageG"))},{default:n((()=>[r("PageG")])),_:1}),i(_,{type:"primary",plain:""},{default:n((()=>[r("Primary")])),_:1}),i(_,{type:"success",plain:""},{default:n((()=>[r("Success")])),_:1}),i(_,{type:"info",plain:""},{default:n((()=>[r("Info")])),_:1}),i(_,{type:"warning",plain:""},{default:n((()=>[r("Warning")])),_:1}),i(_,{type:"danger",plain:""},{default:n((()=>[r("Danger")])),_:1})])),_:1}),i(b,{class:"mb-4"},{default:n((()=>[i(_,{round:""},{default:n((()=>[r("Round")])),_:1}),i(_,{type:"primary",round:""},{default:n((()=>[r("Primary")])),_:1}),i(_,{type:"success",round:""},{default:n((()=>[r("Success")])),_:1}),i(_,{type:"info",round:""},{default:n((()=>[r("Info")])),_:1}),i(_,{type:"warning",round:""},{default:n((()=>[r("Warning")])),_:1}),i(_,{type:"danger",round:""},{default:n((()=>[r("Danger")])),_:1})])),_:1}),i(b,null,{default:n((()=>[i(_,{icon:s(c),circle:""},null,8,["icon"]),i(_,{type:"primary",icon:s(d),circle:""},null,8,["icon"]),i(_,{type:"success",icon:s(p),circle:""},null,8,["icon"]),i(_,{type:"info",icon:s(g),circle:""},null,8,["icon"]),i(_,{type:"warning",icon:s(h),circle:""},null,8,["icon"]),i(_,{type:"danger",icon:s(f),circle:""},null,8,["icon"])])),_:1}),r(" "+u(s(t).height),1)])}}}),[["__scopeId","data-v-aed23e0b"]]);export{b as default};
