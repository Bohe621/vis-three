import{v as d}from"../index.4424140c.js";import{P as m,M as r,B as l,a as g,L as c,b as p}from"../three.c9232d79.js";import{W as u,C as f}from"../index.4f3227eb.js";import{P as y}from"../index.263b27ed.js";import{E as P}from"../index.60f12b64.js";import{S as v,T as E,a as b}from"../index.1295c70d.js";import{K as M}from"../index.0a42f82e.js";import{T as x}from"../index.4c692cb5.js";import"../Antdv.05cc9b5f.js";const e=d({plugins:[u({antialias:!0,alpha:!0}),f(),y(),P(),v(),M(),E()],strategy:[b(),x()]}).setDom(document.getElementById("app")).setSize();e.eventManager.recursive=!0;const n=e.scene,a=new m("rgb(255, 255, 255)",1,300,0);a.position.y=30;n.add(a);const t=new r(new l(10,10,10),new g({color:"rgb(255, 105, 100)"}));t.position.x=10;n.add(t);const o=new r(t.geometry,t.material);o.position.x=10;o.position.y=10;o.position.z=-10;t.add(o);const C=new c(t.geometry);n.add(C);const s=new p(t.geometry);s.position.x=-10;n.add(s);t.updateMatrixWorld();e.setSelectionBox([t]);e.render();e.addEventListener("selected",i=>{e.render()});document.getElementById("translate").onclick=()=>{e.transformControls.mode="translate",e.render()};document.getElementById("rotate").onclick=()=>{e.transformControls.mode="rotate",e.render()};document.getElementById("scale").onclick=()=>{e.transformControls.mode="scale",e.render()};e.transformControls.addEventListener("objectChange",i=>{e.render()});setInterval(()=>{e.render()},1e3/30);
