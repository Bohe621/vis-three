(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("@vis-three/tdcm")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm"],e):(o=typeof globalThis<"u"?globalThis:o||self,e((o["vis-three"]=o["vis-three"]||{},o["vis-three"]["module-controls"]={}),o.tdcm))})(this,function(o,e){"use strict";const t=[],l=e.defineRule([function(n){return e.globalOption.symbol.validator(n.symbol)||t.includes(n.symbol)},e.DEFAULT_RULE.OPERATE_ADD,e.DEFAULT_RULE.OPERATE_DELETE,e.DEFAULT_RULE.OPERATE_COVER,e.DEFAULT_RULE.OPERATE_COMPILE]);class r extends e.Compiler{constructor(s){super(s)}useModel(s,i){return t.push(e.uniqueSymbol(s.type)),super.useModel(s,i)}reigstProcessor(s,i){return this.useModel(s,i)}}const u=function(){return Object.assign(e.getBasicConfig(),{})},E=e.defineModule({type:"controls",compiler:r,rule:l,models:[],lifeOrder:e.SUPPORT_LIFE_CYCLE.NINE});o.ControlsCompiler=r,o.default=E,o.getControlsConfig=u,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
