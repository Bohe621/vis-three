import{a as s}from"./index.9b9e13dd.js";import{a as n}from"./index.0a430562.js";import{t as o}from"./curve.0ba3d968.js";const S="@vis-three/strategy-stats-render",i=o(S),E=function(){let e,r;return{name:i,condition:[n,s],exec(t){e=()=>{t.stats.update()},r=t.setStats,t.setStats=function(a){return r(a),a?this.renderManager.addEventListener("render",e):this.renderManager.removeEventListener("render",e),this}},rollback(t){t.setStats=r}}};export{E as S};
