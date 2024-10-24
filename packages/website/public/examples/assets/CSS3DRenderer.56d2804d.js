import{G as I,V as P,w as O,I as _,Q as $}from"./three.3f33d046.js";class U extends I{constructor(l=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=l,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new P(.5,.5),this.addEventListener("removed",function(){this.traverse(function(o){o.element instanceof Element&&o.element.parentNode!==null&&o.element.parentNode.removeChild(o.element)})})}copy(l,o){return super.copy(l,o),this.element=l.element.cloneNode(!0),this.center=l.center,this}}const g=new O,A=new _,z=new _,N=new O,R=new O;class k{constructor(l={}){const o=this;let c,m,w,y;const x={objects:new WeakMap},d=l.element!==void 0?l.element:document.createElement("div");d.style.overflow="hidden",this.domElement=d,this.getSize=function(){return{width:c,height:m}},this.render=function(n,s){n.matrixWorldAutoUpdate===!0&&n.updateMatrixWorld(),s.parent===null&&s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),A.copy(s.matrixWorldInverse),z.multiplyMatrices(s.projectionMatrix,A),u(n,n,s),W(n)},this.setSize=function(n,s){c=n,m=s,w=c/2,y=m/2,d.style.width=n+"px",d.style.height=s+"px"};function a(n){n.isCSS2DObject&&(n.element.style.display="none");for(let s=0,t=n.children.length;s<t;s++)a(n.children[s])}function u(n,s,t){if(n.visible===!1){a(n);return}if(n.isCSS2DObject){g.setFromMatrixPosition(n.matrixWorld),g.applyMatrix4(z);const e=g.z>=-1&&g.z<=1&&n.layers.test(t.layers)===!0,r=n.element;r.style.display=e===!0?"":"none",e===!0&&(n.onBeforeRender(o,s,t),r.style.transform="translate("+-100*n.center.x+"%,"+-100*n.center.y+"%)translate("+(g.x*w+w)+"px,"+(-g.y*y+y)+"px)",r.parentNode!==d&&d.appendChild(r),n.onAfterRender(o,s,t));const S={distanceToCameraSquared:i(t,n)};x.objects.set(n,S)}for(let e=0,r=n.children.length;e<r;e++)u(n.children[e],s,t)}function i(n,s){return N.setFromMatrixPosition(n.matrixWorld),R.setFromMatrixPosition(s.matrixWorld),N.distanceToSquared(R)}function M(n){const s=[];return n.traverseVisible(function(t){t.isCSS2DObject&&s.push(t)}),s}function W(n){const s=M(n).sort(function(e,r){if(e.renderOrder!==r.renderOrder)return r.renderOrder-e.renderOrder;const S=x.objects.get(e).distanceToCameraSquared,h=x.objects.get(r).distanceToCameraSquared;return S-h}),t=s.length;for(let e=0,r=s.length;e<r;e++)s[e].element.style.zIndex=t-e}}}const q=new O,T=new $,H=new O;class V extends I{constructor(l=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=l,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(o){o.element instanceof Element&&o.element.parentNode!==null&&o.element.parentNode.removeChild(o.element)})})}copy(l,o){return super.copy(l,o),this.element=l.element.cloneNode(!0),this}}class L extends V{constructor(l){super(l),this.isCSS3DSprite=!0,this.rotation2D=0}copy(l,o){return super.copy(l,o),this.rotation2D=l.rotation2D,this}}const f=new _,B=new _;class Q{constructor(l={}){const o=this;let c,m,w,y;const x={camera:{style:""},objects:new WeakMap},d=l.element!==void 0?l.element:document.createElement("div");d.style.overflow="hidden",this.domElement=d;const a=document.createElement("div");a.style.transformOrigin="0 0",a.style.pointerEvents="none",d.appendChild(a);const u=document.createElement("div");u.style.transformStyle="preserve-3d",a.appendChild(u),this.getSize=function(){return{width:c,height:m}},this.render=function(t,e){const r=e.projectionMatrix.elements[5]*y;e.view&&e.view.enabled?(a.style.transform=`translate( ${-e.view.offsetX*(c/e.view.width)}px, ${-e.view.offsetY*(m/e.view.height)}px )`,a.style.transform+=`scale( ${e.view.fullWidth/e.view.width}, ${e.view.fullHeight/e.view.height} )`):a.style.transform="",t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),e.parent===null&&e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld();let S,h;e.isOrthographicCamera&&(S=-(e.right+e.left)/2,h=(e.top+e.bottom)/2);const p=e.view&&e.view.enabled?e.view.height/e.view.fullHeight:1,v=e.isOrthographicCamera?`scale( ${p} )scale(`+r+")translate("+i(S)+"px,"+i(h)+"px)"+M(e.matrixWorldInverse):`scale( ${p} )translateZ(`+r+"px)"+M(e.matrixWorldInverse),C=(e.isPerspectiveCamera?"perspective("+r+"px) ":"")+v+"translate("+w+"px,"+y+"px)";x.camera.style!==C&&(u.style.transform=C,x.camera.style=C),s(t,t,e)},this.setSize=function(t,e){c=t,m=e,w=c/2,y=m/2,d.style.width=t+"px",d.style.height=e+"px",a.style.width=t+"px",a.style.height=e+"px",u.style.width=t+"px",u.style.height=e+"px"};function i(t){return Math.abs(t)<1e-10?0:t}function M(t){const e=t.elements;return"matrix3d("+i(e[0])+","+i(-e[1])+","+i(e[2])+","+i(e[3])+","+i(e[4])+","+i(-e[5])+","+i(e[6])+","+i(e[7])+","+i(e[8])+","+i(-e[9])+","+i(e[10])+","+i(e[11])+","+i(e[12])+","+i(-e[13])+","+i(e[14])+","+i(e[15])+")"}function W(t){const e=t.elements,r="matrix3d("+i(e[0])+","+i(e[1])+","+i(e[2])+","+i(e[3])+","+i(-e[4])+","+i(-e[5])+","+i(-e[6])+","+i(-e[7])+","+i(e[8])+","+i(e[9])+","+i(e[10])+","+i(e[11])+","+i(e[12])+","+i(e[13])+","+i(e[14])+","+i(e[15])+")";return"translate(-50%,-50%)"+r}function n(t){t.isCSS3DObject&&(t.element.style.display="none");for(let e=0,r=t.children.length;e<r;e++)n(t.children[e])}function s(t,e,r,S){if(t.visible===!1){n(t);return}if(t.isCSS3DObject){const h=t.layers.test(r.layers)===!0,p=t.element;if(p.style.display=h===!0?"":"none",h===!0){t.onBeforeRender(o,e,r);let v;t.isCSS3DSprite?(f.copy(r.matrixWorldInverse),f.transpose(),t.rotation2D!==0&&f.multiply(B.makeRotationZ(t.rotation2D)),t.matrixWorld.decompose(q,T,H),f.setPosition(q),f.scale(H),f.elements[3]=0,f.elements[7]=0,f.elements[11]=0,f.elements[15]=1,v=W(f)):v=W(t.matrixWorld);const E=x.objects.get(t);if(E===void 0||E.style!==v){p.style.transform=v;const C={style:v};x.objects.set(t,C)}p.parentNode!==u&&u.appendChild(p),t.onAfterRender(o,e,r)}}for(let h=0,p=t.children.length;h<p;h++)s(t.children[h],e,r)}}}export{k as C,U as a,Q as b,V as c,L as d};
