import{v as s}from"../index.5dcba3b7.js";import{P as a,M as r,B as d,a as m,L as p,b as g}from"../three.057c7ef5.js";import{W as l,C as c}from"../index.83854a9b.js";import{O as u}from"../index.930d272a.js";const t=s({plugins:[l({antialias:!0,alpha:!0}),c(),u()]}).setDom(document.getElementById("app")).setSize(),e=t.scene,o=new a("rgb(255, 255, 255)",1,300,0);o.position.y=30;e.add(o);const n=new r(new d(10,10,10),new m({color:"rgb(255, 105, 100)"}));n.position.x=10;e.add(n);const b=new p(n.geometry);e.add(b);const i=new g(n.geometry);i.position.x=-10;e.add(i);setInterval(()=>{t.render()},1e3/60);
