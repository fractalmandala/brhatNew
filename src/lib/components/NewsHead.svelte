<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import { browser } from '$app/environment';
	import CompToggle from '$lib/ridunits/TogToggle.svelte';

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

	onMount(() => {
		const handleMouse = (event: { clientY: number }) => {
			mouseY = event.clientY;
			if (mouseY <= 128) {
				isInvisible = false;
			}
		};
		window.addEventListener('mousemove', handleMouse);
		return () => {
			window.removeEventListener('mousemove', handleMouse);
		};
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div
	class="appheader"
	class:hiddenHeader={isInvisible}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<a class="applogo" href="/" data-sveltekit-reload>
		<div class="title">
			B<span style="color: #fe4a49"> ṛ</span>hat Fortnightly Dispatch
		</div>
		<slot name="currentissue" />
	</a>
	<div class="midrow">
		<slot name="local" />
	</div>
	<div class="menuicon">
		<p><a href="/">Bṛhat Main</a></p>
	</div>
	<div class="search" id="single" on:click={toggleVisibility} on:keydown={fauxfake}>
		<CompToggle />
	</div>
</div>

<style lang="sass">

.title
	color: var(--opposite)
	font-size: 18px
	font-weight: bold
	letter-spacing: 0.15px
	font-family: 'Authentic Sans', sans-serif
	
.appheader
	display: grid
	grid-auto-flow: row
	position: fixed
	z-index: 1000
	width: 100vw
	top: 0
	transition: 0.5s cubic-bezier(0.635, 0.405, 0.535, 0.035)
	@media screen and (min-width: 1024px)
		grid-template-columns: 400px 1fr 96px 20px
		grid-template-rows: 1fr
		grid-template-areas: "applogo midrow menuicon search"
		height: 48px
		align-content: center
		align-items: center
		padding: 0 32px
		gap: 0 12px
		border-bottom: 1px solid var(--forline)
		.applogo
			grid-area: applogo
		.midrow
			gap: 24px
		.search
			grid-area: search
			width: 20px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 96px
		grid-template-rows: 1fr
		grid-template-areas: "applogo menuicon"
		height: 64px
		align-content: start
		padding: 0 16px
		justify-items: stretch
		.search
			display: none

.appheader.light
	background: #FFFFFF

.appheader.dark
	background: #171717

.appheader.hiddenHeader
	transform: translateY(-80px)
	
.applogo
	grid-area: applogo
	display: flex
	flex-direction: column
	align-items: flex-start
	text-align: left
	justify-content: center
	height: 100%
	row-gap: 2px

.midrow
	grid-area: midrow
	display: flex
	@media screen and (min-width: 1024px)
		display: row
		height: 100%
		align-items: center
		justify-content: flex-end
		margin-right: 24px
	@media screen and (max-width: 1023px)
		display: none

.menuicon
	grid-area: menuicon
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	width: 96px
	color: var(--themer)
	text-transform: uppercase
	cursor: pointer
	height: 26px
	padding: 2px 0
	p
		font-weight: 400
		color: var(--themer)
		text-align: right
		font-family: 'Authentic Sans', sans-serif
		font-size: 14px
	@media screen and (max-width: 1023px)
		height: 64px
		width: 100%
	&:hover
		p
			color: #fe4a49

</style>
