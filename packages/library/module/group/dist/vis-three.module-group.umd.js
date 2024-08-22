(function(i,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("three"),require("three/examples/jsm/lights/RectAreaLightUniformsLib.js"),require("three/examples/jsm/loaders/OBJLoader"),require("three/examples/jsm/loaders/MTLLoader"),require("three/examples/jsm/loaders/RGBELoader"),require("three/examples/jsm/loaders/GLTFLoader"),require("three/examples/jsm/loaders/FBXLoader"),require("three/examples/jsm/loaders/DRACOLoader"),require("three/examples/jsm/loaders/KTX2Loader.js"),require("three/examples/jsm/loaders/DDSLoader.js"),require("three/examples/jsm/libs/meshopt_decoder.module.js"),require("three/examples/jsm/loaders/LUTCubeLoader"),require("three/examples/jsm/loaders/LUT3dlLoader"),require("@vis-three/module-object")):typeof define=="function"&&define.amd?define(["exports","three","three/examples/jsm/lights/RectAreaLightUniformsLib.js","three/examples/jsm/loaders/OBJLoader","three/examples/jsm/loaders/MTLLoader","three/examples/jsm/loaders/RGBELoader","three/examples/jsm/loaders/GLTFLoader","three/examples/jsm/loaders/FBXLoader","three/examples/jsm/loaders/DRACOLoader","three/examples/jsm/loaders/KTX2Loader.js","three/examples/jsm/loaders/DDSLoader.js","three/examples/jsm/libs/meshopt_decoder.module.js","three/examples/jsm/loaders/LUTCubeLoader","three/examples/jsm/loaders/LUT3dlLoader","@vis-three/module-object"],o):(i=typeof globalThis<"u"?globalThis:i||self,o((i["vis-three"]=i["vis-three"]||{},i["vis-three"]["module-group"]={}),i.three,null,null,null,null,null,null,null,null,null,null,null,null,i.moduleObject))})(this,function(i,o,R,w,C,I,_,S,U,q,P,D,G,F,L){"use strict";const p=function(e){let r=e.split("/").pop();if(!r)return e;const t=r.split("-");return t.push(t[0]),t.shift(),t.reduce((s,a)=>s+=a[0].toUpperCase()+a.slice(1),"")};new o.Vector2,new o.Vector2,new o.Vector2,new o.Vector2,new o.Vector2,new o.Vector2;const y="0.7.0";window.__THREE__||console.error("vis-three dependent on three.js module, pleace run 'npm i three' first."),window.__VIS__?console.warn("Duplicate vis-three frames are introduced"):window.__VIS__=y;var O=Object.defineProperty,x=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r,t)=>(x(e,typeof r!="symbol"?r+"":r,t),t);const c=class extends o.Loader{constructor(e){super(e)}load(e,r,t,s){this.path!==void 0&&(e=this.path+e),this.manager.itemStart(e),e=this.manager.resolveURL(e);const a=o.Cache.get(e);if(a!==void 0)return setTimeout(()=>{r&&r(a),this.manager.itemEnd(e)},0),a;const n=document.createElement("video");return n.preload=c.preload,n.autoplay=c.autoplay,n.loop=c.loop,n.muted=c.muted,n.src=e,n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.zIndex="-1",document.body.appendChild(n),n.oncanplay=()=>{o.Cache.add(e,n),this.manager.itemEnd(e),r&&r(n)},n.onerror=u=>{this.manager.itemEnd(e),s&&s(u)},n}};let g=c;h(g,"autoplay",!0),h(g,"preload","auto"),h(g,"muted",!0),h(g,"loop",!0),p("@vis-three/plugin-loader-manager"),p("@vis-three/plugin-pointer-manager");var f;(function(e){e.POINTERDOWN="pointerdown",e.POINTERUP="pointerup",e.POINTERMOVE="pointermove",e.POINTERENTER="pointerenter",e.POINTERLEAVE="pointerleave",e.CLICK="click",e.DBLCLICK="dblclick",e.CONTEXTMENU="contextmenu"})(f||(f={})),p("@vis-three/plugin-event-manager");var j;(function(e){e.RENDER="render",e.PLAY="play",e.STOP="stop"})(j||(j={})),p("@vis-three/plugin-render-manager");const T=function(e){return e};var b=(e=>(e[e.ZERO=0]="ZERO",e[e.ONE=100]="ONE",e[e.TWO=200]="TWO",e[e.THREE=300]="THREE",e[e.FOUR=400]="FOUR",e[e.FIVE=500]="FIVE",e[e.SIX=600]="SIX",e[e.SEVEN=700]="SEVEN",e[e.EIGHT=800]="EIGHT",e[e.NINE=900]="NINE",e))(b||{});const d=class l{static generateConfig(r,t){if(!l.configLibrary.has(r))return console.warn(`event library can not found config by name: ${r}`),null;const s=(n,u)=>{for(const m in u)typeof u[m]=="object"&&u[m]!==null&&!Array.isArray(u[m])?s(n[m],u[m]):n[m]=u[m]},a=JSON.parse(JSON.stringify(l.configLibrary.get(r)));return s(a,t),a}static generateEvent(r,t){return l.generatorLibrary.has(r.name)?l.generatorLibrary.get(r.name)(t,r):(console.error(`event library can not found generator by name: ${r.name}`),()=>{})}static has(r){return l.configLibrary.has(r)}static useEngine(r){l.engine=r}static createEvent(r,t,s){if(!l.engine&&!s)return console.error("EventGenerator Manager createEvent must provide an engine, you can use 'useEngine' to set it."),null;const a=l.generateConfig(r,t);return a?l.generateEvent(a,s||l.engine):null}};d.configLibrary=new Map,d.generatorLibrary=new Map,d.register=function({config:e,generator:r}){return d.configLibrary.has(e.name)?(console.warn(`EventGeneratorManager has already exist this event generator: ${e.name}, that will be cover.`),d):(d.configLibrary.set(e.name,JSON.parse(JSON.stringify(e))),d.generatorLibrary.set(e.name,r),d)};const v=function(){return Object.assign(L.getObjectConfig(),{children:[]})},E=T({type:"group",object:!0,rule:L.ObjectRule,models:[L.defineObjectModel(e=>({type:"Object3D",config:v,create({model:r,config:t,engine:s}){const a=new o.Group;return e.create({model:r,target:a,config:t,filter:{},engine:s}),a},dispose({target:r}){e.dispose({target:r})}}))],lifeOrder:b.THREE});i.default=E,i.getGroupConfig=v,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
