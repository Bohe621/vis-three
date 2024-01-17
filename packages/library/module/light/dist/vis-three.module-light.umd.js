(function(o,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("@vis-three/module-object"),require("three"),require("@vis-three/middleware")):typeof define=="function"&&define.amd?define(["exports","@vis-three/module-object","three","@vis-three/middleware"],i):(o=typeof globalThis!="undefined"?globalThis:o||self,i((o["vis-three"]=o["vis-three"]||{},o["vis-three"]["module-light"]={}),o.moduleObject,o.three,o.middleware))})(this,function(o,i,n,r){"use strict";class h extends i.ObjectCompiler{constructor(){super()}}const C=function(e,t){i.ObjectRule(e,t)},a=function(){return Object.assign(i.getObjectConfig(),{type:"Light",color:"rgb(255, 255, 255)",intensity:1})},u=function(){return Object.assign(i.getObjectConfig(),{color:"rgb(255, 255, 255)",intensity:1})},f=function(){return Object.assign(a(),{distance:30,decay:.01})},p=function(){return Object.assign(a(),{distance:30,angle:Math.PI/180*45,penumbra:.01,decay:.01})},d=function(){return Object.assign(a(),{shadow:{bias:0,normalBias:0,radius:1,mapSize:{width:512,height:512},camera:{near:.5,far:500,top:window.innerHeight,bottom:-window.innerHeight,left:-window.innerWidth,right:window.innerWidth}}})},L=function(){return Object.assign(a(),{color:"rgb(255, 255, 255)",groundColor:"rgb(0, 0, 0)"})},l=function(){return Object.assign(a(),{width:10,height:10})},m=function({target:e,value:t}){e.color.copy(new n.Color(t))},c=function(e,t,s,H){return e.color.copy(new n.Color(t.color)),i.objectCreate(e,t,{color:!0,scale:!0,rotation:!0,lookAt:!0,...s},H)},g=Object.assign({},i.objectCommands,{set:{color:m,scale:r.emptyHandler,rotation:r.emptyHandler,lookAt:r.emptyHandler}});var b=r.defineProcessor({type:"AmbientLight",config:u,commands:g,create(e,t){return c(new n.AmbientLight,e,{},t)},dispose:i.objectDispose}),y=r.defineProcessor({type:"DirectionalLight",config:d,commands:g,create(e,t){return c(new n.DirectionalLight,e,{},t)},dispose:i.objectDispose}),P=r.defineProcessor({type:"HemisphereLight",config:L,commands:{set:{...g.set,groundColor:function({target:e,value:t}){e.groundColor.copy(new n.Color(t))}}},create(e,t){const s=new n.HemisphereLight;return s.groundColor.copy(new n.Color(e.groundColor)),c(s,e,{groundColor:!0},t)},dispose:i.objectDispose}),v=r.defineProcessor({type:"PointLight",config:f,commands:g,create(e,t){return c(new n.PointLight,e,{},t)},dispose:i.objectDispose}),j=r.defineProcessor({type:"RectAreaLight",config:l,commands:{set:{...g.set,rotation:void 0}},create(e,t){const s=c(new n.RectAreaLight,e,{},t);return s.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),s.updateMatrixWorld(),s},dispose:i.objectDispose}),w=r.defineProcessor({type:"SpotLight",config:p,commands:g,create(e,t){return c(new n.SpotLight,e,{},t)},dispose:i.objectDispose}),A={type:"light",object:!0,compiler:h,rule:C,processors:[b,v,y,P,j,w],lifeOrder:r.SUPPORT_LIFE_CYCLE.THREE};o.LightCompiler=h,o.default=A,o.getAmbientLightConfig=u,o.getDirectionalLightConfig=d,o.getHemisphereLightConfig=L,o.getPointLightConfig=f,o.getRectAreaLightConfig=l,o.getSpotLightConfig=p,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
