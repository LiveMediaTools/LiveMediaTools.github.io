"use strict";(self.webpackChunkyourcmds_docs=self.webpackChunkyourcmds_docs||[]).push([[561],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),p=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(f.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,y=m["".concat(f,".").concat(u)]||m[u]||s[u]||a;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var f in r)hasOwnProperty.call(r,f)&&(l[f]=r[f]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>d,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var n=t(5680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>a(e,i(r)),u=(e,r)=>{var t={};for(var n in e)f.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const y={},d="FFprobe",b={unversionedId:"ffmpeg/ffprobe/README",id:"ffmpeg/ffprobe/README",title:"FFprobe",description:"1\u3001Query Stream Information",source:"@site/docs/ffmpeg/ffprobe/README.md",sourceDirName:"ffmpeg/ffprobe",slug:"/ffmpeg/ffprobe/",permalink:"/ffmpeg/ffprobe/",draft:!1,editUrl:"https://github.com/LiveMediaTools/LiveMediaTools.github.io/edit/main/docs/ffmpeg/ffprobe/README.md",tags:[],version:"current",lastUpdatedAt:1728656893,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{},sidebar:"ffmpeg",previous:{title:"FFmpeg",permalink:"/ffmpeg/ffmpeg/"},next:{title:"FFplay",permalink:"/ffmpeg/ffplay/"}},g={},v=[{value:"1\u3001Query Stream Information",id:"1query-stream-information",level:2},{value:"1.1 Print Video Stream Information",id:"11-print-video-stream-information",level:3},{value:"Parameter Explanation",id:"parameter-explanation",level:4}],O={toc:v},h="wrapper";function w(e){var r=e,{components:t}=r,o=u(r,["components"]);return(0,n.yg)(h,s(m(m({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"ffprobe"}),"FFprobe"),(0,n.yg)("h2",m({},{id:"1query-stream-information"}),"1\u3001Query Stream Information"),(0,n.yg)("h3",m({},{id:"11-print-video-stream-information"}),"1.1 Print Video Stream Information"),(0,n.yg)("pre",null,(0,n.yg)("code",m({parentName:"pre"},{className:"language-shell"}),"ffprobe -show_frames -select_streams v -of xml 'rtmp://localhost:1935/live/test'\n")),(0,n.yg)("h4",m({},{id:"parameter-explanation"}),"Parameter Explanation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"-show_frames\uff1aDisplays detailed information for each frame."),(0,n.yg)("li",{parentName:"ul"},"-select_streams v\uff1aSelects only the video stream for analysis. If you want to analyze the audio stream, use -select_streams a."),(0,n.yg)("li",{parentName:"ul"},"-of xml\uff1aSets the output format to XML, making the results easier to parse.")))}w.isMDXComponent=!0}}]);