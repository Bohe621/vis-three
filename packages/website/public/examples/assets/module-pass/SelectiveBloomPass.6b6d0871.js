import"../modulepreload-polyfill.b7f2da20.js";import{D as O}from"../index.3517e264.js";import{g as t,p as S,a as i}from"../vis-three.middleware.es.2e80d21b.js";import{g}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../three.837c9bb0.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";import"../Antdv.a86c3c0d.js";const p=new O().setDom(document.getElementById("app")).setSize().play();t.injectEngine=p;const a=t("Scene"),b=t("Scene",{vid:S()});p.setSceneBySymbol(a.vid);t.injectScene=!0;const v=t("PerspectiveCamera",{position:{x:50,y:50,z:50},near:1,far:1e3,adaptiveWindow:!0});p.setCameraBySymbol(v.vid).setSize();t("PointLight",{position:{x:30,y:50},distance:200});const E=t(i.MESHSTANDARDMATERIAL,{color:"red"}),f=t(i.LINEBASICMATERIAL,{color:"yellow"}),j=t(i.POINTSMATERIAL,{color:"blue"}),u=t(i.MESHSTANDARDMATERIAL,{roughness:.2}),h=t(i.CIRCLEGEOMETRY,{radius:40}),m=t(i.SPHEREGEOMETRY,{radius:10,widthSegments:12,heightSegments:12});t(i.MESH,{material:u.vid,geometry:h.vid,position:{y:-10},rotation:{x:-Math.PI/2}});const c=t(i.MESH,{material:E.vid,geometry:m.vid,position:{x:-20}}),n=t(i.LINE,{material:f.vid,geometry:m.vid,position:{x:20}}),r=t(i.POINTS,{material:j.vid,geometry:m.vid,position:{z:20}}),l=t(i.SPRITE,{scale:{x:10,y:10,z:10},position:{z:-20}}),e=t(i.SELECTIVEBLOOMPASS,{strength:1,renderScene:a.vid,renderCamera:v.vid,selectedObjects:[c.vid]}),o=new g,d={mesh:!0,line:!1,points:!1,sprite:!1,scene:a.vid};o.add(e,"strength",0,5,.1);o.add(e,"threshold",0,1,.01);o.add(e,"radius",0,5,.1);o.add(d,"mesh").onChange(s=>{s?e.selectedObjects.includes(c.vid)||e.selectedObjects.push(c.vid):e.selectedObjects.includes(c.vid)&&e.selectedObjects.splice(e.selectedObjects.indexOf(c.vid),1)});o.add(d,"line").onChange(s=>{s?e.selectedObjects.includes(n.vid)||e.selectedObjects.push(n.vid):e.selectedObjects.includes(n.vid)&&e.selectedObjects.splice(e.selectedObjects.indexOf(n.vid),1)});o.add(d,"points").onChange(s=>{s?e.selectedObjects.includes(r.vid)||e.selectedObjects.push(r.vid):e.selectedObjects.includes(r.vid)&&e.selectedObjects.splice(e.selectedObjects.indexOf(r.vid),1)});o.add(d,"sprite").onChange(s=>{s?e.selectedObjects.includes(l.vid)||e.selectedObjects.push(l.vid):e.selectedObjects.includes(l.vid)&&e.selectedObjects.splice(e.selectedObjects.indexOf(l.vid),1)});o.add(d,"scene",{scene:a.vid,scene2:b.vid}).onChange(s=>{e.renderScene=s});
