import"../modulepreload-polyfill.b7f2da20.js";import{M as o,B as d,a8 as n,a3 as c,bo as w,bm as l}from"../three.237d835c.js";import{M as u}from"../index.d0645150.js";import{B as p}from"../index.ee52b7bf.js";import"../index.202ebdec.js";import"../index.e6be8a02.js";import"../index.1d3a6ec0.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.c35e5a3e.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.4ec3bfd2.js";import"../index.ea2b9d59.js";import"../index.591a8368.js";import"../index.a30a6c1f.js";import"../index.12fd638d.js";import"../index.32dc3bb0.js";import"../vis-three.plugin-keyboard-manager.es.417ffa7e.js";import"../Antdv.414c4eb5.js";import"../vis-three.plugin-object-helper.es.15c18b4e.js";import"../vis-three.convenient.es.7b860830.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.2f498209.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.c0475655.js";import"../index.664a593f.js";import"../index.cd2c2c2e.js";import"../index.a089cc34.js";import"../index.bca5cc71.js";import"../index.5331312d.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";const r=new u().setDom(document.getElementById("app")).setSize().setStats(!0).play(),i=r.scene,m=new o(new d(20,10,10),new n({map:new c().load("/examples/texture/Bricks_Color.jpg")}));i.add(m);const e=new o(new w(7),new n({wireframe:!0,transparent:!0,opacity:.5}));e.position.x=-5;e.updateMatrix();i.add(e);r.setObjectHelper(!1);const t=new o(new l(3,3,15,16),e.material);t.position.x=5;t.updateMatrix();i.add(t);const a=new p({source:m,target:e}),s=new p({source:m,target:t,mode:"union"});a.render();s.render();r.transformControls.addEventListener("objectChange",()=>{a.render(),s.render()});window.engine=r;