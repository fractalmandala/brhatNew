<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { loreAll } from '$lib/utils/localpulls'
	import { fly } from 'svelte/transition'
	import { circInOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'
	import { reveal } from 'svelte-reveal'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	
	let lores:string|any[]
	let panel1:HTMLElement | null
	let panel2:HTMLElement | null
	let yPanel1 = 0
	let yPanel2 = 0
	let sH:number
	let sY:number
	let iW:number
	let oH:number
	let noMoreSticky = false
	let isInView = Array(50).fill(false)
	const options = {}
	let moving = 0

	function toggleImage(index:number){
		if ( iW <= 1023 ) {
			isInView[index] = Array(50).fill(true)
		} else {
			isInView[index] = !isInView[index]
			for ( let i = 0; i < isInView.length; i++) {
				if ( i !== index && isInView[i] === true) {
				isInView[i] = false
				}
			}
		}
	}


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
		lores = await loreAll()
		panel1 = document.querySelector('.panel1')
		panel2 = document.querySelector('.panel2')
		updateOnePosition()
		window.addEventListener('scroll',updateOnePosition)
		window.addEventListener('scroll',updateTwoPosition)
		sH = document.body.scrollHeight
		const { Textify } = Animations
		new Textify({
			selector: '.type-plain h2',
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
			selector: '.type-plain h4',
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
			selector: '.type-plain h5',
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
			selector: '.arya-text.type-plain h5',
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
	})

</script>

<svelte:head>
	<HeadComponent>
		Scrolls of Āryavarta at
	</HeadComponent>
</svelte:head>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>


<div class="type">
	<div class="x0">	
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')"></ParallaxImage>
	</div>
	<div class="plain-one pads x1">
		<img class="hinduchakra" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/hinduchakra.png" alt="chakra" style="transform: rotate({sY/4}deg); opacity: {sY/800}" class:free={noMoreSticky}>
	</div>
	<div class="plain-one pads x2">
		<div class="a-title type-plain" style="text-align: right">
			<h2>there is a place...</h2>
			<h5>
				it exists outside of space-time as we know it, but many of us have been there...
			</h5>
			<h5>
				It lies in that cultural mid-space so distant yet ever palpable.
			</h5>
		</div>
	</div>
	<div class="plain-one pads x3">
		<div class="a-box box type-plain">
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
	<div class="plain-one x4 pads">
		<div class="a-box box type-plain">
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
	<div class="x5">
		<div class="back" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/blanktemplar.webp');">
		</div>
	</div>
	<div class="plain-one x6 pads">
		<div class="a-box box type-plain">
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
	<div class="x7 pads">
		<div class="card-c back type-plain" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/9.webp')">
			<small>Chapter 1</small>
			<h5><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h5>
		</div>
		<div class="card-c back type-plain" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/8.webp')">
			<small>Chapter 2</small>
			<h5><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h5>
		</div>
		<div class="card-c back type-plain" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/nasadiya/2-4.webp')">
			<small>Chapter 3</small>
			<h5><a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a></h5>
		</div>
	</div>
	<div class="box pads panel3">
		{#if lores && lores.length > 0}
			{#each lores as item, i}
				<div class="row-grid grid-{item.meta.tag} panels{i}"
					>
					<div class="arya-image">
				
						<img 
							src={item.meta.image} alt={item.meta.tag}
							transition:fly={{ y: 200}}
						/>
			
					</div>
					<div class="arya-text type-plain" on:mouseenter={() => toggleImage(i)} on:mouseleave={() => toggleImage(i)}>
						<h3>
							<a href={item.path}>
								{item.meta.title}
							</a>
						</h3>
						<h5>"{item.meta.snip}"</h5>
					</div>
					<div class="arya-blank"></div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.buttonsboxr
	display: none

.x7
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
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 
		grid-template-areas: "."
		grid-template-rows: auto
		gap: 16px
		.card-c
			height: 16vh
			padding: 16px
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

.panel3
	padding-bottom: 120px
	@media screen and (min-width: 1024px)
		gap: 0
	@media screen and (max-width: 1023px)
		row-gap: 16px
		padding-top: 16px

.row-grid
	@media screen and (min-width: 1024px)
		height: 50vh
		gap: 0
		border-bottom: 2px solid #272727
		.arya-blank, .arya-image, .arya-text
			height: 100%
		.arya-image
			padding: 0
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr 1fr	
		min-height: 16vh	

.row-grid.grid-1
	@media screen and (min-width: 1024px)
		display: grid
		grid-auto-flow: row
		grid-template-rows: auto
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: "leftbox midbox rightbox"
		.arya-image
			grid-area: leftbox
		.arya-blank
			grid-area: midbox
			border-left: 2px solid #272727
			border-right: 2px solid #272727
		.arya-text
			grid-area: rightbox
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 18px
				color: #878787
			h3
				font-weight: 400
				text-transform: uppercase
	@media screen and (max-width: 1023px)
		display: flex
		flex-direction: row
		width: 100%
		padding: 0
		.arya-image
			width: 30%
		.arya-text
			width: 68%
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 14px
				color: #878787
			h3
				font-weight: 600
				text-transform: uppercase
				font-size: 18px
		.arya-blank
			display: none


@keyframes firstmove
	0%
		transform: translateX(100%)
	100%
		transform: translateX(0%)

@keyframes secondmove
	0%
		transform: translateX(-100%)
	100%
		transform: translateX(0%)

@keyframes thirdmove
	0%
		transform: translateY(100%)
	100%
		transform: translateX(0%)

.row-grid.grid-2
	@media screen and (min-width: 1024px)
		display: grid
		grid-auto-flow: row
		grid-template-rows: auto
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: "leftbox midbox rightbox"
		.arya-image
			grid-area: midbox
			border-left: 2px solid #272727
			border-right: 2px solid #272727
		.arya-blank
			grid-area: rightbox
		.arya-text
			grid-area: leftbox
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 18px
				color: #878787
			h3
				font-weight: 400
				text-transform: uppercase
	@media screen and (max-width: 1023px)
		display: flex
		flex-direction: row
		width: 100%
		padding: 0
		.arya-image
			width: 30%
		.arya-text
			width: 68%
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 14px
				color: #878787
			h3
				font-weight: 600
				text-transform: uppercase
				font-size: 18px
		.arya-blank
			display: none

.row-grid.grid-3
	@media screen and (min-width: 1024px)
		display: grid
		grid-auto-flow: row
		grid-template-rows: auto
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: "leftbox midbox rightbox"
		.arya-image
			grid-area: rightbox
		.arya-blank
			grid-area: leftbox
		.arya-text
			grid-area: midbox
			border-left: 2px solid #272727
			border-right: 2px solid #272727
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 18px
				color: #878787
			h3
				font-weight: 400
				text-transform: uppercase
	@media screen and (max-width: 1023px)
		display: flex
		flex-direction: row
		width: 100%
		padding: 0
		.arya-image
			width: 30%
		.arya-text
			width: 68%
			h5
				z-index: 1
				transition: 0.23s ease
				font-size: 14px
				color: #878787
			h3
				font-weight: 600
				text-transform: uppercase
				font-size: 18px
		.arya-blank
			display: none

.arya-text
	display: flex
	flex-direction: column
	justify-content: center
	row-gap: 12px
	padding: 16px
	background: white
	h3
		position: relative
		color: #272727
		z-index: 2
		padding-left: 4px
		overflow: hidden
		transition: 0.4s var(--cubed)
		transition-delay: 0.2s
		&::before
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			background: #ff3d00
			margin-top: 100%
			content: ''
			z-index: -1
		&:hover
			color: white
			&::before
				animation: goaway 0.4s var(--cubed) forwards

.arya-image
	box-sizing: border-box
	overflow: hidden
	img
		object-fit: cover
		width: 100%
		height: 100%
		
.aaa
	&:hover
		animation: imagegoes 1.2s var(--cubeb) 0.8s forwards

@keyframes goaway
	0%
		height: 100%
		margin-top: 100%
	100%
		height: 100%
		margin-top: 0
				
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
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh

.x2, .x3
	min-height: 100vh
	justify-content: center


.x4
	.box
		h4
			color: #ff3d00
	@media screen and (min-width: 1024px)
		height: 100vh
		align-items: flex-end
		justify-content: center
		text-align: right
		padding-left: 40%
		.box
			justify-self: flex-end
	@media screen and (max-width: 1023px)
		padding-top: 64px
		background: white

.x5
	.back
		width: 100%
		height: 100%
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh

.hinduchakra
	object-fit: contain
	transform-origin: center center
	position: fixed
	z-index: -1
	@media screen and (min-width: 1024px)
		height: 280px
		width: 280px
		top: 80px
		left: 80px
	@media screen and (max-width: 1023px)
		height: 120px
		width: 120px
		top: 32px
		left: 32px

.hinduchakra.free
	position: static

.x2
	h2
		color: #ff3d00
		margin-bottom: 24px
	h5
		color: #878787

.x3
	align-items: flex-end
	.box
		h5, h4
			text-align: right
		h4
			color: #ff3d00
	@media screen and (min-width: 1024px)
		.box
			width: 50%
	@media screen and (max-width: 1023px)
		.box
			width: 64%

.x6
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	border: 2px solid white
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr
		grid-template-areas: ". ."
		gap: 32px 32px
		background: white
		padding-top: 64px
		margin-top: -16px
		height: 100vh
		align-content: center
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "."
		gap: 16px 16px
		padding-top: 16px
		padding-bottom: 32px
		background: white
		margin-top: -16px

</style>