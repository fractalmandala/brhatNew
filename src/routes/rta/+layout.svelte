<script lang="ts">
	import Header from '$lib/ridunits/RIDHeader.svelte';
	import { themeMode } from '$lib/stores/globalstores';
	let iW = 0;
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}
</script>

<svelte:window bind:innerWidth={iW} />

<Header>
	<div slot="local" class="rta-row ycenter menusvg">
		<svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M20 26.45L28.65 17.8L26.5 15.7L20 22.2L13.5 15.7L11.35 17.8L20 26.45ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40Z"
				fill="#676767"
			/>
		</svg>
	</div>
</Header>

<div class="pagethemer" class:light={$themeMode} class:dark={!$themeMode}>
	<div class="sidebar" />
	<div class="mainpager">
		<slot />
	</div>
</div>

<style lang="sass">

.menusvg
	cursor: pointer
	&:hover
		svg path
			fill: white

.pagethemer
	display: grid
	grid-auto-flow: row
	.sidebar
		grid-area: sidebar
	.mainpager
		grid-area: mainpager
	@media screen and (min-width: 900px)
		grid-template-columns: 280px 1fr
		grid-template-areas: "sidebar mainpager"
		width: 100%
		.sidebar
			border-right: 1px solid var(--borderline)
			border-left: 1px solid var(--borderline)
			width: 280px
		.mainpager
			padding-top: 128px
	@media screen and (max-width: 899px)
		grid-template-columns: 1fr
		grid-template-areas: "sidebar" "mainpager"
		padding-top: 80px

.light
	background: white

.dark
	background: #171717

</style>
