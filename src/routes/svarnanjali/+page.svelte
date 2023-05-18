<script lang="ts">

	import { onMount } from 'svelte'
	import Animations from 'textify.js'
	import visibilityMode from '$lib/stores/visibility'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { ChevronDown } from 'lucide-svelte'
	import { scale, fly } from 'svelte/transition'
	import { backOut, backIn, quintIn, quintOut } from 'svelte/easing'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import autoAnimate from '@formkit/auto-animate'
	import SvarLogo from '$lib/logos/Svarnanjali2.svelte'
	import SvarLogo2 from '$lib/logos/Svarnanjali2.svelte'

	let iW:number
	let y:number
	let breakPoint:boolean
	let fake = false

	function fauxfake(){
		fake = !fake
	}


	$: if ( iW <= 1023){
		breakPoint = true
	} else {
		breakPoint = false
	}

	onMount(() => {
		const { Textify } = Animations;
		new Textify({
			selector: ".typett",
			duration: 1200,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false
		});
		new Textify({
			selector: ".typett2",
			duration: 1600,
			stagger: 100,
			fade: false,
			top: false,
			reveal: true,
			threshold: 0.8,
			once: false,
			scale: 2.5
		});
		if ( iW <= 1023 ){
			breakPoint = true
		}
	})
	
</script>

<svelte:head>
	<HeadComponent>
		Bṛhat Anveṣī at 
	</HeadComponent>
</svelte:head>

<svelte:window bind:innerWidth={iW} bind:scrollY={y}/>

<!--hero image-->
	<div class="x0" data-lenis-scroll-snap-align="start">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/krishnaradha.webp')">
			<div class="my-screen rta-column">
				<div class="goaway">
					<SvarLogo/>
				</div>
			</div>
		</ParallaxImage>
	</div>
<!--end-->

	<div class="rta-grid grid2 colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap100">
			<div class="logobox">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/svarlogo.png" alt="logo"/>
			</div>
			<h5 class="playfair typett">
				A word is like a thought, seemingly insubstantial but in reality incarnating a deep truth of mind, life, and consciousness. 
			</h5>
			<small>-Shri Ram Swarup</small>
		</div>
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/lotusgoddess.webp" alt="lotus"/>
			</div>
		</div>
	</div>

	<div class="rta-grid grid2 colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/dancers.webp" alt="dancers"/>
			</div>
		</div>
		<div class="rta-column rowgap200">
			<h3 class="playfair" style="color: #D47915">Svarṇāñjali is a weekly video series</h3>
			<p class="typett">
				to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.
			</p>
			<p class="typett">
				It will venture into feelings, experiences and problems which we all have, and will look at them from a dhārmic point of view, through the lens of art, language, literature and aesthetics.
			</p>
			<p class="typett">
				Rigorous research combined with classical aesthetics and a human presentation, we hope to rekindle the cultural confidence.
			</p>
			<h5 class="thin playfair">
				50 premium video productions featuring the uniquely innate cultural lens of <span style="color: #D47915">Pankaj Saxena</span>, and the heartful, rooted voice of <span style="color: #D47915">Nivedita Tiwari.</span>
			</h5>
			<h5 class="typett2"><strong>
				With Bṛhat's distinct aesthetic and visual presence.</strong>
			</h5>
		</div>
	</div>

	<div class="rta-grid grid2 right colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap400">
			<div class="rta-icon">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon01.png" alt="icon01"/>
			</div>
			<h2 class="playfair">
				the Creation of <span style="color: #D47915">Beauty</span>
			</h2>
			<h5 class="playfair typett">
				is the primary goal of the series. It wants its audience to experience rasa like a rasika and a nāgarika
			</h5>
		</div>
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/womanmedi.webp" alt="womanmeditating"/>
			</div>
		</div>
	</div>

	<div class="rta-grid grid2 left colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/monkwriting.webp" alt="monk"/>
			</div>
		</div>
		<div class="rta-column rowgap400">
			<div class="rta-icon">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon02.png" alt="icon02"/>
			</div>
			<h2 class="playfair">
				the Reestablishment of <span style="color: #D47915">Sanskṛta Niṣṭha Hindī</span>
			</h2>
			<h5 class="playfair typett">
				our second goal is to re-infuse the spirit of Sanskṛta into Hindī language and to free it from FATE words, in order to bring dhārmic awareness.
			</h5>
		</div>
	</div>

	<div class="rta-grid grid2 right colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap400">
			<div class="rta-icon">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon03.png" alt="icon03"/>
			</div>
			<h2 class="playfair">
				Hindī literature and Indian arts from a <span style="color: #D47915">Hindū perspective</span>
			</h2>
			<h5 class="playfair">
				the third goal of Svarṇānjali is to revisit literature, arts, drama, architecture, sculpture and cinema from a deep Hindū perspective.
			</h5>
		</div>
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/praying.webp" alt="womanpraying"/>
			</div>
		</div>
	</div>

	<div class="rta-grid grid2 left colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/painting.webp" alt="painting"/>
			</div>
		</div>
		<div class="rta-column rowgap400">
			<div class="rta-icon">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon04.png" alt="icon04"/>
			</div>
			<h2 class="playfair">
				to <span style="color: #D47915">Aestheticize</span> Life
			</h2>
			<h5 class="playfair">
				the last goal is to discuss individual problems and perspectives from the eye of Hindū aesthetics and in the process give them an elevating and uplifting experience which will also be cathartic.
			</h5>
		</div>
	</div>

	<div class="rta-grid grid2 right colgap600 minH ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap300">
			<h3 class="playfair">Why Svarṇāñjali</h3>
			<h5 class="thin playfair">
				Language reflects a culture's aspirational value to society. It is at the root of creative agency of a people.<br><br>
				But today, this role has been outsourced to the market. This stunts 'cultural confidence'. Languages are evaluated not on the worth of their cultural importance but on the utility to get jobs and join a specific cultural paradigm.<br><br>
				Compounding this is the issue of politicization of language in the name of democracy. 
			</h5>
			<h4 class="playfair">All of this leads to <span style="color: #D47915">loss of the vital spirit</span> of a land, of its culture and its people.</h4>
		</div>
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/people.webp" alt="people"/>
			</div>
		</div>
	</div> 

	<div class="rta-grid grid2 left colgap600 ycenter outer-box" data-lenis-scroll-snap-align="start">
		<div class="rta-column">
			<div class="rta-image">
				<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/story.webp" alt="story"/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="thin playfair">
				But the Hindū consciousness is no longer underground. It has started surfacing. The spark of Hindū renaissance is now turning into a huge flame. We are putting the Hindū eye to philosophy, society and politics.
			</h5>
			<h4 class="playfair">Time has come now for this Hindū consciousness to <span style="color: #D47915">break into the level of arts and literature.</span></h4>
		</div>
	</div> 
	
	<div class="rta-column ycenter xcenter ta-c-d ta-c-m outer-box limit minH" data-lenis-scroll-snap-align="start">
		<h5 class="playfair">
			To mainstream what does Hindū darśana says about arts and literature, and to enable Hindū consciousness to take the next leap and reach each nook and corner of Hindū society, through our great tradition of story-telling, in regional languages.
		</h5>
		<SvarLogo2/>
	</div>

<style lang="sass">

h2
	line-height: 1.12

.logobox
	img
		object-fit: contain
		width: 50%
		margin-left: -32px

.typett, .typett2, .playfair
	font-family: 'Playfair Display', serif

.my-screen
	height: 100%
	width: 100%
	align-items: center
	justify-content: center
	background: rgba(255, 255, 255, 1)
	animation: fading 1.5s ease 5s forwards

.goaway
	animation: fading2 1s ease 5.5s forwards

@keyframes fading2
	0%
		opacity: 1
	100%
		opacity: 0

@keyframes fading
	0%
		background: rgba(255, 255, 255, 1)
	100%
		background: rgba(255, 255, 255, 0)

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh

.rta-column
	overflow: hidden

</style>