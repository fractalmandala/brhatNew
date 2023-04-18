<script lang="ts">

	export let data	
	import Header from '$lib/components/SubHeader.svelte'
	import PageProgress from '$lib/components/PageProgress.svelte'
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	import { mandalaAll } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let fractals:any
	let wide:number
	let mobileView:boolean = false
	let sidebar = false
	let dropdown = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function closeDropDown(){
		if ( dropdown === true ) {
			dropdown = false
		}
	}

	$: if ( wide <= 1023 ) {
		mobileView = true
	} else {
		mobileView = false
	}

	onMount(async() => {
		fractals = await mandalaAll()
	})
</script>


<svelte:window bind:innerWidth={wide}/>

<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/mandala/aphorisms">Caturasūtra</a>
		<a href="/mandala/ancestors">Ancestors Outside of Time</a>
		<a href="/mandala/synrec">Synaptic Reconnection</a>
		<a href="/mandala/indiancivcon">Consciousness</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}><p class="dropperp">Core Essays</p>
			{#if dropdown}
				<a id="link11" href="/mandala/macrohistoriccase" in:fly={{ duration: 100, delay: 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Macrohistoric Case</a>
				<a id="link22" href="/mandala/historyvsitihasa" in:fly={{ duration: 100, delay: 100, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>History vs. Itihāsa</a>
				<a id="link33" href="/mandala/rathaasbija" in:fly={{ duration: 100, delay: 150, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Ratha as a Bīja</a>
				<a id="link44" href="/mandala/ramasjourney" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Avatāra in You</a>
			{/if}
		</div>
	</div>
</Header>
<PageProgress --thispagebackground="#10C56C"/>
<div class="type mandalatext heightmeasure">
	<div class="x0">
		<ParallaxImage --parallax="url('{data.image}')"></ParallaxImage>
	</div>
	<div class="plain-one x1 pads">
		<div class="a-title">
			<h2>
			{data.title}
			</h2>
		</div>
	</div>
	<div class="x2">
		<div class="mainbar">
			<svelte:component this={data.content}/>
		</div>
	</div>
</div>

<style lang="sass">

#dropper
	position: relative
	a
		position: absolute
		text-align: right
		min-width: 200px
		right: 0
		background: var(--beau)
		padding: 4px 8px
		&:hover
			background: #fe4a49
	#link11
		top: 32px
	#link22
		top: 56px
	#link33
		top: 80px
	#link44
		top: 104px
	
	

.mandalatext
	background: #171717

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 50vh

.x1
	padding-top: 64px
	padding-bottom: 64px
	h2
		color: #10D56C
		text-align: center

.x2
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	.mainbar
		grid-area: mainbar
		background: white
		border-radius: 4px
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 20vw 64px 20vw
		.mainbar
			padding: 64px
			border: 1px solid #272727
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "mainbar"
		padding: 64px 6vw
		gap: 32px 0
		.mainbar
			padding: 16px

.mainbar
	padding-top: 80px
	

</style>