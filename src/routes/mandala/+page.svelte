<script lang="ts">

	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import { onMount } from 'svelte'
	import { reveal } from 'svelte-reveal'
	import Lenis from '@studio-freight/lenis'
	import Animations from 'textify.js'
	import { fade } from 'svelte/transition'
	let rot:number
	let hoverOnImage:boolean = false
	let rota:number
	let rotb:number
	let rotc:number
	let rotd:number
	let scaling:number
	let observesA: IntersectionObserver
	let divA: Element

	function toggleSynaptic(){
		hoverOnImage = !hoverOnImage
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
		const lenis = new Lenis({
			orientation: 'vertical',
			duration: 1.0,
			wheelMultiplier: 0.5,
			infinite: false,
			smoothWheel: true
		})
		lenis.on('scroll', (e: any) => {
		})
		function raf(time: any) {
  		lenis.raf(time)
  		requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		const { Textify, TextifyTitle } = Animations
		new Textify({
			selector: '.typetextifyaa',
			duration: 1000,
			stagger: 200,
			fade: false,
			reveal: true,
			threshold: 0.2,
			once: false
		})
		new TextifyTitle({
			selector: '.typetextifybb',
			duration: 200,
			stagger: 50,
			fade: false,
			reveal: true,
			threshold: 0.2,
			once: true
		})
		new Textify({
			selector: '.typetextifycc',
			duration: 1000,
			stagger: 3000,
			fade: false,
			reveal: true,
			threshold: 0.2,
			once: false
		})
	})

</script>

<svelte:window bind:scrollY={rot}/>

<div class="fixed" style="color: white">
{rot}<br>{rota}
</div>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"></ParallaxImage>
	</div>
	<div class="plain-one x1 extra pads">
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
	<div class="gridof2 x2 pads">
		<div class="box">
			<h6 class="typetextifyaa">
				with a continuity of untold millennia, the passage of time visible to us in
			</h6>
			<h5 class="green typetextifyaa" style="transform: translateY({rota/3}px) scale({rota/200})">itihāsa</h5>
		</div>
		<div class="box" id="boxofitihasa">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/itihaas.webp" alt="itihas" style="transform: translateY({rota-390}px)"/>
		</div>
	</div>
	<div class="gridof2 x3 pads">
		<div class="box" id="boxofbharata">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/bharata.webp" alt="bharata" style="transform: translateY({rotb-390}px)"/>
		</div>
		<div class="box">
		<h6 class="typetextifyaa">
			information was processed in increasingly complex ways within the physical environment best described as
		</h6>
		<h5 style="transform: translateY({rotb/3}px) scale({rotb/300})">bhārata</h5>
		</div>
	</div>
	<div class="gridof2 x4 pads">
		<div class="box">
			<h6>
				emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h6>
			<h5 style="transform: translateY({rotc/3}px) scale({rotc/400})">
				dharma
			</h5>
		</div>
		<div class="box">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/dharma.webp" alt="dharma" style="transform: translateY({rotc-500}px)"/>
		</div>
	</div>
	<div class="plain-one x5 pads" on:mouseenter={toggleSynaptic} on:mouseleave={toggleSynaptic}>
		<h2 style="text-align: center; color: #272727;">and it is alive...</h2>
		<img class="rotatingmandala" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/rotator.webp" alt="rotator" style="transform: rotate({rot/10}deg)" transition:fade/>
		<div class="gridof2">
			<div class="card-nix extra">
				<h6>
					Fractal
				</h6>
				<p>
					A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.<br>
					A fractal displays the same properties at any magnification level, ie., it is multi-level.
				</p>
			</div>
			<div class="card-nix extra">
				<h6>
					Maṇḍala
				</h6>
				<p>
					A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).<br>
					A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
				</p>
			</div>
		</div>
	</div>
	<div class="plain-one x6 pads">
		<h3 class="wide60 typetextifybb" style="color: white">
			the Fractal Maṇḍala is an exploration, study and articulation of the Indian civilizational consciousness
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

.x2
	.box h5
		transform-origin: left center

.x3
	.box h5
		transform-origin: left center

.x4
	.box h5
		transform-origin: left center

#boxofitihasa img
	transition: all ease

.type
	background: var(--beau)
	h6, p
		color: white
		font-weight: 300
	h5
		color: var(--green)

.x0
	height: 100vh
	overflow: hidden

.x1
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center

.x2
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

.x3
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

.x4
	.box
		overflow: hidden
		img
			object-fit: cover
			width: 100%
			height: 100%
	@media screen and (min-width: 1024px)
		height: calc(50vh + 64px)
		padding-top: 32px
		padding-bottom: 32px

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
		.box img
			height: 120px

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
		.box img
			height: 120px
	

.x5
	padding-bottom: 64px
	padding-top: 64px
	@media screen and (min-width:1024px)
		height: 100vh
		justify-content: center

.rotatingmandala
	object-fit: contain
	transform-origin: center center
	@media screen and (min-width: 1024px)
		height: 280px
		width: 280px
		margin-left: auto
		margin-right: auto
	@media screen and (max-width: 1023px)
		height: 160px
		width: 160px
		margin-left: auto
		margin-right: auto

.x6
	padding-bottom: 64px

.onpagelinks
	a
		transition: var(--snap)
		&:hover
			color: var(--green)


</style>