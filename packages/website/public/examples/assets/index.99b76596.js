var R=Object.defineProperty;var w=(o,t,e)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var f=(o,t,e)=>(w(o,typeof t!="symbol"?t+"":t,e),e);import{t as T,a as x}from"./index.4424140c.js";var v=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(i){i.preventDefault(),n(++o%t.children.length)},!1);function e(i){return t.appendChild(i.dom),i}function n(i){for(var s=0;s<t.children.length;s++)t.children[s].style.display=s===i?"block":"none";o=i}var d=(performance||Date).now(),r=d,l=0,u=e(new v.Panel("FPS","#0ff","#002")),P=e(new v.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var E=e(new v.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){d=(performance||Date).now()},end:function(){l++;var i=(performance||Date).now();if(P.update(i-d,200),i>=r+1e3&&(u.update(l*1e3/(i-r),100),r=i,l=0,E)){var s=performance.memory;E.update(s.usedJSHeapSize/1048576,s.jsHeapSizeLimit/1048576)}return i},update:function(){d=this.end()},domElement:t,setMode:n}};v.Panel=function(o,t,e){var n=1/0,d=0,r=Math.round,l=r(window.devicePixelRatio||1),u=80*l,P=48*l,E=3*l,i=2*l,s=3*l,c=15*l,m=74*l,p=30*l,h=document.createElement("canvas");h.width=u,h.height=P,h.style.cssText="width:80px;height:48px";var a=h.getContext("2d");return a.font="bold "+9*l+"px Helvetica,Arial,sans-serif",a.textBaseline="top",a.fillStyle=e,a.fillRect(0,0,u,P),a.fillStyle=t,a.fillText(o,E,i),a.fillRect(s,c,m,p),a.fillStyle=e,a.globalAlpha=.9,a.fillRect(s,c,m,p),{dom:h,update:function(S,y){n=Math.min(n,S),d=Math.max(d,S),a.fillStyle=e,a.globalAlpha=1,a.fillRect(0,0,u,c),a.fillStyle=t,a.fillText(r(S)+" "+o+" ("+r(n)+"-"+r(d)+")",E,i),a.drawImage(h,s+l,c,m-l,p,s,c,m-l,p),a.fillRect(s+m-l,c,l,p),a.fillStyle=e,a.globalAlpha=.9,a.fillRect(s+m-l,c,l,r((1-S/y)*p))}}};class b{constructor(t){f(this,"REVISION");f(this,"dom");f(this,"addPanel");f(this,"showPanel");f(this,"begin");f(this,"end");f(this,"update");f(this,"domElement");f(this,"setMode");const e=v();this.REVISION=e.REVISION,this.dom=e.dom,this.domElement=e.domElement,this.begin=e.begin.bind(e),this.end=e.end.bind(e),this.update=e.update.bind(e),this.addPanel=e.addPanel.bind(e),this.showPanel=e.showPanel.bind(e),this.setMode=e.setMode.bind(e);const n=this.domElement;n.style.position="absolute",n.style.top="0",n.style.left="35px",t&&(n.style.top=`${t.top}px`,n.style.left=`${t.left}px`,n.style.right=`${t.right}px`,n.style.bottom=`${t.bottom}px`)}}const I="@vis-three/stats-plugin",H=T(I),A=function(o){let t;return{name:H,install(e){const n=new b(o);e.stats=n,e.setStats=function(d){if(d)e.dom.appendChild(n.domElement);else try{e.dom.removeChild(n.domElement)}catch{}return this},t=d=>{n.update()},e.addEventListener(x.RENDER,t)},dispose(e){e.removeEventListener(x.RENDER,t),delete e.stats,delete e.setStats}}};export{A as S,H as a};
