<script lang="ts">

	import { onMount } from 'svelte'
	import visibilityMode from '$lib/stores/visibility'
	import { browser } from '$app/environment'
	import CompSearch from '$lib/ridunits/CompSearch.svelte'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	import MandalaLinks from '$lib/links/MandalaLinks.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'
	let iW:number
	let breakPoint:boolean
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	$: if ( iW <= 1023 ) {
		breakPoint = true 
	} else {
		breakPoint = false
	}

	export let sidebar:boolean

	onMount(() => {
		if ( iW <= 1023 ) {
			breakPoint = true
		}
	})

</script>

<svelte:window bind:innerWidth={iW}/>

<div class="appsidebar modal" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<div class="right" id="searcharea">
		<CompSearch></CompSearch>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/drashta">Bṛhat Draṣṭā</a></h5>
		<DrashtaLinks flytime={sidebar}/>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/anveshi">Bṛhat Anveṡī</a></h5>
		<AnveshiLinks flytime={sidebar}/>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/mrdanga">Bṛhad Mṛdaṅga</a></h5>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/dhiti">Dhīti</a></h5>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/openlibrary">Bṛhat Open Library</a></h5>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
		<AryavartaLinks flytime={sidebar}/>	
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/mandala">Fractal Maṇḍala</a></h5>
		<MandalaLinks flytime={sidebar}/>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/rta">Ṛta in Design</a></h5>
		<RtaLinks flytime={sidebar}/>
	</div>
	<div class="linksbox ta-r">
		<h5><a href="/about">About</a></h5>
		<AboutLinks flytime={sidebar}/>
	</div>
	<div class="linksbox ta-r">
		<h5>Site Tour</h5>
	</div>
</div>

<style lang="sass">

#searcharea
	display: flex
	@media screen and (min-width: 1024px)
		flex-direction: column
		justify-content: center
		padding-top: 32px
		padding-right: 16px
		padding-bottom: 32px
	@media screen and (max-width: 1023px)
		flex-direction: column
		width: 100%
		padding-right: 16px
		padding-bottom: 16px

.ta-r
	text-align: right

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
		font-size: 21px
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


</style>