import"../modulepreload-polyfill.b7f2da20.js";import{M as d}from"../index.7ee6895f.js";import{g as i,a}from"../vis-three.middleware.es.2e80d21b.js";import{g as s}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../three.837c9bb0.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";const n=new d().setDom(document.getElementById("app")).setSize().setStats(!0).play();i.injectEngine=n;const c=i("Scene");n.setSceneBySymbol(c.vid);i.injectScene=!0;i("PointLight",{position:{x:30,y:50},distance:100});const g=i(a.MESHSTANDARDMATERIAL),t=i(a.SPLINETUBEGEOMETRY,{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]});i(a.MESH,{material:g.vid,geometry:t.vid});const r=new s;r.add(t,"radius",1,20,1);r.add(t,"tubularSegments",12,512,1);r.add(t,"radialSegments",8,128,1);r.add(t,"closed");const p=function(o){const e=r.addFolder("point"+o).close(),m=t.path[o];e.add(t.path[o],"x",m.x-50,m.x+50,1),e.add(t.path[o],"y",m.y-50,m.y+50,1),e.add(t.path[o],"z",m.z-50,m.z+50,1)};p(0);p(1);p(2);p(3);p(4);document.getElementById("addPath").onclick=async()=>{const o=t.path[t.path.length-1];t.path.push({x:o.x+Math.random()*20-10,y:o.y+Math.random()*20-10,z:o.z+Math.random()*20-10}),p(t.path.length-1)};
