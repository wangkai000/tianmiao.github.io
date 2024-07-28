import{i as A,t as P}from"./dark-V7k59D8P.js";import{I as z}from"./iconify-CVmMpTBc.js";import{d as g,o as n,c as m,f as t,g as _,h as T,w as d,i as H,n as S,j as V,k as B,b as p,m as K,l as q,p as j,q as Q,s as D,v as U,x as y,y as W,r as $,e as h,z as I,F as N,A as O,B as X,t as R,C as E,D as Y,E as Z,G as ee,H as te,T as M,I as oe,K as ne,J as se}from"./app-Ddps5ZSK.js";import{x as ae,g as re,B as le,w as ie,c as ce,C as de,b as pe}from"./shadcn-vue-utils-BNyvt0OW.js";import{c as ue}from"./index-B3PLG9Y_.js";const fe=g({__name:"DarkToggle",setup(f){return(o,r)=>(n(),m("button",{class:"!outline-none",onClick:r[0]||(r[0]=(...l)=>("toggleDark"in o?o.toggleDark:t(P))&&("toggleDark"in o?o.toggleDark:t(P))(...l))},[("isDark"in o?o.isDark:t(A))?(n(),_(t(z),{key:0,class:"h-[16px] w-[16px]",icon:"carbon-moon"})):(n(),_(t(z),{key:1,class:"h-[16px] w-[16px]",icon:"carbon-sun"}))]))}}),me="/logo.svg",_e={},he={class:"mt-[0px] block h-[40px] w-[40px] md:mt-0 md:h-[56px] md:w-[56px]",src:me,alt:""};function ge(f,o){return n(),m("img",he)}const ve=T(_e,[["render",ge]]),xe=g({__name:"HoverCard",props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{}},emits:["update:open"],setup(f,{emit:o}){const s=ae(f,o);return(a,b)=>(n(),_(t(re),S(V(t(s))),{default:d(()=>[H(a.$slots,"default")]),_:3},16))}}),we=g({__name:"HoverCardContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(f){const o=f,r=B(()=>{const{class:s,...a}=o;return a}),l=le(r);return(s,a)=>(n(),_(t(de),null,{default:d(()=>[p(t(ie),K(t(l),{class:t(ce)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o.class)}),{default:d(()=>[H(s.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),ye=g({__name:"HoverCardTrigger",props:{asChild:{type:Boolean},as:{}},setup(f){const o=f;return(r,l)=>(n(),_(t(pe),S(V(o)),{default:d(()=>[H(r.$slots,"default")]),_:3},16))}}),be={class:"nav-container"},ke={class:"flex flex-col items-center justify-start text-[14px]"},Ce=g({__name:"Nav",setup(f){q(e=>({"2896db66":t(l)}));const o=j(),r=Q(),l=B(()=>A.value?"unset":"difference"),s={width:80,height:28,padding:5},a=D(-2),b=B(()=>({width:`${s.width}px`,height:`${s.height}px`,transform:`
      translate(
        ${a.value*s.width+s.padding}px,
        5px
      )
    `})),i=D();U(()=>{const e=y.find(c=>c.route===o.path);e&&u(e,y.indexOf(e))}),W(()=>o.path,e=>{const c=y.find(k=>k.route===o.path);c&&u(c,y.indexOf(c)),y.map(k=>k.route).includes(e)||x()});function u(e,c){r.value=e.label==="组件"?"Arvin":e.label,a.value=c,v()}function v(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"],c=[1,1];if(i.value){const w=i.value.animate({transform:e,opacity:c},{duration:900,fill:"forwards"});w.onfinish=()=>{}}}function x(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(0.97, 1.03, 1)","scale3d(0, 0, 1)"],c=[1,0];if(i.value){const w=i.value.animate({transform:e,opacity:c},{duration:900,fill:"forwards"});w.onfinish=()=>{}}}return(e,c)=>{const w=$("router-link"),k=ye,F=we,J=xe,G=$("ClientOnly");return n(),_(G,null,{default:d(()=>[h("div",be,[(n(!0),m(N,null,I(t(y),C=>(n(),m("div",{key:C.label},[p(J,{"open-delay":0,"close-delay":0},{default:d(()=>[p(k,null,{default:d(()=>[p(w,{to:C.route,replace:"",class:"nav-item",style:O({height:`${s.height}px`,width:`${s.width}px`})},{default:d(()=>[X(R(C.label),1)]),_:2},1032,["to","style"])]),_:2},1024),C?.children?.length>0?(n(),_(F,{key:0,"side-offset":15,class:"w-[120px]! p-[4px]!"},{default:d(()=>[h("div",ke,[(n(!0),m(N,null,I(C.children,L=>(n(),m("div",{key:L.label,class:"option-item h-10 w-full flex cursor-pointer items-center justify-center"},R(L.label),1))),128))])]),_:2},1024)):E("",!0)]),_:2},1024)]))),128)),h("div",{style:O(t(b)),class:"pointer-events-none absolute left-0 top-0 transition-transform duration-300 ease-in-out"},[h("div",{ref_key:"bgInnerRef",ref:i,class:"h-full w-full rounded-[50px] bg-[var(--nav-placeholder-bg)]"},null,512)],4)])]),_:1})}}}),Be=T(Ce,[["__scopeId","data-v-c6aececf"]]),$e={id:"nav-bg",class:"fixed left-0 top-0 z-[2] h-fit w-full flex flex-row items-center justify-between px-[3.5vw] py-[18px] md:h-[80px] md:py-unset"},De={class:"grid h-[40px] w-[40px] place-items-center"},Te=g({__name:"index",setup(f){return(o,r)=>{const l=fe;return n(),m("div",$e,[p(ve),p(Be),h("div",De,[p(l)])])}}}),He=T(Te,[["__scopeId","data-v-0216a5e7"]]),Le=h("div",{class:"absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black:30"},null,-1),Pe=["src","alt"],Me=g({__name:"default",setup(f){const o=j(),r=["/blog/content-sidebar"],l=B(()=>r.includes(o.path)),s=Y("(min-width: 720px)"),a=D();return Z("click",async b=>{const i=Array.from(b.composedPath()),u=i[0];if(!(u instanceof HTMLElement)||u.tagName!=="IMG"||u.classList.contains("no-preview")||i.some(e=>e instanceof HTMLElement&&["A","BUTTON"].includes(e.tagName))||!i.some(e=>e instanceof HTMLElement&&e.classList.contains("prose")))return;const v=u.getBoundingClientRect();await new Promise(e=>setTimeout(e,50));const x=u.getBoundingClientRect();v.left!==x.left||v.top!==x.top||(a.value=u)}),(b,i)=>{const u=He,v=$("RouterView"),x=$("client-only");return n(),m("main",{id:"main-root",class:se(["bg-[var(--bg-main-color)]",t(l)?"":"pt-[100px] pb-20 px-[10px] md:px-5 overflow-x-hidden min-h-screen md:pt-[112px] "])},[ee(p(u,null,null,512),[[te,!t(s)||!t(l)]]),p(v,null,{default:d(({Component:e})=>[p(M,{name:t(ue)||"page",mode:"out-in"},{default:d(()=>[(n(),_(ne,null,[(n(),_(oe(e)))],1024))]),_:2},1032,["name"])]),_:1}),p(M,{name:"fade"},{default:d(()=>[t(a)?(n(),m("div",{key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-[500] backdrop-blur",onClick:i[0]||(i[0]=e=>a.value=void 0)},[Le,h("img",{class:"mx-auto h-[calc(100%_-_20px)] mt-[10px] w-[calc(100%_-_20px)] object-contain",src:t(a).src,alt:t(a).alt},null,8,Pe)])):E("",!0)]),_:1}),p(x)],2)}}});export{Me as default};
