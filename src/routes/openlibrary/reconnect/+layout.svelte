<script lang="ts">
	import '$lib/styles/reader.sass';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import SideRV from '$lib/reader/SideRV.svelte';
	import SelectorRV from '$lib/reader/SelectorRV.svelte';
	import SideRamayana from '$lib/reader/SideRamayana.svelte';
	import SelectorRamayana from '$lib/reader/SelectorRamayana.svelte';

	let url: string;
	let para: string;
	let isRV = false;
	let isRam = false;

	$: url = $page.url.pathname;
	$: para = url.substr(32, 5);
	$: if (para === 'rigve') {
		isRV = true;
	} else {
		isRV = false;
	}

	$: if (para === 'ramay') {
		isRam = true;
	} else {
		isRam = false;
	}
</script>

<div
	class="thisguy"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<p><a href="/openlibrary/reconnect/sections/amarakosha">amarakosha</a></p>
	<p><a href="/openlibrary/reconnect/sections/dhatus">dhatus</a></p>
	<p><a href="/openlibrary/reconnect/sections/dictionary">dictionary</a></p>
	<p><a href="/openlibrary/reconnect/sections/puranas">puranas</a></p>
	<p><a href="/openlibrary/reconnect/sections/ramayana">ramayana</a></p>
	<p><a href="/openlibrary/reconnect/sections/rigveda/mandala">rigveda</a></p>
	<slot />
</div>

<style lang="sass">

.thisguy
	width: 100vw
	padding: 128px

.rta-grid.grid2.left00.levelzero
		padding-left: 32px
		padding-right: 32px
		min-height: 100vh
		justify-items: stretch
		.mainbar
				display: flex
				flex-direction: column
				padding-left: 32px
				.top-nav
						height: 160px
						border-bottom: 1px solid var(--contraster)
						position: sticky
						top: 0

.rta-grid.grid2.left00.levelone
		min-height: 100vh
		.sidebar
				padding: 64px 32px 0 32px
				position: sticky
				top: 0
		.mainbar
				padding: 64px 32px
				.top-nav
						display: none

.rta-grid.grid2.left00.leveltwo
		min-height: 100vh
		padding: 0
		.sidebar
				padding: 64px 32px 0 32px
				position: sticky
				top: 0
		.mainbar
				padding: 64px 32px
				.top-nav
						display: none

.rta-grid
		padding-bottom: 128px
		p
				font-family: 'Space Grotesk', sans-serif


</style>
