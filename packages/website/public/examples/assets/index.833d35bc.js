import{t as a}from"./index.4424140c.js";import{a as n,b as t}from"./index.7852bf6c.js";import{a as E}from"./index.4f3227eb.js";const R="@vis-three/webgl-render-strategy",o=a(R),c=function(){let r;return{name:o,condition:[E,n],exec(e){r=s=>{e.webGLRenderer.render(e.scene,e.camera)},e.renderManager.addEventListener(t.RENDER,r)},rollback(e){e.renderManager.removeEventListener(t.RENDER,r)}}};export{c as W};
