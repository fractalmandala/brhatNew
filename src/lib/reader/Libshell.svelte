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
		<div class="hesticks rta-column rowgap200">
			<slot name="pagenamer" />
			<a href="/openlibrary/dhatus">Dhātupāṭha</a>
			<a href="/openlibrary/ramayana">Vālmīki Rāmāyaṇa</a>
			<a href="/openlibrary/rigveda">Ṛgveda Saṃhitā</a>
			<div class="bord-top" />
			<slot name="specificer" />
		</div>
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
			padding-right: 40px
			display: flex
			flex-direction: column
			justify-content: flex-start
			height: 100%
			border-right: 1px solid var(--contraster)
			color: var(--opposite)
			row-gap: 16px
			.hesticks
				position: sticky
				top: 128px
				height: 72vh
		.main
			grid-area: main
			padding-left: 64px
			display: flex
			flex-direction: column
			justify-content: flex-start
			min-height: 72vh

</style>
