const I=(u=1,n=10,t=[])=>{const{length:r}=t;let c=[];if(n>=r)c=t;else{const l=n*(u-1);if(l<r){const e=l,f=l+n-1;c=t.filter((o,s)=>s>=e&&s<=f)}else{const e=parseInt(r/n),f=r%n;f>0?c=t.filter((o,s)=>s>=n*e&&s<=r):f===0&&(c=t.filter((o,s)=>s>=n*(e-1)&&s<=r))}}return c};export{I as g};
