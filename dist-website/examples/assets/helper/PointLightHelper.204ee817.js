import{f as i,k as d}from"../Vis.es.04b7ac1a.js";import{M as c,i as r,o as g,p as l}from"../three.a9d531d9.js";import{G as m}from"../dat.gui.module.3ecf4841.js";import"../vis-three.5ae274fa.js";const s=new i().install("TransformControls").complete().setDom(document.getElementById("app")).setSize().play(),n=s.scene,p=new c(new r(50,10,50),new g({color:"rgb(255, 105, 100)"}));n.add(p);const e=new l("rgb(255, 255, 255)",1,30,.01);e.position.set(0,15,0);n.add(e);const h=new d(e);n.add(h);const a=new m,t={color:e.color.getHex(),distance:e.distance,decay:e.decay};a.addColor(t,"color",-500,500).onChange(o=>{e.color.setHex(o)});a.add(t,"distance",0,100).onChange(o=>{e.distance=o});a.add(t,"decay",0,1,.01).onChange(o=>{e.decay=o});window.engine=s;