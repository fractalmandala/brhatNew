<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode } from '$lib/stores/globalstores';
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
	import CompButton from '$lib/ridunits/RIDButton.svelte';
	import CompButton2 from '$lib/ridunits/RIDButton.svelte';
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
	selectedCategory[1] = true;
	let selectedArea: boolean[] = Array(3).fill(false);
	selectedArea[1] = true;
	let alignGrid: boolean = false;
	let fake = false;

	$metaTitle = 'Bṛhat Anveṣī';
	$metaDescription =
		'Bṛhat Anveṣī is our culture experience and discovery travel program, through curated and guided temple tours throughout India.';
	$metaUrl = '/anveshi';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp';
	$metaType = 'webpage';

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

<!--all chapters-->
<div
	class="rta-grid grid2 outer-box rowgap600 colgap600 p-top-64"
	class:left2={!fullText}
	class:right2={fullText}
	use:autoAnimate
	data-lenis-scroll-snap-align="start"
>
	<div class="rta-column rowgap400 bord-bot-m p-bot-32-m" use:autoAnimate>
		<div class="templeanim">
			{#if $themeMode}
				<img src="/images/logos/anv-black.webp" alt="anveshi logo" />
			{:else}
				<img src="/images/logos/anv-white.webp" alt="anveshi logo" />
			{/if}
		</div>
		<h4>
			A travel program to contemporize ancient Indian tradition by guiding travel groups through
			hitherto rarely explored sacred kṣetras of India.
		</h4>
		<p>
			Each chapter of Bṛhat Anveṣī focuses on a specific area of India with dense concentrations of
			great temples and heritage centers. Anveṣī chapters are thrilling rides of three to four days,
			full of exploration of local cuisine, culture and heritage. Designed to satisfy both your
			wanderlust and curiosity, leaving you with an elevated taste of the cultural magic of India.
		</p>
		<div on:click={expandText} on:keydown={fauxfake}>
			<CompButton --thisbuttoncolor="#FF9F1C">Read More</CompButton>
		</div>
		{#if fullText}
			<p>
				A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva
				darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals
				of existence itself. According to another school of thought, Nature nudged evolution to a
				point where a species would emerge capable of reflecting upon itself and the mysteries of
				the cosmos, life and existence.
			</p>
			<p>
				Without getting deep into darśana, the point is that, humans are born to search, born for
				anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who
				searches is called – anveṣī – the discoverer. This element of discovery has mainly two
				dimensions – inner and outer. And the two are connected. The favorite theme of literature is
				wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
			</p>
			<p>
				Yes, that urge to discover the world is innate in all humans. To search for what is novel,
				what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure
				in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of
				courageous journeys taken individually and in groups, changing the course of entire humanity
				in the process. This urge is biological, as most other species also have this urge to chart
				new waters and to discover new territories. But in humans it is central. We are born –
				anveṣī.
			</p>
			<p>
				But there is a deep inner dimension to this urge for discovery. While discovering the world
				we also discover the self. While looking for the new, we also crave for what is eternal and
				everlasting. While looking for change, we also look for the unchanging and the permanent. In
				short, while we discover the outer world, we also go on an inner journey an inner –
				anvekṣaṇa.
			</p>
			<p>
				In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two
				seemingly dichotomous urges of humans in one fulfilling quest. We created an entire
				tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man
				for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also
				spiritually and culturally elevating.
			</p>
			<h5>
				<strong>
					Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize
					this ancient Indian tradition by guiding travel groups through sacred kṣetras of India
					which are hitherto unexplored by most of us, but which are not just full of architectural,
					sculptural and cultural splendor, but are also living systems carrying beautiful ancestral
					traditions for thousands of years.
				</strong>
			</h5>
			<h5>
				<strong>
					We seek to satisfy the wanderlust in you in a way which will leave you not just
					intellectually satisfied but will also elevate your understanding and knowledge. <span
						class="anv">When discovering together such, we are Bṛhat Anveṣī.</span
					>
				</strong>
			</h5>
			<div on:click={expandText} on:keydown={fauxfake}>
				<CompButton2 --thisbuttoncolor="#FF9F1C">Close</CompButton2>
			</div>
		{/if}
	</div>
	<div id="chapterscolumn" class="rta-column rowgap400 p-bot-16">
		{#if chapters && chapters.length > 0}
			{#each chapters as item}
				<div class="rta-row fixed colgap300">
					<div class="rta-image height-30 w32">
						<img src={item.image} alt={item.id} />
					</div>
					<div class="rta-column rowgap100 w64">
						<h6 style="font-weight: bold" class="hover-yellow">
							<a href="/anveshi/{item.chapter}">
								{item.name}
							</a>
						</h6>
						{#if !breakPoint}
							{#if item.content && item.content.length > 0}
								<p>
									{item.content.slice(0, 300)}...<span style="font-weight: bold; color: #FF9F1C"
										><a href="/anveshi/{item.chapter}">Know More</a></span
									>
								</p>
							{/if}
						{/if}
						<div class="rta-row row-col colgap200">
							<small>
								{item.duration}
							</small>
							<small>
								{item.dates}
							</small>
						</div>
						<p class="is-yellow">
							<strong><a href="/anveshi/{item.chapter}">Visit Page</a></strong>
						</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
<!--end-->

<!--travel diaries-->
<div
	id="travel-diaries"
	class="rta-column outer-box minH ycenter p-top-64"
	data-lenis-scroll-snap-align="start"
>
	<div class="rta-grid grid2 right colgap600 rowgap400 bord-top p-top-64 bord-bot-m p-bot-32-m">
		<div class="rta-column down">
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
								class="rta-video rta-column rowgap100"
								in:scale={{ duration: 200, delay: i * 25 }}
								out:scale={{ duration: 100, delay: 0 }}
							>
								<Youtuber youTubeId={item.videoid} />
								<small>{item.name}</small>
							</div>
						{/each}
					{/if}
				</div>
				<div on:click={increaseLimit} on:keydown={fauxfake}>
					<CompButton3 --thisbuttoncolor="#FF9F1C">Load More</CompButton3>
				</div>
			{/if}
			{#if selectedCategory[3]}
				<div class="rta-column rowgap300">
					<h4>Travel Diary by Kriteesh Vajrapani - Karnataka</h4>
					<p>
						The Bṛhat Anveṣī trip for me started at the airport itself. Instead of going to Hassan
						by myself, I chose to wait for the Bṛhat team to arrive, so that I could tag along.
						Interestingly, no one else in the group did this. Whether I am lazy and irresponsible,
						or extremely aware and smart! Either way, I was just lucky. The wait was more rewarding
						than I expected. It got me exclusive time with the Bṛhat Team.
					</p>
					<a href="/anveshi/posts/kriteesh">
						<CompButton4 --thisbuttoncolor="#FF9F1C">Read More</CompButton4>
					</a>
				</div>
			{/if}
		</div>
		<div class="rta-column rowgap200 ta-r-d up" id="diaries">
			<h3>Travel Diaries</h3>
			<h5 class="p-bot-16">
				Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings
				from our trips. To submit your own experience, please write to anveshi@brhat.in
			</h5>
			<button
				class="drawer-item2 ta-r-d"
				on:click={() => toggleCategory(3)}
				class:selected={selectedCategory[3]}>Travel Blog</button
			>
			<button
				class="drawer-item2 ta-r-d"
				on:click={() => toggleCategory(1)}
				class:selected={selectedCategory[1]}>Temple Art</button
			>
			<button
				class="drawer-item2 ta-r-d"
				on:click={() => toggleCategory(2)}
				class:selected={selectedCategory[2]}>Video Testimonials</button
			>
		</div>
	</div>
</div>
<!--end-->

<!--about anveshi, faq-->
<div
	class="rta-column ycenter minH outer-box rowgap300"
	id="aboutsection"
	data-lenis-scroll-snap-align="start"
>
	{#if breakPoint}
		<div class="rta-row colgap400 drawer-select">
			{#if selectedArea[1]}
				<button class="drawer-item" on:click={() => toggleArea(2)}> About the Lead </button>
			{:else if selectedArea[2]}
				<button class="drawer-item" on:click={() => toggleArea(1)}> Read FAQs </button>
			{/if}
		</div>
	{/if}
	{#if expandMenu || !breakPoint}
		<div
			class="rta-row row-col ycenter rta-drawer-items colgap400 rowgap100 p-bot-32 bord-bot bord-top p-top-32"
			use:autoAnimate
			on:click={toggleMenu}
			on:keydown={fauxfake}
		>
			<button class="drawer-item" on:click={() => toggleArea(2)} class:selected={selectedArea[2]}
				>About the Lead</button
			>
			<button class="drawer-item" on:click={() => toggleArea(1)} class:selected={selectedArea[1]}
				>FAQs</button
			>
		</div>
	{/if}
	<div class="rta-column p-bot-64-d rowgap200" use:autoAnimate>
		{#if selectedArea[1]}
			{#if breakPoint}
				<h4 class="bord-bot-m p-bot-16-m ta-c-m">FAQs</h4>
			{/if}
			<div class="rta-grid grid3 rowgap400 colgap600" id="faqgrid" class:calibrated={anyFaqOpen}>
				{#if faqs && faqs.length > 0}
					{#each faqs as item, i}
						<div
							class="rta-column rowgap200"
							class:opentab={isFaqOpen[i]}
							on:click={() => toggleFaq(i)}
							on:keydown={() => toggleFaq(i)}
							use:autoAnimate
						>
							<div class="rta-row fixed ytop colgap100 rowgap400">
								<div class="button-box" class:rotated={isFaqOpen[i]}>
									<ChevronDown size="27" color="#878787" />
								</div>
								<h6>{item.name}</h6>
							</div>
							{#if isFaqOpen[i]}
								<p>{item.content}</p>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		{/if}
		{#if selectedArea[2]}
			{#if breakPoint}
				<h4 class="bord-bot-m p-bot-16-m ta-c-m">About the Lead</h4>
			{/if}
			<div class="rta-row rowgap300 colgap300">
				<div class="rta-image height-30 w32" id="lead-photo">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/00team/pankajsaxena.webp"
						alt="pankajsaxena"
					/>
				</div>
				<div class="rta-column w64 rowgap200">
					<h6>
						Pankaj Saxena is a scholar of Hindu temple architecture, Hindu arts and aesthetics.
					</h6>
					<p>
						He has visited more than 1200 ancient temples all over India and documented
						photographic, historical and oral evidence of the living tradition centred around the
						Hindu temple. He writes on the meaning and purpose of the Hindu temple in Hindu society
						and history and has authored various articles on that topic.
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<!--end-->

<style lang="sass">

#aboutsection
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse

.is-yellow
	color: #FF9F1C
	text-transform: uppercase

#chapterscolumn
	.rta-image
		img
			object-fit: cover
			width: 100%

.hover-yellow
	transition: 0.08s
	&:hover
		color: #FF9F1C

#lead-photo
	img
		object-fit: contain

.drawer-item
	text-decoration: none
	font-size: 16px
	text-transform: uppercase
	background: none
	padding: 4px 12px
	border-radius: 16px
	border: none
	&::before
		margin-left: auto
	&::before, &::after
		content: ''
		display: block
		width: 0%
		height: 2px
		background: #FF9F1C
		transition: 0.5s
		border-radius: 2px
	&:hover
		&::after, &::before
			width: 100%
	@media screen and (max-width: 1023px)
		width: 100%
		font-weight: bold
		font-size: 20px
		border-bottom: 1px solid var(--borderline)
		border-radius: 0
		background: #FF9F1C
		color: white
		border-radius: 16px
		

.drawer-item
	@media screen and (min-width: 1024px)
		color: #474747		
.drawer-item.selected
	background: #FF9F1C
	color: white

.drawer-item2
	@media screen and (max-width: 1023px)
		border-bottom: 1px solid var(--borderline)
		font-weight: bold
		padding-bottom: 16px
	&::after
		background: #FF9F1C

.drawer-item2.selected
	background: #FF9F1c
	color: white
	@media screen and (max-width: 1023px)
		padding-bottom: 4px

#faqgrid
	.rta-column
		cursor: pointer
	h6
		transition: 0.08s
		color: #474747
		&:hover
			color: #FF9F1c

#faqgrid
	.opentab
		h6
			color: #FF9F1C

.button-box
	transform-origin: center center
	height: 27px

.button-box.rotated
	transform: rotate(180deg)
	

.templeanim
	@media screen and (min-width: 1024px)
		img
			width: 50%
			object-fit: contain
	@media screen and (max-width: 1023px)
		img
			width: 55%
			object-fit: contain

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 60vh

.grid3.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab" ". . ."
		grid-template-columns: ". . ."
		.rta-column.opentab
			grid-area: opentab
			border-bottom: 1px solid var(--borderline)
			padding-bottom: 24px
	@media screen and (max-width: 1023px)
		grid-template-areas: "."
		grid-template-columns: 1fr
		.rta-column.opentab
			border-bottom: 1px solid var(--borderline)
			padding-bottom: 24px

</style>
