import"../modulepreload-polyfill.b7f2da20.js";import{f as d,O as l,M as t,B as i,am as a,w as s,br as w}from"../three.3f33d046.js";import{W as g,C as h}from"../index.c0df7946.js";import{G as u}from"../index.5b5c1015.js";import{E as C}from"../curve.0ba3d968.js";import{g as P}from"../vis-three.plugin-pointer-manager.es.28277630.js";const e=C({plugins:[g({antialias:!0,alpha:!0}),h(),u(),P()]}).setDom(document.getElementById("app")).setSize(),c=e.scene,r=new d(45,window.innerWidth/window.innerHeight,1,1e3);r.position.set(50,50,50);r.lookAt(0,0,0);const n=new l(-window.innerWidth,window.innerWidth,window.innerHeight,-window.innerHeight,0,1e5);n.zoom=5;n.updateProjectionMatrix();n.position.copy(r.position);n.lookAt(0,0,0);const m=new t(new i(1,1,1),new a({color:"rgb(255, 255, 0)"}));c.add(m);const p=new t(new i(10,10,10).translate(0,5,0),new a({color:"rgb(255, 105, 100)"}));c.add(p);e.render();const o=new s,y=new w(new s(0,1,0));e.pointerManager.addEventListener("pointermove",()=>{e.pointerManager.getWorldPosition(e.camera,50,o),m.position.copy(o),e.pointerManager.intersectPlane(e.camera,y,o),p.position.copy(o),e.render()});document.getElementById("PerspectiveCamera").onclick=()=>{e.setCamera(r),e.render()};document.getElementById("OrthographicCamera").onclick=()=>{e.setCamera(n),e.render()};document.getElementById("PerspectiveCamera").click();
