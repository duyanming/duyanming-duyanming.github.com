(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,f=b["".concat(c,".").concat(p)]||b[p]||s[p]||i;return r?o.a.createElement(f,l(l({ref:t},u),{},{components:r})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},118:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(20),o=r(119);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:i=!1,absolute:c=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(t,e,r,n)}}function c(e,t){void 0===t&&(t={});const{withBaseUrl:r}=i();return r(e,t)}},119:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(117)),c=r(118),l=["components"],a={id:"7_3_introduce",title:"7.3 \u63d2\u4ef6ApiDoc\u6587\u6863",sidebar_label:"7.3 ApiDoc\u6587\u6863"},u={unversionedId:"7_3_introduce",id:"7_3_introduce",isDocsHomePage:!1,title:"7.3 \u63d2\u4ef6ApiDoc\u6587\u6863",description:"7.3.1HelloWorld\u670d\u52a1 DashBoard",source:"@site/docs\\7.3.hello-world-plugs-apiDoc.mdx",slug:"/7_3_introduce",permalink:"/docs/7_3_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/7.3.hello-world-plugs-apiDoc.mdx",version:"current",sidebar_label:"7.3 ApiDoc\u6587\u6863",sidebar:"docs",previous:{title:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",permalink:"/docs/7_2_introduce"},next:{title:"8.1 \u96c6\u6210Java",permalink:"/docs/8_1_introduce"}},d=[{value:"7.3.1HelloWorld\u670d\u52a1 DashBoard",id:"731helloworld\u670d\u52a1-dashboard",children:[]},{value:"7.3.3 HelloWorld-HelloWorld ApiDoc\u6587\u6863",id:"733-helloworld-helloworld-apidoc\u6587\u6863",children:[]},{value:"7.3.4 \u8c03\u8bd5\u4e00\u4e2a\u63a5\u53e3",id:"734-\u8c03\u8bd5\u4e00\u4e2a\u63a5\u53e3",children:[]}],b={toc:d};function s(e){var t=e.components,r=Object(o.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"731helloworld\u670d\u52a1-dashboard"},"7.3.1HelloWorld\u670d\u52a1 DashBoard"),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworldDashboard01.jpg")})),Object(i.b)("br",null),"###  7.3.2 HelloWorld-SoEasy ApiDoc\u6587\u6863",Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworlddashboard02.jpg")})),Object(i.b)("br",null),Object(i.b)("h3",{id:"733-helloworld-helloworld-apidoc\u6587\u6863"},"7.3.3 HelloWorld-HelloWorld ApiDoc\u6587\u6863"),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/router.jpg")})),Object(i.b)("br",null),Object(i.b)("h3",{id:"734-\u8c03\u8bd5\u4e00\u4e2a\u63a5\u53e3"},"7.3.4 \u8c03\u8bd5\u4e00\u4e2a\u63a5\u53e3"),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworlddashboard04.jpg")})),Object(i.b)("br",null),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworlddashboard05.jpg")})),Object(i.b)("br",null))}s.isMDXComponent=!0}}]);