(function(p,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("@vis-three/tdcm"),require("three"),require("three/examples/jsm/geometries/DecalGeometry.js")):typeof define=="function"&&define.amd?define(["exports","@vis-three/tdcm","three","three/examples/jsm/geometries/DecalGeometry.js"],c):(p=typeof globalThis<"u"?globalThis:p||self,c((p["vis-three"]=p["vis-three"]||{},p["vis-three"]["module-geometry"]={}),p.tdcm,p.three,p.DecalGeometry_js))})(this,function(p,c,o,D){"use strict";const m=function(){return Object.assign(c.getBasicConfig(),{center:!0,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},groups:[]})},_=function(){return Object.assign(m(),{width:5,height:5,depth:5,widthSegments:1,heightSegments:1,depthSegments:1})},z=function(){return Object.assign(m(),{radius:3,widthSegments:32,heightSegments:32,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI})},B=function(){return Object.assign(m(),{width:5,height:5,widthSegments:1,heightSegments:1})},V=function(){return Object.assign(m(),{radius:3,segments:8,thetaStart:0,thetaLength:Math.PI*2})},j=function(){return Object.assign(m(),{radius:3,tube:.4,radialSegments:8,tubularSegments:6,arc:Math.PI*2})},A=function(){return Object.assign(m(),{innerRadius:2,outerRadius:3,thetaSegments:8,phiSegments:8,thetaStart:0,thetaLength:Math.PI*2})},U=function(){return Object.assign(m(),{url:""})},I=function(){return Object.assign(m(),{attribute:{position:[],color:[],index:[],normal:[],uv:[],uv2:[]}})},F=function(){return Object.assign(m(),{target:"",thresholdAngle:1})},E=function(){return Object.assign(m(),{center:!1,path:[],divisions:36,space:!0})},N=function(){return Object.assign(E(),{center:!1})},R=function(){return Object.assign(E(),{center:!1})},Q=function(){return Object.assign(E(),{center:!1})},Y=function(){return Object.assign(m(),{center:!1,path:[],tubularSegments:64,radius:1,radialSegments:8,closed:!1})},H=function(){return Object.assign(Y(),{center:!1})},$=function(){return Object.assign(m(),{center:!1,path:"",tubularSegments:64,radius:1,radialSegments:8,closed:!1})},q=function(){return Object.assign(m(),{center:!1,shape:"",curveSegments:12})},W=function(){return Object.assign(m(),{center:!1,shapes:"",options:{curveSegments:12,steps:1,depth:1,bevelEnabled:!0,bevelThickness:.2,bevelSize:.1,bevelOffset:0,bevelSegments:3,extrudePath:"",UVGenerator:"default"}})},k=function(){return Object.assign(m(),{center:!1,path:"",space:!1,divisions:36})},X=function(){return Object.assign(m(),{path:"",divisions:32,segments:12,phiStart:0,phiLength:Math.PI*2})},Z=function(){return Object.assign(m(),{center:!1,target:{geometry:"",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:0,y:0,z:0}},point:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0},size:{x:0,y:0,z:0}})},J=function(r,e){e.center&&r.center(),r.computeBoundingBox();const t=r.boundingBox,s=e.position,n=e.rotation,a=e.scale,u=new o.Quaternion().setFromEuler(new o.Euler(n.x,n.y,n.z,"XYZ"));return r.applyQuaternion(u),r.scale(a.x,a.y,a.z),e.center&&r.center(),r.computeBoundingBox(),r.translate((t.max.x-t.min.x)/2*s.x,(t.max.y-t.min.y)/2*s.y,(t.max.z-t.min.z)/2*s.z),r},P={reg:new RegExp(".*"),handler({config:r,target:e,model:t,engine:s,compiler:n}){const a=t.createPuppet({model:t,config:r,engine:s,compiler:n});e.copy(a),t.disposePuppet({model:t,target:a,puppet:a,config:r,engine:s,compiler:n})}},y=c.defineModel.extend({commands:{add:{groups({target:r,value:e}){r.addGroup(e.start,e.count,e.materialIndex)},$reg:[P]},set:{groups(r){const{path:e,target:t,config:s}=r;if(e[1]!==void 0){t.groups.splice(Number(r.path[1]),1);const n=s.groups[e[1]];t.addGroup(n.start,n.count,n.materialIndex)}else console.warn("geometry processor can not set group",r)},$reg:[P]},delete:{groups({target:r,key:e}){r.groups.splice(Number(e),1)},$reg:[P]}},create(r,e){r.clearGroups();for(const t of e.groups)r.addGroup(t.start,t.count,t.materialIndex);return J(r,e)},dispose(r){r.dispose()}}),K=y(r=>({type:"BoxGeometry",config:_,create({config:e}){return r.create(new o.BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments),e)},dispose({target:e}){r.dispose(e)}})),ee=y(r=>({type:"CircleGeometry",config:V,create({config:e}){return r.create(new o.CircleGeometry(e.radius,e.segments,e.thetaStart,e.thetaLength),e)},dispose({target:e}){r.dispose(e)}})),h=function(r){return r>1?1:r<0?0:r},v={default:void 0,cover:{generateTopUV(r,e,t,s,n){const a=e[t*3],u=e[t*3+1],i=e[s*3],l=e[s*3+1],G=e[n*3],g=e[n*3+1];return[new o.Vector2(h(a),h(u)),new o.Vector2(h(i),h(l)),new o.Vector2(h(G),h(g))]},generateSideWallUV(r,e,t,s,n,a){const u=e[t*3],i=e[t*3+1],l=e[t*3+2],G=e[s*3],g=e[s*3+1],O=e[s*3+2],we=e[n*3],Le=e[n*3+1],x=e[n*3+2],be=e[a*3],Se=e[a*3+1],f=e[a*3+2];return Math.abs(i-g)<Math.abs(u-G)?[new o.Vector2(h(u),h(1-l)),new o.Vector2(h(G),h(1-O)),new o.Vector2(h(we),h(1-x)),new o.Vector2(h(be),h(1-f))]:[new o.Vector2(h(i),h(1-l)),new o.Vector2(h(g),h(1-O)),new o.Vector2(h(Le),h(1-x)),new o.Vector2(h(Se),h(1-f))]}}};class C extends o.BufferGeometry{constructor(e){super(),this.type="LoadBufferGeometry",e&&this.copy(e)}}class d extends o.BufferGeometry{constructor(e=[],t=36,s=!0){super(),this.type="CurveGeometry",this.parameters={path:e.map(n=>n.clone()),space:s,divisions:t}}}class w extends d{constructor(e=[],t=36,s=!0){super(e,t,s),this.type="CubicBezierCurveGeometry";const n=new o.CurvePath;if(e.length<4){console.warn("CubicBezierCurveGeometry path length at least 4.");return}const a=4+(e.length-4)-(e.length-4)%3;for(let i=2;i<a;i+=3)n.add(new o.CubicBezierCurve3(e[i-2],e[i-1],e[i],e[i+1]));const u=n.curves.reduce((i,l)=>i+=l.arcLengthDivisions,0);if(t>u){const i=Math.ceil((t-u)/n.curves.length);n.curves.forEach(l=>{l.arcLengthDivisions=l.arcLengthDivisions*(i+1),l.updateArcLengths()})}this.setFromPoints(s?n.getSpacedPoints(t):n.getPoints(t))}}class te extends d{constructor(e=[],t=36,s=!0){if(super(e,t,s),this.type="LineCurveGeometry",!e.length){console.warn("LineCurveGeometry path length at least 1.");return}const n=new o.CurvePath;for(let u=1;u<e.length;u+=1)n.add(new o.LineCurve3(e[u-1],e[u]));const a=n.curves.reduce((u,i)=>u+=i.arcLengthDivisions,0);if(t>a){const u=Math.ceil((t-a)/n.curves.length);n.curves.forEach(i=>{i.arcLengthDivisions=i.arcLengthDivisions*(u+1),i.updateArcLengths()})}this.setFromPoints(s?n.getSpacedPoints(t):n.getPoints(t))}}class L extends d{constructor(e=[],t=36,s=!0){super(e,t,s),this.type="QuadraticBezierCurveGeometry";const n=new o.CurvePath;if(e.length<3){console.warn("QuadraticBezierCurveGeometry path length at least 3.");return}const a=3+(e.length-3)-(e.length-3)%2;for(let i=1;i<a;i+=2)n.add(new o.QuadraticBezierCurve3(e[i-1],e[i],e[i+1]));const u=n.curves.reduce((i,l)=>i+=l.arcLengthDivisions,0);if(t>u){const i=Math.ceil((t-u)/n.curves.length);n.curves.forEach(l=>{l.arcLengthDivisions=l.arcLengthDivisions*(i+1),l.updateArcLengths()})}this.setFromPoints(s?n.getSpacedPoints(t):n.getPoints(t))}}class b extends d{constructor(e=[],t=36,s=!0){if(super(e,t,s),this.type="SplineCurveGeometry",!e.length){console.warn("SplineCurveGeometry path length at least 1.");return}const n=new o.CatmullRomCurve3(e);this.setFromPoints(s?n.getSpacedPoints(t):n.getPoints(t))}}class re extends o.ShapeGeometry{constructor(e=[new o.Vector2(0,0)],t=12){const s=new o.Shape,n=e[0];if(n){s.moveTo(n.x,n.y);for(let a=1;a<e.length;a+=1)s.lineTo(e[a].x,e[a].y)}super(s,t),this.type="LineShapeGeometry"}}class S extends o.TubeGeometry{constructor(e=[],t=64,s=1,n=8,a=!1){if(!e.length){console.warn("LineTubeGeometry path length at least 1.");return}const u=new o.CurvePath;for(let i=1;i<e.length;i+=1)u.add(new o.LineCurve3(e[i-1],e[i]));super(u,t,s,n,a),this.type="LineTubeGeometry"}}class ne extends o.TubeGeometry{constructor(e=[],t=64,s=1,n=8,a=!1){if(!e.length){console.warn("SplineTubeGeometry path length at least 1.");return}const u=new o.CatmullRomCurve3(e);super(u,t,s,n,a),this.type="SplineTubeGeometry"}}class M extends o.TubeGeometry{constructor(e=new o.Path,t=64,s=1,n=8,a=!1){super(e,t,s,n,a),this.type="PathTubeGeometry"}}class T extends o.BufferGeometry{constructor(e=new o.Path,t=36,s=!0){super(),this.type="PathGeometry",this.parameters={path:e,space:s,divisions:t},e.curves.length&&this.setFromPoints(s?e.getSpacedPoints(t):e.getPoints(t))}}const se=y(r=>({type:"CubicBezierCurveGeometry",config:R,create({config:e}){return r.create(new w(e.path.map(t=>new o.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e)},dispose({target:e}){r.dispose(e)}})),oe=y(r=>({type:"CustomGeometry",config:I,shared:{generateGeometry(e){const t=new o.BufferGeometry;return e.position.length&&t.setAttribute("position",new o.Float32BufferAttribute(e.position,3)),e.color.length&&t.setAttribute("color",new o.Float32BufferAttribute(e.color,3)),e.normal.length&&t.setAttribute("normal",new o.Float32BufferAttribute(e.normal,3)),e.uv.length&&t.setAttribute("uv",new o.Float32BufferAttribute(e.uv,2)),e.uv2.length&&t.setAttribute("uv2",new o.Float32BufferAttribute(e.uv2,2)),e.index.length&&t.setIndex(e.index),t}},create({model:e,config:t}){return r.create(e.generateGeometry(t.attribute),t)},dispose({target:e}){r.dispose(e)}})),ae=y(r=>({type:"EdgesGeometry",config:F,shared:{occupyGeometry:new o.EdgesGeometry(new o.BoxGeometry(5,5,5))},create({model:e,config:t,engine:s}){const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.GEOMETRY,t.target);return!n||!(n instanceof o.BufferGeometry)?(console.error(`engine rescoure can not found url: ${t.target}`),e.occupyGeometry):r.create(new o.EdgesGeometry(n,t.thresholdAngle),t)},dispose({target:e}){r.dispose(e)}})),ue=y(r=>({type:"ExtrudeGeometry",config:W,context({model:e}){return{shapeEvent:void 0,pathEvent:void 0}},create({model:e,config:t,engine:s}){var i,l;const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.SHAPE,t.shapes)||void 0,a=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.PATH,t.options.extrudePath)||void 0,u=new o.ExtrudeGeometry(n,Object.assign({},t.options,{extrudePath:a,UVGenerator:v[t.options.UVGenerator||"default"]}));return n&&(e.shapeEvent=()=>{t.shapes=t.shapes},(i=e.toModel(t.shapes))==null||i.on(c.MODEL_EVENT.COMPILED_UPDATE,e.shapeEvent)),a&&(e.pathEvent=()=>{t.options.extrudePath=t.options.extrudePath},(l=e.toModel(t.options.extrudePath))==null||l.on(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.create(u,t)},dispose({model:e,config:t,target:s}){var n,a;e.shapeEvent&&((n=e.toModel(t.shapes))==null||n.off(c.MODEL_EVENT.COMPILED_UPDATE,e.shapeEvent)),e.pathEvent&&((a=e.toModel(t.options.extrudePath))==null||a.off(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.dispose(s)}})),ie=y(r=>({type:"LatheGeometry",config:X,context({model:e}){return{pathEvent:void 0}},create({model:e,config:t,engine:s}){var u;const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.PATH,t.path)||void 0,a=new o.LatheGeometry(n?n.getPoints(t.divisions):void 0,t.segments,t.phiStart,t.phiLength);return n&&(e.pathEvent=()=>{t.path=t.path},(u=e.toModel(t.path))==null||u.on(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.create(a,t)},dispose({model:e,config:t,target:s}){var n;e.pathEvent&&((n=e.toModel(t.path))==null||n.off(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.dispose(s)}})),ce=y(r=>({type:"LineTubeGeometry",config:H,create({config:e}){return r.create(new S(e.path.map(t=>new o.Vector3(t.x,t.y,t.z)),e.tubularSegments,e.radius,e.radialSegments,e.closed),e)},dispose({target:e}){r.dispose(e)}})),pe=y(r=>({type:"LoadGeometry",config:U,create({config:e,engine:t}){const s=t.resourceManager.resourceMap.get(e.url);return!s&&!(s instanceof o.BufferGeometry)?(console.error(`engine rescoure can not found url: ${e.url}`),new o.BoxGeometry(5,5,5)):r.create(new C(s),e)},dispose({target:e}){r.dispose(e)}})),he=y(r=>({type:"PathGeometry",config:k,create({model:e,config:t,engine:s}){var u;const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.PATH,t.path)||void 0,a=new T(n,t.divisions,t.space);return n&&(e.pathEvent=()=>{t.path=t.path},(u=e.toModel(t.path))==null||u.on(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.create(a,t)},dispose({model:e,config:t,target:s}){var n;e.pathEvent&&((n=e.toModel(t.path))==null||n.off(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.dispose(s)}})),ye=y(r=>({type:"PathTubeGeometry",config:$,context(){return{pathEvent:void 0,restrictor:0}},create({model:e,config:t,engine:s}){var u;const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.PATH,t.path)||void 0,a=new M(n,t.tubularSegments,t.radius,t.radialSegments,t.closed);return n&&(e.pathEvent=()=>{e.restrictor||(e.restrictor=window.setTimeout(()=>{t.path=t.path,e.restrictor=0},1e3/30))},(u=e.toModel(t.path))==null||u.on(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.create(a,t)},dispose({model:e,config:t,target:s}){var n;window.clearTimeout(e.restrictor),e.pathEvent&&((n=e.toModel(t.path))==null||n.off(c.MODEL_EVENT.COMPILED_UPDATE,e.pathEvent)),r.dispose(s)}})),le=y(r=>({type:"PlaneGeometry",config:B,create({config:e}){return r.create(new o.PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments),e)},dispose({target:e}){r.dispose(e)}})),me=y(r=>({type:"QuadraticBezierCurveGeometry",config:Q,create({config:e}){return r.create(new L(e.path.map(t=>new o.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e)},dispose({target:e}){r.dispose(e)}})),de=y(r=>({type:"RingGeometry",config:A,create({config:e}){return r.create(new o.RingGeometry(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength),e)},dispose({target:e}){r.dispose(e)}})),Ge=y(r=>({type:"ShapeGeometry",config:q,create({model:e,config:t,engine:s}){var u;const n=s.compilerManager.getObjectFromModule(c.MODULE_TYPE.SHAPE,t.shape)||void 0,a=new o.ShapeGeometry(n,t.curveSegments);return n&&(e.shapeEvent=()=>{t.shape=t.shape},(u=e.toModel(t.shape))==null||u.on(c.MODEL_EVENT.COMPILED_UPDATE,e.shapeEvent)),r.create(a,t)},dispose({model:e,config:t,target:s}){var n;e.shapeEvent&&((n=e.toModel(t.shape))==null||n.on(c.MODEL_EVENT.COMPILED_UPDATE,e.shapeEvent)),r.dispose(s)}})),ge=y(r=>({type:"SplineCurveGeometry",config:N,create({config:e}){return r.create(new b(e.path.map(t=>new o.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e)},dispose({target:e}){r.dispose(e)}})),Ee=y(r=>({type:"TorusGeometry",config:j,create({config:e}){return r.create(new o.TorusGeometry(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc),e)},dispose({target:e}){r.dispose(e)}})),Pe=y(r=>({type:"SphereGeometry",config:z,create({config:e}){return r.create(new o.SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength),e)},dispose({target:e}){r.dispose(e)}})),ve=y(r=>({type:"DecalGeometry",config:Z,shared:{tempGeometry:new o.BufferGeometry,tempMesh:new o.Mesh},create({model:e,config:t,engine:s}){const n=t.target.geometry&&s.getObjectBySymbol(t.target.geometry)||e.tempGeometry;return e.tempMesh.geometry=n,e.tempMesh.matrixWorld.compose(new o.Vector3(t.target.position.x,t.target.position.y,t.target.position.z),new o.Quaternion().setFromEuler(new o.Euler(t.target.rotation.x,t.target.rotation.y,t.target.rotation.z)),new o.Vector3(t.target.scale.x,t.target.scale.y,t.target.scale.z)),r.create(new D.DecalGeometry(e.tempMesh,new o.Vector3(t.point.x,t.point.y,t.point.z),new o.Euler(t.orientation.x,t.orientation.y,t.orientation.z),new o.Vector3(t.size.x,t.size.y,t.size.z)),t)},dispose({target:e}){r.dispose(e)}})),Ce=c.defineModule({type:"geometry",models:[K,ee,se,oe,ve,ae,ue,ie,ce,pe,he,ye,le,me,de,Ge,Pe,ge,Ee],lifeOrder:c.SUPPORT_LIFE_CYCLE.TWO});p.CubicBezierCurveGeometry=w,p.CurveGeometry=d,p.ExtrudeUVGenerator=v,p.LineCurveGeometry=te,p.LineShapeGeometry=re,p.LineTubeGeometry=S,p.LoadGeometry=C,p.PathGeometry=T,p.PathTubeGeometry=M,p.QuadraticBezierCurveGeometry=L,p.SplineCurveGeometry=b,p.SplineTubeGeometry=ne,p.default=Ce,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
