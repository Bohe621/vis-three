import"../modulepreload-polyfill.b7f2da20.js";import{E as m,g as t}from"../vis-three.tdcm.es.ba892fff.js";import{C as a,a as c}from"../index.fd7db63a.js";import{B as p,$ as l,k as d}from"../vis-three.module-particle.es.2f619925.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{T as g}from"../vis-three.library-parser.es.0233fa92.js";import"../curve.0ba3d968.js";import"../three.3f33d046.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.b5597af3.js";import"../index.0a430562.js";import"../G6.30609706.js";import"../Antdv.7b6104cc.js";import"../CSS3DRenderer.56d2804d.js";import"../ShaderPass.025732a5.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";const e=new m().install(a()).exec(c()).registModule(p).registModule(l).registModule(d).setDom(document.getElementById("app"));e.resourceManager.addParser(new g);e.registerResources({"examples.css2DObject":document.getElementById("element1"),"examples.css2DObject2":document.getElementById("element2"),"examples.css2DObject3":document.getElementById("element3")});const s=t("CSS2DPlane",{element:"examples.css2DObject",width:200,height:150,position:{x:-20,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}}),i=t("CSS2DPlane",{element:"examples.css2DObject2",width:200,height:150,position:{x:20,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}}),n=t("CSS2DPlane",{element:"examples.css2DObject3",width:200,height:150,position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}}),r=t("Scene",{children:[s.vid,i.vid,n.vid]});e.applyConfig(s,i,n,r);e.setSceneBySymbol(r.vid).play();e.camera.position.set(0,0,0);e.camera.lookAt(0,0,0);window.engine=e;setTimeout(()=>{e.setSize().play()},0);e.renderManager.addEventListener("render",o=>{e.camera.position.x=100*Math.sin(o.total),e.camera.position.z=100*Math.cos(o.total),e.camera.lookAt(0,0,0)});
