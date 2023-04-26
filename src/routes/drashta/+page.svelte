<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { circOut } from 'svelte/easing'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import LogDr from '$lib/logos/LogDr.svelte'
	import { allCourses } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let fullText = false
	let sY:number
	let iH:number
	let diff:number

	function toggleFullText(){
		fullText = !fullText
	}

	let courses:string|any[]

	$: diff = iH - sY

	onMount(async() => {
		courses = await allCourses()
	})
</script>

<svelte:window bind:scrollY={sY} bind:innerHeight={iH}/>

<svelte:head>
	<HeadComponent>
		Bṛhat Draṣṭā at 
	</HeadComponent>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

<!--parallax section on top-->
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"></ParallaxImage>
	</div>
<!--end-->

<!--single section contains all text, all course cards scroll within it-->
	<div id="introtext" class="rta-grid grid2 thirty is-padded align-all top-p-64 rowgap-32 colgap-64" class:left={!fullText} class:right={fullText}>
		<div class="rta-in-col rowgap-16 top-p-64 text-black on-top" class:thin={!fullText} class:thick={fullText}>
			<LogDr></LogDr>
			<p class="serif">
				is an offering in deep learning that extends courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</p>
			<p class="serif">What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.</p>
			<p class="serif">
				This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – <span style="color: var(--blue)">dṛśya</span> and <span style="color: var(--blue)">darśana.</span>
			</p>
			<button class="button blue" on:click={toggleFullText}>READ MORE</button>
			{#if fullText}
				<div class="rta-in-col rowgap-24 text-black top-p-16 bot-p-16" in:fly={{ duration: 600, y: -300, easing: circOut}} out:fly={{ duration: 500, y: 0, x: -300, easing: circOut}}>
					<p class="serif">
					The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
					</p>
					<h5 class="serif">
					The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.
					</h5>
					<p class="serif">	
						It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
					</p>
					<p class="serif">
						The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
					</p>
					<h5 class="serif">
						One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
					</h5>
					<div class="rta-row colgap-8">
						<button class="button blue"><a href="/drashta/schools">EXPLORE MORE</a></button>
						<button class="button blue" on:click={toggleFullText}>CLOSE</button>
					</div>
				</div>
			{/if}
		</div>
		<div id="coursescolumn" class="rta-in-col background rowgap-32 top-p-64 on-bottom" class:thick={!fullText} class:thin={fullText} style="transform: translateY({diff + 300}px); margin-bottom: {diff + 364}px">
			<h4>All Courses:</h4>
			{#if courses && courses.length > 0}
				{#each courses as item}
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
					<div class="rta-row colgap-24 bord-bot bot-p-32">
						<div class="rta-image w32 height-20">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-in-col w64 rowgap-8">
							<small class="label" style="background: var(--gren)">
								{item.status}
							</small>
							<h5 class="heading serif text-black">{item.name}</h5>
							<cite><span style="color: var(--greyS)">{item.datefrom} | with</span> <span style="color: var(--gren)"> {item.ins}</span></cite>
						</div>
					</div>
					{:else}
					<div class="rta-row colgap-24 bord-bot bot-p-32">
						<div class="rta-image w32 height-30">
							<img src={item.image} alt={item.name}/>
						</div>
						<div class="rta-in-col w64 rowgap-16">
							<small class="label label-yellow">
								{item.status}
							</small>
							<h5 class="heading serif text-black">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h5>
							<p>
								{item.content.slice(0,250)}...<a style="color: var(--yellow)" href="/drashta/course/{item.course}">READ MORE</a>
							</p>
							<cite>with {item.ins}</cite>
						</div>
					</div>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<style lang="sass">

.serif
	font-family: 'STIX Two Text', serif
	line-height: 1.4

#introtext
	height: max-content

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

