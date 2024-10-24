import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const y=JSON.parse('{"title":"配置化模型对象","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/tdcm/Model.md","filePath":"zh/api/tdcm/Model.md"}'),l={name:"zh/api/tdcm/Model.md"},t=n(`<h1 id="配置化模型对象" tabindex="-1">配置化模型对象 <a class="header-anchor" href="#配置化模型对象" aria-label="Permalink to &quot;配置化模型对象&quot;">​</a></h1><p>配置化模型的公共对象，提供了配置化模型工作中需要用到相关<code>api</code>。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="puppet" tabindex="-1">puppet <a class="header-anchor" href="#puppet" aria-label="Permalink to &quot;puppet&quot;">​</a></h3><p>该配置化模型所影响的最终目标对象。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">P</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> extends object </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> object;</span></span></code></pre></div><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>该配置化模型对应的配置。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">C</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> extends BasicConfig </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> BasicConfig;</span></span></code></pre></div><h3 id="engine" tabindex="-1">engine <a class="header-anchor" href="#engine" aria-label="Permalink to &quot;engine&quot;">​</a></h3><p>该配置化模型使用的引擎。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> extends EngineSupport </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> EngineSupport;</span></span></code></pre></div><h3 id="compiler" tabindex="-1">compiler <a class="header-anchor" href="#compiler" aria-label="Permalink to &quot;compiler&quot;">​</a></h3><p>该配置化模型使用的编译器。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">O</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> extends Compiler</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> Compiler</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h3 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;commands&quot;">​</a></h3><p>该配置化模型所使用的命令链。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">ModelCommands</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">C</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">P</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">O</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="createpuppet" tabindex="-1">createPuppet <a class="header-anchor" href="#createpuppet" aria-label="Permalink to &quot;createPuppet&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 该配置化模型的对象生成方法。对应defineModel.create</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> this</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> model本身</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 参数对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.model model本身</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.config model对应的配置</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.engine model使用的enigne</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.compiler model使用的compiler</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> puppet 通过配置单生成的目标对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">createPuppet</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  this</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: any,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: { model: any; config: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">C</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; engine: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; compiler: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">O</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> P</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h3 id="disposepuppet" tabindex="-1">disposePuppet <a class="header-anchor" href="#disposepuppet" aria-label="Permalink to &quot;disposePuppet&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 该配置化模型的对象销毁方法。对应defineModel.dispose</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> this</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> model本身</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 参数对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.model model本身</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.target model.puppet</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.puppet model.puppet</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.config model对应的配置</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.engine model使用的enigne</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * params.compiler model使用的compiler</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">disposePuppet</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  this</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: any,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: { model: any; target: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">P</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; puppet: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">P</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; config: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">C</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; engine: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">; compiler: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">O</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;}</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 模型生成方法内部会调用createPuppet</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">create</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 模型销毁方法内部会调用disposePuppet</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">dispose</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="toconfig" tabindex="-1">toConfig <a class="header-anchor" href="#toconfig" aria-label="Permalink to &quot;toConfig&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为目标配置</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> vid</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> vid标识</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> Config | null</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">toConfig&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">CO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">vid</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span></span></code></pre></div><h3 id="tomodel" tabindex="-1">toModel <a class="header-anchor" href="#tomodel" aria-label="Permalink to &quot;toModel&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为目标模型</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> vid</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> vid标识或者 目标对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> model | null</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">toModel&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">MO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">vid</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span></span></code></pre></div><h3 id="toobject" tabindex="-1">toObject <a class="header-anchor" href="#toobject" aria-label="Permalink to &quot;toObject&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为目标物体</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> vid</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> vid标识</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> object</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">toObject&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">OB</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">vid</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OB</span></span></code></pre></div><h3 id="topuppet" tabindex="-1">toPuppet <a class="header-anchor" href="#topuppet" aria-label="Permalink to &quot;toPuppet&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为目标物体</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> vid</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> vid标识</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> object</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">toPuppet&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">OB</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">vid</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OB</span></span></code></pre></div><h3 id="toasync" tabindex="-1">toAsync <a class="header-anchor" href="#toasync" aria-label="Permalink to &quot;toAsync&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为异步执行</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fun</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 所需要执行的函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">toAsync</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(fun: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">finish</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> boolean): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="asyncnexttick" tabindex="-1">asyncNextTick <a class="header-anchor" href="#asyncnexttick" aria-label="Permalink to &quot;asyncNextTick&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 将函数方法加入到下一个异步队列中</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fun</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">asyncNextTick</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(fun: () </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> boolean): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="totrigger" tabindex="-1">toTrigger <a class="header-anchor" href="#totrigger" aria-label="Permalink to &quot;toTrigger&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 转化为触发器触发</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> name</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 触发器名称</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fun</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 需要触发器触发的函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">toTrigger</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(name: string, fun: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">immediate</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> boolean): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 通用的处理方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 操作通知参数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">process</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(params: CtnNotice): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 通用的操作添加方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 操作通知参数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">add</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(params: ModelNotice): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 通用的操作设置方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 操作通知参数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">set</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(params: ModelNotice): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h3 id="delete" tabindex="-1">delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;delete&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 通用的操作设置方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> params</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 操作通知参数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">delete</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ModelNotice</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span></span></code></pre></div>`,69),h=[t];function p(e,k,d,r,g,o){return a(),i("div",null,h)}const E=s(l,[["render",p]]);export{y as __pageData,E as default};
