(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(116)),i=n(117),o={id:"12_2_introduce",title:"12.2 Centos7\u7aef\u53e3\u8bbe\u7f6e",sidebar_label:"12.2 Centos7\u7aef\u53e3\u8bbe\u7f6e"},l={unversionedId:"12_2_introduce",id:"12_2_introduce",isDocsHomePage:!1,title:"12.2 Centos7\u7aef\u53e3\u8bbe\u7f6e",description:"1\u3001\u5f00\u653e\u7aef\u53e3",source:"@site/docs\\12.2centosPort.mdx",slug:"/12_2_introduce",permalink:"/anno/docs/12_2_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/12.2centosPort.mdx",version:"current",sidebar_label:"12.2 Centos7\u7aef\u53e3\u8bbe\u7f6e",sidebar:"docs",previous:{title:"12.1 Linux\u5e38\u7528\u547d\u4ee4",permalink:"/anno/docs/12_1_introduce"},next:{title:"12.3 nginx\u914d\u7f6e",permalink:"/anno/docs/12_3_nginx"}},s=[{value:"1\u3001\u5f00\u653e\u7aef\u53e3",id:"1\u3001\u5f00\u653e\u7aef\u53e3",children:[]},{value:"2\u3001\u67e5\u770b\u9632\u706b\u5899\u6240\u6709\u5f00\u653e\u7684\u7aef\u53e3",id:"2\u3001\u67e5\u770b\u9632\u706b\u5899\u6240\u6709\u5f00\u653e\u7684\u7aef\u53e3",children:[]},{value:"3.\u3001\u5173\u95ed\u9632\u706b\u5899",id:"3\u3001\u5173\u95ed\u9632\u706b\u5899",children:[]},{value:"4\u3001\u67e5\u770b\u9632\u706b\u5899\u72b6\u6001",id:"4\u3001\u67e5\u770b\u9632\u706b\u5899\u72b6\u6001",children:[]},{value:"5\u3001\u67e5\u770b\u76d1\u542c\u7684\u7aef\u53e3",id:"5\u3001\u67e5\u770b\u76d1\u542c\u7684\u7aef\u53e3",children:[]},{value:"6\u3001\u68c0\u67e5\u7aef\u53e3\u88ab\u54ea\u4e2a\u8fdb\u7a0b\u5360\u7528",id:"6\u3001\u68c0\u67e5\u7aef\u53e3\u88ab\u54ea\u4e2a\u8fdb\u7a0b\u5360\u7528",children:[]},{value:"7\u3001\u67e5\u770b\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f",id:"7\u3001\u67e5\u770b\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f",children:[]},{value:"8\u3001\u4e2d\u6b62\u8fdb\u7a0b",id:"8\u3001\u4e2d\u6b62\u8fdb\u7a0b",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"1\u3001\u5f00\u653e\u7aef\u53e3"},"1\u3001\u5f00\u653e\u7aef\u53e3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"\nfirewall-cmd --zone=public --add-port=5672/tcp --permanent   # \u5f00\u653e5672\u7aef\u53e3\n\nfirewall-cmd --zone=public --remove-port=5672/tcp --permanent  #\u5173\u95ed5672\u7aef\u53e3\n\nfirewall-cmd --reload   # \u914d\u7f6e\u7acb\u5373\u751f\u6548\n")),Object(c.b)("h3",{id:"2\u3001\u67e5\u770b\u9632\u706b\u5899\u6240\u6709\u5f00\u653e\u7684\u7aef\u53e3"},"2\u3001\u67e5\u770b\u9632\u706b\u5899\u6240\u6709\u5f00\u653e\u7684\u7aef\u53e3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --zone=public --list-ports\n")),Object(c.b)("h3",{id:"3\u3001\u5173\u95ed\u9632\u706b\u5899"},"3.\u3001\u5173\u95ed\u9632\u706b\u5899"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld.service\n")),Object(c.b)("h3",{id:"4\u3001\u67e5\u770b\u9632\u706b\u5899\u72b6\u6001"},"4\u3001\u67e5\u770b\u9632\u706b\u5899\u72b6\u6001"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"}," firewall-cmd --state\n")),Object(c.b)("h3",{id:"5\u3001\u67e5\u770b\u76d1\u542c\u7684\u7aef\u53e3"},"5\u3001\u67e5\u770b\u76d1\u542c\u7684\u7aef\u53e3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"netstat -lnpt\n")),Object(c.b)("img",{src:Object(i.a)("img/netstat01.jpg")}),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u7279\u522b\u6ce8\u610f")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\xa0","\xa0","\xa0","\xa0","\xa0",Object(c.b)("inlineCode",{parentName:"p"},"Centos7")," \u9ed8\u8ba4\u6ca1\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"netstat")," \u547d\u4ee4\uff0c\u9700\u8981\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"net-tools")," \u5de5\u5177\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"yum install -y net-tools")))),Object(c.b)("h3",{id:"6\u3001\u68c0\u67e5\u7aef\u53e3\u88ab\u54ea\u4e2a\u8fdb\u7a0b\u5360\u7528"},"6\u3001\u68c0\u67e5\u7aef\u53e3\u88ab\u54ea\u4e2a\u8fdb\u7a0b\u5360\u7528"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"netstat -lnpt |grep 6660\n")),Object(c.b)("img",{src:Object(i.a)("img/netstat02.jpg")}),Object(c.b)("h3",{id:"7\u3001\u67e5\u770b\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f"},"7\u3001\u67e5\u770b\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"ps 2093\n")),Object(c.b)("img",{src:Object(i.a)("img/netstat03.jpg")}),Object(c.b)("h3",{id:"8\u3001\u4e2d\u6b62\u8fdb\u7a0b"},"8\u3001\u4e2d\u6b62\u8fdb\u7a0b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kill -9 2093\n")))}b.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(21),a=n(118);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},118:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);