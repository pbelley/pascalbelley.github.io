import{a as i,t as f,o as n,s as x}from"./chunk-D4RADZKF-R3cz4WnU.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase()),k=a=>{const e=g(a);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...a)=>a.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim(),w=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:t,iconNode:m,...c},h)=>i.createElement("svg",{ref:h,...y,width:e,height:e,stroke:a,strokeWidth:s?Number(o)*24/Number(e):o,className:p("lucide",l),...!t&&!w(c)&&{"aria-hidden":"true"},...c},[...m.map(([r,u])=>i.createElement(r,u)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(a,e)=>{const o=i.forwardRef(({className:s,...l},t)=>i.createElement(b,{ref:t,iconNode:e,className:p(`lucide-${v(k(a))}`,`lucide-${a}`,s),...l}));return o.displayName=k(a),o};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],N=d("book",P);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],C=d("briefcase",j);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],M=d("chevron-down",A);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],$=d("file",_);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],E=d("house",L);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],I=d("school",H),B=[{icon:E,link:"",titlePage:"Accueil"},{icon:I,link:"education",titlePage:"Études"},{icon:C,link:"workexperience",titlePage:"Expériences"},{icon:N,link:"folio",titlePage:"Projets",subPages:[{link:"folio/suiteaurora",titlePage:"Suite Aurora"},{link:"folio/gidoc",titlePage:"Gidoc"},{link:"folio/sfm",titlePage:"SFM"},{link:"folio/meta-40",titlePage:"Meta 4.0"}]},{icon:$,link:"cvlbgraph",titlePage:"CV"}],R=()=>{const[a,e]=i.useState(null),o=f(),s=i.useRef(null);let l;return i.useEffect(()=>{s.current&&s.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},[o.pathname]),n.jsx("div",{className:"print:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50",children:n.jsx("nav",{className:"mt-2 bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl flex justify-center items-center",children:n.jsx("div",{className:"relative w-full",children:n.jsx("div",{className:"md:overflow-visible overflow-x-auto scrollbar-hide",children:n.jsx("div",{className:"flex space-x-6 whitespace-nowrap px-2 md:justify-center min-w-max",children:B.map(t=>{const m=a===t.titlePage,c=!!t.subPages,h=t.link!==""&&o.pathname.startsWith(`/${t.link}`);return n.jsxs("div",{className:"relative",ref:h?s:null,onMouseEnter:()=>{clearTimeout(l),c&&e(t.titlePage)},onMouseLeave:r=>{var u;l=setTimeout(()=>{e(null)},150),(u=r.relatedTarget)!=null&&u.contains(r.currentTarget)||e(null)},children:[n.jsxs(x,{to:`/${t.link}`,className:`flex items-center gap-2 px-4 py-2 rounded  
                        ${h?"text-blue-600 font-bold":"text-gray-800 hover:text-blue-600"}`,children:[t.icon&&n.jsx(t.icon,{className:"w-5 h-5"}),t.titlePage,c&&n.jsx(M,{className:"hidden md:inline w-3 h-3 text-gray-400 ml-0.5"})]}),c&&m&&n.jsx("div",{className:"hidden md:block absolute left-0 top-full mt-1 w-36 bg-gray-100 border border-gray-300 shadow-lg rounded-lg z-10",children:t.subPages.map(r=>n.jsx(x,{to:`/${r.link}`,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>e(null),children:r.titlePage},r.titlePage))})]},t.titlePage)})})})})})})};export{R as B,$ as F,I as S,d as c};
