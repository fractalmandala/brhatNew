<script lang="ts">

	import { onMount } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { soaTales } from '$lib/utils/supapulls'
	import { reveal } from 'svelte-reveal'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	
	let sy:number
	let tales:string|any[]

	onMount(async() => {
		tales = await soaTales()
	})

</script>

<svelte:head>
	<HeadComponent>
		Scrolls of Āryavarta at
	</HeadComponent>
</svelte:head>

<svelte:window bind:scrollY={sy}/>
<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')"></ParallaxImage>
	</div>
	<div class="plain-one pads x10">
		<img class="hinduchakra" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/hinduchakra.png" alt="chakra" style="transform: rotate({sy/4}deg); opacity: {sy/800}">
	</div>
	<div class="plain-one pads x7">
		<div class="a-title" style="text-align: right">
			<h2>there is a place...</h2>
			<h5 class="trackposition" use:reveal>
						it exists outside of space-time as we know it, but many of us have been there...
			</h5>
			<h5>
						It lies in that cultural mid-space so distant yet ever palpable.
			</h5>
		</div>
	</div>
	<div class="plain-one pads x8">
		<div class="a-box box">
			<h5 style="text-align: right">
					Hive mind. Race memory. Blood bond.<br>
					We may call it many things, but we know it best when we see it,<br>
					and it feels warm and familiar...as if a memory we once lived.<br><br>
					Perhaps we did, is it not?
			</h5>
			<h5 style="text-align: right; margin-top: 32px">
					<b style="color: #ff3d00">
					We can access this place,</b><br>
					outside of space and time though it lies.<br>
					In images and words, in sounds and vistas,<br>
					In streams of imagi/memory that can flow through us...
			</h5>
		</div>
	</div>
	<div class="plain-one x3 pads">
		<div class="a-box box wide60">
			<h3>
				The Scrolls of Āryavarta is a project to celebrate, express and engage in our shared lore- the dhārmika lore.
			</h3>
			<p>
				It is a calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.<br>
				We engage here in creative storytelling and lore creation, employing image generators to create for us visions of a place we all know.
			</p>
			<h5>
				Here you will find stories, visuals, genealogies, maps and more*. These are all leaps of speculative fiction into the Bhārata that once was.
			</h5>
			<p>
				Begin at Chapter 1, which is our first foray in to visual storytelling, and a collaborative project with the eminently follow-worthy handle on Twitter - <a href="https://twitter.com/TheEmissaryCo" target="_blank" rel="noreferrer">The Emissary.</a>
			</p>
			<p>
				Or explore the lore on your own terms. Scroll on below to find the scolls unravelled for your discovery. Imagine geographies of the old world through our many maps, or marvel at the vivid world-building suggested by the genealogies.
			</p>
			<h6>Or dive into any of the 40+ short stories from the Paurāṇika eons!</h6>
				<p>
				* Scrolls of Āryavarta is an exercise in historical speculation through the medium of fiction. The keen historian will find much in here that does not please him/her, but the endeavour here is entirely creative. Please do not let it be your source for any historical facts, or for dhārmika narrative/interpretation.
				</p>
		</div>
	</div>
	<div class="x4">
		<div class="back" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/parallaxtemple2.webp'); transform: translateY(-{sy/2}px)">
		</div>
	</div>
	<div class="gridof3 x5 pads">
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/9.webp')">
			<p>Chapter 1</p>
			<h6><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h6>
		</div>
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/8.webp')">
			<p>Chapter 2</p>
			<h6><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h6>
		</div>
		<div class="card-c back" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/nasadiya/2-4.webp')">
			<p>Chapter 3</p>
			<h6><a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a></h6>
		</div>
	</div>
	<div class="x6 pads">
		{#if tales && tales.length > 0}
			{#each tales as item}
				<a class="back" style="background-image: url('{item.image}')" href="{item.slug}">
					<h6>
							{item.name}
					</h6>
				</a>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden

.x7, .x8
	min-height: 100vh
	justify-content: center


.x3
	background: white
	z-index: 2
	@media screen and (min-width: 1024px)
		padding-top: 600px	
		height: 100%	

.x4
	height: 100vh
	background: white
	z-index: 2
	.back
		width: 100%
		height: 100%
	@media screen and (min-width: 1024px)
		margin-bottom: -100vh
	@media screen and (max-width: 1023px)
		margin-bottom: -80vh

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

.x6
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	border: 2px solid white
	background: white
	z-index: 2
	padding-bottom: 64px
	h6
		text-transform: uppercase
		color: white
		text-shadow: 2px 4px 8px #070707
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-areas: ". . . ."
		gap: 32px 32px
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
		gap: 2px 2px
		.back
			height: 160px
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center
		

</style>