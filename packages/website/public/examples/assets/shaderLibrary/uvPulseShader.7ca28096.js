import"../modulepreload-polyfill.b7f2da20.js";import{ao as a}from"../three.837c9bb0.js";import{M as p}from"../index.7ee6895f.js";import{n,g as e}from"../vis-three.middleware.es.2e80d21b.js";import{u as s}from"../vis-three.library-shader.es.25ea0717.js";import{g as d}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";const m=new p().setDom(document.getElementById("app")).setSize().setStats(!0);n.register(s);e.injectEngine=m;const u=e("Scene");m.setSceneBySymbol(u.vid);e.injectScene=!0;e("AmbientLight");const t=e("ShaderMaterial",{...n.generateConfig("uvPulseShader",{time:{value:4.5}}),side:a},{strict:!1}),g=e("PlaneGeometry",{width:20,height:20});e("Mesh",{material:t.vid,geometry:g.vid});const l=e("SphereGeometry",{radius:10});e("Mesh",{material:t.vid,geometry:l.vid,position:{x:25}});const c=e("BoxGeometry",{width:20,height:20,depth:20});e("Mesh",{material:t.vid,geometry:c.vid,position:{x:-25}});const h=e("RingGeometry",{innerRadius:5,outerRadius:10,thetaSegments:32});e("Mesh",{material:t.vid,geometry:h.vid,position:{z:-25}});const v=e("ConeGeometry",{radius:10,height:10,radialSegments:32});e("Mesh",{material:t.vid,geometry:v.vid,position:{z:25}});m.play();window.engine=m;const o=new d,r={time:t.uniforms.time.value,width:t.uniforms.width.value,color:t.uniforms.color.value,centerX:t.uniforms.center.value.x,centerY:t.uniforms.center.value.y};o.add(r,"time",4,6,.01).onChange(i=>{t.uniforms.time.value=i});o.add(r,"width",0,.5,.01).onChange(i=>{t.uniforms.width.value=i});o.addColor(r,"color");o.add(r,"centerX",0,1,.01).onChange(i=>{t.uniforms.center.value.x=i});o.add(r,"centerY",0,1,.01).onChange(i=>{t.uniforms.center.value.y=i});
