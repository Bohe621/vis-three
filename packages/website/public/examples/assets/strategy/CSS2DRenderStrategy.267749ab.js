import"../index.4424140c.js";import{g as t}from"../index.78634d72.js";import{E as m}from"../index.4885615c.js";import"../index.7c6e7a0c.js";import"../index.60f12b64.js";import{R as c}from"../index.7852bf6c.js";import"../index.263b27ed.js";import{C as r,a as l}from"../index.3c49213a.js";import"../three.c9232d79.js";import"../G6.7751b749.js";import"../TextureDisplayer.5189c82c.js";const e=new m().install(r()).install(c()).exec(l()).setDom(document.getElementById("app")).registerResources({"examples.css2DObject":document.getElementById("element1"),"examples.css2DObject2":document.getElementById("element2"),"examples.css2DObject3":document.getElementById("element3")}),s=t("CSS2DPlane",{element:"examples.css2DObject",width:200,height:150,position:{x:-20,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}}),o=t("CSS2DPlane",{element:"examples.css2DObject2",width:200,height:150,position:{x:20,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}}),i=t("CSS2DPlane",{element:"examples.css2DObject3",width:200,height:150,position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}}),a=t("Scene",{children:[s.vid,o.vid,i.vid]});e.applyConfig(s,o,i,a);e.setSceneBySymbol(a.vid).play();e.camera.position.set(0,0,0);e.camera.lookAt(0,0,0);window.engine=e;setTimeout(()=>{e.setSize().play()},0);e.renderManager.addEventListener("render",n=>{e.camera.position.x=100*Math.sin(n.total),e.camera.position.z=100*Math.cos(n.total),e.camera.lookAt(0,0,0)});
