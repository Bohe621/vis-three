import"../modulepreload-polyfill.b7f2da20.js";import{g as t}from"../index.5e7c9076.js";import{E as m}from"../index.d2cf6216.js";import"../index.8b9e7665.js";import"../index.453e5660.js";import"../index.9a3e1c8e.js";import"../index.6ff295ff.js";import"../index.f27dc7ff.js";import{C as c,a as r}from"../index.b701c9b3.js";import"../three.a7f96461.js";import"../G6.cf5ff0af.js";import"../Antdv.35288747.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";const e=new m().install(c()).exec(r()).setDom(document.getElementById("app")).registerResources({"examples.css2DObject":document.getElementById("element1"),"examples.css2DObject2":document.getElementById("element2"),"examples.css2DObject3":document.getElementById("element3")}),s=t("CSS2DPlane",{element:"examples.css2DObject",width:200,height:150,position:{x:-20,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}}),n=t("CSS2DPlane",{element:"examples.css2DObject2",width:200,height:150,position:{x:20,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}}),o=t("CSS2DPlane",{element:"examples.css2DObject3",width:200,height:150,position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}}),i=t("Scene",{children:[s.vid,n.vid,o.vid]});e.applyConfig(s,n,o,i);e.setSceneBySymbol(i.vid).play();e.camera.position.set(0,50,100);e.camera.lookAt(0,20,0);window.engine=e;setTimeout(()=>{e.setSize().render()},0);