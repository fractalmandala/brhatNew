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

<!--rotating chakra-->
	<div class="rta-column is-padded x1">
		<img class="hinduchakra" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/hinduchakra.png" alt="chakra" style="transform: rotate({sY/4}deg); opacity: {sY/800}" class:free={isPanel2}>
	</div>
<!--end-->

<!--there is a place-->
	<div class="rta-column is-padded minH align-all rowgap-16 x2">
		<div id="glass1" class="glass rta-grid align-all grid2 ta-r rowgap-24 colgap-64">
			<div class="rta-image cc-all ta-c-mob">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/13scrolls/anc2.webp" alt="sen"/>
			</div>
			<div class="rta-in-col cc-top ta-r rowgap-16">
				<h4>there is a place...</h4>
				<p class="typett">
				it exists outside of space-time as we know it, but many of us have been there...
				It lies in that cultural mid-space so distant yet ever palpable.</p>
			</div>
		</div>
	</div>
<!--end-->


<!---text on we can visit such a place-->
	<div class="rta-column is-padded minH all-cc colgap-64">
		<div id="glass2" class="glass align-all rta-grid grid2 colgap-64 rowgap-24 back">
			<div class="rta-in-col cc-top ta-l rowgap-16">
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
			<div class="rta-image cc-all ta-c-mob">
				<img src="/images/place.png" alt="place"/>
			</div>
		</div>
	</div>
<!--end-->


<!--about soa-->
	<div class="rta-column minH is-padded colgap-64">
		<div id="glass3" class="glass rta-grid grid2 rowgap-24 colgap-64">
			<div class="rta-image cc-all ta-c-mob">
				<img src="/images/themandir.png" alt="temple"/>
			</div>
			<div class="rta-in-col rowgap-32 cc-top ta-r">
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
	<div class="rta-column minH is-padded x6 bot-p-32 panel2">
		<div id="glass4" class="glass rta-grid grid2 rowgap-24 colgap-64">
			<div class="rta-in-col cc-top rowgap-32">
				<h5 class="typett">
				Here you will find stories, visuals, genealogies, maps and more*. These are all leaps of speculative fiction into the Bhārata that once was.
				</h5>
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
			<div class="rta-in-col cc-top ta-r rowgap-24">
				<h4>Or dive into any of the 40+ short stories from the Paurāṇika eons!</h4>
				<p>
				* Scrolls of Āryavarta is an exercise in historical speculation through the medium of fiction. The keen historian will find much in here that does not please him/her, but the endeavour here is entirely creative. Please do not let it be your source for any historical facts, or for dhārmika narrative/interpretation.
				</p>
			</div>
		</div>
	</div>
<!--end-->

<!--main 3 chapters-->
	<div class="x7 is-padded rta-grid grid3 rowgap-32 colgap-32">
		<div class="rta-in-col back height-50 all-p-16 cc-all rowgap-8" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter1/9.webp')">
			<small>Chapter 1</small>
			<h5><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h5>
		</div>
		<div class="rta-in-col back height-50 all-p-16 cc-all rowgap-8" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/chapter2/8.webp')">
			<small>Chapter 2</small>
			<h5><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h5>
		</div>
		<div class="rta-in-col back height-50 all-p-16 cc-all rowgap-8 ta-c" style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/nasadiya/2-4.webp')">
			<small>Chapter 3</small>
			<h5><a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a></h5>
		</div>
	</div>
<!--end-->

<!--all chapters-->
	<div class="rta-column is-padded top-p-64 bot-p-64 rowgap-32">
		{#if lores && lores.length > 0}
			{#each lores as item, i}
				<div id="loresgrid" class="rta-row colgap-24 grid-{item.meta.tag} panels{i}"
					>
					<div class="rta-image height-30 w32">
						<img 
							src={item.meta.image} alt={item.meta.tag}
							transition:fly={{ y: 200}}
							style="object-position: center center"
						/>
					</div>
					<div class="rta-in-col rowgap-16 w64" on:mouseenter={() => toggleImage(i)} on:mouseleave={() => toggleImage(i)}>
						<h4 class="tt-c">
							<a href={item.path}>
								{item.meta.title}
							</a>
						</h4>
						<p>"{item.meta.snip}"</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
<!--end-->

<style lang="sass">

#glass1
	justify-content: center

#loresgrid
	h4
		background: linear-gradient(16.89deg, #FFF622 6.93%, #F77F2F 62.97%)
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
		background-clip: text
		text-fill-color: transparent
	@media screen and (min-width: 1024px)
		grid-template-areas: "rta-image rta-in-col rta-in-col"
		.rta-in-col
			grid-area: rta-in-col

#glass1, #glass2, #glass3, #glass4
	h4
		background: linear-gradient(96.89deg, #FFF622 6.93%, #F77F2F 92.97%)
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
		background-clip: text
		text-fill-color: transparent
	.rta-image
		img
			border-radius: 50%

.x5
	@media screen and (min-width: 1024px)
		height: 100vh
		overflow: hidden
		z-index: 10

.x7
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
		height: 70vh

.hinduchakra
	object-fit: contain
	transform-origin: center center
	position: fixed
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
	opacity: 0
	display: none


</style>