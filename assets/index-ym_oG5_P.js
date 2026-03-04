(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Ih={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function pA(){if(Ox)return Ll;Ox=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return Ll.Fragment=t,Ll.jsx=n,Ll.jsxs=n,Ll}var Fx;function mA(){return Fx||(Fx=1,Ih.exports=pA()),Ih.exports}var ot=mA(),Bh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function gA(){if(Ix)return ce;Ix=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function y(I,j,_t){this.props=I,this.context=j,this.refs=S,this.updater=_t||b}y.prototype.isReactComponent={},y.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=y.prototype;function R(I,j,_t){this.props=I,this.context=j,this.refs=S,this.updater=_t||b}var D=R.prototype=new w;D.constructor=R,A(D,y.prototype),D.isPureReactComponent=!0;var N=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function L(I,j,_t){var wt=_t.ref;return{$$typeof:i,type:I,key:j,ref:wt!==void 0?wt:null,props:_t}}function at(I,j){return L(I.type,j,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function K(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return j[_t]})}var $=/\/+/g;function ct(I,j){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):j.toString(36)}function J(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,j,_t,wt,Rt){var Z=typeof I;(Z==="undefined"||Z==="boolean")&&(I=null);var gt=!1;if(I===null)gt=!0;else switch(Z){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(I.$$typeof){case i:case t:gt=!0;break;case g:return gt=I._init,P(gt(I._payload),j,_t,wt,Rt)}}if(gt)return Rt=Rt(I),gt=wt===""?"."+ct(I,0):wt,N(Rt)?(_t="",gt!=null&&(_t=gt.replace($,"$&/")+"/"),P(Rt,j,_t,"",function($t){return $t})):Rt!=null&&(V(Rt)&&(Rt=at(Rt,_t+(Rt.key==null||I&&I.key===Rt.key?"":(""+Rt.key).replace($,"$&/")+"/")+gt)),j.push(Rt)),1;gt=0;var bt=wt===""?".":wt+":";if(N(I))for(var Dt=0;Dt<I.length;Dt++)wt=I[Dt],Z=bt+ct(wt,Dt),gt+=P(wt,j,_t,Z,Rt);else if(Dt=x(I),typeof Dt=="function")for(I=Dt.call(I),Dt=0;!(wt=I.next()).done;)wt=wt.value,Z=bt+ct(wt,Dt++),gt+=P(wt,j,_t,Z,Rt);else if(Z==="object"){if(typeof I.then=="function")return P(J(I),j,_t,wt,Rt);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return gt}function z(I,j,_t){if(I==null)return I;var wt=[],Rt=0;return P(I,wt,"","",function(Z){return j.call(_t,Z,Rt++)}),wt}function Q(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},it={map:z,forEach:function(I,j,_t){z(I,function(){j.apply(this,arguments)},_t)},count:function(I){var j=0;return z(I,function(){j++}),j},toArray:function(I){return z(I,function(j){return j})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ce.Activity=_,ce.Children=it,ce.Component=y,ce.Fragment=n,ce.Profiler=o,ce.PureComponent=R,ce.StrictMode=s,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},ce.cache=function(I){return function(){return I.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(I,j,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var wt=A({},I.props),Rt=I.key;if(j!=null)for(Z in j.key!==void 0&&(Rt=""+j.key),j)!E.call(j,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&j.ref===void 0||(wt[Z]=j[Z]);var Z=arguments.length-2;if(Z===1)wt.children=_t;else if(1<Z){for(var gt=Array(Z),bt=0;bt<Z;bt++)gt[bt]=arguments[bt+2];wt.children=gt}return L(I.type,Rt,wt)},ce.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ce.createElement=function(I,j,_t){var wt,Rt={},Z=null;if(j!=null)for(wt in j.key!==void 0&&(Z=""+j.key),j)E.call(j,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Rt[wt]=j[wt]);var gt=arguments.length-2;if(gt===1)Rt.children=_t;else if(1<gt){for(var bt=Array(gt),Dt=0;Dt<gt;Dt++)bt[Dt]=arguments[Dt+2];Rt.children=bt}if(I&&I.defaultProps)for(wt in gt=I.defaultProps,gt)Rt[wt]===void 0&&(Rt[wt]=gt[wt]);return L(I,Z,Rt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(I){return{$$typeof:f,render:I}},ce.isValidElement=V,ce.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:Q}},ce.memo=function(I,j){return{$$typeof:p,type:I,compare:j===void 0?null:j}},ce.startTransition=function(I){var j=O.T,_t={};O.T=_t;try{var wt=I(),Rt=O.S;Rt!==null&&Rt(_t,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(F,ft)}catch(Z){ft(Z)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),O.T=j}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(I){return O.H.use(I)},ce.useActionState=function(I,j,_t){return O.H.useActionState(I,j,_t)},ce.useCallback=function(I,j){return O.H.useCallback(I,j)},ce.useContext=function(I){return O.H.useContext(I)},ce.useDebugValue=function(){},ce.useDeferredValue=function(I,j){return O.H.useDeferredValue(I,j)},ce.useEffect=function(I,j){return O.H.useEffect(I,j)},ce.useEffectEvent=function(I){return O.H.useEffectEvent(I)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(I,j,_t){return O.H.useImperativeHandle(I,j,_t)},ce.useInsertionEffect=function(I,j){return O.H.useInsertionEffect(I,j)},ce.useLayoutEffect=function(I,j){return O.H.useLayoutEffect(I,j)},ce.useMemo=function(I,j){return O.H.useMemo(I,j)},ce.useOptimistic=function(I,j){return O.H.useOptimistic(I,j)},ce.useReducer=function(I,j,_t){return O.H.useReducer(I,j,_t)},ce.useRef=function(I){return O.H.useRef(I)},ce.useState=function(I){return O.H.useState(I)},ce.useSyncExternalStore=function(I,j,_t){return O.H.useSyncExternalStore(I,j,_t)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.2.4",ce}var Bx;function sg(){return Bx||(Bx=1,Bh.exports=gA()),Bh.exports}var Mt=sg(),zh={exports:{}},Ul={},Vh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zx;function vA(){return zx||(zx=1,(function(i){function t(P,z){var Q=P.length;P.push(z);t:for(;0<Q;){var ft=Q-1>>>1,it=P[ft];if(0<o(it,z))P[ft]=z,P[Q]=it,Q=ft;else break t}}function n(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var z=P[0],Q=P.pop();if(Q!==z){P[0]=Q;t:for(var ft=0,it=P.length,I=it>>>1;ft<I;){var j=2*(ft+1)-1,_t=P[j],wt=j+1,Rt=P[wt];if(0>o(_t,Q))wt<it&&0>o(Rt,_t)?(P[ft]=Rt,P[wt]=Q,ft=wt):(P[ft]=_t,P[j]=Q,ft=j);else if(wt<it&&0>o(Rt,Q))P[ft]=Rt,P[wt]=Q,ft=wt;else break t}}return z}function o(P,z){var Q=P.sortIndex-z.sortIndex;return Q!==0?Q:P.id-z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,_=null,v=3,x=!1,b=!1,A=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var z=n(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=P)s(p),z.sortIndex=z.expirationTime,t(h,z);else break;z=n(p)}}function N(P){if(A=!1,D(P),!b)if(n(h)!==null)b=!0,F||(F=!0,K());else{var z=n(p);z!==null&&J(N,z.startTime-P)}}var F=!1,O=-1,E=5,L=-1;function at(){return S?!0:!(i.unstable_now()-L<E)}function V(){if(S=!1,F){var P=i.unstable_now();L=P;var z=!0;try{t:{b=!1,A&&(A=!1,w(O),O=-1),x=!0;var Q=v;try{e:{for(D(P),_=n(h);_!==null&&!(_.expirationTime>P&&at());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var it=ft(_.expirationTime<=P);if(P=i.unstable_now(),typeof it=="function"){_.callback=it,D(P),z=!0;break e}_===n(h)&&s(h),D(P)}else s(h);_=n(h)}if(_!==null)z=!0;else{var I=n(p);I!==null&&J(N,I.startTime-P),z=!1}}break t}finally{_=null,v=Q,x=!1}z=void 0}}finally{z?K():F=!1}}}var K;if(typeof R=="function")K=function(){R(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=V,K=function(){ct.postMessage(null)}}else K=function(){y(V,0)};function J(P,z){O=y(function(){P(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(P){P.callback=null},i.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_next=function(P){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var Q=v;v=z;try{return P()}finally{v=Q}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=v;v=P;try{return z()}finally{v=Q}},i.unstable_scheduleCallback=function(P,z,Q){var ft=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ft+Q:ft):Q=ft,P){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=Q+it,P={id:g++,callback:z,priorityLevel:P,startTime:Q,expirationTime:it,sortIndex:-1},Q>ft?(P.sortIndex=Q,t(p,P),n(h)===null&&P===n(p)&&(A?(w(O),O=-1):A=!0,J(N,Q-ft))):(P.sortIndex=it,t(h,P),b||x||(b=!0,F||(F=!0,K()))),P},i.unstable_shouldYield=at,i.unstable_wrapCallback=function(P){var z=v;return function(){var Q=v;v=z;try{return P.apply(this,arguments)}finally{v=Q}}}})(Hh)),Hh}var Vx;function _A(){return Vx||(Vx=1,Vh.exports=vA()),Vh.exports}var Gh={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx;function xA(){if(Hx)return In;Hx=1;var i=sg();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(h,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:h,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(h,p,null,g)},In.flushSync=function(h){var p=u.T,g=s.p;try{if(u.T=null,s.p=2,h)return h()}finally{u.T=p,s.p=g,s.d.f()}},In.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(h,p))},In.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},In.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&s.d.X(h,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);s.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(h)},In.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);s.d.L(h,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);s.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(h)},In.requestFormReset=function(h){s.d.r(h)},In.unstable_batchedUpdates=function(h,p){return h(p)},In.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.2.4",In}var Gx;function yA(){if(Gx)return Gh.exports;Gx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Gh.exports=xA(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function SA(){if(kx)return Ul;kx=1;var i=_A(),t=sg(),n=yA();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function p(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){r=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return h(d),e;if(m===l)return h(d),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=d,l=m;else{for(var M=!1,C=d.child;C;){if(C===r){M=!0,r=d,l=m;break}if(C===l){M=!0,l=d,r=m;break}C=C.sibling}if(!M){for(C=m.child;C;){if(C===r){M=!0,r=m,l=d;break}if(C===l){M=!0,l=m,r=d;break}C=C.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case R:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case D:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return a=e.displayName||null,a!==null?a:ct(e.type)||"Memo";case E:a=e._payload,e=e._init;try{return ct(e(a))}catch{}}return null}var J=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ft=[],it=-1;function I(e){return{current:e}}function j(e){0>it||(e.current=ft[it],ft[it]=null,it--)}function _t(e,a){it++,ft[it]=e.current,e.current=a}var wt=I(null),Rt=I(null),Z=I(null),gt=I(null);function bt(e,a){switch(_t(Z,a),_t(Rt,e),_t(wt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?ax(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=ax(a),e=sx(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(wt),_t(wt,e)}function Dt(){j(wt),j(Rt),j(Z)}function $t(e){e.memoizedState!==null&&_t(gt,e);var a=wt.current,r=sx(a,e.type);a!==r&&(_t(Rt,e),_t(wt,r))}function ee(e){Rt.current===e&&(j(wt),j(Rt)),gt.current===e&&(j(gt),wl._currentValue=Q)}var qe,_e;function de(e){if(qe===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);qe=a&&a[1]||"",_e=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+_e}var Pe=!1;function fe(e,a){if(!e||Pe)return"";Pe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(dt){var rt=dt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(dt){rt=dt}e.call(yt.prototype)}}else{try{throw Error()}catch(dt){rt=dt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(dt){if(dt&&rt&&typeof dt.stack=="string")return[dt.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],C=m[1];if(M&&C){var H=M.split(`
`),nt=C.split(`
`);for(d=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;d<nt.length&&!nt[d].includes("DetermineComponentFrameRoot");)d++;if(l===H.length||d===nt.length)for(l=H.length-1,d=nt.length-1;1<=l&&0<=d&&H[l]!==nt[d];)d--;for(;1<=l&&0<=d;l--,d--)if(H[l]!==nt[d]){if(l!==1||d!==1)do if(l--,d--,0>d||H[l]!==nt[d]){var mt=`
`+H[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=d);break}}}finally{Pe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?de(r):""}function an(e,a){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==a&&a!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return de("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=an(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Je=Object.prototype.hasOwnProperty,we=i.unstable_scheduleCallback,Ie=i.unstable_cancelCallback,Zt=i.unstable_shouldYield,B=i.unstable_requestPaint,T=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,vt=i.unstable_ImmediatePriority,St=i.unstable_UserBlockingPriority,pt=i.unstable_NormalPriority,qt=i.unstable_LowPriority,Ut=i.unstable_IdlePriority,te=i.log,ae=i.unstable_setDisableYieldValue,At=null,Et=null;function It(e){if(typeof te=="function"&&ae(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(At,e)}catch{}}var Ft=Math.clz32?Math.clz32:W,Bt=Math.log,pe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Bt(e)/pe|0)|0}var Lt=256,Ct=262144,zt=4194304;function Tt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?d=Tt(l):(M&=C,M!==0?d=Tt(M):r||(r=C&~e,r!==0&&(d=Tt(r))))):(C=l&~m,C!==0?d=Tt(C):M!==0?d=Tt(M):r||(r=l&~e,r!==0&&(d=Tt(r)))),d===0?0:a!==0&&a!==d&&(a&m)===0&&(m=d&-d,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:d}function Ht(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function re(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Re(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Hn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ni(e,a,r,l,d,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(r=M&~r;0<r;){var mt=31-Ft(r),yt=1<<mt;C[mt]=0,H[mt]=-1;var rt=nt[mt];if(rt!==null)for(nt[mt]=null,mt=0;mt<rt.length;mt++){var dt=rt[mt];dt!==null&&(dt.lane&=-536870913)}r&=~yt}l!==0&&Go(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function Go(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Ft(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Mr(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Ft(r),d=1<<l;d&a|e[l]&a&&(e[l]|=a),r&=~d}}function fc(e,a){var r=a&-a;return r=(r&42)!==0?1:Er(r),(r&(e.suspendedLanes|a))!==0?0:r}function Er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Rx(e.type))}function Ar(e,a){var r=z.p;try{return z.p=e,a()}finally{z.p=r}}var Pi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Pi,bn="__reactProps$"+Pi,pa="__reactContainer$"+Pi,Ka="__reactEvents$"+Pi,dc="__reactListeners$"+Pi,hc="__reactHandles$"+Pi,pc="__reactResources$"+Pi,Bs="__reactMarker$"+Pi;function ko(e){delete e[fn],delete e[bn],delete e[Ka],delete e[dc],delete e[hc]}function Za(e){var a=e[fn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[pa]||r[fn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=dx(e);e!==null;){if(r=e[fn])return r;e=dx(e)}return a}e=r,r=e.parentNode}return null}function Qa(e){if(e=e[fn]||e[pa]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function zs(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function U(e){var a=e[pc];return a||(a=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function X(e){e[Bs]=!0}var ut=new Set,st={};function tt(e,a){Nt(e,a),Nt(e+"Capture",a)}function Nt(e,a){for(st[e]=a,e=0;e<a.length;e++)ut.add(a[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pt={},Yt={};function Jt(e){return Je.call(Yt,e)?!0:Je.call(Pt,e)?!1:Vt.test(e)?Yt[e]=!0:(Pt[e]=!0,!1)}function se(e,a,r){if(Jt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function le(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Gt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function tn(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return d.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function De(e){if(!e._valueTracker){var a=$e(e)?"checked":"value";e._valueTracker=tn(e,a,""+e[a])}}function Mn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=$e(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function oe(e){return e.replace(Gn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function kn(e,a,r,l,d,m,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+me(a)):e.value!==""+me(a)&&(e.value=""+me(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Oi(e,M,me(a)):r!=null?Oi(e,M,me(r)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+me(C):e.removeAttribute("name")}function si(e,a,r,l,d,m,M,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){De(e);return}r=r!=null?""+me(r):"",a=a!=null?""+me(a):r,C||a===e.value||(e.value=a),e.defaultValue=a}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),De(e)}function Oi(e,a,r){a==="number"&&Xt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ri(e,a,r,l){if(e=e.options,a){a={};for(var d=0;d<r.length;d++)a["$"+r[d]]=!0;for(r=0;r<e.length;r++)d=a.hasOwnProperty("$"+e[r].value),e[r].selected!==d&&(e[r].selected=d),d&&l&&(e[r].defaultSelected=!0)}else{for(r=""+me(r),a=null,d=0;d<e.length;d++){if(e[d].value===r){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}a!==null||e[d].disabled||(a=e[d])}a!==null&&(a.selected=!0)}}function Be(e,a,r){if(a!=null&&(a=""+me(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+me(r):""}function dn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(J(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=me(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),De(e)}function Xn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var hn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fi(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||hn.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function ma(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in a)l=a[d],a.hasOwnProperty(d)&&r[d]!==l&&Fi(e,d,l)}else for(var m in a)a.hasOwnProperty(m)&&Fi(e,m,a[m])}function wr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mc(e){return fT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ga(){}var Pf=null;function Of(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Cr=null;function i0(e){var a=Qa(e);if(a&&(e=a.stateNode)){var r=e[bn]||null;t:switch(e=a.stateNode,a.type){case"input":if(kn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+oe(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var d=l[bn]||null;if(!d)throw Error(s(90));kn(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Mn(l)}break t;case"textarea":Be(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&ri(e,!!r.multiple,a,!1)}}}var Ff=!1;function a0(e,a,r){if(Ff)return e(a,r);Ff=!0;try{var l=e(a);return l}finally{if(Ff=!1,(Rr!==null||Cr!==null)&&(nu(),Rr&&(a=Rr,e=Cr,Cr=Rr=null,i0(a),e)))for(a=0;a<e.length;a++)i0(e[a])}}function Xo(e,a){var r=e.stateNode;if(r===null)return null;var l=r[bn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=!1;if(va)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){If=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{If=!1}var Ja=null,Bf=null,gc=null;function s0(){if(gc)return gc;var e,a=Bf,r=a.length,l,d="value"in Ja?Ja.value:Ja.textContent,m=d.length;for(e=0;e<r&&a[e]===d[e];e++);var M=r-e;for(l=1;l<=M&&a[r-l]===d[m-l];l++);return gc=d.slice(e,1<l?1-l:void 0)}function vc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function _c(){return!0}function r0(){return!1}function Zn(e){function a(r,l,d,m,M){this._reactName=r,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_c:r0,this.isPropagationStopped=r0,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_c)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_c)},persist:function(){},isPersistent:_c}),a}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Zn(Vs),jo=_({},Vs,{view:0,detail:0}),dT=Zn(jo),zf,Vf,qo,yc=_({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qo&&(qo&&e.type==="mousemove"?(zf=e.screenX-qo.screenX,Vf=e.screenY-qo.screenY):Vf=zf=0,qo=e),zf)},movementY:function(e){return"movementY"in e?e.movementY:Vf}}),o0=Zn(yc),hT=_({},yc,{dataTransfer:0}),pT=Zn(hT),mT=_({},jo,{relatedTarget:0}),Hf=Zn(mT),gT=_({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),vT=Zn(gT),_T=_({},Vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xT=Zn(_T),yT=_({},Vs,{data:0}),l0=Zn(yT),ST={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ET(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=MT[e])?!!a[e]:!1}function Gf(){return ET}var TT=_({},jo,{key:function(e){if(e.key){var a=ST[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=vc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(e){return e.type==="keypress"?vc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AT=Zn(TT),wT=_({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c0=Zn(wT),RT=_({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),CT=Zn(RT),DT=_({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),LT=Zn(DT),UT=_({},yc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=Zn(UT),PT=_({},Vs,{newState:0,oldState:0}),OT=Zn(PT),FT=[9,13,27,32],kf=va&&"CompositionEvent"in window,Yo=null;va&&"documentMode"in document&&(Yo=document.documentMode);var IT=va&&"TextEvent"in window&&!Yo,u0=va&&(!kf||Yo&&8<Yo&&11>=Yo),f0=" ",d0=!1;function h0(e,a){switch(e){case"keyup":return FT.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function BT(e,a){switch(e){case"compositionend":return p0(a);case"keypress":return a.which!==32?null:(d0=!0,f0);case"textInput":return e=a.data,e===f0&&d0?null:e;default:return null}}function zT(e,a){if(Dr)return e==="compositionend"||!kf&&h0(e,a)?(e=s0(),gc=Bf=Ja=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return u0&&a.locale!=="ko"?null:a.data;default:return null}}var VT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m0(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!VT[e.type]:a==="textarea"}function g0(e,a,r,l){Rr?Cr?Cr.push(l):Cr=[l]:Rr=l,a=cu(a,"onChange"),0<a.length&&(r=new xc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Ko=null,Zo=null;function HT(e){J_(e,0)}function Sc(e){var a=zs(e);if(Mn(a))return e}function v0(e,a){if(e==="change")return a}var _0=!1;if(va){var Xf;if(va){var Wf="oninput"in document;if(!Wf){var x0=document.createElement("div");x0.setAttribute("oninput","return;"),Wf=typeof x0.oninput=="function"}Xf=Wf}else Xf=!1;_0=Xf&&(!document.documentMode||9<document.documentMode)}function y0(){Ko&&(Ko.detachEvent("onpropertychange",S0),Zo=Ko=null)}function S0(e){if(e.propertyName==="value"&&Sc(Zo)){var a=[];g0(a,Zo,e,Of(e)),a0(HT,a)}}function GT(e,a,r){e==="focusin"?(y0(),Ko=a,Zo=r,Ko.attachEvent("onpropertychange",S0)):e==="focusout"&&y0()}function kT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(Zo)}function XT(e,a){if(e==="click")return Sc(a)}function WT(e,a){if(e==="input"||e==="change")return Sc(a)}function jT(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var oi=typeof Object.is=="function"?Object.is:jT;function Qo(e,a){if(oi(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var d=r[l];if(!Je.call(a,d)||!oi(e[d],a[d]))return!1}return!0}function b0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function M0(e,a){var r=b0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=b0(r)}}function E0(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?E0(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function T0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Xt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Xt(e.document)}return a}function jf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var qT=va&&"documentMode"in document&&11>=document.documentMode,Lr=null,qf=null,Jo=null,Yf=!1;function A0(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yf||Lr==null||Lr!==Xt(l)||(l=Lr,"selectionStart"in l&&jf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jo&&Qo(Jo,l)||(Jo=l,l=cu(qf,"onSelect"),0<l.length&&(a=new xc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=Lr)))}function Hs(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Ur={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Kf={},w0={};va&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Gs(e){if(Kf[e])return Kf[e];if(!Ur[e])return e;var a=Ur[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in w0)return Kf[e]=a[r];return e}var R0=Gs("animationend"),C0=Gs("animationiteration"),D0=Gs("animationstart"),YT=Gs("transitionrun"),KT=Gs("transitionstart"),ZT=Gs("transitioncancel"),L0=Gs("transitionend"),U0=new Map,Zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zf.push("scrollEnd");function Ii(e,a){U0.set(e,a),tt(a,[e])}var bc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],Nr=0,Qf=0;function Mc(){for(var e=Nr,a=Qf=Nr=0;a<e;){var r=_i[a];_i[a++]=null;var l=_i[a];_i[a++]=null;var d=_i[a];_i[a++]=null;var m=_i[a];if(_i[a++]=null,l!==null&&d!==null){var M=l.pending;M===null?d.next=d:(d.next=M.next,M.next=d),l.pending=d}m!==0&&N0(r,d,m)}}function Ec(e,a,r,l){_i[Nr++]=e,_i[Nr++]=a,_i[Nr++]=r,_i[Nr++]=l,Qf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Jf(e,a,r,l){return Ec(e,a,r,l),Tc(e)}function ks(e,a){return Ec(e,null,null,a),Tc(e)}function N0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var d=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&a!==null&&(d=31-Ft(r),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[a]:l.push(a),a.lane=r|536870912),m):null}function Tc(e){if(50<yl)throw yl=0,oh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Pr={};function QT(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,a,r,l){return new QT(e,a,r,l)}function $f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,a){var r=e.alternate;return r===null?(r=li(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function P0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ac(e,a,r,l,d,m){var M=0;if(l=e,typeof e=="function")$f(e)&&(M=1);else if(typeof e=="string")M=nA(e,r,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=li(31,r,a,d),e.elementType=L,e.lanes=m,e;case A:return Xs(r.children,d,m,a);case S:M=8,d|=24;break;case y:return e=li(12,r,a,d|2),e.elementType=y,e.lanes=m,e;case N:return e=li(13,r,a,d),e.elementType=N,e.lanes=m,e;case F:return e=li(19,r,a,d),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:M=10;break t;case w:M=9;break t;case D:M=11;break t;case O:M=14;break t;case E:M=16,l=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=li(M,r,a,d),a.elementType=e,a.type=l,a.lanes=m,a}function Xs(e,a,r,l){return e=li(7,e,l,a),e.lanes=r,e}function td(e,a,r){return e=li(6,e,null,a),e.lanes=r,e}function O0(e){var a=li(18,null,null,0);return a.stateNode=e,a}function ed(e,a,r){return a=li(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var F0=new WeakMap;function xi(e,a){if(typeof e=="object"&&e!==null){var r=F0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},F0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var Or=[],Fr=0,wc=null,$o=0,yi=[],Si=0,$a=null,Qi=1,Ji="";function xa(e,a){Or[Fr++]=$o,Or[Fr++]=wc,wc=e,$o=a}function I0(e,a,r){yi[Si++]=Qi,yi[Si++]=Ji,yi[Si++]=$a,$a=e;var l=Qi;e=Ji;var d=32-Ft(l)-1;l&=~(1<<d),r+=1;var m=32-Ft(a)+d;if(30<m){var M=d-d%5;m=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Qi=1<<32-Ft(a)+d|r<<d|l,Ji=m+e}else Qi=1<<m|r<<d|l,Ji=e}function nd(e){e.return!==null&&(xa(e,1),I0(e,1,0))}function id(e){for(;e===wc;)wc=Or[--Fr],Or[Fr]=null,$o=Or[--Fr],Or[Fr]=null;for(;e===$a;)$a=yi[--Si],yi[Si]=null,Ji=yi[--Si],yi[Si]=null,Qi=yi[--Si],yi[Si]=null}function B0(e,a){yi[Si++]=Qi,yi[Si++]=Ji,yi[Si++]=$a,Qi=a.id,Ji=a.overflow,$a=e}var Ln=null,Ze=null,Te=!1,ts=null,bi=!1,ad=Error(s(519));function es(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(xi(a,e)),ad}function z0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[fn]=e,a[bn]=l,r){case"dialog":be("cancel",a),be("close",a);break;case"iframe":case"object":case"embed":be("load",a);break;case"video":case"audio":for(r=0;r<bl.length;r++)be(bl[r],a);break;case"source":be("error",a);break;case"img":case"image":case"link":be("error",a),be("load",a);break;case"details":be("toggle",a);break;case"input":be("invalid",a),si(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":be("invalid",a);break;case"textarea":be("invalid",a),dn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||nx(a.textContent,r)?(l.popover!=null&&(be("beforetoggle",a),be("toggle",a)),l.onScroll!=null&&be("scroll",a),l.onScrollEnd!=null&&be("scrollend",a),l.onClick!=null&&(a.onclick=ga),a=!0):a=!1,a||es(e,!0)}function V0(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Ln=Ln.return}}function Ir(e){if(e!==Ln)return!1;if(!Te)return V0(e),Te=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||bh(e.type,e.memoizedProps)),r=!r),r&&Ze&&es(e),V0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=fx(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=fx(e)}else a===27?(a=Ze,ms(e.type)?(e=wh,wh=null,Ze=e):Ze=a):Ze=Ln?Ei(e.stateNode.nextSibling):null;return!0}function Ws(){Ze=Ln=null,Te=!1}function sd(){var e=ts;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),ts=null),e}function tl(e){ts===null?ts=[e]:ts.push(e)}var rd=I(null),js=null,ya=null;function ns(e,a,r){_t(rd,a._currentValue),a._currentValue=r}function Sa(e){e._currentValue=rd.current,j(rd)}function od(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function ld(e,a,r,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var M=d.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=d;for(var H=0;H<a.length;H++)if(C.context===a[H]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),od(m.return,r,e),l||(M=null);break t}m=C.next}}else if(d.tag===18){if(M=d.return,M===null)throw Error(s(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),od(M,r,e),M=null}else M=d.child;if(M!==null)M.return=d;else for(M=d;M!==null;){if(M===e){M=null;break}if(d=M.sibling,d!==null){d.return=M.return,M=d;break}M=M.return}d=M}}function Br(e,a,r,l){e=null;for(var d=a,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var M=d.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=d.type;oi(d.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(d===gt.current){if(M=d.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}d=d.return}e!==null&&ld(a,e,r,l),a.flags|=262144}function Rc(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qs(e){js=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return H0(js,e)}function Cc(e,a){return js===null&&qs(e),H0(e,a)}function H0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ya===null){if(e===null)throw Error(s(308));ya=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ya=ya.next=a;return r}var JT=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},$T=i.unstable_scheduleCallback,t1=i.unstable_NormalPriority,pn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cd(){return{controller:new JT,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&$T(t1,function(){e.controller.abort()})}var nl=null,ud=0,zr=0,Vr=null;function e1(e,a){if(nl===null){var r=nl=[];ud=0,zr=hh(),Vr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ud++,a.then(G0,G0),a}function G0(){if(--ud===0&&nl!==null){Vr!==null&&(Vr.status="fulfilled");var e=nl;nl=null,zr=0,Vr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function n1(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var d=0;d<r.length;d++)(0,r[d])(a)},function(d){for(l.status="rejected",l.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),l}var k0=P.S;P.S=function(e,a){A_=T(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&e1(e,a),k0!==null&&k0(e,a)};var Ys=I(null);function fd(){var e=Ys.current;return e!==null?e:Ye.pooledCache}function Dc(e,a){a===null?_t(Ys,Ys.current):_t(Ys,a.pool)}function X0(){var e=fd();return e===null?null:{parent:pn._currentValue,pool:e}}var Hr=Error(s(460)),dd=Error(s(474)),Lc=Error(s(542)),Uc={then:function(){}};function W0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function j0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(ga,ga),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Y0(e),e;default:if(typeof a.status=="string")a.then(ga,ga);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=l}},function(l){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Y0(e),e}throw Zs=a,Hr}}function Ks(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Zs=r,Hr):r}}var Zs=null;function q0(){if(Zs===null)throw Error(s(459));var e=Zs;return Zs=null,e}function Y0(e){if(e===Hr||e===Lc)throw Error(s(483))}var Gr=null,il=0;function Nc(e){var a=il;return il+=1,Gr===null&&(Gr=[]),j0(Gr,e,a)}function al(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Pc(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function K0(e){function a(Y,k){if(e){var et=Y.deletions;et===null?(Y.deletions=[k],Y.flags|=16):et.push(k)}}function r(Y,k){if(!e)return null;for(;k!==null;)a(Y,k),k=k.sibling;return null}function l(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function d(Y,k){return Y=_a(Y,k),Y.index=0,Y.sibling=null,Y}function m(Y,k,et){return Y.index=et,e?(et=Y.alternate,et!==null?(et=et.index,et<k?(Y.flags|=67108866,k):et):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function C(Y,k,et,xt){return k===null||k.tag!==6?(k=td(et,Y.mode,xt),k.return=Y,k):(k=d(k,et),k.return=Y,k)}function H(Y,k,et,xt){var ne=et.type;return ne===A?mt(Y,k,et.props.children,xt,et.key):k!==null&&(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===E&&Ks(ne)===k.type)?(k=d(k,et.props),al(k,et),k.return=Y,k):(k=Ac(et.type,et.key,et.props,null,Y.mode,xt),al(k,et),k.return=Y,k)}function nt(Y,k,et,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=ed(et,Y.mode,xt),k.return=Y,k):(k=d(k,et.children||[]),k.return=Y,k)}function mt(Y,k,et,xt,ne){return k===null||k.tag!==7?(k=Xs(et,Y.mode,xt,ne),k.return=Y,k):(k=d(k,et),k.return=Y,k)}function yt(Y,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=td(""+k,Y.mode,et),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return et=Ac(k.type,k.key,k.props,null,Y.mode,et),al(et,k),et.return=Y,et;case b:return k=ed(k,Y.mode,et),k.return=Y,k;case E:return k=Ks(k),yt(Y,k,et)}if(J(k)||K(k))return k=Xs(k,Y.mode,et,null),k.return=Y,k;if(typeof k.then=="function")return yt(Y,Nc(k),et);if(k.$$typeof===R)return yt(Y,Cc(Y,k),et);Pc(Y,k)}return null}function rt(Y,k,et,xt){var ne=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ne!==null?null:C(Y,k,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===ne?H(Y,k,et,xt):null;case b:return et.key===ne?nt(Y,k,et,xt):null;case E:return et=Ks(et),rt(Y,k,et,xt)}if(J(et)||K(et))return ne!==null?null:mt(Y,k,et,xt,null);if(typeof et.then=="function")return rt(Y,k,Nc(et),xt);if(et.$$typeof===R)return rt(Y,k,Cc(Y,et),xt);Pc(Y,et)}return null}function dt(Y,k,et,xt,ne){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Y=Y.get(et)||null,C(k,Y,""+xt,ne);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case x:return Y=Y.get(xt.key===null?et:xt.key)||null,H(k,Y,xt,ne);case b:return Y=Y.get(xt.key===null?et:xt.key)||null,nt(k,Y,xt,ne);case E:return xt=Ks(xt),dt(Y,k,et,xt,ne)}if(J(xt)||K(xt))return Y=Y.get(et)||null,mt(k,Y,xt,ne,null);if(typeof xt.then=="function")return dt(Y,k,et,Nc(xt),ne);if(xt.$$typeof===R)return dt(Y,k,et,Cc(k,xt),ne);Pc(k,xt)}return null}function kt(Y,k,et,xt){for(var ne=null,Le=null,Qt=k,ge=k=0,Ee=null;Qt!==null&&ge<et.length;ge++){Qt.index>ge?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Ue=rt(Y,Qt,et[ge],xt);if(Ue===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Ue.alternate===null&&a(Y,Qt),k=m(Ue,k,ge),Le===null?ne=Ue:Le.sibling=Ue,Le=Ue,Qt=Ee}if(ge===et.length)return r(Y,Qt),Te&&xa(Y,ge),ne;if(Qt===null){for(;ge<et.length;ge++)Qt=yt(Y,et[ge],xt),Qt!==null&&(k=m(Qt,k,ge),Le===null?ne=Qt:Le.sibling=Qt,Le=Qt);return Te&&xa(Y,ge),ne}for(Qt=l(Qt);ge<et.length;ge++)Ee=dt(Qt,Y,ge,et[ge],xt),Ee!==null&&(e&&Ee.alternate!==null&&Qt.delete(Ee.key===null?ge:Ee.key),k=m(Ee,k,ge),Le===null?ne=Ee:Le.sibling=Ee,Le=Ee);return e&&Qt.forEach(function(ys){return a(Y,ys)}),Te&&xa(Y,ge),ne}function ie(Y,k,et,xt){if(et==null)throw Error(s(151));for(var ne=null,Le=null,Qt=k,ge=k=0,Ee=null,Ue=et.next();Qt!==null&&!Ue.done;ge++,Ue=et.next()){Qt.index>ge?(Ee=Qt,Qt=null):Ee=Qt.sibling;var ys=rt(Y,Qt,Ue.value,xt);if(ys===null){Qt===null&&(Qt=Ee);break}e&&Qt&&ys.alternate===null&&a(Y,Qt),k=m(ys,k,ge),Le===null?ne=ys:Le.sibling=ys,Le=ys,Qt=Ee}if(Ue.done)return r(Y,Qt),Te&&xa(Y,ge),ne;if(Qt===null){for(;!Ue.done;ge++,Ue=et.next())Ue=yt(Y,Ue.value,xt),Ue!==null&&(k=m(Ue,k,ge),Le===null?ne=Ue:Le.sibling=Ue,Le=Ue);return Te&&xa(Y,ge),ne}for(Qt=l(Qt);!Ue.done;ge++,Ue=et.next())Ue=dt(Qt,Y,ge,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?ge:Ue.key),k=m(Ue,k,ge),Le===null?ne=Ue:Le.sibling=Ue,Le=Ue);return e&&Qt.forEach(function(hA){return a(Y,hA)}),Te&&xa(Y,ge),ne}function We(Y,k,et,xt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var ne=et.key;k!==null;){if(k.key===ne){if(ne=et.type,ne===A){if(k.tag===7){r(Y,k.sibling),xt=d(k,et.props.children),xt.return=Y,Y=xt;break t}}else if(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===E&&Ks(ne)===k.type){r(Y,k.sibling),xt=d(k,et.props),al(xt,et),xt.return=Y,Y=xt;break t}r(Y,k);break}else a(Y,k);k=k.sibling}et.type===A?(xt=Xs(et.props.children,Y.mode,xt,et.key),xt.return=Y,Y=xt):(xt=Ac(et.type,et.key,et.props,null,Y.mode,xt),al(xt,et),xt.return=Y,Y=xt)}return M(Y);case b:t:{for(ne=et.key;k!==null;){if(k.key===ne)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){r(Y,k.sibling),xt=d(k,et.children||[]),xt.return=Y,Y=xt;break t}else{r(Y,k);break}else a(Y,k);k=k.sibling}xt=ed(et,Y.mode,xt),xt.return=Y,Y=xt}return M(Y);case E:return et=Ks(et),We(Y,k,et,xt)}if(J(et))return kt(Y,k,et,xt);if(K(et)){if(ne=K(et),typeof ne!="function")throw Error(s(150));return et=ne.call(et),ie(Y,k,et,xt)}if(typeof et.then=="function")return We(Y,k,Nc(et),xt);if(et.$$typeof===R)return We(Y,k,Cc(Y,et),xt);Pc(Y,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(r(Y,k.sibling),xt=d(k,et),xt.return=Y,Y=xt):(r(Y,k),xt=td(et,Y.mode,xt),xt.return=Y,Y=xt),M(Y)):r(Y,k)}return function(Y,k,et,xt){try{il=0;var ne=We(Y,k,et,xt);return Gr=null,ne}catch(Qt){if(Qt===Hr||Qt===Lc)throw Qt;var Le=li(29,Qt,null,Y.mode);return Le.lanes=xt,Le.return=Y,Le}finally{}}}var Qs=K0(!0),Z0=K0(!1),is=!1;function hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pd(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function as(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ss(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var d=l.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a,a=Tc(e),N0(e,null,r),a}return Ec(e,l,a,r),Tc(e)}function sl(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Mr(e,r)}}function md(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?d=m=a:m=m.next=a}else d=m=a;r={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var gd=!1;function rl(){if(gd){var e=Vr;if(e!==null)throw e}}function ol(e,a,r,l){gd=!1;var d=e.updateQueue;is=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var H=C,nt=H.next;H.next=null,M===null?m=nt:M.next=nt,M=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==M&&(C===null?mt.firstBaseUpdate=nt:C.next=nt,mt.lastBaseUpdate=H))}if(m!==null){var yt=d.baseState;M=0,mt=nt=H=null,C=m;do{var rt=C.lane&-536870913,dt=rt!==C.lane;if(dt?(Me&rt)===rt:(l&rt)===rt){rt!==0&&rt===zr&&(gd=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,ie=C;rt=a;var We=r;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){yt=kt.call(We,yt,rt);break t}yt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,rt=typeof kt=="function"?kt.call(We,yt,rt):kt,rt==null)break t;yt=_({},yt,rt);break t;case 2:is=!0}}rt=C.callback,rt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=d.callbacks,dt===null?d.callbacks=[rt]:dt.push(rt))}else dt={lane:rt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(nt=mt=dt,H=yt):mt=mt.next=dt,M|=rt;if(C=C.next,C===null){if(C=d.shared.pending,C===null)break;dt=C,C=dt.next,dt.next=null,d.lastBaseUpdate=dt,d.shared.pending=null}}while(!0);mt===null&&(H=yt),d.baseState=H,d.firstBaseUpdate=nt,d.lastBaseUpdate=mt,m===null&&(d.shared.lanes=0),us|=M,e.lanes=M,e.memoizedState=yt}}function Q0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function J0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Q0(r[e],a)}var kr=I(null),Oc=I(0);function $0(e,a){e=Da,_t(Oc,e),_t(kr,a),Da=e|a.baseLanes}function vd(){_t(Oc,Da),_t(kr,kr.current)}function _d(){Da=Oc.current,j(kr),j(Oc)}var ci=I(null),Mi=null;function rs(e){var a=e.alternate;_t(ln,ln.current&1),_t(ci,e),Mi===null&&(a===null||kr.current!==null||a.memoizedState!==null)&&(Mi=e)}function xd(e){_t(ln,ln.current),_t(ci,e),Mi===null&&(Mi=e)}function tv(e){e.tag===22?(_t(ln,ln.current),_t(ci,e),Mi===null&&(Mi=e)):os()}function os(){_t(ln,ln.current),_t(ci,ci.current)}function ui(e){j(ci),Mi===e&&(Mi=null),j(ln)}var ln=I(0);function Fc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Th(r)||Ah(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ba=0,he=null,ke=null,mn=null,Ic=!1,Xr=!1,Js=!1,Bc=0,ll=0,Wr=null,i1=0;function sn(){throw Error(s(321))}function yd(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!oi(e[r],a[r]))return!1;return!0}function Sd(e,a,r,l,d,m){return ba=m,he=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,P.H=e===null||e.memoizedState===null?Iv:Fd,Js=!1,m=r(l,d),Js=!1,Xr&&(m=nv(a,r,l,d)),ev(e),m}function ev(e){P.H=fl;var a=ke!==null&&ke.next!==null;if(ba=0,mn=ke=he=null,Ic=!1,ll=0,Wr=null,a)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&Rc(e)&&(gn=!0))}function nv(e,a,r,l){he=e;var d=0;do{if(Xr&&(Wr=null),ll=0,Xr=!1,25<=d)throw Error(s(301));if(d+=1,mn=ke=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=Bv,m=a(r,l)}while(Xr);return m}function a1(){var e=P.H,a=e.useState()[0];return a=typeof a.then=="function"?cl(a):a,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),a}function bd(){var e=Bc!==0;return Bc=0,e}function Md(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function Ed(e){if(Ic){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ic=!1}ba=0,mn=ke=he=null,Xr=!1,ll=Bc=0,Wr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?he.memoizedState=mn=e:mn=mn.next=e,mn}function cn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var a=mn===null?he.memoizedState:mn.next;if(a!==null)mn=a,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},mn===null?he.memoizedState=mn=e:mn=mn.next=e}return mn}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var a=ll;return ll+=1,Wr===null&&(Wr=[]),e=j0(Wr,e,a),a=he,(mn===null?a.memoizedState:mn.next)===null&&(a=a.alternate,P.H=a===null||a.memoizedState===null?Iv:Fd),e}function Vc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===R)return Un(e)}throw Error(s(438,String(e)))}function Td(e){var a=null,r=he.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=zc(),he.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=at;return a.index++,r}function Ma(e,a){return typeof a=="function"?a(e):a}function Hc(e){var a=cn();return Ad(a,ke,e)}function Ad(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}a.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{a=d.next;var C=M=null,H=null,nt=a,mt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Me&yt)===yt:(ba&yt)===yt){var rt=nt.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===zr&&(mt=!0);else if((ba&rt)===rt){nt=nt.next,rt===zr&&(mt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=yt,M=m):H=H.next=yt,he.lanes|=rt,us|=rt;yt=nt.action,Js&&r(m,yt),m=nt.hasEagerState?nt.eagerState:r(m,yt)}else rt={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=rt,M=m):H=H.next=rt,he.lanes|=yt,us|=yt;nt=nt.next}while(nt!==null&&nt!==a);if(H===null?M=m:H.next=C,!oi(m,e.memoizedState)&&(gn=!0,mt&&(r=Vr,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=H,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wd(e){var a=cn(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,d=r.pending,m=a.memoizedState;if(d!==null){r.pending=null;var M=d=d.next;do m=e(m,M.action),M=M.next;while(M!==d);oi(m,a.memoizedState)||(gn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function iv(e,a,r){var l=he,d=cn(),m=Te;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var M=!oi((ke||d).memoizedState,r);if(M&&(d.memoizedState=r,gn=!0),d=d.queue,Dd(rv.bind(null,l,d,e),[e]),d.getSnapshot!==a||M||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,jr(9,{destroy:void 0},sv.bind(null,l,d,r,a),null),Ye===null)throw Error(s(349));m||(ba&127)!==0||av(l,a,r)}return r}function av(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=he.updateQueue,a===null?(a=zc(),he.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function sv(e,a,r,l){a.value=r,a.getSnapshot=l,ov(a)&&lv(e)}function rv(e,a,r){return r(function(){ov(a)&&lv(e)})}function ov(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!oi(e,r)}catch{return!0}}function lv(e){var a=ks(e,2);a!==null&&ei(a,e,2)}function Rd(e){var a=Wn();if(typeof e=="function"){var r=e;if(e=r(),Js){It(!0);try{r()}finally{It(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},a}function cv(e,a,r,l){return e.baseState=r,Ad(e,ke,typeof l=="function"?l:Ma)}function s1(e,a,r,l,d){if(Xc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};P.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,uv(a,m)):(m.next=r.next,a.pending=r.next=m)}}function uv(e,a){var r=a.action,l=a.payload,d=e.state;if(a.isTransition){var m=P.T,M={};P.T=M;try{var C=r(d,l),H=P.S;H!==null&&H(M,C),fv(e,a,C)}catch(nt){Cd(e,a,nt)}finally{m!==null&&M.types!==null&&(m.types=M.types),P.T=m}}else try{m=r(d,l),fv(e,a,m)}catch(nt){Cd(e,a,nt)}}function fv(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){dv(e,a,l)},function(l){return Cd(e,a,l)}):dv(e,a,r)}function dv(e,a,r){a.status="fulfilled",a.value=r,hv(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,uv(e,r)))}function Cd(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,hv(a),a=a.next;while(a!==l)}e.action=null}function hv(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function pv(e,a){return a}function mv(e,a){if(Te){var r=Ye.formState;if(r!==null){t:{var l=he;if(Te){if(Ze){e:{for(var d=Ze,m=bi;d.nodeType!==8;){if(!m){d=null;break e}if(d=Ei(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ze=Ei(d.nextSibling),l=d.data==="F!";break t}}es(l)}l=!1}l&&(a=r[0])}}return r=Wn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pv,lastRenderedState:a},r.queue=l,r=Pv.bind(null,he,l),l.dispatch=r,l=Rd(!1),m=Od.bind(null,he,!1,l.queue),l=Wn(),d={state:a,dispatch:null,action:e,pending:null},l.queue=d,r=s1.bind(null,he,d,m,r),d.dispatch=r,l.memoizedState=e,[a,r,!1]}function gv(e){var a=cn();return vv(a,ke,e)}function vv(e,a,r){if(a=Ad(e,a,pv)[0],e=Hc(Ma)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=cl(a)}catch(M){throw M===Hr?Lc:M}else l=a;a=cn();var d=a.queue,m=d.dispatch;return r!==a.memoizedState&&(he.flags|=2048,jr(9,{destroy:void 0},r1.bind(null,d,r),null)),[l,m,e]}function r1(e,a){e.action=a}function _v(e){var a=cn(),r=ke;if(r!==null)return vv(a,r,e);cn(),a=a.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function jr(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=he.updateQueue,a===null&&(a=zc(),he.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function xv(){return cn().memoizedState}function Gc(e,a,r,l){var d=Wn();he.flags|=e,d.memoizedState=jr(1|a,{destroy:void 0},r,l===void 0?null:l)}function kc(e,a,r,l){var d=cn();l=l===void 0?null:l;var m=d.memoizedState.inst;ke!==null&&l!==null&&yd(l,ke.memoizedState.deps)?d.memoizedState=jr(a,m,r,l):(he.flags|=e,d.memoizedState=jr(1|a,m,r,l))}function yv(e,a){Gc(8390656,8,e,a)}function Dd(e,a){kc(2048,8,e,a)}function o1(e){he.flags|=4;var a=he.updateQueue;if(a===null)a=zc(),he.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function Sv(e){var a=cn().memoizedState;return o1({ref:a,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function bv(e,a){return kc(4,2,e,a)}function Mv(e,a){return kc(4,4,e,a)}function Ev(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Tv(e,a,r){r=r!=null?r.concat([e]):null,kc(4,4,Ev.bind(null,a,e),r)}function Ld(){}function Av(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&yd(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function wv(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&yd(a,l[1]))return l[0];if(l=e(),Js){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[l,a],l}function Ud(e,a,r){return r===void 0||(ba&1073741824)!==0&&(Me&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=R_(),he.lanes|=e,us|=e,r)}function Rv(e,a,r,l){return oi(r,a)?r:kr.current!==null?(e=Ud(e,r,l),oi(e,a)||(gn=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(Me&261930)===0?(gn=!0,e.memoizedState=r):(e=R_(),he.lanes|=e,us|=e,a)}function Cv(e,a,r,l,d){var m=z.p;z.p=m!==0&&8>m?m:8;var M=P.T,C={};P.T=C,Od(e,!1,a,r);try{var H=d(),nt=P.S;if(nt!==null&&nt(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=n1(H,l);ul(e,a,mt,hi(e))}else ul(e,a,l,hi(e))}catch(yt){ul(e,a,{then:function(){},status:"rejected",reason:yt},hi())}finally{z.p=m,M!==null&&C.types!==null&&(M.types=C.types),P.T=M}}function l1(){}function Nd(e,a,r,l){if(e.tag!==5)throw Error(s(476));var d=Dv(e).queue;Cv(e,d,a,Q,r===null?l1:function(){return Lv(e),r(l)})}function Dv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Q},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Lv(e){var a=Dv(e);a.next===null&&(a=e.alternate.memoizedState),ul(e,a.next.queue,{},hi())}function Pd(){return Un(wl)}function Uv(){return cn().memoizedState}function Nv(){return cn().memoizedState}function c1(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=hi();e=as(r);var l=ss(a,e,r);l!==null&&(ei(l,a,r),sl(l,a,r)),a={cache:cd()},e.payload=a;return}a=a.return}}function u1(e,a,r){var l=hi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xc(e)?Ov(a,r):(r=Jf(e,a,r,l),r!==null&&(ei(r,e,l),Fv(r,a,l)))}function Pv(e,a,r){var l=hi();ul(e,a,r,l)}function ul(e,a,r,l){var d={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))Ov(a,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,C=m(M,r);if(d.hasEagerState=!0,d.eagerState=C,oi(C,M))return Ec(e,a,d,0),Ye===null&&Mc(),!1}catch{}finally{}if(r=Jf(e,a,d,l),r!==null)return ei(r,e,l),Fv(r,a,l),!0}return!1}function Od(e,a,r,l){if(l={lane:2,revertLane:hh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xc(e)){if(a)throw Error(s(479))}else a=Jf(e,r,l,2),a!==null&&ei(a,e,2)}function Xc(e){var a=e.alternate;return e===he||a!==null&&a===he}function Ov(e,a){Xr=Ic=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Fv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,Mr(e,r)}}var fl={readContext:Un,use:Vc,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};fl.useEffectEvent=sn;var Iv={readContext:Un,use:Vc,useCallback:function(e,a){return Wn().memoizedState=[e,a===void 0?null:a],e},useContext:Un,useEffect:yv,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Gc(4194308,4,Ev.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Gc(4194308,4,e,a)},useInsertionEffect:function(e,a){Gc(4,2,e,a)},useMemo:function(e,a){var r=Wn();a=a===void 0?null:a;var l=e();if(Js){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=Wn();if(r!==void 0){var d=r(a);if(Js){It(!0);try{r(a)}finally{It(!1)}}}else d=a;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=u1.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var a=Wn();return e={current:e},a.memoizedState=e},useState:function(e){e=Rd(e);var a=e.queue,r=Pv.bind(null,he,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:Ld,useDeferredValue:function(e,a){var r=Wn();return Ud(r,e,a)},useTransition:function(){var e=Rd(!1);return e=Cv.bind(null,he,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=he,d=Wn();if(Te){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),Ye===null)throw Error(s(349));(Me&127)!==0||av(l,a,r)}d.memoizedState=r;var m={value:r,getSnapshot:a};return d.queue=m,yv(rv.bind(null,l,m,e),[e]),l.flags|=2048,jr(9,{destroy:void 0},sv.bind(null,l,m,r,a),null),r},useId:function(){var e=Wn(),a=Ye.identifierPrefix;if(Te){var r=Ji,l=Qi;r=(l&~(1<<32-Ft(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Bc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=i1++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Pd,useFormState:mv,useActionState:mv,useOptimistic:function(e){var a=Wn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Od.bind(null,he,!0,r),r.dispatch=a,[e,a]},useMemoCache:Td,useCacheRefresh:function(){return Wn().memoizedState=c1.bind(null,he)},useEffectEvent:function(e){var a=Wn(),r={impl:e};return a.memoizedState=r,function(){if((Oe&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Fd={readContext:Un,use:Vc,useCallback:Av,useContext:Un,useEffect:Dd,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Mv,useMemo:wv,useReducer:Hc,useRef:xv,useState:function(){return Hc(Ma)},useDebugValue:Ld,useDeferredValue:function(e,a){var r=cn();return Rv(r,ke.memoizedState,e,a)},useTransition:function(){var e=Hc(Ma)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:cl(e),a]},useSyncExternalStore:iv,useId:Uv,useHostTransitionStatus:Pd,useFormState:gv,useActionState:gv,useOptimistic:function(e,a){var r=cn();return cv(r,ke,e,a)},useMemoCache:Td,useCacheRefresh:Nv};Fd.useEffectEvent=Sv;var Bv={readContext:Un,use:Vc,useCallback:Av,useContext:Un,useEffect:Dd,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Mv,useMemo:wv,useReducer:wd,useRef:xv,useState:function(){return wd(Ma)},useDebugValue:Ld,useDeferredValue:function(e,a){var r=cn();return ke===null?Ud(r,e,a):Rv(r,ke.memoizedState,e,a)},useTransition:function(){var e=wd(Ma)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:cl(e),a]},useSyncExternalStore:iv,useId:Uv,useHostTransitionStatus:Pd,useFormState:_v,useActionState:_v,useOptimistic:function(e,a){var r=cn();return ke!==null?cv(r,ke,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Td,useCacheRefresh:Nv};Bv.useEffectEvent=Sv;function Id(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:_({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bd={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=hi(),d=as(l);d.payload=a,r!=null&&(d.callback=r),a=ss(e,d,l),a!==null&&(ei(a,e,l),sl(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=hi(),d=as(l);d.tag=1,d.payload=a,r!=null&&(d.callback=r),a=ss(e,d,l),a!==null&&(ei(a,e,l),sl(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=hi(),l=as(r);l.tag=2,a!=null&&(l.callback=a),a=ss(e,l,r),a!==null&&(ei(a,e,r),sl(a,e,r))}};function zv(e,a,r,l,d,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Qo(r,l)||!Qo(d,m):!0}function Vv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Bd.enqueueReplaceState(a,a.state,null)}function $s(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=_({},r));for(var d in e)r[d]===void 0&&(r[d]=e[d])}return r}function Hv(e){bc(e)}function Gv(e){console.error(e)}function kv(e){bc(e)}function Wc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Xv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function zd(e,a,r){return r=as(r),r.tag=3,r.payload={element:null},r.callback=function(){Wc(e,a)},r}function Wv(e){return e=as(e),e.tag=3,e}function jv(e,a,r,l){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){Xv(a,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Xv(a,r,l),typeof d!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function f1(e,a,r,l,d){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Br(a,r,d,!0),r=ci.current,r!==null){switch(r.tag){case 31:case 13:return Mi===null?iu():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=d,l===Uc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),uh(e,l,d)),!1;case 22:return r.flags|=65536,l===Uc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),uh(e,l,d)),!1}throw Error(s(435,r.tag))}return uh(e,l,d),iu(),!1}if(Te)return a=ci.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,l!==ad&&(e=Error(s(422),{cause:l}),tl(xi(e,r)))):(l!==ad&&(a=Error(s(423),{cause:l}),tl(xi(a,r))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=xi(l,r),d=zd(e.stateNode,l,d),md(e,d),rn!==4&&(rn=2)),!1;var m=Error(s(520),{cause:l});if(m=xi(m,r),xl===null?xl=[m]:xl.push(m),rn!==4&&(rn=2),a===null)return!0;l=xi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=d&-d,r.lanes|=e,e=zd(r.stateNode,l,e),md(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fs===null||!fs.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Wv(d),jv(d,e,r,l),md(r,d),!1}r=r.return}while(r!==null);return!1}var Vd=Error(s(461)),gn=!1;function Nn(e,a,r,l){a.child=e===null?Z0(a,null,r,l):Qs(a,e.child,r,l)}function qv(e,a,r,l,d){r=r.render;var m=a.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return qs(a),l=Sd(e,a,r,M,m,d),C=bd(),e!==null&&!gn?(Md(e,a,d),Ea(e,a,d)):(Te&&C&&nd(a),a.flags|=1,Nn(e,a,l,d),a.child)}function Yv(e,a,r,l,d){if(e===null){var m=r.type;return typeof m=="function"&&!$f(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,Kv(e,a,m,l,d)):(e=Ac(r.type,null,l,a,a.mode,d),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!Yd(e,d)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Qo,r(M,l)&&e.ref===a.ref)return Ea(e,a,d)}return a.flags|=1,e=_a(m,l),e.ref=a.ref,e.return=a,a.child=e}function Kv(e,a,r,l,d){if(e!==null){var m=e.memoizedProps;if(Qo(m,l)&&e.ref===a.ref)if(gn=!1,a.pendingProps=l=m,Yd(e,d))(e.flags&131072)!==0&&(gn=!0);else return a.lanes=e.lanes,Ea(e,a,d)}return Hd(e,a,r,l,d)}function Zv(e,a,r,l){var d=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=a.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,a.child=null;return Qv(e,a,m,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dc(a,m!==null?m.cachePool:null),m!==null?$0(a,m):vd(),tv(a);else return l=a.lanes=536870912,Qv(e,a,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Dc(a,m.cachePool),$0(a,m),os(),a.memoizedState=null):(e!==null&&Dc(a,null),vd(),os());return Nn(e,a,d,r),a.child}function dl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Qv(e,a,r,l,d){var m=fd();return m=m===null?null:{parent:pn._currentValue,pool:m},a.memoizedState={baseLanes:r,cachePool:m},e!==null&&Dc(a,null),vd(),tv(a),e!==null&&Br(e,a,l,!0),a.childLanes=d,null}function jc(e,a){return a=Yc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Jv(e,a,r){return Qs(a,e.child,null,r),e=jc(a,a.pendingProps),e.flags|=2,ui(a),a.memoizedState=null,e}function d1(e,a,r){var l=a.pendingProps,d=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=jc(a,l),a.lanes=536870912,dl(null,e);if(xd(a),(e=Ze)?(e=ux(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:$a!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},r=O0(e),r.return=a,a.child=r,Ln=a,Ze=null)):e=null,e===null)throw es(a);return a.lanes=536870912,null}return jc(a,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(xd(a),d)if(a.flags&256)a.flags&=-257,a=Jv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(gn||Br(e,a,r,!1),d=(r&e.childLanes)!==0,gn||d){if(l=Ye,l!==null&&(M=fc(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,ks(e,M),ei(l,e,M),Vd;iu(),a=Jv(e,a,r)}else e=m.treeContext,Ze=Ei(M.nextSibling),Ln=a,Te=!0,ts=null,bi=!1,e!==null&&B0(a,e),a=jc(a,l),a.flags|=4096;return a}return e=_a(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function qc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Hd(e,a,r,l,d){return qs(a),r=Sd(e,a,r,l,void 0,d),l=bd(),e!==null&&!gn?(Md(e,a,d),Ea(e,a,d)):(Te&&l&&nd(a),a.flags|=1,Nn(e,a,r,d),a.child)}function $v(e,a,r,l,d,m){return qs(a),a.updateQueue=null,r=nv(a,l,r,d),ev(e),l=bd(),e!==null&&!gn?(Md(e,a,m),Ea(e,a,m)):(Te&&l&&nd(a),a.flags|=1,Nn(e,a,r,m),a.child)}function t_(e,a,r,l,d){if(qs(a),a.stateNode===null){var m=Pr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Un(M)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Bd,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},hd(a),M=r.contextType,m.context=typeof M=="object"&&M!==null?Un(M):Pr,m.state=a.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Id(a,r,M,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Bd.enqueueReplaceState(m,m.state,null),ol(a,l,m,d),rl(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var C=a.memoizedProps,H=$s(r,C);m.props=H;var nt=m.context,mt=r.contextType;M=Pr,typeof mt=="object"&&mt!==null&&(M=Un(mt));var yt=r.getDerivedStateFromProps;mt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=a.pendingProps!==C,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||nt!==M)&&Vv(a,m,l,M),is=!1;var rt=a.memoizedState;m.state=rt,ol(a,l,m,d),rl(),nt=a.memoizedState,C||rt!==nt||is?(typeof yt=="function"&&(Id(a,r,yt,l),nt=a.memoizedState),(H=is||zv(a,r,H,l,rt,nt,M))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=nt),m.props=l,m.state=nt,m.context=M,l=H):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,pd(e,a),M=a.memoizedProps,mt=$s(r,M),m.props=mt,yt=a.pendingProps,rt=m.context,nt=r.contextType,H=Pr,typeof nt=="object"&&nt!==null&&(H=Un(nt)),C=r.getDerivedStateFromProps,(nt=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==yt||rt!==H)&&Vv(a,m,l,H),is=!1,rt=a.memoizedState,m.state=rt,ol(a,l,m,d),rl();var dt=a.memoizedState;M!==yt||rt!==dt||is||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof C=="function"&&(Id(a,r,C,l),dt=a.memoizedState),(mt=is||zv(a,r,mt,l,rt,dt,H)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,dt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,dt,H)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=dt),m.props=l,m.state=dt,m.context=H,l=mt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,qc(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=Qs(a,e.child,null,d),a.child=Qs(a,null,r,d)):Nn(e,a,r,d),a.memoizedState=m.state,e=a.child):e=Ea(e,a,d),e}function e_(e,a,r,l){return Ws(),a.flags|=256,Nn(e,a,r,l),a.child}var Gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(e){return{baseLanes:e,cachePool:X0()}}function Xd(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=di),e}function n_(e,a,r){var l=a.pendingProps,d=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),M&&(d=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Te){if(d?rs(a):os(),(e=Ze)?(e=ux(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:$a!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},r=O0(e),r.return=a,a.child=r,Ln=a,Ze=null)):e=null,e===null)throw es(a);return Ah(e)?a.lanes=32:a.lanes=536870912,null}var C=l.children;return l=l.fallback,d?(os(),d=a.mode,C=Yc({mode:"hidden",children:C},d),l=Xs(l,d,r,null),C.return=a,l.return=a,C.sibling=l,a.child=C,l=a.child,l.memoizedState=kd(r),l.childLanes=Xd(e,M,r),a.memoizedState=Gd,dl(null,l)):(rs(a),Wd(a,C))}var H=e.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(m)a.flags&256?(rs(a),a.flags&=-257,a=jd(e,a,r)):a.memoizedState!==null?(os(),a.child=e.child,a.flags|=128,a=null):(os(),C=l.fallback,d=a.mode,l=Yc({mode:"visible",children:l.children},d),C=Xs(C,d,r,null),C.flags|=2,l.return=a,C.return=a,l.sibling=C,a.child=l,Qs(a,e.child,null,r),l=a.child,l.memoizedState=kd(r),l.childLanes=Xd(e,M,r),a.memoizedState=Gd,a=dl(null,l));else if(rs(a),Ah(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var nt=M.dgst;M=nt,l=Error(s(419)),l.stack="",l.digest=M,tl({value:l,source:null,stack:null}),a=jd(e,a,r)}else if(gn||Br(e,a,r,!1),M=(r&e.childLanes)!==0,gn||M){if(M=Ye,M!==null&&(l=fc(M,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,ks(e,l),ei(M,e,l),Vd;Th(C)||iu(),a=jd(e,a,r)}else Th(C)?(a.flags|=192,a.child=e.child,a=null):(e=H.treeContext,Ze=Ei(C.nextSibling),Ln=a,Te=!0,ts=null,bi=!1,e!==null&&B0(a,e),a=Wd(a,l.children),a.flags|=4096);return a}return d?(os(),C=l.fallback,d=a.mode,H=e.child,nt=H.sibling,l=_a(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,nt!==null?C=_a(nt,C):(C=Xs(C,d,r,null),C.flags|=2),C.return=a,l.return=a,l.sibling=C,a.child=l,dl(null,l),l=a.child,C=e.child.memoizedState,C===null?C=kd(r):(d=C.cachePool,d!==null?(H=pn._currentValue,d=d.parent!==H?{parent:H,pool:H}:d):d=X0(),C={baseLanes:C.baseLanes|r,cachePool:d}),l.memoizedState=C,l.childLanes=Xd(e,M,r),a.memoizedState=Gd,dl(e.child,l)):(rs(a),r=e.child,e=r.sibling,r=_a(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=r,a.memoizedState=null,r)}function Wd(e,a){return a=Yc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Yc(e,a){return e=li(22,e,null,a),e.lanes=0,e}function jd(e,a,r){return Qs(a,e.child,null,r),e=Wd(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function i_(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),od(e.return,a,r)}function qd(e,a,r,l,d,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:d,treeForkCount:m}:(M.isBackwards=a,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=d,M.treeForkCount=m)}function a_(e,a,r){var l=a.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var M=ln.current,C=(M&2)!==0;if(C?(M=M&1|2,a.flags|=128):M&=1,_t(ln,M),Nn(e,a,l,r),l=Te?$o:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i_(e,r,a);else if(e.tag===19)i_(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(r=a.child,d=null;r!==null;)e=r.alternate,e!==null&&Fc(e)===null&&(d=r),r=r.sibling;r=d,r===null?(d=a.child,a.child=null):(d=r.sibling,r.sibling=null),qd(a,!1,d,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=a.child,a.child=null;d!==null;){if(e=d.alternate,e!==null&&Fc(e)===null){a.child=d;break}e=d.sibling,d.sibling=r,r=d,d=e}qd(a,!0,r,null,m,l);break;case"together":qd(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Ea(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),us|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Br(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=_a(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=_a(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Yd(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function h1(e,a,r){switch(a.tag){case 3:bt(a,a.stateNode.containerInfo),ns(a,pn,e.memoizedState.cache),Ws();break;case 27:case 5:$t(a);break;case 4:bt(a,a.stateNode.containerInfo);break;case 10:ns(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,xd(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(rs(a),a.flags|=128,null):(r&a.child.childLanes)!==0?n_(e,a,r):(rs(a),e=Ea(e,a,r),e!==null?e.sibling:null);rs(a);break;case 19:var d=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Br(e,a,r,!1),l=(r&a.childLanes)!==0),d){if(l)return a_(e,a,r);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_t(ln,ln.current),l)break;return null;case 22:return a.lanes=0,Zv(e,a,r,a.pendingProps);case 24:ns(a,pn,e.memoizedState.cache)}return Ea(e,a,r)}function s_(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)gn=!0;else{if(!Yd(e,r)&&(a.flags&128)===0)return gn=!1,h1(e,a,r);gn=(e.flags&131072)!==0}else gn=!1,Te&&(a.flags&1048576)!==0&&I0(a,$o,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Ks(a.elementType),a.type=e,typeof e=="function")$f(e)?(l=$s(e,l),a.tag=1,a=t_(null,a,e,l,r)):(a.tag=0,a=Hd(null,a,e,l,r));else{if(e!=null){var d=e.$$typeof;if(d===D){a.tag=11,a=qv(null,a,e,l,r);break t}else if(d===O){a.tag=14,a=Yv(null,a,e,l,r);break t}}throw a=ct(e)||e,Error(s(306,a,""))}}return a;case 0:return Hd(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,d=$s(l,a.pendingProps),t_(e,a,l,d,r);case 3:t:{if(bt(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;d=m.element,pd(e,a),ol(a,l,null,r);var M=a.memoizedState;if(l=M.cache,ns(a,pn,l),l!==m.cache&&ld(a,[pn],r,!0),rl(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=e_(e,a,l,r);break t}else if(l!==d){d=xi(Error(s(424)),a),tl(d),a=e_(e,a,l,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Ei(e.firstChild),Ln=a,Te=!0,ts=null,bi=!0,r=Z0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ws(),l===d){a=Ea(e,a,r);break t}Nn(e,a,l,r)}a=a.child}return a;case 26:return qc(e,a),e===null?(r=gx(a.type,null,a.pendingProps,null))?a.memoizedState=r:Te||(r=a.type,e=a.pendingProps,l=uu(Z.current).createElement(r),l[fn]=a,l[bn]=e,Pn(l,r,e),X(l),a.stateNode=l):a.memoizedState=gx(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return $t(a),e===null&&Te&&(l=a.stateNode=hx(a.type,a.pendingProps,Z.current),Ln=a,bi=!0,d=Ze,ms(a.type)?(wh=d,Ze=Ei(l.firstChild)):Ze=d),Nn(e,a,a.pendingProps.children,r),qc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Te&&((d=l=Ze)&&(l=k1(l,a.type,a.pendingProps,bi),l!==null?(a.stateNode=l,Ln=a,Ze=Ei(l.firstChild),bi=!1,d=!0):d=!1),d||es(a)),$t(a),d=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,bh(d,m)?l=null:M!==null&&bh(d,M)&&(a.flags|=32),a.memoizedState!==null&&(d=Sd(e,a,a1,null,null,r),wl._currentValue=d),qc(e,a),Nn(e,a,l,r),a.child;case 6:return e===null&&Te&&((e=r=Ze)&&(r=X1(r,a.pendingProps,bi),r!==null?(a.stateNode=r,Ln=a,Ze=null,e=!0):e=!1),e||es(a)),null;case 13:return n_(e,a,r);case 4:return bt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Qs(a,null,l,r):Nn(e,a,l,r),a.child;case 11:return qv(e,a,a.type,a.pendingProps,r);case 7:return Nn(e,a,a.pendingProps,r),a.child;case 8:return Nn(e,a,a.pendingProps.children,r),a.child;case 12:return Nn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,ns(a,a.type,l.value),Nn(e,a,l.children,r),a.child;case 9:return d=a.type._context,l=a.pendingProps.children,qs(a),d=Un(d),l=l(d),a.flags|=1,Nn(e,a,l,r),a.child;case 14:return Yv(e,a,a.type,a.pendingProps,r);case 15:return Kv(e,a,a.type,a.pendingProps,r);case 19:return a_(e,a,r);case 31:return d1(e,a,r);case 22:return Zv(e,a,r,a.pendingProps);case 24:return qs(a),l=Un(pn),e===null?(d=fd(),d===null&&(d=Ye,m=cd(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),a.memoizedState={parent:l,cache:d},hd(a),ns(a,pn,d)):((e.lanes&r)!==0&&(pd(e,a),ol(a,null,null,r),rl()),d=e.memoizedState,m=a.memoizedState,d.parent!==l?(d={parent:l,cache:l},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),ns(a,pn,l)):(l=m.cache,ns(a,pn,l),l!==d.cache&&ld(a,[pn],r,!0))),Nn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Ta(e){e.flags|=4}function Kd(e,a,r,l,d){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(U_())e.flags|=8192;else throw Zs=Uc,dd}else e.flags&=-16777217}function r_(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sx(a))if(U_())e.flags|=8192;else throw Zs=Uc,dd}function Kc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ze():536870912,e.lanes|=a,Zr|=a)}function hl(e,a){if(!Te)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function p1(e,a,r){var l=a.pendingProps;switch(id(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(a),null;case 1:return Qe(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Sa(pn),Dt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(a)?Ta(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,sd())),Qe(a),null;case 26:var d=a.type,m=a.memoizedState;return e===null?(Ta(a),m!==null?(Qe(a),r_(a,m)):(Qe(a),Kd(a,d,null,l,r))):m?m!==e.memoizedState?(Ta(a),Qe(a),r_(a,m)):(Qe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ta(a),Qe(a),Kd(a,d,e,l,r)),null;case 27:if(ee(a),r=Z.current,d=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Qe(a),null}e=wt.current,Ir(a)?z0(a):(e=hx(d,l,r),a.stateNode=e,Ta(a))}return Qe(a),null;case 5:if(ee(a),d=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Qe(a),null}if(m=wt.current,Ir(a))z0(a);else{var M=uu(Z.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(d,{is:l.is}):M.createElement(d)}}m[fn]=a,m[bn]=l;t:for(M=a.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===a)break t;for(;M.sibling===null;){if(M.return===null||M.return===a)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}a.stateNode=m;t:switch(Pn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ta(a)}}return Qe(a),Kd(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Ta(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=Z.current,Ir(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,d=Ln,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[fn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||nx(e.nodeValue,r)),e||es(a,!0)}else e=uu(e).createTextNode(l),e[fn]=a,a.stateNode=e}return Qe(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Ir(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=a}else Ws(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),e=!1}else r=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(ui(a),a):(ui(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Qe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Ir(a),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[fn]=a}else Ws(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Qe(a),d=!1}else d=sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(ui(a),a):(ui(a),null)}return ui(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Kc(a,a.updateQueue),Qe(a),null);case 4:return Dt(),e===null&&vh(a.stateNode.containerInfo),Qe(a),null;case 10:return Sa(a.type),Qe(a),null;case 19:if(j(ln),l=a.memoizedState,l===null)return Qe(a),null;if(d=(a.flags&128)!==0,m=l.rendering,m===null)if(d)hl(l,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Fc(e),m!==null){for(a.flags|=128,hl(l,!1),e=m.updateQueue,a.updateQueue=e,Kc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)P0(r,e),r=r.sibling;return _t(ln,ln.current&1|2),Te&&xa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&T()>tu&&(a.flags|=128,d=!0,hl(l,!1),a.lanes=4194304)}else{if(!d)if(e=Fc(m),e!==null){if(a.flags|=128,d=!0,e=e.updateQueue,a.updateQueue=e,Kc(a,e),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Te)return Qe(a),null}else 2*T()-l.renderingStartTime>tu&&r!==536870912&&(a.flags|=128,d=!0,hl(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,r=ln.current,_t(ln,d?r&1|2:r&1),Te&&xa(a,l.treeForkCount),e):(Qe(a),null);case 22:case 23:return ui(a),_d(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Qe(a),a.subtreeFlags&6&&(a.flags|=8192)):Qe(a),r=a.updateQueue,r!==null&&Kc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&j(Ys),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Sa(pn),Qe(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function m1(e,a){switch(id(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Sa(pn),Dt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ee(a),null;case 31:if(a.memoizedState!==null){if(ui(a),a.alternate===null)throw Error(s(340));Ws()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ui(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Ws()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return j(ln),null;case 4:return Dt(),null;case 10:return Sa(a.type),null;case 22:case 23:return ui(a),_d(),e!==null&&j(Ys),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Sa(pn),null;case 25:return null;default:return null}}function o_(e,a){switch(id(a),a.tag){case 3:Sa(pn),Dt();break;case 26:case 27:case 5:ee(a);break;case 4:Dt();break;case 31:a.memoizedState!==null&&ui(a);break;case 13:ui(a);break;case 19:j(ln);break;case 10:Sa(a.type);break;case 22:case 23:ui(a),_d(),e!==null&&j(Ys);break;case 24:Sa(pn)}}function pl(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var d=l.next;r=d;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==d)}}catch(C){He(a,a.return,C)}}function ls(e,a,r){try{var l=a.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,d=a;var H=r,nt=C;try{nt()}catch(mt){He(d,H,mt)}}}l=l.next}while(l!==m)}}catch(mt){He(a,a.return,mt)}}function l_(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{J0(a,r)}catch(l){He(e,e.return,l)}}}function c_(e,a,r){r.props=$s(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){He(e,a,l)}}function ml(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(d){He(e,a,d)}}function $i(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(d){He(e,a,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){He(e,a,d)}else r.current=null}function u_(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(d){He(e,e.return,d)}}function Zd(e,a,r){try{var l=e.stateNode;I1(l,e.type,r,a),l[bn]=a}catch(d){He(e,e.return,d)}}function f_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ms(e.type)||e.tag===4}function Qd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||f_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ms(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jd(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=ga));else if(l!==4&&(l===27&&ms(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Jd(e,a,r),e=e.sibling;e!==null;)Jd(e,a,r),e=e.sibling}function Zc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&ms(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Zc(e,a,r),e=e.sibling;e!==null;)Zc(e,a,r),e=e.sibling}function d_(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);Pn(a,l,r),a[fn]=e,a[bn]=r}catch(m){He(e,e.return,m)}}var Aa=!1,vn=!1,$d=!1,h_=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function g1(e,a){if(e=e.containerInfo,yh=vu,e=T0(e),jf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,C=-1,H=-1,nt=0,mt=0,yt=e,rt=null;e:for(;;){for(var dt;yt!==r||d!==0&&yt.nodeType!==3||(C=M+d),yt!==m||l!==0&&yt.nodeType!==3||(H=M+l),yt.nodeType===3&&(M+=yt.nodeValue.length),(dt=yt.firstChild)!==null;)rt=yt,yt=dt;for(;;){if(yt===e)break e;if(rt===r&&++nt===d&&(C=M),rt===m&&++mt===l&&(H=M),(dt=yt.nextSibling)!==null)break;yt=rt,rt=yt.parentNode}yt=dt}r=C===-1||H===-1?null:{start:C,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sh={focusedElem:e,selectionRange:r},vu=!1,Rn=a;Rn!==null;)if(a=Rn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Rn=e;else for(;Rn!==null;){switch(a=Rn,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)d=e[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,d=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var kt=$s(r.type,d);e=l.getSnapshotBeforeUpdate(kt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){He(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)Eh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Rn=e;break}Rn=a.return}}function p_(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(e,r),l&4&&pl(5,r);break;case 1:if(Ra(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(M){He(r,r.return,M)}else{var d=$s(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(d,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){He(r,r.return,M)}}l&64&&l_(r),l&512&&ml(r,r.return);break;case 3:if(Ra(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{J0(e,a)}catch(M){He(r,r.return,M)}}break;case 27:a===null&&l&4&&d_(r);case 26:case 5:Ra(e,r),a===null&&l&4&&u_(r),l&512&&ml(r,r.return);break;case 12:Ra(e,r);break;case 31:Ra(e,r),l&4&&v_(e,r);break;case 13:Ra(e,r),l&4&&__(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=T1.bind(null,r),W1(e,r))));break;case 22:if(l=r.memoizedState!==null||Aa,!l){a=a!==null&&a.memoizedState!==null||vn,d=Aa;var m=vn;Aa=l,(vn=a)&&!m?Ca(e,r,(r.subtreeFlags&8772)!==0):Ra(e,r),Aa=d,vn=m}break;case 30:break;default:Ra(e,r)}}function m_(e){var a=e.alternate;a!==null&&(e.alternate=null,m_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ko(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Qn=!1;function wa(e,a,r){for(r=r.child;r!==null;)g_(e,a,r),r=r.sibling}function g_(e,a,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(At,r)}catch{}switch(r.tag){case 26:vn||$i(r,a),wa(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vn||$i(r,a);var l=en,d=Qn;ms(r.type)&&(en=r.stateNode,Qn=!1),wa(e,a,r),El(r.stateNode),en=l,Qn=d;break;case 5:vn||$i(r,a);case 6:if(l=en,d=Qn,en=null,wa(e,a,r),en=l,Qn=d,en!==null)if(Qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(m){He(r,a,m)}else try{en.removeChild(r.stateNode)}catch(m){He(r,a,m)}break;case 18:en!==null&&(Qn?(e=en,lx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ao(e)):lx(en,r.stateNode));break;case 4:l=en,d=Qn,en=r.stateNode.containerInfo,Qn=!0,wa(e,a,r),en=l,Qn=d;break;case 0:case 11:case 14:case 15:ls(2,r,a),vn||ls(4,r,a),wa(e,a,r);break;case 1:vn||($i(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&c_(r,a,l)),wa(e,a,r);break;case 21:wa(e,a,r);break;case 22:vn=(l=vn)||r.memoizedState!==null,wa(e,a,r),vn=l;break;default:wa(e,a,r)}}function v_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ao(e)}catch(r){He(a,a.return,r)}}}function __(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ao(e)}catch(r){He(a,a.return,r)}}function v1(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new h_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new h_),a;default:throw Error(s(435,e.tag))}}function Qc(e,a){var r=v1(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var d=A1.bind(null,e,l);l.then(d,d)}})}function Jn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var d=r[l],m=e,M=a,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ms(C.type)){en=C.stateNode,Qn=!1;break t}break;case 5:en=C.stateNode,Qn=!1;break t;case 3:case 4:en=C.stateNode.containerInfo,Qn=!0;break t}C=C.return}if(en===null)throw Error(s(160));g_(m,M,d),en=null,Qn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)x_(a,e),a=a.sibling}var Bi=null;function x_(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(a,e),$n(e),l&4&&(ls(3,e,e.return),pl(3,e),ls(5,e,e.return));break;case 1:Jn(a,e),$n(e),l&512&&(vn||r===null||$i(r,r.return)),l&64&&Aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var d=Bi;if(Jn(a,e),$n(e),l&512&&(vn||r===null||$i(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Bs]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Pn(m,l,r),m[fn]=e,X(m),l=m;break t;case"link":var M=xx("link","href",d).get(l+(r.href||""));if(M){for(var C=0;C<M.length;C++)if(m=M[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(C,1);break e}}m=d.createElement(l),Pn(m,l,r),d.head.appendChild(m);break;case"meta":if(M=xx("meta","content",d).get(l+(r.content||""))){for(C=0;C<M.length;C++)if(m=M[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(C,1);break e}}m=d.createElement(l),Pn(m,l,r),d.head.appendChild(m);break;default:throw Error(s(468,l))}m[fn]=e,X(m),l=m}e.stateNode=l}else yx(d,e.type,e.stateNode);else e.stateNode=_x(d,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?yx(d,e.type,e.stateNode):_x(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Zd(e,e.memoizedProps,r.memoizedProps)}break;case 27:Jn(a,e),$n(e),l&512&&(vn||r===null||$i(r,r.return)),r!==null&&l&4&&Zd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Jn(a,e),$n(e),l&512&&(vn||r===null||$i(r,r.return)),e.flags&32){d=e.stateNode;try{Xn(d,"")}catch(kt){He(e,e.return,kt)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,Zd(e,d,r!==null?r.memoizedProps:d)),l&1024&&($d=!0);break;case 6:if(Jn(a,e),$n(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){He(e,e.return,kt)}}break;case 3:if(hu=null,d=Bi,Bi=fu(a.containerInfo),Jn(a,e),Bi=d,$n(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ao(a.containerInfo)}catch(kt){He(e,e.return,kt)}$d&&($d=!1,y_(e));break;case 4:l=Bi,Bi=fu(e.stateNode.containerInfo),Jn(a,e),$n(e),Bi=l;break;case 12:Jn(a,e),$n(e);break;case 31:Jn(a,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qc(e,l)));break;case 13:Jn(a,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($c=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qc(e,l)));break;case 22:d=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,nt=Aa,mt=vn;if(Aa=nt||d,vn=mt||H,Jn(a,e),vn=mt,Aa=nt,$n(e),l&8192)t:for(a=e.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(r===null||H||Aa||vn||tr(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){H=r=a;try{if(m=H.stateNode,d)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=H.stateNode;var yt=H.memoizedProps.style,rt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){He(H,H.return,kt)}}}else if(a.tag===6){if(r===null){H=a;try{H.stateNode.nodeValue=d?"":H.memoizedProps}catch(kt){He(H,H.return,kt)}}}else if(a.tag===18){if(r===null){H=a;try{var dt=H.stateNode;d?cx(dt,!0):cx(H.stateNode,!1)}catch(kt){He(H,H.return,kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Qc(e,r))));break;case 19:Jn(a,e),$n(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qc(e,l)));break;case 30:break;case 21:break;default:Jn(a,e),$n(e)}}function $n(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(f_(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var d=r.stateNode,m=Qd(e);Zc(e,m,d);break;case 5:var M=r.stateNode;r.flags&32&&(Xn(M,""),r.flags&=-33);var C=Qd(e);Zc(e,C,M);break;case 3:case 4:var H=r.stateNode.containerInfo,nt=Qd(e);Jd(e,nt,H);break;default:throw Error(s(161))}}catch(mt){He(e,e.return,mt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function y_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;y_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ra(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)p_(e,a.alternate,a),a=a.sibling}function tr(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ls(4,a,a.return),tr(a);break;case 1:$i(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&c_(a,a.return,r),tr(a);break;case 27:El(a.stateNode);case 26:case 5:$i(a,a.return),tr(a);break;case 22:a.memoizedState===null&&tr(a);break;case 30:tr(a);break;default:tr(a)}e=e.sibling}}function Ca(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,d=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(d,m,r),pl(4,m);break;case 1:if(Ca(d,m,r),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(nt){He(l,l.return,nt)}if(l=m,d=l.updateQueue,d!==null){var C=l.stateNode;try{var H=d.shared.hiddenCallbacks;if(H!==null)for(d.shared.hiddenCallbacks=null,d=0;d<H.length;d++)Q0(H[d],C)}catch(nt){He(l,l.return,nt)}}r&&M&64&&l_(m),ml(m,m.return);break;case 27:d_(m);case 26:case 5:Ca(d,m,r),r&&l===null&&M&4&&u_(m),ml(m,m.return);break;case 12:Ca(d,m,r);break;case 31:Ca(d,m,r),r&&M&4&&v_(d,m);break;case 13:Ca(d,m,r),r&&M&4&&__(d,m);break;case 22:m.memoizedState===null&&Ca(d,m,r),ml(m,m.return);break;case 30:break;default:Ca(d,m,r)}a=a.sibling}}function th(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&el(r))}function eh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&el(e))}function zi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)S_(e,a,r,l),a=a.sibling}function S_(e,a,r,l){var d=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a,r,l),d&2048&&pl(9,a);break;case 1:zi(e,a,r,l);break;case 3:zi(e,a,r,l),d&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&el(e)));break;case 12:if(d&2048){zi(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,C=m.onPostCommit;typeof C=="function"&&C(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){He(a,a.return,H)}}else zi(e,a,r,l);break;case 31:zi(e,a,r,l);break;case 13:zi(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?zi(e,a,r,l):gl(e,a):m._visibility&2?zi(e,a,r,l):(m._visibility|=2,qr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),d&2048&&th(M,a);break;case 24:zi(e,a,r,l),d&2048&&eh(a.alternate,a);break;default:zi(e,a,r,l)}}function qr(e,a,r,l,d){for(d=d&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,M=a,C=r,H=l,nt=M.flags;switch(M.tag){case 0:case 11:case 15:qr(m,M,C,H,d),pl(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?qr(m,M,C,H,d):gl(m,M):(mt._visibility|=2,qr(m,M,C,H,d)),d&&nt&2048&&th(M.alternate,M);break;case 24:qr(m,M,C,H,d),d&&nt&2048&&eh(M.alternate,M);break;default:qr(m,M,C,H,d)}a=a.sibling}}function gl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,d=l.flags;switch(l.tag){case 22:gl(r,l),d&2048&&th(l.alternate,l);break;case 24:gl(r,l),d&2048&&eh(l.alternate,l);break;default:gl(r,l)}a=a.sibling}}var vl=8192;function Yr(e,a,r){if(e.subtreeFlags&vl)for(e=e.child;e!==null;)b_(e,a,r),e=e.sibling}function b_(e,a,r){switch(e.tag){case 26:Yr(e,a,r),e.flags&vl&&e.memoizedState!==null&&iA(r,Bi,e.memoizedState,e.memoizedProps);break;case 5:Yr(e,a,r);break;case 3:case 4:var l=Bi;Bi=fu(e.stateNode.containerInfo),Yr(e,a,r),Bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vl,vl=16777216,Yr(e,a,r),vl=l):Yr(e,a,r));break;default:Yr(e,a,r)}}function M_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function _l(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Rn=l,T_(l,e)}M_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E_(e),e=e.sibling}function E_(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&ls(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Jc(e)):_l(e);break;default:_l(e)}}function Jc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Rn=l,T_(l,e)}M_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ls(8,a,a.return),Jc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Jc(a));break;default:Jc(a)}e=e.sibling}}function T_(e,a){for(;Rn!==null;){var r=Rn;switch(r.tag){case 0:case 11:case 15:ls(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Rn=l;else t:for(r=e;Rn!==null;){l=Rn;var d=l.sibling,m=l.return;if(m_(l),l===r){Rn=null;break t}if(d!==null){d.return=m,Rn=d;break t}Rn=m}}}var _1={getCacheForType:function(e){var a=Un(pn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Un(pn).controller.signal}},x1=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Se=null,Me=0,Ve=0,fi=null,cs=!1,Kr=!1,nh=!1,Da=0,rn=0,us=0,er=0,ih=0,di=0,Zr=0,xl=null,ti=null,ah=!1,$c=0,A_=0,tu=1/0,eu=null,fs=null,En=0,ds=null,Qr=null,La=0,sh=0,rh=null,w_=null,yl=0,oh=null;function hi(){return(Oe&2)!==0&&Me!==0?Me&-Me:P.T!==null?hh():Zi()}function R_(){if(di===0)if((Me&536870912)===0||Te){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),di=e}else di=536870912;return e=ci.current,e!==null&&(e.flags|=32),di}function ei(e,a,r){(e===Ye&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),hs(e,Me,di,!1)),Hn(e,r),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(er|=r),rn===4&&hs(e,Me,di,!1)),ta(e))}function C_(e,a,r){if((Oe&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||Ht(e,a),d=l?b1(e,a):ch(e,a,!0),m=l;do{if(d===0){Kr&&!l&&hs(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!y1(r)){d=ch(e,a,!1),m=!1;continue}if(d===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var C=e;d=xl;var H=C.current.memoizedState.isDehydrated;if(H&&(Jr(C,M).flags|=256),M=ch(C,M,!1),M!==2){if(nh&&!H){C.errorRecoveryDisabledLanes|=m,er|=m,d=4;break t}m=ti,ti=d,m!==null&&(ti===null?ti=m:ti.push.apply(ti,m))}d=M}if(m=!1,d!==2)continue}}if(d===1){Jr(e,0),hs(e,a,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:hs(l,a,di,!cs);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(d=$c+300-T(),10<d)){if(hs(l,a,di,!cs),ht(l,0,!0)!==0)break t;La=a,l.timeoutHandle=rx(D_.bind(null,l,r,ti,eu,ah,a,di,er,Zr,cs,m,"Throttled",-0,0),d);break t}D_(l,r,ti,eu,ah,a,di,er,Zr,cs,m,null,-0,0)}}break}while(!0);ta(e)}function D_(e,a,r,l,d,m,M,C,H,nt,mt,yt,rt,dt){if(e.timeoutHandle=-1,yt=a.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},b_(a,m,yt);var kt=(m&62914560)===m?$c-T():(m&4194048)===m?A_-T():0;if(kt=aA(yt,kt),kt!==null){La=m,e.cancelPendingCommit=kt(B_.bind(null,e,a,m,r,l,d,M,C,H,mt,yt,null,rt,dt)),hs(e,m,M,!nt);return}}B_(e,a,m,r,l,d,M,C,H)}function y1(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var d=r[l],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function hs(e,a,r,l){a&=~ih,a&=~er,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var d=a;0<d;){var m=31-Ft(d),M=1<<m;l[m]=-1,d&=~M}r!==0&&Go(e,r,a)}function nu(){return(Oe&6)===0?(Sl(0),!1):!0}function lh(){if(Se!==null){if(Ve===0)var e=Se.return;else e=Se,ya=js=null,Ed(e),Gr=null,il=0,e=Se;for(;e!==null;)o_(e.alternate,e),e=e.return;Se=null}}function Jr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,V1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),La=0,lh(),Ye=e,Se=r=_a(e.current,null),Me=a,Ve=0,fi=null,cs=!1,Kr=Ht(e,a),nh=!1,Zr=di=ih=er=us=rn=0,ti=xl=null,ah=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var d=31-Ft(l),m=1<<d;a|=e[d],l&=~m}return Da=a,Mc(),r}function L_(e,a){he=null,P.H=fl,a===Hr||a===Lc?(a=q0(),Ve=3):a===dd?(a=q0(),Ve=4):Ve=a===Vd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,fi=a,Se===null&&(rn=1,Wc(e,xi(a,e.current)))}function U_(){var e=ci.current;return e===null?!0:(Me&4194048)===Me?Mi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mi:!1}function N_(){var e=P.H;return P.H=fl,e===null?fl:e}function P_(){var e=P.A;return P.A=_1,e}function iu(){rn=4,cs||(Me&4194048)!==Me&&ci.current!==null||(Kr=!0),(us&134217727)===0&&(er&134217727)===0||Ye===null||hs(Ye,Me,di,!1)}function ch(e,a,r){var l=Oe;Oe|=2;var d=N_(),m=P_();(Ye!==e||Me!==a)&&(eu=null,Jr(e,a)),a=!1;var M=rn;t:do try{if(Ve!==0&&Se!==null){var C=Se,H=fi;switch(Ve){case 8:lh(),M=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(a=!0);var nt=Ve;if(Ve=0,fi=null,$r(e,C,H,nt),r&&Kr){M=0;break t}break;default:nt=Ve,Ve=0,fi=null,$r(e,C,H,nt)}}S1(),M=rn;break}catch(mt){L_(e,mt)}while(!0);return a&&e.shellSuspendCounter++,ya=js=null,Oe=l,P.H=d,P.A=m,Se===null&&(Ye=null,Me=0,Mc()),M}function S1(){for(;Se!==null;)O_(Se)}function b1(e,a){var r=Oe;Oe|=2;var l=N_(),d=P_();Ye!==e||Me!==a?(eu=null,tu=T()+500,Jr(e,a)):Kr=Ht(e,a);t:do try{if(Ve!==0&&Se!==null){a=Se;var m=fi;e:switch(Ve){case 1:Ve=0,fi=null,$r(e,a,m,1);break;case 2:case 9:if(W0(m)){Ve=0,fi=null,F_(a);break}a=function(){Ve!==2&&Ve!==9||Ye!==e||(Ve=7),ta(e)},m.then(a,a);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:W0(m)?(Ve=0,fi=null,F_(a)):(Ve=0,fi=null,$r(e,a,m,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var C=Se;if(M?Sx(M):C.stateNode.complete){Ve=0,fi=null;var H=C.sibling;if(H!==null)Se=H;else{var nt=C.return;nt!==null?(Se=nt,au(nt)):Se=null}break e}}Ve=0,fi=null,$r(e,a,m,5);break;case 6:Ve=0,fi=null,$r(e,a,m,6);break;case 8:lh(),rn=6;break t;default:throw Error(s(462))}}M1();break}catch(mt){L_(e,mt)}while(!0);return ya=js=null,P.H=l,P.A=d,Oe=r,Se!==null?0:(Ye=null,Me=0,Mc(),rn)}function M1(){for(;Se!==null&&!Zt();)O_(Se)}function O_(e){var a=s_(e.alternate,e,Da);e.memoizedProps=e.pendingProps,a===null?au(e):Se=a}function F_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=$v(r,a,a.pendingProps,a.type,void 0,Me);break;case 11:a=$v(r,a,a.pendingProps,a.type.render,a.ref,Me);break;case 5:Ed(a);default:o_(r,a),a=Se=P0(a,Da),a=s_(r,a,Da)}e.memoizedProps=e.pendingProps,a===null?au(e):Se=a}function $r(e,a,r,l){ya=js=null,Ed(a),Gr=null,il=0;var d=a.return;try{if(f1(e,d,a,r,Me)){rn=1,Wc(e,xi(r,e.current)),Se=null;return}}catch(m){if(d!==null)throw Se=d,m;rn=1,Wc(e,xi(r,e.current)),Se=null;return}a.flags&32768?(Te||l===1?e=!0:Kr||(Me&536870912)!==0?e=!1:(cs=e=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),I_(a,e)):au(a)}function au(e){var a=e;do{if((a.flags&32768)!==0){I_(a,cs);return}e=a.return;var r=p1(a.alternate,a,Da);if(r!==null){Se=r;return}if(a=a.sibling,a!==null){Se=a;return}Se=a=e}while(a!==null);rn===0&&(rn=5)}function I_(e,a){do{var r=m1(e.alternate,e);if(r!==null){r.flags&=32767,Se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){Se=e;return}Se=e=r}while(e!==null);rn=6,Se=null}function B_(e,a,r,l,d,m,M,C,H){e.cancelPendingCommit=null;do su();while(En!==0);if((Oe&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=Qf,Ni(e,r,m,M,C,H),e===Ye&&(Se=Ye=null,Me=0),Qr=a,ds=e,La=r,sh=m,rh=d,w_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,w1(pt,function(){return k_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,d=z.p,z.p=2,M=Oe,Oe|=4;try{g1(e,a,r)}finally{Oe=M,z.p=d,P.T=l}}En=1,z_(),V_(),H_()}}function z_(){if(En===1){En=0;var e=ds,a=Qr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var l=z.p;z.p=2;var d=Oe;Oe|=4;try{x_(a,e);var m=Sh,M=T0(e.containerInfo),C=m.focusedElem,H=m.selectionRange;if(M!==C&&C&&C.ownerDocument&&E0(C.ownerDocument.documentElement,C)){if(H!==null&&jf(C)){var nt=H.start,mt=H.end;if(mt===void 0&&(mt=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(mt,C.value.length);else{var yt=C.ownerDocument||document,rt=yt&&yt.defaultView||window;if(rt.getSelection){var dt=rt.getSelection(),kt=C.textContent.length,ie=Math.min(H.start,kt),We=H.end===void 0?ie:Math.min(H.end,kt);!dt.extend&&ie>We&&(M=We,We=ie,ie=M);var Y=M0(C,ie),k=M0(C,We);if(Y&&k&&(dt.rangeCount!==1||dt.anchorNode!==Y.node||dt.anchorOffset!==Y.offset||dt.focusNode!==k.node||dt.focusOffset!==k.offset)){var et=yt.createRange();et.setStart(Y.node,Y.offset),dt.removeAllRanges(),ie>We?(dt.addRange(et),dt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),dt.addRange(et))}}}}for(yt=[],dt=C;dt=dt.parentNode;)dt.nodeType===1&&yt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var xt=yt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}vu=!!yh,Sh=yh=null}finally{Oe=d,z.p=l,P.T=r}}e.current=a,En=2}}function V_(){if(En===2){En=0;var e=ds,a=Qr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var l=z.p;z.p=2;var d=Oe;Oe|=4;try{p_(e,a.alternate,a)}finally{Oe=d,z.p=l,P.T=r}}En=3}}function H_(){if(En===4||En===3){En=0,B();var e=ds,a=Qr,r=La,l=w_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?En=5:(En=0,Qr=ds=null,G_(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(fs=null),Tr(r),a=a.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(At,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=P.T,d=z.p,z.p=2,P.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var C=l[M];m(C.value,{componentStack:C.stack})}}finally{P.T=a,z.p=d}}(La&3)!==0&&su(),ta(e),d=e.pendingLanes,(r&261930)!==0&&(d&42)!==0?e===oh?yl++:(yl=0,oh=e):yl=0,Sl(0)}}function G_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,el(a)))}function su(){return z_(),V_(),H_(),k_()}function k_(){if(En!==5)return!1;var e=ds,a=sh;sh=0;var r=Tr(La),l=P.T,d=z.p;try{z.p=32>r?32:r,P.T=null,r=rh,rh=null;var m=ds,M=La;if(En=0,Qr=ds=null,La=0,(Oe&6)!==0)throw Error(s(331));var C=Oe;if(Oe|=4,E_(m.current),S_(m,m.current,M,r),Oe=C,Sl(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{z.p=d,P.T=l,G_(e,a)}}function X_(e,a,r){a=xi(r,a),a=zd(e.stateNode,a,2),e=ss(e,a,2),e!==null&&(Hn(e,2),ta(e))}function He(e,a,r){if(e.tag===3)X_(e,e,r);else for(;a!==null;){if(a.tag===3){X_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fs===null||!fs.has(l))){e=xi(r,e),r=Wv(2),l=ss(a,r,2),l!==null&&(jv(r,l,a,e),Hn(l,2),ta(l));break}}a=a.return}}function uh(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new x1;var d=new Set;l.set(a,d)}else d=l.get(a),d===void 0&&(d=new Set,l.set(a,d));d.has(r)||(nh=!0,d.add(r),e=E1.bind(null,e,a,r),a.then(e,e))}function E1(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ye===e&&(Me&r)===r&&(rn===4||rn===3&&(Me&62914560)===Me&&300>T()-$c?(Oe&2)===0&&Jr(e,0):ih|=r,Zr===Me&&(Zr=0)),ta(e)}function W_(e,a){a===0&&(a=ze()),e=ks(e,a),e!==null&&(Hn(e,a),ta(e))}function T1(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),W_(e,r)}function A1(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(r=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),W_(e,r)}function w1(e,a){return we(e,a)}var ru=null,to=null,fh=!1,ou=!1,dh=!1,ps=0;function ta(e){e!==to&&e.next===null&&(to===null?ru=to=e:to=to.next=e),ou=!0,fh||(fh=!0,C1())}function Sl(e,a){if(!dh&&ou){dh=!0;do for(var r=!1,l=ru;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var M=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Ft(42|e)+1)-1,m&=d&~(M&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,K_(l,m))}else m=Me,m=ht(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ht(l,m)||(r=!0,K_(l,m));l=l.next}while(r);dh=!1}}function R1(){j_()}function j_(){ou=fh=!1;var e=0;ps!==0&&z1()&&(e=ps);for(var a=T(),r=null,l=ru;l!==null;){var d=l.next,m=q_(l,a);m===0?(l.next=null,r===null?ru=d:r.next=d,d===null&&(to=r)):(r=l,(e!==0||(m&3)!==0)&&(ou=!0)),l=d}En!==0&&En!==5||Sl(e),ps!==0&&(ps=0)}function q_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Ft(m),C=1<<M,H=d[M];H===-1?((C&r)===0||(C&l)!==0)&&(d[M]=re(C,a)):H<=a&&(e.expiredLanes|=C),m&=~C}if(a=Ye,r=Me,r=ht(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ie(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ht(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Ie(l),Tr(r)){case 2:case 8:r=St;break;case 32:r=pt;break;case 268435456:r=Ut;break;default:r=pt}return l=Y_.bind(null,e),r=we(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Ie(l),e.callbackPriority=2,e.callbackNode=null,2}function Y_(e,a){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(su()&&e.callbackNode!==r)return null;var l=Me;return l=ht(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(C_(e,l,a),q_(e,T()),e.callbackNode!=null&&e.callbackNode===r?Y_.bind(null,e):null)}function K_(e,a){if(su())return null;C_(e,a,!0)}function C1(){H1(function(){(Oe&6)!==0?we(vt,R1):j_()})}function hh(){if(ps===0){var e=zr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),ps=e}return ps}function Z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mc(""+e)}function Q_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function D1(e,a,r,l,d){if(a==="submit"&&r&&r.stateNode===d){var m=Z_((d[bn]||null).action),M=l.submitter;M&&(a=(a=M[bn]||null)?Z_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var C=new xc("action","action",null,l,d);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ps!==0){var H=M?Q_(d,M):new FormData(d);Nd(r,{pending:!0,data:H,method:d.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=M?Q_(d,M):new FormData(d),Nd(r,{pending:!0,data:H,method:d.method,action:m},m,H))},currentTarget:d}]})}}for(var ph=0;ph<Zf.length;ph++){var mh=Zf[ph],L1=mh.toLowerCase(),U1=mh[0].toUpperCase()+mh.slice(1);Ii(L1,"on"+U1)}Ii(R0,"onAnimationEnd"),Ii(C0,"onAnimationIteration"),Ii(D0,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(YT,"onTransitionRun"),Ii(KT,"onTransitionStart"),Ii(ZT,"onTransitionCancel"),Ii(L0,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function J_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],d=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var C=l[M],H=C.instance,nt=C.currentTarget;if(C=C.listener,H!==m&&d.isPropagationStopped())break t;m=C,d.currentTarget=nt;try{m(d)}catch(mt){bc(mt)}d.currentTarget=null,m=H}else for(M=0;M<l.length;M++){if(C=l[M],H=C.instance,nt=C.currentTarget,C=C.listener,H!==m&&d.isPropagationStopped())break t;m=C,d.currentTarget=nt;try{m(d)}catch(mt){bc(mt)}d.currentTarget=null,m=H}}}}function be(e,a){var r=a[Ka];r===void 0&&(r=a[Ka]=new Set);var l=e+"__bubble";r.has(l)||($_(a,e,2,!1),r.add(l))}function gh(e,a,r){var l=0;a&&(l|=4),$_(r,e,l,a)}var lu="_reactListening"+Math.random().toString(36).slice(2);function vh(e){if(!e[lu]){e[lu]=!0,ut.forEach(function(r){r!=="selectionchange"&&(N1.has(r)||gh(r,!1,e),gh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[lu]||(a[lu]=!0,gh("selectionchange",!1,a))}}function $_(e,a,r,l){switch(Rx(a)){case 2:var d=oA;break;case 8:d=lA;break;default:d=Uh}r=d.bind(null,a,r,e),d=void 0,!If||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(a,r,{capture:!0,passive:d}):e.addEventListener(a,r,!0):d!==void 0?e.addEventListener(a,r,{passive:d}):e.addEventListener(a,r,!1)}function _h(e,a,r,l,d){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===d)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===d)return;M=M.return}for(;C!==null;){if(M=Za(C),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){l=m=M;continue t}C=C.parentNode}}l=l.return}a0(function(){var nt=m,mt=Of(r),yt=[];t:{var rt=U0.get(e);if(rt!==void 0){var dt=xc,kt=e;switch(e){case"keypress":if(vc(r)===0)break t;case"keydown":case"keyup":dt=AT;break;case"focusin":kt="focus",dt=Hf;break;case"focusout":kt="blur",dt=Hf;break;case"beforeblur":case"afterblur":dt=Hf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=o0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=pT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=CT;break;case R0:case C0:case D0:dt=vT;break;case L0:dt=LT;break;case"scroll":case"scrollend":dt=dT;break;case"wheel":dt=NT;break;case"copy":case"cut":case"paste":dt=xT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=c0;break;case"toggle":case"beforetoggle":dt=OT}var ie=(a&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),Y=ie?rt!==null?rt+"Capture":null:rt;ie=[];for(var k=nt,et;k!==null;){var xt=k;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Y===null||(xt=Xo(k,Y),xt!=null&&ie.push(Ml(k,xt,et))),We)break;k=k.return}0<ie.length&&(rt=new dt(rt,kt,null,r,mt),yt.push({event:rt,listeners:ie}))}}if((a&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",rt&&r!==Pf&&(kt=r.relatedTarget||r.fromElement)&&(Za(kt)||kt[pa]))break t;if((dt||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,dt?(kt=r.relatedTarget||r.toElement,dt=nt,kt=kt?Za(kt):null,kt!==null&&(We=c(kt),ie=kt.tag,kt!==We||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(dt=null,kt=nt),dt!==kt)){if(ie=o0,xt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=c0,xt="onPointerLeave",Y="onPointerEnter",k="pointer"),We=dt==null?rt:zs(dt),et=kt==null?rt:zs(kt),rt=new ie(xt,k+"leave",dt,r,mt),rt.target=We,rt.relatedTarget=et,xt=null,Za(mt)===nt&&(ie=new ie(Y,k+"enter",kt,r,mt),ie.target=et,ie.relatedTarget=We,xt=ie),We=xt,dt&&kt)e:{for(ie=P1,Y=dt,k=kt,et=0,xt=Y;xt;xt=ie(xt))et++;xt=0;for(var ne=k;ne;ne=ie(ne))xt++;for(;0<et-xt;)Y=ie(Y),et--;for(;0<xt-et;)k=ie(k),xt--;for(;et--;){if(Y===k||k!==null&&Y===k.alternate){ie=Y;break e}Y=ie(Y),k=ie(k)}ie=null}else ie=null;dt!==null&&tx(yt,rt,dt,ie,!1),kt!==null&&We!==null&&tx(yt,We,kt,ie,!0)}}t:{if(rt=nt?zs(nt):window,dt=rt.nodeName&&rt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&rt.type==="file")var Le=v0;else if(m0(rt))if(_0)Le=WT;else{Le=kT;var Qt=GT}else dt=rt.nodeName,!dt||dt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&wr(nt.elementType)&&(Le=v0):Le=XT;if(Le&&(Le=Le(e,nt))){g0(yt,Le,r,mt);break t}Qt&&Qt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Oi(rt,"number",rt.value)}switch(Qt=nt?zs(nt):window,e){case"focusin":(m0(Qt)||Qt.contentEditable==="true")&&(Lr=Qt,qf=nt,Jo=null);break;case"focusout":Jo=qf=Lr=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,A0(yt,r,mt);break;case"selectionchange":if(qT)break;case"keydown":case"keyup":A0(yt,r,mt)}var ge;if(kf)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Dr?h0(e,r)&&(Ee="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ee="onCompositionStart");Ee&&(u0&&r.locale!=="ko"&&(Dr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Dr&&(ge=s0()):(Ja=mt,Bf="value"in Ja?Ja.value:Ja.textContent,Dr=!0)),Qt=cu(nt,Ee),0<Qt.length&&(Ee=new l0(Ee,e,null,r,mt),yt.push({event:Ee,listeners:Qt}),ge?Ee.data=ge:(ge=p0(r),ge!==null&&(Ee.data=ge)))),(ge=IT?BT(e,r):zT(e,r))&&(Ee=cu(nt,"onBeforeInput"),0<Ee.length&&(Qt=new l0("onBeforeInput","beforeinput",null,r,mt),yt.push({event:Qt,listeners:Ee}),Qt.data=ge)),D1(yt,e,nt,r,mt)}J_(yt,a)})}function Ml(e,a,r){return{instance:e,listener:a,currentTarget:r}}function cu(e,a){for(var r=a+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Xo(e,r),d!=null&&l.unshift(Ml(e,d,m)),d=Xo(e,a),d!=null&&l.push(Ml(e,d,m))),e.tag===3)return l;e=e.return}return[]}function P1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tx(e,a,r,l,d){for(var m=a._reactName,M=[];r!==null&&r!==l;){var C=r,H=C.alternate,nt=C.stateNode;if(C=C.tag,H!==null&&H===l)break;C!==5&&C!==26&&C!==27||nt===null||(H=nt,d?(nt=Xo(r,m),nt!=null&&M.unshift(Ml(r,nt,H))):d||(nt=Xo(r,m),nt!=null&&M.push(Ml(r,nt,H)))),r=r.return}M.length!==0&&e.push({event:a,listeners:M})}var O1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function ex(e){return(typeof e=="string"?e:""+e).replace(O1,`
`).replace(F1,"")}function nx(e,a){return a=ex(a),ex(e)===a}function Xe(e,a,r,l,d,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Xn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Xn(e,""+l);break;case"className":le(e,"class",l);break;case"tabIndex":le(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":le(e,r,l);break;case"style":ma(e,l,m);break;case"data":if(a!=="object"){le(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=mc(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&Xe(e,a,"name",d.name,d,null),Xe(e,a,"formEncType",d.formEncType,d,null),Xe(e,a,"formMethod",d.formMethod,d,null),Xe(e,a,"formTarget",d.formTarget,d,null)):(Xe(e,a,"encType",d.encType,d,null),Xe(e,a,"method",d.method,d,null),Xe(e,a,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=mc(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ga);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=mc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":be("beforetoggle",e),be("toggle",e),se(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":se(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=uT.get(r)||r,se(e,r,l))}}function xh(e,a,r,l,d,m){switch(r){case"style":ma(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Xn(e,l):(typeof l=="number"||typeof l=="bigint")&&Xn(e,""+l);break;case"onScroll":l!=null&&be("scroll",e);break;case"onScrollEnd":l!=null&&be("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),a=r.slice(2,d?r.length-7:void 0),m=e[bn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,d);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):se(e,r,l)}}}function Pn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var l=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Xe(e,a,m,M,r,null)}}d&&Xe(e,a,"srcSet",r.srcSet,r,null),l&&Xe(e,a,"src",r.src,r,null);return;case"input":be("invalid",e);var C=m=M=d=null,H=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var mt=r[l];if(mt!=null)switch(l){case"name":d=mt;break;case"type":M=mt;break;case"checked":H=mt;break;case"defaultChecked":nt=mt;break;case"value":m=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,a));break;default:Xe(e,a,l,mt,r,null)}}si(e,m,C,H,nt,M,d,!1);return;case"select":be("invalid",e),l=M=m=null;for(d in r)if(r.hasOwnProperty(d)&&(C=r[d],C!=null))switch(d){case"value":m=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Xe(e,a,d,C,r,null)}a=m,r=M,e.multiple=!!l,a!=null?ri(e,!!l,a,!1):r!=null&&ri(e,!!l,r,!0);return;case"textarea":be("invalid",e),m=d=l=null;for(M in r)if(r.hasOwnProperty(M)&&(C=r[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":d=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,a,M,C,r,null)}dn(e,l,d,m);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(l=r[H],l!=null))switch(H){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(e,a,H,l,r,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(l=0;l<bl.length;l++)be(bl[l],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Xe(e,a,nt,l,r,null)}return;default:if(wr(a)){for(mt in r)r.hasOwnProperty(mt)&&(l=r[mt],l!==void 0&&xh(e,a,mt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Xe(e,a,C,l,r,null))}function I1(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,M=null,C=null,H=null,nt=null,mt=null;for(dt in r){var yt=r[dt];if(r.hasOwnProperty(dt)&&yt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":H=yt;default:l.hasOwnProperty(dt)||Xe(e,a,dt,null,l,yt)}}for(var rt in l){var dt=l[rt];if(yt=r[rt],l.hasOwnProperty(rt)&&(dt!=null||yt!=null))switch(rt){case"type":m=dt;break;case"name":d=dt;break;case"checked":nt=dt;break;case"defaultChecked":mt=dt;break;case"value":M=dt;break;case"defaultValue":C=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:dt!==yt&&Xe(e,a,rt,dt,l,yt)}}kn(e,M,C,H,nt,mt,m,d);return;case"select":dt=M=C=rt=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":dt=H;default:l.hasOwnProperty(m)||Xe(e,a,m,null,l,H)}for(d in l)if(m=l[d],H=r[d],l.hasOwnProperty(d)&&(m!=null||H!=null))switch(d){case"value":rt=m;break;case"defaultValue":C=m;break;case"multiple":M=m;default:m!==H&&Xe(e,a,d,m,l,H)}a=C,r=M,l=dt,rt!=null?ri(e,!!r,rt,!1):!!l!=!!r&&(a!=null?ri(e,!!r,a,!0):ri(e,!!r,r?[]:"",!1));return;case"textarea":dt=rt=null;for(C in r)if(d=r[C],r.hasOwnProperty(C)&&d!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,a,C,null,l,d)}for(M in l)if(d=l[M],m=r[M],l.hasOwnProperty(M)&&(d!=null||m!=null))switch(M){case"value":rt=d;break;case"defaultValue":dt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&Xe(e,a,M,d,l,m)}Be(e,rt,dt);return;case"option":for(var kt in r)if(rt=r[kt],r.hasOwnProperty(kt)&&rt!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Xe(e,a,kt,null,l,rt)}for(H in l)if(rt=l[H],dt=r[H],l.hasOwnProperty(H)&&rt!==dt&&(rt!=null||dt!=null))switch(H){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Xe(e,a,H,rt,l,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)rt=r[ie],r.hasOwnProperty(ie)&&rt!=null&&!l.hasOwnProperty(ie)&&Xe(e,a,ie,null,l,rt);for(nt in l)if(rt=l[nt],dt=r[nt],l.hasOwnProperty(nt)&&rt!==dt&&(rt!=null||dt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,a));break;default:Xe(e,a,nt,rt,l,dt)}return;default:if(wr(a)){for(var We in r)rt=r[We],r.hasOwnProperty(We)&&rt!==void 0&&!l.hasOwnProperty(We)&&xh(e,a,We,void 0,l,rt);for(mt in l)rt=l[mt],dt=r[mt],!l.hasOwnProperty(mt)||rt===dt||rt===void 0&&dt===void 0||xh(e,a,mt,rt,l,dt);return}}for(var Y in r)rt=r[Y],r.hasOwnProperty(Y)&&rt!=null&&!l.hasOwnProperty(Y)&&Xe(e,a,Y,null,l,rt);for(yt in l)rt=l[yt],dt=r[yt],!l.hasOwnProperty(yt)||rt===dt||rt==null&&dt==null||Xe(e,a,yt,rt,l,dt)}function ix(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var d=r[l],m=d.transferSize,M=d.initiatorType,C=d.duration;if(m&&C&&ix(M)){for(M=0,C=d.responseEnd,l+=1;l<r.length;l++){var H=r[l],nt=H.startTime;if(nt>C)break;var mt=H.transferSize,yt=H.initiatorType;mt&&ix(yt)&&(H=H.responseEnd,M+=mt*(H<C?1:(C-nt)/(H-nt)))}if(--l,a+=8*(m+M)/(d.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,Sh=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function ax(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sx(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function bh(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Mh=null;function z1(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var rx=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,ox=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof ox<"u"?function(e){return ox.resolve(null).then(e).catch(G1)}:rx;function G1(e){setTimeout(function(){throw e})}function ms(e){return e==="head"}function lx(e,a){var r=a,l=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(d),ao(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")El(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,El(r);for(var m=r.firstChild;m;){var M=m.nextSibling,C=m.nodeName;m[Bs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&El(e.ownerDocument.body);r=d}while(r);ao(a)}function cx(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Eh(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Eh(r),ko(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function k1(e,a,r,l){for(;e.nodeType===1;){var d=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function X1(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ei(e.nextSibling),e===null))return null;return e}function ux(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function Ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function W1(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ei(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var wh=null;function fx(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return Ei(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function dx(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function hx(e,a,r){switch(a=uu(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function El(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ko(e)}var Ti=new Map,px=new Set;function fu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ua=z.d;z.d={f:j1,r:q1,D:Y1,C:K1,L:Z1,m:Q1,X:$1,S:J1,M:tA};function j1(){var e=Ua.f(),a=nu();return e||a}function q1(e){var a=Qa(e);a!==null&&a.tag===5&&a.type==="form"?Lv(a):Ua.r(e)}var eo=typeof document>"u"?null:document;function mx(e,a,r){var l=eo;if(l&&typeof a=="string"&&a){var d=oe(a);d='link[rel="'+e+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),px.has(d)||(px.add(d),e={rel:e,crossOrigin:r,href:a},l.querySelector(d)===null&&(a=l.createElement("link"),Pn(a,"link",e),X(a),l.head.appendChild(a)))}}function Y1(e){Ua.D(e),mx("dns-prefetch",e,null)}function K1(e,a){Ua.C(e,a),mx("preconnect",e,a)}function Z1(e,a,r){Ua.L(e,a,r);var l=eo;if(l&&e&&a){var d='link[rel="preload"][as="'+oe(a)+'"]';a==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+oe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+oe(r.imageSizes)+'"]')):d+='[href="'+oe(e)+'"]';var m=d;switch(a){case"style":m=no(e);break;case"script":m=io(e)}Ti.has(m)||(e=_({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Ti.set(m,e),l.querySelector(d)!==null||a==="style"&&l.querySelector(Tl(m))||a==="script"&&l.querySelector(Al(m))||(a=l.createElement("link"),Pn(a,"link",e),X(a),l.head.appendChild(a)))}}function Q1(e,a){Ua.m(e,a);var r=eo;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+oe(l)+'"][href="'+oe(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=io(e)}if(!Ti.has(m)&&(e=_({rel:"modulepreload",href:e},a),Ti.set(m,e),r.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Al(m)))return}l=r.createElement("link"),Pn(l,"link",e),X(l),r.head.appendChild(l)}}}function J1(e,a,r){Ua.S(e,a,r);var l=eo;if(l&&e){var d=U(l).hoistableStyles,m=no(e);a=a||"default";var M=d.get(m);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(Tl(m)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Ti.get(m))&&Rh(e,r);var H=M=l.createElement("link");X(H),Pn(H,"link",e),H._p=new Promise(function(nt,mt){H.onload=nt,H.onerror=mt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,du(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:C},d.set(m,M)}}}function $1(e,a){Ua.X(e,a);var r=eo;if(r&&e){var l=U(r).hoistableScripts,d=io(e),m=l.get(d);m||(m=r.querySelector(Al(d)),m||(e=_({src:e,async:!0},a),(a=Ti.get(d))&&Ch(e,a),m=r.createElement("script"),X(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function tA(e,a){Ua.M(e,a);var r=eo;if(r&&e){var l=U(r).hoistableScripts,d=io(e),m=l.get(d);m||(m=r.querySelector(Al(d)),m||(e=_({src:e,async:!0,type:"module"},a),(a=Ti.get(d))&&Ch(e,a),m=r.createElement("script"),X(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function gx(e,a,r,l){var d=(d=Z.current)?fu(d):null;if(!d)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=no(r.href),r=U(d).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=no(r.href);var m=U(d).hoistableStyles,M=m.get(e);if(M||(d=d.ownerDocument||d,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=d.querySelector(Tl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Ti.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ti.set(e,r),m||eA(d,e,r,M.state))),a&&l===null)throw Error(s(528,""));return M}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=io(r),r=U(d).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function no(e){return'href="'+oe(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function vx(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function eA(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Pn(a,"link",r),X(a),e.head.appendChild(a))}function io(e){return'[src="'+oe(e)+'"]'}function Al(e){return"script[async]"+e}function _x(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+oe(r.href)+'"]');if(l)return a.instance=l,X(l),l;var d=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),X(l),Pn(l,"style",d),du(l,r.precedence,e),a.instance=l;case"stylesheet":d=no(r.href);var m=e.querySelector(Tl(d));if(m)return a.state.loading|=4,a.instance=m,X(m),m;l=vx(r),(d=Ti.get(d))&&Rh(l,d),m=(e.ownerDocument||e).createElement("link"),X(m);var M=m;return M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Pn(m,"link",l),a.state.loading|=4,du(m,r.precedence,e),a.instance=m;case"script":return m=io(r.src),(d=e.querySelector(Al(m)))?(a.instance=d,X(d),d):(l=r,(d=Ti.get(m))&&(l=_({},r),Ch(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),X(d),Pn(d,"link",l),e.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,du(l,r.precedence,e));return a.instance}function du(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===a)m=C;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Rh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Ch(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var hu=null;function xx(e,a,r){if(hu===null){var l=new Map,d=hu=new Map;d.set(r,l)}else d=hu,l=d.get(r),l||(l=new Map,d.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),d=0;d<r.length;d++){var m=r[d];if(!(m[Bs]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var C=l.get(M);C?C.push(m):l.set(M,[m])}}return l}function yx(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function nA(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Sx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iA(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=no(l.href),m=a.querySelector(Tl(d));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=pu.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=m,X(m);return}m=a.ownerDocument||a,l=vx(l),(d=Ti.get(d))&&Rh(l,d),m=m.createElement("link"),X(m);var M=m;M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Pn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=pu.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var Dh=0;function aA(e,a){return e.stylesheets&&e.count===0&&gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&Dh===0&&(Dh=62500*B1());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Dh?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function gu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,a.forEach(sA,e),mu=null,pu.call(e))}function sA(e,a){if(!(a.state.loading&4)){var r=mu.get(e);if(r)var l=r.get(null);else{r=new Map,mu.set(e,r);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var M=d[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}d=a.instance,M=d.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,d),r.set(M,d),this.count++,l=pu.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),a.state.loading|=4}}var wl={$$typeof:R,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function rA(e,a,r,l,d,m,M,C,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function bx(e,a,r,l,d,m,M,C,H,nt,mt,yt){return e=new rA(e,a,r,M,H,nt,mt,yt,C),a=1,m===!0&&(a|=24),m=li(3,null,null,a),e.current=m,m.stateNode=e,a=cd(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},hd(m),e}function Mx(e){return e?(e=Pr,e):Pr}function Ex(e,a,r,l,d,m){d=Mx(d),l.context===null?l.context=d:l.pendingContext=d,l=as(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=ss(e,l,a),r!==null&&(ei(r,e,a),sl(r,e,a))}function Tx(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Lh(e,a){Tx(e,a),(e=e.alternate)&&Tx(e,a)}function Ax(e){if(e.tag===13||e.tag===31){var a=ks(e,67108864);a!==null&&ei(a,e,67108864),Lh(e,67108864)}}function wx(e){if(e.tag===13||e.tag===31){var a=hi();a=Er(a);var r=ks(e,a);r!==null&&ei(r,e,a),Lh(e,a)}}var vu=!0;function oA(e,a,r,l){var d=P.T;P.T=null;var m=z.p;try{z.p=2,Uh(e,a,r,l)}finally{z.p=m,P.T=d}}function lA(e,a,r,l){var d=P.T;P.T=null;var m=z.p;try{z.p=8,Uh(e,a,r,l)}finally{z.p=m,P.T=d}}function Uh(e,a,r,l){if(vu){var d=Nh(l);if(d===null)_h(e,a,l,_u,r),Cx(e,l);else if(uA(d,e,a,r,l))l.stopPropagation();else if(Cx(e,l),a&4&&-1<cA.indexOf(e)){for(;d!==null;){var m=Qa(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Tt(m.pendingLanes);if(M!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var H=1<<31-Ft(M);C.entanglements[1]|=H,M&=~H}ta(m),(Oe&6)===0&&(tu=T()+500,Sl(0))}}break;case 31:case 13:C=ks(m,2),C!==null&&ei(C,m,2),nu(),Lh(m,2)}if(m=Nh(l),m===null&&_h(e,a,l,_u,r),m===d)break;d=m}d!==null&&l.stopPropagation()}else _h(e,a,l,null,r)}}function Nh(e){return e=Of(e),Ph(e)}var _u=null;function Ph(e){if(_u=null,e=Za(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return _u=e,null}function Rx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case vt:return 2;case St:return 8;case pt:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Oh=!1,gs=null,vs=null,_s=null,Rl=new Map,Cl=new Map,xs=[],cA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cx(e,a){switch(e){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Rl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(a.pointerId)}}function Dl(e,a,r,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},a!==null&&(a=Qa(a),a!==null&&Ax(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),e)}function uA(e,a,r,l,d){switch(a){case"focusin":return gs=Dl(gs,e,a,r,l,d),!0;case"dragenter":return vs=Dl(vs,e,a,r,l,d),!0;case"mouseover":return _s=Dl(_s,e,a,r,l,d),!0;case"pointerover":var m=d.pointerId;return Rl.set(m,Dl(Rl.get(m)||null,e,a,r,l,d)),!0;case"gotpointercapture":return m=d.pointerId,Cl.set(m,Dl(Cl.get(m)||null,e,a,r,l,d)),!0}return!1}function Dx(e){var a=Za(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,Ar(e.priority,function(){wx(r)});return}}else if(a===31){if(a=f(r),a!==null){e.blockedOn=a,Ar(e.priority,function(){wx(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Nh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Pf=l,r.target.dispatchEvent(l),Pf=null}else return a=Qa(r),a!==null&&Ax(a),e.blockedOn=r,!1;a.shift()}return!0}function Lx(e,a,r){xu(e)&&r.delete(a)}function fA(){Oh=!1,gs!==null&&xu(gs)&&(gs=null),vs!==null&&xu(vs)&&(vs=null),_s!==null&&xu(_s)&&(_s=null),Rl.forEach(Lx),Cl.forEach(Lx)}function yu(e,a){e.blockedOn===a&&(e.blockedOn=null,Oh||(Oh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,fA)))}var Su=null;function Ux(e){Su!==e&&(Su=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Su===e&&(Su=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],d=e[a+2];if(typeof l!="function"){if(Ph(l||r)===null)continue;break}var m=Qa(r);m!==null&&(e.splice(a,3),a-=3,Nd(m,{pending:!0,data:d,method:r.method,action:l},l,d))}}))}function ao(e){function a(H){return yu(H,e)}gs!==null&&yu(gs,e),vs!==null&&yu(vs,e),_s!==null&&yu(_s,e),Rl.forEach(a),Cl.forEach(a);for(var r=0;r<xs.length;r++){var l=xs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xs.length&&(r=xs[0],r.blockedOn===null);)Dx(r),r.blockedOn===null&&xs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var d=r[l],m=r[l+1],M=d[bn]||null;if(typeof m=="function")M||Ux(r);else if(M){var C=null;if(m&&m.hasAttribute("formAction")){if(d=m,M=m[bn]||null)C=M.formAction;else if(Ph(d)!==null)continue}else C=M.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Ux(r)}}}function Nx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return d=M})},focusReset:"manual",scroll:"manual"})}function a(){d!==null&&(d(),d=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),d!==null&&(d(),d=null)}}}function Fh(e){this._internalRoot=e}bu.prototype.render=Fh.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=hi();Ex(r,l,e,a,null,null)},bu.prototype.unmount=Fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ex(e.current,2,null,e,null,null),nu(),a[pa]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Zi();e={blockedOn:null,target:e,priority:a};for(var r=0;r<xs.length&&a!==0&&a<xs[r].priority;r++);xs.splice(r,0,e),r===0&&Dx(e)}};var Px=t.version;if(Px!=="19.2.4")throw Error(s(527,Px,"19.2.4"));z.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var dA={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{At=Mu.inject(dA),Et=Mu}catch{}}return Ul.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",d=Hv,m=Gv,M=kv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),a=bx(e,1,!1,null,null,r,l,null,d,m,M,Nx),e[pa]=a.current,vh(e),new Fh(a)},Ul.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,d="",m=Hv,M=Gv,C=kv,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),a=bx(e,1,!0,a,r??null,l,d,H,m,M,C,Nx),a.context=Mx(null),r=a.current,l=hi(),l=Er(l),d=as(l),d.callback=null,ss(r,d,l),r=l,a.current.lanes=r,Hn(a,r),ta(a),e[pa]=a.current,vh(e),new bu(a)},Ul.version="19.2.4",Ul}var Xx;function bA(){if(Xx)return zh.exports;Xx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),zh.exports=SA(),zh.exports}var MA=bA();function gb(i){var t,n,s="";if(typeof i=="string"||typeof i=="number")s+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(t=0;t<o;t++)i[t]&&(n=gb(i[t]))&&(s&&(s+=" "),s+=n)}else for(n in i)i[n]&&(s&&(s+=" "),s+=n);return s}function EA(){for(var i,t,n=0,s="",o=arguments.length;n<o;n++)(i=arguments[n])&&(t=gb(i))&&(s&&(s+=" "),s+=t);return s}const TA=(i,t)=>{const n=new Array(i.length+t.length);for(let s=0;s<i.length;s++)n[s]=i[s];for(let s=0;s<t.length;s++)n[i.length+s]=t[s];return n},AA=(i,t)=>({classGroupId:i,validator:t}),vb=(i=new Map,t=null,n)=>({nextPart:i,validators:t,classGroupId:n}),df="-",Wx=[],wA="arbitrary..",RA=i=>{const t=DA(i),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=i;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return CA(u);const f=u.split(df),h=f[0]===""&&f.length>1?1:0;return _b(f,h,t)},getConflictingClassGroupIds:(u,f)=>{if(f){const h=s[u],p=n[u];return h?p?TA(p,h):h:p||Wx}return n[u]||Wx}}},_b=(i,t,n)=>{if(i.length-t===0)return n.classGroupId;const o=i[t],c=n.nextPart.get(o);if(c){const p=_b(i,t+1,c);if(p)return p}const u=n.validators;if(u===null)return;const f=t===0?i.join(df):i.slice(t).join(df),h=u.length;for(let p=0;p<h;p++){const g=u[p];if(g.validator(f))return g.classGroupId}},CA=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=i.slice(1,-1),n=t.indexOf(":"),s=t.slice(0,n);return s?wA+s:void 0})(),DA=i=>{const{theme:t,classGroups:n}=i;return LA(n,t)},LA=(i,t)=>{const n=vb();for(const s in i){const o=i[s];rg(o,n,s,t)}return n},rg=(i,t,n,s)=>{const o=i.length;for(let c=0;c<o;c++){const u=i[c];UA(u,t,n,s)}},UA=(i,t,n,s)=>{if(typeof i=="string"){NA(i,t,n);return}if(typeof i=="function"){PA(i,t,n,s);return}OA(i,t,n,s)},NA=(i,t,n)=>{const s=i===""?t:xb(t,i);s.classGroupId=n},PA=(i,t,n,s)=>{if(FA(i)){rg(i(s),t,n,s);return}t.validators===null&&(t.validators=[]),t.validators.push(AA(n,i))},OA=(i,t,n,s)=>{const o=Object.entries(i),c=o.length;for(let u=0;u<c;u++){const[f,h]=o[u];rg(h,xb(t,f),n,s)}},xb=(i,t)=>{let n=i;const s=t.split(df),o=s.length;for(let c=0;c<o;c++){const u=s[c];let f=n.nextPart.get(u);f||(f=vb(),n.nextPart.set(u,f)),n=f}return n},FA=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,IA=i=>{if(i<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),s=Object.create(null);const o=(c,u)=>{n[c]=u,t++,t>i&&(t=0,s=n,n=Object.create(null))};return{get(c){let u=n[c];if(u!==void 0)return u;if((u=s[c])!==void 0)return o(c,u),u},set(c,u){c in n?n[c]=u:o(c,u)}}},Gp="!",jx=":",BA=[],qx=(i,t,n,s,o)=>({modifiers:i,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:s,isExternal:o}),zA=i=>{const{prefix:t,experimentalParseClassName:n}=i;let s=o=>{const c=[];let u=0,f=0,h=0,p;const g=o.length;for(let A=0;A<g;A++){const S=o[A];if(u===0&&f===0){if(S===jx){c.push(o.slice(h,A)),h=A+1;continue}if(S==="/"){p=A;continue}}S==="["?u++:S==="]"?u--:S==="("?f++:S===")"&&f--}const _=c.length===0?o:o.slice(h);let v=_,x=!1;_.endsWith(Gp)?(v=_.slice(0,-1),x=!0):_.startsWith(Gp)&&(v=_.slice(1),x=!0);const b=p&&p>h?p-h:void 0;return qx(c,x,v,b)};if(t){const o=t+jx,c=s;s=u=>u.startsWith(o)?c(u.slice(o.length)):qx(BA,!1,u,void 0,!0)}if(n){const o=s;s=c=>n({className:c,parseClassName:o})}return s},VA=i=>{const t=new Map;return i.orderSensitiveModifiers.forEach((n,s)=>{t.set(n,1e6+s)}),n=>{const s=[];let o=[];for(let c=0;c<n.length;c++){const u=n[c],f=u[0]==="[",h=t.has(u);f||h?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(u)):o.push(u)}return o.length>0&&(o.sort(),s.push(...o)),s}},HA=i=>({cache:IA(i.cacheSize),parseClassName:zA(i),sortModifiers:VA(i),...RA(i)}),GA=/\s+/,kA=(i,t)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:c}=t,u=[],f=i.trim().split(GA);let h="";for(let p=f.length-1;p>=0;p-=1){const g=f[p],{isExternal:_,modifiers:v,hasImportantModifier:x,baseClassName:b,maybePostfixModifierPosition:A}=n(g);if(_){h=g+(h.length>0?" "+h:h);continue}let S=!!A,y=s(S?b.substring(0,A):b);if(!y){if(!S){h=g+(h.length>0?" "+h:h);continue}if(y=s(b),!y){h=g+(h.length>0?" "+h:h);continue}S=!1}const w=v.length===0?"":v.length===1?v[0]:c(v).join(":"),R=x?w+Gp:w,D=R+y;if(u.indexOf(D)>-1)continue;u.push(D);const N=o(y,S);for(let F=0;F<N.length;++F){const O=N[F];u.push(R+O)}h=g+(h.length>0?" "+h:h)}return h},XA=(...i)=>{let t=0,n,s,o="";for(;t<i.length;)(n=i[t++])&&(s=yb(n))&&(o&&(o+=" "),o+=s);return o},yb=i=>{if(typeof i=="string")return i;let t,n="";for(let s=0;s<i.length;s++)i[s]&&(t=yb(i[s]))&&(n&&(n+=" "),n+=t);return n},WA=(i,...t)=>{let n,s,o,c;const u=h=>{const p=t.reduce((g,_)=>_(g),i());return n=HA(p),s=n.cache.get,o=n.cache.set,c=f,f(h)},f=h=>{const p=s(h);if(p)return p;const g=kA(h,n);return o(h,g),g};return c=u,(...h)=>c(XA(...h))},jA=[],Tn=i=>{const t=n=>n[i]||jA;return t.isThemeGetter=!0,t},Sb=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,bb=/^\((?:(\w[\w-]*):)?(.+)\)$/i,qA=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,YA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,QA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,JA=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ss=i=>qA.test(i),ye=i=>!!i&&!Number.isNaN(Number(i)),bs=i=>!!i&&Number.isInteger(Number(i)),kh=i=>i.endsWith("%")&&ye(i.slice(0,-1)),Na=i=>YA.test(i),Mb=()=>!0,$A=i=>KA.test(i)&&!ZA.test(i),og=()=>!1,tw=i=>QA.test(i),ew=i=>JA.test(i),nw=i=>!Wt(i)&&!Kt(i),iw=i=>Fs(i,Ab,og),Wt=i=>Sb.test(i),nr=i=>Fs(i,wb,$A),Yx=i=>Fs(i,fw,ye),aw=i=>Fs(i,Cb,Mb),sw=i=>Fs(i,Rb,og),Kx=i=>Fs(i,Eb,og),rw=i=>Fs(i,Tb,ew),Eu=i=>Fs(i,Db,tw),Kt=i=>bb.test(i),Nl=i=>Sr(i,wb),ow=i=>Sr(i,Rb),Zx=i=>Sr(i,Eb),lw=i=>Sr(i,Ab),cw=i=>Sr(i,Tb),Tu=i=>Sr(i,Db,!0),uw=i=>Sr(i,Cb,!0),Fs=(i,t,n)=>{const s=Sb.exec(i);return s?s[1]?t(s[1]):n(s[2]):!1},Sr=(i,t,n=!1)=>{const s=bb.exec(i);return s?s[1]?t(s[1]):n:!1},Eb=i=>i==="position"||i==="percentage",Tb=i=>i==="image"||i==="url",Ab=i=>i==="length"||i==="size"||i==="bg-size",wb=i=>i==="length",fw=i=>i==="number",Rb=i=>i==="family-name",Cb=i=>i==="number"||i==="weight",Db=i=>i==="shadow",dw=()=>{const i=Tn("color"),t=Tn("font"),n=Tn("text"),s=Tn("font-weight"),o=Tn("tracking"),c=Tn("leading"),u=Tn("breakpoint"),f=Tn("container"),h=Tn("spacing"),p=Tn("radius"),g=Tn("shadow"),_=Tn("inset-shadow"),v=Tn("text-shadow"),x=Tn("drop-shadow"),b=Tn("blur"),A=Tn("perspective"),S=Tn("aspect"),y=Tn("ease"),w=Tn("animate"),R=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],N=()=>[...D(),Kt,Wt],F=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],E=()=>[Kt,Wt,h],L=()=>[Ss,"full","auto",...E()],at=()=>[bs,"none","subgrid",Kt,Wt],V=()=>["auto",{span:["full",bs,Kt,Wt]},bs,Kt,Wt],K=()=>[bs,"auto",Kt,Wt],$=()=>["auto","min","max","fr",Kt,Wt],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],J=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...E()],z=()=>[Ss,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],Q=()=>[Ss,"screen","full","dvw","lvw","svw","min","max","fit",...E()],ft=()=>[Ss,"screen","full","lh","dvh","lvh","svh","min","max","fit",...E()],it=()=>[i,Kt,Wt],I=()=>[...D(),Zx,Kx,{position:[Kt,Wt]}],j=()=>["no-repeat",{repeat:["","x","y","space","round"]}],_t=()=>["auto","cover","contain",lw,iw,{size:[Kt,Wt]}],wt=()=>[kh,Nl,nr],Rt=()=>["","none","full",p,Kt,Wt],Z=()=>["",ye,Nl,nr],gt=()=>["solid","dashed","dotted","double"],bt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Dt=()=>[ye,kh,Zx,Kx],$t=()=>["","none",b,Kt,Wt],ee=()=>["none",ye,Kt,Wt],qe=()=>["none",ye,Kt,Wt],_e=()=>[ye,Kt,Wt],de=()=>[Ss,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Na],breakpoint:[Na],color:[Mb],container:[Na],"drop-shadow":[Na],ease:["in","out","in-out"],font:[nw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Na],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Na],shadow:[Na],spacing:["px",ye],text:[Na],"text-shadow":[Na],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ss,Wt,Kt,S]}],container:["container"],columns:[{columns:[ye,Wt,Kt,f]}],"break-after":[{"break-after":R()}],"break-before":[{"break-before":R()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:N()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{"inset-s":L(),start:L()}],end:[{"inset-e":L(),end:L()}],"inset-bs":[{"inset-bs":L()}],"inset-be":[{"inset-be":L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[bs,"auto",Kt,Wt]}],basis:[{basis:[Ss,"full","auto",f,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ye,Ss,"auto","initial","none",Wt]}],grow:[{grow:["",ye,Kt,Wt]}],shrink:[{shrink:["",ye,Kt,Wt]}],order:[{order:[bs,"first","last","none",Kt,Wt]}],"grid-cols":[{"grid-cols":at()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":at()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":$()}],"auto-rows":[{"auto-rows":$()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...J(),"normal"]}],"justify-self":[{"justify-self":["auto",...J()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...J(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...J(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...J(),"baseline"]}],"place-self":[{"place-self":["auto",...J()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pbs:[{pbs:E()}],pbe:[{pbe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mbs:[{mbs:P()}],mbe:[{mbe:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],"inline-size":[{inline:["auto",...Q()]}],"min-inline-size":[{"min-inline":["auto",...Q()]}],"max-inline-size":[{"max-inline":["none",...Q()]}],"block-size":[{block:["auto",...ft()]}],"min-block-size":[{"min-block":["auto",...ft()]}],"max-block-size":[{"max-block":["none",...ft()]}],w:[{w:[f,"screen",...z()]}],"min-w":[{"min-w":[f,"screen","none",...z()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[u]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",n,Nl,nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,uw,aw]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",kh,Wt]}],"font-family":[{font:[ow,sw,t]}],"font-features":[{"font-features":[Wt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Kt,Wt]}],"line-clamp":[{"line-clamp":[ye,"none",Kt,Yx]}],leading:[{leading:[c,...E()]}],"list-image":[{"list-image":["none",Kt,Wt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Kt,Wt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:it()}],"text-color":[{text:it()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...gt(),"wavy"]}],"text-decoration-thickness":[{decoration:[ye,"from-font","auto",Kt,nr]}],"text-decoration-color":[{decoration:it()}],"underline-offset":[{"underline-offset":[ye,"auto",Kt,Wt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Kt,Wt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Kt,Wt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:I()}],"bg-repeat":[{bg:j()}],"bg-size":[{bg:_t()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},bs,Kt,Wt],radial:["",Kt,Wt],conic:[bs,Kt,Wt]},cw,rw]}],"bg-color":[{bg:it()}],"gradient-from-pos":[{from:wt()}],"gradient-via-pos":[{via:wt()}],"gradient-to-pos":[{to:wt()}],"gradient-from":[{from:it()}],"gradient-via":[{via:it()}],"gradient-to":[{to:it()}],rounded:[{rounded:Rt()}],"rounded-s":[{"rounded-s":Rt()}],"rounded-e":[{"rounded-e":Rt()}],"rounded-t":[{"rounded-t":Rt()}],"rounded-r":[{"rounded-r":Rt()}],"rounded-b":[{"rounded-b":Rt()}],"rounded-l":[{"rounded-l":Rt()}],"rounded-ss":[{"rounded-ss":Rt()}],"rounded-se":[{"rounded-se":Rt()}],"rounded-ee":[{"rounded-ee":Rt()}],"rounded-es":[{"rounded-es":Rt()}],"rounded-tl":[{"rounded-tl":Rt()}],"rounded-tr":[{"rounded-tr":Rt()}],"rounded-br":[{"rounded-br":Rt()}],"rounded-bl":[{"rounded-bl":Rt()}],"border-w":[{border:Z()}],"border-w-x":[{"border-x":Z()}],"border-w-y":[{"border-y":Z()}],"border-w-s":[{"border-s":Z()}],"border-w-e":[{"border-e":Z()}],"border-w-bs":[{"border-bs":Z()}],"border-w-be":[{"border-be":Z()}],"border-w-t":[{"border-t":Z()}],"border-w-r":[{"border-r":Z()}],"border-w-b":[{"border-b":Z()}],"border-w-l":[{"border-l":Z()}],"divide-x":[{"divide-x":Z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...gt(),"hidden","none"]}],"divide-style":[{divide:[...gt(),"hidden","none"]}],"border-color":[{border:it()}],"border-color-x":[{"border-x":it()}],"border-color-y":[{"border-y":it()}],"border-color-s":[{"border-s":it()}],"border-color-e":[{"border-e":it()}],"border-color-bs":[{"border-bs":it()}],"border-color-be":[{"border-be":it()}],"border-color-t":[{"border-t":it()}],"border-color-r":[{"border-r":it()}],"border-color-b":[{"border-b":it()}],"border-color-l":[{"border-l":it()}],"divide-color":[{divide:it()}],"outline-style":[{outline:[...gt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ye,Kt,Wt]}],"outline-w":[{outline:["",ye,Nl,nr]}],"outline-color":[{outline:it()}],shadow:[{shadow:["","none",g,Tu,Eu]}],"shadow-color":[{shadow:it()}],"inset-shadow":[{"inset-shadow":["none",_,Tu,Eu]}],"inset-shadow-color":[{"inset-shadow":it()}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:it()}],"ring-offset-w":[{"ring-offset":[ye,nr]}],"ring-offset-color":[{"ring-offset":it()}],"inset-ring-w":[{"inset-ring":Z()}],"inset-ring-color":[{"inset-ring":it()}],"text-shadow":[{"text-shadow":["none",v,Tu,Eu]}],"text-shadow-color":[{"text-shadow":it()}],opacity:[{opacity:[ye,Kt,Wt]}],"mix-blend":[{"mix-blend":[...bt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":bt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ye]}],"mask-image-linear-from-pos":[{"mask-linear-from":Dt()}],"mask-image-linear-to-pos":[{"mask-linear-to":Dt()}],"mask-image-linear-from-color":[{"mask-linear-from":it()}],"mask-image-linear-to-color":[{"mask-linear-to":it()}],"mask-image-t-from-pos":[{"mask-t-from":Dt()}],"mask-image-t-to-pos":[{"mask-t-to":Dt()}],"mask-image-t-from-color":[{"mask-t-from":it()}],"mask-image-t-to-color":[{"mask-t-to":it()}],"mask-image-r-from-pos":[{"mask-r-from":Dt()}],"mask-image-r-to-pos":[{"mask-r-to":Dt()}],"mask-image-r-from-color":[{"mask-r-from":it()}],"mask-image-r-to-color":[{"mask-r-to":it()}],"mask-image-b-from-pos":[{"mask-b-from":Dt()}],"mask-image-b-to-pos":[{"mask-b-to":Dt()}],"mask-image-b-from-color":[{"mask-b-from":it()}],"mask-image-b-to-color":[{"mask-b-to":it()}],"mask-image-l-from-pos":[{"mask-l-from":Dt()}],"mask-image-l-to-pos":[{"mask-l-to":Dt()}],"mask-image-l-from-color":[{"mask-l-from":it()}],"mask-image-l-to-color":[{"mask-l-to":it()}],"mask-image-x-from-pos":[{"mask-x-from":Dt()}],"mask-image-x-to-pos":[{"mask-x-to":Dt()}],"mask-image-x-from-color":[{"mask-x-from":it()}],"mask-image-x-to-color":[{"mask-x-to":it()}],"mask-image-y-from-pos":[{"mask-y-from":Dt()}],"mask-image-y-to-pos":[{"mask-y-to":Dt()}],"mask-image-y-from-color":[{"mask-y-from":it()}],"mask-image-y-to-color":[{"mask-y-to":it()}],"mask-image-radial":[{"mask-radial":[Kt,Wt]}],"mask-image-radial-from-pos":[{"mask-radial-from":Dt()}],"mask-image-radial-to-pos":[{"mask-radial-to":Dt()}],"mask-image-radial-from-color":[{"mask-radial-from":it()}],"mask-image-radial-to-color":[{"mask-radial-to":it()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[ye]}],"mask-image-conic-from-pos":[{"mask-conic-from":Dt()}],"mask-image-conic-to-pos":[{"mask-conic-to":Dt()}],"mask-image-conic-from-color":[{"mask-conic-from":it()}],"mask-image-conic-to-color":[{"mask-conic-to":it()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:I()}],"mask-repeat":[{mask:j()}],"mask-size":[{mask:_t()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Kt,Wt]}],filter:[{filter:["","none",Kt,Wt]}],blur:[{blur:$t()}],brightness:[{brightness:[ye,Kt,Wt]}],contrast:[{contrast:[ye,Kt,Wt]}],"drop-shadow":[{"drop-shadow":["","none",x,Tu,Eu]}],"drop-shadow-color":[{"drop-shadow":it()}],grayscale:[{grayscale:["",ye,Kt,Wt]}],"hue-rotate":[{"hue-rotate":[ye,Kt,Wt]}],invert:[{invert:["",ye,Kt,Wt]}],saturate:[{saturate:[ye,Kt,Wt]}],sepia:[{sepia:["",ye,Kt,Wt]}],"backdrop-filter":[{"backdrop-filter":["","none",Kt,Wt]}],"backdrop-blur":[{"backdrop-blur":$t()}],"backdrop-brightness":[{"backdrop-brightness":[ye,Kt,Wt]}],"backdrop-contrast":[{"backdrop-contrast":[ye,Kt,Wt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ye,Kt,Wt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ye,Kt,Wt]}],"backdrop-invert":[{"backdrop-invert":["",ye,Kt,Wt]}],"backdrop-opacity":[{"backdrop-opacity":[ye,Kt,Wt]}],"backdrop-saturate":[{"backdrop-saturate":[ye,Kt,Wt]}],"backdrop-sepia":[{"backdrop-sepia":["",ye,Kt,Wt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Kt,Wt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ye,"initial",Kt,Wt]}],ease:[{ease:["linear","initial",y,Kt,Wt]}],delay:[{delay:[ye,Kt,Wt]}],animate:[{animate:["none",w,Kt,Wt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Kt,Wt]}],"perspective-origin":[{"perspective-origin":N()}],rotate:[{rotate:ee()}],"rotate-x":[{"rotate-x":ee()}],"rotate-y":[{"rotate-y":ee()}],"rotate-z":[{"rotate-z":ee()}],scale:[{scale:qe()}],"scale-x":[{"scale-x":qe()}],"scale-y":[{"scale-y":qe()}],"scale-z":[{"scale-z":qe()}],"scale-3d":["scale-3d"],skew:[{skew:_e()}],"skew-x":[{"skew-x":_e()}],"skew-y":[{"skew-y":_e()}],transform:[{transform:[Kt,Wt,"","none","gpu","cpu"]}],"transform-origin":[{origin:N()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:de()}],"translate-x":[{"translate-x":de()}],"translate-y":[{"translate-y":de()}],"translate-z":[{"translate-z":de()}],"translate-none":["translate-none"],accent:[{accent:it()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:it()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Kt,Wt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mbs":[{"scroll-mbs":E()}],"scroll-mbe":[{"scroll-mbe":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pbs":[{"scroll-pbs":E()}],"scroll-pbe":[{"scroll-pbe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Kt,Wt]}],fill:[{fill:["none",...it()]}],"stroke-w":[{stroke:[ye,Nl,nr,Yx]}],stroke:[{stroke:["none",...it()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},hw=WA(dw);function oa(...i){return hw(EA(i))}const lg=Mt.createContext({});function cg(i){const t=Mt.useRef(null);return t.current===null&&(t.current=i()),t.current}const pw=typeof window<"u",Lb=pw?Mt.useLayoutEffect:Mt.useEffect,Mf=Mt.createContext(null);function ug(i,t){i.indexOf(t)===-1&&i.push(t)}function Co(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const da=(i,t,n)=>n>t?t:n<i?i:n;let fg=()=>{};const Xa={},Ub=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function Nb(i){return typeof i=="object"&&i!==null}const Pb=i=>/^0[^.\s]+$/u.test(i);function Ob(i){let t;return()=>(t===void 0&&(t=i()),t)}const Di=i=>i,mw=(i,t)=>n=>t(i(n)),ac=(...i)=>i.reduce(mw),Do=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class dg{constructor(){this.subscriptions=[]}add(t){return ug(this.subscriptions,t),()=>Co(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Li=i=>i*1e3,Ci=i=>i/1e3;function Fb(i,t){return t?i*(1e3/t):0}const gw=(i,t,n)=>{const s=t-i;return((n-i)%s+s)%s+i},Ib=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,vw=1e-7,_w=12;function xw(i,t,n,s,o){let c,u,f=0;do u=t+(n-t)/2,c=Ib(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>vw&&++f<_w);return u}function sc(i,t,n,s){if(i===t&&n===s)return Di;const o=c=>xw(c,0,1,i,n);return c=>c===0||c===1?c:Ib(o(c),t,s)}const Bb=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,zb=i=>t=>1-i(1-t),Vb=sc(.33,1.53,.69,.99),hg=zb(Vb),Hb=Bb(hg),Gb=i=>(i*=2)<1?.5*hg(i):.5*(2-Math.pow(2,-10*(i-1))),pg=i=>1-Math.sin(Math.acos(i)),kb=zb(pg),Xb=Bb(pg),yw=sc(.42,0,1,1),Sw=sc(0,0,.58,1),Wb=sc(.42,0,.58,1),jb=i=>Array.isArray(i)&&typeof i[0]!="number";function qb(i,t){return jb(i)?i[gw(0,i.length,t)]:i}const Yb=i=>Array.isArray(i)&&typeof i[0]=="number",bw={linear:Di,easeIn:yw,easeInOut:Wb,easeOut:Sw,circIn:pg,circInOut:Xb,circOut:kb,backIn:hg,backInOut:Hb,backOut:Vb,anticipate:Gb},Mw=i=>typeof i=="string",Qx=i=>{if(Yb(i)){fg(i.length===4);const[t,n,s,o]=i;return sc(t,n,s,o)}else if(Mw(i))return bw[i];return i},Au=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ew(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function h(g){u.has(g)&&(p.schedule(g),i()),g(f)}const p={schedule:(g,_=!1,v=!1)=>{const b=v&&o?n:s;return _&&u.add(g),b.has(g)||b.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(f=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(h),n.clear(),o=!1,c&&(c=!1,p.process(g))}};return p}const Tw=40;function Kb(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=Au.reduce((R,D)=>(R[D]=Ew(c),R),{}),{setup:f,read:h,resolveKeyframes:p,preUpdate:g,update:_,preRender:v,render:x,postRender:b}=u,A=()=>{const R=Xa.useManualTiming?o.timestamp:performance.now();n=!1,Xa.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(R-o.timestamp,Tw),1)),o.timestamp=R,o.isProcessing=!0,f.process(o),h.process(o),p.process(o),g.process(o),_.process(o),v.process(o),x.process(o),b.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(A))},S=()=>{n=!0,s=!0,o.isProcessing||i(A)};return{schedule:Au.reduce((R,D)=>{const N=u[D];return R[D]=(F,O=!1,E=!1)=>(n||S(),N.schedule(F,O,E)),R},{}),cancel:R=>{for(let D=0;D<Au.length;D++)u[Au[D]].cancel(R)},state:o,steps:u}}const{schedule:Ke,cancel:Ps,state:On,steps:Xh}=Kb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Di,!0);let $u;function Aw(){$u=void 0}const qn={now:()=>($u===void 0&&qn.set(On.isProcessing||Xa.useManualTiming?On.timestamp:performance.now()),$u),set:i=>{$u=i,queueMicrotask(Aw)}},Zb=i=>t=>typeof t=="string"&&t.startsWith(i),Qb=Zb("--"),ww=Zb("var(--"),mg=i=>ww(i)?Rw.test(i.split("/*")[0].trim()):!1,Rw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Jx(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Fo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Kl={...Fo,transform:i=>da(0,1,i)},wu={...Fo,default:1},Wl=i=>Math.round(i*1e5)/1e5,gg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Cw(i){return i==null}const Dw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vg=(i,t)=>n=>!!(typeof n=="string"&&Dw.test(n)&&n.startsWith(i)||t&&!Cw(n)&&Object.prototype.hasOwnProperty.call(n,t)),Jb=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,f]=s.match(gg);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},Lw=i=>da(0,255,i),Wh={...Fo,transform:i=>Math.round(Lw(i))},pr={test:vg("rgb","red"),parse:Jb("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+Wh.transform(i)+", "+Wh.transform(t)+", "+Wh.transform(n)+", "+Wl(Kl.transform(s))+")"};function Uw(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const kp={test:vg("#"),parse:Uw,transform:pr.transform},rc=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),Cs=rc("deg"),la=rc("%"),jt=rc("px"),Nw=rc("vh"),Pw=rc("vw"),$x={...la,parse:i=>la.parse(i)/100,transform:i=>la.transform(i*100)},So={test:vg("hsl","hue"),parse:Jb("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+la.transform(Wl(t))+", "+la.transform(Wl(n))+", "+Wl(Kl.transform(s))+")"},yn={test:i=>pr.test(i)||kp.test(i)||So.test(i),parse:i=>pr.test(i)?pr.parse(i):So.test(i)?So.parse(i):kp.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?pr.transform(i):So.transform(i),getAnimatableNone:i=>{const t=yn.parse(i);return t.alpha=0,yn.transform(t)}},Ow=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Fw(i){var t,n;return isNaN(i)&&typeof i=="string"&&(((t=i.match(gg))==null?void 0:t.length)||0)+(((n=i.match(Ow))==null?void 0:n.length)||0)>0}const $b="number",tM="color",Iw="var",Bw="var(",ty="${}",zw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Zl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const f=t.replace(zw,h=>(yn.test(h)?(s.color.push(c),o.push(tM),n.push(yn.parse(h))):h.startsWith(Bw)?(s.var.push(c),o.push(Iw),n.push(h)):(s.number.push(c),o.push($b),n.push(parseFloat(h))),++c,ty)).split(ty);return{values:n,split:f,indexes:s,types:o}}function eM(i){return Zl(i).values}function nM(i){const{split:t,types:n}=Zl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const f=n[u];f===$b?c+=Wl(o[u]):f===tM?c+=yn.transform(o[u]):c+=o[u]}return c}}const Vw=i=>typeof i=="number"?0:yn.test(i)?yn.getAnimatableNone(i):i;function Hw(i){const t=eM(i);return nM(i)(t.map(Vw))}const Yi={test:Fw,parse:eM,createTransformer:nM,getAnimatableNone:Hw};function jh(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function Gw({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,h=2*n-f;o=jh(h,f,i+1/3),c=jh(h,f,i),u=jh(h,f,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function hf(i,t){return n=>n>0?t:i}const nn=(i,t,n)=>i+(t-i)*n,qh=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},kw=[kp,pr,So],Xw=i=>kw.find(t=>t.test(i));function ey(i){const t=Xw(i);if(!t)return!1;let n=t.parse(i);return t===So&&(n=Gw(n)),n}const ny=(i,t)=>{const n=ey(i),s=ey(t);if(!n||!s)return hf(i,t);const o={...n};return c=>(o.red=qh(n.red,s.red,c),o.green=qh(n.green,s.green,c),o.blue=qh(n.blue,s.blue,c),o.alpha=nn(n.alpha,s.alpha,c),pr.transform(o))},Xp=new Set(["none","hidden"]);function Ww(i,t){return Xp.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function jw(i,t){return n=>nn(i,t,n)}function _g(i){return typeof i=="number"?jw:typeof i=="string"?mg(i)?hf:yn.test(i)?ny:Kw:Array.isArray(i)?iM:typeof i=="object"?yn.test(i)?ny:qw:hf}function iM(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>_g(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function qw(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=_g(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function Yw(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],f=i.values[u]??0;n[o]=f,s[c]++}return n}const Kw=(i,t)=>{const n=Yi.createTransformer(t),s=Zl(i),o=Zl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Xp.has(i)&&!o.values.length||Xp.has(t)&&!s.values.length?Ww(i,t):ac(iM(Yw(s,o),o.values),n):hf(i,t)};function aM(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?nn(i,t,n):_g(i)(i,t)}const Zw=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Ke.update(t,n),stop:()=>Ps(t),now:()=>On.isProcessing?On.timestamp:qn.now()}},sM=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},pf=2e4;function xg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<pf;)t+=n,s=i.next(t);return t>=pf?1/0:t}function rM(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(xg(s),pf);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ci(o)}}const Qw=5;function oM(i,t,n){const s=Math.max(t-Qw,0);return Fb(n-i(s),t-s)}const on={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Yh=.001;function Jw({duration:i=on.duration,bounce:t=on.bounce,velocity:n=on.velocity,mass:s=on.mass}){let o,c,u=1-t;u=da(on.minDamping,on.maxDamping,u),i=da(on.minDuration,on.maxDuration,Ci(i)),u<1?(o=p=>{const g=p*u,_=g*i,v=g-n,x=Wp(p,u),b=Math.exp(-_);return Yh-v/x*b},c=p=>{const _=p*u*i,v=_*n+n,x=Math.pow(u,2)*Math.pow(p,2)*i,b=Math.exp(-_),A=Wp(Math.pow(p,2),u);return(-o(p)+Yh>0?-1:1)*((v-x)*b)/A}):(o=p=>{const g=Math.exp(-p*i),_=(p-n)*i+1;return-Yh+g*_},c=p=>{const g=Math.exp(-p*i),_=(n-p)*(i*i);return g*_});const f=5/i,h=tR(o,c,f);if(i=Li(i),isNaN(h))return{stiffness:on.stiffness,damping:on.damping,duration:i};{const p=Math.pow(h,2)*s;return{stiffness:p,damping:u*2*Math.sqrt(s*p),duration:i}}}const $w=12;function tR(i,t,n){let s=n;for(let o=1;o<$w;o++)s=s-i(s)/t(s);return s}function Wp(i,t){return i*Math.sqrt(1-t*t)}const eR=["duration","bounce"],nR=["stiffness","damping","mass"];function iy(i,t){return t.some(n=>i[n]!==void 0)}function iR(i){let t={velocity:on.velocity,stiffness:on.stiffness,damping:on.damping,mass:on.mass,isResolvedFromDuration:!1,...i};if(!iy(i,nR)&&iy(i,eR))if(t.velocity=0,i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*da(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:on.mass,stiffness:o,damping:c}}else{const n=Jw({...i,velocity:0});t={...t,...n,mass:on.mass},t.isResolvedFromDuration=!0}return t}function Ql(i=on.visualDuration,t=on.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:c},{stiffness:h,damping:p,mass:g,duration:_,velocity:v,isResolvedFromDuration:x}=iR({...n,velocity:-Ci(n.velocity||0)}),b=v||0,A=p/(2*Math.sqrt(h*g)),S=u-c,y=Ci(Math.sqrt(h/g)),w=Math.abs(S)<5;s||(s=w?on.restSpeed.granular:on.restSpeed.default),o||(o=w?on.restDelta.granular:on.restDelta.default);let R;if(A<1){const N=Wp(y,A);R=F=>{const O=Math.exp(-A*y*F);return u-O*((b+A*y*S)/N*Math.sin(N*F)+S*Math.cos(N*F))}}else if(A===1)R=N=>u-Math.exp(-y*N)*(S+(b+y*S)*N);else{const N=y*Math.sqrt(A*A-1);R=F=>{const O=Math.exp(-A*y*F),E=Math.min(N*F,300);return u-O*((b+A*y*S)*Math.sinh(E)+N*S*Math.cosh(E))/N}}const D={calculatedDuration:x&&_||null,next:N=>{const F=R(N);if(x)f.done=N>=_;else{let O=N===0?b:0;A<1&&(O=N===0?Li(b):oM(R,N,F));const E=Math.abs(O)<=s,L=Math.abs(u-F)<=o;f.done=E&&L}return f.value=f.done?u:F,f},toString:()=>{const N=Math.min(xg(D),pf),F=sM(O=>D.next(N*O).value,N,30);return N+"ms "+F},toTransition:()=>{}};return D}Ql.applyToOptions=i=>{const t=rM(i,100,Ql);return i.ease=t.ease,i.duration=Li(t.duration),i.type="keyframes",i};function jp({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:h,restDelta:p=.5,restSpeed:g}){const _=i[0],v={done:!1,value:_},x=E=>f!==void 0&&E<f||h!==void 0&&E>h,b=E=>f===void 0?h:h===void 0||Math.abs(f-E)<Math.abs(h-E)?f:h;let A=n*t;const S=_+A,y=u===void 0?S:u(S);y!==S&&(A=y-_);const w=E=>-A*Math.exp(-E/s),R=E=>y+w(E),D=E=>{const L=w(E),at=R(E);v.done=Math.abs(L)<=p,v.value=v.done?y:at};let N,F;const O=E=>{x(v.value)&&(N=E,F=Ql({keyframes:[v.value,b(v.value)],velocity:oM(R,E,v.value),damping:o,stiffness:c,restDelta:p,restSpeed:g}))};return O(0),{calculatedDuration:null,next:E=>{let L=!1;return!F&&N===void 0&&(L=!0,D(E),O(E)),N!==void 0&&E>=N?F.next(E-N):(!L&&D(E),v)}}}function aR(i,t,n){const s=[],o=n||Xa.mix||aM,c=i.length-1;for(let u=0;u<c;u++){let f=o(i[u],i[u+1]);if(t){const h=Array.isArray(t)?t[u]||Di:t;f=ac(h,f)}s.push(f)}return s}function sR(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(fg(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const f=aR(t,s,o),h=f.length,p=g=>{if(u&&g<i[0])return t[0];let _=0;if(h>1)for(;_<i.length-2&&!(g<i[_+1]);_++);const v=Do(i[_],i[_+1],g);return f[_](v)};return n?g=>p(da(i[0],i[c-1],g)):p}function lM(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Do(0,t,s);i.push(nn(n,1,o))}}function cM(i){const t=[0];return lM(t,i.length-1),t}function rR(i,t){return i.map(n=>n*t)}function oR(i,t){return i.map(()=>t||Wb).splice(0,i.length-1)}function jl({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=jb(s)?s.map(Qx):Qx(s),c={done:!1,value:t[0]},u=rR(n&&n.length===t.length?n:cM(t),i),f=sR(u,t,{ease:Array.isArray(o)?o:oR(t,o)});return{calculatedDuration:i,next:h=>(c.value=f(h),c.done=h>=i,c)}}const lR=i=>i!==null;function yg(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(lR),f=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!f||s===void 0?c[f]:s}const cR={decay:jp,inertia:jp,tween:jl,keyframes:jl,spring:Ql};function uM(i){typeof i.type=="string"&&(i.type=cR[i.type])}class Sg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const uR=i=>i/100;class bg extends Sg{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,o;const{motionValue:n}=this.options;n&&n.updatedAt!==qn.now()&&this.tick(qn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(s=this.options).onStop)==null||o.call(s))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;uM(t);const{type:n=jl,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:f}=t;const h=n||jl;h!==jl&&typeof f[0]!="number"&&(this.mixKeyframes=ac(uR,aM(f[0],f[1])),f=[0,100]);const p=h({...t,keyframes:f});c==="mirror"&&(this.mirroredGenerator=h({...t,keyframes:[...f].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=xg(p));const{calculatedDuration:g}=p;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=p}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:h}=this;if(this.startTime===null)return s.next(0);const{delay:p=0,keyframes:g,repeat:_,repeatType:v,repeatDelay:x,type:b,onUpdate:A,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-p*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,D=s;if(_){const E=Math.min(this.currentTime,o)/f;let L=Math.floor(E),at=E%1;!at&&E>=1&&(at=1),at===1&&L--,L=Math.min(L,_+1),!!(L%2)&&(v==="reverse"?(at=1-at,x&&(at-=x/f)):v==="mirror"&&(D=u)),R=da(0,1,at)*f}const N=w?{done:!1,value:g[0]}:D.next(R);c&&(N.value=c(N.value));let{done:F}=N;!w&&h!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return O&&b!==jp&&(N.value=yg(g,this.options,S,this.speed)),A&&A(N.value),O&&this.finish(),N}then(t,n){return this.finished.then(t,n)}get duration(){return Ci(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ci(t)}get time(){return Ci(this.currentTime)}set time(t){var n;t=Li(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(qn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ci(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=Zw,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function fR(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const mr=i=>i*180/Math.PI,qp=i=>{const t=mr(Math.atan2(i[1],i[0]));return Yp(t)},dR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:qp,rotateZ:qp,skewX:i=>mr(Math.atan(i[1])),skewY:i=>mr(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Yp=i=>(i=i%360,i<0&&(i+=360),i),ay=qp,sy=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),ry=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),hR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sy,scaleY:ry,scale:i=>(sy(i)+ry(i))/2,rotateX:i=>Yp(mr(Math.atan2(i[6],i[5]))),rotateY:i=>Yp(mr(Math.atan2(-i[2],i[0]))),rotateZ:ay,rotate:ay,skewX:i=>mr(Math.atan(i[4])),skewY:i=>mr(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Kp(i){return i.includes("scale")?1:0}function Zp(i,t){if(!i||i==="none")return Kp(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=hR,o=n;else{const f=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=dR,o=f}if(!o)return Kp(t);const c=s[t],u=o[1].split(",").map(mR);return typeof c=="function"?c(u):u[c]}const pR=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Zp(n,t)};function mR(i){return parseFloat(i.trim())}const Io=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Bo=new Set(Io),oy=i=>i===Fo||i===jt,gR=new Set(["x","y","z"]),vR=Io.filter(i=>!gR.has(i));function _R(i){const t=[];return vR.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Us={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Zp(t,"x"),y:(i,{transform:t})=>Zp(t,"y")};Us.translateX=Us.x;Us.translateY=Us.y;const _r=new Set;let Qp=!1,Jp=!1,$p=!1;function fM(){if(Jp){const i=Array.from(_r).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=_R(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{var f;(f=s.getValue(c))==null||f.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Jp=!1,Qp=!1,_r.forEach(i=>i.complete($p)),_r.clear()}function dM(){_r.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Jp=!0)})}function xR(){$p=!0,dM(),fM(),$p=!1}class Mg{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(_r.add(this),Qp||(Qp=!0,Ke.read(dM),Ke.resolveKeyframes(fM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const f=s.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}fR(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),_r.delete(this)}cancel(){this.state==="scheduled"&&(_r.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const yR=i=>i.startsWith("--");function SR(i,t,n){yR(t)?i.style.setProperty(t,n):i.style[t]=n}const bR={};function hM(i,t){const n=Ob(i);return()=>bR[t]??n()}const MR=hM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),pM=hM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gl=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gl([0,.65,.55,1]),circOut:Gl([.55,0,1,.45]),backIn:Gl([.31,.01,.66,-.59]),backOut:Gl([.33,1.53,.69,.99])};function mM(i,t){if(i)return typeof i=="function"?pM()?sM(i,t):"ease-out":Yb(i)?Gl(i):Array.isArray(i)?i.map(n=>mM(n,t)||ly.easeOut):ly[i]}function ER(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:h}={},p=void 0){const g={[t]:n};h&&(g.offset=h);const _=mM(f,o);Array.isArray(_)&&(g.easing=_);const v={delay:s,duration:o,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(v.pseudoElement=p),i.animate(g,v)}function Eg(i){return typeof i=="function"&&"applyToOptions"in i}function TR({type:i,...t}){return Eg(i)&&pM()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class gM extends Sg{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:h}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,fg(typeof t.type!="string");const p=TR(t);this.animation=ER(n,s,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=yg(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(g),SR(n,s,g),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,o;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((o=(s=this.animation).commitStyles)==null||o.call(s))}get duration(){var n,s;const t=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ci(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ci(t)}get time(){return Ci(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Li(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:s,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&MR()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Di):o(this)}}const vM={anticipate:Gb,backInOut:Hb,circInOut:Xb};function AR(i){return i in vM}function wR(i){typeof i.ease=="string"&&AR(i.ease)&&(i.ease=vM[i.ease])}const Kh=10;class RR extends gM{constructor(t){wR(t),uM(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new bg({...u,autoplay:!1}),h=Math.max(Kh,qn.now()-this.startTime),p=da(0,Kh,h-Kh);n.setWithVelocity(f.sample(Math.max(0,h-p)).value,f.sample(h).value,p),f.stop()}}const cy=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Yi.test(i)||i==="0")&&!i.startsWith("url("));function CR(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function DR(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=cy(o,t),f=cy(c,t);return!u||!f?!1:CR(i)||(n==="spring"||Eg(n))&&s}function tm(i){i.duration=0,i.type="keyframes"}const LR=new Set(["opacity","clipPath","filter","transform"]),UR=Ob(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function NR(i){var g;const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=t.owner.getProps();return UR()&&n&&LR.has(n)&&(n!=="transform"||!p)&&!h&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const PR=40;class OR extends Sg{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:h,motionValue:p,element:g,..._}){var b;super(),this.stop=()=>{var A,S;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=qn.now();const v={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:h,motionValue:p,element:g,..._},x=(g==null?void 0:g.KeyframeResolver)||Mg;this.keyframeResolver=new x(f,(A,S,y)=>this.onKeyframesResolved(A,S,v,!y),h,p,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,s,o){var S,y;this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:h,isHandoff:p,onUpdate:g}=s;this.resolvedAt=qn.now(),DR(t,c,u,f)||((Xa.instantAnimations||!h)&&(g==null||g(yg(t,s,n))),t[0]=t[t.length-1],tm(s),s.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>PR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},x=!p&&NR(v),b=(y=(S=v.motionValue)==null?void 0:S.owner)==null?void 0:y.current,A=x?new RR({...v,element:b}):new bg(v);A.finished.then(()=>{this.notifyFinished()}).catch(Di),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),xR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}class FR{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let s=0;s<this.animations.length;s++)this.animations[s][t]=n}attachTimeline(t){const n=this.animations.map(s=>s.attachTimeline(t));return()=>{n.forEach((s,o)=>{s&&s(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return uy(this.animations,"duration")}get iterationDuration(){return uy(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function uy(i,t){let n=0;for(let s=0;s<i.length;s++){const o=i[s][t];o!==null&&o>n&&(n=o)}return n}class IR extends FR{then(t,n){return this.finished.finally(t).then(()=>{})}}function _M(i,t,n,s=0,o=1){const c=Array.from(i).sort((p,g)=>p.sortNodePosition(g)).indexOf(t),u=i.size,f=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:f-c*s}const BR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zR(i){const t=BR.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function xM(i,t,n=1){const[s,o]=zR(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return Ub(u)?parseFloat(u):u}return mg(o)?xM(o,t,n+1):o}const VR={type:"spring",stiffness:500,damping:25,restSpeed:10},HR=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),GR={type:"keyframes",duration:.8},kR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XR=(i,{keyframes:t})=>t.length>2?GR:Bo.has(i)?i.startsWith("scale")?HR(t[1]):VR:kR,WR=i=>i!==null;function jR(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(WR),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function yM(i,t){if(i!=null&&i.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function Tg(i,t){const n=(i==null?void 0:i[t])??(i==null?void 0:i.default)??i;return n!==i?yM(n,i):n}function qR({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const Ag=(i,t,n,s={},o,c)=>u=>{const f=Tg(s,i)||{},h=f.delay||s.delay||0;let{elapsed:p=0}=s;p=p-Li(h);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-p,onUpdate:v=>{t.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:i,motionValue:t,element:c?void 0:o};qR(f)||Object.assign(g,XR(i,g)),g.duration&&(g.duration=Li(g.duration)),g.repeatDelay&&(g.repeatDelay=Li(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let _=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(tm(g),g.delay===0&&(_=!0)),(Xa.instantAnimations||Xa.skipAnimations||o!=null&&o.shouldSkipAnimations)&&(_=!0,tm(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,_&&!c&&t.get()!==void 0){const v=jR(g.keyframes,f);if(v!==void 0){Ke.update(()=>{g.onUpdate(v),g.onComplete()});return}}return f.isSync?new bg(g):new OR(g)};function fy(i){const t=[{},{}];return i==null||i.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function wg(i,t,n,s){if(typeof t=="function"){const[o,c]=fy(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=fy(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function Ao(i,t,n){const s=i.getProps();return wg(s,t,n!==void 0?n:s.custom,i)}const SM=new Set(["width","height","top","left","right","bottom",...Io]),dy=30,YR=i=>!isNaN(parseFloat(i));class KR{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var c;const o=qn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=qn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=YR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new dg);const s=this.events[t].add(n);return t==="change"?()=>{s(),Ke.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=qn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>dy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,dy);return Fb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xr(i,t){return new KR(i,t)}const em=i=>Array.isArray(i);function ZR(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,xr(n))}function QR(i){return em(i)?i[i.length-1]||0:i}function JR(i,t){const n=Ao(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const f=QR(c[u]);ZR(i,u,f)}}const Dn=i=>!!(i&&i.getVelocity);function $R(i){return!!(Dn(i)&&i.add)}function nm(i,t){const n=i.getValue("willChange");if($R(n))return n.add(t);if(!n&&Xa.WillChange){const s=new Xa.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function Rg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const tC="framerAppearId",bM="data-"+Rg(tC);function MM(i){return i.props[bM]}function eC({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function Cg(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...f}=t;const h=i.getDefaultTransition();c=c?yM(c,h):h;const p=c==null?void 0:c.reduceMotion;s&&(c=s);const g=[],_=o&&i.animationState&&i.animationState.getState()[o];for(const v in f){const x=i.getValue(v,i.latestValues[v]??null),b=f[v];if(b===void 0||_&&eC(_,v))continue;const A={delay:n,...Tg(c||{},v)},S=x.get();if(S!==void 0&&!x.isAnimating&&!Array.isArray(b)&&b===S&&!A.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const D=MM(i);if(D){const N=window.MotionHandoffAnimation(D,v,Ke);N!==null&&(A.startTime=N,y=!0)}}nm(i,v);const w=p??i.shouldReduceMotion;x.start(Ag(v,x,b,w&&SM.has(v)?{type:!1}:A,i,y));const R=x.animation;R&&g.push(R)}if(u){const v=()=>Ke.update(()=>{u&&JR(i,u)});g.length?Promise.all(g).then(v):v()}return g}function im(i,t,n={}){var h;const s=Ao(i,t,n.type==="exit"?(h=i.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(Cg(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:_,staggerDirection:v}=o;return nC(i,t,p,g,_,v,n)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,g]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>g())}else return Promise.all([c(),u(n.delay)])}function nC(i,t,n=0,s=0,o=0,c=1,u){const f=[];for(const h of i.variantChildren)h.notify("AnimationStart",t),f.push(im(h,t,{...u,delay:n+(typeof s=="function"?0:s)+_M(i.variantChildren,h,s,o,c)}).then(()=>h.notify("AnimationComplete",t)));return Promise.all(f)}function iC(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>im(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=im(i,t,n);else{const o=typeof t=="function"?Ao(i,t,n.custom):t;s=Promise.all(Cg(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const aC={test:i=>i==="auto",parse:i=>i},EM=i=>t=>t.test(i),TM=[Fo,jt,la,Cs,Pw,Nw,aC],hy=i=>TM.find(EM(i));function sC(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Pb(i):!0}const rC=new Set(["brightness","contrast","saturate","opacity"]);function oC(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(gg)||[];if(!s)return i;const o=n.replace(s,"");let c=rC.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const lC=/\b([a-z-]*)\(.*?\)/gu,am={...Yi,getAnimatableNone:i=>{const t=i.match(lC);return t?t.map(oC).join(" "):i}},sm={...Yi,getAnimatableNone:i=>{const t=Yi.parse(i);return Yi.createTransformer(i)(t.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},py={...Fo,transform:Math.round},cC={rotate:Cs,rotateX:Cs,rotateY:Cs,rotateZ:Cs,scale:wu,scaleX:wu,scaleY:wu,scaleZ:wu,skew:Cs,skewX:Cs,skewY:Cs,distance:jt,translateX:jt,translateY:jt,translateZ:jt,x:jt,y:jt,z:jt,perspective:jt,transformPerspective:jt,opacity:Kl,originX:$x,originY:$x,originZ:jt},Dg={borderWidth:jt,borderTopWidth:jt,borderRightWidth:jt,borderBottomWidth:jt,borderLeftWidth:jt,borderRadius:jt,borderTopLeftRadius:jt,borderTopRightRadius:jt,borderBottomRightRadius:jt,borderBottomLeftRadius:jt,width:jt,maxWidth:jt,height:jt,maxHeight:jt,top:jt,right:jt,bottom:jt,left:jt,inset:jt,insetBlock:jt,insetBlockStart:jt,insetBlockEnd:jt,insetInline:jt,insetInlineStart:jt,insetInlineEnd:jt,padding:jt,paddingTop:jt,paddingRight:jt,paddingBottom:jt,paddingLeft:jt,paddingBlock:jt,paddingBlockStart:jt,paddingBlockEnd:jt,paddingInline:jt,paddingInlineStart:jt,paddingInlineEnd:jt,margin:jt,marginTop:jt,marginRight:jt,marginBottom:jt,marginLeft:jt,marginBlock:jt,marginBlockStart:jt,marginBlockEnd:jt,marginInline:jt,marginInlineStart:jt,marginInlineEnd:jt,fontSize:jt,backgroundPositionX:jt,backgroundPositionY:jt,...cC,zIndex:py,fillOpacity:Kl,strokeOpacity:Kl,numOctaves:py},uC={...Dg,color:yn,backgroundColor:yn,outlineColor:yn,fill:yn,stroke:yn,borderColor:yn,borderTopColor:yn,borderRightColor:yn,borderBottomColor:yn,borderLeftColor:yn,filter:am,WebkitFilter:am,mask:sm,WebkitMask:sm},AM=i=>uC[i],fC=new Set([am,sm]);function wM(i,t){let n=AM(i);return fC.has(n)||(n=Yi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dC=new Set(["auto","none","0"]);function hC(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!dC.has(c)&&Zl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=wM(n,o)}class pC extends Mg{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let _=t[g];if(typeof _=="string"&&(_=_.trim(),mg(_))){const v=xM(_,n.current);v!==void 0&&(t[g]=v),g===t.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!SM.has(s)||t.length!==2)return;const[o,c]=t,u=hy(o),f=hy(c),h=Jx(o),p=Jx(c);if(h!==p&&Us[s]){this.needsMeasurement=!0;return}if(u!==f)if(oy(u)&&oy(f))for(let g=0;g<t.length;g++){const _=t[g];typeof _=="string"&&(t[g]=parseFloat(_))}else Us[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||sC(t[o]))&&s.push(o);s.length&&hC(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Us[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){var f;const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=Us[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const mC=new Set(["opacity","clipPath","filter","transform"]);function Lg(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;t&&(s=t.current);const o=(n==null?void 0:n[i])??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const RM=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function rm(i){return Nb(i)&&"offsetHeight"in i}const{schedule:Ug}=Kb(queueMicrotask,!1),Xi={x:!1,y:!1};function CM(){return Xi.x||Xi.y}function gC(i){return i==="x"||i==="y"?Xi[i]?null:(Xi[i]=!0,()=>{Xi[i]=!1}):Xi.x||Xi.y?null:(Xi.x=Xi.y=!0,()=>{Xi.x=Xi.y=!1})}function DM(i,t){const n=Lg(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function vC(i){return!(i.pointerType==="touch"||CM())}function _C(i,t,n={}){const[s,o,c]=DM(i,n);return s.forEach(u=>{let f=!1,h=!1,p;const g=()=>{u.removeEventListener("pointerleave",b)},_=S=>{p&&(p(S),p=void 0),g()},v=S=>{f=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),h&&(h=!1,_(S))},x=()=>{f=!0,window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",v,o)},b=S=>{if(S.pointerType!=="touch"){if(f){h=!0;return}_(S)}},A=S=>{if(!vC(S))return;h=!1;const y=t(u,S);typeof y=="function"&&(p=y,u.addEventListener("pointerleave",b,o))};u.addEventListener("pointerenter",A,o),u.addEventListener("pointerdown",x,o)}),c}const LM=(i,t)=>t?i===t?!0:LM(i,t.parentElement):!1,Ng=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,xC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function yC(i){return xC.has(i.tagName)||i.isContentEditable===!0}const SC=new Set(["INPUT","SELECT","TEXTAREA"]);function bC(i){return SC.has(i.tagName)||i.isContentEditable===!0}const tf=new WeakSet;function my(i){return t=>{t.key==="Enter"&&i(t)}}function Zh(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const MC=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=my(()=>{if(tf.has(n))return;Zh(n,"down");const o=my(()=>{Zh(n,"up")}),c=()=>Zh(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function gy(i){return Ng(i)&&!CM()}const vy=new WeakSet;function EC(i,t,n={}){const[s,o,c]=DM(i,n),u=f=>{const h=f.currentTarget;if(!gy(f)||vy.has(f))return;tf.add(h),n.stopPropagation&&vy.add(f);const p=t(h,f),g=(x,b)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",v),tf.has(h)&&tf.delete(h),gy(x)&&typeof p=="function"&&p(x,{success:b})},_=x=>{g(x,h===window||h===document||n.useGlobalTarget||LM(h,x.target))},v=x=>{g(x,!1)};window.addEventListener("pointerup",_,o),window.addEventListener("pointercancel",v,o)};return s.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),rm(f)&&(f.addEventListener("focus",p=>MC(p,o)),!yC(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function Ef(i){return Nb(i)&&"ownerSVGElement"in i}const ef=new WeakMap;let Ds;const UM=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:Ef(s)&&"getBBox"in s?s.getBBox()[t]:s[n],TC=UM("inline","width","offsetWidth"),AC=UM("block","height","offsetHeight");function wC({target:i,borderBoxSize:t}){var n;(n=ef.get(i))==null||n.forEach(s=>{s(i,{get width(){return TC(i,t)},get height(){return AC(i,t)}})})}function RC(i){i.forEach(wC)}function CC(){typeof ResizeObserver>"u"||(Ds=new ResizeObserver(RC))}function DC(i,t){Ds||CC();const n=Lg(i);return n.forEach(s=>{let o=ef.get(s);o||(o=new Set,ef.set(s,o)),o.add(t),Ds==null||Ds.observe(s)}),()=>{n.forEach(s=>{const o=ef.get(s);o==null||o.delete(t),o!=null&&o.size||Ds==null||Ds.unobserve(s)})}}const nf=new Set;let bo;function LC(){bo=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};nf.forEach(t=>t(i))},window.addEventListener("resize",bo)}function UC(i){return nf.add(i),bo||LC(),()=>{nf.delete(i),!nf.size&&typeof bo=="function"&&(window.removeEventListener("resize",bo),bo=void 0)}}function _y(i,t){return typeof i=="function"?UC(i):DC(i,t)}function NM(i){return Ef(i)&&i.tagName==="svg"}const NC=[...TM,yn,Yi],PC=i=>NC.find(EM(i)),xy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:xy(),y:xy()}),yy=()=>({min:0,max:0}),xn=()=>({x:yy(),y:yy()}),Jl=new WeakMap;function Tf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function $l(i){return typeof i=="string"||Array.isArray(i)}const Pg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Og=["initial",...Pg];function Af(i){return Tf(i.animate)||Og.some(t=>$l(i[t]))}function PM(i){return!!(Af(i)||i.variants)}function OC(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Dn(o))i.addValue(s,o);else if(Dn(c))i.addValue(s,xr(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,xr(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const om={current:null},OM={current:!1},FC=typeof window<"u";function IC(){if(OM.current=!0,!!FC)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>om.current=i.matches;i.addEventListener("change",t),t()}else om.current=!1}const Sy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let mf={};function FM(i){mf=i}function BC(){return mf}class IM{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Mg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=qn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Ke.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=Af(n),this.isVariantNode=PM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:_,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in v){const b=v[x];p[x]!==void 0&&Dn(b)&&b.set(p[x])}}mount(t){var n,s;if(this.hasBeenMounted)for(const o in this.initialValues)(n=this.values.get(o))==null||n.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=t,Jl.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(OM.current||IC(),this.shouldReduceMotion=om.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Ps(this.notifyUpdate),Ps(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&mC.has(t)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:h,ease:p,duration:g}=n.accelerate,_=new gM({element:this.current,name:t,keyframes:f,times:h,ease:p,duration:Li(g)}),v=u(_);this.valueSubscriptions.set(t,()=>{v(),_.cancel()});return}const s=Bo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ke.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in mf){const n=mf[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Sy.length;s++){const o=Sy[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=OC(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=xr(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Ub(s)||Pb(s))?s=parseFloat(s):!PC(s)&&Yi.test(n)&&(s=wM(t,n)),this.setBaseTarget(t,Dn(s)?s.get():s)),Dn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var c;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=wg(this.props,n,(c=this.presenceContext)==null?void 0:c.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Dn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new dg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Ug.render(this.render)}}class BM extends IM{constructor(){super(...arguments),this.KeyframeResolver=pC}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Dn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Is{constructor(t){this.isMounted=!1,this.node=t}update(){}}function zM({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function zC({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function VC(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Qh(i){return i===void 0||i===1}function lm({scale:i,scaleX:t,scaleY:n}){return!Qh(i)||!Qh(t)||!Qh(n)}function ur(i){return lm(i)||VM(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function VM(i){return by(i.x)||by(i.y)}function by(i){return i&&i!=="0%"}function gf(i,t,n){const s=i-n,o=t*s;return n+o}function My(i,t,n,s,o){return o!==void 0&&(i=gf(i,o,s)),gf(i,n,s)+t}function cm(i,t=0,n=1,s,o){i.min=My(i.min,t,n,s,o),i.max=My(i.max,t,n,s,o)}function HM(i,{x:t,y:n}){cm(i.x,t.translate,t.scale,t.originPoint),cm(i.y,n.translate,n.scale,n.originPoint)}const Ey=.999999999999,Ty=1.0000000000001;function HC(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let f=0;f<o;f++){c=n[f],u=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&To(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,HM(i,u)),s&&ur(c.latestValues)&&To(i,c.latestValues))}t.x<Ty&&t.x>Ey&&(t.x=1),t.y<Ty&&t.y>Ey&&(t.y=1)}function Eo(i,t){i.min=i.min+t,i.max=i.max+t}function Ay(i,t,n,s,o=.5){const c=nn(i.min,i.max,o);cm(i,t,n,c,s)}function wy(i,t){return typeof i=="string"?parseFloat(i)/100*(t.max-t.min):i}function To(i,t){Ay(i.x,wy(t.x,i.x),t.scaleX,t.scale,t.originX),Ay(i.y,wy(t.y,i.y),t.scaleY,t.scale,t.originY)}function GM(i,t){return zM(VC(i.getBoundingClientRect(),t))}function GC(i,t,n){const s=GM(i,n),{scroll:o}=t;return o&&(Eo(s.x,o.offset.x),Eo(s.y,o.offset.y)),s}const kC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},XC=Io.length;function WC(i,t,n){let s="",o=!0;for(let c=0;c<XC;c++){const u=Io[c],f=i[u];if(f===void 0)continue;let h=!0;if(typeof f=="number")h=f===(u.startsWith("scale")?1:0);else{const p=parseFloat(f);h=u.startsWith("scale")?p===1:p===0}if(!h||n){const p=RM(f,Dg[u]);if(!h){o=!1;const g=kC[u]||u;s+=`${g}(${p}) `}n&&(t[u]=p)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Fg(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,f=!1;for(const h in t){const p=t[h];if(Bo.has(h)){u=!0;continue}else if(Qb(h)){o[h]=p;continue}else{const g=RM(p,Dg[h]);h.startsWith("origin")?(f=!0,c[h]=g):s[h]=g}}if(t.transform||(u||n?s.transform=WC(t,i.transform,n):s.transform&&(s.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:g=0}=c;s.transformOrigin=`${h} ${p} ${g}`}}function kM(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o==null||o.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function Ry(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Pl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(jt.test(i))i=parseFloat(i);else return i;const n=Ry(i,t.target.x),s=Ry(i,t.target.y);return`${n}% ${s}%`}},jC={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=Yi.parse(i);if(o.length>5)return s;const c=Yi.createTransformer(i),u=typeof o[0]!="number"?1:0,f=n.x.scale*t.x,h=n.y.scale*t.y;o[0+u]/=f,o[1+u]/=h;const p=nn(f,h,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),c(o)}},um={borderRadius:{...Pl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pl,borderTopRightRadius:Pl,borderBottomLeftRadius:Pl,borderBottomRightRadius:Pl,boxShadow:jC};function XM(i,{layout:t,layoutId:n}){return Bo.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!um[i]||i==="opacity")}function Ig(i,t,n){var u;const s=i.style,o=t==null?void 0:t.style,c={};if(!s)return c;for(const f in s)(Dn(s[f])||o&&Dn(o[f])||XM(f,i)||((u=n==null?void 0:n.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(c[f]=s[f]);return c}function qC(i){return window.getComputedStyle(i)}class WM extends BM{constructor(){super(...arguments),this.type="html",this.renderInstance=kM}readValueFromInstance(t,n){var s;if(Bo.has(n))return(s=this.projection)!=null&&s.isProjecting?Kp(n):pR(t,n);{const o=qC(t),c=(Qb(n)?o.getPropertyValue(n):o[n])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:n}){return GM(t,n)}build(t,n,s){Fg(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Ig(t,n,s)}}function YC(i,t){return i in t}class KC extends IM{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(YC(n,t)){const s=t[n];if(typeof s=="string"||typeof s=="number")return s}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return xn()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}const ZC={offset:"stroke-dashoffset",array:"stroke-dasharray"},QC={offset:"strokeDashoffset",array:"strokeDasharray"};function JC(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?ZC:QC;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const $C=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function jM(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},h,p,g){if(Fg(i,f,p),h){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:_,style:v}=i;_.transform&&(v.transform=_.transform,delete _.transform),(v.transform||_.transformOrigin)&&(v.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),v.transform&&(v.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete _.transformBox);for(const x of $C)_[x]!==void 0&&(v[x]=_[x],delete _[x]);t!==void 0&&(_.x=t),n!==void 0&&(_.y=n),s!==void 0&&(_.scale=s),o!==void 0&&JC(_,o,c,u,!1)}const qM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),YM=i=>typeof i=="string"&&i.toLowerCase()==="svg";function t2(i,t,n,s){kM(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(qM.has(o)?o:Rg(o),t.attrs[o])}function KM(i,t,n){const s=Ig(i,t,n);for(const o in i)if(Dn(i[o])||Dn(t[o])){const c=Io.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class ZM extends BM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Bo.has(n)){const s=AM(n);return s&&s.default||0}return n=qM.has(n)?n:Rg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return KM(t,n,s)}build(t,n,s){jM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){t2(t,n,s,o)}mount(t){this.isSVGTag=YM(t.tagName),super.mount(t)}}const e2=Og.length;function QM(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?QM(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<e2;n++){const s=Og[n],o=i.props[s];($l(o)||o===!1)&&(t[s]=o)}return t}function JM(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const n2=[...Pg].reverse(),i2=Pg.length;function a2(i){return t=>Promise.all(t.map(({animation:n,options:s})=>iC(i,n,s)))}function s2(i){let t=a2(i),n=Cy(),s=!0,o=!1;const c=p=>(g,_)=>{var x;const v=Ao(i,_,p==="exit"?(x=i.presenceContext)==null?void 0:x.custom:void 0);if(v){const{transition:b,transitionEnd:A,...S}=v;g={...g,...S,...A}}return g};function u(p){t=p(i)}function f(p){const{props:g}=i,_=QM(i.parent)||{},v=[],x=new Set;let b={},A=1/0;for(let y=0;y<i2;y++){const w=n2[y],R=n[w],D=g[w]!==void 0?g[w]:_[w],N=$l(D),F=w===p?R.isActive:null;F===!1&&(A=y);let O=D===_[w]&&D!==g[w]&&N;if(O&&(s||o)&&i.manuallyAnimateOnMount&&(O=!1),R.protectedKeys={...b},!R.isActive&&F===null||!D&&!R.prevProp||Tf(D)||typeof D=="boolean")continue;if(w==="exit"&&R.isActive&&F!==!0){R.prevResolvedValues&&(b={...b,...R.prevResolvedValues});continue}const E=r2(R.prevProp,D);let L=E||w===p&&R.isActive&&!O&&N||y>A&&N,at=!1;const V=Array.isArray(D)?D:[D];let K=V.reduce(c(w),{});F===!1&&(K={});const{prevResolvedValues:$={}}=R,ct={...$,...K},J=Q=>{L=!0,x.has(Q)&&(at=!0,x.delete(Q)),R.needsAnimating[Q]=!0;const ft=i.getValue(Q);ft&&(ft.liveStyle=!1)};for(const Q in ct){const ft=K[Q],it=$[Q];if(b.hasOwnProperty(Q))continue;let I=!1;em(ft)&&em(it)?I=!JM(ft,it):I=ft!==it,I?ft!=null?J(Q):x.add(Q):ft!==void 0&&x.has(Q)?J(Q):R.protectedKeys[Q]=!0}R.prevProp=D,R.prevResolvedValues=K,R.isActive&&(b={...b,...K}),(s||o)&&i.blockInitialAnimation&&(L=!1);const P=O&&E;L&&(!P||at)&&v.push(...V.map(Q=>{const ft={type:w};if(typeof Q=="string"&&(s||o)&&!P&&i.manuallyAnimateOnMount&&i.parent){const{parent:it}=i,I=Ao(it,Q);if(it.enteringChildren&&I){const{delayChildren:j}=I.transition||{};ft.delay=_M(it.enteringChildren,i,j)}}return{animation:Q,options:ft}}))}if(x.size){const y={};if(typeof g.initial!="boolean"){const w=Ao(i,Array.isArray(g.initial)?g.initial[0]:g.initial);w&&w.transition&&(y.transition=w.transition)}x.forEach(w=>{const R=i.getBaseTarget(w),D=i.getValue(w);D&&(D.liveStyle=!0),y[w]=R??null}),v.push({animation:y})}let S=!!v.length;return s&&(g.initial===!1||g.initial===g.animate)&&!i.manuallyAnimateOnMount&&(S=!1),s=!1,o=!1,S?t(v):Promise.resolve()}function h(p,g){var v;if(n[p].isActive===g)return Promise.resolve();(v=i.variantChildren)==null||v.forEach(x=>{var b;return(b=x.animationState)==null?void 0:b.setActive(p,g)}),n[p].isActive=g;const _=f(p);for(const x in n)n[x].protectedKeys={};return _}return{animateChanges:f,setActive:h,setAnimateFunction:u,getState:()=>n,reset:()=>{n=Cy(),o=!0}}}function r2(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!JM(t,i):!1}function ir(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cy(){return{animate:ir(!0),whileInView:ir(),whileHover:ir(),whileTap:ir(),whileDrag:ir(),whileFocus:ir(),exit:ir()}}function Dy(i,t){i.min=t.min,i.max=t.max}function Vi(i,t){Dy(i.x,t.x),Dy(i.y,t.y)}function Ly(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const $M=1e-4,o2=1-$M,l2=1+$M,tE=.01,c2=0-tE,u2=0+tE;function Yn(i){return i.max-i.min}function f2(i,t,n){return Math.abs(i-t)<=n}function Uy(i,t,n,s=.5){i.origin=s,i.originPoint=nn(t.min,t.max,i.origin),i.scale=Yn(n)/Yn(t),i.translate=nn(n.min,n.max,i.origin)-i.originPoint,(i.scale>=o2&&i.scale<=l2||isNaN(i.scale))&&(i.scale=1),(i.translate>=c2&&i.translate<=u2||isNaN(i.translate))&&(i.translate=0)}function ql(i,t,n,s){Uy(i.x,t.x,n.x,s?s.originX:void 0),Uy(i.y,t.y,n.y,s?s.originY:void 0)}function Ny(i,t,n){i.min=n.min+t.min,i.max=i.min+Yn(t)}function d2(i,t,n){Ny(i.x,t.x,n.x),Ny(i.y,t.y,n.y)}function Py(i,t,n){i.min=t.min-n.min,i.max=i.min+Yn(t)}function vf(i,t,n){Py(i.x,t.x,n.x),Py(i.y,t.y,n.y)}function Oy(i,t,n,s,o){return i-=t,i=gf(i,1/n,s),o!==void 0&&(i=gf(i,1/o,s)),i}function h2(i,t=0,n=1,s=.5,o,c=i,u=i){if(la.test(t)&&(t=parseFloat(t),t=nn(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=nn(c.min,c.max,s);i===c&&(f-=t),i.min=Oy(i.min,t,n,f,o),i.max=Oy(i.max,t,n,f,o)}function Fy(i,t,[n,s,o],c,u){h2(i,t[n],t[s],t[o],t.scale,c,u)}const p2=["x","scaleX","originX"],m2=["y","scaleY","originY"];function Iy(i,t,n,s){Fy(i.x,t,p2,n?n.x:void 0,s?s.x:void 0),Fy(i.y,t,m2,n?n.y:void 0,s?s.y:void 0)}function By(i){return i.translate===0&&i.scale===1}function eE(i){return By(i.x)&&By(i.y)}function zy(i,t){return i.min===t.min&&i.max===t.max}function g2(i,t){return zy(i.x,t.x)&&zy(i.y,t.y)}function Vy(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function nE(i,t){return Vy(i.x,t.x)&&Vy(i.y,t.y)}function Hy(i){return Yn(i.x)/Yn(i.y)}function Gy(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function ia(i){return[i("x"),i("y")]}function v2(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:p,rotate:g,rotateX:_,rotateY:v,skewX:x,skewY:b}=n;p&&(s=`perspective(${p}px) ${s}`),g&&(s+=`rotate(${g}deg) `),_&&(s+=`rotateX(${_}deg) `),v&&(s+=`rotateY(${v}deg) `),x&&(s+=`skewX(${x}deg) `),b&&(s+=`skewY(${b}deg) `)}const f=i.x.scale*t.x,h=i.y.scale*t.y;return(f!==1||h!==1)&&(s+=`scale(${f}, ${h})`),s||"none"}const iE=["TopLeft","TopRight","BottomLeft","BottomRight"],_2=iE.length,ky=i=>typeof i=="string"?parseFloat(i):i,Xy=i=>typeof i=="number"||jt.test(i);function x2(i,t,n,s,o,c){o?(i.opacity=nn(0,n.opacity??1,y2(s)),i.opacityExit=nn(t.opacity??1,0,S2(s))):c&&(i.opacity=nn(t.opacity??1,n.opacity??1,s));for(let u=0;u<_2;u++){const f=`border${iE[u]}Radius`;let h=Wy(t,f),p=Wy(n,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||Xy(h)===Xy(p)?(i[f]=Math.max(nn(ky(h),ky(p),s),0),(la.test(p)||la.test(h))&&(i[f]+="%")):i[f]=p}(t.rotate||n.rotate)&&(i.rotate=nn(t.rotate||0,n.rotate||0,s))}function Wy(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const y2=aE(0,.5,kb),S2=aE(.5,.95,Di);function aE(i,t,n){return s=>s<i?0:s>t?1:n(Do(i,t,s))}function sE(i,t,n){const s=Dn(i)?i:xr(i);return s.start(Ag("",s,t,n)),s.animation}function tc(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const b2=(i,t)=>i.depth-t.depth;class M2{constructor(){this.children=[],this.isDirty=!1}add(t){ug(this.children,t),this.isDirty=!0}remove(t){Co(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(b2),this.isDirty=!1,this.children.forEach(t)}}function E2(i,t){const n=qn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(Ps(s),i(c-t))};return Ke.setup(s,!0),()=>Ps(s)}function af(i){return Dn(i)?i.get():i}class T2{constructor(){this.members=[]}add(t){ug(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;(!o||o.isConnected===!1)&&!s.snapshot&&(Co(this.members,s),s.unmount())}t.scheduleRender()}remove(t){if(Co(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let s=this.members.indexOf(t)-1;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1&&((n=o.instance)==null?void 0:n.isConnected)!==!1)return this.promote(o),!0}return!1}promote(t,n){var o;const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.updateSnapshot(),t.scheduleRender();const{layoutDependency:c}=s.options,{layoutDependency:u}=t.options;(c===void 0||c!==u)&&(t.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),(o=t.root)!=null&&o.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,s,o,c,u;(s=(n=t.options).onExitComplete)==null||s.call(n),(u=(o=t.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||u.call(c)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const sf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Jh=["","X","Y","Z"],A2=1e3;let w2=0;function $h(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function rE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=MM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Ke,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&rE(s)}function oE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},f=t==null?void 0:t()){this.id=w2++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(D2),this.nodes.forEach(P2),this.nodes.forEach(O2),this.nodes.forEach(L2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new M2)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new dg),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const h=this.eventHandlers.get(u);h&&h.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Ef(u)&&!NM(u),this.instance=u;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||f)&&(this.isLayoutDirty=!0),i){let g,_=0;const v=()=>this.root.updateBlockedByResize=!1;Ke.read(()=>{_=window.innerWidth}),i(u,()=>{const x=window.innerWidth;x!==_&&(_=x,this.root.updateBlockedByResize=!0,g&&g(),g=E2(v,250),sf.hasAnimatedSinceResize&&(sf.hasAnimatedSinceResize=!1,this.nodes.forEach(Yy)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||p.getDefaultTransition()||V2,{onLayoutAnimationStart:A,onLayoutAnimationComplete:S}=p.getProps(),y=!this.targetLayout||!nE(this.targetLayout,x),w=!_&&v;if(this.options.layoutRoot||this.resumeFrom||w||_&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Tg(b,"layout"),onPlay:A,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(g,w)}else _||Yy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ps(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(F2),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const _=this.path[g];_.shouldResetTransform=!0,_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(N2),this.nodes.forEach(R2),this.nodes.forEach(C2)):this.nodes.forEach(qy),this.clearAllSnapshots();const f=qn.now();On.delta=da(0,1e3/60,f-On.timestamp),On.timestamp=f,On.isProcessing=!0,Xh.update.process(On),Xh.preRender.process(On),Xh.render.process(On),On.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ug.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(U2),this.sharedNodes.forEach(I2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yn(this.snapshot.measuredBox.x)&&!Yn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=xn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!eE(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;u&&this.instance&&(f||ur(this.latestValues)||g)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return u&&(h=this.removeTransform(h)),H2(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:u}=this.options;if(!u)return xn();const f=u.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(G2))){const{scroll:g}=this.root;g&&(Eo(f.x,g.offset.x),Eo(f.y,g.offset.y))}return f}removeElementScroll(u){var h;const f=xn();if(Vi(f,u),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:_,options:v}=g;g!==this.root&&_&&v.layoutScroll&&(_.wasRoot&&Vi(f,u),Eo(f.x,_.offset.x),Eo(f.y,_.offset.y))}return f}applyTransform(u,f=!1){const h=xn();Vi(h,u);for(let p=0;p<this.path.length;p++){const g=this.path[p];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&To(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ur(g.latestValues)&&To(h,g.latestValues)}return ur(this.latestValues)&&To(h,this.latestValues),h}removeTransform(u){const f=xn();Vi(f,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!ur(p.latestValues))continue;lm(p.latestValues)&&p.updateSnapshot();const g=xn(),_=p.measurePageBox();Vi(g,_),Iy(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return ur(this.latestValues)&&Iy(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==On.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!this.layout||!(g||_))return;this.resolvedRelativeTargetAt=On.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=xn(),this.targetWithTransforms=xn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),d2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vi(this.target,this.layout.layoutBox),HM(this.target,this.targetDelta)):Vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||lm(this.parent.latestValues)||VM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,h){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xn(),this.relativeTargetOrigin=xn(),vf(this.relativeTargetOrigin,f,h),Vi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===On.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;Vi(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,v=this.treeScale.y;HC(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=xn());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ly(this.prevProjectionDelta.x,this.projectionDelta.x),Ly(this.prevProjectionDelta.y,this.projectionDelta.y)),ql(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==v||!Gy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(u,f=!1){const h=this.snapshot,p=h?h.latestValues:{},g={...this.latestValues},_=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=xn(),x=h?h.source:void 0,b=this.layout?this.layout.source:void 0,A=x!==b,S=this.getStack(),y=!S||S.members.length<=1,w=!!(A&&!y&&this.options.crossfade===!0&&!this.path.some(z2));this.animationProgress=0;let R;this.mixTargetDelta=D=>{const N=D/1e3;Ky(_.x,u.x,N),Ky(_.y,u.y,N),this.setTargetDelta(_),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vf(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),B2(this.relativeTarget,this.relativeTargetOrigin,v,N),R&&g2(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=xn()),Vi(R,this.relativeTarget)),A&&(this.animationValues=g,x2(g,p,this.latestValues,N,w,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,h,p;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(p=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Ps(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ke.update(()=>{sf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=xr(0)),this.motionValue.jump(0,!1),this.currentAnimation=sE(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(A2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:g}=u;if(!(!f||!h||!p)){if(this!==u&&this.layout&&p&&lE(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||xn();const _=Yn(this.layout.layoutBox.x);h.x.min=u.target.x.min,h.x.max=h.x.min+_;const v=Yn(this.layout.layoutBox.y);h.y.min=u.target.y.min,h.y.max=h.y.min+v}Vi(f,h),To(f,g),ql(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new T2),this.sharedNodes.get(u).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:h}=u;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&$h("z",u,p,this.animationValues);for(let g=0;g<Jh.length;g++)$h(`rotate${Jh[g]}`,u,p,this.animationValues),$h(`skew${Jh[g]}`,u,p,this.animationValues);u.render();for(const g in p)u.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=af(f==null?void 0:f.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=af(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!ur(this.latestValues)&&(u.transform=h?h({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=p.animationValues||p.latestValues;this.applyTransformsToTarget();let _=v2(this.projectionDeltaWithTransform,this.treeScale,g);h&&(_=h(g,_)),u.transform=_;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in um){if(g[b]===void 0)continue;const{correct:A,applyTo:S,isCSSVariable:y}=um[b],w=_==="none"?g[b]:A(g[b],p);if(S){const R=S.length;for(let D=0;D<R;D++)u[S[D]]=w}else y?this.options.visualElement.renderState.vars[b]=w:u[b]=w}this.options.layoutId&&(u.pointerEvents=p===this?af(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(jy),this.root.sharedNodes.clear()}}}function R2(i){i.updateLayout()}function C2(i){var n;const t=((n=i.resumeFrom)==null?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=i.layout,{animationType:c}=i.options,u=t.source!==i.layout.source;c==="size"?ia(_=>{const v=u?t.measuredBox[_]:t.layoutBox[_],x=Yn(v);v.min=s[_].min,v.max=v.min+x}):lE(c,t.layoutBox,s)&&ia(_=>{const v=u?t.measuredBox[_]:t.layoutBox[_],x=Yn(s[_]);v.max=v.min+x,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[_].max=i.relativeTarget[_].min+x)});const f=Mo();ql(f,s,t.layoutBox);const h=Mo();u?ql(h,i.applyTransform(o,!0),t.measuredBox):ql(h,s,t.layoutBox);const p=!eE(f);let g=!1;if(!i.resumeFrom){const _=i.getClosestProjectingParent();if(_&&!_.resumeFrom){const{snapshot:v,layout:x}=_;if(v&&x){const b=xn();vf(b,t.layoutBox,v.layoutBox);const A=xn();vf(A,s,x.layoutBox),nE(b,A)||(g=!0),_.options.layoutRoot&&(i.relativeTarget=A,i.relativeTargetOrigin=b,i.relativeParent=_)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function D2(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function L2(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function U2(i){i.clearSnapshot()}function jy(i){i.clearMeasurements()}function qy(i){i.isLayoutDirty=!1}function N2(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function Yy(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function P2(i){i.resolveTargetDelta()}function O2(i){i.calcProjection()}function F2(i){i.resetSkewAndRotation()}function I2(i){i.removeLeadSnapshot()}function Ky(i,t,n){i.translate=nn(t.translate,0,n),i.scale=nn(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function Zy(i,t,n,s){i.min=nn(t.min,n.min,s),i.max=nn(t.max,n.max,s)}function B2(i,t,n,s){Zy(i.x,t.x,n.x,s),Zy(i.y,t.y,n.y,s)}function z2(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const V2={duration:.45,ease:[.4,0,.1,1]},Qy=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Jy=Qy("applewebkit/")&&!Qy("chrome/")?Math.round:Di;function $y(i){i.min=Jy(i.min),i.max=Jy(i.max)}function H2(i){$y(i.x),$y(i.y)}function lE(i,t,n){return i==="position"||i==="preserve-aspect"&&!f2(Hy(t),Hy(n),.2)}function G2(i){var t;return i!==i.root&&((t=i.scroll)==null?void 0:t.wasRoot)}const k2=oE({attachResizeListener:(i,t)=>tc(i,"resize",t),measureScroll:()=>{var i,t;return{x:document.documentElement.scrollLeft||((i=document.body)==null?void 0:i.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),tp={current:void 0},cE=oE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!tp.current){const i=new k2({});i.mount(window),i.setOptions({layoutScroll:!0}),tp.current=i}return tp.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),Bg=Mt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function tS(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function X2(...i){return t=>{let n=!1;const s=i.map(o=>{const c=tS(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<s.length;o++){const c=s[o];typeof c=="function"?c():tS(i[o],null)}}}}function W2(...i){return Mt.useCallback(X2(...i),i)}class j2 extends Mt.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=rm(s)&&s.offsetWidth||0,c=rm(s)&&s.offsetHeight||0,u=this.props.sizeRef.current;u.height=n.offsetHeight||0,u.width=n.offsetWidth||0,u.top=n.offsetTop,u.left=n.offsetLeft,u.right=o-u.width-u.left,u.bottom=c-u.height-u.top}return null}componentDidUpdate(){}render(){return this.props.children}}function q2({children:i,isPresent:t,anchorX:n,anchorY:s,root:o,pop:c}){var v;const u=Mt.useId(),f=Mt.useRef(null),h=Mt.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=Mt.useContext(Bg),g=((v=i.props)==null?void 0:v.ref)??(i==null?void 0:i.ref),_=W2(f,g);return Mt.useInsertionEffect(()=>{const{width:x,height:b,top:A,left:S,right:y,bottom:w}=h.current;if(t||c===!1||!f.current||!x||!b)return;const R=n==="left"?`left: ${S}`:`right: ${y}`,D=s==="bottom"?`bottom: ${w}`:`top: ${A}`;f.current.dataset.motionPopId=u;const N=document.createElement("style");p&&(N.nonce=p);const F=o??document.head;return F.appendChild(N),N.sheet&&N.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${b}px !important;
            ${R}px !important;
            ${D}px !important;
          }
        `),()=>{F.contains(N)&&F.removeChild(N)}},[t]),ot.jsx(j2,{isPresent:t,childRef:f,sizeRef:h,pop:c,children:c===!1?i:Mt.cloneElement(i,{ref:_})})}const Y2=({children:i,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u,anchorX:f,anchorY:h,root:p})=>{const g=cg(K2),_=Mt.useId();let v=!0,x=Mt.useMemo(()=>(v=!1,{id:_,initial:t,isPresent:n,custom:o,onExitComplete:b=>{g.set(b,!0);for(const A of g.values())if(!A)return;s&&s()},register:b=>(g.set(b,!1),()=>g.delete(b))}),[n,g,s]);return c&&v&&(x={...x}),Mt.useMemo(()=>{g.forEach((b,A)=>g.set(A,!1))},[n]),Mt.useEffect(()=>{!n&&!g.size&&s&&s()},[n]),i=ot.jsx(q2,{pop:u==="popLayout",isPresent:n,anchorX:f,anchorY:h,root:p,children:i}),ot.jsx(Mf.Provider,{value:x,children:i})};function K2(){return new Map}function uE(i=!0){const t=Mt.useContext(Mf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Mt.useId();Mt.useEffect(()=>{if(i)return o(c)},[i]);const u=Mt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const Ru=i=>i.key||"";function eS(i){const t=[];return Mt.Children.forEach(i,n=>{Mt.isValidElement(n)&&t.push(n)}),t}const fE=({children:i,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",anchorY:h="top",root:p})=>{const[g,_]=uE(u),v=Mt.useMemo(()=>eS(i),[i]),x=u&&!g?[]:v.map(Ru),b=Mt.useRef(!0),A=Mt.useRef(v),S=cg(()=>new Map),y=Mt.useRef(new Set),[w,R]=Mt.useState(v),[D,N]=Mt.useState(v);Lb(()=>{b.current=!1,A.current=v;for(let E=0;E<D.length;E++){const L=Ru(D[E]);x.includes(L)?(S.delete(L),y.current.delete(L)):S.get(L)!==!0&&S.set(L,!1)}},[D,x.length,x.join("-")]);const F=[];if(v!==w){let E=[...v];for(let L=0;L<D.length;L++){const at=D[L],V=Ru(at);x.includes(V)||(E.splice(L,0,at),F.push(at))}return c==="wait"&&F.length&&(E=F),N(eS(E)),R(v),null}const{forceRender:O}=Mt.useContext(lg);return ot.jsx(ot.Fragment,{children:D.map(E=>{const L=Ru(E),at=u&&!g?!1:v===D||x.includes(L),V=()=>{if(y.current.has(L))return;if(y.current.add(L),S.has(L))S.set(L,!0);else return;let K=!0;S.forEach($=>{$||(K=!1)}),K&&(O==null||O(),N(A.current),u&&(_==null||_()),s&&s())};return ot.jsx(Y2,{isPresent:at,initial:!b.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:p,onExitComplete:at?void 0:V,anchorX:f,anchorY:h,children:E},L)})})},dE=Mt.createContext({strict:!1}),nS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let iS=!1;function Z2(){if(iS)return;const i={};for(const t in nS)i[t]={isEnabled:n=>nS[t].some(s=>!!n[s])};FM(i),iS=!0}function hE(){return Z2(),BC()}function Q2(i){const t=hE();for(const n in i)t[n]={...t[n],...i[n]};FM(t)}const J2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function _f(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||J2.has(i)}let pE=i=>!_f(i);function $2(i){typeof i=="function"&&(pE=t=>t.startsWith("on")?!_f(t):i(t))}try{$2(require("@emotion/is-prop-valid").default)}catch{}function t3(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(pE(o)||n===!0&&_f(o)||!t&&!_f(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const wf=Mt.createContext({});function e3(i,t){if(Af(i)){const{initial:n,animate:s}=i;return{initial:n===!1||$l(n)?n:void 0,animate:$l(s)?s:void 0}}return i.inherit!==!1?t:{}}function n3(i){const{initial:t,animate:n}=e3(i,Mt.useContext(wf));return Mt.useMemo(()=>({initial:t,animate:n}),[aS(t),aS(n)])}function aS(i){return Array.isArray(i)?i.join(" "):i}const zg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mE(i,t,n){for(const s in t)!Dn(t[s])&&!XM(s,n)&&(i[s]=t[s])}function i3({transformTemplate:i},t){return Mt.useMemo(()=>{const n=zg();return Fg(n,t,i),Object.assign({},n.vars,n.style)},[t])}function a3(i,t){const n=i.style||{},s={};return mE(s,n,i),Object.assign(s,i3(i,t)),s}function s3(i,t){const n={},s=a3(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const gE=()=>({...zg(),attrs:{}});function r3(i,t,n,s){const o=Mt.useMemo(()=>{const c=gE();return jM(c,t,YM(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};mE(c,i.style,i),o.style={...c,...o.style}}return o}const o3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vg(i){return typeof i!="string"||i.includes("-")?!1:!!(o3.indexOf(i)>-1||/[A-Z]/u.test(i))}function l3(i,t,n,{latestValues:s},o,c=!1,u){const h=(u??Vg(i)?r3:s3)(t,s,o,i),p=t3(t,typeof i=="string",c),g=i!==Mt.Fragment?{...p,...h,ref:n}:{},{children:_}=t,v=Mt.useMemo(()=>Dn(_)?_.get():_,[_]);return Mt.createElement(i,{...g,children:v})}function c3({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:u3(n,s,o,i),renderState:t()}}function u3(i,t,n,s){const o={},c=s(i,{});for(const v in c)o[v]=af(c[v]);let{initial:u,animate:f}=i;const h=Af(i),p=PM(i);t&&p&&!h&&i.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const _=g?f:u;if(_&&typeof _!="boolean"&&!Tf(_)){const v=Array.isArray(_)?_:[_];for(let x=0;x<v.length;x++){const b=wg(i,v[x]);if(b){const{transitionEnd:A,transition:S,...y}=b;for(const w in y){let R=y[w];if(Array.isArray(R)){const D=g?R.length-1:0;R=R[D]}R!==null&&(o[w]=R)}for(const w in A)o[w]=A[w]}}}return o}const vE=i=>(t,n)=>{const s=Mt.useContext(wf),o=Mt.useContext(Mf),c=()=>c3(i,t,s,o);return n?c():cg(c)},f3=vE({scrapeMotionValuesFromProps:Ig,createRenderState:zg}),d3=vE({scrapeMotionValuesFromProps:KM,createRenderState:gE}),h3=Symbol.for("motionComponentSymbol");function p3(i,t,n){const s=Mt.useRef(n);Mt.useInsertionEffect(()=>{s.current=n});const o=Mt.useRef(null);return Mt.useCallback(c=>{var f;c&&((f=i.onMount)==null||f.call(i,c));const u=s.current;if(typeof u=="function")if(c){const h=u(c);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c);t&&(c?t.mount(c):t.unmount())},[t])}const _E=Mt.createContext({});function yo(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function m3(i,t,n,s,o,c){var R,D;const{visualElement:u}=Mt.useContext(wf),f=Mt.useContext(dE),h=Mt.useContext(Mf),p=Mt.useContext(Bg),g=p.reducedMotion,_=p.skipAnimations,v=Mt.useRef(null),x=Mt.useRef(!1);s=s||f.renderer,!v.current&&s&&(v.current=s(i,{visualState:t,parent:u,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g,skipAnimations:_,isSVG:c}),x.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const b=v.current,A=Mt.useContext(_E);b&&!b.projection&&o&&(b.type==="html"||b.type==="svg")&&g3(v.current,n,o,A);const S=Mt.useRef(!1);Mt.useInsertionEffect(()=>{b&&S.current&&b.update(n,h)});const y=n[bM],w=Mt.useRef(!!y&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,y))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,y)));return Lb(()=>{x.current=!0,b&&(S.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),w.current&&b.animationState&&b.animationState.animateChanges())}),Mt.useEffect(()=>{b&&(!w.current&&b.animationState&&b.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)==null||N.call(window,y)}),w.current=!1),b.enteringChildren=void 0)}),b}function g3(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:h,layoutRoot:p,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:xE(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&yo(f),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:h,layoutRoot:p})}function xE(i){if(i)return i.options.allowProjection!==!1?i.projection:xE(i.parent)}function ep(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&Q2(s);const c=n?n==="svg":Vg(i),u=c?d3:f3;function f(p,g){let _;const v={...Mt.useContext(Bg),...p,layoutId:v3(p)},{isStatic:x}=v,b=n3(p),A=u(p,x);if(!x&&typeof window<"u"){_3();const S=x3(v);_=S.MeasureLayout,b.visualElement=m3(i,A,v,o,S.ProjectionNode,c)}return ot.jsxs(wf.Provider,{value:b,children:[_&&b.visualElement?ot.jsx(_,{visualElement:b.visualElement,...v}):null,l3(i,p,p3(A,b.visualElement,g),A,x,t,c)]})}f.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const h=Mt.forwardRef(f);return h[h3]=i,h}function v3({layoutId:i}){const t=Mt.useContext(lg).id;return t&&i!==void 0?t+"-"+i:i}function _3(i,t){Mt.useContext(dE).strict}function x3(i){const t=hE(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(i)||s!=null&&s.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function y3(i,t){if(typeof Proxy>"u")return ep;const n=new Map,s=(c,u)=>ep(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,ep(u,void 0,i,t)),n.get(u))})}const S3=(i,t)=>t.isSVG??Vg(i)?new ZM(t):new WM(t,{allowProjection:i!==Mt.Fragment});class b3 extends Is{constructor(t){super(t),t.animationState||(t.animationState=s2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Tf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let M3=0;class E3 extends Is{constructor(){super(...arguments),this.id=M3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const T3={animation:{Feature:b3},exit:{Feature:E3}};function oc(i){return{point:{x:i.pageX,y:i.pageY}}}const A3=i=>t=>Ng(t)&&i(t,oc(t));function Yl(i,t,n,s){return tc(i,t,A3(n),s)}const yE=({current:i})=>i?i.ownerDocument.defaultView:null,sS=(i,t)=>Math.abs(i-t);function w3(i,t){const n=sS(i.x,t.x),s=sS(i.y,t.y);return Math.sqrt(n**2+s**2)}const rS=new Set(["auto","scroll"]);class SE{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=ip(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,A=w3(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!A)return;const{point:S}=x,{timestamp:y}=On;this.history.push({...S,timestamp:y});const{onStart:w,onMove:R}=this.handlers;b||(w&&w(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,x)},this.handlePointerMove=(x,b)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=np(b,this.transformPagePoint),Ke.update(this.updatePoint,!0)},this.handlePointerUp=(x,b)=>{this.end();const{onEnd:A,onSessionEnd:S,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ip(x.type==="pointercancel"?this.lastMoveEventInfo:np(b,this.transformPagePoint),this.history);this.startEvent&&A&&A(x,w),S&&S(x,w)},!Ng(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const h=oc(t),p=np(h,this.transformPagePoint),{point:g}=p,{timestamp:_}=On;this.history=[{...g,timestamp:_}];const{onSessionStart:v}=n;v&&v(t,ip(p,this.history)),this.removeListeners=ac(Yl(this.contextWindow,"pointermove",this.handlePointerMove),Yl(this.contextWindow,"pointerup",this.handlePointerUp),Yl(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(rS.has(s.overflowX)||rS.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Ke.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ps(this.updatePoint)}}function np(i,t){return t?{point:t(i.point)}:i}function oS(i,t){return{x:i.x-t.x,y:i.y-t.y}}function ip({point:i},t){return{point:i,delta:oS(i,bE(t)),offset:oS(i,R3(t)),velocity:C3(t,.1)}}function R3(i){return i[0]}function bE(i){return i[i.length-1]}function C3(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=bE(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Li(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>Li(t)*2&&(s=i[1]);const c=Ci(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function D3(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?nn(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?nn(n,i,s.max):Math.min(i,n)),i}function lS(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function L3(i,{top:t,left:n,bottom:s,right:o}){return{x:lS(i.x,n,o),y:lS(i.y,t,s)}}function cS(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function U3(i,t){return{x:cS(i.x,t.x),y:cS(i.y,t.y)}}function N3(i,t){let n=.5;const s=Yn(i),o=Yn(t);return o>s?n=Do(t.min,t.max-s,i.min):s>o&&(n=Do(i.min,i.max-o,t.min)),da(0,1,n)}function P3(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const fm=.35;function O3(i=fm){return i===!1?i=0:i===!0&&(i=fm),{x:uS(i,"left","right"),y:uS(i,"top","bottom")}}function uS(i,t,n){return{min:fS(i,t),max:fS(i,n)}}function fS(i,t){return typeof i=="number"?i:i[t]||0}const F3=new WeakMap;class I3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=_=>{n&&this.snapToCursor(oc(_).point),this.stopAnimation()},u=(_,v)=>{const{drag:x,dragPropagation:b,onDragStart:A}=this.getProps();if(x&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gC(x),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ia(y=>{let w=this.getAxisMotionValue(y).get()||0;if(la.test(w)){const{projection:R}=this.visualElement;if(R&&R.layout){const D=R.layout.layoutBox[y];D&&(w=Yn(D)*(parseFloat(w)/100))}}this.originPoint[y]=w}),A&&Ke.update(()=>A(_,v),!1,!0),nm(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},f=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:A,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(b&&this.currentDirection===null){this.currentDirection=z3(y),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&Ke.update(()=>S(_,v),!1,!0)},h=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v,this.stop(_,v),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:_}=this.getProps();(_||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new SE(t,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:yE(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ke.postRender(()=>f(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Cu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=D3(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&yo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=L3(s.layoutBox,t):this.constraints=!1,this.elastic=O3(n),o!==this.constraints&&!yo(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&ia(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=P3(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!yo(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=GC(s,o.root,this.visualElement.getTransformPagePoint());let u=U3(o.layout.layoutBox,c);if(n){const f=n(zC(u));this.hasMutatedConstraints=!!f,f&&(u=zM(f))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=ia(g=>{if(!Cu(g,n,this.currentDirection))return;let _=h&&h[g]||{};u&&(_={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,b={type:"inertia",velocity:s?t[g]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...c,..._};return this.startAxisValueAnimation(g,b)});return Promise.all(p).then(f)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return nm(this.visualElement,t),s.start(Ag(t,s,0,n,this.visualElement,!1))}stopAnimation(){ia(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){ia(n=>{const{drag:s}=this.getProps();if(!Cu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[n],h=c.get()||0;c.set(t[n]-nn(u,f,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!yo(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ia(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const h=f.get();o[u]=N3({min:h,max:h},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),ia(u=>{if(!Cu(u,t,null))return;const f=this.getAxisMotionValue(u),{min:h,max:p}=this.constraints[u];f.set(nn(h,p,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;F3.set(this.visualElement,this);const t=this.visualElement.current,n=Yl(t,"pointerdown",p=>{const{drag:g,dragListener:_=!0}=this.getProps(),v=p.target,x=v!==t&&bC(v);g&&_&&!x&&this.start(p)});let s;const o=()=>{const{dragConstraints:p}=this.getProps();yo(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),s||(s=B3(t,p.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ke.read(o);const f=tc(window,"resize",()=>this.scalePositionWithinConstraints()),h=c.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(ia(_=>{const v=this.getAxisMotionValue(_);v&&(this.originPoint[_]+=p[_].translate,v.set(v.get()+p[_].translate))}),this.visualElement.render())}));return()=>{f(),n(),u(),h&&h(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=fm,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function dS(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function B3(i,t,n){const s=_y(i,dS(n)),o=_y(t,dS(n));return()=>{s(),o()}}function Cu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function z3(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class V3 extends Is{constructor(t){super(t),this.removeGroupControls=Di,this.removeListeners=Di,this.controls=new I3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Di}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ap=i=>(t,n)=>{i&&Ke.update(()=>i(t,n),!1,!0)};class H3 extends Is{constructor(){super(...arguments),this.removePointerDownListener=Di}onPointerDown(t){this.session=new SE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:ap(t),onStart:ap(n),onMove:ap(s),onEnd:(c,u)=>{delete this.session,o&&Ke.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Yl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let sp=!1;class G3 extends Mt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),sp&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),sf.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),sp=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Ke.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ug.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;sp=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ME(i){const[t,n]=uE(),s=Mt.useContext(lg);return ot.jsx(G3,{...i,layoutGroup:s,switchLayoutGroup:Mt.useContext(_E),isPresent:t,safeToRemove:n})}const k3={pan:{Feature:H3},drag:{Feature:V3,ProjectionNode:cE,MeasureLayout:ME}};function hS(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Ke.postRender(()=>c(t,oc(t)))}class X3 extends Is{mount(){const{current:t}=this.node;t&&(this.unmount=_C(t,(n,s)=>(hS(this.node,s,"Start"),o=>hS(this.node,o,"End"))))}unmount(){}}class W3 extends Is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ac(tc(this.node.current,"focus",()=>this.onFocus()),tc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pS(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Ke.postRender(()=>c(t,oc(t)))}class j3 extends Is{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=EC(t,(o,c)=>(pS(this.node,c,"Start"),(u,{success:f})=>pS(this.node,u,f?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const dm=new WeakMap,rp=new WeakMap,q3=i=>{const t=dm.get(i.target);t&&t(i)},Y3=i=>{i.forEach(q3)};function K3({root:i,...t}){const n=i||document;rp.has(n)||rp.set(n,{});const s=rp.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(Y3,{root:i,...t})),s[o]}function Z3(i,t,n){const s=K3(t);return dm.set(i,n),s.observe(i),()=>{dm.delete(i),s.unobserve(i)}}const Q3={some:0,all:1};class J3 extends Is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:Q3[o]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,c&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:_}=this.node.getProps(),v=p?g:_;v&&v(h)};return Z3(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some($3(t,n))&&this.startObserver()}unmount(){}}function $3({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const tD={inView:{Feature:J3},tap:{Feature:j3},focus:{Feature:W3},hover:{Feature:X3}},eD={layout:{ProjectionNode:cE,MeasureLayout:ME}},nD={...T3,...tD,...k3,...eD},ii=y3(nD,S3);function Hg(i){return typeof i=="object"&&!Array.isArray(i)}function EE(i,t,n,s){return i==null?[]:typeof i=="string"&&Hg(t)?Lg(i,n,s):i instanceof NodeList?Array.from(i):Array.isArray(i)?i.filter(o=>o!=null):[i]}function iD(i,t,n){return i*(t+1)}function mS(i,t,n,s){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,i+parseFloat(t)):t==="<"?n:t.startsWith("<")?Math.max(0,n+parseFloat(t.slice(1))):s.get(t)??i}function aD(i,t,n){for(let s=0;s<i.length;s++){const o=i[s];o.at>t&&o.at<n&&(Co(i,o),s--)}}function sD(i,t,n,s,o,c){aD(i,o,c);for(let u=0;u<t.length;u++)i.push({value:t[u],at:nn(o,c,s[u]),easing:qb(n,u)})}function rD(i,t){for(let n=0;n<i.length;n++)i[n]=i[n]/(t+1)}function oD(i,t){return i.at===t.at?i.value===null?1:t.value===null?-1:0:i.at-t.at}const lD="easeInOut";function cD(i,{defaultTransition:t={},...n}={},s,o){const c=t.duration||.3,u=new Map,f=new Map,h={},p=new Map;let g=0,_=0,v=0;for(let x=0;x<i.length;x++){const b=i[x];if(typeof b=="string"){p.set(b,_);continue}else if(!Array.isArray(b)){p.set(b.name,mS(_,b.at,g,p));continue}let[A,S,y={}]=b;y.at!==void 0&&(_=mS(_,y.at,g,p));let w=0;const R=(D,N,F,O=0,E=0)=>{const L=uD(D),{delay:at=0,times:V=cM(L),type:K=t.type||"keyframes",repeat:$,repeatType:ct,repeatDelay:J=0,...P}=N;let{ease:z=t.ease||"easeOut",duration:Q}=N;const ft=typeof at=="function"?at(O,E):at,it=L.length,I=Eg(K)?K:o==null?void 0:o[K||"keyframes"];if(it<=2&&I){let Rt=100;if(it===2&&hD(L)){const bt=L[1]-L[0];Rt=Math.abs(bt)}const Z={...t,...P};Q!==void 0&&(Z.duration=Li(Q));const gt=rM(Z,Rt,I);z=gt.ease,Q=gt.duration}Q??(Q=c);const j=_+ft;V.length===1&&V[0]===0&&(V[1]=1);const _t=V.length-L.length;if(_t>0&&lM(V,_t),L.length===1&&L.unshift(null),$){Q=iD(Q,$);const Rt=[...L],Z=[...V];z=Array.isArray(z)?[...z]:[z];const gt=[...z];for(let bt=0;bt<$;bt++){L.push(...Rt);for(let Dt=0;Dt<Rt.length;Dt++)V.push(Z[Dt]+(bt+1)),z.push(Dt===0?"linear":qb(gt,Dt-1))}rD(V,$)}const wt=j+Q;sD(F,L,z,V,j,wt),w=Math.max(ft+Q,w),v=Math.max(wt,v)};if(Dn(A)){const D=gS(A,f);R(S,y,vS("default",D))}else{const D=EE(A,S,s,h),N=D.length;for(let F=0;F<N;F++){S=S,y=y;const O=D[F],E=gS(O,f);for(const L in S)R(S[L],fD(y,L),vS(L,E),F,N)}}g=_,_+=w}return f.forEach((x,b)=>{for(const A in x){const S=x[A];S.sort(oD);const y=[],w=[],R=[];for(let O=0;O<S.length;O++){const{at:E,value:L,easing:at}=S[O];y.push(L),w.push(Do(0,v,E)),R.push(at||"easeOut")}w[0]!==0&&(w.unshift(0),y.unshift(y[0]),R.unshift(lD)),w[w.length-1]!==1&&(w.push(1),y.push(null)),u.has(b)||u.set(b,{keyframes:{},transition:{}});const D=u.get(b);D.keyframes[A]=y;const{type:N,...F}=t;D.transition[A]={...F,duration:v,ease:R,times:w,...n}}}),u}function gS(i,t){return!t.has(i)&&t.set(i,{}),t.get(i)}function vS(i,t){return t[i]||(t[i]=[]),t[i]}function uD(i){return Array.isArray(i)?i:[i]}function fD(i,t){return i&&i[t]?{...i,...i[t]}:{...i}}const dD=i=>typeof i=="number",hD=i=>i.every(dD);function pD(i){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Ef(i)&&!NM(i)?new ZM(t):new WM(t);n.mount(i),Jl.set(i,n)}function mD(i){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new KC(t);n.mount(i),Jl.set(i,n)}function gD(i,t){return Dn(i)||typeof i=="number"||typeof i=="string"&&!Hg(t)}function TE(i,t,n,s){const o=[];if(gD(i,t))o.push(sE(i,Hg(t)&&t.default||t,n&&(n.default||n)));else{if(i==null)return o;const c=EE(i,t,s),u=c.length;for(let f=0;f<u;f++){const h=c[f],p=h instanceof Element?pD:mD;Jl.has(h)||p(h);const g=Jl.get(h),_={...n};"delay"in _&&typeof _.delay=="function"&&(_.delay=_.delay(f,u)),o.push(...Cg(g,{...t,transition:_},{}))}}return o}function vD(i,t,n){const s=[],o=i.map(u=>{if(Array.isArray(u)&&typeof u[0]=="function"){const f=u[0],h=xr(0);return h.on("change",f),u.length===1?[h,[0,1]]:u.length===2?[h,[0,1],u[1]]:[h,u[1],u[2]]}return u});return cD(o,t,n,{spring:Ql}).forEach(({keyframes:u,transition:f},h)=>{s.push(...TE(h,u,f))}),s}function _D(i){return Array.isArray(i)&&i.some(Array.isArray)}function xD(i={}){const{scope:t,reduceMotion:n}=i;function s(o,c,u){let f=[],h;if(_D(o)){const{onComplete:g,..._}=c||{};typeof g=="function"&&(h=g),f=vD(o,n!==void 0?{reduceMotion:n,..._}:_,t)}else{const{onComplete:g,..._}=u||{};typeof g=="function"&&(h=g),f=TE(o,c,n!==void 0?{reduceMotion:n,..._}:_,t)}const p=new IR(f);return h&&p.finished.then(h),t&&(t.animations.push(p),p.finished.then(()=>{Co(t.animations,p)})),p}return s}const yD=xD();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bD=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),_S=i=>{const t=bD(i);return t.charAt(0).toUpperCase()+t.slice(1)},AE=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),MD=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ED={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=Mt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...f},h)=>Mt.createElement("svg",{ref:h,...ED,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:AE("lucide",o),...!c&&!MD(f)&&{"aria-hidden":"true"},...f},[...u.map(([p,g])=>Mt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=(i,t)=>{const n=Mt.forwardRef(({className:s,...o},c)=>Mt.createElement(TD,{ref:c,iconNode:t,className:AE(`lucide-${SD(_S(i))}`,`lucide-${i}`,s),...o}));return n.displayName=_S(i),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],wD=Ki("briefcase",AD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],CD=Ki("chevron-down",RD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],LD=Ki("code-xml",DD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],wE=Ki("github",UD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],PD=Ki("house",ND);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],FD=Ki("linkedin",OD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],BD=Ki("mail",ID);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],VD=Ki("menu",zD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],GD=Ki("sparkles",HD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],XD=Ki("wrench",kD);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jD=Ki("x",WD),RE=Mt.createContext(void 0),Gg=()=>{const i=Mt.useContext(RE);if(!i)throw new Error("useSidebar must be used within a SidebarProvider");return i},qD=({children:i,open:t,setOpen:n,animate:s=!0})=>{const[o,c]=Mt.useState(!1),u=t!==void 0?t:o,f=n!==void 0?n:c;return ot.jsx(RE.Provider,{value:{open:u,setOpen:f,animate:s},children:i})},YD=({children:i,open:t,setOpen:n,animate:s})=>ot.jsx(qD,{open:t,setOpen:n,animate:s,children:i}),KD=i=>ot.jsxs(ot.Fragment,{children:[ot.jsx(ZD,{...i}),ot.jsx(QD,{...i})]}),ZD=({className:i,children:t,...n})=>{const{open:s,setOpen:o,animate:c}=Gg();return ot.jsx(ii.div,{className:oa("h-full px-4 py-4 hidden md:flex md:flex-col bg-white/5 backdrop-blur-md border-r border-white/10 dark:bg-black/20 w-[300px] flex-shrink-0 z-[100]",i),animate:{width:c?s?"300px":"56px":"300px"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),...n,children:t})},QD=({className:i,children:t,...n})=>{const{open:s,setOpen:o}=Gg();return ot.jsx(ot.Fragment,{children:ot.jsxs("div",{className:oa("h-14 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10 dark:bg-black/20 w-full z-[100] fixed top-0 left-0"),...n,children:[ot.jsx("div",{className:"flex justify-end z-20 w-full",children:ot.jsx(VD,{className:"text-white cursor-pointer",onClick:()=>o(!s)})}),ot.jsx(fE,{children:s&&ot.jsxs(ii.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{duration:.3,ease:"easeInOut"},className:oa("fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",i),children:[ot.jsx("div",{className:"absolute right-10 top-10 z-50 text-white cursor-pointer",onClick:()=>o(!s),children:ot.jsx(jD,{})}),t]})})]})})},xS=({link:i,className:t,...n})=>{const{open:s,animate:o}=Gg();return ot.jsxs("a",{href:i.href,onClick:c=>{i.onClick&&i.onClick()},className:oa("flex items-center justify-start gap-2 group/sidebar py-2",t),...n,children:[i.icon,ot.jsx(ii.span,{animate:{display:o?s?"inline-block":"none":"inline-block",opacity:o?s?1:0:1},className:"text-white text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",children:i.label})]})},Rf=Mt.memo(({blur:i=0,inactiveZone:t=.7,proximity:n=0,spread:s=20,variant:o="default",glow:c=!1,className:u,movementDuration:f=.5,borderWidth:h=1,disabled:p=!0})=>{const g=Mt.useRef(null),_=Mt.useRef({x:0,y:0}),v=Mt.useRef(0),x=Mt.useCallback(w=>{g.current&&(v.current&&cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>{const R=g.current;if(!R)return;const{left:D,top:N,width:F,height:O}=R.getBoundingClientRect(),E=(w==null?void 0:w.x)??_.current.x,L=(w==null?void 0:w.y)??_.current.y;w&&(_.current={x:E,y:L});const at=[D+F*.5,N+O*.5],V=Math.hypot(E-at[0],L-at[1]),K=.5*Math.min(F,O)*t;if(V<K){R.style.setProperty("--active","0");return}const $=E>D-n&&E<D+F+n&&L>N-n&&L<N+O+n;if(R.style.setProperty("--active",$?"1":"0"),!$)return;const ct=parseFloat(R.style.getPropertyValue("--start"))||0,P=(180*Math.atan2(L-at[1],E-at[0])/Math.PI+90-ct+180)%360-180,z=ct+P;yD(ct,z,{duration:f,ease:[.16,1,.3,1],onUpdate:Q=>{R.style.setProperty("--start",String(Q))}})}))},[t,n,f]);Mt.useEffect(()=>{if(p)return;const w=()=>x(),R=D=>x(D);return window.addEventListener("scroll",w,{passive:!0}),document.body.addEventListener("pointermove",R,{passive:!0}),()=>{v.current&&cancelAnimationFrame(v.current),window.removeEventListener("scroll",w),document.body.removeEventListener("pointermove",R)}},[x,p]);const b=`radial-gradient(circle, #3b82f6 10%, transparent 20%),
      radial-gradient(circle at 40% 40%, #60a5fa 5%, transparent 15%),
      radial-gradient(circle at 60% 60%, #2563eb 10%, transparent 20%),
      radial-gradient(circle at 40% 60%, #7dd3fc 10%, transparent 20%),
      repeating-conic-gradient(
        from 236.84deg at 50% 50%,
        #3b82f6 0%,
        #60a5fa calc(25% / var(--repeating-conic-gradient-times)),
        #2563eb calc(50% / var(--repeating-conic-gradient-times)),
        #7dd3fc calc(75% / var(--repeating-conic-gradient-times)),
        #3b82f6 calc(100% / var(--repeating-conic-gradient-times))
      )`,A=`radial-gradient(circle, #a855f7 10%, transparent 20%),
      radial-gradient(circle at 40% 40%, #c084fc 5%, transparent 15%),
      radial-gradient(circle at 60% 60%, #9333ea 10%, transparent 20%),
      radial-gradient(circle at 40% 60%, #e879f9 10%, transparent 20%),
      repeating-conic-gradient(
        from 236.84deg at 50% 50%,
        #a855f7 0%,
        #c084fc calc(25% / var(--repeating-conic-gradient-times)),
        #9333ea calc(50% / var(--repeating-conic-gradient-times)),
        #e879f9 calc(75% / var(--repeating-conic-gradient-times)),
        #a855f7 calc(100% / var(--repeating-conic-gradient-times))
      )`,S=`repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #000,
      #000 calc(25% / var(--repeating-conic-gradient-times))
    )`,y=()=>o==="white"?S:o==="blue"?b:A;return ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{className:oa("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",c&&"opacity-100",o==="white"&&"border-white",p&&"!block")}),ot.jsx("div",{ref:g,style:{"--blur":`${i}px`,"--spread":s,"--start":"0","--active":"0","--glowingeffect-border-width":`${h}px`,"--repeating-conic-gradient-times":"5","--gradient":y()},className:oa("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",c&&"opacity-100",i>0&&"blur-[var(--blur)] ",u,p&&"!hidden"),children:ot.jsx("div",{className:oa("glow","rounded-[inherit]",'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',"after:[border:var(--glowingeffect-border-width)_solid_transparent]","after:[background:var(--gradient)] after:[background-attachment:fixed]","after:opacity-[var(--active)] after:transition-opacity after:duration-300","after:[mask-clip:padding-box,border-box]","after:[mask-composite:intersect]","after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]")})})]})});Rf.displayName="GlowingEffect";const JD=({data:i})=>ot.jsx("div",{className:"w-full font-sans py-4",children:ot.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[ot.jsx("div",{className:"absolute left-4 md:left-6 top-8 bottom-8 w-[2px] bg-white/20"}),i.map((t,n)=>ot.jsxs(ii.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.15},className:"relative mb-8 pl-12 md:pl-16 last:mb-0",children:[ot.jsx("div",{className:"absolute left-2 md:left-4 top-6 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-black/60 z-10"}),ot.jsx("div",{className:"mb-3",children:ot.jsx("span",{className:"text-sm text-blue-400 font-medium bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/20",children:t.date})}),ot.jsxs("div",{className:"relative rounded-xl p-[2px]",children:[ot.jsx(Rf,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:2,variant:"blue"}),ot.jsxs("div",{className:"relative bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 shadow-xl shadow-black/20",children:[ot.jsxs("div",{className:"flex items-center justify-between mb-3",children:[ot.jsx("span",{className:"text-white/70 font-medium text-sm md:text-base",children:t.company}),t.companyLogo&&ot.jsx("img",{src:t.companyLogo,alt:`${t.company} logo`,className:"h-8 md:h-10 w-auto object-contain rounded-lg border border-white/20"})]}),ot.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white mb-4",children:t.position}),ot.jsx("div",{className:"text-white/80",children:t.content})]})]})]},n))]})}),$D=`#version 300 es
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_speed;
uniform vec3 u_radii;    // [r1, r2, r3]
uniform vec2 u_smoothK;  // [k12, k123]
out vec4 fragColor;

// SDF for a circle
float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

// Smooth union of two distances
float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

// Build scene SDF
float mapScene(vec2 uv) {
  float t = u_time * u_speed;
  vec2 p1 = vec2(cos(t * 0.5), sin(t * 0.5)) * 0.3;
  vec2 p2 = vec2(cos(t * 0.7 + 2.1), sin(t * 0.6 + 2.1)) * 0.4;
  vec2 p3 = vec2(cos(t * 0.4 + 4.2), sin(t * 0.8 + 4.2)) * 0.35;

  float b1 = sdCircle(uv - p1, u_radii.x);
  float b2 = sdCircle(uv - p2, u_radii.y);
  float b3 = sdCircle(uv - p3, u_radii.z);

  float u12 = opSmoothUnion(b1, b2, u_smoothK.x);
  return opSmoothUnion(u12, b3, u_smoothK.y);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
  float d = mapScene(uv);

  // Bright rim by distance
  vec3 base = vec3(0.01 / abs(d));
  
  // shifting color palette over time
  // Cool colors: blueish purples with pinks
  vec3 a = vec3(0.5, 0.2, 0.8);
  vec3 b = vec3(0.4, 0.3, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.33, 0.67);
  
  vec3 pha = a + b * cos(6.28318 * (c * (u_time * 0.1) + uv.xyx + phase));
  
  vec3 col = clamp(base * pha, 0.0, 1.0);
  fragColor = vec4(col, 1.0);
}
`,tL=({speed:i=.2,radii:t=[.2,.15,.22],smoothK:n=[.2,.25],className:s=""})=>{const o=Mt.useRef(null),[c,u]=Mt.useState(null);return Mt.useEffect(()=>{const f=o.current;if(!f)return;const h=f.getContext("webgl2");if(!h){u("WebGL2 not supported");return}class p{constructor(){const A=(N,F)=>{const O=h.createShader(N);return h.shaderSource(O,F),h.compileShader(O),h.getShaderParameter(O,h.COMPILE_STATUS)?O:(console.error(h.getShaderInfoLog(O)),h.deleteShader(O),null)},y=A(h.VERTEX_SHADER,`#version 300 es
        in vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }`),w=A(h.FRAGMENT_SHADER,$D);this.prog=h.createProgram(),h.attachShader(this.prog,y),h.attachShader(this.prog,w),h.linkProgram(this.prog),h.getProgramParameter(this.prog,h.LINK_STATUS)||console.error(h.getProgramInfoLog(this.prog));const R=new Float32Array([-1,1,-1,-1,1,1,1,-1]);this.buf=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,this.buf),h.bufferData(h.ARRAY_BUFFER,R,h.STATIC_DRAW);const D=h.getAttribLocation(this.prog,"position");h.enableVertexAttribArray(D),h.vertexAttribPointer(D,2,h.FLOAT,!1,0,0),this.uRes=h.getUniformLocation(this.prog,"u_resolution"),this.uTime=h.getUniformLocation(this.prog,"u_time"),this.uSpeed=h.getUniformLocation(this.prog,"u_speed"),this.uRadii=h.getUniformLocation(this.prog,"u_radii"),this.uK=h.getUniformLocation(this.prog,"u_smoothK")}render(A){const S=h.canvas.width,y=h.canvas.height;h.viewport(0,0,S,y),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(this.prog),h.uniform2f(this.uRes,S,y),h.uniform1f(this.uTime,A*.001),h.uniform1f(this.uSpeed,i),h.uniform3fv(this.uRadii,t),h.uniform2fv(this.uK,n),h.drawArrays(h.TRIANGLE_STRIP,0,4)}}const g=new p,_=()=>{const b=window.devicePixelRatio||1;f.width=f.clientWidth*b,f.height=f.clientHeight*b};window.addEventListener("resize",_),_();let v;const x=b=>{g.render(b),v=requestAnimationFrame(x)};return v=requestAnimationFrame(x),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(v)}},[i,t,n]),ot.jsxs("div",{role:"region","aria-label":"Liquid crystal shader background",className:`relative w-full h-full overflow-hidden ${s}`,children:[ot.jsx("canvas",{ref:o,className:"block w-full h-full"}),c&&ot.jsx("div",{className:"absolute inset-0 bg-black/80 flex items-center justify-center text-white font-mono text-sm p-4",children:c})]})},eL=`#version 300 es
precision highp float;

uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float sdCircle(vec2 p, float r) {
  return length(p) - r;
}

float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float scene(vec2 uv) {
  vec2 pos1 = vec2(cos(time) * 0.4, sin(time * 2.0) * 0.2);
  float c1 = sdCircle(uv - pos1, 0.2);

  vec2 pos2 = vec2(cos(time + 3.14) * 0.4, sin(time * 2.0 + 3.14) * 0.2);
  float c2 = sdCircle(uv - pos2, 0.16);

  return opSmoothUnion(c1, c2, 0.2);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
  float d = scene(uv);
  float glow = exp(-10.0 * abs(d));
  
  // Darker, more subtle colors for a dark background
  vec3 color = 0.2 + 0.3 * cos(time * 0.5 + uv.xyx + vec3(0, 2, 4));
  
  // Blend glow and shape, keeping it relatively dark
  vec3 finalColor = color * glow * 0.8 + smoothstep(0.01, 0.0, d) * 0.1;
  
  fragColor = vec4(finalColor, 1.0);
}
`;class nL{constructor(t,n){this.program=null,this.uTime=null,this.uRes=null,this.canvas=t,this.gl=t.getContext("webgl2"),this._init(n)}_compile(t,n){const s=this.gl,o=s.createShader(t);return o?(s.shaderSource(o,n),s.compileShader(o),s.getShaderParameter(o,s.COMPILE_STATUS)?o:(console.error(s.getShaderInfoLog(o)),s.deleteShader(o),null)):null}_init(t){const n=this.gl;if(!n){console.error("WebGL2 not supported");return}const o=this._compile(n.VERTEX_SHADER,`#version 300 es
    precision highp float;
    in vec4 position;
    void main() {
      gl_Position = position;
    }`),c=this._compile(n.FRAGMENT_SHADER,t);if(!o||!c||(this.program=n.createProgram(),!this.program))return;if(n.attachShader(this.program,o),n.attachShader(this.program,c),n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS)){console.error(n.getProgramInfoLog(this.program));return}const u=new Float32Array([-1,1,-1,-1,1,1,1,-1]),f=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,u,n.STATIC_DRAW);const h=n.getAttribLocation(this.program,"position");n.enableVertexAttribArray(h),n.vertexAttribPointer(h,2,n.FLOAT,!1,0,0),this.uTime=n.getUniformLocation(this.program,"time"),this.uRes=n.getUniformLocation(this.program,"resolution")}resize(t,n){const s=window.devicePixelRatio||1;this.canvas.width=t*s,this.canvas.height=n*s,this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}render(t){const n=this.gl;this.program&&(n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(this.program),n.uniform1f(this.uTime,t*.001),n.uniform2f(this.uRes,n.canvas.width,n.canvas.height),n.drawArrays(n.TRIANGLE_STRIP,0,4))}}function iL(i){Mt.useEffect(()=>{const t=i.current;if(!t)return;const n=new nL(t,eL);let s;function o(){n.resize(window.innerWidth,window.innerHeight)}function c(u){n.render(u),s=requestAnimationFrame(c)}return window.addEventListener("resize",o),o(),s=requestAnimationFrame(c),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",o)}},[i])}function aL({className:i}){const t=Mt.useRef(null);return iL(t),ot.jsx("canvas",{ref:t,className:oa("w-full h-full block",i)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kg="183",sL=0,yS=1,rL=2,rf=1,oL=2,kl=3,Os=0,ai=1,za=2,Ha=0,wo=1,SS=2,bS=3,MS=4,lL=5,dr=100,cL=101,uL=102,fL=103,dL=104,hL=200,pL=201,mL=202,gL=203,hm=204,pm=205,vL=206,_L=207,xL=208,yL=209,SL=210,bL=211,ML=212,EL=213,TL=214,mm=0,gm=1,vm=2,Lo=3,_m=4,xm=5,ym=6,Sm=7,CE=0,AL=1,wL=2,ca=0,DE=1,LE=2,UE=3,NE=4,PE=5,OE=6,FE=7,IE=300,yr=301,Uo=302,op=303,lp=304,Cf=306,bm=1e3,Va=1001,Mm=1002,Fn=1003,RL=1004,Du=1005,Vn=1006,cp=1007,gr=1008,Ri=1009,BE=1010,zE=1011,ec=1012,Xg=1013,ha=1014,sa=1015,Wa=1016,Wg=1017,jg=1018,nc=1020,VE=35902,HE=35899,GE=1021,kE=1022,qi=1023,ja=1026,vr=1027,XE=1028,qg=1029,No=1030,Yg=1031,Kg=1033,of=33776,lf=33777,cf=33778,uf=33779,Em=35840,Tm=35841,Am=35842,wm=35843,Rm=36196,Cm=37492,Dm=37496,Lm=37488,Um=37489,Nm=37490,Pm=37491,Om=37808,Fm=37809,Im=37810,Bm=37811,zm=37812,Vm=37813,Hm=37814,Gm=37815,km=37816,Xm=37817,Wm=37818,jm=37819,qm=37820,Ym=37821,Km=36492,Zm=36494,Qm=36495,Jm=36283,$m=36284,tg=36285,eg=36286,CL=3200,DL=0,LL=1,Ls="",wi="srgb",Po="srgb-linear",xf="linear",Ge="srgb",so=7680,ES=519,UL=512,NL=513,PL=514,Zg=515,OL=516,FL=517,Qg=518,IL=519,TS=35044,AS="300 es",ra=2e3,yf=2001;function BL(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zL(){const i=Sf("canvas");return i.style.display="block",i}const wS={};function RS(...i){const t="THREE."+i.shift();console.log(t,...i)}function WE(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=i[1];n&&n.isStackTrace?i[0]+=" "+n.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ue(...i){i=WE(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...i)}}function Ne(...i){i=WE(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...i)}}function bf(...i){const t=i.join(" ");t in wS||(wS[t]=!0,ue(...i))}function VL(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const HL={[mm]:gm,[vm]:ym,[_m]:Sm,[Lo]:xm,[gm]:mm,[ym]:vm,[Sm]:_m,[xm]:Lo};class zo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=Math.PI/180,ng=180/Math.PI;function lc(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Ae(i,t,n){return Math.max(t,Math.min(n,i))}function GL(i,t){return(i%t+t)%t}function fp(i,t,n){return(1-n)*i+n*t}function Ol(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(t=0,n=0){Fe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,f){let h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3],v=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(_!==A||h!==v||p!==x||g!==b){let S=h*v+p*x+g*b+_*A;S<0&&(v=-v,x=-x,b=-b,A=-A,S=-S);let y=1-f;if(S<.9995){const w=Math.acos(S),R=Math.sin(w);y=Math.sin(y*w)/R,f=Math.sin(f*w)/R,h=h*y+v*f,p=p*y+x*f,g=g*y+b*f,_=_*y+A*f}else{h=h*y+v*f,p=p*y+x*f,g=g*y+b*f,_=_*y+A*f;const w=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=w,p*=w,g*=w,_*=w}}t[n]=h,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,o,c,u){const f=s[o],h=s[o+1],p=s[o+2],g=s[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return t[n]=f*b+g*_+h*x-p*v,t[n+1]=h*b+g*v+p*_-f*x,t[n+2]=p*b+g*x+f*v-h*_,t[n+3]=g*b-f*_-h*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(o/2),_=f(c/2),v=h(s/2),x=h(o/2),b=h(c/2);switch(u){case"XYZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"YZX":this._x=v*g*_+p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_-v*x*b;break;case"XZY":this._x=v*g*_-p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_+v*x*b;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],p=n[2],g=n[6],_=n[10],v=s+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-h)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(s>f&&s>_){const x=2*Math.sqrt(1+s-f-_);this._w=(g-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(f>_){const x=2*Math.sqrt(1+f-s-_);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+_-s-f);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,f=n._x,h=n._y,p=n._z,g=n._w;return this._x=s*g+u*f+o*p-c*h,this._y=o*g+u*h+c*f-s*p,this._z=c*g+u*p+s*h-o*f,this._w=u*g-s*f-o*h-c*p,this._onChangeCallback(),this}slerp(t,n){let s=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(s=-s,o=-o,c=-c,u=-u,f=-f);let h=1-n;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);h=Math.sin(h*p)/g,n=Math.sin(n*p)/g,this._x=this._x*h+s*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+s*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(CS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(CS.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,f=t.z,h=t.w,p=2*(u*o-f*s),g=2*(f*n-c*o),_=2*(c*s-u*n);return this.x=n+h*p+u*_-f*g,this.y=s+h*g+f*p-c*_,this.z=o+h*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-s*h,this.z=s*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dp.copy(this).projectOnVector(t),this.sub(dp)}reflect(t){return this.sub(dp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dp=new lt,CS=new Vo;class ve{constructor(t,n,s,o,c,u,f,h,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,h,p)}set(t,n,s,o,c,u,f,h,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],g=s[4],_=s[7],v=s[2],x=s[5],b=s[8],A=o[0],S=o[3],y=o[6],w=o[1],R=o[4],D=o[7],N=o[2],F=o[5],O=o[8];return c[0]=u*A+f*w+h*N,c[3]=u*S+f*R+h*F,c[6]=u*y+f*D+h*O,c[1]=p*A+g*w+_*N,c[4]=p*S+g*R+_*F,c[7]=p*y+g*D+_*O,c[2]=v*A+x*w+b*N,c[5]=v*S+x*R+b*F,c[8]=v*y+x*D+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],h=t[6],p=t[7],g=t[8];return n*u*g-n*f*p-s*c*g+s*f*h+o*c*p-o*u*h}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],h=t[6],p=t[7],g=t[8],_=g*u-f*p,v=f*h-g*c,x=p*c-u*h,b=n*_+s*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(o*p-g*s)*A,t[2]=(f*s-o*u)*A,t[3]=v*A,t[4]=(g*n-o*h)*A,t[5]=(o*c-f*n)*A,t[6]=x*A,t[7]=(s*h-p*n)*A,t[8]=(u*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,f){const h=Math.cos(c),p=Math.sin(c);return this.set(s*h,s*p,-s*(h*u+p*f)+u+t,-o*p,o*h,-o*(-p*u+h*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(hp.makeScale(t,n)),this}rotate(t){return this.premultiply(hp.makeRotation(-t)),this}translate(t,n){return this.premultiply(hp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hp=new ve,DS=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),LS=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kL(){const i={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ge&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ge&&(o.r=Ro(o.r),o.g=Ro(o.g),o.b=Ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ls?xf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return bf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return bf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Po]:{primaries:t,whitePoint:s,transfer:xf,toXYZ:DS,fromXYZ:LS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:DS,fromXYZ:LS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),i}const Ce=kL();function Ga(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ro;class XL{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ro===void 0&&(ro=Sf("canvas")),ro.width=t.width,ro.height=t.height;const o=ro.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=ro}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Sf("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ga(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ga(n[s]/255)*255):n[s]=Ga(n[s]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WL=0;class Jg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WL++}),this.uuid=lc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(pp(o[u].image)):c.push(pp(o[u]))}else c=pp(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function pp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?XL.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let jL=0;const mp=new lt;class Kn extends zo{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,s=Va,o=Va,c=Vn,u=gr,f=qi,h=Ri,p=Kn.DEFAULT_ANISOTROPY,g=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jL++}),this.uuid=lc(),this.name="",this.source=new Jg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mp).x}get height(){return this.source.getSize(mp).y}get depth(){return this.source.getSize(mp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==IE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bm:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case Mm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bm:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case Mm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=IE;Kn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,s=0,o=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const h=t.elements,p=h[0],g=h[4],_=h[8],v=h[1],x=h[5],b=h[9],A=h[2],S=h[6],y=h[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(b+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(p+1)/2,D=(x+1)/2,N=(y+1)/2,F=(g+v)/4,O=(_+A)/4,E=(b+S)/4;return R>D&&R>N?R<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(R),o=F/s,c=O/s):D>N?D<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),s=F/o,c=E/o):N<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),s=O/c,o=E/c),this.set(s,o,c,n),this}let w=Math.sqrt((S-b)*(S-b)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(S-b)/w,this.y=(_-A)/w,this.z=(v-g)/w,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qL extends zo{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:s.depth},c=new Kn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Jg(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends qL{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class jE extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YL extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(t,n,s,o,c,u,f,h,p,g,_,v,x,b,A,S){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,h,p,g,_,v,x,b,A,S)}set(t,n,s,o,c,u,f,h,p,g,_,v,x,b,A,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=s,y[12]=o,y[1]=c,y[5]=u,y[9]=f,y[13]=h,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/oo.setFromMatrixColumn(t,0).length(),c=1/oo.setFromMatrixColumn(t,1).length(),u=1/oo.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,x=u*_,b=f*g,A=f*_;n[0]=h*g,n[4]=-h*_,n[8]=p,n[1]=x+b*p,n[5]=v-A*p,n[9]=-f*h,n[2]=A-v*p,n[6]=b+x*p,n[10]=u*h}else if(t.order==="YXZ"){const v=h*g,x=h*_,b=p*g,A=p*_;n[0]=v+A*f,n[4]=b*f-x,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=x*f-b,n[6]=A+v*f,n[10]=u*h}else if(t.order==="ZXY"){const v=h*g,x=h*_,b=p*g,A=p*_;n[0]=v-A*f,n[4]=-u*_,n[8]=b+x*f,n[1]=x+b*f,n[5]=u*g,n[9]=A-v*f,n[2]=-u*p,n[6]=f,n[10]=u*h}else if(t.order==="ZYX"){const v=u*g,x=u*_,b=f*g,A=f*_;n[0]=h*g,n[4]=b*p-x,n[8]=v*p+A,n[1]=h*_,n[5]=A*p+v,n[9]=x*p-b,n[2]=-p,n[6]=f*h,n[10]=u*h}else if(t.order==="YZX"){const v=u*h,x=u*p,b=f*h,A=f*p;n[0]=h*g,n[4]=A-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=x*_+b,n[10]=v-A*_}else if(t.order==="XZY"){const v=u*h,x=u*p,b=f*h,A=f*p;n[0]=h*g,n[4]=-_,n[8]=p*g,n[1]=v*_+A,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=f*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KL,t,ZL)}lookAt(t,n,s){const o=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Ms.crossVectors(s,pi),Ms.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Ms.crossVectors(s,pi)),Ms.normalize(),Lu.crossVectors(pi,Ms),o[0]=Ms.x,o[4]=Lu.x,o[8]=pi.x,o[1]=Ms.y,o[5]=Lu.y,o[9]=pi.y,o[2]=Ms.z,o[6]=Lu.z,o[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],g=s[1],_=s[5],v=s[9],x=s[13],b=s[2],A=s[6],S=s[10],y=s[14],w=s[3],R=s[7],D=s[11],N=s[15],F=o[0],O=o[4],E=o[8],L=o[12],at=o[1],V=o[5],K=o[9],$=o[13],ct=o[2],J=o[6],P=o[10],z=o[14],Q=o[3],ft=o[7],it=o[11],I=o[15];return c[0]=u*F+f*at+h*ct+p*Q,c[4]=u*O+f*V+h*J+p*ft,c[8]=u*E+f*K+h*P+p*it,c[12]=u*L+f*$+h*z+p*I,c[1]=g*F+_*at+v*ct+x*Q,c[5]=g*O+_*V+v*J+x*ft,c[9]=g*E+_*K+v*P+x*it,c[13]=g*L+_*$+v*z+x*I,c[2]=b*F+A*at+S*ct+y*Q,c[6]=b*O+A*V+S*J+y*ft,c[10]=b*E+A*K+S*P+y*it,c[14]=b*L+A*$+S*z+y*I,c[3]=w*F+R*at+D*ct+N*Q,c[7]=w*O+R*V+D*J+N*ft,c[11]=w*E+R*K+D*P+N*it,c[15]=w*L+R*$+D*z+N*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],f=t[5],h=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],b=t[3],A=t[7],S=t[11],y=t[15],w=h*x-p*v,R=f*x-p*_,D=f*v-h*_,N=u*x-p*g,F=u*v-h*g,O=u*_-f*g;return n*(A*w-S*R+y*D)-s*(b*w-S*N+y*F)+o*(b*R-A*N+y*O)-c*(b*D-A*F+S*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],h=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],b=t[12],A=t[13],S=t[14],y=t[15],w=n*f-s*u,R=n*h-o*u,D=n*p-c*u,N=s*h-o*f,F=s*p-c*f,O=o*p-c*h,E=g*A-_*b,L=g*S-v*b,at=g*y-x*b,V=_*S-v*A,K=_*y-x*A,$=v*y-x*S,ct=w*$-R*K+D*V+N*at-F*L+O*E;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ct;return t[0]=(f*$-h*K+p*V)*J,t[1]=(o*K-s*$-c*V)*J,t[2]=(A*O-S*F+y*N)*J,t[3]=(v*F-_*O-x*N)*J,t[4]=(h*at-u*$-p*L)*J,t[5]=(n*$-o*at+c*L)*J,t[6]=(S*D-b*O-y*R)*J,t[7]=(g*O-v*D+x*R)*J,t[8]=(u*K-f*at+p*E)*J,t[9]=(s*at-n*K-c*E)*J,t[10]=(b*F-A*D+y*w)*J,t[11]=(_*D-g*F-x*w)*J,t[12]=(f*L-u*V-h*E)*J,t[13]=(n*V-s*L+o*E)*J,t[14]=(A*R-b*N-S*w)*J,t[15]=(g*N-_*R+v*w)*J,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,f=t.y,h=t.z,p=c*u,g=c*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+s,g*h-o*u,0,p*h-o*f,g*h+o*u,c*h*h+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,p=c+c,g=u+u,_=f+f,v=c*p,x=c*g,b=c*_,A=u*g,S=u*_,y=f*_,w=h*p,R=h*g,D=h*_,N=s.x,F=s.y,O=s.z;return o[0]=(1-(A+y))*N,o[1]=(x+D)*N,o[2]=(b-R)*N,o[3]=0,o[4]=(x-D)*F,o[5]=(1-(v+y))*F,o[6]=(S+w)*F,o[7]=0,o[8]=(b+R)*O,o[9]=(S-w)*O,o[10]=(1-(v+A))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let u=oo.set(o[0],o[1],o[2]).length();const f=oo.set(o[4],o[5],o[6]).length(),h=oo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Hi.copy(this);const p=1/u,g=1/f,_=1/h;return Hi.elements[0]*=p,Hi.elements[1]*=p,Hi.elements[2]*=p,Hi.elements[4]*=g,Hi.elements[5]*=g,Hi.elements[6]*=g,Hi.elements[8]*=_,Hi.elements[9]*=_,Hi.elements[10]*=_,n.setFromRotationMatrix(Hi),s.x=u,s.y=f,s.z=h,this}makePerspective(t,n,s,o,c,u,f=ra,h=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(s-o),v=(n+t)/(n-t),x=(s+o)/(s-o);let b,A;if(h)b=c/(u-c),A=u*c/(u-c);else if(f===ra)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(f===yf)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,o,c,u,f=ra,h=!1){const p=this.elements,g=2/(n-t),_=2/(s-o),v=-(n+t)/(n-t),x=-(s+o)/(s-o);let b,A;if(h)b=1/(u-c),A=u/(u-c);else if(f===ra)b=-2/(u-c),A=-(u+c)/(u-c);else if(f===yf)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const oo=new lt,Hi=new Sn,KL=new lt(0,0,0),ZL=new lt(1,1,1),Ms=new lt,Lu=new lt,pi=new lt,US=new Sn,NS=new Vo;class qa{constructor(t=0,n=0,s=0,o=qa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],h=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return US.makeRotationFromQuaternion(t),this.setFromRotationMatrix(US,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return NS.setFromEuler(this),this.setFromQuaternion(NS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qa.DEFAULT_ORDER="XYZ";class qE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QL=0;const PS=new lt,lo=new Vo,Pa=new Sn,Uu=new lt,Fl=new lt,JL=new lt,$L=new Vo,OS=new lt(1,0,0),FS=new lt(0,1,0),IS=new lt(0,0,1),BS={type:"added"},tU={type:"removed"},co={type:"childadded",child:null},gp={type:"childremoved",child:null};class gi extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QL++}),this.uuid=lc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const t=new lt,n=new qa,s=new Vo,o=new lt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sn},normalMatrix:{value:new ve}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,n){return lo.setFromAxisAngle(t,n),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(OS,t)}rotateY(t){return this.rotateOnAxis(FS,t)}rotateZ(t){return this.rotateOnAxis(IS,t)}translateOnAxis(t,n){return PS.copy(t).applyQuaternion(this.quaternion),this.position.add(PS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(OS,t)}translateY(t){return this.translateOnAxis(FS,t)}translateZ(t){return this.translateOnAxis(IS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Uu.copy(t):Uu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(Fl,Uu,this.up):Pa.lookAt(Uu,Fl,this.up),this.quaternion.setFromRotationMatrix(Pa),o&&(Pa.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(Pa),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(BS),co.child=t,this.dispatchEvent(co),co.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(tU),gp.child=t,this.dispatchEvent(gp),gp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(BS),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,t,JL),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fl,$L,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*o,c[13]+=s-c[1]*n-c[5]*s-c[9]*o,c[14]+=o-c[2]*n-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];c(t.shapes,_)}else c(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(c(t.materials,this.material[h]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(t.animations,h))}}if(n){const f=u(t.geometries),h=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),b=u(t.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),x.length>0&&(s.animations=x),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}gi.DEFAULT_UP=new lt(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nu extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eU={type:"move"};class vp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,s),y=this._getHandJoint(p,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;p.inputState.pinching&&v>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(eU)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Nu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const YE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function _p(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class je{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ce.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ce.workingColorSpace){if(t=GL(t,1),n=Ae(n,0,1),s=Ae(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=_p(u,c,t+1/3),this.g=_p(u,c,t),this.b=_p(u,c,t-1/3)}return Ce.colorSpaceToWorking(this,o),this}setStyle(t,n=wi){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wi){const s=YE[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(Ae(zn.r*255,0,255))*65536+Math.round(Ae(zn.g*255,0,255))*256+Math.round(Ae(zn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),n);const s=zn.r,o=zn.g,c=zn.b,u=Math.max(s,o,c),f=Math.min(s,o,c);let h,p;const g=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=g<=.5?_/(u+f):_/(2-u-f),u){case s:h=(o-c)/_+(o<c?6:0);break;case o:h=(c-s)/_+2;break;case c:h=(s-o)/_+4;break}h/=6}return t.h=h,t.s=p,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=wi){Ce.workingToColorSpace(zn.copy(this),t);const n=zn.r,s=zn.g,o=zn.b;return t!==wi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+n,Es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Es),t.getHSL(Pu);const s=fp(Es.h,Pu.h,n),o=fp(Es.s,Pu.s,n),c=fp(Es.l,Pu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new je;je.NAMES=YE;class $g extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qa,this.environmentIntensity=1,this.environmentRotation=new qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gi=new lt,Oa=new lt,xp=new lt,Fa=new lt,uo=new lt,fo=new lt,zS=new lt,yp=new lt,Sp=new lt,bp=new lt,Mp=new un,Ep=new un,Tp=new un;class ji{constructor(t=new lt,n=new lt,s=new lt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Gi.subVectors(t,n),o.cross(Gi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Gi.subVectors(o,n),Oa.subVectors(s,n),xp.subVectors(t,n);const u=Gi.dot(Gi),f=Gi.dot(Oa),h=Gi.dot(xp),p=Oa.dot(Oa),g=Oa.dot(xp),_=u*p-f*f;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*h-f*g)*v,b=(u*g-f*h)*v;return c.set(1-x-b,b,x)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(t,n,s,o,c,u,f,h){return this.getBarycoord(t,n,s,o,Fa)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Fa.x),h.addScaledVector(u,Fa.y),h.addScaledVector(f,Fa.z),h)}static getInterpolatedAttribute(t,n,s,o,c,u){return Mp.setScalar(0),Ep.setScalar(0),Tp.setScalar(0),Mp.fromBufferAttribute(t,n),Ep.fromBufferAttribute(t,s),Tp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Mp,c.x),u.addScaledVector(Ep,c.y),u.addScaledVector(Tp,c.z),u}static isFrontFacing(t,n,s,o){return Gi.subVectors(s,n),Oa.subVectors(t,n),Gi.cross(Oa).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Gi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return ji.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,f;uo.subVectors(o,s),fo.subVectors(c,s),yp.subVectors(t,s);const h=uo.dot(yp),p=fo.dot(yp);if(h<=0&&p<=0)return n.copy(s);Sp.subVectors(t,o);const g=uo.dot(Sp),_=fo.dot(Sp);if(g>=0&&_<=g)return n.copy(o);const v=h*_-g*p;if(v<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(s).addScaledVector(uo,u);bp.subVectors(t,c);const x=uo.dot(bp),b=fo.dot(bp);if(b>=0&&x<=b)return n.copy(c);const A=x*p-h*b;if(A<=0&&p>=0&&b<=0)return f=p/(p-b),n.copy(s).addScaledVector(fo,f);const S=g*b-x*_;if(S<=0&&_-g>=0&&x-b>=0)return zS.subVectors(c,o),f=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(zS,f);const y=1/(S+A+v);return u=A*y,f=v*y,n.copy(s).addScaledVector(uo,u).addScaledVector(fo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cc{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ki):ki.fromBufferAttribute(c,u),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ou.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ou.copy(s.boundingBox)),Ou.applyMatrix4(t.matrixWorld),this.union(Ou)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Il),Fu.subVectors(this.max,Il),ho.subVectors(t.a,Il),po.subVectors(t.b,Il),mo.subVectors(t.c,Il),Ts.subVectors(po,ho),As.subVectors(mo,po),ar.subVectors(ho,mo);let n=[0,-Ts.z,Ts.y,0,-As.z,As.y,0,-ar.z,ar.y,Ts.z,0,-Ts.x,As.z,0,-As.x,ar.z,0,-ar.x,-Ts.y,Ts.x,0,-As.y,As.x,0,-ar.y,ar.x,0];return!Ap(n,ho,po,mo,Fu)||(n=[1,0,0,0,1,0,0,0,1],!Ap(n,ho,po,mo,Fu))?!1:(Iu.crossVectors(Ts,As),n=[Iu.x,Iu.y,Iu.z],Ap(n,ho,po,mo,Fu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ia=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],ki=new lt,Ou=new cc,ho=new lt,po=new lt,mo=new lt,Ts=new lt,As=new lt,ar=new lt,Il=new lt,Fu=new lt,Iu=new lt,sr=new lt;function Ap(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){sr.fromArray(i,c);const f=o.x*Math.abs(sr.x)+o.y*Math.abs(sr.y)+o.z*Math.abs(sr.z),h=t.dot(sr),p=n.dot(sr),g=s.dot(sr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const _n=new lt,Bu=new Fe;let nU=0;class fa{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nU++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=TS,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Bu.fromBufferAttribute(this,n),Bu.applyMatrix3(t),this.setXY(n,Bu.x,Bu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Ol(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ni(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ol(n,this.array)),n}setX(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ol(n,this.array)),n}setY(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ol(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ol(n,this.array)),n}setW(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array),o=ni(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),s=ni(s,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==TS&&(t.usage=this.usage),t}}class KE extends fa{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class ZE extends fa{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class ka extends fa{constructor(t,n,s){super(new Float32Array(t),n,s)}}const iU=new cc,Bl=new lt,wp=new lt;class t0{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):iU.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bl.subVectors(t,this.center);const n=Bl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Bl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bl.copy(t.center).add(wp)),this.expandByPoint(Bl.copy(t.center).sub(wp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let aU=0;const Ai=new Sn,Rp=new gi,go=new lt,mi=new cc,zl=new cc,Cn=new lt;class Ya extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aU++}),this.uuid=lc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BL(t)?ZE:KE)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,n,s){return Ai.makeTranslation(t,n,s),this.applyMatrix4(Ai),this}scale(t,n,s){return Ai.makeScale(t,n,s),this.applyMatrix4(Ai),this}lookAt(t){return Rp.lookAt(t),Rp.updateMatrix(),this.applyMatrix4(Rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ka(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new t0);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];zl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(mi.min,zl.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,zl.max),mi.expandByPoint(Cn)):(mi.expandByPoint(zl.min),mi.expandByPoint(zl.max))}mi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Cn.fromBufferAttribute(f,p),h&&(go.fromBufferAttribute(t,p),Cn.add(go)),o=Math.max(o,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fa(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let E=0;E<s.count;E++)f[E]=new lt,h[E]=new lt;const p=new lt,g=new lt,_=new lt,v=new Fe,x=new Fe,b=new Fe,A=new lt,S=new lt;function y(E,L,at){p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,L),_.fromBufferAttribute(s,at),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,at),g.sub(p),_.sub(p),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),f[E].add(A),f[L].add(A),f[at].add(A),h[E].add(S),h[L].add(S),h[at].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let E=0,L=w.length;E<L;++E){const at=w[E],V=at.start,K=at.count;for(let $=V,ct=V+K;$<ct;$+=3)y(t.getX($+0),t.getX($+1),t.getX($+2))}const R=new lt,D=new lt,N=new lt,F=new lt;function O(E){N.fromBufferAttribute(o,E),F.copy(N);const L=f[E];R.copy(L),R.sub(N.multiplyScalar(N.dot(L))).normalize(),D.crossVectors(F,L);const V=D.dot(h[E])<0?-1:1;u.setXYZW(E,R.x,R.y,R.z,V)}for(let E=0,L=w.length;E<L;++E){const at=w[E],V=at.start,K=at.count;for(let $=V,ct=V+K;$<ct;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fa(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,x=s.count;v<x;v++)s.setXYZ(v,0,0,0);const o=new lt,c=new lt,u=new lt,f=new lt,h=new lt,p=new lt,g=new lt,_=new lt;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(s,b),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),f.add(g),h.add(g),p.add(g),s.setXYZ(b,f.x,f.y,f.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,h){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(h.length*g);let x=0,b=0;for(let A=0,S=h.length;A<S;A++){f.isInterleavedBufferAttribute?x=h[A]*f.data.stride+f.offset:x=h[A]*g;for(let y=0;y<g;y++)v[b++]=p[x++]}return new fa(v,g,_)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ya,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=t(h,s);n.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const h=[],p=c[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,s);h.push(x)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(t[p]=h[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const p=s[h];t.data.attributes[h]=p.toJSON(t.data)}const o={};let c=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(o[h]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sU=0;class Df extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sU++}),this.uuid=lc(),this.name="",this.type="Material",this.blending=wo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=pm,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ES,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(s.blending=this.blending),this.side!==Os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hm&&(s.blendSrc=this.blendSrc),this.blendDst!==pm&&(s.blendDst=this.blendDst),this.blendEquation!==dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ES&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(s.stencilFail=this.stencilFail),this.stencilZFail!==so&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new lt,Cp=new lt,zu=new lt,ws=new lt,Dp=new lt,Vu=new lt,Lp=new lt;class rU{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ba.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,n),Ba.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Cp.copy(t).add(n).multiplyScalar(.5),zu.copy(n).sub(t).normalize(),ws.copy(this.origin).sub(Cp);const c=t.distanceTo(n)*.5,u=-this.direction.dot(zu),f=ws.dot(this.direction),h=-ws.dot(zu),p=ws.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*h-f,v=u*f-h,b=c*g,_>=0)if(v>=-b)if(v<=b){const A=1/g;_*=A,v*=A,x=_*(_+u*v+2*f)+v*(u*_+v+2*h)+p}else v=c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*h)+p;else v=-c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*h)+p;else v<=-b?(_=Math.max(0,-(-u*c+f)),v=_>0?-c:Math.min(Math.max(-c,-h),c),x=-_*_+v*(v+2*h)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-h),c),x=v*(v+2*h)+p):(_=Math.max(0,-(u*c+f)),v=_>0?c:Math.min(Math.max(-c,-h),c),x=-_*_+v*(v+2*h)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Cp).addScaledVector(zu,v),x}intersectSphere(t,n){Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),o=Ba.dot(Ba)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,f,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,h=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,h=(t.min.z-v.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,n,s,o,c){Dp.subVectors(n,t),Vu.subVectors(s,t),Lp.crossVectors(Dp,Vu);let u=this.direction.dot(Lp),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ws.subVectors(this.origin,t);const h=f*this.direction.dot(Vu.crossVectors(ws,Vu));if(h<0)return null;const p=f*this.direction.dot(Dp.cross(ws));if(p<0||h+p>u)return null;const g=-f*ws.dot(Lp);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class QE extends Df{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=CE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const VS=new Sn,rr=new rU,Hu=new t0,HS=new lt,Gu=new lt,ku=new lt,Xu=new lt,Up=new lt,Wu=new lt,GS=new lt,ju=new lt;class Ui extends gi{constructor(t=new Ya,n=new QE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Wu.set(0,0,0);for(let h=0,p=c.length;h<p;h++){const g=f[h],_=c[h];g!==0&&(Up.fromBufferAttribute(_,t),u?Wu.addScaledVector(Up,g):Wu.addScaledVector(Up.sub(n),g))}n.add(Wu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hu.copy(s.boundingSphere),Hu.applyMatrix4(c),rr.copy(t.ray).recast(t.near),!(Hu.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Hu,HS)===null||rr.origin.distanceToSquared(HS)>(t.far-t.near)**2))&&(VS.copy(c).invert(),rr.copy(t.ray).applyMatrix4(VS),!(s.boundingBox!==null&&rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,rr)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const S=v[b],y=u[S.materialIndex],w=Math.max(S.start,x.start),R=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let D=w,N=R;D<N;D+=3){const F=f.getX(D),O=f.getX(D+1),E=f.getX(D+2);o=qu(this,y,t,s,p,g,_,F,O,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let S=b,y=A;S<y;S+=3){const w=f.getX(S),R=f.getX(S+1),D=f.getX(S+2);o=qu(this,u,t,s,p,g,_,w,R,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const S=v[b],y=u[S.materialIndex],w=Math.max(S.start,x.start),R=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let D=w,N=R;D<N;D+=3){const F=D,O=D+1,E=D+2;o=qu(this,y,t,s,p,g,_,F,O,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=b,y=A;S<y;S+=3){const w=S,R=S+1,D=S+2;o=qu(this,u,t,s,p,g,_,w,R,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function oU(i,t,n,s,o,c,u,f){let h;if(t.side===ai?h=s.intersectTriangle(u,c,o,!0,f):h=s.intersectTriangle(o,c,u,t.side===Os,f),h===null)return null;ju.copy(f),ju.applyMatrix4(i.matrixWorld);const p=n.ray.origin.distanceTo(ju);return p<n.near||p>n.far?null:{distance:p,point:ju.clone(),object:i}}function qu(i,t,n,s,o,c,u,f,h,p){i.getVertexPosition(f,Gu),i.getVertexPosition(h,ku),i.getVertexPosition(p,Xu);const g=oU(i,t,n,s,Gu,ku,Xu,GS);if(g){const _=new lt;ji.getBarycoord(GS,Gu,ku,Xu,_),o&&(g.uv=ji.getInterpolatedAttribute(o,f,h,p,_,new Fe)),c&&(g.uv1=ji.getInterpolatedAttribute(c,f,h,p,_,new Fe)),u&&(g.normal=ji.getInterpolatedAttribute(u,f,h,p,_,new lt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new lt,materialIndex:0};ji.getNormal(Gu,ku,Xu,v.normal),g.face=v,g.barycoord=_}return g}class lU extends Kn{constructor(t=null,n=1,s=1,o,c,u,f,h,p=Fn,g=Fn,_,v){super(null,u,f,h,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Np=new lt,cU=new lt,uU=new ve;class fr{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=Np.subVectors(s,n).cross(cU.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Np),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||uU.getNormalMatrix(t),o=this.coplanarPoint(Np).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new t0,fU=new Fe(.5,.5),Yu=new lt;class JE{constructor(t=new fr,n=new fr,s=new fr,o=new fr,c=new fr,u=new fr){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ra,s=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],A=c[9],S=c[10],y=c[11],w=c[12],R=c[13],D=c[14],N=c[15];if(o[0].setComponents(p-u,x-g,y-b,N-w).normalize(),o[1].setComponents(p+u,x+g,y+b,N+w).normalize(),o[2].setComponents(p+f,x+_,y+A,N+R).normalize(),o[3].setComponents(p-f,x-_,y-A,N-R).normalize(),s)o[4].setComponents(h,v,S,D).normalize(),o[5].setComponents(p-h,x-v,y-S,N-D).normalize();else if(o[4].setComponents(p-h,x-v,y-S,N-D).normalize(),n===ra)o[5].setComponents(p+h,x+v,y+S,N+D).normalize();else if(n===yf)o[5].setComponents(h,v,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);const n=fU.distanceTo(t.center);return or.radius=.7071067811865476+n,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Yu.x=o.normal.x>0?t.max.x:t.min.x,Yu.y=o.normal.y>0?t.max.y:t.min.y,Yu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $E extends Kn{constructor(t=[],n=yr,s,o,c,u,f,h,p,g){super(t,n,s,o,c,u,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ic extends Kn{constructor(t,n,s=ha,o,c,u,f=Fn,h=Fn,p,g=ja,_=1){if(g!==ja&&g!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,f,h,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dU extends ic{constructor(t,n=ha,s=yr,o,c,u=Fn,f=Fn,h,p=ja){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tT extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class uc extends Ya{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],p=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,o,u,2),b("x","z","y",1,-1,t,s,-n,o,u,3),b("x","y","z",1,-1,t,n,s,o,c,4),b("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(h),this.setAttribute("position",new ka(p,3)),this.setAttribute("normal",new ka(g,3)),this.setAttribute("uv",new ka(_,2));function b(A,S,y,w,R,D,N,F,O,E,L){const at=D/O,V=N/E,K=D/2,$=N/2,ct=F/2,J=O+1,P=E+1;let z=0,Q=0;const ft=new lt;for(let it=0;it<P;it++){const I=it*V-$;for(let j=0;j<J;j++){const _t=j*at-K;ft[A]=_t*w,ft[S]=I*R,ft[y]=ct,p.push(ft.x,ft.y,ft.z),ft[A]=0,ft[S]=0,ft[y]=F>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(j/O),_.push(1-it/E),z+=1}}for(let it=0;it<E;it++)for(let I=0;I<O;I++){const j=v+I+J*it,_t=v+I+J*(it+1),wt=v+(I+1)+J*(it+1),Rt=v+(I+1)+J*it;h.push(j,_t,Rt),h.push(_t,wt,Rt),Q+=6}f.addGroup(x,Q,L),x+=Q,v+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class br extends Ya{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(s),h=Math.floor(o),p=f+1,g=h+1,_=t/f,v=n/h,x=[],b=[],A=[],S=[];for(let y=0;y<g;y++){const w=y*v-u;for(let R=0;R<p;R++){const D=R*_-c;b.push(D,-w,0),A.push(0,0,1),S.push(R/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let w=0;w<f;w++){const R=w+p*y,D=w+p*(y+1),N=w+1+p*(y+1),F=w+1+p*y;x.push(R,D,F),x.push(D,N,F)}this.setIndex(x),this.setAttribute("position",new ka(b,3)),this.setAttribute("normal",new ka(A,3)),this.setAttribute("uv",new ka(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.widthSegments,t.heightSegments)}}function Oo(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function jn(i){const t={};for(let n=0;n<i.length;n++){const s=Oo(i[n]);for(const o in s)t[o]=s[o]}return t}function hU(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function eT(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const pU={clone:Oo,merge:jn};var mU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Df{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mU,this.fragmentShader=gU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=hU(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class vU extends vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _U extends Df{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xU extends Df{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ku=new lt,Zu=new Vo,ea=new lt;class Lf extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ku,Zu,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ku,Zu,ea.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ku,Zu,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ku,Zu,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new lt,kS=new Fe,XS=new Fe;class Wi extends Lf{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ng*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(up*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ng*2*Math.atan(Math.tan(up*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,n){return this.getViewBounds(t,kS,XS),n.subVectors(XS,kS)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(up*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class e0 extends Lf{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vo=-90,_o=1;class yU extends gi{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(vo,_o,t,n);o.layers=this.layers,this.add(o);const c=new Wi(vo,_o,t,n);c.layers=this.layers,this.add(c);const u=new Wi(vo,_o,t,n);u.layers=this.layers,this.add(u);const f=new Wi(vo,_o,t,n);f.layers=this.layers,this.add(f);const h=new Wi(vo,_o,t,n);h.layers=this.layers,this.add(h);const p=new Wi(vo,_o,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,f,h]=n;for(const p of n)this.remove(p);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===yf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(s,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(s,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(s,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class SU extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function WS(i,t,n,s){const o=bU(s);switch(n){case GE:return i*t;case XE:return i*t/o.components*o.byteLength;case qg:return i*t/o.components*o.byteLength;case No:return i*t*2/o.components*o.byteLength;case Yg:return i*t*2/o.components*o.byteLength;case kE:return i*t*3/o.components*o.byteLength;case qi:return i*t*4/o.components*o.byteLength;case Kg:return i*t*4/o.components*o.byteLength;case of:case lf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cf:case uf:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tm:case wm:return Math.max(i,16)*Math.max(t,8)/4;case Em:case Am:return Math.max(i,8)*Math.max(t,8)/2;case Rm:case Cm:case Lm:case Um:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dm:case Nm:case Pm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Om:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fm:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Im:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bm:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vm:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gm:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case km:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wm:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ym:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Km:case Zm:case Qm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jm:case $m:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tg:case eg:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bU(i){switch(i){case Ri:case BE:return{byteLength:1,components:1};case ec:case zE:case Wa:return{byteLength:2,components:1};case Wg:case jg:return{byteLength:2,components:4};case ha:case Xg:case sa:return{byteLength:4,components:1};case VE:case HE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kg}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nT(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function MU(i){const t=new WeakMap;function n(f,h){const p=f.array,g=f.usage,_=p.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,p,g),f.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=i.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const g=h.array,_=h.updateRanges;if(i.bindBuffer(p,f),_.length===0)i.bufferSubData(p,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],A=_[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const A=_[x];i.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=t.get(f);h&&(i.deleteBuffer(h.buffer),t.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:c,update:u}}var EU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,NU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IU=`#ifdef USE_IRIDESCENCE
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
#endif`,BU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,VU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qU=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,KU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$U=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tN="gl_FragColor = linearToOutputTexel( gl_FragColor );",eN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nN=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aN=`#ifdef USE_ENVMAP
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
#endif`,sN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rN=`#ifdef USE_ENVMAP
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
#endif`,oN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fN=`#ifdef USE_GRADIENTMAP
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
}`,dN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_N=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ON=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$N=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dP=`#ifdef USE_SKINNING
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
#endif`,hP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_P=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EP=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,TP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,DP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,UP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,GP=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,YP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$P=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:EU,alphahash_pars_fragment:TU,alphamap_fragment:AU,alphamap_pars_fragment:wU,alphatest_fragment:RU,alphatest_pars_fragment:CU,aomap_fragment:DU,aomap_pars_fragment:LU,batching_pars_vertex:UU,batching_vertex:NU,begin_vertex:PU,beginnormal_vertex:OU,bsdfs:FU,iridescence_fragment:IU,bumpmap_pars_fragment:BU,clipping_planes_fragment:zU,clipping_planes_pars_fragment:VU,clipping_planes_pars_vertex:HU,clipping_planes_vertex:GU,color_fragment:kU,color_pars_fragment:XU,color_pars_vertex:WU,color_vertex:jU,common:qU,cube_uv_reflection_fragment:YU,defaultnormal_vertex:KU,displacementmap_pars_vertex:ZU,displacementmap_vertex:QU,emissivemap_fragment:JU,emissivemap_pars_fragment:$U,colorspace_fragment:tN,colorspace_pars_fragment:eN,envmap_fragment:nN,envmap_common_pars_fragment:iN,envmap_pars_fragment:aN,envmap_pars_vertex:sN,envmap_physical_pars_fragment:gN,envmap_vertex:rN,fog_vertex:oN,fog_pars_vertex:lN,fog_fragment:cN,fog_pars_fragment:uN,gradientmap_pars_fragment:fN,lightmap_pars_fragment:dN,lights_lambert_fragment:hN,lights_lambert_pars_fragment:pN,lights_pars_begin:mN,lights_toon_fragment:vN,lights_toon_pars_fragment:_N,lights_phong_fragment:xN,lights_phong_pars_fragment:yN,lights_physical_fragment:SN,lights_physical_pars_fragment:bN,lights_fragment_begin:MN,lights_fragment_maps:EN,lights_fragment_end:TN,logdepthbuf_fragment:AN,logdepthbuf_pars_fragment:wN,logdepthbuf_pars_vertex:RN,logdepthbuf_vertex:CN,map_fragment:DN,map_pars_fragment:LN,map_particle_fragment:UN,map_particle_pars_fragment:NN,metalnessmap_fragment:PN,metalnessmap_pars_fragment:ON,morphinstance_vertex:FN,morphcolor_vertex:IN,morphnormal_vertex:BN,morphtarget_pars_vertex:zN,morphtarget_vertex:VN,normal_fragment_begin:HN,normal_fragment_maps:GN,normal_pars_fragment:kN,normal_pars_vertex:XN,normal_vertex:WN,normalmap_pars_fragment:jN,clearcoat_normal_fragment_begin:qN,clearcoat_normal_fragment_maps:YN,clearcoat_pars_fragment:KN,iridescence_pars_fragment:ZN,opaque_fragment:QN,packing:JN,premultiplied_alpha_fragment:$N,project_vertex:tP,dithering_fragment:eP,dithering_pars_fragment:nP,roughnessmap_fragment:iP,roughnessmap_pars_fragment:aP,shadowmap_pars_fragment:sP,shadowmap_pars_vertex:rP,shadowmap_vertex:oP,shadowmask_pars_fragment:lP,skinbase_vertex:cP,skinning_pars_vertex:uP,skinning_vertex:fP,skinnormal_vertex:dP,specularmap_fragment:hP,specularmap_pars_fragment:pP,tonemapping_fragment:mP,tonemapping_pars_fragment:gP,transmission_fragment:vP,transmission_pars_fragment:_P,uv_pars_fragment:xP,uv_pars_vertex:yP,uv_vertex:SP,worldpos_vertex:bP,background_vert:MP,background_frag:EP,backgroundCube_vert:TP,backgroundCube_frag:AP,cube_vert:wP,cube_frag:RP,depth_vert:CP,depth_frag:DP,distance_vert:LP,distance_frag:UP,equirect_vert:NP,equirect_frag:PP,linedashed_vert:OP,linedashed_frag:FP,meshbasic_vert:IP,meshbasic_frag:BP,meshlambert_vert:zP,meshlambert_frag:VP,meshmatcap_vert:HP,meshmatcap_frag:GP,meshnormal_vert:kP,meshnormal_frag:XP,meshphong_vert:WP,meshphong_frag:jP,meshphysical_vert:qP,meshphysical_frag:YP,meshtoon_vert:KP,meshtoon_frag:ZP,points_vert:QP,points_frag:JP,shadow_vert:$P,shadow_frag:tO,sprite_vert:eO,sprite_frag:nO},Ot={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},aa={basic:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:jn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:jn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new je(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:jn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:jn([Ot.points,Ot.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:jn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:jn([Ot.common,Ot.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:jn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:jn([Ot.sprite,Ot.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:jn([Ot.common,Ot.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:jn([Ot.lights,Ot.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};aa.physical={uniforms:jn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Qu={r:0,b:0,g:0},lr=new qa,iO=new Sn;function aO(i,t,n,s,o,c){const u=new je(0);let f=o===!0?0:1,h,p,g=null,_=0,v=null;function x(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const D=w.backgroundBlurriness>0;R=t.get(R,D)}return R}function b(w){let R=!1;const D=x(w);D===null?S(u,f):D&&D.isColor&&(S(D,1),R=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(w,R){const D=x(R);D&&(D.isCubeTexture||D.mapping===Cf)?(p===void 0&&(p=new Ui(new uc(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Oo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),lr.copy(R.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iO.makeRotationFromEuler(lr)),p.material.toneMapped=Ce.getTransfer(D.colorSpace)!==Ge,(g!==D||_!==D.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,g=D,_=D.version,v=i.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Ui(new br(2,2),new vi({name:"BackgroundMaterial",uniforms:Oo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Ce.getTransfer(D.colorSpace)!==Ge,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||_!==D.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,g=D,_=D.version,v=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function S(w,R){w.getRGB(Qu,eT(i)),n.buffers.color.setClear(Qu.r,Qu.g,Qu.b,R,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,R=1){u.set(w),f=R,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,S(u,f)},render:b,addToRenderList:A,dispose:y}}function sO(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=v(null);let c=o,u=!1;function f(V,K,$,ct,J){let P=!1;const z=_(V,ct,$,K);c!==z&&(c=z,p(c.object)),P=x(V,ct,$,J),P&&b(V,ct,$,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(P||u)&&(u=!1,D(V,K,$,ct),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function h(){return i.createVertexArray()}function p(V){return i.bindVertexArray(V)}function g(V){return i.deleteVertexArray(V)}function _(V,K,$,ct){const J=ct.wireframe===!0;let P=s[K.id];P===void 0&&(P={},s[K.id]=P);const z=V.isInstancedMesh===!0?V.id:0;let Q=P[z];Q===void 0&&(Q={},P[z]=Q);let ft=Q[$.id];ft===void 0&&(ft={},Q[$.id]=ft);let it=ft[J];return it===void 0&&(it=v(h()),ft[J]=it),it}function v(V){const K=[],$=[],ct=[];for(let J=0;J<n;J++)K[J]=0,$[J]=0,ct[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:$,attributeDivisors:ct,object:V,attributes:{},index:null}}function x(V,K,$,ct){const J=c.attributes,P=K.attributes;let z=0;const Q=$.getAttributes();for(const ft in Q)if(Q[ft].location>=0){const I=J[ft];let j=P[ft];if(j===void 0&&(ft==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),ft==="instanceColor"&&V.instanceColor&&(j=V.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==ct}function b(V,K,$,ct){const J={},P=K.attributes;let z=0;const Q=$.getAttributes();for(const ft in Q)if(Q[ft].location>=0){let I=P[ft];I===void 0&&(ft==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),ft==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),J[ft]=j,z++}c.attributes=J,c.attributesNum=z,c.index=ct}function A(){const V=c.newAttributes;for(let K=0,$=V.length;K<$;K++)V[K]=0}function S(V){y(V,0)}function y(V,K){const $=c.newAttributes,ct=c.enabledAttributes,J=c.attributeDivisors;$[V]=1,ct[V]===0&&(i.enableVertexAttribArray(V),ct[V]=1),J[V]!==K&&(i.vertexAttribDivisor(V,K),J[V]=K)}function w(){const V=c.newAttributes,K=c.enabledAttributes;for(let $=0,ct=K.length;$<ct;$++)K[$]!==V[$]&&(i.disableVertexAttribArray($),K[$]=0)}function R(V,K,$,ct,J,P,z){z===!0?i.vertexAttribIPointer(V,K,$,J,P):i.vertexAttribPointer(V,K,$,ct,J,P)}function D(V,K,$,ct){A();const J=ct.attributes,P=$.getAttributes(),z=K.defaultAttributeValues;for(const Q in P){const ft=P[Q];if(ft.location>=0){let it=J[Q];if(it===void 0&&(Q==="instanceMatrix"&&V.instanceMatrix&&(it=V.instanceMatrix),Q==="instanceColor"&&V.instanceColor&&(it=V.instanceColor)),it!==void 0){const I=it.normalized,j=it.itemSize,_t=t.get(it);if(_t===void 0)continue;const wt=_t.buffer,Rt=_t.type,Z=_t.bytesPerElement,gt=Rt===i.INT||Rt===i.UNSIGNED_INT||it.gpuType===Xg;if(it.isInterleavedBufferAttribute){const bt=it.data,Dt=bt.stride,$t=it.offset;if(bt.isInstancedInterleavedBuffer){for(let ee=0;ee<ft.locationSize;ee++)y(ft.location+ee,bt.meshPerAttribute);V.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ee=0;ee<ft.locationSize;ee++)S(ft.location+ee);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let ee=0;ee<ft.locationSize;ee++)R(ft.location+ee,j/ft.locationSize,Rt,I,Dt*Z,($t+j/ft.locationSize*ee)*Z,gt)}else{if(it.isInstancedBufferAttribute){for(let bt=0;bt<ft.locationSize;bt++)y(ft.location+bt,it.meshPerAttribute);V.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let bt=0;bt<ft.locationSize;bt++)S(ft.location+bt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let bt=0;bt<ft.locationSize;bt++)R(ft.location+bt,j/ft.locationSize,Rt,I,j*Z,j/ft.locationSize*bt*Z,gt)}}else if(z!==void 0){const I=z[Q];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(ft.location,I);break;case 3:i.vertexAttrib3fv(ft.location,I);break;case 4:i.vertexAttrib4fv(ft.location,I);break;default:i.vertexAttrib1fv(ft.location,I)}}}}w()}function N(){L();for(const V in s){const K=s[V];for(const $ in K){const ct=K[$];for(const J in ct){const P=ct[J];for(const z in P)g(P[z].object),delete P[z];delete ct[J]}}delete s[V]}}function F(V){if(s[V.id]===void 0)return;const K=s[V.id];for(const $ in K){const ct=K[$];for(const J in ct){const P=ct[J];for(const z in P)g(P[z].object),delete P[z];delete ct[J]}}delete s[V.id]}function O(V){for(const K in s){const $=s[K];for(const ct in $){const J=$[ct];if(J[V.id]===void 0)continue;const P=J[V.id];for(const z in P)g(P[z].object),delete P[z];delete J[V.id]}}}function E(V){for(const K in s){const $=s[K],ct=V.isInstancedMesh===!0?V.id:0,J=$[ct];if(J!==void 0){for(const P in J){const z=J[P];for(const Q in z)g(z[Q].object),delete z[Q];delete J[P]}delete $[ct],Object.keys($).length===0&&delete s[K]}}}function L(){at(),u=!0,c!==o&&(c=o,p(c.object))}function at(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:at,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:w}}function rO(i,t,n){let s;function o(p){s=p}function c(p,g){i.drawArrays(s,p,g),n.update(g,s,1)}function u(p,g,_){_!==0&&(i.drawArraysInstanced(s,p,g,_),n.update(g,s,_))}function f(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let x=0;for(let b=0;b<_;b++)x+=g[b];n.update(x,s,1)}function h(p,g,_,v){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<p.length;b++)u(p[b],g[b],v[b]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let b=0;for(let A=0;A<_;A++)b+=g[A]*v[A];n.update(b,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function oO(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==qi&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ri&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==sa&&!E)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=h(p);g!==p&&(ue("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),F=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:D,maxSamples:N,samples:F}}function lO(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new fr,f=new ve,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||s!==0||o;return o=v,s=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=i.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):p();else{const w=c?0:s,R=w*4;let D=y.clippingState||null;h.value=D,D=g(b,v,R,x);for(let N=0;N!==R;++N)D[N]=n[N];y.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,x,b){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,b!==!0||S===null){const y=x+A*4,w=v.matrixWorldInverse;f.getNormalMatrix(w),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,D=x;R!==A;++R,D+=4)u.copy(_[R]).applyMatrix4(w,f),u.normal.toArray(S,D),S[D+3]=u.constant}h.value=S,h.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const Ns=4,jS=[.125,.215,.35,.446,.526,.582],hr=20,cO=256,Vl=new e0,qS=new je;let Pp=null,Op=0,Fp=0,Ip=!1;const uO=new lt;class YS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:f=uO}=c;Pp=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,s,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=QS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ZS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pp,Op,Fp),this._renderer.xr.enabled=Ip,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===yr||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pp=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Wa,format:qi,colorSpace:Po,depthBuffer:!1},o=KS(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=KS(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fO(c)),this._blurMaterial=hO(c,t,n),this._ggxMaterial=dO(c,t,n)}return o}_compileMaterial(t){const n=new Ui(new Ya,t);this._renderer.compile(n,Vl)}_sceneToCubeUV(t,n,s,o,c){const h=new Wi(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(qS),_.toneMapping=ca,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new uc,new QE({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,y=!0):(S.color.copy(qS),y=!0);for(let R=0;R<6;R++){const D=R%3;D===0?(h.up.set(0,p[R],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x+g[R],c.y,c.z)):D===1?(h.up.set(0,0,p[R]),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y+g[R],c.z)):(h.up.set(0,p[R],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y,c.z+g[R]));const N=this._cubeSize;xo(o,D*N,R>2?N:0,N,N),_.setRenderTarget(o),y&&_.render(A,h),_.render(t,h)}_.toneMapping=x,_.autoClear=v,t.background=w}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===yr||t.mapping===Uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=QS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ZS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const h=this._cubeSize;xo(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(u,Vl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,x=_*v,{_lodMax:b}=this,A=this._sizeLods[s],S=3*A*(s>b-Ns?s-b+Ns:0),y=4*(this._cubeSize-A);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=b-n,xo(c,S,y,3*A,2*A),o.setRenderTarget(c),o.render(f,Vl),h.envMap.value=c.texture,h.roughness.value=0,h.mipInt.value=b-s,xo(t,S,y,3*A,2*A),o.setRenderTarget(t),o.render(f,Vl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,x=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*hr-1),A=c/b,S=isFinite(c)?1+Math.floor(g*A):hr;S>hr&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hr}`);const y=[];let w=0;for(let O=0;O<hr;++O){const E=O/A,L=Math.exp(-E*E/2);y.push(L),O===0?w+=L:O<S&&(w+=2*L)}for(let O=0;O<y.length;O++)y[O]=y[O]/w;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:R}=this;v.dTheta.value=b,v.mipInt.value=R-s;const D=this._sizeLods[o],N=3*D*(o>R-Ns?o-R+Ns:0),F=4*(this._cubeSize-D);xo(n,N,F,3*D,2*D),h.setRenderTarget(n),h.render(_,Vl)}}function fO(i){const t=[],n=[],s=[];let o=i;const c=i-Ns+1+jS.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let h=1/f;u>i-Ns?h=jS[u-i+Ns-1]:u===0&&(h=0),n.push(h);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,A=3,S=2,y=1,w=new Float32Array(A*b*x),R=new Float32Array(S*b*x),D=new Float32Array(y*b*x);for(let F=0;F<x;F++){const O=F%3*2/3-1,E=F>2?0:-1,L=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];w.set(L,A*b*F),R.set(v,S*b*F);const at=[F,F,F,F,F,F];D.set(at,y*b*F)}const N=new Ya;N.setAttribute("position",new fa(w,A)),N.setAttribute("uv",new fa(R,S)),N.setAttribute("faceIndex",new fa(D,y)),s.push(new Ui(N,null)),o>Ns&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function KS(i,t,n){const s=new ua(i,t,n);return s.texture.mapping=Cf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xo(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function dO(i,t,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cO,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function hO(i,t,n){const s=new Float32Array(hr),o=new lt(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ZS(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function QS(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Uf(){return`

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
	`}class iT extends ua{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new $E(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new uc(5,5,5),c=new vi({name:"CubemapFromEquirect",uniforms:Oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:Ha});c.uniforms.tEquirect.value=n;const u=new Ui(o,c),f=n.minFilter;return n.minFilter===gr&&(n.minFilter=Vn),new yU(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}function pO(i){let t=new WeakMap,n=new WeakMap,s=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===op||x===lp)if(t.has(v)){const b=t.get(v).texture;return f(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const A=new iT(b.height);return A.fromEquirectangularTexture(i,v),t.set(v,A),v.addEventListener("dispose",p),f(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===op||x===lp,A=x===yr||x===Uo;if(b||A){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new YS(i)),S=b?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const w=v.image;return b&&w&&w.height>0||A&&w&&h(w)?(s===null&&(s=new YS(i)),S=b?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function f(v,x){return x===op?v.mapping=yr:x===lp&&(v.mapping=Uo),v}function h(v){let x=0;const b=6;for(let A=0;A<b;A++)v[A]!==void 0&&x++;return x===b}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function mO(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&bf("WebGLRenderer: "+s+" extension not supported."),o}}}function gO(i,t,n,s){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function h(_){const v=_.attributes;for(const x in v)t.update(v[x],i.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,b=_.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const w=x.array;A=x.version;for(let R=0,D=w.length;R<D;R+=3){const N=w[R+0],F=w[R+1],O=w[R+2];v.push(N,F,F,O,O,N)}}else{const w=b.array;A=b.version;for(let R=0,D=w.length/3-1;R<D;R+=3){const N=R+0,F=R+1,O=R+2;v.push(N,F,F,O,O,N)}}const S=new(b.count>=65535?ZE:KE)(v,1);S.version=A;const y=c.get(_);y&&t.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function vO(i,t,n){let s;function o(v){s=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function h(v,x){i.drawElements(s,x,c,v*u),n.update(x,s,1)}function p(v,x,b){b!==0&&(i.drawElementsInstanced(s,x,c,v*u,b),n.update(x,s,b))}function g(v,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,v,0,b);let S=0;for(let y=0;y<b;y++)S+=x[y];n.update(S,s,1)}function _(v,x,b,A){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/u,x[y],A[y]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,c,v,0,A,0,b);let y=0;for(let w=0;w<b;w++)y+=x[w]*A[w];n.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function _O(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=f*(c/3);break;case i.LINES:n.lines+=f*(c/2);break;case i.LINE_STRIP:n.lines+=f*(c-1);break;case i.LINE_LOOP:n.lines+=f*c;break;case i.POINTS:n.points+=f*c;break;default:Ne("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function xO(i,t,n){const s=new WeakMap,o=new un;function c(u,f,h){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(f);if(v===void 0||v.count!==_){let at=function(){E.dispose(),s.delete(f),f.removeEventListener("dispose",at)};var x=at;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let D=0;b===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let N=f.attributes.position.count*D,F=1;N>t.maxTextureSize&&(F=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*F*4*_),E=new jE(O,N,F,_);E.type=sa,E.needsUpdate=!0;const L=D*4;for(let V=0;V<_;V++){const K=y[V],$=w[V],ct=R[V],J=N*F*4*V;for(let P=0;P<K.count;P++){const z=P*L;b===!0&&(o.fromBufferAttribute(K,P),O[J+z+0]=o.x,O[J+z+1]=o.y,O[J+z+2]=o.z,O[J+z+3]=0),A===!0&&(o.fromBufferAttribute($,P),O[J+z+4]=o.x,O[J+z+5]=o.y,O[J+z+6]=o.z,O[J+z+7]=0),S===!0&&(o.fromBufferAttribute(ct,P),O[J+z+8]=o.x,O[J+z+9]=o.y,O[J+z+10]=o.z,O[J+z+11]=ct.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Fe(N,F)},s.set(f,v),f.addEventListener("dispose",at)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const A=f.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:c}}function yO(i,t,n,s,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=t.get(p,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==g&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function f(){c=new WeakMap}function h(p){const g=p.target;g.removeEventListener("dispose",h),s.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:f}}const SO={[DE]:"LINEAR_TONE_MAPPING",[LE]:"REINHARD_TONE_MAPPING",[UE]:"CINEON_TONE_MAPPING",[NE]:"ACES_FILMIC_TONE_MAPPING",[OE]:"AGX_TONE_MAPPING",[FE]:"NEUTRAL_TONE_MAPPING",[PE]:"CUSTOM_TONE_MAPPING"};function bO(i,t,n,s,o){const c=new ua(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new ua(t,n,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),f=new Ya;f.setAttribute("position",new ka([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ka([0,2,0,0,2,0],2));const h=new vU({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ui(f,h),g=new e0(-1,1,1,-1,0,1);let _=null,v=null,x=!1,b,A=null,S=[],y=!1;this.setSize=function(w,R){c.setSize(w,R),u.setSize(w,R);for(let D=0;D<S.length;D++){const N=S[D];N.setSize&&N.setSize(w,R)}},this.setEffects=function(w){S=w,y=S.length>0&&S[0].isRenderPass===!0;const R=c.width,D=c.height;for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(R,D)}},this.begin=function(w,R){if(x||w.toneMapping===ca&&S.length===0)return!1;if(A=R,R!==null){const D=R.width,N=R.height;(c.width!==D||c.height!==N)&&this.setSize(D,N)}return y===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=ca,!0},this.hasRenderPass=function(){return y},this.end=function(w,R){w.toneMapping=b,x=!0;let D=c,N=u;for(let F=0;F<S.length;F++){const O=S[F];if(O.enabled!==!1&&(O.render(w,N,D,R),O.needsSwap!==!1)){const E=D;D=N,N=E}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,h.defines={},Ce.getTransfer(_)===Ge&&(h.defines.SRGB_TRANSFER="");const F=SO[v];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(A),w.render(p,g),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),h.dispose()}}const aT=new Kn,ig=new ic(1,1),sT=new jE,rT=new YL,oT=new $E,JS=[],$S=[],tb=new Float32Array(16),eb=new Float32Array(9),nb=new Float32Array(4);function Ho(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=JS[o];if(c===void 0&&(c=new Float32Array(o),JS[o]=c),t!==0){s.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,i[u].toArray(c,f)}return c}function An(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function wn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function Nf(i,t){let n=$S[t];n===void 0&&(n=new Int32Array(t),$S[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function MO(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function EO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2fv(this.addr,t),wn(n,t)}}function TO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;i.uniform3fv(this.addr,t),wn(n,t)}}function AO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4fv(this.addr,t),wn(n,t)}}function wO(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;nb.set(s),i.uniformMatrix2fv(this.addr,!1,nb),wn(n,s)}}function RO(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;eb.set(s),i.uniformMatrix3fv(this.addr,!1,eb),wn(n,s)}}function CO(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;tb.set(s),i.uniformMatrix4fv(this.addr,!1,tb),wn(n,s)}}function DO(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function LO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2iv(this.addr,t),wn(n,t)}}function UO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;i.uniform3iv(this.addr,t),wn(n,t)}}function NO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4iv(this.addr,t),wn(n,t)}}function PO(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function OO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;i.uniform2uiv(this.addr,t),wn(n,t)}}function FO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;i.uniform3uiv(this.addr,t),wn(n,t)}}function IO(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;i.uniform4uiv(this.addr,t),wn(n,t)}}function BO(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(ig.compareFunction=n.isReversedDepthBuffer()?Qg:Zg,c=ig):c=aT,n.setTexture2D(t||c,o)}function zO(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||rT,o)}function VO(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||oT,o)}function HO(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||sT,o)}function GO(i){switch(i){case 5126:return MO;case 35664:return EO;case 35665:return TO;case 35666:return AO;case 35674:return wO;case 35675:return RO;case 35676:return CO;case 5124:case 35670:return DO;case 35667:case 35671:return LO;case 35668:case 35672:return UO;case 35669:case 35673:return NO;case 5125:return PO;case 36294:return OO;case 36295:return FO;case 36296:return IO;case 35678:case 36198:case 36298:case 36306:case 35682:return BO;case 35679:case 36299:case 36307:return zO;case 35680:case 36300:case 36308:case 36293:return VO;case 36289:case 36303:case 36311:case 36292:return HO}}function kO(i,t){i.uniform1fv(this.addr,t)}function XO(i,t){const n=Ho(t,this.size,2);i.uniform2fv(this.addr,n)}function WO(i,t){const n=Ho(t,this.size,3);i.uniform3fv(this.addr,n)}function jO(i,t){const n=Ho(t,this.size,4);i.uniform4fv(this.addr,n)}function qO(i,t){const n=Ho(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function YO(i,t){const n=Ho(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function KO(i,t){const n=Ho(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function ZO(i,t){i.uniform1iv(this.addr,t)}function QO(i,t){i.uniform2iv(this.addr,t)}function JO(i,t){i.uniform3iv(this.addr,t)}function $O(i,t){i.uniform4iv(this.addr,t)}function tF(i,t){i.uniform1uiv(this.addr,t)}function eF(i,t){i.uniform2uiv(this.addr,t)}function nF(i,t){i.uniform3uiv(this.addr,t)}function iF(i,t){i.uniform4uiv(this.addr,t)}function aF(i,t,n){const s=this.cache,o=t.length,c=Nf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),wn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=ig:u=aT;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function sF(i,t,n){const s=this.cache,o=t.length,c=Nf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),wn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||rT,c[u])}function rF(i,t,n){const s=this.cache,o=t.length,c=Nf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),wn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||oT,c[u])}function oF(i,t,n){const s=this.cache,o=t.length,c=Nf(n,o);An(s,c)||(i.uniform1iv(this.addr,c),wn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||sT,c[u])}function lF(i){switch(i){case 5126:return kO;case 35664:return XO;case 35665:return WO;case 35666:return jO;case 35674:return qO;case 35675:return YO;case 35676:return KO;case 5124:case 35670:return ZO;case 35667:case 35671:return QO;case 35668:case 35672:return JO;case 35669:case 35673:return $O;case 5125:return tF;case 36294:return eF;case 36295:return nF;case 36296:return iF;case 35678:case 36198:case 36298:case 36306:case 35682:return aF;case 35679:case 36299:case 36307:return sF;case 35680:case 36300:case 36308:case 36293:return rF;case 36289:case 36303:case 36311:case 36292:return oF}}class cF{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=GO(n.type)}}class uF{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lF(n.type)}}class fF{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],s)}}}const Bp=/(\w+)(\])?(\[|\.)?/g;function ib(i,t){i.seq.push(t),i.map[t.id]=t}function dF(i,t,n){const s=i.name,o=s.length;for(Bp.lastIndex=0;;){const c=Bp.exec(s),u=Bp.lastIndex;let f=c[1];const h=c[2]==="]",p=c[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){ib(n,p===void 0?new cF(f,i,t):new uF(f,i,t));break}else{let _=n.map[f];_===void 0&&(_=new fF(f),ib(n,_)),n=_}}}class ff{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=t.getActiveUniform(n,u),h=t.getUniformLocation(n,f.name);dF(f,h,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=s[f.id];h.needsUpdate!==!1&&f.setValue(t,h.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function ab(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const hF=37297;let pF=0;function mF(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;s.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const sb=new ve;function gF(i){Ce._getMatrix(sb,Ce.workingColorSpace,i);const t=`mat3( ${sb.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(i)){case xf:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rb(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+mF(i.getShaderSource(t),f)}else return c}function vF(i,t){const n=gF(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const _F={[DE]:"Linear",[LE]:"Reinhard",[UE]:"Cineon",[NE]:"ACESFilmic",[OE]:"AgX",[FE]:"Neutral",[PE]:"Custom"};function xF(i,t){const n=_F[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ju=new lt;function yF(){Ce.getLuminanceCoefficients(Ju);const i=Ju.x.toFixed(4),t=Ju.y.toFixed(4),n=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SF(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function bF(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function MF(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let f=1;c.type===i.FLOAT_MAT2&&(f=2),c.type===i.FLOAT_MAT3&&(f=3),c.type===i.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:f}}return n}function Xl(i){return i!==""}function ob(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lb(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EF=/^[ \t]*#include +<([\w\d./]+)>/gm;function ag(i){return i.replace(EF,AF)}const TF=new Map;function AF(i,t){let n=xe[t];if(n===void 0){const s=TF.get(t);if(s!==void 0)n=xe[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ag(n)}const wF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cb(i){return i.replace(wF,RF)}function RF(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ub(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const CF={[rf]:"SHADOWMAP_TYPE_PCF",[kl]:"SHADOWMAP_TYPE_VSM"};function DF(i){return CF[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LF={[yr]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[Cf]:"ENVMAP_TYPE_CUBE_UV"};function UF(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":LF[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const NF={[Uo]:"ENVMAP_MODE_REFRACTION"};function PF(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":NF[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OF={[CE]:"ENVMAP_BLENDING_MULTIPLY",[AL]:"ENVMAP_BLENDING_MIX",[wL]:"ENVMAP_BLENDING_ADD"};function FF(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":OF[i.combine]||"ENVMAP_BLENDING_NONE"}function IF(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function BF(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=DF(n),p=UF(n),g=PF(n),_=FF(n),v=IF(n),x=SF(n),b=bF(c),A=o.createProgram();let S,y,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Xl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Xl).join(`
`),y.length>0&&(y+=`
`)):(S=[ub(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),y=[ub(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ca?"#define TONE_MAPPING":"",n.toneMapping!==ca?xe.tonemapping_pars_fragment:"",n.toneMapping!==ca?xF("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,vF("linearToOutputTexel",n.outputColorSpace),yF(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xl).join(`
`)),u=ag(u),u=ob(u,n),u=lb(u,n),f=ag(f),f=ob(f,n),f=lb(f,n),u=cb(u),f=cb(f),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===AS?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===AS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=w+S+u,D=w+y+f,N=ab(o,o.VERTEX_SHADER,R),F=ab(o,o.FRAGMENT_SHADER,D);o.attachShader(A,N),o.attachShader(A,F),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(V){if(i.debug.checkShaderErrors){const K=o.getProgramInfoLog(A)||"",$=o.getShaderInfoLog(N)||"",ct=o.getShaderInfoLog(F)||"",J=K.trim(),P=$.trim(),z=ct.trim();let Q=!0,ft=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,A,N,F);else{const it=rb(o,N,"vertex"),I=rb(o,F,"fragment");Ne("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+it+`
`+I)}else J!==""?ue("WebGLProgram: Program Info Log:",J):(P===""||z==="")&&(ft=!1);ft&&(V.diagnostics={runnable:Q,programLog:J,vertexShader:{log:P,prefix:S},fragmentShader:{log:z,prefix:y}})}o.deleteShader(N),o.deleteShader(F),E=new ff(o,A),L=MF(o,A)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let at=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=o.getProgramParameter(A,hF)),at},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pF++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=F,this}let zF=0;class VF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new HF(t),n.set(t,s)),s}}class HF{constructor(t){this.id=zF++,this.code=t,this.usedTimes=0}}function GF(i,t,n,s,o,c){const u=new qE,f=new VF,h=new Set,p=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return h.add(E),E===0?"uv":`uv${E}`}function A(E,L,at,V,K){const $=V.fog,ct=K.geometry,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,z=t.get(E.envMap||J,P),Q=z&&z.mapping===Cf?z.image.height:null,ft=x[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&ue("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const it=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,I=it!==void 0?it.length:0;let j=0;ct.morphAttributes.position!==void 0&&(j=1),ct.morphAttributes.normal!==void 0&&(j=2),ct.morphAttributes.color!==void 0&&(j=3);let _t,wt,Rt,Z;if(ft){const Re=aa[ft];_t=Re.vertexShader,wt=Re.fragmentShader}else _t=E.vertexShader,wt=E.fragmentShader,f.update(E),Rt=f.getVertexShaderID(E),Z=f.getFragmentShaderID(E);const gt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Dt=K.isInstancedMesh===!0,$t=K.isBatchedMesh===!0,ee=!!E.map,qe=!!E.matcap,_e=!!z,de=!!E.aoMap,Pe=!!E.lightMap,fe=!!E.bumpMap,an=!!E.normalMap,G=!!E.displacementMap,Je=!!E.emissiveMap,we=!!E.metalnessMap,Ie=!!E.roughnessMap,Zt=E.anisotropy>0,B=E.clearcoat>0,T=E.dispersion>0,q=E.iridescence>0,vt=E.sheen>0,St=E.transmission>0,pt=Zt&&!!E.anisotropyMap,qt=B&&!!E.clearcoatMap,Ut=B&&!!E.clearcoatNormalMap,te=B&&!!E.clearcoatRoughnessMap,ae=q&&!!E.iridescenceMap,At=q&&!!E.iridescenceThicknessMap,Et=vt&&!!E.sheenColorMap,It=vt&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Bt=!!E.specularColorMap,pe=!!E.specularIntensityMap,W=St&&!!E.transmissionMap,Lt=St&&!!E.thicknessMap,Ct=!!E.gradientMap,zt=!!E.alphaMap,Tt=E.alphaTest>0,ht=!!E.alphaHash,Ht=!!E.extensions;let re=ca;E.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(re=i.toneMapping);const ze={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:_t,fragmentShader:wt,defines:E.defines,customVertexShaderID:Rt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:$t,batchingColor:$t&&K._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&K.instanceColor!==null,instancingMorph:Dt&&K.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Po,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:qe,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:Q,aoMap:de,lightMap:Pe,bumpMap:fe,normalMap:an,displacementMap:G,emissiveMap:Je,normalMapObjectSpace:an&&E.normalMapType===LL,normalMapTangentSpace:an&&E.normalMapType===DL,metalnessMap:we,roughnessMap:Ie,anisotropy:Zt,anisotropyMap:pt,clearcoat:B,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:te,dispersion:T,iridescence:q,iridescenceMap:ae,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:Et,sheenRoughnessMap:It,specularMap:Ft,specularColorMap:Bt,specularIntensityMap:pe,transmission:St,transmissionMap:W,thicknessMap:Lt,gradientMap:Ct,opaque:E.transparent===!1&&E.blending===wo&&E.alphaToCoverage===!1,alphaMap:zt,alphaTest:Tt,alphaHash:ht,combine:E.combine,mapUv:ee&&b(E.map.channel),aoMapUv:de&&b(E.aoMap.channel),lightMapUv:Pe&&b(E.lightMap.channel),bumpMapUv:fe&&b(E.bumpMap.channel),normalMapUv:an&&b(E.normalMap.channel),displacementMapUv:G&&b(E.displacementMap.channel),emissiveMapUv:Je&&b(E.emissiveMap.channel),metalnessMapUv:we&&b(E.metalnessMap.channel),roughnessMapUv:Ie&&b(E.roughnessMap.channel),anisotropyMapUv:pt&&b(E.anisotropyMap.channel),clearcoatMapUv:qt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(E.sheenRoughnessMap.channel),specularMapUv:Ft&&b(E.specularMap.channel),specularColorMapUv:Bt&&b(E.specularColorMap.channel),specularIntensityMapUv:pe&&b(E.specularIntensityMap.channel),transmissionMapUv:W&&b(E.transmissionMap.channel),thicknessMapUv:Lt&&b(E.thicknessMap.channel),alphaMapUv:zt&&b(E.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(an||Zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ct.attributes.uv&&(ee||zt),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ct.attributes.normal===void 0&&an===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:K.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&at.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&Ce.getTransfer(E.map.colorSpace)===Ge,decodeVideoTextureEmissive:Je&&E.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(E.emissiveMap.colorSpace)===Ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===za,flipSided:E.side===ai,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ht&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&E.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=h.has(1),ze.vertexUv2s=h.has(2),ze.vertexUv3s=h.has(3),h.clear(),ze}function S(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const at in E.defines)L.push(at),L.push(E.defines[at]);return E.isRawShaderMaterial===!1&&(y(L,E),w(L,E),L.push(i.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function y(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function w(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),E.push(u.mask)}function R(E){const L=x[E.type];let at;if(L){const V=aa[L];at=pU.clone(V.uniforms)}else at=E.uniforms;return at}function D(E,L){let at=g.get(L);return at!==void 0?++at.usedTimes:(at=new BF(i,L,E,o),p.push(at),g.set(L,at)),at}function N(E){if(--E.usedTimes===0){const L=p.indexOf(E);p[L]=p[p.length-1],p.pop(),g.delete(E.cacheKey),E.destroy()}}function F(E){f.remove(E)}function O(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:R,acquireProgram:D,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:O}}function kF(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function s(u){i.delete(u)}function o(u,f,h){i.get(u)[f]=h}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function XF(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function db(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function f(v,x,b,A,S,y){let w=i[t];return w===void 0?(w={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:y},i[t]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=b,w.materialVariant=u(v),w.groupOrder=A,w.renderOrder=v.renderOrder,w.z=S,w.group=y),t++,w}function h(v,x,b,A,S,y){const w=f(v,x,b,A,S,y);b.transmission>0?s.push(w):b.transparent===!0?o.push(w):n.push(w)}function p(v,x,b,A,S,y){const w=f(v,x,b,A,S,y);b.transmission>0?s.unshift(w):b.transparent===!0?o.unshift(w):n.unshift(w)}function g(v,x){n.length>1&&n.sort(v||XF),s.length>1&&s.sort(x||fb),o.length>1&&o.sort(x||fb)}function _(){for(let v=t,x=i.length;v<x;v++){const b=i[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:h,unshift:p,finish:_,sort:g}}function WF(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new db,i.set(s,[u])):o>=c.length?(u=new db,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function jF(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new je};break;case"SpotLight":n={position:new lt,direction:new lt,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return i[t.id]=n,n}}}function qF(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let YF=0;function KF(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ZF(i){const t=new jF,n=qF(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new lt);const o=new lt,c=new Sn,u=new Sn;function f(p){let g=0,_=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let x=0,b=0,A=0,S=0,y=0,w=0,R=0,D=0,N=0,F=0,O=0;p.sort(KF);for(let L=0,at=p.length;L<at;L++){const V=p[L],K=V.color,$=V.intensity,ct=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===No?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=K.r*$,_+=K.g*$,v+=K.b*$;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],$);O++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const z=V.shadow,Q=n.get(V);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,s.directionalShadow[x]=Q,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=V.shadow.matrix,w++}s.directional[x]=P,x++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(K).multiplyScalar($),P.distance=ct,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[A]=P;const z=V.shadow;if(V.map&&(s.spotLightMap[N]=V.map,N++,z.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[A]=z.matrix,V.castShadow){const Q=n.get(V);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,s.spotShadow[A]=Q,s.spotShadowMap[A]=J,D++}A++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(K).multiplyScalar($),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=P,S++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const z=V.shadow,Q=n.get(V);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,s.pointShadow[b]=Q,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=V.shadow.matrix,R++}s.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar($),P.groundColor.copy(V.groundColor).multiplyScalar($),s.hemi[y]=P,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==x||E.pointLength!==b||E.spotLength!==A||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==w||E.numPointShadows!==R||E.numSpotShadows!==D||E.numSpotMaps!==N||E.numLightProbes!==O)&&(s.directional.length=x,s.spot.length=A,s.rectArea.length=S,s.point.length=b,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=D+N-F,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,E.directionalLength=x,E.pointLength=b,E.spotLength=A,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=w,E.numPointShadows=R,E.numSpotShadows=D,E.numSpotMaps=N,E.numLightProbes=O,s.version=YF++)}function h(p,g){let _=0,v=0,x=0,b=0,A=0;const S=g.matrixWorldInverse;for(let y=0,w=p.length;y<w;y++){const R=p[y];if(R.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),_++}else if(R.isSpotLight){const D=s.spot[x];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),u.identity(),c.copy(R.matrixWorld),c.premultiply(S),u.extractRotation(c),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:f,setupView:h,state:s}}function hb(i){const t=new ZF(i),n=[],s=[];function o(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){t.setup(n)}function h(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function QF(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new hb(i),t.set(o,[f])):c>=u.length?(f=new hb(i),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}const JF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$F=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tI=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],eI=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],pb=new Sn,Hl=new lt,zp=new lt;function nI(i,t,n){let s=new JE;const o=new Fe,c=new Fe,u=new un,f=new _U,h=new xU,p={},g=n.maxTextureSize,_={[Os]:ai,[ai]:Os,[za]:za},v=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:JF,fragmentShader:$F}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ya;b.setAttribute("position",new fa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ui(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let y=this.type;this.render=function(F,O,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;this.type===oL&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rf);const L=i.getRenderTarget(),at=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ha),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=y!==this.type;$&&O.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(J=>J.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,J=F.length;ct<J;ct++){const P=F[ct],z=P.shadow;if(z===void 0){ue("WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const Q=z.getFrameExtents();o.multiply(Q),c.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,z.mapSize.y=c.y));const ft=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ft,z.map===null||$===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===kl){if(P.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ua(o.x,o.y,{format:No,type:Wa,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),z.map.texture.name=P.name+".shadowMap",z.map.depthTexture=new ic(o.x,o.y,sa),z.map.depthTexture.name=P.name+".shadowMapDepth",z.map.depthTexture.format=ja,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn}else P.isPointLight?(z.map=new iT(o.x),z.map.depthTexture=new dU(o.x,ha)):(z.map=new ua(o.x,o.y),z.map.depthTexture=new ic(o.x,o.y,ha)),z.map.depthTexture.name=P.name+".shadowMap",z.map.depthTexture.format=ja,this.type===rf?(z.map.depthTexture.compareFunction=ft?Qg:Zg,z.map.depthTexture.minFilter=Vn,z.map.depthTexture.magFilter=Vn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn);z.camera.updateProjectionMatrix()}const it=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<it;I++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,I),i.clear();else{I===0&&(i.setRenderTarget(z.map),i.clear());const j=z.getViewport(I);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),K.viewport(u)}if(P.isPointLight){const j=z.camera,_t=z.matrix,wt=P.distance||j.far;wt!==j.far&&(j.far=wt,j.updateProjectionMatrix()),Hl.setFromMatrixPosition(P.matrixWorld),j.position.copy(Hl),zp.copy(j.position),zp.add(tI[I]),j.up.copy(eI[I]),j.lookAt(zp),j.updateMatrixWorld(),_t.makeTranslation(-Hl.x,-Hl.y,-Hl.z),pb.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(pb,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(P);s=z.getFrustum(),D(O,E,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===kl&&w(z,E),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(L,at,V)};function w(F,O){const E=t.update(A);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ua(o.x,o.y,{format:No,type:Wa})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(O,null,E,v,A,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(O,null,E,x,A,null)}function R(F,O,E,L){let at=null;const V=E.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)at=V;else if(at=E.isPointLight===!0?h:f,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=at.uuid,$=O.uuid;let ct=p[K];ct===void 0&&(ct={},p[K]=ct);let J=ct[$];J===void 0&&(J=at.clone(),ct[$]=J,O.addEventListener("dispose",N)),at=J}if(at.visible=O.visible,at.wireframe=O.wireframe,L===kl?at.side=O.shadowSide!==null?O.shadowSide:O.side:at.side=O.shadowSide!==null?O.shadowSide:_[O.side],at.alphaMap=O.alphaMap,at.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,at.map=O.map,at.clipShadows=O.clipShadows,at.clippingPlanes=O.clippingPlanes,at.clipIntersection=O.clipIntersection,at.displacementMap=O.displacementMap,at.displacementScale=O.displacementScale,at.displacementBias=O.displacementBias,at.wireframeLinewidth=O.wireframeLinewidth,at.linewidth=O.linewidth,E.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const K=i.properties.get(at);K.light=E}return at}function D(F,O,E,L,at){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&at===kl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,F.matrixWorld);const $=t.update(F),ct=F.material;if(Array.isArray(ct)){const J=$.groups;for(let P=0,z=J.length;P<z;P++){const Q=J[P],ft=ct[Q.materialIndex];if(ft&&ft.visible){const it=R(F,ft,L,at);F.onBeforeShadow(i,F,O,E,$,it,Q),i.renderBufferDirect(E,null,$,it,F,Q),F.onAfterShadow(i,F,O,E,$,it,Q)}}}else if(ct.visible){const J=R(F,ct,L,at);F.onBeforeShadow(i,F,O,E,$,J,null),i.renderBufferDirect(E,null,$,J,F,null),F.onAfterShadow(i,F,O,E,$,J,null)}}const K=F.children;for(let $=0,ct=K.length;$<ct;$++)D(K[$],O,E,L,at)}function N(F){F.target.removeEventListener("dispose",N);for(const E in p){const L=p[E],at=F.target.uuid;at in L&&(L[at].dispose(),delete L[at])}}}function iI(i,t){function n(){let W=!1;const Lt=new un;let Ct=null;const zt=new un(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!W&&(i.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,ht,Ht,re,ze){ze===!0&&(Tt*=re,ht*=re,Ht*=re),Lt.set(Tt,ht,Ht,re),zt.equals(Lt)===!1&&(i.clearColor(Tt,ht,Ht,re),zt.copy(Lt))},reset:function(){W=!1,Ct=null,zt.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,Ct=null,zt=null,Tt=null;return{setReversed:function(ht){if(Lt!==ht){const Ht=t.get("EXT_clip_control");ht?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Lt=ht;const re=Tt;Tt=null,this.setClear(re)}},getReversed:function(){return Lt},setTest:function(ht){ht?gt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ht){Ct!==ht&&!W&&(i.depthMask(ht),Ct=ht)},setFunc:function(ht){if(Lt&&(ht=HL[ht]),zt!==ht){switch(ht){case mm:i.depthFunc(i.NEVER);break;case gm:i.depthFunc(i.ALWAYS);break;case vm:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case _m:i.depthFunc(i.EQUAL);break;case xm:i.depthFunc(i.GEQUAL);break;case ym:i.depthFunc(i.GREATER);break;case Sm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=ht}},setLocked:function(ht){W=ht},setClear:function(ht){Tt!==ht&&(Tt=ht,Lt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){W=!1,Ct=null,zt=null,Tt=null,Lt=!1}}}function o(){let W=!1,Lt=null,Ct=null,zt=null,Tt=null,ht=null,Ht=null,re=null,ze=null;return{setTest:function(Re){W||(Re?gt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Re){Lt!==Re&&!W&&(i.stencilMask(Re),Lt=Re)},setFunc:function(Re,Hn,Ni){(Ct!==Re||zt!==Hn||Tt!==Ni)&&(i.stencilFunc(Re,Hn,Ni),Ct=Re,zt=Hn,Tt=Ni)},setOp:function(Re,Hn,Ni){(ht!==Re||Ht!==Hn||re!==Ni)&&(i.stencilOp(Re,Hn,Ni),ht=Re,Ht=Hn,re=Ni)},setLocked:function(Re){W=Re},setClear:function(Re){ze!==Re&&(i.clearStencil(Re),ze=Re)},reset:function(){W=!1,Lt=null,Ct=null,zt=null,Tt=null,ht=null,Ht=null,re=null,ze=null}}}const c=new n,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],b=null,A=!1,S=null,y=null,w=null,R=null,D=null,N=null,F=null,O=new je(0,0,0),E=0,L=!1,at=null,V=null,K=null,$=null,ct=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,z=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),P=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),P=z>=2);let ft=null,it={};const I=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),_t=new un().fromArray(I),wt=new un().fromArray(j);function Rt(W,Lt,Ct,zt){const Tt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(W,ht),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<Ct;Ht++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Lt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ht}const Z={};Z[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),gt(i.DEPTH_TEST),u.setFunc(Lo),fe(!1),an(yS),gt(i.CULL_FACE),de(Ha);function gt(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function bt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Dt(W,Lt){return _[W]!==Lt?(i.bindFramebuffer(W,Lt),_[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function $t(W,Lt){let Ct=x,zt=!1;if(W){Ct=v.get(Lt),Ct===void 0&&(Ct=[],v.set(Lt,Ct));const Tt=W.textures;if(Ct.length!==Tt.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ht=Tt.length;ht<Ht;ht++)Ct[ht]=i.COLOR_ATTACHMENT0+ht;Ct.length=Tt.length,zt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,zt=!0);zt&&i.drawBuffers(Ct)}function ee(W){return b!==W?(i.useProgram(W),b=W,!0):!1}const qe={[dr]:i.FUNC_ADD,[cL]:i.FUNC_SUBTRACT,[uL]:i.FUNC_REVERSE_SUBTRACT};qe[fL]=i.MIN,qe[dL]=i.MAX;const _e={[hL]:i.ZERO,[pL]:i.ONE,[mL]:i.SRC_COLOR,[hm]:i.SRC_ALPHA,[SL]:i.SRC_ALPHA_SATURATE,[xL]:i.DST_COLOR,[vL]:i.DST_ALPHA,[gL]:i.ONE_MINUS_SRC_COLOR,[pm]:i.ONE_MINUS_SRC_ALPHA,[yL]:i.ONE_MINUS_DST_COLOR,[_L]:i.ONE_MINUS_DST_ALPHA,[bL]:i.CONSTANT_COLOR,[ML]:i.ONE_MINUS_CONSTANT_COLOR,[EL]:i.CONSTANT_ALPHA,[TL]:i.ONE_MINUS_CONSTANT_ALPHA};function de(W,Lt,Ct,zt,Tt,ht,Ht,re,ze,Re){if(W===Ha){A===!0&&(bt(i.BLEND),A=!1);return}if(A===!1&&(gt(i.BLEND),A=!0),W!==lL){if(W!==S||Re!==L){if((y!==dr||D!==dr)&&(i.blendEquation(i.FUNC_ADD),y=dr,D=dr),Re)switch(W){case wo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case SS:i.blendFunc(i.ONE,i.ONE);break;case bS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MS:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",W);break}else switch(W){case wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case SS:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bS:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MS:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",W);break}w=null,R=null,N=null,F=null,O.set(0,0,0),E=0,S=W,L=Re}return}Tt=Tt||Lt,ht=ht||Ct,Ht=Ht||zt,(Lt!==y||Tt!==D)&&(i.blendEquationSeparate(qe[Lt],qe[Tt]),y=Lt,D=Tt),(Ct!==w||zt!==R||ht!==N||Ht!==F)&&(i.blendFuncSeparate(_e[Ct],_e[zt],_e[ht],_e[Ht]),w=Ct,R=zt,N=ht,F=Ht),(re.equals(O)===!1||ze!==E)&&(i.blendColor(re.r,re.g,re.b,ze),O.copy(re),E=ze),S=W,L=!1}function Pe(W,Lt){W.side===za?bt(i.CULL_FACE):gt(i.CULL_FACE);let Ct=W.side===ai;Lt&&(Ct=!Ct),fe(Ct),W.blending===wo&&W.transparent===!1?de(Ha):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;f.setTest(zt),zt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(W){at!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),at=W)}function an(W){W!==sL?(gt(i.CULL_FACE),W!==V&&(W===yS?i.cullFace(i.BACK):W===rL?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),V=W}function G(W){W!==K&&(P&&i.lineWidth(W),K=W)}function Je(W,Lt,Ct){W?(gt(i.POLYGON_OFFSET_FILL),($!==Lt||ct!==Ct)&&($=Lt,ct=Ct,u.getReversed()&&(Lt=-Lt),i.polygonOffset(Lt,Ct))):bt(i.POLYGON_OFFSET_FILL)}function we(W){W?gt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=i.TEXTURE0+J-1),ft!==W&&(i.activeTexture(W),ft=W)}function Zt(W,Lt,Ct){Ct===void 0&&(ft===null?Ct=i.TEXTURE0+J-1:Ct=ft);let zt=it[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},it[Ct]=zt),(zt.type!==W||zt.texture!==Lt)&&(ft!==Ct&&(i.activeTexture(Ct),ft=Ct),i.bindTexture(W,Lt||Z[W]),zt.type=W,zt.texture=Lt)}function B(){const W=it[ft];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function vt(){try{i.texSubImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function St(){try{i.texSubImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function qt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Ut(){try{i.texStorage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function te(){try{i.texStorage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function ae(){try{i.texImage2D(...arguments)}catch(W){Ne("WebGLState:",W)}}function At(){try{i.texImage3D(...arguments)}catch(W){Ne("WebGLState:",W)}}function Et(W){_t.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function It(W){wt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function Ft(W,Lt){let Ct=p.get(Lt);Ct===void 0&&(Ct=new WeakMap,p.set(Lt,Ct));let zt=Ct.get(W);zt===void 0&&(zt=i.getUniformBlockIndex(Lt,W.name),Ct.set(W,zt))}function Bt(W,Lt){const zt=p.get(Lt).get(W);h.get(Lt)!==zt&&(i.uniformBlockBinding(Lt,zt,W.__bindingPointIndex),h.set(Lt,zt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ft=null,it={},_={},v=new WeakMap,x=[],b=null,A=!1,S=null,y=null,w=null,R=null,D=null,N=null,F=null,O=new je(0,0,0),E=0,L=!1,at=null,V=null,K=null,$=null,ct=null,_t.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:gt,disable:bt,bindFramebuffer:Dt,drawBuffers:$t,useProgram:ee,setBlending:de,setMaterial:Pe,setFlipSided:fe,setCullFace:an,setLineWidth:G,setPolygonOffset:Je,setScissorTest:we,activeTexture:Ie,bindTexture:Zt,unbindTexture:B,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:ae,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:Ut,texStorage3D:te,texSubImage2D:vt,texSubImage3D:St,compressedTexSubImage2D:pt,compressedTexSubImage3D:qt,scissor:Et,viewport:It,reset:pe}}function aI(i,t,n,s,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,T){return x?new OffscreenCanvas(B,T):Sf("canvas")}function A(B,T,q){let vt=1;const St=Zt(B);if((St.width>q||St.height>q)&&(vt=q/Math.max(St.width,St.height)),vt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const pt=Math.floor(vt*St.width),qt=Math.floor(vt*St.height);_===void 0&&(_=b(pt,qt));const Ut=T?b(pt,qt):_;return Ut.width=pt,Ut.height=qt,Ut.getContext("2d").drawImage(B,0,0,pt,qt),ue("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+qt+")."),Ut}else return"data"in B&&ue("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),B;return B}function S(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(B,T,q,vt,St=!1){if(B!==null){if(i[B]!==void 0)return i[B];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let pt=T;if(T===i.RED&&(q===i.FLOAT&&(pt=i.R32F),q===i.HALF_FLOAT&&(pt=i.R16F),q===i.UNSIGNED_BYTE&&(pt=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(pt=i.R8UI),q===i.UNSIGNED_SHORT&&(pt=i.R16UI),q===i.UNSIGNED_INT&&(pt=i.R32UI),q===i.BYTE&&(pt=i.R8I),q===i.SHORT&&(pt=i.R16I),q===i.INT&&(pt=i.R32I)),T===i.RG&&(q===i.FLOAT&&(pt=i.RG32F),q===i.HALF_FLOAT&&(pt=i.RG16F),q===i.UNSIGNED_BYTE&&(pt=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(pt=i.RG8UI),q===i.UNSIGNED_SHORT&&(pt=i.RG16UI),q===i.UNSIGNED_INT&&(pt=i.RG32UI),q===i.BYTE&&(pt=i.RG8I),q===i.SHORT&&(pt=i.RG16I),q===i.INT&&(pt=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),q===i.UNSIGNED_INT&&(pt=i.RGB32UI),q===i.BYTE&&(pt=i.RGB8I),q===i.SHORT&&(pt=i.RGB16I),q===i.INT&&(pt=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),q===i.UNSIGNED_INT&&(pt=i.RGBA32UI),q===i.BYTE&&(pt=i.RGBA8I),q===i.SHORT&&(pt=i.RGBA16I),q===i.INT&&(pt=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),T===i.RGBA){const qt=St?xf:Ce.getTransfer(vt);q===i.FLOAT&&(pt=i.RGBA32F),q===i.HALF_FLOAT&&(pt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(pt=qt===Ge?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(B,T){let q;return B?T===null||T===ha||T===nc?q=i.DEPTH24_STENCIL8:T===sa?q=i.DEPTH32F_STENCIL8:T===ec&&(q=i.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ha||T===nc?q=i.DEPTH_COMPONENT24:T===sa?q=i.DEPTH_COMPONENT32F:T===ec&&(q=i.DEPTH_COMPONENT16),q}function N(B,T){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Fn&&B.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function F(B){const T=B.target;T.removeEventListener("dispose",F),E(T),T.isVideoTexture&&g.delete(T)}function O(B){const T=B.target;T.removeEventListener("dispose",O),at(T)}function E(B){const T=s.get(B);if(T.__webglInit===void 0)return;const q=B.source,vt=v.get(q);if(vt){const St=vt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&L(B),Object.keys(vt).length===0&&v.delete(q)}s.remove(B)}function L(B){const T=s.get(B);i.deleteTexture(T.__webglTexture);const q=B.source,vt=v.get(q);delete vt[T.__cacheKey],u.memory.textures--}function at(B){const T=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let St=0;St<T.__webglFramebuffer[vt].length;St++)i.deleteFramebuffer(T.__webglFramebuffer[vt][St]);else i.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)i.deleteFramebuffer(T.__webglFramebuffer[vt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=B.textures;for(let vt=0,St=q.length;vt<St;vt++){const pt=s.get(q[vt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),u.memory.textures--),s.remove(q[vt])}s.remove(B)}let V=0;function K(){V=0}function $(){const B=V;return B>=o.maxTextures&&ue("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),V+=1,B}function ct(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function J(B,T){const q=s.get(B);if(B.isVideoTexture&&we(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&q.__version!==B.version){const vt=B.image;if(vt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,B,T);return}}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function P(B,T){const q=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){Z(q,B,T);return}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function z(B,T){const q=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){Z(q,B,T);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function Q(B,T){const q=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&q.__version!==B.version){gt(q,B,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const ft={[bm]:i.REPEAT,[Va]:i.CLAMP_TO_EDGE,[Mm]:i.MIRRORED_REPEAT},it={[Fn]:i.NEAREST,[RL]:i.NEAREST_MIPMAP_NEAREST,[Du]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[cp]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},I={[UL]:i.NEVER,[IL]:i.ALWAYS,[NL]:i.LESS,[Zg]:i.LEQUAL,[PL]:i.EQUAL,[Qg]:i.GEQUAL,[OL]:i.GREATER,[FL]:i.NOTEQUAL};function j(B,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===cp||T.magFilter===Du||T.magFilter===gr||T.minFilter===Vn||T.minFilter===cp||T.minFilter===Du||T.minFilter===gr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ft[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ft[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ft[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,it[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,it[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==Du&&T.minFilter!==gr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _t(B,T){let q=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",F));const vt=T.source;let St=v.get(vt);St===void 0&&(St={},v.set(vt,St));const pt=ct(T);if(pt!==B.__cacheKey){St[pt]===void 0&&(St[pt]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),St[pt].usedTimes++;const qt=St[B.__cacheKey];qt!==void 0&&(St[B.__cacheKey].usedTimes--,qt.usedTimes===0&&L(T)),B.__cacheKey=pt,B.__webglTexture=St[pt].texture}return q}function wt(B,T,q){return Math.floor(Math.floor(B/q)/T)}function Rt(B,T,q,vt){const pt=B.updateRanges;if(pt.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,vt,T.data);else{pt.sort((At,Et)=>At.start-Et.start);let qt=0;for(let At=1;At<pt.length;At++){const Et=pt[qt],It=pt[At],Ft=Et.start+Et.count,Bt=wt(It.start,T.width,4),pe=wt(Et.start,T.width,4);It.start<=Ft+1&&Bt===pe&&wt(It.start+It.count-1,T.width,4)===Bt?Et.count=Math.max(Et.count,It.start+It.count-Et.start):(++qt,pt[qt]=It)}pt.length=qt+1;const Ut=i.getParameter(i.UNPACK_ROW_LENGTH),te=i.getParameter(i.UNPACK_SKIP_PIXELS),ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let At=0,Et=pt.length;At<Et;At++){const It=pt[At],Ft=Math.floor(It.start/4),Bt=Math.ceil(It.count/4),pe=Ft%T.width,W=Math.floor(Ft/T.width),Lt=Bt,Ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,pe,W,Lt,Ct,q,vt,T.data)}B.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function Z(B,T,q){let vt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=i.TEXTURE_3D);const St=_t(B,T),pt=T.source;n.bindTexture(vt,B.__webglTexture,i.TEXTURE0+q);const qt=s.get(pt);if(pt.version!==qt.__version||St===!0){n.activeTexture(i.TEXTURE0+q);const Ut=Ce.getPrimaries(Ce.workingColorSpace),te=T.colorSpace===Ls?null:Ce.getPrimaries(T.colorSpace),ae=T.colorSpace===Ls||Ut===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let At=A(T.image,!1,o.maxTextureSize);At=Ie(T,At);const Et=c.convert(T.format,T.colorSpace),It=c.convert(T.type);let Ft=R(T.internalFormat,Et,It,T.colorSpace,T.isVideoTexture);j(vt,T);let Bt;const pe=T.mipmaps,W=T.isVideoTexture!==!0,Lt=qt.__version===void 0||St===!0,Ct=pt.dataReady,zt=N(T,At);if(T.isDepthTexture)Ft=D(T.format===vr,T.type),Lt&&(W?n.texStorage2D(i.TEXTURE_2D,1,Ft,At.width,At.height):n.texImage2D(i.TEXTURE_2D,0,Ft,At.width,At.height,0,Et,It,null));else if(T.isDataTexture)if(pe.length>0){W&&Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Ft,pe[0].width,pe[0].height);for(let Tt=0,ht=pe.length;Tt<ht;Tt++)Bt=pe[Tt],W?Ct&&n.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Et,It,Bt.data):n.texImage2D(i.TEXTURE_2D,Tt,Ft,Bt.width,Bt.height,0,Et,It,Bt.data);T.generateMipmaps=!1}else W?(Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Ft,At.width,At.height),Ct&&Rt(T,At,Et,It)):n.texImage2D(i.TEXTURE_2D,0,Ft,At.width,At.height,0,Et,It,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Ft,pe[0].width,pe[0].height,At.depth);for(let Tt=0,ht=pe.length;Tt<ht;Tt++)if(Bt=pe[Tt],T.format!==qi)if(Et!==null)if(W){if(Ct)if(T.layerUpdates.size>0){const Ht=WS(Bt.width,Bt.height,T.format,T.type);for(const re of T.layerUpdates){const ze=Bt.data.subarray(re*Ht/Bt.data.BYTES_PER_ELEMENT,(re+1)*Ht/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,re,Bt.width,Bt.height,1,Et,ze)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,Et,Bt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,Ft,Bt.width,Bt.height,At.depth,0,Bt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,At.depth,Et,It,Bt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Tt,Ft,Bt.width,Bt.height,At.depth,0,Et,It,Bt.data)}else{W&&Lt&&n.texStorage2D(i.TEXTURE_2D,zt,Ft,pe[0].width,pe[0].height);for(let Tt=0,ht=pe.length;Tt<ht;Tt++)Bt=pe[Tt],T.format!==qi?Et!==null?W?Ct&&n.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Et,Bt.data):n.compressedTexImage2D(i.TEXTURE_2D,Tt,Ft,Bt.width,Bt.height,0,Bt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Et,It,Bt.data):n.texImage2D(i.TEXTURE_2D,Tt,Ft,Bt.width,Bt.height,0,Et,It,Bt.data)}else if(T.isDataArrayTexture)if(W){if(Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Ft,At.width,At.height,At.depth),Ct)if(T.layerUpdates.size>0){const Tt=WS(At.width,At.height,T.format,T.type);for(const ht of T.layerUpdates){const Ht=At.data.subarray(ht*Tt/At.data.BYTES_PER_ELEMENT,(ht+1)*Tt/At.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,At.width,At.height,1,Et,It,Ht)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Et,It,At.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,At.width,At.height,At.depth,0,Et,It,At.data);else if(T.isData3DTexture)W?(Lt&&n.texStorage3D(i.TEXTURE_3D,zt,Ft,At.width,At.height,At.depth),Ct&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Et,It,At.data)):n.texImage3D(i.TEXTURE_3D,0,Ft,At.width,At.height,At.depth,0,Et,It,At.data);else if(T.isFramebufferTexture){if(Lt)if(W)n.texStorage2D(i.TEXTURE_2D,zt,Ft,At.width,At.height);else{let Tt=At.width,ht=At.height;for(let Ht=0;Ht<zt;Ht++)n.texImage2D(i.TEXTURE_2D,Ht,Ft,Tt,ht,0,Et,It,null),Tt>>=1,ht>>=1}}else if(pe.length>0){if(W&&Lt){const Tt=Zt(pe[0]);n.texStorage2D(i.TEXTURE_2D,zt,Ft,Tt.width,Tt.height)}for(let Tt=0,ht=pe.length;Tt<ht;Tt++)Bt=pe[Tt],W?Ct&&n.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Et,It,Bt):n.texImage2D(i.TEXTURE_2D,Tt,Ft,Et,It,Bt);T.generateMipmaps=!1}else if(W){if(Lt){const Tt=Zt(At);n.texStorage2D(i.TEXTURE_2D,zt,Ft,Tt.width,Tt.height)}Ct&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,It,At)}else n.texImage2D(i.TEXTURE_2D,0,Ft,Et,It,At);S(T)&&y(vt),qt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function gt(B,T,q){if(T.image.length!==6)return;const vt=_t(B,T),St=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+q);const pt=s.get(St);if(St.version!==pt.__version||vt===!0){n.activeTexture(i.TEXTURE0+q);const qt=Ce.getPrimaries(Ce.workingColorSpace),Ut=T.colorSpace===Ls?null:Ce.getPrimaries(T.colorSpace),te=T.colorSpace===Ls||qt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ae=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Et=[];for(let ht=0;ht<6;ht++)!ae&&!At?Et[ht]=A(T.image[ht],!0,o.maxCubemapSize):Et[ht]=At?T.image[ht].image:T.image[ht],Et[ht]=Ie(T,Et[ht]);const It=Et[0],Ft=c.convert(T.format,T.colorSpace),Bt=c.convert(T.type),pe=R(T.internalFormat,Ft,Bt,T.colorSpace),W=T.isVideoTexture!==!0,Lt=pt.__version===void 0||vt===!0,Ct=St.dataReady;let zt=N(T,It);j(i.TEXTURE_CUBE_MAP,T);let Tt;if(ae){W&&Lt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,pe,It.width,It.height);for(let ht=0;ht<6;ht++){Tt=Et[ht].mipmaps;for(let Ht=0;Ht<Tt.length;Ht++){const re=Tt[Ht];T.format!==qi?Ft!==null?W?Ct&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,0,0,re.width,re.height,Ft,re.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,pe,re.width,re.height,0,re.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,0,0,re.width,re.height,Ft,Bt,re.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,pe,re.width,re.height,0,Ft,Bt,re.data)}}}else{if(Tt=T.mipmaps,W&&Lt){Tt.length>0&&zt++;const ht=Zt(Et[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,zt,pe,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(At){W?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Et[ht].width,Et[ht].height,Ft,Bt,Et[ht].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pe,Et[ht].width,Et[ht].height,0,Ft,Bt,Et[ht].data);for(let Ht=0;Ht<Tt.length;Ht++){const ze=Tt[Ht].image[ht].image;W?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,0,0,ze.width,ze.height,Ft,Bt,ze.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,pe,ze.width,ze.height,0,Ft,Bt,ze.data)}}else{W?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ft,Bt,Et[ht]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pe,Ft,Bt,Et[ht]);for(let Ht=0;Ht<Tt.length;Ht++){const re=Tt[Ht];W?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,0,0,Ft,Bt,re.image[ht]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,pe,Ft,Bt,re.image[ht])}}}S(T)&&y(i.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function bt(B,T,q,vt,St,pt){const qt=c.convert(q.format,q.colorSpace),Ut=c.convert(q.type),te=R(q.internalFormat,qt,Ut,q.colorSpace),ae=s.get(T),At=s.get(q);if(At.__renderTarget=T,!ae.__hasExternalTextures){const Et=Math.max(1,T.width>>pt),It=Math.max(1,T.height>>pt);St===i.TEXTURE_3D||St===i.TEXTURE_2D_ARRAY?n.texImage3D(St,pt,te,Et,It,T.depth,0,qt,Ut,null):n.texImage2D(St,pt,te,Et,It,0,qt,Ut,null)}n.bindFramebuffer(i.FRAMEBUFFER,B),Je(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,St,At.__webglTexture,0,G(T)):(St===i.TEXTURE_2D||St>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,St,At.__webglTexture,pt),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(B,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){const vt=T.depthTexture,St=vt&&vt.isDepthTexture?vt.type:null,pt=D(T.stencilBuffer,St),qt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),pt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),pt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,B)}else{const vt=T.textures;for(let St=0;St<vt.length;St++){const pt=vt[St],qt=c.convert(pt.format,pt.colorSpace),Ut=c.convert(pt.type),te=R(pt.internalFormat,qt,Ut,pt.colorSpace);Je(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),te,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(B,T,q){const vt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(T.depthTexture);if(St.__renderTarget=T,(!St.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),vt){if(St.__webglInit===void 0&&(St.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),St.__webglTexture===void 0){St.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,St.__webglTexture),j(i.TEXTURE_CUBE_MAP,T.depthTexture);const ae=c.convert(T.depthTexture.format),At=c.convert(T.depthTexture.type);let Et;T.depthTexture.format===ja?Et=i.DEPTH_COMPONENT24:T.depthTexture.format===vr&&(Et=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,T.width,T.height,0,ae,At,null)}}else J(T.depthTexture,0);const pt=St.__webglTexture,qt=G(T),Ut=vt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,te=T.depthTexture.format===vr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ja)Je(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Ut,pt,0,qt):i.framebufferTexture2D(i.FRAMEBUFFER,te,Ut,pt,0);else if(T.depthTexture.format===vr)Je(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Ut,pt,0,qt):i.framebufferTexture2D(i.FRAMEBUFFER,te,Ut,pt,0);else throw new Error("Unknown depthTexture format")}function ee(B){const T=s.get(B),q=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const vt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",St)};vt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=vt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let vt=0;vt<6;vt++)$t(T.__webglFramebuffer[vt],B,vt);else{const vt=B.texture.mipmaps;vt&&vt.length>0?$t(T.__webglFramebuffer[0],B,0):$t(T.__webglFramebuffer,B,0)}else if(q){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=i.createRenderbuffer(),Dt(T.__webglDepthbuffer[vt],B,!1);else{const St=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[vt];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,pt)}}else{const vt=B.texture.mipmaps;if(vt&&vt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Dt(T.__webglDepthbuffer,B,!1);else{const St=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,pt)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(B,T,q){const vt=s.get(B);T!==void 0&&bt(vt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ee(B)}function _e(B){const T=B.texture,q=s.get(B),vt=s.get(T);B.addEventListener("dispose",O);const St=B.textures,pt=B.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=T.version,u.memory.textures++),pt){q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Ut]=[];for(let te=0;te<T.mipmaps.length;te++)q.__webglFramebuffer[Ut][te]=i.createFramebuffer()}else q.__webglFramebuffer[Ut]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)q.__webglFramebuffer[Ut]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(qt)for(let Ut=0,te=St.length;Ut<te;Ut++){const ae=s.get(St[Ut]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),u.memory.textures++)}if(B.samples>0&&Je(B)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const te=St[Ut];q.__webglColorRenderbuffer[Ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ut]);const ae=c.convert(te.format,te.colorSpace),At=c.convert(te.type),Et=R(te.internalFormat,ae,At,te.colorSpace,B.isXRRenderTarget===!0),It=G(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Et,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(q.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){n.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),j(i.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)bt(q.__webglFramebuffer[Ut][te],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,te);else bt(q.__webglFramebuffer[Ut],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qt){for(let Ut=0,te=St.length;Ut<te;Ut++){const ae=St[Ut],At=s.get(ae);let Et=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Et=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Et,At.__webglTexture),j(Et,ae),bt(q.__webglFramebuffer,B,ae,i.COLOR_ATTACHMENT0+Ut,Et,0),S(ae)&&y(Et)}n.unbindTexture()}else{let Ut=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ut=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ut,vt.__webglTexture),j(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)bt(q.__webglFramebuffer[te],B,T,i.COLOR_ATTACHMENT0,Ut,te);else bt(q.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,Ut,0);S(T)&&y(Ut),n.unbindTexture()}B.depthBuffer&&ee(B)}function de(B){const T=B.textures;for(let q=0,vt=T.length;q<vt;q++){const St=T[q];if(S(St)){const pt=w(B),qt=s.get(St).__webglTexture;n.bindTexture(pt,qt),y(pt),n.unbindTexture()}}}const Pe=[],fe=[];function an(B){if(B.samples>0){if(Je(B)===!1){const T=B.textures,q=B.width,vt=B.height;let St=i.COLOR_BUFFER_BIT;const pt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qt=s.get(B),Ut=T.length>1;if(Ut)for(let ae=0;ae<T.length;ae++)n.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const te=B.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(St|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(St|=i.STENCIL_BUFFER_BIT)),Ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const At=s.get(T[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,q,vt,0,0,q,vt,St,i.NEAREST),h===!0&&(Pe.length=0,fe.length=0,Pe.push(i.COLOR_ATTACHMENT0+ae),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Pe.push(pt),fe.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ut)for(let ae=0;ae<T.length;ae++){n.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,qt.__webglColorRenderbuffer[ae]);const At=s.get(T[ae]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,At,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&h){const T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function G(B){return Math.min(o.maxSamples,B.samples)}function Je(B){const T=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function we(B){const T=u.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function Ie(B,T){const q=B.colorSpace,vt=B.format,St=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||q!==Po&&q!==Ls&&(Ce.getTransfer(q)===Ge?(vt!==qi||St!==Ri)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",q)),T}function Zt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=qe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sI(i,t){function n(s,o=Ls){let c;const u=Ce.getTransfer(o);if(s===Ri)return i.UNSIGNED_BYTE;if(s===Wg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===jg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===VE)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===HE)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===BE)return i.BYTE;if(s===zE)return i.SHORT;if(s===ec)return i.UNSIGNED_SHORT;if(s===Xg)return i.INT;if(s===ha)return i.UNSIGNED_INT;if(s===sa)return i.FLOAT;if(s===Wa)return i.HALF_FLOAT;if(s===GE)return i.ALPHA;if(s===kE)return i.RGB;if(s===qi)return i.RGBA;if(s===ja)return i.DEPTH_COMPONENT;if(s===vr)return i.DEPTH_STENCIL;if(s===XE)return i.RED;if(s===qg)return i.RED_INTEGER;if(s===No)return i.RG;if(s===Yg)return i.RG_INTEGER;if(s===Kg)return i.RGBA_INTEGER;if(s===of||s===lf||s===cf||s===uf)if(u===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===of)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===of)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Em||s===Tm||s===Am||s===wm)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Em)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Am)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rm||s===Cm||s===Dm||s===Lm||s===Um||s===Nm||s===Pm)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rm||s===Cm)return u===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Dm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Lm)return c.COMPRESSED_R11_EAC;if(s===Um)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Nm)return c.COMPRESSED_RG11_EAC;if(s===Pm)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Om||s===Fm||s===Im||s===Bm||s===zm||s===Vm||s===Hm||s===Gm||s===km||s===Xm||s===Wm||s===jm||s===qm||s===Ym)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Om)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Im)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===km)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qm)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ym)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Km||s===Zm||s===Qm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Km)return u===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jm||s===$m||s===tg||s===eg)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Jm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===$m)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tg)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===eg)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nc?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const rI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new tT(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new vi({vertexShader:rI,fragmentShader:oI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ui(new br(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cI extends zo{constructor(t,n){super();const s=this;let o=null,c=1,u=null,f="local-floor",h=1,p=null,g=null,_=null,v=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",S=new lI,y={},w=n.getContextAttributes();let R=null,D=null;const N=[],F=[],O=new Fe;let E=null;const L=new Wi;L.viewport=new un;const at=new Wi;at.viewport=new un;const V=[L,at],K=new SU;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let gt=N[Z];return gt===void 0&&(gt=new vp,N[Z]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Z){let gt=N[Z];return gt===void 0&&(gt=new vp,N[Z]=gt),gt.getGripSpace()},this.getHand=function(Z){let gt=N[Z];return gt===void 0&&(gt=new vp,N[Z]=gt),gt.getHandSpace()};function J(Z){const gt=F.indexOf(Z.inputSource);if(gt===-1)return;const bt=N[gt];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,p||u),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",z);for(let Z=0;Z<N.length;Z++){const gt=F[Z];gt!==null&&(F[Z]=null,N[Z].disconnect(gt))}$=null,ct=null,S.reset();for(const Z in y)delete y[Z];t.setRenderTarget(R),x=null,v=null,_=null,o=null,D=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(R=t.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",P),o.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Dt=null,$t=null;w.depth&&($t=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=w.stencil?vr:ja,Dt=w.stencil?nc:ha);const ee={colorFormat:n.RGBA8,depthFormat:$t,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ee),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new ua(v.textureWidth,v.textureHeight,{format:qi,type:Ri,depthTexture:new ic(v.textureWidth,v.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,bt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ua(x.framebufferWidth,x.framebufferHeight,{format:qi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Rt.setContext(o),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(Z){for(let gt=0;gt<Z.removed.length;gt++){const bt=Z.removed[gt],Dt=F.indexOf(bt);Dt>=0&&(F[Dt]=null,N[Dt].disconnect(bt))}for(let gt=0;gt<Z.added.length;gt++){const bt=Z.added[gt];let Dt=F.indexOf(bt);if(Dt===-1){for(let ee=0;ee<N.length;ee++)if(ee>=F.length){F.push(bt),Dt=ee;break}else if(F[ee]===null){F[ee]=bt,Dt=ee;break}if(Dt===-1)break}const $t=N[Dt];$t&&$t.connect(bt)}}const Q=new lt,ft=new lt;function it(Z,gt,bt){Q.setFromMatrixPosition(gt.matrixWorld),ft.setFromMatrixPosition(bt.matrixWorld);const Dt=Q.distanceTo(ft),$t=gt.projectionMatrix.elements,ee=bt.projectionMatrix.elements,qe=$t[14]/($t[10]-1),_e=$t[14]/($t[10]+1),de=($t[9]+1)/$t[5],Pe=($t[9]-1)/$t[5],fe=($t[8]-1)/$t[0],an=(ee[8]+1)/ee[0],G=qe*fe,Je=qe*an,we=Dt/(-fe+an),Ie=we*-fe;if(gt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ie),Z.translateZ(we),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),$t[10]===-1)Z.projectionMatrix.copy(gt.projectionMatrix),Z.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Zt=qe+we,B=_e+we,T=G-Ie,q=Je+(Dt-Ie),vt=de*_e/B*Zt,St=Pe*_e/B*Zt;Z.projectionMatrix.makePerspective(T,q,vt,St,Zt,B),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function I(Z,gt){gt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(gt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let gt=Z.near,bt=Z.far;S.texture!==null&&(S.depthNear>0&&(gt=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),K.near=at.near=L.near=gt,K.far=at.far=L.far=bt,($!==K.near||ct!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,ct=K.far),K.layers.mask=Z.layers.mask|6,L.layers.mask=K.layers.mask&-5,at.layers.mask=K.layers.mask&-3;const Dt=Z.parent,$t=K.cameras;I(K,Dt);for(let ee=0;ee<$t.length;ee++)I($t[ee],Dt);$t.length===2?it(K,L,at):K.projectionMatrix.copy(L.projectionMatrix),j(Z,K,Dt)};function j(Z,gt,bt){bt===null?Z.matrix.copy(gt.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(gt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(gt.projectionMatrix),Z.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ng*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(Z){h=Z,v!==null&&(v.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(Z){return y[Z]};let _t=null;function wt(Z,gt){if(g=gt.getViewerPose(p||u),b=gt,g!==null){const bt=g.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let Dt=!1;bt.length!==K.cameras.length&&(K.cameras.length=0,Dt=!0);for(let _e=0;_e<bt.length;_e++){const de=bt[_e];let Pe=null;if(x!==null)Pe=x.getViewport(de);else{const an=_.getViewSubImage(v,de);Pe=an.viewport,_e===0&&(t.setRenderTargetTextures(D,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(D))}let fe=V[_e];fe===void 0&&(fe=new Wi,fe.layers.enable(_e),fe.viewport=new un,V[_e]=fe),fe.matrix.fromArray(de.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(de.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),_e===0&&(K.matrix.copy(fe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Dt===!0&&K.cameras.push(fe)}const $t=o.enabledFeatures;if($t&&$t.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const _e=_.getDepthInformation(bt[0]);_e&&_e.isValid&&_e.texture&&S.init(_e,o.renderState)}if($t&&$t.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let _e=0;_e<bt.length;_e++){const de=bt[_e].camera;if(de){let Pe=y[de];Pe||(Pe=new tT,y[de]=Pe);const fe=_.getCameraImage(de);Pe.sourceTexture=fe}}}}for(let bt=0;bt<N.length;bt++){const Dt=F[bt],$t=N[bt];Dt!==null&&$t!==void 0&&$t.update(Dt,gt,p||u)}_t&&_t(Z,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),b=null}const Rt=new nT;Rt.setAnimationLoop(wt),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}}const cr=new qa,uI=new Sn;function fI(i,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,eT(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,w,R,D){y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,D)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),A(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,w,R):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ai&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ai&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const w=t.get(y),R=w.envMap,D=w.envMapRotation;R&&(S.envMap.value=R,cr.copy(D),cr.x*=-1,cr.y*=-1,cr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),S.envMapRotation.value.setFromMatrix4(uI.makeRotationFromEuler(cr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,w,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*w,S.scale.value=R*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,w){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const w=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function dI(i,t,n,s){let o={},c={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,R){const D=R.program;s.uniformBlockBinding(w,D)}function p(w,R){let D=o[w.id];D===void 0&&(b(w),D=g(w),o[w.id]=D,w.addEventListener("dispose",S));const N=R.program;s.updateUBOMapping(w,N);const F=t.render.frame;c[w.id]!==F&&(v(w),c[w.id]=F)}function g(w){const R=_();w.__bindingPointIndex=R;const D=i.createBuffer(),N=w.__size,F=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,N,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,D),D}function _(){for(let w=0;w<f;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const R=o[w.id],D=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let F=0,O=D.length;F<O;F++){const E=Array.isArray(D[F])?D[F]:[D[F]];for(let L=0,at=E.length;L<at;L++){const V=E[L];if(x(V,F,L,N)===!0){const K=V.__offset,$=Array.isArray(V.value)?V.value:[V.value];let ct=0;for(let J=0;J<$.length;J++){const P=$[J],z=A(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,K+ct,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ct),ct+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(w,R,D,N){const F=w.value,O=R+"_"+D;if(N[O]===void 0)return typeof F=="number"||typeof F=="boolean"?N[O]=F:N[O]=F.clone(),!0;{const E=N[O];if(typeof F=="number"||typeof F=="boolean"){if(E!==F)return N[O]=F,!0}else if(E.equals(F)===!1)return E.copy(F),!0}return!1}function b(w){const R=w.uniforms;let D=0;const N=16;for(let O=0,E=R.length;O<E;O++){const L=Array.isArray(R[O])?R[O]:[R[O]];for(let at=0,V=L.length;at<V;at++){const K=L[at],$=Array.isArray(K.value)?K.value:[K.value];for(let ct=0,J=$.length;ct<J;ct++){const P=$[ct],z=A(P),Q=D%N,ft=Q%z.boundary,it=Q+ft;D+=ft,it!==0&&N-it<z.storage&&(D+=N-it),K.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=z.storage}}}const F=D%N;return F>0&&(D+=N-F),w.__size=D,w.__cache={},this}function A(w){const R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",w),R}function S(w){const R=w.target;R.removeEventListener("dispose",S);const D=u.indexOf(R.__bindingPointIndex);u.splice(D,1),i.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function y(){for(const w in o)i.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:h,update:p,dispose:y}}const hI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function pI(){return na===null&&(na=new lU(hI,16,16,No,Wa),na.name="DFG_LUT",na.minFilter=Vn,na.magFilter=Vn,na.wrapS=Va,na.wrapT=Va,na.generateMipmaps=!1,na.needsUpdate=!0),na}class n0{constructor(t={}){const{canvas:n=zL(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const A=x,S=new Set([Kg,Yg,qg]),y=new Set([Ri,ha,ec,nc,Wg,jg]),w=new Uint32Array(4),R=new Int32Array(4);let D=null,N=null;const F=[],O=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let at=!1;this._outputColorSpace=wi;let V=0,K=0,$=null,ct=-1,J=null;const P=new un,z=new un;let Q=null;const ft=new je(0);let it=0,I=n.width,j=n.height,_t=1,wt=null,Rt=null;const Z=new un(0,0,I,j),gt=new un(0,0,I,j);let bt=!1;const Dt=new JE;let $t=!1,ee=!1;const qe=new Sn,_e=new lt,de=new un,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function an(){return $===null?_t:1}let G=s;function Je(U,X){return n.getContext(U,X)}try{const U={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kg}`),n.addEventListener("webglcontextlost",Ht,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",ze,!1),G===null){const X="webgl2";if(G=Je(X,U),G===null)throw Je(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ne("WebGLRenderer: "+U.message),U}let we,Ie,Zt,B,T,q,vt,St,pt,qt,Ut,te,ae,At,Et,It,Ft,Bt,pe,W,Lt,Ct,zt;function Tt(){we=new mO(G),we.init(),Lt=new sI(G,we),Ie=new oO(G,we,t,Lt),Zt=new iI(G,we),Ie.reversedDepthBuffer&&v&&Zt.buffers.depth.setReversed(!0),B=new _O(G),T=new kF,q=new aI(G,we,Zt,T,Ie,Lt,B),vt=new pO(L),St=new MU(G),Ct=new sO(G,St),pt=new gO(G,St,B,Ct),qt=new yO(G,pt,St,Ct,B),Bt=new xO(G,Ie,q),Et=new lO(T),Ut=new GF(L,vt,we,Ie,Ct,Et),te=new fI(L,T),ae=new WF,At=new QF(we),Ft=new aO(L,vt,Zt,qt,b,h),It=new nI(L,qt,Ie),zt=new dI(G,B,Ie,Zt),pe=new rO(G,we,B),W=new vO(G,we,B),B.programs=Ut.programs,L.capabilities=Ie,L.extensions=we,L.properties=T,L.renderLists=ae,L.shadowMap=It,L.state=Zt,L.info=B}Tt(),A!==Ri&&(E=new bO(A,n.width,n.height,o,c));const ht=new cI(L,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const U=we.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=we.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(U){U!==void 0&&(_t=U,this.setSize(I,j,!1))},this.getSize=function(U){return U.set(I,j)},this.setSize=function(U,X,ut=!0){if(ht.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}I=U,j=X,n.width=Math.floor(U*_t),n.height=Math.floor(X*_t),ut===!0&&(n.style.width=U+"px",n.style.height=X+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,U,X)},this.getDrawingBufferSize=function(U){return U.set(I*_t,j*_t).floor()},this.setDrawingBufferSize=function(U,X,ut){I=U,j=X,_t=ut,n.width=Math.floor(U*ut),n.height=Math.floor(X*ut),this.setViewport(0,0,U,X)},this.setEffects=function(U){if(A===Ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let X=0;X<U.length;X++)if(U[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(P)},this.getViewport=function(U){return U.copy(Z)},this.setViewport=function(U,X,ut,st){U.isVector4?Z.set(U.x,U.y,U.z,U.w):Z.set(U,X,ut,st),Zt.viewport(P.copy(Z).multiplyScalar(_t).round())},this.getScissor=function(U){return U.copy(gt)},this.setScissor=function(U,X,ut,st){U.isVector4?gt.set(U.x,U.y,U.z,U.w):gt.set(U,X,ut,st),Zt.scissor(z.copy(gt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(U){Zt.setScissorTest(bt=U)},this.setOpaqueSort=function(U){wt=U},this.setTransparentSort=function(U){Rt=U},this.getClearColor=function(U){return U.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(U=!0,X=!0,ut=!0){let st=0;if(U){let tt=!1;if($!==null){const Nt=$.texture.format;tt=S.has(Nt)}if(tt){const Nt=$.texture.type,Vt=y.has(Nt),Pt=Ft.getClearColor(),Yt=Ft.getClearAlpha(),Jt=Pt.r,se=Pt.g,le=Pt.b;Vt?(w[0]=Jt,w[1]=se,w[2]=le,w[3]=Yt,G.clearBufferuiv(G.COLOR,0,w)):(R[0]=Jt,R[1]=se,R[2]=le,R[3]=Yt,G.clearBufferiv(G.COLOR,0,R))}else st|=G.COLOR_BUFFER_BIT}X&&(st|=G.DEPTH_BUFFER_BIT),ut&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ht,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),Ft.dispose(),ae.dispose(),At.dispose(),T.dispose(),vt.dispose(),qt.dispose(),Ct.dispose(),zt.dispose(),Ut.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Er),ht.removeEventListener("sessionend",Tr),Zi.stop()};function Ht(U){U.preventDefault(),RS("WebGLRenderer: Context Lost."),at=!0}function re(){RS("WebGLRenderer: Context Restored."),at=!1;const U=B.autoReset,X=It.enabled,ut=It.autoUpdate,st=It.needsUpdate,tt=It.type;Tt(),B.autoReset=U,It.enabled=X,It.autoUpdate=ut,It.needsUpdate=st,It.type=tt}function ze(U){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Re(U){const X=U.target;X.removeEventListener("dispose",Re),Hn(X)}function Hn(U){Ni(U),T.remove(U)}function Ni(U){const X=T.get(U).programs;X!==void 0&&(X.forEach(function(ut){Ut.releaseProgram(ut)}),U.isShaderMaterial&&Ut.releaseShaderCache(U))}this.renderBufferDirect=function(U,X,ut,st,tt,Nt){X===null&&(X=Pe);const Vt=tt.isMesh&&tt.matrixWorld.determinant()<0,Pt=pc(U,X,ut,st,tt);Zt.setMaterial(st,Vt);let Yt=ut.index,Jt=1;if(st.wireframe===!0){if(Yt=pt.getWireframeAttribute(ut),Yt===void 0)return;Jt=2}const se=ut.drawRange,le=ut.attributes.position;let Gt=se.start*Jt,me=(se.start+se.count)*Jt;Nt!==null&&(Gt=Math.max(Gt,Nt.start*Jt),me=Math.min(me,(Nt.start+Nt.count)*Jt)),Yt!==null?(Gt=Math.max(Gt,0),me=Math.min(me,Yt.count)):le!=null&&(Gt=Math.max(Gt,0),me=Math.min(me,le.count));const $e=me-Gt;if($e<0||$e===1/0)return;Ct.setup(tt,st,Pt,ut,Yt);let tn,De=pe;if(Yt!==null&&(tn=St.get(Yt),De=W,De.setIndex(tn)),tt.isMesh)st.wireframe===!0?(Zt.setLineWidth(st.wireframeLinewidth*an()),De.setMode(G.LINES)):De.setMode(G.TRIANGLES);else if(tt.isLine){let Mn=st.linewidth;Mn===void 0&&(Mn=1),Zt.setLineWidth(Mn*an()),tt.isLineSegments?De.setMode(G.LINES):tt.isLineLoop?De.setMode(G.LINE_LOOP):De.setMode(G.LINE_STRIP)}else tt.isPoints?De.setMode(G.POINTS):tt.isSprite&&De.setMode(G.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)bf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Mn=tt._multiDrawStarts,Xt=tt._multiDrawCounts,Gn=tt._multiDrawCount,oe=Yt?St.get(Yt).bytesPerElement:1,kn=T.get(st).currentProgram.getUniforms();for(let si=0;si<Gn;si++)kn.setValue(G,"_gl_DrawID",si),De.render(Mn[si]/oe,Xt[si])}else if(tt.isInstancedMesh)De.renderInstances(Gt,$e,tt.count);else if(ut.isInstancedBufferGeometry){const Mn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Xt=Math.min(ut.instanceCount,Mn);De.renderInstances(Gt,$e,Xt)}else De.render(Gt,$e)};function Go(U,X,ut){U.transparent===!0&&U.side===za&&U.forceSinglePass===!1?(U.side=ai,U.needsUpdate=!0,Ka(U,X,ut),U.side=Os,U.needsUpdate=!0,Ka(U,X,ut),U.side=za):Ka(U,X,ut)}this.compile=function(U,X,ut=null){ut===null&&(ut=U),N=At.get(ut),N.init(X),O.push(N),ut.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),U!==ut&&U.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),N.setupLights();const st=new Set;return U.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Nt=tt.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){const Pt=Nt[Vt];Go(Pt,ut,tt),st.add(Pt)}else Go(Nt,ut,tt),st.add(Nt)}),N=O.pop(),st},this.compileAsync=function(U,X,ut=null){const st=this.compile(U,X,ut);return new Promise(tt=>{function Nt(){if(st.forEach(function(Vt){T.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){tt(U);return}setTimeout(Nt,10)}we.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Mr=null;function fc(U){Mr&&Mr(U)}function Er(){Zi.stop()}function Tr(){Zi.start()}const Zi=new nT;Zi.setAnimationLoop(fc),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(U){Mr=U,ht.setAnimationLoop(U),U===null?Zi.stop():Zi.start()},ht.addEventListener("sessionstart",Er),ht.addEventListener("sessionend",Tr),this.render=function(U,X){if(X!==void 0&&X.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(at===!0)return;const ut=ht.enabled===!0&&ht.isPresenting===!0,st=E!==null&&($===null||ut)&&E.begin(L,$);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(X),X=ht.getCamera()),U.isScene===!0&&U.onBeforeRender(L,U,X,$),N=At.get(U,O.length),N.init(X),O.push(N),qe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Dt.setFromProjectionMatrix(qe,ra,X.reversedDepth),ee=this.localClippingEnabled,$t=Et.init(this.clippingPlanes,ee),D=ae.get(U,F.length),D.init(),F.push(D),ht.enabled===!0&&ht.isPresenting===!0){const Vt=L.xr.getDepthSensingMesh();Vt!==null&&Ar(Vt,X,-1/0,L.sortObjects)}Ar(U,X,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort(wt,Rt),fe=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,fe&&Ft.addToRenderList(D,U),this.info.render.frame++,$t===!0&&Et.beginShadows();const tt=N.state.shadowsArray;if(It.render(tt,U,X),$t===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&E.hasRenderPass())===!1){const Vt=D.opaque,Pt=D.transmissive;if(N.setupLights(),X.isArrayCamera){const Yt=X.cameras;if(Pt.length>0)for(let Jt=0,se=Yt.length;Jt<se;Jt++){const le=Yt[Jt];fn(Vt,Pt,U,le)}fe&&Ft.render(U);for(let Jt=0,se=Yt.length;Jt<se;Jt++){const le=Yt[Jt];Pi(D,U,le,le.viewport)}}else Pt.length>0&&fn(Vt,Pt,U,X),fe&&Ft.render(U),Pi(D,U,X)}$!==null&&K===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),st&&E.end(L),U.isScene===!0&&U.onAfterRender(L,U,X),Ct.resetDefaultState(),ct=-1,J=null,O.pop(),O.length>0?(N=O[O.length-1],$t===!0&&Et.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Ar(U,X,ut,st){if(U.visible===!1)return;if(U.layers.test(X.layers)){if(U.isGroup)ut=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(X);else if(U.isLight)N.pushLight(U),U.castShadow&&N.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Dt.intersectsSprite(U)){st&&de.setFromMatrixPosition(U.matrixWorld).applyMatrix4(qe);const Vt=qt.update(U),Pt=U.material;Pt.visible&&D.push(U,Vt,Pt,ut,de.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Dt.intersectsObject(U))){const Vt=qt.update(U),Pt=U.material;if(st&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),de.copy(U.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),de.copy(Vt.boundingSphere.center)),de.applyMatrix4(U.matrixWorld).applyMatrix4(qe)),Array.isArray(Pt)){const Yt=Vt.groups;for(let Jt=0,se=Yt.length;Jt<se;Jt++){const le=Yt[Jt],Gt=Pt[le.materialIndex];Gt&&Gt.visible&&D.push(U,Vt,Gt,ut,de.z,le)}}else Pt.visible&&D.push(U,Vt,Pt,ut,de.z,null)}}const Nt=U.children;for(let Vt=0,Pt=Nt.length;Vt<Pt;Vt++)Ar(Nt[Vt],X,ut,st)}function Pi(U,X,ut,st){const{opaque:tt,transmissive:Nt,transparent:Vt}=U;N.setupLightsView(ut),$t===!0&&Et.setGlobalState(L.clippingPlanes,ut),st&&Zt.viewport(P.copy(st)),tt.length>0&&bn(tt,X,ut),Nt.length>0&&bn(Nt,X,ut),Vt.length>0&&bn(Vt,X,ut),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function fn(U,X,ut,st){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[st.id]===void 0){const Gt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[st.id]=new ua(1,1,{generateMipmaps:!0,type:Gt?Wa:Ri,minFilter:gr,samples:Math.max(4,Ie.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Nt=N.state.transmissionRenderTarget[st.id],Vt=st.viewport||P;Nt.setSize(Vt.z*L.transmissionResolutionScale,Vt.w*L.transmissionResolutionScale);const Pt=L.getRenderTarget(),Yt=L.getActiveCubeFace(),Jt=L.getActiveMipmapLevel();L.setRenderTarget(Nt),L.getClearColor(ft),it=L.getClearAlpha(),it<1&&L.setClearColor(16777215,.5),L.clear(),fe&&Ft.render(ut);const se=L.toneMapping;L.toneMapping=ca;const le=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),N.setupLightsView(st),$t===!0&&Et.setGlobalState(L.clippingPlanes,st),bn(U,ut,st),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),we.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let me=0,$e=X.length;me<$e;me++){const tn=X[me],{object:De,geometry:Mn,material:Xt,group:Gn}=tn;if(Xt.side===za&&De.layers.test(st.layers)){const oe=Xt.side;Xt.side=ai,Xt.needsUpdate=!0,pa(De,ut,st,Mn,Xt,Gn),Xt.side=oe,Xt.needsUpdate=!0,Gt=!0}}Gt===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}L.setRenderTarget(Pt,Yt,Jt),L.setClearColor(ft,it),le!==void 0&&(st.viewport=le),L.toneMapping=se}function bn(U,X,ut){const st=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,Nt=U.length;tt<Nt;tt++){const Vt=U[tt],{object:Pt,geometry:Yt,group:Jt}=Vt;let se=Vt.material;se.allowOverride===!0&&st!==null&&(se=st),Pt.layers.test(ut.layers)&&pa(Pt,X,ut,Yt,se,Jt)}}function pa(U,X,ut,st,tt,Nt){U.onBeforeRender(L,X,ut,st,tt,Nt),U.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),tt.onBeforeRender(L,X,ut,st,U,Nt),tt.transparent===!0&&tt.side===za&&tt.forceSinglePass===!1?(tt.side=ai,tt.needsUpdate=!0,L.renderBufferDirect(ut,X,st,tt,U,Nt),tt.side=Os,tt.needsUpdate=!0,L.renderBufferDirect(ut,X,st,tt,U,Nt),tt.side=za):L.renderBufferDirect(ut,X,st,tt,U,Nt),U.onAfterRender(L,X,ut,st,tt,Nt)}function Ka(U,X,ut){X.isScene!==!0&&(X=Pe);const st=T.get(U),tt=N.state.lights,Nt=N.state.shadowsArray,Vt=tt.state.version,Pt=Ut.getParameters(U,tt.state,Nt,X,ut),Yt=Ut.getProgramCacheKey(Pt);let Jt=st.programs;st.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;const se=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;st.envMap=vt.get(U.envMap||st.environment,se),st.envMapRotation=st.environment!==null&&U.envMap===null?X.environmentRotation:U.envMapRotation,Jt===void 0&&(U.addEventListener("dispose",Re),Jt=new Map,st.programs=Jt);let le=Jt.get(Yt);if(le!==void 0){if(st.currentProgram===le&&st.lightsStateVersion===Vt)return hc(U,Pt),le}else Pt.uniforms=Ut.getUniforms(U),U.onBeforeCompile(Pt,L),le=Ut.acquireProgram(Pt,Yt),Jt.set(Yt,le),st.uniforms=Pt.uniforms;const Gt=st.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Gt.clippingPlanes=Et.uniform),hc(U,Pt),st.needsLights=ko(U),st.lightsStateVersion=Vt,st.needsLights&&(Gt.ambientLightColor.value=tt.state.ambient,Gt.lightProbe.value=tt.state.probe,Gt.directionalLights.value=tt.state.directional,Gt.directionalLightShadows.value=tt.state.directionalShadow,Gt.spotLights.value=tt.state.spot,Gt.spotLightShadows.value=tt.state.spotShadow,Gt.rectAreaLights.value=tt.state.rectArea,Gt.ltc_1.value=tt.state.rectAreaLTC1,Gt.ltc_2.value=tt.state.rectAreaLTC2,Gt.pointLights.value=tt.state.point,Gt.pointLightShadows.value=tt.state.pointShadow,Gt.hemisphereLights.value=tt.state.hemi,Gt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=tt.state.spotLightMatrix,Gt.spotLightMap.value=tt.state.spotLightMap,Gt.pointShadowMatrix.value=tt.state.pointShadowMatrix),st.currentProgram=le,st.uniformsList=null,le}function dc(U){if(U.uniformsList===null){const X=U.currentProgram.getUniforms();U.uniformsList=ff.seqWithValue(X.seq,U.uniforms)}return U.uniformsList}function hc(U,X){const ut=T.get(U);ut.outputColorSpace=X.outputColorSpace,ut.batching=X.batching,ut.batchingColor=X.batchingColor,ut.instancing=X.instancing,ut.instancingColor=X.instancingColor,ut.instancingMorph=X.instancingMorph,ut.skinning=X.skinning,ut.morphTargets=X.morphTargets,ut.morphNormals=X.morphNormals,ut.morphColors=X.morphColors,ut.morphTargetsCount=X.morphTargetsCount,ut.numClippingPlanes=X.numClippingPlanes,ut.numIntersection=X.numClipIntersection,ut.vertexAlphas=X.vertexAlphas,ut.vertexTangents=X.vertexTangents,ut.toneMapping=X.toneMapping}function pc(U,X,ut,st,tt){X.isScene!==!0&&(X=Pe),q.resetTextureUnits();const Nt=X.fog,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Pt=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Po,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Jt=vt.get(st.envMap||Vt,Yt),se=st.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,le=!!ut.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,$e=!!ut.morphAttributes.color;let tn=ca;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(tn=L.toneMapping);const De=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Mn=De!==void 0?De.length:0,Xt=T.get(st),Gn=N.state.lights;if($t===!0&&(ee===!0||U!==J)){const hn=U===J&&st.id===ct;Et.setState(st,U,hn)}let oe=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Gn.state.version||Xt.outputColorSpace!==Pt||tt.isBatchedMesh&&Xt.batching===!1||!tt.isBatchedMesh&&Xt.batching===!0||tt.isBatchedMesh&&Xt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Xt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Xt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Xt.instancingMorph===!1&&tt.morphTexture!==null||Xt.envMap!==Jt||st.fog===!0&&Xt.fog!==Nt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Et.numPlanes||Xt.numIntersection!==Et.numIntersection)||Xt.vertexAlphas!==se||Xt.vertexTangents!==le||Xt.morphTargets!==Gt||Xt.morphNormals!==me||Xt.morphColors!==$e||Xt.toneMapping!==tn||Xt.morphTargetsCount!==Mn)&&(oe=!0):(oe=!0,Xt.__version=st.version);let kn=Xt.currentProgram;oe===!0&&(kn=Ka(st,X,tt));let si=!1,Oi=!1,ri=!1;const Be=kn.getUniforms(),dn=Xt.uniforms;if(Zt.useProgram(kn.program)&&(si=!0,Oi=!0,ri=!0),st.id!==ct&&(ct=st.id,Oi=!0),si||J!==U){Zt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Be.setValue(G,"projectionMatrix",U.projectionMatrix),Be.setValue(G,"viewMatrix",U.matrixWorldInverse);const Fi=Be.map.cameraPosition;Fi!==void 0&&Fi.setValue(G,_e.setFromMatrixPosition(U.matrixWorld)),Ie.logarithmicDepthBuffer&&Be.setValue(G,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(G,"isOrthographic",U.isOrthographicCamera===!0),J!==U&&(J=U,Oi=!0,ri=!0)}if(Xt.needsLights&&(Gn.state.directionalShadowMap.length>0&&Be.setValue(G,"directionalShadowMap",Gn.state.directionalShadowMap,q),Gn.state.spotShadowMap.length>0&&Be.setValue(G,"spotShadowMap",Gn.state.spotShadowMap,q),Gn.state.pointShadowMap.length>0&&Be.setValue(G,"pointShadowMap",Gn.state.pointShadowMap,q)),tt.isSkinnedMesh){Be.setOptional(G,tt,"bindMatrix"),Be.setOptional(G,tt,"bindMatrixInverse");const hn=tt.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Be.setValue(G,"boneTexture",hn.boneTexture,q))}tt.isBatchedMesh&&(Be.setOptional(G,tt,"batchingTexture"),Be.setValue(G,"batchingTexture",tt._matricesTexture,q),Be.setOptional(G,tt,"batchingIdTexture"),Be.setValue(G,"batchingIdTexture",tt._indirectTexture,q),Be.setOptional(G,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Be.setValue(G,"batchingColorTexture",tt._colorsTexture,q));const Xn=ut.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Bt.update(tt,ut,kn),(Oi||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,Be.setValue(G,"receiveShadow",tt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(dn.envMapIntensity.value=X.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=pI()),Oi&&(Be.setValue(G,"toneMappingExposure",L.toneMappingExposure),Xt.needsLights&&Bs(dn,ri),Nt&&st.fog===!0&&te.refreshFogUniforms(dn,Nt),te.refreshMaterialUniforms(dn,st,_t,j,N.state.transmissionRenderTarget[U.id]),ff.upload(G,dc(Xt),dn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ff.upload(G,dc(Xt),dn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(G,"center",tt.center),Be.setValue(G,"modelViewMatrix",tt.modelViewMatrix),Be.setValue(G,"normalMatrix",tt.normalMatrix),Be.setValue(G,"modelMatrix",tt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const hn=st.uniformsGroups;for(let Fi=0,ma=hn.length;Fi<ma;Fi++){const wr=hn[Fi];zt.update(wr,kn),zt.bind(wr,kn)}}return kn}function Bs(U,X){U.ambientLightColor.needsUpdate=X,U.lightProbe.needsUpdate=X,U.directionalLights.needsUpdate=X,U.directionalLightShadows.needsUpdate=X,U.pointLights.needsUpdate=X,U.pointLightShadows.needsUpdate=X,U.spotLights.needsUpdate=X,U.spotLightShadows.needsUpdate=X,U.rectAreaLights.needsUpdate=X,U.hemisphereLights.needsUpdate=X}function ko(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(U,X,ut){const st=T.get(U);st.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),T.get(U.texture).__webglTexture=X,T.get(U.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ut,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,X){const ut=T.get(U);ut.__webglFramebuffer=X,ut.__useDefaultFramebuffer=X===void 0};const Za=G.createFramebuffer();this.setRenderTarget=function(U,X=0,ut=0){$=U,V=X,K=ut;let st=null,tt=!1,Nt=!1;if(U){const Pt=T.get(U);if(Pt.__useDefaultFramebuffer!==void 0){Zt.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),P.copy(U.viewport),z.copy(U.scissor),Q=U.scissorTest,Zt.viewport(P),Zt.scissor(z),Zt.setScissorTest(Q),ct=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(U);else if(Pt.__hasExternalTextures)q.rebindTextures(U,T.get(U.texture).__webglTexture,T.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const se=U.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&T.has(se)&&(U.width!==se.image.width||U.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(U)}}const Yt=U.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Jt=T.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Jt[X])?st=Jt[X][ut]:st=Jt[X],tt=!0):U.samples>0&&q.useMultisampledRTT(U)===!1?st=T.get(U).__webglMultisampledFramebuffer:Array.isArray(Jt)?st=Jt[ut]:st=Jt,P.copy(U.viewport),z.copy(U.scissor),Q=U.scissorTest}else P.copy(Z).multiplyScalar(_t).floor(),z.copy(gt).multiplyScalar(_t).floor(),Q=bt;if(ut!==0&&(st=Za),Zt.bindFramebuffer(G.FRAMEBUFFER,st)&&Zt.drawBuffers(U,st),Zt.viewport(P),Zt.scissor(z),Zt.setScissorTest(Q),tt){const Pt=T.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pt.__webglTexture,ut)}else if(Nt){const Pt=X;for(let Yt=0;Yt<U.textures.length;Yt++){const Jt=T.get(U.textures[Yt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,ut,Pt)}}else if(U!==null&&ut!==0){const Pt=T.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,ut)}ct=-1},this.readRenderTargetPixels=function(U,X,ut,st,tt,Nt,Vt,Pt=0){if(!(U&&U.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=T.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt){Zt.bindFramebuffer(G.FRAMEBUFFER,Yt);try{const Jt=U.textures[Pt],se=Jt.format,le=Jt.type;if(U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),!Ie.textureFormatReadable(se)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(le)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=U.width-st&&ut>=0&&ut<=U.height-tt&&G.readPixels(X,ut,st,tt,Lt.convert(se),Lt.convert(le),Nt)}finally{const Jt=$!==null?T.get($).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(U,X,ut,st,tt,Nt,Vt,Pt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=T.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt)if(X>=0&&X<=U.width-st&&ut>=0&&ut<=U.height-tt){Zt.bindFramebuffer(G.FRAMEBUFFER,Yt);const Jt=U.textures[Pt],se=Jt.format,le=Jt.type;if(U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),!Ie.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Gt),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),G.readPixels(X,ut,st,tt,Lt.convert(se),Lt.convert(le),0);const me=$!==null?T.get($).__webglFramebuffer:null;Zt.bindFramebuffer(G.FRAMEBUFFER,me);const $e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await VL(G,$e,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Gt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer(Gt),G.deleteSync($e),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,X=null,ut=0){const st=Math.pow(2,-ut),tt=Math.floor(U.image.width*st),Nt=Math.floor(U.image.height*st),Vt=X!==null?X.x:0,Pt=X!==null?X.y:0;q.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,ut,0,0,Vt,Pt,tt,Nt),Zt.unbindTexture()};const Qa=G.createFramebuffer(),zs=G.createFramebuffer();this.copyTextureToTexture=function(U,X,ut=null,st=null,tt=0,Nt=0){let Vt,Pt,Yt,Jt,se,le,Gt,me,$e;const tn=U.isCompressedTexture?U.mipmaps[Nt]:U.image;if(ut!==null)Vt=ut.max.x-ut.min.x,Pt=ut.max.y-ut.min.y,Yt=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,se=ut.min.y,le=ut.isBox3?ut.min.z:0;else{const dn=Math.pow(2,-tt);Vt=Math.floor(tn.width*dn),Pt=Math.floor(tn.height*dn),U.isDataArrayTexture?Yt=tn.depth:U.isData3DTexture?Yt=Math.floor(tn.depth*dn):Yt=1,Jt=0,se=0,le=0}st!==null?(Gt=st.x,me=st.y,$e=st.z):(Gt=0,me=0,$e=0);const De=Lt.convert(X.format),Mn=Lt.convert(X.type);let Xt;X.isData3DTexture?(q.setTexture3D(X,0),Xt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Xt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Gn=G.getParameter(G.UNPACK_ROW_LENGTH),oe=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=G.getParameter(G.UNPACK_SKIP_PIXELS),si=G.getParameter(G.UNPACK_SKIP_ROWS),Oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,tn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,se),G.pixelStorei(G.UNPACK_SKIP_IMAGES,le);const ri=U.isDataArrayTexture||U.isData3DTexture,Be=X.isDataArrayTexture||X.isData3DTexture;if(U.isDepthTexture){const dn=T.get(U),Xn=T.get(X),hn=T.get(dn.__renderTarget),Fi=T.get(Xn.__renderTarget);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,hn.__webglFramebuffer),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let ma=0;ma<Yt;ma++)ri&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(U).__webglTexture,tt,le+ma),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(X).__webglTexture,Nt,$e+ma)),G.blitFramebuffer(Jt,se,Vt,Pt,Gt,me,Vt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(tt!==0||U.isRenderTargetTexture||T.has(U)){const dn=T.get(U),Xn=T.get(X);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,Qa),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zs);for(let hn=0;hn<Yt;hn++)ri?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,tt,le+hn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,tt),Be?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xn.__webglTexture,Nt,$e+hn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xn.__webglTexture,Nt),tt!==0?G.blitFramebuffer(Jt,se,Vt,Pt,Gt,me,Vt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Be?G.copyTexSubImage3D(Xt,Nt,Gt,me,$e+hn,Jt,se,Vt,Pt):G.copyTexSubImage2D(Xt,Nt,Gt,me,Jt,se,Vt,Pt);Zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Be?U.isDataTexture||U.isData3DTexture?G.texSubImage3D(Xt,Nt,Gt,me,$e,Vt,Pt,Yt,De,Mn,tn.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Nt,Gt,me,$e,Vt,Pt,Yt,De,tn.data):G.texSubImage3D(Xt,Nt,Gt,me,$e,Vt,Pt,Yt,De,Mn,tn):U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,Gt,me,Vt,Pt,De,Mn,tn.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,Gt,me,tn.width,tn.height,De,tn.data):G.texSubImage2D(G.TEXTURE_2D,Nt,Gt,me,Vt,Pt,De,Mn,tn);G.pixelStorei(G.UNPACK_ROW_LENGTH,Gn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,oe),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),G.pixelStorei(G.UNPACK_SKIP_ROWS,si),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Oi),Nt===0&&X.generateMipmaps&&G.generateMipmap(Xt),Zt.unbindTexture()},this.initRenderTarget=function(U){T.get(U).__webglFramebuffer===void 0&&q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?q.setTextureCube(U,0):U.isData3DTexture?q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?q.setTexture2DArray(U,0):q.setTexture2D(U,0),Zt.unbindTexture()},this.resetState=function(){V=0,K=0,$=null,Zt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}function mI({className:i}){const t=Mt.useRef(null);return Mt.useEffect(()=>{const n=t.current;if(!n)return;const s=new $g,o=new e0(-1,1,1,-1,0,1),c=new n0({antialias:!0,alpha:!0});c.setSize(n.clientWidth,n.clientHeight),n.appendChild(c.domElement);const u=new vi({uniforms:{iTime:{value:0},iResolution:{value:new Fe(n.clientWidth,n.clientHeight)}},vertexShader:`
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i < 35.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
            vec4 auroraColors = vec4(
              0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
              0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
              0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
              1.0
            );
            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          gl_FragColor = o * 1.5;
        }
      `}),f=new br(2,2),h=new Ui(f,u);s.add(h);let p;const g=()=>{u.uniforms.iTime.value+=.016,c.render(s,o),p=requestAnimationFrame(g)};g();const _=()=>{n&&(c.setSize(n.clientWidth,n.clientHeight),u.uniforms.iResolution.value.set(n.clientWidth,n.clientHeight))};return window.addEventListener("resize",_),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",_),n&&c.domElement.parentNode===n&&n.removeChild(c.domElement),f.dispose(),u.dispose(),c.dispose()}},[]),ot.jsx("div",{ref:t,className:i,style:{overflow:"hidden"}})}function gI({className:i}){const t=Mt.useRef(null),n=Mt.useRef(null);return Mt.useEffect(()=>{if(!t.current)return;const s=t.current,o=`
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `,c=`
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `,u=new Lf;u.position.z=1;const f=new $g,h=new br(2,2),p={time:{type:"f",value:1},resolution:{type:"v2",value:new Fe}},g=new vi({uniforms:p,vertexShader:o,fragmentShader:c}),_=new Ui(h,g);f.add(_);const v=new n0({antialias:!0,alpha:!0});v.setPixelRatio(window.devicePixelRatio),s.appendChild(v.domElement);const x=()=>{const A=s.clientWidth,S=s.clientHeight;v.setSize(A,S),p.resolution.value.x=v.domElement.width,p.resolution.value.y=v.domElement.height};x(),window.addEventListener("resize",x,!1);const b=()=>{const A=requestAnimationFrame(b);p.time.value+=.05,v.render(f,u),n.current&&(n.current.animationId=A)};return n.current={camera:u,scene:f,renderer:v,uniforms:p,animationId:0},b(),()=>{window.removeEventListener("resize",x),n.current&&(cancelAnimationFrame(n.current.animationId),s&&n.current.renderer.domElement.parentNode===s&&s.removeChild(n.current.renderer.domElement),n.current.renderer.dispose(),h.dispose(),g.dispose())}},[]),ot.jsx("div",{ref:t,className:i,style:{overflow:"hidden"}})}function vI({className:i}){const t=Mt.useRef(null),n=Mt.useRef(null);return Mt.useEffect(()=>{if(!t.current)return;const s=t.current,o=`
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `,c=`
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float random (in float x) {
        return fract(sin(x)*1e4);
      }

      float random (vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));
          }
        }

        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
      }
    `,u=new Lf;u.position.z=1;const f=new $g,h=new br(2,2),p={time:{type:"f",value:1},resolution:{type:"v2",value:new Fe}},g=new vi({uniforms:p,vertexShader:o,fragmentShader:c}),_=new Ui(h,g);f.add(_);const v=new n0({antialias:!0,alpha:!0});v.setPixelRatio(window.devicePixelRatio),s.appendChild(v.domElement);const x=()=>{const A=s.clientWidth,S=s.clientHeight;v.setSize(A,S),p.resolution.value.x=v.domElement.width,p.resolution.value.y=v.domElement.height};x(),window.addEventListener("resize",x,!1);const b=()=>{const A=requestAnimationFrame(b);p.time.value+=.05,v.render(f,u),n.current&&(n.current.animationId=A)};return n.current={camera:u,scene:f,renderer:v,uniforms:p,animationId:0},b(),()=>{window.removeEventListener("resize",x),n.current&&(cancelAnimationFrame(n.current.animationId),s&&n.current.renderer.domElement.parentNode===s&&s.removeChild(n.current.renderer.domElement),n.current.renderer.dispose(),h.dispose(),g.dispose())}},[]),ot.jsx("div",{ref:t,className:i,style:{overflow:"hidden"}})}function Vp({title:i,description:t,imageSrc:n,tags:s,githubUrl:o}){const[c,u]=Mt.useState({x:0,y:0}),[f,h]=Mt.useState(!1),p=Mt.useRef(null),g=x=>{if(!p.current)return;const A=p.current.getBoundingClientRect(),S=x.clientX-A.left,y=x.clientY-A.top,w=A.width/2,R=A.height/2,D=(y-R)/R*-6,N=(S-w)/w*6;u({x:D,y:N})},_=()=>{h(!0)},v=()=>{h(!1),u({x:0,y:0})};return ot.jsx("div",{style:{perspective:"1000px"},className:"w-full h-full",children:ot.jsxs("div",{ref:p,onMouseMove:g,onMouseEnter:_,onMouseLeave:v,className:"relative rounded-3xl p-[2px] h-full",style:{transform:`rotateX(${c.x}deg) rotateY(${c.y}deg)${f?" scale(1.02)":""}`,transition:"transform 0.15s ease-out",transformStyle:"preserve-3d"},children:[ot.jsx(Rf,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:2,variant:"blue"}),ot.jsx("div",{className:"relative w-full h-full flex flex-col rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-black/70 overflow-hidden",children:ot.jsxs("div",{className:"p-6 md:p-8 flex flex-col h-full",children:[ot.jsxs("div",{className:"flex justify-between items-start mb-4 gap-4",children:[ot.jsx("h3",{className:"text-2xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]",children:i}),ot.jsx("div",{className:"flex gap-3 shrink-0",children:o&&ot.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-white/60 hover:text-white transition-colors",children:ot.jsx(wE,{className:"w-6 h-6"})})})]}),ot.jsx("div",{className:"w-full aspect-[2/1] mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/20 shrink-0",children:ot.jsx("img",{src:n,alt:i,className:"w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"})}),ot.jsx("p",{className:"text-white/80 leading-relaxed mb-6 flex-grow [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]",children:t}),ot.jsx("div",{className:"flex flex-wrap gap-2 mt-auto",children:s.map((x,b)=>ot.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-white/10 text-white/90 border border-white/5",children:x},b))})]})})]})})}const _I=({children:i,className:t})=>{const n=Mt.useRef(null);return Mt.useEffect(()=>{const s=n.current;if(!s)return;const o=c=>{const u=s.getBoundingClientRect(),f=c.clientX-u.left,h=c.clientY-u.top;s.style.setProperty("--mouse-x",`${f}px`),s.style.setProperty("--mouse-y",`${h}px`)};return s.addEventListener("mousemove",o),()=>{s.removeEventListener("mousemove",o)}},[]),ot.jsxs("div",{ref:n,className:oa("group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-2xl transition-colors hover:bg-black/60",t),children:[ot.jsx("div",{className:"pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100",style:{background:"radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,.1), transparent 40%)"}}),ot.jsx("div",{className:"relative z-10",children:i})]})};function xI(i,t,n=365){const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3),document.cookie=`${i}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/;SameSite=Lax`}function yI(i){const t=`${i}=`,n=document.cookie.split(";");for(let s of n)if(s=s.trim(),s.indexOf(t)===0)return decodeURIComponent(s.substring(t.length));return null}const lT=["liquid-crystal","abstract-glassy","aurora","ripple","lines"],SI={"liquid-crystal":"Liquid Glass","abstract-glassy":"Abstract Glass",aurora:"Aurora",ripple:"Ripple",lines:"Lines",none:"None"},cT="background-shader";function bI(){const i=yI(cT);return i&&lT.includes(i)?i:i==="none"?"none":null}function mb(i){xI(cT,i)}function MI(){return"aurora"}function EI(i){const t=[...lT,"none"],s=(t.indexOf(i)+1)%t.length;return t[s]}function TI({currentShader:i,onCycle:t,isExpanded:n}){const[s,o]=Mt.useState(0),c=SI[i],u=()=>{o(f=>f+1),t()};return ot.jsxs(ii.button,{onClick:u,whileHover:{scale:1.02},whileTap:{scale:.98},className:oa("flex items-center gap-2 py-2 w-full text-left group/shader","hover:bg-white/10 rounded-lg transition-colors px-1"),title:`Current: ${c}. Click to cycle.`,children:[ot.jsx(ii.div,{initial:{rotate:0},animate:{rotate:360},transition:{duration:.5,ease:[.4,0,.2,1]},children:ot.jsx(GD,{className:"text-blue-400 h-5 w-5 flex-shrink-0"})},s),n&&ot.jsxs(ii.div,{initial:{opacity:0,width:0},animate:{opacity:1,width:"auto"},className:"flex items-center gap-2 overflow-hidden",children:[ot.jsx("span",{className:"text-white text-sm whitespace-nowrap",children:c}),ot.jsx("span",{className:"text-white/40 text-xs whitespace-nowrap",children:"(click)"})]})]})}const Hp=({points:i})=>{const[t,n]=Mt.useState(!1);return ot.jsxs("div",{className:"w-full",children:[ot.jsx("ul",{className:"list-disc list-inside text-white space-y-2 text-sm md:text-base",children:i.slice(0,2).map((s,o)=>ot.jsx("li",{className:"text-white/90",children:s},o))}),ot.jsx(fE,{initial:!1,children:t&&ot.jsx(ii.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:ot.jsx("ul",{className:"list-disc list-inside text-white space-y-2 text-sm md:text-base pt-2",children:i.slice(2).map((s,o)=>ot.jsx("li",{className:"text-white/90",children:s},o+2))})})}),i.length>2&&ot.jsxs("button",{onClick:()=>n(!t),className:"mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1",children:[t?"Show Less":"Show More",ot.jsx(ii.div,{animate:{rotate:t?180:0},children:ot.jsx(CD,{className:"w-4 h-4"})})]})]})};function AI(){const[i,t]=Mt.useState(!1),[n,s]=Mt.useState(!1),[o,c]=Mt.useState("liquid-crystal");Mt.useEffect(()=>{s(!0);const v=bI();if(v)c(v);else{const x=MI();c(x),mb(x)}},[]);const u=()=>{const v=EI(o);c(v),mb(v)},f=()=>{switch(o){case"liquid-crystal":return ot.jsx(tL,{speed:.2,radii:[.3,.2,.25],smoothK:[.3,.3],className:"w-full h-full"});case"abstract-glassy":return ot.jsx(aL,{className:"w-full h-full"});case"aurora":return ot.jsx(mI,{className:"w-full h-full"});case"ripple":return ot.jsx(gI,{className:"w-full h-full"});case"lines":return ot.jsx(vI,{className:"w-full h-full"});case"none":default:return null}},h=[{label:"Home",href:"#home",icon:ot.jsx(PD,{className:"text-white h-5 w-5 flex-shrink-0"}),onClick:()=>t(!1)},{label:"Experience",href:"#experience",icon:ot.jsx(wD,{className:"text-white h-5 w-5 flex-shrink-0"}),onClick:()=>t(!1)},{label:"Projects",href:"#projects",icon:ot.jsx(LD,{className:"text-white h-5 w-5 flex-shrink-0"}),onClick:()=>t(!1)},{label:"Skills",href:"#skills",icon:ot.jsx(XD,{className:"text-white h-5 w-5 flex-shrink-0"}),onClick:()=>t(!1)}],p=[{label:"GitHub",href:"https://github.com/shreywy",icon:ot.jsx(wE,{className:"text-white h-5 w-5 flex-shrink-0"})},{label:"LinkedIn",href:"https://linkedin.com/in/shreymistry",icon:ot.jsx(FD,{className:"text-white h-5 w-5 flex-shrink-0"})},{label:"Email",href:"mailto:shreymistry0609@gmail.com",icon:ot.jsx(BD,{className:"text-white h-5 w-5 flex-shrink-0"})}],g=[{date:"May 2025 → Present",company:"Geotab Inc.",companyLogo:"/geotab_logo.jpg",position:"Technical Project Management Intern",content:ot.jsx(Hp,{role:"Technical Project Management Intern",company:"Geotab",points:["Built internal dashboards and automation tools using Google Apps Script, Google Sheets, HTML/CSS/JS, and BigQuery SQL to reduce manual work and improve data tracking.","Standardized Jira project templates and workflows for new product introduction (NPI) initiatives.","Managed Jira change requests and agile workflows for firmware-over-the-air (FOTA) scrums and alpha device launches.","Collaborated with engineering, mechanical, compliance, and third-party partners to ensure prototype certification and global shipping.","Developed an AI-powered internal BigQuery search tool to extract metadata, streamline data access, and prioritize tables.","Conducted hands-on prototype testing, including multimeter voltage checks, JST connector wiring, and PCBA verification."]})},{date:"Jan 2024 → Aug 2024",company:"AMD",companyLogo:"/amd_logo.jpg",position:"Automation Engineering Intern",content:ot.jsx(Hp,{role:"Automation Engineering Intern",company:"AMD",points:["Developed and maintained Python-based benchmarking frameworks to automate game performance testing, cutting manual testing time by over 60%.","Assembled high-performance PC test benches from scratch, performing hardware swaps and troubleshooting system-level stability.","Developed scripts to optimize benchmarking OS environments by disabling telemetry and background services.","Led competitive performance analysis comparing AMD enthusiast GPUs against NVIDIA GeForce RTX lineups.","Built visualization dashboards and CLI tools to parse benchmark output, summarizing telemetry, power, and FPS data.","Maintained and updated legacy internal tool for managing account keys, utilizing a SQL database and modifying Java code."]})},{date:"May 2023 → Aug 2023",company:"Bombardier Aerospace",companyLogo:"/bombardier_logo.jpg",position:"Automation & Data Tools Intern",content:ot.jsx(Hp,{role:"Automation & Data Tools Intern",company:"Bombardier",points:["Lead the development of internal dashboards using TypeScript along with PowerBI, enabling real-time supplier KPI tracking, reducing report generation times by 70%.","Designed and implemented data validation scripts to identify discrepancies in supplier audit records.","Created automated Excel scripts using VBA and TypeScript bindings to assist in generating weekly compliance reports, saving ~2.5 hours of manual work per week.","Refactored legacy macros into modular, maintainable code and created reusable automation templates.","Managed Excel databases for a 92-person team and contributed process improvement ideas."]})}],_=["React","TypeScript","JavaScript","Next.js","Tailwind CSS","Node.js","Flask","Python","Java","C/C++","PostgreSQL","Firebase","SQL","BigQuery","Oracle SQL","Docker","Git","AWS","Linux","API Design","System Design","Performance Tuning","Data Analysis","Automation"];return ot.jsxs("div",{className:"flex h-screen w-full bg-black overflow-hidden relative text-white font-sans",children:[ot.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none opacity-50",children:f()}),ot.jsx(ii.div,{initial:{x:-300},animate:{x:0},transition:{delay:1,duration:.5,ease:"easeOut"},className:"z-50 hidden md:block",children:ot.jsx(YD,{open:i,setOpen:t,children:ot.jsxs(KD,{className:"justify-between gap-10 bg-black/40 backdrop-blur-xl border-r border-white/10",children:[ot.jsxs("div",{className:"flex flex-col flex-1 overflow-y-auto overflow-x-hidden",children:[ot.jsx("div",{className:"font-bold text-white py-4 whitespace-nowrap overflow-hidden flex items-center md:justify-start",children:i?ot.jsx("span",{className:"text-xl ml-2",children:"Shrey Mistry"}):ot.jsx("div",{className:"w-5 flex justify-center",children:ot.jsx("span",{className:"text-[10px] w-5 h-5 flex items-center justify-center bg-white/10 rounded font-mono",children:"SM"})})}),ot.jsx("div",{className:"mt-8 flex flex-col gap-2",children:h.map((v,x)=>ot.jsx(xS,{link:v},x))})]}),ot.jsxs("div",{className:"flex flex-col gap-2",children:[ot.jsx("div",{className:"border-t border-white/10 pt-4 mb-2",children:ot.jsx(TI,{currentShader:o,onCycle:u,isExpanded:i})}),p.map((v,x)=>ot.jsx(xS,{link:v},x))]})]})})}),ot.jsxs(ii.main,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1},className:"flex-1 overflow-y-auto z-10 scroll-smooth relative flex flex-col",children:[ot.jsxs("section",{id:"home",className:"flex flex-col items-center justify-center relative px-6 md:px-20 min-h-screen",children:[ot.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:ot.jsx("div",{className:"w-[80vw] md:w-[600px] h-[60vw] md:h-[400px] bg-black/70 blur-[80px] rounded-full"})}),ot.jsxs("div",{className:"z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center",children:[ot.jsx(ii.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-6xl md:text-8xl font-medium mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 pb-2 leading-tight",children:"Shrey Mistry"}),ot.jsx(ii.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},className:"max-w-2xl",children:ot.jsx("p",{className:"text-lg md:text-xl text-white/90 leading-relaxed font-light",children:"Computer Science student at Toronto Metropolitan University (Class of 2026). Experienced in full-stack development, database systems, performance analysis, and project management."})})]})]}),ot.jsx("section",{id:"experience",className:"py-16 relative z-10 px-6 md:px-10",children:ot.jsxs("div",{className:"max-w-7xl mx-auto",children:[ot.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]",children:"Experience"}),ot.jsx(JD,{data:g})]})}),ot.jsx("section",{id:"projects",className:"py-16 relative z-10 px-6 md:px-10",children:ot.jsxs("div",{className:"max-w-7xl mx-auto",children:[ot.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]",children:"Projects"}),ot.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[ot.jsx(Vp,{title:"Cuttt - URL Shortener",description:'Cuttt is a "cuttt"ing-edge URL shortening service that streamlines the way you share links online. It uses a powerful tech stack for the frontend and backend.',imageSrc:"/urlshortener.png",tags:["React","Node.js","Python","Flask","Firebase","Azure","Docker"],githubUrl:"https://github.com/shreywy/cuttt"}),ot.jsx(Vp,{title:"Music and Movie Store DBMS",description:"A Python application to interact with an Oracle Database intended for a Movie and Music store. This tool provides a simple UI to display tables, manage entries, and execute custom SQL queries.",imageSrc:"/dbms.png",tags:["Python","cx_Oracle","customtkinter","tabulate","Oracle XE 21c"],githubUrl:"https://github.com/shreywy/Movie-And-Music-Store-DBMS"}),ot.jsx(Vp,{title:"TabStitch - Guitar Tab Extractor",description:"A powerful tool for extracting guitar tablature from videos with automatic deduplication and stitching capabilities. Uses a multi-stage processing pipeline.",imageSrc:"/tabstich.png",tags:["Python","OpenCV","imagehash","yt-dlp"],githubUrl:"https://github.com/shreywy/TabStitcher"})]})]})}),ot.jsx("section",{id:"skills",className:"pt-16 pb-12 px-6 md:px-10 relative z-10",children:ot.jsxs("div",{className:"max-w-7xl mx-auto",children:[ot.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]",children:"Skills"}),ot.jsxs("div",{className:"relative rounded-2xl p-[2px]",children:[ot.jsx(Rf,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:2,variant:"blue"}),ot.jsx(_I,{className:"p-8 md:p-12 rounded-2xl",children:ot.jsx("div",{className:"flex flex-wrap gap-3",children:_.map((v,x)=>ot.jsx(ii.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-50px"},transition:{duration:.3,delay:x*.02},className:"px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors",children:v},x))})})]})]})}),ot.jsxs("footer",{className:"py-6 text-center text-white/60 text-sm relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto w-full shrink-0",children:[ot.jsx("div",{className:"flex justify-center gap-6 mb-4 md:hidden",children:p.map((v,x)=>ot.jsx("a",{href:v.href,target:v.href.startsWith("mailto:")?void 0:"_blank",rel:v.href.startsWith("mailto:")?void 0:"noopener noreferrer",className:"text-white/70 hover:text-white transition-colors",children:v.icon},x))}),ot.jsx("p",{children:"Made by Shrey Mistry"})]})]})]})}MA.createRoot(document.getElementById("root")).render(ot.jsx(Mt.StrictMode,{children:ot.jsx(AI,{})}));
