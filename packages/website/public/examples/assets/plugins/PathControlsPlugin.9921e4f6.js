import"../modulepreload-polyfill.b7f2da20.js";import{P as x,g as p,a as g}from"../vis-three.middleware.es.2e80d21b.js";import{M as T}from"../index.7ee6895f.js";import{g as S,t as _,a as v}from"../index.7d48aff8.js";import{bv as M,v as j,u as F,b,k as E,bJ as L,q as u,Q as O,Z as z,bE as C,an as N}from"../three.837c9bb0.js";import{C as I}from"../vis-three.convenient.es.83638baf.js";import{a as U}from"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../index.ce95ade9.js";import"../index.9c42f01c.js";import"../G6.7a2bba98.js";import"../Antdv.a86c3c0d.js";import"../index.1d7ad8b9.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";var V=Object.defineProperty,R=(t,e,o)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);const B="@vis-three/plugin-path-support-controls",k=new M(new I({width:32,height:32}).draw(t=>{t.beginPath(),t.fillStyle="rgba(0, 0, 0, 0)",t.fillRect(0,0,32,32),t.closePath(),t.beginPath(),t.fillStyle="rgb(0, 255, 238)",t.strokeStyle="black",t.lineWidth=1,t.arc(16,16,15,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()}).getDom()),H=new M(new I({width:32,height:32}).draw(t=>{t.beginPath(),t.fillStyle="rgba(0, 0, 0, 0)",t.fillRect(0,0,32,32),t.closePath(),t.beginPath(),t.fillStyle="rgb(255, 248, 0)",t.strokeStyle="black",t.lineWidth=1,t.arc(16,16,15,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()}).getDom()),W=new M(new I({width:32,height:32}).draw(t=>{t.beginPath(),t.fillStyle="rgba(0, 0, 0, 0)",t.fillRect(0,0,32,32),t.closePath(),t.beginPath(),t.fillStyle="rgb(255, 0, 0)",t.strokeStyle="black",t.lineWidth=1,t.moveTo(1,0),t.lineTo(31,16),t.lineTo(0,31),t.lineTo(1,0),t.stroke(),t.fill(),t.closePath()}).getDom()),y=class extends j{constructor(t,e,o,i){super(),s(this,"dragging",!1),s(this,"raycaster",new F),s(this,"anchorGizmo",new b(new E,y.anchorMaterial)),s(this,"moveGizmo",new b(new E,y.moveMaterial)),s(this,"switchGizmo",new b(new E,y.switchMaterial)),s(this,"plane",new L),s(this,"pointerManager"),s(this,"cachePlaneVector3",new u),s(this,"cacheQuaternion",new O),s(this,"cacheNormal",new u),s(this,"cachePosition",new u),s(this,"cacheVertical",0),s(this,"cacheMouseDownPoistion",new u),s(this,"cacheMouseMoveDirection",new u),s(this,"geometryIndexFunMap",{arcVertical:[],arcClockwise:[],bezierCP1:[],bezierCP2:[],quadraticCP1:[]}),s(this,"anchorArcUpdateIndexs",[]),s(this,"arcVecticalDirectionsMap",{}),s(this,"cacheConfigIndex",0),s(this,"currentGuizmo"),s(this,"currentIndex",0),s(this,"domElement"),s(this,"camera"),s(this,"config"),s(this,"object"),s(this,"_pointerHover",this.pointerHover.bind(this)),s(this,"_pointerMove",this.pointerMove.bind(this)),s(this,"_pointerDown",this.pointerDown.bind(this)),s(this,"_pointerUp",this.pointerUp.bind(this)),this.anchorGizmo.type="PathSupportControlsAnchorGizmo",this.moveGizmo.type="PathSupportControlsMoveGizmo",this.switchGizmo.type="PathSupportControlsSwitchGizmo",this.add(this.anchorGizmo,this.moveGizmo,this.switchGizmo),this.renderOrder=1/0,this.matrixAutoUpdate=!1,i&&this.setConfig(i),o&&this.setObject(o),this.setDom(e).setCamera(t).connect()}setDom(t){return this.domElement&&this.disconnect(),this.domElement=t,this.connect(),this}setCamera(t){return this.camera=t,this}setObject(t){return this.object=t,this.matrix=t.matrix,this.matrixWorld=t.matrixWorld,this}setConfig(t){this.geometryIndexFunMap={arcVertical:[],arcClockwise:[],bezierCP1:[],bezierCP2:[],quadraticCP1:[]},this.arcVecticalDirectionsMap={},this.anchorArcUpdateIndexs=[],this.config=t;const e=[],o=[],i=[],n=this.geometryIndexFunMap,l=this.arcVecticalDirectionsMap;this.config.curves.forEach((r,c,h)=>{if(c===h.length-1?e.push(r.params[0],r.params[1],0,r.params[r.params.length-2],r.params[r.params.length-1],0):e.push(r.params[0],r.params[1],0),r.curve==="arc"){this.anchorArcUpdateIndexs.push(c,c+1);const a=S(...r.params);i.push(a.center.x,a.center.y,0),n.arcVertical.push(i.length/3-1),l[i.length/3-1]={segment:c,direction:new u(a.verticalDirection.x,a.verticalDirection.y,0)};const f=a.mid.clone().sub(a.start).multiplyScalar(.5),G=a.start.clone().add(f);o.push(G.x,G.y,0),n.arcClockwise.push(c)}});const d=function(r,c){const h=r.geometry;h.setAttribute("position",new N(new Float32Array(c),3)),h.getAttribute("position").needsUpdate=!0,h.computeBoundingBox(),h.computeBoundingSphere()};return d(this.anchorGizmo,e),d(this.moveGizmo,i),d(this.switchGizmo,o),this}update(){this.setConfig(this.config)}use(t){this.pointerManager=t}connect(){return this.object&&this.config&&(this.domElement.addEventListener("pointermove",this._pointerHover),this.domElement.addEventListener("mousedown",this._pointerDown)),this}disconnect(){return this.domElement.removeEventListener("pointermove",this._pointerHover),this.domElement.removeEventListener("mousedown",this._pointerDown),this}dispose(){const t=e=>{e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(o=>{o.dispose()}):e.material.dispose()};t(this.anchorGizmo),t(this.moveGizmo),t(this.switchGizmo)}intersectPoint(t){this.raycaster.setFromCamera(this.pointerManager.mouse,this.camera);const e=this.raycaster.intersectObject(this,!0);return e.length?(this.currentGuizmo=e[0].object,this.currentIndex=e[0].index,{guizmo:this.currentGuizmo,index:this.currentIndex}):null}intersectPlane(t){return this.raycaster.setFromCamera(this.pointerManager.mouse,this.camera),this.raycaster.ray.intersectPlane(this.plane,this.cachePlaneVector3)}pointerHover(t){if(this.dragging||!this.visible)return;const e=this.intersectPoint(t);Number.isInteger(e==null?void 0:e.index)?this.domElement.style.cursor="move":this.domElement.style.cursor=""}pointerDown(t){if(!this.visible)return;if(this.cacheQuaternion.setFromRotationMatrix(this.object.matrixWorld),this.cacheNormal.set(0,0,1).applyQuaternion(this.cacheQuaternion),this.cachePosition.setFromMatrixPosition(this.object.matrixWorld),this.plane.set(this.cacheNormal,this.cachePosition.length()),this.intersectPoint(t)){if(this.dragging=!0,this.currentGuizmo===this.switchGizmo){const i=this.geometryIndexFunMap.arcClockwise[this.currentIndex],n=this.config.curves[i];this.dispatchEvent({type:"mousedown",index:i,config:this.config,last:!1,object:this.object,operate:"switch"}),n.params[3]=!n.params[3],this.dispatchEvent({type:"changing",index:i,config:this.config,last:!1,object:this.object,operate:"switch"}),this.cacheConfigIndex=i,this.domElement.addEventListener("mouseup",this._pointerUp);return}if(this.cacheMouseDownPoistion.copy(this.intersectPlane(t)).sub(this.cachePosition),this.currentGuizmo===this.moveGizmo&&this.geometryIndexFunMap.arcVertical.includes(this.currentIndex)){const i=this.arcVecticalDirectionsMap[this.currentIndex];this.cacheVertical=this.config.curves[i.segment].params[2],this.dispatchEvent({type:"mousedown",index:i.segment,config:this.config,last:!1,object:this.object,operate:"move"}),this.cacheConfigIndex=i.segment}const o=this.currentIndex===this.config.curves.length?this.currentIndex-1:this.currentIndex;this.dispatchEvent({type:"mousedown",index:o,config:this.config,last:this.currentIndex===this.config.curves.length,object:this.object,operate:"anchor"}),this.cacheConfigIndex=o,this.domElement.addEventListener("mousemove",this._pointerMove),this.domElement.addEventListener("mouseup",this._pointerUp)}}pointerMove(t){if(!this.visible&&!this.dragging)return;const e=this.intersectPlane(t);if(!e)return;e.sub(this.cachePosition),this.cacheMouseMoveDirection.copy(e).sub(this.cacheMouseDownPoistion).normalize();const o=this.currentGuizmo,i=this.currentIndex,n=this.config,l=this.cacheConfigIndex,d=this.geometryIndexFunMap;if(o===this.anchorGizmo){const r=n.curves.length;if(i!==n.curves.length){const a=n.curves[i];a.params[0]=e.x,a.params[1]=e.y}else{const a=n.curves[r-1];a.params[a.params.length-2]=e.x,a.params[a.params.length-1]=e.y}const c=this.anchorGizmo.geometry.getAttribute("position"),h=c.array;h[i*3]=e.x,h[i*3+1]=e.y,c.needsUpdate=!0,this.anchorArcUpdateIndexs.includes(this.currentIndex)&&this.update(),this.dispatchEvent({type:"changing",index:l,config:this.config,last:this.currentIndex===this.config.curves.length,object:this.object,operate:"anchor"})}else if(o===this.moveGizmo&&d.arcVertical.includes(i)){const r=this.arcVecticalDirectionsMap[i],c=this.cacheMouseMoveDirection.angleTo(r.direction);n.curves[r.segment].params[2]=this.cacheVertical+e.sub(this.cacheMouseDownPoistion).length()*Math.cos(c);const h=S(...n.curves[r.segment].params),a=this.moveGizmo.geometry.getAttribute("position"),f=a.array;f[i*3]=h.center.x,f[i*3+1]=h.center.y,a.needsUpdate=!0,this.dispatchEvent({type:"changing",index:r.segment,config:this.config,last:!1,object:this.object,operate:"move"})}}pointerUp(t){this.dragging=!1,this.domElement.removeEventListener("mousemove",this._pointerMove),this.domElement.removeEventListener("mouseup",this._pointerUp),this.currentGuizmo&&(this.currentGuizmo.geometry.computeBoundingSphere(),this.currentGuizmo.geometry.computeBoundingBox()),this.dispatchEvent({type:"mouseup",index:this.cacheConfigIndex,config:this.config,last:this.currentIndex===this.config.curves.length,object:this.object,operate:this.currentGuizmo===this.anchorGizmo?"anchor":this.currentGuizmo===this.moveGizmo?"move":"switch"})}};let w=y;s(w,"anchorMaterial",new z({map:k,transparent:!0,depthFunc:C,alphaTest:.01,sizeAttenuation:!1,size:15}));s(w,"moveMaterial",new z({map:H,transparent:!0,depthFunc:C,alphaTest:.01,sizeAttenuation:!1,size:15}));s(w,"switchMaterial",new z({map:W,transparent:!0,depthFunc:C,alphaTest:.01,sizeAttenuation:!1,size:15}));const Q=_(B),q=function(t={}){let e,o;return{name:Q,deps:[...x,U],install(i){const n=new w(i.camera,i.dom);t.raycaster&&t.raycaster.params&&Object.assign(n.raycaster.params,t.raycaster.params),n.use(i.pointerManager),i.pathSupportControls=n,o=l=>{n.setDom(l.dom)},e=l=>{n.setCamera(l.camera)},i.addEventListener(v.SETDOM,o),i.addEventListener(v.SETCAMERA,e)},dispose(i){i.removeEventListener(v.SETDOM,o),i.removeEventListener(v.SETCAMERA,e),i.pathSupportControls.disconnect().dispose(),delete i.pathSupportControls}}},m=new T().install(q()).setDom(document.getElementById("app")).setSize().play();p.injectEngine=m;const Y=p(g.ORTHOGRAPHICCAMERA,{far:1e3,near:0,zoom:20,position:{z:100}}),D=p("Scene");m.setSceneBySymbol(D.vid);m.setCameraBySymbol(Y.vid);p.injectScene=!0;window.scene=D;const P=p(g.PATH,{autoClose:!1,curves:[{curve:"line",params:[0,0,10,10]},{curve:"line",params:[10,10,10,0]},{curve:"line",params:[10,0,-10,-10]},{curve:"arc",params:[-10,-10,-0,!1,10,-10]},{curve:"bezier",params:[10,-10,20,-10,10,10,20,10]},{curve:"arc",params:[20,10,-0,!0,30,-10]}]});window.drawPath=P;const J=p(g.PATHGEOMETRY,{path:P.vid,space:!1}),Z=p(g.LINEBASICMATERIAL,{}),A=p(g.LINE,{material:Z.vid,geometry:J.vid});window.line=A;m.pathSupportControls.setObject(m.getObjectBySymbol(A.vid)).setConfig(P).connect();m.scene.add(m.pathSupportControls);window.engine=m;document.getElementById("deletePath").onclick=()=>{P.curves.splice(1,2),m.pathSupportControls.update()};
