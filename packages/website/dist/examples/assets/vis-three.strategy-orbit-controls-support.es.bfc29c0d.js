import{C as m,D as l,M as p,g as c,a as u,u as d,d as f}from"./vis-three.tdcm.es.ba892fff.js";import{N as P}from"./vis-three.plugin-orbit-controls.es.1508a7f8.js";import{t as b,s as y}from"./curve.0ba3d968.js";import{w as o}from"./three.3f33d046.js";import{a as A}from"./vis-three.module-particle.es.2f619925.js";const O="@vis-three/strategy-orbit-controls-support",r="OrbitControls",i=function(){return Object.assign(A(),{vid:d(r),autoRotate:!1,autoRotateSpeed:2,enableDamping:!1,dampingFactor:.05,enabled:!0,enablePan:!0,enableRotate:!0,enableZoom:!0,maxAzimuthAngle:1/0,maxDistance:1/0,maxPolarAngle:Math.PI,maxZoom:1/0,minAzimuthAngle:-1/0,minDistance:0,minPolarAngle:0,minZoom:0,panSpeed:1,rotateSpeed:1,zoomSpeed:1,screenSpacePanning:!0,target:null})},C=f({type:r,config:i,commands:{set:{target({target:e,config:t,path:a,key:g,value:s}){const n=t.target;if(!t.type){t.target=new o(0,0,0);return}typeof t.target=="string"||(a.length>1?e.target[g]=s:e.target=new o(n.x,n.y,n.z))}}},create({config:e,engine:t}){let a=t.orbitControls;return e.target&&(typeof e.target=="string"||(a.target=new o(e.target.x,e.target.y,e.target.z))),y(e,a,{target:!0}),a},dispose({target:e}){e.dispose()}}),N=b(O),T=function(){return{name:N,condition:[m,l,P],exec(e){e.compilerManager.getCompiler(p.CONTROLS).useModel(C,t=>{const a=c(u.ORBITCONTROLS,i());e.applyConfig(a)})},rollback(){}}};export{T as L};
