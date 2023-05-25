<script lang="ts">

	import { onMount } from 'svelte'
	import { draw } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { themeMode } from '$lib/stores/globalstores'
	import { browser } from '$app/environment'
	import RIDSidebar from '$lib/ridunits/RIDSidebar.svelte'
	import CompToggle from '$lib/ridunits/CompToggle.svelte'

	let sidebar:boolean
	let circleIt:boolean = false
	let y:number
	let height:number
	let isInvisible = false
	let mouseY:number
	let latestScrollY:number
	let iW:number
	let breakPoint:boolean
	let fake = false

	function toggleVisibility() {
	  if (browser) {
	    themeMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('themeMode', JSON.stringify(newMode));
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

<div class="appheader" class:onsidebar={sidebar} class:hiddenHeader={isInvisible} class:light={$themeMode} class:dark={!$themeMode}>
	<div class="applogo">
		<slot name="logo"></slot>
	</div>
	<div class="midrow">
		<slot name="local"></slot>
	</div>
	<div class="search" id="single" on:click={toggleVisibility} on:keydown={fauxfake}>
		<CompToggle></CompToggle>
	</div>
	<div class="menuicon colgap100" on:click={toggleSidebar} on:keydown={handleKeyDownEvent} on:mouseenter={toggleCircle} on:mouseleave={toggleCircle}>
		<p>Our Cosmos</p>
		<div id="menumainx">
			<svg id="pulsar" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M3.07538 3.07539C4.97451 1.17624 7.60074 0 10.5 0C13.3993 0 16.0255 1.17624 17.9247 3.07538C19.8237 4.97449 21 7.60074 21 10.5C21 13.3993 19.8237 16.0255 17.9247 17.9247C16.0255 19.8237 13.3993 21 10.5 21C7.60074 21 4.97451 19.8237 3.0754 17.9247C1.17629 16.0255 0 13.3993 0 10.5C0 7.60074 1.17626 4.97451 3.07538 3.07539Z" fill="#474747"/>
			</svg>
			<svg id="sliver" width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0.232608 20.7295C-0.0775366 20.3689 -0.0775334 19.7843 0.232616 19.4236C2.19765 17.1389 3.41164 13.9852 3.41164 10.5C3.41164 7.01488 2.19766 3.86117 0.232607 1.57635C-0.0775381 1.21574 -0.0775353 0.631067 0.232613 0.270456C0.542761 -0.0901559 1.04561 -0.0901507 1.35575 0.270464C3.60649 2.88746 5 6.5054 5 10.5C5 14.4947 3.60649 18.1126 1.35575 20.7295C1.0456 21.0902 0.542752 21.0902 0.232608 20.7295Z" fill="white"/>
			</svg>
		</div>
	</div>
</div>

{#if sidebar}
	<div on:mouseleave={closeSidebar}>
		<RIDSidebar/>
	</div>
{/if}

<style lang="sass">

.appheader.onsidebar
	width: calc(100vw - 400px)
	left: 0
	.midrow
		display: none
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
	transition: 0.5s cubic-bezier(0.635, 0.405, 0.535, 0.035)
	@media screen and (min-width: 900px)
		grid-template-columns: 190px 1fr 200px 56px 144px
		grid-template-rows: 1fr
		grid-template-areas: "applogo midrow autofill search menuicon"
		height: 80px
		align-content: center
		align-items: center
		padding: 0 32px
		gap: 0
		.midrow
			gap: 24px
		.search
			grid-area: search
			width: 56px
	@media screen and (max-width: 899px)
		grid-template-columns: 160px 1fr
		grid-template-rows: 1fr
		grid-template-areas: "applogo menuicon"
		height: 64px
		align-content: center
		align-items: center
		padding: 0 20px
		justify-items: stretch
		.search
			display: none

.appheader.light
	background: #171717

.appheader.dark
	background: #171717
	box-shadow: 4px 4px 8px #090909

.appheader.hiddenHeader
	transform: translateY(-80px)

.midrow
	grid-area: midrow
	display: flex
	@media screen and (min-width: 900px)
		display: row
		height: 100%
		align-items: center
		justify-content: flex-start
	@media screen and (max-width: 899px)
		display: none

.menuicon
	grid-area: menuicon
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	width: 144px
	color: white
	text-transform: uppercase
	cursor: pointer
	border-radius: 16px
	height: 26px
	padding: 2px 0
	p
		padding-top: 2px
		color: #FFFFFF
		font-weight: 700
	@media screen and (max-width: 899px)
		height: 64px
		width: 100%
	&:hover
		p
			color: #fe4a49
		#sliver
			display: block
			animation: doppler 1.5s ease-in-out infinite both

#menumainx
	height: 24px
	width: 24px
	display: flex
	flex-direction: row
	cursor: pointer
	transform-origin: center center
	transition: transform 0.2s cubic-bezier(0.515, 0.130, 0.295, 0.450)

#sliver
	transform: translateX(8px)
	height: 24px
	display: none
	path
		fill: #FFFFFF

#pulsar
	animation: heartbeat 1.5s ease-in-out infinite both
	height: 20px
	width: 20px
	margin-top: 2px
	path
		fill: #FFFFFF

@keyframes doppler
	from
		transform: translateX(4px)
	10%
		transform: translateX(12px)
	17%
		transform: translateX(10px)
	33%
		transform: translateX(12px)
	45%
		transform: translateX(4px)

@keyframes heartbeat
	from
		transform: scale(1)
		transform-origin: center center
		animation-timing-function: ease-out
	10%
		transform: scale(0.91)
		animation-timing-function: ease-in
	17%
		transform: scale(0.98)
		animation-timing-function: ease-out
	33%
		transform: scale(0.87)
		animation-timing-function: ease-in
	45%
		transform: scale(1)
		animation-timing-function: ease-out

</style>