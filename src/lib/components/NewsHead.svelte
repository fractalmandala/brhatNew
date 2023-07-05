<script lang="ts">
	import { themeMode } from '$lib/stores/globalstores';
	import Social from '$lib/components/Social.svelte';

	let y: number;
	let height: number;
	let isInvisible = false;
	let latestScrollY: number;
	let changer = false;

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		} else {
			isInvisible = false;
		}
		latestScrollY = y;
	}

	$: if (y >= 600) {
		changer = true;
	} else {
		changer = false;
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div
	class="appheader"
	class:hiddenHeader={isInvisible}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="bigg p-top-16">
		<a href="/newsletter" class="pagetitle">BṚHATADYA</a>
		<div class="rta-row xcenter-d xcenter-m ycenter colgap100">
			<div class="thinline" />
			<div class="subtitle">Fortnightly Updates from the Culture Engine</div>
			<div class="thinline" />
		</div>
	</div>
	<div class="midrow" class:changed={changer}>
		<div class="null">
			<p><a href="/">Bṛhat Home</a></p>
		</div>
		<div class="null">
			<p>|</p>
		</div>
		<div class="null">
			<p><a href="/newsletter/1">ISSUE 1</a></p>
		</div>
		<Social />
		<slot name="allbuttons" />
	</div>
</div>

<style lang="sass">

p
	&:hover
		a
			color: #fe4a49

.midrow.changed
	background: var(--opposite)
	
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
				font-size: 80px
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

.appheader.light
	background: #FFFFFF

.appheader.dark
	background: #171717

.appheader.hiddenHeader
	@media screen and (min-width: 1024px)
		transform: translateY(-156px)
	@media screen and (max-width: 1023px)
		transform: translateY(-128px)

.midrow
	p, p a
		margin: 0
		padding: 0
		font-size: 12px

</style>
