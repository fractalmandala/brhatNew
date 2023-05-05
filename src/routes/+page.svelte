<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import autoAnimate from '@formkit/auto-animate'
	import Header from '$lib/components/SubHeader.svelte'
	import ButtonEmerge from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge2 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge3 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge4 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge5 from '$lib/anims/ButtonEmerge.svelte'
	import ButtonEmerge6 from '$lib/anims/ButtonEmerge.svelte'
	import visibilityMode from '$lib/stores/visibility'
	import Animations from 'textify.js'
	import { reveal } from 'svelte-reveal'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import HomeAccordion from '$lib/components/HomeAccordion.svelte'
	import CompButton from '$lib/ridunits/CompButton.svelte'
	import CompButton2 from '$lib/ridunits/CompButton.svelte'
	import { createCurateConsult, brhatUpdates, latestVidsVar, BOLLatest, allChapters, allCourses } from '$lib/utils/supapulls'
	import { latestDhitiSix } from '$lib/utils/localpulls'
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
	let anveshiFull = Array(10).fill(false)
	anveshiFull[1] = true
	let drashtaFull = Array(10).fill(false)
	drashtaFull[1] = true

	function toggleAnveshi(index:number){
		anveshiFull[index] = !anveshiFull[index]
		for ( let i = 0; i < anveshiFull.length; i++ ) {
			if ( i !== index && anveshiFull[i] === true ) {
				anveshiFull[i] = false
			}
		}
	}

	function toggleDrashta(index:number){
		drashtaFull[index] = !drashtaFull[index]
		for ( let i = 0; i < drashtaFull.length; i++ ) {
			if ( i !== index && drashtaFull[i] === true ) {
				drashtaFull[i] = false
			}
		}
	}

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
</Header>


<div class="pageglobals" class:light={$visibilityMode} class:dark={!$visibilityMode}>

<!--top accordion of 3 sections-->
	<HomeAccordion></HomeAccordion>
<!--end-->

<!--introduction about section-->
	<div class="rta-column col-y-cent alt-pads fixH" id="section1" data-lenis-scroll-snap-align="start">
		<div class="rta-column col-y-cent rowgap-64 glass">
			<div class="rta-grid grid2 colgap-32">
				<div class="rta-in-col bot-p-32">
				<h1 class="non">Bṛhat is a<br>
				<span class="spesh">
					culture engine</span>
				</h1>
				</div>
				<div class="rta-in-col top-p-16">
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
			</div>
			<div class="rta-grid grid4 rowgap-32 colgap-32">
				{#if threeactions && threeactions.length > 0}
					{#each threeactions as item, i}
						<div class="rta-in-col left rowgap-16"
							use:reveal={{
								transition: "fly",
								y: 200,
								easing: "easeOutCirc",
								delay: i*50
							}}
							>
							<h6 class="typett non ta-l">{item.name}</h6>
							<pre class="non ta-l">{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
<!--end-->

<!--latest anveshi chapters-->
	<div class="rta-column col-y-cent rowgap-32 bot-m-32 bot-p-32 alt-pads minH" data-lenis-scroll-snap-align="start">
		<div class="rta-row row-y-cent row-between top-p-16">

			<div class="rta-row row-y-cent colgap-24">
				<h3 class="non typett">BṚHAT ANVEṢĪ</h3>
				<div use:reveal>
					<ButtonEmerge2><a href="/anveshi">Learn More</a></ButtonEmerge2>
				</div>
			</div>

			<div class="toplabel">
				<small class="non typett2">Culture Travel and Experience</small>
			</div>
		</div>

		<div class="rta-in-col">
			{#if chapters && chapters.length > 0}
				<div class="rta-row row-col colgap-64 bord-bot bot-p-24" id="anveshi-drawer" use:autoAnimate>
					{#each chapters as item, i}
						<h6 class="non tt-u" style="font-weight: 400" on:click={() => toggleAnveshi(i)} on:keydown={fauxfake} class:drawerselection={anveshiFull[i]}>{item.name}</h6>
					{/each}
				</div>
				<div class="rta-in-col top-p-32" use:autoAnimate> 
					{#each chapters as item, i}
						{#if anveshiFull[i]}
						<div class="rta-row colgap-24">
							{#if item.status === 'upcoming' || item.status === 'Upcoming'}
							<div class="rta-image w64 height-40">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-in-col rowgap-8 w32">
								<div class="status-sticker">
									<h6 class="tt-u non">{item.status}</h6>
								</div>
								<cite class="non">{item.dates}</cite>
								{#if item.content && item.content.length > 0}
									<pre class="h6" style="color: var(--primaryalt)">{item.content}</pre>
								{/if}
							</div>
							{:else}
							<div class="rta-image w32 height-40">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-in-col rowgap-8 w64">
								<div class="status-sticker">
									<h6 class="tt-u non">{item.status}</h6>
								</div>
								<cite class="non">{item.dates}</cite>
								{#if item.content && item.content.length > 0}
									<pre class="h6 bord-top top-p-16" style="color: var(--primaryalt)">{item.content}</pre>
								{/if}
							<CompButton><a href="/anveshi/chapter/{item.chapter}">Read More</a></CompButton>
							</div>
							{/if}
						</div>
						{/if}
					{/each}
				</div>
			{/if}
			
		</div>
	</div>
<!--end-->

<!--latest drashta courses-->
	<div class="rta-column rowgap-32 bot-m-32 bot-p-32 alt-pads minH" data-lenis-scroll-snap-align="start">
		<div class="rta-row row-y-cent row-between top-p-16 bord-bot bot-p-32">

			<div class="rta-row row-y-cent colgap-24" use:autoAnimate>
				<h3 class="non typett">BṚHAT DRAṢṬĀ</h3>
				<div use:reveal>
					<ButtonEmerge3><a href="/drashta">Visit</a></ButtonEmerge3>
				</div>
			</div>

			<div class="toplabel">
				<small class="non typett2">Online Courses and Shared Learning</small>
			</div>

		</div>
		<div class="rta-grid left thirty grid2 colgap-32">
			{#if courses && courses.length > 0}
				<div class="rta-in-col rowgap-16 bot-p-16" id="drashta-drawer">
					{#each courses as item, i}
						<h6 class="non tt-u" style="font-weight: 400" on:click={() => toggleDrashta(i)} on:keydown={fauxfake} class:drawerselection={drashtaFull[i]}>{item.coursename}</h6>
					{/each}
				</div>
				{#each courses as item, i}
					{#if drashtaFull[i]}
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<div class="rta-row colgap-24" use:autoAnimate>
								<div class="rta-image w64 height-40">
									<img src={item.image} alt={item.name}/>
								</div>
								<div class="rta-in-col rowgap-8 w32">
									<div class="status-sticker">
										<h6 class="tt-u non">{item.status}</h6>
									</div>
									<cite class="non tt-c">{item.datefrom} | with <span id="instructor">{item.ins}</span></cite>
								</div>
						</div>
						{:else}
						<div class="rta-in-col rowgap-16">
							<div class="rta-image height-40">
								<img src={item.image} alt={item.name}/>
							</div>
							<div class="rta-in-col rowgap-8">
								<div class="status-sticker">
									<h6 class="tt-u non">{item.status}</h6>
								</div>
								<cite class="non tt-c">{item.datefrom} | with <span id="instructor">{item.ins}</span></cite>
								<pre class="h6 bord-top top-p-16" style="color: var(--primaryalt)">{item.content}</pre>
								<CompButton2><a href="/drashta/course/{item.course}">About Course</a></CompButton2>
							</div>
						</div>
						{/if}
					{/if}
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--explore visual content section-->
	<div class="minH col-y-cent alt-pads rta-column rowgap-32" id="brhad-mrdanga" data-lenis-scroll-snap-align="start">
		<div class="rta-row row-y-cent row-between top-p-16 bord-bot bot-p-32">
			<div class="rta-row row-y-cent colgap-24" use:autoAnimate>
				<h3 class="non typett">BṚHAD MṚDAṄGA</h3>
				<div use:reveal>
				<ButtonEmerge4><a href="/mrdanga">More Videos</a></ButtonEmerge4>
				</div>
			</div>
			<div class="toplabel">
				<small class="non typett2">Visual and Creative Cultural Content</small>
			</div>
		</div>
		<h5 class="typett2">
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
							<small style="color: var(--primaryalt)">{item.name}</small>
						</div>
					{/each}
				{/if}

		</div>

	</div>
<!--end-->

<!--latest at brhat section
	<div class="rta-column rowgap-32 alt-pads minH">
		<h3 class="non typett bord-top top-p-16">LATEST AT BṚHAT</h3>
		<h5 class="non typett2">Events, Conferences, Releases</h5>
		<div class="rta-in-col rowgap-32">
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
end-->

<!--dhiti blog latest posts section-->
	<div class="rta-column alt-pads rowgap-32 bot-p-64" data-lenis-scroll-snap-align="start">

		<div class="rta-row row-y-cent row-between top-p-16 bord-bot bot-p-32">
			<div class="rta-row row-y-cent colgap-24" use:autoAnimate>
				<h3 class="non typett">RECENT AT DHĪTI</h3>
				<div use:reveal>
					<ButtonEmerge6><a href="/dhiti">All Posts</a></ButtonEmerge6>
				</div>
			</div>
			<div class="toplabel">
				<small class="non typett2">Dhīti is our Blog for Essays on Culture, Policy and Education</small>
			</div>
		</div>

		<div class="rta-grid grid3 colgap-64 rowgap-64">
			{#if posts && posts.length > 0}
				{#each posts as item, i}
					<div class="rta-card col-y-between rowgap-64 rta-in-col"
						use:reveal={{
							transition: "fly",
							y: 200,
							easing: "easeOutCirc",
							delay: i*50
						}}
						>
						<div class="rta-in-col rowgap-16">
							<small>{item.meta.category}</small>
							<div class="rta-image">
							<img src={item.meta.image} alt={item.meta.title}/>
							</div>
							<h5 class="non">{item.meta.title}</h5>
						</div>
						<div class="rta-in-col rowgap-4 col-y-end bord-top top-p-8">
							<p class="non" style="color: var(--primary)"><strong>
								{item.meta.author}<span> </span>
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									 and {item.meta.authortwo}
								{/if}</strong>
							</p>
							<cite class="non" style="color: var(--primaryalt)">{item.meta.tags}</cite>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
<!--end-->

<!--open library latest posts section-->
	<div class="rta-column alt-pads col-y-cent rowgap-32 minH" data-lenis-scroll-snap-align="start">

		<div class="rta-row row-y-cent row-between top-p-16 bord-bot bot-p-32">
			<div class="rta-row row-y-cent colgap-24" use:autoAnimate>
				<h3 class="non typett">BṚHAT OPEN LIBRARY</h3>
				<div use:reveal>
					<ButtonEmerge5><a href="/openlibrary">Enter Library</a></ButtonEmerge5>
				</div>
			</div>
			<div class="toplabel">
				<small class="non typett2">A repository of reading and research material.</small>
			</div>
		</div>

		<div class="rta-grid grid4 colgap-32 rowgap-32">
				{#if books && books.length > 0}
				{#each books as item, i}
					<div class="rta-in-col small-card col-y-between rowgap-8"
						use:reveal={{
							transition: "fly",
							y: 100,
							easing: "easeOutCirc",
							delay: i*5
						}}
						>
						<h6 class="non" style="color: var(--primary)"><a href="/openlibrary/books/{item.slug}" class="typett">{item.Text}</a></h6>
						<p class="non">{item.author}</p>
					</div>
				{/each}
				{/if}
		</div>
	</div>
<!--end-->

</div>


<style lang="sass">

h3
	color: var(--primary)

.status-sticker
	background: linear-gradient(90deg,#e14141,#df6262,#ee9191)
	padding: 2px 8px
	width: max-content
	color: white

h6.drawerselection
	background: linear-gradient(96.89deg, #FF7272 6.93%, #FE4A40 58.12%, #DF2015 92.63%)
	color: white
	padding: 6px
	border-radius: 4px
	

.toplabel
	width: max-content
	height: max-content
	small
		color: #fe4a49
		margin: 0
		font-size: 12px
		line-height: 1.5
		font-weight: bold
		text-transform: uppercase

.pageglobals.dark
	background: #171717


.glass
	min-height: 80%
	@media screen and (min-width: 1024px)
		padding: 24px 48px
		border-radius: 4px
	@media screen and (max-width: 1023px)
		padding: 20px
		border-radius: 4px

.dark
	.glass
		border: 1px solid var(--primaryalt)
		background: rgba(9,9,9,0.64)
		backdrop-filter: blur(30px)
		h6
			color: var(--primary)
		pre
			color: var(--primaryalt)

.light
	.glass
		border: 1px solid var(--bordercolor)
		h6
			color: var(--primary)
		pre, h5
			color: var(--primaryalt)

#section1
	h1
		line-height: 1

#anveshi-drawer h6, #drashta-drawer h6
	cursor: pointer
	padding-top: 8px
	padding-bottom: 8px
	&::before
		margin-left: auto
	&::after, &::before
		content: ''
		width: 0%
		height: 2px
		background: #fe4a49
		display: block
		transition: 0.3s
	&:hover
		&::after, &::before
			width: 100%


#brhad-mrdanga
	h5
		font-weight: 300
		color: var(--primaryalt)

.rta-card
	border: 1px solid var(--bordercolor)
	border-radius: 4px
	transition: all 0.18s cubic-bezier(0.795, 1.270, 0.590, 0.945)
	small
		background: linear-gradient(135deg, #EED16C 0%, #E36464 100%)
		padding: 3px 12px
		text-transform: uppercase
		font-weight: bold
		color: white
		font-size: 10px
		width: max-content


.light
	.rta-card
		&:hover
			background: linear-gradient(135deg, #fff8ee 0%,#fffaef 100%)
			box-shadow: 4px 6px 8px #e1e1e1
			border: 1px solid transparent

.dark
	.rta-card
		background: rgba(9,9,9,0.6)
		backdrop-filter: blur(10px)
		&:hover
			box-shadow: 4px 6px 8px #121212
			border: 1px solid #fe4a49
			background-color: hsla(0,0%,3%,1)
			background-image: radial-gradient(at 78% 100%, hsla(0,70%,36%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(25,74%,27%,1) 0px, transparent 50%)

.spesh
	background: linear-gradient(96.89deg, #FF7272 6.93%, #FE4A40 58.12%, #DF2015 92.63%)
	-webkit-background-clip: text
	-webkit-text-fill-color: transparent
	background-clip: text
	text-fill-color: transparent


</style>

