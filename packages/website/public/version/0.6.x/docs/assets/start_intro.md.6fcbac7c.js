import{_ as s,o as n,c as a,O as l}from"./chunks/framework.b643d968.js";const u=JSON.parse('{"title":"为什么要用 VIS-THREE？","description":"","frontmatter":{},"headers":[],"relativePath":"start/intro.md","filePath":"start/intro.md"}'),e={name:"start/intro.md"},p=l(`<h1 id="为什么要用-vis-three" tabindex="-1">为什么要用 VIS-THREE？ <a class="header-anchor" href="#为什么要用-vis-three" aria-label="Permalink to &quot;为什么要用 VIS-THREE？&quot;">​</a></h1><h2 id="three-js-相关项目开发中遇到的问题" tabindex="-1">three.js 相关项目开发中遇到的问题 <a class="header-anchor" href="#three-js-相关项目开发中遇到的问题" aria-label="Permalink to &quot;three.js 相关项目开发中遇到的问题&quot;">​</a></h2><h3 id="项目组织与迭代" tabindex="-1">项目组织与迭代 <a class="header-anchor" href="#项目组织与迭代" aria-label="Permalink to &quot;项目组织与迭代&quot;">​</a></h3><p>当我们使用 three.js 进行 web3D 相关项目的开发，不管我们是参考<a href="https://threejs.org/" target="_blank" rel="noreferrer">three.js 官网</a>的例子，还是其他的插件 demo，或者是自己从事相关项目开发都会发现一个很大的问题，就是使用 three.js 进行开发构建项目时候的 <strong>代码组织</strong> 问题。</p><ul><li><p>面对各式各样的需求功能，不同经验的开发者，不一样的前端技术栈与前端框架，我们该如何通过较好的组织架构保障项目的长远稳定的迭代与运行？</p></li><li><p>每当需求变更，功能业务新增，我们该如何去修改我们现有的代码，避免牵一发而动全身，出现问题的时候能够快速定位？</p></li><li><p>面对不同经验的开发者，开发流动性大的项目团队，新人需要花多长时间去熟悉才能有把握的上手？</p></li></ul><h3 id="灵活与-坑-多" tabindex="-1">灵活与“坑”多 <a class="header-anchor" href="#灵活与-坑-多" aria-label="Permalink to &quot;灵活与“坑”多&quot;">​</a></h3><p>three.js 算是一个 web3D 的库，它只提供了最基本或者最原始的项目构建手段，就是因为原始和基本，使得功能非常强大，但是也是因为原始基本，在项目构建的过程中，会有很多的细节问题需要我们去发现和攻克，也就是所谓的有很多“坑”。</p><ul><li><p>我们该如何避免重复踩“坑”？</p></li><li><p>我们又该如何防止别人踩“坑”？</p></li></ul><h3 id="框架结合与渲染性能" tabindex="-1">框架结合与渲染性能 <a class="header-anchor" href="#框架结合与渲染性能" aria-label="Permalink to &quot;框架结合与渲染性能&quot;">​</a></h3><p>数据驱动视图框架的兴起与热门，推动前端开发从项目复杂度与人员数量都上升了一个新台阶，其便利性使得一般的开发人员花费较低的技术成本，将更多的时间花在业务功能的思考上。</p><p>但是对于兴起的 3D 类项目，不管从开发思维与技术门槛，都产生了很大的变化。特别是对于 3D 实时渲染为主的 web3D 项目，在沿用当下热门的前端框架时：</p><ul><li><p>如何处理好 3D 部分与热门前端框架间的关系？</p></li><li><p>如何保证实时 3D 渲染的性能？</p></li></ul><p>高效的开发离不开当下热门的前端框架，但是要很好的保证 3D 实时渲染性能，或者说是网页运行的性能，开发 3D 类型的项目，对于开发的能力要求会十分的高，而且在开发期对于开发的心智负担也会加重，这对于当前大部分前端开发者来说，都是一个很大的挑战。</p><h2 id="vis-three-框架介绍" tabindex="-1">VIS-THREE 框架介绍 <a class="header-anchor" href="#vis-three-框架介绍" aria-label="Permalink to &quot;VIS-THREE 框架介绍&quot;">​</a></h2><h3 id="功能插件化" tabindex="-1">功能插件化 <a class="header-anchor" href="#功能插件化" aria-label="Permalink to &quot;功能插件化&quot;">​</a></h3><p>为了解决<code>three.js</code>相关项目开发的代码组织问题，降低功能代码间的耦合，提高功能复用性，提高扩展能力，<code>vis-three</code>提出了功能插件化概念，采用了插件化的组织形式，<code>vis-three</code>的核心引擎提供功能插件的拔插能力，对各模块各功能进行解耦开发，持续集成，兼容拓展。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGLRendererPlugin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEngine</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">WebGLRendererPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { WebGLRendererPlugin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEngine</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">WebGLRendererPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      alpha: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="逻辑策略化" tabindex="-1">逻辑策略化 <a class="header-anchor" href="#逻辑策略化" aria-label="Permalink to &quot;逻辑策略化&quot;">​</a></h3><ul><li><p>如何解决各个功能之间的联通问题和兼容问题？</p></li><li><p>如何保证面对不同的业务功能需求，插件的功能都能满足与实现？</p></li></ul><p><code>vis-three</code>提出了逻辑策略化的概念，提供策略注入与策略回滚能力，策略是组织不同插件去实现一个完整的功能逻辑的方式，将逻辑与插件解耦，提高插件兼容，提高业务功能兼容，更好的持续集成。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGLRendererPlugin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { RenderManagerPlugin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-render-manager&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EffectComposerPlugin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-effect-composer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { EffectRenderStrategy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/strategy-effect-render&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEngine</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">WebGLRendererPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">RenderManagerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">EffectComposerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      WebGLMultisampleRenderTarget: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  strategy: [</span><span style="color:#B392F0;">EffectRenderStrategy</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { WebGLRendererPlugin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RenderManagerPlugin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-render-manager&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { EffectComposerPlugin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-effect-composer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { EffectRenderStrategy } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/strategy-effect-render&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEngine</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">WebGLRendererPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      alpha: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RenderManagerPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">EffectComposerPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      WebGLMultisampleRenderTarget: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  strategy: [</span><span style="color:#6F42C1;">EffectRenderStrategy</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="场景配置化" tabindex="-1">场景配置化 <a class="header-anchor" href="#场景配置化" aria-label="Permalink to &quot;场景配置化&quot;">​</a></h3><p>插件化和策略化也只是一种更好的代码组织方式和形式，但是对于<code>three.js</code>相关项目开发的门槛是没有怎么改变的，我们在进行相关<code>three.js</code>相关项目开发的时候，<code>three.js</code>本身的门槛，比如对图形学的理解，各种对象的属性理解，各种各样的 api，这些东西本身的门槛就很高，需要我们有一定的理解和积累。</p><p>为了降低<code>three.js</code>本身的开发门槛，与避免重复踩坑，<code>vis-three</code>提供配置化中间层，将所有<code>three.js</code>对象动作配置化，我们在开发场景的时候，不用再过多的关注<code>three.js</code>本身的东西，只用关注我们场景配置单的结构。</p><p><code>vis-three</code>还提供一系列工具和能力，更便利的操作配置单，通过配置单去映射整个 3D 场景与 3D 场景功能交互，降低开发门槛，提高开发效率。</p><p><strong>你只用关心配置，剩下的交给我们</strong>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { DisplayEngineSupport } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { generateConfig, CONFIGTYPE } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/middleware&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DisplayEngineSupport</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">setDom</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.injectEngine </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> engine;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">SCENE</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">setSceneBySymbol</span><span style="color:#E1E4E8;">(scene.vid);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.injectScene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">material</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESHSTANDARDMATERIAL</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: </span><span style="color:#9ECBFF;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">BOXGEOMETRY</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  depth: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESH</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">  material: material.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { DisplayEngineSupport } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { generateConfig, CONFIGTYPE } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/middleware&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DisplayEngineSupport</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setDom</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">play</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">generateConfig.injectEngine </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> engine;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">SCENE</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">setSceneBySymbol</span><span style="color:#24292E;">(scene.vid);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">generateConfig.injectScene </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">material</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESHSTANDARDMATERIAL</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  color: </span><span style="color:#032F62;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">BOXGEOMETRY</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  depth: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESH</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#24292E;">  material: material.vid,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="工程组件化" tabindex="-1">工程组件化 <a class="header-anchor" href="#工程组件化" aria-label="Permalink to &quot;工程组件化&quot;">​</a></h3><h2 id="vis-three-的优势" tabindex="-1">VIS-THREE 的优势 <a class="header-anchor" href="#vis-three-的优势" aria-label="Permalink to &quot;VIS-THREE 的优势&quot;">​</a></h2><h3 id="强大的兼容性" tabindex="-1">强大的兼容性 <a class="header-anchor" href="#强大的兼容性" aria-label="Permalink to &quot;强大的兼容性&quot;">​</a></h3><p>从框架的角度来说，<code>vis-three</code>主要提供了一套开发流程与机制来规范和加强 web3D 相关项目的开发，所以可以根据具体的业务需求和开发难度，去寻找或者自定义相关的插件、策略、配置化模块去进行项目开发。</p><p>在这套体系下，<code>vis-three</code>既能够支持原生<code>three.js</code>相关项目的开发，也能够支持<code>vis-three</code>机制下的配置化开发乃至后面的组件化开发。</p><h3 id="更灵活的集成与迁移" tabindex="-1">更灵活的集成与迁移 <a class="header-anchor" href="#更灵活的集成与迁移" aria-label="Permalink to &quot;更灵活的集成与迁移&quot;">​</a></h3><p><code>vis-three</code>框架构建的 3D 引擎，是通过各种插件与策略进行集成的，而且<code>vis-three</code>的插件和策略是可拔可插的，那么在引擎的功能变更上，就可以通过对不同的插件与策略的安装与取消进行便利的控制；在引擎功能迁移上，引入同样的插件与策略，迁移就已经完成。</p><h3 id="更稳健的版本升级" tabindex="-1">更稳健的版本升级 <a class="header-anchor" href="#更稳健的版本升级" aria-label="Permalink to &quot;更稳健的版本升级&quot;">​</a></h3><p><code>vis-three</code>通过插件化、策略化与配置化，将应用项目与<code>three.js</code>做了隔离，这种隔离在<code>three.js</code>更新的时候能够起到一个很好的缓冲作用。</p><p>在原生的<code>three.js</code>项目开发与应用构建途中，一旦确定了<code>three.js</code>的依赖版本，在遇到<code>three.js</code>大版本更新的时候，进行技术更新的成本会非常高，很容易导致不兼容与牵一发而动全身，进而导致项目大重构，升级成本和风险都很高。</p><p>但是如果使用了<code>vis-three</code>，在进行<code>three.js</code>的版本更新时，对于应用项目来讲基本是无感的，因为我们只用更新升级相关的插件与策略或者配置化模块，相关的版本就已经进行了更新兼容，这能在很大程度上保证了应用项目的稳定迭代。</p><h3 id="更宽泛的框架结合" tabindex="-1">更宽泛的框架结合 <a class="header-anchor" href="#更宽泛的框架结合" aria-label="Permalink to &quot;更宽泛的框架结合&quot;">​</a></h3><p><code>vis-three</code>通过场景配置化的特性，其中很重要的一部分，是将需要的 UI 逻辑和 3D 渲染层进行解耦。</p><p>对于 UI 框架来说，3D 实时渲染的部分不再是 3D 库的东西，取而代之的是类似于<code>json</code>的配置单，UI 的所有操作都是在对一个简单的<code>json</code>配置单进行操作。</p><p>也就是说大部分情况下，UI 框架将不再会操作 3D 实时渲染所需要用到的对象和属性，将 3D 部分和 UI 部分进行了解耦，既保证了 UI 开发效率，又保证了 3D 实时渲染的性能，还降低了开发难度，保证整个 web3D 项目的运行与开发效率。</p><p><code>vis-three</code>框架不会强行绑定特定的 UI 框架，比如：<code>vue2</code>、<code>vue3</code>、<code>react</code>等等，从框架的设计原理上来讲，<code>vis-three</code>能够与任意前端框架进行结合使用。</p><h3 id="更顺畅的开发过渡" tabindex="-1">更顺畅的开发过渡 <a class="header-anchor" href="#更顺畅的开发过渡" aria-label="Permalink to &quot;更顺畅的开发过渡&quot;">​</a></h3><p>如果你已经使用过<code>three.js</code>进行 web3D 相关项目的开发，那么在你了解和使用<code>vis-three</code>进行项目构建的时候，可以让你很自然很顺畅的进行开发技术过渡。</p><p>官方提供的插件和策略，和相关的配置化模块，都是采用非侵入式的开发构建模式，也就是说，尽可能的不去影响和改变<code>three.js</code>原生的对象和属性与相关概念，在这种模式下，对于<code>three.js</code>的开发者在各种各样的功能与模块中都能够快速的熟悉与上手。</p><h2 id="配置化的开发优势" tabindex="-1">配置化的开发优势 <a class="header-anchor" href="#配置化的开发优势" aria-label="Permalink to &quot;配置化的开发优势&quot;">​</a></h2><h3 id="开发降压" tabindex="-1">开发降压 <a class="header-anchor" href="#开发降压" aria-label="Permalink to &quot;开发降压&quot;">​</a></h3><h3 id="模板与组装" tabindex="-1">模板与组装 <a class="header-anchor" href="#模板与组装" aria-label="Permalink to &quot;模板与组装&quot;">​</a></h3><h3 id="预处理和后处理" tabindex="-1">预处理和后处理 <a class="header-anchor" href="#预处理和后处理" aria-label="Permalink to &quot;预处理和后处理&quot;">​</a></h3><h3 id="配置升级与逻辑升级" tabindex="-1">配置升级与逻辑升级 <a class="header-anchor" href="#配置升级与逻辑升级" aria-label="Permalink to &quot;配置升级与逻辑升级&quot;">​</a></h3><h3 id="持久化与运行时" tabindex="-1">持久化与运行时 <a class="header-anchor" href="#持久化与运行时" aria-label="Permalink to &quot;持久化与运行时&quot;">​</a></h3><h3 id="原生的渲染性能" tabindex="-1">原生的渲染性能 <a class="header-anchor" href="#原生的渲染性能" aria-label="Permalink to &quot;原生的渲染性能&quot;">​</a></h3>`,53),o=[p];function t(r,c,E,i,y,d){return n(),a("div",null,o)}const F=s(e,[["render",t]]);export{u as __pageData,F as default};
