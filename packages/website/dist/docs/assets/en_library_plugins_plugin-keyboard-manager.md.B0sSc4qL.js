import{_ as a,c as e,o as s,a2 as t}from"./chunks/framework.BjUghlZR.js";const y=JSON.parse('{"title":"@vis-three/plugin-keyboard-manager","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/plugins/plugin-keyboard-manager.md","filePath":"en/library/plugins/plugin-keyboard-manager.md"}'),i={name:"en/library/plugins/plugin-keyboard-manager.md"},n=t(`<h1 id="vis-three-plugin-keyboard-manager" tabindex="-1">@vis-three/plugin-keyboard-manager <a class="header-anchor" href="#vis-three-plugin-keyboard-manager" aria-label="Permalink to &quot;@vis-three/plugin-keyboard-manager&quot;">​</a></h1><p>Keyboard Manager Plugin.</p><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/plugin-keyboard-manager"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/plugin-keyboard-manager?color=blue"><h2 id="plugin-name" tabindex="-1">Plugin Name <a class="header-anchor" href="#plugin-name" aria-label="Permalink to &quot;Plugin Name&quot;">​</a></h2><p><code>KeyboardManagerPlugin</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the enumeration: <code>KEYBOARD_MANAGER_PLUGIN</code></p></div><h2 id="plugin-dependencies" tabindex="-1">Plugin Dependencies <a class="header-anchor" href="#plugin-dependencies" aria-label="Permalink to &quot;Plugin Dependencies&quot;">​</a></h2><p>None</p><h2 id="plugin-parameters" tabindex="-1">Plugin Parameters <a class="header-anchor" href="#plugin-parameters" aria-label="Permalink to &quot;Plugin Parameters&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyboardEntity</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Shortcut Key Combination, e.g., [&#39;ctrl&#39;, &#39;z&#39;] */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    shortcutKey</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[];</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Description of the Shortcut Function */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    desp</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Function triggered on key down */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    keydown</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">event</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyEvent</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Function triggered on key up */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    keyup</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">event</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyEvent</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyboardParameters</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Shortcut Key Settings */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    keyboards</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Array</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">KeyboardEntity</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="engine-extensions" tabindex="-1">Engine Extensions <a class="header-anchor" href="#engine-extensions" aria-label="Permalink to &quot;Engine Extensions&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyboardManagerEngine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  keyboardManager</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> KeyboardManager</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="keyboardmanager" tabindex="-1">keyboardManager <a class="header-anchor" href="#keyboardmanager" aria-label="Permalink to &quot;keyboardManager&quot;">​</a></h2><p>This class extends <code>@vis-three/core</code>&#39;s <code>Dispatcher</code>.</p><h3 id="cancel" tabindex="-1">cancel <a class="header-anchor" href="#cancel" aria-label="Permalink to &quot;cancel&quot;">​</a></h3><p>▸ <strong>cancel</strong>(<code>keyArray</code>): <code>KeyboardManager</code></p><p>Unregisters a shortcut key.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>keyArray</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">Shortcut key combination</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>this</p><h3 id="getdocs" tabindex="-1">getDocs <a class="header-anchor" href="#getdocs" aria-label="Permalink to &quot;getDocs&quot;">​</a></h3><p>▸ <strong>getDocs</strong>(): <code>Pick</code>&lt;<code>KeyboardEntity</code>, <code>&quot;shortcutKey&quot;</code> | <code>&quot;desp&quot;</code>&gt;[]</p><p>Retrieves the shortcut key documentation.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><h3 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-label="Permalink to &quot;register&quot;">​</a></h3><p>▸ <strong>register</strong>(<code>entity</code>): <code>KeyboardManager</code></p><p>Registers a shortcut key.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>entity</code></td><td style="text-align:left;"><code>KeyboardEntity</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>this</p><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <strong>update</strong>(<code>entity</code>): <code>KeyboardManager</code></p><p>Updates a shortcut key.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>entity</code></td><td style="text-align:left;"><code>KeyboardEntity</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>KeyboardManager</code></p><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h3><p>▸ <strong>watch</strong>(<code>dom</code>): <code>KeyboardManager</code></p><p>Limits the shortcut key listener to a specific DOM element—defaults to <code>document</code>.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>dom</code></td><td style="text-align:left;"><code>undefined</code> | <code>HTMLElement</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>this</p>`,49),r=[n];function l(h,d,o,p,k,c){return s(),e("div",null,r)}const u=a(i,[["render",l]]);export{y as __pageData,u as default};
