import{v as n}from"../index.5dcba3b7.js";import{am as i,M as l,B as s}from"../three.057c7ef5.js";import{W as m,C as c}from"../index.83854a9b.js";import{E as d}from"../index.8dbba16e.js";import{R as g}from"../index.1b4ee7e6.js";import{E as f}from"../index.d6bea163.js";const t=n({plugins:[m({antialias:!0,alpha:!0}),d({WebGLMultisampleRenderTarget:!0}),c(),g()],strategy:[f()]}).setDom(document.getElementById("app")).setSize().play(),e=new i({color:"rgb(10, 40, 120)"});t.scene.add(new l(new s(30,30,30),e));let r=1,o=1,a=1;t.renderManager.addEventListener("render",()=>{(e.color.r>=1||e.color.r<=0)&&(r*=-1),e.color.r+=.005*r,(e.color.g>=1||e.color.g<=0)&&(o*=-1),e.color.g+=.005*o,(e.color.b>=1||e.color.b<=0)&&(a*=-1),e.color.b+=.005*a});