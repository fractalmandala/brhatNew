<script lang="ts">

	import { onMount, onDestroy } from 'svelte'
	import Parallax from '$lib/components/ParallaxImage.svelte'
	import Animations from 'textify.js'

	let panel3:HTMLElement | null
	let panel2:HTMLElement | null
	let panel4:HTMLElement | null
	let panel5:HTMLElement | null
	let panel6:HTMLElement | null
	let panel9:HTMLElement | null
	let ifPanel5 = false
	let ifPanel6 = false
	let ifPanel9 = false
	let yPanel2 = 100
	let yPanel3 = 100
	let yPanel4 = 100
	let yPanel5 = 0
	let yPanel6 = 0
	let yPanel9 = 0
	let scaling:number
	let options = {}
	let sY:number
	let oH:number
	let iW:number
	let stringed3:string
	let stringed2:string
	let breakLeft = false
	let breakRight = false
	let breakPoint:boolean

	const updateTwoPosition = () => {
		if (!panel2 || breakPoint === true) return
		const { top, height } = panel2.getBoundingClientRect()
		yPanel2 = Math.max(0, (oH - top) / height * 100 )
	}

	const updateThreePosition = () => {
		if (!panel3 || breakPoint === true) return
		const { top, height } = panel3.getBoundingClientRect()
		yPanel3 = Math.max(0, (oH - top) / height * 100)	
	}

	const updateFourPosition = () => {
		if (!panel4 || breakPoint === true) return
		const { top, height } = panel4.getBoundingClientRect()
		yPanel4 = Math.max(0, (oH - top) / height * 100)
	}

	const updateFivePosition = () => {
		if (!panel5) return
		const { top, height } = panel5.getBoundingClientRect()
		yPanel5 = Math.max(0, (oH - top) / height * 100)
	}

	const updateSixPosition = () => {
		if (!panel6 || breakPoint === true) return
		const { top, height } = panel6.getBoundingClientRect()
		yPanel6 = Math.max(0, (oH - top) / height * 100)
	}

	const updateNinePosition = () => {
		if (!panel9 || breakPoint === true) return
		const { top, height } = panel9.getBoundingClientRect()
		yPanel9 = Math.max(0, (oH - top) / height * 100)
	}

	$: if ( iW <= 1023) {
		breakPoint = true
	} else {
		breakPoint = false
	}

	$: stringed3 = yPanel3.toFixed(1)
	$: stringed2 = yPanel2.toFixed(1)
	$: if ( yPanel5 >= 95 ) {
		ifPanel5 = true
	} else {
		ifPanel5 = false
	}
	$: if ( yPanel6 >= 100) {
		ifPanel6 = true
	} else {
		ifPanel6 = false
	}
	$: if ( yPanel6 >= 150) {
		breakLeft = true
	}	else {
		breakLeft = false
	}
	$: if ( yPanel6 >= 256 ) {
		breakRight = true
	} else {
		breakRight = false
	}

	onMount(() => {
		if ( iW <= 1023 ) {
			breakPoint = true
		} else {
			breakPoint = false
		}
		panel3 = document.querySelector('.panel3')
		panel2 = document.querySelector('.panel2')
		panel4 = document.querySelector('.panel4')
		panel5 = document.querySelector('.panel5')
		panel6 = document.querySelector('.panel6')
		panel9 = document.querySelector('.panel9')
		updateTwoPosition()
		updateThreePosition()
		updateFourPosition()
		updateFivePosition()
		updateSixPosition()
		updateNinePosition()
		window.addEventListener('scroll',updateThreePosition)
		window.addEventListener('scroll',updateTwoPosition)
		window.addEventListener('scroll',updateFourPosition)
		window.addEventListener('scroll',updateFivePosition)
		window.addEventListener('scroll',updateSixPosition)
		window.addEventListener('scroll',updateNinePosition)
		const { Textify, TextifyTitle } = Animations
		new Textify({
			selector: '.typett',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 2.5
		})
		new Textify({
			selector: '.typett2',
			duration: 1200,
			stagger: 300,
			delay: 200,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 2.5
		})
		new Textify({
			selector: '.onpagelinks h4',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			delay: 200,
			threshold: 0.8,
			once: false
		})
	})

</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>



<div class="section sec1">
	<Parallax --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/realitywall.webp')"></Parallax>
</div>

<!--shri munshi quote section-->
	<div class="rta-column minH is-padded cc-all">
	<div class="rta-grid grid2 right cc-all glass">
		<div id="first-section" class="rta-in-col rowgap-8">
			<h5 class="typett">
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
			</h5>
			<h5 class="typett">
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
			</h5>
			<h4>
			Such a history of India is still to be written.
			</h4>
				<p class="typett2">- Shri KM Munshi</p>
		</div>
	</div>
	</div>
<!--end-->

<!--itihasa-->
	<div class="section sec2 is-padded panel2">
	<div class="box left2">
		<h5 class="typett">
			with a continuity of untold millennia, the passage of time visible to us in
		</h5>
		<h4>
		itihāsa
		</h4>
	</div>
	<div class="box right2">
		<div class="parallaxbox" style="transform: translateY({-100 + yPanel2}%)">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/itihaas.webp" alt="itihasa"/>
		</div>
	</div>
	</div>
<!--end-->

<!--bharata-->
	<div class="section sec3 is-padded panel3">
	<div class="box left3">
		<div class="parallaxbox" style="transform: translateY({-100 + yPanel3}%)">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/bharata.webp" alt="bharata"/>
		</div>
	</div>
	<div class="box right3">
		<h5 class="typett">
			information was processed in increasingly complex ways within the physical environment best described as
		</h5>
		<h4>
			bhārata
		</h4>
	</div>
	</div>
<!--end-->

<!--dharma-->
	<div class="section sec4 is-padded panel4">
	<div class="box left4">
		<h5 class="typett">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
		</h5>
		<h4>
			dharma
		</h4>
	</div>
	<div class="box right4">
		<div class="parallaxbox" style="transform: translateY({-100 + yPanel4}%)">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/dharma.webp" alt="dharma"/>
		</div>
	</div>
	</div>
<!--end-->

<!--and it is alive-->
	<div class="sec5 is-padded panel5">
		<div class="headholder">
			<h2 class="green-gradient" class:emergence={ifPanel5}>and it is alive...</h2>
		</div>
	</div>
<!--end-->

<!--rotating motif section-->
	<div class="is-padded sec6 panel6">
	<div class="box ballholder" class:fixIt={ifPanel6} class:moveLeft={breakLeft} class:moveRight={breakRight}>
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/10mandala/fractallogo.webp" alt="fractalmandala" style="transform: rotate({sY/4}deg); opacity: {1 - yPanel9/100}"/>
	</div>
	</div>
<!--end-->

<!--fractal-->
	<div class="section sec7 is-padded panel7">
		<div class="box textholder">
			<h4>Fractal</h4>
			<h5 class="typett">
			A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.
			</h5>
			<h5 class="typett2">
			A fractal displays the same properties at any magnification level, ie., it is multi-level.
			</h5>
		</div>
	</div>
<!--end-->

<!--mandala-->
	<div class="section sec8 is-padded panel8">
		<div class="box textholder">
			<h4>Maṇḍala</h4>
			<h5 class="typett">
			A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).
			</h5>
			<h5 class="typett2">
			A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
			</h5>
		</div>
	</div>
<!--end-->

<!--about fractal mandala-->
	<div class="section sec9 is-padded panel9">
		<div class="box">
			<h5 class="typett">
				the Fractal Maṇḍala is an exploration, study and articulation of the
			</h5>
			<h2 class="typett2">
				Indian civilizational consciousness
			</h2>
		</div>
	</div>
<!--end-->

<!--all links-->
	<div class="section sec10 is-padded panel10">
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
<!--end-->


<style lang="sass">

#first-section h4, .panel2 h4, .panel3 h4, .panel4 h4, .panel7 h4, .panel8 h4
	background: linear-gradient(95.13deg, #5CFC11 -5.26%, #53DD6C 20.27%, #11FC8B 61.7%, #10C56E 85.77%)
	-webkit-background-clip: text
	-webkit-text-fill-color: transparent
	background-clip: text
	text-fill-color: transparent

.s101
	justify-content: center
	align-items: center
	display: flex
	h6
		font-weight: 400

.onpagelinks
	h4
		cursor: pointer

.headholder
	overflow: hidden

.section
	overflow: hidden
	width: 100vw
	@media screen and (min-width: 1024px)
		height: 100vh

.parallaxbox
	transition: var(--cubec)
	border: 2px solid white
	img
		object-fit: cover
		width: 100%
		height: 100%

.sec1
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh

.sec2, .sec4
	display: flex
	.box
		h6
			font-weight: 400
	@media screen and (min-width: 1024px)
		flex-direction: row
		align-items: center
		column-gap: 64px
		height: 100vh
		.box
			width: calc(50% - 32px)
			overflow: hidden
	@media screen and (max-width: 1023px)
		flex-direction: column
		padding-top: 16px
		margin-bottom: 32px
		.box
			padding-top: 16px
			padding-bottom: 16px
			text-align: right
			.parallaxbox
				width: 132px
				img
					width: 128px
					height: 128px
		.right2, .right4
			margin-top: -64px

.sec3
	display: flex
	.box
		h6
			font-weight: 400
	@media screen and (min-width: 1024px)
		flex-direction: row
		align-items: center
		column-gap: 64px
		height: 100vh
		.box
			width: calc(50% - 32px)
			overflow: hidden
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		padding-top: 16px
		.box
			padding-top: 16px
			padding-bottom: 16px
			.parallaxbox
				width: 132px
				img
					width: 128px
					height: 128px
		.left3
			align-items: flex-end
			margin-top: -64px
	
.sec5
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	@media screen and (min-width: 1024px)
		padding-top: 64px
		padding-bottom: 64px
	@media screen and (max-width: 1023px)
		padding-top: 64px
		padding-bottom: 64px


.sec6
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	img
		transform-origin: center center
	@media screen and (min-width: 1024px)
		min-height: 100vh
		.ballholder
			height: 100vh
			display: flex
			flex-direction: column
			align-items: center
			justify-content: center				
			img
				object-fit: cover
				width: 400px
				height: 400px
		.box.ballholder.fixIt
			position: fixed
			top: 0px
		.ballholder.box.moveLeft
			animation: slidingleft 1s ease forwards
		.ballholder.box.moveLeft.moveRight
			animation: slidingright 1.4s ease forwards
	@media screen and (max-width: 1023px)
		.ballholder
			img
				object-fit: cover
				width: 200px
				height: 200px

.sec7
	.textholder
		width: 36%
		margin-left: 60%
		align-items: flex-end
		justify-content: center
		text-align: right
		height: 100%
		h6
			font-weight: 400
	@media screen and (max-width: 1023px)
		.textholder
			width: 100%
			margin-left: 0
			padding-top: 32px

.sec8
	.textholder
		width: 36%
		align-items: flex-start
		justify-content: center
		text-align: left
		height: 100%
		padding-top: 256px
		h6
			font-weight: 400
	@media screen and (max-width: 1023px)
		.textholder
			width: 100%
			padding-top: 64px
	

.sec9
	.box
		justify-content: center
		h6
			font-weight: 400
		h2
			line-height: 1
	@media screen and (min-width: 1024px)
		min-height: 200vh
		.box
			height: 100vh
	@media screen and (max-width: 1023px)
		padding-top: 64px
		padding-bottom: 64px
		

.green-gradient
	transform: translateY(-80px)

.green-gradient.emergence
	animation: fallingdown 0.8s var(--cubea) forwards

@keyframes fallingdown
	0%
		transform: translateY(-80px)
	100%
		transform: translateY(0px)

@keyframes slidingleft
	0%
		padding-right: 0
	100%
		padding-right: 50%

@keyframes slidingright
	0%
		transform: translateX(0px)
		padding-right: 50%
		width: 100%
	100%
		transform: translateX(400px)
		padding-right: 0%
		width: 40%

.areabackground
	background: #171717

</style>