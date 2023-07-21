<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakTwo } from '$lib/stores/globalstores';
	import Shell from '$lib/components/PageShell.svelte';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css/core';
	import { slide } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { ChevronDown } from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import {
		allChapters,
		allDiaryCards,
		allFaq,
		anveshiGeneral,
		anveshiTempleArt,
		anveshiVids
	} from '$lib/utils/supapulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import PrevIcon from '$lib/icons/previcon.svelte';
	import NextIcon from '$lib/icons/nexticon.svelte';
	import Chevron from '$lib/icons/chevrond.svelte';
	import Chevron2 from '$lib/icons/chevrond.svelte';
	import CompButton3 from '$lib/ridunits/RIDButton.svelte';
	import CompButton4 from '$lib/ridunits/RIDButton.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import Youtuber from '$lib/components/Youtuber.svelte';

	let fullText = false;
	let chapters: string | any[];
	let iW: number;
	let breakPoint: boolean;
	let expandMenu = false;
	let cards: string | any[];
	let faqs: string | any[];
	let gens: string | any[];
	let videoLimit = 4;
	let vids: any;
	let arts: any;
	let isFaqOpen: boolean[] = Array(15).fill(false);
	let isGenOpen: boolean[] = Array(3).fill(false);
	let readjustedgrid: boolean = false;
	let selectedCategory: boolean[] = Array(5).fill(false);
	selectedCategory[3] = true;
	let selectedArea: boolean[] = Array(3).fill(false);
	selectedArea[1] = true;
	let alignGrid: boolean = false;
	let fake = false;

	$metaTitle = 'Bṛhat Anveṣī';
	$metaDescription =
		'Bṛhat Anveṣī is our culture experience and discovery travel program, through curated and guided temple tours throughout India.';
	$metaUrl = 'https://www.brhat.in/anveshi';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp';
	$metaType = 'webpage';

	defaultFullBox({
		transition: 'fly',
		y: 120,
		opacity: 0,
		duration: 300
	});

	function fauxfake() {
		fake = !fake;
	}

	function toggleMenu() {
		expandMenu = !expandMenu;
	}

	function expandText() {
		fullText = !fullText;
	}

	function toggleCategory(index: number) {
		selectedCategory[index] = !selectedCategory[index];
		for (let i = 0; i < selectedCategory.length; i++) {
			if (i !== index && selectedCategory[i] === true) {
				selectedCategory[i] = false;
			}
		}
	}

	function increaseLimit() {
		videoLimit += 4;
	}

	function toggleArea(index: number) {
		selectedArea[index] = !selectedArea[index];
		for (let i = 0; i < selectedArea.length; i++) {
			if (i !== index && selectedArea[i] === true) {
				selectedArea[i] = false;
			}
		}
	}

	function toggleFaq(index: number) {
		isFaqOpen[index] = !isFaqOpen[index];
		for (let i = 0; i < isFaqOpen.length; i++) {
			if (i !== index && isFaqOpen[i] === true) {
				isFaqOpen[i] = false;
			}
		}
		if (alignGrid === false) {
			alignGrid = true;
		}
	}

	function toggleGen(index: number) {
		isGenOpen[index] = !isGenOpen[index];
		for (let i = 0; i < isGenOpen.length; i++) {
			if (i !== index && isGenOpen[i] === true) {
				isGenOpen[i] = false;
			}
		}
		readjustedgrid = !readjustedgrid;
	}

	$: if (videoLimit) {
		(async () => {
			vids = await anveshiVids(videoLimit);
		})();
	}

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	$: anyFaqOpen = isFaqOpen.some((item) => item);

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		}
		(async () => {
			chapters = await allChapters();
			arts = await anveshiTempleArt();
			vids = await anveshiVids(videoLimit);
			cards = await allDiaryCards();
			faqs = await allFaq();
			gens = await anveshiGeneral();
		})();
	});
</script>

<svelte:window bind:innerWidth={iW} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<!--hero image-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp')"
	/>
</div>
<!--end-->
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<div class="templeanim" use:reveal>
			{#if $themeMode}
				<img src="/images/logos/anv-black.webp" alt="anveshi logo" />
			{:else}
				<img src="/images/logos/anv-white.webp" alt="anveshi logo" />
			{/if}
		</div>
		<h4 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			A travel program to contemporize ancient Indian tradition by guiding travel groups through
			hitherto rarely explored sacred kṣetras of India.
		</h4>
		<p class="soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			Each chapter of Bṛhat Anveṣī focuses on a specific area of India with dense concentrations of
			great temples and heritage centers. Anveṣī chapters are thrilling rides of three to four days,
			full of exploration of local cuisine, culture and heritage. Designed to satisfy both your
			wanderlust and curiosity, leaving you with an elevated taste of the cultural magic of India.
		</p>
	</section>
	<section class="rta-column rowgap400 min100" id="chapters">
		<h2 use:reveal class="bord-top bord-bot p-top-16 p-bot-24">All Chapters</h2>
		{#if chapters && chapters.length > 0}
			<Splide
				hasTrack={false}
				options={{
					drag: true,
					keyboard: 'global',
					waitForTransition: true,
					type: 'loop',
					gap: '32px',
					width: '100%',
					wheelMinThreshold: 1.1,
					speed: 900,
					direction: 'ltr',
					perPage: 3,
					pagination: false,
					breakpoints: {
						1023: {
							perPage: 2,
							gap: '24px'
						},
						768: {
							perPage: 1
						}
					}
				}}
			>
				<SplideTrack>
					{#each chapters as item}
						<SplideSlide>
							<div class="rta-column fullH rowgap300">
								<div class="rta-image height-30-stay br6">
									<img class="br6" src={item.image} alt={item.id} />
								</div>
								<div class="rta-column rowgap200">
									<div class="rta-column rowgap100">
										<h5 class="title">
											<a href="/anveshi/{item.chapter}">
												{item.name}
											</a>
										</h5>
										{#if item.status === 'open now'}
											<small class="yellowsticker">{item.status}!</small>
										{/if}
									</div>
									{#if item.content && item.content.length > 0}
										<p class="mid soft">
											{item.content.slice(0, 300)}...
										</p>
									{/if}
									<div class="rta-row row-col colgap200">
										<small>
											{item.duration}
										</small>
										<small>
											{item.dates}
										</small>
									</div>
									<button class="newbutton red big"
										><a href="/anveshi/{item.chapter}">Visit Page</a></button
									>
								</div>
							</div>
						</SplideSlide>
					{/each}
				</SplideTrack>
				<div
					class="splide__arrows splide__arrows--ltr rta-row xcenter-d colgap200 p-top-16 p-bot-16 m-top-16 bord-top"
				>
					<button
						class="splide__arrow splide__arrow--prev"
						type="button"
						aria-label="Previous slide"
						aria-controls="splide01-track"
					>
						<PrevIcon />
					</button>
					<button
						class="splide__arrow splide__arrow--next"
						type="button"
						aria-label="Next slide"
						aria-controls="splide01-track"
					>
						<NextIcon />
					</button>
				</div>
			</Splide>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-bot-64" id="diaries">
		<h2 use:reveal class="bord-top bord-bot p-top-16 p-bot-24">Travel Diaries</h2>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			A collection of traveller images, trip videos, testimonials and writings from our trips. To
			submit your own experience, please write to anveshi@brhat.in
		</h5>
		<div class="rta-column">
			{#if $breakTwo}
				<div
					class="rta-row colgap200 ycenter drawer-select"
					class:isactive={expandMenu}
					on:click={toggleMenu}
					on:keydown={fauxfake}
					use:reveal={{ transition: 'fade', delay: 100, duration: 100 }}
				>
					{#if expandMenu}
						Close Diaries
					{:else}
						Expand Diaries
					{/if}
					<div class="rta-row ycenter" class:rotated={expandMenu}>
						{#if expandMenu}
							<Chevron2 dimension={24} onToggle={true} />
						{:else}
							<Chevron2 dimension={24} />
						{/if}
					</div>
				</div>
			{/if}
			{#if expandMenu || !$breakTwo}
				<div
					class="rta-row row-col ycenter xleft rta-drawer-items colgap400 rowgap100"
					in:slide={{ axis: 'y', easing: quintOut }}
					out:slide={{ axis: 'y', easing: quintIn }}
					on:click={toggleMenu}
					on:keydown={fauxfake}
					use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
				>
					<button
						class="drawer-item"
						on:click={() => toggleCategory(3)}
						class:drawerselection={selectedCategory[3]}>Travelogues</button
					>
					<button
						class="drawer-item"
						on:click={() => toggleCategory(1)}
						class:drawerselection={selectedCategory[1]}>Temple Art</button
					>
					<button
						class="drawer-item"
						on:click={() => toggleCategory(2)}
						class:drawerselection={selectedCategory[2]}>Video Accounts</button
					>
				</div>
			{/if}
		</div>
		<div
			class="rta-column p-top-8 rowgap200"
			use:reveal={{ transition: 'fade', delay: 200, duration: 600 }}
		>
			{#if selectedCategory[1]}
				<div class="rta-grid grid4 stay2 rowgap300 colgap300">
					{#if arts && arts.length > 0}
						{#each arts as item, i}
							<div
								class="rta-image height-20"
								in:scale={{ duration: 200, delay: i * 25 }}
								out:scale={{ duration: 100, delay: 0 }}
							>
								<img src={item.image} alt={item.id} />
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if selectedCategory[2]}
				<div class="rta-grid grid4 rowgap400 colgap400" id="videos-section">
					{#if vids && vids.length > 0}
						{#each vids as item, i}
							<div
								class="rta-column rowgap100"
								in:scale={{ duration: 200, delay: i * 25 }}
								out:scale={{ duration: 100, delay: 0 }}
							>
								<Youtuber youTubeId={item.videoid} />
								<p class="mid">{item.name}</p>
							</div>
						{/each}
					{/if}
				</div>
				<div class="rta-column xleft">
					<button on:click={increaseLimit} class="newbutton big"> Load More </button>
				</div>
			{/if}
			{#if selectedCategory[3]}
				<div class="rta-grid grid2 left colgap600 rowgap300">
					<h5 class="title">
						<a href="/anveshi/posts/kriteesh">Travel Diary by Kriteesh Vajrapani - Karnataka</a>
					</h5>
					<div class="rta-column rowgap200">
						<p class="mid soft">
							The Bṛhat Anveṣī trip for me started at the airport itself. Instead of going to Hassan
							by myself, I chose to wait for the Bṛhat team to arrive, so that I could tag along.
							Interestingly, no one else in the group did this. Whether I am lazy and irresponsible,
							or extremely aware and smart! Either way, I was just lucky. The wait was more
							rewarding than I expected. It got me exclusive time with the Bṛhat Team.
						</p>
						<a href="/anveshi/posts/kriteesh">
							<button class="newbutton big">Read More</button>
						</a>
					</div>
				</div>
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap500 p-top-64 p-bot-64" id="tourlead">
		<h2 use:reveal class="bord-top bord-bot p-top-16 p-bot-24">About the Tour Lead</h2>
		<div
			class="rta-grid grid2 left0 colgap600 rowgap300"
			use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}
		>
			<div class="rta-image height-30-3" id="lead-photo">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/00team/pankajsaxena.webp"
					alt="pankajsaxena"
				/>
			</div>
			<div class="rta-column rowgap200">
				<h5 class="title">
					Pankaj Saxena is a scholar of Hindu temple architecture, Hindu arts and aesthetics.
				</h5>
				<p>
					He has visited more than 1200 ancient temples all over India and documented photographic,
					historical and oral evidence of the living tradition centred around the Hindu temple. He
					writes on the meaning and purpose of the Hindu temple in Hindu society and history and has
					authored various articles on that topic.
				</p>
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 min100 p-top-64" id="faqs">
		<h2 use:reveal class="bord-top bord-bot p-top-16 p-bot-24">FAQs</h2>
		<div class="rta-column rowgap200" id="faqgrid" class:calibrated={anyFaqOpen}>
			{#if faqs && faqs.length > 0}
				{#each faqs as item, i}
					<div
						class="rta-column rowgap100 downacco"
						class:opentab={isFaqOpen[i]}
						on:click={() => toggleFaq(i)}
						on:keydown={() => toggleFaq(i)}
					>
						<div class="rta-row fixed ytop colgap100 rowgap400">
							<div class="button-box" class:rotated={isFaqOpen[i]}>
								<ChevronDown size="20" color="#878787" />
							</div>
							<h6 class="title">{item.name}</h6>
						</div>
						{#if isFaqOpen[i]}
							<p transition:slide={{ axis: 'y' }}>{item.content}</p>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</section>
</Shell>

<style lang="sass">

.downacco
	border-bottom: 1px solid var(--contraster2)
	cursor: pointer
	padding-bottom: 16px

.splide__arrow
	background: var(--texttwo)
	border: none
	height: 24px
	width: 24px
	padding: 2px
	border-radius: 12px
	transition: 0.09s ease
	cursor: pointer
	transform-origin: center center
	&:hover
		background: #fe4a49
		transform: scale(1.2)

#chapterscolumn
	.rta-image
		img
			object-fit: cover
			width: 100%

#lead-photo
	img
		object-fit: contain

.button-box
	transform-origin: center center
	height: 20px
	transition: 0.2s

.button-box.rotated
	transform: rotate(180deg)
	

.templeanim
	@media screen and (min-width: 1024px)
		img
			width: 25%
			object-fit: contain
	@media screen and (max-width: 1023px)
		img
			width: 55%
			object-fit: contain

.x0
	overflow: hidden
	height: 100vh

</style>
