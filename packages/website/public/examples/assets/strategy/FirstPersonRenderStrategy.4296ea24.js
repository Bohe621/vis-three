import{v as a}from"../index.4424140c.js";import{M as i,B as s,a as m,P as d,L as p,b as g}from"../three.c9232d79.js";import{W as l,C as c}from"../index.4f3227eb.js";import{R as f}from"../index.7852bf6c.js";import{E as u}from"../index.b258634a.js";import{F as P,a as y}from"../index.1dc95f0b.js";import{E as w}from"../index.4509be7c.js";const n=a({plugins:[f(),l({antialias:!0,alpha:!0}),u({WebGLMultisampleRenderTarget:!0}),c(),P({movementSpeed:40,lookSpeed:.1,lookVertical:!1,heightSpeed:!0})],strategy:[w(),y()]}).setDom(document.getElementById("app")).setSize().play(),e=n.scene,t=new i(new s(10,10,10),new m({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const o=new d("rgb(255, 255, 255)",1,300,0);o.position.y=30;e.add(o);const h=new p(t.geometry);e.add(h);const r=new g(t.geometry);r.position.x=-10;e.add(r);window.engine=n;
