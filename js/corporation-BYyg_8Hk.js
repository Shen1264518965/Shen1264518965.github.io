import{_ as v,i as l,j as h,c as p,d as e,F as _,k,f as o,n as x,s as d,v as y,l as C,a as w,C as j,o as c,t as u}from"./index-Cub4thmZ.js";import{g as z}from"./common-HaayC2ZU.js";/* empty css                 */const B={class:"corporation"},b={class:"corporation-item_img"},D=["src"],L={class:"corporation-item_info"},M=["onClick"],P=["innerHTML"],S={class:"corporation-item_info-time"},T={class:"corporation-pagination"},E=C({name:"Corporation"}),F=Object.assign(E,{setup(H){const g=w(),s=l(1),a=l(5),r=l([]);h(async()=>{const i=await fetch("/data/news.json").then(n=>n.json());r.value=i.公司新闻});const m=i=>{g.push({path:"/news/detail/公司新闻",query:{id:i.id}})};return(i,n)=>{const f=j;return c(),p(_,null,[e("div",B,[(c(!0),p(_,null,k(o(z)(o(s),o(a),o(r)),t=>(c(),p("div",{class:"corporation-item",key:t.id},[e("div",b,[e("img",{src:t.url,alt:"",srcset:""},null,8,D)]),e("div",L,[e("div",{class:"corporation-item_info-title",onClick:N=>m(t)},u(t.title),9,M),e("div",{class:"corporation-item_info-content",innerHTML:t.content},null,8,P),e("div",S,u(t.time),1)])]))),128))]),e("div",T,[o(r).length?(c(),x(f,{key:0,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next","current-page":o(s),"onUpdate:currentPage":n[0]||(n[0]=t=>d(s)?s.value=t:null),"page-size":o(a),"onUpdate:pageSize":n[1]||(n[1]=t=>d(a)?a.value=t:null),total:o(r).length},null,8,["current-page","page-size","total"])):y("",!0)])],64)}}}),q=v(F,[["__scopeId","data-v-6419e747"]]);export{q as default};
