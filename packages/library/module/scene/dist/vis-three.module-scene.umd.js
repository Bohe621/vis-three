(function(s,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("@vis-three/tdcm"),require("@vis-three/module-object"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","@vis-three/module-object","three"],n):(s=typeof globalThis<"u"?globalThis:s||self,n((s["vis-three"]=s["vis-three"]||{},s["vis-three"]["module-scene"]={}),s.tdcm,s.moduleObject,s.three))})(this,function(s,n,c,f){"use strict";function E(l){l.setSceneBySymbol=function(e){const o=this.compilerManager.getCompiler(n.MODULE_TYPE.SCENE);return o.map.has(e)?this.setScene(o.map.get(e).puppet):console.warn("can not found scene",e),this}}const g=[n.uniqueSymbol("Scene")],d=n.defineRule([c.ObjectRule[0],function(l){return n.globalOption.symbol.validator(l.symbol)||g.includes(l.symbol)},n.DEFAULT_RULE.OPERATE_ADD,n.DEFAULT_RULE.OPERATE_DELETE,n.DEFAULT_RULE.OPERATE_COVER,n.DEFAULT_RULE.OPERATE_COMPILE]),u=function(){return Object.assign(c.getObjectConfig(),{vid:n.uniqueSymbol("Scene"),background:"",environment:"",fog:{type:"",color:"rgb(150, 150, 150)",near:1,far:200,density:.003}})},p=c.defineObjectModel(l=>({type:"Scene",config:u,shared:{setBackground(e,o,t){if(!o){e.background=null;return}if(n.globalOption.symbol.validator(o)){const i=t.compilerManager.getObjectFromModule(n.MODULE_TYPE.TEXTURE,o);i?e.background=i:console.warn(`engine can not found this vid texture : '${o}'`)}else e.background=new f.Color(o)},setEnvironment(e,o,t){if(!o){e.environment=null;return}if(n.globalOption.symbol.validator(o)){const i=t.compilerManager.getObjectFromModule(n.MODULE_TYPE.TEXTURE,o);i?e.environment=i:console.warn(`engine can not found this vid texture : '${o}'`)}else console.warn(`scene environment is illeage: ${o}`)}},commands:{set:{lookAt(){},fog({target:e,config:o,key:t,value:i}){const r=o.fog;r.type?r.type==="Fog"?!e.fog||!(e.fog instanceof f.Fog)?e.fog=new f.Fog(r.color,r.near,r.far):t==="color"?e.fog.color.copy(new f.Color(r.color)):e.fog[t]&&(e.fog[t]=i):r.type==="FogExp2"&&(!e.fog||!(e.fog instanceof f.FogExp2)?e.fog=new f.FogExp2(r.color,r.density):t==="color"?e.fog.color.copy(new f.Color(r.color)):e.fog[t]&&(e.fog[t]=i)):e.fog=null},background({model:e,target:o,value:t,engine:i}){e.setBackground(o,t,i)},environment({model:e,target:o,value:t,engine:i}){e.setEnvironment(o,t,i)}}},create({model:e,config:o,engine:t}){const i=new f.Scene;if(e.setBackground(i,o.background,t),e.setEnvironment(i,o.environment,t),o.fog.type){const r=o.fog;r.type==="Fog"?i.fog=new f.Fog(r.color,r.near,r.far):r.type==="FogExp2"?i.fog=new f.FogExp2(r.color,r.density):console.warn(`scene model: can not support this type fog:'${o.type}'`)}return l.create({model:e,config:o,target:i,engine:t,filter:{lookAt:!0,background:!0,environment:!0,fog:!0}}),i},dispose({target:e}){l.dispose({target:e})}})),a=n.defineModule({type:"scene",object:!0,rule:d,models:[p],extend:E,lifeOrder:n.SUPPORT_LIFE_CYCLE.THREE+1});s.default=a,s.getSceneConfig=u,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
