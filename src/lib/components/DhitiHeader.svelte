<script lang="ts">
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { themeMode, sideMode } from '$lib/stores/globalstores';
	import { browser } from '$app/environment';
	import tippy, { animateFill } from 'tippy.js';
	import LogDhiti from '$lib/logos/LogDhiti.svelte';
	import LogDhitiD from '$lib/logos/LogDhiDark.svelte';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/animations/shift-away.css';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	let showHome: boolean = false;
	let y: number;
	let circleIt: boolean = false;
	let height: number;
	let isInvisible = false;
	let mouseY: number;
	let latestScrollY: number;
	let iW: number;
	let breakPoint: boolean;
	let fake = false;
	export let opacitor: number;
	let opa: number;

	$: opa = opacitor / 700;

	function toggleVisibility() {
		if (browser) {
			themeMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('themeMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function toggleSideBar() {
		if (browser) {
			sideMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('sideMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function handleKeyDownEvent(event: KeyboardEvent) {
		if (event.key === 'F1' && browser) {
			sideMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('sideMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function toggleCircle() {
		circleIt = !circleIt;
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

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	onMount(() => {
		tippy('#single', {
			content: 'Toggle Dark/Light Mode.',
			duration: 300,
			arrow: true,
			animateFill: true,
			plugins: [animateFill],
			placement: 'top',
			theme: 'light'
		});
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

<svelte:window bind:scrollY={y} bind:innerHeight={height} bind:innerWidth={iW} />

<div
	class="appheader"
	class:hiddenHeader={isInvisible}
	class:light={$themeMode}
	class:dark={!$themeMode}
	style="opacity: {opa}"
>
	<a class="applogo" href="/dhiti" class:fullcol={breakPoint}>
		{#if $themeMode}
			<LogDhiti />
		{:else}
			<LogDhitiD />
		{/if}
		{#if !breakPoint}
			<p><a href="/">Bṛhat Home</a></p>
		{/if}
	</a>
	<button
		class="blank-button toggling"
		id="single"
		on:click={toggleVisibility}
		on:keydown={fauxfake}
	>
		{#if $themeMode}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
	<div
		class="menuicon"
		on:click={toggleSideBar}
		on:keydown={handleKeyDownEvent}
		on:mouseenter={toggleCircle}
		on:mouseleave={toggleCircle}
	>
		<p>Our Cosmos</p>
		<div id="menumainx" class:rotated={$sideMode}>
			<svg
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.7747 11.795C15.7418 12.8549 15.7418 14.5731 16.7747 15.633L21.5164 20.4998L16.7747 25.3666C15.7418 26.4266 15.7418 28.1448 16.7747 29.2047C17.2906 29.7354 17.9678 30 18.645 30C19.3222 30 19.9994 29.7354 20.5152 29.2047L29 20.4998L20.5152 11.795C19.4835 10.735 17.8064 10.735 16.7747 11.795Z"
					fill="#fe4a49"
				/>
				{#if circleIt}
					<path
						transition:draw={{ duration: 500, easing: quintOut }}
						d="M41 21C41 32.0457 32.0457 41 21 41C9.95431 41 1 32.0457 1 21C1 9.95431 9.95431 1 21 1C32.0457 1 41 9.95431 41 21Z"
						stroke="#fe4a49"
						stroke-width="2"
					/>
				{/if}
			</svg>
		</div>
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
	transition: 0.5s ease
	@media screen and (min-width: 1024px)
		padding-left: 80px
		padding-right: 80px
		grid-template-columns: 180px 1fr 180px
		grid-template-rows: 1fr
		grid-template-areas: "toggling applogo menuicon"
		height: 128px
		align-content: center
		align-items: center
		gap: 0
		border-bottom: 1px solid var(--borderline)
		.menuicon
			width: 180px
		.toggling
			display: flex
			justify-content: flex-start
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 200px
		grid-template-rows: 1fr
		grid-template-areas: "applogo menuicon"
		height: 72px
		align-content: center
		align-items: center
		padding: 0 16px
		background: #FFFFFF
		gap: 0
		.toggling
			display: none
		.applogo
			grid-area: applogo
		.menuicon
			grid-area: menuicon
			width: 200px
			height: 72px

.appheader.light
	background: #FFFFFF

.appheader.dark
	background: #171717

.appheader.hiddenHeader
	transform: translateY(-128px)

#menumainx
	height: 32px
	width: 32px
	display: flex
	flex-direction: column
	justify-content: center
	cursor: pointer
	transform-origin: center center
	transition: transform 0.2s ease

#menumainx.rotated
	transform: rotate(180deg)
	@media screen and (min-width: 900px)
		margin-left: 8px
	@media screen and (max-width: 899px)
		margin-left: 12px

@keyframes lineforward
	0%
		width: 0
	100%
		width: 100%

.applogo
	grid-area: applogo
	display: flex
	flex-direction: column
	gap: 12px
	align-items: center
	height: 128px
	p
		text-transform: uppercase
		font-weight: 800
		font-size: 14px
	@media screen and (min-width: 1024px)
		row-gap: 0
		justify-content: center
		p
			padding-top: 6px
	@media screen and (max-width: 1023px)
		width: 104px

.applogo.fullcol
	flex-direction: row

.light
	.applogo p
		color: #676767
		&:hover
			color: #fe4a49

.dark
	.applogo p
		color: white
		&:hover
			color: #fe4a49

.menuicon
	grid-area: menuicon
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	color: #474747
	text-transform: uppercase
	cursor: pointer
	@media screen and (min-width: 1024px)
		p
			font-size: 18px
			font-weight: bold
			padding-top: 4px

.appheader.light
	.menuicon p
		color: #272727

.appheader.dark
	.menuicon p
		color: #878787
</style>
