import"../modulepreload-polyfill.b7f2da20.js";import{p as f,g as e,a as r,t as u}from"../vis-three.tdcm.es.ba892fff.js";import{W as S,C as y}from"../index.c0df7946.js";import"../index.0a430562.js";import{G as v}from"../index.5b5c1015.js";import{W as b}from"../index.b24d5192.js";import{W as E}from"../index.82346856.js";import{m as C}from"../index.4caff7a1.js";import{u as T}from"../vis-three.library-animate-script.es.81e6d2c7.js";import{q as M}from"../vis-three.library-event.es.cabcc67d.js";import{u as R,g as I}from"../vis-three.library-parser.es.0233fa92.js";import{H as h}from"../vis-three.convenient.es.3345d486.js";import{q as m,s as p}from"../vis-three.module-particle.es.2f619925.js";import"../curve.0ba3d968.js";import"../three.3f33d046.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.b5597af3.js";import"../G6.30609706.js";import"../Antdv.7b6104cc.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../CSS3DRenderer.56d2804d.js";import"../ShaderPass.025732a5.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";m.register(T);p.register(M.moveSpacing);const o=f({plugins:[S({antialias:!0,alpha:!0}),y(),v()],strategy:[b(),E()],modules:C}).setDom(document.getElementById("app")).setSize().play();o.loaderManager.setPath("/examples/");o.resourceManager.addParser(new R).addParser(new I);const A=new h().draw(t=>{t.fillStyle="white",t.fillRect(0,0,512,512),t.translate(256,256),t.textBaseline="middle",t.textAlign="center",t.fillStyle="black",t.font=" bold 52px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("Hello vis-three",0,0)}).preview().getDom();o.registerResources({textCanvas:A});const l=e(r.SCENE);o.applyConfig(l).setSceneBySymbol(l.vid);o.applyConfig(e(r.WEBGLRENDERER,{clearColor:"rgba(255 ,255 ,255 , 1)",shadowMap:{enabled:!0}}));e.injectEngine=o;e.injectScene=!0;e.autoInject=!0;e(r.POINTLIGHT,{color:"rgb(255, 255, 255)",position:{y:30},intensity:3});const s=e(r.BOXGEOMETRY,{width:10,height:10,depth:10}),N=e(r.CANVASTEXTURE,{url:"textCanvas"}),P=e(r.MESHSTANDARDMATERIAL,{map:N.vid}),n=e(r.MESH,{geometry:s.vid,material:P.vid,position:{x:10},meta:{userId:123456,status:200,data:{title:"\u8282\u70B91"}}},{strict:!1});console.log(n);const G=p.generateConfig("moveSpacing",{params:{target:n.vid,spacing:{x:10,y:0,z:0}}});e(r.LINE,{geometry:s.vid,click:[G]},{strict:!1});const x=e(r.POINTSMATERIAL,{color:"rgb(255, 255, 255)"});e(r.POINTS,{geometry:s.vid,material:x.vid,position:{x:-10}});e(r.SCRIPTANIMATION,{target:n.vid,attribute:".rotation.y",script:m.generateConfig("linearTime",{multiply:1.5})},{strict:!1});const a="model/glb/MaterialsVariantsShoe/MaterialsVariantsShoe.gltf";o.loadResourcesAsync([a]).then(t=>{o.loadConfig(u.observable(t.resourceConfig[a]));const g=t.configMap.get(a+".scene"),i=o.getConfigBySymbol(g.vid);i.scale.x=50,i.scale.y=50,i.scale.z=50;const c=o.toJSON(),d=o.exportConfig();console.log(c),console.log(d)});
