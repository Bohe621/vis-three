import{t as o}from"./curve.0ba3d968.js";import{N as n}from"./vis-three.plugin-object-helper.es.59a74f53.js";import{b as s}from"./vis-three.plugin-transform-controls.es.5244fee5.js";const a="@vis-three/strategy-transform-controls-helper-filter",c=o(a),f=function(){return{name:c,condition:[s,n],exec(r){const t=[];r.transformControls.traverse(e=>{t.push(e)}),r.objectHelperManager.addFilteredObject(...t)},rollback(r){}}};export{f as T};