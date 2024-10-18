(()=>{"use strict";var e={136:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s(136);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||r(i.precache),o=e=>e||r(i.runtime);function h(e,t){const s=t();return e.waitUntil(s),s}s(447);function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),i=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:i.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(i):i,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,r)}function g(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(390);function v(e){return"string"==typeof e?new Request(e):e}class m{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=v(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:i,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=v(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,t){const s=v(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const i=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=g(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===g(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=v(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new m(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class b extends R{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(b.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,i=e.integrity,r=!i||i===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||n:void 0})),n&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==b.copyRedirectedCacheableResponsesPlugin&&(a===b.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(b.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}b.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},b.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new b({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return h(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return h(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"b1dd026302ed685723b10e21480b582b","url":"404.html"},{"revision":"0c3c6a204d110fce6a97dbf1c6ebe762","url":"assets/css/styles.a7898ee1.css"},{"revision":"623c8c87104f95f26156edba53552172","url":"assets/js/02897702.19a07b97.js"},{"revision":"d02560eb1b91d4067a5763a572484c04","url":"assets/js/0ce70daf.9cfa3cb1.js"},{"revision":"2f9ae02c131387cd9af049cd80283651","url":"assets/js/120.b473ca43.js"},{"revision":"27ea94b605eafdda872bb921ba9790da","url":"assets/js/158.583b88dc.js"},{"revision":"8c57e3224f121a30e44a0fb9f88aaf1a","url":"assets/js/17896441.5a73bfd7.js"},{"revision":"32c629ecdcd3b9ddb61e8fedc9837d70","url":"assets/js/1a4e3797.1947b111.js"},{"revision":"b0c0787d594a151a509b8f5a63751408","url":"assets/js/1be78505.37f452a0.js"},{"revision":"ef59a221372f3babe523f1576d4115b6","url":"assets/js/1e7d3fc8.492e8d13.js"},{"revision":"8aa1aa56c934c9b7e3538a015507c42c","url":"assets/js/20.ba596a33.js"},{"revision":"e881864c7db1bcef5c8e678b4c31aac0","url":"assets/js/247.6a72463b.js"},{"revision":"36f11059be83a24c6043145749f356b5","url":"assets/js/24ccebb3.5a8be674.js"},{"revision":"429898d075bba27562fdb9acedab00a4","url":"assets/js/28ac1b71.04c38117.js"},{"revision":"959735ad44a8257d5525f3058c2c3bdf","url":"assets/js/416.60aab689.js"},{"revision":"1aa0c5da01111184ace8579cbb13d79b","url":"assets/js/50cbbce1.49ef3d0f.js"},{"revision":"0ad818af9f6f27678fd1fbb4f4b4332d","url":"assets/js/67e74305.40e9adbe.js"},{"revision":"9a139296db62e3c467d172f1b08cacaf","url":"assets/js/730.7706b124.js"},{"revision":"750bbc7d4e2a94e41d20b7998022c186","url":"assets/js/913.e19152f3.js"},{"revision":"690e3e0a7b9f6c4e28fba37e88d3bfe1","url":"assets/js/920.a97622e2.js"},{"revision":"a89b73a853113e59ee6b56f7ea57507b","url":"assets/js/935f2afb.dda63cbc.js"},{"revision":"1ce1fb3b655317aa00804d6f9b636eff","url":"assets/js/9c33ee7c.dd7d38e6.js"},{"revision":"218e615feba89660c815990b10a2cf70","url":"assets/js/a9007b3d.1380a1ce.js"},{"revision":"0df4e104628f4d656b54cfb4bf0acd0a","url":"assets/js/c2016374.ae37b483.js"},{"revision":"dc84b26ee70f32e8a8e42d8606777829","url":"assets/js/c4f5d8e4.18558819.js"},{"revision":"3fae70231d616ce654dceadeb0f08150","url":"assets/js/eda84679.73d00c40.js"},{"revision":"259c65316bab5ea13980374755596e7d","url":"assets/js/main.c5b050c4.js"},{"revision":"6a9eff95085ad05e88e16989ef8bd720","url":"assets/js/runtime~main.cfb3164f.js"},{"revision":"3e6d9a2ec4880f43a02164706944c851","url":"docker/index.html"},{"revision":"5709340c337f35eeccbef3485f5a3dc7","url":"ffmpeg/ffmpeg/index.html"},{"revision":"4de747a588050b7d81fa75c107cf11b0","url":"ffmpeg/ffplay/index.html"},{"revision":"30c96a978da744440df585fac512a87f","url":"ffmpeg/ffprobe/index.html"},{"revision":"77cae91d7b579f39fb40cab6b619adbc","url":"ffmpeg/index.html"},{"revision":"e9a1f0135ae1708fe106d1b2d0ab5f3a","url":"git/index.html"},{"revision":"9db96c130142c6081e4bbb2457120ea0","url":"index.html"},{"revision":"0dc6fc55ee52575dc99f5a41e19a5d71","url":"meta/manifest.json"},{"revision":"23ff4e8b03eb1f0fcbc96b3de0d63483","url":"network/index.html"},{"revision":"e76c4e9da8ef47501e8233dd700e85fa","url":"network/tcpdump/index.html"},{"revision":"a074a0b8c41bfbff6fc04a83db7be7b6","url":"search/index.html"},{"revision":"e621d6cac2f4038d7dda407dda304b42","url":"assets/images/h264_level-2a1f65e32c7779c25bd74c3bfa5328f4.png"},{"revision":"45f6d6d42ba5f0907fc2944af3f22dd7","url":"assets/images/h264_profile-8551ca5fb704f301b1aeb353b41af027.png"},{"revision":"9c8e96ecc7fa01e6ebcd196495ed2db5","url":"fonts/themify.svg"},{"revision":"2fceea3634a91a717925b40bde2c4516","url":"img/contrast.svg"},{"revision":"e621d6cac2f4038d7dda407dda304b42","url":"img/docs/ffmpeg/h264_level.png"},{"revision":"45f6d6d42ba5f0907fc2944af3f22dd7","url":"img/docs/ffmpeg/h264_profile.png"},{"revision":"ed21678601a83ad4ae691ec8aec66a25","url":"img/docs/scenarios/rtmp/obs_rtmp_push_en.png"},{"revision":"780412212ab0f53e17ec1abfa4879d87","url":"img/docs/scenarios/rtmp/obs_rtmp_push.png"},{"revision":"350f2453cfe152c88ba569df070eb58e","url":"img/docs/scenarios/webrtc/obs_whip_push_en.png"},{"revision":"0127c98986ab33143a6fedf8aebad446","url":"img/docs/scenarios/webrtc/obs_whip_push.png"},{"revision":"8870079e1255f705bce3b6c6045f7bf6","url":"img/docs/scenarios/webrtc/play_whep.png"},{"revision":"338abbb5ea8d80b9869555eca253d49d","url":"img/favicon.ico"},{"revision":"79b02dc026ee6a936604b11a13dff6ec","url":"img/smile.png"},{"revision":"8fcbcbdba9d613292672730965ec2fbd","url":"meta/xiu.png"},{"revision":"529c63928f23763fb9469836a47a27df","url":"meta/yourcmds.png"},{"revision":"a98d00f2463515ed9c0e914882300e72","url":"meta/yourcmds.svg"},{"revision":"ba49e844892321d8540ea3b7c088cf97","url":"assets/fonts/bootstrap-icons-39795c0b4513de014cf8685fc5c923fe.woff"},{"revision":"cc1e5eda776be5f0ff614285c31d4892","url":"assets/fonts/bootstrap-icons-b7bcc075b395c14ce8c2d75dcd5fabe5.woff2"},{"revision":"da5c366eba60c5c3eaa590feb37ddf0a","url":"assets/fonts/rubik-arabic-400-normal-9b7e86b9f74ba1c2e5a660c23fa95f9c.woff"},{"revision":"63549755866162e8d79b079c97384386","url":"assets/fonts/rubik-arabic-400-normal-fb7a9eb9da73dfe4012dfbcb2f338903.woff2"},{"revision":"9b52bd7bb49d1d47f2b0401b0cb4af35","url":"assets/fonts/rubik-latin-400-normal-5903a23647de7c1c373f38b926f34eab.woff2"},{"revision":"6695a59cec5f938fc49f53ef95d7cb2e","url":"assets/fonts/rubik-latin-400-normal-870dcb9ca975e7fa06a964358a4a8ede.woff"},{"revision":"e969d157e5e7b691e194e81826b5c82e","url":"assets/fonts/rubik-latin-ext-400-normal-128f0ade4a0f37464020c56b1564e1b4.woff2"},{"revision":"ee7b4fb969b9c166ba3e51f919754ec2","url":"assets/fonts/rubik-latin-ext-400-normal-b22669ae614939bed8f430ba75cbb1b5.woff"},{"revision":"2c454669bdf3aebf32a1bd8ac1e0d2d6","url":"fonts/themify.eot"},{"revision":"e23a7dcaefbde4e74e263247aa42ecd7","url":"fonts/themify.ttf"},{"revision":"a1ecc3b826d01251edddf29c3e4e1e97","url":"fonts/themify.woff"}],s=new C({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})();