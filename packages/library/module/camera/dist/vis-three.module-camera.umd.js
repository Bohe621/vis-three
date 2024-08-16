(function(r,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("@vis-three/tdcm"),require("@vis-three/module-object"),require("three"),require("@vis-three/core")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","@vis-three/module-object","three","@vis-three/core"],d):(r=typeof globalThis<"u"?globalThis:r||self,d((r["vis-three"]=r["vis-three"]||{},r["vis-three"]["module-camera"]={}),r.tdcm,r.moduleObject,r.three,r.core))})(this,function(r,d,u,p,a){"use strict";function E(n){n.setCameraBySymbol=function(e){const i=this.getObjectFromModule(d.MODULE_TYPE.CAMERA,e);return i?this.setCamera(i):console.warn("can not found camera",e),this}}const c=function(){return Object.assign(u.getObjectConfig(),{adaptiveWindow:!1,fov:45,aspect:1920/1080,near:5,far:50})},h=function(){return Object.assign(u.getObjectConfig(),{adaptiveWindow:!1,left:-window.innerWidth,right:window.innerWidth,top:window.innerHeight,bottom:-window.innerHeight,near:5,far:50,zoom:1})},f=u.defineObjectModel(n=>({type:"OrthographicCamera",config:h,context({model:e}){return{updateFun:i=>{const t=e.puppet,o=i.width,s=i.height;t.left=-o,t.right=o,t.top=s,t.bottom=-s,t.updateProjectionMatrix()}}},commands:{add:{scale(){}},set:{scale(){},adaptiveWindow({model:e,value:i,engine:t}){i?(t.addEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun),e.updateFun({type:"setSize",width:t.dom.offsetWidth,height:t.dom.offsetHeight})):t.removeEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun)},$reg:[{reg:new RegExp("left|right|top|bottom|near|far|zoom"),handler({target:e,key:i,value:t}){e[i]=t,e.updateProjectionMatrix()}}]},delete:{scale(){}}},create({model:e,config:i,engine:t}){const o=new p.OrthographicCamera(-50,50,50,-50);return n.create({model:e,target:o,config:i,filter:{scale:!0,adaptiveWindow:!0},engine:t}),o.updateProjectionMatrix(),i.adaptiveWindow&&(t.addEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun),e.updateFun({type:a.ENGINE_EVENT.SETSIZE,width:t.dom.offsetWidth,height:t.dom.offsetHeight})),o},dispose({target:e}){n.dispose({target:e})}})),m=u.defineObjectModel(n=>({type:"PerspectiveCamera",config:c,context({model:e}){return{updateFun:i=>{e.puppet.aspect=i.width/i.height,e.puppet.updateProjectionMatrix()}}},commands:{add:{scale(){}},set:{scale(){},adaptiveWindow({model:e,value:i,engine:t}){i?(t.addEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun),e.updateFun({type:"setSize",width:t.dom.offsetWidth,height:t.dom.offsetHeight})):t.removeEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun)},$reg:[{reg:new RegExp("fov|aspect|near|far"),handler({target:e,key:i,value:t}){e[i]=t,e.updateProjectionMatrix()}}]},delete:{scale(){}}},create({model:e,config:i,engine:t,compiler:o}){const s=new p.PerspectiveCamera;return n.create({model:e,target:s,config:i,filter:{scale:!0,adaptiveWindow:!0},engine:t}),s.updateProjectionMatrix(),i.adaptiveWindow&&(t.addEventListener(a.ENGINE_EVENT.SETSIZE,e.updateFun),e.updateFun({type:a.ENGINE_EVENT.SETSIZE,width:t.dom.offsetWidth,height:t.dom.offsetHeight})),s},dispose({target:e}){n.dispose({target:e})}})),v=d.defineModule({type:"camera",object:!0,rule:u.ObjectRule,extend:E,models:[f,m],lifeOrder:d.SUPPORT_LIFE_CYCLE.THREE});r.default=v,r.getOrthographicCameraConfig=h,r.getPerspectiveCameraConfig=c,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
