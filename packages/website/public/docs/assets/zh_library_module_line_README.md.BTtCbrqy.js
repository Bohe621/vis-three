import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.BjUghlZR.js";const u=JSON.parse('{"title":"@vis-three/module-line","description":"","frontmatter":{},"headers":[],"relativePath":"zh/library/module/line/README.md","filePath":"zh/library/module/line/README.md"}'),l={name:"zh/library/module/line/README.md"},n=e(`<h1 id="vis-three-module-line" tabindex="-1">@vis-three/module-line <a class="header-anchor" href="#vis-three-module-line" aria-label="Permalink to &quot;@vis-three/module-line&quot;">​</a></h1><h2 id="最新版本" tabindex="-1">最新版本 <a class="header-anchor" href="#最新版本" aria-label="Permalink to &quot;最新版本&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/module-line"><h2 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/module-line?color=blue"><h2 id="模块信息" tabindex="-1">模块信息 <a class="header-anchor" href="#模块信息" aria-label="Permalink to &quot;模块信息&quot;">​</a></h2><h3 id="module-type" tabindex="-1">module.type <a class="header-anchor" href="#module-type" aria-label="Permalink to &quot;module.type&quot;">​</a></h3><ul><li><strong>值</strong>: <code>line</code></li></ul><h3 id="module-object" tabindex="-1">module.object <a class="header-anchor" href="#module-object" aria-label="Permalink to &quot;module.object&quot;">​</a></h3><ul><li><strong>值</strong>: <code>true</code></li></ul><h3 id="module-lifeorder" tabindex="-1">module.lifeOrder <a class="header-anchor" href="#module-lifeorder" aria-label="Permalink to &quot;module.lifeOrder&quot;">​</a></h3><ul><li><strong>值</strong>: <code>SUPPORT_LIFE_CYCLE.THREE</code> - 300</li></ul><h2 id="提供配置" tabindex="-1">提供配置 <a class="header-anchor" href="#提供配置" aria-label="Permalink to &quot;提供配置&quot;">​</a></h2><h3 id="线物体-line" tabindex="-1">线物体-Line <a class="header-anchor" href="#线物体-line" aria-label="Permalink to &quot;线物体-Line&quot;">​</a></h3><ul><li><strong>类型</strong>：<code>Line</code></li><li><strong>配置类型</strong>:</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> LineConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SolidObjectConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**材质vid标识 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  material</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**几何vid标识 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  geometry</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**是否为虚线，如果当前的使用材质是\`LineDashedMaterial\`请打开 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  dashed</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认配置</strong>：</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    geometry</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    material</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    dashed</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  }</span></span></code></pre></div>`,18),t=[n];function h(r,o,d,p,k,c){return a(),i("div",null,t)}const E=s(l,[["render",h]]);export{u as __pageData,E as default};
