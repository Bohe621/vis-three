import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/widget/api.md","filePath":"zh/api/widget/api.md"}'),h={name:"zh/api/widget/api.md"},t=n(`<h2 id="definecomponent" tabindex="-1">defineComponent() <a class="header-anchor" href="#definecomponent" aria-label="Permalink to &quot;defineComponent()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ComponentOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> EngineWidget</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Emit</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Props</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  RawBindings</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Resources</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt; {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件名 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  name</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件的事件列表 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  emits</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Emit</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**父组件的传入 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  props</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> PropsOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Props</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**注册的子组件 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  components</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Record</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">ComponentOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件使用的engine */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件挂载的位置 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  el</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件需要加载的外部资源 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  load</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Record</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件可以使用的资源 */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  resources</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Resources</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件的响应式对象和业务逻辑的位置 */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  setup</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SetupParams</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Props</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RawBindings</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**组件渲染的目标 */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  render</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RenderParams</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Resources</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNode</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNode</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[];</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineComponent</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> &lt;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> EngineWidget</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Emit</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Props</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  RawBindings</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  Resources</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> object</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  options</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ComponentOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Emit</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Props</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RawBindings</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Resources</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ComponentOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Emit</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Props</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RawBindings</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Resources</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt; {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">  return</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> options;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h2 id="onmounted" tabindex="-1">onMounted() <a class="header-anchor" href="#onmounted" aria-label="Permalink to &quot;onMounted()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 组件挂载完成后的钩子函数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fn</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> onMounted</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">fn</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="onbeforedistory" tabindex="-1">onBeforeDistory() <a class="header-anchor" href="#onbeforedistory" aria-label="Permalink to &quot;onBeforeDistory()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 组件销毁之前的钩子函数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fn</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> onBeforeDistory</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">fn</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="onframe" tabindex="-1">onFrame() <a class="header-anchor" href="#onframe" aria-label="Permalink to &quot;onFrame()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 组件在每帧渲染时的钩子函数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fn</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 函数方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> onFrame</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">fn</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="h" tabindex="-1">h() <a class="header-anchor" href="#h" aria-label="Permalink to &quot;h()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 模板元素生成函数</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> type</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 元素类型</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 元素的属性</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> VNode</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> h</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">type</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNodeTypes</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">props</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNode</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Data</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNodeTypes</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ComponentOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="vfor" tabindex="-1">vfor() <a class="header-anchor" href="#vfor" aria-label="Permalink to &quot;vfor()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 模板渲染下的列表渲染空间</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fun</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 列表渲染方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> vfor</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">fun</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="vif" tabindex="-1">vif() <a class="header-anchor" href="#vif" aria-label="Permalink to &quot;vif()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 模板渲染下的条件渲染空间</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> fun</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 条件渲染方法</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> vif</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">fun</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="ref" tabindex="-1">ref() <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-core.html#ref" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-core.html#ref</a></p><h2 id="reactive" tabindex="-1">reactive() <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-core.html#reactive" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-core.html#reactive</a></p><h2 id="computed" tabindex="-1">computed() <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-core.html#computed</a></p><h2 id="toref" tabindex="-1">toRef() <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-utilities.html#toref" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-utilities.html#toref</a></p><h2 id="torefs" tabindex="-1">toRefs() <a class="header-anchor" href="#torefs" aria-label="Permalink to &quot;toRefs()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-utilities.html#torefs" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-utilities.html#torefs</a></p><h2 id="shallowreactive" tabindex="-1">shallowReactive() <a class="header-anchor" href="#shallowreactive" aria-label="Permalink to &quot;shallowReactive()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive</a></p><h2 id="shallowref" tabindex="-1">shallowRef() <a class="header-anchor" href="#shallowref" aria-label="Permalink to &quot;shallowRef()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowref" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-advanced.html#shallowref</a></p><h2 id="shallowreadonly" tabindex="-1">shallowReadonly() <a class="header-anchor" href="#shallowreadonly" aria-label="Permalink to &quot;shallowReadonly()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly</a></p><h2 id="watch" tabindex="-1">watch() <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-core.html#watcheffect" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-core.html#watcheffect</a></p><h2 id="watcheffect" tabindex="-1">watchEffect() <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect()&quot;">​</a></h2><ul><li><strong>详情</strong></li></ul><p><a href="https://cn.vuejs.org/api/reactivity-core.html#watch" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/reactivity-core.html#watch</a></p>`,51),l=[t];function k(p,e,r,d,g,o){return a(),i("div",null,l)}const F=s(h,[["render",k]]);export{E as __pageData,F as default};