<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'
	import FlipPage from '$lib/anims/FlipPage.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { soaTales } from '$lib/utils/supapulls'
	import { loreAll } from '$lib/utils/localpulls'
	import { reveal } from 'svelte-reveal'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	
	let sy:number
	let tales:string|any[]
	let lores:string|any[]
	let panel1:HTMLElement | null
	let panel2:HTMLElement | null
	let ifPanel1 = false
	let ifPanel2 = false
	let yPanel1 = 0
	let yPanel2 = 0
	let sY:number
	let iW:number
	let oH:number
	let noMoreSticky = false

	const updateOnePosition = () => {
		if (!panel1) return
		const { top, height } = panel1.getBoundingClientRect()
		yPanel1 = Math.max(0, (oH - top) / height * 100 )
	}

	const updateTwoPosition = () => {
		if (!panel2) return
		const { top, height } = panel2.getBoundingClientRect()
		yPanel2 = Math.max(0, (oH - top) / height * 100 )
	}

	onMount(async() => {
		tales = await soaTales()
		lores = await loreAll()
		panel1 = document.querySelector('.panel1')
		panel2 = document.querySelector('.panel2')
		updateOnePosition()
		updateTwoPosition()
		window.addEventListener('scroll',updateOnePosition)
		window.addEventListener('scroll',updateTwoPosition)
		const { Textify, TextifyTitle } = Animations
		new Textify({
			selector: '.a-title h2',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			delay: 200,
			threshold: 0.8,
			once: false,
			easing: "circInOut"
		})
		new Textify({
			selector: '.a-box h4',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			delay: 200,
			threshold: 0.8,
			once: false,
			easing: "circInOut"
		})
		new Textify({
			selector: '.card-c h3',
			duration: 1200,
			stagger: 300,
			fade: false,
			top: false,
			reveal: true,
			delay: 200,
			threshold: 0.8,
			once: false,
			easing: "circInOut"
		})
		new TextifyTitle({
			selector: '.a-title h5',
			duration: 800,
			stagger: 30,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.7,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		})
		new Textify({
			selector: '.a-box h5',
			duration: 800,
			stagger: 30,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.7,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		})
		new Textify({
			selector: '.card-c h5',
			duration: 800,
			stagger: 30,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.5,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		})
		new Textify({
			selector: '.card-c small',
			duration: 300,
			stagger: 30,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		})
	})

</script>

<svelte:head>
	<HeadComponent>
		Scrolls of Āryavarta at
	</HeadComponent>
</svelte:head>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>
<div class="fixed">
	{yPanel2}
</div>
<div class="type">
	<div class="x0">	
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')"></ParallaxImage>
	</div>
	<div class="plain-one pads x10">
		<img class="hinduchakra" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/hinduchakra.png" alt="chakra" style="transform: rotate({sY/4}deg); opacity: {sY/800}" class:free={noMoreSticky}>
	</div>
	<div class="plain-one pads x7">
		<div class="a-title" style="text-align: right">
			<h2>there is a place...</h2>
			<h5>
				it exists outside of space-time as we know it, but many of us have been there...
			</h5>
			<h5>
				It lies in that cultural mid-space so distant yet ever palpable.
			</h5>
		</div>
	</div>
	<div class="plain-one pads x8">
		<div class="a-box box">
			<h5>
					Hive mind. Race memory. Blood bond.
					We may call it many things, but we know it best when we see it,
					and it feels warm and familiar...as if a memory we once lived.
			</h5>
			<h4>
					Perhaps we did, is it not?
			</h4>
			<h5>
					We can access this place,
					outside of space and time though it lies.
					In images and words, in sounds and vistas,
					In streams of imagi/memory that can flow through us...
			</h5>
		</div>
	</div>
	<div class="plain-one x3 pads">
		<div class="a-box box">
			<h4>
				The Scrolls of Āryavarta is a project to celebrate, express and engage in our shared lore- the dhārmika lore.
			</h4>
			<h5>
				It is a calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
			</h5>
			<h5>
				We engage here in creative storytelling and lore creation, employing image generators to create for us visions of a place we all know.
			</h5>
		</div>
	</div>
	<div class="x4 panel1">
		<div class="back" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/blanktemplar.webp');">
		</div>
	</div>
	<div class="plain-one x9 pads">
		<div class="a-box box">
			<h5>
				Here you will find stories, visuals, genealogies, maps and more*. These are all leaps of speculative fiction into the Bhārata that once was.
			</h5>
			<p>
				Begin at Chapter 1, which is our first foray in to visual storytelling, and a collaborative project with the eminently follow-worthy handle on Twitter - <a href="https://twitter.com/TheEmissaryCo" target="_blank" rel="noreferrer">The Emissary.</a>
			</p>
			<p>
				Or explore the lore on your own terms. Scroll on below to find the scolls unravelled for your discovery. Imagine geographies of the old world through our many maps, or marvel at the vivid world-building suggested by the genealogies.
			</p>
			<div class="boxr buttonsboxr" style="gap: 24px; padding-bottom: 16px">
				<button class="orangebutton">
					<a href="/aryavarta/map">EXPLORE MAP</a>
				</button>
				<button class="orangebutton">EXPLORE DYNASTIES</button>
			</div>
			<h4>Or dive into any of the 40+ short stories from the Paurāṇika eons!</h4>
			<p style="color: #ff3d00">
				* Scrolls of Āryavarta is an exercise in historical speculation through the medium of fiction. The keen historian will find much in here that does not please him/her, but the endeavour here is entirely creative. Please do not let it be your source for any historical facts, or for dhārmika narrative/interpretation.
			</p>
		</div>
	</div>
	<div class="scrolling-grid pads">
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/9.webp')">
			<small>Chapter 1</small>
			<h5><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h5>
		</div>
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/8.webp')">
			<small>Chapter 2</small>
			<h5><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h5>
		</div>
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/nasadiya/2-4.webp')">
			<small>Chapter 3</small>
			<h5><a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a></h5>
		</div>
	</div>
	<div class="scroll-grid pads main panel2">
		<div class="card-c back">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim48.webp" alt="aneni"/>
		</div>
		<div class="card-c text">
				<h3>Aneṇī</h3>
				<h5>
					Since the dawn of time, men have gone to war for women, and they will continue to do so. But the entire fabric of our past has only one story where a man brokered peace for a woman, where war came to a stop- because of her. The truce did not last, no truce ever does.
				</h5>
		</div>
		<div class="card-c"></div>
	</div>
	<div class="x6 pads">
		{#if lores && lores.length > 0}
			{#each lores as item}
				<div class="card-row">
					<div class="card-image">
						<img src={item.meta.image} alt={item.meta.title}/>
					</div>
					<div class="card-body">
						<h5>{item.meta.snip}</h5>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.buttonsboxr
	display: none

.scrolling-grid
	display: grid
	grid-auto-flow: row
	background: white
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."
		grid-template-rows: auto
		gap: 16px
		padding-bottom: 32px
		.card-c
			height: 42vh
			h5
				color: white
				background: rgba(0,0,0,0.8)
				padding: 2px 5px
				font-weight: 600
				&:hover
					color: #ff3d00
			small
				width: max-content
				background: #ff3d00
				color: white
				padding: 3px

.scroll-grid
	display: grid
	grid-auto-flow: row
	background: white
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."
		grid-template-rows: auto
		min-height: 100vh
		gap: 16px
		.card-c.text
			padding: 16px
		.card-c
			height: 42vh
			position: relative
			overflow: hidden
			border: 1px solid #d7d7d7
			padding: 0
			img
				object-fit: cover
				width: 100%
				height: 100%
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 18px
			h3
				font-weight: 400
				text-transform: uppercase
			&:hover
				animation: imagegoes 1.2s var(--cubeb) 0.8s forwards
				&::after
					animation: goaway 0.8s var(--cubeb) forwards

@keyframes goaway
	0%
		height: 100%
	100%
		height: 0
				
@keyframes imagegoes
	0%
		background-position: center center
	100%
		background-position: center 500%

@keyframes headfourcomes
	0%
		transform: translateY(-100%)
	100%
		transform: translateY(0)
	
	
			
		

.x0
	height: 100vh
	overflow: hidden
	.back
		height: 100vh

.x7, .x8
	min-height: 100vh
	justify-content: center

.x9
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center
		.box
			width: 50%


.x3
	.box
		h4
			color: #ff3d00
	@media screen and (min-width: 1024px)
		height: 100vh
		align-items: flex-end
		text-align: right
		padding-left: 40%
		.box
			justify-self: flex-end
	@media screen and (max-width: 1023px)
		padding-top: 64px

.x4
	height: 100vh
	.back
		width: 100%
		height: 100%

.x5.gridof3
	.card-c
		background-size: cover
		h6, p
			color: white
		h6
			background: rgba(0,0,0,0.8)
			padding: 4px
	@media screen and (min-width: 1024px)
		padding-top: 64px
		padding-bottom: 64px
		.card-c
			height: 240px
	@media screen and (max-width: 1023px)
		.card-c
			height: 160px
			align-items: center
			justify-content: center

.hinduchakra
	object-fit: contain
	transform-origin: center center
	position: fixed
	top: 80px
	left: 80px
	z-index: -1
	@media screen and (min-width: 1024px)
		height: 280px
		width: 280px
	@media screen and (max-width: 1023px)
		height: 160px
		width: 160px

.hinduchakra.free
	position: static

.x6
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	border: 2px solid white
	padding-bottom: 64px
	h6
		text-transform: uppercase
		color: white
		text-shadow: 2px 4px 8px #070707
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr
		grid-template-areas: ". ."
		gap: 32px 32px
		background: white
		.back
			height: 200px
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center
			transform-origin: center center
			transition: 0.43s
			&:hover
				transform: scale(1.15)
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr
		grid-template-areas: ". ."
		gap: 16px 16px
		padding-top: 16px
		.back
			height: 160px
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center

.x7
	h2
		color: #ff3d00
		margin-bottom: 24px
	h5
		color: #878787

.x8
	align-items: flex-end
	.box
		width: 50%
		h5, h4
			text-align: right
		h4
			color: #ff3d00

.x9
	padding-top: 64px
	background: white
	margin-top: -16px
		

</style>