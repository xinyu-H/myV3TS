import{r as a,z as l,d as t,c as e,b as s,g as d,u as o,w as i,F as n,e as u,i as p,j as r,o as c,h as f,t as m,p as v,k as _}from"./index.f60f425d.js";import{_ as h}from"./houcdc0426e.js";const g={class:"pageH padding"},D=(a=>(v("data-v-ce839e1f"),a=a(),_(),a))((()=>s("h2",null,"添加一条记录",-1))),A=h(t({__name:"PageH",setup(t){p("$Utils").Tools.isMobile();const{data:v,addToDo:_}=(()=>{const t=a({list:[],toAddData:{id:0,title:"",isFinished:!1}});return l((()=>{})),{data:t,addToDo:()=>{t.value.list.push({...t.value.toAddData,id:t.value.list.length+1})}}})();return l((()=>{})),(a,l)=>{const t=r("el-input"),p=r("el-button");return c(),e("div",g,[D,s("div",null,[d(t,{modelValue:o(v).toAddData.title,"onUpdate:modelValue":l[0]||(l[0]=a=>o(v).toAddData.title=a),placeholder:"Please input"},null,8,["modelValue"]),d(p,{class:"elBtn",onClick:l[1]||(l[1]=a=>o(_)())},{default:i((()=>[f("添加")])),_:1})]),s("ol",null,[(c(!0),e(n,null,u(o(v).list,((a,l)=>(c(),e("li",null,m(a.id)+" "+m(a.title),1)))),256))])])}}}),[["__scopeId","data-v-ce839e1f"]]);export{A as default};