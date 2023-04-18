<script lang="ts">

	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Parallax2 from '$lib/components/ParallaxImage.svelte'
	import { onMount } from 'svelte'
	import { reveal } from 'svelte-reveal'
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
				<h6 class="wide60">
					To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
				</h6>
				<h6 class="wide60">
					It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
				</h6>
				<h5>
				Such a history of India is still to be written.
				</h5>
				<p>- Shri KM Munshi</p>
			</div>			
		</div>
	</div>

	<div class="x2 pads back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/486.webp')">
		<div class="box">
			<h4>
				with a continuity of untold millennia, the passage of time visible to us in
			</h4>
			<h2 class="green" style="color: #ff3d00">itihāsa</h2>
		</div>
	</div>
	<div class="x3 back">
		<div class="pads box back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/465.webp'); transform: translateY({-rotb / 6}px)">
		<h4>
			information was processed in increasingly complex ways within the physical environment best described as
		</h4>
		<h2 style="color: #ff3d00">bhārata</h2>
		</div>
	</div>
	<div class="x4 back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/458.webp'); transform: translateY({-rotc / 4}px)">
		<div class="box pads wide60">
			<h4 style="color: white">
				emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h4>
			<h2 style="color: #ff3d00">
				dharma
			</h2>
		</div>
	</div>
	<div class="plain-one x5 pads" on:mouseenter={toggleSynaptic} on:mouseleave={toggleSynaptic}>
			<h2 style="text-align: center; color: #FFFFFF;">and it is alive...</h2>
			<img class="rotatingmandala" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/fractallogo.webp" alt="rotator" style="transform: rotate({rot/10}deg)" transition:fade/>
			<div class="gridof2">
				<div class="specs extra">
					<h4>
						Fractal
					</h4>
					<pre>
					A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.<br>
					A fractal displays the same properties at any magnification level, ie., it is multi-level.
					</pre>
				</div>
				<div class="specs extra">
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
		<h3 class="wide60" style="color: white">
			the Fractal Maṇḍala is an exploration, study and articulation of the </h3>
		<h3 style="color: #10D56C">
		Indian civilizational consciousness
		</h3>
		<div class="onpagelinks dark">
			<h4><a href="/mandala/macrohistoriccase">the macrohistoric case</a></h4>
			<h4><a href="/mandala/aphorisms">caturasūtra - 4 aphorisms</a></h4>
			<h4><a href="/mandala/indiancivcon">indian civilizational consciousness</a></h4>
			<h4><a href="/mandala/rathaasbija">ratha as a bīja</a></h4>
			<h4><a href="/mandala/historyvsitihasa">history is ontic, itihāsa ontologic</a></h4>
			<h4><a href="/mandala/ancestors">ancestors outside of time</a></h4>
			<h4><a href="/mandala/ramasjourney">the avatāra in you</a></h4>
			<h4><a href="/mandala/synrec">synaptic reconnection</a></h4>
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
		
.specs
	border: 1px solid #272727
	border-radius: 4px
	padding: 48px
	transition: all 0.24s var(--cubea)
	display: flex
	flex-direction: column
	row-gap: 16px
	h4
		color: white
	&:hover
		h4
			color: #10D56C

.x2
	@media screen and (min-width: 1024px)
		padding-left: 10vw
		padding-right: 10vw

@keyframes tubegreen
	0%
		background-color: hsla(140,80%,60%,0.1)
		background-image: radial-gradient(at 97% 96%, hsla(108,67%,92%,0.1) 0px, transparent 100%), radial-gradient(at 5% 70%, hsla(325,87%,90%,1) 0px, transparent 50%)
		filter: blur(24px)
	42%
		background-color: hsla(120,80%,60%,0.2)
		background-image: radial-gradient(at 97% 96%, hsla(108,67%,92%,0.1) 0px, transparent 100%), radial-gradient(at 5% 70%, hsla(325,87%,90%,1) 0px, transparent 50%)
		filter: blur(102px)
	70%
		background-color: hsla(120,80%,60%,0.35)
		background-image: radial-gradient(at 97% 96%, hsla(108,67%,92%,0.6) 0px, transparent 100%), radial-gradient(at 5% 70%, hsla(325,87%,90%,1) 0px, transparent 50%)
		filter: blur(32px)
	100%
		background-color: hsla(130,90%,45%,1)
		background-image: radial-gradient(at 97% 96%, hsla(108,67%,92%,1) 0px, transparent 100%), radial-gradient(at 5% 70%, hsla(325,87%,90%,1) 0px, transparent 50%)
		filter: blur(20px)


.specs
	pre
		white-space: pre-line

.x2
	.box h4
		transform-origin: left center

.x3
	.box h4
		transform-origin: left center

.x4
	.box h4
		transform-origin: left center

.type
	background-color: hsla(0,0%,0%,1)
	background-image: radial-gradient(at 70% 20%, hsla(27,58%,33%,0.1) 0px, transparent 50%), radial-gradient(at 10% 60%, hsla(25,93%,19%,0.25) 0px, transparent 50%)
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
	h4
		color: white
		line-height: 1.3
		padding: 4px
		text-shadow: 4px 4px 12px #111111
		width: 60%
	h2
		width: max-content
		text-shadow: 4px 4px 12px #111111
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
	h4
		color: white
		width: 60%
		margin-left: 40%
		text-align: right
		line-height: 1.3
		background: rgba(0,0,0,0.8)
		padding: 4px
	h2
		background: rgba(0,0,0,0.8)
		text-align: right
		padding: 8px
	@media screen and (min-width: 1024px)
		height: 100vh
		.box
			height: 100vh

.x4
	.box
		overflow: hidden
	h4
		color: white
		line-height: 1.3
		text-shadow: 4px 4px 12px #111111
		padding: 4px
	h2
		text-shadow: 4px 4px 12px #111111
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
		margin-top: -256px

.x6
	padding-top: 64px

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
			color: #10D56C


</style>