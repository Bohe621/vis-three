import"../modulepreload-polyfill.b7f2da20.js";import{M as d}from"../index.1133522a.js";import{g as t,v as o,a as r}from"../vis-three.tdcm.es.ba892fff.js";import{g as S}from"../lil-gui.module.min.2435205c.js";import"../three.3f33d046.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const i=new d().setDom(document.getElementById("app")).setStats(!0).play();t.injectEngine=i;const g=t("WebGLRenderer"),n=t("Scene"),a=t("PerspectiveCamera",{near:1,far:1e3,position:{x:100,y:200,z:200}});i.setSceneBySymbol(o(n)).setCameraBySymbol(o(a)).setSize();t.injectScene=!0;t("DirectionalLight",{position:{x:30,y:50}});const y=t(r.MESHSTANDARDMATERIAL,{color:"red"}),l=t(r.BOXGEOMETRY,{height:20,width:10}),s=[];for(let p=0;p<200;p+=1){const c=t(r.MESH,{material:o(y),geometry:o(l),position:{y:10,x:Math.random()*100*(Math.random()<.5?-1:1),z:Math.random()*100*(Math.random()<.5?-1:1)}});s.push(o(c))}const m=t(r.SSRPASS,{renderer:o(g),scene:o(n),camera:o(a),selects:s,opacity:.8,maxDistance:20});window.engine=i;const e=new S;e.add(m,"opacity",0,1,.1);e.add(m,"maxDistance",0,30,1);e.add(m,"output",[0,1,3,4,5,7]);
