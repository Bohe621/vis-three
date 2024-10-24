import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const c=JSON.parse('{"title":"@vis-three/module-scene","description":"","frontmatter":{},"headers":[],"relativePath":"zh/library/module/scene/readme.md","filePath":"zh/library/module/scene/readme.md"}'),e={name:"zh/library/module/scene/readme.md"},l=n(`<h1 id="vis-three-module-scene" tabindex="-1">@vis-three/module-scene <a class="header-anchor" href="#vis-three-module-scene" aria-label="Permalink to &quot;@vis-three/module-scene&quot;">​</a></h1><h2 id="最新版本" tabindex="-1">最新版本 <a class="header-anchor" href="#最新版本" aria-label="Permalink to &quot;最新版本&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/module-scene"><h2 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/module-scene?color=blue"><h2 id="模块信息" tabindex="-1">模块信息 <a class="header-anchor" href="#模块信息" aria-label="Permalink to &quot;模块信息&quot;">​</a></h2><h3 id="module-type" tabindex="-1">module.type <a class="header-anchor" href="#module-type" aria-label="Permalink to &quot;module.type&quot;">​</a></h3><ul><li><strong>值</strong>: <code>scene</code></li></ul><h3 id="module-object" tabindex="-1">module.object <a class="header-anchor" href="#module-object" aria-label="Permalink to &quot;module.object&quot;">​</a></h3><ul><li><strong>值</strong>: <code>true</code></li></ul><h3 id="module-lifeorder" tabindex="-1">module.lifeOrder <a class="header-anchor" href="#module-lifeorder" aria-label="Permalink to &quot;module.lifeOrder&quot;">​</a></h3><ul><li><strong>值</strong>: <code>SUPPORT_LIFE_CYCLE.THREE + 1</code> - 301</li></ul><h3 id="module-extend" tabindex="-1">module.extend <a class="header-anchor" href="#module-extend" aria-label="Permalink to &quot;module.extend&quot;">​</a></h3><ul><li><strong>setSceneBySymbol</strong>: 通过 相机 vid 设置 engine 的当前场景</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { generateConfig } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;@vis-three/middleware&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> scene</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> generateConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">CONFIGTYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SCENE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">);</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">applyConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(scene).</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">setSceneBySymbol</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(scene.vid);</span></span></code></pre></div><h2 id="提供配置" tabindex="-1">提供配置 <a class="header-anchor" href="#提供配置" aria-label="Permalink to &quot;提供配置&quot;">​</a></h2><h3 id="场景-scene" tabindex="-1">场景-Scene <a class="header-anchor" href="#场景-scene" aria-label="Permalink to &quot;场景-Scene&quot;">​</a></h3><ul><li><strong>类型</strong>：<code>Scene</code></li><li><strong>配置类型</strong>:</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SceneFogConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  type</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">//&quot;Fog&quot; | &quot;FogExp2&quot; | &quot;&quot;;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  color</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  near</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  far</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  density</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SceneConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ObjectConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  background</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// color or vid</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  environment</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  fog</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SceneFogConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认配置</strong>：</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   vid</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">uniqueSymbol</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;Scene&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">),</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   background</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   environment</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   fog</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      color</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;rgb(150, 150, 150)&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      near</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">1</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      far</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">200</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      density</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0.003</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">   },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果场景在<code>generateConfig</code>中不传入<code>vid</code>属性将生产默认<code>vid</code>场景。</p></div>`,22),t=[l];function h(k,p,r,d,o,E){return a(),i("div",null,t)}const y=s(e,[["render",h]]);export{c as __pageData,y as default};
