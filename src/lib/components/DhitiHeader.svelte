<script lang="ts">

	import { onMount } from 'svelte'
	import { draw } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import visibilityMode from '$lib/stores/visibility'
	import { browser } from '$app/environment'
	import { fly } from 'svelte/transition'
	import tippy, {animateFill} from 'tippy.js'
	import LogDhiti from '$lib/logos/LogDhiti.svelte'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/shift-away.css'
	import CompToggle from '$lib/ridunits/CompToggle.svelte'
	import CompSearch from '$lib/ridunits/CompSearch.svelte'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	import MandalaLinks from '$lib/links/MandalaLinks.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'
	import autoAnimate from '@formkit/auto-animate'

	export let sidebar:boolean
	let showHome:boolean = false
	let y:number
	let circleIt:boolean = false
	let height:number
	let isInvisible = false
	let mouseY:number
	let latestScrollY:number
	let iW:number
	let breakPoint:boolean
	let fake = false

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	function toggleCircle(){
		circleIt = !circleIt
	}

	function fauxfake(){
		fake = !fake
	}

	function toggleSidebar(){
		sidebar = !sidebar
	}

	function handleKeyDownEvent(event: KeyboardEvent) {
		if (event.key === 'F1'){
			sidebar = !sidebar
		}
	}

	$: {
		if ( y > 100 && y > latestScrollY ) {
			isInvisible = true
		} else {
			isInvisible = false
		}
		latestScrollY = y
	}

	function closeSidebar(){
		if ( sidebar === true ) {
			sidebar = false
		}
	}

	$: if ( iW <= 1023) {
		breakPoint = true
	} else {
		breakPoint = false
	}


	onMount(() => {
		tippy ('#single', {
			content: 'Toggle Dark/Light Mode.',
			duration: 300,
			arrow: true,
			animateFill: true,
			plugins: [animateFill],
			placement: 'top',
			theme: 'light'
		})
		const handleMouse = (event: {clientY: number;}) => {
			mouseY = event.clientY
			if ( mouseY <= 128 ) {
				isInvisible = false
			} 
		}
		window.addEventListener('mousemove', handleMouse)
		return() => {
			window.removeEventListener('mousemove',handleMouse)
		}
	})
 
</script>


<svelte:window bind:scrollY={y} bind:innerHeight={height} bind:innerWidth={iW}/>

<div class="appheader" class:onsidebar={sidebar} class:hiddenHeader={isInvisible} class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<a class="applogo" href="/dhiti">
		<LogDhiti></LogDhiti>
	</a>
	<div class="toggling" id="single" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="switch rta-column" use:autoAnimate class:light={$visibilityMode} class:dark={!$visibilityMode}>
		  <div class="slider rta-in-col"></div>
		</div>
	</div>
	<div class="menuicon" on:click={toggleSidebar} on:keydown={handleKeyDownEvent} on:mouseenter={toggleCircle} on:mouseleave={toggleCircle}>
		<p>Our Cosmos</p>
		<div id="menumainx" class:rotated={sidebar}>
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.7747 11.795C15.7418 12.8549 15.7418 14.5731 16.7747 15.633L21.5164 20.4998L16.7747 25.3666C15.7418 26.4266 15.7418 28.1448 16.7747 29.2047C17.2906 29.7354 17.9678 30 18.645 30C19.3222 30 19.9994 29.7354 20.5152 29.2047L29 20.4998L20.5152 11.795C19.4835 10.735 17.8064 10.735 16.7747 11.795Z" fill="#fe4a49"/>
				{#if circleIt}
				<path 
					transition:draw={{ duration: 500, easing: quintOut }}
					d="M41 21C41 32.0457 32.0457 41 21 41C9.95431 41 1 32.0457 1 21C1 9.95431 9.95431 1 21 1C32.0457 1 41 9.95431 41 21Z" stroke="#fe4a49" stroke-width="2"/>
				{/if}
			</svg>
		</div>
	</div>
</div>

{#if sidebar}
	<div class="appsidebar" in:fly={{ duration: 500, x: 400, y: 0}} out:fly={{ duration: 500, x: 400, y: 0}} data-lenis-prevent on:mouseleave={closeSidebar} class:light={$visibilityMode} class:dark={!$visibilityMode}>
		<div class="linksbox right" id="searcharea">
			<CompSearch></CompSearch>
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/drashta">Bṛhat Draṣṭā</a></h5>
				<DrashtaLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/anveshi">Bṛhat Anveṡī</a></h5>
				<AnveshiLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/mrdanga">Bṛhad Mṛdaṅga</a></h5>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/dhiti">Dhīti</a></h5>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/openlibrary">Bṛhat Open Library</a></h5>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/mandala">Fractal Maṇḍala</a></h5>
				<MandalaLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
				<AryavartaLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5><a href="/rta">Ṛta in Design</a></h5>
				<RtaLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r" on:click={closeSidebar} on:keydown={fauxfake}>
			{#if sidebar}
				<h5 in:fly={{ delay: 500, duration: 100, x: 128, y: 0}} out:fly={{ delay: 0, duration: 100, x: 128, y: 0}}><a href="/about">About</a></h5>
				<AboutLinks flytime={sidebar}/>
			{/if}
		</div>
		<div class="linksbox ta-r">
			{#if sidebar}
				<h5 in:fly={{ delay: 500, duration: 100, x: 128, y: 0}} out:fly={{ delay: 0, duration: 100, x: 128, y: 0}}>Site Tour</h5>
			{/if}
		</div>
	</div>
{/if}

<style lang="sass">

.ta-r
	text-align: right

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

.linksbox
	display: flex
	flex-direction: column
	padding: 16px
	position: relative
	border-bottom: 1px solid #272727
	h5, h5 a
		margin: 0
		text-align: right
		text-transform: uppercase
		font-weight: 700
		font-size: 27px
		padding-bottom: 8px
		cursor: pointer
		color: white
	&:hover
		h5, h5 a
			color: #fe4a49
		&::after
			animation: lineforward 0.32s var(--cubeb) forwards
	&::after
		position: absolute
		bottom: 0
		right: 0
		content: ''
		height: 1px
		background: #474747
		width: 0

@keyframes lineforward
	0%
		width: 0
	100%
		width: 100%
		

.appsidebar
	right: 0
	top: 0
	display: flex
	flex-direction: column
	height: 100vh
	width: 100vw
	overflow-x: hidden
	width: 400px
	z-index: 999
	position: fixed
	overflow-y: scroll
	@media screen and (max-width: 899px)
		width: 100vw
		z-index: 899
		padding-top: 88px

.appsidebar.dark
	background: #171717

.appsidebar.light
	background: #171717

.appsidebar::-webkit-scrollbar
	width: 2px

.appsidebar::-webkit-scrollbar-thumb
	background: #fe4a49

.appheader.onsidebar
	width: calc(100vw - 400px)
	left: 0
	@media screen and (max-width: 899px)
		width: 100vw
		left: 0

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
	
.applogo
	grid-area: applogo
	display: flex
	flex-direction: row
	gap: 12px
	align-items: center
	height: 128px
	@media screen and (min-width: 1024px)
		row-gap: 0
		justify-content: center
	@media screen and (max-width: 1023px)
		width: 104px

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

.switch 
	cursor: pointer
	height: 20px
	width: 48px
	border-radius: 10px
	padding-top: 1px
	padding-right: 2px
	padding-left: 2px
	transition: all 0.23s ease

.switch
	&:hover
		.slider
			background: #fe4a49

.switch.light
	align-items: flex-end
	border: 1px solid #272727
	&:hover
		border: 1px solid #fe4a49

.switch.dark
	align-items: flex-start
	border: 1px solid #272727
	&:hover
		border: 1px solid #fe4a49

.slider 
	width: 16px
	height: 16px
	border-radius: 8px
	transition: all 0.23s ease
	background: #272727


</style>