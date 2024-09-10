(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("@vis-three/tdcm"),require("@vis-three/library-modifier"),require("@vis-three/utils")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","@vis-three/library-modifier","@vis-three/utils"],o):(n=typeof globalThis<"u"?globalThis:n||self,o((n["vis-three"]=n["vis-three"]||{},n["vis-three"]["module-modifier"]={}),n.tdcm,n.libraryModifier,n.utils))})(this,function(n,o,T,p){"use strict";class y extends o.Compiler{constructor(r){super(r),this.cacheRenderFun=new Map,this.sourceModifiers=new Map}integrateModifer(r){this.sourceModifiers.has(r.source)||this.sourceModifiers.set(r.source,[]);const t=this.sourceModifiers.get(r.source);t.includes(r)||t.push(r)}chainRender(r){if(!this.sourceModifiers.has(r.source)){console.error(`${this.MODULE} compiler can not found modifier list`,r);return}const t=this.sourceModifiers.get(r.source);t.includes(r)||console.error(`${this.MODULE} compiler: can not found this modifier in source list`,r);const a=t.slice(t.indexOf(r)+1,t.length);for(const i of a)i.render()}}const E=function(){return Object.assign(o.getBasicConfig(),{name:"",visible:!0,source:"",index:0})},h=function(){return Object.assign(E(),{target:"",mode:"subtract"})},O=o.defineModel({type:"BooleanModifier",config:h,shared:{modifyKey:["position.x","position.y","position.z","rotation.x","rotation.y","rotation.z","scale.x","scale.y","scale.z","parent"]},context(){return{renderFun:()=>{},cacheTarget:""}},commands:{set:{source:()=>{},target:({model:e,target:r,config:t,engine:a})=>{e.toAsync(i=>{var d,f;if(t.target){const M=a.compilerManager.getObjectBySymbol(t.target);if(!M)return i&&console.warn(`Boolean modifier processor can not found object by vid: ${t.target}`),!1;if(r.target=M,e.cacheTarget){const c=e.toModel(e.cacheTarget);for(const D of e.modifyKey)c==null||c.off(`${o.MODEL_EVENT.COMPILED_ATTR}:${D}`,e.renderFun);const g=e.toConfig(e.cacheTarget);g&&g.geometry&&((d=e.toModel(g.geometry))==null||d.off(o.MODEL_EVENT.COMPILED_UPDATE,e.renderFun))}const s=e.toModel(t.target);for(const c of e.modifyKey)s==null||s.on(`${o.MODEL_EVENT.COMPILED_ATTR}:${c}`,e.renderFun);const u=e.toConfig(t.target);return u&&u.geometry&&((f=e.toModel(u.geometry))==null||f.on(o.MODEL_EVENT.COMPILED_UPDATE,e.renderFun)),e.cacheTarget=t.target,e.renderFun(),!0}return!0})},$reg:[{reg:new RegExp(".*"),handler({model:e,value:r,key:t,target:a}){a[t]=r,e.renderFun()}}]}},create({model:e,config:r,engine:t,compiler:a}){const i=new T.BooleanModifier({mode:r.mode});return e.renderFun=()=>{i.render(),a.chainRender(i)},e.toAsync(d=>{var f;if(r.source){const M=t.compilerManager.getObjectBySymbol(r.source);if(!M)return d&&console.warn(`Boolean modifier processor can not found object by vid: ${r.source}`),!1;const s=e.toModel(r.source);for(const c of e.modifyKey)s==null||s.on(`${o.MODEL_EVENT.COMPILED_ATTR}:${c}`,e.renderFun);const u=e.toConfig(r.source);return u&&u.geometry&&((f=e.toModel(u.geometry))==null||f.on(o.MODEL_EVENT.COMPILED_UPDATE,e.renderFun)),i.source=M,a.integrateModifer(i),e.renderFun(),!0}return!0}),e.toAsync(d=>{var f;if(r.target){const M=t.compilerManager.getObjectBySymbol(r.target);if(!M)return d&&console.warn(`Boolean modifier processor can not found object by vid: ${r.target}`),!1;i.target=M;const s=e.toModel(r.target);for(const c of e.modifyKey)s==null||s.on(`${o.MODEL_EVENT.COMPILED_ATTR}:${c}`,e.renderFun);const u=e.toConfig(r.target);return u&&u.geometry&&((f=e.toModel(u.geometry))==null||f.on(o.MODEL_EVENT.COMPILED_UPDATE,e.renderFun)),e.cacheTarget=r.target,e.renderFun(),!0}return!0}),p.syncObject(r,i,{target:!0,source:!0}),i},dispose({target:e}){e.dispose()}}),C=o.defineModule({type:"modifier",compiler:y,models:[O],lifeOrder:o.SUPPORT_LIFE_CYCLE.NINE});n.ModifierCompiler=y,n.default=C,n.getBooleanModifierConfig=h,n.getModifierConfig=E,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
