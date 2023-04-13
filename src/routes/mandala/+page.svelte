<script lang="ts">

	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Parallax2 from '$lib/components/ParallaxImage.svelte'
	import { onMount } from 'svelte'
	import { reveal } from 'svelte-reveal'
	import Animations from 'textify.js'
	import { fade } from 'svelte/transition'
	import { elementVisibilityStore } from 'svelte-legos'
	let rot:number
	let hoverOnImage:boolean = false
	let rota:number
	let rotb:number
	let rotc:number
	let rotd:number
	let scaling:number
	let observesA: IntersectionObserver
	let divA: Element
	let ref: HTMLElement | null = null
	let secondmove:number = 0

	function toggleSynaptic(){
		hoverOnImage = !hoverOnImage
	}

	$: ({ isVisible } = elementVisibilityStore(ref))
	$: if ($isVisible === true) {
		secondmove = rot - 700
	} else {
		secondmove = 0
	}

	$: if ( rot > 850 ) {
		rota = rot - 850
	} else {
		rota = 0
	}

	$: if ( rot > 1290 ) {
		rotb = rot - 1290
	} else {
		rotb = 0
	}

	$: if ( rot > 1750 ) {
		rotc = rot - 1750
	} else {
		rotc = 0
	}


	onMount(() => {
		const { Textify, TextifyTitle } = Animations
		new Textify({
			selector: '.typetextifyaa',
			duration: 1500,
			stagger: 100,
			fade: false,
			reveal: true,
			threshold: 0.1,
			once: false
		})
		new TextifyTitle({
			selector: '.typetextifybb',
			duration: 1000,
			stagger: 50,
			fade: false,
			reveal: true,
			threshold: 0.1,
			once: true
		})
		new Textify({
			selector: '.typetextifycc',
			duration: 1000,
			stagger: 1000,
			fade: false,
			reveal: true,
			threshold: 0.2,
			once: false
		})
	})

</script>

<svelte:window bind:scrollY={rot}/>

<svelte:head>
	<HeadComponent>
		Fractal Maṇḍala at
	</HeadComponent>
</svelte:head>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"></ParallaxImage>
	</div>
	<div class="x00">
		<div class="insideparal back" style="transform: translateY({rota / 4}px)">
			<div class="boxc" bind:this={ref}>
				<h6 class="wide60 typetextifyaa">
					To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
				</h6>
				<h6 class="wide60 typetextifyaa">
					It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
				</h6>
				<h5 class="typetextifybb">
				Such a history of India is still to be written.
				</h5>
				<p class="typetextifycc">- Shri KM Munshi</p>
			</div>			
		</div>
	</div>

	<div class="x2 pads back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/486.webp')">
		<div class="box">
			<h5 class="typetextifyaa">
				with a continuity of untold millennia, the passage of time visible to us in
			</h5>
			<h3 class="green typetextifyaa" style="color: #ff3d00">itihāsa</h3>
		</div>
	</div>
	<div class="x3 back">
		<div class="pads box back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/465.webp'); transform: translateY({-rotb / 6}px)">
		<h5 class="typetextifyaa">
			information was processed in increasingly complex ways within the physical environment best described as
		</h5>
		<h3 class="typetextifyaa" style="color: #ff3d00">bhārata</h3>
		</div>
	</div>
	<div class="x4 back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/458.webp'); transform: translateY({-rotc / 4}px)">
		<div class="box pads">
			<h5 class="typetextifyaa" style="color: white">
				emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h5>
			<h3 class="typetextifyaa" style="color: #ff3d00">
				dharma
			</h3>
		</div>
	</div>
	<div class="plain-one x5 pads" on:mouseenter={toggleSynaptic} on:mouseleave={toggleSynaptic}>
			<h2 style="text-align: center; color: #FFFFFF;">and it is alive...</h2>
			<img class="rotatingmandala" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/fractallogo.webp" alt="rotator" style="transform: rotate({rot/10}deg)" transition:fade/>
			<div class="gridof2">
				<div class="card-nix extra">
					<h4>
						Fractal
					</h4>
					<pre>
					A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.<br>
					A fractal displays the same properties at any magnification level, ie., it is multi-level.
					</pre>
				</div>
				<div class="card-nix extra">
					<h4>
					Maṇḍala
					</h4>
					<pre>
					A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).<br>
					A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
					</pre>
				</div>
			</div>
	</div>
		<div class="plain-one x6 pads">
		<h3 class="wide60 typetextifybb" style="color: white">
			the Fractal Maṇḍala is an exploration, study and articulation of the </h3>
		<h3 class="typetextifybb" style="color: #ff3d00">
		Indian civilizational consciousness
		</h3>
		<div class="onpagelinks dark">
			<h4><a href="/mandala/macrohistoriccase" target="_self">the macrohistoric case</a></h4>
			<h4><a href="/mandala/aphorisms" target="_self">caturasūtra - 4 aphorisms</a></h4>
			<h4><a href="/mandala/indiancivcon" target="_self">indian civilizational consciousness</a></h4>
			<h4><a href="/mandala/rathaasbija" target="_self">ratha as a bīja</a></h4>
			<h4><a href="/mandala/historyvsitihasa" target="_self">history is ontic, itihāsa ontologic</a></h4>
			<h4><a href="/mandala/ancestors" target="_self">ancestors outside of time</a></h4>
			<h4><a href="/mandala/ramasjourney" target="_self">the avatāra in you</a></h4>
			<h4><a href="/mandala/synrec" target="_self">synaptic reconnection</a></h4>
		</div>
		</div>
</div>


<style lang="sass">

.x00
	position: relative
	.insideparal
		position: absolute
		height: 100vh
		width: 100%
		background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/485.webp')
		top: 0
		left: 0

.insideparal
	display: flex
	flex-direction: column
	justify-content: flex-end
	padding-bottom: 128px
	padding-left: 6vw
	.boxc
		width: 70%
		background: rgba(0,0,0,0.5)
		padding: 32px
		h6, h5
			padding-bottom: 16px
		h5
			color: #ff3d00
		

.x5
	.gridof2
		.card-nix
			border: 1px solid #272727
			border-radius: 4px
			padding: 48px
			transition: all 0.24s var(--cubea)
			background-color: hsla(0,0%,0%,1)
			background-image: radial-gradient(at 7% 20%, hsla(27,58%,33%,0.25) 0px, transparent 50%), radial-gradient(at 10% 60%, hsla(25,93%,19%,0.95) 0px, transparent 50%)
			h4
				color: #10D56C
			&:hover
				background-color: hsla(151,85%,42%,0)
				background-image: radial-gradient(at 7% 20%, hsla(27,58%,33%,0.95) 0px, transparent 50%), radial-gradient(at 10% 60%, hsla(25,93%,19%,0.95) 0px, transparent 50%)
				h4
					color: #ff3d00
		@media screen and (min-width: 1024px)
			padding-left: 10vw
			padding-right: 10vw
			.card-nix
				pre
					color: white
					line-height: 1.8


.card-nix
	pre
		white-space: pre-line

.x2
	.box h5
		transform-origin: left center

.x3
	.box h5
		transform-origin: left center

.x4
	.box h5
		transform-origin: left center

.type
	background-color: hsla(0,0%,0%,1)
	background-image: radial-gradient(at 70% 20%, hsla(27,58%,33%,0.95) 0px, transparent 50%), radial-gradient(at 10% 60%, hsla(25,93%,19%,0.95) 0px, transparent 50%)
	h6, p
		color: white
		font-weight: 300
	h5
		color: var(--green)

.x0, .x00
	height: 100vh
	overflow: hidden


.x2
	.box
		overflow: hidden
		display: flex
		flex-direction: column
		justify-content: center
		height: 100%
	h5
		color: white
		line-height: 1.3
		background: rgba(0,0,0,0.8)
		padding: 4px
	h3
		background: rgba(0,0,0,0.8)
		width: max-content
		padding: 8px
	@media screen and (min-width: 1024px)
		height: 100vh
		padding-top: 32px
		padding-bottom: 32px


.x3
	.box
		overflow: hidden
		display: flex
		flex-direction: column
		justify-content: center
		height: 100%
	h5
		color: white
		line-height: 1.3
		background: rgba(0,0,0,0.8)
		padding: 4px
	h3
		background: rgba(0,0,0,0.8)
		width: max-content
		padding: 8px
	@media screen and (min-width: 1024px)
		height: 100vh
		.box
			height: 100vh

.x4
	.box
		overflow: hidden
	h5
		color: white
		line-height: 1.3
		background: rgba(0,0,0,0.8)
		padding: 4px
	h3
		background: rgba(0,0,0,0.8)
		width: max-content
		padding: 8px
	@media screen and (min-width: 1024px)
		height: 100vh
		padding-top: 32px
		padding-bottom: 32px
		padding-top: 128px

.x2, .x4
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 30%
		grid-template-areas: ". ."
		height: 100%
		gap: 0 32px
		padding-top: 32px
		padding-bottom: 32px
		.box
			overflow: hidden

.x3
	@media screen and (max-width: 1023px)
		grid-template-columns: 30% 1fr
		grid-template-areas: ". ."
		height: 100%
		gap: 0 32px
		padding-top: 32px
		padding-bottom: 32px
		.box
			overflow: hidden
	

.x5
	padding-bottom: 64px
	padding-top: 64px
	@media screen and (min-width:1024px)
		justify-content: center

.rotatingmandala
	object-fit: contain
	transform-origin: center center
	@media screen and (min-width: 1024px)
		height: 320px
		width: 320px
		margin-left: auto
		margin-right: auto
	@media screen and (max-width: 1023px)
		height: 160px
		width: 160px
		margin-left: auto
		margin-right: auto

.x6
	padding-bottom: 64px
	padding-top: 64px


.onpagelinks
	a
		transition: var(--snap)
		&:hover
			color: #ff3d00


</style>