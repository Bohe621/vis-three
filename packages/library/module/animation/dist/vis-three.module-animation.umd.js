(function(s,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("@vis-three/tdcm"),require("@vis-three/core"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","@vis-three/core","three"],c):(s=typeof globalThis<"u"?globalThis:s||self,c((s["vis-three"]=s["vis-three"]||{},s["vis-three"]["module-animation"]={}),s.tdcm,s.core,s.three))})(this,function(s,c,l,f){"use strict";const p=c.defineRule([function(n){return!(n.key==="name"&&n.path.length===1)},c.DEFAULT_RULE.SYMBOL_VALIDATOR,c.DEFAULT_RULE.OPERATE_ADD,c.DEFAULT_RULE.OPERATE_DELETE,c.DEFAULT_RULE.OPERATE_COVER,c.DEFAULT_RULE.OPERATE_COMPILE]),y=function(){return Object.assign(c.getBasicConfig(),{play:!0})},m=function(){return Object.assign(y(),{target:"",time:0,timeScale:1})},b=function(){return Object.assign(y(),{target:"",script:{name:""},attribute:""})},E=class E{static generateConfig(e,t){if(!E.configLibrary.has(e))return console.warn(`event library can not found config by name: ${e}`),{name:""};const r=(a,o)=>{for(const u in o)a[u]!==void 0&&(typeof o[u]=="object"&&o[u]!==null&&!Array.isArray(o[u])?r(a[u],o[u]):a[u]=o[u])},i=JSON.parse(JSON.stringify(E.configLibrary.get(e)));return r(i,t),i}static generateScript(e,t,r,i){return E.generatorLibrary.has(i.name)?E.generatorLibrary.get(i.name)(e,t,r,i):(console.error(`event library can not found generator by name: ${i.name}`),()=>{})}static has(e){return E.configLibrary.has(e)}};E.configLibrary=new Map,E.generatorLibrary=new Map,E.register=function({config:e,generator:t}){return E.configLibrary.has(e.name)?(console.warn(`EventLibrary has already exist this event generator: ${e.name}, that will be cover.`),E):(E.configLibrary.set(e.name,JSON.parse(JSON.stringify(e))),E.generatorLibrary.set(e.name,t),E)};let d=E;class N extends d{}const A=c.defineModel({type:"ScriptAnimation",config:b,shared:{eventSymbol:"vis.event",createFunction(n,e){let t=e.compilerManager.getObjectBySymbol(n.target);if(!t)return console.warn(`can not found object in enigne: ${n.target}`),()=>{};const r=n.attribute.split(".");r.shift();const i=r.pop();for(const a of r){if(t[a]===void 0)return console.warn(`animaton processor: target object can not found key: ${a}`,t),()=>{};t=t[a]}return d.generateScript(e,t,i,n.script)},restoreAttribute(n,e){if(!n.target||!n.attribute)return this;let t=e.getObjectBySymbol(n.target),r=e.getConfigBySymbol(n.target);(!t||!r)&&console.warn("AnimationCompiler: can not found object target or config in engine",n.vid);const i=n.attribute.split(".");i.shift();const a=i.pop();for(const o of i)if(t[o]&&r[o])t=t[o],r=r[o];else return console.warn("AnimationCompiler: object and config attribute are not sync"),this;return t[a]=r[a],this}},commands:{set:{play({target:n,value:e,engine:t}){e?t.renderManager.addEventListener(l.ENGINE_EVENT.RENDER,n):t.renderManager.removeEventListener(l.ENGINE_EVENT.RENDER,n)},$reg:[{reg:new RegExp(".*"),handler({model:n,target:e,config:t,engine:r,compiler:i}){r.renderManager.removeEventListener(l.ENGINE_EVENT.RENDER,e),i.symbolMap.delete(e);const a=n.createFunction(t,r);t.play&&r.renderManager.addEventListener(l.ENGINE_EVENT.RENDER,a),n.puppet=a,i.symbolMap.set(a,t.vid)}}]}},create({model:n,config:e,engine:t}){const r=n.createFunction(e,t);return e.play&&t.renderManager.addEventListener(l.ENGINE_EVENT.RENDER,r),r},dispose({model:n,target:e,config:t,engine:r}){r.renderManager.removeEventListener(l.ENGINE_EVENT.RENDER,e),n.restoreAttribute(t,r)}}),L=c.defineModel({type:"MixerAnimation",config:m,context(){return{mixerAni:void 0}},create({model:n,config:e,engine:t,compiler:r}){let i;Array.isArray(e.target)?(i=new f.AnimationObjectGroup,e.target.forEach(o=>{const u=t.getObjectBySymbol(o);u?i.add(u):console.warn(`mixer animation processor can not found vid in engine: ${o}`)})):(i=t.getObjectBySymbol(e.target),i||(console.warn(`mixer animation processor can not found vid in engine: ${e.target}`),i=new f.Object3D));const a=new f.AnimationMixer(i);if(a.time=e.time,a.timeScale=e.timeScale,e.play){const o=u=>{a.update(u.delta)};t.renderManager.addEventListener(l.ENGINE_EVENT.RENDER,o),n.mixerAni=o}return a},dispose({model:n,target:e,engine:t}){n.mixerAni&&(t.renderManager.removeEventListener(l.ENGINE_EVENT.RENDER,n.mixerAni),n.mixerAni=void 0),e.uncacheRoot(e.getRoot()),e._actions.forEach(r=>{const i=r.getClip();e.uncacheClip(i),e.uncacheAction(i)})}}),h=c.defineModule({type:"animation",rule:p,models:[A,L],lifeOrder:c.SUPPORT_LIFE_CYCLE.NINE});s.AniScriptGeneratorManager=N,s.AniScriptManager=d,s.default=h,s.getMixerAnimationConfig=m,s.getScriptAnimationConfig=b,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
