import{t as T,a as f}from"./index.8b9e7665.js";import{O as x,d as b,F as d,M as A,S as C,U as M,V as E,e as L,C as B,f as D,R as _,g as F}from"./three.a7f96461.js";import{a as p}from"./index.071db2cc.js";const g={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class u{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const k=new x(-1,1,1,-1,0,1),w=new b;w.setAttribute("position",new d([-1,3,0,-1,-1,0,3,-1,0],3));w.setAttribute("uv",new d([0,2,0,0,2,0],2));class z{constructor(e){this._mesh=new A(w,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class R extends u{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof C?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=M.clone(e.uniforms),this.material=new C({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new z(this.material)}render(e,s,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class S extends u{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,r){const i=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let a,n;this.inverse?(a=0,n=1):(a=1,n=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),t.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),t.buffers.stencil.setClear(n),t.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(i.EQUAL,1,4294967295),t.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),t.buffers.stencil.setLocked(!0)}}class y extends u{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class m{constructor(e,s){if(this.renderer=e,s===void 0){const r=e.getSize(new E);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,s=new L(this._width*this._pixelRatio,this._height*this._pixelRatio),s.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],g===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),R===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new R(g),this.clock=new B}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let r=!1;for(let i=0,t=this.passes.length;i<t;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const n=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}S!==void 0&&(a instanceof S?r=!0:a instanceof y&&(r=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new E);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new x(-1,1,1,-1,0,1);const P=new b;P.setAttribute("position",new d([-1,3,0,-1,-1,0,3,-1,0],3));P.setAttribute("uv",new d([0,2,0,0,2,0],2));class N extends u{constructor(e,s,r,i,t){super(),this.scene=e,this.camera=s,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=t!==void 0?t:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new D}render(e,s,r){const i=e.autoClear;e.autoClear=!1;let t,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),t=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,t),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const U="@vis-three/effect-composer-plugin",v=T(U),I=function(h){let e,s,r,i;return{name:v,deps:p,install(t){let a;if(h.WebGLMultisampleRenderTarget||h.MSAA){const o=t.webGLRenderer,l=o.getPixelRatio(),c=o.getDrawingBufferSize(new E);Number(window.__THREE__)>137?a=new m(o,new L(c.width*l,c.height*l,{format:h.format||_,samples:h.samples||4})):a=new m(o,new F(c.width*l,c.height*l,{format:h.format||_}))}else a=new m(t.webGLRenderer);t.effectComposer=a;const n=new N(t.scene,t.camera);a.addPass(n),e=o=>{n.camera=o.camera},t.addEventListener(f.SETCAMERA,e),r=o=>{n.scene=o.scene},t.addEventListener(f.SETSCENE,r),s=o=>{a.setSize(o.width,o.height)},t.addEventListener(f.SETSIZE,s),console.warn(`${v}: hope install close behind the ${p}, because ${p}\`s renderFun can be dispose. if you not do this, render are prone to bugs`),t.popLatestEvent(f.RENDER),i=()=>{a.render()},t.addEventListener(f.RENDER,i)},dispose(t){t.removeEventListener(f.SETCAMERA,e),t.addEventListener(f.SETSCENE,r),t.addEventListener(f.SETSIZE,s),t.removeEventListener(f.RENDER,i),delete t.effectComposer}}};export{g as C,I as E,z as F,u as P,v as a};