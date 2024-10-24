import{_ as e,o as t,c as a,O as r}from"./chunks/framework.b643d968.js";const f=JSON.parse('{"title":"Class: Compiler<C, O>","description":"","frontmatter":{},"headers":[],"relativePath":"api/middleware/classes/module.Compiler.md","filePath":"api/middleware/classes/module.Compiler.md"}'),o={name:"api/middleware/classes/module.Compiler.md"},d=r('<h1 id="class-compiler-c-o" tabindex="-1">Class: Compiler&lt;C, O&gt; <a class="header-anchor" href="#class-compiler-c-o" aria-label="Permalink to &quot;Class: Compiler&lt;C, O\\&gt;&quot;">​</a></h1><p><a href="./../modules/module.html">module</a>.Compiler</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>O</code></td><td style="text-align:left;">extends <code>object</code></td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Compiler</strong>&lt;<code>C</code>, <code>O</code>&gt;()</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>O</code></td><td style="text-align:left;">extends <code>object</code></td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="module" tabindex="-1">MODULE <a class="header-anchor" href="#module" aria-label="Permalink to &quot;MODULE&quot;">​</a></h3><p>• <strong>MODULE</strong>: <code>string</code> = <code>&quot;&quot;</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L24" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:24</a></p><hr><h3 id="cachecompile" tabindex="-1">cacheCompile <a class="header-anchor" href="#cachecompile" aria-label="Permalink to &quot;cacheCompile&quot;">​</a></h3><p>• <code>Private</code> <code>Optional</code> <strong>cacheCompile</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>C</code></td></tr><tr><td style="text-align:left;"><code>processor</code></td><td style="text-align:left;"><a href="./module.Processor.html"><code>Processor</code></a>&lt;<a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>, <code>object</code>, <a href="./engine.EngineSupport.html"><code>EngineSupport</code></a>, <code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>O</code></td></tr><tr><td style="text-align:left;"><code>vid</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L35" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:35</a></p><hr><h3 id="engine" tabindex="-1">engine <a class="header-anchor" href="#engine" aria-label="Permalink to &quot;engine&quot;">​</a></h3><p>• <strong>engine</strong>: <a href="./engine.EngineSupport.html"><code>EngineSupport</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L33" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:33</a></p><hr><h3 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h3><p>• <strong>map</strong>: <code>Map</code>&lt;<code>string</code>, <code>O</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L31" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:31</a></p><hr><h3 id="processors" tabindex="-1">processors <a class="header-anchor" href="#processors" aria-label="Permalink to &quot;processors&quot;">​</a></h3><p>• <strong>processors</strong>: <code>Map</code>&lt;<code>string</code>, <a href="./module.Processor.html"><code>Processor</code></a>&lt;<a href="./../interfaces/module.SymbolConfig.html"><code>SymbolConfig</code></a>, <code>object</code>, <a href="./engine.EngineSupport.html"><code>EngineSupport</code></a>, <code>any</code>&gt;&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L26" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:26</a></p><hr><h3 id="target" tabindex="-1">target <a class="header-anchor" href="#target" aria-label="Permalink to &quot;target&quot;">​</a></h3><p>• <strong>target</strong>: <a href="./../modules/module.html#compilertarget"><code>CompilerTarget</code></a>&lt;<code>C</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L30" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:30</a></p><hr><h3 id="weakmap" tabindex="-1">weakMap <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;weakMap&quot;">​</a></h3><p>• <strong>weakMap</strong>: <code>WeakMap</code>&lt;<code>O</code>, <code>string</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L32" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:32</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>config</code>): <code>null</code> | <code>O</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>O</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L56" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:56</a></p><hr><h3 id="compile" tabindex="-1">compile <a class="header-anchor" href="#compile" aria-label="Permalink to &quot;compile&quot;">​</a></h3><p>▸ <strong>compile</strong>(<code>vid</code>, <code>notice</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vid</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>notice</code></td><td style="text-align:left;"><a href="./../modules/module.html#compilenotice"><code>CompileNotice</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L137" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:137</a></p><hr><h3 id="compileall" tabindex="-1">compileAll <a class="header-anchor" href="#compileall" aria-label="Permalink to &quot;compileAll&quot;">​</a></h3><p>▸ <strong>compileAll</strong>(): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L199" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:199</a></p><hr><h3 id="cover" tabindex="-1">cover <a class="header-anchor" href="#cover" aria-label="Permalink to &quot;cover&quot;">​</a></h3><p>▸ <strong>cover</strong>(<code>config</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L115" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:115</a></p><hr><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><p>▸ <strong>dispose</strong>(): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L207" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:207</a></p><hr><h3 id="getmap" tabindex="-1">getMap <a class="header-anchor" href="#getmap" aria-label="Permalink to &quot;getMap&quot;">​</a></h3><p>▸ <strong>getMap</strong>(): <code>Map</code>&lt;<code>string</code>, <code>O</code>&gt;</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Map</code>&lt;<code>string</code>, <code>O</code>&gt;</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L42" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:42</a></p><hr><h3 id="getobjectbysymbol" tabindex="-1">getObjectBySymbol <a class="header-anchor" href="#getobjectbysymbol" aria-label="Permalink to &quot;getObjectBySymbol&quot;">​</a></h3><p>▸ <strong>getObjectBySymbol</strong>(<code>vid</code>): <code>null</code> | <code>O</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vid</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>O</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L257" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:257</a></p><hr><h3 id="getobjectsymbol" tabindex="-1">getObjectSymbol <a class="header-anchor" href="#getobjectsymbol" aria-label="Permalink to &quot;getObjectSymbol&quot;">​</a></h3><p>▸ <strong>getObjectSymbol</strong>(<code>object</code>): <code>null</code> | <code>string</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>O</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>string</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L254" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:254</a></p><hr><h3 id="reigstprocessor" tabindex="-1">reigstProcessor <a class="header-anchor" href="#reigstprocessor" aria-label="Permalink to &quot;reigstProcessor&quot;">​</a></h3><p>▸ <strong>reigstProcessor</strong>(<code>processor</code>, <code>fun</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>processor</code></td><td style="text-align:left;"><a href="./module.Processor.html"><code>Processor</code></a>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>fun</code></td><td style="text-align:left;">(<code>compiler</code>: <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L237" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:237</a></p><hr><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><p>▸ <strong>remove</strong>(<code>config</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L82" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:82</a></p><hr><h3 id="settarget" tabindex="-1">setTarget <a class="header-anchor" href="#settarget" aria-label="Permalink to &quot;setTarget&quot;">​</a></h3><p>▸ <strong>setTarget</strong>(<code>target</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><a href="./../modules/module.html#compilertarget"><code>CompilerTarget</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L51" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:51</a></p><hr><h3 id="useengine" tabindex="-1">useEngine <a class="header-anchor" href="#useengine" aria-label="Permalink to &quot;useEngine&quot;">​</a></h3><p>▸ <strong>useEngine</strong>(<code>engine</code>): <a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>engine</code></td><td style="text-align:left;"><a href="./engine.EngineSupport.html"><code>EngineSupport</code></a></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./module.Compiler.html"><code>Compiler</code></a>&lt;<code>C</code>, <code>O</code>&gt;</p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L46" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:46</a></p>',148),l=[d];function i(n,c,s,h,m,p){return t(),a("div",null,l)}const g=e(o,[["render",i]]);export{f as __pageData,g as default};
