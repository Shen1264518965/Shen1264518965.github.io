import{_ as j,i as a,j as L,c as V,d as o,g as u,w as l,f as e,G as T,H as F,I as C,v as H,t as g,s as P,F as U,u as X,J as Y,m as z,K as G,o as h,h as _,n as J,L as K}from"./index-Cub4thmZ.js";import{u as W}from"./config-SibOWegK.js";/* empty css                           */const q={class:"product-detail"},A={class:"product-detail-img"},O=["src"],Q={key:0,class:"product-detail-magnify"},Z=["src"],ee={class:"margin-tb-30 font-center"},te={class:"product-detail-info"},oe={class:"product-detail-info_title"},se=["innerHTML"],ae=["src"],le={class:"dialog-footer"},ne={__name:"detail",setup(re){const E=X(),{id:S,type:m}=E.params,{isWin:b}=W(),x=a(),v=a(!1),y=a(!1),k=a({transform:""}),w=a({}),c=a(!1),p=a(null),f=a([]),n=a({});L(async()=>{p.value=await fetch("/data/product.json").then(s=>s.json()),$()});const $=()=>{if(m==="all"){f.value=[];for(let s in p.value)f.value=f.value.concat(p.value[s])}else f.value=p.value[m];n.value=f.value.find(s=>s.id===S)},D=()=>{if(!b)return!1;v.value=!0,y.value=!0},I=s=>{let t=s.offsetX,i=s.offsetY,d=t-100<0?0:t-100,r=i-100<0?0:i-100;d>200&&(d=200),r>200&&(r=200),k.value.transform=`translate(${d}px,${r}px)`,w.value.transform=`translate(-${2*d}px,-${2*r}px)`},N=()=>{v.value=!1,y.value=!1},B=()=>{c.value=!1,x.value.pause()};return(s,t)=>{const i=K,d=Y,r=z,R=G;return h(),V(U,null,[o("div",q,[u(d,{class:"margin-bottom-20"},{default:l(()=>[u(i,{to:{path:"/"}},{default:l(()=>t[2]||(t[2]=[_("首页")])),_:1}),e(m)!=="all"?(h(),J(i,{key:0},{default:l(()=>[_(g(e(m)),1)]),_:1})):H("",!0),u(i,null,{default:l(()=>[_(g(e(n).name),1)]),_:1})]),_:1}),o("div",A,[o("img",{alt:"",src:e(n).url},null,8,O),T(o("div",{style:C(e(k)),class:"top"},null,4),[[F,e(v)]]),o("div",{class:"mask-top",onMouseenter:D,onMousemove:I,onMouseout:N},null,32),e(y)?(h(),V("div",Q,[o("img",{style:C(e(w)),alt:"",class:"rightImg",src:e(n).url},null,12,Z)])):H("",!0)]),o("div",ee,[u(r,{type:"primary",onClick:t[0]||(t[0]=M=>c.value=!0)},{default:l(()=>t[3]||(t[3]=[_("视频播放")])),_:1})]),o("div",te,[o("div",oe,g(e(n).name),1),o("div",{class:"product-detail-info_content",innerHTML:e(n).content},null,8,se)])]),u(R,{"append-to-body":"",modelValue:e(c),"onUpdate:modelValue":t[1]||(t[1]=M=>P(c)?c.value=M:null),title:"视频播放",width:e(b)?"800px":"100%","before-close":B},{footer:l(()=>[o("div",le,[u(r,{onClick:B},{default:l(()=>t[4]||(t[4]=[_("关闭")])),_:1})])]),default:l(()=>[o("video",{class:"product-video",ref_key:"videoPlayerRef",ref:x,src:e(n).vUrl,controls:""},null,8,ae)]),_:1},8,["modelValue","width"])],64)}}},ce=j(ne,[["__scopeId","data-v-4a729a83"]]);export{ce as default};