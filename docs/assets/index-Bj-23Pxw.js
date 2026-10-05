(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var iu={exports:{}},So={},ru={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function wv(){if(bh)return lt;bh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function g(F,ie,be){this.props=F,this.context=ie,this.refs=T,this.updater=be||S}g.prototype.isReactComponent={},g.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},g.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=g.prototype;function b(F,ie,be){this.props=F,this.context=ie,this.refs=T,this.updater=be||S}var R=b.prototype=new _;R.constructor=b,w(R,g.prototype),R.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(F,ie,be){var K,ue={},Se=null,ge=null;if(ie!=null)for(K in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)W.call(ie,K)&&!N.hasOwnProperty(K)&&(ue[K]=ie[K]);var Ue=arguments.length-2;if(Ue===1)ue.children=be;else if(1<Ue){for(var ke=Array(Ue),X=0;X<Ue;X++)ke[X]=arguments[X+2];ue.children=ke}if(F&&F.defaultProps)for(K in Ue=F.defaultProps,Ue)ue[K]===void 0&&(ue[K]=Ue[K]);return{$$typeof:o,type:F,key:Se,ref:ge,props:ue,_owner:U.current}}function P(F,ie){return{$$typeof:o,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function E(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function Y(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return ie[be]})}var se=/\/+/g;function H(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?Y(""+F.key):ie.toString(36)}function le(F,ie,be,K,ue){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(Se){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case o:case e:ge=!0}}if(ge)return ge=F,ue=ue(ge),F=K===""?"."+H(ge,0):K,L(ue)?(be="",F!=null&&(be=F.replace(se,"$&/")+"/"),le(ue,ie,be,"",function(X){return X})):ue!=null&&(E(ue)&&(ue=P(ue,be+(!ue.key||ge&&ge.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+F)),ie.push(ue)),1;if(ge=0,K=K===""?".":K+":",L(F))for(var Ue=0;Ue<F.length;Ue++){Se=F[Ue];var ke=K+H(Se,Ue);ge+=le(Se,ie,be,ke,ue)}else if(ke=x(F),typeof ke=="function")for(F=ke.call(F),Ue=0;!(Se=F.next()).done;)Se=Se.value,ke=K+H(Se,Ue++),ge+=le(Se,ie,be,ke,ue);else if(Se==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function ae(F,ie,be){if(F==null)return F;var K=[],ue=0;return le(F,K,"","",function(Se){return ie.call(be,Se,ue++)}),K}function ve(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var fe={current:null},k={transition:null},oe={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:k,ReactCurrentOwner:U};function Q(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:ae,forEach:function(F,ie,be){ae(F,function(){ie.apply(this,arguments)},be)},count:function(F){var ie=0;return ae(F,function(){ie++}),ie},toArray:function(F){return ae(F,function(ie){return ie})||[]},only:function(F){if(!E(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},lt.Component=g,lt.Fragment=n,lt.Profiler=a,lt.PureComponent=b,lt.StrictMode=r,lt.Suspense=p,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,lt.act=Q,lt.cloneElement=function(F,ie,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var K=w({},F.props),ue=F.key,Se=F.ref,ge=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ge=U.current),ie.key!==void 0&&(ue=""+ie.key),F.type&&F.type.defaultProps)var Ue=F.type.defaultProps;for(ke in ie)W.call(ie,ke)&&!N.hasOwnProperty(ke)&&(K[ke]=ie[ke]===void 0&&Ue!==void 0?Ue[ke]:ie[ke])}var ke=arguments.length-2;if(ke===1)K.children=be;else if(1<ke){Ue=Array(ke);for(var X=0;X<ke;X++)Ue[X]=arguments[X+2];K.children=Ue}return{$$typeof:o,type:F.type,key:ue,ref:Se,props:K,_owner:ge}},lt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},lt.createElement=V,lt.createFactory=function(F){var ie=V.bind(null,F);return ie.type=F,ie},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:f,render:F}},lt.isValidElement=E,lt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ve}},lt.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},lt.startTransition=function(F){var ie=k.transition;k.transition={};try{F()}finally{k.transition=ie}},lt.unstable_act=Q,lt.useCallback=function(F,ie){return fe.current.useCallback(F,ie)},lt.useContext=function(F){return fe.current.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F){return fe.current.useDeferredValue(F)},lt.useEffect=function(F,ie){return fe.current.useEffect(F,ie)},lt.useId=function(){return fe.current.useId()},lt.useImperativeHandle=function(F,ie,be){return fe.current.useImperativeHandle(F,ie,be)},lt.useInsertionEffect=function(F,ie){return fe.current.useInsertionEffect(F,ie)},lt.useLayoutEffect=function(F,ie){return fe.current.useLayoutEffect(F,ie)},lt.useMemo=function(F,ie){return fe.current.useMemo(F,ie)},lt.useReducer=function(F,ie,be){return fe.current.useReducer(F,ie,be)},lt.useRef=function(F){return fe.current.useRef(F)},lt.useState=function(F){return fe.current.useState(F)},lt.useSyncExternalStore=function(F,ie,be){return fe.current.useSyncExternalStore(F,ie,be)},lt.useTransition=function(){return fe.current.useTransition()},lt.version="18.3.1",lt}var Nh;function Qu(){return Nh||(Nh=1,ru.exports=wv()),ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Av(){if(Dh)return So;Dh=1;var o=Qu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(y[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:f,key:x,ref:S,props:y,_owner:a.current}}return So.Fragment=n,So.jsx=d,So.jsxs=d,So}var Uh;function Rv(){return Uh||(Uh=1,iu.exports=Av()),iu.exports}var O=Rv(),Ia={},su={exports:{}},En={},ou={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function Cv(){return Ih||(Ih=1,(function(o){function e(k,oe){var Q=k.length;k.push(oe);e:for(;0<Q;){var F=Q-1>>>1,ie=k[F];if(0<a(ie,oe))k[F]=oe,k[Q]=ie,Q=F;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var oe=k[0],Q=k.pop();if(Q!==oe){k[0]=Q;e:for(var F=0,ie=k.length,be=ie>>>1;F<be;){var K=2*(F+1)-1,ue=k[K],Se=K+1,ge=k[Se];if(0>a(ue,Q))Se<ie&&0>a(ge,ue)?(k[F]=ge,k[Se]=Q,F=Se):(k[F]=ue,k[K]=Q,F=K);else if(Se<ie&&0>a(ge,Q))k[F]=ge,k[Se]=Q,F=Se;else break e}}return oe}function a(k,oe){var Q=k.sortIndex-oe.sortIndex;return Q!==0?Q:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,y=null,x=3,S=!1,w=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(k){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=k)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=n(m)}}function L(k){if(T=!1,R(k),!w)if(n(p)!==null)w=!0,ve(W);else{var oe=n(m);oe!==null&&fe(L,oe.startTime-k)}}function W(k,oe){w=!1,T&&(T=!1,_(V),V=-1),S=!0;var Q=x;try{for(R(oe),y=n(p);y!==null&&(!(y.expirationTime>oe)||k&&!Y());){var F=y.callback;if(typeof F=="function"){y.callback=null,x=y.priorityLevel;var ie=F(y.expirationTime<=oe);oe=o.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),R(oe)}else r(p);y=n(p)}if(y!==null)var be=!0;else{var K=n(m);K!==null&&fe(L,K.startTime-oe),be=!1}return be}finally{y=null,x=Q,S=!1}}var U=!1,N=null,V=-1,P=5,E=-1;function Y(){return!(o.unstable_now()-E<P)}function se(){if(N!==null){var k=o.unstable_now();E=k;var oe=!0;try{oe=N(!0,k)}finally{oe?H():(U=!1,N=null)}}else U=!1}var H;if(typeof b=="function")H=function(){b(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=se,H=function(){ae.postMessage(null)}}else H=function(){g(se,0)};function ve(k){N=k,U||(U=!0,H())}function fe(k,oe){V=g(function(){k(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,ve(W))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var Q=x;x=oe;try{return k()}finally{x=Q}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Q=x;x=k;try{return oe()}finally{x=Q}},o.unstable_scheduleCallback=function(k,oe,Q){var F=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?F+Q:F):Q=F,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Q+ie,k={id:v++,callback:oe,priorityLevel:k,startTime:Q,expirationTime:ie,sortIndex:-1},Q>F?(k.sortIndex=Q,e(m,k),n(p)===null&&k===n(m)&&(T?(_(V),V=-1):T=!0,fe(L,Q-F))):(k.sortIndex=ie,e(p,k),w||S||(w=!0,ve(W))),k},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(k){var oe=x;return function(){var Q=x;x=oe;try{return k.apply(this,arguments)}finally{x=Q}}}})(au)),au}var Fh;function Pv(){return Fh||(Fh=1,ou.exports=Cv()),ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Lv(){if(Oh)return En;Oh=1;var o=Qu(),e=Pv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(t){return p.call(y,t)?!0:p.call(v,t)?!1:m.test(t)?y[t]=!0:(v[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,b);g[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,b);g[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,b);g[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,s,l){var u=g.hasOwnProperty(i)?g[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,u,l)&&(s=null),l||u===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):u.mustUseProperty?t[u.propertyName]=s===null?u.type===3?!1:"":s:(i=u.attributeName,l=u.attributeNamespace,s===null?t.removeAttribute(i):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),Y=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var be=!1;function K(t,i){if(!t||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,D=h.length-1;1<=M&&0<=D&&u[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(u[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||u[M]!==h[D]){var z=`
`+u[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=D);break}}}finally{be=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case U:return"Portal";case P:return"Profiler";case V:return"StrictMode";case H:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ve:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function X(t){var i=ke(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function xt(t){t._valueTracker||(t._valueTracker=X(t))}function Xe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function _t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qe(t,i){var s=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ct(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Ue(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function at(t,i){nt(t,i);var s=Ue(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?I(t,i.type,s):i.hasOwnProperty("defaultValue")&&I(t,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function wt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function I(t,i,s){(i!=="number"||_t(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var A=Array.isArray;function re(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ue(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function de(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(A(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Ue(s)}}function ye(t,i){var s=Ue(i.value),l=Ue(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qe,Ee=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Qe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ve(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ot[i]=ot[t]})});function Ne(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||ot.hasOwnProperty(t)&&ot[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=Ne(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,u):t[s]=u}}var ut=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function At(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function et(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function he(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ce=null,Te=null,Pe=null;function ft(t){if(t=so(t)){if(typeof ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ko(i),ce(t.stateNode,t.type,i))}}function St(t){Te?Pe?Pe.push(t):Pe=[t]:Te=t}function Rt(){if(Te){var t=Te,i=Pe;if(Pe=Te=null,ft(t),i)for(t=0;t<i.length;t++)ft(i[t])}}function Ht(t,i){return t(i)}function mt(){}var vn=!1;function Yt(t,i,s){if(vn)return t(i,s);vn=!0;try{return Ht(t,i,s)}finally{vn=!1,(Te!==null||Pe!==null)&&(mt(),Rt())}}function bi(t,i){var s=t.stateNode;if(s===null)return null;var l=Ko(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Br=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Br=!1}function Hr(t,i,s,l,u,h,M,D,z){var te=Array.prototype.slice.call(arguments,3);try{i.apply(s,te)}catch(me){this.onError(me)}}var Di=!1,hi=null,hr=!1,Vr=null,Sl={onError:function(t){Di=!0,hi=t}};function Ml(t,i,s,l,u,h,M,D,z){Di=!1,hi=null,Hr.apply(Sl,arguments)}function El(t,i,s,l,u,h,M,D,z){if(Ml.apply(this,arguments),Di){if(Di){var te=hi;Di=!1,hi=null}else throw Error(n(198));hr||(hr=!0,Vr=te)}}function C(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function j(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ne(t){if(C(t)!==t)throw Error(n(188))}function ee(t){var i=t.alternate;if(!i){if(i=C(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return ne(u),t;if(h===l)return ne(u),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=u,l=h;else{for(var M=!1,D=u.child;D;){if(D===s){M=!0,s=u,l=h;break}if(D===l){M=!0,l=u,s=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===s){M=!0,s=h,l=u;break}if(D===l){M=!0,l=h,s=u;break}D=D.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function J(t){return t=ee(t),t!==null?Ae(t):null}function Ae(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ae(t);if(i!==null)return i;t=t.sibling}return null}var ze=e.unstable_scheduleCallback,He=e.unstable_cancelCallback,$e=e.unstable_shouldYield,Je=e.unstable_requestPaint,Fe=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,bt=e.unstable_ImmediatePriority,Vt=e.unstable_UserBlockingPriority,$t=e.unstable_NormalPriority,jn=e.unstable_LowPriority,ht=e.unstable_IdlePriority,Ke=null,on=null;function Et(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Bs,Uo=Math.log,pr=Math.LN2;function Bs(t){return t>>>=0,t===0?32:31-(Uo(t)/pr|0)|0}var Ot=64,Cn=4194304;function pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var D=M&~u;D!==0?l=pi(D):(h&=M,h!==0&&(l=pi(h)))}else M=s&~u,M!==0?l=pi(M):h!==0&&(l=pi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Gt(i),u=1<<s,l|=t[s],i&=~u;return l}function Hs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Gt(h),D=1<<M,z=u[M];z===-1?((D&s)===0||(D&l)!==0)&&(u[M]=Hs(D,i)):z<=i&&(t.expiredLanes|=D),h&=~D}}function Gr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ad(){var t=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),t}function wl(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vs(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Gt(i),t[i]=s}function Xm(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var u=31-Gt(s),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,s&=~h}}function Al(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Gt(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}var yt=0;function ld(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var cd,Rl,ud,dd,fd,Cl=!1,Io=[],Ui=null,Ii=null,Fi=null,Gs=new Map,Ws=new Map,Oi=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,i){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":Gs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(i.pointerId)}}function js(t,i,s,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=so(i),i!==null&&Rl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Ym(t,i,s,l,u){switch(i){case"focusin":return Ui=js(Ui,t,i,s,l,u),!0;case"dragenter":return Ii=js(Ii,t,i,s,l,u),!0;case"mouseover":return Fi=js(Fi,t,i,s,l,u),!0;case"pointerover":var h=u.pointerId;return Gs.set(h,js(Gs.get(h)||null,t,i,s,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Ws.set(h,js(Ws.get(h)||null,t,i,s,l,u)),!0}return!1}function pd(t){var i=mr(t.target);if(i!==null){var s=C(i);if(s!==null){if(i=s.tag,i===13){if(i=j(s),i!==null){t.blockedOn=i,fd(t.priority,function(){ud(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ll(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);G=l,s.target.dispatchEvent(l),G=null}else return i=so(s),i!==null&&Rl(i),t.blockedOn=s,!1;i.shift()}return!0}function md(t,i,s){Fo(t)&&s.delete(i)}function $m(){Cl=!1,Ui!==null&&Fo(Ui)&&(Ui=null),Ii!==null&&Fo(Ii)&&(Ii=null),Fi!==null&&Fo(Fi)&&(Fi=null),Gs.forEach(md),Ws.forEach(md)}function Xs(t,i){t.blockedOn===i&&(t.blockedOn=null,Cl||(Cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$m)))}function qs(t){function i(u){return Xs(u,t)}if(0<Io.length){Xs(Io[0],t);for(var s=1;s<Io.length;s++){var l=Io[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Ui!==null&&Xs(Ui,t),Ii!==null&&Xs(Ii,t),Fi!==null&&Xs(Fi,t),Gs.forEach(i),Ws.forEach(i),s=0;s<Oi.length;s++)l=Oi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Oi.length&&(s=Oi[0],s.blockedOn===null);)pd(s),s.blockedOn===null&&Oi.shift()}var Wr=L.ReactCurrentBatchConfig,Oo=!0;function Km(t,i,s,l){var u=yt,h=Wr.transition;Wr.transition=null;try{yt=1,Pl(t,i,s,l)}finally{yt=u,Wr.transition=h}}function Zm(t,i,s,l){var u=yt,h=Wr.transition;Wr.transition=null;try{yt=4,Pl(t,i,s,l)}finally{yt=u,Wr.transition=h}}function Pl(t,i,s,l){if(Oo){var u=Ll(t,i,s,l);if(u===null)ql(t,i,l,zo,s),hd(t,l);else if(Ym(u,t,i,s,l))l.stopPropagation();else if(hd(t,l),i&4&&-1<qm.indexOf(t)){for(;u!==null;){var h=so(u);if(h!==null&&cd(h),h=Ll(t,i,s,l),h===null&&ql(t,i,l,zo,s),h===u)break;u=h}u!==null&&l.stopPropagation()}else ql(t,i,l,null,s)}}var zo=null;function Ll(t,i,s,l){if(zo=null,t=he(l),t=mr(t),t!==null)if(i=C(t),i===null)t=null;else if(s=i.tag,s===13){if(t=j(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return zo=t,null}function gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case bt:return 1;case Vt:return 4;case $t:case jn:return 16;case ht:return 536870912;default:return 16}default:return 16}}var zi=null,bl=null,ko=null;function vd(){if(ko)return ko;var t,i=bl,s=i.length,l,u="value"in zi?zi.value:zi.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===u[h-l];l++);return ko=u.slice(t,1<l?1-l:void 0)}function Bo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function _d(){return!1}function Pn(t){function i(s,l,u,h,M){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ho:_d,this.isPropagationStopped=_d,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Pn(jr),Ys=Q({},jr,{view:0,detail:0}),Qm=Pn(Ys),Dl,Ul,$s,Vo=Q({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Dl=t.screenX-$s.screenX,Ul=t.screenY-$s.screenY):Ul=Dl=0,$s=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),xd=Pn(Vo),Jm=Q({},Vo,{dataTransfer:0}),eg=Pn(Jm),tg=Q({},Ys,{relatedTarget:0}),Il=Pn(tg),ng=Q({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=Pn(ng),rg=Q({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sg=Pn(rg),og=Q({},jr,{data:0}),yd=Pn(og),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=cg[t])?!!i[t]:!1}function Fl(){return ug}var dg=Q({},Ys,{key:function(t){if(t.key){var i=ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fg=Pn(dg),hg=Q({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=Pn(hg),pg=Q({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),mg=Pn(pg),gg=Q({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Pn(gg),_g=Q({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Pn(_g),yg=[9,13,27,32],Ol=f&&"CompositionEvent"in window,Ks=null;f&&"documentMode"in document&&(Ks=document.documentMode);var Sg=f&&"TextEvent"in window&&!Ks,Md=f&&(!Ol||Ks&&8<Ks&&11>=Ks),Ed=" ",Td=!1;function wd(t,i){switch(t){case"keyup":return yg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function Mg(t,i){switch(t){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Td=!0,Ed);case"textInput":return t=i.data,t===Ed&&Td?null:t;default:return null}}function Eg(t,i){if(Xr)return t==="compositionend"||!Ol&&wd(t,i)?(t=vd(),ko=bl=zi=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Md&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function Cd(t,i,s,l){St(l),i=qo(i,"onChange"),0<i.length&&(s=new Nl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Zs=null,Qs=null;function wg(t){Xd(t,0)}function Go(t){var i=Zr(t);if(Xe(i))return t}function Ag(t,i){if(t==="change")return i}var Pd=!1;if(f){var zl;if(f){var kl="oninput"in document;if(!kl){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),kl=typeof Ld.oninput=="function"}zl=kl}else zl=!1;Pd=zl&&(!document.documentMode||9<document.documentMode)}function bd(){Zs&&(Zs.detachEvent("onpropertychange",Nd),Qs=Zs=null)}function Nd(t){if(t.propertyName==="value"&&Go(Qs)){var i=[];Cd(i,Qs,t,he(t)),Yt(wg,i)}}function Rg(t,i,s){t==="focusin"?(bd(),Zs=i,Qs=s,Zs.attachEvent("onpropertychange",Nd)):t==="focusout"&&bd()}function Cg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Qs)}function Pg(t,i){if(t==="click")return Go(i)}function Lg(t,i){if(t==="input"||t==="change")return Go(i)}function bg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Xn=typeof Object.is=="function"?Object.is:bg;function Js(t,i){if(Xn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!p.call(i,u)||!Xn(t[u],i[u]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,i){var s=Dd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Dd(s)}}function Id(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Id(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var t=window,i=_t();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_t(t.document)}return i}function Bl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ng(t){var i=Fd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Id(s.ownerDocument.documentElement,s)){if(l!==null&&Bl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=s.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Ud(s,h);var M=Ud(s,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dg=f&&"documentMode"in document&&11>=document.documentMode,qr=null,Hl=null,eo=null,Vl=!1;function Od(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Vl||qr==null||qr!==_t(l)||(l=qr,"selectionStart"in l&&Bl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),eo&&Js(eo,l)||(eo=l,l=qo(Hl,"onSelect"),0<l.length&&(i=new Nl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=qr)))}function Wo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Yr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Gl={},zd={};f&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function jo(t){if(Gl[t])return Gl[t];if(!Yr[t])return t;var i=Yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in zd)return Gl[t]=i[s];return t}var kd=jo("animationend"),Bd=jo("animationiteration"),Hd=jo("animationstart"),Vd=jo("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,i){Gd.set(t,i),c(i,[t])}for(var Wl=0;Wl<Wd.length;Wl++){var jl=Wd[Wl],Ug=jl.toLowerCase(),Ig=jl[0].toUpperCase()+jl.slice(1);ki(Ug,"on"+Ig)}ki(kd,"onAnimationEnd"),ki(Bd,"onAnimationIteration"),ki(Hd,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(Vd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function jd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,El(l,i,void 0,t),t.currentTarget=null}function Xd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],z=D.instance,te=D.currentTarget;if(D=D.listener,z!==h&&u.isPropagationStopped())break e;jd(u,D,te),h=z}else for(M=0;M<l.length;M++){if(D=l[M],z=D.instance,te=D.currentTarget,D=D.listener,z!==h&&u.isPropagationStopped())break e;jd(u,D,te),h=z}}}if(hr)throw t=Vr,hr=!1,Vr=null,t}function Ct(t,i){var s=i[Jl];s===void 0&&(s=i[Jl]=new Set);var l=t+"__bubble";s.has(l)||(qd(i,t,2,!1),s.add(l))}function Xl(t,i,s){var l=0;i&&(l|=4),qd(s,t,l,i)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Xo]){t[Xo]=!0,r.forEach(function(s){s!=="selectionchange"&&(Fg.has(s)||Xl(s,!1,t),Xl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xo]||(i[Xo]=!0,Xl("selectionchange",!1,i))}}function qd(t,i,s,l){switch(gd(i)){case 1:var u=Km;break;case 4:u=Zm;break;default:u=Pl}s=u.bind(null,i,s,t),u=void 0,!Br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function ql(t,i,s,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;M=M.return}for(;D!==null;){if(M=mr(D),M===null)return;if(z=M.tag,z===5||z===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Yt(function(){var te=h,me=he(s),xe=[];e:{var pe=Gd.get(t);if(pe!==void 0){var Le=Nl,Ie=t;switch(t){case"keypress":if(Bo(s)===0)break e;case"keydown":case"keyup":Le=fg;break;case"focusin":Ie="focus",Le=Il;break;case"focusout":Ie="blur",Le=Il;break;case"beforeblur":case"afterblur":Le=Il;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=mg;break;case kd:case Bd:case Hd:Le=ig;break;case Vd:Le=vg;break;case"scroll":Le=Qm;break;case"wheel":Le=xg;break;case"copy":case"cut":case"paste":Le=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Sd}var Oe=(i&4)!==0,zt=!Oe&&t==="scroll",q=Oe?pe!==null?pe+"Capture":null:pe;Oe=[];for(var B=te,Z;B!==null;){Z=B;var Me=Z.stateNode;if(Z.tag===5&&Me!==null&&(Z=Me,q!==null&&(Me=bi(B,q),Me!=null&&Oe.push(io(B,Me,Z)))),zt)break;B=B.return}0<Oe.length&&(pe=new Le(pe,Ie,null,s,me),xe.push({event:pe,listeners:Oe}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",pe&&s!==G&&(Ie=s.relatedTarget||s.fromElement)&&(mr(Ie)||Ie[mi]))break e;if((Le||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Le?(Ie=s.relatedTarget||s.toElement,Le=te,Ie=Ie?mr(Ie):null,Ie!==null&&(zt=C(Ie),Ie!==zt||Ie.tag!==5&&Ie.tag!==6)&&(Ie=null)):(Le=null,Ie=te),Le!==Ie)){if(Oe=xd,Me="onMouseLeave",q="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Oe=Sd,Me="onPointerLeave",q="onPointerEnter",B="pointer"),zt=Le==null?pe:Zr(Le),Z=Ie==null?pe:Zr(Ie),pe=new Oe(Me,B+"leave",Le,s,me),pe.target=zt,pe.relatedTarget=Z,Me=null,mr(me)===te&&(Oe=new Oe(q,B+"enter",Ie,s,me),Oe.target=Z,Oe.relatedTarget=zt,Me=Oe),zt=Me,Le&&Ie)t:{for(Oe=Le,q=Ie,B=0,Z=Oe;Z;Z=$r(Z))B++;for(Z=0,Me=q;Me;Me=$r(Me))Z++;for(;0<B-Z;)Oe=$r(Oe),B--;for(;0<Z-B;)q=$r(q),Z--;for(;B--;){if(Oe===q||q!==null&&Oe===q.alternate)break t;Oe=$r(Oe),q=$r(q)}Oe=null}else Oe=null;Le!==null&&Yd(xe,pe,Le,Oe,!1),Ie!==null&&zt!==null&&Yd(xe,zt,Ie,Oe,!0)}}e:{if(pe=te?Zr(te):window,Le=pe.nodeName&&pe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&pe.type==="file")var Be=Ag;else if(Rd(pe))if(Pd)Be=Lg;else{Be=Cg;var We=Rg}else(Le=pe.nodeName)&&Le.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Be=Pg);if(Be&&(Be=Be(t,te))){Cd(xe,Be,s,me);break e}We&&We(t,pe,te),t==="focusout"&&(We=pe._wrapperState)&&We.controlled&&pe.type==="number"&&I(pe,"number",pe.value)}switch(We=te?Zr(te):window,t){case"focusin":(Rd(We)||We.contentEditable==="true")&&(qr=We,Hl=te,eo=null);break;case"focusout":eo=Hl=qr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,Od(xe,s,me);break;case"selectionchange":if(Dg)break;case"keydown":case"keyup":Od(xe,s,me)}var je;if(Ol)e:{switch(t){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else Xr?wd(t,s)&&(Ze="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ze="onCompositionStart");Ze&&(Md&&s.locale!=="ko"&&(Xr||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&Xr&&(je=vd()):(zi=me,bl="value"in zi?zi.value:zi.textContent,Xr=!0)),We=qo(te,Ze),0<We.length&&(Ze=new yd(Ze,t,null,s,me),xe.push({event:Ze,listeners:We}),je?Ze.data=je:(je=Ad(s),je!==null&&(Ze.data=je)))),(je=Sg?Mg(t,s):Eg(t,s))&&(te=qo(te,"onBeforeInput"),0<te.length&&(me=new yd("onBeforeInput","beforeinput",null,s,me),xe.push({event:me,listeners:te}),me.data=je))}Xd(xe,i)})}function io(t,i,s){return{instance:t,listener:i,currentTarget:s}}function qo(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=bi(t,s),h!=null&&l.unshift(io(t,h,u)),h=bi(t,i),h!=null&&l.push(io(t,h,u))),t=t.return}return l}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yd(t,i,s,l,u){for(var h=i._reactName,M=[];s!==null&&s!==l;){var D=s,z=D.alternate,te=D.stateNode;if(z!==null&&z===l)break;D.tag===5&&te!==null&&(D=te,u?(z=bi(s,h),z!=null&&M.unshift(io(s,z,D))):u||(z=bi(s,h),z!=null&&M.push(io(s,z,D)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Og=/\r\n?/g,zg=/\u0000|\uFFFD/g;function $d(t){return(typeof t=="string"?t:""+t).replace(Og,`
`).replace(zg,"")}function Yo(t,i,s){if(i=$d(i),$d(t)!==i&&s)throw Error(n(425))}function $o(){}var Yl=null,$l=null;function Kl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(Hg)}:Zl;function Hg(t){setTimeout(function(){throw t})}function Ql(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){t.removeChild(u),qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);qs(i)}function Bi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),ii="__reactFiber$"+Kr,ro="__reactProps$"+Kr,mi="__reactContainer$"+Kr,Jl="__reactEvents$"+Kr,Vg="__reactListeners$"+Kr,Gg="__reactHandles$"+Kr;function mr(t){var i=t[ii];if(i)return i;for(var s=t.parentNode;s;){if(i=s[mi]||s[ii]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zd(t);t!==null;){if(s=t[ii])return s;t=Zd(t)}return i}t=s,s=t.parentNode}return null}function so(t){return t=t[ii]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ko(t){return t[ro]||null}var ec=[],Qr=-1;function Hi(t){return{current:t}}function Pt(t){0>Qr||(t.current=ec[Qr],ec[Qr]=null,Qr--)}function Tt(t,i){Qr++,ec[Qr]=t.current,t.current=i}var Vi={},an=Hi(Vi),_n=Hi(!1),gr=Vi;function Jr(t,i){var s=t.type.contextTypes;if(!s)return Vi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in s)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function xn(t){return t=t.childContextTypes,t!=null}function Zo(){Pt(_n),Pt(an)}function Qd(t,i,s){if(an.current!==Vi)throw Error(n(168));Tt(an,i),Tt(_n,s)}function Jd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,ge(t)||"Unknown",u));return Q({},s,l)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,gr=an.current,Tt(an,t),Tt(_n,_n.current),!0}function ef(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Jd(t,i,gr),l.__reactInternalMemoizedMergedChildContext=t,Pt(_n),Pt(an),Tt(an,t)):Pt(_n),Tt(_n,s)}var gi=null,Jo=!1,tc=!1;function tf(t){gi===null?gi=[t]:gi.push(t)}function Wg(t){Jo=!0,tf(t)}function Gi(){if(!tc&&gi!==null){tc=!0;var t=0,i=yt;try{var s=gi;for(yt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}gi=null,Jo=!1}catch(u){throw gi!==null&&(gi=gi.slice(t+1)),ze(bt,Gi),u}finally{yt=i,tc=!1}}return null}var es=[],ts=0,ea=null,ta=0,In=[],Fn=0,vr=null,vi=1,_i="";function _r(t,i){es[ts++]=ta,es[ts++]=ea,ea=t,ta=i}function nf(t,i,s){In[Fn++]=vi,In[Fn++]=_i,In[Fn++]=vr,vr=t;var l=vi;t=_i;var u=32-Gt(l)-1;l&=~(1<<u),s+=1;var h=32-Gt(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,vi=1<<32-Gt(i)+u|s<<u|l,_i=h+t}else vi=1<<h|s<<u|l,_i=t}function nc(t){t.return!==null&&(_r(t,1),nf(t,1,0))}function ic(t){for(;t===ea;)ea=es[--ts],es[ts]=null,ta=es[--ts],es[ts]=null;for(;t===vr;)vr=In[--Fn],In[Fn]=null,_i=In[--Fn],In[Fn]=null,vi=In[--Fn],In[Fn]=null}var Ln=null,bn=null,Nt=!1,qn=null;function rf(t,i){var s=Bn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function sf(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ln=t,bn=Bi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ln=t,bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=vr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Ln=t,bn=null,!0):!1;default:return!1}}function rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sc(t){if(Nt){var i=bn;if(i){var s=i;if(!sf(t,i)){if(rc(t))throw Error(n(418));i=Bi(s.nextSibling);var l=Ln;i&&sf(t,i)?rf(l,s):(t.flags=t.flags&-4097|2,Nt=!1,Ln=t)}}else{if(rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,Ln=t}}}function of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function na(t){if(t!==Ln)return!1;if(!Nt)return of(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Kl(t.type,t.memoizedProps)),i&&(i=bn)){if(rc(t))throw af(),Error(n(418));for(;i;)rf(t,i),i=Bi(i.nextSibling)}if(of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){bn=Bi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}bn=null}}else bn=Ln?Bi(t.stateNode.nextSibling):null;return!0}function af(){for(var t=bn;t;)t=Bi(t.nextSibling)}function ns(){bn=Ln=null,Nt=!1}function oc(t){qn===null?qn=[t]:qn.push(t)}var jg=L.ReactCurrentBatchConfig;function oo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=u.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ia(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function lf(t){var i=t._init;return i(t._payload)}function cf(t){function i(q,B){if(t){var Z=q.deletions;Z===null?(q.deletions=[B],q.flags|=16):Z.push(B)}}function s(q,B){if(!t)return null;for(;B!==null;)i(q,B),B=B.sibling;return null}function l(q,B){for(q=new Map;B!==null;)B.key!==null?q.set(B.key,B):q.set(B.index,B),B=B.sibling;return q}function u(q,B){return q=Zi(q,B),q.index=0,q.sibling=null,q}function h(q,B,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<B?(q.flags|=2,B):Z):(q.flags|=2,B)):(q.flags|=1048576,B)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,B,Z,Me){return B===null||B.tag!==6?(B=Zc(Z,q.mode,Me),B.return=q,B):(B=u(B,Z),B.return=q,B)}function z(q,B,Z,Me){var Be=Z.type;return Be===N?me(q,B,Z.props.children,Me,Z.key):B!==null&&(B.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ve&&lf(Be)===B.type)?(Me=u(B,Z.props),Me.ref=oo(q,B,Z),Me.return=q,Me):(Me=Ra(Z.type,Z.key,Z.props,null,q.mode,Me),Me.ref=oo(q,B,Z),Me.return=q,Me)}function te(q,B,Z,Me){return B===null||B.tag!==4||B.stateNode.containerInfo!==Z.containerInfo||B.stateNode.implementation!==Z.implementation?(B=Qc(Z,q.mode,Me),B.return=q,B):(B=u(B,Z.children||[]),B.return=q,B)}function me(q,B,Z,Me,Be){return B===null||B.tag!==7?(B=Ar(Z,q.mode,Me,Be),B.return=q,B):(B=u(B,Z),B.return=q,B)}function xe(q,B,Z){if(typeof B=="string"&&B!==""||typeof B=="number")return B=Zc(""+B,q.mode,Z),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case W:return Z=Ra(B.type,B.key,B.props,null,q.mode,Z),Z.ref=oo(q,null,B),Z.return=q,Z;case U:return B=Qc(B,q.mode,Z),B.return=q,B;case ve:var Me=B._init;return xe(q,Me(B._payload),Z)}if(A(B)||oe(B))return B=Ar(B,q.mode,Z,null),B.return=q,B;ia(q,B)}return null}function pe(q,B,Z,Me){var Be=B!==null?B.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Be!==null?null:D(q,B,""+Z,Me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case W:return Z.key===Be?z(q,B,Z,Me):null;case U:return Z.key===Be?te(q,B,Z,Me):null;case ve:return Be=Z._init,pe(q,B,Be(Z._payload),Me)}if(A(Z)||oe(Z))return Be!==null?null:me(q,B,Z,Me,null);ia(q,Z)}return null}function Le(q,B,Z,Me,Be){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return q=q.get(Z)||null,D(B,q,""+Me,Be);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case W:return q=q.get(Me.key===null?Z:Me.key)||null,z(B,q,Me,Be);case U:return q=q.get(Me.key===null?Z:Me.key)||null,te(B,q,Me,Be);case ve:var We=Me._init;return Le(q,B,Z,We(Me._payload),Be)}if(A(Me)||oe(Me))return q=q.get(Z)||null,me(B,q,Me,Be,null);ia(B,Me)}return null}function Ie(q,B,Z,Me){for(var Be=null,We=null,je=B,Ze=B=0,Qt=null;je!==null&&Ze<Z.length;Ze++){je.index>Ze?(Qt=je,je=null):Qt=je.sibling;var gt=pe(q,je,Z[Ze],Me);if(gt===null){je===null&&(je=Qt);break}t&&je&&gt.alternate===null&&i(q,je),B=h(gt,B,Ze),We===null?Be=gt:We.sibling=gt,We=gt,je=Qt}if(Ze===Z.length)return s(q,je),Nt&&_r(q,Ze),Be;if(je===null){for(;Ze<Z.length;Ze++)je=xe(q,Z[Ze],Me),je!==null&&(B=h(je,B,Ze),We===null?Be=je:We.sibling=je,We=je);return Nt&&_r(q,Ze),Be}for(je=l(q,je);Ze<Z.length;Ze++)Qt=Le(je,q,Ze,Z[Ze],Me),Qt!==null&&(t&&Qt.alternate!==null&&je.delete(Qt.key===null?Ze:Qt.key),B=h(Qt,B,Ze),We===null?Be=Qt:We.sibling=Qt,We=Qt);return t&&je.forEach(function(Qi){return i(q,Qi)}),Nt&&_r(q,Ze),Be}function Oe(q,B,Z,Me){var Be=oe(Z);if(typeof Be!="function")throw Error(n(150));if(Z=Be.call(Z),Z==null)throw Error(n(151));for(var We=Be=null,je=B,Ze=B=0,Qt=null,gt=Z.next();je!==null&&!gt.done;Ze++,gt=Z.next()){je.index>Ze?(Qt=je,je=null):Qt=je.sibling;var Qi=pe(q,je,gt.value,Me);if(Qi===null){je===null&&(je=Qt);break}t&&je&&Qi.alternate===null&&i(q,je),B=h(Qi,B,Ze),We===null?Be=Qi:We.sibling=Qi,We=Qi,je=Qt}if(gt.done)return s(q,je),Nt&&_r(q,Ze),Be;if(je===null){for(;!gt.done;Ze++,gt=Z.next())gt=xe(q,gt.value,Me),gt!==null&&(B=h(gt,B,Ze),We===null?Be=gt:We.sibling=gt,We=gt);return Nt&&_r(q,Ze),Be}for(je=l(q,je);!gt.done;Ze++,gt=Z.next())gt=Le(je,q,Ze,gt.value,Me),gt!==null&&(t&&gt.alternate!==null&&je.delete(gt.key===null?Ze:gt.key),B=h(gt,B,Ze),We===null?Be=gt:We.sibling=gt,We=gt);return t&&je.forEach(function(Tv){return i(q,Tv)}),Nt&&_r(q,Ze),Be}function zt(q,B,Z,Me){if(typeof Z=="object"&&Z!==null&&Z.type===N&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case W:e:{for(var Be=Z.key,We=B;We!==null;){if(We.key===Be){if(Be=Z.type,Be===N){if(We.tag===7){s(q,We.sibling),B=u(We,Z.props.children),B.return=q,q=B;break e}}else if(We.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ve&&lf(Be)===We.type){s(q,We.sibling),B=u(We,Z.props),B.ref=oo(q,We,Z),B.return=q,q=B;break e}s(q,We);break}else i(q,We);We=We.sibling}Z.type===N?(B=Ar(Z.props.children,q.mode,Me,Z.key),B.return=q,q=B):(Me=Ra(Z.type,Z.key,Z.props,null,q.mode,Me),Me.ref=oo(q,B,Z),Me.return=q,q=Me)}return M(q);case U:e:{for(We=Z.key;B!==null;){if(B.key===We)if(B.tag===4&&B.stateNode.containerInfo===Z.containerInfo&&B.stateNode.implementation===Z.implementation){s(q,B.sibling),B=u(B,Z.children||[]),B.return=q,q=B;break e}else{s(q,B);break}else i(q,B);B=B.sibling}B=Qc(Z,q.mode,Me),B.return=q,q=B}return M(q);case ve:return We=Z._init,zt(q,B,We(Z._payload),Me)}if(A(Z))return Ie(q,B,Z,Me);if(oe(Z))return Oe(q,B,Z,Me);ia(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,B!==null&&B.tag===6?(s(q,B.sibling),B=u(B,Z),B.return=q,q=B):(s(q,B),B=Zc(Z,q.mode,Me),B.return=q,q=B),M(q)):s(q,B)}return zt}var is=cf(!0),uf=cf(!1),ra=Hi(null),sa=null,rs=null,ac=null;function lc(){ac=rs=sa=null}function cc(t){var i=ra.current;Pt(ra),t._currentValue=i}function uc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ss(t,i){sa=t,ac=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function On(t){var i=t._currentValue;if(ac!==t)if(t={context:t,memoizedValue:i,next:null},rs===null){if(sa===null)throw Error(n(308));rs=t,sa.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return i}var xr=null;function dc(t){xr===null?xr=[t]:xr.push(t)}function df(t,i,s,l){var u=i.interleaved;return u===null?(s.next=s,dc(i)):(s.next=u.next,u.next=s),i.interleaved=s,xi(t,l)}function xi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Wi=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(pt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,xi(t,s)}return u=l.interleaved,u===null?(i.next=i,dc(l)):(i.next=u.next,u.next=i),l.interleaved=i,xi(t,s)}function oa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Al(t,s)}}function hf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?u=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function aa(t,i,s,l){var u=t.updateQueue;Wi=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var z=D,te=z.next;z.next=null,M===null?h=te:M.next=te,M=z;var me=t.alternate;me!==null&&(me=me.updateQueue,D=me.lastBaseUpdate,D!==M&&(D===null?me.firstBaseUpdate=te:D.next=te,me.lastBaseUpdate=z))}if(h!==null){var xe=u.baseState;M=0,me=te=z=null,D=h;do{var pe=D.lane,Le=D.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ie=t,Oe=D;switch(pe=i,Le=s,Oe.tag){case 1:if(Ie=Oe.payload,typeof Ie=="function"){xe=Ie.call(Le,xe,pe);break e}xe=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Oe.payload,pe=typeof Ie=="function"?Ie.call(Le,xe,pe):Ie,pe==null)break e;xe=Q({},xe,pe);break e;case 2:Wi=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,pe=u.effects,pe===null?u.effects=[D]:pe.push(D))}else Le={eventTime:Le,lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},me===null?(te=me=Le,z=xe):me=me.next=Le,M|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;pe=D,D=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);if(me===null&&(z=xe),u.baseState=z,u.firstBaseUpdate=te,u.lastBaseUpdate=me,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Mr|=M,t.lanes=M,t.memoizedState=xe}}function pf(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var ao={},ri=Hi(ao),lo=Hi(ao),co=Hi(ao);function yr(t){if(t===ao)throw Error(n(174));return t}function hc(t,i){switch(Tt(co,i),Tt(lo,t),Tt(ri,ao),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:we(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=we(i,t)}Pt(ri),Tt(ri,i)}function os(){Pt(ri),Pt(lo),Pt(co)}function mf(t){yr(co.current);var i=yr(ri.current),s=we(i,t.type);i!==s&&(Tt(lo,t),Tt(ri,s))}function pc(t){lo.current===t&&(Pt(ri),Pt(lo))}var Dt=Hi(0);function la(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mc=[];function gc(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var ca=L.ReactCurrentDispatcher,vc=L.ReactCurrentBatchConfig,Sr=0,Ut=null,Wt=null,Kt=null,ua=!1,uo=!1,fo=0,Xg=0;function ln(){throw Error(n(321))}function _c(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Xn(t[s],i[s]))return!1;return!0}function xc(t,i,s,l,u,h){if(Sr=h,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ca.current=t===null||t.memoizedState===null?Kg:Zg,t=s(l,u),uo){h=0;do{if(uo=!1,fo=0,25<=h)throw Error(n(301));h+=1,Kt=Wt=null,i.updateQueue=null,ca.current=Qg,t=s(l,u)}while(uo)}if(ca.current=ha,i=Wt!==null&&Wt.next!==null,Sr=0,Kt=Wt=Ut=null,ua=!1,i)throw Error(n(300));return t}function yc(){var t=fo!==0;return fo=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ut.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function zn(){if(Wt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=Kt===null?Ut.memoizedState:Kt.next;if(i!==null)Kt=i,Wt=t;else{if(t===null)throw Error(n(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Ut.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function ho(t,i){return typeof i=="function"?i(t):i}function Sc(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Wt,u=l.baseQueue,h=s.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,s.pending=null}if(u!==null){h=u.next,l=l.baseState;var D=M=null,z=null,te=h;do{var me=te.lane;if((Sr&me)===me)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(D=z=xe,M=l):z=z.next=xe,Ut.lanes|=me,Mr|=me}te=te.next}while(te!==null&&te!==h);z===null?M=l:z.next=D,Xn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,s.lastRenderedState=l}if(t=s.interleaved,t!==null){u=t;do h=u.lane,Ut.lanes|=h,Mr|=h,u=u.next;while(u!==t)}else u===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Mc(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Xn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function gf(){}function vf(t,i){var s=Ut,l=zn(),u=i(),h=!Xn(l.memoizedState,u);if(h&&(l.memoizedState=u,yn=!0),l=l.queue,Ec(yf.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Kt!==null&&Kt.memoizedState.tag&1){if(s.flags|=2048,po(9,xf.bind(null,s,l,u,i),void 0,null),Zt===null)throw Error(n(349));(Sr&30)!==0||_f(s,i,u)}return u}function _f(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function xf(t,i,s,l){i.value=s,i.getSnapshot=l,Sf(i)&&Mf(t)}function yf(t,i,s){return s(function(){Sf(i)&&Mf(t)})}function Sf(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Xn(t,s)}catch{return!0}}function Mf(t){var i=xi(t,1);i!==null&&Zn(i,t,1,-1)}function Ef(t){var i=si();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},i.queue=t,t=t.dispatch=$g.bind(null,Ut,t),[i.memoizedState,t]}function po(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Tf(){return zn().memoizedState}function da(t,i,s,l){var u=si();Ut.flags|=t,u.memoizedState=po(1|i,s,void 0,l===void 0?null:l)}function fa(t,i,s,l){var u=zn();l=l===void 0?null:l;var h=void 0;if(Wt!==null){var M=Wt.memoizedState;if(h=M.destroy,l!==null&&_c(l,M.deps)){u.memoizedState=po(i,s,h,l);return}}Ut.flags|=t,u.memoizedState=po(1|i,s,h,l)}function wf(t,i){return da(8390656,8,t,i)}function Ec(t,i){return fa(2048,8,t,i)}function Af(t,i){return fa(4,2,t,i)}function Rf(t,i){return fa(4,4,t,i)}function Cf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Pf(t,i,s){return s=s!=null?s.concat([t]):null,fa(4,4,Cf.bind(null,i,t),s)}function Tc(){}function Lf(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&_c(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function bf(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&_c(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Nf(t,i,s){return(Sr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(Xn(s,i)||(s=ad(),Ut.lanes|=s,Mr|=s,t.baseState=!0),i)}function qg(t,i){var s=yt;yt=s!==0&&4>s?s:4,t(!0);var l=vc.transition;vc.transition={};try{t(!1),i()}finally{yt=s,vc.transition=l}}function Df(){return zn().memoizedState}function Yg(t,i,s){var l=$i(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Uf(t))If(i,s);else if(s=df(t,i,s,l),s!==null){var u=mn();Zn(s,t,l,u),Ff(s,i,l)}}function $g(t,i,s){var l=$i(t),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Uf(t))If(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,s);if(u.hasEagerState=!0,u.eagerState=D,Xn(D,M)){var z=i.interleaved;z===null?(u.next=u,dc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}s=df(t,i,u,l),s!==null&&(u=mn(),Zn(s,t,l,u),Ff(s,i,l))}}function Uf(t){var i=t.alternate;return t===Ut||i!==null&&i===Ut}function If(t,i){uo=ua=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Ff(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Al(t,s)}}var ha={readContext:On,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Kg={readContext:On,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:On,useEffect:wf,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,da(4194308,4,Cf.bind(null,i,t),s)},useLayoutEffect:function(t,i){return da(4194308,4,t,i)},useInsertionEffect:function(t,i){return da(4,2,t,i)},useMemo:function(t,i){var s=si();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=si();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Yg.bind(null,Ut,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:Ef,useDebugValue:Tc,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Ef(!1),i=t[0];return t=qg.bind(null,t[1]),si().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ut,u=si();if(Nt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Zt===null)throw Error(n(349));(Sr&30)!==0||_f(l,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,wf(yf.bind(null,l,h,t),[t]),l.flags|=2048,po(9,xf.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=si(),i=Zt.identifierPrefix;if(Nt){var s=_i,l=vi;s=(l&~(1<<32-Gt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=fo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Xg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Zg={readContext:On,useCallback:Lf,useContext:On,useEffect:Ec,useImperativeHandle:Pf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:bf,useReducer:Sc,useRef:Tf,useState:function(){return Sc(ho)},useDebugValue:Tc,useDeferredValue:function(t){var i=zn();return Nf(i,Wt.memoizedState,t)},useTransition:function(){var t=Sc(ho)[0],i=zn().memoizedState;return[t,i]},useMutableSource:gf,useSyncExternalStore:vf,useId:Df,unstable_isNewReconciler:!1},Qg={readContext:On,useCallback:Lf,useContext:On,useEffect:Ec,useImperativeHandle:Pf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:bf,useReducer:Mc,useRef:Tf,useState:function(){return Mc(ho)},useDebugValue:Tc,useDeferredValue:function(t){var i=zn();return Wt===null?i.memoizedState=t:Nf(i,Wt.memoizedState,t)},useTransition:function(){var t=Mc(ho)[0],i=zn().memoizedState;return[t,i]},useMutableSource:gf,useSyncExternalStore:vf,useId:Df,unstable_isNewReconciler:!1};function Yn(t,i){if(t&&t.defaultProps){i=Q({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function wc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:Q({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var pa={isMounted:function(t){return(t=t._reactInternals)?C(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mn(),u=$i(t),h=yi(l,u);h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,u),i!==null&&(Zn(i,t,u,l),oa(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mn(),u=$i(t),h=yi(l,u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,u),i!==null&&(Zn(i,t,u,l),oa(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mn(),l=$i(t),u=yi(s,l);u.tag=2,i!=null&&(u.callback=i),i=ji(t,u,l),i!==null&&(Zn(i,t,l,s),oa(i,t,l))}};function Of(t,i,s,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!Js(s,l)||!Js(u,h):!0}function zf(t,i,s){var l=!1,u=Vi,h=i.contextType;return typeof h=="object"&&h!==null?h=On(h):(u=xn(i)?gr:an.current,l=i.contextTypes,h=(l=l!=null)?Jr(t,u):Vi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function kf(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&pa.enqueueReplaceState(i,i.state,null)}function Ac(t,i,s,l){var u=t.stateNode;u.props=s,u.state=t.memoizedState,u.refs={},fc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=On(h):(h=xn(i)?gr:an.current,u.context=Jr(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(wc(t,i,h,s),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&pa.enqueueReplaceState(u,u.state,null),aa(t,s,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,i){try{var s="",l=i;do s+=ue(l),l=l.return;while(l);var u=s}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Rc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Cc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var Jg=typeof WeakMap=="function"?WeakMap:Map;function Bf(t,i,s){s=yi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Sa||(Sa=!0,Gc=l),Cc(t,i)},s}function Hf(t,i,s){s=yi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;s.payload=function(){return l(u)},s.callback=function(){Cc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Cc(t,i),typeof l!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Vf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Jg;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(u.add(s),t=hv.bind(null,t,i,s),i.then(t,t))}function Gf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Wf(t,i,s,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=yi(-1,1),i.tag=2,ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var ev=L.ReactCurrentOwner,yn=!1;function pn(t,i,s,l){i.child=t===null?uf(i,null,s,l):is(i,t.child,s,l)}function jf(t,i,s,l,u){s=s.render;var h=i.ref;return ss(i,u),l=xc(t,i,s,l,h,u),s=yc(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Si(t,i,u)):(Nt&&s&&nc(i),i.flags|=1,pn(t,i,l,u),i.child)}function Xf(t,i,s,l,u){if(t===null){var h=s.type;return typeof h=="function"&&!Kc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,qf(t,i,h,l,u)):(t=Ra(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:Js,s(M,l)&&t.ref===i.ref)return Si(t,i,u)}return i.flags|=1,t=Zi(h,l),t.ref=i.ref,t.return=i,i.child=t}function qf(t,i,s,l,u){if(t!==null){var h=t.memoizedProps;if(Js(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Si(t,i,u)}return Pc(t,i,s,l,u)}function Yf(t,i,s){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(cs,Nn),Nn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Tt(cs,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Tt(cs,Nn),Nn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Tt(cs,Nn),Nn|=l;return pn(t,i,u,s),i.child}function $f(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Pc(t,i,s,l,u){var h=xn(s)?gr:an.current;return h=Jr(i,h),ss(i,u),s=xc(t,i,s,l,h,u),l=yc(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Si(t,i,u)):(Nt&&l&&nc(i),i.flags|=1,pn(t,i,s,u),i.child)}function Kf(t,i,s,l,u){if(xn(s)){var h=!0;Qo(i)}else h=!1;if(ss(i,u),i.stateNode===null)ga(t,i),zf(i,s,l),Ac(i,s,l,u),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var z=M.context,te=s.contextType;typeof te=="object"&&te!==null?te=On(te):(te=xn(s)?gr:an.current,te=Jr(i,te));var me=s.getDerivedStateFromProps,xe=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||z!==te)&&kf(i,M,l,te),Wi=!1;var pe=i.memoizedState;M.state=pe,aa(i,l,M,u),z=i.memoizedState,D!==l||pe!==z||_n.current||Wi?(typeof me=="function"&&(wc(i,s,me,l),z=i.memoizedState),(D=Wi||Of(i,s,D,l,pe,z,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ff(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:Yn(i.type,D),M.props=te,xe=i.pendingProps,pe=M.context,z=s.contextType,typeof z=="object"&&z!==null?z=On(z):(z=xn(s)?gr:an.current,z=Jr(i,z));var Le=s.getDerivedStateFromProps;(me=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||pe!==z)&&kf(i,M,l,z),Wi=!1,pe=i.memoizedState,M.state=pe,aa(i,l,M,u);var Ie=i.memoizedState;D!==xe||pe!==Ie||_n.current||Wi?(typeof Le=="function"&&(wc(i,s,Le,l),Ie=i.memoizedState),(te=Wi||Of(i,s,te,l,pe,Ie,z)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ie,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ie,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ie),M.props=l,M.state=Ie,M.context=z,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Lc(t,i,s,l,h,u)}function Lc(t,i,s,l,u,h){$f(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&ef(i,s,!1),Si(t,i,h);l=i.stateNode,ev.current=i;var D=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=is(i,t.child,null,h),i.child=is(i,null,D,h)):pn(t,i,D,h),i.memoizedState=l.state,u&&ef(i,s,!0),i.child}function Zf(t){var i=t.stateNode;i.pendingContext?Qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qd(t,i.context,!1),hc(t,i.containerInfo)}function Qf(t,i,s,l,u){return ns(),oc(u),i.flags|=256,pn(t,i,s,l),i.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jf(t,i,s){var l=i.pendingProps,u=Dt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Tt(Dt,u&1),t===null)return sc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ca(M,l,0,null),t=Ar(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Nc(s),i.memoizedState=bc,t):Dc(i,M));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return tv(t,i,M,l,D,u,s);if(h){h=l.fallback,M=i.mode,u=t.child,D=u.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=Zi(u,z),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?h=Zi(D,h):(h=Ar(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Nc(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=bc,l}return h=t.child,t=h.sibling,l=Zi(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Dc(t,i){return i=Ca({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ma(t,i,s,l){return l!==null&&oc(l),is(i,t.child,null,s),t=Dc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function tv(t,i,s,l,u,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Rc(Error(n(422))),ma(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Ca({mode:"visible",children:l.children},u,0,null),h=Ar(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&is(i,t.child,null,M),i.child.memoizedState=Nc(M),i.memoizedState=bc,h);if((i.mode&1)===0)return ma(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Rc(h,l,void 0),ma(t,i,M,l)}if(D=(M&t.childLanes)!==0,yn||D){if(l=Zt,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,xi(t,u),Zn(l,t,u,-1))}return $c(),l=Rc(Error(n(421))),ma(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=pv.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,bn=Bi(u.nextSibling),Ln=i,Nt=!0,qn=null,t!==null&&(In[Fn++]=vi,In[Fn++]=_i,In[Fn++]=vr,vi=t.id,_i=t.overflow,vr=i),i=Dc(i,l.children),i.flags|=4096,i)}function eh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),uc(t.return,i,s)}function Uc(t,i,s,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=u)}function th(t,i,s){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(pn(t,i,l.children,s),l=Dt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eh(t,s,i);else if(t.tag===19)eh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Tt(Dt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&la(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Uc(i,!1,u,s,h);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&la(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Uc(i,!0,s,null,h);break;case"together":Uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ga(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Si(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Mr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=Zi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Zi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function nv(t,i,s){switch(i.tag){case 3:Zf(i),ns();break;case 5:mf(i);break;case 1:xn(i.type)&&Qo(i);break;case 4:hc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Tt(ra,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Tt(Dt,Dt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Jf(t,i,s):(Tt(Dt,Dt.current&1),t=Si(t,i,s),t!==null?t.sibling:null);Tt(Dt,Dt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return th(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(Dt,Dt.current),l)break;return null;case 22:case 23:return i.lanes=0,Yf(t,i,s)}return Si(t,i,s)}var nh,Ic,ih,rh;nh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ic=function(){},ih=function(t,i,s,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,yr(ri.current);var h=null;switch(s){case"input":u=qe(t,u),l=qe(t,l),h=[];break;case"select":u=Q({},u,{value:void 0}),l=Q({},l,{value:void 0}),h=[];break;case"textarea":u=de(t,u),l=de(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=$o)}At(s,l);var M;s=null;for(te in u)if(!l.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var D=u[te];for(M in D)D.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var z=l[te];if(D=u!=null?u[te]:void 0,l.hasOwnProperty(te)&&z!==D&&(z!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in z)z.hasOwnProperty(M)&&D[M]!==z[M]&&(s||(s={}),s[M]=z[M])}else s||(h||(h=[]),h.push(te,s)),s=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(h=h||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&Ct("scroll",t),h||D===z||(h=[])):(h=h||[]).push(te,z))}s&&(h=h||[]).push("style",s);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},rh=function(t,i,s,l){s!==l&&(i.flags|=4)};function mo(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function iv(t,i,s){var l=i.pendingProps;switch(ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return xn(i.type)&&Zo(),cn(i),null;case 3:return l=i.stateNode,os(),Pt(_n),Pt(an),gc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(na(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Xc(qn),qn=null))),Ic(t,i),cn(i),null;case 5:pc(i);var u=yr(co.current);if(s=i.type,t!==null&&i.stateNode!=null)ih(t,i,s,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=yr(ri.current),na(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ii]=i,l[ro]=h,t=(i.mode&1)!==0,s){case"dialog":Ct("cancel",l),Ct("close",l);break;case"iframe":case"object":case"embed":Ct("load",l);break;case"video":case"audio":for(u=0;u<to.length;u++)Ct(to[u],l);break;case"source":Ct("error",l);break;case"img":case"image":case"link":Ct("error",l),Ct("load",l);break;case"details":Ct("toggle",l);break;case"input":ct(l,h),Ct("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ct("invalid",l);break;case"textarea":_e(l,h),Ct("invalid",l)}At(s,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&Yo(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&Yo(l.textContent,D,t),u=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ct("scroll",l)}switch(s){case"input":xt(l),wt(l,h,!0);break;case"textarea":xt(l),Ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=$o)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ce(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ii]=i,t[ro]=l,nh(t,i,!1,!1),i.stateNode=t;e:{switch(M=et(s,l),s){case"dialog":Ct("cancel",t),Ct("close",t),u=l;break;case"iframe":case"object":case"embed":Ct("load",t),u=l;break;case"video":case"audio":for(u=0;u<to.length;u++)Ct(to[u],t);u=l;break;case"source":Ct("error",t),u=l;break;case"img":case"image":case"link":Ct("error",t),Ct("load",t),u=l;break;case"details":Ct("toggle",t),u=l;break;case"input":ct(t,l),u=qe(t,l),Ct("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=Q({},l,{value:void 0}),Ct("invalid",t);break;case"textarea":_e(t,l),u=de(t,l),Ct("invalid",t);break;default:u=l}At(s,u),D=u;for(h in D)if(D.hasOwnProperty(h)){var z=D[h];h==="style"?tt(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ee(t,z)):h==="children"?typeof z=="string"?(s!=="textarea"||z!=="")&&Ve(t,z):typeof z=="number"&&Ve(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Ct("scroll",t):z!=null&&R(t,h,z,M))}switch(s){case"input":xt(t),wt(t,l,!1);break;case"textarea":xt(t),Ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ue(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?re(t,!!l.multiple,h,!1):l.defaultValue!=null&&re(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=$o)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)rh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=yr(co.current),yr(ri.current),na(i)){if(l=i.stateNode,s=i.memoizedProps,l[ii]=i,(h=l.nodeValue!==s)&&(t=Ln,t!==null))switch(t.tag){case 3:Yo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ii]=i,i.stateNode=l}return cn(i),null;case 13:if(Pt(Dt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)af(),ns(),i.flags|=98560,h=!1;else if(h=na(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ii]=i}else ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else qn!==null&&(Xc(qn),qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Dt.current&1)!==0?jt===0&&(jt=3):$c())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return os(),Ic(t,i),t===null&&no(i.stateNode.containerInfo),cn(i),null;case 10:return cc(i.type._context),cn(i),null;case 17:return xn(i.type)&&Zo(),cn(i),null;case 19:if(Pt(Dt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)mo(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=la(t),M!==null){for(i.flags|=128,mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Tt(Dt,Dt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>us&&(i.flags|=128,l=!0,mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=la(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return cn(i),null}else 2*Fe()-h.renderingStartTime>us&&s!==1073741824&&(i.flags|=128,l=!0,mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,s=Dt.current,Tt(Dt,l?s&1|2:s&1),i):(cn(i),null);case 22:case 23:return Yc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function rv(t,i){switch(ic(i),i.tag){case 1:return xn(i.type)&&Zo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return os(),Pt(_n),Pt(an),gc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return pc(i),null;case 13:if(Pt(Dt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ns()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Pt(Dt),null;case 4:return os(),null;case 10:return cc(i.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var va=!1,un=!1,sv=typeof WeakSet=="function"?WeakSet:Set,De=null;function ls(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){It(t,i,l)}else s.current=null}function Fc(t,i,s){try{s()}catch(l){It(t,i,l)}}var sh=!1;function ov(t,i){if(Yl=Oo,t=Fd(),Bl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,D=-1,z=-1,te=0,me=0,xe=t,pe=null;t:for(;;){for(var Le;xe!==s||u!==0&&xe.nodeType!==3||(D=M+u),xe!==h||l!==0&&xe.nodeType!==3||(z=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)pe=xe,xe=Le;for(;;){if(xe===t)break t;if(pe===s&&++te===u&&(D=M),pe===h&&++me===l&&(z=M),(Le=xe.nextSibling)!==null)break;xe=pe,pe=xe.parentNode}xe=Le}s=D===-1||z===-1?null:{start:D,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for($l={focusedElem:t,selectionRange:s},Oo=!1,De=i;De!==null;)if(i=De,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,De=t;else for(;De!==null;){i=De;try{var Ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ie!==null){var Oe=Ie.memoizedProps,zt=Ie.memoizedState,q=i.stateNode,B=q.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:Yn(i.type,Oe),zt);q.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){It(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,De=t;break}De=i.return}return Ie=sh,sh=!1,Ie}function go(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Fc(i,s,h)}u=u.next}while(u!==l)}}function _a(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Oc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function oh(t){var i=t.alternate;i!==null&&(t.alternate=null,oh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ii],delete i[ro],delete i[Jl],delete i[Vg],delete i[Gg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ah(t){return t.tag===5||t.tag===3||t.tag===4}function lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ah(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=$o));else if(l!==4&&(t=t.child,t!==null))for(zc(t,i,s),t=t.sibling;t!==null;)zc(t,i,s),t=t.sibling}function kc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(kc(t,i,s),t=t.sibling;t!==null;)kc(t,i,s),t=t.sibling}var nn=null,$n=!1;function Xi(t,i,s){for(s=s.child;s!==null;)ch(t,i,s),s=s.sibling}function ch(t,i,s){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Ke,s)}catch{}switch(s.tag){case 5:un||ls(s,i);case 6:var l=nn,u=$n;nn=null,Xi(t,i,s),nn=l,$n=u,nn!==null&&($n?(t=nn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):nn.removeChild(s.stateNode));break;case 18:nn!==null&&($n?(t=nn,s=s.stateNode,t.nodeType===8?Ql(t.parentNode,s):t.nodeType===1&&Ql(t,s),qs(t)):Ql(nn,s.stateNode));break;case 4:l=nn,u=$n,nn=s.stateNode.containerInfo,$n=!0,Xi(t,i,s),nn=l,$n=u;break;case 0:case 11:case 14:case 15:if(!un&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Fc(s,i,M),u=u.next}while(u!==l)}Xi(t,i,s);break;case 1:if(!un&&(ls(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){It(s,i,D)}Xi(t,i,s);break;case 21:Xi(t,i,s);break;case 22:s.mode&1?(un=(l=un)||s.memoizedState!==null,Xi(t,i,s),un=l):Xi(t,i,s);break;default:Xi(t,i,s)}}function uh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new sv),i.forEach(function(l){var u=mv.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}}function Kn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:nn=D.stateNode,$n=!1;break e;case 3:nn=D.stateNode.containerInfo,$n=!0;break e;case 4:nn=D.stateNode.containerInfo,$n=!0;break e}D=D.return}if(nn===null)throw Error(n(160));ch(h,M,u),nn=null,$n=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(te){It(u,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dh(i,t),i=i.sibling}function dh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(i,t),oi(t),l&4){try{go(3,t,t.return),_a(3,t)}catch(Oe){It(t,t.return,Oe)}try{go(5,t,t.return)}catch(Oe){It(t,t.return,Oe)}}break;case 1:Kn(i,t),oi(t),l&512&&s!==null&&ls(s,s.return);break;case 5:if(Kn(i,t),oi(t),l&512&&s!==null&&ls(s,s.return),t.flags&32){var u=t.stateNode;try{Ve(u,"")}catch(Oe){It(t,t.return,Oe)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,D=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&nt(u,h),et(D,M);var te=et(D,h);for(M=0;M<z.length;M+=2){var me=z[M],xe=z[M+1];me==="style"?tt(u,xe):me==="dangerouslySetInnerHTML"?Ee(u,xe):me==="children"?Ve(u,xe):R(u,me,xe,te)}switch(D){case"input":at(u,h);break;case"textarea":ye(u,h);break;case"select":var pe=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?re(u,!!h.multiple,Le,!1):pe!==!!h.multiple&&(h.defaultValue!=null?re(u,!!h.multiple,h.defaultValue,!0):re(u,!!h.multiple,h.multiple?[]:"",!1))}u[ro]=h}catch(Oe){It(t,t.return,Oe)}}break;case 6:if(Kn(i,t),oi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Oe){It(t,t.return,Oe)}}break;case 3:if(Kn(i,t),oi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(i.containerInfo)}catch(Oe){It(t,t.return,Oe)}break;case 4:Kn(i,t),oi(t);break;case 13:Kn(i,t),oi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Vc=Fe())),l&4&&uh(t);break;case 22:if(me=s!==null&&s.memoizedState!==null,t.mode&1?(un=(te=un)||me,Kn(i,t),un=te):Kn(i,t),oi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!me&&(t.mode&1)!==0)for(De=t,me=t.child;me!==null;){for(xe=De=me;De!==null;){switch(pe=De,Le=pe.child,pe.tag){case 0:case 11:case 14:case 15:go(4,pe,pe.return);break;case 1:ls(pe,pe.return);var Ie=pe.stateNode;if(typeof Ie.componentWillUnmount=="function"){l=pe,s=pe.return;try{i=l,Ie.props=i.memoizedProps,Ie.state=i.memoizedState,Ie.componentWillUnmount()}catch(Oe){It(l,s,Oe)}}break;case 5:ls(pe,pe.return);break;case 22:if(pe.memoizedState!==null){ph(xe);continue}}Le!==null?(Le.return=pe,De=Le):ph(xe)}me=me.sibling}e:for(me=null,xe=t;;){if(xe.tag===5){if(me===null){me=xe;try{u=xe.stateNode,te?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,z=xe.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=Ne("display",M))}catch(Oe){It(t,t.return,Oe)}}}else if(xe.tag===6){if(me===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Oe){It(t,t.return,Oe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;me===xe&&(me=null),xe=xe.return}me===xe&&(me=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Kn(i,t),oi(t),l&4&&uh(t);break;case 21:break;default:Kn(i,t),oi(t)}}function oi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(ah(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ve(u,""),l.flags&=-33);var h=lh(t);kc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,D=lh(t);zc(t,D,M);break;default:throw Error(n(161))}}catch(z){It(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function av(t,i,s){De=t,fh(t)}function fh(t,i,s){for(var l=(t.mode&1)!==0;De!==null;){var u=De,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||va;if(!M){var D=u.alternate,z=D!==null&&D.memoizedState!==null||un;D=va;var te=un;if(va=M,(un=z)&&!te)for(De=u;De!==null;)M=De,z=M.child,M.tag===22&&M.memoizedState!==null?mh(u):z!==null?(z.return=M,De=z):mh(u);for(;h!==null;)De=h,fh(h),h=h.sibling;De=u,va=D,un=te}hh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,De=h):hh(t)}}function hh(t){for(;De!==null;){var i=De;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||_a(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(s===null)l.componentDidMount();else{var u=i.elementType===i.type?s.memoizedProps:Yn(i.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&pf(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}pf(i,M,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&s.focus();break;case"img":z.src&&(s.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var me=te.memoizedState;if(me!==null){var xe=me.dehydrated;xe!==null&&qs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Oc(i)}catch(pe){It(i,i.return,pe)}}if(i===t){De=null;break}if(s=i.sibling,s!==null){s.return=i.return,De=s;break}De=i.return}}function ph(t){for(;De!==null;){var i=De;if(i===t){De=null;break}var s=i.sibling;if(s!==null){s.return=i.return,De=s;break}De=i.return}}function mh(t){for(;De!==null;){var i=De;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{_a(4,i)}catch(z){It(i,s,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){It(i,u,z)}}var h=i.return;try{Oc(i)}catch(z){It(i,h,z)}break;case 5:var M=i.return;try{Oc(i)}catch(z){It(i,M,z)}}}catch(z){It(i,i.return,z)}if(i===t){De=null;break}var D=i.sibling;if(D!==null){D.return=i.return,De=D;break}De=i.return}}var lv=Math.ceil,xa=L.ReactCurrentDispatcher,Bc=L.ReactCurrentOwner,kn=L.ReactCurrentBatchConfig,pt=0,Zt=null,kt=null,rn=0,Nn=0,cs=Hi(0),jt=0,vo=null,Mr=0,ya=0,Hc=0,_o=null,Sn=null,Vc=0,us=1/0,Mi=null,Sa=!1,Gc=null,qi=null,Ma=!1,Yi=null,Ea=0,xo=0,Wc=null,Ta=-1,wa=0;function mn(){return(pt&6)!==0?Fe():Ta!==-1?Ta:Ta=Fe()}function $i(t){return(t.mode&1)===0?1:(pt&2)!==0&&rn!==0?rn&-rn:jg.transition!==null?(wa===0&&(wa=ad()),wa):(t=yt,t!==0||(t=window.event,t=t===void 0?16:gd(t.type)),t)}function Zn(t,i,s,l){if(50<xo)throw xo=0,Wc=null,Error(n(185));Vs(t,s,l),((pt&2)===0||t!==Zt)&&(t===Zt&&((pt&2)===0&&(ya|=s),jt===4&&Ki(t,rn)),Mn(t,l),s===1&&pt===0&&(i.mode&1)===0&&(us=Fe()+500,Jo&&Gi()))}function Mn(t,i){var s=t.callbackNode;Tl(t,i);var l=tn(t,t===Zt?rn:0);if(l===0)s!==null&&He(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&He(s),i===1)t.tag===0?Wg(vh.bind(null,t)):tf(vh.bind(null,t)),Bg(function(){(pt&6)===0&&Gi()}),s=null;else{switch(ld(l)){case 1:s=bt;break;case 4:s=Vt;break;case 16:s=$t;break;case 536870912:s=ht;break;default:s=$t}s=wh(s,gh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function gh(t,i){if(Ta=-1,wa=0,(pt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(ds()&&t.callbackNode!==s)return null;var l=tn(t,t===Zt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Aa(t,l);else{i=l;var u=pt;pt|=2;var h=xh();(Zt!==t||rn!==i)&&(Mi=null,us=Fe()+500,Tr(t,i));do try{dv();break}catch(D){_h(t,D)}while(!0);lc(),xa.current=h,pt=u,kt!==null?i=0:(Zt=null,rn=0,i=jt)}if(i!==0){if(i===2&&(u=Gr(t),u!==0&&(l=u,i=jc(t,u))),i===1)throw s=vo,Tr(t,0),Ki(t,l),Mn(t,Fe()),s;if(i===6)Ki(t,l);else{if(u=t.current.alternate,(l&30)===0&&!cv(u)&&(i=Aa(t,l),i===2&&(h=Gr(t),h!==0&&(l=h,i=jc(t,h))),i===1))throw s=vo,Tr(t,0),Ki(t,l),Mn(t,Fe()),s;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:wr(t,Sn,Mi);break;case 3:if(Ki(t,l),(l&130023424)===l&&(i=Vc+500-Fe(),10<i)){if(tn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Zl(wr.bind(null,t,Sn,Mi),i);break}wr(t,Sn,Mi);break;case 4:if(Ki(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-Gt(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*lv(l/1960))-l,10<l){t.timeoutHandle=Zl(wr.bind(null,t,Sn,Mi),l);break}wr(t,Sn,Mi);break;case 5:wr(t,Sn,Mi);break;default:throw Error(n(329))}}}return Mn(t,Fe()),t.callbackNode===s?gh.bind(null,t):null}function jc(t,i){var s=_o;return t.current.memoizedState.isDehydrated&&(Tr(t,i).flags|=256),t=Aa(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Xc(i)),t}function Xc(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function cv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],h=u.getSnapshot;u=u.value;try{if(!Xn(h(),u))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ki(t,i){for(i&=~Hc,i&=~ya,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Gt(i),l=1<<s;t[s]=-1,i&=~l}}function vh(t){if((pt&6)!==0)throw Error(n(327));ds();var i=tn(t,0);if((i&1)===0)return Mn(t,Fe()),null;var s=Aa(t,i);if(t.tag!==0&&s===2){var l=Gr(t);l!==0&&(i=l,s=jc(t,l))}if(s===1)throw s=vo,Tr(t,0),Ki(t,i),Mn(t,Fe()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,wr(t,Sn,Mi),Mn(t,Fe()),null}function qc(t,i){var s=pt;pt|=1;try{return t(i)}finally{pt=s,pt===0&&(us=Fe()+500,Jo&&Gi())}}function Er(t){Yi!==null&&Yi.tag===0&&(pt&6)===0&&ds();var i=pt;pt|=1;var s=kn.transition,l=yt;try{if(kn.transition=null,yt=1,t)return t()}finally{yt=l,kn.transition=s,pt=i,(pt&6)===0&&Gi()}}function Yc(){Nn=cs.current,Pt(cs)}function Tr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,kg(s)),kt!==null)for(s=kt.return;s!==null;){var l=s;switch(ic(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Zo();break;case 3:os(),Pt(_n),Pt(an),gc();break;case 5:pc(l);break;case 4:os();break;case 13:Pt(Dt);break;case 19:Pt(Dt);break;case 10:cc(l.type._context);break;case 22:case 23:Yc()}s=s.return}if(Zt=t,kt=t=Zi(t.current,null),rn=Nn=i,jt=0,vo=null,Hc=ya=Mr=0,Sn=_o=null,xr!==null){for(i=0;i<xr.length;i++)if(s=xr[i],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}s.pending=l}xr=null}return t}function _h(t,i){do{var s=kt;try{if(lc(),ca.current=ha,ua){for(var l=Ut.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}ua=!1}if(Sr=0,Kt=Wt=Ut=null,uo=!1,fo=0,Bc.current=null,s===null||s.return===null){jt=1,vo=i,kt=null;break}e:{var h=t,M=s.return,D=s,z=i;if(i=rn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,me=D,xe=me.tag;if((me.mode&1)===0&&(xe===0||xe===11||xe===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Le=Gf(M);if(Le!==null){Le.flags&=-257,Wf(Le,M,D,h,i),Le.mode&1&&Vf(h,te,i),i=Le,z=te;var Ie=i.updateQueue;if(Ie===null){var Oe=new Set;Oe.add(z),i.updateQueue=Oe}else Ie.add(z);break e}else{if((i&1)===0){Vf(h,te,i),$c();break e}z=Error(n(426))}}else if(Nt&&D.mode&1){var zt=Gf(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Wf(zt,M,D,h,i),oc(as(z,D));break e}}h=z=as(z,D),jt!==4&&(jt=2),_o===null?_o=[h]:_o.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Bf(h,z,i);hf(h,q);break e;case 1:D=z;var B=h.type,Z=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(qi===null||!qi.has(Z)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Hf(h,D,i);hf(h,Me);break e}}h=h.return}while(h!==null)}Sh(s)}catch(Be){i=Be,kt===s&&s!==null&&(kt=s=s.return);continue}break}while(!0)}function xh(){var t=xa.current;return xa.current=ha,t===null?ha:t}function $c(){(jt===0||jt===3||jt===2)&&(jt=4),Zt===null||(Mr&268435455)===0&&(ya&268435455)===0||Ki(Zt,rn)}function Aa(t,i){var s=pt;pt|=2;var l=xh();(Zt!==t||rn!==i)&&(Mi=null,Tr(t,i));do try{uv();break}catch(u){_h(t,u)}while(!0);if(lc(),pt=s,xa.current=l,kt!==null)throw Error(n(261));return Zt=null,rn=0,jt}function uv(){for(;kt!==null;)yh(kt)}function dv(){for(;kt!==null&&!$e();)yh(kt)}function yh(t){var i=Th(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?Sh(t):kt=i,Bc.current=null}function Sh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=iv(s,i,Nn),s!==null){kt=s;return}}else{if(s=rv(s,i),s!==null){s.flags&=32767,kt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,kt=null;return}}if(i=i.sibling,i!==null){kt=i;return}kt=i=t}while(i!==null);jt===0&&(jt=5)}function wr(t,i,s){var l=yt,u=kn.transition;try{kn.transition=null,yt=1,fv(t,i,s,l)}finally{kn.transition=u,yt=l}return null}function fv(t,i,s,l){do ds();while(Yi!==null);if((pt&6)!==0)throw Error(n(327));s=t.finishedWork;var u=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Xm(t,h),t===Zt&&(kt=Zt=null,rn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ma||(Ma=!0,wh($t,function(){return ds(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=kn.transition,kn.transition=null;var M=yt;yt=1;var D=pt;pt|=4,Bc.current=null,ov(t,s),dh(s,t),Ng($l),Oo=!!Yl,$l=Yl=null,t.current=s,av(s),Je(),pt=D,yt=M,kn.transition=h}else t.current=s;if(Ma&&(Ma=!1,Yi=t,Ea=u),h=t.pendingLanes,h===0&&(qi=null),Et(s.stateNode),Mn(t,Fe()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)u=i[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(Sa)throw Sa=!1,t=Gc,Gc=null,t;return(Ea&1)!==0&&t.tag!==0&&ds(),h=t.pendingLanes,(h&1)!==0?t===Wc?xo++:(xo=0,Wc=t):xo=0,Gi(),null}function ds(){if(Yi!==null){var t=ld(Ea),i=kn.transition,s=yt;try{if(kn.transition=null,yt=16>t?16:t,Yi===null)var l=!1;else{if(t=Yi,Yi=null,Ea=0,(pt&6)!==0)throw Error(n(331));var u=pt;for(pt|=4,De=t.current;De!==null;){var h=De,M=h.child;if((De.flags&16)!==0){var D=h.deletions;if(D!==null){for(var z=0;z<D.length;z++){var te=D[z];for(De=te;De!==null;){var me=De;switch(me.tag){case 0:case 11:case 15:go(8,me,h)}var xe=me.child;if(xe!==null)xe.return=me,De=xe;else for(;De!==null;){me=De;var pe=me.sibling,Le=me.return;if(oh(me),me===te){De=null;break}if(pe!==null){pe.return=Le,De=pe;break}De=Le}}}var Ie=h.alternate;if(Ie!==null){var Oe=Ie.child;if(Oe!==null){Ie.child=null;do{var zt=Oe.sibling;Oe.sibling=null,Oe=zt}while(Oe!==null)}}De=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,De=M;else e:for(;De!==null;){if(h=De,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:go(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,De=q;break e}De=h.return}}var B=t.current;for(De=B;De!==null;){M=De;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,De=Z;else e:for(M=B;De!==null;){if(D=De,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:_a(9,D)}}catch(Be){It(D,D.return,Be)}if(D===M){De=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,De=Me;break e}De=D.return}}if(pt=u,Gi(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Ke,t)}catch{}l=!0}return l}finally{yt=s,kn.transition=i}}return!1}function Mh(t,i,s){i=as(s,i),i=Bf(t,i,1),t=ji(t,i,1),i=mn(),t!==null&&(Vs(t,1,i),Mn(t,i))}function It(t,i,s){if(t.tag===3)Mh(t,t,s);else for(;i!==null;){if(i.tag===3){Mh(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qi===null||!qi.has(l))){t=as(s,t),t=Hf(i,t,1),i=ji(i,t,1),t=mn(),i!==null&&(Vs(i,1,t),Mn(i,t));break}}i=i.return}}function hv(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&s,Zt===t&&(rn&s)===s&&(jt===4||jt===3&&(rn&130023424)===rn&&500>Fe()-Vc?Tr(t,0):Hc|=s),Mn(t,i)}function Eh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Cn,Cn<<=1,(Cn&130023424)===0&&(Cn=4194304)));var s=mn();t=xi(t,i),t!==null&&(Vs(t,i,s),Mn(t,s))}function pv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Eh(t,s)}function mv(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Eh(t,s)}var Th;Th=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,nv(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Nt&&(i.flags&1048576)!==0&&nf(i,ta,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ga(t,i),t=i.pendingProps;var u=Jr(i,an.current);ss(i,s),u=xc(null,i,l,t,u,s);var h=yc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,Qo(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,fc(i),u.updater=pa,i.stateNode=u,u._reactInternals=i,Ac(i,l,t,s),i=Lc(null,i,l,!0,h,s)):(i.tag=0,Nt&&h&&nc(i),pn(null,i,u,s),i=i.child),i;case 16:l=i.elementType;e:{switch(ga(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=vv(l),t=Yn(l,t),u){case 0:i=Pc(null,i,l,t,s);break e;case 1:i=Kf(null,i,l,t,s);break e;case 11:i=jf(null,i,l,t,s);break e;case 14:i=Xf(null,i,l,Yn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Yn(l,u),Pc(t,i,l,u,s);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Yn(l,u),Kf(t,i,l,u,s);case 3:e:{if(Zf(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,ff(t,i),aa(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=as(Error(n(423)),i),i=Qf(t,i,l,s,u);break e}else if(l!==u){u=as(Error(n(424)),i),i=Qf(t,i,l,s,u);break e}else for(bn=Bi(i.stateNode.containerInfo.firstChild),Ln=i,Nt=!0,qn=null,s=uf(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ns(),l===u){i=Si(t,i,s);break e}pn(t,i,l,s)}i=i.child}return i;case 5:return mf(i),t===null&&sc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,Kl(l,u)?M=null:h!==null&&Kl(l,h)&&(i.flags|=32),$f(t,i),pn(t,i,M,s),i.child;case 6:return t===null&&sc(i),null;case 13:return Jf(t,i,s);case 4:return hc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=is(i,null,l,s):pn(t,i,l,s),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Yn(l,u),jf(t,i,l,u,s);case 7:return pn(t,i,i.pendingProps,s),i.child;case 8:return pn(t,i,i.pendingProps.children,s),i.child;case 12:return pn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Tt(ra,l._currentValue),l._currentValue=M,h!==null)if(Xn(h.value,M)){if(h.children===u.children&&!_n.current){i=Si(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var z=D.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=yi(-1,s&-s),z.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var me=te.pending;me===null?z.next=z:(z.next=me.next,me.next=z),te.pending=z}}h.lanes|=s,z=h.alternate,z!==null&&(z.lanes|=s),uc(h.return,s,i),D.lanes|=s;break}z=z.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,D=M.alternate,D!==null&&(D.lanes|=s),uc(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}pn(t,i,u.children,s),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ss(i,s),u=On(u),l=l(u),i.flags|=1,pn(t,i,l,s),i.child;case 14:return l=i.type,u=Yn(l,i.pendingProps),u=Yn(l.type,u),Xf(t,i,l,u,s);case 15:return qf(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Yn(l,u),ga(t,i),i.tag=1,xn(l)?(t=!0,Qo(i)):t=!1,ss(i,s),zf(i,l,u),Ac(i,l,u,s),Lc(null,i,l,!0,t,s);case 19:return th(t,i,s);case 22:return Yf(t,i,s)}throw Error(n(156,i.tag))};function wh(t,i){return ze(t,i)}function gv(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,s,l){return new gv(t,i,s,l)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vv(t){if(typeof t=="function")return Kc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===ae)return 14}return 2}function Zi(t,i){var s=t.alternate;return s===null?(s=Bn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ra(t,i,s,l,u,h){var M=2;if(l=t,typeof t=="function")Kc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ar(s.children,u,h,i);case V:M=8,u|=8;break;case P:return t=Bn(12,s,i,u|2),t.elementType=P,t.lanes=h,t;case H:return t=Bn(13,s,i,u),t.elementType=H,t.lanes=h,t;case le:return t=Bn(19,s,i,u),t.elementType=le,t.lanes=h,t;case fe:return Ca(s,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case Y:M=9;break e;case se:M=11;break e;case ae:M=14;break e;case ve:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(M,s,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Ar(t,i,s,l){return t=Bn(7,t,l,i),t.lanes=s,t}function Ca(t,i,s,l){return t=Bn(22,t,l,i),t.elementType=fe,t.lanes=s,t.stateNode={isHidden:!1},t}function Zc(t,i,s){return t=Bn(6,t,null,i),t.lanes=s,t}function Qc(t,i,s){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function _v(t,i,s,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Jc(t,i,s,l,u,h,M,D,z){return t=new _v(t,i,s,D,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Bn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(h),t}function xv(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Ah(t){if(!t)return Vi;t=t._reactInternals;e:{if(C(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(xn(s))return Jd(t,s,i)}return i}function Rh(t,i,s,l,u,h,M,D,z){return t=Jc(s,l,!0,t,u,h,M,D,z),t.context=Ah(null),s=t.current,l=mn(),u=$i(s),h=yi(l,u),h.callback=i??null,ji(s,h,u),t.current.lanes=u,Vs(t,u,l),Mn(t,l),t}function Pa(t,i,s,l){var u=i.current,h=mn(),M=$i(u);return s=Ah(s),i.context===null?i.context=s:i.pendingContext=s,i=yi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ji(u,i,M),t!==null&&(Zn(t,u,M,h),oa(t,u,M)),M}function La(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ch(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function eu(t,i){Ch(t,i),(t=t.alternate)&&Ch(t,i)}function yv(){return null}var Ph=typeof reportError=="function"?reportError:function(t){console.error(t)};function tu(t){this._internalRoot=t}ba.prototype.render=tu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Pa(t,i,null,null)},ba.prototype.unmount=tu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Er(function(){Pa(null,t,null,null)}),i[mi]=null}};function ba(t){this._internalRoot=t}ba.prototype.unstable_scheduleHydration=function(t){if(t){var i=dd();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Oi.length&&i!==0&&i<Oi[s].priority;s++);Oi.splice(s,0,t),s===0&&pd(t)}};function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Na(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function Sv(t,i,s,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var te=La(M);h.call(te)}}var M=Rh(i,l,t,0,null,!1,!1,"",Lh);return t._reactRootContainer=M,t[mi]=M.current,no(t.nodeType===8?t.parentNode:t),Er(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var te=La(z);D.call(te)}}var z=Jc(t,0,!1,null,null,!1,!1,"",Lh);return t._reactRootContainer=z,t[mi]=z.current,no(t.nodeType===8?t.parentNode:t),Er(function(){Pa(i,z,s,l)}),z}function Da(t,i,s,l,u){var h=s._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var D=u;u=function(){var z=La(M);D.call(z)}}Pa(i,M,t,u)}else M=Sv(s,i,t,u,l);return La(M)}cd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pi(i.pendingLanes);s!==0&&(Al(i,s|1),Mn(i,Fe()),(pt&6)===0&&(us=Fe()+500,Gi()))}break;case 13:Er(function(){var l=xi(t,1);if(l!==null){var u=mn();Zn(l,t,1,u)}}),eu(t,1)}},Rl=function(t){if(t.tag===13){var i=xi(t,134217728);if(i!==null){var s=mn();Zn(i,t,134217728,s)}eu(t,134217728)}},ud=function(t){if(t.tag===13){var i=$i(t),s=xi(t,i);if(s!==null){var l=mn();Zn(s,t,i,l)}eu(t,i)}},dd=function(){return yt},fd=function(t,i){var s=yt;try{return yt=t,i()}finally{yt=s}},ce=function(t,i,s){switch(i){case"input":if(at(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=Ko(l);if(!u)throw Error(n(90));Xe(l),at(l,u)}}}break;case"textarea":ye(t,s);break;case"select":i=s.value,i!=null&&re(t,!!s.multiple,i,!1)}},Ht=qc,mt=Er;var Mv={usingClientEntryPoint:!1,Events:[so,Zr,Ko,St,Rt,qc]},yo={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{Ke=Ua.inject(Ev),on=Ua}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,En.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(i))throw Error(n(200));return xv(t,i,null,s)},En.createRoot=function(t,i){if(!nu(t))throw Error(n(299));var s=!1,l="",u=Ph;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=Jc(t,1,!1,null,null,s,!1,l,u),t[mi]=i.current,no(t.nodeType===8?t.parentNode:t),new tu(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Er(t)},En.hydrate=function(t,i,s){if(!Na(i))throw Error(n(200));return Da(null,t,i,!0,s)},En.hydrateRoot=function(t,i,s){if(!nu(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,u=!1,h="",M=Ph;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Rh(i,null,t,1,s??null,u,!1,h,M),t[mi]=i.current,no(t),l)for(t=0;t<l.length;t++)s=l[t],u=s._getVersion,u=u(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,u]:i.mutableSourceEagerHydrationData.push(s,u);return new ba(i)},En.render=function(t,i,s){if(!Na(i))throw Error(n(200));return Da(null,t,i,!1,s)},En.unmountComponentAtNode=function(t){if(!Na(t))throw Error(n(40));return t._reactRootContainer?(Er(function(){Da(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1},En.unstable_batchedUpdates=qc,En.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Na(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Da(t,i,s,!1,l)},En.version="18.3.1-next-f1338f8080-20240426",En}var zh;function bv(){if(zh)return su.exports;zh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),su.exports=Lv(),su.exports}var kh;function Nv(){if(kh)return Ia;kh=1;var o=bv();return Ia.createRoot=o.createRoot,Ia.hydrateRoot=o.hydrateRoot,Ia}var Dv=Nv(),Vu=Qu();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ju="164",Uv=0,Bh=1,Iv=2,fm=1,Fv=2,Ci=3,cr=0,An=1,Pi=2,ar=0,Ls=1,Hh=2,Vh=3,Gh=4,Ov=5,Ir=100,zv=101,kv=102,Bv=103,Hv=104,Vv=200,Gv=201,Wv=202,jv=203,Gu=204,Wu=205,Xv=206,qv=207,Yv=208,$v=209,Kv=210,Zv=211,Qv=212,Jv=213,e_=214,t_=0,n_=1,i_=2,ll=3,r_=4,s_=5,o_=6,a_=7,hm=0,l_=1,c_=2,lr=0,u_=1,d_=2,f_=3,h_=4,p_=5,m_=6,g_=7,pm=300,Ds=301,Us=302,ju=303,Xu=304,pl=306,qu=1e3,Or=1001,Yu=1002,Gn=1003,v_=1004,Fa=1005,ti=1006,lu=1007,zr=1008,ur=1009,__=1010,x_=1011,mm=1012,gm=1013,Is=1014,or=1015,ml=1016,vm=1017,_m=1018,Po=1020,y_=35902,S_=1021,M_=1022,ui=1023,E_=1024,T_=1025,bs=1026,Co=1027,w_=1028,xm=1029,A_=1030,ym=1031,Sm=1033,cu=33776,uu=33777,du=33778,fu=33779,Wh=35840,jh=35841,Xh=35842,qh=35843,Yh=36196,$h=37492,Kh=37496,Zh=37808,Qh=37809,Jh=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,hu=36492,dp=36494,fp=36495,R_=36283,hp=36284,pp=36285,mp=36286,C_=3200,P_=3201,Mm=0,L_=1,sr="",ai="srgb",fr="srgb-linear",ed="display-p3",gl="display-p3-linear",cl="linear",Lt="srgb",ul="rec709",dl="p3",fs=7680,gp=519,b_=512,N_=513,D_=514,Em=515,U_=516,I_=517,F_=518,O_=519,vp=35044,_p="300 es",Li=2e3,fl=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pu=Math.PI/180,$u=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[o&255]+dn[o>>8&255]+dn[o>>16&255]+dn[o>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function wn(o,e,n){return Math.max(e,Math.min(n,o))}function z_(o,e){return(o%e+e)%e}function mu(o,e,n){return(1-n)*o+n*e}function Mo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,c,d,f,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m)}set(e,n,r,a,c,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],y=r[7],x=r[2],S=r[5],w=r[8],T=a[0],g=a[3],_=a[6],b=a[1],R=a[4],L=a[7],W=a[2],U=a[5],N=a[8];return c[0]=d*T+f*b+p*W,c[3]=d*g+f*R+p*U,c[6]=d*_+f*L+p*N,c[1]=m*T+v*b+y*W,c[4]=m*g+v*R+y*U,c[7]=m*_+v*L+y*N,c[2]=x*T+S*b+w*W,c[5]=x*g+S*R+w*U,c[8]=x*_+S*L+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*d*v-n*f*m-r*c*v+r*f*p+a*c*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],y=v*d-f*m,x=f*p-v*c,S=m*c-d*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(a*m-v*r)*T,e[2]=(f*r-a*d)*T,e[3]=x*T,e[4]=(v*n-a*p)*T,e[5]=(a*c-f*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new st;function Tm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function hl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function k_(){const o=hl("canvas");return o.style.display="block",o}const xp={};function B_(o){o in xp||(xp[o]=!0,console.warn(o))}const yp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[fr]:{transfer:cl,primaries:ul,toReference:o=>o,fromReference:o=>o},[ai]:{transfer:Lt,primaries:ul,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[gl]:{transfer:cl,primaries:dl,toReference:o=>o.applyMatrix3(Sp),fromReference:o=>o.applyMatrix3(yp)},[ed]:{transfer:Lt,primaries:dl,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Sp),fromReference:o=>o.applyMatrix3(yp).convertLinearToSRGB()}},H_=new Set([fr,gl]),Mt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!H_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Oa[e].toReference,a=Oa[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Oa[o].primaries},getTransfer:function(o){return o===sr?cl:Oa[o].transfer}};function Ns(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class V_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=hl("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Ns(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ns(n[r]/255)*255):n[r]=Ns(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(_u(a[d].image)):c.push(_u(a[d]))}else c=_u(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function _u(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?V_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W_=0;class Rn extends Os{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Or,a=Or,c=ti,d=zr,f=ui,p=ur,m=Rn.DEFAULT_ANISOTROPY,v=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Lo(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case Yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case Yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=pm;Rn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,n=0,r=0,a=1){en.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],y=p[8],x=p[1],S=p[5],w=p[9],T=p[2],g=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(y-T)<.01&&Math.abs(w-g)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+T)<.1&&Math.abs(w+g)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,L=(S+1)/2,W=(_+1)/2,U=(v+x)/4,N=(y+T)/4,V=(w+g)/4;return R>L&&R>W?R<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(R),a=U/r,c=N/r):L>W?L<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(L),r=U/a,c=V/a):W<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(W),r=N/c,a=V/c),this.set(r,a,c,n),this}let b=Math.sqrt((g-w)*(g-w)+(y-T)*(y-T)+(x-v)*(x-v));return Math.abs(b)<.001&&(b=1),this.x=(g-w)/b,this.y=(y-T)/b,this.z=(x-v)/b,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j_ extends Os{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new en(0,0,e,n),this.scissorTest=!1,this.viewport=new en(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends j_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Am extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X_ extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];const x=c[d+0],S=c[d+1],w=c[d+2],T=c[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=T;return}if(y!==T||p!==x||m!==S||v!==w){let g=1-f;const _=p*x+m*S+v*w+y*T,b=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const W=Math.sqrt(R),U=Math.atan2(W,_*b);g=Math.sin(g*U)/W,f=Math.sin(f*U)/W}const L=f*b;if(p=p*g+x*L,m=m*g+S*L,v=v*g+w*L,y=y*g+T*L,g===1-f){const W=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=W,m*=W,v*=W,y*=W}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],p=r[a+1],m=r[a+2],v=r[a+3],y=c[d],x=c[d+1],S=c[d+2],w=c[d+3];return e[n]=f*w+v*y+p*S-m*x,e[n+1]=p*w+v*x+m*y-f*S,e[n+2]=m*w+v*S+f*x-p*y,e[n+3]=v*w-f*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(a/2),y=f(c/2),x=p(r/2),S=p(a/2),w=p(c/2);switch(d){case"XYZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"YXZ":this._x=x*v*y+m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"ZXY":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y-x*S*w;break;case"ZYX":this._x=x*v*y-m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y+x*S*w;break;case"YZX":this._x=x*v*y+m*S*w,this._y=m*S*y+x*v*w,this._z=m*v*w-x*S*y,this._w=m*v*y-x*S*w;break;case"XZY":this._x=x*v*y-m*S*w,this._y=m*S*y-x*v*w,this._z=m*v*w+x*S*y,this._w=m*v*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],v=n[6],y=n[10],x=r+f+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(d-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(v-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(c+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(c-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(d-a)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+d*f+a*m-c*p,this._y=a*v+d*p+c*f-r*m,this._z=c*v+d*m+r*p-a*f,this._w=d*v-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),y=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),v=2*(f*n-c*a),y=2*(c*r-d*n);return this.x=n+p*m+d*y-f*v,this.y=r+p*v+f*m-c*y,this.z=a+p*y+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new $,Mp=new bo;class No{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Qn):Qn.fromBufferAttribute(c,d),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),za.copy(r.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),ka.subVectors(this.max,Eo),ps.subVectors(e.a,Eo),ms.subVectors(e.b,Eo),gs.subVectors(e.c,Eo),Ji.subVectors(ms,ps),er.subVectors(gs,ms),Rr.subVectors(ps,gs);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Rr.z,Rr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Rr.z,0,-Rr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Rr.y,Rr.x,0];return!yu(n,ps,ms,gs,ka)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,ps,ms,gs,ka))?!1:(Ba.crossVectors(Ji,er),n=[Ba.x,Ba.y,Ba.z],yu(n,ps,ms,gs,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new $,new $,new $,new $,new $,new $,new $,new $],Qn=new $,za=new No,ps=new $,ms=new $,gs=new $,Ji=new $,er=new $,Rr=new $,Eo=new $,ka=new $,Ba=new $,Cr=new $;function yu(o,e,n,r,a){for(let c=0,d=o.length-3;c<=d;c+=3){Cr.fromArray(o,c);const f=a.x*Math.abs(Cr.x)+a.y*Math.abs(Cr.y)+a.z*Math.abs(Cr.z),p=e.dot(Cr),m=n.dot(Cr),v=r.dot(Cr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const q_=new No,To=new $,Su=new $;class vl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):q_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(To,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Su)),this.expandByPoint(To.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new $,Mu=new $,Ha=new $,tr=new $,Eu=new $,Va=new $,Tu=new $;class Rm{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Mu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(Mu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(Ha),f=tr.dot(this.direction),p=-tr.dot(Ha),m=tr.lengthSq(),v=Math.abs(1-d*d);let y,x,S,w;if(v>0)if(y=d*p-f,x=d*f-p,w=c*v,y>=0)if(x>=-w)if(x<=w){const T=1/v;y*=T,x*=T,S=y*(y+d*x+2*f)+x*(d*y+x+2*p)+m}else x=c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x=-c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-d*c+f)),x=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(y=Math.max(0,-(d*c+f)),x=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Mu).addScaledVector(Ha,x),S}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const r=Ti.dot(this.direction),a=Ti.dot(Ti)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,r,a,c){Eu.subVectors(n,e),Va.subVectors(r,e),Tu.crossVectors(Eu,Va);let d=this.direction.dot(Tu),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;tr.subVectors(this.origin,e);const p=f*this.direction.dot(Va.crossVectors(tr,Va));if(p<0)return null;const m=f*this.direction.dot(Eu.cross(tr));if(m<0||p+m>d)return null;const v=-f*tr.dot(Tu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,r,a,c,d,f,p,m,v,y,x,S,w,T,g){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m,v,y,x,S,w,T,g)}set(e,n,r,a,c,d,f,p,m,v,y,x,S,w,T,g){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=S,_[7]=w,_[11]=T,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/vs.setFromMatrixColumn(e,0).length(),c=1/vs.setFromMatrixColumn(e,1).length(),d=1/vs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*v,S=d*y,w=f*v,T=f*y;n[0]=p*v,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-T*m,n[9]=-f*p,n[2]=T-x*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*v,S=p*y,w=m*v,T=m*y;n[0]=x+T*f,n[4]=w*f-S,n[8]=d*m,n[1]=d*y,n[5]=d*v,n[9]=-f,n[2]=S*f-w,n[6]=T+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*v,S=p*y,w=m*v,T=m*y;n[0]=x-T*f,n[4]=-d*y,n[8]=w+S*f,n[1]=S+w*f,n[5]=d*v,n[9]=T-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*v,S=d*y,w=f*v,T=f*y;n[0]=p*v,n[4]=w*m-S,n[8]=x*m+T,n[1]=p*y,n[5]=T*m+x,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,w=f*p,T=f*m;n[0]=p*v,n[4]=T-x*y,n[8]=w*y+S,n[1]=y,n[5]=d*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*y+w,n[10]=x-T*y}else if(e.order==="XZY"){const x=d*p,S=d*m,w=f*p,T=f*m;n[0]=p*v,n[4]=-y,n[8]=m*v,n[1]=x*y+T,n[5]=d*v,n[9]=S*y-w,n[2]=w*y-S,n[6]=f*v,n[10]=T*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,$_)}lookAt(e,n,r){const a=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),nr.crossVectors(r,Dn),nr.lengthSq()===0&&(Math.abs(r.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),nr.crossVectors(r,Dn)),nr.normalize(),Ga.crossVectors(Dn,nr),a[0]=nr.x,a[4]=Ga.x,a[8]=Dn.x,a[1]=nr.y,a[5]=Ga.y,a[9]=Dn.y,a[2]=nr.z,a[6]=Ga.z,a[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],y=r[5],x=r[9],S=r[13],w=r[2],T=r[6],g=r[10],_=r[14],b=r[3],R=r[7],L=r[11],W=r[15],U=a[0],N=a[4],V=a[8],P=a[12],E=a[1],Y=a[5],se=a[9],H=a[13],le=a[2],ae=a[6],ve=a[10],fe=a[14],k=a[3],oe=a[7],Q=a[11],F=a[15];return c[0]=d*U+f*E+p*le+m*k,c[4]=d*N+f*Y+p*ae+m*oe,c[8]=d*V+f*se+p*ve+m*Q,c[12]=d*P+f*H+p*fe+m*F,c[1]=v*U+y*E+x*le+S*k,c[5]=v*N+y*Y+x*ae+S*oe,c[9]=v*V+y*se+x*ve+S*Q,c[13]=v*P+y*H+x*fe+S*F,c[2]=w*U+T*E+g*le+_*k,c[6]=w*N+T*Y+g*ae+_*oe,c[10]=w*V+T*se+g*ve+_*Q,c[14]=w*P+T*H+g*fe+_*F,c[3]=b*U+R*E+L*le+W*k,c[7]=b*N+R*Y+L*ae+W*oe,c[11]=b*V+R*se+L*ve+W*Q,c[15]=b*P+R*H+L*fe+W*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],y=e[6],x=e[10],S=e[14],w=e[3],T=e[7],g=e[11],_=e[15];return w*(+c*p*y-a*m*y-c*f*x+r*m*x+a*f*S-r*p*S)+T*(+n*p*S-n*m*x+c*d*x-a*d*S+a*m*v-c*p*v)+g*(+n*m*y-n*f*S-c*d*y+r*d*S+c*f*v-r*m*v)+_*(-a*f*v-n*p*y+n*f*x+a*d*y-r*d*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],y=e[9],x=e[10],S=e[11],w=e[12],T=e[13],g=e[14],_=e[15],b=y*g*m-T*x*m+T*p*S-f*g*S-y*p*_+f*x*_,R=w*x*m-v*g*m-w*p*S+d*g*S+v*p*_-d*x*_,L=v*T*m-w*y*m+w*f*S-d*T*S-v*f*_+d*y*_,W=w*y*p-v*T*p-w*f*x+d*T*x+v*f*g-d*y*g,U=n*b+r*R+a*L+c*W;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=b*N,e[1]=(T*x*c-y*g*c-T*a*S+r*g*S+y*a*_-r*x*_)*N,e[2]=(f*g*c-T*p*c+T*a*m-r*g*m-f*a*_+r*p*_)*N,e[3]=(y*p*c-f*x*c-y*a*m+r*x*m+f*a*S-r*p*S)*N,e[4]=R*N,e[5]=(v*g*c-w*x*c+w*a*S-n*g*S-v*a*_+n*x*_)*N,e[6]=(w*p*c-d*g*c-w*a*m+n*g*m+d*a*_-n*p*_)*N,e[7]=(d*x*c-v*p*c+v*a*m-n*x*m-d*a*S+n*p*S)*N,e[8]=L*N,e[9]=(w*y*c-v*T*c-w*r*S+n*T*S+v*r*_-n*y*_)*N,e[10]=(d*T*c-w*f*c+w*r*m-n*T*m-d*r*_+n*f*_)*N,e[11]=(v*f*c-d*y*c-v*r*m+n*y*m+d*r*S-n*f*S)*N,e[12]=W*N,e[13]=(v*T*a-w*y*a+w*r*x-n*T*x-v*r*g+n*y*g)*N,e[14]=(w*f*a-d*T*a-w*r*p+n*T*p+d*r*g-n*f*g)*N,e[15]=(d*y*a-v*f*a+v*r*p-n*y*p-d*r*x+n*f*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,v=c*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,v*f+r,v*p-a*d,0,m*p-a*f,v*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,v=d+d,y=f+f,x=c*m,S=c*v,w=c*y,T=d*v,g=d*y,_=f*y,b=p*m,R=p*v,L=p*y,W=r.x,U=r.y,N=r.z;return a[0]=(1-(T+_))*W,a[1]=(S+L)*W,a[2]=(w-R)*W,a[3]=0,a[4]=(S-L)*U,a[5]=(1-(x+_))*U,a[6]=(g+b)*U,a[7]=0,a[8]=(w+R)*N,a[9]=(g-b)*N,a[10]=(1-(x+T))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=vs.set(a[0],a[1],a[2]).length();const d=vs.set(a[4],a[5],a[6]).length(),f=vs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],Jn.copy(this);const m=1/c,v=1/d,y=1/f;return Jn.elements[0]*=m,Jn.elements[1]*=m,Jn.elements[2]*=m,Jn.elements[4]*=v,Jn.elements[5]*=v,Jn.elements[6]*=v,Jn.elements[8]*=y,Jn.elements[9]*=y,Jn.elements[10]*=y,n.setFromRotationMatrix(Jn),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=Li){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(f===Li)S=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(f===fl)S=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=Li){const p=this.elements,m=1/(n-e),v=1/(r-a),y=1/(d-c),x=(n+e)*m,S=(r+a)*v;let w,T;if(f===Li)w=(d+c)*y,T=-2*y;else if(f===fl)w=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const vs=new $,Jn=new Ft,Y_=new $(0,0,0),$_=new $(1,1,1),nr=new $,Ga=new $,Dn=new $,Ep=new Ft,Tp=new bo;class fi{constructor(e=0,n=0,r=0,a=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],p=a[1],m=a[5],v=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const wp=new $,_s=new bo,wi=new Ft,Wa=new $,wo=new $,Z_=new $,Q_=new bo,Ap=new $(1,0,0),Rp=new $(0,1,0),Cp=new $(0,0,1),Pp={type:"added"},J_={type:"removed"},xs={type:"childadded",child:null},wu={type:"childremoved",child:null};class sn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new $,n=new fi,r=new bo,a=new $(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new st}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,n){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Wa.copy(e):Wa.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(wo,Wa,this.up):wi.lookAt(Wa,wo,this.up),this.quaternion.setFromRotationMatrix(wi),a&&(wi.extractRotation(a.matrixWorld),_s.setFromRotationMatrix(wi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(J_),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const c=n[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++){const f=a[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new $(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new $,Ai=new $,Au=new $,Ri=new $,ys=new $,Ss=new $,Lp=new $,Ru=new $,Cu=new $,Pu=new $;class ci{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ei.subVectors(e,n),a.cross(ei);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ei.subVectors(a,n),Ai.subVectors(r,n),Au.subVectors(e,n);const d=ei.dot(ei),f=ei.dot(Ai),p=ei.dot(Au),m=Ai.dot(Ai),v=Ai.dot(Au),y=d*m-f*f;if(y===0)return c.set(0,0,0),null;const x=1/y,S=(m*p-f*v)*x,w=(d*v-f*p)*x;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,r,a,c,d,f,p){return this.getBarycoord(e,n,r,a,Ri)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ri.x),p.addScaledVector(d,Ri.y),p.addScaledVector(f,Ri.z),p)}static isFrontFacing(e,n,r,a){return ei.subVectors(r,n),Ai.subVectors(e,n),ei.cross(Ai).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;ys.subVectors(a,r),Ss.subVectors(c,r),Ru.subVectors(e,r);const p=ys.dot(Ru),m=Ss.dot(Ru);if(p<=0&&m<=0)return n.copy(r);Cu.subVectors(e,a);const v=ys.dot(Cu),y=Ss.dot(Cu);if(v>=0&&y<=v)return n.copy(a);const x=p*y-v*m;if(x<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(ys,d);Pu.subVectors(e,c);const S=ys.dot(Pu),w=Ss.dot(Pu);if(w>=0&&S<=w)return n.copy(c);const T=S*m-p*w;if(T<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Ss,f);const g=v*w-S*y;if(g<=0&&y-v>=0&&S-w>=0)return Lp.subVectors(c,a),f=(y-v)/(y-v+(S-w)),n.copy(a).addScaledVector(Lp,f);const _=1/(g+T+x);return d=T*_,f=x*_,n.copy(r).addScaledVector(ys,d).addScaledVector(Ss,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Lu(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=z_(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Lu(d,c,e+1/3),this.g=Lu(d,c,e),this.b=Lu(d,c,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=ai){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const r=Pm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Mt.fromWorkingColorSpace(fn.copy(this),e),Math.round(wn(fn.r*255,0,255))*65536+Math.round(wn(fn.g*255,0,255))*256+Math.round(wn(fn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,c=fn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const y=d-f;switch(m=v<=.5?y/(d+f):y/(2-d-f),d){case r:p=(a-c)/y+(a<c?6:0);break;case a:p=(c-r)/y+2;break;case c:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ai){Mt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(ja);const r=mu(ir.h,ja.h,n),a=mu(ir.s,ja.s,n),c=mu(ir.l,ja.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new vt;vt.NAMES=Pm;let e0=0;class zs extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Ls,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gu&&(r.blendSrc=this.blendSrc),this.blendDst!==Wu&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ll&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lm extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new $,Xa=new dt;class ni{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return B_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),c=Tn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class bm extends ni{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Nm extends ni{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class hn extends ni{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t0=0;const Hn=new Ft,bu=new sn,Ms=new $,Un=new No,Ao=new No,Jt=new $;class Wn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Nm:bm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,r){return Hn.makeTranslation(e,n,r),this.applyMatrix4(Hn),this}scale(e,n,r){return Hn.makeScale(e,n,r),this.applyMatrix4(Hn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Un.setFromBufferAttribute(c),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Ao.setFromBufferAttribute(f),this.morphTargetsRelative?(Jt.addVectors(Un.min,Ao.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,Ao.max),Un.expandByPoint(Jt)):(Un.expandByPoint(Ao.min),Un.expandByPoint(Ao.max))}Un.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)Jt.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(Jt));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)Jt.fromBufferAttribute(f,m),p&&(Ms.fromBufferAttribute(e,m),Jt.add(Ms)),a=Math.max(a,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<r.count;V++)f[V]=new $,p[V]=new $;const m=new $,v=new $,y=new $,x=new dt,S=new dt,w=new dt,T=new $,g=new $;function _(V,P,E){m.fromBufferAttribute(r,V),v.fromBufferAttribute(r,P),y.fromBufferAttribute(r,E),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,P),w.fromBufferAttribute(c,E),v.sub(m),y.sub(m),S.sub(x),w.sub(x);const Y=1/(S.x*w.y-w.x*S.y);isFinite(Y)&&(T.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(Y),g.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(Y),f[V].add(T),f[P].add(T),f[E].add(T),p[V].add(g),p[P].add(g),p[E].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,P=b.length;V<P;++V){const E=b[V],Y=E.start,se=E.count;for(let H=Y,le=Y+se;H<le;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new $,L=new $,W=new $,U=new $;function N(V){W.fromBufferAttribute(a,V),U.copy(W);const P=f[V];R.copy(P),R.sub(W.multiplyScalar(W.dot(P))).normalize(),L.crossVectors(U,P);const Y=L.dot(p[V])<0?-1:1;d.setXYZW(V,R.x,R.y,R.z,Y)}for(let V=0,P=b.length;V<P;++V){const E=b[V],Y=E.start,se=E.count;for(let H=Y,le=Y+se;H<le;H+=3)N(e.getX(H+0)),N(e.getX(H+1)),N(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new $,c=new $,d=new $,f=new $,p=new $,m=new $,v=new $,y=new $;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),T=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,g),v.subVectors(d,c),y.subVectors(a,c),v.cross(y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,g),f.add(v),p.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),v.subVectors(d,c),y.subVectors(a,c),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,y=f.normalized,x=new m.constructor(p.length*v);let S=0,w=0;for(let T=0,g=p.length;T<g;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*v;for(let _=0;_<v;_++)x[w++]=m[S++]}return new ni(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let v=0,y=m.length;v<y;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],y=c[m];for(let x=0,S=y.length;x<S;x++)v.push(y[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bp=new Ft,Pr=new Rm,qa=new vl,Np=new $,Es=new $,Ts=new $,ws=new $,Nu=new $,Ya=new $,$a=new dt,Ka=new dt,Za=new dt,Dp=new $,Up=new $,Ip=new $,Qa=new $,Ja=new $;class di extends sn{constructor(e=new Wn,n=new Lm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){Ya.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=f[p],y=c[p];v!==0&&(Nu.fromBufferAttribute(y,e),d?Ya.addScaledVector(Nu,v):Ya.addScaledVector(Nu.sub(n),v))}n.add(Ya)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qa.copy(r.boundingSphere),qa.applyMatrix4(c),Pr.copy(e.ray).recast(e.near),!(qa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(qa,Np)===null||Pr.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(bp.copy(c).invert(),Pr.copy(e.ray).applyMatrix4(bp),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,T=x.length;w<T;w++){const g=x[w],_=d[g.materialIndex],b=Math.max(g.start,S.start),R=Math.min(f.count,Math.min(g.start+g.count,S.start+S.count));for(let L=b,W=R;L<W;L+=3){const U=f.getX(L),N=f.getX(L+1),V=f.getX(L+2);a=el(this,_,e,r,m,v,y,U,N,V),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let g=w,_=T;g<_;g+=3){const b=f.getX(g),R=f.getX(g+1),L=f.getX(g+2);a=el(this,d,e,r,m,v,y,b,R,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,T=x.length;w<T;w++){const g=x[w],_=d[g.materialIndex],b=Math.max(g.start,S.start),R=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let L=b,W=R;L<W;L+=3){const U=L,N=L+1,V=L+2;a=el(this,_,e,r,m,v,y,U,N,V),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let g=w,_=T;g<_;g+=3){const b=g,R=g+1,L=g+2;a=el(this,d,e,r,m,v,y,b,R,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function n0(o,e,n,r,a,c,d,f){let p;if(e.side===An?p=r.intersectTriangle(d,c,a,!0,f):p=r.intersectTriangle(a,c,d,e.side===cr,f),p===null)return null;Ja.copy(f),Ja.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(Ja);return m<n.near||m>n.far?null:{distance:m,point:Ja.clone(),object:o}}function el(o,e,n,r,a,c,d,f,p,m){o.getVertexPosition(f,Es),o.getVertexPosition(p,Ts),o.getVertexPosition(m,ws);const v=n0(o,e,n,r,Es,Ts,ws,Qa);if(v){a&&($a.fromBufferAttribute(a,f),Ka.fromBufferAttribute(a,p),Za.fromBufferAttribute(a,m),v.uv=ci.getInterpolation(Qa,Es,Ts,ws,$a,Ka,Za,new dt)),c&&($a.fromBufferAttribute(c,f),Ka.fromBufferAttribute(c,p),Za.fromBufferAttribute(c,m),v.uv1=ci.getInterpolation(Qa,Es,Ts,ws,$a,Ka,Za,new dt)),d&&(Dp.fromBufferAttribute(d,f),Up.fromBufferAttribute(d,p),Ip.fromBufferAttribute(d,m),v.normal=ci.getInterpolation(Qa,Es,Ts,ws,Dp,Up,Ip,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new $,materialIndex:0};ci.getNormal(Es,Ts,ws,y.normal),v.face=y}return v}class Do extends Wn{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(y,2));function w(T,g,_,b,R,L,W,U,N,V,P){const E=L/N,Y=W/V,se=L/2,H=W/2,le=U/2,ae=N+1,ve=V+1;let fe=0,k=0;const oe=new $;for(let Q=0;Q<ve;Q++){const F=Q*Y-H;for(let ie=0;ie<ae;ie++){const be=ie*E-se;oe[T]=be*b,oe[g]=F*R,oe[_]=le,m.push(oe.x,oe.y,oe.z),oe[T]=0,oe[g]=0,oe[_]=U>0?1:-1,v.push(oe.x,oe.y,oe.z),y.push(ie/N),y.push(1-Q/V),fe+=1}}for(let Q=0;Q<V;Q++)for(let F=0;F<N;F++){const ie=x+F+ae*Q,be=x+F+ae*(Q+1),K=x+(F+1)+ae*(Q+1),ue=x+(F+1)+ae*Q;p.push(ie,be,ue),p.push(be,K,ue),k+=6}f.addGroup(S,k,P),S+=k,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function gn(o){const e={};for(let n=0;n<o.length;n++){const r=Fs(o[n]);for(const a in r)e[a]=r[a]}return e}function i0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Dm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const r0={clone:Fs,merge:gn};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Um extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new $,Fp=new dt,Op=new dt;class Vn extends Um{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$u*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Fp,Op),n.subVectors(Op,Fp)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Rs=1;class a0 extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(As,Rs,e,n);a.layers=this.layers,this.add(a);const c=new Vn(As,Rs,e,n);c.layers=this.layers,this.add(c);const d=new Vn(As,Rs,e,n);d.layers=this.layers,this.add(d);const f=new Vn(As,Rs,e,n);f.layers=this.layers,this.add(f);const p=new Vn(As,Rs,e,n);p.layers=this.layers,this.add(p);const m=new Vn(As,Rs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Im extends Rn{constructor(e,n,r,a,c,d,f,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,r,a,c,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Im(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Do(5,5,5),c=new dr({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:ar});c.uniforms.tEquirect.value=n;const d=new di(a,c),f=n.minFilter;return n.minFilter===zr&&(n.minFilter=ti),new a0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const Du=new $,c0=new $,u0=new st;class Dr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Du.subVectors(r,n).cross(c0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Du),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||u0.getNormalMatrix(e),a=this.coplanarPoint(Du).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new vl,tl=new $;class td{constructor(e=new Dr,n=new Dr,r=new Dr,a=new Dr,c=new Dr,d=new Dr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],p=a[3],m=a[4],v=a[5],y=a[6],x=a[7],S=a[8],w=a[9],T=a[10],g=a[11],_=a[12],b=a[13],R=a[14],L=a[15];if(r[0].setComponents(p-c,x-m,g-S,L-_).normalize(),r[1].setComponents(p+c,x+m,g+S,L+_).normalize(),r[2].setComponents(p+d,x+v,g+w,L+b).normalize(),r[3].setComponents(p-d,x-v,g-w,L-b).normalize(),r[4].setComponents(p-f,x-y,g-T,L-R).normalize(),n===Li)r[5].setComponents(p+f,x+y,g+T,L+R).normalize();else if(n===fl)r[5].setComponents(f,y,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(tl.x=a.normal.x>0?e.max.x:e.min.x,tl.y=a.normal.y>0?e.max.y:e.min.y,tl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fm(){let o=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function d0(o){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,y=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const v=p.array,y=p._updateRange,x=p.updateRanges;if(o.bindBuffer(m,f),y.count===-1&&x.length===0&&o.bufferSubData(m,0,v),x.length!==0){for(let S=0,w=x.length;S<w;S++){const T=x[S];o.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count),y.count=-1),p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:d}}class _l extends Wn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,v=p+1,y=e/f,x=n/p,S=[],w=[],T=[],g=[];for(let _=0;_<v;_++){const b=_*x-d;for(let R=0;R<m;R++){const L=R*y-c;w.push(L,-b,0),T.push(0,0,1),g.push(R/f),g.push(1-_/p)}}for(let _=0;_<p;_++)for(let b=0;b<f;b++){const R=b+m*_,L=b+m*(_+1),W=b+1+m*(_+1),U=b+1+m*_;S.push(R,L,U),S.push(L,W,U)}this.setIndex(S),this.setAttribute("position",new hn(w,3)),this.setAttribute("normal",new hn(T,3)),this.setAttribute("uv",new hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ux=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dx=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,_y=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xy=`#define DISTANCE
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
}`,yy=`#define DISTANCE
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dy=`#define PHONG
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
}`,Uy=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,Iy=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Oy=`#define TOON
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
}`,zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ky=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gy=`uniform float rotation;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:f0,alphahash_pars_fragment:h0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:v0,aomap_fragment:_0,aomap_pars_fragment:x0,batching_pars_vertex:y0,batching_vertex:S0,begin_vertex:M0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:b0,color_pars_fragment:N0,color_pars_vertex:D0,color_vertex:U0,common:I0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:z0,displacementmap_vertex:k0,emissivemap_fragment:B0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:j0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:rx,envmap_vertex:Y0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:Z0,fog_pars_fragment:Q0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:ux,lights_fragment_begin:dx,lights_fragment_maps:fx,lights_fragment_end:hx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:vx,map_fragment:_x,map_pars_fragment:xx,map_particle_fragment:yx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Tx,morphcolor_vertex:wx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:bx,normal_pars_vertex:Nx,normal_vertex:Dx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:zx,opaque_fragment:kx,packing:Bx,premultiplied_alpha_fragment:Hx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Wx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Yx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Zx,skinning_pars_vertex:Qx,skinning_vertex:Jx,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:oy,uv_pars_fragment:ay,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:hy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:vy,depth_frag:_y,distanceRGBA_vert:xy,distanceRGBA_frag:yy,equirect_vert:Sy,equirect_frag:My,linedashed_vert:Ey,linedashed_frag:Ty,meshbasic_vert:wy,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:by,meshnormal_frag:Ny,meshphong_vert:Dy,meshphong_frag:Uy,meshphysical_vert:Iy,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:zy,points_vert:ky,points_frag:By,shadow_vert:Hy,shadow_frag:Vy,sprite_vert:Gy,sprite_frag:Wy},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},li={basic:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};li.physical={uniforms:gn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const nl={r:0,b:0,g:0},br=new fi,jy=new Ft;function Xy(o,e,n,r,a,c,d){const f=new vt(0);let p=c===!0?0:1,m,v,y=null,x=0,S=null;function w(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?n:e).get(R)),R}function T(b){let R=!1;const L=w(b);L===null?_(f,p):L&&L.isColor&&(_(L,1),R=!0);const W=o.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,d):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||R)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function g(b,R){const L=w(R);L&&(L.isCubeTexture||L.mapping===pl)?(v===void 0&&(v=new di(new Do(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Fs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),br.copy(R.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(br)),v.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Lt,(y!==L||x!==L.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,y=L,x=L.version,S=o.toneMapping),v.layers.enableAll(),b.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new di(new _l(2,2),new dr({name:"BackgroundMaterial",uniforms:Fs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,y=L,x=L.version,S=o.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function _(b,R){b.getRGB(nl,Dm(o)),r.buffers.color.setClear(nl.r,nl.g,nl.b,R,d)}return{getClearColor:function(){return f},setClearColor:function(b,R=1){f.set(b),p=R,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,_(f,p)},render:T,addToRenderList:g}}function qy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function f(E,Y,se,H,le){let ae=!1;const ve=y(H,se,Y);c!==ve&&(c=ve,m(c.object)),ae=S(E,H,se,le),ae&&w(E,H,se,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(ae||d)&&(d=!1,L(E,Y,se,H),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return o.createVertexArray()}function m(E){return o.bindVertexArray(E)}function v(E){return o.deleteVertexArray(E)}function y(E,Y,se){const H=se.wireframe===!0;let le=r[E.id];le===void 0&&(le={},r[E.id]=le);let ae=le[Y.id];ae===void 0&&(ae={},le[Y.id]=ae);let ve=ae[H];return ve===void 0&&(ve=x(p()),ae[H]=ve),ve}function x(E){const Y=[],se=[],H=[];for(let le=0;le<n;le++)Y[le]=0,se[le]=0,H[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:se,attributeDivisors:H,object:E,attributes:{},index:null}}function S(E,Y,se,H){const le=c.attributes,ae=Y.attributes;let ve=0;const fe=se.getAttributes();for(const k in fe)if(fe[k].location>=0){const Q=le[k];let F=ae[k];if(F===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(F=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(F=E.instanceColor)),Q===void 0||Q.attribute!==F||F&&Q.data!==F.data)return!0;ve++}return c.attributesNum!==ve||c.index!==H}function w(E,Y,se,H){const le={},ae=Y.attributes;let ve=0;const fe=se.getAttributes();for(const k in fe)if(fe[k].location>=0){let Q=ae[k];Q===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const F={};F.attribute=Q,Q&&Q.data&&(F.data=Q.data),le[k]=F,ve++}c.attributes=le,c.attributesNum=ve,c.index=H}function T(){const E=c.newAttributes;for(let Y=0,se=E.length;Y<se;Y++)E[Y]=0}function g(E){_(E,0)}function _(E,Y){const se=c.newAttributes,H=c.enabledAttributes,le=c.attributeDivisors;se[E]=1,H[E]===0&&(o.enableVertexAttribArray(E),H[E]=1),le[E]!==Y&&(o.vertexAttribDivisor(E,Y),le[E]=Y)}function b(){const E=c.newAttributes,Y=c.enabledAttributes;for(let se=0,H=Y.length;se<H;se++)Y[se]!==E[se]&&(o.disableVertexAttribArray(se),Y[se]=0)}function R(E,Y,se,H,le,ae,ve){ve===!0?o.vertexAttribIPointer(E,Y,se,le,ae):o.vertexAttribPointer(E,Y,se,H,le,ae)}function L(E,Y,se,H){T();const le=H.attributes,ae=se.getAttributes(),ve=Y.defaultAttributeValues;for(const fe in ae){const k=ae[fe];if(k.location>=0){let oe=le[fe];if(oe===void 0&&(fe==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),fe==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){const Q=oe.normalized,F=oe.itemSize,ie=e.get(oe);if(ie===void 0)continue;const be=ie.buffer,K=ie.type,ue=ie.bytesPerElement,Se=K===o.INT||K===o.UNSIGNED_INT||oe.gpuType===gm;if(oe.isInterleavedBufferAttribute){const ge=oe.data,Ue=ge.stride,ke=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let X=0;X<k.locationSize;X++)_(k.location+X,ge.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let X=0;X<k.locationSize;X++)g(k.location+X);o.bindBuffer(o.ARRAY_BUFFER,be);for(let X=0;X<k.locationSize;X++)R(k.location+X,F/k.locationSize,K,Q,Ue*ue,(ke+F/k.locationSize*X)*ue,Se)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)_(k.location+ge,oe.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<k.locationSize;ge++)g(k.location+ge);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ge=0;ge<k.locationSize;ge++)R(k.location+ge,F/k.locationSize,K,Q,F*ue,F/k.locationSize*ge*ue,Se)}}else if(ve!==void 0){const Q=ve[fe];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(k.location,Q);break;case 3:o.vertexAttrib3fv(k.location,Q);break;case 4:o.vertexAttrib4fv(k.location,Q);break;default:o.vertexAttrib1fv(k.location,Q)}}}}b()}function W(){V();for(const E in r){const Y=r[E];for(const se in Y){const H=Y[se];for(const le in H)v(H[le].object),delete H[le];delete Y[se]}delete r[E]}}function U(E){if(r[E.id]===void 0)return;const Y=r[E.id];for(const se in Y){const H=Y[se];for(const le in H)v(H[le].object),delete H[le];delete Y[se]}delete r[E.id]}function N(E){for(const Y in r){const se=r[Y];if(se[E.id]===void 0)continue;const H=se[E.id];for(const le in H)v(H[le].object),delete H[le];delete se[E.id]}}function V(){P(),d=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:g,disableUnusedAttributes:b}}function Yy(o,e,n){let r;function a(m){r=m}function c(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function d(m,v,y){y!==0&&(o.drawArraysInstanced(r,m,v,y),n.update(v,r,y))}function f(m,v,y){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<y;S++)this.render(m[S],v[S]);else{x.multiDrawArraysWEBGL(r,m,0,v,0,y);let S=0;for(let w=0;w<y;w++)S+=v[w];n.update(S,r,1)}}function p(m,v,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)d(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,y);let w=0;for(let T=0;T<y;T++)w+=v[T];for(let T=0;T<x.length;T++)n.update(w,r,x[T])}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function $y(o,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(U){return!(U!==ui&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const N=U===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ur&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==or&&!N)}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,W=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:T,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:L,maxSamples:W}}function Ky(o){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Dr,f=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=v(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,T=y.clipIntersection,g=y.clipShadows,_=o.get(y);if(!a||w===null||w.length===0||c&&!g)c?v(null):m();else{const b=c?0:r,R=b*4;let L=_.clippingState||null;p.value=L,L=v(w,x,R,S);for(let W=0;W!==R;++W)L[W]=n[W];_.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,S,w){const T=y!==null?y.length:0;let g=null;if(T!==0){if(g=p.value,w!==!0||g===null){const _=S+T*4,b=x.matrixWorldInverse;f.getNormalMatrix(b),(g===null||g.length<_)&&(g=new Float32Array(_));for(let R=0,L=S;R!==T;++R,L+=4)d.copy(y[R]).applyMatrix4(b,f),d.normal.toArray(g,L),g[L+3]=d.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}function Zy(o){let e=new WeakMap;function n(d,f){return f===ju?d.mapping=Ds:f===Xu&&(d.mapping=Us),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ju||f===Xu)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new l0(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Om extends Um{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,zp=[.125,.215,.35,.446,.526,.582],Fr=20,Uu=new Om,kp=new vt;let Iu=null,Fu=0,Ou=0,zu=!1;const Ur=(1+Math.sqrt(5))/2,Cs=1/Ur,Bp=[new $(-Ur,Cs,0),new $(Ur,Cs,0),new $(-Cs,0,Ur),new $(Cs,0,Ur),new $(0,Ur,-Cs),new $(0,Ur,Cs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Iu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu,Fu,Ou),this._renderer.xr.enabled=zu,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ml,format:ui,colorSpace:fr,depthBuffer:!1},a=Vp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(c)),this._blurMaterial=Jy(c,e,n)}return a}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Uu)}_sceneToCubeUV(e,n,r,a){const f=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(kp),v.toneMapping=lr,v.autoClear=!1;const S=new Lm({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),w=new di(new Do,S);let T=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,T=!0):(S.color.copy(kp),T=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(f.up.set(0,p[_],0),f.lookAt(m[_],0,0)):b===1?(f.up.set(0,0,p[_]),f.lookAt(0,m[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,m[_]));const R=this._cubeSize;il(a,b*R,_>2?R:0,R,R),v.setRenderTarget(a),T&&v.render(w,f),v.render(e,f)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ds||e.mapping===Us;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new di(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;il(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Uu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Bp[(a-c-1)%Bp.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new di(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Fr-1),T=c/w,g=isFinite(c)?1+Math.floor(v*T):Fr;g>Fr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const _=[];let b=0;for(let N=0;N<Fr;++N){const V=N/T,P=Math.exp(-V*V/2);_.push(P),N===0?b+=P:N<g&&(b+=2*P)}for(let N=0;N<_.length;N++)_[N]=_[N]/b;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=w,x.mipInt.value=R-r;const L=this._sizeLods[a],W=3*L*(a>R-Ps?a-R+Ps:0),U=4*(this._cubeSize-L);il(n,W,U,3*L,2*L),p.setRenderTarget(n),p.render(y,Uu)}}function Qy(o){const e=[],n=[],r=[];let a=o;const c=o-Ps+1+zp.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>o-Ps?p=zp[d-o+Ps-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,T=3,g=2,_=1,b=new Float32Array(T*w*S),R=new Float32Array(g*w*S),L=new Float32Array(_*w*S);for(let U=0;U<S;U++){const N=U%3*2/3-1,V=U>2?0:-1,P=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];b.set(P,T*w*U),R.set(x,g*w*U);const E=[U,U,U,U,U,U];L.set(E,_*w*U)}const W=new Wn;W.setAttribute("position",new ni(b,T)),W.setAttribute("uv",new ni(R,g)),W.setAttribute("faceIndex",new ni(L,_)),e.push(W),a>Ps&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Vp(o,e,n){const r=new kr(o,e,n);return r.texture.mapping=pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function il(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function Jy(o,e,n){const r=new Float32Array(Fr),a=new $(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nd(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Gp(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Wp(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function eS(o){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===ju||p===Xu,v=p===Ds||p===Us;if(m||v){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Hp(o)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new Hp(o)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function a(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function tS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nS(o,e,n,r){const a={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const T=x.morphAttributes[w];for(let g=0,_=T.length;g<_;g++)e.remove(T[g])}x.removeEventListener("dispose",d),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],o.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const T=S[w];for(let g=0,_=T.length;g<_;g++)e.update(T[g],o.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let T=0;if(S!==null){const b=S.array;T=S.version;for(let R=0,L=b.length;R<L;R+=3){const W=b[R+0],U=b[R+1],N=b[R+2];x.push(W,U,U,N,N,W)}}else if(w!==void 0){const b=w.array;T=w.version;for(let R=0,L=b.length/3-1;R<L;R+=3){const W=R+0,U=R+1,N=R+2;x.push(W,U,U,N,N,W)}}else return;const g=new(Tm(x)?Nm:bm)(x,1);g.version=T;const _=c.get(y);_&&e.remove(_),c.set(y,g)}function v(y){const x=c.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:p,getWireframeAttribute:v}}function iS(o,e,n){let r;function a(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,S){o.drawElements(r,S,c,x*d),n.update(S,r,1)}function m(x,S,w){w!==0&&(o.drawElementsInstanced(r,S,c,x*d,w),n.update(S,r,w))}function v(x,S,w){if(w===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let g=0;g<w;g++)this.render(x[g]/d,S[g]);else{T.multiDrawElementsWEBGL(r,S,0,c,x,0,w);let g=0;for(let _=0;_<w;_++)g+=S[_];n.update(g,r,1)}}function y(x,S,w,T){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<x.length;_++)m(x[_]/d,S[_],T[_]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,T,0,w);let _=0;for(let b=0;b<w;b++)_+=S[b];for(let b=0;b<T.length;b++)n.update(_,r,T[b])}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function rS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=f*(c/3);break;case o.LINES:n.lines+=f*(c/2);break;case o.LINE_STRIP:n.lines+=f*(c-1);break;case o.LINE_LOOP:n.lines+=f*c;break;case o.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function sS(o,e,n){const r=new WeakMap,a=new en;function c(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let E=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let L=0;w===!0&&(L=1),T===!0&&(L=2),g===!0&&(L=3);let W=f.attributes.position.count*L,U=1;W>e.maxTextureSize&&(U=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const N=new Float32Array(W*U*4*y),V=new Am(N,W,U,y);V.type=or,V.needsUpdate=!0;const P=L*4;for(let Y=0;Y<y;Y++){const se=_[Y],H=b[Y],le=R[Y],ae=W*U*4*Y;for(let ve=0;ve<se.count;ve++){const fe=ve*P;w===!0&&(a.fromBufferAttribute(se,ve),N[ae+fe+0]=a.x,N[ae+fe+1]=a.y,N[ae+fe+2]=a.z,N[ae+fe+3]=0),T===!0&&(a.fromBufferAttribute(H,ve),N[ae+fe+4]=a.x,N[ae+fe+5]=a.y,N[ae+fe+6]=a.z,N[ae+fe+7]=0),g===!0&&(a.fromBufferAttribute(le,ve),N[ae+fe+8]=a.x,N[ae+fe+9]=a.y,N[ae+fe+10]=a.z,N[ae+fe+11]=le.itemSize===4?a.w:1)}}x={count:y,texture:V,size:new dt(W,U)},r.set(f,x),f.addEventListener("dispose",E)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const T=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function oS(o,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,y=e.get(p,v);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class zm extends Rn{constructor(e,n,r,a,c,d,f,p,m,v){if(v=v!==void 0?v:bs,v!==bs&&v!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===bs&&(r=Is),r===void 0&&v===Co&&(r=Po),super(null,a,c,d,f,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Gn,this.minFilter=p!==void 0?p:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const km=new Rn,Bm=new zm(1,1);Bm.compareFunction=Em;const Hm=new Am,Vm=new X_,Gm=new Im,jp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),$p=new Float32Array(4);function ks(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let c=jp[a];if(c===void 0&&(c=new Float32Array(a),jp[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,o[d].toArray(c,f)}return c}function Xt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function xl(o,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function aS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function lS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2fv(this.addr,e),qt(n,e)}}function cS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;o.uniform3fv(this.addr,e),qt(n,e)}}function uS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4fv(this.addr,e),qt(n,e)}}function dS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,r))return;$p.set(r),o.uniformMatrix2fv(this.addr,!1,$p),qt(n,r)}}function fS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,r))return;Yp.set(r),o.uniformMatrix3fv(this.addr,!1,Yp),qt(n,r)}}function hS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,r))return;qp.set(r),o.uniformMatrix4fv(this.addr,!1,qp),qt(n,r)}}function pS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function mS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2iv(this.addr,e),qt(n,e)}}function gS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;o.uniform3iv(this.addr,e),qt(n,e)}}function vS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4iv(this.addr,e),qt(n,e)}}function _S(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function xS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2uiv(this.addr,e),qt(n,e)}}function yS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;o.uniform3uiv(this.addr,e),qt(n,e)}}function SS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4uiv(this.addr,e),qt(n,e)}}function MS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const c=this.type===o.SAMPLER_2D_SHADOW?Bm:km;n.setTexture2D(e||c,a)}function ES(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Vm,a)}function TS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Gm,a)}function wS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Hm,a)}function AS(o){switch(o){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return xS;case 36295:return yS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return wS}}function RS(o,e){o.uniform1fv(this.addr,e)}function CS(o,e){const n=ks(e,this.size,2);o.uniform2fv(this.addr,n)}function PS(o,e){const n=ks(e,this.size,3);o.uniform3fv(this.addr,n)}function LS(o,e){const n=ks(e,this.size,4);o.uniform4fv(this.addr,n)}function bS(o,e){const n=ks(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function NS(o,e){const n=ks(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function DS(o,e){const n=ks(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function US(o,e){o.uniform1iv(this.addr,e)}function IS(o,e){o.uniform2iv(this.addr,e)}function FS(o,e){o.uniform3iv(this.addr,e)}function OS(o,e){o.uniform4iv(this.addr,e)}function zS(o,e){o.uniform1uiv(this.addr,e)}function kS(o,e){o.uniform2uiv(this.addr,e)}function BS(o,e){o.uniform3uiv(this.addr,e)}function HS(o,e){o.uniform4uiv(this.addr,e)}function VS(o,e,n){const r=this.cache,a=e.length,c=xl(n,a);Xt(r,c)||(o.uniform1iv(this.addr,c),qt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||km,c[d])}function GS(o,e,n){const r=this.cache,a=e.length,c=xl(n,a);Xt(r,c)||(o.uniform1iv(this.addr,c),qt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Vm,c[d])}function WS(o,e,n){const r=this.cache,a=e.length,c=xl(n,a);Xt(r,c)||(o.uniform1iv(this.addr,c),qt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Gm,c[d])}function jS(o,e,n){const r=this.cache,a=e.length,c=xl(n,a);Xt(r,c)||(o.uniform1iv(this.addr,c),qt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Hm,c[d])}function XS(o){switch(o){case 5126:return RS;case 35664:return CS;case 35665:return PS;case 35666:return LS;case 35674:return bS;case 35675:return NS;case 35676:return DS;case 5124:case 35670:return US;case 35667:case 35671:return IS;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return zS;case 36294:return kS;case 36295:return BS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return jS}}class qS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AS(n.type)}}class YS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XS(n.type)}}class $S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function Kp(o,e){o.seq.push(e),o.map[e.id]=e}function KS(o,e,n){const r=o.name,a=r.length;for(ku.lastIndex=0;;){const c=ku.exec(r),d=ku.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){Kp(n,m===void 0?new qS(f,o,e):new YS(f,o,e));break}else{let y=n.map[f];y===void 0&&(y=new $S(f),Kp(n,y)),n=y}}}class al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);KS(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Zp(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const ZS=37297;let QS=0;function JS(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function eM(o){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(o);let r;switch(e===n?r="":e===dl&&n===ul?r="LinearDisplayP3ToLinearSRGB":e===ul&&n===dl&&(r="LinearSRGBToLinearDisplayP3"),o){case fr:case gl:return[r,"LinearTransferOETF"];case ai:case ed:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Qp(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+JS(o.getShaderSource(e),d)}else return a}function tM(o,e){const n=eM(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nM(o,e){let n;switch(e){case u_:n="Linear";break;case d_:n="Reinhard";break;case f_:n="OptimizedCineon";break;case h_:n="ACESFilmic";break;case m_:n="AgX";break;case g_:n="Neutral";break;case p_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function rM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=o.getActiveAttrib(e,a),d=c.name;let f=1;c.type===o.FLOAT_MAT2&&(f=2),c.type===o.FLOAT_MAT3&&(f=3),c.type===o.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:f}}return n}function Ro(o){return o!==""}function Jp(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(o){return o.replace(oM,lM)}const aM=new Map;function lM(o,e){let n=rt[e];if(n===void 0){const r=aM.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ku(n)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(o){return o.replace(cM,uM)}function uM(o,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function nm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function pM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function mM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gM(o,e,n,r){const a=o.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=dM(n),m=fM(n),v=hM(n),y=pM(n),x=mM(n),S=iM(n),w=rM(c),T=a.createProgram();let g,_,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ro).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ro).join(`
`),_.length>0&&(_+=`
`)):(g=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),_=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?rt.tonemapping_pars_fragment:"",n.toneMapping!==lr?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),d=Ku(d),d=Jp(d,n),d=em(d,n),f=Ku(f),f=Jp(f,n),f=em(f,n),d=tm(d),f=tm(f),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=b+g+d,L=b+_+f,W=Zp(a,a.VERTEX_SHADER,R),U=Zp(a,a.FRAGMENT_SHADER,L);a.attachShader(T,W),a.attachShader(T,U),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function N(Y){if(o.debug.checkShaderErrors){const se=a.getProgramInfoLog(T).trim(),H=a.getShaderInfoLog(W).trim(),le=a.getShaderInfoLog(U).trim();let ae=!0,ve=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,W,U);else{const fe=Qp(a,W,"vertex"),k=Qp(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+se+`
`+fe+`
`+k)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(H===""||le==="")&&(ve=!1);ve&&(Y.diagnostics={runnable:ae,programLog:se,vertexShader:{log:H,prefix:g},fragmentShader:{log:le,prefix:_}})}a.deleteShader(W),a.deleteShader(U),V=new al(a,T),P=sM(a,T)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(T,ZS)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=U,this}let vM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xM(e),n.set(e,r)),r}}class xM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function yM(o,e,n,r,a,c,d){const f=new Cm,p=new _M,m=new Set,v=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function g(P,E,Y,se,H){const le=se.fog,ae=H.geometry,ve=P.isMeshStandardMaterial?se.environment:null,fe=(P.isMeshStandardMaterial?n:e).get(P.envMap||ve),k=fe&&fe.mapping===pl?fe.image.height:null,oe=w[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const Q=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,F=Q!==void 0?Q.length:0;let ie=0;ae.morphAttributes.position!==void 0&&(ie=1),ae.morphAttributes.normal!==void 0&&(ie=2),ae.morphAttributes.color!==void 0&&(ie=3);let be,K,ue,Se;if(oe){const mt=li[oe];be=mt.vertexShader,K=mt.fragmentShader}else be=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const ge=o.getRenderTarget(),Ue=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,X=!!P.map,xt=!!P.matcap,Xe=!!fe,_t=!!P.aoMap,qe=!!P.lightMap,ct=!!P.bumpMap,nt=!!P.normalMap,at=!!P.displacementMap,wt=!!P.emissiveMap,I=!!P.metalnessMap,A=!!P.roughnessMap,re=P.anisotropy>0,de=P.clearcoat>0,_e=P.dispersion>0,ye=P.iridescence>0,Ge=P.sheen>0,Ce=P.transmission>0,we=re&&!!P.anisotropyMap,Qe=de&&!!P.clearcoatMap,Ee=de&&!!P.clearcoatNormalMap,Ve=de&&!!P.clearcoatRoughnessMap,ot=ye&&!!P.iridescenceMap,Ye=ye&&!!P.iridescenceThicknessMap,Ne=Ge&&!!P.sheenColorMap,tt=Ge&&!!P.sheenRoughnessMap,ut=!!P.specularMap,At=!!P.specularColorMap,et=!!P.specularIntensityMap,G=Ce&&!!P.transmissionMap,he=Ce&&!!P.thicknessMap,ce=!!P.gradientMap,Te=!!P.alphaMap,Pe=P.alphaTest>0,ft=!!P.alphaHash,St=!!P.extensions;let Rt=lr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Rt=o.toneMapping);const Ht={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:be,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:ke,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:fr,alphaToCoverage:!!P.alphaToCoverage,map:X,matcap:xt,envMap:Xe,envMapMode:Xe&&fe.mapping,envMapCubeUVHeight:k,aoMap:_t,lightMap:qe,bumpMap:ct,normalMap:nt,displacementMap:x&&at,emissiveMap:wt,normalMapObjectSpace:nt&&P.normalMapType===L_,normalMapTangentSpace:nt&&P.normalMapType===Mm,metalnessMap:I,roughnessMap:A,anisotropy:re,anisotropyMap:we,clearcoat:de,clearcoatMap:Qe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:_e,iridescence:ye,iridescenceMap:ot,iridescenceThicknessMap:Ye,sheen:Ge,sheenColorMap:Ne,sheenRoughnessMap:tt,specularMap:ut,specularColorMap:At,specularIntensityMap:et,transmission:Ce,transmissionMap:G,thicknessMap:he,gradientMap:ce,opaque:P.transparent===!1&&P.blending===Ls&&P.alphaToCoverage===!1,alphaMap:Te,alphaTest:Pe,alphaHash:ft,combine:P.combine,mapUv:X&&T(P.map.channel),aoMapUv:_t&&T(P.aoMap.channel),lightMapUv:qe&&T(P.lightMap.channel),bumpMapUv:ct&&T(P.bumpMap.channel),normalMapUv:nt&&T(P.normalMap.channel),displacementMapUv:at&&T(P.displacementMap.channel),emissiveMapUv:wt&&T(P.emissiveMap.channel),metalnessMapUv:I&&T(P.metalnessMap.channel),roughnessMapUv:A&&T(P.roughnessMap.channel),anisotropyMapUv:we&&T(P.anisotropyMap.channel),clearcoatMapUv:Qe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:tt&&T(P.sheenRoughnessMap.channel),specularMapUv:ut&&T(P.specularMap.channel),specularColorMapUv:At&&T(P.specularColorMap.channel),specularIntensityMapUv:et&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:he&&T(P.thicknessMap.channel),alphaMapUv:Te&&T(P.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(nt||re),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(X||Te),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:Rt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:X&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Lt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Pi,flipSided:P.side===An,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:St&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&P.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(P){const E=[];if(P.shaderID?E.push(P.shaderID):(E.push(P.customVertexShaderID),E.push(P.customFragmentShaderID)),P.defines!==void 0)for(const Y in P.defines)E.push(Y),E.push(P.defines[Y]);return P.isRawShaderMaterial===!1&&(b(E,P),R(E,P),E.push(o.outputColorSpace)),E.push(P.customProgramCacheKey),E.join()}function b(P,E){P.push(E.precision),P.push(E.outputColorSpace),P.push(E.envMapMode),P.push(E.envMapCubeUVHeight),P.push(E.mapUv),P.push(E.alphaMapUv),P.push(E.lightMapUv),P.push(E.aoMapUv),P.push(E.bumpMapUv),P.push(E.normalMapUv),P.push(E.displacementMapUv),P.push(E.emissiveMapUv),P.push(E.metalnessMapUv),P.push(E.roughnessMapUv),P.push(E.anisotropyMapUv),P.push(E.clearcoatMapUv),P.push(E.clearcoatNormalMapUv),P.push(E.clearcoatRoughnessMapUv),P.push(E.iridescenceMapUv),P.push(E.iridescenceThicknessMapUv),P.push(E.sheenColorMapUv),P.push(E.sheenRoughnessMapUv),P.push(E.specularMapUv),P.push(E.specularColorMapUv),P.push(E.specularIntensityMapUv),P.push(E.transmissionMapUv),P.push(E.thicknessMapUv),P.push(E.combine),P.push(E.fogExp2),P.push(E.sizeAttenuation),P.push(E.morphTargetsCount),P.push(E.morphAttributeCount),P.push(E.numDirLights),P.push(E.numPointLights),P.push(E.numSpotLights),P.push(E.numSpotLightMaps),P.push(E.numHemiLights),P.push(E.numRectAreaLights),P.push(E.numDirLightShadows),P.push(E.numPointLightShadows),P.push(E.numSpotLightShadows),P.push(E.numSpotLightShadowsWithMaps),P.push(E.numLightProbes),P.push(E.shadowMapType),P.push(E.toneMapping),P.push(E.numClippingPlanes),P.push(E.numClipIntersection),P.push(E.depthPacking)}function R(P,E){f.disableAll(),E.supportsVertexTextures&&f.enable(0),E.instancing&&f.enable(1),E.instancingColor&&f.enable(2),E.instancingMorph&&f.enable(3),E.matcap&&f.enable(4),E.envMap&&f.enable(5),E.normalMapObjectSpace&&f.enable(6),E.normalMapTangentSpace&&f.enable(7),E.clearcoat&&f.enable(8),E.iridescence&&f.enable(9),E.alphaTest&&f.enable(10),E.vertexColors&&f.enable(11),E.vertexAlphas&&f.enable(12),E.vertexUv1s&&f.enable(13),E.vertexUv2s&&f.enable(14),E.vertexUv3s&&f.enable(15),E.vertexTangents&&f.enable(16),E.anisotropy&&f.enable(17),E.alphaHash&&f.enable(18),E.batching&&f.enable(19),E.dispersion&&f.enable(20),P.push(f.mask),f.disableAll(),E.fog&&f.enable(0),E.useFog&&f.enable(1),E.flatShading&&f.enable(2),E.logarithmicDepthBuffer&&f.enable(3),E.skinning&&f.enable(4),E.morphTargets&&f.enable(5),E.morphNormals&&f.enable(6),E.morphColors&&f.enable(7),E.premultipliedAlpha&&f.enable(8),E.shadowMapEnabled&&f.enable(9),E.useLegacyLights&&f.enable(10),E.doubleSided&&f.enable(11),E.flipSided&&f.enable(12),E.useDepthPacking&&f.enable(13),E.dithering&&f.enable(14),E.transmission&&f.enable(15),E.sheen&&f.enable(16),E.opaque&&f.enable(17),E.pointsUvs&&f.enable(18),E.decodeVideoTexture&&f.enable(19),E.alphaToCoverage&&f.enable(20),P.push(f.mask)}function L(P){const E=w[P.type];let Y;if(E){const se=li[E];Y=r0.clone(se.uniforms)}else Y=P.uniforms;return Y}function W(P,E){let Y;for(let se=0,H=v.length;se<H;se++){const le=v[se];if(le.cacheKey===E){Y=le,++Y.usedTimes;break}}return Y===void 0&&(Y=new gM(o,E,P,c),v.push(Y)),Y}function U(P){if(--P.usedTimes===0){const E=v.indexOf(P);v[E]=v[v.length-1],v.pop(),P.destroy()}}function N(P){p.remove(P)}function V(){p.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:L,acquireProgram:W,releaseProgram:U,releaseShaderCache:N,programs:v,dispose:V}}function SM(){let o=new WeakMap;function e(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function n(c){o.delete(c)}function r(c,d,f){o.get(c)[d]=f}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function MM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function im(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function rm(){const o=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,S,w,T,g){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:T,group:g},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=T,_.group=g),e++,_}function f(y,x,S,w,T,g){const _=d(y,x,S,w,T,g);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function p(y,x,S,w,T,g){const _=d(y,x,S,w,T,g);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||MM),r.length>1&&r.sort(x||im),a.length>1&&a.sort(x||im)}function v(){for(let y=e,x=o.length;y<x;y++){const S=o[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:v,sort:m}}function EM(){let o=new WeakMap;function e(r,a){const c=o.get(r);let d;return c===void 0?(d=new rm,o.set(r,[d])):a>=c.length?(d=new rm,c.push(d)):d=c[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function TM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new vt};break;case"SpotLight":n={position:new $,direction:new $,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=n,n}}}function wM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let AM=0;function RM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CM(o){const e=new TM,n=wM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,c=new Ft,d=new Ft;function f(m,v){let y=0,x=0,S=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let w=0,T=0,g=0,_=0,b=0,R=0,L=0,W=0,U=0,N=0,V=0;m.sort(RM);const P=v===!0?Math.PI:1;for(let Y=0,se=m.length;Y<se;Y++){const H=m[Y],le=H.color,ae=H.intensity,ve=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=le.r*ae*P,x+=le.g*ae*P,S+=le.b*ae*P;else if(H.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(H.sh.coefficients[k],ae);V++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*P),H.castShadow){const oe=H.shadow,Q=n.get(H);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,r.directionalShadow[w]=Q,r.directionalShadowMap[w]=fe,r.directionalShadowMatrix[w]=H.shadow.matrix,R++}r.directional[w]=k,w++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(le).multiplyScalar(ae*P),k.distance=ve,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,r.spot[g]=k;const oe=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,oe.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[g]=oe.matrix,H.castShadow){const Q=n.get(H);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,r.spotShadow[g]=Q,r.spotShadowMap[g]=fe,W++}g++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(le).multiplyScalar(ae),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=k,_++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*P),k.distance=H.distance,k.decay=H.decay,H.castShadow){const oe=H.shadow,Q=n.get(H);Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,r.pointShadow[T]=Q,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=H.shadow.matrix,L++}r.point[T]=k,T++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(ae*P),k.groundColor.copy(H.groundColor).multiplyScalar(ae*P),r.hemi[b]=k,b++}}_>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=S;const E=r.hash;(E.directionalLength!==w||E.pointLength!==T||E.spotLength!==g||E.rectAreaLength!==_||E.hemiLength!==b||E.numDirectionalShadows!==R||E.numPointShadows!==L||E.numSpotShadows!==W||E.numSpotMaps!==U||E.numLightProbes!==V)&&(r.directional.length=w,r.spot.length=g,r.rectArea.length=_,r.point.length=T,r.hemi.length=b,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=W,r.spotShadowMap.length=W,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=W+U-N,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=V,E.directionalLength=w,E.pointLength=T,E.spotLength=g,E.rectAreaLength=_,E.hemiLength=b,E.numDirectionalShadows=R,E.numPointShadows=L,E.numSpotShadows=W,E.numSpotMaps=U,E.numLightProbes=V,r.version=AM++)}function p(m,v){let y=0,x=0,S=0,w=0,T=0;const g=v.matrixWorldInverse;for(let _=0,b=m.length;_<b;_++){const R=m[_];if(R.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),y++}else if(R.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),S++}else if(R.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),d.identity(),c.copy(R.matrixWorld),c.premultiply(g),d.extractRotation(c),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),w++}else if(R.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),x++}else if(R.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(g),T++}}}return{setup:f,setupView:p,state:r}}function sm(o){const e=new CM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function f(v){e.setup(n,v)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function PM(o){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new sm(o),e.set(a,[f])):c>=d.length?(f=new sm(o),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class LM extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`;function UM(o,e,n){let r=new td;const a=new dt,c=new dt,d=new en,f=new LM({depthPacking:P_}),p=new bM,m={},v=n.maxTextureSize,y={[cr]:An,[An]:cr,[Pi]:Pi},x=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:NM,fragmentShader:DM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Wn;w.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new di(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let _=this.type;this.render=function(U,N,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const P=o.getRenderTarget(),E=o.getActiveCubeFace(),Y=o.getActiveMipmapLevel(),se=o.state;se.setBlending(ar),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const H=_!==Ci&&this.type===Ci,le=_===Ci&&this.type!==Ci;for(let ae=0,ve=U.length;ae<ve;ae++){const fe=U[ae],k=fe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const oe=k.getFrameExtents();if(a.multiply(oe),c.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/oe.x),a.x=c.x*oe.x,k.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/oe.y),a.y=c.y*oe.y,k.mapSize.y=c.y)),k.map===null||H===!0||le===!0){const F=this.type!==Ci?{minFilter:Gn,magFilter:Gn}:{};k.map!==null&&k.map.dispose(),k.map=new kr(a.x,a.y,F),k.map.texture.name=fe.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Q=k.getViewportCount();for(let F=0;F<Q;F++){const ie=k.getViewport(F);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),se.viewport(d),k.updateMatrices(fe,F),r=k.getFrustum(),L(N,V,k.camera,fe,this.type)}k.isPointLightShadow!==!0&&this.type===Ci&&b(k,V),k.needsUpdate=!1}_=this.type,g.needsUpdate=!1,o.setRenderTarget(P,E,Y)};function b(U,N){const V=e.update(T);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new kr(a.x,a.y)),x.uniforms.shadow_pass.value=U.map.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(N,null,V,x,T,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(N,null,V,S,T,null)}function R(U,N,V,P){let E=null;const Y=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Y!==void 0)E=Y;else if(E=V.isPointLight===!0?p:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const se=E.uuid,H=N.uuid;let le=m[se];le===void 0&&(le={},m[se]=le);let ae=le[H];ae===void 0&&(ae=E.clone(),le[H]=ae,N.addEventListener("dispose",W)),E=ae}if(E.visible=N.visible,E.wireframe=N.wireframe,P===Ci?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:y[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const se=o.properties.get(E);se.light=V}return E}function L(U,N,V,P,E){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&E===Ci)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);const H=e.update(U),le=U.material;if(Array.isArray(le)){const ae=H.groups;for(let ve=0,fe=ae.length;ve<fe;ve++){const k=ae[ve],oe=le[k.materialIndex];if(oe&&oe.visible){const Q=R(U,oe,P,E);U.onBeforeShadow(o,U,N,V,H,Q,k),o.renderBufferDirect(V,null,H,Q,U,k),U.onAfterShadow(o,U,N,V,H,Q,k)}}}else if(le.visible){const ae=R(U,le,P,E);U.onBeforeShadow(o,U,N,V,H,ae,null),o.renderBufferDirect(V,null,H,ae,U,null),U.onAfterShadow(o,U,N,V,H,ae,null)}}const se=U.children;for(let H=0,le=se.length;H<le;H++)L(se[H],N,V,P,E)}function W(U){U.target.removeEventListener("dispose",W);for(const V in m){const P=m[V],E=U.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function IM(o){function e(){let G=!1;const he=new en;let ce=null;const Te=new en(0,0,0,0);return{setMask:function(Pe){ce!==Pe&&!G&&(o.colorMask(Pe,Pe,Pe,Pe),ce=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,ft,St,Rt,Ht){Ht===!0&&(Pe*=Rt,ft*=Rt,St*=Rt),he.set(Pe,ft,St,Rt),Te.equals(he)===!1&&(o.clearColor(Pe,ft,St,Rt),Te.copy(he))},reset:function(){G=!1,ce=null,Te.set(-1,0,0,0)}}}function n(){let G=!1,he=null,ce=null,Te=null;return{setTest:function(Pe){Pe?Se(o.DEPTH_TEST):ge(o.DEPTH_TEST)},setMask:function(Pe){he!==Pe&&!G&&(o.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(ce!==Pe){switch(Pe){case t_:o.depthFunc(o.NEVER);break;case n_:o.depthFunc(o.ALWAYS);break;case i_:o.depthFunc(o.LESS);break;case ll:o.depthFunc(o.LEQUAL);break;case r_:o.depthFunc(o.EQUAL);break;case s_:o.depthFunc(o.GEQUAL);break;case o_:o.depthFunc(o.GREATER);break;case a_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ce=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Te!==Pe&&(o.clearDepth(Pe),Te=Pe)},reset:function(){G=!1,he=null,ce=null,Te=null}}}function r(){let G=!1,he=null,ce=null,Te=null,Pe=null,ft=null,St=null,Rt=null,Ht=null;return{setTest:function(mt){G||(mt?Se(o.STENCIL_TEST):ge(o.STENCIL_TEST))},setMask:function(mt){he!==mt&&!G&&(o.stencilMask(mt),he=mt)},setFunc:function(mt,vn,Yt){(ce!==mt||Te!==vn||Pe!==Yt)&&(o.stencilFunc(mt,vn,Yt),ce=mt,Te=vn,Pe=Yt)},setOp:function(mt,vn,Yt){(ft!==mt||St!==vn||Rt!==Yt)&&(o.stencilOp(mt,vn,Yt),ft=mt,St=vn,Rt=Yt)},setLocked:function(mt){G=mt},setClear:function(mt){Ht!==mt&&(o.clearStencil(mt),Ht=mt)},reset:function(){G=!1,he=null,ce=null,Te=null,Pe=null,ft=null,St=null,Rt=null,Ht=null}}}const a=new e,c=new n,d=new r,f=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,x=[],S=null,w=!1,T=null,g=null,_=null,b=null,R=null,L=null,W=null,U=new vt(0,0,0),N=0,V=!1,P=null,E=null,Y=null,se=null,H=null;const le=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ve=0;const fe=o.getParameter(o.VERSION);fe.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ae=ve>=1):fe.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ae=ve>=2);let k=null,oe={};const Q=o.getParameter(o.SCISSOR_BOX),F=o.getParameter(o.VIEWPORT),ie=new en().fromArray(Q),be=new en().fromArray(F);function K(G,he,ce,Te){const Pe=new Uint8Array(4),ft=o.createTexture();o.bindTexture(G,ft),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let St=0;St<ce;St++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(he,0,o.RGBA,1,1,Te,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(he+St,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return ft}const ue={};ue[o.TEXTURE_2D]=K(o.TEXTURE_2D,o.TEXTURE_2D,1),ue[o.TEXTURE_CUBE_MAP]=K(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[o.TEXTURE_2D_ARRAY]=K(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ue[o.TEXTURE_3D]=K(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Se(o.DEPTH_TEST),c.setFunc(ll),ct(!1),nt(Bh),Se(o.CULL_FACE),_t(ar);function Se(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function ge(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function Ue(G,he){return v[G]!==he?(o.bindFramebuffer(G,he),v[G]=he,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=he),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=he),!0):!1}function ke(G,he){let ce=x,Te=!1;if(G){ce=y.get(he),ce===void 0&&(ce=[],y.set(he,ce));const Pe=G.textures;if(ce.length!==Pe.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let ft=0,St=Pe.length;ft<St;ft++)ce[ft]=o.COLOR_ATTACHMENT0+ft;ce.length=Pe.length,Te=!0}}else ce[0]!==o.BACK&&(ce[0]=o.BACK,Te=!0);Te&&o.drawBuffers(ce)}function X(G){return S!==G?(o.useProgram(G),S=G,!0):!1}const xt={[Ir]:o.FUNC_ADD,[zv]:o.FUNC_SUBTRACT,[kv]:o.FUNC_REVERSE_SUBTRACT};xt[Bv]=o.MIN,xt[Hv]=o.MAX;const Xe={[Vv]:o.ZERO,[Gv]:o.ONE,[Wv]:o.SRC_COLOR,[Gu]:o.SRC_ALPHA,[Kv]:o.SRC_ALPHA_SATURATE,[Yv]:o.DST_COLOR,[Xv]:o.DST_ALPHA,[jv]:o.ONE_MINUS_SRC_COLOR,[Wu]:o.ONE_MINUS_SRC_ALPHA,[$v]:o.ONE_MINUS_DST_COLOR,[qv]:o.ONE_MINUS_DST_ALPHA,[Zv]:o.CONSTANT_COLOR,[Qv]:o.ONE_MINUS_CONSTANT_COLOR,[Jv]:o.CONSTANT_ALPHA,[e_]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(G,he,ce,Te,Pe,ft,St,Rt,Ht,mt){if(G===ar){w===!0&&(ge(o.BLEND),w=!1);return}if(w===!1&&(Se(o.BLEND),w=!0),G!==Ov){if(G!==T||mt!==V){if((g!==Ir||R!==Ir)&&(o.blendEquation(o.FUNC_ADD),g=Ir,R=Ir),mt)switch(G){case Ls:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hh:o.blendFunc(o.ONE,o.ONE);break;case Vh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ls:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Vh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,b=null,L=null,W=null,U.set(0,0,0),N=0,T=G,V=mt}return}Pe=Pe||he,ft=ft||ce,St=St||Te,(he!==g||Pe!==R)&&(o.blendEquationSeparate(xt[he],xt[Pe]),g=he,R=Pe),(ce!==_||Te!==b||ft!==L||St!==W)&&(o.blendFuncSeparate(Xe[ce],Xe[Te],Xe[ft],Xe[St]),_=ce,b=Te,L=ft,W=St),(Rt.equals(U)===!1||Ht!==N)&&(o.blendColor(Rt.r,Rt.g,Rt.b,Ht),U.copy(Rt),N=Ht),T=G,V=!1}function qe(G,he){G.side===Pi?ge(o.CULL_FACE):Se(o.CULL_FACE);let ce=G.side===An;he&&(ce=!ce),ct(ce),G.blending===Ls&&G.transparent===!1?_t(ar):_t(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Te=G.stencilWrite;d.setTest(Te),Te&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):ge(o.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){P!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),P=G)}function nt(G){G!==Uv?(Se(o.CULL_FACE),G!==E&&(G===Bh?o.cullFace(o.BACK):G===Iv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ge(o.CULL_FACE),E=G}function at(G){G!==Y&&(ae&&o.lineWidth(G),Y=G)}function wt(G,he,ce){G?(Se(o.POLYGON_OFFSET_FILL),(se!==he||H!==ce)&&(o.polygonOffset(he,ce),se=he,H=ce)):ge(o.POLYGON_OFFSET_FILL)}function I(G){G?Se(o.SCISSOR_TEST):ge(o.SCISSOR_TEST)}function A(G){G===void 0&&(G=o.TEXTURE0+le-1),k!==G&&(o.activeTexture(G),k=G)}function re(G,he,ce){ce===void 0&&(k===null?ce=o.TEXTURE0+le-1:ce=k);let Te=oe[ce];Te===void 0&&(Te={type:void 0,texture:void 0},oe[ce]=Te),(Te.type!==G||Te.texture!==he)&&(k!==ce&&(o.activeTexture(ce),k=ce),o.bindTexture(G,he||ue[G]),Te.type=G,Te.texture=he)}function de(){const G=oe[k];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){ie.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function tt(G){be.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function ut(G,he){let ce=p.get(he);ce===void 0&&(ce=new WeakMap,p.set(he,ce));let Te=ce.get(G);Te===void 0&&(Te=o.getUniformBlockIndex(he,G.name),ce.set(G,Te))}function At(G,he){const Te=p.get(he).get(G);f.get(he)!==Te&&(o.uniformBlockBinding(he,Te,G.__bindingPointIndex),f.set(he,Te))}function et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},k=null,oe={},v={},y=new WeakMap,x=[],S=null,w=!1,T=null,g=null,_=null,b=null,R=null,L=null,W=null,U=new vt(0,0,0),N=0,V=!1,P=null,E=null,Y=null,se=null,H=null,ie.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:Se,disable:ge,bindFramebuffer:Ue,drawBuffers:ke,useProgram:X,setBlending:_t,setMaterial:qe,setFlipSided:ct,setCullFace:nt,setLineWidth:at,setPolygonOffset:wt,setScissorTest:I,activeTexture:A,bindTexture:re,unbindTexture:de,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:ot,texImage3D:Ye,updateUBOMapping:ut,uniformBlockBinding:At,texStorage2D:Ee,texStorage3D:Ve,texSubImage2D:Ge,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Qe,scissor:Ne,viewport:tt,reset:et}}function FM(o,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,v=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,A){return S?new OffscreenCanvas(I,A):hl("canvas")}function T(I,A,re){let de=1;const _e=wt(I);if((_e.width>re||_e.height>re)&&(de=re/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ye=Math.floor(de*_e.width),Ge=Math.floor(de*_e.height);y===void 0&&(y=w(ye,Ge));const Ce=A?w(ye,Ge):y;return Ce.width=ye,Ce.height=Ge,Ce.getContext("2d").drawImage(I,0,0,ye,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ye+"x"+Ge+")."),Ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Gn&&I.minFilter!==ti}function _(I){o.generateMipmap(I)}function b(I,A,re,de,_e=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye=A;if(A===o.RED&&(re===o.FLOAT&&(ye=o.R32F),re===o.HALF_FLOAT&&(ye=o.R16F),re===o.UNSIGNED_BYTE&&(ye=o.R8)),A===o.RED_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.R8UI),re===o.UNSIGNED_SHORT&&(ye=o.R16UI),re===o.UNSIGNED_INT&&(ye=o.R32UI),re===o.BYTE&&(ye=o.R8I),re===o.SHORT&&(ye=o.R16I),re===o.INT&&(ye=o.R32I)),A===o.RG&&(re===o.FLOAT&&(ye=o.RG32F),re===o.HALF_FLOAT&&(ye=o.RG16F),re===o.UNSIGNED_BYTE&&(ye=o.RG8)),A===o.RG_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RG8UI),re===o.UNSIGNED_SHORT&&(ye=o.RG16UI),re===o.UNSIGNED_INT&&(ye=o.RG32UI),re===o.BYTE&&(ye=o.RG8I),re===o.SHORT&&(ye=o.RG16I),re===o.INT&&(ye=o.RG32I)),A===o.RGB&&re===o.UNSIGNED_INT_5_9_9_9_REV&&(ye=o.RGB9_E5),A===o.RGBA){const Ge=_e?cl:Mt.getTransfer(de);re===o.FLOAT&&(ye=o.RGBA32F),re===o.HALF_FLOAT&&(ye=o.RGBA16F),re===o.UNSIGNED_BYTE&&(ye=Ge===Lt?o.SRGB8_ALPHA8:o.RGBA8),re===o.UNSIGNED_SHORT_4_4_4_4&&(ye=o.RGBA4),re===o.UNSIGNED_SHORT_5_5_5_1&&(ye=o.RGB5_A1)}return(ye===o.R16F||ye===o.R32F||ye===o.RG16F||ye===o.RG32F||ye===o.RGBA16F||ye===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function R(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gn&&I.minFilter!==ti?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function L(I){const A=I.target;A.removeEventListener("dispose",L),U(A),A.isVideoTexture&&v.delete(A)}function W(I){const A=I.target;A.removeEventListener("dispose",W),V(A)}function U(I){const A=r.get(I);if(A.__webglInit===void 0)return;const re=I.source,de=x.get(re);if(de){const _e=de[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&N(I),Object.keys(de).length===0&&x.delete(re)}r.remove(I)}function N(I){const A=r.get(I);o.deleteTexture(A.__webglTexture);const re=I.source,de=x.get(re);delete de[A.__cacheKey],d.memory.textures--}function V(I){const A=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let _e=0;_e<A.__webglFramebuffer[de].length;_e++)o.deleteFramebuffer(A.__webglFramebuffer[de][_e]);else o.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)o.deleteFramebuffer(A.__webglFramebuffer[de]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=I.textures;for(let de=0,_e=re.length;de<_e;de++){const ye=r.get(re[de]);ye.__webglTexture&&(o.deleteTexture(ye.__webglTexture),d.memory.textures--),r.remove(re[de])}r.remove(I)}let P=0;function E(){P=0}function Y(){const I=P;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),P+=1,I}function se(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function H(I,A){const re=r.get(I);if(I.isVideoTexture&&nt(I),I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){const de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(re,I,A);return}}n.bindTexture(o.TEXTURE_2D,re.__webglTexture,o.TEXTURE0+A)}function le(I,A){const re=r.get(I);if(I.version>0&&re.__version!==I.version){ie(re,I,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,re.__webglTexture,o.TEXTURE0+A)}function ae(I,A){const re=r.get(I);if(I.version>0&&re.__version!==I.version){ie(re,I,A);return}n.bindTexture(o.TEXTURE_3D,re.__webglTexture,o.TEXTURE0+A)}function ve(I,A){const re=r.get(I);if(I.version>0&&re.__version!==I.version){be(re,I,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture,o.TEXTURE0+A)}const fe={[qu]:o.REPEAT,[Or]:o.CLAMP_TO_EDGE,[Yu]:o.MIRRORED_REPEAT},k={[Gn]:o.NEAREST,[v_]:o.NEAREST_MIPMAP_NEAREST,[Fa]:o.NEAREST_MIPMAP_LINEAR,[ti]:o.LINEAR,[lu]:o.LINEAR_MIPMAP_NEAREST,[zr]:o.LINEAR_MIPMAP_LINEAR},oe={[b_]:o.NEVER,[O_]:o.ALWAYS,[N_]:o.LESS,[Em]:o.LEQUAL,[D_]:o.EQUAL,[F_]:o.GEQUAL,[U_]:o.GREATER,[I_]:o.NOTEQUAL};function Q(I,A){if(A.type===or&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ti||A.magFilter===lu||A.magFilter===Fa||A.magFilter===zr||A.minFilter===ti||A.minFilter===lu||A.minFilter===Fa||A.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,fe[A.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,fe[A.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,fe[A.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,k[A.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,k[A.minFilter]),A.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Gn||A.minFilter!==Fa&&A.minFilter!==zr||A.type===or&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function F(I,A){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",L));const de=A.source;let _e=x.get(de);_e===void 0&&(_e={},x.set(de,_e));const ye=se(A);if(ye!==I.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,re=!0),_e[ye].usedTimes++;const Ge=_e[I.__cacheKey];Ge!==void 0&&(_e[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&N(A)),I.__cacheKey=ye,I.__webglTexture=_e[ye].texture}return re}function ie(I,A,re){let de=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=o.TEXTURE_3D);const _e=F(I,A),ye=A.source;n.bindTexture(de,I.__webglTexture,o.TEXTURE0+re);const Ge=r.get(ye);if(ye.version!==Ge.__version||_e===!0){n.activeTexture(o.TEXTURE0+re);const Ce=Mt.getPrimaries(Mt.workingColorSpace),we=A.colorSpace===sr?null:Mt.getPrimaries(A.colorSpace),Qe=A.colorSpace===sr||Ce===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ee=T(A.image,!1,a.maxTextureSize);Ee=at(A,Ee);const Ve=c.convert(A.format,A.colorSpace),ot=c.convert(A.type);let Ye=b(A.internalFormat,Ve,ot,A.colorSpace,A.isVideoTexture);Q(de,A);let Ne;const tt=A.mipmaps,ut=A.isVideoTexture!==!0,At=Ge.__version===void 0||_e===!0,et=ye.dataReady,G=R(A,Ee);if(A.isDepthTexture)Ye=o.DEPTH_COMPONENT16,A.type===or?Ye=o.DEPTH_COMPONENT32F:A.type===Is?Ye=o.DEPTH_COMPONENT24:A.type===Po&&(Ye=o.DEPTH24_STENCIL8),At&&(ut?n.texStorage2D(o.TEXTURE_2D,1,Ye,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Ve,ot,null));else if(A.isDataTexture)if(tt.length>0){ut&&At&&n.texStorage2D(o.TEXTURE_2D,G,Ye,tt[0].width,tt[0].height);for(let he=0,ce=tt.length;he<ce;he++)Ne=tt[he],ut?et&&n.texSubImage2D(o.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,ot,Ne.data):n.texImage2D(o.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ve,ot,Ne.data);A.generateMipmaps=!1}else ut?(At&&n.texStorage2D(o.TEXTURE_2D,G,Ye,Ee.width,Ee.height),et&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ve,ot,Ee.data)):n.texImage2D(o.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Ve,ot,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,G,Ye,tt[0].width,tt[0].height,Ee.depth);for(let he=0,ce=tt.length;he<ce;he++)Ne=tt[he],A.format!==ui?Ve!==null?ut?et&&n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,Ee.depth,Ve,Ne.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Ye,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?et&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,Ee.depth,Ve,ot,Ne.data):n.texImage3D(o.TEXTURE_2D_ARRAY,he,Ye,Ne.width,Ne.height,Ee.depth,0,Ve,ot,Ne.data)}else{ut&&At&&n.texStorage2D(o.TEXTURE_2D,G,Ye,tt[0].width,tt[0].height);for(let he=0,ce=tt.length;he<ce;he++)Ne=tt[he],A.format!==ui?Ve!==null?ut?et&&n.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,Ne.data):n.compressedTexImage2D(o.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?et&&n.texSubImage2D(o.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,ot,Ne.data):n.texImage2D(o.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ve,ot,Ne.data)}else if(A.isDataArrayTexture)ut?(At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,G,Ye,Ee.width,Ee.height,Ee.depth),et&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,ot,Ee.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,Ee.width,Ee.height,Ee.depth,0,Ve,ot,Ee.data);else if(A.isData3DTexture)ut?(At&&n.texStorage3D(o.TEXTURE_3D,G,Ye,Ee.width,Ee.height,Ee.depth),et&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,ot,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,Ye,Ee.width,Ee.height,Ee.depth,0,Ve,ot,Ee.data);else if(A.isFramebufferTexture){if(At)if(ut)n.texStorage2D(o.TEXTURE_2D,G,Ye,Ee.width,Ee.height);else{let he=Ee.width,ce=Ee.height;for(let Te=0;Te<G;Te++)n.texImage2D(o.TEXTURE_2D,Te,Ye,he,ce,0,Ve,ot,null),he>>=1,ce>>=1}}else if(tt.length>0){if(ut&&At){const he=wt(tt[0]);n.texStorage2D(o.TEXTURE_2D,G,Ye,he.width,he.height)}for(let he=0,ce=tt.length;he<ce;he++)Ne=tt[he],ut?et&&n.texSubImage2D(o.TEXTURE_2D,he,0,0,Ve,ot,Ne):n.texImage2D(o.TEXTURE_2D,he,Ye,Ve,ot,Ne);A.generateMipmaps=!1}else if(ut){if(At){const he=wt(Ee);n.texStorage2D(o.TEXTURE_2D,G,Ye,he.width,he.height)}et&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ve,ot,Ee)}else n.texImage2D(o.TEXTURE_2D,0,Ye,Ve,ot,Ee);g(A)&&_(de),Ge.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function be(I,A,re){if(A.image.length!==6)return;const de=F(I,A),_e=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+re);const ye=r.get(_e);if(_e.version!==ye.__version||de===!0){n.activeTexture(o.TEXTURE0+re);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Ce=A.colorSpace===sr?null:Mt.getPrimaries(A.colorSpace),we=A.colorSpace===sr||Ge===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Qe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Ve=[];for(let ce=0;ce<6;ce++)!Qe&&!Ee?Ve[ce]=T(A.image[ce],!0,a.maxCubemapSize):Ve[ce]=Ee?A.image[ce].image:A.image[ce],Ve[ce]=at(A,Ve[ce]);const ot=Ve[0],Ye=c.convert(A.format,A.colorSpace),Ne=c.convert(A.type),tt=b(A.internalFormat,Ye,Ne,A.colorSpace),ut=A.isVideoTexture!==!0,At=ye.__version===void 0||de===!0,et=_e.dataReady;let G=R(A,ot);Q(o.TEXTURE_CUBE_MAP,A);let he;if(Qe){ut&&At&&n.texStorage2D(o.TEXTURE_CUBE_MAP,G,tt,ot.width,ot.height);for(let ce=0;ce<6;ce++){he=Ve[ce].mipmaps;for(let Te=0;Te<he.length;Te++){const Pe=he[Te];A.format!==ui?Ye!==null?ut?et&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Pe.width,Pe.height,Ye,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,tt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Pe.width,Pe.height,Ye,Ne,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,tt,Pe.width,Pe.height,0,Ye,Ne,Pe.data)}}}else{if(he=A.mipmaps,ut&&At){he.length>0&&G++;const ce=wt(Ve[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,G,tt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ee){ut?et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve[ce].width,Ve[ce].height,Ye,Ne,Ve[ce].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,tt,Ve[ce].width,Ve[ce].height,0,Ye,Ne,Ve[ce].data);for(let Te=0;Te<he.length;Te++){const ft=he[Te].image[ce].image;ut?et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,ft.width,ft.height,Ye,Ne,ft.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,tt,ft.width,ft.height,0,Ye,Ne,ft.data)}}else{ut?et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ye,Ne,Ve[ce]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,tt,Ye,Ne,Ve[ce]);for(let Te=0;Te<he.length;Te++){const Pe=he[Te];ut?et&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,Ye,Ne,Pe.image[ce]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,tt,Ye,Ne,Pe.image[ce])}}}g(A)&&_(o.TEXTURE_CUBE_MAP),ye.__version=_e.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function K(I,A,re,de,_e,ye){const Ge=c.convert(re.format,re.colorSpace),Ce=c.convert(re.type),we=b(re.internalFormat,Ge,Ce,re.colorSpace);if(!r.get(A).__hasExternalTextures){const Ee=Math.max(1,A.width>>ye),Ve=Math.max(1,A.height>>ye);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,ye,we,Ee,Ve,A.depth,0,Ge,Ce,null):n.texImage2D(_e,ye,we,Ee,Ve,0,Ge,Ce,null)}n.bindFramebuffer(o.FRAMEBUFFER,I),ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,_e,r.get(re).__webglTexture,0,qe(A)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,_e,r.get(re).__webglTexture,ye),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(I,A,re){if(o.bindRenderbuffer(o.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let de=o.DEPTH_COMPONENT24;if(re||ct(A)){const _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===or?de=o.DEPTH_COMPONENT32F:_e.type===Is&&(de=o.DEPTH_COMPONENT24));const ye=qe(A);ct(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,de,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,de,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,de,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){const de=qe(A);re&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,o.DEPTH24_STENCIL8,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,I)}else{const de=A.textures;for(let _e=0;_e<de.length;_e++){const ye=de[_e],Ge=c.convert(ye.format,ye.colorSpace),Ce=c.convert(ye.type),we=b(ye.internalFormat,Ge,Ce,ye.colorSpace),Qe=qe(A);re&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,we,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qe,we,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,we,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Se(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const de=r.get(A.depthTexture).__webglTexture,_e=qe(A);if(A.depthTexture.format===bs)ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0);else if(A.depthTexture.format===Co)ct(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ge(I){const A=r.get(I),re=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Se(A.__webglFramebuffer,I)}else if(re){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=o.createRenderbuffer(),ue(A.__webglDepthbuffer[de],I,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),ue(A.__webglDepthbuffer,I,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(I,A,re){const de=r.get(I);A!==void 0&&K(de.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),re!==void 0&&ge(I)}function ke(I){const A=I.texture,re=r.get(I),de=r.get(A);I.addEventListener("dispose",W);const _e=I.textures,ye=I.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=A.version,d.memory.textures++),ye){re.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Ce]=[];for(let we=0;we<A.mipmaps.length;we++)re.__webglFramebuffer[Ce][we]=o.createFramebuffer()}else re.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)re.__webglFramebuffer[Ce]=o.createFramebuffer()}else re.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let Ce=0,we=_e.length;Ce<we;Ce++){const Qe=r.get(_e[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&ct(I)===!1){re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const we=_e[Ce];re.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,re.__webglColorRenderbuffer[Ce]);const Qe=c.convert(we.format,we.colorSpace),Ee=c.convert(we.type),Ve=b(we.internalFormat,Qe,Ee,we.colorSpace,I.isXRRenderTarget===!0),ot=qe(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,Ve,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,re.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),ue(re.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ye){n.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),Q(o.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)K(re.__webglFramebuffer[Ce][we],I,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,we);else K(re.__webglFramebuffer[Ce],I,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);g(A)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ce=0,we=_e.length;Ce<we;Ce++){const Qe=_e[Ce],Ee=r.get(Qe);n.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),Q(o.TEXTURE_2D,Qe),K(re.__webglFramebuffer,I,Qe,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),g(Qe)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ce,de.__webglTexture),Q(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)K(re.__webglFramebuffer[we],I,A,o.COLOR_ATTACHMENT0,Ce,we);else K(re.__webglFramebuffer,I,A,o.COLOR_ATTACHMENT0,Ce,0);g(A)&&_(Ce),n.unbindTexture()}I.depthBuffer&&ge(I)}function X(I){const A=I.textures;for(let re=0,de=A.length;re<de;re++){const _e=A[re];if(g(_e)){const ye=I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ge=r.get(_e).__webglTexture;n.bindTexture(ye,Ge),_(ye),n.unbindTexture()}}}const xt=[],Xe=[];function _t(I){if(I.samples>0){if(ct(I)===!1){const A=I.textures,re=I.width,de=I.height;let _e=o.COLOR_BUFFER_BIT;const ye=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=r.get(I),Ce=A.length>1;if(Ce)for(let we=0;we<A.length;we++)n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let we=0;we<A.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[we]);const Qe=r.get(A[we]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Qe,0)}o.blitFramebuffer(0,0,re,de,0,0,re,de,_e,o.NEAREST),p===!0&&(xt.length=0,Xe.length=0,xt.push(o.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(ye),Xe.push(ye),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let we=0;we<A.length;we++){n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[we]);const Qe=r.get(A[we]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,Qe,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function qe(I){return Math.min(a.maxSamples,I.samples)}function ct(I){const A=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(I){const A=d.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function at(I,A){const re=I.colorSpace,de=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==fr&&re!==sr&&(Mt.getTransfer(re)===Lt?(de!==ui||_e!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=ve,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ct}function OM(o,e){function n(r,a=sr){let c;const d=Mt.getTransfer(a);if(r===ur)return o.UNSIGNED_BYTE;if(r===vm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_m)return o.UNSIGNED_SHORT_5_5_5_1;if(r===y_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===__)return o.BYTE;if(r===x_)return o.SHORT;if(r===mm)return o.UNSIGNED_SHORT;if(r===gm)return o.INT;if(r===Is)return o.UNSIGNED_INT;if(r===or)return o.FLOAT;if(r===ml)return o.HALF_FLOAT;if(r===S_)return o.ALPHA;if(r===M_)return o.RGB;if(r===ui)return o.RGBA;if(r===E_)return o.LUMINANCE;if(r===T_)return o.LUMINANCE_ALPHA;if(r===bs)return o.DEPTH_COMPONENT;if(r===Co)return o.DEPTH_STENCIL;if(r===w_)return o.RED;if(r===xm)return o.RED_INTEGER;if(r===A_)return o.RG;if(r===ym)return o.RG_INTEGER;if(r===Sm)return o.RGBA_INTEGER;if(r===cu||r===uu||r===du||r===fu)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===jh||r===Xh||r===qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh||r===$h||r===Kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Yh||r===$h)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Kh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zh||r===Qh||r===Jh||r===ep||r===tp||r===np||r===ip||r===rp||r===sp||r===op||r===ap||r===lp||r===cp||r===up)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Zh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ep)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tp)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===np)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ip)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rp)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sp)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===op)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ap)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lp)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cp)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===up)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hu||r===dp||r===fp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===hu)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===R_||r===hp||r===pp||r===mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===hu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class zM extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rl extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const g=n.getJointPose(T,r),_=this._getHandJoint(m,T);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,a=new dr({vertexShader:BM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new di(new _l(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class GM extends Os{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",p=1,m=null,v=null,y=null,x=null,S=null,w=null;const T=new VM,g=n.getContextAttributes();let _=null,b=null;const R=[],L=[],W=new dt;let U=null;const N=new Vn;N.layers.enable(1),N.viewport=new en;const V=new Vn;V.layers.enable(2),V.viewport=new en;const P=[N,V],E=new zM;E.layers.enable(1),E.layers.enable(2);let Y=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=R[K];return ue===void 0&&(ue=new Bu,R[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=R[K];return ue===void 0&&(ue=new Bu,R[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=R[K];return ue===void 0&&(ue=new Bu,R[K]=ue),ue.getHandSpace()};function H(K){const ue=L.indexOf(K.inputSource);if(ue===-1)return;const Se=R[ue];Se!==void 0&&(Se.update(K.inputSource,K.frame,m||d),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function le(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ae);for(let K=0;K<R.length;K++){const ue=L[K];ue!==null&&(L[K]=null,R[K].disconnect(ue))}Y=null,se=null,T.reset(),e.setRenderTarget(_),S=null,x=null,y=null,a=null,b=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new kr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Se=null,ge=null;g.depth&&(ge=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?Co:bs,Se=g.stencil?Po:Is);const Ue={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new kr(x.textureWidth,x.textureHeight,{format:ui,type:ur,depthTexture:new zm(x.textureWidth,x.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),be.setContext(a),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ae(K){for(let ue=0;ue<K.removed.length;ue++){const Se=K.removed[ue],ge=L.indexOf(Se);ge>=0&&(L[ge]=null,R[ge].disconnect(Se))}for(let ue=0;ue<K.added.length;ue++){const Se=K.added[ue];let ge=L.indexOf(Se);if(ge===-1){for(let ke=0;ke<R.length;ke++)if(ke>=L.length){L.push(Se),ge=ke;break}else if(L[ke]===null){L[ke]=Se,ge=ke;break}if(ge===-1)break}const Ue=R[ge];Ue&&Ue.connect(Se)}}const ve=new $,fe=new $;function k(K,ue,Se){ve.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const ge=ve.distanceTo(fe),Ue=ue.projectionMatrix.elements,ke=Se.projectionMatrix.elements,X=Ue[14]/(Ue[10]-1),xt=Ue[14]/(Ue[10]+1),Xe=(Ue[9]+1)/Ue[5],_t=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],ct=(ke[8]+1)/ke[0],nt=X*qe,at=X*ct,wt=ge/(-qe+ct),I=wt*-qe;ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(I),K.translateZ(wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=X+wt,re=xt+wt,de=nt-I,_e=at+(ge-I),ye=Xe*xt/re*A,Ge=_t*xt/re*A;K.projectionMatrix.makePerspective(de,_e,ye,Ge,A,re),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function oe(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;T.texture!==null&&(K.near=T.depthNear,K.far=T.depthFar),E.near=V.near=N.near=K.near,E.far=V.far=N.far=K.far,(Y!==E.near||se!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),Y=E.near,se=E.far,N.near=Y,N.far=se,V.near=Y,V.far=se,N.updateProjectionMatrix(),V.updateProjectionMatrix(),K.updateProjectionMatrix());const ue=K.parent,Se=E.cameras;oe(E,ue);for(let ge=0;ge<Se.length;ge++)oe(Se[ge],ue);Se.length===2?k(E,N,V):E.projectionMatrix.copy(N.projectionMatrix),Q(K,E,ue)};function Q(K,ue,Se){Se===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$u*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null};let F=null;function ie(K,ue){if(v=ue.getViewerPose(m||d),w=ue,v!==null){const Se=v.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let ge=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,ge=!0);for(let ke=0;ke<Se.length;ke++){const X=Se[ke];let xt=null;if(S!==null)xt=S.getViewport(X);else{const _t=y.getViewSubImage(x,X);xt=_t.viewport,ke===0&&(e.setRenderTargetTextures(b,_t.colorTexture,x.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(b))}let Xe=P[ke];Xe===void 0&&(Xe=new Vn,Xe.layers.enable(ke),Xe.viewport=new en,P[ke]=Xe),Xe.matrix.fromArray(X.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(X.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(xt.x,xt.y,xt.width,xt.height),ke===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ge===!0&&E.cameras.push(Xe)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ke=y.getDepthInformation(Se[0]);ke&&ke.isValid&&ke.texture&&T.init(e,ke,a.renderState)}}for(let Se=0;Se<R.length;Se++){const ge=L[Se],Ue=R[Se];ge!==null&&Ue!==void 0&&Ue.update(ge,ue,m||d)}T.render(e,E),F&&F(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const be=new Fm;be.setAnimationLoop(ie),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}}const Nr=new fi,WM=new Ft;function jM(o,e){function n(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function r(g,_){_.color.getRGB(g.fogColor.value,Dm(o)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function a(g,_,b,R,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(g,_):_.isMeshToonMaterial?(c(g,_),y(g,_)):_.isMeshPhongMaterial?(c(g,_),v(g,_)):_.isMeshStandardMaterial?(c(g,_),x(g,_),_.isMeshPhysicalMaterial&&S(g,_,L)):_.isMeshMatcapMaterial?(c(g,_),w(g,_)):_.isMeshDepthMaterial?c(g,_):_.isMeshDistanceMaterial?(c(g,_),T(g,_)):_.isMeshNormalMaterial?c(g,_):_.isLineBasicMaterial?(d(g,_),_.isLineDashedMaterial&&f(g,_)):_.isPointsMaterial?p(g,_,b,R):_.isSpriteMaterial?m(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,n(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===An&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,n(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===An&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,n(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,n(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const b=e.get(_),R=b.envMap,L=b.envMapRotation;if(R&&(g.envMap.value=R,Nr.copy(L),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(Nr)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const W=o._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*W,n(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,g.aoMapTransform))}function d(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform))}function f(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function p(g,_,b,R){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*b,g.scale.value=R*.5,_.map&&(g.map.value=_.map,n(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function v(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function y(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function x(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function S(g,_,b){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function T(g,_){const b=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XM(o,e,n,r){let a={},c={},d=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,R){const L=R.program;r.uniformBlockBinding(b,L)}function m(b,R){let L=a[b.id];L===void 0&&(w(b),L=v(b),a[b.id]=L,b.addEventListener("dispose",g));const W=R.program;r.updateUBOMapping(b,W);const U=e.render.frame;c[b.id]!==U&&(x(b),c[b.id]=U)}function v(b){const R=y();b.__bindingPointIndex=R;const L=o.createBuffer(),W=b.__size,U=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,W,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,L),L}function y(){for(let b=0;b<f;b++)if(d.indexOf(b)===-1)return d.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const R=a[b.id],L=b.uniforms,W=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let U=0,N=L.length;U<N;U++){const V=Array.isArray(L[U])?L[U]:[L[U]];for(let P=0,E=V.length;P<E;P++){const Y=V[P];if(S(Y,U,P,W)===!0){const se=Y.__offset,H=Array.isArray(Y.value)?Y.value:[Y.value];let le=0;for(let ae=0;ae<H.length;ae++){const ve=H[ae],fe=T(ve);typeof ve=="number"||typeof ve=="boolean"?(Y.__data[0]=ve,o.bufferSubData(o.UNIFORM_BUFFER,se+le,Y.__data)):ve.isMatrix3?(Y.__data[0]=ve.elements[0],Y.__data[1]=ve.elements[1],Y.__data[2]=ve.elements[2],Y.__data[3]=0,Y.__data[4]=ve.elements[3],Y.__data[5]=ve.elements[4],Y.__data[6]=ve.elements[5],Y.__data[7]=0,Y.__data[8]=ve.elements[6],Y.__data[9]=ve.elements[7],Y.__data[10]=ve.elements[8],Y.__data[11]=0):(ve.toArray(Y.__data,le),le+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,Y.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(b,R,L,W){const U=b.value,N=R+"_"+L;if(W[N]===void 0)return typeof U=="number"||typeof U=="boolean"?W[N]=U:W[N]=U.clone(),!0;{const V=W[N];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return W[N]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function w(b){const R=b.uniforms;let L=0;const W=16;for(let N=0,V=R.length;N<V;N++){const P=Array.isArray(R[N])?R[N]:[R[N]];for(let E=0,Y=P.length;E<Y;E++){const se=P[E],H=Array.isArray(se.value)?se.value:[se.value];for(let le=0,ae=H.length;le<ae;le++){const ve=H[le],fe=T(ve),k=L%W;k!==0&&W-k<fe.boundary&&(L+=W-k),se.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=fe.storage}}}const U=L%W;return U>0&&(L+=W-U),b.__size=L,b.__cache={},this}function T(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function g(b){const R=b.target;R.removeEventListener("dispose",g);const L=d.indexOf(R.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(a[R.id]),delete a[R.id],delete c[R.id]}function _(){for(const b in a)o.deleteBuffer(a[b]);d=[],a={},c={}}return{bind:p,update:m,dispose:_}}class qM{constructor(e={}){const{canvas:n=k_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const S=new Uint32Array(4),w=new Int32Array(4);let T=null,g=null;const _=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const R=this;let L=!1,W=0,U=0,N=null,V=-1,P=null;const E=new en,Y=new en;let se=null;const H=new vt(0);let le=0,ae=n.width,ve=n.height,fe=1,k=null,oe=null;const Q=new en(0,0,ae,ve),F=new en(0,0,ae,ve);let ie=!1;const be=new td;let K=!1,ue=!1;const Se=new Ft,ge=new $,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return N===null?fe:1}let X=r;function xt(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ju}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ce,!1),X===null){const j="webgl2";if(X=xt(j,C),X===null)throw xt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,_t,qe,ct,nt,at,wt,I,A,re,de,_e,ye,Ge,Ce,we,Qe,Ee,Ve,ot,Ye,Ne,tt,ut;function At(){Xe=new tS(X),Xe.init(),Ne=new OM(X,Xe),_t=new $y(X,Xe,e,Ne),qe=new IM(X),ct=new rS(X),nt=new SM,at=new FM(X,Xe,qe,nt,_t,Ne,ct),wt=new Zy(R),I=new eS(R),A=new d0(X),tt=new qy(X,A),re=new nS(X,A,ct,tt),de=new oS(X,re,A,ct),Ve=new sS(X,_t,at),we=new Ky(nt),_e=new yM(R,wt,I,Xe,_t,tt,we),ye=new jM(R,nt),Ge=new EM,Ce=new PM(Xe),Ee=new Xy(R,wt,I,qe,de,x,p),Qe=new UM(R,de,_t),ut=new XM(X,ct,_t,qe),ot=new Yy(X,Xe,ct),Ye=new iS(X,Xe,ct),ct.programs=_e.programs,R.capabilities=_t,R.extensions=Xe,R.properties=nt,R.renderLists=Ge,R.shadowMap=Qe,R.state=qe,R.info=ct}At();const et=new GM(R,X);this.xr=et,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ae,ve,!1))},this.getSize=function(C){return C.set(ae,ve)},this.setSize=function(C,j,ne=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,ve=j,n.width=Math.floor(C*fe),n.height=Math.floor(j*fe),ne===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ae*fe,ve*fe).floor()},this.setDrawingBufferSize=function(C,j,ne){ae=C,ve=j,fe=ne,n.width=Math.floor(C*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,j,ne,ee){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,j,ne,ee),qe.viewport(E.copy(Q).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,j,ne,ee){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,j,ne,ee),qe.scissor(Y.copy(F).multiplyScalar(fe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){qe.setScissorTest(ie=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,j=!0,ne=!0){let ee=0;if(C){let J=!1;if(N!==null){const Ae=N.texture.format;J=Ae===Sm||Ae===ym||Ae===xm}if(J){const Ae=N.texture.type,ze=Ae===ur||Ae===Is||Ae===mm||Ae===Po||Ae===vm||Ae===_m,He=Ee.getClearColor(),$e=Ee.getClearAlpha(),Je=He.r,Fe=He.g,it=He.b;ze?(S[0]=Je,S[1]=Fe,S[2]=it,S[3]=$e,X.clearBufferuiv(X.COLOR,0,S)):(w[0]=Je,w[1]=Fe,w[2]=it,w[3]=$e,X.clearBufferiv(X.COLOR,0,w))}else ee|=X.COLOR_BUFFER_BIT}j&&(ee|=X.DEPTH_BUFFER_BIT),ne&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Ge.dispose(),Ce.dispose(),nt.dispose(),wt.dispose(),I.dispose(),de.dispose(),tt.dispose(),ut.dispose(),_e.dispose(),et.dispose(),et.removeEventListener("sessionstart",mt),et.removeEventListener("sessionend",vn),Yt.stop()};function G(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=ct.autoReset,j=Qe.enabled,ne=Qe.autoUpdate,ee=Qe.needsUpdate,J=Qe.type;At(),ct.autoReset=C,Qe.enabled=j,Qe.autoUpdate=ne,Qe.needsUpdate=ee,Qe.type=J}function ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){const j=C.target;j.removeEventListener("dispose",Te),Pe(j)}function Pe(C){ft(C),nt.remove(C)}function ft(C){const j=nt.get(C).programs;j!==void 0&&(j.forEach(function(ne){_e.releaseProgram(ne)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ne,ee,J,Ae){j===null&&(j=Ue);const ze=J.isMesh&&J.matrixWorld.determinant()<0,He=Sl(C,j,ne,ee,J);qe.setMaterial(ee,ze);let $e=ne.index,Je=1;if(ee.wireframe===!0){if($e=re.getWireframeAttribute(ne),$e===void 0)return;Je=2}const Fe=ne.drawRange,it=ne.attributes.position;let bt=Fe.start*Je,Vt=(Fe.start+Fe.count)*Je;Ae!==null&&(bt=Math.max(bt,Ae.start*Je),Vt=Math.min(Vt,(Ae.start+Ae.count)*Je)),$e!==null?(bt=Math.max(bt,0),Vt=Math.min(Vt,$e.count)):it!=null&&(bt=Math.max(bt,0),Vt=Math.min(Vt,it.count));const $t=Vt-bt;if($t<0||$t===1/0)return;tt.setup(J,ee,He,ne,$e);let jn,ht=ot;if($e!==null&&(jn=A.get($e),ht=Ye,ht.setIndex(jn)),J.isMesh)ee.wireframe===!0?(qe.setLineWidth(ee.wireframeLinewidth*ke()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if(J.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*ke()),J.isLineSegments?ht.setMode(X.LINES):J.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else J.isPoints?ht.setMode(X.POINTS):J.isSprite&&ht.setMode(X.TRIANGLES);if(J.isBatchedMesh)J._multiDrawInstances!==null?ht.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances):ht.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)ht.renderInstances(bt,$t,J.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,on=Math.min(ne.instanceCount,Ke);ht.renderInstances(bt,$t,on)}else ht.render(bt,$t)};function St(C,j,ne){C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,hi(C,j,ne),C.side=cr,C.needsUpdate=!0,hi(C,j,ne),C.side=Pi):hi(C,j,ne)}this.compile=function(C,j,ne=null){ne===null&&(ne=C),g=Ce.get(ne),g.init(j),b.push(g),ne.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),C!==ne&&C.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(R._useLegacyLights);const ee=new Set;return C.traverse(function(J){const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){const He=Ae[ze];St(He,ne,J),ee.add(He)}else St(Ae,ne,J),ee.add(Ae)}),b.pop(),g=null,ee},this.compileAsync=function(C,j,ne=null){const ee=this.compile(C,j,ne);return new Promise(J=>{function Ae(){if(ee.forEach(function(ze){nt.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){J(C);return}setTimeout(Ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rt=null;function Ht(C){Rt&&Rt(C)}function mt(){Yt.stop()}function vn(){Yt.start()}const Yt=new Fm;Yt.setAnimationLoop(Ht),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(C){Rt=C,et.setAnimationLoop(C),C===null?Yt.stop():Yt.start()},et.addEventListener("sessionstart",mt),et.addEventListener("sessionend",vn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(j),j=et.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,N),g=Ce.get(C,b.length),g.init(j),b.push(g),Se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,K=we.init(this.clippingPlanes,ue),T=Ge.get(C,_.length),T.init(),_.push(T),bi(C,j,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(k,oe);const ne=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1;ne&&Ee.addToRenderList(T,C),this.info.render.frame++,K===!0&&we.beginShadows();const ee=g.state.shadowsArray;Qe.render(ee,C,j),K===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=T.opaque,Ae=T.transmissive;if(g.setupLights(R._useLegacyLights),j.isArrayCamera){const ze=j.cameras;if(Ae.length>0)for(let He=0,$e=ze.length;He<$e;He++){const Je=ze[He];Ni(J,Ae,C,Je)}ne&&Ee.render(C);for(let He=0,$e=ze.length;He<$e;He++){const Je=ze[He];Br(T,C,Je,Je.viewport)}}else Ae.length>0&&Ni(J,Ae,C,j),ne&&Ee.render(C),Br(T,C,j);N!==null&&(at.updateMultisampleRenderTarget(N),at.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(R,C,j),tt.resetDefaultState(),V=-1,P=null,b.pop(),b.length>0?(g=b[b.length-1],K===!0&&we.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function bi(C,j,ne,ee){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||be.intersectsSprite(C)){ee&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const ze=de.update(C),He=C.material;He.visible&&T.push(C,ze,He,ne,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||be.intersectsObject(C))){const ze=de.update(C),He=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ge.copy(ze.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(He)){const $e=ze.groups;for(let Je=0,Fe=$e.length;Je<Fe;Je++){const it=$e[Je],bt=He[it.materialIndex];bt&&bt.visible&&T.push(C,ze,bt,ne,ge.z,it)}}else He.visible&&T.push(C,ze,He,ne,ge.z,null)}}const Ae=C.children;for(let ze=0,He=Ae.length;ze<He;ze++)bi(Ae[ze],j,ne,ee)}function Br(C,j,ne,ee){const J=C.opaque,Ae=C.transmissive,ze=C.transparent;g.setupLightsView(ne),K===!0&&we.setGlobalState(R.clippingPlanes,ne),ee&&qe.viewport(E.copy(ee)),J.length>0&&Hr(J,j,ne),Ae.length>0&&Hr(Ae,j,ne),ze.length>0&&Hr(ze,j,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Ni(C,j,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new kr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?ml:ur,minFilter:zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ae=g.state.transmissionRenderTarget[ee.id],ze=ee.viewport||E;Ae.setSize(ze.z,ze.w);const He=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(H),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear();const $e=R.toneMapping;R.toneMapping=lr;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),K===!0&&we.setGlobalState(R.clippingPlanes,ee),Hr(C,ne,ee),at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let it=0,bt=j.length;it<bt;it++){const Vt=j[it],$t=Vt.object,jn=Vt.geometry,ht=Vt.material,Ke=Vt.group;if(ht.side===Pi&&$t.layers.test(ee.layers)){const on=ht.side;ht.side=An,ht.needsUpdate=!0,Di($t,ne,ee,jn,ht,Ke),ht.side=on,ht.needsUpdate=!0,Fe=!0}}Fe===!0&&(at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae))}R.setRenderTarget(He),R.setClearColor(H,le),Je!==void 0&&(ee.viewport=Je),R.toneMapping=$e}function Hr(C,j,ne){const ee=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ae=C.length;J<Ae;J++){const ze=C[J],He=ze.object,$e=ze.geometry,Je=ee===null?ze.material:ee,Fe=ze.group;He.layers.test(ne.layers)&&Di(He,j,ne,$e,Je,Fe)}}function Di(C,j,ne,ee,J,Ae){C.onBeforeRender(R,j,ne,ee,J,Ae),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(R,j,ne,ee,C,Ae),J.transparent===!0&&J.side===Pi&&J.forceSinglePass===!1?(J.side=An,J.needsUpdate=!0,R.renderBufferDirect(ne,j,ee,J,C,Ae),J.side=cr,J.needsUpdate=!0,R.renderBufferDirect(ne,j,ee,J,C,Ae),J.side=Pi):R.renderBufferDirect(ne,j,ee,J,C,Ae),C.onAfterRender(R,j,ne,ee,J,Ae)}function hi(C,j,ne){j.isScene!==!0&&(j=Ue);const ee=nt.get(C),J=g.state.lights,Ae=g.state.shadowsArray,ze=J.state.version,He=_e.getParameters(C,J.state,Ae,j,ne),$e=_e.getProgramCacheKey(He);let Je=ee.programs;ee.environment=C.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(C.isMeshStandardMaterial?I:wt).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",Te),Je=new Map,ee.programs=Je);let Fe=Je.get($e);if(Fe!==void 0){if(ee.currentProgram===Fe&&ee.lightsStateVersion===ze)return Vr(C,He),Fe}else He.uniforms=_e.getUniforms(C),C.onBuild(ne,He,R),C.onBeforeCompile(He,R),Fe=_e.acquireProgram(He,$e),Je.set($e,Fe),ee.uniforms=He.uniforms;const it=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=we.uniform),Vr(C,He),ee.needsLights=El(C),ee.lightsStateVersion=ze,ee.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=Fe,ee.uniformsList=null,Fe}function hr(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=al.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Vr(C,j){const ne=nt.get(C);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Sl(C,j,ne,ee,J){j.isScene!==!0&&(j=Ue),at.resetTextureUnits();const Ae=j.fog,ze=ee.isMeshStandardMaterial?j.environment:null,He=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fr,$e=(ee.isMeshStandardMaterial?I:wt).get(ee.envMap||ze),Je=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Fe=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),it=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,Vt=!!ne.morphAttributes.color;let $t=lr;ee.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($t=R.toneMapping);const jn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ht=jn!==void 0?jn.length:0,Ke=nt.get(ee),on=g.state.lights;if(K===!0&&(ue===!0||C!==P)){const tn=C===P&&ee.id===V;we.setState(ee,C,tn)}let Et=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==on.state.version||Ke.outputColorSpace!==He||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==$e||ee.fog===!0&&Ke.fog!==Ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==Fe||Ke.morphTargets!==it||Ke.morphNormals!==bt||Ke.morphColors!==Vt||Ke.toneMapping!==$t||Ke.morphTargetsCount!==ht)&&(Et=!0):(Et=!0,Ke.__version=ee.version);let Gt=Ke.currentProgram;Et===!0&&(Gt=hi(ee,j,J));let Uo=!1,pr=!1,Bs=!1;const Ot=Gt.getUniforms(),Cn=Ke.uniforms;if(qe.useProgram(Gt.program)&&(Uo=!0,pr=!0,Bs=!0),ee.id!==V&&(V=ee.id,pr=!0),Uo||P!==C){Ot.setValue(X,"projectionMatrix",C.projectionMatrix),Ot.setValue(X,"viewMatrix",C.matrixWorldInverse);const tn=Ot.map.cameraPosition;tn!==void 0&&tn.setValue(X,ge.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,pr=!0,Bs=!0)}if(J.isSkinnedMesh){Ot.setOptional(X,J,"bindMatrix"),Ot.setOptional(X,J,"bindMatrixInverse");const tn=J.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ot.setValue(X,"boneTexture",tn.boneTexture,at))}J.isBatchedMesh&&(Ot.setOptional(X,J,"batchingTexture"),Ot.setValue(X,"batchingTexture",J._matricesTexture,at));const pi=ne.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Ve.update(J,ne,Gt),(pr||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,Ot.setValue(X,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Cn.envMap.value=$e,Cn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),pr&&(Ot.setValue(X,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&Ml(Cn,Bs),Ae&&ee.fog===!0&&ye.refreshFogUniforms(Cn,Ae),ye.refreshMaterialUniforms(Cn,ee,fe,ve,g.state.transmissionRenderTarget[C.id]),al.upload(X,hr(Ke),Cn,at)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(al.upload(X,hr(Ke),Cn,at),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ot.setValue(X,"center",J.center),Ot.setValue(X,"modelViewMatrix",J.modelViewMatrix),Ot.setValue(X,"normalMatrix",J.normalMatrix),Ot.setValue(X,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const tn=ee.uniformsGroups;for(let Hs=0,Tl=tn.length;Hs<Tl;Hs++){const Gr=tn[Hs];ut.update(Gr,Gt),ut.bind(Gr,Gt)}}return Gt}function Ml(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function El(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,j,ne){nt.get(C.texture).__webglTexture=j,nt.get(C.depthTexture).__webglTexture=ne;const ee=nt.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=ne===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const ne=nt.get(C);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ne=0){N=C,W=j,U=ne;let ee=!0,J=null,Ae=!1,ze=!1;if(C){const $e=nt.get(C);$e.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1):$e.__webglFramebuffer===void 0?at.setupRenderTarget(C):$e.__hasExternalTextures&&at.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const Fe=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[j])?J=Fe[j][ne]:J=Fe[j],Ae=!0):C.samples>0&&at.useMultisampledRTT(C)===!1?J=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?J=Fe[ne]:J=Fe,E.copy(C.viewport),Y.copy(C.scissor),se=C.scissorTest}else E.copy(Q).multiplyScalar(fe).floor(),Y.copy(F).multiplyScalar(fe).floor(),se=ie;if(qe.bindFramebuffer(X.FRAMEBUFFER,J)&&ee&&qe.drawBuffers(C,J),qe.viewport(E),qe.scissor(Y),qe.setScissorTest(se),Ae){const $e=nt.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,$e.__webglTexture,ne)}else if(ze){const $e=nt.get(C.texture),Je=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,ne||0,Je)}V=-1},this.readRenderTargetPixels=function(C,j,ne,ee,J,Ae,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){qe.bindFramebuffer(X.FRAMEBUFFER,He);try{const $e=C.texture,Je=$e.format,Fe=$e.type;if(!_t.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ee&&ne>=0&&ne<=C.height-J&&X.readPixels(j,ne,ee,J,Ne.convert(Je),Ne.convert(Fe),Ae)}finally{const $e=N!==null?nt.get(N).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(C,j,ne=0){const ee=Math.pow(2,-ne),J=Math.floor(j.image.width*ee),Ae=Math.floor(j.image.height*ee);at.setTexture2D(j,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,C.x,C.y,J,Ae),qe.unbindTexture()},this.copyTextureToTexture=function(C,j,ne,ee=0){const J=j.image.width,Ae=j.image.height,ze=Ne.convert(ne.format),He=Ne.convert(ne.type);at.setTexture2D(ne,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ne.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ee,C.x,C.y,J,Ae,ze,He,j.image.data):j.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ee,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,ze,j.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ee,C.x,C.y,ze,He,j.image),ee===0&&ne.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ne,ee,J=0){const Ae=C.max.x-C.min.x,ze=C.max.y-C.min.y,He=C.max.z-C.min.z,$e=Ne.convert(ee.format),Je=Ne.convert(ee.type);let Fe;if(ee.isData3DTexture)at.setTexture3D(ee,0),Fe=X.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)at.setTexture2DArray(ee,0),Fe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment);const it=X.getParameter(X.UNPACK_ROW_LENGTH),bt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Vt=X.getParameter(X.UNPACK_SKIP_PIXELS),$t=X.getParameter(X.UNPACK_SKIP_ROWS),jn=X.getParameter(X.UNPACK_SKIP_IMAGES),ht=ne.isCompressedTexture?ne.mipmaps[J]:ne.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,ht.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?X.texSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ze,He,$e,Je,ht.data):ee.isCompressedArrayTexture?X.compressedTexSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ze,He,$e,ht.data):X.texSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ze,He,$e,Je,ht),X.pixelStorei(X.UNPACK_ROW_LENGTH,it),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Vt),X.pixelStorei(X.UNPACK_SKIP_ROWS,$t),X.pixelStorei(X.UNPACK_SKIP_IMAGES,jn),J===0&&ee.generateMipmaps&&X.generateMipmap(Fe),qe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){W=0,U=0,N=null,qe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ed?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===gl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class YM extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Wm extends zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new Ft,Zu=new Rm,sl=new vl,ol=new $;class $M extends sn{constructor(e=new Wn,n=new Wm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(a),sl.radius+=c,e.ray.intersectsSphere(sl)===!1)return;om.copy(a).invert(),Zu.copy(e.ray).applyMatrix4(om);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let w=x,T=S;w<T;w++){const g=m.getX(w);ol.fromBufferAttribute(y,g),am(ol,g,p,a,e,n,this)}}else{const x=Math.max(0,d.start),S=Math.min(y.count,d.start+d.count);for(let w=x,T=S;w<T;w++)ol.fromBufferAttribute(y,w),am(ol,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function am(o,e,n,r,a,c,d){const f=Zu.distanceSqToPoint(o);if(f<n){const p=new $;Zu.closestPointToPoint(o,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,object:d})}}class yl extends Wn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],d=[];f(a),m(r),v(),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(c.slice(),3)),this.setAttribute("uv",new hn(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const R=new $,L=new $,W=new $;for(let U=0;U<n.length;U+=3)S(n[U+0],R),S(n[U+1],L),S(n[U+2],W),p(R,L,W,b)}function p(b,R,L,W){const U=W+1,N=[];for(let V=0;V<=U;V++){N[V]=[];const P=b.clone().lerp(L,V/U),E=R.clone().lerp(L,V/U),Y=U-V;for(let se=0;se<=Y;se++)se===0&&V===U?N[V][se]=P:N[V][se]=P.clone().lerp(E,se/Y)}for(let V=0;V<U;V++)for(let P=0;P<2*(U-V)-1;P++){const E=Math.floor(P/2);P%2===0?(x(N[V][E+1]),x(N[V+1][E]),x(N[V][E])):(x(N[V][E+1]),x(N[V+1][E+1]),x(N[V+1][E]))}}function m(b){const R=new $;for(let L=0;L<c.length;L+=3)R.x=c[L+0],R.y=c[L+1],R.z=c[L+2],R.normalize().multiplyScalar(b),c[L+0]=R.x,c[L+1]=R.y,c[L+2]=R.z}function v(){const b=new $;for(let R=0;R<c.length;R+=3){b.x=c[R+0],b.y=c[R+1],b.z=c[R+2];const L=g(b)/2/Math.PI+.5,W=_(b)/Math.PI+.5;d.push(L,1-W)}w(),y()}function y(){for(let b=0;b<d.length;b+=6){const R=d[b+0],L=d[b+2],W=d[b+4],U=Math.max(R,L,W),N=Math.min(R,L,W);U>.9&&N<.1&&(R<.2&&(d[b+0]+=1),L<.2&&(d[b+2]+=1),W<.2&&(d[b+4]+=1))}}function x(b){c.push(b.x,b.y,b.z)}function S(b,R){const L=b*3;R.x=e[L+0],R.y=e[L+1],R.z=e[L+2]}function w(){const b=new $,R=new $,L=new $,W=new $,U=new dt,N=new dt,V=new dt;for(let P=0,E=0;P<c.length;P+=9,E+=6){b.set(c[P+0],c[P+1],c[P+2]),R.set(c[P+3],c[P+4],c[P+5]),L.set(c[P+6],c[P+7],c[P+8]),U.set(d[E+0],d[E+1]),N.set(d[E+2],d[E+3]),V.set(d[E+4],d[E+5]),W.copy(b).add(R).add(L).divideScalar(3);const Y=g(W);T(U,E+0,b,Y),T(N,E+2,R,Y),T(V,E+4,L,Y)}}function T(b,R,L,W){W<0&&b.x===1&&(d[R]=b.x-1),L.x===0&&L.z===0&&(d[R]=W/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.vertices,e.indices,e.radius,e.details)}}class id extends yl{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new id(e.radius,e.detail)}}class rd extends yl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new rd(e.radius,e.detail)}}class sd extends Wn{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const d=[],f=[],p=[],m=[],v=new $,y=new $,x=new $;for(let S=0;S<=r;S++)for(let w=0;w<=a;w++){const T=w/a*c,g=S/r*Math.PI*2;y.x=(e+n*Math.cos(g))*Math.cos(T),y.y=(e+n*Math.cos(g))*Math.sin(T),y.z=n*Math.sin(g),f.push(y.x,y.y,y.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),x.subVectors(y,v).normalize(),p.push(x.x,x.y,x.z),m.push(w/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let w=1;w<=a;w++){const T=(a+1)*S+w-1,g=(a+1)*(S-1)+w-1,_=(a+1)*(S-1)+w,b=(a+1)*S+w;d.push(T,g,b),d.push(g,_,b)}this.setIndex(d),this.setAttribute("position",new hn(f,3)),this.setAttribute("normal",new hn(p,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class od extends Wn{constructor(e=1,n=.4,r=64,a=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:a,p:c,q:d},r=Math.floor(r),a=Math.floor(a);const f=[],p=[],m=[],v=[],y=new $,x=new $,S=new $,w=new $,T=new $,g=new $,_=new $;for(let R=0;R<=r;++R){const L=R/r*c*Math.PI*2;b(L,c,d,e,S),b(L+.01,c,d,e,w),g.subVectors(w,S),_.addVectors(w,S),T.crossVectors(g,_),_.crossVectors(T,g),T.normalize(),_.normalize();for(let W=0;W<=a;++W){const U=W/a*Math.PI*2,N=-n*Math.cos(U),V=n*Math.sin(U);y.x=S.x+(N*_.x+V*T.x),y.y=S.y+(N*_.y+V*T.y),y.z=S.z+(N*_.z+V*T.z),p.push(y.x,y.y,y.z),x.subVectors(y,S).normalize(),m.push(x.x,x.y,x.z),v.push(R/r),v.push(W/a)}}for(let R=1;R<=r;R++)for(let L=1;L<=a;L++){const W=(a+1)*(R-1)+(L-1),U=(a+1)*R+(L-1),N=(a+1)*R+L,V=(a+1)*(R-1)+L;f.push(W,U,V),f.push(U,N,V)}this.setIndex(f),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(v,2));function b(R,L,W,U,N){const V=Math.cos(R),P=Math.sin(R),E=W/L*R,Y=Math.cos(E);N.x=U*(2+Y)*.5*V,N.y=U*(2+Y)*P*.5,N.z=U*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class KM extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mm,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jm extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Hu=new Ft,lm=new $,cm=new $;class ZM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(lm),cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cm),n.updateMatrixWorld(),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QM extends ZM{constructor(){super(new Om(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends jm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JM extends jm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class eE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function dm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);function tE(){const o=Vu.useRef(null);return Vu.useEffect(()=>{const e=o.current,n=new qM({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight);const r=new YM,a=new Vn(60,window.innerWidth/window.innerHeight,.1,200);a.position.set(0,0,18);const c=[],d=[new od(1.4,.38,120,18,2,3),new id(1.6,1),new rd(1.5,0),new sd(1.2,.4,20,60)],f=[{color:8154618,emissive:3812784},{color:5231045,emissive:1735282},{color:15755882,emissive:9052192}];[[-14,8,-10],[14,-6,-12],[-10,-10,-8],[12,10,-14],[0,-14,-6],[-5,14,-10]].forEach((N,V)=>{const P=d[V%d.length],E=f[V%f.length],Y=new KM({color:E.color,emissive:E.emissive,emissiveIntensity:.4,roughness:.3,metalness:.6,wireframe:V%3===0,transparent:!0,opacity:V%3===0?.18:.12}),se=new di(P,Y);se.position.set(...N);const H=.7+Math.random()*.8;se.scale.set(H,H,H),se.userData.rotSpeed={x:(Math.random()-.5)*.004,y:(Math.random()-.5)*.004,z:(Math.random()-.5)*.002},se.userData.floatOffset=Math.random()*Math.PI*2,r.add(se),c.push(se)});const m=1200,v=new Float32Array(m*3);for(let N=0;N<m;N++)v[N*3]=(Math.random()-.5)*80,v[N*3+1]=(Math.random()-.5)*80,v[N*3+2]=(Math.random()-.5)*40-5;const y=new Wn;y.setAttribute("position",new ni(v,3));const x=new Wm({color:8154618,size:.06,transparent:!0,opacity:.5});r.add(new $M(y,x)),r.add(new JM(16777215,.3));const S=new um(8154618,2);S.position.set(5,10,5),r.add(S);const w=new um(5231045,1.5);w.position.set(-8,-5,3),r.add(w);const T={x:0,y:0,tx:0,ty:0};let g=0;const _=N=>{T.tx=(N.clientX/window.innerWidth-.5)*2,T.ty=-(N.clientY/window.innerHeight-.5)*2},b=()=>{g=window.scrollY},R=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",_),window.addEventListener("scroll",b),window.addEventListener("resize",R);const L=new eE;let W=0;const U=()=>{W=requestAnimationFrame(U);const N=L.getElapsedTime();T.x+=(T.tx-T.x)*.05,T.y+=(T.ty-T.y)*.05,a.position.x=T.x*1.5,a.position.y=T.y*1,a.lookAt(0,-g*.002,0),c.forEach(V=>{V.rotation.x+=V.userData.rotSpeed.x,V.rotation.y+=V.userData.rotSpeed.y,V.rotation.z+=V.userData.rotSpeed.z,V.position.y+=Math.sin(N*.4+V.userData.floatOffset)*.003}),n.render(r,a)};return U(),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",_),window.removeEventListener("scroll",b),window.removeEventListener("resize",R),d.forEach(N=>N.dispose()),y.dispose(),x.dispose(),r.traverse(N=>{N.isMesh&&(N.geometry.dispose(),N.material.dispose())}),n.dispose()}},[]),O.jsx("canvas",{id:"bg-canvas",ref:o})}function nE(){Vu.useEffect(()=>{const o=document.querySelectorAll(".section");if(!o.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1});return o.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}function iE(){return O.jsxs("section",{className:"hero","aria-labelledby":"hero-title",children:[O.jsxs("div",{className:"hero-inner",children:[O.jsx("div",{className:"hero-tag",children:"Disponible para nuevos proyectos"}),O.jsxs("h1",{id:"hero-title",children:["Jordi ",O.jsx("span",{children:"Serrano"})]}),O.jsx("p",{style:{marginBottom:"0.75rem"},children:"Desarrollador Web Full Stack especializado en Inteligencia Artificial aplicada. Construyo soluciones digitales eficientes de principio a fin, cubriendo Backend, Frontend y automatización de procesos."}),O.jsx("p",{style:{marginBottom:"1.25rem"},children:"Aprendizaje rápido y adaptación a cualquier stack. Hoy desarrollo ABAP en SAP y participo en la migración de SAP R/3 a S/4HANA, tras dos años de desarrollo full stack y proyectos de IA en entorno empresarial."}),O.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"2rem"},children:[O.jsx("span",{className:"tag",children:"Full Stack"}),O.jsx("span",{className:"tag",children:"IA aplicada"}),O.jsx("span",{className:"tag",children:"SAP · ABAP"}),O.jsx("span",{className:"tag",children:"Automatización"})]}),O.jsxs("div",{className:"hero-contacts",children:[O.jsxs("a",{className:"chip",href:"mailto:jordiscdot@gmail.com",children:[O.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[O.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),O.jsx("path",{d:"m2 7 10 7 10-7"})]}),"jordiscdot@gmail.com"]}),O.jsxs("a",{className:"chip",href:"tel:627924258",children:[O.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.22 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})}),"627 924 258"]}),O.jsxs("span",{className:"chip",children:[O.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[O.jsx("path",{d:"M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"}),O.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Girona, España"]})]})]}),O.jsxs("div",{className:"scroll-hint",children:[O.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:O.jsx("path",{d:"m7 10 5 5 5-5"})}),"scroll"]})]})}function rE(){return O.jsxs("section",{className:"section",id:"exp","aria-labelledby":"exp-title",children:[O.jsx("div",{className:"section-label",children:"Trayectoria"}),O.jsx("h2",{className:"section-title",id:"exp-title",style:{margin:"0 0 2.5rem"},children:"Experiencia Laboral"}),O.jsxs("article",{className:"card",children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Fustes Esteba"}),O.jsx("div",{className:"card-role",children:"Programador ABAP · Girona"})]}),O.jsxs("span",{className:"card-date",children:[O.jsx("time",{dateTime:"2025-10",children:"Oct 2025"})," — Presente"]})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"Desarrollo y mantenimiento de programas ABAP en SAP ECC 6.0 (SAP_BASIS 731), incluyendo informes, formularios y mejoras de proceso a medida."}),O.jsx("li",{children:"Migración de SAP R/3 v731 a S/4HANA: análisis de impacto sobre los desarrollos existentes y adaptación de los programas Z al nuevo entorno."}),O.jsx("li",{children:"Validación post-migración junto a usuarios clave: detección y resolución de incidencias y ajuste del comportamiento de los programas migrados."}),O.jsx("li",{children:"Consultoría SAP y soporte directo a usuarios finales: toma de requisitos, resolución de incidencias y documentación técnica de las soluciones entregadas."})]})]}),O.jsxs("article",{className:"card",children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Comexi"}),O.jsx("div",{className:"card-role",children:"Desarrollador Web Full Stack & SAP · Riudellots de la Selva"})]}),O.jsxs("span",{className:"card-date",children:[O.jsx("time",{dateTime:"2023-10",children:"Oct 2023"})," — ",O.jsx("time",{dateTime:"2025-10",children:"Oct 2025"})]})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"Desarrollo full stack de aplicaciones internas con Laravel y Vue 3, e interfaces SAP con SAPUI5, unificando frontend, backend y capa SAP."}),O.jsx("li",{children:"Automatización de procesos con Python y C# (WPF .NET), reduciendo el trabajo manual en tareas repetitivas del día a día."}),O.jsx("li",{children:"Creación de aplicaciones con Google AppSheet y chatbots con IA integrada para consultar información interna desde el propio flujo de trabajo."}),O.jsx("li",{children:"Un año trabajando con SAP R/3 v740 y participación en la migración a S/4HANA, analizando y adaptando los desarrollos existentes."}),O.jsx("li",{children:"Tutor del programa DUAL de 1.000 horas: mentoría técnica y seguimiento de los estudiantes durante su etapa en la empresa."})]})]}),O.jsxs("article",{className:"card",children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Cocinero Profesional"}),O.jsx("div",{className:"card-role",children:"Varios establecimientos · Girona y alrededores"})]}),O.jsxs("span",{className:"card-date",children:[O.jsx("time",{dateTime:"2013",children:"2013"})," — ",O.jsx("time",{dateTime:"2022",children:"2022"})]})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"Nueve años de trayectoria en hostelería profesional, en varios establecimientos de Girona y alrededores."}),O.jsx("li",{children:"Trabajo bajo presión y coordinación de equipo en servicios de alto volumen, con atención al detalle en cada elaboración."}),O.jsx("li",{children:"Estudios de cocina finalizados con las mejores notas de Girona."})]})]})]})}function sE(){return O.jsxs("section",{className:"section",id:"skills","aria-labelledby":"skills-title",children:[O.jsx("div",{className:"section-label",children:"Stack"}),O.jsx("h2",{className:"section-title",id:"skills-title",style:{marginTop:0},children:"Tecnologías"}),O.jsxs("div",{className:"skills-grid",children:[O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"Backend"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"PHP"}),O.jsx("span",{className:"tag",children:"Laravel"}),O.jsx("span",{className:"tag",children:"Python"}),O.jsx("span",{className:"tag",children:"C#"}),O.jsx("span",{className:"tag",children:".NET / WPF"}),O.jsx("span",{className:"tag",children:"APIs REST"})]})]}),O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"Frontend"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"JavaScript"}),O.jsx("span",{className:"tag",children:"Vue 3"}),O.jsx("span",{className:"tag",children:"React"}),O.jsx("span",{className:"tag",children:"SAPUI5"})]})]}),O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"SAP & ABAP"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"ABAP"}),O.jsx("span",{className:"tag",children:"SAP ECC 6.0"}),O.jsx("span",{className:"tag",children:"SAP S/4HANA"}),O.jsx("span",{className:"tag",children:"SAP_BASIS 731"}),O.jsx("span",{className:"tag",children:"SAP R/3 v740"}),O.jsx("span",{className:"tag",children:"Migración de desarrollos Z"})]})]}),O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"Datos"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"SQL"}),O.jsx("span",{className:"tag",children:"MySQL"}),O.jsx("span",{className:"tag",children:"Consultas y modelado de datos"})]})]}),O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"IA & LLM"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"OpenWebUI"}),O.jsx("span",{className:"tag",children:"MCP Servers"}),O.jsx("span",{className:"tag",children:"Chatbots con IA"}),O.jsx("span",{className:"tag",children:"Embeddings"})]})]}),O.jsxs("div",{className:"skill-group",children:[O.jsx("div",{className:"skill-group-label",children:"Infraestructura"}),O.jsxs("div",{className:"skill-tags",children:[O.jsx("span",{className:"tag",children:"Docker"}),O.jsx("span",{className:"tag",children:"Servicios Python"}),O.jsx("span",{className:"tag",children:"GLPI"})]})]})]})]})}function oE(){return O.jsxs("section",{className:"section",id:"ai","aria-labelledby":"ai-title",children:[O.jsx("div",{className:"section-label",children:"Diferencial"}),O.jsx("h2",{className:"section-title",id:"ai-title",children:"IA Aplicada"}),O.jsx("div",{className:"ai-card",style:{marginBottom:"1rem"},children:O.jsxs("p",{children:["Mi especialización es la IA aplicada: llevar los modelos de lenguaje a herramientas que el equipo usa a diario, en lugar de quedarse en la prueba de concepto. Trabajo la integración de",O.jsx("strong",{children:"LLM"})," con sistemas corporativos, la construcción de ",O.jsx("strong",{children:"servidores MCP"}),"que exponen datos internos al asistente y el despliegue de la infraestructura necesaria para que todo funcione en un entorno controlado."]})}),O.jsxs("div",{className:"ai-card",style:{marginBottom:"1rem"},children:[O.jsx("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1rem",marginBottom:"0.6rem"},children:"Asistentes sobre documentación interna"}),O.jsxs("ul",{style:{margin:0,paddingLeft:"1.1rem",color:"var(--muted)",fontSize:"13.5px"},children:[O.jsxs("li",{children:["Despliegue y administración de ",O.jsx("strong",{children:"OpenWebUI"})," como interfaz de asistente para el equipo, apoyada en servicios Docker y Python."]}),O.jsxs("li",{children:["Desarrollo de ",O.jsx("strong",{children:"MCP servers propios"})," que consultan la API de GLPI y se integran en OpenWebUI, de modo que el asistente accede a datos reales del sistema en lugar de responder de memoria."]}),O.jsxs("li",{children:["Consulta de ",O.jsx("strong",{children:"manuales de usuario y documentación técnica"})," directamente desde el chat, sin salir de la herramienta ni buscar en carpetas compartidas."]}),O.jsxs("li",{children:["Uso de ",O.jsx("strong",{children:"embeddings"})," como base de la búsqueda y recuperación de información sobre esa documentación."]})]})]}),O.jsxs("div",{className:"ai-card",style:{marginBottom:"1rem"},children:[O.jsx("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1rem",marginBottom:"0.6rem"},children:"IA integrada en aplicaciones"}),O.jsx("p",{style:{marginBottom:"0.6rem"},children:"Además del asistente, he incorporado IA dentro de aplicaciones de gestión, donde el valor está en que el usuario la use sin cambiar de herramienta:"}),O.jsxs("ul",{style:{margin:0,paddingLeft:"1.1rem",color:"var(--muted)",fontSize:"13.5px"},children:[O.jsxs("li",{children:[O.jsx("strong",{children:"Chatbots con IA integrada"})," dentro de aplicaciones web de empresa."]}),O.jsxs("li",{children:["Aplicaciones con ",O.jsx("strong",{children:"Google AppSheet"})," para automatizar procesos internos y reducir tareas manuales repetitivas."]}),O.jsx("li",{children:"Conexión de estos asistentes con servicios y bases de datos existentes, de forma que la respuesta se apoye en la información que ya gestiona la organización."})]})]}),O.jsxs("div",{className:"ai-card",children:[O.jsx("h3",{style:{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1rem",marginBottom:"0.6rem"},children:"Despliegue y operación"}),O.jsxs("ul",{style:{margin:0,paddingLeft:"1.1rem",color:"var(--muted)",fontSize:"13.5px"},children:[O.jsxs("li",{children:["Contenerización del stack con ",O.jsx("strong",{children:"Docker"})," y servicios propios en",O.jsx("strong",{children:"Python"})," para que el entorno sea reproducible entre máquinas."]}),O.jsxs("li",{children:["Implementación de ",O.jsx("strong",{children:"GLPI"})," como fuente de datos del asistente, con su documentación técnica asociada."]}),O.jsx("li",{children:"Mantenimiento y evolución de estas piezas una vez en producción: permisos, acceso a la API y actualización de los servicios cuando cambian los sistemas que consultan."})]})]})]})}function aE(){return O.jsxs("section",{className:"section",id:"edu","aria-labelledby":"edu-title",children:[O.jsx("div",{className:"section-label",children:"Formación"}),O.jsx("h2",{className:"section-title",id:"edu-title",children:"Educación"}),O.jsx("p",{style:{color:"var(--muted)",fontSize:"13.5px",marginBottom:"1.5rem"},children:"Mi formación técnica en software llegó después de nueve años en hostelería: primero un bootcamp intensivo de desarrollo web y, a continuación, el ciclo superior de DAW en modalidad dual, compaginando el aula con trabajo real en empresa. No fue un cambio improvisado, sino una reconversión planificada en la que la disciplina y el ritmo de la cocina profesional siguen siendo una ventaja."}),O.jsxs("div",{className:"edu-card",style:{marginBottom:"1rem"},children:[O.jsx("div",{className:"edu-dot","aria-hidden":"true"}),O.jsxs("div",{className:"card",style:{flex:1,marginBottom:0},children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Institut Montilivi"}),O.jsx("div",{className:"card-role",children:"CFGS DAW — Desarrollo de Aplicaciones Web · Girona"})]}),O.jsx("time",{className:"card-date",dateTime:"2022-09",children:"Sep 2022 — Jun 2024"})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"Programación web, bases de datos, frameworks y despliegue de aplicaciones"}),O.jsx("li",{children:"Modalidad dual en Comexi: desarrollo en un equipo real durante el ciclo"}),O.jsx("li",{children:"Base sobre la que construí mi trayectoria actual como desarrollador full stack"})]})]})]}),O.jsxs("div",{className:"edu-card",style:{marginBottom:"1rem"},children:[O.jsx("div",{className:"edu-dot","aria-hidden":"true"}),O.jsxs("div",{className:"card",style:{flex:1,marginBottom:0},children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Fundació Esplai · ICT Youth Employment"}),O.jsx("div",{className:"card-role",children:"Bootcamp 210h PHP & MySQL · Salt"})]}),O.jsx("time",{className:"card-date",dateTime:"2022-03",children:"Mar 2022 — Jun 2022"})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"210 horas de formación intensiva orientadas a la inserción laboral en el sector TIC"}),O.jsx("li",{children:"Desarrollo web full stack: programación de servidor y gestión de bases de datos"}),O.jsx("li",{children:"Primer paso del cambio de sector, previo al ciclo superior de DAW"})]})]})]}),O.jsxs("div",{className:"edu-card",children:[O.jsx("div",{className:"edu-dot","aria-hidden":"true"}),O.jsxs("div",{className:"card",style:{flex:1,marginBottom:0},children:[O.jsxs("div",{className:"card-header",children:[O.jsxs("div",{children:[O.jsx("div",{className:"card-company",children:"Formación en cocina"}),O.jsx("div",{className:"card-role",children:"Hostelería y restauración · Girona"})]}),O.jsx("span",{className:"card-date",children:"Etapa previa"})]}),O.jsxs("ul",{children:[O.jsx("li",{children:"Estudios de cocina finalizados, con las mejores notas de Girona"}),O.jsx("li",{children:"Punto de partida de nueve años de trabajo en cocina profesional"}),O.jsx("li",{children:"Aporta rigor, trabajo en equipo y capacidad de rendir bajo presión"})]})]})]}),O.jsxs("p",{style:{color:"var(--muted)",fontSize:"13.5px",marginTop:"1.5rem"},children:["Complemento esta base con formación continua por mi cuenta, centrada en el despliegue de servicios y la integración de IA en aplicaciones: el detalle está en la sección",O.jsx("a",{href:"#ai",style:{color:"var(--accent)",textDecoration:"none"},children:"IA Aplicada"}),"."]})]})}function lE(){return O.jsxs("section",{className:"section",id:"extra","aria-labelledby":"extra-title",children:[O.jsx("div",{className:"section-label",children:"Más"}),O.jsx("h2",{className:"section-title",id:"extra-title",children:"Idiomas y otros"}),O.jsxs("div",{className:"lang-row",style:{marginBottom:"1.5rem"},children:[O.jsx("div",{className:"lang-chip",children:"🇪🇸 Castellano — Nativo"}),O.jsx("div",{className:"lang-chip",children:"🏴 Catalán — Nativo"})]}),O.jsx("div",{className:"divider"}),O.jsx("p",{style:{color:"var(--muted)",fontSize:"13.5px",margin:"1rem 0"},children:"Carnet de conducir y vehículo propio. Certificaciones disponibles bajo solicitud."}),O.jsxs("div",{className:"lang-row",style:{marginBottom:"1rem"},children:[O.jsx("div",{className:"lang-chip",children:"Trabajo en equipo"}),O.jsx("div",{className:"lang-chip",children:"Tutoría de becarios"}),O.jsx("div",{className:"lang-chip",children:"Orientación a resultados"}),O.jsx("div",{className:"lang-chip",children:"Disponibilidad para desplazamiento"})]}),O.jsxs("ul",{style:{color:"var(--muted)",fontSize:"13.5px"},children:[O.jsx("li",{children:"Tutor en el programa DUAL de 1.000 horas en Comexi, acompañando a estudiantes en su formación práctica."}),O.jsx("li",{children:"Colaboración con equipos multidisciplinares de desarrollo, IT y negocio, con trato directo con usuarios finales."}),O.jsx("li",{children:"Disponibilidad para desplazamientos puntuales y para trabajo presencial en el entorno de Girona."})]})]})}function cE(){return nE(),O.jsxs(O.Fragment,{children:[O.jsx(tE,{}),O.jsxs("div",{className:"page",children:[O.jsx(iE,{}),O.jsx(rE,{}),O.jsx(sE,{}),O.jsx(oE,{}),O.jsx(aE,{}),O.jsx(lE,{})]})]})}Dv.createRoot(document.getElementById("root")).render(O.jsx(cE,{}));
