(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,r,t){"use strict";t.d(r,"a",(function(){return a})),t.d(r,"b",(function(){return b}));var n=t(0),s=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),l=function(e){var r=s.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},a=function(e){var r=l(e.components);return s.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},v=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),a=l(t),v=n,b=a["".concat(i,".").concat(v)]||a[v]||d[v]||o;return t?s.a.createElement(b,u(u({ref:r},c),{},{components:t})):s.a.createElement(b,u({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=v;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},118:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return i}));var n=t(21),s=t(119);function o(){const{siteConfig:{baseUrl:e="/",url:r}={}}=Object(n.default)();return{withBaseUrl:(t,n)=>function(e,r,t,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(s.b)(t))return t;if(n)return r+t;const i=t.startsWith(r)?t:r+t.replace(/^\//,"");return o?e+i:i}(r,e,t,n)}}function i(e,r={}){const{withBaseUrl:t}=o();return t(e,r)}},119:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return s}))},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),s=t(7),o=(t(0),t(117)),i=(t(118),{id:"12_4_supervisor",title:"12.4 supervisor\u914d\u7f6e",sidebar_label:"12.4 supervisor\u914d\u7f6e"}),u={unversionedId:"12_4_supervisor",id:"12_4_supervisor",isDocsHomePage:!1,title:"12.4 supervisor\u914d\u7f6e",description:"\u4e00\u3001supervisor\u7b80\u4ecb",source:"@site/docs\\12.4supervisor.mdx",slug:"/12_4_supervisor",permalink:"/docs/12_4_supervisor",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/12.4supervisor.mdx",version:"current",sidebar_label:"12.4 supervisor\u914d\u7f6e",sidebar:"docs",previous:{title:"12.3 nginx\u914d\u7f6e",permalink:"/docs/12_3_nginx"},next:{title:"13.1 \u597d\u6587\u7ae0\u96c6\u5408",permalink:"/docs/13_1_introduce"}},p=[{value:"\u4e00\u3001supervisor\u7b80\u4ecb",id:"\u4e00\u3001supervisor\u7b80\u4ecb",children:[]},{value:"\u4e8c\u3001supervisor\u5b89\u88c5",id:"\u4e8c\u3001supervisor\u5b89\u88c5",children:[]},{value:"\u4e09\u3001supervisor\u4f7f\u7528",id:"\u4e09\u3001supervisor\u4f7f\u7528",children:[]},{value:"\u56db\u3001\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",id:"\u56db\u3001\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",children:[]}],c={toc:p};function l(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u4e00\u3001supervisor\u7b80\u4ecb"},"\u4e00\u3001supervisor\u7b80\u4ecb"),Object(o.b)("p",null,"Supervisor\u662f\u7528Python\u5f00\u53d1\u7684\u4e00\u5957\u901a\u7528\u7684\u8fdb\u7a0b\u7ba1\u7406\u7a0b\u5e8f\uff0c\u80fd\u5c06\u4e00\u4e2a\u666e\u901a\u7684\u547d\u4ee4\u884c\u8fdb\u7a0b\u53d8\u4e3a\u540e\u53f0daemon\uff0c\u5e76\u76d1\u63a7\u8fdb\u7a0b\u72b6\u6001\uff0c\u5f02\u5e38\u9000\u51fa\u65f6\u80fd\u81ea\u52a8\u91cd\u542f\u3002\u5b83\u662f\u901a\u8fc7fork/exec\u7684\u65b9\u5f0f\u628a\u8fd9\u4e9b\u88ab\u7ba1\u7406\u7684\u8fdb\u7a0b\u5f53\u4f5csupervisor\u7684\u5b50\u8fdb\u7a0b\u6765\u542f\u52a8\uff0c\u8fd9\u6837\u53ea\u8981\u5728supervisor\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u628a\u8981\u7ba1\u7406\u7684\u8fdb\u7a0b\u7684\u53ef\u6267\u884c\u6587\u4ef6\u7684\u8def\u5f84\u5199\u8fdb\u53bb\u5373\u53ef\u3002\u4e5f\u5b9e\u73b0\u5f53\u5b50\u8fdb\u7a0b\u6302\u6389\u7684\u65f6\u5019\uff0c\u7236\u8fdb\u7a0b\u53ef\u4ee5\u51c6\u786e\u83b7\u53d6\u5b50\u8fdb\u7a0b\u6302\u6389\u7684\u4fe1\u606f\u7684\uff0c\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u81ea\u5df1\u542f\u52a8\u548c\u62a5\u8b66\u3002supervisor\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u529f\u80fd\uff0c\u53ef\u4ee5\u4e3asupervisord\u6216\u8005\u6bcf\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u975eroot\u7684user\uff0c\u8fd9\u4e2auser\u5c31\u53ef\u4ee5\u7ba1\u7406\u5b83\u5bf9\u5e94\u7684\u8fdb\u7a0b\u3002"),Object(o.b)("p",null,"\u6ce8\uff1a\u672c\u6587\u4ee5centos7\u4e3a\u4f8b\uff0csupervisor\u7248\u672c3.4.0\u3002"),Object(o.b)("h3",{id:"\u4e8c\u3001supervisor\u5b89\u88c5"},"\u4e8c\u3001supervisor\u5b89\u88c5"),Object(o.b)("p",null,"\u914d\u7f6e\u597dyum\u6e90\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yum install supervisor\n")),Object(o.b)("p",null,"Debian/Ubuntu\u53ef\u901a\u8fc7apt\u5b89\u88c5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"apt-get install supervisor\n")),Object(o.b)("p",null,"pip\u5b89\u88c5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"pip install supervisor\n")),Object(o.b)("p",null,"easy_install\u5b89\u88c5"),Object(o.b)("p",null,"easy_install supervisor"),Object(o.b)("h3",{id:"\u4e09\u3001supervisor\u4f7f\u7528"},"\u4e09\u3001supervisor\u4f7f\u7528"),Object(o.b)("p",null,"supervisor\u914d\u7f6e\u6587\u4ef6\uff1a/etc/supervisord.conf\n\u6ce8\uff1asupervisor\u7684\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u662f\u4e0d\u5168\u7684\uff0c\u4e0d\u8fc7\u5728\u5927\u90e8\u5206\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0a\u9762\u8bf4\u7684\u57fa\u672c\u529f\u80fd\u5df2\u7ecf\u6ee1\u8db3\u3002"),Object(o.b)("p",null,"\u5b50\u8fdb\u7a0b\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a/etc/supervisord.d/\n\u6ce8\uff1a\u9ed8\u8ba4\u5b50\u8fdb\u7a0b\u914d\u7f6e\u6587\u4ef6\u4e3aini\u683c\u5f0f\uff0c\u53ef\u5728supervisor\u4e3b\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\u3002"),Object(o.b)("h3",{id:"\u56db\u3001\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},"\u56db\u3001\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),Object(o.b)("p",null,"supervisor.conf\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"[unix_http_server]\nfile=/tmp/supervisor.sock   ;UNIX socket \u6587\u4ef6\uff0csupervisorctl \u4f1a\u4f7f\u7528\n;chmod=0700                 ;socket\u6587\u4ef6\u7684mode\uff0c\u9ed8\u8ba4\u662f0700\n;chown=nobody:nogroup       ;socket\u6587\u4ef6\u7684owner\uff0c\u683c\u5f0f\uff1auid:gid\n \n;[inet_http_server]         ;HTTP\u670d\u52a1\u5668\uff0c\u63d0\u4f9bweb\u7ba1\u7406\u754c\u9762\n;port=127.0.0.1:9001        ;Web\u7ba1\u7406\u540e\u53f0\u8fd0\u884c\u7684IP\u548c\u7aef\u53e3\uff0c\u5982\u679c\u5f00\u653e\u5230\u516c\u7f51\uff0c\u9700\u8981\u6ce8\u610f\u5b89\u5168\u6027\n;username=user              ;\u767b\u5f55\u7ba1\u7406\u540e\u53f0\u7684\u7528\u6237\u540d\n;password=123               ;\u767b\u5f55\u7ba1\u7406\u540e\u53f0\u7684\u5bc6\u7801\n \n[supervisord]\nlogfile=/tmp/supervisord.log ;\u65e5\u5fd7\u6587\u4ef6\uff0c\u9ed8\u8ba4\u662f $CWD/supervisord.log\nlogfile_maxbytes=50MB        ;\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\uff0c\u8d85\u51fa\u4f1arotate\uff0c\u9ed8\u8ba4 50MB\uff0c\u5982\u679c\u8bbe\u62100\uff0c\u8868\u793a\u4e0d\u9650\u5236\u5927\u5c0f\nlogfile_backups=10           ;\u65e5\u5fd7\u6587\u4ef6\u4fdd\u7559\u5907\u4efd\u6570\u91cf\u9ed8\u8ba410\uff0c\u8bbe\u4e3a0\u8868\u793a\u4e0d\u5907\u4efd\nloglevel=info                ;\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4info\uff0c\u5176\u5b83: debug,warn,trace\npidfile=/tmp/supervisord.pid ;pid \u6587\u4ef6\nnodaemon=false               ;\u662f\u5426\u5728\u524d\u53f0\u542f\u52a8\uff0c\u9ed8\u8ba4\u662ffalse\uff0c\u5373\u4ee5 daemon \u7684\u65b9\u5f0f\u542f\u52a8\nminfds=1024                  ;\u53ef\u4ee5\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6700\u5c0f\u503c\uff0c\u9ed8\u8ba4 1024\nminprocs=200                 ;\u53ef\u4ee5\u6253\u5f00\u7684\u8fdb\u7a0b\u6570\u7684\u6700\u5c0f\u503c\uff0c\u9ed8\u8ba4 200\n \n[supervisorctl]\nserverurl=unix:///tmp/supervisor.sock ;\u901a\u8fc7UNIX socket\u8fde\u63a5supervisord\uff0c\u8def\u5f84\u4e0eunix_http_server\u90e8\u5206\u7684file\u4e00\u81f4\n;serverurl=http://127.0.0.1:9001 ; \u901a\u8fc7HTTP\u7684\u65b9\u5f0f\u8fde\u63a5supervisord\n \n; [program:xx]\u662f\u88ab\u7ba1\u7406\u7684\u8fdb\u7a0b\u914d\u7f6e\u53c2\u6570\uff0cxx\u662f\u8fdb\u7a0b\u7684\u540d\u79f0\n[program:xx]\ncommand=/opt/apache-tomcat-8.0.35/bin/catalina.sh run  ; \u7a0b\u5e8f\u542f\u52a8\u547d\u4ee4\nautostart=true       ; \u5728supervisord\u542f\u52a8\u7684\u65f6\u5019\u4e5f\u81ea\u52a8\u542f\u52a8\nstartsecs=10         ; \u542f\u52a810\u79d2\u540e\u6ca1\u6709\u5f02\u5e38\u9000\u51fa\uff0c\u5c31\u8868\u793a\u8fdb\u7a0b\u6b63\u5e38\u542f\u52a8\u4e86\uff0c\u9ed8\u8ba4\u4e3a1\u79d2\nautorestart=true     ; \u7a0b\u5e8f\u9000\u51fa\u540e\u81ea\u52a8\u91cd\u542f,\u53ef\u9009\u503c\uff1a[unexpected,true,false]\uff0c\u9ed8\u8ba4\u4e3aunexpected\uff0c\u8868\u793a\u8fdb\u7a0b\u610f\u5916\u6740\u6b7b\u540e\u624d\u91cd\u542f\nstartretries=3       ; \u542f\u52a8\u5931\u8d25\u81ea\u52a8\u91cd\u8bd5\u6b21\u6570\uff0c\u9ed8\u8ba4\u662f3\nuser=tomcat          ; \u7528\u54ea\u4e2a\u7528\u6237\u542f\u52a8\u8fdb\u7a0b\uff0c\u9ed8\u8ba4\u662froot\npriority=999         ; \u8fdb\u7a0b\u542f\u52a8\u4f18\u5148\u7ea7\uff0c\u9ed8\u8ba4999\uff0c\u503c\u5c0f\u7684\u4f18\u5148\u542f\u52a8\nredirect_stderr=true ; \u628astderr\u91cd\u5b9a\u5411\u5230stdout\uff0c\u9ed8\u8ba4false\nstdout_logfile_maxbytes=20MB  ; stdout \u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba450MB\nstdout_logfile_backups = 20   ; stdout \u65e5\u5fd7\u6587\u4ef6\u5907\u4efd\u6570\uff0c\u9ed8\u8ba4\u662f10\n; stdout \u65e5\u5fd7\u6587\u4ef6\uff0c\u9700\u8981\u6ce8\u610f\u5f53\u6307\u5b9a\u76ee\u5f55\u4e0d\u5b58\u5728\u65f6\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u6240\u4ee5\u9700\u8981\u624b\u52a8\u521b\u5efa\u76ee\u5f55\uff08supervisord \u4f1a\u81ea\u52a8\u521b\u5efa\u65e5\u5fd7\u6587\u4ef6\uff09\nstdout_logfile=/opt/apache-tomcat-8.0.35/logs/catalina.out\nstopasgroup=false     ;\u9ed8\u8ba4\u4e3afalse,\u8fdb\u7a0b\u88ab\u6740\u6b7b\u65f6\uff0c\u662f\u5426\u5411\u8fd9\u4e2a\u8fdb\u7a0b\u7ec4\u53d1\u9001stop\u4fe1\u53f7\uff0c\u5305\u62ec\u5b50\u8fdb\u7a0b\nkillasgroup=false     ;\u9ed8\u8ba4\u4e3afalse\uff0c\u5411\u8fdb\u7a0b\u7ec4\u53d1\u9001kill\u4fe1\u53f7\uff0c\u5305\u62ec\u5b50\u8fdb\u7a0b\n \n;\u5305\u542b\u5176\u5b83\u914d\u7f6e\u6587\u4ef6\n[include]\nfiles = relative/directory/*.ini    ;\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u4ee5.ini\u7ed3\u675f\u7684\u914d\u7f6e\u6587\u4ef6\n\u5b50\u8fdb\u7a0b\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\uff1a\n\u7ed9\u9700\u8981\u7ba1\u7406\u7684\u5b50\u8fdb\u7a0b(\u7a0b\u5e8f)\u7f16\u5199\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u653e\u5728/etc/supervisor.d/\u76ee\u5f55\u4e0b\uff0c\u4ee5.ini\u4f5c\u4e3a\u6269\u5c55\u540d\uff08\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u914d\u7f6e\u6587\u4ef6\u90fd\u53ef\u4ee5\u5355\u72ec\u5206\u62c6\u4e5f\u53ef\u4ee5\u628a\u76f8\u5173\u7684\u811a\u672c\u653e\u4e00\u8d77\uff09\u3002\u5982\u4efb\u610f\u5b9a\u4e49\u4e00\u4e2a\u548c\u811a\u672c\u76f8\u5173\u7684\u9879\u76ee\u540d\u79f0\u7684\u9009\u9879\u7ec4\uff08/etc/supervisord.d/test.conf\uff09\uff1a\n\n#\u9879\u76ee\u540d\n[program:blog]\n#\u811a\u672c\u76ee\u5f55\ndirectory=/opt/bin\n#\u811a\u672c\u6267\u884c\u547d\u4ee4\ncommand=/usr/bin/python /opt/bin/test.py\n\n#supervisor\u542f\u52a8\u7684\u65f6\u5019\u662f\u5426\u968f\u7740\u540c\u65f6\u542f\u52a8\uff0c\u9ed8\u8ba4True\nautostart=true\n#\u5f53\u7a0b\u5e8fexit\u7684\u65f6\u5019\uff0c\u8fd9\u4e2aprogram\u4e0d\u4f1a\u81ea\u52a8\u91cd\u542f,\u9ed8\u8ba4unexpected\uff0c\u8bbe\u7f6e\u5b50\u8fdb\u7a0b\u6302\u6389\u540e\u81ea\u52a8\u91cd\u542f\u7684\u60c5\u51b5\uff0c\u6709\u4e09\u4e2a\u9009\u9879\uff0cfalse,unexpected\u548ctrue\u3002\u5982\u679c\u4e3afalse\u7684\u65f6\u5019\uff0c\u65e0\u8bba\u4ec0\u4e48\u60c5\u51b5\u4e0b\uff0c\u90fd\u4e0d\u4f1a\u88ab\u91cd\u65b0\u542f\u52a8\uff0c\u5982\u679c\u4e3aunexpected\uff0c\u53ea\u6709\u5f53\u8fdb\u7a0b\u7684\u9000\u51fa\u7801\u4e0d\u5728\u4e0b\u9762\u7684exitcodes\u91cc\u9762\u5b9a\u4e49\u7684\nautorestart=false\n#\u8fd9\u4e2a\u9009\u9879\u662f\u5b50\u8fdb\u7a0b\u542f\u52a8\u591a\u5c11\u79d2\u4e4b\u540e\uff0c\u6b64\u65f6\u72b6\u6001\u5982\u679c\u662frunning\uff0c\u5219\u6211\u4eec\u8ba4\u4e3a\u542f\u52a8\u6210\u529f\u4e86\u3002\u9ed8\u8ba4\u503c\u4e3a1\nstartsecs=1\n\n#\u811a\u672c\u8fd0\u884c\u7684\u7528\u6237\u8eab\u4efd \nuser = test\n\n#\u65e5\u5fd7\u8f93\u51fa \nstderr_logfile=/tmp/blog_stderr.log \nstdout_logfile=/tmp/blog_stdout.log \n#\u628astderr\u91cd\u5b9a\u5411\u5230stdout\uff0c\u9ed8\u8ba4 false\nredirect_stderr = true\n#stdout\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba4 50MB\nstdout_logfile_maxbytes = 20MB\n#stdout\u65e5\u5fd7\u6587\u4ef6\u5907\u4efd\u6570\nstdout_logfile_backups = 20\n\u5b50\u8fdb\u7a0b\u914d\u7f6e\u793a\u4f8b\uff1a\n#\u8bf4\u660e\u540c\u4e0a\n[program:test] \ndirectory=/opt/bin \ncommand=/opt/bin/test\nautostart=true \nautorestart=false \nstderr_logfile=/tmp/test_stderr.log \nstdout_logfile=/tmp/test_stdout.log \n#user = test  \n\u4e94\u3001supervisor\u547d\u4ee4\u8bf4\u660e\n\u5e38\u7528\u547d\u4ee4\nsupervisorctl status        //\u67e5\u770b\u6240\u6709\u8fdb\u7a0b\u7684\u72b6\u6001\nsupervisorctl stop es       //\u505c\u6b62es\nsupervisorctl start es      //\u542f\u52a8es\nsupervisorctl restart       //\u91cd\u542fes\nsupervisorctl update        //\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u540e\u4f7f\u7528\u8be5\u547d\u4ee4\u52a0\u8f7d\u65b0\u7684\u914d\u7f6e\nsupervisorctl reload        //\u91cd\u65b0\u542f\u52a8\u914d\u7f6e\u4e2d\u7684\u6240\u6709\u7a0b\u5e8f\n")),Object(o.b)("p",null,"\u6ce8\uff1a\u628aes\u6362\u6210all\u53ef\u4ee5\u7ba1\u7406\u914d\u7f6e\u4e2d\u7684\u6240\u6709\u8fdb\u7a0b\u3002\u76f4\u63a5\u8f93\u5165supervisorctl\u8fdb\u5165supervisorctl\u7684shell\u4ea4\u4e92\u754c\u9762\uff0c\u6b64\u65f6\u4e0a\u9762\u7684\u547d\u4ee4\u4e0d\u5e26supervisorctl\u53ef\u76f4\u63a5\u4f7f\u7528\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\u4e8b\u9879\n\u4f7f\u7528supervisor\u8fdb\u7a0b\u7ba1\u7406\u547d\u4ee4\u4e4b\u524d\u5148\u542f\u52a8supervisord\uff0c\u5426\u5219\u7a0b\u5e8f\u62a5\u9519\u3002\n\u4f7f\u7528\u547d\u4ee4supervisord -c /etc/supervisord.conf\u542f\u52a8\u3002\n\u82e5\u662fcentos7\uff1a"),Object(o.b)("p",null,"systemctl start supervisord.service     //\u542f\u52a8supervisor\u5e76\u52a0\u8f7d\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\nsystemctl enable supervisord.service    //\u5c06supervisor\u52a0\u5165\u5f00\u673a\u542f\u52a8\u9879\n\u5e38\u89c1\u95ee\u9898\nunix:///var/run/supervisor.sock no such file\n\u95ee\u9898\u63cf\u8ff0\uff1a\u5b89\u88c5\u597dsupervisor\u6ca1\u6709\u5f00\u542f\u670d\u52a1\u76f4\u63a5\u4f7f\u7528supervisorctl\u62a5\u7684\u9519\n\u89e3\u51b3\u529e\u6cd5\uff1asupervisord -c /etc/supervisord.conf"),Object(o.b)("p",null,"command\u4e2d\u6307\u5b9a\u7684\u8fdb\u7a0b\u5df2\u7ecf\u8d77\u6765\uff0c\u4f46supervisor\u8fd8\u4e0d\u65ad\u91cd\u542f\n\u95ee\u9898\u63cf\u8ff0\uff1acommand\u4e2d\u542f\u52a8\u65b9\u5f0f\u4e3a\u540e\u53f0\u542f\u52a8\uff0c\u5bfc\u81f4\u8bc6\u522b\u4e0d\u5230pid\uff0c\u7136\u540e\u4e0d\u65ad\u91cd\u542f\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662felasticsearch\uff0ccommand\u6307\u5b9a\u7684\u662f$path/bin/elasticsearch -d\n\u89e3\u51b3\u529e\u6cd5\uff1asupervisor\u65e0\u6cd5\u68c0\u6d4b\u540e\u53f0\u542f\u52a8\u8fdb\u7a0b\u7684pid\uff0c\u800csupervisor\u672c\u8eab\u5c31\u662f\u540e\u53f0\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u56e0\u6b64\u4e0d\u7528\u62c5\u5fc3\u8fd9\u4e2a"),Object(o.b)("p",null,"\u542f\u52a8\u4e86\u591a\u4e2asupervisord\u670d\u52a1\uff0c\u5bfc\u81f4\u65e0\u6cd5\u6b63\u5e38\u5173\u95ed\u670d\u52a1\n\u95ee\u9898\u63cf\u8ff0\uff1a\u5728\u8fd0\u884csupervisord -c /etc/supervisord.conf\u4e4b\u524d\uff0c\u76f4\u63a5\u8fd0\u884c\u8fc7supervisord -c /etc/supervisord.d/xx.conf\u5bfc\u81f4\u6709\u4e9b\u8fdb\u7a0b\u88ab\u591a\u4e2asuperviord\u7ba1\u7406\uff0c\u65e0\u6cd5\u6b63\u5e38\u5173\u95ed\u8fdb\u7a0b\u3002\n\u89e3\u51b3\u529e\u6cd5\uff1a\u4f7f\u7528ps -fe | grep supervisord\u67e5\u770b\u6240\u6709\u542f\u52a8\u8fc7\u7684supervisord\u670d\u52a1\uff0ckill\u76f8\u5173\u7684\u8fdb\u7a0b\u3002"),Object(o.b)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u79fb\u6b65Supervisor\u5b98\u7f51\uff1a",Object(o.b)("a",{parentName:"p",href:"http://supervisord.org"},"http://supervisord.org")))}l.isMDXComponent=!0}}]);