import"../common.006007ed.js";import{a as d,g as e}from"../Vis.es.d8d395f3.js";import"../three.fec063a1.js";import"../vis-three.59b4e7ed.js";const t=new d().setDom(document.getElementById("app")).setSize().setStats(!0).play(),o=e("PointLight",{position:{x:30,y:50},distance:100}),i=e("MeshStandardMaterial",{color:"rgb(255, 0, 0)"}),n=e("BoxGeometry",{width:20,height:40,depth:60}),s=e("Mesh",{geometry:n.vid,material:i.vid}),a=e("Scene",{children:[o.vid,s.vid]});t.applyConfig(o,i,n,s,a);t.setScene(a.vid).play();console.log(t);window.engine=t;