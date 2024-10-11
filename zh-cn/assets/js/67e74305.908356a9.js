"use strict";(self.webpackChunkyourcmds_docs=self.webpackChunkyourcmds_docs||[]).push([[104],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=f(r),y=a,d=s["".concat(i,".").concat(y)]||s[y]||u[y]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var f=2;f<o;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>P,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var n=r(5680),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};const d={},m="FFplay",g={unversionedId:"ffmpeg/ffplay/README",id:"ffmpeg/ffplay/README",title:"FFplay",description:"--\x3e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ffmpeg/ffplay/README.md",sourceDirName:"ffmpeg/ffplay",slug:"/ffmpeg/ffplay/",permalink:"/zh-cn/ffmpeg/ffplay/",draft:!1,editUrl:"https://github.com/LiveMediaTools/LiveMediaTools.github.io/edit/main/docs/ffmpeg/ffplay/README.md",tags:[],version:"current",lastUpdatedAt:1728656893,formattedLastUpdatedAt:"2024\u5e7410\u670811\u65e5",frontMatter:{},sidebar:"ffmpeg",previous:{title:"FFprobe",permalink:"/zh-cn/ffmpeg/ffprobe/"}},v={},b=[{value:"\u64ad\u653eRTMP\u534f\u8bae\u6d41",id:"\u64ad\u653ertmp\u534f\u8bae\u6d41",level:2},{value:"\u64ad\u653e",id:"\u64ad\u653e",level:3},{value:"\u64ad\u653eRTSP\u534f\u8bae\u6d41",id:"\u64ad\u653ertsp\u534f\u8bae\u6d41",level:2},{value:"\u57fa\u4e8eTCP\u534f\u8bae\u64ad\u653e",id:"\u57fa\u4e8etcp\u534f\u8bae\u64ad\u653e",level:3},{value:"\u57fa\u4e8eUDP\u534f\u8bae\u64ad\u653e",id:"\u57fa\u4e8eudp\u534f\u8bae\u64ad\u653e",level:3}],O={toc:b},h="wrapper";function P(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(h,u(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"ffplay"}),"FFplay"),(0,n.yg)("h2",s({},{id:"\u64ad\u653ertmp\u534f\u8bae\u6d41"}),"\u64ad\u653eRTMP\u534f\u8bae\u6d41"),(0,n.yg)("h3",s({},{id:"\u64ad\u653e"}),"\u64ad\u653e"),(0,n.yg)("pre",null,(0,n.yg)("code",s({parentName:"pre"},{className:"language-shell"}),'ffplay -i "rtmp://127.0.0.1:1935/live/test"\n')),(0,n.yg)("admonition",s({},{type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"ffplay\u64ad\u653e\u4f1a\u7f13\u5b58\u4e00\u4e9b\u6570\u636e\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u64ad\u653e\u7684\u6d41\u7545\uff0c\u5982\u679c\u4e0d\u8981\u7f13\u5b58\uff0c\u964d\u4f4e\u64ad\u653e\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u6dfb\u52a0 -fflags nobuffer \u53c2\u6570\u3002")),(0,n.yg)("h2",s({},{id:"\u64ad\u653ertsp\u534f\u8bae\u6d41"}),"\u64ad\u653eRTSP\u534f\u8bae\u6d41"),(0,n.yg)("h3",s({},{id:"\u57fa\u4e8etcp\u534f\u8bae\u64ad\u653e"}),"\u57fa\u4e8eTCP\u534f\u8bae\u64ad\u653e"),(0,n.yg)("pre",null,(0,n.yg)("code",s({parentName:"pre"},{className:"language-shell"}),'ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')),(0,n.yg)("h3",s({},{id:"\u57fa\u4e8eudp\u534f\u8bae\u64ad\u653e"}),"\u57fa\u4e8eUDP\u534f\u8bae\u64ad\u653e"),(0,n.yg)("pre",null,(0,n.yg)("code",s({parentName:"pre"},{className:"language-shell"}),'ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"\n')))}P.isMDXComponent=!0}}]);