(function(i,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("@vis-three/core"),require("three"),require("@vis-three/module-helper"),require("@vis-three/utils")):typeof define=="function"&&define.amd?define(["exports","@vis-three/core","three","@vis-three/module-helper","@vis-three/utils"],l):(i=typeof globalThis<"u"?globalThis:i||self,l((i["vis-three"]=i["vis-three"]||{},i["vis-three"]["plugin-object-helper"]={}),i.core,i.three,i.moduleHelper,i.utils))})(this,function(i,l,p,s,S){"use strict";class b extends l.EventDispatcher{constructor(e={}){super(),this.helperGenerator={PointLight:s.PointLightHelper,SpotLight:s.SpotLightHelper,DirectionalLight:s.DirectionalLightHelper,RectAreaLight:s.RectAreaLightHelper,PerspectiveCamera:s.CameraHelper,OrthographicCamera:s.CameraHelper,Mesh:s.MeshHelper,Group:s.GroupHelper,Sprite:s.SpriteHelper,Points:s.PointsHelper,Line:s.LineHelper,CSS3DPlane:s.CSS3DPlaneHelper,CSS3DSprite:s.CSS3DSpriteHelper,CSS2DPlane:s.CSS2DPlaneHelper},this.helperFilter={AmbientLight:!0,HemisphereLight:!0,Object3D:!0,TransformControls:!0,Scene:!0},this.objectFilter=new Set,this.objectHelperMap=new Map,e.helperGenerator&&(this.helperGenerator=Object.assign(this.helperGenerator,e.helperGenerator)),e.helperFilter&&(this.helperFilter=Object.assign(this.helperFilter,e.helperFilter)),e.objectFilter&&(this.objectFilter=new Set(e.objectFilter.concat(Array.from(this.objectFilter))))}addFilteredObject(...e){for(const t of e)this.objectFilter.add(t);return this}addObjectHelper(e){if(this.objectFilter.has(e)||this.objectHelperMap.has(e)||this.helperFilter[e.type]||e.type.toLocaleLowerCase().includes("helper"))return null;if(!this.helperGenerator[e.type])return console.warn(`object helper can not support this type object: '${e.type}'`),null;const t=new this.helperGenerator[e.type](e);return this.objectHelperMap.set(e,t),t}disposeObjectHelper(e){if(this.objectFilter.has(e)||this.helperFilter[e.type]||e.type.toLocaleLowerCase().includes("helper"))return null;if(!this.objectHelperMap.has(e))return console.warn("object helper manager can not found this object`s helper: ",e),null;const t=this.objectHelperMap.get(e);return t.geometry&&t.geometry.dispose(),t.material&&(t.material instanceof p.Material?t.material.dispose():t.material.forEach(u=>{u.dispose()})),this.objectHelperMap.delete(e),t}dispose(){for(const e of this.objectHelperMap.keys())this.disposeObjectHelper(e);this.objectHelperMap.clear()}}const H="@vis-three/plugin-object-helper",d="afterAdd",f="afterRemove";p.Scene.prototype.add=function(...n){if(!arguments.length)return this;if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}const e=n[0];if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this;if(e&&e.isObject3D){if(e.parent!==null){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent({type:"removed"}))}e.parent=this,this.children.push(e),e.dispatchEvent({type:"added"})}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n);return this};const L=p.Scene.prototype.add,O=p.Scene.prototype.remove;p.Scene.prototype.add=function(...n){return L.call(this,...n),this.dispatchEvent({type:d,objects:n}),this},p.Scene.prototype.remove=function(...n){return O.call(this,...n),this.dispatchEvent({type:f,objects:n}),this};const v=S.transPkgName(H),g=function(){let n,e,t;const u=new WeakSet;return{name:v,install(c){const h=new b,j=h.objectHelperMap;c.objectHelperManager=h,c.setObjectHelper=function(o){if(o)this.scene.traverse(r=>{j.has(r)&&this.scene.add(j.get(r))});else for(let r=0;r<this.scene.children.length;r++){const a=this.scene.children[r];j.has(a)&&this.scene.remove(j.get(a))}return this};const y=o=>{u.has(o)||(o.traverse(r=>{const a=h.addObjectHelper(r);a&&o.add(a)}),u.add(o))};e=o=>{const r=o.objects;for(const a of r){const E=h.addObjectHelper(a);E&&c.scene.add(E)}},t=o=>{const r=o.objects;for(const a of r){const E=h.disposeObjectHelper(a);E&&c.scene.remove(E)}},c.scene.addEventListener(d,e),c.scene.addEventListener(f,t),n=o=>{const r=o.scene;!u.has(r)&&y(r),r.hasEventListener(d,e)||r.addEventListener(d,e),r.hasEventListener(f,t)||r.addEventListener(f,t)},c.addEventListener(l.ENGINE_EVENT.SETSCENE,n)},dispose(c){c.objectHelperManager.objectHelperMap.forEach(h=>{h.parent&&h.parent.remove(h)}),c.objectHelperManager.dispose(),delete c.objectHelperManager,delete c.setObjectHelper,c.removeEventListener(l.ENGINE_EVENT.SETSCENE,n)}}};i.AFTERADD=d,i.AFTERREMOVE=f,i.OBJECT_HELPER_PLUGIN=v,i.ObjectHelperManager=b,i.ObjectHelperPlugin=g,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});