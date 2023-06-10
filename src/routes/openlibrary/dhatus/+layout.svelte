<script lang="ts">
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import AllBol from '$lib/reader/AllBol.svelte';
</script>

<div
	class="rta-docs"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="side">
		<AllBol />
	</div>
	<div class="main">
		<slot />
	</div>
</div>

<style lang="sass">


.levelzero
	padding: 128px 32px 64px 32px

.rta-docs
	display: grid
	width: 100vw
	grid-auto-flow: row
	&.levelzero
		grid-template-columns: 280px 1fr
		grid-template-areas: "side main"
		.side
			grid-area: side
		.main
			grid-area: main

</style>
