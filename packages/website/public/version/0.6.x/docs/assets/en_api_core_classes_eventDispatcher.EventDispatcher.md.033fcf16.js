import{_ as e,o as t,c as a,O as r}from"./chunks/framework.b643d968.js";const u=JSON.parse('{"title":"Class: EventDispatcher","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/core/classes/eventDispatcher.EventDispatcher.md","filePath":"en/api/core/classes/eventDispatcher.EventDispatcher.md"}'),d={name:"en/api/core/classes/eventDispatcher.EventDispatcher.md"},n=r('<h1 id="class-eventdispatcher" tabindex="-1">Class: EventDispatcher <a class="header-anchor" href="#class-eventdispatcher" aria-label="Permalink to &quot;Class: EventDispatcher&quot;">​</a></h1><p><a href="./../modules/eventDispatcher.html">eventDispatcher</a>.EventDispatcher</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><strong><code>EventDispatcher</code></strong></p><p>↳ <a href="./engine.Engine.html"><code>Engine</code></a></p></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new EventDispatcher</strong>()</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="listeners" tabindex="-1">listeners <a class="header-anchor" href="#listeners" aria-label="Permalink to &quot;listeners&quot;">​</a></h3><p>• <code>Private</code> <strong>listeners</strong>: <code>Map</code>&lt;<code>string</code>, <code>Function</code>[]&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L15" target="_blank" rel="noreferrer">eventDispatcher/index.ts:15</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addeventlistener" tabindex="-1">addEventListener <a class="header-anchor" href="#addeventlistener" aria-label="Permalink to &quot;addEventListener&quot;">​</a></h3><p>▸ <strong>addEventListener</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>void</code></p><p>Add Event</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L23" target="_blank" rel="noreferrer">eventDispatcher/index.ts:23</a></p><hr><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>▸ <strong>clear</strong>(): <code>void</code></p><p>Clear All Events</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L218" target="_blank" rel="noreferrer">eventDispatcher/index.ts:218</a></p><hr><h3 id="dispatchevent" tabindex="-1">dispatchEvent <a class="header-anchor" href="#dispatchevent" aria-label="Permalink to &quot;dispatchEvent&quot;">​</a></h3><p>▸ <strong>dispatchEvent</strong>&lt;<code>C</code>&gt;(<code>event</code>): <code>void</code></p><p>Trigger Event</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L101" target="_blank" rel="noreferrer">eventDispatcher/index.ts:101</a></p><hr><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><p>▸ <strong>emit</strong>&lt;<code>C</code>&gt;(<code>name</code>, <code>params?</code>): <code>void</code></p><p>Trigger Event</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>C</code>[<code>&quot;type&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><code>Omit</code>&lt;<code>C</code>, <code>&quot;type&quot;</code>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L134" target="_blank" rel="noreferrer">eventDispatcher/index.ts:134</a></p><hr><h3 id="eventcount" tabindex="-1">eventCount <a class="header-anchor" href="#eventcount" aria-label="Permalink to &quot;eventCount&quot;">​</a></h3><p>▸ <strong>eventCount</strong>(<code>type</code>): <code>number</code></p><p>Get Event Count</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L195" target="_blank" rel="noreferrer">eventDispatcher/index.ts:195</a></p><hr><h3 id="has" tabindex="-1">has <a class="header-anchor" href="#has" aria-label="Permalink to &quot;has&quot;">​</a></h3><p>▸ <strong>has</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>boolean</code></p><p>Has Event</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>C</code>[<code>&quot;type&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L165" target="_blank" rel="noreferrer">eventDispatcher/index.ts:165</a></p><hr><h3 id="haseventlistener" tabindex="-1">hasEventListener <a class="header-anchor" href="#haseventlistener" aria-label="Permalink to &quot;hasEventListener&quot;">​</a></h3><p>▸ <strong>hasEventListener</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>boolean</code></p><p>Has Event</p><h4 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L48" target="_blank" rel="noreferrer">eventDispatcher/index.ts:48</a></p><hr><h3 id="off" tabindex="-1">off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off&quot;">​</a></h3><p>▸ <strong>off</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener?</code>): <code>void</code></p><p>Remove Event</p><h4 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>C</code>[<code>&quot;type&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>listener?</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L178" target="_blank" rel="noreferrer">eventDispatcher/index.ts:178</a></p><hr><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>▸ <strong>on</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>void</code></p><p>Subscribe to Event</p><h4 id="type-parameters-6" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-6" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>C</code>[<code>&quot;type&quot;</code>]</td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L155" target="_blank" rel="noreferrer">eventDispatcher/index.ts:155</a></p><hr><h3 id="once" tabindex="-1">once <a class="header-anchor" href="#once" aria-label="Permalink to &quot;once&quot;">​</a></h3><p>▸ <strong>once</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>void</code></p><p>Trigger Event Once</p><h4 id="type-parameters-7" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-7" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L120" target="_blank" rel="noreferrer">eventDispatcher/index.ts:120</a></p><hr><h3 id="poplatestevent" tabindex="-1">popLatestEvent <a class="header-anchor" href="#poplatestevent" aria-label="Permalink to &quot;popLatestEvent&quot;">​</a></h3><p>▸ <strong>popLatestEvent</strong>(<code>type</code>): <code>void</code></p><p>Destroy Last Event of This Type</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L207" target="_blank" rel="noreferrer">eventDispatcher/index.ts:207</a></p><hr><h3 id="removeevent" tabindex="-1">removeEvent <a class="header-anchor" href="#removeevent" aria-label="Permalink to &quot;removeEvent&quot;">​</a></h3><p>▸ <strong>removeEvent</strong>(<code>type</code>): <code>void</code></p><p>Remove All Events of This Type</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L89" target="_blank" rel="noreferrer">eventDispatcher/index.ts:89</a></p><hr><h3 id="removeeventlistener" tabindex="-1">removeEventListener <a class="header-anchor" href="#removeeventlistener" aria-label="Permalink to &quot;removeEventListener&quot;">​</a></h3><p>▸ <strong>removeEventListener</strong>&lt;<code>C</code>&gt;(<code>type</code>, <code>listener</code>): <code>void</code></p><p>Remove Event</p><h4 id="type-parameters-8" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-8" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../interfaces/eventDispatcher.BaseEvent.html"><code>BaseEvent</code></a></td></tr></tbody></table><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>listener</code></td><td style="text-align:left;"><a href="./../interfaces/eventDispatcher.EventListener.html"><code>EventListener</code></a>&lt;<code>C</code>&gt;</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L66" target="_blank" rel="noreferrer">eventDispatcher/index.ts:66</a></p><hr><h3 id="useful" tabindex="-1">useful <a class="header-anchor" href="#useful" aria-label="Permalink to &quot;useful&quot;">​</a></h3><p>▸ <strong>useful</strong>(): <code>boolean</code></p><p>Is Current Dispatcher in Use</p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/core/eventDispatcher/index.ts#L226" target="_blank" rel="noreferrer">eventDispatcher/index.ts:226</a></p>',166),o=[n];function i(s,l,h,c,p,f){return t(),a("div",null,o)}const m=e(d,[["render",i]]);export{u as __pageData,m as default};
