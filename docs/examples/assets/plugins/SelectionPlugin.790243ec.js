import{v as d}from"../index.5dcba3b7.js";import{M as l,B as m,a as g,P as c,L as p,b as u}from"../three.057c7ef5.js";import{W as P,C as f}from"../index.83854a9b.js";import{T as w,S as y,a as E}from"../index.ec8d28aa.js";import{P as h}from"../index.d5b9dbb2.js";import{E as v}from"../index.688a05f5.js";const e=d({plugins:[P({antialias:!0,alpha:!0}),f(),h(),v(),w(),y()],strategy:[E()]}).setDom(document.getElementById("app")).setSize(),n=e.scene,t=new l(new m(10,10,10),new g({color:"rgb(255, 105, 100)"}));t.position.x=10;n.add(t);const a=new c("rgb(255, 255, 255)",1,300,0);a.position.y=30;n.add(a);const L=new p(t.geometry);n.add(L);const i=new u(t.geometry);i.position.x=-10;n.add(i);window.engine=e;e.render();e.addEventListener("selected",s=>{let o="";s.objects.forEach(r=>{o+=`<div class="selected-elem">${r.uuid}</div>`}),document.getElementById("selected").innerHTML=o,e.render()});
