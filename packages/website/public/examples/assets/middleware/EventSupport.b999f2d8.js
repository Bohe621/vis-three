import"../modulepreload-polyfill.b7f2da20.js";import{M as g}from"../index.7ee6895f.js";import{k as i,g as t,p as e}from"../vis-three.middleware.es.2e80d21b.js";import{i as o}from"../vis-three.library-event.es.1631ca13.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../three.837c9bb0.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";i.register(o.openWindow).register(o.moveTo).register(o.moveSpacing);const n=new g().setDom(document.getElementById("app")).setSize();t.injectEngine=n;const a=t("Scene");t.injectScene=a.vid;n.setSceneBySymbol(a.vid).play();t("PointLight",{position:{x:30,y:50},distance:100});const r=t("MeshStandardMaterial"),m=t("BoxGeometry",{width:5,height:5,depth:5}),s=e();t("Mesh",{vid:s,material:r.vid,geometry:m.vid,pointerup:[i.generateConfig("openWindow",{params:{url:"https://github.com/vis-three/vis-three"}})]});const d=e();t("Mesh",{vid:d,material:r.vid,geometry:m.vid,position:{x:0,y:20,z:0},pointerup:[i.generateConfig("moveTo",{params:{target:s,position:{x:20,y:-10,z:10}}})]});const p=e();t("Mesh",{vid:p,material:r.vid,geometry:m.vid,position:{x:-35,y:0,z:0},pointerenter:[i.generateConfig("moveSpacing",{params:{target:p,spacing:{x:15,y:0,z:0}}})]});
