<script lang="ts">
	import { onMount } from 'svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Head from '$lib/components/HeadComponent.svelte';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { allCourses, drashtaTestis } from '$lib/utils/supapulls';
	import Shell from '$lib/components/PageShell.svelte';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import '@splidejs/splide/css/core';
	let fullText = false;
	let iW: number;
	let breakPoint: boolean;
	let fake = false;
	let sY: number;
	let iH: number;
	let diff: number;
	let tests: any;

	$metaTitle = 'Bṛhat Draṣṭā';
	$metaDescription =
		'A shared online learning program to develop civilizational svayaṃbodha and śatrubodha. Rampways for Hindu individual self-confidence.';
	$metaUrl = 'https://www.brhat.in/drashta';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatdrashta.webp';
	$metaType = 'webpage';

	function fauxfake() {
		fake = !fake;
	}

	function toggleFullText() {
		fullText = !fullText;
	}

	let courses: string | any[];

	$: if (iW <= 1023) {
		breakPoint = true;
		diff = -300;
	} else {
		breakPoint = false;
		diff = iH - sY;
	}

	onMount(async () => {
		courses = await allCourses();
		tests = await drashtaTestis();
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:scrollY={sY} bind:innerHeight={iH} bind:innerWidth={iW} />

<!--parallax section on top-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"
	/>
</div>
<!--end-->

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-grid grid2 colgap600 rowgap400 min100" id="intro">
		<div class="rta-column rowgap200 p-top-64">
			<h2 use:reveal>Bṛhat Draṣṭā</h2>
			<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				An offering in deep learning that extends courses on some of the greatest ancient and
				contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</h5>
			<p use:reveal={{ delay: 150, duration: 300, transition: 'fade' }}>
				What ultimately differentiates a culture are its ways of looking and seeing. How we see
				ourselves and the world is extremely important to our identity and to the way the world
				perceives us. But to Hindu civilization seeing was not merely a physical act of looking at
				saṃsāra using our external eyes. The focus of our civilization was as much on our internal
				journey.
			</p>
			<p use:reveal={{ delay: 200, duration: 300, transition: 'fade' }}>
				This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual
				civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look
				at and a worldview to look from – <span style="color: var(--blue)">dṛśya</span> and
				<span style="color: var(--blue)">darśana.</span>
			</p>
			{#if !fullText}
				<button class="newbutton blue" on:click={toggleFullText}>Read More</button>
			{/if}
			{#if fullText}
				<div class="rta-column rowgap200 p-bot-64">
					<p>
						The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and
						disciplines to their heights, but at the same time they were always careful to peg that
						intellectual activity to a deep inner anchor.
					</p>
					<p>
						The word darśana is more than the act of seeing. It has a universal significance in
						Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is
						not ‘what you think’; it is ‘what you see’ – darśana.
					</p>
					<p>
						It is the witness of the truth that is the objective of all Hindu philosophy. Similarly,
						the act of going to a temple is also called darśana, the act of witnessing truth in the
						form of the divine. In Hindu civilization its worldview was guided by the inner compass
						of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by
						deep sādhanā, does it become darśana. For understanding this deep darśana and to witness
						saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply –
						is needed.
					</p>
					<h5>
						One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs
						became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
					</h5>
					<div class="rta-row colgap200">
						<button class="newbutton blue" on:click={toggleFullText}>Close</button>
						<a href="/drashta/schools">
							<button class="newbutton blue">Explore More</button>
						</a>
					</div>
				</div>
			{/if}
		</div>
		<div class="rta-column p-top-128">
			<h5 class="title p-top-32 bord-top m-top-16">Testimonials</h5>
			<div class="rta-column">
				{#if tests && tests.length > 0}
					<Splide
						hasTrack={false}
						options={{
							drag: true,
							keyboard: 'global',
							waitForTransition: true,
							type: 'loop',
							gap: '20px',
							wheelMinThreshold: 1.1,
							speed: 900,
							direction: 'ltr',
							perPage: 1,
							pagination: false,
							width: '36vw',
							breakpoints: {
								1023: {
									width: '80vw'
								}
							}
						}}
					>
						<SplideTrack>
							{#each tests as item}
								<SplideSlide>
									<div class="rta-column">
										<pre class="mid">
										{item.content}
									</pre>

										<small class="tt-c">- {item.byperson}</small>
										<p class="small">{item.source}</p>
									</div>
								</SplideSlide>
							{/each}
						</SplideTrack>
						<div
							class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 p-top-16 m-top-16 bord-top"
						>
							<button
								class="splide__arrow splide__arrow--prev newbutton blue"
								type="button"
								aria-label="Previous slide"
								aria-controls="splide01-track"
							>
								PREV
							</button>
							<button
								class="splide__arrow splide__arrow--next newbutton blue"
								type="button"
								aria-label="Next slide"
								aria-controls="splide01-track"
							>
								NEXT
							</button>
						</div>
					</Splide>
				{/if}
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 min100" id="courses">
		<h2 class="bord-top bord-bot p-top-16 p-bot-24" use:reveal>All Courses</h2>
		{#if courses && courses.length > 0}
			<div class="rta-grid grid2 colgap400 rowgap400">
				{#each courses as item}
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<div class="rta-row stay rowgap300 colgap300 p-bot-32">
							<div class="rta-image w32 height-40-20">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="rta-column w64 rowgap100">
								<small class="label upcoming">
									{item.status}
								</small>
								{#if fullText}
									<h6 class="tt-c title">{item.name}</h6>
								{:else}
									<h6 class="tt-c title">{item.name}</h6>
								{/if}
								<cite class="sticker-blue"
									><span>{item.datefrom} | with</span>
									<span style="color: var(--gren)"> {item.ins}</span></cite
								>
							</div>
						</div>
					{:else if item.status === 'open now'}
						<div class="rta-row stay rowgap300 colgap300 p-bot-32">
							<div class="rta-image w32 height-40-20">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="rta-column w64 rowgap100">
								<small class="label opennow">
									{item.status}!
								</small>
								{#if fullText}
									<h6 class="tt-c hover-blue title">
										<a href="/drashta/course/{item.course}">
											{item.name}
										</a>
									</h6>
								{:else}
									<h6 class="tt-c hover-blue title">
										<a href="/drashta/course/{item.course}">
											{item.name}
										</a>
									</h6>
								{/if}
								<p class="small soft">
									{item.content.slice(0, 250)}...<a
										style="color: var(--betblue)"
										href="/drashta/course/{item.course}">READ MORE</a
									>
								</p>
								<cite class="sticker-blue">with {item.ins}</cite>
							</div>
						</div>
					{:else}
						<div class="rta-row stay rowgap300 colgap300 p-bot-32">
							<div class="rta-image w32 height-40-20">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="rta-column w64 rowgap100">
								<small class="label labelelse">
									{item.status}
								</small>
								{#if fullText}
									<h6 class="tt-c hover-blue title">
										<a href="/drashta/course/{item.course}">
											{item.name}
										</a>
									</h6>
								{:else}
									<h6 class="tt-c hover-blue title">
										<a href="/drashta/course/{item.course}">
											{item.name}
										</a>
									</h6>
								{/if}
								<p class="small soft">
									{item.content.slice(0, 250)}...<a
										style="color: var(--betblue)"
										href="/drashta/course/{item.course}">READ MORE</a
									>
								</p>
								<cite class="sticker-blue">with {item.ins}</cite>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
</Shell>

<style lang="sass">

small.label
	width: max-content
	max-width: 80%
	padding: 2px 6px
	border-radius: 2px
	color: white
	
.upcoming
	background: var(--betblue)

.opennow
	background: var(--yellow)
	font-size: 14px

.labelelse
	background: #373737
	

.hover-blue
	transition: 0.08s
	&:hover
		color: #0170B9

.sticker-blue
	background: var(--themer)
	color: white
	padding: 2px 8px
	border-radius: 2px
	max-width: 70%
	width: max-content

cite
	font-style: normal

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh

</style>
