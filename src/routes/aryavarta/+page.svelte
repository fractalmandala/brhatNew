<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { loreAll } from '$lib/utils/localpulls'
	import { fly } from 'svelte/transition'
	import { circInOut } from 'svelte/easing'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	
	let lores:string|any[]
	let panel1:HTMLElement | null
	let panel2:HTMLElement | null
	let yPanel1 = 0
	let yPanel2 = 0
	let isPanel2 = false
	let sH:number
	let sY:number
	let iW:number
	let oH:number
	let noMoreSticky = false
	let isInView = Array(50).fill(false)
	const options = {}
	let moving = 0

	$: if ( yPanel2 > 0) {
		isPanel2 = true
	} else {
		isPanel2 = false
	}

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

	onMount(() => {
		panel1 = document.querySelector('.panel1')
		panel2 = document.querySelector('.panel2')
		updateOnePosition()
		window.addEventListener('scroll',updateOnePosition)
		window.addEventListener('scroll',updateTwoPosition)
		sH = document.body.scrollHeight
		const { Textify } = Animations
		new Textify({
			selector: '.typett',
			duration: 800,
			stagger: 30,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.5,
			once: false,
			scale: 2.5,
			easing: "circInOut"
		});
		
		(async () => {
			lores = await loreAll()
		})();
	})

</script>

<svelte:head>
	<HeadComponent>
		Scrolls of Āryavarta at
	</HeadComponent>
</svelte:head>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>


	<div class="x0">	
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/palimpsest/palim13.webp')"></ParallaxImage>
	</div>

<!--there is a place-->
	<div class="rta-column outer-box ycenter limit minH" data-lenis-scroll-snap-align="start">
		<div class="rta-grid grid2 rowgap400 colgap600 fullH right2">
			<div class="rta-image height-40">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/anc2.webp" alt="sen"/>
			</div>
			<div class="rta-column rowgap200 ycenter">
				<h4>there is a place...</h4>
				<p class="typett">
				it exists outside of space-time as we know it, but many of us have been there...
				It lies in that cultural mid-space so distant yet ever palpable.</p>
			</div>
		</div>
	</div>
<!--end-->


<!---text on we can visit such a place-->
	<div class="rta-column outer-box ycenter limit minH" data-lenis-scroll-snap-align="start">
		<div class="rta-column p-bot-64"><div class="line"></div></div>
		<div class="rta-grid grid2 rowgap400 colgap600 fullH left2">
			<div class="rta-column rowgap200 ycenter">
				<p class="typett">
					Hive mind. Race memory. Blood bond.
					We may call it many things, but we know it best when we see it,
					and it feels warm and familiar...as if a memory we once lived.
				</p>
				<h4>
					Perhaps we did, is it not?
				</h4>
				<p class="typett">
					We can access this place,
					outside of space and time though it lies.
					In images and words, in sounds and vistas,
					In streams of imagi/memory that can flow through us...
				</p>
			</div>
			<div class="rta-image height-40">
				<img src="/images/place.png" alt="place"/>
			</div>
		</div>
	</div>
<!--end-->


<!--about soa-->
	<div class="rta-column outer-box ycenter limit minH" data-lenis-scroll-snap-align="start">
		<div class="rta-column p-bot-64"><div class="line"></div></div>
		<div class="rta-grid grid2 rowgap400 colgap600 fullH right2">
			<div class="rta-image height-40 p-bot-32-m bord-bot-m">
				<img src="/images/themandir.png" alt="temple"/>
			</div>
			<div class="rta-column rowgap200 ycenter">
				<h4>
					The Scrolls of Āryavarta is a project to celebrate, express and engage in our shared lore- the dhārmika lore.
				</h4>
				<p>
					It is a calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
				</p>
				<p>
					We engage here in creative storytelling and lore creation, employing image generators to create for us visions of a place we all know.
				</p>
			</div>
		</div>
	</div>
<!--end-->

<!--details of soa-->
	<div class="rta-column outer-box ycenter limit minH" data-lenis-scroll-snap-align="start">
		<div class="rta-column p-bot-64"><div class="line"></div></div>
		<div class="rta-grid grid2 left2 rowgap400 colgap600">
			<div class="rta-column rowgap200">
				<h6 class="typett">
				Here you will find stories, visuals, genealogies, maps and more*. Each work is a leap of speculative fiction into the Bhārata that once was.
				</h6>
				<p>
				Begin at Chapter 1, which is our first foray in to visual storytelling, and a collaborative project with the eminently follow-worthy handle on Twitter - <a href="https://twitter.com/TheEmissaryCo" target="_blank" rel="noreferrer">The Emissary.</a>
				</p>
				<p>
				Or explore the lore on your own terms. Scroll on below to find the scolls unravelled for your discovery. Imagine geographies of the old world through our many maps, or marvel at the vivid world-building suggested by the genealogies.
				</p>
				<!--
				<div class="rta-row colgap-8">
					<button class="orangebutton">
						<a href="/aryavarta/map">EXPLORE MAP</a>
					</button>
					<button class="orangebutton">EXPLORE DYNASTIES</button>
				</div>
				-->
			</div>
			<div class="rta-column rowgap300">
				<h4>Or dive into any of the 40+ short stories from the Paurāṇika eons!</h4>
				<p>
				* Scrolls of Āryavarta is an exercise in historical speculation through the medium of fiction. The keen historian will find much in here that does not please him/her, but the endeavour here is entirely creative. Please do not let it be your source for any historical facts, or for dhārmika narrative/interpretation.
				</p>
			</div>
		</div>
	</div>
<!--end-->

<!--main 3 chapters-->
	<div class="x7 is-padded rta-grid grid3 rowgap400 colgap400 outer-box limit" data-lenis-scroll-snap-align="start">
		<div class="rta-column back height-40 xcenter ycenter rowgap100 p-all-32" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/9.webp')">
			<small>Chapter 1</small>
			<h5><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h5>
		</div>
		<div class="rta-column back height-40 xcenter ycenter rowgap100 p-all-32" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/8.webp')">
			<small>Chapter 2</small>
			<h5><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h5>
		</div>
		<div class="rta-column back height-40 xcenter ycenter rowgap100 ta-c-d p-all-32" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/nasadiya/2-4.webp')">
			<small>Chapter 3</small>
			<h5><a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a></h5>
		</div>
	</div>
<!--end-->

<!--all chapters-->
	<div class="rta-column p-top-64 rowgap400 outer-box limit">
		<div class="rta-column"><div class="line"></div></div>
		{#if lores && lores.length > 0}
			<div class="rta-grid grid2 colgap600 rowgap600 p-bot-64">
			{#each lores as item, i}
				<div id="loresgrid" class="rta-row fixed colgap300 bord-bot-m p-bot-32-m"
					>
					<div class="rta-image height-30-2 in50 w32">
						<img 
							src={item.meta.image} alt={item.meta.tag}
							transition:fly={{ y: 200}}
							style="object-position: center center"
						/>
					</div>
					<div class="rta-column rowgap100 in50 w64" on:mouseenter={() => toggleImage(i)} on:mouseleave={() => toggleImage(i)}>
						<h6 class="tt-c point hover-orange">
							<a href={item.path}>
								{item.meta.title}
							</a>
						</h6>
						<cite>"{item.meta.snip}"</cite>
					</div>
				</div>
			{/each}
			</div>
		{/if}
	</div>
<!--end-->

<style lang="sass">

.hover-orange
	transition: 0.08s
	&:hover
		color: #ff3d00

#loresgrid
	@media screen and (min-width: 1024px)
		grid-template-areas: "rta-image rta-column rta-column"
		.rta-column
			grid-area: rta-column

.x7
	h5
		color: white
		background: rgba(0,0,0,0.8)
		padding: 2px 5px
		font-weight: 600
		&:hover
			background: #ff3d00
	small
		width: max-content
		background: #171717
		color: white
		padding: 3px 3px 0 3px
	@media screen and (max-width: 1023px)
		h5
			color: white
			background: rgba(0,0,0,0.8)
			padding: 2px 5px
			font-weight: 600
			text-align: center
			&:hover
				background: #ff3d00
		small
			width: max-content
			background: #171717
			color: white
			padding: 3px 3px 0 3px

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
		height: 40vh
		margin-top: 64px


</style>