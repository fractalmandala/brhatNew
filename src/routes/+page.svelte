<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import Header from '$lib/components/SubHeader.svelte'
	import ButtonEmerge from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge2 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge3 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge4 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge5 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge6 from '$lib/anims/ButtonEmerge.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import Animations from 'textify.js'
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'
	import { reveal } from 'svelte-reveal'
	import tippy, {animateFill} from 'tippy.js'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import HomeAccordion from '$lib/components/HomeAccordion.svelte'
	import { createCurateConsult, brhatUpdates, latestVidsVar, BOLLatest, allChapters, allCourses } from '$lib/utils/supapulls'
	import { latestDhitiSix } from '$lib/utils/localpulls'
	import ButtonOne from '$lib/anims/ButtonOne.svelte'
	import ButtonTwo from '$lib/anims/ButtonOne.svelte'
	import '@splidejs/svelte-splide/css'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/shift-away.css'

	let threeactions: string|any[]
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
			<h2>Bṛhat is a<br>
			<span class="spesh">
			culture engine</span>
			</h2>
		</div>
		<div class="rta-grid grid2 left rowgap-32 colgap-32">
			<div class="rta-in-col rowgap-16">
				<h5 class="typett">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
				</h5>
				<ButtonEmerge>
					<a href="/about">
						Know More
					</a>
				</ButtonEmerge>
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
	<div class="rta-column rowgap-64 bot-m-32 bot-p-32 is-padded">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 align-all colgap-32 rowgap-32 right">
			<div class="rta-in-col rowgap-32" class:light={$visibilityMode} class:dark={!$visibilityMode}>
				{#if chapters && chapters.length > 0}
					{#each chapters as item}
						<div class="rta-row colgap-24 bord-bot bot-p-32">
							<div class="rta-image height-20 w32">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-in-col rowgap-16 w64">
								<small class="label label-yellow">{item.status}</small>
								<h5 class="heading">{item.name}</h5>
								{#if item.content && item.content.length > 0}
								<p>{item.content.slice(0,250)}...<span style="color: var(--yellow)">
									<a href="/anveshi/chapter/{item.chapter}">READ MORE</a></span>
								</p>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
			<div id="try" class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAT ANVEṢĪ</h4>
			<h5 class="typett">Culture travel and experience</h5>
			<ButtonEmerge2><a href="/anveshi">Visit</a></ButtonEmerge2>
			</div>
		</div>
	</div>
<!--end-->

<!--latest drashta courses-->
	<div id="x2" class="rta-column rowgap-64 is-padded">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 align-all rowgap-32 colgap-32 left">
			<div class="rta-in-col rowgap-8 thin">
			<h4>BṚHAT DRAṢṬĀ</h4>
			<h5>Online courses and shared learning</h5>
			<ButtonEmerge3><a href="/drashta">See Details</a></ButtonEmerge3>
			</div>
			<div class="rta-in-col rad-4 rowgap-32 bord-top" id="drashtacourses" class:light={$visibilityMode} class:dark={!$visibilityMode}>
			{#if courses && courses.length > 0}
				<h5 class="heading">Upcoming:</h5>
				{#each courses as item}
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<div class="rta-in-col rowgap-32 bord-bot bot-p-32">
							<div class="rta-row colgap-24">
								<div class="rta-image height-20 w32">
									<img src={item.image} alt={item.name}/>
								</div>
								<div class="rta-in-col rowgap-16">
									<h6>{item.name}</h6>
									<p>{item.datefrom} | with <span class="dark-text"> <b> {item.ins}</b></span></p>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			{/if}
			</div>
		</div>
	</div>
<!--end-->

<!--explore visual content section-->
	<div class="minH is-padded rta-column rowgap-64">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 left  align-all colgap-32 rowgap-32">
			<div class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAD MṚDAṄGA</h4>
			<h5>Visual and creative cultural content</h5>
			<ButtonEmerge4><a href="/mrdanga">Visit Page</a></ButtonEmerge4>
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
							<small style="color: var(--greyS)">{item.name}</small>
						</div>
					{/each}
				{/if}
			</div>
			</div>
		</div>
	</div>
<!--end-->

<!--latest at brhat section-->
	<div class="rta-column rowgap-64 is-padded minH">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 align-all colgap-32 rowgap-32 left">
			<div class="rta-in-col">
				<h4 class="typett">LATEST AT BṚHAT</h4>
				<h5>Events, Conferences, Releases</h5>
			</div>
			<div class="rta-in-col rowgap-32" class:light={$visibilityMode} class:dark={!$visibilityMode}>
				{#if updates && updates.length > 0}
					{#each updates as item, i}
						<div class="rta-row colgap-24 bord-bot bot-p-32"
							use:reveal={{
								transition: "fly",
								y: 200,
								easing: "easeOutCirc",
								delay: i*50
							}}
							>
							<div class="rta-image height-20 w32">
								<img src={item.image} alt={item.id}/>
							</div>
							<div class="rta-in-col rowgap-16 w64">
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
	</div>
<!--end-->

<!--dhiti blog latest posts section-->
	<div class="rta-column is-padded rowgap-64">
		<div class="rta-in-col line"></div>
		<div class="rta-grid grid2 right align-all rowgap-32 colgap-32">
			<div class="rta-in-col rowgap-32" class:light={$visibilityMode} class:dark={!$visibilityMode}>
				{#if posts && posts.length > 0}
				{#each posts as item, i}
					<div class="rta-row colgap-24 bord-bot bot-p-32"
						use:reveal={{
							transition: "fly",
							y: 200,
							easing: "easeOutCirc",
							delay: i*50
						}}
						>
						<div class="rta-image w32">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="rta-in-col w64 rowgap-16">
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
			<div class="rta-in-col right rowgap-8 ta-r">
			<h4 class="typett">POSTS AT DHĪTI</h4>
			<h5>Dhīti is our blog for essays on culture, policy and education</h5>
			<ButtonEmerge6><a href="/dhiti">All Posts</a></ButtonEmerge6>
			</div>
		</div>
	</div>
<!--end-->

<!--open library latest posts section-->
	<div class="rta-column is-padded rowgap-32 minH">
		<div class="rta-in-column line"></div>
		<div class="rta-grid grid2 left align-all colgap-32">
			<div class="rta-in-col rowgap-8">
			<h4 class="typett">BṚHAT OPEN LIBRARY</h4>
			<h5 class="typett">A repository of reading and research material</h5>
			<ButtonEmerge5><a href="/openlibrary">Enter Library</a></ButtonEmerge5>
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
	</div>
<!--end-->

<!--closing tag for themer-->
</div>

<style lang="sass">

.type.light
	.line
		border-top: 1px solid #d7d7d7
		height: 1px

.type.dark
	.line
		border-top: 1px solid #272727
		height: 1px


.spesh
	background: linear-gradient(96.89deg, #FF7272 6.93%, #FE4A40 58.12%, #DF2015 92.63%)
	-webkit-background-clip: text
	-webkit-text-fill-color: transparent
	background-clip: text
	text-fill-color: transparent

.type.light
	background: white

#x2
	@media screen and (max-width: 1023px)
		.rta-in-col
			.rta-in-col
				.rta-grid
					padding: 16px

</style>

