import{v as a}from"../index.5dcba3b7.js";import{M as i,B as r,a as m,P as d,L as p,b as g,m as f}from"../three.057c7ef5.js";import{U as l}from"../UnrealBloomPass.71f62634.js";import{W as c,C as w}from"../index.83854a9b.js";import{E as u}from"../index.8dbba16e.js";const e=a({plugins:[c({antialias:!0,alpha:!0}),w(),u({WebGLMultisampleRenderTarget:!0})]}).setDom(document.getElementById("app")).setSize(),o=e.scene,n=new i(new r(10,10,10),new m({color:"rgb(255, 105, 100)"}));n.position.x=10;o.add(n);const t=new d("rgb(255, 255, 255)",1,300,0);t.position.y=30;o.add(t);const P=new p(n.geometry);o.add(P);const s=new g(n.geometry);s.position.x=-10;o.add(s);e.effectComposer.addPass(new l(new f(e.dom.offsetWidth,e.dom.offsetHeight),1.5,0,0));e.render();window.engine=e;
