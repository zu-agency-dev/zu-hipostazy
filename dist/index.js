"use strict";(()=>{function ih(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function fl(r,e){r===void 0&&(r={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof r[t]=="undefined"?r[t]=e[t]:ih(e[t])&&ih(r[t])&&Object.keys(e[t]).length>0&&fl(r[t],e[t])})}var sh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _i(){let r=typeof document!="undefined"?document:{};return fl(r,sh),r}var Yp={document:sh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout=="undefined"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout!="undefined"&&clearTimeout(r)}};function en(){let r=typeof window!="undefined"?window:{};return fl(r,Yp),r}function rh(r){let e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Da(r,e){return e===void 0&&(e=0),setTimeout(r,e)}function Br(){return Date.now()}function $p(r){let e=en(),t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function ah(r,e){e===void 0&&(e="x");let t=en(),n,i,s,o=$p(r);return t.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function Ia(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function Zp(r){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function _n(){let r=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){let n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!Zp(n)){let i=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){let a=i[s],l=Object.getOwnPropertyDescriptor(n,a);l!==void 0&&l.enumerable&&(Ia(r[a])&&Ia(n[a])?n[a].__swiper__?r[a]=n[a]:_n(r[a],n[a]):!Ia(r[a])&&Ia(n[a])?(r[a]={},n[a].__swiper__?r[a]=n[a]:_n(r[a],n[a])):r[a]=n[a])}}}return r}function Ur(r,e,t){r.style.setProperty(e,t)}function dl(r){let{swiper:e,targetPosition:t,side:n}=r,i=en(),s=-e.translate,o=null,a,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);let c=t>s?"next":"prev",u=(h,d)=>c==="next"&&h>=d||c==="prev"&&h<=d,f=()=>{a=new Date().getTime(),o===null&&(o=a);let h=Math.max(Math.min((a-o)/l,1),0),d=.5-Math.cos(h*Math.PI)/2,g=s+d*(t-s);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(f)};f()}function oi(r,e){return e===void 0&&(e=""),[...r.children].filter(t=>t.matches(e))}function oh(r,e){e===void 0&&(e=[]);let t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:[e]),t}function lh(r,e){let t=[];for(;r.previousElementSibling;){let n=r.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function ch(r,e){let t=[];for(;r.nextElementSibling;){let n=r.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function xi(r,e){return en().getComputedStyle(r,null).getPropertyValue(e)}function pl(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function uh(r,e){let t=[],n=r.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function ml(r,e,t){let n=en();return t?r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):r.offsetWidth}var gl;function Jp(){let r=en(),e=_i();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function mh(){return gl||(gl=Jp()),gl}var _l;function Kp(r){let{userAgent:e}=r===void 0?{}:r,t=mh(),n=en(),i=n.navigator.platform,s=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/),u=s.match(/(iPad).*OS\s([\d_]+)/),f=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=i==="Win32",g=i==="MacIntel",p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&p.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),c&&!d&&(o.os="android",o.android=!0),(u||h||f)&&(o.os="ios",o.ios=!0),o}function jp(r){return r===void 0&&(r={}),_l||(_l=Kp(r)),_l}var xl;function Qp(){let r=en(),e=!1;function t(){let n=r.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(t()){let n=String(r.navigator.userAgent);if(n.includes("Version/")){let[i,s]=n.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=i<16||i===16&&s<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)}}function em(){return xl||(xl=Qp()),xl}function tm(r){let{swiper:e,on:t,emit:n}=r,i=en(),s=null,o=null,a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(f=>{o=i.requestAnimationFrame(()=>{let{width:h,height:d}=e,g=h,p=d;f.forEach(m=>{let{contentBoxSize:_,contentRect:y,target:v}=m;v&&v!==e.el||(g=y?y.width:(_[0]||_).inlineSize,p=y?y.height:(_[0]||_).blockSize)}),(g!==h||p!==d)&&a()})}),s.observe(e.el))},c=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver!="undefined"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function nm(r){let{swiper:e,extendParams:t,on:n,emit:i}=r,s=[],o=en(),a=function(u,f){f===void 0&&(f={});let h=o.MutationObserver||o.WebkitMutationObserver,d=new h(g=>{if(e.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}let p=function(){i("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(p):o.setTimeout(p,0)});d.observe(u,{attributes:typeof f.attributes=="undefined"?!0:f.attributes,childList:typeof f.childList=="undefined"?!0:f.childList,characterData:typeof f.characterData=="undefined"?!0:f.characterData}),s.push(d)},l=()=>{if(e.params.observer){if(e.params.observeParents){let u=uh(e.el);for(let f=0;f<u.length;f+=1)a(u[f])}a(e.el,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var im={on(r,e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;let i=t?"unshift":"push";return r.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][i](e)}),n},once(r,e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(){n.off(r,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(n,o)}return i.__emitterProxy=e,n.on(r,i,t)},onAny(r,e){let t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;let n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[n](r),t},offAny(r){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){let t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(n=>{typeof e=="undefined"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(){let r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let e,t,n;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),n=r):(e=s[0].events,t=s[0].data,n=s[0].context||r),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),r.eventsListeners&&r.eventsListeners[l]&&r.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),r}};function sm(){let r=this,e,t,n=r.el;typeof r.params.width!="undefined"&&r.params.width!==null?e=r.params.width:e=n.clientWidth,typeof r.params.height!="undefined"&&r.params.height!==null?t=r.params.height:t=n.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(xi(n,"padding-left")||0,10)-parseInt(xi(n,"padding-right")||0,10),t=t-parseInt(xi(n,"padding-top")||0,10)-parseInt(xi(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function rm(){let r=this;function e(D){return r.isHorizontal()?D:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[D]}function t(D,I){return parseFloat(D.getPropertyValue(e(I))||0)}let n=r.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=r,c=r.virtual&&n.virtual.enabled,u=c?r.virtual.slides.length:r.slides.length,f=oi(s,`.${r.params.slideClass}, swiper-slide`),h=c?r.virtual.slides.length:f.length,d=[],g=[],p=[],m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(r));let _=n.slidesOffsetAfter;typeof _=="function"&&(_=n.slidesOffsetAfter.call(r));let y=r.snapGrid.length,v=r.slidesGrid.length,x=n.spaceBetween,w=-m,A=0,T=0;if(typeof o=="undefined")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*o:typeof x=="string"&&(x=parseFloat(x)),r.virtualSize=-x,f.forEach(D=>{a?D.style.marginLeft="":D.style.marginRight="",D.style.marginBottom="",D.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ur(i,"--swiper-centered-offset-before",""),Ur(i,"--swiper-centered-offset-after",""));let b=n.grid&&n.grid.rows>1&&r.grid;b&&r.grid.initSlides(h);let M,L=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(D=>typeof n.breakpoints[D].slidesPerView!="undefined").length>0;for(let D=0;D<h;D+=1){M=0;let I;if(f[D]&&(I=f[D]),b&&r.grid.updateSlide(D,I,h,e),!(f[D]&&xi(I,"display")==="none")){if(n.slidesPerView==="auto"){L&&(f[D].style[e("width")]="");let z=getComputedStyle(I),O=I.style.transform,k=I.style.webkitTransform;if(O&&(I.style.transform="none"),k&&(I.style.webkitTransform="none"),n.roundLengths)M=r.isHorizontal()?ml(I,"width",!0):ml(I,"height",!0);else{let Y=t(z,"width"),W=t(z,"padding-left"),B=t(z,"padding-right"),j=t(z,"margin-left"),C=t(z,"margin-right"),re=z.getPropertyValue("box-sizing");if(re&&re==="border-box")M=Y+j+C;else{let{clientWidth:U,offsetWidth:Q}=I;M=Y+W+B+j+C+(Q-U)}}O&&(I.style.transform=O),k&&(I.style.webkitTransform=k),n.roundLengths&&(M=Math.floor(M))}else M=(o-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(M=Math.floor(M)),f[D]&&(f[D].style[e("width")]=`${M}px`);f[D]&&(f[D].swiperSlideSize=M),p.push(M),n.centeredSlides?(w=w+M/2+A/2+x,A===0&&D!==0&&(w=w-o/2-x),D===0&&(w=w-o/2-x),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&d.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(r.params.slidesPerGroupSkip,T))%r.params.slidesPerGroup===0&&d.push(w),g.push(w),w=w+M+x),r.virtualSize+=M+x,A=M,T+=1}}if(r.virtualSize=Math.max(r.virtualSize,o)+_,a&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${r.virtualSize+x}px`),n.setWrapperSize&&(i.style[e("width")]=`${r.virtualSize+x}px`),b&&r.grid.updateWrapperSize(M,d,e),!n.centeredSlides){let D=[];for(let I=0;I<d.length;I+=1){let z=d[I];n.roundLengths&&(z=Math.floor(z)),d[I]<=r.virtualSize-o&&D.push(z)}d=D,Math.floor(r.virtualSize-o)-Math.floor(d[d.length-1])>1&&d.push(r.virtualSize-o)}if(c&&n.loop){let D=p[0]+x;if(n.slidesPerGroup>1){let I=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/n.slidesPerGroup),z=D*n.slidesPerGroup;for(let O=0;O<I;O+=1)d.push(d[d.length-1]+z)}for(let I=0;I<r.virtual.slidesBefore+r.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+D),g.push(g[g.length-1]+D),r.virtualSize+=D}if(d.length===0&&(d=[0]),x!==0){let D=r.isHorizontal()&&a?"marginLeft":e("marginRight");f.filter((I,z)=>!n.cssMode||n.loop?!0:z!==f.length-1).forEach(I=>{I.style[D]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let D=0;p.forEach(z=>{D+=z+(x||0)}),D-=x;let I=D-o;d=d.map(z=>z<=0?-m:z>I?I+_:z)}if(n.centerInsufficientSlides){let D=0;if(p.forEach(I=>{D+=I+(x||0)}),D-=x,D<o){let I=(o-D)/2;d.forEach((z,O)=>{d[O]=z-I}),g.forEach((z,O)=>{g[O]=z+I})}}if(Object.assign(r,{slides:f,snapGrid:d,slidesGrid:g,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ur(i,"--swiper-centered-offset-before",`${-d[0]}px`),Ur(i,"--swiper-centered-offset-after",`${r.size/2-p[p.length-1]/2}px`);let D=-r.snapGrid[0],I=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(z=>z+D),r.slidesGrid=r.slidesGrid.map(z=>z+I)}if(h!==u&&r.emit("slidesLengthChange"),d.length!==y&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),g.length!==v&&r.emit("slidesGridLengthChange"),n.watchSlidesProgress&&r.updateSlidesOffset(),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){let D=`${n.containerModifierClass}backface-hidden`,I=r.el.classList.contains(D);h<=n.maxBackfaceHiddenSlides?I||r.el.classList.add(D):I&&r.el.classList.remove(D)}}function am(r){let e=this,t=[],n=e.virtual&&e.params.virtual.enabled,i=0,s;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);let o=a=>n?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){let a=e.activeIndex+s;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]!="undefined"){let a=t[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function om(){let r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(r.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-r.cssOverflowAdjustment()}function lm(r){r===void 0&&(r=this&&this.translate||0);let e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let o=-r;i&&(o=r),n.forEach(l=>{l.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<n.length;l+=1){let c=n[l],u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);let f=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),h=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),d=-(o-u),g=d+e.slidesSizesGrid[l];(d>=0&&d<e.size-1||g>1&&g<=e.size||d<=0&&g>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),n[l].classList.add(t.slideVisibleClass)),c.progress=i?-f:f,c.originalProgress=i?-h:h}}function cm(r){let e=this;if(typeof r=="undefined"){let u=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*u||0}let t=e.params,n=e.maxTranslate()-e.minTranslate(),{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=e,l=s,c=o;if(n===0)i=0,s=!0,o=!0;else{i=(r-e.minTranslate())/n;let u=Math.abs(r-e.minTranslate())<1,f=Math.abs(r-e.maxTranslate())<1;s=u||i<=0,o=f||i>=1,u&&(i=0),f&&(i=1)}if(t.loop){let u=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[u],d=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(r);p>=h?a=(p-h)/g:a=(p+g-d)/g,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}function um(){let r=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=r,s=r.virtual&&t.virtual.enabled,o=l=>oi(n,`.${t.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let a;if(s)if(t.loop){let l=i-r.virtual.slidesBefore;l<0&&(l=r.virtual.slides.length+l),l>=r.virtual.slides.length&&(l-=r.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=e[i];if(a){a.classList.add(t.slideActiveClass);let l=ch(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!l&&(l=e[0]),l&&l.classList.add(t.slideNextClass);let c=lh(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(t.slidePrevClass)}r.emitSlidesClasses()}var Oa=(r,e)=>{if(!r||r.destroyed||!r.params)return;let t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,n=e.closest(t());if(n){let i=n.querySelector(`.${r.params.lazyPreloaderClass}`);i&&i.remove()}},vl=(r,e)=>{if(!r.slides[e])return;let t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},wl=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext,t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);let n=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),i=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){let o=i,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+n+c)),r.slides.forEach((l,c)=>{a.includes(l.column)&&vl(r,c)});return}let s=i+n-1;if(r.params.rewind||r.params.loop)for(let o=i-e;o<=s+e;o+=1){let a=(o%t+t)%t;(a<i||a>s)&&vl(r,a)}else for(let o=Math.max(i-e,0);o<=Math.min(s+e,t-1);o+=1)o!==i&&(o>s||o<i)&&vl(r,o)};function hm(r){let{slidesGrid:e,params:t}=r,n=r.rtlTranslate?r.translate:-r.translate,i;for(let s=0;s<e.length;s+=1)typeof e[s+1]!="undefined"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?i=s:n>=e[s]&&n<e[s+1]&&(i=s+1):n>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i=="undefined")&&(i=0),i}function fm(r){let e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:s,realIndex:o,snapIndex:a}=e,l=r,c,u=h=>{let d=h-e.virtual.slidesBefore;return d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),d};if(typeof l=="undefined"&&(l=hm(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{let h=Math.min(i.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=u(l));return}let f;e.virtual&&i.virtual.enabled&&i.loop?f=u(l):e.slides[l]?f=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):f=l,Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:f,previousIndex:s,activeIndex:l}),e.initialized&&wl(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==f&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function dm(r){let e=this,t=e.params,n=r.closest(`.${t.slideClass}, swiper-slide`),i=!1,s;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){i=!0,s=o;break}}if(n&&i)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=s;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var pm={updateSize:sm,updateSlides:rm,updateAutoHeight:am,updateSlidesOffset:om,updateSlidesProgress:lm,updateProgress:cm,updateSlidesClasses:um,updateActiveIndex:fm,updateClickedSlide:dm};function mm(r){r===void 0&&(r=this.isHorizontal()?"x":"y");let e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let o=ah(s,r);return o+=e.cssOverflowAdjustment(),n&&(o=-o),o||0}function gm(r,e){let t=this,{rtlTranslate:n,params:i,wrapperEl:s,progress:o}=t,a=0,l=0,c=0;t.isHorizontal()?a=n?-r:r:l=r,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:i.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u,f=t.maxTranslate()-t.minTranslate();f===0?u=0:u=(r-t.minTranslate())/f,u!==o&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function _m(){return-this.snapGrid[0]}function xm(){return-this.snapGrid[this.snapGrid.length-1]}function vm(r,e,t,n,i){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);let s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;let l=s.minTranslate(),c=s.maxTranslate(),u;if(n&&r>l?u=l:n&&r<c?u=c:u=r,s.updateProgress(u),o.cssMode){let f=s.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return dl({swiper:s,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var ym={getTranslate:mm,setTranslate:gm,minTranslate:_m,maxTranslate:xm,translateTo:vm};function bm(r,e){let t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`),t.emit("setTransition",r,e)}function gh(r){let{swiper:e,runCallbacks:t,direction:n,step:i}=r,{activeIndex:s,previousIndex:o}=e,a=n;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${i}`),t&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function wm(r,e){r===void 0&&(r=!0);let t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),gh({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function Mm(r,e){r===void 0&&(r=!0);let t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),gh({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var Sm={setTransition:bm,transitionStart:wm,transitionEnd:Mm};function Tm(r,e,t,n,i){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));let s=this,o=r;o<0&&(o=0);let{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:h,wrapperEl:d,enabled:g}=s;if(s.animating&&a.preventInteractionOnTransition||!g&&!n&&!i)return!1;let p=Math.min(s.params.slidesPerGroupSkip,o),m=p+Math.floor((o-p)/s.params.slidesPerGroup);m>=l.length&&(m=l.length-1);let _=-l[m];if(a.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){let x=-Math.floor(_*100),w=Math.floor(c[v]*100),A=Math.floor(c[v+1]*100);typeof c[v+1]!="undefined"?x>=w&&x<A-(A-w)/2?o=v:x>=w&&x<A&&(o=v+1):x>=w&&(o=v)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&(h?_>s.translate&&_>s.minTranslate():_<s.translate&&_<s.minTranslate())||!s.allowSlidePrev&&_>s.translate&&_>s.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(_);let y;if(o>f?y="next":o<f?y="prev":y="reset",h&&-_===s.translate||!h&&_===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(_),y!=="reset"&&(s.transitionStart(t,y),s.transitionEnd(t,y)),!1;if(a.cssMode){let v=s.isHorizontal(),x=h?_:-_;if(e===0){let w=s.virtual&&s.params.virtual.enabled;w&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),w&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{d[v?"scrollLeft":"scrollTop"]=x})):d[v?"scrollLeft":"scrollTop"]=x,w&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return dl({swiper:s,targetPosition:x,side:v?"left":"top"}),!0;d.scrollTo({[v?"left":"top"]:x,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(_),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,y),e===0?s.transitionEnd(t,y):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(x){!s||s.destroyed||x.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,y))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Em(r,e,t,n){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));let i=this,s=r;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s=s+i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,e,t,n)}function Am(r,e,t){r===void 0&&(r=this.params.speed),e===void 0&&(e=!0);let n=this,{enabled:i,params:s,animating:o}=n;if(!i)return n;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));let l=n.activeIndex<s.slidesPerGroupSkip?1:a,c=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,r,e,t):n.slideTo(n.activeIndex+l,r,e,t)}function Cm(r,e,t){r===void 0&&(r=this.params.speed),e===void 0&&(e=!0);let n=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=n;if(!l)return n;let u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}let f=a?n.translate:-n.translate;function h(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}let d=h(f),g=s.map(_=>h(_)),p=s[g.indexOf(d)-1];if(typeof p=="undefined"&&i.cssMode){let _;s.forEach((y,v)=>{d>=y&&(_=v)}),typeof _!="undefined"&&(p=s[_>0?_-1:_])}let m=0;if(typeof p!="undefined"&&(m=o.indexOf(p),m<0&&(m=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-n.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&n.isBeginning){let _=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(_,r,e,t)}return n.slideTo(m,r,e,t)}function Pm(r,e,t){r===void 0&&(r=this.params.speed),e===void 0&&(e=!0);let n=this;return n.slideTo(n.activeIndex,r,e,t)}function Lm(r,e,t,n){r===void 0&&(r=this.params.speed),e===void 0&&(e=!0),n===void 0&&(n=.5);let i=this,s=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){let c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*n&&(s+=i.params.slidesPerGroup)}else{let c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*n&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,r,e,t)}function Rm(){let r=this,{params:e,slidesEl:t}=r,n=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView,i=r.clickedIndex,s,o=r.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(r.animating)return;s=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<r.loopedSlides-n/2||i>r.slides.length-r.loopedSlides+n/2?(r.loopFix(),i=r.getSlideIndex(oi(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Da(()=>{r.slideTo(i)})):r.slideTo(i):i>r.slides.length-n?(r.loopFix(),i=r.getSlideIndex(oi(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Da(()=>{r.slideTo(i)})):r.slideTo(i)}else r.slideTo(i)}var Im={slideTo:Tm,slideToLoop:Em,slideNext:Am,slidePrev:Cm,slideReset:Pm,slideToClosest:Lm,slideToClickedSlide:Rm};function Dm(r){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;oi(n,`.${t.slideClass}, swiper-slide`).forEach((s,o)=>{s.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:r,direction:t.centeredSlides?void 0:"next"})}function Om(r){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=r===void 0?{}:r,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:h,params:d}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&d.virtual.enabled){t&&(!d.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):d.centeredSlides&&l.snapIndex<d.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let g=d.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10)),p=d.loopedSlides||g;p%d.slidesPerGroup!==0&&(p+=d.slidesPerGroup-p%d.slidesPerGroup),l.loopedSlides=p;let m=[],_=[],y=l.activeIndex;typeof s=="undefined"?s=l.getSlideIndex(l.slides.filter(T=>T.classList.contains(d.slideActiveClass))[0]):y=s;let v=n==="next"||!n,x=n==="prev"||!n,w=0,A=0;if(s<p){w=Math.max(p-s,d.slidesPerGroup);for(let T=0;T<p-s;T+=1){let b=T-Math.floor(T/c.length)*c.length;m.push(c.length-b-1)}}else if(s>l.slides.length-p*2){A=Math.max(s-(l.slides.length-p*2),d.slidesPerGroup);for(let T=0;T<A;T+=1){let b=T-Math.floor(T/c.length)*c.length;_.push(b)}}if(x&&m.forEach(T=>{l.slides[T].swiperLoopMoveDOM=!0,h.prepend(l.slides[T]),l.slides[T].swiperLoopMoveDOM=!1}),v&&_.forEach(T=>{l.slides[T].swiperLoopMoveDOM=!0,h.append(l.slides[T]),l.slides[T].swiperLoopMoveDOM=!1}),l.recalcSlides(),d.slidesPerView==="auto"&&l.updateSlides(),d.watchSlidesProgress&&l.updateSlidesOffset(),t){if(m.length>0&&x)if(typeof e=="undefined"){let T=l.slidesGrid[y],M=l.slidesGrid[y+w]-T;a?l.setTranslate(l.translate-M):(l.slideTo(y+w,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=M))}else i&&l.slideToLoop(e,0,!1,!0);else if(_.length>0&&v)if(typeof e=="undefined"){let T=l.slidesGrid[y],M=l.slidesGrid[y-A]-T;a?l.setTranslate(l.translate-M):(l.slideTo(y-A,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=M))}else l.slideToLoop(e,0,!1,!0)}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){let T={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(b=>{!b.destroyed&&b.params.loop&&b.loopFix(T)}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix(T)}l.emit("loopFix")}function zm(){let r=this,{params:e,slidesEl:t}=r;if(!e.loop||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();let n=[];r.slides.forEach(i=>{let s=typeof i.swiperSlideIndex=="undefined"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[s]=i}),r.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var Fm={loopCreate:Dm,loopFix:Om,loopDestroy:zm};function Nm(r){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function km(){let r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var Bm={setGrabCursor:Nm,unsetGrabCursor:km};function Um(r,e){e===void 0&&(e=this);function t(n){if(!n||n===_i()||n===en())return null;n.assignedSlot&&(n=n.assignedSlot);let i=n.closest(r);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function Vm(r){let e=this,t=_i(),n=en(),i=e.touchEventsData;i.evCache.push(r);let{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=r;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;let u=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;u&&l.target&&l.target.shadowRoot&&f&&(c=f[0]);let h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,d=!!(l.target&&l.target.shadowRoot);if(s.noSwiping&&(d?Um(h,c):c.closest(h))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;let g=o.currentX,p=o.currentY,m=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,_=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(m&&(g<=_||g>=n.innerWidth-_))if(m==="prevent")r.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=p,i.touchStartTime=Br(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;c.matches(i.focusableElements)&&(y=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();let v=y&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||v)&&!c.isContentEditable&&l.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function Gm(r){let e=_i(),t=this,n=t.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!i.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}let c=n.evCache.findIndex(A=>A.pointerId===l.pointerId);c>=0&&(n.evCache[c]=l);let u=n.evCache.length>1?n.evCache[0]:l,f=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){s.startX=f,s.startY=h;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:f,startY:h,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:f,currentY:h}),n.touchStartTime=Br());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(h<s.startY&&t.translate<=t.maxTranslate()||h>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=f,s.currentY=h;let d=s.currentX-s.startX,g=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(d**2+g**2)<t.params.threshold)return;if(typeof n.isScrolling=="undefined"){let A;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:d*d+g*g>=25&&(A=Math.atan2(Math.abs(g),Math.abs(d))*180/Math.PI,n.isScrolling=t.isHorizontal()?A>i.touchAngle:90-A>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving=="undefined"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let p=t.isHorizontal()?d:g,m=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(p=Math.abs(p)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),s.diff=p,p*=i.touchRatio,o&&(p=-p,m=-m);let _=t.touchesDirection;t.swipeDirection=p>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";let y=t.params.loop&&!i.cssMode;if(!n.isMoved){if(y&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(A)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let v;n.isMoved&&_!==t.touchesDirection&&y&&Math.abs(p)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),v=!0),t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=p+n.startTranslate;let x=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),p>0?(y&&!v&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(x=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+p)**w))):p<0&&(y&&!v&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(x=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-p)**w))),x&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(p)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function Hm(r){let e=this,t=e.touchEventsData,n=t.evCache.findIndex(v=>v.pointerId===r.pointerId);if(n>=0&&t.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(r.type)&&!(r.type==="pointercancel"&&(e.browser.isSafari||e.browser.isWebView)))return;let{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!i.simulateTouch&&r.pointerType==="mouse")return;let c=r;if(c.originalEvent&&(c=c.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",c),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let u=Br(),f=u-t.touchStartTime;if(e.allowClick){let v=c.path||c.composedPath&&c.composedPath();e.updateClickedSlide(v&&v[0]||c.target),e.emit("tap click",c),f<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",c)}if(t.lastClickTime=Br(),Da(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||s.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(i.followFinger?h=o?e.translate:-e.translate:h=-t.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let d=0,g=e.slidesSizesGrid[0];for(let v=0;v<a.length;v+=v<i.slidesPerGroupSkip?1:i.slidesPerGroup){let x=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[v+x]!="undefined"?h>=a[v]&&h<a[v+x]&&(d=v,g=a[v+x]-a[v]):h>=a[v]&&(d=v,g=a[a.length-1]-a[a.length-2])}let p=null,m=null;i.rewind&&(e.isBeginning?m=i.virtual&&i.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(p=0));let _=(h-a[d])/g,y=d<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(f>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(_>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?p:d+y):e.slideTo(d)),e.swipeDirection==="prev"&&(_>1-i.longSwipesRatio?e.slideTo(d+y):m!==null&&_<0&&Math.abs(_)>i.longSwipesRatio?e.slideTo(m):e.slideTo(d))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(c.target===e.navigation.nextEl||c.target===e.navigation.prevEl)?c.target===e.navigation.nextEl?e.slideTo(d+y):e.slideTo(d):(e.swipeDirection==="next"&&e.slideTo(p!==null?p:d+y),e.swipeDirection==="prev"&&e.slideTo(m!==null?m:d))}}function hh(){let r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();let{allowSlideNext:n,allowSlidePrev:i,snapGrid:s}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();let a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!a?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=i,r.allowSlideNext=n,r.params.watchOverflow&&s!==r.snapGrid&&r.checkOverflow()}function Wm(r){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Xm(){let r=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=r;if(!n)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let i,s=r.maxTranslate()-r.minTranslate();s===0?i=0:i=(r.translate-r.minTranslate())/s,i!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function qm(r){let e=this;Oa(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}var fh=!1;function Ym(){}var _h=(r,e)=>{let t=_i(),{params:n,el:i,wrapperEl:s,device:o}=r,a=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;i[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:a}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",r.onClick,!0),n.cssMode&&s[l]("scroll",r.onScroll),n.updateOnWindowResize?r[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",hh,!0):r[c]("observerUpdate",hh,!0),i[l]("load",r.onLoad,{capture:!0})};function $m(){let r=this,e=_i(),{params:t}=r;r.onTouchStart=Vm.bind(r),r.onTouchMove=Gm.bind(r),r.onTouchEnd=Hm.bind(r),t.cssMode&&(r.onScroll=Xm.bind(r)),r.onClick=Wm.bind(r),r.onLoad=qm.bind(r),fh||(e.addEventListener("touchstart",Ym),fh=!0),_h(r,"on")}function Zm(){_h(this,"off")}var Jm={attachEvents:$m,detachEvents:Zm},dh=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function Km(){let r=this,{realIndex:e,initialized:t,params:n,el:i}=r,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;let o=r.getBreakpoint(s,r.params.breakpointsBase,r.el);if(!o||r.currentBreakpoint===o)return;let l=(o in s?s[o]:void 0)||r.originalParams,c=dh(r,n),u=dh(r,l),f=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),r.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),r.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(p=>{if(typeof l[p]=="undefined")return;let m=n[p]&&n[p].enabled,_=l[p]&&l[p].enabled;m&&!_&&r[p].disable(),!m&&_&&r[p].enable()});let h=l.direction&&l.direction!==n.direction,d=n.loop&&(l.slidesPerView!==n.slidesPerView||h);h&&t&&r.changeDirection(),_n(r.params,l);let g=r.params.enabled;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),f&&!g?r.disable():!f&&g&&r.enable(),r.currentBreakpoint=o,r.emit("_beforeBreakpoint",l),d&&t&&(r.loopDestroy(),r.loopCreate(e),r.updateSlides()),r.emit("breakpoint",l)}function jm(r,e,t){if(e===void 0&&(e="window"),!r||e==="container"&&!t)return;let n=!1,i=en(),s=e==="window"?i.innerHeight:t.clientHeight,o=Object.keys(r).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){let l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){let{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var Qm={setBreakpoint:Km,getBreakpoint:jm};function eg(r,e){let t=[];return r.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function tg(){let r=this,{classNames:e,params:t,rtl:n,el:i,device:s}=r,o=eg(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),i.classList.add(...e),r.emitContainerClasses()}function ng(){let r=this,{el:e,classNames:t}=r;e.classList.remove(...t),r.emitContainerClasses()}var ig={addClasses:tg,removeClasses:ng};function sg(){let r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:n}=t;if(n){let i=r.slides.length-1,s=r.slidesGrid[i]+r.slidesSizesGrid[i]+n*2;r.isLocked=r.size>s}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var rg={checkOverflow:sg},ph={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ag(r,e){return function(n){n===void 0&&(n={});let i=Object.keys(n)[0],s=n[i];if(typeof s!="object"||s===null){_n(e,n);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&r[i]===!0&&(r[i]={auto:!0}),!(i in r&&"enabled"in s)){_n(e,n);return}r[i]===!0&&(r[i]={enabled:!0}),typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),_n(e,n)}}var yl={eventsEmitter:im,update:pm,translate:ym,transition:Sm,slide:Im,loop:Fm,grabCursor:Bm,events:Jm,breakpoints:Qm,checkOverflow:rg,classes:ig},bl={},zt=class{constructor(){let e,t;for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=_n({},t),e&&!t.el&&(t.el=e);let o=_i();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){let u=[];return o.querySelectorAll(t.el).forEach(f=>{let h=_n({},t,{el:f});u.push(new zt(h))}),u}let a=this;a.__swiper__=!0,a.support=mh(),a.device=jp({userAgent:t.userAgent}),a.browser=em(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);let l={};a.modules.forEach(u=>{u({params:t,swiper:a,extendParams:ag(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});let c=_n({},ph,l);return a.params=_n({},c,bl,t),a.originalParams=_n({},a.params),a.passedParams=_n({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getSlideIndex(e){let{slidesEl:t,params:n}=this,i=oi(t,`.${n.slideClass}, swiper-slide`),s=pl(i[0]);return pl(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=oi(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let i=n.minTranslate(),o=(n.maxTranslate()-i)*e+i;n.translateTo(o,typeof t=="undefined"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);let n=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=n,u=1;if(i.centeredSlides){let f=s[c]?s[c].swiperSlideSize:0,h;for(let d=c+1;d<s.length;d+=1)s[d]&&!h&&(f+=s[d].swiperSlideSize,u+=1,f>l&&(h=!0));for(let d=c-1;d>=0;d-=1)s[d]&&!h&&(f+=s[d].swiperSlideSize,u+=1,f>l&&(h=!0))}else if(e==="current")for(let f=c+1;f<s.length;f+=1)(t?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(u+=1);return u}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Oa(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){let o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let o=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);let n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){let t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&(t.isElement=!0);let i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,o=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):oi(n,i())[0])();return!o&&t.params.createElements&&(o=oh("div",t.params.wrapperClass),n.append(o),oi(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement?n.parentNode.host:o,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||xi(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||xi(n,"direction")==="rtl"),wrongRTL:xi(o,"display")==="-webkit-box"}),!0}init(e){let t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?Oa(t,i):i.addEventListener("load",s=>{Oa(t,s.target)})}),wl(t),t.initialized=!0,wl(t),t.emit("init"),t.emit("afterInit")),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);let n=this,{params:i,el:s,wrapperEl:o,slides:a}=n;return typeof n.params=="undefined"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el.swiper=null,rh(n)),n.destroyed=!0),null}static extendDefaults(e){_n(bl,e)}static get extendedDefaults(){return bl}static get defaults(){return ph}static installModule(e){zt.prototype.__modules__||(zt.prototype.__modules__=[]);let t=zt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>zt.installModule(t)),zt):(zt.installModule(e),zt)}};Object.keys(yl).forEach(r=>{Object.keys(yl[r]).forEach(e=>{zt.prototype[e]=yl[r][e]})});zt.use([tm,nm]);window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{function r(e){return e<10?"0"+e:e}$(".slider-video-gallery_component").each(function(){let e=r($(this).find(".is-slider-videos").length);$(".swiper-number-total").text(e);let t=new zt($(this).find(".swiper.is-slider-bg")[0],{slidesPerView:1,speed:400,effect:"fade",allowTouchMove:!1});new zt($(this).find(".is-slider-videos")[0],{slidesPerView:"auto",speed:600,loop:!0,slideToClickedSlide:!0,keyboard:!0,centeredSlides:!0,slideActiveClass:"is-active",thumbs:{swiper:t},navigation:{nextEl:$(this).find(".swiper-next")[0],prevEl:$(this).find(".swiper-prev")[0]}}).on("slideChange",function(i){let s=r(i.realIndex+1);$(".swiper-number-current").text(s)})})});var zc="149";var og=0,xh=1,lg=2;var Of=1,cg=2,$r=3,$i=0,Pn=1,qi=2;var Yi=0,lr=1,vh=2,yh=3,bh=4,ug=5,rr=100,hg=101,fg=102,wh=103,Mh=104,dg=200,pg=201,mg=202,gg=203,zf=204,Ff=205,_g=206,xg=207,vg=208,yg=209,bg=210,wg=0,Mg=1,Sg=2,nc=3,Tg=4,Eg=5,Ag=6,Cg=7,Nf=0,Pg=1,Lg=2,Ti=0,Rg=1,Ig=2,Dg=3,Og=4,zg=5,kf=300,hr=301,fr=302,ic=303,sc=304,vo=306,rc=1e3,Kn=1001,ac=1002,sn=1003,Sh=1004;var Ml=1005;var mt=1006,Fg=1007;var Kr=1008;var _s=1009,Ng=1010,kg=1011,Bf=1012,Bg=1013,ds=1014,ps=1015,jr=1016,Ug=1017,Vg=1018,cr=1020,Gg=1021,jn=1023,Hg=1024,Wg=1025,ms=1026,dr=1027,Xg=1028,qg=1029,Yg=1030,$g=1031,Zg=1033,Sl=33776,Tl=33777,El=33778,Al=33779,Th=35840,Eh=35841,Ah=35842,Ch=35843,Jg=36196,Ph=37492,Lh=37496,Rh=37808,Ih=37809,Dh=37810,Oh=37811,zh=37812,Fh=37813,Nh=37814,kh=37815,Bh=37816,Uh=37817,Vh=37818,Gh=37819,Hh=37820,Wh=37821,Cl=36492,Kg=36283,Xh=36284,qh=36285,Yh=36286;var no=2300,io=2301,Pl=2302,$h=2400,Zh=2401,Jh=2402;var xs=3e3,ft=3001,jg=3200,Qg=3201,e0=0,t0=1;var li="srgb",Qr="srgb-linear";var Ll=7680;var n0=519,Kh=35044;var jh="300 es",oc=1035,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rl=Math.PI/180,Qh=180/Math.PI;function sa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[r&255]+Yt[r>>8&255]+Yt[r>>16&255]+Yt[r>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function An(r,e,t){return Math.max(e,Math.min(t,r))}function i0(r,e){return(r%e+e)%e}function Il(r,e,t){return(1-t)*r+t*e}function ef(r){return(r&r-1)===0&&r!==0}function lc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function za(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var rt=class{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(){rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],y=i[1],v=i[4],x=i[7],w=i[2],A=i[5],T=i[8];return s[0]=o*p+a*y+l*w,s[3]=o*m+a*v+l*A,s[6]=o*_+a*x+l*T,s[1]=c*p+u*y+f*w,s[4]=c*m+u*v+f*A,s[7]=c*_+u*x+f*T,s[2]=h*p+d*y+g*w,s[5]=h*m+d*v+g*A,s[8]=h*_+d*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new rn;function Uf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ol={[li]:{[Qr]:gs},[Qr]:{[li]:to}},tn={legacyMode:!0,get workingColorSpace(){return Qr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ol[e]&&Ol[e][t]!==void 0){let n=Ol[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},$n={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function zl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Na(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=i0(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,tn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,tn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,tn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,tn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=li){let n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return tn.fromWorkingColorSpace(Na(this,Lt),e),An(Lt.r*255,0,255)<<16^An(Lt.g*255,0,255)<<8^An(Lt.b*255,0,255)<<0}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Na(this,Lt),t);let n=Lt.r,i=Lt.g,s=Lt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Na(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=li){return tn.fromWorkingColorSpace(Na(this,Lt),e),e!==li?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=n,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Fa);let n=Il($n.h,Fa.h,t),i=Il($n.s,Fa.s,t),s=Il($n.l,Fa.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};dt.NAMES=Vf;var Xs,so=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=ea("canvas")),Xs.width=e.width,Xs.height=e.height;let n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gs(t[n]/255)*255):t[n]=gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ro=class{constructor(e=null){this.isSource=!0,this.uuid=sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fl(i[o].image)):s.push(Fl(i[o]))}else s=Fl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Fl(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?so.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var s0=0,Vt=class extends Zi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Kn,i=Kn,s=mt,o=Kr,a=jn,l=_s,c=Vt.DEFAULT_ANISOTROPY,u=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=sa(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=kf;Vt.DEFAULT_ANISOTROPY=1;var yt=class{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(d+1)/2,w=(_+1)/2,A=(u+h)/4,T=(f+p)/4,b=(g+m)/4;return v>x&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=b/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ai=class extends Zi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cc=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==d||u!==g){let m=1-a,_=l*h+c*d+u*g+f*p,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){let w=Math.sqrt(v),A=Math.atan2(w,_*y);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let x=a*y;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+p*x,m===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new X,tf=new Ji,vs=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ls.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ls)}else n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox),kl.applyMatrix4(e.matrixWorld),this.union(kl);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ls),ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ka.subVectors(this.max,Vr),qs.subVectors(e.a,Vr),Ys.subVectors(e.b,Vr),$s.subVectors(e.c,Vr),Vi.subVectors(Ys,qs),Gi.subVectors($s,Ys),cs.subVectors(qs,$s);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-cs.z,cs.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,cs.z,0,-cs.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-cs.y,cs.x,0];return!Bl(t,qs,Ys,$s,ka)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,qs,Ys,$s,ka))?!1:(Ba.crossVectors(Vi,Gi),t=[Ba.x,Ba.y,Ba.z],Bl(t,qs,Ys,$s,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ls.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ls).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new X,new X,new X,new X,new X,new X,new X,new X],ls=new X,kl=new vs,qs=new X,Ys=new X,$s=new X,Vi=new X,Gi=new X,cs=new X,Vr=new X,ka=new X,Ba=new X,us=new X;function Bl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var r0=new vs,Gr=new X,Ul=new X,ta=class{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):r0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Ul)),this.expandByPoint(Gr.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new X,Vl=new X,Ua=new X,Hi=new X,Gl=new X,Va=new X,Hl=new X,uc=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(t).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Vl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),a=Hi.dot(this.direction),l=-Hi.dot(Ua),c=Hi.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let p=1/u;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ua).multiplyScalar(h).add(Vl),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){Gl.subVectors(t,e),Va.subVectors(n,e),Hl.crossVectors(Gl,Va);let o=this.direction.dot(Hl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(Va.crossVectors(Hi,Va));if(l<0)return null;let c=a*this.direction.dot(Gl.cross(Hi));if(c<0||l+c>o)return null;let u=-a*Hi.dot(Hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class{constructor(){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,p,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-p*f}else if(e.order==="XZY"){let h=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,o0)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Wi.crossVectors(n,Tn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Wi.crossVectors(n,Tn)),Wi.normalize(),Ga.crossVectors(Tn,Wi),i[0]=Wi.x,i[4]=Ga.x,i[8]=Tn.x,i[1]=Wi.y,i[5]=Ga.y,i[9]=Tn.y,i[2]=Wi.z,i[6]=Ga.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],y=n[3],v=n[7],x=n[11],w=n[15],A=i[0],T=i[4],b=i[8],M=i[12],L=i[1],D=i[5],I=i[9],z=i[13],O=i[2],k=i[6],Y=i[10],W=i[14],B=i[3],j=i[7],C=i[11],re=i[15];return s[0]=o*A+a*L+l*O+c*B,s[4]=o*T+a*D+l*k+c*j,s[8]=o*b+a*I+l*Y+c*C,s[12]=o*M+a*z+l*W+c*re,s[1]=u*A+f*L+h*O+d*B,s[5]=u*T+f*D+h*k+d*j,s[9]=u*b+f*I+h*Y+d*C,s[13]=u*M+f*z+h*W+d*re,s[2]=g*A+p*L+m*O+_*B,s[6]=g*T+p*D+m*k+_*j,s[10]=g*b+p*I+m*Y+_*C,s[14]=g*M+p*z+m*W+_*re,s[3]=y*A+v*L+x*O+w*B,s[7]=y*T+v*D+x*k+w*j,s[11]=y*b+v*I+x*Y+w*C,s[15]=y*M+v*z+x*W+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+p*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],y=f*m*c-p*h*c+p*l*d-a*m*d-f*l*_+a*h*_,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*_-o*h*_,x=u*p*c-g*f*c+g*a*d-o*p*d-u*a*_+o*f*_,w=g*f*l-u*p*l-g*a*h+o*p*h+u*a*m-o*f*m,A=t*y+n*v+i*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=y*T,e[1]=(p*h*s-f*m*s-p*i*d+n*m*d+f*i*_-n*h*_)*T,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*_+n*l*_)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=v*T,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*_+t*h*_)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(g*f*s-u*p*s-g*n*d+t*p*d+u*n*_-t*f*_)*T,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=w*T,e[13]=(u*p*i-g*f*i+g*n*h-t*p*h-u*n*m+t*f*m)*T,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,p=o*u,m=o*f,_=a*f,y=l*c,v=l*u,x=l*f,w=n.x,A=n.y,T=n.z;return i[0]=(1-(p+_))*w,i[1]=(d+x)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(h+_))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(m-y)*T,i[10]=(1-(h+p))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Zs.set(i[0],i[1],i[2]).length(),o=Zs.set(i[4],i[5],i[6]).length(),a=Zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Zn.copy(this);let c=1/s,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new X,Zn=new Rt,a0=new X(0,0,0),o0=new X(1,1,1),Wi=new X,Ga=new X,Tn=new X,nf=new Rt,sf=new Ji,pr=class{constructor(e=0,t=0,n=0,i=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l0=0,rf=new X,Js=new Ji,bi=new Rt,Ha=new X,Hr=new X,c0=new X,u0=new Ji,af=new X(1,0,0),of=new X(0,1,0),lf=new X(0,0,1),h0={type:"added"},cf={type:"removed"},an=class extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();let e=new X,t=new pr,n=new Ji,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new rn}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Hr,Ha,this.up):bi.lookAt(Ha,Hr,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(bi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(h0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(cf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};an.DEFAULT_UP=new X(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new X,wi=new X,Wl=new X,Mi=new X,Ks=new X,js=new X,uf=new X,Xl=new X,ql=new X,Yl=new X,Qn=class{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Jn.subVectors(i,t),wi.subVectors(n,t),Wl.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(wi),l=Jn.dot(Wl),c=wi.dot(wi),u=wi.dot(Wl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Mi),l.set(0,0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),wi.subVectors(e,t),Jn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ks.subVectors(i,n),js.subVectors(s,n),Xl.subVectors(e,n);let l=Ks.dot(Xl),c=js.dot(Xl);if(l<=0&&c<=0)return t.copy(n);ql.subVectors(e,i);let u=Ks.dot(ql),f=js.dot(ql);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ks,o);Yl.subVectors(e,s);let d=Ks.dot(Yl),g=js.dot(Yl);if(g>=0&&d<=g)return t.copy(s);let p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(js,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return uf.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(uf,a);let _=1/(m+p+h);return o=p*_,a=h*_,t.copy(n).addScaledVector(Ks,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},f0=0,mr=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=lr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zf,this.blendDst=Ff,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lo=class extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},At=new X,Wa=new rt,kn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var co=class extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var uo=class extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ei=class extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var d0=0,Fn=new Rt,$l=new an,Qs=new X,En=new vs,Wr=new vs,Ft=new X,Ci=class extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?uo:co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new rn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(En.min,Wr.min),En.expandByPoint(Ft),Ft.addVectors(En.max,Wr.max),En.expandByPoint(Ft)):(En.expandByPoint(Wr.min),En.expandByPoint(Wr.max))}En.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),Ft.add(Qs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new X,u[L]=new X;let f=new X,h=new X,d=new X,g=new rt,p=new rt,m=new rt,_=new X,y=new X;function v(L,D,I){f.fromArray(i,L*3),h.fromArray(i,D*3),d.fromArray(i,I*3),g.fromArray(o,L*2),p.fromArray(o,D*2),m.fromArray(o,I*2),h.sub(f),d.sub(f),p.sub(g),m.sub(g);let z=1/(p.x*m.y-m.x*p.y);isFinite(z)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(z),y.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(z),c[L].add(_),c[D].add(_),c[I].add(_),u[L].add(y),u[D].add(y),u[I].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let L=0,D=x.length;L<D;++L){let I=x[L],z=I.start,O=I.count;for(let k=z,Y=z+O;k<Y;k+=3)v(n[k+0],n[k+1],n[k+2])}let w=new X,A=new X,T=new X,b=new X;function M(L){T.fromArray(s,L*3),b.copy(T);let D=c[L];w.copy(D),w.sub(T.multiplyScalar(T.dot(D))).normalize(),A.crossVectors(b,D);let z=A.dot(u[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=z}for(let L=0,D=x.length;L<D;++L){let I=x[L],z=I.start,O=I.count;for(let k=z,Y=z+O;k<Y;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[d++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ci,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},hf=new Rt,er=new uc,Zl=new ta,Xr=new X,qr=new X,Yr=new X,Jl=new X,Xa=new X,qa=new rt,Ya=new rt,$a=new rt,Kl=new X,Za=new X,Nn=class extends an{constructor(e=new Ci,t=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Jl.fromBufferAttribute(f,e),o?Xa.addScaledVector(Jl,u):Xa.addScaledVector(Jl.sub(t),u))}t.add(Xa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(s),e.ray.intersectsSphere(Zl)===!1)||(hf.copy(s).invert(),er.copy(e.ray).applyMatrix4(hf),n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1))return;let o,a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){let p=f[d],m=i[p.materialIndex],_=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,x=y;v<x;v+=3){let w=a.getX(v),A=a.getX(v+1),T=a.getX(v+2);o=Ja(this,m,e,er,c,u,w,A,T),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){let _=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);o=Ja(this,i,e,er,c,u,_,y,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){let p=f[d],m=i[p.materialIndex],_=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,x=y;v<x;v+=3){let w=v,A=v+1,T=v+2;o=Ja(this,m,e,er,c,u,w,A,T),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let d=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){let _=p,y=p+1,v=p+2;o=Ja(this,i,e,er,c,u,_,y,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function p0(r,e,t,n,i,s,o,a){let l;if(e.side===Pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$i,a),l===null)return null;Za.copy(a),Za.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:r}}function Ja(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Xr),r.getVertexPosition(a,qr),r.getVertexPosition(l,Yr);let c=p0(r,e,t,n,Xr,qr,Yr,Kl);if(c){i&&(qa.fromBufferAttribute(i,o),Ya.fromBufferAttribute(i,a),$a.fromBufferAttribute(i,l),c.uv=Qn.getUV(Kl,Xr,qr,Yr,qa,Ya,$a,new rt)),s&&(qa.fromBufferAttribute(s,o),Ya.fromBufferAttribute(s,a),$a.fromBufferAttribute(s,l),c.uv2=Qn.getUV(Kl,Xr,qr,Yr,qa,Ya,$a,new rt));let u={a:o,b:a,c:l,normal:new X,materialIndex:0};Qn.getNormal(Xr,qr,Yr,u.normal),c.face=u}return c}var ys=class extends Ci{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(f,2));function g(p,m,_,y,v,x,w,A,T,b,M){let L=x/T,D=w/b,I=x/2,z=w/2,O=A/2,k=T+1,Y=b+1,W=0,B=0,j=new X;for(let C=0;C<Y;C++){let re=C*D-z;for(let U=0;U<k;U++){let Q=U*L-I;j[p]=Q*y,j[m]=re*v,j[_]=O,c.push(j.x,j.y,j.z),j[p]=0,j[m]=0,j[_]=A>0?1:-1,u.push(j.x,j.y,j.z),f.push(U/T),f.push(1-C/b),W+=1}}for(let C=0;C<b;C++)for(let re=0;re<T;re++){let U=h+re+k*C,Q=h+re+k*(C+1),ie=h+(re+1)+k*(C+1),se=h+(re+1)+k*C;l.push(U,Q,se),l.push(Q,ie,se),B+=6}a.addGroup(d,B,M),d+=B,h+=W}}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(r){let e={};for(let t=0;t<r.length;t++){let n=gr(r[t]);for(let i in n)e[i]=n[i]}return e}function m0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gf(r){return r.getRenderTarget()===null&&r.outputEncoding===ft?li:Qr}var g0={clone:gr,merge:nn},_0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ho=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cn=class extends ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tr=-90,nr=1,hc=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Cn(tr,nr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Cn(tr,nr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let o=new Cn(tr,nr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let a=new Cn(tr,nr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let l=new Cn(tr,nr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new Cn(tr,nr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ti,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},fo=class extends Vt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Yi});s.uniforms.tEquirect.value=t;let o=new Nn(i,s),a=t.minFilter;return t.minFilter===Kr&&(t.minFilter=mt),new hc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},jl=new X,v0=new X,y0=new rn,Si=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jl.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||y0.getNormalMatrix(e),i=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ir=new ta,Ka=new X,po=class{constructor(e=new Si,t=new Si,n=new Si,i=new Si,s=new Si,o=new Si){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],y=n[14],v=n[15];return t[0].setComponents(a-i,f-l,p-h,v-m).normalize(),t[1].setComponents(a+i,f+l,p+h,v+m).normalize(),t[2].setComponents(a+s,f+c,p+d,v+_).normalize(),t[3].setComponents(a-s,f-c,p-d,v-_).normalize(),t[4].setComponents(a-o,f-u,p-g,v-y).normalize(),t[5].setComponents(a+o,f+u,p+g,v+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ka.x=i.normal.x>0?e.max.x:e.min.x,Ka.y=i.normal.y>0?e.max.y:e.min.y,Ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function b0(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){let h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}var bs=class extends Ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){let y=_*h-o;for(let v=0;v<c;v++){let x=v*f-s;g.push(x,-y,0),p.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){let v=y+c*_,x=y+c*(_+1),w=y+1+c*(_+1),A=y+1+c*_;d.push(v,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Ei(g,3)),this.setAttribute("normal",new Ei(p,3)),this.setAttribute("uv",new Ei(m,2))}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}},w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0="vec3 transformed = vec3( position );",P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,V0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,__=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,F_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,dx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,px=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_x=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ex=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ve={alphamap_fragment:w0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:A0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:L0,iridescence_fragment:R0,bumpmap_pars_fragment:I0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:F0,color_fragment:N0,color_pars_fragment:k0,color_pars_vertex:B0,color_vertex:U0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,encodings_fragment:$0,encodings_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:K0,envmap_pars_fragment:j0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_fragment:a_,lightmap_pars_fragment:o_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:d_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:__,lights_fragment_begin:x_,lights_fragment_maps:v_,lights_fragment_end:y_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:S_,map_fragment:T_,map_pars_fragment:E_,map_particle_fragment:A_,map_particle_pars_fragment:C_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:L_,morphcolor_vertex:R_,morphnormal_vertex:I_,morphtarget_pars_vertex:D_,morphtarget_vertex:O_,normal_fragment_begin:z_,normal_fragment_maps:F_,normal_pars_fragment:N_,normal_pars_vertex:k_,normal_vertex:B_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:W_,output_fragment:X_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:$_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:ux,transmission_fragment:hx,transmission_pars_fragment:fx,uv_pars_fragment:dx,uv_pars_vertex:px,uv_vertex:mx,uv2_pars_fragment:gx,uv2_pars_vertex:_x,uv2_vertex:xx,worldpos_vertex:vx,background_vert:yx,background_frag:bx,backgroundCube_vert:wx,backgroundCube_frag:Mx,cube_vert:Sx,cube_frag:Tx,depth_vert:Ex,depth_frag:Ax,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Rx,linedashed_vert:Ix,linedashed_frag:Dx,meshbasic_vert:Ox,meshbasic_frag:zx,meshlambert_vert:Fx,meshlambert_frag:Nx,meshmatcap_vert:kx,meshmatcap_frag:Bx,meshnormal_vert:Ux,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Hx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:$x,points_frag:Zx,shadow_vert:Jx,shadow_frag:Kx,sprite_vert:jx,sprite_frag:Qx},ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}}},ci={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ci.physical={uniforms:nn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new rt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ja={r:0,b:0,g:0};function ev(r,e,t,n,i,s,o){let a=new dt(0),l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,_){let y=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));let x=r.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===vo)?(u===void 0&&(u=new Nn(new ys(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:gr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==ft,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nn(new bs(2,2),new ei({name:"BackgroundMaterial",uniforms:gr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(ja,Gf(r)),n.buffers.color.setClear(ja.r,ja.g,ja.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function tv(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null),c=l,u=!1;function f(O,k,Y,W,B){let j=!1;if(o){let C=p(W,Y,k);c!==C&&(c=C,d(c.object)),j=_(O,W,Y,B),j&&y(O,W,Y,B)}else{let C=k.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=C,j=!0)}B!==null&&t.update(B,34963),(j||u)&&(u=!1,b(O,k,Y,W),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,k,Y){let W=Y.wireframe===!0,B=a[O.id];B===void 0&&(B={},a[O.id]=B);let j=B[k.id];j===void 0&&(j={},B[k.id]=j);let C=j[W];return C===void 0&&(C=m(h()),j[W]=C),C}function m(O){let k=[],Y=[],W=[];for(let B=0;B<i;B++)k[B]=0,Y[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:W,object:O,attributes:{},index:null}}function _(O,k,Y,W){let B=c.attributes,j=k.attributes,C=0,re=Y.getAttributes();for(let U in re)if(re[U].location>=0){let ie=B[U],se=j[U];if(se===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function y(O,k,Y,W){let B={},j=k.attributes,C=0,re=Y.getAttributes();for(let U in re)if(re[U].location>=0){let ie=j[U];ie===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor));let se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),B[U]=se,C++}c.attributes=B,c.attributesNum=C,c.index=W}function v(){let O=c.newAttributes;for(let k=0,Y=O.length;k<Y;k++)O[k]=0}function x(O){w(O,0)}function w(O,k){let Y=c.newAttributes,W=c.enabledAttributes,B=c.attributeDivisors;Y[O]=1,W[O]===0&&(r.enableVertexAttribArray(O),W[O]=1),B[O]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),B[O]=k)}function A(){let O=c.newAttributes,k=c.enabledAttributes;for(let Y=0,W=k.length;Y<W;Y++)k[Y]!==O[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function T(O,k,Y,W,B,j){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(O,k,Y,B,j):r.vertexAttribPointer(O,k,Y,W,B,j)}function b(O,k,Y,W){if(n.isWebGL2===!1&&(O.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let B=W.attributes,j=Y.getAttributes(),C=k.defaultAttributeValues;for(let re in j){let U=j[re];if(U.location>=0){let Q=B[re];if(Q===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){let ie=Q.normalized,se=Q.itemSize,V=t.get(Q);if(V===void 0)continue;let be=V.buffer,ge=V.type,me=V.bytesPerElement;if(Q.isInterleavedBufferAttribute){let de=Q.data,Fe=de.stride,Pe=Q.offset;if(de.isInstancedInterleavedBuffer){for(let ae=0;ae<U.locationSize;ae++)w(U.location+ae,de.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<U.locationSize;ae++)x(U.location+ae);r.bindBuffer(34962,be);for(let ae=0;ae<U.locationSize;ae++)T(U.location+ae,se/U.locationSize,ge,ie,Fe*me,(Pe+se/U.locationSize*ae)*me)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)w(U.location+de,Q.meshPerAttribute);O.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<U.locationSize;de++)x(U.location+de);r.bindBuffer(34962,be);for(let de=0;de<U.locationSize;de++)T(U.location+de,se/U.locationSize,ge,ie,se*me,se/U.locationSize*de*me)}}else if(C!==void 0){let ie=C[re];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(U.location,ie);break;case 3:r.vertexAttrib3fv(U.location,ie);break;case 4:r.vertexAttrib4fv(U.location,ie);break;default:r.vertexAttrib1fv(U.location,ie)}}}}A()}function M(){I();for(let O in a){let k=a[O];for(let Y in k){let W=k[Y];for(let B in W)g(W[B].object),delete W[B];delete k[Y]}delete a[O]}}function L(O){if(a[O.id]===void 0)return;let k=a[O.id];for(let Y in k){let W=k[Y];for(let B in W)g(W[B].object),delete W[B];delete k[Y]}delete a[O.id]}function D(O){for(let k in a){let Y=a[k];if(Y[O.id]===void 0)continue;let W=Y[O.id];for(let B in W)g(W[B].object),delete W[B];delete Y[O.id]}}function I(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:I,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function nv(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function iv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),y=r.getParameter(36349),v=h>0,x=o||e.has("OES_texture_float"),w=v&&x,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:A}}function sv(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Si,a=new rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{let y=s?0:n,v=y*4,x=_.clippingState||null;l.value=x,x=u(g,h,v,d);for(let w=0;w!==v;++w)x[w]=t[w];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let p=f!==null?f.length:0,m=null;if(p!==0){if(m=l.value,g!==!0||m===null){let _=d+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,x=d;v!==p;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function rv(r){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=hr:a===sc&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===ic||a===sc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var na=class extends ho{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ar=4,ff=[.125,.215,.35,.446,.526,.582],fs=20,Ql=new na,df=new dt,ec=null,hs=(1+Math.sqrt(5))/2,sr=1/hs,pf=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,hs,sr),new X(0,hs,-sr),new X(sr,0,hs),new X(-sr,0,hs),new X(hs,sr,0),new X(-hs,sr,0)],mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:jr,format:jn,encoding:xs,depthBuffer:!1},i=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(s)),this._blurMaterial=ov(s,e,t)}return i}_compileMaterial(e){let t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,i){let a=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(df),u.toneMapping=Ti,u.autoClear=!1;let d=new lo({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Nn(new ys,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(df),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));let v=this._cubeSize;Qa(i,y*v,_>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===hr||e.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=pf[(i-1)%pf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Nn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fs-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):fs;m>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let _=[],y=0;for(let T=0;T<fs;++T){let b=T/p,M=Math.exp(-b*b/2);_.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<_.length;T++)_[T]=_[T]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;let x=this._sizeLods[i],w=3*x*(i>v-ar?i-v+ar:0),A=4*(this._cubeSize-x);Qa(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Ql)}};function av(r){let e=[],t=[],n=[],i=r,s=r-ar+1+ff.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ar?l=ff[o-r+ar-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,p=3,m=2,_=1,y=new Float32Array(p*g*d),v=new Float32Array(m*g*d),x=new Float32Array(_*g*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,b=A>2?0:-1,M=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];y.set(M,p*g*A),v.set(h,m*g*A);let L=[A,A,A,A,A,A];x.set(L,_*g*A)}let w=new Ci;w.setAttribute("position",new kn(y,p)),w.setAttribute("uv",new kn(v,m)),w.setAttribute("faceIndex",new kn(x,_)),e.push(w),i>ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(r,e,t){let n=new Ai(r,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ov(r,e,t){let n=new Float32Array(fs),i=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function gf(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function _f(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ic||l===sc,u=l===hr||l===fr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new mo(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new mo(r));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cv(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uv(r,e,t,n){let i={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let g in h)e.update(h[g],34962);let d=f.morphAttributes;for(let g in d){let p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(f){let h=[],d=f.index,g=f.attributes.position,p=0;if(d!==null){let y=d.array;p=d.version;for(let v=0,x=y.length;v<x;v+=3){let w=y[v+0],A=y[v+1],T=y[v+2];h.push(w,A,A,T,T,w)}}else{let y=g.array;p=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let w=v+0,A=v+1,T=v+2;h.push(w,A,A,T,T,w)}}let m=new(Uf(h)?uo:co)(h,1);m.version=p;let _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function hv(r,e,t,n){let i=n.isWebGL2,s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function fv(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dv(r,e){return r[0]-e[0]}function pv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function mv(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0,m=s.get(u);if(m===void 0||m.count!==p){let k=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();let v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[],M=0;v===!0&&(M=1),x===!0&&(M=2),w===!0&&(M=3);let L=u.attributes.position.count*M,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let I=new Float32Array(L*D*4*p),z=new ao(I,L,D,p);z.type=ps,z.needsUpdate=!0;let O=M*4;for(let Y=0;Y<p;Y++){let W=A[Y],B=T[Y],j=b[Y],C=L*D*4*Y;for(let re=0;re<W.count;re++){let U=re*O;v===!0&&(o.fromBufferAttribute(W,re),I[C+U+0]=o.x,I[C+U+1]=o.y,I[C+U+2]=o.z,I[C+U+3]=0),x===!0&&(o.fromBufferAttribute(B,re),I[C+U+4]=o.x,I[C+U+5]=o.y,I[C+U+6]=o.z,I[C+U+7]=0),w===!0&&(o.fromBufferAttribute(j,re),I[C+U+8]=o.x,I[C+U+9]=o.y,I[C+U+10]=o.z,I[C+U+11]=j.itemSize===4?o.w:1)}}m={count:p,texture:z,size:new rt(L,D)},s.set(u,m),u.addEventListener("dispose",k)}let _=0;for(let v=0;v<d.length;v++)_+=d[v];let y=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let g=d===void 0?0:d.length,p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<g;x++){let w=p[x];w[0]=x,w[1]=d[x]}p.sort(pv);for(let x=0;x<8;x++)x<g&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dv);let m=u.morphAttributes.position,_=u.morphAttributes.normal,y=0;for(let x=0;x<8;x++){let w=a[x],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+x)!==m[A]&&u.setAttribute("morphTarget"+x,m[A]),_&&u.getAttribute("morphNormal"+x)!==_[A]&&u.setAttribute("morphNormal"+x,_[A]),i[x]=T,y+=T):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function gv(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Wf=new Vt,Xf=new ao,qf=new cc,Yf=new fo,xf=[],vf=[],yf=new Float32Array(16),bf=new Float32Array(9),wf=new Float32Array(4);function xr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=xf[i];if(s===void 0&&(s=new Float32Array(i),xf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yo(r,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _v(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function vv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function yv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function bv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;wf.set(n),r.uniformMatrix2fv(this.addr,!1,wf),Dt(t,n)}}function wv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;bf.set(n),r.uniformMatrix3fv(this.addr,!1,bf),Dt(t,n)}}function Mv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yf.set(n),r.uniformMatrix4fv(this.addr,!1,yf),Dt(t,n)}}function Sv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function Ev(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function Av(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function Cv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Pv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function Lv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function Rv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function Iv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wf,i)}function Dv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qf,i)}function Ov(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yf,i)}function zv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xf,i)}function Fv(r){switch(r){case 5126:return _v;case 35664:return xv;case 35665:return vv;case 35666:return yv;case 35674:return bv;case 35675:return wv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return Tv;case 35668:case 35672:return Ev;case 35669:case 35673:return Av;case 5125:return Cv;case 36294:return Pv;case 36295:return Lv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return zv}}function Nv(r,e){r.uniform1fv(this.addr,e)}function kv(r,e){let t=xr(e,this.size,2);r.uniform2fv(this.addr,t)}function Bv(r,e){let t=xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Uv(r,e){let t=xr(e,this.size,4);r.uniform4fv(this.addr,t)}function Vv(r,e){let t=xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Gv(r,e){let t=xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hv(r,e){let t=xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wv(r,e){r.uniform1iv(this.addr,e)}function Xv(r,e){r.uniform2iv(this.addr,e)}function qv(r,e){r.uniform3iv(this.addr,e)}function Yv(r,e){r.uniform4iv(this.addr,e)}function $v(r,e){r.uniform1uiv(this.addr,e)}function Zv(r,e){r.uniform2uiv(this.addr,e)}function Jv(r,e){r.uniform3uiv(this.addr,e)}function Kv(r,e){r.uniform4uiv(this.addr,e)}function jv(r,e,t){let n=this.cache,i=e.length,s=yo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wf,s[o])}function Qv(r,e,t){let n=this.cache,i=e.length,s=yo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qf,s[o])}function ey(r,e,t){let n=this.cache,i=e.length,s=yo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yf,s[o])}function ty(r,e,t){let n=this.cache,i=e.length,s=yo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xf,s[o])}function ny(r){switch(r){case 5126:return Nv;case 35664:return kv;case 35665:return Bv;case 35666:return Uv;case 35674:return Vv;case 35675:return Gv;case 35676:return Hv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return $v;case 36294:return Zv;case 36295:return Jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}var dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Fv(t.type)}},pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ny(t.type)}},mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Mf(r,e){r.seq.push(e),r.map[e.id]=e}function iy(r,e,t){let n=r.name,i=n.length;for(tc.lastIndex=0;;){let s=tc.exec(n),o=tc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Mf(t,c===void 0?new dc(a,r,e):new pc(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new mc(a),Mf(t,f)),t=f}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);iy(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Sf(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var sy=0;function ry(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ay(r){switch(r){case xs:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Tf(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ry(r.getShaderSource(e),o)}else return i}function oy(r,e){let t=ay(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ly(r,e){let t;switch(e){case Rg:t="Linear";break;case Ig:t="Reinhard";break;case Dg:t="OptimizedCineon";break;case Og:t="ACESFilmic";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function uy(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Zr(r){return r!==""}function Ef(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(r){return r.replace(fy,dy)}function dy(r,e){let t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return gc(t)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(r){return r.replace(py,my)}function my(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function _y(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hr:case fr:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Pg:e="ENVMAP_BLENDING_MIX";break;case Lg:e="ENVMAP_BLENDING_ADD";break}return e}function yy(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function by(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gy(t),c=_y(t),u=xy(t),f=vy(t),h=yy(t),d=t.isWebGL2?"":cy(t),g=uy(s),p=i.createProgram(),m,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(Zr).join(`
`),_.length>0&&(_+=`
`)):(m=[Pf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),_=[d,Pf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ti?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,oy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=gc(o),o=Ef(o,t),o=Af(o,t),a=gc(a),a=Ef(a,t),a=Af(a,t),o=Cf(o),a=Cf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+m+o,x=y+_+a,w=Sf(i,35633,v),A=Sf(i,35632,x);if(i.attachShader(p,w),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let M=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(w).trim(),D=i.getShaderInfoLog(A).trim(),I=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){I=!1;let O=Tf(i,w,"vertex"),k=Tf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+O+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||D==="")&&(z=!1);z&&(this.diagnostics={runnable:I,programLog:M,vertexShader:{log:L,prefix:m},fragmentShader:{log:D,prefix:_}})}i.deleteShader(w),i.deleteShader(A);let T;this.getUniforms=function(){return T===void 0&&(T=new ur(i,p)),T};let b;return this.getAttributes=function(){return b===void 0&&(b=hy(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}var wy=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}};function My(r,e,t,n,i,s,o){let a=new oo,l=new _c,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,M,L,D,I){let z=D.fog,O=I.geometry,k=b.isMeshStandardMaterial?D.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),W=Y&&Y.mapping===vo?Y.image.height:null,B=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,C=j!==void 0?j.length:0,re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let U,Q,ie,se;if(B){let Fe=ci[B];U=Fe.vertexShader,Q=Fe.fragmentShader}else U=b.vertexShader,Q=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),se=l.getFragmentShaderID(b);let V=r.getRenderTarget(),be=b.alphaTest>0,ge=b.clearcoat>0,me=b.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:b.type,vertexShader:U,fragmentShader:Q,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:h,outputEncoding:V===null?r.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:xs,map:!!b.map,matcap:!!b.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:W,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===t0,tangentSpaceNormalMap:b.normalMapType===e0,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ft,clearcoat:ge,clearcoatMap:ge&&!!b.clearcoatMap,clearcoatRoughnessMap:ge&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!b.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!b.iridescenceMap,iridescenceThicknessMap:me&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===lr,alphaMap:!!b.alphaMap,alphaTest:be,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Ti,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qi,flipSided:b.side===Pn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(r.outputEncoding)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputEncoding),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.combine),b.push(M.vertexUvs),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),b.push(a.mask)}function v(b){let M=g[b.type],L;if(M){let D=ci[M];L=g0.clone(D.uniforms)}else L=b.uniforms;return L}function x(b,M){let L;for(let D=0,I=c.length;D<I;D++){let z=c[D];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new by(r,M,b,s),c.push(L)),L}function w(b){if(--b.usedTimes===0){let M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:T}}function Sy(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ty(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rf(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,p,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function a(f,h,d,g,p,m){let _=o(f,h,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(f,h,d,g,p,m){let _=o(f,h,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Ty),n.length>1&&n.sort(h||Lf),i.length>1&&i.sort(h||Lf)}function u(){for(let f=e,h=r.length;f<h;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ey(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Rf,r.set(n,[o])):i>=s.length?(o=new Rf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ay(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Cy(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Py=0;function Ly(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ry(r,e){let t=new Ay,n=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new X);let s=new X,o=new Rt,a=new Rt;function l(u,f){let h=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,m=0,_=0,y=0,v=0,x=0,w=0,A=0,T=0,b=0;u.sort(Ly);let M=f!==!0?Math.PI:1;for(let D=0,I=u.length;D<I;D++){let z=u[D],O=z.color,k=z.intensity,Y=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=O.r*k*M,d+=O.g*k*M,g+=O.b*k*M;else if(z.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(z.sh.coefficients[B],k);else if(z.isDirectionalLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){let j=z.shadow,C=n.get(z);C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=z.shadow.matrix,x++}i.directional[p]=B,p++}else if(z.isSpotLight){let B=t.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(O).multiplyScalar(k*M),B.distance=Y,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,i.spot[_]=B;let j=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,j.updateMatrices(z),z.castShadow&&b++),i.spotLightMatrix[_]=j.matrix,z.castShadow){let C=n.get(z);C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,i.spotShadow[_]=C,i.spotShadowMap[_]=W,A++}_++}else if(z.isRectAreaLight){let B=t.get(z);B.color.copy(O).multiplyScalar(k),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=B,y++}else if(z.isPointLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*M),B.distance=z.distance,B.decay=z.decay,z.castShadow){let j=z.shadow,C=n.get(z);C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,C.shadowCameraNear=j.camera.near,C.shadowCameraFar=j.camera.far,i.pointShadow[m]=C,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=z.shadow.matrix,w++}i.point[m]=B,m++}else if(z.isHemisphereLight){let B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(k*M),B.groundColor.copy(z.groundColor).multiplyScalar(k*M),i.hemi[v]=B,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;let L=i.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==x||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,L.directionalLength=p,L.pointLength=m,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=x,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=T,i.version=Py++)}function c(u,f){let h=0,d=0,g=0,p=0,m=0,_=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let x=u[y];if(x.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(x.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function If(r,e){let t=new Ry(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iy(r,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),l;return a===void 0?(l=new If(r,e),t.set(s,[l])):o>=a.length?(l=new If(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var vc=class extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yc=class extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zy(r,e,t){let n=new po,i=new rt,s=new rt,o=new yt,a=new vc({depthPacking:Qg}),l=new yc,c={},u=t.maxTextureSize,f={[$i]:Pn,[Pn]:$i,[qi]:qi},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Dy,fragmentShader:Oy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ci;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of,this.render=function(x,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let T=r.getRenderTarget(),b=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Yi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let D=0,I=x.length;D<I;D++){let z=x[D],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let k=O.getFrameExtents();if(i.multiply(k),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,O.mapSize.y=s.y)),O.map===null){let W=this.type!==$r?{minFilter:sn,magFilter:sn}:{};O.map=new Ai(i.x,i.y,W),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let Y=O.getViewportCount();for(let W=0;W<Y;W++){let B=O.getViewport(W);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),L.viewport(o),O.updateMatrices(z,W),n=O.getFrustum(),v(w,A,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===$r&&_(O,A),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(T,b,M)};function _(x,w){let A=e.update(p);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ai(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,A,h,p,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,A,d,p,null)}function y(x,w,A,T,b,M){let L=null,D=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0)L=D;else if(L=A.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let I=L.uuid,z=w.uuid,O=c[I];O===void 0&&(O={},c[I]=O);let k=O[z];k===void 0&&(k=L.clone(),O[z]=k),L=k}return L.visible=w.visible,L.wireframe=w.wireframe,M===$r?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:f[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=T,L.farDistance=b),L}function v(x,w,A,T,b){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===$r)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);let D=e.update(x),I=x.material;if(Array.isArray(I)){let z=D.groups;for(let O=0,k=z.length;O<k;O++){let Y=z[O],W=I[Y.materialIndex];if(W&&W.visible){let B=y(x,W,T,A.near,A.far,b);r.renderBufferDirect(A,null,D,B,x,Y)}}}else if(I.visible){let z=y(x,I,T,A.near,A.far,b);r.renderBufferDirect(A,null,D,z,x,null)}}let L=x.children;for(let D=0,I=L.length;D<I;D++)v(L[D],w,A,T,b)}}function Fy(r,e,t){let n=t.isWebGL2;function i(){let R=!1,Z=new yt,te=null,le=new yt(0,0,0,0);return{setMask:function(xe){te!==xe&&!R&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Ge,ht,ut,Le){Le===!0&&(xe*=ut,Ge*=ut,ht*=ut),Z.set(xe,Ge,ht,ut),le.equals(Z)===!1&&(r.clearColor(xe,Ge,ht,ut),le.copy(Z))},reset:function(){R=!1,te=null,le.set(-1,0,0,0)}}}function s(){let R=!1,Z=null,te=null,le=null;return{setTest:function(xe){xe?be(2929):ge(2929)},setMask:function(xe){Z!==xe&&!R&&(r.depthMask(xe),Z=xe)},setFunc:function(xe){if(te!==xe){switch(xe){case wg:r.depthFunc(512);break;case Mg:r.depthFunc(519);break;case Sg:r.depthFunc(513);break;case nc:r.depthFunc(515);break;case Tg:r.depthFunc(514);break;case Eg:r.depthFunc(518);break;case Ag:r.depthFunc(516);break;case Cg:r.depthFunc(517);break;default:r.depthFunc(515)}te=xe}},setLocked:function(xe){R=xe},setClear:function(xe){le!==xe&&(r.clearDepth(xe),le=xe)},reset:function(){R=!1,Z=null,te=null,le=null}}}function o(){let R=!1,Z=null,te=null,le=null,xe=null,Ge=null,ht=null,ut=null,Le=null;return{setTest:function(he){R||(he?be(2960):ge(2960))},setMask:function(he){Z!==he&&!R&&(r.stencilMask(he),Z=he)},setFunc:function(he,Ne,Je){(te!==he||le!==Ne||xe!==Je)&&(r.stencilFunc(he,Ne,Je),te=he,le=Ne,xe=Je)},setOp:function(he,Ne,Je){(Ge!==he||ht!==Ne||ut!==Je)&&(r.stencilOp(he,Ne,Je),Ge=he,ht=Ne,ut=Je)},setLocked:function(he){R=he},setClear:function(he){Le!==he&&(r.clearStencil(he),Le=he)},reset:function(){R=!1,Z=null,te=null,le=null,xe=null,Ge=null,ht=null,ut=null,Le=null}}}let a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap,h={},d={},g=new WeakMap,p=[],m=null,_=!1,y=null,v=null,x=null,w=null,A=null,T=null,b=null,M=!1,L=null,D=null,I=null,z=null,O=null,k=r.getParameter(35661),Y=!1,W=0,B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=W>=2);let j=null,C={},re=r.getParameter(3088),U=r.getParameter(2978),Q=new yt().fromArray(re),ie=new yt().fromArray(U);function se(R,Z,te){let le=new Uint8Array(4),xe=r.createTexture();r.bindTexture(R,xe),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ge=0;Ge<te;Ge++)r.texImage2D(Z+Ge,0,6408,1,1,0,6408,5121,le);return xe}let V={};V[3553]=se(3553,3553,1),V[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(nc),nt(!1),H(xh),be(2884),$e(Yi);function be(R){h[R]!==!0&&(r.enable(R),h[R]=!0)}function ge(R){h[R]!==!1&&(r.disable(R),h[R]=!1)}function me(R,Z){return d[R]!==Z?(r.bindFramebuffer(R,Z),d[R]=Z,n&&(R===36009&&(d[36160]=Z),R===36160&&(d[36009]=Z)),!0):!1}function de(R,Z){let te=p,le=!1;if(R)if(te=g.get(Z),te===void 0&&(te=[],g.set(Z,te)),R.isWebGLMultipleRenderTargets){let xe=R.texture;if(te.length!==xe.length||te[0]!==36064){for(let Ge=0,ht=xe.length;Ge<ht;Ge++)te[Ge]=36064+Ge;te.length=xe.length,le=!0}}else te[0]!==36064&&(te[0]=36064,le=!0);else te[0]!==1029&&(te[0]=1029,le=!0);le&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Fe(R){return m!==R?(r.useProgram(R),m=R,!0):!1}let Pe={[rr]:32774,[hg]:32778,[fg]:32779};if(n)Pe[wh]=32775,Pe[Mh]=32776;else{let R=e.get("EXT_blend_minmax");R!==null&&(Pe[wh]=R.MIN_EXT,Pe[Mh]=R.MAX_EXT)}let ae={[dg]:0,[pg]:1,[mg]:768,[zf]:770,[bg]:776,[vg]:774,[_g]:772,[gg]:769,[Ff]:771,[yg]:775,[xg]:773};function $e(R,Z,te,le,xe,Ge,ht,ut){if(R===Yi){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(be(3042),_=!0),R!==ug){if(R!==y||ut!==M){if((v!==rr||A!==rr)&&(r.blendEquation(32774),v=rr,A=rr),ut)switch(R){case lr:r.blendFuncSeparate(1,771,1,771);break;case vh:r.blendFunc(1,1);break;case yh:r.blendFuncSeparate(0,769,0,1);break;case bh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case lr:r.blendFuncSeparate(770,771,1,771);break;case vh:r.blendFunc(770,1);break;case yh:r.blendFuncSeparate(0,769,0,1);break;case bh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,w=null,T=null,b=null,y=R,M=ut}return}xe=xe||Z,Ge=Ge||te,ht=ht||le,(Z!==v||xe!==A)&&(r.blendEquationSeparate(Pe[Z],Pe[xe]),v=Z,A=xe),(te!==x||le!==w||Ge!==T||ht!==b)&&(r.blendFuncSeparate(ae[te],ae[le],ae[Ge],ae[ht]),x=te,w=le,T=Ge,b=ht),y=R,M=!1}function at(R,Z){R.side===qi?ge(2884):be(2884);let te=R.side===Pn;Z&&(te=!te),nt(te),R.blending===lr&&R.transparent===!1?$e(Yi):$e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let le=R.stencilWrite;c.setTest(le),le&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?be(32926):ge(32926)}function nt(R){L!==R&&(R?r.frontFace(2304):r.frontFace(2305),L=R)}function H(R){R!==og?(be(2884),R!==D&&(R===xh?r.cullFace(1029):R===lg?r.cullFace(1028):r.cullFace(1032))):ge(2884),D=R}function Qe(R){R!==I&&(Y&&r.lineWidth(R),I=R)}function Be(R,Z,te){R?(be(32823),(z!==Z||O!==te)&&(r.polygonOffset(Z,te),z=Z,O=te)):ge(32823)}function Bt(R){R?be(3089):ge(3089)}function tt(R){R===void 0&&(R=33984+k-1),j!==R&&(r.activeTexture(R),j=R)}function P(R,Z,te){te===void 0&&(j===null?te=33984+k-1:te=j);let le=C[te];le===void 0&&(le={type:void 0,texture:void 0},C[te]=le),(le.type!==R||le.texture!==Z)&&(j!==te&&(r.activeTexture(te),j=te),r.bindTexture(R,Z||V[R]),le.type=R,le.texture=Z)}function S(){let R=C[j];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(R){Q.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function Te(R){ie.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function ke(R,Z){let te=f.get(Z);te===void 0&&(te=new WeakMap,f.set(Z,te));let le=te.get(R);le===void 0&&(le=r.getUniformBlockIndex(Z,R.name),te.set(R,le))}function et(R,Z){let le=f.get(Z).get(R);u.get(Z)!==le&&(r.uniformBlockBinding(Z,le,R.__bindingPointIndex),u.set(Z,le))}function ot(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,C={},d={},g=new WeakMap,p=[],m=null,_=!1,y=null,v=null,x=null,w=null,A=null,T=null,b=null,M=!1,L=null,D=null,I=null,z=null,O=null,Q.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:ge,bindFramebuffer:me,drawBuffers:de,useProgram:Fe,setBlending:$e,setMaterial:at,setFlipSided:nt,setCullFace:H,setLineWidth:Qe,setPolygonOffset:Be,setScissorTest:Bt,activeTexture:tt,bindTexture:P,unbindTexture:S,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:we,texImage3D:ve,updateUBOMapping:ke,uniformBlockBinding:et,texStorage2D:K,texStorage3D:Se,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:ue,scissor:Ee,viewport:Te,reset:ot}}function Ny(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return _?new OffscreenCanvas(P,S):ea("canvas")}function v(P,S,J,ee){let ne=1;if((P.width>ee||P.height>ee)&&(ne=ee/Math.max(P.width,P.height)),ne<1||S===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){let oe=S?lc:Math.floor,Ae=oe(ne*P.width),ue=oe(ne*P.height);p===void 0&&(p=y(Ae,ue));let K=J?y(Ae,ue):p;return K.width=Ae,K.height=ue,K.getContext("2d").drawImage(P,0,0,Ae,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ae+"x"+ue+")."),K}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return ef(P.width)&&ef(P.height)}function w(P){return a?!1:P.wrapS!==Kn||P.wrapT!==Kn||P.minFilter!==sn&&P.minFilter!==mt}function A(P,S){return P.generateMipmaps&&S&&P.minFilter!==sn&&P.minFilter!==mt}function T(P){r.generateMipmap(P)}function b(P,S,J,ee,ne=!1){if(a===!1)return S;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=S;return S===6403&&(J===5126&&(oe=33326),J===5131&&(oe=33325),J===5121&&(oe=33321)),S===33319&&(J===5126&&(oe=33328),J===5131&&(oe=33327),J===5121&&(oe=33323)),S===6408&&(J===5126&&(oe=34836),J===5131&&(oe=34842),J===5121&&(oe=ee===ft&&ne===!1?35907:32856),J===32819&&(oe=32854),J===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function M(P,S,J){return A(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==mt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function L(P){return P===sn||P===Sh||P===Ml?9728:9729}function D(P){let S=P.target;S.removeEventListener("dispose",D),z(S),S.isVideoTexture&&g.delete(S)}function I(P){let S=P.target;S.removeEventListener("dispose",I),k(S)}function z(P){let S=n.get(P);if(S.__webglInit===void 0)return;let J=P.source,ee=m.get(J);if(ee){let ne=ee[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(P),Object.keys(ee).length===0&&m.delete(J)}n.remove(P)}function O(P){let S=n.get(P);r.deleteTexture(S.__webglTexture);let J=P.source,ee=m.get(J);delete ee[S.__cacheKey],o.memory.textures--}function k(P){let S=P.texture,J=n.get(P),ee=n.get(S);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(J.__webglFramebuffer[ne]),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ne=0;ne<J.__webglColorRenderbuffer.length;ne++)J.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(J.__webglColorRenderbuffer[ne]);J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,oe=S.length;ne<oe;ne++){let Ae=n.get(S[ne]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(P)}let Y=0;function W(){Y=0}function B(){let P=Y;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Y+=1,P}function j(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.encoding),S.join()}function C(P,S){let J=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){let ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(J,P,S);return}}t.bindTexture(3553,J.__webglTexture,33984+S)}function re(P,S){let J=n.get(P);if(P.version>0&&J.__version!==P.version){ge(J,P,S);return}t.bindTexture(35866,J.__webglTexture,33984+S)}function U(P,S){let J=n.get(P);if(P.version>0&&J.__version!==P.version){ge(J,P,S);return}t.bindTexture(32879,J.__webglTexture,33984+S)}function Q(P,S){let J=n.get(P);if(P.version>0&&J.__version!==P.version){me(J,P,S);return}t.bindTexture(34067,J.__webglTexture,33984+S)}let ie={[rc]:10497,[Kn]:33071,[ac]:33648},se={[sn]:9728,[Sh]:9984,[Ml]:9986,[mt]:9729,[Fg]:9985,[Kr]:9987};function V(P,S,J){if(J?(r.texParameteri(P,10242,ie[S.wrapS]),r.texParameteri(P,10243,ie[S.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,ie[S.wrapR]),r.texParameteri(P,10240,se[S.magFilter]),r.texParameteri(P,10241,se[S.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(S.wrapS!==Kn||S.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,L(S.magFilter)),r.texParameteri(P,10241,L(S.minFilter)),S.minFilter!==sn&&S.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Ml&&S.minFilter!==Kr||S.type===ps&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===jr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function be(P,S){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",D));let ee=S.source,ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));let oe=j(S);if(oe!==P.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ne[oe].usedTimes++;let Ae=ne[P.__cacheKey];Ae!==void 0&&(ne[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(S)),P.__cacheKey=oe,P.__webglTexture=ne[oe].texture}return J}function ge(P,S,J){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);let ne=be(P,S),oe=S.source;t.bindTexture(ee,P.__webglTexture,33984+J);let Ae=n.get(oe);if(oe.version!==Ae.__version||ne===!0){t.activeTexture(33984+J),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);let ue=w(S)&&x(S.image)===!1,K=v(S.image,ue,!1,u);K=tt(S,K);let Se=x(K)||a,we=s.convert(S.format,S.encoding),ve=s.convert(S.type),Ee=b(S.internalFormat,we,ve,S.encoding,S.isVideoTexture);V(ee,S,Se);let Te,ke=S.mipmaps,et=a&&S.isVideoTexture!==!0,ot=Ae.__version===void 0||ne===!0,R=M(S,K,Se);if(S.isDepthTexture)Ee=6402,a?S.type===ps?Ee=36012:S.type===ds?Ee=33190:S.type===cr?Ee=35056:Ee=33189:S.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ms&&Ee===6402&&S.type!==Bf&&S.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ds,ve=s.convert(S.type)),S.format===dr&&Ee===6402&&(Ee=34041,S.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=cr,ve=s.convert(S.type))),ot&&(et?t.texStorage2D(3553,1,Ee,K.width,K.height):t.texImage2D(3553,0,Ee,K.width,K.height,0,we,ve,null));else if(S.isDataTexture)if(ke.length>0&&Se){et&&ot&&t.texStorage2D(3553,R,Ee,ke[0].width,ke[0].height);for(let Z=0,te=ke.length;Z<te;Z++)Te=ke[Z],et?t.texSubImage2D(3553,Z,0,0,Te.width,Te.height,we,ve,Te.data):t.texImage2D(3553,Z,Ee,Te.width,Te.height,0,we,ve,Te.data);S.generateMipmaps=!1}else et?(ot&&t.texStorage2D(3553,R,Ee,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,we,ve,K.data)):t.texImage2D(3553,0,Ee,K.width,K.height,0,we,ve,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&ot&&t.texStorage3D(35866,R,Ee,ke[0].width,ke[0].height,K.depth);for(let Z=0,te=ke.length;Z<te;Z++)Te=ke[Z],S.format!==jn?we!==null?et?t.compressedTexSubImage3D(35866,Z,0,0,0,Te.width,Te.height,K.depth,we,Te.data,0,0):t.compressedTexImage3D(35866,Z,Ee,Te.width,Te.height,K.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,Z,0,0,0,Te.width,Te.height,K.depth,we,ve,Te.data):t.texImage3D(35866,Z,Ee,Te.width,Te.height,K.depth,0,we,ve,Te.data)}else{et&&ot&&t.texStorage2D(3553,R,Ee,ke[0].width,ke[0].height);for(let Z=0,te=ke.length;Z<te;Z++)Te=ke[Z],S.format!==jn?we!==null?et?t.compressedTexSubImage2D(3553,Z,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(3553,Z,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,Z,0,0,Te.width,Te.height,we,ve,Te.data):t.texImage2D(3553,Z,Ee,Te.width,Te.height,0,we,ve,Te.data)}else if(S.isDataArrayTexture)et?(ot&&t.texStorage3D(35866,R,Ee,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,we,ve,K.data)):t.texImage3D(35866,0,Ee,K.width,K.height,K.depth,0,we,ve,K.data);else if(S.isData3DTexture)et?(ot&&t.texStorage3D(32879,R,Ee,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,we,ve,K.data)):t.texImage3D(32879,0,Ee,K.width,K.height,K.depth,0,we,ve,K.data);else if(S.isFramebufferTexture){if(ot)if(et)t.texStorage2D(3553,R,Ee,K.width,K.height);else{let Z=K.width,te=K.height;for(let le=0;le<R;le++)t.texImage2D(3553,le,Ee,Z,te,0,we,ve,null),Z>>=1,te>>=1}}else if(ke.length>0&&Se){et&&ot&&t.texStorage2D(3553,R,Ee,ke[0].width,ke[0].height);for(let Z=0,te=ke.length;Z<te;Z++)Te=ke[Z],et?t.texSubImage2D(3553,Z,0,0,we,ve,Te):t.texImage2D(3553,Z,Ee,we,ve,Te);S.generateMipmaps=!1}else et?(ot&&t.texStorage2D(3553,R,Ee,K.width,K.height),t.texSubImage2D(3553,0,0,0,we,ve,K)):t.texImage2D(3553,0,Ee,we,ve,K);A(S,Se)&&T(ee),Ae.__version=oe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function me(P,S,J){if(S.image.length!==6)return;let ee=be(P,S),ne=S.source;t.bindTexture(34067,P.__webglTexture,33984+J);let oe=n.get(ne);if(ne.version!==oe.__version||ee===!0){t.activeTexture(33984+J),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);let Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!Ae&&!ue?K[Z]=v(S.image[Z],!1,!0,c):K[Z]=ue?S.image[Z].image:S.image[Z],K[Z]=tt(S,K[Z]);let Se=K[0],we=x(Se)||a,ve=s.convert(S.format,S.encoding),Ee=s.convert(S.type),Te=b(S.internalFormat,ve,Ee,S.encoding),ke=a&&S.isVideoTexture!==!0,et=oe.__version===void 0||ee===!0,ot=M(S,Se,we);V(34067,S,we);let R;if(Ae){ke&&et&&t.texStorage2D(34067,ot,Te,Se.width,Se.height);for(let Z=0;Z<6;Z++){R=K[Z].mipmaps;for(let te=0;te<R.length;te++){let le=R[te];S.format!==jn?ve!==null?ke?t.compressedTexSubImage2D(34069+Z,te,0,0,le.width,le.height,ve,le.data):t.compressedTexImage2D(34069+Z,te,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+Z,te,0,0,le.width,le.height,ve,Ee,le.data):t.texImage2D(34069+Z,te,Te,le.width,le.height,0,ve,Ee,le.data)}}}else{R=S.mipmaps,ke&&et&&(R.length>0&&ot++,t.texStorage2D(34067,ot,Te,K[0].width,K[0].height));for(let Z=0;Z<6;Z++)if(ue){ke?t.texSubImage2D(34069+Z,0,0,0,K[Z].width,K[Z].height,ve,Ee,K[Z].data):t.texImage2D(34069+Z,0,Te,K[Z].width,K[Z].height,0,ve,Ee,K[Z].data);for(let te=0;te<R.length;te++){let xe=R[te].image[Z].image;ke?t.texSubImage2D(34069+Z,te+1,0,0,xe.width,xe.height,ve,Ee,xe.data):t.texImage2D(34069+Z,te+1,Te,xe.width,xe.height,0,ve,Ee,xe.data)}}else{ke?t.texSubImage2D(34069+Z,0,0,0,ve,Ee,K[Z]):t.texImage2D(34069+Z,0,Te,ve,Ee,K[Z]);for(let te=0;te<R.length;te++){let le=R[te];ke?t.texSubImage2D(34069+Z,te+1,0,0,ve,Ee,le.image[Z]):t.texImage2D(34069+Z,te+1,Te,ve,Ee,le.image[Z])}}}A(S,we)&&T(34067),oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function de(P,S,J,ee,ne){let oe=s.convert(J.format,J.encoding),Ae=s.convert(J.type),ue=b(J.internalFormat,oe,Ae,J.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ue,S.width,S.height,S.depth,0,oe,Ae,null):t.texImage2D(ne,0,ue,S.width,S.height,0,oe,Ae,null)),t.bindFramebuffer(36160,P),Be(S)?h.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get(J).__webglTexture,0,Qe(S)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,ee,ne,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(P,S,J){if(r.bindRenderbuffer(36161,P),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(J||Be(S)){let ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ps?ee=36012:ne.type===ds&&(ee=33190));let oe=Qe(S);Be(S)?h.renderbufferStorageMultisampleEXT(36161,oe,ee,S.width,S.height):r.renderbufferStorageMultisample(36161,oe,ee,S.width,S.height)}else r.renderbufferStorage(36161,ee,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(S.depthBuffer&&S.stencilBuffer){let ee=Qe(S);J&&Be(S)===!1?r.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):Be(S)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{let ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ee.length;ne++){let oe=ee[ne],Ae=s.convert(oe.format,oe.encoding),ue=s.convert(oe.type),K=b(oe.internalFormat,Ae,ue,oe.encoding),Se=Qe(S);J&&Be(S)===!1?r.renderbufferStorageMultisample(36161,Se,K,S.width,S.height):Be(S)?h.renderbufferStorageMultisampleEXT(36161,Se,K,S.width,S.height):r.renderbufferStorage(36161,K,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Pe(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),C(S.depthTexture,0);let ee=n.get(S.depthTexture).__webglTexture,ne=Qe(S);if(S.depthTexture.format===ms)Be(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===dr)Be(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ae(P){let S=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,P)}else if(J){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=r.createRenderbuffer(),Fe(S.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Fe(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function $e(P,S,J){let ee=n.get(P);S!==void 0&&de(ee.__webglFramebuffer,P,P.texture,36064,3553),J!==void 0&&ae(P)}function at(P){let S=P.texture,J=n.get(P),ee=n.get(S);P.addEventListener("dispose",I),P.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,o.memory.textures++);let ne=P.isWebGLCubeRenderTarget===!0,oe=P.isWebGLMultipleRenderTargets===!0,Ae=x(P)||a;if(ne){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)J.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(J.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){let ue=P.texture;for(let K=0,Se=ue.length;K<Se;K++){let we=n.get(ue[K]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Be(P)===!1){let ue=oe?S:[S];J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let K=0;K<ue.length;K++){let Se=ue[K];J.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(36161,J.__webglColorRenderbuffer[K]);let we=s.convert(Se.format,Se.encoding),ve=s.convert(Se.type),Ee=b(Se.internalFormat,we,ve,Se.encoding,P.isXRRenderTarget===!0),Te=Qe(P);r.renderbufferStorageMultisample(36161,Te,Ee,P.width,P.height),r.framebufferRenderbuffer(36160,36064+K,36161,J.__webglColorRenderbuffer[K])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),V(34067,S,Ae);for(let ue=0;ue<6;ue++)de(J.__webglFramebuffer[ue],P,S,36064,34069+ue);A(S,Ae)&&T(34067),t.unbindTexture()}else if(oe){let ue=P.texture;for(let K=0,Se=ue.length;K<Se;K++){let we=ue[K],ve=n.get(we);t.bindTexture(3553,ve.__webglTexture),V(3553,we,Ae),de(J.__webglFramebuffer,P,we,36064+K,3553),A(we,Ae)&&T(3553)}t.unbindTexture()}else{let ue=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ue=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),V(ue,S,Ae),de(J.__webglFramebuffer,P,S,36064,ue),A(S,Ae)&&T(ue),t.unbindTexture()}P.depthBuffer&&ae(P)}function nt(P){let S=x(P)||a,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ee=0,ne=J.length;ee<ne;ee++){let oe=J[ee];if(A(oe,S)){let Ae=P.isWebGLCubeRenderTarget?34067:3553,ue=n.get(oe).__webglTexture;t.bindTexture(Ae,ue),T(Ae),t.unbindTexture()}}}function H(P){if(a&&P.samples>0&&Be(P)===!1){let S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,ee=P.height,ne=16384,oe=[],Ae=P.stencilBuffer?33306:36096,ue=n.get(P),K=P.isWebGLMultipleRenderTargets===!0;if(K)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(36160,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,ue.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ue.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){oe.push(36064+Se),P.depthBuffer&&oe.push(Ae);let we=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(we===!1&&(P.depthBuffer&&(ne|=256),P.stencilBuffer&&(ne|=1024)),K&&r.framebufferRenderbuffer(36008,36064,36161,ue.__webglColorRenderbuffer[Se]),we===!0&&(r.invalidateFramebuffer(36008,[Ae]),r.invalidateFramebuffer(36009,[Ae])),K){let ve=n.get(S[Se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ve,0)}r.blitFramebuffer(0,0,J,ee,0,0,J,ee,ne,9728),d&&r.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(36160,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,ue.__webglColorRenderbuffer[Se]);let we=n.get(S[Se]).__webglTexture;t.bindFramebuffer(36160,ue.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,we,0)}t.bindFramebuffer(36009,ue.__webglMultisampledFramebuffer)}}function Qe(P){return Math.min(f,P.samples)}function Be(P){let S=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Bt(P){let S=o.render.frame;g.get(P)!==S&&(g.set(P,S),P.update())}function tt(P,S){let J=P.encoding,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===oc||J!==xs&&(J===ft?a===!1?e.has("EXT_sRGB")===!0&&ee===jn?(P.format=oc,P.minFilter=mt,P.generateMipmaps=!1):S=so.sRGBToLinear(S):(ee!==jn||ne!==_s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),S}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=C,this.setTexture2DArray=re,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=$e,this.setupRenderTarget=at,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Be}function ky(r,e,t){let n=t.isWebGL2;function i(s,o=null){let a;if(s===_s)return 5121;if(s===Ug)return 32819;if(s===Vg)return 32820;if(s===Ng)return 5120;if(s===kg)return 5122;if(s===Bf)return 5123;if(s===Bg)return 5124;if(s===ds)return 5125;if(s===ps)return 5126;if(s===jr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Gg)return 6406;if(s===jn)return 6408;if(s===Hg)return 6409;if(s===Wg)return 6410;if(s===ms)return 6402;if(s===dr)return 34041;if(s===oc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xg)return 6403;if(s===qg)return 36244;if(s===Yg)return 33319;if(s===$g)return 33320;if(s===Zg)return 36249;if(s===Sl||s===Tl||s===El||s===Al)if(o===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Al)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Th||s===Eh||s===Ah||s===Ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ph||s===Lh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ph)return o===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rh||s===Ih||s===Dh||s===Oh||s===zh||s===Fh||s===Nh||s===kh||s===Bh||s===Uh||s===Vh||s===Gh||s===Hh||s===Wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ih)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Cl)return o===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Kg||s===Xh||s===qh||s===Yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Cl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var bc=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},or=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wc=class extends Vt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ms,u!==ms&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=ds),n===void 0&&u===dr&&(n=cr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1}},Mc=class extends Zi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,p=t.getContextAttributes(),m=null,_=null,y=[],v=[],x=new Set,w=new Map,A=new Cn;A.layers.enable(1),A.viewport=new yt;let T=new Cn;T.layers.enable(2),T.viewport=new yt;let b=[A,T],M=new bc;M.layers.enable(1),M.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=y[U];return Q===void 0&&(Q=new Jr,y[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=y[U];return Q===void 0&&(Q=new Jr,y[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=y[U];return Q===void 0&&(Q=new Jr,y[U]=Q),Q.getHandSpace()};function I(U){let Q=v.indexOf(U.inputSource);if(Q===-1)return;let ie=y[Q];ie!==void 0&&ie.dispatchEvent({type:U.type,data:U.inputSource})}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let U=0;U<y.length;U++){let Q=v[U];Q!==null&&(v[U]=null,y[U].disconnect(Q))}L=null,D=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,_=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),_=new Ai(d.framebufferWidth,d.framebufferHeight,{format:jn,type:_s,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ie=null,se=null;p.depth&&(se=p.stencil?35056:33190,Q=p.stencil?dr:ms,ie=p.stencil?cr:ds);let V={colorFormat:32856,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(V),i.updateRenderState({layers:[h]}),_=new Ai(h.textureWidth,h.textureHeight,{format:jn,type:_s,depthTexture:new wc(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});let be=e.properties.get(_);be.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(U){for(let Q=0;Q<U.removed.length;Q++){let ie=U.removed[Q],se=v.indexOf(ie);se>=0&&(v[se]=null,y[se].disconnect(ie))}for(let Q=0;Q<U.added.length;Q++){let ie=U.added[Q],se=v.indexOf(ie);if(se===-1){for(let be=0;be<y.length;be++)if(be>=v.length){v.push(ie),se=be;break}else if(v[be]===null){v[be]=ie,se=be;break}if(se===-1)break}let V=y[se];V&&V.connect(ie)}}let k=new X,Y=new X;function W(U,Q,ie){k.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);let se=k.distanceTo(Y),V=Q.projectionMatrix.elements,be=ie.projectionMatrix.elements,ge=V[14]/(V[10]-1),me=V[14]/(V[10]+1),de=(V[9]+1)/V[5],Fe=(V[9]-1)/V[5],Pe=(V[8]-1)/V[0],ae=(be[8]+1)/be[0],$e=ge*Pe,at=ge*ae,nt=se/(-Pe+ae),H=nt*-Pe;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(H),U.translateZ(nt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let Qe=ge+nt,Be=me+nt,Bt=$e-H,tt=at+(se-H),P=de*me/Be*Qe,S=Fe*me/Be*Qe;U.projectionMatrix.makePerspective(Bt,tt,P,S,Qe,Be)}function B(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;M.near=T.near=A.near=U.near,M.far=T.far=A.far=U.far,(L!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far);let Q=U.parent,ie=M.cameras;B(M,Q);for(let V=0;V<ie.length;V++)B(ie[V],Q);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),U.matrix.copy(M.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);let se=U.children;for(let V=0,be=se.length;V<be;V++)se[V].updateMatrixWorld(!0);ie.length===2?W(M,A,T):M.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.getPlanes=function(){return x};let j=null;function C(U,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){let ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let se=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let V=0;V<ie.length;V++){let be=ie[V],ge=null;if(d!==null)ge=d.getViewport(be);else{let de=f.getViewSubImage(h,be);ge=de.viewport,V===0&&(e.setRenderTargetTextures(_,de.colorTexture,h.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(_))}let me=b[V];me===void 0&&(me=new Cn,me.layers.enable(V),me.viewport=new yt,b[V]=me),me.matrix.fromArray(be.transform.matrix),me.projectionMatrix.fromArray(be.projectionMatrix),me.viewport.set(ge.x,ge.y,ge.width,ge.height),V===0&&M.matrix.copy(me.matrix),se===!0&&M.cameras.push(me)}}for(let ie=0;ie<y.length;ie++){let se=v[ie],V=y[ie];se!==null&&V!==void 0&&V.update(se,Q,c||o)}if(j&&j(U,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ie=null;for(let se of x)Q.detectedPlanes.has(se)||(ie===null&&(ie=[]),ie.push(se));if(ie!==null)for(let se of ie)x.delete(se),w.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(let se of Q.detectedPlanes)if(!x.has(se))x.add(se),w.set(se,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{let V=w.get(se);se.lastChangedTime>V&&(w.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}g=null}let re=new Hf;re.setAnimationLoop(C),this.setAnimationLoop=function(U){j=U},this.dispose=function(){}}};function Uy(r,e){function t(p,m){m.color.getRGB(p.fogColor.value,Gf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,v)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let x=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Vy(r,e,t,n){let i={},s={},o=[],a=t.isWebGL2?r.getParameter(35375):0;function l(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));let w=v.program;n.updateUBOMapping(y,w);let A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){let v=f();y.__bindingPointIndex=v;let x=r.createBuffer(),w=y.__size,A=y.usage;return r.bindBuffer(35345,x),r.bufferData(35345,w,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let v=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(35345,v);for(let A=0,T=x.length;A<T;A++){let b=x[A];if(d(b,A,w)===!0){let M=b.__offset,L=Array.isArray(b.value)?b.value:[b.value],D=0;for(let I=0;I<L.length;I++){let z=L[I],O=p(z);typeof z=="number"?(b.__data[0]=z,r.bufferSubData(35345,M+D,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=z.elements[0],b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=z.elements[0],b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=z.elements[0]):(z.toArray(b.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,b.__data)}}r.bindBuffer(35345,null)}function d(y,v,x){let w=y.value;if(x[v]===void 0){if(typeof w=="number")x[v]=w;else{let A=Array.isArray(w)?w:[w],T=[];for(let b=0;b<A.length;b++)T.push(A[b].clone());x[v]=T}return!0}else if(typeof w=="number"){if(x[v]!==w)return x[v]=w,!0}else{let A=Array.isArray(x[v])?x[v]:[x[v]],T=Array.isArray(w)?w:[w];for(let b=0;b<A.length;b++){let M=A[b];if(M.equals(T[b])===!1)return M.copy(T[b]),!0}}return!1}function g(y){let v=y.uniforms,x=0,w=16,A=0;for(let T=0,b=v.length;T<b;T++){let M=v[T],L={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let I=0,z=D.length;I<z;I++){let O=D[I],k=p(O);L.boundary+=k.boundary,L.storage+=k.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,T>0){A=x%w;let I=w-A;A!==0&&I-L.boundary<0&&(x+=w-A,M.__offset=x)}x+=L.storage}return A=x%w,A>0&&(x+=w-A),y.__size=x,y.__cache={},this}function p(y){let v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Gy(){let r=ea("canvas");return r.style.display="block",r}function Nc(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:Gy(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null,d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xs,this.physicallyCorrectLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;let p=this,m=!1,_=0,y=0,v=null,x=-1,w=null,A=new yt,T=new yt,b=null,M=e.width,L=e.height,D=1,I=null,z=null,O=new yt(0,0,M,L),k=new yt(0,0,M,L),Y=!1,W=new po,B=!1,j=!1,C=null,re=new Rt,U=new rt,Q=new X,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?D:1}let V=t;function be(E,F){for(let G=0;G<E.length;G++){let N=E[G],q=e.getContext(N,F);if(q!==null)return q}return null}try{let E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ke,!1),V===null){let F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),V=be(F,E),V===null)throw be(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ge,me,de,Fe,Pe,ae,$e,at,nt,H,Qe,Be,Bt,tt,P,S,J,ee,ne,oe,Ae,ue,K,Se;function we(){ge=new cv(V),me=new iv(V,ge,r),ge.init(me),ue=new ky(V,ge,me),de=new Fy(V,ge,me),Fe=new fv,Pe=new Sy,ae=new Ny(V,ge,de,Pe,me,ue,Fe),$e=new rv(p),at=new lv(p),nt=new b0(V,me),K=new tv(V,ge,nt,me),H=new uv(V,nt,Fe,K),Qe=new gv(V,H,nt,Fe),ne=new mv(V,me,ae),S=new sv(Pe),Be=new My(p,$e,at,ge,me,K,S),Bt=new Uy(p,Pe),tt=new Ey,P=new Iy(ge,me),ee=new ev(p,$e,at,de,Qe,u,o),J=new zy(p,Qe,me),Se=new Vy(V,Fe,me,de),oe=new nv(V,ge,Fe,me),Ae=new hv(V,ge,Fe,me),Fe.programs=Be.programs,p.capabilities=me,p.extensions=ge,p.properties=Pe,p.renderLists=tt,p.shadowMap=J,p.state=de,p.info=Fe}we();let ve=new Mc(p,V);this.xr=ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(M,L,!1))},this.getSize=function(E){return E.set(M,L)},this.setSize=function(E,F,G){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=E,L=F,e.width=Math.floor(E*D),e.height=Math.floor(F*D),G!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(M*D,L*D).floor()},this.setDrawingBufferSize=function(E,F,G){M=E,L=F,D=G,e.width=Math.floor(E*G),e.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,F,G,N){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,F,G,N),de.viewport(A.copy(O).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(k)},this.setScissor=function(E,F,G,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,F,G,N),de.scissor(T.copy(k).multiplyScalar(D).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){de.setScissorTest(Y=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,F=!0,G=!0){let N=0;E&&(N|=16384),F&&(N|=256),G&&(N|=1024),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),tt.dispose(),P.dispose(),Pe.dispose(),$e.dispose(),at.dispose(),Qe.dispose(),K.dispose(),Se.dispose(),Be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",le),ve.removeEventListener("sessionend",xe),C&&(C.dispose(),C=null),Ge.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;let E=Fe.autoReset,F=J.enabled,G=J.autoUpdate,N=J.needsUpdate,q=J.type;we(),Fe.autoReset=E,J.enabled=F,J.autoUpdate=G,J.needsUpdate=N,J.type=q}function ke(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){let F=E.target;F.removeEventListener("dispose",et),ot(F)}function ot(E){R(E),Pe.remove(E)}function R(E){let F=Pe.get(E).programs;F!==void 0&&(F.forEach(function(G){Be.releaseProgram(G)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,N,q,fe){F===null&&(F=ie);let pe=q.isMesh&&q.matrixWorld.determinant()<0,Re=Ze(E,F,G,N,q);de.setMaterial(N,pe);let Me=G.index,Oe=1;N.wireframe===!0&&(Me=H.getWireframeAttribute(G),Oe=2);let ze=G.drawRange,De=G.attributes.position,He=ze.start*Oe,it=(ze.start+ze.count)*Oe;fe!==null&&(He=Math.max(He,fe.start*Oe),it=Math.min(it,(fe.start+fe.count)*Oe)),Me!==null?(He=Math.max(He,0),it=Math.min(it,Me.count)):De!=null&&(He=Math.max(He,0),it=Math.min(it,De.count));let Ut=it-He;if(Ut<0||Ut===1/0)return;K.setup(q,N,Re,G,Me);let zn,Ye=oe;if(Me!==null&&(zn=nt.get(Me),Ye=Ae,Ye.setIndex(zn)),q.isMesh)N.wireframe===!0?(de.setLineWidth(N.wireframeLinewidth*se()),Ye.setMode(1)):Ye.setMode(4);else if(q.isLine){let Ce=N.linewidth;Ce===void 0&&(Ce=1),de.setLineWidth(Ce*se()),q.isLineSegments?Ye.setMode(1):q.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else q.isPoints?Ye.setMode(0):q.isSprite&&Ye.setMode(4);if(q.isInstancedMesh)Ye.renderInstances(He,Ut,q.count);else if(G.isInstancedBufferGeometry){let Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gn=Math.min(G.instanceCount,Ce);Ye.renderInstances(He,Ut,gn)}else Ye.render(He,Ut)},this.compile=function(E,F){function G(N,q,fe){N.transparent===!0&&N.side===qi&&N.forceSinglePass===!1?(N.side=Pn,N.needsUpdate=!0,Je(N,q,fe),N.side=$i,N.needsUpdate=!0,Je(N,q,fe),N.side=qi):Je(N,q,fe)}h=P.get(E),h.init(),g.push(h),E.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(N){let q=N.material;if(q)if(Array.isArray(q))for(let fe=0;fe<q.length;fe++){let pe=q[fe];G(pe,E,N)}else G(q,E,N)}),g.pop(),h=null};let Z=null;function te(E){Z&&Z(E)}function le(){Ge.stop()}function xe(){Ge.start()}let Ge=new Hf;Ge.setAnimationLoop(te),typeof self!="undefined"&&Ge.setContext(self),this.setAnimationLoop=function(E){Z=E,ve.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},ve.addEventListener("sessionstart",le),ve.addEventListener("sessionend",xe),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,F,v),h=P.get(E,g.length),h.init(),g.push(h),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(re),j=this.localClippingEnabled,B=S.init(this.clippingPlanes,j),f=tt.get(E,d.length),f.init(),d.push(f),ht(E,F,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(I,z),B===!0&&S.beginShadows();let G=h.state.shadowsArray;if(J.render(G,E,F),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,E),h.setupLights(p.physicallyCorrectLights),F.isArrayCamera){let N=F.cameras;for(let q=0,fe=N.length;q<fe;q++){let pe=N[q];ut(f,E,pe,pe.viewport)}}else ut(f,E,F);v!==null&&(ae.updateMultisampleRenderTarget(v),ae.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,F),K.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function ht(E,F,G,N){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){N&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);let pe=Qe.update(E),Re=E.material;Re.visible&&f.push(E,pe,Re,G,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Fe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Fe.render.frame),!E.frustumCulled||W.intersectsObject(E))){N&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);let pe=Qe.update(E),Re=E.material;if(Array.isArray(Re)){let Me=pe.groups;for(let Oe=0,ze=Me.length;Oe<ze;Oe++){let De=Me[Oe],He=Re[De.materialIndex];He&&He.visible&&f.push(E,pe,He,G,Q.z,De)}}else Re.visible&&f.push(E,pe,Re,G,Q.z,null)}}let fe=E.children;for(let pe=0,Re=fe.length;pe<Re;pe++)ht(fe[pe],F,G,N)}function ut(E,F,G,N){let q=E.opaque,fe=E.transmissive,pe=E.transparent;h.setupLightsView(G),B===!0&&S.setGlobalState(p.clippingPlanes,G),fe.length>0&&Le(q,F,G),N&&de.viewport(A.copy(N)),q.length>0&&he(q,F,G),fe.length>0&&he(fe,F,G),pe.length>0&&he(pe,F,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Le(E,F,G){let N=me.isWebGL2;C===null&&(C=new Ai(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?jr:_s,minFilter:Kr,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(U),N?C.setSize(U.x,U.y):C.setSize(lc(U.x),lc(U.y));let q=p.getRenderTarget();p.setRenderTarget(C),p.clear();let fe=p.toneMapping;p.toneMapping=Ti,he(E,F,G),p.toneMapping=fe,ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C),p.setRenderTarget(q)}function he(E,F,G){let N=F.isScene===!0?F.overrideMaterial:null;for(let q=0,fe=E.length;q<fe;q++){let pe=E[q],Re=pe.object,Me=pe.geometry,Oe=N===null?pe.material:N,ze=pe.group;Re.layers.test(G.layers)&&Ne(Re,F,G,Me,Oe,ze)}}function Ne(E,F,G,N,q,fe){E.onBeforeRender(p,F,G,N,q,fe),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(p,F,G,N,E,fe),q.transparent===!0&&q.side===qi&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,p.renderBufferDirect(G,F,N,q,E,fe),q.side=$i,q.needsUpdate=!0,p.renderBufferDirect(G,F,N,q,E,fe),q.side=qi):p.renderBufferDirect(G,F,N,q,E,fe),E.onAfterRender(p,F,G,N,q,fe)}function Je(E,F,G){F.isScene!==!0&&(F=ie);let N=Pe.get(E),q=h.state.lights,fe=h.state.shadowsArray,pe=q.state.version,Re=Be.getParameters(E,q.state,fe,F,G),Me=Be.getProgramCacheKey(Re),Oe=N.programs;N.environment=E.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(E.isMeshStandardMaterial?at:$e).get(E.envMap||N.environment),Oe===void 0&&(E.addEventListener("dispose",et),Oe=new Map,N.programs=Oe);let ze=Oe.get(Me);if(ze!==void 0){if(N.currentProgram===ze&&N.lightsStateVersion===pe)return _e(E,Re),ze}else Re.uniforms=Be.getUniforms(E),E.onBuild(G,Re,p),E.onBeforeCompile(Re,p),ze=Be.acquireProgram(Re,Me),Oe.set(Me,ze),N.uniforms=Re.uniforms;let De=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=S.uniform),_e(E,Re),N.needsLights=Ue(E),N.lightsStateVersion=pe,N.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);let He=ze.getUniforms(),it=ur.seqWithValue(He.seq,De);return N.currentProgram=ze,N.uniformsList=it,ze}function _e(E,F){let G=Pe.get(E);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ze(E,F,G,N,q){F.isScene!==!0&&(F=ie),ae.resetTextureUnits();let fe=F.fog,pe=N.isMeshStandardMaterial?F.environment:null,Re=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:xs,Me=(N.isMeshStandardMaterial?at:$e).get(N.envMap||pe),Oe=N.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!N.normalMap&&!!G.attributes.tangent,De=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,it=!!G.morphAttributes.color,Ut=N.toneMapped?p.toneMapping:Ti,zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=zn!==void 0?zn.length:0,Ce=Pe.get(N),gn=h.state.lights;if(B===!0&&(j===!0||E!==w)){let Mn=E===w&&N.id===x;S.setState(N,E,Mn)}let vt=!1;N.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gn.state.version||Ce.outputEncoding!==Re||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Me||N.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==S.numPlanes||Ce.numIntersection!==S.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==ze||Ce.morphTargets!==De||Ce.morphNormals!==He||Ce.morphColors!==it||Ce.toneMapping!==Ut||me.isWebGL2===!0&&Ce.morphTargetsCount!==Ye)&&(vt=!0):(vt=!0,Ce.__version=N.version);let ai=Ce.currentProgram;vt===!0&&(ai=Je(N,F,q));let Ui=!1,qt=!1,gi=!1,Et=ai.getUniforms(),wn=Ce.uniforms;if(de.useProgram(ai.program)&&(Ui=!0,qt=!0,gi=!0),N.id!==x&&(x=N.id,qt=!0),Ui||w!==E){if(Et.setValue(V,"projectionMatrix",E.projectionMatrix),me.logarithmicDepthBuffer&&Et.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,qt=!0,gi=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Mn=Et.map.cameraPosition;Mn!==void 0&&Mn.setValue(V,Q.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Et.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Et.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){Et.setOptional(V,q,"bindMatrix"),Et.setOptional(V,q,"bindMatrixInverse");let Mn=q.skeleton;Mn&&(me.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Et.setValue(V,"boneTexture",Mn.boneTexture,ae),Et.setValue(V,"boneTextureSize",Mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ul=G.morphAttributes;if((ul.position!==void 0||ul.normal!==void 0||ul.color!==void 0&&me.isWebGL2===!0)&&ne.update(q,G,N,ai),(qt||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,Et.setValue(V,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(wn.envMap.value=Me,wn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),qt&&(Et.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Ie(wn,gi),fe&&N.fog===!0&&Bt.refreshFogUniforms(wn,fe),Bt.refreshMaterialUniforms(wn,N,D,L,C),ur.upload(V,Ce.uniformsList,wn,ae)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ur.upload(V,Ce.uniformsList,wn,ae),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Et.setValue(V,"center",q.center),Et.setValue(V,"modelViewMatrix",q.modelViewMatrix),Et.setValue(V,"normalMatrix",q.normalMatrix),Et.setValue(V,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let Mn=N.uniformsGroups;for(let hl=0,qp=Mn.length;hl<qp;hl++)if(me.isWebGL2){let nh=Mn[hl];Se.update(nh,ai),Se.bind(nh,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Ie(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Ue(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,F,G){Pe.get(E.texture).__webglTexture=F,Pe.get(E.depthTexture).__webglTexture=G;let N=Pe.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=G===void 0,N.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){let G=Pe.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){v=E,_=F,y=G;let N=!0,q=null,fe=!1,pe=!1;if(E){let Me=Pe.get(E);Me.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),N=!1):Me.__webglFramebuffer===void 0?ae.setupRenderTarget(E):Me.__hasExternalTextures&&ae.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);let Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let ze=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=ze[F],fe=!0):me.isWebGL2&&E.samples>0&&ae.useMultisampledRTT(E)===!1?q=Pe.get(E).__webglMultisampledFramebuffer:q=ze,A.copy(E.viewport),T.copy(E.scissor),b=E.scissorTest}else A.copy(O).multiplyScalar(D).floor(),T.copy(k).multiplyScalar(D).floor(),b=Y;if(de.bindFramebuffer(36160,q)&&me.drawBuffers&&N&&de.drawBuffers(E,q),de.viewport(A),de.scissor(T),de.setScissorTest(b),fe){let Me=Pe.get(E.texture);V.framebufferTexture2D(36160,36064,34069+F,Me.__webglTexture,G)}else if(pe){let Me=Pe.get(E.texture),Oe=F||0;V.framebufferTextureLayer(36160,36064,Me.__webglTexture,G||0,Oe)}x=-1},this.readRenderTargetPixels=function(E,F,G,N,q,fe,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Re=Re[pe]),Re){de.bindFramebuffer(36160,Re);try{let Me=E.texture,Oe=Me.format,ze=Me.type;if(Oe!==jn&&ue.convert(Oe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=ze===jr&&(ge.has("EXT_color_buffer_half_float")||me.isWebGL2&&ge.has("EXT_color_buffer_float"));if(ze!==_s&&ue.convert(ze)!==V.getParameter(35738)&&!(ze===ps&&(me.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-N&&G>=0&&G<=E.height-q&&V.readPixels(F,G,N,q,ue.convert(Oe),ue.convert(ze),fe)}finally{let Me=v!==null?Pe.get(v).__webglFramebuffer:null;de.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(E,F,G=0){let N=Math.pow(2,-G),q=Math.floor(F.image.width*N),fe=Math.floor(F.image.height*N);ae.setTexture2D(F,0),V.copyTexSubImage2D(3553,G,0,0,E.x,E.y,q,fe),de.unbindTexture()},this.copyTextureToTexture=function(E,F,G,N=0){let q=F.image.width,fe=F.image.height,pe=ue.convert(G.format),Re=ue.convert(G.type);ae.setTexture2D(G,0),V.pixelStorei(37440,G.flipY),V.pixelStorei(37441,G.premultiplyAlpha),V.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?V.texSubImage2D(3553,N,E.x,E.y,q,fe,pe,Re,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(3553,N,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,pe,F.mipmaps[0].data):V.texSubImage2D(3553,N,E.x,E.y,pe,Re,F.image),N===0&&G.generateMipmaps&&V.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G,N,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=E.max.x-E.min.x+1,pe=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Me=ue.convert(N.format),Oe=ue.convert(N.type),ze;if(N.isData3DTexture)ae.setTexture3D(N,0),ze=32879;else if(N.isDataArrayTexture)ae.setTexture2DArray(N,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,N.flipY),V.pixelStorei(37441,N.premultiplyAlpha),V.pixelStorei(3317,N.unpackAlignment);let De=V.getParameter(3314),He=V.getParameter(32878),it=V.getParameter(3316),Ut=V.getParameter(3315),zn=V.getParameter(32877),Ye=G.isCompressedTexture?G.mipmaps[0]:G.image;V.pixelStorei(3314,Ye.width),V.pixelStorei(32878,Ye.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?V.texSubImage3D(ze,q,F.x,F.y,F.z,fe,pe,Re,Me,Oe,Ye.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ze,q,F.x,F.y,F.z,fe,pe,Re,Me,Ye.data)):V.texSubImage3D(ze,q,F.x,F.y,F.z,fe,pe,Re,Me,Oe,Ye),V.pixelStorei(3314,De),V.pixelStorei(32878,He),V.pixelStorei(3316,it),V.pixelStorei(3315,Ut),V.pixelStorei(32877,zn),q===0&&N.generateMipmaps&&V.generateMipmap(ze),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ae.setTextureCube(E,0):E.isData3DTexture?ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ae.setTexture2DArray(E,0):ae.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){_=0,y=0,v=null,de.reset(),K.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Sc=class extends Nc{};Sc.prototype.isWebGL1Renderer=!0;var go=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var ws=class extends Vt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:mt,this.magFilter=s!==void 0?s:mt,this.generateMipmaps=!1;let u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};function Xi(r,e,t){return $f(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function eo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function $f(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var _r=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:s=e,a=2*t-n;break;case Jh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=e,l=2*n-t;break;case Jh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-h*m+2*h*p-h*g,y=(1+h)*m+(-1.5-2*h)*p+(-.5+h)*g+1,v=(-1-d)*m+(1.5+d)*p+.5*g,x=d*m-d*p;for(let w=0;w!==a;++w)s[w]=_*o[u+w]+y*o[c+w]+v*o[l+w]+x*o[f+w];return s}},Ec=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Ac=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case no:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Xi(n,s,o),this.values=Xi(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$f(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Xi(this.times),t=Xi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Pl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let p=t[f+g];if(p!==t[h+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Xi(e,0,o),this.values=Xi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Xi(this.times,0),t=Xi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=io;var Ms=class extends ti{};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=no;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ti{};Cc.prototype.ValueTypeName="color";var Pc=class extends ti{};Pc.prototype.ValueTypeName="number";var Lc=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},ia=class extends ti{InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.DefaultInterpolation=io;ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ti{};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=no;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends ti{};Rc.prototype.ValueTypeName="vector";var Df={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Ic=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},Hy=new Ic,_o=class{constructor(e){this.manager=e!==void 0?e:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};var Dc=class extends _o{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Df.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ea("img");function l(){u(),Df.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var xo=class extends _o{constructor(e){super(e)}load(e,t,n,i){let s=new Vt,o=new Dc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}};var kc="\\[\\]\\.:\\/",Wy=new RegExp("["+kc+"]","g"),Bc="[^"+kc+"]",Xy="[^"+kc.replace("\\.","")+"]",qy=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Yy=/(WCOD+)?/.source.replace("WCOD",Xy),$y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Jy=new RegExp("^"+qy+Yy+$y+Zy+"$"),Ky=["material","materials","bones","map"],Oc=class{constructor(e,t,n){let i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wy,"")}static parseTrackName(e){let t=Jy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ky.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Oc;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rM=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);function Pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},su,Zt,bt,Vn=1e8,ct=1/Vn,Yc=Math.PI*2,Qy=Yc/4,eb=0,id=Math.sqrt,tb=Math.cos,nb=Math.sin,Ot=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Ro=function(e){return typeof e=="undefined"},hi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},ru=function(){return typeof window!="undefined"},bo=function(e){return wt(e)||Ot(e)},sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,$c=/(?:-?\.?\d|\.)+/gi,au=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ou=/[+-]=-?[.\d]+/,rd=/[^,'"\[\]\s]+/gi,ib=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Un,Zc,lu,Ln={},To={},ad,od=function(e){return(To=Cs(e,Ln))&&Kt},Io=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eo=function(e,t){return!t&&console.warn(e)},ld=function(e,t){return e&&(Ln[e]=t)&&To&&(To[e]=t)||Ln},ua=function(){return 0},sb={suppressEvents:!0,isStart:!0,kill:!1},wo={suppressEvents:!0,kill:!1},rb={suppressEvents:!0},cu={},ji=[],Jc={},cd,xn={},Vc={},Zf=30,Mo=[],uu="",hu=function(e){var t=e[0],n,i;if(hi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Mo.length;i--&&!Mo[i].targetTest(t););n=Mo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pu(e[i],n)))||e.splice(i,1);return e},Qi=function(e){return e._gsap||hu(Gn(e))[0]._gsap},fu=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():Ro(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ab=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ao=function(){var e=ji.length,t=ji.slice(0),n,i;for(Jc={},ji.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ud=function(e,t,n,i){ji.length&&!Zt&&Ao(),e.render(t,n,i||Zt&&t<0&&(e._initted||e._startAt)),ji.length&&!Zt&&Ao()},hd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rd).length<2?t:Ot(e)?e.trim():e},fd=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ob=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Cs=function(e,t){for(var n in t)e[n]=t[n];return e},Jf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=hi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Co=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||gt,n=e.keyframes?ob(Jt(e.keyframes)):Wn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},lb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Do=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kc=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ub=function r(e){return!e||e._ts&&r(e.parent)},Kf=function(e){return e._repeat?br(e._tTime,e=e.duration()+e._rDelay)*e:0},br=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Oo=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},zo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Oo(e),n._dirty||Ts(n,e)),e},pd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Po(e.rawTime(),t),(!t._dur||da(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ui=function(e,t,n,i){return t.parent&&es(t),t._start=Gt((Ri(n)?n:n||e!==gt?Bn(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dd(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||pd(e,t),e._ts<0&&zo(e,e._tTime),e},md=function(e,t){return(Ln.ScrollTrigger||Io("scrollTrigger",t))&&Ln.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,s){if(_u(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cd!==vn.frame)return ji.push(e),e._lazy=[s,i],1},hb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fb=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&hb(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=da(0,e._tDur,t),u=br(l,a),e._yoyo&&u&1&&(o=1-o),u!==br(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Zt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Kc(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&es(e,1),!n&&!Zt&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},db=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},wr=function(e,t,n,i){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&zo(e,e._tTime=e._tDur*a),e.parent&&Oo(e),n||Ts(e.parent,e),e},jf=function(e){return e instanceof $t?Ts(e):wr(e,e._dur)},pb={_start:0,endTime:ua,totalDuration:ua},Bn=function r(e,t,n){var i=e.labels,s=e._recent||pb,o=e.duration()>=Vn?s.endTime(!1):e._dur,a,l,c;return Ot(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},la=function(e,t,n){var i=Ri(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new St(t[0],o,t[s+1])},ts=function(e,t){return e||e===0?t(e):t},da=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Ot(e)||!(t=ib.exec(e))?"":t[1]},mb=function(e,t,n){return ts(n,function(i){return da(e,t,i)})},Qc=[].slice,_d=function(e,t){return e&&hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hi(e[0]))&&!e.nodeType&&e!==Un},gb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ot(i)&&!t||_d(i,1)?(s=n).push.apply(s,Gn(i)):n.push(i)})||n},Gn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):Ot(e)&&!n&&(Zc||!Mr())?Qc.call((t||lu).querySelectorAll(e),0):Jt(e)?gb(e,n):_d(e)?Qc.call(e,0):e?[e]:[]},eu=function(e){return e=Gn(e)[0]||Eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?Eo("Invalid scope")||lu.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},vd=function(e){if(wt(e))return e;var t=hi(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Ot(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var p=(g||t).length,m=o[p],_,y,v,x,w,A,T,b,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!M){for(T=-Vn;T<(T=g[M++].getBoundingClientRect().left)&&M<p;);M--}for(m=o[p]=[],_=l?Math.min(M,p)*u-.5:i%M,y=M===Vn?0:l?p*f/M-.5:i/M|0,T=0,b=Vn,A=0;A<p;A++)v=A%M-_,x=y-(A/M|0),m[A]=w=c?Math.abs(c==="y"?x:v):id(v*v+x*x),w>T&&(T=w),w<b&&(b=w);i==="random"&&xd(m),m.max=T-b,m.min=b,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(i==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Ht(t.amount||t.each)||0,n=n&&p<0?Cd(n):n}return p=(m[h]-m.min)/m.max||0,Gt(m.b+(n?n(p):p)*m.v)+m.u}},tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:Ht(n))}},yd=function(e,t){var n=Jt(e),i,s;return!n&&hi(e)&&(i=n=e.radius||Vn,e.values?(e=Gn(e.values),(s=!Ri(e[0]))&&(i*=i)):e=tu(e.increment)),ts(t,n?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Vn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ri(o)?u:u+Ht(o)}:tu(e))},bd=function(e,t,n,i){return ts(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},xb=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},vb=function(e,t,n){return Md(e,t,0,1,n)},wd=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},yb=function r(e,t,n){var i=t-e;return Jt(e)?wd(e,r(0,e.length),t):ts(n,function(s){return(i+(s-e)%i)%i+e})},bb=function r(e,t,n){var i=t-e,s=i*2;return Jt(e)?wd(e,r(0,e.length-1),t):ts(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Sr=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?rd:$c),n+=e.substr(t,i-t)+bd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Md=function(e,t,n,i,s){var o=t-e,a=i-n;return ts(s,function(l){return n+((l-e)/o*a||0)})},wb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ot(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var p=Math.min(h,~~g);return u[p](g-p)},n=t}else i||(e=Cs(Jt(e)?[]:{},e));if(!u){for(l in t)mu.call(a,e,l,"get",t[l]);s=function(g){return yu(g,a)||(o?e.p:e)}}}return ts(n,s)},Qf=function(e,t,n){var i=e.labels,s=Vn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],o=bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ji.length&&Ao(),a&&(bt=a),u=l?s.apply(c,l):s.call(c),bt=o,u},ra=function(e){return es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Hn(e,"onInterrupt"),e},vr,Sd=[],Td=function(e){if(ru()&&e){e=!e.name&&e.default||e;var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ua,render:yu,add:mu,kill:kb,modifier:Nb,rawVars:0},o={targetTest:0,get:0,getSetter:Fo,aliases:{},register:0};if(Mr(),e!==i){if(xn[t])return;Wn(i,Wn(Co(e,s),o)),Cs(i.prototype,Cs(s,Co(e,o))),xn[i.prop=t]=i,e.targetTest&&(Mo.push(i),cu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ld(t,i),e.register&&e.register(Kt,i,ln)}else e&&Sd.push(e)},lt=255,aa={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},Gc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Ed=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&lt,e&lt]:0:aa.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),aa[e])i=aa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match($c),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Gc(l+1/3,s,o),i[1]=Gc(l,s,o),i[2]=Gc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(au),n&&i.length<4&&(i[3]=1),i}else i=e.match($c)||aa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/lt,o=i[1]/lt,a=i[2]/lt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ad=function(e){var t=[],n=[],i=-1;return e.split(Li).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ed=function(e,t,n){var i="",s=(e+i).match(Li),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Ed(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Ad(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Li,"1").split(Ps),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Li),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Li=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in aa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Mb=/hsl[a]?\(/,du=function(e){var t=e.join(" "),n;if(Li.lastIndex=0,Li.test(t))return n=Mb.test(t),e[1]=ed(e[1],n),e[0]=ed(e[0],n,Ad(e[1])),!0},ha,vn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function p(m){var _=r()-i,y=m===!0,v,x,w,A;if(_>e&&(n+=_-t),i+=_,w=i-n,v=w-o,(v>0||y)&&(A=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(p)),x)for(d=0;d<a.length;d++)a[d](w,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ad&&(!Zc&&ru()&&(Un=Zc=window,lu=Un.document||{},Ln.gsap=Kt,(Un.gsapVersions||(Un.gsapVersions=[])).push(Kt.version),od(To||Un.GreenSockGlobals||!Un.gsap&&Un||{}),u=Un.requestAnimationFrame,Sd.forEach(Td)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ha=1,g(2))},sleep:function(){(u?Un.cancelAnimationFrame:clearTimeout)(l),ha=0,c=ua},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,_,y){var v=_?function(x,w,A,T){m(x,w,A,T),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),Mr(),v},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},f}(),Mr=function(){return!ha&&vn.wake()},Ke={},Sb=/^[\d.\-M][\d.\-,\s]/,Tb=/["']/g,Eb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Tb,"").trim():+c,i=l.substr(a+1).trim();return t},Ab=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Cb=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Eb(t[1])]:Ab(e).split(",").map(hd)):Ke._CE&&Sb.test(e)?Ke._CE("",e):n},Cd=function(e){return function(t){return 1-e(1-t)}},Pd=function r(e,t){for(var n=e._first,i;n;)n instanceof $t?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Es=function(e,t){return e&&(wt(e)?e:Ke[e]||Cb(e))||t},Rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return on(e,function(a){Ke[a]=Ln[a]=s,Ke[o=a.toLowerCase()]=n;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},Ld=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Yc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*nb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ld(a);return s=Yc/s,l.config=function(c,u){return r(e,c,u)},l},Wc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ld(n);return i.config=function(s){return r(e,s)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Rs("Elastic",Hc("in"),Hc("out"),Hc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Rs("Circ",function(r){return-(id(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-tb(r*Qy)+1});Rs("Back",Wc("in"),Wc("out"),Wc());Ke.SteppedEase=Ke.steps=Ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ct;return function(a){return((i*da(0,o,a)|0)+s)*n}}};yr.ease=Ke["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return uu+=r+","+r+"Params,"});var pu=function(e,t){this.id=eb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fu,this.set=t?t.getSetter:Fo},fa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wr(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),ha||vn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zo(this,n),!s._dp||s.parent||pd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?br(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(da(-Math.abs(this._delay),this._tDur,i),!0),Oo(this),cb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rb);var i=Zt;return Zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bn(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=wt(n)?n:fd,a=function(){var c=i.then;i.then=null,wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ra(this)},r}();Wn(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var $t=function(r){nd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),gt&&ui(n.parent||gt,Pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&md(Pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return la(0,arguments,this),this},t.from=function(i,s,o){return la(1,arguments,this),this},t.fromTo=function(i,s,o,a){return la(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,oa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new St(i,s,Bn(this,o),1),this},t.call=function(i,s,o){return ui(this,St.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new St(i,o,Bn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,oa(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,oa(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,p,m,_,y,v,x,w,A,T;if(this!==gt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,x=this._start,v=this._ts,_=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Gt(u%m),u===l?(p=this._repeat,h=c):(p=~~(u/m),p&&p===u/m&&(h=c,p--),h>c&&(h=c)),w=br(this._tTime,m),!a&&this._tTime&&w!==p&&this._tTime-w*m-this._dur<=0&&(w=p),A&&p&1&&(h=c-h,T=1),p!==w&&!this._lock){var b=A&&w&1,M=b===(A&&p&1);if(p<w&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Gt(p*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Pd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=db(this,Gt(a),Gt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!p&&(Hn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-ct);break}}d=g}else{d=this._last;for(var L=i<0?i:h;d;){if(g=d._prev,(d._act||L<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(L-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(L-d._start)*d._ts,s,o||Zt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=L?-ct:ct);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-ct)._zTime=h>=a?1:-1,this._ts))return this._start=x,Oo(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&es(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ri(s)||(s=Bn(this,s,i)),!(i instanceof fa)){if(Jt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ot(i))return this.addLabel(i,s);if(wt(i))i=St.delayedCall(0,i);else return this}return this!==i?ui(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof St?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ot(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(Do(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Bn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=St.delayedCall(0,s||ua,o);return a.data="isPause",this._hasPause=1,ui(this,a,Bn(this,i))},t.removePause=function(i){var s=this._first;for(i=Bn(this,i);s;)s._start===i&&s.data==="isPause"&&es(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ki!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Gn(i),l=this._first,c=Ri(s),u;l;)l instanceof St?ab(l._targets,a)&&(c?(!Ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Bn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=St.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ct,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&wr(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:Bn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qf(this,Bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qf(this,Bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Vn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;wr(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(gt._ts&&(ud(gt,Po(i,gt)),cd=vn.frame),vn.frame>=Zf){Zf+=bn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&bn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},e}(fa);Wn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pb=function(e,t,n,i,s,o,a){var l=new ln(this._pt,e,t,0,1,vu,null,s),c=0,u=0,f,h,d,g,p,m,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Sr(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(Uc)||[];f=Uc.exec(i);)g=f[0],p=i.substring(c,f.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?Ls(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Uc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ou.test(i)||_)&&(l.e=0),this._pt=l,l},mu=function(e,t,n,i,s,o,a,l,c,u){wt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:wt(f)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=wt(f)?c?Ob:Dd:xu,g;if(Ot(i)&&(~i.indexOf("random(")&&(i=Sr(i)),i.charAt(1)==="="&&(g=Ls(h,i)+(Ht(h)||0),(g||g===0)&&(i=g))),!u||h!==i||nu)return!isNaN(h*i)&&i!==""?(g=new ln(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Fb:Od,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Io(t,i),Pb.call(this,e,t,h,i,d,l||bn.stringFilter,c))},Lb=function(e,t,n,i,s){if(wt(e)&&(e=ca(e,s,t,n,i)),!hi(e)||e.style&&e.nodeType||Jt(e)||sd(e))return Ot(e)?ca(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ca(e[a],s,t,n,i);return o},gu=function(e,t,n,i,s,o){var a,l,c,u;if(xn[e]&&(a=new xn[e]).init(s,a.rawVars?t[e]:Lb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ln(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==vr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ki,nu,_u=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,d=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,_=e._startAt,y=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:y,w=e._overwrite==="auto"&&!su,A=e.timeline,T,b,M,L,D,I,z,O,k,Y,W,B,j;if(A&&(!g||!s)&&(s="none"),e._ease=Es(s,yr.ease),e._yEase=d?Cd(Es(d===!0?s:d,yr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(O=y[0]?Qi(y[0]).harness:0,B=O&&i[O.prop],T=Co(i,cu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&m?wo:sb),_._lazy=0),o){if(es(e._startAt=St.set(y,Wn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!p)&&e._startAt.revert(wo),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),M=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:v},T),B&&(M[O.prop]=B),es(e._startAt=St.set(y,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(wo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&yn(l)||l&&!m,b=0;b<y.length;b++){if(D=y[b],z=D._gsap||hu(y)[b]._gsap,e._ptLookup[b]=Y={},Jc[z.id]&&ji.length&&Ao(),W=x===y?b:x.indexOf(D),O&&(k=new O).init(D,B||T,e,W,x)!==!1&&(e._pt=L=new ln(e._pt,D,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(C){Y[C]=L}),k.priority&&(I=1)),!O||B)for(M in T)xn[M]&&(k=gu(M,T,e,W,D,x))?k.priority&&(I=1):Y[M]=L=mu.call(e,D,M,"get",T[M],W,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(D,e._op[b]),w&&e._pt&&(Ki=e,gt.killTweensOf(D,Y,e.globalTime(t)),j=!e.parent,Ki=0),e._pt&&l&&(Jc[z.id]=1)}I&&bu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,g&&t<=0&&A.render(Vn,!0,!0)},Rb=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return nu=1,e.vars[t]="+=0",_u(e,a),nu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Mt(n)+Ht(u.e)),u.b&&(u.b=c.s+Ht(u.b))},Ib=function(e,t){var n=e[0]?Qi(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Cs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Db=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ca=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):Ot(e)&&~e.indexOf("random(")?Sr(e):e},Rd=uu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Id={};on(Rd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Id[r]=1});var St=function(r){nd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:oa(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,y=i.parent||gt,v=(Jt(n)||sd(n)?Ri(n[0]):"length"in i)?[n]:Gn(n),x,w,A,T,b,M,L,D;if(a._targets=v.length?hu(v):Eo("GSAP target "+n+" not found. https://greensock.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||bo(c)||bo(u)){if(i=a.vars,x=a.timeline=new $t({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Pi(a),x._start=0,h||bo(c)||bo(u)){if(T=v.length,L=h&&vd(h),hi(h))for(b in h)~Rd.indexOf(b)&&(D||(D={}),D[b]=h[b]);for(w=0;w<T;w++)A=Co(i,Id),A.stagger=0,_&&(A.yoyoEase=_),D&&Cs(A,D),M=v[w],A.duration=+ca(c,Pi(a),w,M,v),A.delay=(+ca(u,Pi(a),w,M,v)||0)-a._delay,!h&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(M,A,L?L(w,M,v):0),x._ease=Ke.none;x.duration()?c=u=0:a.timeline=0}else if(g){oa(Wn(x.vars.defaults,{ease:"none"})),x._ease=Es(g.ease||i.ease||"none");var I=0,z,O,k;if(Jt(g))g.forEach(function(Y){return x.to(v,Y,">")}),x.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||Db(b,g[b],A,g.easeEach);for(b in A)for(z=A[b].sort(function(Y,W){return Y.t-W.t}),I=0,w=0;w<z.length;w++)O=z[w],k={ease:O.e,duration:(O.t-(w?z[w-1].t:0))/100*c},k[b]=O.v,x.to(v,k,I),I+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!su&&(Ki=Pi(a),gt.killTweensOf(v),Ki=0),ui(y,Pi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Gt(y._time)&&yn(f)&&ub(Pi(a))&&y.data!=="nested")&&(a._tTime=-ct,a.render(Math.max(0,-u)||0)),m&&md(Pi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ct&&!u?l:i<ct?0:i,h,d,g,p,m,_,y,v,x;if(!c)fb(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,o);if(h=Gt(f%p),f===l?(g=this._repeat,h=c):(g=~~(f/p),g&&g===f/p&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(x=this._yEase,h=c-h),m=br(this._tTime,p),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&Pd(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Gt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(gd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(Hn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!h&&_?-ct:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Kc(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Kc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&es(this,1),!s&&!(u&&!a)&&(f||a||_)&&(Hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){ha||vn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_u(this,l),c=this._ease(l/this._dur),Rb(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(zo(this,0),this.parent||dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ki&&Ki.vars.overwrite!==!0)._first||ra(this),this.parent&&o!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Gn(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,p,m,_;if((!s||s==="all")&&lb(a,l))return s==="all"&&(this._pt=0),ra(this);for(f=this._op=this._op||[],s!=="all"&&(Ot(s)&&(p={},on(s,function(y){return p[y]=1}),s=p),s=Ib(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(f[_]=s,g=h,d={}):(d=f[_]=f[_]||{},g=s);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Do(this,m,"_pt"),delete h[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return la(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return la(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return gt.killTweensOf(i,s,o)},e}(fa);Wn(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(r){St[r]=function(){var e=new $t,t=Qc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var xu=function(e,t,n){return e[t]=n},Dd=function(e,t,n){return e[t](n)},Ob=function(e,t,n,i){return e[t](i.fp,n)},zb=function(e,t,n){return e.setAttribute(t,n)},Fo=function(e,t){return wt(e[t])?Dd:Ro(e[t])&&e.setAttribute?zb:xu},Od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},yu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Nb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},kb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Do(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Bb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bu=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ln=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Od,this.d=l||this,this.set=c||xu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Bb,this.m=n,this.mt=s,this.tween=i},r}();on(uu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return cu[r]=1});Ln.TweenMax=Ln.TweenLite=St;Ln.TimelineLite=Ln.TimelineMax=$t;gt=new $t({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=du;var As=[],So={},Ub=[],td=0,Vb=0,Xc=function(e){return(So[e]||Ub).map(function(t){return t()})},iu=function(){var e=Date.now(),t=[];e-td>2&&(Xc("matchMediaInit"),As.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Un.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Xc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),td=e,Xc("matchMedia"))},zd=function(){function r(t,n){this.selector=n&&eu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var o=this,a=function(){var c=bt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=eu(s)),bt=o,f=i.apply(o,arguments),wt(f)&&o._r.push(f),bt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===wt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof St&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof St)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=As.length;a--;)As[a].id===this.id&&As.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Gb=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){hi(n)||(n={matches:n});var o=new zd(0,s||this.scope),a=o.conditions={},l,c,u;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Un.matchMedia(n[c]),l&&(As.indexOf(o)<0&&As.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(iu):l.addEventListener("change",iu)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Lo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Td(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ot(e)&&(e=Gn(e)[0]);var s=Qi(e||{}).get,o=n?fd:hd;return n==="native"&&(n=""),e&&(t?o((xn[t]&&xn[t].get||s)(e,t,n,i)):function(a,l,c){return o((xn[a]&&xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var i=e.map(function(u){return Kt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=xn[t],a=Qi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;vr._pt=0,f.init(e,n?u+n:u,vr,0,[e]),f.render(1,f),vr._pt&&yu(1,vr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Kt.to(e,Cs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,yr.ease)),Jf(yr,e||{})},config:function(e){return Jf(bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!xn[a]&&!Ln[a]&&Eo(t+" effect requires "+a+" plugin.")}),Vc[t]=function(a,l,c){return n(Gn(a),Wn(l||{},s),c)},o&&($t.prototype[t]=function(a,l,c){return this.add(Vc[t](a,hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):Ke},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,i=gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof St&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=s;return ui(gt,n,0),n},context:function(e,t){return e?new zd(e,t):bt},matchMedia:function(e){return new Gb(e)},matchMediaRefresh:function(){return As.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||iu()},addEventListener:function(e,t){var n=So[e]||(So[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=So[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:yb,wrapYoyo:bb,distribute:vd,random:bd,snap:yd,normalize:vb,getUnit:Ht,clamp:mb,splitColor:Ed,toArray:Gn,selector:eu,mapRange:Md,pipe:_b,unitize:xb,interpolate:wb,shuffle:xd},install:od,effects:Vc,ticker:vn,updateRoot:$t.updateRoot,plugins:xn,globalTimeline:gt,core:{PropTween:ln,globals:ld,Tween:St,Timeline:$t,Animation:fa,getCache:Qi,_removeLinkedListItem:Do,reverting:function(){return Zt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return su=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Lo[r]=St[r]});vn.add($t.updateRoot);vr=Lo.to({},{duration:0});var Hb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Hb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},qc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ot(s)&&(l={},on(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Wb(a,s)}}}},Kt=Lo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qc("roundProps",tu),qc("modifiers"),qc("snap",yd))||Lo;St.version=$t.version=Kt.version="3.12.2";ad=1;ru()&&Mr();var Xb=Ke.Power0,qb=Ke.Power1,Yb=Ke.Power2,$b=Ke.Power3,Zb=Ke.Power4,Jb=Ke.Linear,Kb=Ke.Quad,jb=Ke.Cubic,Qb=Ke.Quart,ew=Ke.Quint,tw=Ke.Strong,nw=Ke.Elastic,iw=Ke.Back,sw=Ke.SteppedEase,rw=Ke.Bounce,aw=Ke.Sine,ow=Ke.Expo,lw=Ke.Circ;var Fd,ns,Er,Cu,zs,cw,Nd,Pu,uw=function(){return typeof window!="undefined"},Di={},Os=180/Math.PI,Ar=Math.PI/180,Tr=Math.atan2,kd=1e8,Lu=/([A-Z])/g,hw=/(left|right|width|margin|padding|x)/i,fw=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Su=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gw=function(e,t,n){return e.style[t]=n},_w=function(e,t,n){return e.style.setProperty(t,n)},xw=function(e,t,n){return e._gsap[t]=n},vw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},bw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},_t="transform",ni=_t+"Origin",ww=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ii(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ii(i,e);else return fi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(_t)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ni,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Yd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Mw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pu(),(!s||!s.isStart)&&!n[_t]&&(Yd(n),i.uncache=1)}},$d=function(e,t){var n={target:e,props:[],revert:Mw,save:ww};return e._gsap||Kt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Zd,Tu=function(e,t){var n=ns.createElementNS?ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ns.createElement(e);return n.style?n:ns.createElement(e)},di=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Cr(t)||t,1)||""},Bd="O,Moz,ms,Ms,Webkit".split(","),Cr=function(e,t,n){var i=t||zs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Bd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Bd[o]:"")+e},Eu=function(){uw()&&window.document&&(Fd=window,ns=Fd.document,Er=ns.documentElement,zs=Tu("div")||{style:{}},cw=Tu("div"),_t=Cr(_t),ni=_t+"Origin",zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zd=!!Cr("perspective"),Pu=Kt.core.reverting,Cu=1)},wu=function r(e){var t=Tu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Er.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Er.removeChild(t),this.style.cssText=s,o},Ud=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jd=function(e){var t;try{t=e.getBBox()}catch{t=wu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===wu||(t=wu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}:t},Kd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jd(e))},ma=function(e,t){if(t){var n=e.style;t in Di&&t!==ni&&(t=_t),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},is=function(e,t,n,i,s,o){var a=new ln(e._pt,t,n,0,1,o?qd:Xd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Vd={deg:1,rad:1,turn:1},Sw={grid:1,flex:1},ss=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zs.style,l=hw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,p,m,_;return i===o||!s||Vd[i]||Vd[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&Kd(e),(d||o==="%")&&(Di[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Mt(d?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ns||!p.appendChild)&&(p=ns.body),m=p._gsap,m&&d&&m.width&&l&&m.time===vn.time&&!m.uncache?Mt(s/m.width*f):((d||o==="%")&&!Sw[di(p,"display")]&&(a.position=di(e,"position")),p===e&&(a.position="static"),p.appendChild(zs),g=zs[u],p.removeChild(zs),a.position="absolute",l&&d&&(m=Qi(p),m.time=vn.time,m.width=p[u]),Mt(h?g*s/f:g&&s?f/g*s:0))))},Ii=function(e,t,n,i){var s;return Cu||Eu(),t in fi&&t!=="transform"&&(t=fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Di[t]&&t!=="transform"?(s=_a(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ko(di(e,ni))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=No[t]&&No[t](e,t,n)||di(e,t)||fu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ss(e,t,s,n)+n:s},Tw=function(e,t,n,i){if(!n||n==="none"){var s=Cr(t,e,1),o=s&&di(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=di(e,"borderTopColor"))}var a=new ln(this._pt,e.style,t,0,1,vu),l=0,c=0,u,f,h,d,g,p,m,_,y,v,x,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=di(e,t)||i,e.style[t]=n),u=[n,i],du(u),n=u[0],i=u[1],h=n.match(Ps)||[],w=i.match(Ps)||[],w.length){for(;f=Ps.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(p=h[c++]||"")&&(d=parseFloat(p)||0,x=p.substr((d+"").length),m.charAt(1)==="="&&(m=Ls(d,m)+x),_=parseFloat(m),v=m.substr((_+"").length),l=Ps.lastIndex-v.length,v||(v=v||bn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(d=ss(e,t,p,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?qd:Xd;return ou.test(i)&&(a.e=0),this._pt=a,a},Gd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ew=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gd[n]||n,t[1]=Gd[i]||i,t.join(" ")},Aw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Di[a]&&(l=1,a=a==="transformOrigin"?ni:_t),ma(n,a);l&&(ma(n,_t),o&&(o.svg&&n.removeAttribute("transform"),_a(n,1),o.uncache=1,Yd(i)))}},No={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ln(e._pt,t,n,0,0,Aw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ga=[1,0,0,1,0,0],jd={},Qd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hd=function(e){var t=di(e,_t);return Qd(t)?ga:t.substr(7).match(au).map(Mt)},Ru=function(e,t){var n=e._gsap||Qi(e),i=e.style,s=Hd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ga:s):(s===ga&&!e.offsetParent&&e!==Er&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Er.appendChild(e)),s=Hd(e),l?i.display=l:ma(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Er.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Au=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ru(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,T,b,M;n?l!==ga&&(T=d*m-g*p)&&(b=x*(m/T)+w*(-p/T)+(p*y-m*_)/T,M=x*(-g/T)+w*(d/T)-(d*y-g*_)/T,x=b,w=M):(A=Jd(e),x=A.x+(~v[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(_=x-c,y=w-u,a.xOffset=f+(_*d+y*p)-_,a.yOffset=h+(_*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ni]="0px 0px",o&&(is(o,a,"xOrigin",c,x),is(o,a,"yOrigin",u,w),is(o,a,"xOffset",f,a.xOffset),is(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},_a=function(e,t){var n=e._gsap||new pu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=di(e,ni)||"0",u,f,h,d,g,p,m,_,y,v,x,w,A,T,b,M,L,D,I,z,O,k,Y,W,B,j,C,re,U,Q,ie,se;return u=f=h=p=m=_=y=v=x=0,d=g=1,n.svg=!!(e.getCTM&&Kd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),i.scale=i.rotate=i.translate="none"),T=Ru(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Au(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,A=n.yOrigin||0,T!==ga&&(D=T[0],I=T[1],z=T[2],O=T[3],u=k=T[4],f=Y=T[5],T.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(O*O+z*z),p=D||I?Tr(I,D)*Os:0,y=z||O?Tr(z,O)*Os+p:0,y&&(g*=Math.abs(Math.cos(y*Ar))),n.svg&&(u-=w-(w*D+A*z),f-=A-(w*I+A*O))):(se=T[6],Q=T[7],C=T[8],re=T[9],U=T[10],ie=T[11],u=T[12],f=T[13],h=T[14],b=Tr(se,U),m=b*Os,b&&(M=Math.cos(-b),L=Math.sin(-b),W=k*M+C*L,B=Y*M+re*L,j=se*M+U*L,C=k*-L+C*M,re=Y*-L+re*M,U=se*-L+U*M,ie=Q*-L+ie*M,k=W,Y=B,se=j),b=Tr(-z,U),_=b*Os,b&&(M=Math.cos(-b),L=Math.sin(-b),W=D*M-C*L,B=I*M-re*L,j=z*M-U*L,ie=O*L+ie*M,D=W,I=B,z=j),b=Tr(I,D),p=b*Os,b&&(M=Math.cos(b),L=Math.sin(b),W=D*M+I*L,B=k*M+Y*L,I=I*M-D*L,Y=Y*M-k*L,D=W,k=B),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=Mt(Math.sqrt(D*D+I*I+z*z)),g=Mt(Math.sqrt(Y*Y+se*se)),b=Tr(k,Y),y=Math.abs(b)>2e-4?b*Os:0,x=ie?1/(ie<0?-ie:ie):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qd(di(e,_t)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Mt(d),n.scaleY=Mt(g),n.rotation=Mt(p)+a,n.rotationX=Mt(m)+a,n.rotationY=Mt(_)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ni]=ko(c)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?Pw:Zd?ep:Cw,n.uncache=0,n},ko=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mu=function(e,t,n){var i=Ht(t);return Mt(parseFloat(t)+parseFloat(ss(e,"x",n+"px",i)))+i},Cw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ep(e,t)},Is="0deg",pa="0px",Ds=") ",ep=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,y=n.target,v=n.zOrigin,x="",w=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==Is||u!==Is)){var A=parseFloat(u)*Ar,T=Math.sin(A),b=Math.cos(A),M;A=parseFloat(f)*Ar,M=Math.cos(A),o=Mu(y,o,T*M*-v),a=Mu(y,a,-Math.sin(A)*-v),l=Mu(y,l,b*M*-v+v)}m!==pa&&(x+="perspective("+m+Ds),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==pa||a!==pa||l!==pa)&&(x+=l!==pa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ds),c!==Is&&(x+="rotate("+c+Ds),u!==Is&&(x+="rotateY("+u+Ds),f!==Is&&(x+="rotateX("+f+Ds),(h!==Is||d!==Is)&&(x+="skew("+h+", "+d+Ds),(g!==1||p!==1)&&(x+="scale("+g+", "+p+Ds),y.style[_t]=x||"translate(0, 0)"},Pw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),w,A,T,b,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ar,c*=Ar,w=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-h,b=Math.cos(l-c)*h,c&&(u*=Ar,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,b*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=Mt(w),A=Mt(A),T=Mt(T),b=Mt(b)):(w=f,b=h,A=T=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=ss(d,"x",o,"px"),x=ss(d,"y",a,"px")),(g||p||m||_)&&(v=Mt(v+g-(g*w+p*T)+m),x=Mt(x+p-(g*A+p*b)+_)),(i||s)&&(M=d.getBBox(),v=Mt(v+i/100*M.width),x=Mt(x+s/100*M.height)),M="matrix("+w+","+A+","+T+","+b+","+v+","+x+")",d.setAttribute("transform",M),y&&(d.style[_t]=M)},Lw=function(e,t,n,i,s){var o=360,a=Ot(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Os:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*kd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*kd)%o-~~(c/o)*o)),e._pt=h=new ln(e._pt,t,n,i,c,dw),h.e=u,h.u="deg",e._props.push(n),h},Wd=function(e,t){for(var n in t)e[n]=t[n];return e},Rw=function(e,t,n){var i=Wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_t]=t,a=_a(n,1),ma(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],o[_t]=t,a=_a(n,1),o[_t]=c);for(l in Di)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ht(c),g=Ht(u),f=d!==g?ss(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new ln(e._pt,a,l,f,h-f,Su),e._pt.u=g||0,e._props.push(l));Wd(a,i)};on("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});No[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ii(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,p){return d[g]=h[p]=h[p]||h[(p-1)/2|0]}),a.init(l,d,f)}});var Iu={name:"css",register:Eu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,p,m,_,y,v,x,w,A,T,b;Cu||Eu(),this.styles=this.styles||$d(e),b=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(xn[p]&&gu(p,t,n,i,e,s)))){if(d=typeof u,g=No[p],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sr(u)),g)g(this,e,p,u,n)&&(T=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(m=Ht(c),_=Ht(u)),_?m!==_&&(c=ss(e,p,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,p),o.push(p),b.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Ot(c)&&~c.indexOf("random(")&&(c=Sr(c)),Ht(c+"")||(c+=bn.units[p]||Ht(Ii(e,p))||""),(c+"").charAt(1)==="="&&(c=Ii(e,p))):c=Ii(e,p),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),p in fi&&(p==="autoAlpha"&&(h===1&&Ii(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),is(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=fi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in Di,v){if(this.styles.save(p),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||_a(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new ln(this._pt,a,_t,0,1,w.renderTransform,w,0,-1),x.dep=1),p==="scale")this._pt=new ln(this._pt,w,"scaleY",w.scaleY,(y?Ls(w.scaleY,y+f):f)-w.scaleY||0,Su),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){b.push(ni,0,a[ni]),u=Ew(u),w.svg?Au(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==w.zOrigin&&is(this,w,"zOrigin",w.zOrigin,_),is(this,a,p,ko(c),ko(u)));continue}else if(p==="svgOrigin"){Au(e,u,1,A,0,this);continue}else if(p in jd){Lw(this,w,p,h,y?Ls(h,y+u):u);continue}else if(p==="smoothOrigin"){is(this,w,"smooth",w.smooth,u);continue}else if(p==="force3D"){w[p]=u;continue}else if(p==="transform"){Rw(this,u,e);continue}}else p in a||(p=Cr(p)||p);if(v||(f||f===0)&&(h||h===0)&&!fw.test(u)&&p in a)m=(c+"").substr((h+"").length),f||(f=0),_=Ht(u)||(p in bn.units?bn.units[p]:m),m!==_&&(h=ss(e,p,c,_)),this._pt=new ln(this._pt,v?w:a,p,h,(y?Ls(h,y+f):f)-h,!v&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?mw:Su),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=pw);else if(p in a)Tw.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,i,s);else if(p!=="parseTransform"){Io(p,u);continue}v||(p in a?b.push(p,0,a[p]):b.push(p,1,c||e[p])),o.push(p)}}T&&bu(this)},render:function(e,t){if(t.tween._time||!Pu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:fi,getSetter:function(e,t,n){var i=fi[t];return i&&i.indexOf(",")<0&&(t=i),t in Di&&t!==ni&&(e._gsap.x||Ii(e,"x"))?n&&Nd===n?t==="scale"?vw:xw:(Nd=n||{})&&(t==="scale"?yw:bw):e.style&&!Ro(e.style[t])?gw:~t.indexOf("-")?_w:Fo(e,t)},core:{_removeProperty:ma,_getMatrix:Ru}};Kt.utils.checkPrefix=Cr;Kt.core.getStyleSaver=$d;(function(r,e,t,n){var i=on(r+","+e+","+t,function(s){Di[s]=1});on(e,function(s){bn.units[s]="deg",jd[s]=1}),fi[i[13]]=r+","+e,on(n,function(s){var o=s.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){bn.units[r]="px"});Kt.registerPlugin(Iu);var pi=Kt.registerPlugin(Iu)||Kt,dM=pi.core.Tween;function tp(r){function e(){for(var B=0;B<arguments.length;B++)if(arguments[B]!==void 0)return arguments[B]}console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var t=r.parent,n=r.displacementImage,i=r.image1,s=r.image2,o=e(r.imagesRatio,1),a=e(r.intensity1,r.intensity,1),l=e(r.intensity2,r.intensity,1),c=e(r.angle,Math.PI/4),u=e(r.angle1,c),f=e(r.angle2,3*-c),h=e(r.speedIn,r.speed,1.6),d=e(r.speedOut,r.speed,1.2),g=e(r.hover,!0),p=e(r.easing,"expo.out"),m=e(r.video,!1);if(t)if(i&&s&&n){var _=new go,y=new na(t.offsetWidth/-2,t.offsetWidth/2,t.offsetHeight/2,t.offsetHeight/-2,1,1e3);y.position.z=1;var v=new Nc({antialias:!1,alpha:!0});v.setPixelRatio(2),v.setClearColor(16777215,0),v.setSize(t.offsetWidth,t.offsetHeight),t.appendChild(v.domElement);var x=function(){v.render(_,y)},w=new xo;w.crossOrigin="";var A,T,b=w.load(n,x);if(b.magFilter=b.minFilter=mt,m){(function B(){requestAnimationFrame(B),v.render(_,y)})(),(m=document.createElement("video")).autoplay=!0,m.loop=!0,m.muted=!0,m.src=i,m.load();var M=document.createElement("video");M.autoplay=!0,M.loop=!0,M.muted=!0,M.src=s,M.load();var L=new ws(m),D=new ws(M);L.magFilter=D.magFilter=mt,L.minFilter=D.minFilter=mt,M.addEventListener("loadeddata",function(){M.play(),(D=new ws(M)).magFilter=mt,D.minFilter=mt,z.uniforms.texture2.value=D},!1),m.addEventListener("loadeddata",function(){m.play(),(L=new ws(m)).magFilter=mt,L.minFilter=mt,z.uniforms.texture1.value=L},!1)}else L=w.load(i,x),D=w.load(s,x),L.magFilter=D.magFilter=mt,L.minFilter=D.minFilter=mt;var I=o;t.offsetHeight/t.offsetWidth<I?(A=1,T=t.offsetHeight/t.offsetWidth/I):(A=t.offsetWidth/t.offsetHeight*I,T=1);var z=new ei({uniforms:{intensity1:{type:"f",value:a},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:u},angle2:{type:"f",value:f},texture1:{type:"t",value:L},texture2:{type:"t",value:D},disp:{type:"t",value:b},res:{type:"vec4",value:new yt(t.offsetWidth,t.offsetHeight,A,T)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,fragmentShader:`
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`,transparent:!0,opacity:1}),O=new bs(t.offsetWidth,t.offsetHeight,1),k=new Nn(O,z);_.add(k),g&&(t.addEventListener("mouseenter",Y),t.addEventListener("touchstart",Y),t.addEventListener("mouseleave",W),t.addEventListener("touchend",W)),window.addEventListener("resize",function(B){t.offsetHeight/t.offsetWidth<I?(A=1,T=t.offsetHeight/t.offsetWidth/I):(A=t.offsetWidth/t.offsetHeight*I,T=1),k.material.uniforms.res.value=new yt(t.offsetWidth,t.offsetHeight,A,T),v.setSize(t.offsetWidth,t.offsetHeight),x()}),this.next=Y,this.previous=W}else console.warn("One or more images are missing");else console.warn("Parent missing");function Y(){pi.to(z.uniforms.dispFactor,{duration:h,value:1,ease:p,onUpdate:x,onComplete:x})}function W(){pi.to(z.uniforms.dispFactor,{duration:d,value:0,ease:p,onUpdate:x,onComplete:x})}}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let r=".blog-post-link_block";$(r).each(function(){$(this).on("mouseover",()=>{$(this).find(".blog-slide-bg").addClass("is-active"),$(this).find(".blog-content-item").addClass("is-active"),$(this).find(".blog-item_marquee-panel").addClass("is-active")}),$(this).on("mouseout",()=>{$(this).find(".blog-slide-bg").removeClass("is-active"),$(this).find(".blog-content-item").removeClass("is-active"),$(this).find(".blog-item_marquee-panel").removeClass("is-active")})}),$(r).on("mouseover",function(){Number($(this).find(".blog-title").width())>Number($(".blog-content").width())&&$(".blog-item_marquee-panel.is-active").css({animation:"marquee 40s infinite"})}),$(r).on("mouseout",function(){Number($(this).find(".blog-title").width())>Number($(".blog-content").width())&&($(".blog-item_marquee-panel").css("-webkit-animation","none"),$(".blog-item_marquee-panel").css("-moz-animation","none"),$(".blog-item_marquee-panel").css("-ms-animation","none"),$(".blog-item_marquee-panel").css("animation","none"))}),$(r).each(e=>{new tp({parent:$(".blog-visuals")[e],intensity:.3,imagesRatio:9/16,image1:$(".blog-visual-image")[e].getAttribute("src"),image2:$(".blog-visual-image")[e].getAttribute("src"),displacementImage:"https://uploads-ssl.webflow.com/649bee0121de1f16fd80cd85/64be8bea7919991859374824_displacement-mask.png"})})});function np(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Iw(r,e,t){return e&&np(r.prototype,e),t&&np(r,t),r}var Wt,Du,Dw,Rn,rs,as,Lr,sp,Fs,va,rp,Oi,ii,ap,op=function(){return Wt||typeof window!="undefined"&&(Wt=window.gsap)&&Wt.registerPlugin&&Wt},lp=1,Pr=[],We=[],si=[],ya=Date.now,Ou=function(e,t){return t},Ow=function(){var e=va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,We),i.push.apply(i,si),We=n,si=i,Ou=function(o,a){return t[o](a)}},Fi=function(e,t){return~si.indexOf(e)&&si[si.indexOf(e)+1][t]},ba=function(e){return!!~rp.indexOf(e)},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bo="scrollLeft",Uo="scrollTop",zu=function(){return Oi&&Oi.isPressed||We.cache++},Vo=function(e,t){var n=function i(s){if(s||s===0){lp&&(Rn.history.scrollRestoration="manual");var o=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),e(s),i.cacheID=We.cache,o&&Ou("ss",s)}else(t||We.cache!==i.cacheID||Ou("ref"))&&(i.cacheID=We.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},jt={s:Bo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vo(function(r){return arguments.length?Rn.scrollTo(r,Ct.sc()):Rn.pageXOffset||rs[Bo]||as[Bo]||Lr[Bo]||0})},Ct={s:Uo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jt,sc:Vo(function(r){return arguments.length?Rn.scrollTo(jt.sc(),r):Rn.pageYOffset||rs[Uo]||as[Uo]||Lr[Uo]||0})},hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Wt.utils.toArray)(e)[0]||(typeof e=="string"&&Wt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zi=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=rs.scrollingElement||as);var s=We.indexOf(e),o=i===Ct.sc?1:2;!~s&&(s=We.push(e)-1),We[s+o]||un(e,"scroll",zu);var a=We[s+o],l=a||(We[s+o]=Vo(Fi(e,n),!0)||(ba(e)?i:Vo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Wt.getProperty(e,"scrollBehavior")==="smooth"),l},Go=function(e,t,n){var i=e,s=e,o=ya(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=ya();p||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var p=a,m=s,_=ya();return(g||g===0)&&g!==i&&u(g),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-p)*1e3};return{update:u,reset:f,getVelocity:h}},xa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ip=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},cp=function(){va=Wt.core.globals().ScrollTrigger,va&&va.core&&Ow()},up=function(e){return Wt=e||op(),Wt&&typeof document!="undefined"&&document.body&&(Rn=window,rs=document,as=rs.documentElement,Lr=rs.body,rp=[Rn,rs,as,Lr],Dw=Wt.utils.clamp,ap=Wt.core.context||function(){},Fs="onpointerenter"in Lr?"pointer":"mouse",sp=Tt.isTouch=Rn.matchMedia&&Rn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Rn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Tt.eventTypes=("ontouchstart"in as?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in as?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lp=0},500),cp(),Du=1),Du};jt.op=Ct;We.cache=0;var Tt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Du||up(Wt)||console.warn("Please gsap.registerPlugin(Observer)"),va||cp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,y=n.onDrag,v=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,T=n.onUp,b=n.onDown,M=n.onChangeX,L=n.onChangeY,D=n.onChange,I=n.onToggleX,z=n.onToggleY,O=n.onHover,k=n.onHoverEnd,Y=n.onMove,W=n.ignoreCheck,B=n.isNormalizer,j=n.onGestureStart,C=n.onGestureEnd,re=n.onWheel,U=n.onEnable,Q=n.onDisable,ie=n.onClick,se=n.scrollSpeed,V=n.capture,be=n.allowClicks,ge=n.lockAxis,me=n.onLockAxis;this.target=a=hn(a)||as,this.vars=n,d&&(d=Wt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Rn.getComputedStyle(Lr).lineHeight)||22);var de,Fe,Pe,ae,$e,at,nt,H=this,Qe=0,Be=0,Bt=zi(a,jt),tt=zi(a,Ct),P=Bt(),S=tt(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",ee=ba(a),ne=a.ownerDocument||rs,oe=[0,0,0],Ae=[0,0,0],ue=0,K=function(){return ue=ya()},Se=function(he,Ne){return(H.event=he)&&d&&~d.indexOf(he.target)||Ne&&J&&he.pointerType!=="touch"||W&&W(he,Ne)},we=function(){H._vx.reset(),H._vy.reset(),Fe.pause(),f&&f(H)},ve=function(){var he=H.deltaX=ip(oe),Ne=H.deltaY=ip(Ae),Je=Math.abs(he)>=i,_e=Math.abs(Ne)>=i;D&&(Je||_e)&&D(H,he,Ne,oe,Ae),Je&&(w&&H.deltaX>0&&w(H),A&&H.deltaX<0&&A(H),M&&M(H),I&&H.deltaX<0!=Qe<0&&I(H),Qe=H.deltaX,oe[0]=oe[1]=oe[2]=0),_e&&(b&&H.deltaY>0&&b(H),T&&H.deltaY<0&&T(H),L&&L(H),z&&H.deltaY<0!=Be<0&&z(H),Be=H.deltaY,Ae[0]=Ae[1]=Ae[2]=0),(ae||Pe)&&(Y&&Y(H),Pe&&(y(H),Pe=!1),ae=!1),at&&!(at=!1)&&me&&me(H),$e&&(re(H),$e=!1),de=0},Ee=function(he,Ne,Je){oe[Je]+=he,Ae[Je]+=Ne,H._vx.update(he),H._vy.update(Ne),c?de||(de=requestAnimationFrame(ve)):ve()},Te=function(he,Ne){ge&&!nt&&(H.axis=nt=Math.abs(he)>Math.abs(Ne)?"x":"y",at=!0),nt!=="y"&&(oe[2]+=he,H._vx.update(he,!0)),nt!=="x"&&(Ae[2]+=Ne,H._vy.update(Ne,!0)),c?de||(de=requestAnimationFrame(ve)):ve()},ke=function(he){if(!Se(he,1)){he=xa(he,u);var Ne=he.clientX,Je=he.clientY,_e=Ne-H.x,Ze=Je-H.y,Ie=H.isDragging;H.x=Ne,H.y=Je,(Ie||Math.abs(H.startX-Ne)>=s||Math.abs(H.startY-Je)>=s)&&(y&&(Pe=!0),Ie||(H.isDragging=!0),Te(_e,Ze),Ie||m&&m(H))}},et=H.onPress=function(Le){Se(Le,1)||Le&&Le.button||(H.axis=nt=null,Fe.pause(),H.isPressed=!0,Le=xa(Le),Qe=Be=0,H.startX=H.x=Le.clientX,H.startY=H.y=Le.clientY,H._vx.reset(),H._vy.reset(),un(B?a:ne,ii[1],ke,u,!0),H.deltaX=H.deltaY=0,v&&v(H))},ot=H.onRelease=function(Le){if(!Se(Le,1)){cn(B?a:ne,ii[1],ke,!0);var he=!isNaN(H.y-H.startY),Ne=H.isDragging&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Je=xa(Le);!Ne&&he&&(H._vx.reset(),H._vy.reset(),u&&be&&Wt.delayedCall(.08,function(){if(ya()-ue>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(ne.createEvent){var _e=ne.createEvent("MouseEvents");_e.initMouseEvent("click",!0,!0,Rn,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(_e)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&!B&&Fe.restart(!0),_&&Ne&&_(H),x&&x(H,Ne)}},R=function(he){return he.touches&&he.touches.length>1&&(H.isGesturing=!0)&&j(he,H.isDragging)},Z=function(){return(H.isGesturing=!1)||C(H)},te=function(he){if(!Se(he)){var Ne=Bt(),Je=tt();Ee((Ne-P)*se,(Je-S)*se,1),P=Ne,S=Je,f&&Fe.restart(!0)}},le=function(he){if(!Se(he)){he=xa(he,u),re&&($e=!0);var Ne=(he.deltaMode===1?l:he.deltaMode===2?Rn.innerHeight:1)*g;Ee(he.deltaX*Ne,he.deltaY*Ne,0),f&&!B&&Fe.restart(!0)}},xe=function(he){if(!Se(he)){var Ne=he.clientX,Je=he.clientY,_e=Ne-H.x,Ze=Je-H.y;H.x=Ne,H.y=Je,ae=!0,(_e||Ze)&&Te(_e,Ze)}},Ge=function(he){H.event=he,O(H)},ht=function(he){H.event=he,k(H)},ut=function(he){return Se(he)||xa(he,u)&&ie(H)};Fe=H._dc=Wt.delayedCall(h||.25,we).pause(),H.deltaX=H.deltaY=0,H._vx=Go(0,50,!0),H._vy=Go(0,50,!0),H.scrollX=Bt,H.scrollY=tt,H.isDragging=H.isGesturing=H.isPressed=!1,ap(this),H.enable=function(Le){return H.isEnabled||(un(ee?ne:a,"scroll",zu),o.indexOf("scroll")>=0&&un(ee?ne:a,"scroll",te,u,V),o.indexOf("wheel")>=0&&un(a,"wheel",le,u,V),(o.indexOf("touch")>=0&&sp||o.indexOf("pointer")>=0)&&(un(a,ii[0],et,u,V),un(ne,ii[2],ot),un(ne,ii[3],ot),be&&un(a,"click",K,!1,!0),ie&&un(a,"click",ut),j&&un(ne,"gesturestart",R),C&&un(ne,"gestureend",Z),O&&un(a,Fs+"enter",Ge),k&&un(a,Fs+"leave",ht),Y&&un(a,Fs+"move",xe)),H.isEnabled=!0,Le&&Le.type&&et(Le),U&&U(H)),H},H.disable=function(){H.isEnabled&&(Pr.filter(function(Le){return Le!==H&&ba(Le.target)}).length||cn(ee?ne:a,"scroll",zu),H.isPressed&&(H._vx.reset(),H._vy.reset(),cn(B?a:ne,ii[1],ke,!0)),cn(ee?ne:a,"scroll",te,V),cn(a,"wheel",le,V),cn(a,ii[0],et,V),cn(ne,ii[2],ot),cn(ne,ii[3],ot),cn(a,"click",K,!0),cn(a,"click",ut),cn(ne,"gesturestart",R),cn(ne,"gestureend",Z),cn(a,Fs+"enter",Ge),cn(a,Fs+"leave",ht),cn(a,Fs+"move",xe),H.isEnabled=H.isPressed=H.isDragging=!1,Q&&Q(H))},H.kill=H.revert=function(){H.disable();var Le=Pr.indexOf(H);Le>=0&&Pr.splice(Le,1),Oi===H&&(Oi=0)},Pr.push(H),B&&ba(a)&&(Oi=H),H.enable(p)},Iw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Tt.version="3.12.2";Tt.create=function(r){return new Tt(r)};Tt.register=up;Tt.getAll=function(){return Pr.slice()};Tt.getById=function(r){return Pr.filter(function(e){return e.vars.id===r})[0]};op()&&Wt.registerPlugin(Tt);var ye,Dr,je,xt,ri,pt,Ap,al,ol,zr,Qo,Ho,Qt,cl,Hu,fn,hp,fp,Or,Cp,Fu,Pp,In,Lp,Rp,Ip,os,Wu,Zu,Fr,Ju,Nu,Wo=1,pn=Date.now,ku=pn(),Yn=0,Ma=0,dp=function(e,t,n){var i=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},pp=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},zw=function r(){return Ma&&requestAnimationFrame(r)},mp=function(){return cl=1},gp=function(){return cl=0},mi=function(e){return e},Sa=function(e){return Math.round(e*1e5)/1e5||0},Dp=function(){return typeof window!="undefined"},Op=function(){return ye||Dp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Gs=function(e){return!!~Ap.indexOf(e)},zp=function(e){return(e==="Height"?Ju:je["inner"+e])||ri["client"+e]||pt["client"+e]},Fp=function(e){return Fi(e,"getBoundingClientRect")||(Gs(e)?function(){return rl.width=je.innerWidth,rl.height=Ju,rl}:function(){return Ni(e)})},Fw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Fi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?zp(s):e["client"+s])||0}},Nw=function(e,t){return!t||~si.indexOf(e)?Fp(e):function(){return rl}},ki=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Fi(e,n))?o()-Fp(e)()[s]:Gs(e)?(ri[n]||pt[n])-zp(i):e[n]-e["offset"+i])},Xo=function(e,t){for(var n=0;n<Or.length;n+=3)(!t||~t.indexOf(Or[n+1]))&&e(Or[n],Or[n+1],Or[n+2])},On=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},el=function(e){return typeof e=="number"},Ns=function(e){return typeof e=="object"},wa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Rr=Math.abs,Np="left",kp="top",Ku="right",ju="bottom",Bs="width",Us="height",Ea="Right",Aa="Left",Ca="Top",Pa="Bottom",Pt="padding",Xn="margin",kr="Width",Qu="Height",Xt="px",qn=function(e){return je.getComputedStyle(e)},kw=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},_p=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ni=function(e,t){var n=t&&qn(e)[Hu]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Bp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Bw=function(e){return function(t){return ye.utils.snap(Bp(e),t)}},eh=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Uw=function(e){return function(t,n){return eh(Bp(e))(t,n.direction)}},qo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},kt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Nt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$o={toggleActions:"play",anticipatePin:0},ll={top:0,left:0,center:.5,bottom:1,right:1},tl=function(e,t){if(On(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ll?ll[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zo=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=xt.createElement("div"),p=Gs(n)||Fi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?pt:n,y=e.indexOf("start")!==-1,v=y?c:u,x="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(x+=(i===Ct?Ku:ju)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],nl(g,0,i,y),g},nl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+kr]=1,s["border"+a+kr]=0,s[n.p]=t+"px",ye.set(e,s)},Xe=[],qu={},Ra,vp=function(){return pn()-Yn>34&&(Ra||(Ra=requestAnimationFrame(Bi)))},Ir=function(){(!In||!In.isPressed||In.startX>pt.clientWidth)&&(We.cache++,In?Ra||(Ra=requestAnimationFrame(Bi)):Bi(),Yn||Ws("scrollStart"),Yn=pn())},Uu=function(){Ip=je.innerWidth,Rp=je.innerHeight},Ta=function(){We.cache++,!Qt&&!Pp&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Lp||Ip!==je.innerWidth||Math.abs(je.innerHeight-Rp)>je.innerHeight*.25)&&al.restart(!0)},Hs={},Vw=[],Up=function r(){return Nt(qe,"scrollEnd",r)||ks(!0)},Ws=function(e){return Hs[e]&&Hs[e].map(function(t){return t()})||Vw},Dn=[],Vp=function(e){for(var t=0;t<Dn.length;t+=5)(!e||Dn[t+4]&&Dn[t+4].query===e)&&(Dn[t].style.cssText=Dn[t+1],Dn[t].getBBox&&Dn[t].setAttribute("transform",Dn[t+2]||""),Dn[t+3].uncache=1)},th=function(e,t){var n;for(fn=0;fn<Xe.length;fn++)n=Xe[fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Vp(t),t||Ws("revert")},Gp=function(e,t){We.cache++,(t||!dn)&&We.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(je.history.scrollRestoration=Zu=e)},dn,Vs=0,yp,Gw=function(){if(yp!==Vs){var e=yp=Vs;requestAnimationFrame(function(){return e===Vs&&ks(!0)})}},Hp=function(){pt.appendChild(Fr),Ju=Fr.offsetHeight||je.innerHeight,pt.removeChild(Fr)},ks=function(e,t){if(Yn&&!e){kt(qe,"scrollEnd",Up);return}Hp(),dn=qe.isRefreshing=!0,We.forEach(function(i){return mn(i)&&++i.cacheID&&(i.rec=i())});var n=Ws("refreshInit");Cp&&qe.sort(),t||th(),We.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Xe.slice(0).forEach(function(i){return i.refresh()}),Xe.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),Xe.forEach(function(i){var s=ki(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>s)&&i.setPositions(i.start,Math.max(i.start+1,s),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),We.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Gp(Zu,1),al.pause(),Vs++,dn=2,Bi(2),Xe.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),dn=qe.isRefreshing=!1,Ws("refresh")},Yu=0,il=1,La,Bi=function(e){if(!dn||e===2){qe.isUpdating=!0,La&&La.update(0);var t=Xe.length,n=pn(),i=n-ku>=50,s=t&&Xe[0].scroll();if(il=Yu>s?-1:1,dn||(Yu=s),i&&(Yn&&!cl&&n-Yn>200&&(Yn=0,Ws("scrollEnd")),Qo=ku,ku=n),il<0){for(fn=t;fn-- >0;)Xe[fn]&&Xe[fn].update(0,i);il=1}else for(fn=0;fn<t;fn++)Xe[fn]&&Xe[fn].update(0,i);qe.isUpdating=!1}Ra=0},$u=[Np,kp,ju,Ku,Xn+Pa,Xn+Ea,Xn+Ca,Xn+Aa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sl=$u.concat([Bs,Us,"boxSizing","max"+kr,"max"+Qu,"position",Xn,Pt,Pt+Ca,Pt+Ea,Pt+Pa,Pt+Aa]),Hw=function(e,t,n){Nr(n);var i=e._gsap;if(i.spacerIsNative)Nr(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Vu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$u.length,o=t.style,a=e.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ju]=a[Ku]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Bs]=Xu(e,jt)+Xt,o[Us]=Xu(e,Ct)+Xt,o[Pt]=a[Xn]=a[kp]=a[Np]="0",Nr(i),a[Bs]=a["max"+kr]=n[Bs],a[Us]=a["max"+Qu]=n[Us],a[Pt]=n[Pt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ww=/([A-Z])/g,Nr=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ww,"-$1").toLowerCase())}},Jo=function(e){for(var t=sl.length,n=e.style,i=[],s=0;s<t;s++)i.push(sl[s],n[sl[s]]);return i.t=e,i},Xw=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},rl={left:0,top:0},bp=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){mn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?tl("0"+e.substr(3),n):0));var p=d?d.time():0,m,_,y;if(d&&d.seek(0),isNaN(e)||(e=+e),el(e))d&&(e=ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&nl(a,n,i,!0);else{mn(t)&&(t=t(l));var v=(e||"0").split(" "),x,w,A,T;y=hn(t,l)||pt,x=Ni(y)||{},(!x||!x.left&&!x.top)&&qn(y).display==="none"&&(T=y.style.display,y.style.display="block",x=Ni(y),T?y.style.display=T:y.style.removeProperty("display")),w=tl(v[0],x[i.d]),A=tl(v[1]||"0",n),e=x[i.p]-c[i.p]-u+w+s-A,a&&nl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+n,M=o._isStart;m="scroll"+i.d2,nl(o,b,i,M&&b>20||!M&&(f?Math.max(pt[m],ri[m]):o.parentNode[m])<=b+1),f&&(c=Ni(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&y&&(m=Ni(y),d.seek(h),_=Ni(y),d._caScrollDist=m[i.p]-_[i.p],e=e/d._caScrollDist*h),d&&d.seek(p),d?e:Math.round(e)},qw=/(webkit|moz|length|cssText|inset)/i,wp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=qn(e);for(o in a)!+o&&!qw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},Wp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Ko=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Mp=function(e,t){var n=zi(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var p=Wp(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.modifiers=g,g[i]=function(){return p(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){We.cache++,Bi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=ye.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},kt(e,"wheel",n.wheelHandler),qe.isTouch&&kt(e,"touchmove",n.wheelHandler),s},qe=function(){function r(t,n){Dr||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=mi;return}n=_p(On(n)||el(n)||n.nodeType?{trigger:n}:n,$o);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,p=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,w=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,b=s.fastScrollEnd,M=s.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?jt:Ct,D=!f&&f!==0,I=hn(n.scroller||je),z=ye.core.getCache(I),O=Gs(I),k=("pinType"in n?n.pinType:Fi(I,"pinType")||O&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),B="markers"in n?n.markers:$o.markers,j=O?0:parseFloat(qn(I)["border"+L.p2+kr])||0,C=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(C)},U=Fw(I,O,L),Q=Nw(I,O),ie=0,se=0,V=0,be=zi(I,L),ge,me,de,Fe,Pe,ae,$e,at,nt,H,Qe,Be,Bt,tt,P,S,J,ee,ne,oe,Ae,ue,K,Se,we,ve,Ee,Te,ke,et,ot,R,Z,te,le,xe,Ge,ht,ut;if(C._startClamp=C._endClamp=!1,C._dir=L,m*=45,C.scroller=I,C.scroll=T?T.time.bind(T):be,Fe=be(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Cp=1,n.refreshPriority===-9999&&(La=C)),z.tweenScroll=z.tweenScroll||{top:Mp(I,Ct),left:Mp(I,jt)},C.tweenTo=ge=z.tweenScroll[L.p],C.scrubDuration=function(_e){Z=el(_e)&&_e,Z?R?R.duration(_e):R=ye.to(i,{ease:"expo",totalProgress:"+=0",duration:Z,paused:!0,onComplete:function(){return _&&_(C)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),et=0,l||(l=i.vars.id)),x&&((!Ns(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in pt.style&&ye.set(O?[pt,ri]:I,{scrollBehavior:"auto"}),We.forEach(function(_e){return mn(_e)&&_e.target===(O?xt.scrollingElement||ri:I)&&(_e.smooth=!1)}),de=mn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Bw(i):x.snapTo==="labelsDirectional"?Uw(i):x.directional!==!1?function(_e,Ze){return eh(x.snapTo)(_e,pn()-se<500?0:Ze.direction)}:ye.utils.snap(x.snapTo),te=x.duration||{min:.1,max:2},te=Ns(te)?zr(te.min,te.max):zr(te,te),le=ye.delayedCall(x.delay||Z/2||.1,function(){var _e=be(),Ze=pn()-se<500,Ie=ge.tween;if((Ze||Math.abs(C.getVelocity())<10)&&!Ie&&!cl&&ie!==_e){var Ue=(_e-ae)/tt,E=i&&!D?i.totalProgress():Ue,F=Ze?0:(E-ot)/(pn()-Qo)*1e3||0,G=ye.utils.clamp(-Ue,1-Ue,Rr(F/2)*F/.185),N=Ue+(x.inertia===!1?0:G),q=zr(0,1,de(N,C)),fe=Math.round(ae+q*tt),pe=x,Re=pe.onStart,Me=pe.onInterrupt,Oe=pe.onComplete;if(_e<=$e&&_e>=ae&&fe!==_e){if(Ie&&!Ie._initted&&Ie.data<=Rr(fe-_e))return;x.inertia===!1&&(G=q-Ue),ge(fe,{duration:te(Rr(Math.max(Rr(N-E),Rr(q-E))*.185/F/.05||0)),ease:x.ease||"power3",data:Rr(fe-_e),onInterrupt:function(){return le.restart(!0)&&Me&&Me(C)},onComplete:function(){C.update(),ie=be(),et=ot=i&&!D?i.totalProgress():C.progress,y&&y(C),Oe&&Oe(C)}},_e,G*tt,fe-_e-G*tt),Re&&Re(C,ge.tween)}}else C.isActive&&ie!==_e&&le.restart(!0)}).pause()),l&&(qu[l]=C),h=C.trigger=hn(h||d!==!0&&d),ut=h&&h._gsap&&h._gsap.stRevert,ut&&(ut=ut(C)),d=d===!0?h:hn(d),On(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Xn||(g=!g&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:Pt),C.pin=d,me=ye.core.getCache(d),me.spacer?P=me.pinState:(A&&(A=hn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),me.spacerIsNative=!!A,A&&(me.spacerState=Jo(A))),me.spacer=ee=A||xt.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),me.pinState=P=Jo(d)),n.force3D!==!1&&ye.set(d,{force3D:!0}),C.spacer=ee=me.spacer,ke=qn(d),Se=ke[g+L.os2],oe=ye.getProperty(d),Ae=ye.quickSetter(d,L.a,Xt),Vu(d,ee,ke),J=Jo(d)),B){Be=Ns(B)?_p(B,xp):xp,H=Zo("scroller-start",l,I,L,Be,0),Qe=Zo("scroller-end",l,I,L,Be,0,H),ne=H["offset"+L.op.d2];var Le=hn(Fi(I,"content")||I);at=this.markerStart=Zo("start",l,Le,L,Be,ne,0,T),nt=this.markerEnd=Zo("end",l,Le,L,Be,ne,0,T),T&&(ht=ye.quickSetter([at,nt],L.a,Xt)),!k&&!(si.length&&Fi(I,"fixedMarkers")===!0)&&(kw(O?pt:I),ye.set([H,Qe],{force3D:!0}),ve=ye.quickSetter(H,L.a,Xt),Te=ye.quickSetter(Qe,L.a,Xt))}if(T){var he=T.vars.onUpdate,Ne=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),he&&he.apply(T,Ne||[])})}if(C.previous=function(){return Xe[Xe.indexOf(C)-1]},C.next=function(){return Xe[Xe.indexOf(C)+1]},C.revert=function(_e,Ze){if(!Ze)return C.kill(!0);var Ie=_e!==!1||!C.enabled,Ue=Qt;Ie!==C.isReverted&&(Ie&&(xe=Math.max(be(),C.scroll.rec||0),V=C.progress,Ge=i&&i.progress()),at&&[at,nt,H,Qe].forEach(function(E){return E.style.display=Ie?"none":"block"}),Ie&&(Qt=C,C.update(Ie)),d&&(!w||!C.isActive)&&(Ie?Hw(d,ee,P):Vu(d,ee,qn(d),we)),Ie||C.update(Ie),Qt=Ue,C.isReverted=Ie)},C.refresh=function(_e,Ze,Ie,Ue){if(!((Qt||!C.enabled)&&!Ze)){if(d&&_e&&Yn){kt(r,"scrollEnd",Up);return}!dn&&re&&re(C),Qt=C,ge.tween&&!Ie&&(ge.tween.kill(),ge.tween=0),R&&R.pause(),p&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var E=U(),F=Q(),G=T?T.duration():ki(I,L),N=tt<=.01,q=0,fe=Ue||0,pe=Ns(Ie)?Ie.end:n.end,Re=n.endTrigger||h,Me=Ns(Ie)?Ie.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Oe=C.pinnedContainer=n.pinnedContainer&&hn(n.pinnedContainer,C),ze=h&&Math.max(0,Xe.indexOf(C))||0,De=ze,He,it,Ut,zn,Ye,Ce,gn,vt,ai,Ui,qt,gi,Et;for(B&&Ns(Ie)&&(gi=ye.getProperty(H,L.p),Et=ye.getProperty(Qe,L.p));De--;)Ce=Xe[De],Ce.end||Ce.refresh(0,1)||(Qt=C),gn=Ce.pin,gn&&(gn===h||gn===d||gn===Oe)&&!Ce.isReverted&&(Ui||(Ui=[]),Ui.unshift(Ce),Ce.revert(!0,!0)),Ce!==Xe[De]&&(ze--,De--);for(mn(Me)&&(Me=Me(C)),Me=dp(Me,"start",C),ae=bp(Me,h,E,L,be(),at,H,C,F,j,k,G,T,C._startClamp&&"_startClamp")||(d?-.001:0),mn(pe)&&(pe=pe(C)),On(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(On(Me)?Me.split(" ")[0]:"")+pe:(q=tl(pe.substr(2),E),pe=On(Me)?Me:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ae):ae)+q,Re=h)),pe=dp(pe,"end",C),$e=Math.max(ae,bp(pe||(Re?"100% 0":G),Re,E,L,be()+q,nt,Qe,C,F,j,k,G,T,C._endClamp&&"_endClamp"))||-.001,q=0,De=ze;De--;)Ce=Xe[De],gn=Ce.pin,gn&&Ce.start-Ce._pinPush<=ae&&!T&&Ce.end>0&&(He=Ce.end-(C._startClamp?Math.max(0,Ce.start):Ce.start),(gn===h&&Ce.start-Ce._pinPush<ae||gn===Oe)&&isNaN(Me)&&(q+=He*(1-Ce.progress)),gn===d&&(fe+=He));if(ae+=q,$e+=q,C._startClamp&&(C._startClamp+=q),C._endClamp&&!dn&&(C._endClamp=$e||-.001,$e=Math.min($e,ki(I,L))),tt=$e-ae||(ae-=.01)&&.001,N&&(V=ye.utils.clamp(0,1,ye.utils.normalize(ae,$e,xe))),C._pinPush=fe,at&&q&&(He={},He[L.a]="+="+q,Oe&&(He[L.p]="-="+be()),ye.set([at,nt],He)),d)He=qn(d),zn=L===Ct,Ut=be(),ue=parseFloat(oe(L.a))+fe,!G&&$e>1&&(qt=(O?xt.scrollingElement||ri:I).style,qt={style:qt,value:qt["overflow"+L.a.toUpperCase()]},O&&qn(pt)["overflow"+L.a.toUpperCase()]!=="scroll"&&(qt.style["overflow"+L.a.toUpperCase()]="scroll")),Vu(d,ee,He),J=Jo(d),it=Ni(d,!0),vt=k&&zi(I,zn?jt:Ct)(),g&&(we=[g+L.os2,tt+fe+Xt],we.t=ee,De=g===Pt?Xu(d,L)+tt+fe:0,De&&we.push(L.d,De+Xt),Nr(we),Oe&&Xe.forEach(function(wn){wn.pin===Oe&&wn.vars.pinSpacing!==!1&&(wn._subPinOffset=!0)}),k&&be(xe)),k&&(Ye={top:it.top+(zn?Ut-ae:vt)+Xt,left:it.left+(zn?vt:Ut-ae)+Xt,boxSizing:"border-box",position:"fixed"},Ye[Bs]=Ye["max"+kr]=Math.ceil(it.width)+Xt,Ye[Us]=Ye["max"+Qu]=Math.ceil(it.height)+Xt,Ye[Xn]=Ye[Xn+Ca]=Ye[Xn+Ea]=Ye[Xn+Pa]=Ye[Xn+Aa]="0",Ye[Pt]=He[Pt],Ye[Pt+Ca]=He[Pt+Ca],Ye[Pt+Ea]=He[Pt+Ea],Ye[Pt+Pa]=He[Pt+Pa],Ye[Pt+Aa]=He[Pt+Aa],S=Xw(P,Ye,w),dn&&be(0)),i?(ai=i._initted,Fu(1),i.render(i.duration(),!0,!0),K=oe(L.a)-ue+tt+fe,Ee=Math.abs(tt-K)>1,k&&Ee&&S.splice(S.length-2,2),i.render(0,!0,!0),ai||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Fu(0)):K=tt,qt&&(qt.value?qt.style["overflow"+L.a.toUpperCase()]=qt.value:qt.style.removeProperty("overflow-"+L.a));else if(h&&be()&&!T)for(it=h.parentNode;it&&it!==pt;)it._pinOffset&&(ae-=it._pinOffset,$e-=it._pinOffset),it=it.parentNode;Ui&&Ui.forEach(function(wn){return wn.revert(!1,!0)}),C.start=ae,C.end=$e,Fe=Pe=dn?xe:be(),!T&&!dn&&(Fe<xe&&be(xe),C.scroll.rec=0),C.revert(!1,!0),se=pn(),le&&(ie=-1,le.restart(!0)),Qt=0,i&&D&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),(N||V!==C.progress||T)&&(i&&!D&&i.totalProgress(T&&ae<-.001&&!V?ye.utils.normalize(ae,$e,0):V,!0),C.progress=N||(Fe-ae)/tt===V?0:V),d&&g&&(ee._pinOffset=Math.round(C.progress*K)),R&&R.invalidate(),isNaN(gi)||(gi-=ye.getProperty(H,L.p),Et-=ye.getProperty(Qe,L.p),Ko(H,L,gi),Ko(at,L,gi-(Ue||0)),Ko(Qe,L,Et),Ko(nt,L,Et-(Ue||0))),N&&!dn&&C.update(),u&&!dn&&!Bt&&(Bt=!0,u(C),Bt=!1)}},C.getVelocity=function(){return(be()-Pe)/(pn()-Qo)*1e3||0},C.endAnimation=function(){wa(C.callbackAnimation),i&&(R?R.progress(1):i.paused()?D||wa(i,C.direction<0,1):wa(i,i.reversed()))},C.labelToScroll=function(_e){return i&&i.labels&&(ae||C.refresh()||ae)+i.labels[_e]/i.duration()*tt||0},C.getTrailing=function(_e){var Ze=Xe.indexOf(C),Ie=C.direction>0?Xe.slice(0,Ze).reverse():Xe.slice(Ze+1);return(On(_e)?Ie.filter(function(Ue){return Ue.vars.preventOverlaps===_e}):Ie).filter(function(Ue){return C.direction>0?Ue.end<=ae:Ue.start>=$e})},C.update=function(_e,Ze,Ie){if(!(T&&!Ie&&!_e)){var Ue=dn===!0?xe:C.scroll(),E=_e?0:(Ue-ae)/tt,F=E<0?0:E>1?1:E||0,G=C.progress,N,q,fe,pe,Re,Me,Oe,ze;if(Ze&&(Pe=Fe,Fe=T?be():Ue,x&&(ot=et,et=i&&!D?i.totalProgress():F)),m&&!F&&d&&!Qt&&!Wo&&Yn&&ae<Ue+(Ue-Pe)/(pn()-Qo)*m&&(F=1e-4),F!==G&&C.enabled){if(N=C.isActive=!!F&&F<1,q=!!G&&G<1,Me=N!==q,Re=Me||!!F!=!!G,C.direction=F>G?1:-1,C.progress=F,Re&&!Qt&&(fe=F&&!G?0:F===1?1:G===1?2:3,D&&(pe=!Me&&W[fe+1]!=="none"&&W[fe+1]||W[fe],ze=i&&(pe==="complete"||pe==="reset"||pe in i))),M&&(Me||ze)&&(ze||f||!i)&&(mn(M)?M(C):C.getTrailing(M).forEach(function(Ut){return Ut.endAnimation()})),D||(R&&!Qt&&!Wo?(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",F,i._tTime/i._tDur):(R.vars.totalProgress=F,R.invalidate().restart())):i&&i.totalProgress(F,!!(Qt&&(se||_e)))),d){if(_e&&g&&(ee.style[g+L.os2]=Se),!k)Ae(Sa(ue+K*F));else if(Re){if(Oe=!_e&&F>G&&$e+1>Ue&&Ue+1>=ki(I,L),w)if(!_e&&(N||Oe)){var De=Ni(d,!0),He=Ue-ae;wp(d,pt,De.top+(L===Ct?He:0)+Xt,De.left+(L===Ct?0:He)+Xt)}else wp(d,ee);Nr(N||Oe?S:J),Ee&&F<1&&N||Ae(ue+(F===1&&!Oe?K:0))}}x&&!ge.tween&&!Qt&&!Wo&&le.restart(!0),a&&(Me||v&&F&&(F<1||!Nu))&&ol(a.targets).forEach(function(Ut){return Ut.classList[N||v?"add":"remove"](a.className)}),o&&!D&&!_e&&o(C),Re&&!Qt?(D&&(ze&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(C)),(Me||!Nu)&&(c&&Me&&Bu(C,c),Y[fe]&&Bu(C,Y[fe]),v&&(F===1?C.kill(!1,1):Y[fe]=0),Me||(fe=F===1?1:3,Y[fe]&&Bu(C,Y[fe]))),b&&!N&&Math.abs(C.getVelocity())>(el(b)?b:2500)&&(wa(C.callbackAnimation),R?R.progress(1):wa(i,pe==="reverse"?1:!F,1))):D&&o&&!Qt&&o(C)}if(Te){var it=T?Ue/T.duration()*(T._caScrollDist||0):Ue;ve(it+(H._isFlipped?1:0)),Te(it)}ht&&ht(-Ue/T.duration()*(T._caScrollDist||0))}},C.enable=function(_e,Ze){C.enabled||(C.enabled=!0,kt(I,"resize",Ta),O||kt(I,"scroll",Ir),re&&kt(r,"refreshInit",re),_e!==!1&&(C.progress=V=0,Fe=Pe=ie=be()),Ze!==!1&&C.refresh())},C.getTween=function(_e){return _e&&ge?ge.tween:R},C.setPositions=function(_e,Ze,Ie,Ue){if(T){var E=T.scrollTrigger,F=T.duration(),G=E.end-E.start;_e=E.start+G*_e/F,Ze=E.start+G*Ze/F}C.refresh(!1,!1,{start:pp(_e,Ie&&!!C._startClamp),end:pp(Ze,Ie&&!!C._endClamp)},Ue),C.update()},C.adjustPinSpacing=function(_e){if(we&&_e){var Ze=we.indexOf(L.d)+1;we[Ze]=parseFloat(we[Ze])+_e+Xt,we[1]=parseFloat(we[1])+_e+Xt,Nr(we)}},C.disable=function(_e,Ze){if(C.enabled&&(_e!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Ze||R&&R.pause(),xe=0,me&&(me.uncache=1),re&&Nt(r,"refreshInit",re),le&&(le.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!O)){for(var Ie=Xe.length;Ie--;)if(Xe[Ie].scroller===I&&Xe[Ie]!==C)return;Nt(I,"resize",Ta),O||Nt(I,"scroll",Ir)}},C.kill=function(_e,Ze){C.disable(_e,Ze),R&&!Ze&&R.kill(),l&&delete qu[l];var Ie=Xe.indexOf(C);Ie>=0&&Xe.splice(Ie,1),Ie===fn&&il>0&&fn--,Ie=0,Xe.forEach(function(Ue){return Ue.scroller===C.scroller&&(Ie=1)}),Ie||dn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Ze||i.kill()),at&&[at,nt,H,Qe].forEach(function(Ue){return Ue.parentNode&&Ue.parentNode.removeChild(Ue)}),La===C&&(La=0),d&&(me&&(me.uncache=1),Ie=0,Xe.forEach(function(Ue){return Ue.pin===d&&Ie++}),Ie||(me.spacer=0)),n.onKill&&n.onKill(C)},Xe.push(C),C.enable(!1,!1),ut&&ut(C),i&&i.add&&!tt){var Je=C.update;C.update=function(){C.update=Je,ae||$e||C.refresh()},ye.delayedCall(.01,C.update),tt=.01,ae=$e=0}else C.refresh();d&&Gw()},r.register=function(n){return Dr||(ye=n||Op(),Dp()&&window.document&&r.enable(),Dr=Ma),Dr},r.defaults=function(n){if(n)for(var i in n)$o[i]=n[i];return $o},r.disable=function(n,i){Ma=0,Xe.forEach(function(o){return o[i?"kill":"disable"](n)}),Nt(je,"wheel",Ir),Nt(xt,"scroll",Ir),clearInterval(Ho),Nt(xt,"touchcancel",mi),Nt(pt,"touchstart",mi),qo(Nt,xt,"pointerdown,touchstart,mousedown",mp),qo(Nt,xt,"pointerup,touchend,mouseup",gp),al.kill(),Xo(Nt);for(var s=0;s<We.length;s+=3)Yo(Nt,We[s],We[s+1]),Yo(Nt,We[s],We[s+2])},r.enable=function(){if(je=window,xt=document,ri=xt.documentElement,pt=xt.body,ye&&(ol=ye.utils.toArray,zr=ye.utils.clamp,Wu=ye.core.context||mi,Fu=ye.core.suppressOverwrites||mi,Zu=je.history.scrollRestoration||"auto",Yu=je.pageYOffset,ye.core.globals("ScrollTrigger",r),pt)){Ma=1,Fr=document.createElement("div"),Fr.style.height="100vh",Fr.style.position="absolute",Hp(),zw(),Tt.register(ye),r.isTouch=Tt.isTouch,os=Tt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kt(je,"wheel",Ir),Ap=[je,xt,ri,pt],ye.matchMedia?(r.matchMedia=function(l){var c=ye.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ye.addEventListener("matchMediaInit",function(){return th()}),ye.addEventListener("matchMediaRevert",function(){return Vp()}),ye.addEventListener("matchMedia",function(){ks(0,1),Ws("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return Uu(),Uu})):console.warn("Requires GSAP 3.11.0 or later"),Uu(),kt(xt,"scroll",Ir);var n=pt.style,i=n.borderTopStyle,s=ye.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ni(pt),Ct.m=Math.round(o.top+Ct.sc())||0,jt.m=Math.round(o.left+jt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ho=setInterval(vp,250),ye.delayedCall(.5,function(){return Wo=0}),kt(xt,"touchcancel",mi),kt(pt,"touchstart",mi),qo(kt,xt,"pointerdown,touchstart,mousedown",mp),qo(kt,xt,"pointerup,touchend,mouseup",gp),Hu=ye.utils.checkPrefix("transform"),sl.push(Hu),Dr=pn(),al=ye.delayedCall(.2,ks).pause(),Or=[xt,"visibilitychange",function(){var l=je.innerWidth,c=je.innerHeight;xt.hidden?(hp=l,fp=c):(hp!==l||fp!==c)&&Ta()},xt,"DOMContentLoaded",ks,je,"load",ks,je,"resize",Ta],Xo(kt),Xe.forEach(function(l){return l.enable(0,1)}),a=0;a<We.length;a+=3)Yo(Nt,We[a],We[a+1]),Yo(Nt,We[a],We[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Nu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ho)||(Ho=i)&&setInterval(vp,i),"ignoreMobileResize"in n&&(Lp=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xo(Nt)||Xo(kt,n.autoRefreshEvents||"none"),Pp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=hn(n),o=We.indexOf(s),a=Gs(s);~o&&We.splice(o,a?6:2),i&&(a?si.unshift(je,i,pt,i,ri,i):si.unshift(s,i))},r.clearMatchMedia=function(n){Xe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?hn(n):n).getBoundingClientRect(),a=o[s?Bs:Us]*i||0;return s?o.right-a>0&&o.left+a<je.innerWidth:o.bottom-a>0&&o.top+a<je.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=hn(n));var o=n.getBoundingClientRect(),a=o[s?Bs:Us],l=i==null?a/2:i in ll?ll[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/je.innerWidth:(o.top+l)/je.innerHeight},r.killAll=function(n){if(Xe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hs.killAll||[];Hs={},i.forEach(function(s){return s()})}},r}();qe.version="3.12.2";qe.saveStyles=function(r){return r?ol(r).forEach(function(e){if(e&&e.style){var t=Dn.indexOf(e);t>=0&&Dn.splice(t,5),Dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Wu())}}):Dn};qe.revert=function(r,e){return th(!r,e)};qe.create=function(r,e){return new qe(r,e)};qe.refresh=function(r){return r?Ta():(Dr||qe.register())&&ks(!0)};qe.update=function(r){return++We.cache&&Bi(r===!0?2:0)};qe.clearScrollMemory=Gp;qe.maxScroll=function(r,e){return ki(r,e?jt:Ct)};qe.getScrollFunc=function(r,e){return zi(hn(r),e?jt:Ct)};qe.getById=function(r){return qu[r]};qe.getAll=function(){return Xe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!Yn};qe.snapDirectional=eh;qe.addEventListener=function(r,e){var t=Hs[r]||(Hs[r]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(r,e){var t=Hs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=ye.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(s)&&(s=s(),kt(qe,"refresh",function(){return s=e.batchMax()})),ol(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(qe.create(c))}),t};var Sp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Tt.isTouch?" pinch-zoom":""):"none",e===ri&&r(pt,t)},jo={auto:1,scroll:1},Yw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ye.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jo[(l=qn(s)).overflowY]||jo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gs(s)&&(jo[(l=qn(s)).overflowY]||jo[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Xp=function(e,t,n,i){return Tt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Yw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&kt(xt,Tt.eventTypes[0],Ep,!1,!0)},onDisable:function(){return Nt(xt,Tt.eventTypes[0],Ep,!0)}})},$w=/(input|label|select|textarea)/i,Tp,Ep=function(e){var t=$w.test(e.target.tagName);(t||Tp)&&(e._gsapAllow=!0,Tp=t)},Zw=function(e){Ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=hn(e.target)||ri,u=ye.core.globals().ScrollSmoother,f=u&&u.get(),h=os&&(e.content&&hn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=zi(c,Ct),g=zi(c,jt),p=1,m=(Tt.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,_=0,y=mn(i)?function(){return i(a)}:function(){return i||2.8},v,x,w=Xp(c,e.type,!0,s),A=function(){return x=!1},T=mi,b=mi,M=function(){l=ki(c,Ct),b=zr(os?1:0,l),n&&(T=zr(0,ki(c,jt))),v=Vs},L=function(){h._gsap.y=Sa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(A);var B=Sa(a.deltaY/2),j=b(d.v-B);if(h&&j!==d.v+d.offset){d.offset=j-d.v;var C=Sa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=We.cache,Bi()}return!0}d.offset&&L(),x=!0},I,z,O,k,Y=function(){M(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&ye.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return os&&W.type==="touchmove"&&D(W)||p>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){x=!1;var W=p;p=Sa((je.visualViewport&&je.visualViewport.scale||1)/m),I.pause(),W!==p&&Gu(c,p>1.01?!0:n?!1:"x"),z=g(),O=d(),M(),v=Vs},e.onRelease=e.onGestureStart=function(W,B){if(d.offset&&L(),!B)k.restart(!0);else{We.cache++;var j=y(),C,re;n&&(C=g(),re=C+j*.05*-W.velocityX/.227,j*=Sp(g,C,re,ki(c,jt)),I.vars.scrollX=T(re)),C=d(),re=C+j*.05*-W.velocityY/.227,j*=Sp(d,C,re,ki(c,Ct)),I.vars.scrollY=b(re),I.invalidate().duration(j).play(.01),(os&&I.vars.scrollY>=l||C>=l-1)&&ye.to({},{onUpdate:Y,duration:j})}o&&o(W)},e.onWheel=function(){I._ts&&I.pause(),pn()-_>1e3&&(v=0,_=pn())},e.onChange=function(W,B,j,C,re){if(Vs!==v&&M(),B&&n&&g(T(C[2]===B?z+(W.startX-W.x):g()+B-C[1])),j){d.offset&&L();var U=re[2]===j,Q=U?O+W.startY-W.y:d()+j-re[1],ie=b(Q);U&&Q!==ie&&(O+=ie-Q),d(ie)}(j||B)&&Bi()},e.onEnable=function(){Gu(c,n?!1:"x"),qe.addEventListener("refresh",Y),kt(je,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Gu(c,!0),Nt(je,"resize",Y),qe.removeEventListener("refresh",Y),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Tt(e),a.iOS=os,os&&!d()&&d(1),os&&ye.ticker.add(mi),k=a._dc,I=ye.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Wp(d,d(),function(){return I.pause()})},onUpdate:Bi,onComplete:k.vars.onComplete}),a};qe.sort=function(r){return Xe.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};qe.observe=function(r){return new Tt(r)};qe.normalizeScroll=function(r){if(typeof r=="undefined")return In;if(r===!0&&In)return In.enable();if(r===!1)return In&&In.kill();var e=r instanceof Tt?r:Zw(r);return In&&In.target===e.target&&In.kill(),Gs(e.target)&&(In=e),e};qe.core={_getVelocityProp:Go,_inputObserver:Xp,_scrollers:We,_proxies:si,bridge:{ss:function(){Yn||Ws("scrollStart"),Yn=pn()},ref:function(){return Qt}}};Op()&&ye.registerPlugin(qe);pi.registerPlugin(qe);window.addEventListener("DOMContentLoaded",()=>{function r(e,t){let n=typeof e;return typeof t!="string"||t.trim()===""?e:t==="true"&&n==="boolean"?!0:t==="false"&&n==="boolean"?!1:isNaN(Number(t))&&n==="string"?t:!isNaN(Number(t))&&n==="number"?+t:e}$("[tr-marquee-element='component']").each(function(){let e=$(this),t=e.find("[tr-marquee-element='panel']"),n=e.find("[tr-marquee-element='triggerhover']"),i=e.find("[tr-marquee-element='triggerclick']"),s=r(!1,e.attr("tr-marquee-vertical")),o=r(!1,e.attr("tr-marquee-reverse")),a=r(!1,e.attr("tr-marquee-scrolldirection")),l=r(!1,e.attr("tr-marquee-scrollscrub")),c=r(100,e.attr("tr-marquee-speed")),u=-100,f=1,h=!1;o&&(u=100);function d(){g.progress(1)}let g=pi.timeline({repeat:-1,onReverseComplete:d});s?(c=Number(t.first().height())/c,g.fromTo(t,{yPercent:0},{yPercent:u,ease:"none",duration:c})):(c=Number(t.first().width())/c,g.fromTo(t,{xPercent:0},{xPercent:u,ease:"none",duration:c}));let p={value:1};function m(){g.timeScale(p.value)}qe.create({trigger:"body",start:"top top",end:"bottom bottom",onUpdate:y=>{if(!h&&(a&&f!==y.direction&&(f=y.direction,g.timeScale(y.direction)),l)){let v=y.getVelocity()*.006;v=pi.utils.clamp(-60,60,v),pi.timeline({onUpdate:m}).fromTo(p,{value:v},{value:f,duration:.5})}}});function _(y){h=y;let v={value:1};function x(){g.timeScale(v.value)}let w=pi.timeline({onUpdate:x});y?(w.fromTo(v,{value:f},{value:0,duration:.5}),i.addClass("is-paused")):(w.fromTo(v,{value:0},{value:f,duration:.5}),i.removeClass("is-paused"))}window.matchMedia("(pointer: fine)").matches&&(n.on("mouseenter",()=>_(!0)),n.on("mouseleave",()=>_(!1))),i.on("click",function(){$(this).hasClass("is-paused")?_(!1):_(!0)})})});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
