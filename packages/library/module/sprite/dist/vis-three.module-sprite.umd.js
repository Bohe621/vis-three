(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("@vis-three/tdcm"),require("@vis-three/module-object"),require("@vis-three/module-solid-object"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","@vis-three/module-object","@vis-three/module-solid-object","three"],t):(e=typeof globalThis<"u"?globalThis:e||self,t((e["vis-three"]=e["vis-three"]||{},e["vis-three"]["module-sprite"]={}),e.tdcm,e.moduleObject,e.moduleSolidObject,e.three))})(this,function(e,t,d,u,n){"use strict";const p=t.defineRule([function(a){return a.key!=="geometry"},...d.ObjectRule]),c=function(){return Object.assign(u.getSolidObjectConfig(),{type:"Sprite",material:"",center:{x:.5,y:.5}})},f=u.defineSolidObjectModel(a=>({type:"Sprite",config:c,shared:{spriteReplaceMaterial:new n.SpriteMaterial({color:"rgb(123, 123, 123)"})},commands:{set:{lookAt(){},material({model:r,target:s,engine:l,value:o}){const i=l.compilerManager.getObjectFromModule(t.MODULE_TYPE.MATERIAL,o);i&&i instanceof n.SpriteMaterial?s.material=i:s.material=r.spriteReplaceMaterial}}},create({model:r,config:s,engine:l}){const o=new n.Sprite,i=l.compilerManager.getObjectFromModule(t.MODULE_TYPE.MATERIAL,s.material);return i&&i instanceof n.SpriteMaterial?o.material=i:o.material=r.spriteReplaceMaterial,a.create({model:r,target:o,config:s,engine:l,filter:{geometry:!0,material:!0,lookAt:!0}}),o},dispose({target:r}){a.dispose({target:r})}})),m=t.defineModule({type:"sprite",object:!0,rule:p,models:[f],lifeOrder:t.SUPPORT_LIFE_CYCLE.THREE});e.default=m,e.getSpriteConfig=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
