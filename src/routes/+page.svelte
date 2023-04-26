<script lang="ts">

	import { onMount, afterUpdate } from 'svelte'
	import { browser } from '$app/environment'
	import Header from '$lib/components/SubHeader.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import IconMode from '$lib/icons/IconMode.svelte'
	import Animations from 'textify.js'
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'
	import { reveal } from 'svelte-reveal'
	import { fly } from 'svelte/transition'
	import { circOut } from 'svelte/easing'
	import tippy, {animateFill} from 'tippy.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import HomeAccordion from '$lib/components/HomeAccordion.svelte'
	import { createCurateConsult, brhatUpdates, latestVidsVar, BOLLatest, allChapters, allCourses } from '$lib/utils/supapulls'
	import { latestDhitiSix } from '$lib/utils/localpulls'
	import WhiteCard from '$lib/components/WhiteCard.svelte'
	import ButtonOne from '$lib/anims/ButtonOne.svelte'
	import ButtonTwo from '$lib/anims/ButtonOne.svelte'
	import '@splidejs/svelte-splide/css'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/shift-away.css'

	let threeactions: string|any[]
	let ifPanel1:boolean
	let sidebar:boolean
	let updates: string|any[]
	let count:number = 3
	let videos: string|any[]
	let posts: string|any[]
	let bollimit:number = 12
	let books: string|any[]
	let chapters:any
	let courses:any
	let sY:number
	let scyresp:number
	let oH:number
	let iW:number
	let calib:number
	let revealOne = false
	let revealTwo = false
	let revealThree = false
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

	$: if ( iW <= 1023 ) {
		calib = 6
		scyresp = 0
	} else {
		calib = sY
		scyresp = sY
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
		tippy ('#drashtacourses', {
			content: 'Scroll outside box to scroll on page.',
			duration: 300,
			arrow: true,
			animateFill: true,
			plugins: [animateFill],
			placement: 'top',
			theme: 'light'
		});
	
		(async () => {
			threeactions = await createCurateConsult();
			updates = await brhatUpdates();
			videos = await latestVidsVar(count);
			posts = await latestDhitiSix();
			books = await BOLLatest(bollimit);
			chapters = await allChapters();
			courses = await allCourses();
		})();
	});

</script>

<svelte:window bind:scrollY={sY} bind:outerHeight={oH} bind:innerWidth={iW}/>

<svelte:head>
	<HeadComponent></HeadComponent>
	<script src="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.js"></script>
</svelte:head>

<Header sidebar={sidebar}>
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>

<!--themer tag opens-->
<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>

<!--top accordion of 3 sections-->
	<HomeAccordion></HomeAccordion>
<!--end-->

<!--introduction about section-->
	<div class="rta-column rowgap-64 is-padded minH">
		<div class="rta-in-col rowgap-16">
			<h1>Bṛhat is a<br>
			<span class="c-red">
			<h1>culture engine</span>
			</h1>
		</div>
		<div class="rta-grid grid2 left rowgap-32 colgap-32">
			<div class="rta-in-col rowgap-16">
				<h5 class="typett">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
				</h5>
				<ButtonOne><a href="/about">Know More</a></ButtonOne>
			</div>
			<div class="rta-grid grid3 colgap-32 rowgap-32">
				{#if threeactions && threeactions.length > 0}
					{#each threeactions as item, i}
						<div class="rta-in-col right rowgap-16"
							use:reveal={{
								transition: "fly",
								y: 200,
								easing: "easeOutCirc",
								delay: i*50
							}}
							>
							<h6 class="typett">{item.name}</h6>
							<pre>{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
<!--end-->

<!--latest anveshi chapters-->
	<div class="rta-grid grid2 align-all colgap-32 rowgap-32 left is-padded minH">
		<div class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAT ANVEṢĪ</h4>
			<h5 class="typett">Culture travel and experience</h5>
		</div>
		<div id="splidecarousel" class="rta-in-col bord-top" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if chapters && chapters.length > 0}
				<Splide aria-label="anveshi chapters" hasTrack={false}
					options={{
						perPage: 2,
						breakpoints: {
							1023: {
								perPage: 1,
								padding: 0,
							},
						},
						speed: 500,
						rewind: true,
						drag: true,
						easing: 'cubic-bezier(0.205, 0.655, 0.000, 0.995)',
						gap: 32,
						padding: 32
					}}
					>
					<div class="rta-in-col">
						<SplideTrack>
						{#each chapters as item}
							<SplideSlide>
								{#if item.status === 'complete'}
								<div class="rta-in-col rowgap-16">
									<div class="rta-image">
										<img src={item.image} alt={item.name}/>
									</div>
									<div class="rta-in-col rowgap-16">
										<small class="label label-yellow">{item.status}</small>
										<h5 class="heading">{item.name}</h5>
										<p>{item.content.slice(0,250)}...<span style="color: var(--yellow)">
											<a href="/anveshi/chapter/{item.chapter}">READ MORE</a></span></p>
									</div>
								</div>
								{:else}
								<div class="rta-in-col height-50 cc-all back" style="background-image: url('{item.image}')">
									<div id="screen-in-anveshi-card" class="rta-in-col rowgap-8 cc-all">
										<small class="label label-mand">{item.status}</small>
										<h5 class="heading" style="color: white">{item.name}</h5>
										<cite style="color: white">{item.dates}</cite>
									</div>
								</div>
								{/if}
							</SplideSlide>
						{/each}
						</SplideTrack>
						<div class="splide__arrows">
					    <button class="splide__arrow splide__arrow--prev" class:light={$visibilityMode} class:dark={!$visibilityMode}>
								<svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.3371 1.86938C17.7771 0.307376 15.2411 0.307376 13.6811 1.86938L0.851074 14.6974L13.6811 27.5254C14.4611 28.3074 15.4851 28.6974 16.5091 28.6974C17.5331 28.6974 18.5571 28.3074 19.3371 27.5254C20.8991 25.9634 20.8991 23.4314 19.3371 21.8694L12.1671 14.6974L19.3371 7.52538C20.8991 5.96338 20.8991 3.43138 19.3371 1.86938Z"/>
								</svg>
							</button>
    					<button class="splide__arrow splide__arrow--next" class:light={$visibilityMode} class:dark={!$visibilityMode}>
								<svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.3371 1.86938C17.7771 0.307376 15.2411 0.307376 13.6811 1.86938L0.851074 14.6974L13.6811 27.5254C14.4611 28.3074 15.4851 28.6974 16.5091 28.6974C17.5331 28.6974 18.5571 28.3074 19.3371 27.5254C20.8991 25.9634 20.8991 23.4314 19.3371 21.8694L12.1671 14.6974L19.3371 7.52538C20.8991 5.96338 20.8991 3.43138 19.3371 1.86938Z"/>
								</svg>
							</button>
						</div>
					</div>
				</Splide>
			{/if}
		</div>
	</div>
<!--end-->

<!--latest drashta courses-->
	<div id="x2" class="rta-grid grid2 align-all rowgap-32 colgap-32 left is-padded minH">
		<div class="rta-in-col rowgap-8 thin">
			<h4>BṚHAT DRAṢṬĀ</h4>
			<h5>Online courses and shared learning</h5>
		</div>
		<div class="rta-in-col height-60 all-p-32 rad-4 bord-top" id="drashtacourses" data-lenis-prevent class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if courses && courses.length > 0}
				<div class="rta-in-col rowgap-32">
					{#each courses as item, i}
						{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<div class="rta-grid grid2 right row colgap-24 rowgap-16 bot-p-32"
							use:reveal={{
								transition: "fly",
								y: 100,
								easing: "easeOutCirc",
							}}
							>
							<div class="rta-in-col rowgap-16 right wide">
								<small class="label label-mand">{item.status}</small>
								<h5 class="heading">{item.name}</h5>
								<cite>by {item.ins} | {item.datefrom}</cite>
							</div>
							<div class="rta-image height-20 thin">
								<img src={item.image} alt={item.name}/>
							</div>
						</div>
						{:else}
						<div class="rta-grid grid2 right colgap-24 rowgap-16 bot-p-32"
							use:reveal={{
								transition: "fly",
								y: 100,
								easing: "easeOutCirc",
							}}
							>
							<div class="rta-in-col rowgap-16 right wide on-bottom">
								<small class="label label-yellow">{item.status}</small>
								<h5 class="heading">
									<a href="/drashta/course/{item.course}">
										{item.name}
									</a>
								</h5>
								<p>{item.content.slice(0,250)}...<span style="color: var(--red)"><a href="/drashta/course/{item.course}">READ MORE</a></span></p>
								<cite>by {item.ins}</cite>
							</div>
							<div class="rta-image height-20 thin on-top">
								<img src={item.image} alt={item.name}/>
							</div>
						</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
<!--end-->

<!--explore visual content section-->
	<div class="rta-grid grid2 left minH is-padded align-all colgap-32 rowgap-32">
		<div class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAD MṚDAṄGA</h4>
			<h5>Visual and creative cultural content</h5>
		</div>
		<div class="rta-in-col rowgap-32 bord-top" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			<h5 class="typett">
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. View the latest videos below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					style="color: #fe4a49"
					rel="noreferrer">YouTube channel</a
				>
			</h5>
			<ButtonTwo><a href="/mrdanga">Visit Bṛhadmṛdaṅga</a></ButtonTwo>
			<div class="rta-grid grid3 colgap-32">
				{#if videos && videos.length > 0}
					{#each videos as item, i}
						<div class="rta-video"
							use:reveal={{
								transition: "fly",
								y: 200,
								easing: "easeOutCirc",
								delay: i*50
							}}
							>
							<iframe class="lazy video-iframe" width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
							<small>{item.name}</small>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
<!--end-->

<!--latest at brhat section-->
	<div class="rta-grid grid2 align-all colgap-32 rowgap-32 left is-padded minH">
		<div class="rta-in-col">
			<h4 class="typett">LATEST AT BṚHAT</h4>
		</div>
		<div class="rta-grid grid3 rowgap-32 colgap-32 bord-top" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if updates && updates.length > 0}
				{#each updates as item, i}
					<div class="rta-in-col rowgap-16"
						use:reveal={{
							transition: "fly",
							y: 200,
							easing: "easeOutCirc",
							delay: i*50
						}}
						>
						<div class="rta-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="rta-in-col rowgap-16">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}...
								<span style="color: #fe4a49; font-weight: bold"><a href={item.link} target="_blank">READ MORE</a></span>
							</p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--dhiti blog latest posts section-->
	<div class="rta-grid grid2 left is-padded align-all minH rowgap-32 colgap-32">
		<div class="rta-in-col rowgap-8">
			<h4 class="typett">POSTS AT DHĪTI</h4>
			<h5>Dhīti is our blog for essays on culture, policy and education</h5>
		</div>
		<div class="rta-grid grid3 rowgap-32 colgap-32 bord-top" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if posts && posts.length > 0}
				{#each posts as item, i}
					<div class="rta-in-col-row rowgap-16"
						use:reveal={{
							transition: "fly",
							y: 200,
							easing: "easeOutCirc",
							delay: i*50
						}}
						>
						<div class="rta-image thin">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col thick rowgap-16">
							<div class="rta-in-col rowgap-8">
								<h6>
								<a href={item.path}>
									{item.meta.title}
								</a>
								</h6>
								<p>
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
								</p>
							</div>
							<div class="rta-in-col rowgap-4">
								<cite>{item.meta.tags}</cite>
								<small>{item.meta.category}</small>
							</div>
						</div>	
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--open library latest posts section-->
	<div class="rta-grid grid2 left is-padded align-all rowgap-32 colgap-32 minH">
		<div class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAT OPEN LIBRARY</h4>
			<h5 class="typett">A repository of reading and research material</h5>
		</div>
		<div class="rta-grid grid3 rowgap-32 colgap-32 bord-top" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if books && books.length > 0}
				{#each books as item, i}
					<div class="rta-in-col right"
						use:reveal={{
							transition: "fly",
							y: 200,
							easing: "easeOutCirc",
							delay: i*50
						}}
						>
						<h6><a href="/openlibrary/books/{item.slug}" class="typett">{item.Text}</a></h6>
						<p>{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--closing tag for themer-->
</div>

<style lang="sass">

#x2
	width: 100vw
	@media screen and (max-width: 1023px)
		.rta-in-col
			.rta-in-col
				.rta-grid
					padding: 16px

#splidecarousel
	@media screen and (max-width: 1023px)
		width: calc(100vw - 64px)
		.rta-in-col
			position: relative
			.splide__arrows
				position: absolute
				bottom: 0
				width: 100%

#drashtacourses
	@media screen and (min-width: 1024px)
		overflow-y: scroll

#drashtacourses.light
	border: 1px solid #ececec
	.rta-grid
		border-bottom: 1px solid #ececec

#drashtacourses.dark
	border: 1px solid #272727
	.rta-grid
		border-bottom: 1px solid #272727

#screen-in-anveshi-card
	height: 100%
	width: 100%
	background: rgba(0,0,0,0.7)

.splide__arrow
	opacity: 1
	width: 36px
	height: 36px
	color: white

.splide__arrow.light
	background: #272727
	svg path
		fill: white

.splide__arrow.dark
	background: #272727
	border: 1px solid #474747
	svg path
		fill: #171717

.splide__arrow--prev
	svg
		transform: rotate(0deg)
		margin-left: -2px

.splide__arrow--next
	svg
		transform: rotate(180deg)
		margin-right: -2px

</style>

