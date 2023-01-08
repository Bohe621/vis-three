var y=Object.defineProperty;var S=(s,e,o)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var t=(s,e,o)=>(S(s,typeof e!="symbol"?e+"":e,o),o);import{t as w,a as m,v as D}from"../index.5dcba3b7.js";import{V as f,Y as R,aY as d,M as _,B as F,a as P,P as K,L as U,b as x}from"../three.057c7ef5.js";import{W as A,C}from"../index.83854a9b.js";import{a as T,b as E,R as j}from"../index.1b4ee7e6.js";import{E as N}from"../index.8dbba16e.js";import{G as V}from"../index.90980216.js";import{E as O}from"../index.d6bea163.js";const p=new f,u=new R,v=new f;class Y{constructor(e,o){t(this,"object");t(this,"domElement");t(this,"enabled",!0);t(this,"movementSpeed",1);t(this,"lookSpeed",.005);t(this,"lookVertical",!0);t(this,"autoForward",!1);t(this,"activeLook",!0);t(this,"heightSpeed",!1);t(this,"heightCoef",1);t(this,"heightMin",0);t(this,"heightMax",1);t(this,"constrainVertical",!1);t(this,"verticalMin",0);t(this,"verticalMax",Math.PI);t(this,"mouseDragOn",!1);t(this,"autoSpeedFactor",0);t(this,"mouseX",0);t(this,"mouseY",0);t(this,"moveForward",!1);t(this,"moveBackward",!1);t(this,"moveLeft",!1);t(this,"moveRight",!1);t(this,"moveUp",!1);t(this,"moveDown",!1);t(this,"viewHalfX",0);t(this,"viewHalfY",0);t(this,"targetPosition",new f);t(this,"lat",0);t(this,"lon",0);t(this,"_onMouseMove",this.onMouseMove.bind(this));t(this,"_onMouseDown",this.onMouseDown.bind(this));t(this,"_onMouseUp",this.onMouseUp.bind(this));t(this,"_onKeyDown",this.onKeyDown.bind(this));t(this,"_onKeyUp",this.onKeyUp.bind(this));t(this,"contextmenu",function(e){e.preventDefault()});o===void 0&&(console.warn('THREE.FirstPersonControls: The second parameter "domElement" is now mandatory.'),o=document.body),this.object=e,this.domElement=o,this.domElement.addEventListener("contextmenu",this.contextmenu),this.domElement.addEventListener("mousemove",this._onMouseMove),this.domElement.addEventListener("mousedown",this._onMouseDown),this.domElement.addEventListener("mouseup",this._onMouseUp),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.handleResize(),this.setOrientation()}setCamera(e){this.object=e}setDom(e){this.domElement.removeEventListener("contextmenu",this.contextmenu),this.domElement.removeEventListener("mousedown",this._onMouseDown),this.domElement.removeEventListener("mousemove",this._onMouseMove),this.domElement.removeEventListener("mouseup",this._onMouseUp),this.domElement=e,this.domElement.addEventListener("contextmenu",this.contextmenu),this.domElement.addEventListener("mousedown",this._onMouseDown),this.domElement.addEventListener("mousemove",this._onMouseMove),this.domElement.addEventListener("mouseup",this._onMouseUp)}setSize(e,o){this.handleResize()}setOrientation(){const e=this.object.quaternion;p.set(0,0,-1).applyQuaternion(e),u.setFromVector3(p),this.lat=90-d.radToDeg(u.phi),this.lon=d.radToDeg(u.theta)}handleResize(){this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2}onMouseDown(e){if(this.domElement.focus(),this.activeLook)switch(e.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0}onMouseUp(e){if(this.activeLook)switch(e.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1}onMouseMove(e){this.mouseX=e.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=e.pageY-this.domElement.offsetTop-this.viewHalfY}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}}lookAt(e,o,a){return e.isVector3?v.copy(e):v.set(e,o,a),this.object.lookAt(v),this.setOrientation(),this}update(e){if(this.enabled===!1)return;if(this.heightSpeed){const b=d.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=e*(b*this.heightCoef)}else this.autoSpeedFactor=0;const o=e*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(o+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(o),this.moveLeft&&this.object.translateX(-o),this.moveRight&&this.object.translateX(o),this.moveUp&&this.object.translateY(o),this.moveDown&&this.object.translateY(-o);let a=e*this.lookSpeed;this.activeLook||(a=0);let h=1;this.constrainVertical&&(h=Math.PI/(this.verticalMax-this.verticalMin)),this.lon-=this.mouseX*a,this.lookVertical&&(this.lat-=this.mouseY*a*h),this.lat=Math.max(-85,Math.min(85,this.lat));let i=d.degToRad(90-this.lat);const n=d.degToRad(this.lon);this.constrainVertical&&(i=d.mapLinear(i,0,Math.PI,this.verticalMin,this.verticalMax));const r=this.object.position;this.targetPosition.setFromSphericalCoords(1,i,n).add(r),this.object.lookAt(this.targetPosition)}dispose(){this.domElement.removeEventListener("contextmenu",this.contextmenu),this.domElement.removeEventListener("mousedown",this._onMouseDown),this.domElement.removeEventListener("mousemove",this._onMouseMove),this.domElement.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}}const B="@vis-three/first-person-controls-plugin",M=w(B),I=function(s={}){let e,o,a,h;return{name:M,install(i){const n=new Y(i.camera,i.dom);n.movementSpeed=s.movementSpeed||1,n.lookSpeed=s.lookSpeed||.005,n.lookVertical=s.lookVertical||!0,n.autoForward=s.autoForward||!1,n.activeLook=s.activeLook||!0,n.heightSpeed=s.heightSpeed||!1,n.heightCoef=s.heightCoef||1,n.heightMin=s.heightMin||0,n.heightMax=s.heightMax||1,i.firstPersonControls=n,e=r=>{n.setDom(r.dom)},i.addEventListener(m.SETDOM,e),o=r=>{n.setCamera(r.camera)},i.addEventListener(m.SETCAMERA,o),a=r=>{n.setSize(r.width,r.height)},i.addEventListener(m.SETSIZE,a),h=i.render,i.render=function(){h(),n.update(1e3/60)}},dispose(i){i.removeEventListener(m.SETDOM,e),i.removeEventListener(m.SETCAMERA,o),i.removeEventListener(m.SETSIZE,a),i.render=h}}},G="@vis-three/first-person-render-strategy",H=w(G),X=function(){let s;return{name:H,condition:[M,T],exec(e){s=o=>{e.firstPersonControls.update(o.delta)},e.renderManager.addEventListener(E.RENDER,s)},rollback(e){e.renderManager.removeEventListener(E.RENDER,s)}}},g=D({plugins:[j(),A({antialias:!0,alpha:!0}),N({WebGLMultisampleRenderTarget:!0}),C(),V(),I({movementSpeed:40,lookSpeed:.1,lookVertical:!1,heightSpeed:!0})],strategy:[O(),X()]}).setDom(document.getElementById("app")).setSize().play(),l=g.scene,c=new _(new F(10,10,10),new P({color:"rgb(255, 105, 100)"}));c.position.x=10;l.add(c);const L=new K("rgb(255, 255, 255)",1,300,0);L.position.y=30;l.add(L);const z=new U(c.geometry);l.add(z);const k=new x(c.geometry);k.position.x=-10;l.add(k);window.engine=g;
