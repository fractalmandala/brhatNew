<script lang="ts">

	import { onMount } from 'svelte'
	import autoAnimate from '@formkit/auto-animate'
	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	import { allCourses } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import CompButton from '$lib/ridunits/RIDButton.svelte'
	import CompButton2 from '$lib/ridunits/RIDButton.svelte'
	let fullText = false
	let iW:number
	let breakPoint:boolean
	let fake = false
	let sY:number
	let iH:number
	let diff:number

	export let data

	$: $metaUrl = $page.url.pathname
	$: $metaTitle = data.name
	$: $metaDescription = data.shorts
	$: $metaImage = data.image
	$: $metaType = 'webpage'

	function fauxfake(){
		fake = !fake
	}

	function toggleFullText(){
		fullText = !fullText
	}

	let courses:string|any[]

	$: if ( iW <= 1023 ) {
		breakPoint = true
		diff = -300
	} else {
		breakPoint = false
		diff = iH - sY
	}

	onMount(async() => {
		courses = await allCourses()
		if ( iW <= 1023 ) {
			breakPoint = true
		}
	})
</script>

<svelte:window bind:scrollY={sY} bind:innerHeight={iH} bind:innerWidth={iW}/>

<!--parallax section on top-->
	<div class="x0" data-lenis-scroll-snap-align="start">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"></ParallaxImage>
	</div>
<!--end-->

<!--single section contains all text, all course cards scroll within it-->
	<div id="introtext" class="rta-grid grid2 outer-box rowgap600 colgap600 p-top-64" class:left2={!fullText} class:right={fullText} data-lenis-scroll-snap-align="start">
		<div class="rta-column rowgap300" class:thin={!fullText} class:thick={fullText} use:autoAnimate>
			<p class="serif">
				An offering in deep learning that extends courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</p>
			<p class="serif">What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.</p>
			<p class="serif">
				This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – <span style="color: var(--blue)">dṛśya</span> and <span style="color: var(--blue)">darśana.</span>
			</p>
			{#if !fullText}
			<div on:click={toggleFullText} on:keydown={fauxfake}>
				<CompButton --thisbuttoncolor="#0170B9">Read More</CompButton>
			</div>
			{/if}
			{#if fullText}
				<div class="rta-column rowgap300">
					<p class="serif">
					The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
					</p>
					<h5 class="serif" style="font-weight: 600">
					The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.
					</h5>
					<p class="serif">	
						It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
					</p>
					<p class="serif">
						The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
					</p>
					<h5 class="serif" style="font-weight: 600">
						One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
					</h5>
					<div class="rta-row colgap200">
						<div on:click={toggleFullText} on:keydown={fauxfake}>
							<CompButton2 --thisbuttoncolor="#0170B9">Close</CompButton2>
						</div>
						<a href="/drashta/schools">
							<CompButton --thisbuttoncolor="#0170B9">Explore More</CompButton>
						</a>
					</div>
				</div>
			{/if}
		</div>
		<div id="coursescolumn" class="rta-column rowgap400 p-top-32-m" class:thick={!fullText} class:thin={fullText} style="transform: translateY({diff + 300}px); margin-bottom: {diff + 364}px">
			<h3>All Courses:</h3>
			{#if courses && courses.length > 0}
				{#each courses as item}
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
					<div class="rta-row row-col rowgap300 colgap300 bord-bot p-bot-32">
						<div class="rta-image w32 height-40-20">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-column w64 rowgap100">
							<small class="label">
								{item.status}
							</small>
							{#if fullText}
								<h6 class="serif tt-c">{item.name}</h6>
							{:else}
								<h5 class="serif tt-c">{item.name}</h5>
							{/if}
							<cite class="sticker-blue"><span>{item.datefrom} | with</span> <span style="color: var(--gren)"> {item.ins}</span></cite>
						</div>
					</div>
          {:else if item.status === 'open now'}
          <div class="rta-row row-col rowgap300 colgap300 bord-bot p-bot-32">
						<div class="rta-image w32 height-40-20">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-column w64 rowgap100">
							<h6 class="label label-open">
								{item.status}!
							</h6>
							{#if fullText}
							<h6 class="serif tt-c hover-blue">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h6>
							{:else}
							<h5 class="serif tt-c hover-blue">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h5>
							{/if}
							<p>
								{item.content.slice(0,250)}...<a style="color: var(--yellow)" href="/drashta/course/{item.course}">READ MORE</a>
							</p>
							<cite class="sticker-blue">with {item.ins}</cite>
						</div>
          </div>
					{:else}
					<div class="rta-row row-col rowgap300 colgap300 bord-bot p-bot-32">
						<div class="rta-image w32 height-40-20">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-column w64 rowgap100">
							<small class="label label-yellow">
								{item.status}
							</small>
							{#if fullText}
							<h6 class="serif tt-c hover-blue">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h6>
							{:else}
							<h5 class="serif tt-c hover-blue">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h5>
							{/if}
							<p>
								{item.content.slice(0,250)}...<a style="color: var(--yellow)" href="/drashta/course/{item.course}">READ MORE</a>
							</p>
							<cite class="sticker-blue">with {item.ins}</cite>
						</div>
					</div>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<style lang="sass">

.label-open
	background: #E4A503
	color: white
	padding: 5px


.hover-blue
	transition: 0.08s
	&:hover
		color: #0170B9

.sticker-blue
	background: #0170B9
	color: white
	padding-top: 2px
	padding-left: 8px
	width: 70%

.serif
	font-family: 'STIX Two Text', serif

h5.serif
	font-weight: bold

p.serif
	font-size: 18px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh
		margin-top: 64px

</style>

