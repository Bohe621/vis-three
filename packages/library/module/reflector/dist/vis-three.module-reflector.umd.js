(function(i,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("@vis-three/tdcm"),require("@vis-three/module-object"),require("three/examples/jsm/objects/Reflector.js")):typeof define=="function"&&define.amd?define(["@vis-three/tdcm","@vis-three/module-object","three/examples/jsm/objects/Reflector.js"],o):(i=typeof globalThis<"u"?globalThis:i||self,i["vis-three"]=i["vis-three"]||{},i["vis-three"]["module-reflector"]=o(i.tdcm,i.moduleObject,i.Reflector_js))})(this,function(i,o,u){"use strict";const c=function(){return Object.assign(o.getObjectConfig(),{geometry:"",color:"rgb(127, 127, 127)",textureWidth:0,textureHeight:0,clipBias:0,multisample:4})},l=o.defineObjectModel(d=>({type:"Reflector",config:c,shared:{setSize(e,t,r){e.getRenderTarget().setSize(t.textureHeight||r.dom.offsetWidth*window.devicePixelRatio,t.textureWidth||r.dom.offsetHeight*window.devicePixelRatio)}},commands:{set:{textureHeight({model:e,target:t,config:r,engine:s}){e.setSize(t,r,s)},textureWidth({model:e,target:t,config:r,engine:s}){e.setSize(t,r,s)},geometry(e){e.target.geometry=e.engine.getObjectFromModule(i.MODULE_TYPE.GEOMETRY,e.value)}}},create({model:e,config:t,engine:r}){const s=new u.Reflector(r.getObjectFromModule(i.MODULE_TYPE.GEOMETRY,t.geometry),{color:t.color,clipBias:t.clipBias,textureHeight:t.textureHeight||r.dom.offsetWidth*window.devicePixelRatio,textureWidth:t.textureWidth||r.dom.offsetHeight*window.devicePixelRatio,multisample:t.multisample});return d.create({model:e,target:s,config:t,engine:r,filter:{geometry:!0,clipBias:!0,color:!0}}),s},dispose({target:e}){e.geometry=void 0,e.dispose(),d.dispose({target:e})}}));return i.defineModule({type:"reflector",object:!0,rule:o.ObjectRule,models:[l],lifeOrder:i.SUPPORT_LIFE_CYCLE.THREE})});
