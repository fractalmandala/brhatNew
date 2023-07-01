<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import { browser } from '$app/environment';
	import CompToggle from '$lib/ridunits/TogToggle.svelte';
	import Social from '$lib/components/Social.svelte';

	let y: number;
	let height: number;
	let isInvisible = false;
	let mouseY: number;
	let latestScrollY: number;
	let fake = false;

	function toggleVisibility() {
		if (browser) {
			themeMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('themeMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function fauxfake() {
		fake = !fake;
	}

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		} else {
			isInvisible = false;
		}
		latestScrollY = y;
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div
	class="appheader"
	class:hiddenHeader={isInvisible}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="bigg p-top-64">
		<div class="pagetitle">BṚHATADYA</div>
		<div class="rta-row xcenter-d xcenter-m ycenter colgap100">
			<div class="thinline" />
			<div class="subtitle">Fortnightly Updates from the Culture Engine</div>
			<div class="thinline" />
		</div>
	</div>
	<div class="midrow">
		<div class="null">
			<p><a href="/">Home</a></p>
		</div>
		<Social />
		<div
			class="search rta-row ycenter"
			id="single"
			on:click={toggleVisibility}
			on:keydown={fauxfake}
		>
			<CompToggle />
		</div>
		<slot name="allbuttons" />
	</div>
</div>

<style lang="sass">
	
.appheader
	display: grid
	grid-auto-flow: row
	position: fixed
	z-index: 1000
	width: 100vw
	top: 0
	transition: 0.5s cubic-bezier(0.635, 0.405, 0.535, 0.035)
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "bigg" "midrow"
		align-content: center
		align-items: center
		padding: 0 32px
		gap: 0 12px
		border-bottom: 1px solid var(--forline)
		.bigg
			grid-area: bigg
			display: flex
			flex-direction: column
			margin-bottom: 32px
			.pagetitle
				text-align: center
				font-weight: bold
				font-family: 'Gandhi', serif
				font-size: 104px
				letter-spacing: -2px
				color: var(--opposite)
			.subtitle
				text-align: center
				color: var(--themer)
				font-size: 12px
			.thinline
				height: 1px
				width: 32px
				background: var(--opposite)
		.midrow
			display: flex
			flex-direction: row
			justify-content: center
			align-items: center
			border-top: 1px solid var(--forline)
			column-gap: 16px
			padding-top: 8px
			padding-bottom: 8px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "bigg" "midrow"
		align-content: center
		align-items: center
		min-height: 48px
		.bigg
			grid-area: bigg
			display: flex
			flex-direction: column
			margin-bottom: 32px
			.pagetitle
				text-align: center
				font-weight: bold
				font-family: 'Gandhi', serif
				font-size: 56px
				letter-spacing: -2px
				color: var(--opposite)
			.subtitle
				text-align: center
				color: var(--themer)
				font-size: 12px
			.thinline
				height: 1px
				width: 32px
				background: var(--opposite)
		.midrow
			display: flex
			flex-direction: row
			justify-content: center
			align-items: center
			border-top: 1px solid var(--forline)
			column-gap: 16px
			padding-top: 8px
			padding-bottom: 8px
		.search
			display: none

.appheader.light
	background: #FFFFFF

.appheader.dark
	background: #171717

.appheader.hiddenHeader
	@media screen and (min-width: 1024px)
		transform: translateY(-232px)
	@media screen and (max-width: 1023px)
		transform: translateY(-144px)

.midrow
	p, p a
		margin: 0
		padding: 0
		font-size: 12px

</style>
