(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,m=u["".concat(c,".").concat(s)]||u[s]||b[s]||i;return t?o.a.createElement(m,a(a({ref:n},d),{},{components:t})):o.a.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var d=2;d<i;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},118:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var r=t(20),o=t(119);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,r){let{forcePrependBaseUrl:i=!1,absolute:c=!1}=void 0===r?{}:r;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(i)return n+t;const a=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+a:a}(n,e,t,r)}}function c(e,n){void 0===n&&(n={});const{withBaseUrl:t}=i();return t(e,n)}},119:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),i=(t(0),t(117)),c=t(118),a=["components"],l={id:"7_1_introduce",title:"7.1 Hello World",sidebar_label:"7.1 \u6dfb\u52a0HelloWorld\u670d\u52a1"},d={unversionedId:"7_1_introduce",id:"7_1_introduce",isDocsHomePage:!1,title:"7.1 Hello World",description:"Anno\u5fae\u670d\u52a1\u5f15\u64ce\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0cAnno\u4e13\u6ce8\u4e8e\u670d\u52a1\u6cbb\u7406\uff0c\u5bf9\u4e1a\u52a1\u4ee3\u7801\u6df1\u5ea6\u89e3\u8026\u3002\u4e0b\u9762\u6211\u4eec\u6765\u5199\u4e00\u4e2aHello World \u670d\u52a1\uff0c\u4ee5\u6b64\u4f5c\u4e3a\u5f15\u5b50",source:"@site/docs\\7.hello-world.mdx",slug:"/7_1_introduce",permalink:"/docs/7_1_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/7.hello-world.mdx",version:"current",sidebar_label:"7.1 \u6dfb\u52a0HelloWorld\u670d\u52a1",sidebar:"docs",previous:{title:"6.2 \u96c6\u7fa4\u63a5\u53e3\u6587\u6863\u8be6\u7ec6\u7528\u6cd5",permalink:"/docs/6_2_introduce"},next:{title:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",permalink:"/docs/7_2_introduce"}},p=[{value:"7.1 \u65b0\u5efa\u4e00\u4e2a.Net Core \u7684\u63a7\u5236\u53f0\u7a0b\u5e8f",id:"71-\u65b0\u5efa\u4e00\u4e2anet-core-\u7684\u63a7\u5236\u53f0\u7a0b\u5e8f",children:[]},{value:"7.2 \u6dfb\u52a0Anno\u4f9d\u8d56",id:"72-\u6dfb\u52a0anno\u4f9d\u8d56",children:[]}],u={toc:p};function b(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u3000\u3000Anno\u5fae\u670d\u52a1\u5f15\u64ce\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0cAnno\u4e13\u6ce8\u4e8e\u670d\u52a1\u6cbb\u7406\uff0c\u5bf9\u4e1a\u52a1\u4ee3\u7801\u6df1\u5ea6\u89e3\u8026\u3002\u4e0b\u9762\u6211\u4eec\u6765\u5199\u4e00\u4e2aHello World \u670d\u52a1\uff0c\u4ee5\u6b64\u4f5c\u4e3a\u5f15\u5b50\n\u8ba9\u6211\u4eec\u4e86\u89e3Anno\u670d\u52a1\u7684\u521b\u5efa\u6709\u591a\u7b80\u5355\u3002"),Object(i.b)("h3",{id:"71-\u65b0\u5efa\u4e00\u4e2anet-core-\u7684\u63a7\u5236\u53f0\u7a0b\u5e8f"},"7.1 \u65b0\u5efa\u4e00\u4e2a.Net Core \u7684\u63a7\u5236\u53f0\u7a0b\u5e8f"),Object(i.b)("p",null,"\u3000\u3000\u8ba9\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a.Net Core \u7684\u63a7\u5236\u53f0\u7a0b\u5e8f\u4f5c\u4e3a\u670d\u52a1\u63d2\u4ef6\u7684\u5bbf\u4e3b\u7a0b\u5e8f\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2aWindow\u670d\u52a1\u7a0b\u5e8f\u3001Winform\u7a0b\u5e8f\u4f5c\u4e3a\u63d2\u4ef6\u5bbf\u4e3b\u7a0b\u5e8f\u3002\n\u8fd9\u91cc\u4ee5.Net Core\u63a7\u5236\u53f0\u7a0b\u5e8f\u4e3a\u4f8b\u3002 "),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworld01.png")})),Object(i.b)("h3",{id:"72-\u6dfb\u52a0anno\u4f9d\u8d56"},"7.2 \u6dfb\u52a0Anno\u4f9d\u8d56"),Object(i.b)("p",null,"\u3000\u3000\u6dfb\u52a0\u4f9d\u8d56\u9700\u8981\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"Anno.EngineData")," \uff0c\u4e00\u4e2a\u662f",Object(i.b)("inlineCode",{parentName:"p"},"Anno.Rpc.Server"),"\u3002",Object(i.b)("inlineCode",{parentName:"p"},"Anno.Rpc.Server"),"\u662fAnno\u670d\u52a1\u7684\u6838\u5fc3\u7a0b\u5e8f\u5305\uff0c\n",Object(i.b)("inlineCode",{parentName:"p"},"Anno.EngineData")," \u662f\u4e00\u4e2a\u53ef\u9009\u7a0b\u5e8f\u5305\uff0c\u5728\u8fd9\u91cc\u4e3b\u8981\u662f\u56e0\u4e3a\u4e1a\u52a1\u63d2\u4ef6\uff08\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"Anno.Plugs.ViperService"),"\uff09\u662f\u4e00\u4e2a\u548c\u901a\u8baf\u89e3\u8026\u7684\u6a21\u5757\uff0c\n\u4e3a\u4e86\u65b9\u4fbf\u670d\u52a1\u4e4b\u95f4\u4e5f\u53ef\u4ee5\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"Anno.EngineData")," \u91cc\u9762\u58f0\u660e\u4e86\u670d\u52a1\u4e4b\u95f4\u8c03\u7528\u7684\u63a5\u53e3\u7ea6\u675f\u3002Thrift\u3001Grpc \u63d2\u4ef6\u91cc\u9762\u505a\u5b9e\u73b0\uff0c\n\u4ee5\u6b64\u6765\u89e3\u8026\u901a\u8baf\u7ec4\u4ef6\u548c\u4e1a\u52a1\u63d2\u4ef6\u3002"),Object(i.b)("h4",{id:"\u6dfb\u52a0anno-nuget\u4f9d\u8d56"},"\u6dfb\u52a0Anno Nuget\u4f9d\u8d56"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"dotnet add package Anno.Rpc.Server --version 1.7.0.1\n")),Object(i.b)("h4",{id:"\u589e\u52a0\u4e00\u4e2aanno\u914d\u7f6e\u6587\u4ef6"},"\u589e\u52a0\u4e00\u4e2aAnno\u914d\u7f6e\u6587\u4ef6"),Object(i.b)("p",null,"\u3000\u3000\u3000Anno\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"Anno.config"),",\u6211\u4eec\u76f4\u63a5\u590d\u5236\u4e00\u4e2a\u8fc7\u6765\u4fee\u6539\u5c31\u53ef\u4ee5\u4e86\u3002\u4e3b\u8981\u8fd8\u662f\u4fee\u6539\u4e0b\u670d\u52a1\u7684",Object(i.b)("inlineCode",{parentName:"p"},"\u7aef\u53e3"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"\u540d\u79f0"),"\u3002\n\u4fee\u6539\u5b8c\u57ce\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u542f\u52a8\u670d\u52a1\u4e86\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n  \x3c!--0,0 \u7b2c\u4e00\u4f4d\u662f \u5de5\u4f5c\u7ad9\uff0c\u7b2c\u4e8c\u4f4d\u6570\u636e\u4e2d\u5fc3\n  \uff08\u6240\u6709\u7684 AnnoService \u7684 \u4e24\u4f4d\u6570\u4e0d\u80fd\u91cd\u590d\u4f8b\u5982\u4e0d\u80fd\u5b58\u5728\u30101,2\u3011\u30101,2\u3011\uff09\n  \u53ef\u4ee5\u5b58\u5728\u30101,2\u3011\u30102,1\u3011\n  --\x3e\n  <IdWorker>0,1</IdWorker>\n  \x3c!--App\u540d\u79f0--\x3e\n  <AppName>HelloWorld</AppName>\n  \x3c!--\u76d1\u542c\u7aef\u53e3--\x3e\n  <Port>7012</Port>\n  \x3c!--\u6743\u91cd--\x3e\n  <Weight>1</Weight>\n  \x3c!--\u529f\u80fd \u975eAnno.Plugs  \u52a0\u5165\u65b9\u5f0f--\x3e\n  <FuncName></FuncName>\n  \x3c!--\u5ffd\u7565\u7684\u529f\u80fd Trace,Logic--\x3e\n  <IgnoreFuncName></IgnoreFuncName>\n  \x3c!--\u8d85\u65f6\u65f6\u95f4\u6beb\u79d2--\x3e\n  <TimeOut>20000</TimeOut>\n  \x3c!--\u6ce8\u518c\u5230\u7684\u76ee\u6807--\x3e\n  <Ts Ip="127.0.0.1" Port="7010"/>\n  <IocDll>\n    \x3c!-- IOC \u4ed3\u50a8--\x3e\n    <Assembly>Anno.Repository</Assembly>\n  </IocDll>\n  <appSettings>\n   \x3c!-- \u6ca1\u6709\u7528\u5230Redis\u53ef\u4ee5\u7559\u7a7a\u9ed8\u8ba4\n    <add key="redisConn" value=""/>\n    <add key="redisPrefix" value="HW:"/>\n    <add key="redisExpiryDate" value="20"/>\n    <add key="redisSwitch" value="false"/>\n    --\x3e\n  </appSettings>\n</configuration>\n\n')),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/helloworld02.png")})),Object(i.b)("p",null,"\u3000\u3000\u3000\u5230\u6b64\u4e3a\u6b62\u4e00\u4e2aHelloWorld\u670d\u52a1\u5df2\u7ecf\u7f16\u5199\u5b8c\u6210\u4e14\u6210\u529f\u542f\u52a8\u3002\u6bcf\u9694\u4e00\u79d2\u4f1a\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u3002\u53e6\u5916\u6211\u4eec\u53ea\u770b\u5230",Object(i.b)("inlineCode",{parentName:"p"},"Anno.Plugs.MonitorService\u670d\u52a1\u529f\u80fdTag"),"\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u8fd8\u6ca1\u6709\u7f16\u5199\u529f\u80fd\u63d2\u4ef6\u3002\n\u4e0b\u4e00\u5c0f\u8282\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u529f\u80fd\u63d2\u4ef6\u3002"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u77e5\u8bc6\u5bfc\u822a")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\xa0","\xa0","\xa0","\xa0","\xa0","\u65e9\u671f\u7248\u672c",Object(i.b)("inlineCode",{parentName:"p"},"\u6ce8\u518c\u4e2d\u5fc3"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"\u5fae\u670d\u52a1")," \u63d0\u793a\u4fe1\u606f\u4f1a\u5728\u63a7\u5236\u53f0\u8f93\u51fa\uff0c\u65b0\u7248\u672c\u4e0d\u5728\u63a7\u5236\u53f0\u8f93\u51fa\u3002\n\u6539\u4e3a\u7a0b\u5e8f\u8fd0\u884c\u76ee\u5f55\u4e0b",Object(i.b)("inlineCode",{parentName:"p"},"log")," \u6587\u4ef6\u5939\u4e0b"))))}b.isMDXComponent=!0}}]);