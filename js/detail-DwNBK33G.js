import{_ as p,i as _,j as f,c as b,d as t,f as s,g as a,w as o,t as i,F as h,l as w,u as g,J as v,o as x,h as l,L as y}from"./index-Cub4thmZ.js";/* empty css                           */import{T as B}from"./47375800-9s-KRuPh.js";const T={class:"page-top"},j=["src"],N={class:"news-detail-breadcrumb"},E={class:"news-detail-breadcrumb-content"},I={class:"news-detail"},L={class:"margin-tb-50 padding-40 news-detail-content"},M={class:"font-center news-detail-title"},V={class:"font-center margin-tb-20 news-detail-time"},k=["innerHTML"],C=w({name:"NewsDetail"}),D=Object.assign(C,{setup(F){const m=_(B),c=g(),n=_({});return f(async()=>{const r=await fetch("/data/news.json").then(e=>e.json());n.value=r[c.params.type].find(e=>e.id===c.query.id)}),(r,e)=>{const d=y,u=v;return x(),b(h,null,[t("div",T,[t("img",{src:s(m),alt:""},null,8,j)]),t("div",N,[t("div",E,[a(u,null,{default:o(()=>[a(d,{to:{path:"/"}},{default:o(()=>e[0]||(e[0]=[l("首页")])),_:1}),a(d,null,{default:o(()=>[l(i(s(c).params.type),1)]),_:1}),a(d,null,{default:o(()=>[l(i(s(n).title),1)]),_:1})]),_:1})])]),t("div",I,[t("div",L,[t("div",M,i(s(n).title),1),t("div",V,"发布时间："+i(s(n).time),1),t("div",{innerHTML:s(n).content},null,8,k)])])],64)}}}),O=p(D,[["__scopeId","data-v-d4034720"]]);export{O as default};