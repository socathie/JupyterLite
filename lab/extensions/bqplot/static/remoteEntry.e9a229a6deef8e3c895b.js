var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,d,l,f,u,s,c,p,h,b,v,g,m={8873:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(463),t.e(668),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(463),t.e(668),t.e(568),t.e(133)]).then((()=>()=>t(2133)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return m[e].call(t.exports,t,t.exports,w),t.exports}w.m=m,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{87:"0910f73118566e721f63",133:"4ca5eef7d9a34d394ab3",212:"517344bcbaf583cc624d",297:"20b084e3804ffd49fd74",463:"2c7d20e239737756286a",469:"1f6db051fc9396794035",501:"e9cd969389fdad85fbd9",568:"5c5ce692550342502537",662:"4e0881a29e96dd519ce4",668:"336b0bf8567a1f8e228c",963:"48ee8f8b4580f2b71be2",981:"8e630ac56fa60d1bf407"}[e]+".js?v="+{87:"0910f73118566e721f63",133:"4ca5eef7d9a34d394ab3",212:"517344bcbaf583cc624d",297:"20b084e3804ffd49fd74",463:"2c7d20e239737756286a",469:"1f6db051fc9396794035",501:"e9cd969389fdad85fbd9",568:"5c5ce692550342502537",662:"4e0881a29e96dd519ce4",668:"336b0bf8567a1f8e228c",963:"48ee8f8b4580f2b71be2",981:"8e630ac56fa60d1bf407"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="bqplot:",w.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var u=l[f];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),d&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="bqplot",d=(e,r,t,n)=>{var o=a[e]=a[e]||{},d=o[r];(!d||!d.loaded&&(!n!=!d.eager?n:i>d.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];switch(t){case"default":d("bqplot","0.5.31",(()=>Promise.all([w.e(463),w.e(668),w.e(568)]).then((()=>()=>w(1568))))),d("d3-selection","1.4.2",(()=>w.e(297).then((()=>()=>w(2297))))),d("d3","5.16.0",(()=>Promise.all([w.e(463),w.e(662),w.e(668),w.e(469)]).then((()=>()=>w(662))))),d("is-typedarray","1.0.0",(()=>w.e(501).then((()=>()=>w(4501))))),d("popper.js","1.16.1",(()=>w.e(981).then((()=>()=>w(8981))))),d("three","0.91.0",(()=>w.e(212).then((()=>()=>w(2212))))),d("topojson","1.6.27",(()=>w.e(87).then((()=>()=>w(9087))))),d("underscore","0",(()=>w.e(963).then((()=>()=>w(7963)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],d=(typeof i)[0];if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(d=e[a]))[0]?"-":(n>0?".":"")+(n=2,d);return t}var i=[];for(a=1;a<e.length;a++){var d=e[a];i.push(0===d?"not("+l()+")":1===d?"("+l()+" || "+l()+")":2===d?i.pop()+" "+i.pop():o(d))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,d=1,l=!0;;d++,i++){var f,u,s=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(u=(typeof(f=r[i]))[0]))return!l||("u"==s?d>n&&!o:""==s!=o);if("u"==u){if(!l||"u"!=s)return!1}else if(l)if(s==u)if(d<=n){if(f!=e[d])return!1}else{if(o?f>e[d]:f<e[d])return!1;f!=e[d]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||d<=n)return!1;l=!1,d--}else{if(d<=n||u<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,d--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",f=(e,r,t,n)=>{var o=d(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,o,n)),s(e[t][o])},u=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},s=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,o){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),h=c(((e,r,t,n,o)=>{var a=r&&w.o(r,t)&&u(r,t,n);return a?s(a):o()})),b={},v={1668:()=>h("default","d3-selection",[1,1],(()=>w.e(297).then((()=>()=>w(2297))))),366:()=>h("default","d3",[1,5,7,0],(()=>Promise.all([w.e(662),w.e(469)]).then((()=>()=>w(662))))),2729:()=>h("default","is-typedarray",[1,1,0,0],(()=>w.e(501).then((()=>()=>w(4501))))),3211:()=>p("default","@lumino/messaging",[1,1,4,3]),5335:()=>p("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2],1,1]),5384:()=>h("default","three",[2,0,91,0],(()=>w.e(212).then((()=>()=>w(2212))))),6510:()=>p("default","@lumino/widgets",[1,1,16,1]),7398:()=>h("default","popper.js",[1,1,0,0],(()=>w.e(981).then((()=>()=>w(8981))))),8731:()=>h("default","underscore",[1,1,8,3],(()=>w.e(963).then((()=>()=>w(7963))))),9363:()=>h("default","topojson",[1,1,6,24],(()=>w.e(87).then((()=>()=>w(9087))))),6469:()=>h("default","d3-selection",[1,1,1,0],(()=>w.e(297).then((()=>()=>w(2297)))))},g={469:[6469],568:[366,2729,3211,5335,5384,6510,7398,8731,9363],668:[1668]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete b[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=v[e]();o.then?r.push(b[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={632:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(469|668)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,d]=t,l=0;for(n in i)w.o(i,n)&&(w.m[n]=i[n]);for(d&&d(w),r&&r(t);l<a.length;l++)o=a[l],w.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0},t=self.webpackChunkbqplot=self.webpackChunkbqplot||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=w(8873);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).bqplot=S})();