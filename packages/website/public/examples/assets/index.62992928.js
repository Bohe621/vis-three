import{C as n,D as c}from"./vis-three.middleware.es.2e80d21b.js";import{a as i,c as r}from"./index.f4f5b765.js";import{t as a}from"./index.7d48aff8.js";const l="@vis-three/plugin-selection-support",S=a(l),P=function(){return{name:S,deps:[i,n,c],install(o){o.setSelectionBoxBySymbol=function(t){this.selectionBox.clear();for(const e of t){const s=o.getObjectBySymbol(e);s?this.selectionBox.add(s):console.warn(`can not found object by: ${e}`)}return o.dispatchEvent({type:r,objects:Array.from(this.selectionBox),objectSymbols:t}),this}},dispose(o){delete o.setSelectionBoxBySymbol}}};export{P as S,S as a};