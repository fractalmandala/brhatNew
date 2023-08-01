<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		anveshiChapter,
		anveshiColor
	} from '$lib/stores/metastores';
	import autoAnimate from '@formkit/auto-animate';
	import { ChevronDown } from 'lucide-svelte';
	import { chapterItinerary, allFaq } from '$lib/utils/supapulls';
	import {
		chapterTemples,
		chapterHighlight,
		chapterFaq,
		chapterProfiles,
		anveshiLead,
		anveshiGeneral
	} from '$lib/utils/supapulls';
	import { EventInterface } from '@splidejs/splide';
	import '@splidejs/splide/css/core';

	let p: number;
	let alignGrid = false;
	let faqs: string | any[];
	let gens: string | any[];
	let cfaqs: string | any[];
	let isFaqOpen: boolean[] = Array(15).fill(false);
	let highlights: any;
	let lead: string | any[];
	let profiles: string | any[];
	let itins: string | any[];
	let openedDay: boolean[] = Array(5).fill(false);
	let temp: any;
	let area: any = Array(2).fill(false);
	area[1] = true;
	let visibleTemple: any = Array(30).fill(false);
	let fake = false;

	export let data;

	$metaUrl = `https://www.brhat.in/anveshi/${data.chapter}`;
	$metaTitle = data.name;
	$metaDescription = data.excerpt;
	$metaImage = data.image;
	$metaType = 'webpage';
	$anveshiColor = data.params;

	function fauxfake() {
		fake = !fake;
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

	function toggleDay(index: number) {
		openedDay[index] = !openedDay[index];
		for (let i = 0; i < openedDay.length; i++) {
			if (i !== index && openedDay[i] === true) {
				openedDay[i] = false;
			}
		}
		if (alignGrid === false) {
			alignGrid = true;
		}
	}

	function toggleImage(index: number) {
		visibleTemple[index] = !visibleTemple[index];
		for (let i = 0; i < visibleTemple.length; i++) {
			if (i !== index && visibleTemple[i] === true) {
				visibleTemple[i] = false;
			}
		}
	}

	$: anyFaqOpen = isFaqOpen.some((item) => item);
	$: anyTemp = visibleTemple.some((item: any) => item);

	$: if ($anveshiChapter) {
		(async () => {
			$metaUrl = `https://www.brhat.in/anveshi/${data.chapter}`;
			$metaTitle = data.name;
			$metaDescription = data.excerpt;
			$metaImage = data.image;
			$anveshiColor = data.params;
			itins = await chapterItinerary($anveshiChapter);
			temp = await chapterTemples($anveshiChapter);
			highlights = await chapterHighlight($anveshiChapter);
			lead = await anveshiLead();
			profiles = await chapterProfiles($anveshiChapter);
			cfaqs = await chapterFaq($anveshiChapter);
			gens = await anveshiGeneral();
		})();
	}

	onMount(async () => {
		$anveshiChapter = data.chapter;
		itins = await chapterItinerary($anveshiChapter);
		temp = await chapterTemples($anveshiChapter);
		highlights = await chapterHighlight($anveshiChapter);
		lead = await anveshiLead();
		profiles = await chapterProfiles($anveshiChapter);
		faqs = await allFaq();
		cfaqs = await chapterFaq($anveshiChapter);
		gens = await anveshiGeneral();
	});

	afterUpdate(() => {
		$anveshiChapter = data.chapter;
	});
</script>

<svelte:window bind:scrollY={p} />

<!--hero image-->
<div class="x0" data-lenis-scroll-snap-align="start">
	<img src={data.image} alt="herophoto" />
</div>
<!--end-->

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100 xcenter p-bot-64" id="intro">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h1>{data.name}</h1>
			<p class="tt-u">{data.status}</p>
		</div>
		<div class="rta-row colgap300">
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-dates.png" alt="datesicon" />
				<small>{data.dates}</small>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-duration.png" alt="durationicon" />
				<small>{data.duration}</small>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/icon-rupee.png" alt="priceicon" />
				{#if data.price}
					<small>{data.price}</small>
				{:else}
					<small>TBD</small>
				{/if}
			</div>
		</div>
		{#if data.status === 'open now'}
			<a
				href={data.kyc}
				target="_blank"
				rel="noreferrer"
				class="rta-column p-top-16"
				style="align-self: center"><button class="newbutton big red">Register Here</button></a
			>
		{/if}
		{#if highlights && highlights.length > 0}
			<div class="rta-grid grid2 colgap300 rowgap200 bord-top bord-bot p-top-32 p-bot-32">
				{#each highlights as item}
					{#if item.name === 'temple'}
						<div class="rta-column highlightsrow rowgap200">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<p class="mid">{item.content}</p>
						</div>
					{/if}
					{#if item.name === 'activity'}
						<div class="rta-column highlightsrow rowgap200">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<p class="mid">{item.content}</p>
						</div>
					{/if}
					{#if item.name === 'person'}
						<div class="rta-column highlightsrow rowgap200">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<p class="mid">{item.content}</p>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
		<div class="rta-column rowgap300 contains-text">
			<pre>{data.content}</pre>
		</div>
	</section>
	<section class="rta-column rowgap400 ytop p-bot-64 m-bot-32" id="second">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Itinerary</h2>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap300">
			{#if itins && itins.length > 0}
				{#each itins as item, i}
					<div
						class="rta-column rowgap200 accordion-item"
						class:accordionOpen={openedDay[i]}
						on:click={() => toggleDay(i)}
						on:keydown={fauxfake}
						use:autoAnimate
					>
						<div class="rta-row stay colgap100" class:opened={openedDay[i]}>
							<div class="rta-column" class:rotated={openedDay[i]}>
								<ChevronDown color="#878787" />
							</div>
							<h6>{item.name}</h6>
						</div>
						{#if openedDay[i]}
							<pre>
						{item.content}
						</pre>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</section>
	{#if lead && lead.length > 0}
		{#each lead as item}
			<section class="rta-column rowgap400 ytop p-bot-64 m-bot-32" id="third">
				<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
					<h2>{item.name}</h2>
				</div>
				<div class="rta-row colgap400 rowgap300 schedule1">
					<div class="rta-image w32">
						<img src={item.image} alt="pankaj saxena" />
					</div>
					<div class="rta-column w64">
						<pre>{item.content}</pre>
					</div>
				</div>
			</section>
		{/each}
	{/if}
	{#if profiles && profiles.length > 0}
		{#each profiles as item}
			<section class="rta-column rowgap400 ytop p-bot-64 m-bot-32" id="fourth">
				<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
					<h2>{item.name}</h2>
				</div>
				<div class="rta-row colgap400 rowgap300 schedule1">
					<div class="rta-image w32">
						<img src={item.image} alt="pankaj saxena" />
					</div>
					<div class="rta-column w64">
						<pre>{item.content}</pre>
					</div>
				</div>
			</section>
		{/each}
	{/if}
	<section class="rta-column rowgap400 min100 p-bot-64" id="temples">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2 class="tt-c">Temples of {data.chapter}</h2>
		</div>
		{#if temp && temp.length > 0}
			<div class="rta-grid grid3 rowgap300 colgap300 templesgrid" class:calibgrid={anyTemp}>
				{#each temp as item, i}
					<div class="rta-row rowgap200" class:calibitem={visibleTemple[i]}>
						<div class="rta-image" on:click={() => toggleImage(i)} on:keydown={fauxfake}>
							<img src={item.image} alt={item.name} />
						</div>
						{#if visibleTemple[i]}
							<div class="rta-column">
								<h6 class="title">{item.name}</h6>
								<pre>{item.content}</pre>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-bot-64" id="faq">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>FAQs</h2>
		</div>
		<div class="rta-grid rowgap400 colgap600" id="faqgrid" class:calibrated={anyFaqOpen}>
			{#if faqs && faqs.length > 0}
				{#each faqs as item, i}
					{#if item.chapter === null || item.chapter === $anveshiChapter}
						<div
							class="rta-column rowgap100"
							class:opentab={isFaqOpen[i]}
							on:click={() => toggleFaq(i)}
							on:keydown={() => toggleFaq(i)}
							use:autoAnimate
						>
							<div class="rta-row fixed ytop colgap100 rowgap400">
								<div class="button-box" class:rotated={isFaqOpen[i]}>
									<ChevronDown size="27" color="#878787" />
								</div>
								<h6 class="faqs">{item.name}</h6>
							</div>
							{#if isFaqOpen[i]}
								<pre class="faqs">{item.content}</pre>
							{/if}
						</div>
					{/if}
				{/each}
			{/if}
		</div>
	</section>
</Shell>

<style lang="sass">

#intro
	@media screen and (min-width: 1024px)
		p
			text-align: center

.x0
	overflow: hidden
	height: 100vh
	img
		height: 96%
	@media screen and (max-width: 768px)
		height: 40vh

.templesgrid
	.rta-image
		width: 100%
		transform-origin: center center
		transition: 0.1s
		cursor: pointer
		&:hover
			transform: scale(0.9)

.templesgrid.calibgrid
	@media screen and (min-width: 1024px)
		.calibitem
			grid-column: span 3
			column-gap: 32px
			.rta-image
				width: 32%
			.rta-column
				width: calc(66.67% - 32px)

h6.faqs
	cursor: pointer
	margin: 0

.highlightsrow
	padding: 8px
	border-radius: 8px
	align-items: center
	justify-content: center
	column-gap: 24px
	text-align: center
	.rta-icons
		display: flex
		align-items: center
		width: 48px
		height: 48px
		img
			object-fit: contain
	@media screen and (min-width: 1024px)
		.rta-icons
			width: 48px
			height: 48px

pre
	box-sizing: border-box
	white-space: pre-line
	white-space: -moz-pre-line
	white-space: -pre-line
	white-space: -o-pre-line
	word-wrap: break-word
	word-break: break-word
	overflow: hidden

.rta-icon
	text-align: center
	row-gap: 8px
	img
		width: 48px
		height: 48px
		margin: auto

.accordion-item
	border-bottom: 1px solid var(--borderline)
	padding-bottom: 16px
	.rta-row
		cursor: pointer
		.rta-column
			transition: 0.15s
		.rta-column.rotated
			transform: rotate(180deg)

.templesgrid
	.rta-image
		height: 30vh
		img
			object-fit: cover
			width: 100%
			height: 100%

</style>
