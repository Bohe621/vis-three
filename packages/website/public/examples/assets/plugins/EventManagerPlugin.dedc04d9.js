import"../modulepreload-polyfill.b7f2da20.js";import{M as a,B as p,a as d,P as c}from"../three.837c9bb0.js";import{W as g,C as l}from"../index.1d7ad8b9.js";import{G as u}from"../index.9a7b1aa5.js";import{d as w}from"../index.7d48aff8.js";import{P as f}from"../vis-three.plugin-pointer-manager.es.86f17451.js";import{E as b}from"../index.ce95ade9.js";const o=w({plugins:[g({antialias:!0,alpha:!0}),l(),u(),f(),b()]}).setDom(document.getElementById("app")).setSize(),t=o.scene,i=new a(new p(10,10,10),new d({color:"rgb(255, 105, 100)"}));i.position.x=10;t.add(i);const n=new a(new p(10,10,10),new d({color:"rgb(255, 105, 100)"}));n.position.x=5;n.position.y=5;t.add(n);const m=new c("rgb(255, 255, 255)",1,300,0);m.position.y=30;t.add(m);o.render();o.eventManager;const v=["pointerdown","pointerup","mousedown","mouseup","pointermove","pointerenter","pointerleave","click","dblclick","contextmenu"],s=e=>{document.getElementById("tips").innerText=e};for(const e of v)i.addEventListener(e,r=>{s(`box ${e}`),e==="mousedown"&&console.log(r)}),n.addEventListener(e,r=>{s(`box2 ${e}`)});
