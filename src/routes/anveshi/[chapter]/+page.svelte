<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
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

	export function MyTransition(Splide: any, Components: any) {
		const { bind } = EventInterface(Splide);
		const { Move } = Components;
		const { list } = Components.Elements;

		let endCallback: any;

		function mount() {
			bind(list, 'transitionend', (e) => {
				if (e.target === list && endCallback) {
					// Removes the transition property
					cancel();

					// Calls the `done` callback
					endCallback();
				}
			});
		}

		function start(index: any, done: any) {
			// Converts the index to the position
			const destination = Move.toPosition(index, true);

			// Applies the CSS transition
			list.style.transition = 'transform 800ms cubic-bezier(.44,.65,.07,1.01)';

			// Moves the carousel to the destination.
			Move.translate(destination);

			// Keeps the callback to invoke later.
			endCallback = done;
		}

		function cancel() {
			list.style.transition = '';
		}

		return {
			mount,
			start,
			cancel
		};
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

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<!--heading image-->
<div class="rta-column x0 top-p-64" id="heading-image">
	<img src={data.image} alt={data.name} />
</div>
<!--end-->

<!--header and metadetails-->
<div class="rta-column outer-box limit rowgap100 serif" id="section1">
	<div class="rta-column bord-bot p-bot-64 ta-c rowgap200">
		<h3 class="hindiadobe tt-u ta-c-d p-bot-16">{data.name}</h3>
		<em class="tt-u ta-c rta-column" id="section1line2" style="background: {$anveshiColor}"
			>{data.status}</em
		>
		{#if data.status === 'open now'}
			<a
				href={data.kyc}
				target="_blank"
				rel="noreferrer"
				class="rta-column"
				style="align-self: center"><button class="genbutton-l">Register Here</button></a
			>
		{/if}
		<div class="rta-row iconsrow">
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-dates.png" alt="datesicon" />
				<p>{data.dates}</p>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/anveshi-duration.png" alt="durationicon" />
				<p>{data.duration}</p>
			</div>
			<div class="rta-column rta-icon">
				<img src="/images/icon-rupee.png" alt="priceicon" />
				{#if data.price}
					<p>{data.price}</p>
				{:else}
					<p>Price TBD</p>
				{/if}
			</div>
		</div>
		{#if highlights && highlights.length > 0}
			<div class="rta-column highlightscolumn p-top-64">
				{#each highlights as item}
					{#if item.name === 'temple'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
					{#if item.name === 'activity'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
					{#if item.name === 'person'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h6 class="hindiadobe">{item.content}</h6>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
<!--end-->

<!--detailed content and itinerary-->
<div class="rta-column outer-box limit rowgap600">
	<pre class="h5 hindiadobe">
			{data.content}
		</pre>

	<div class="rta-column top-p-32 rowgap300 bot-p-64">
		<h4 class="tt-u ta-c-d p-bot-16 hindiadobe">Itinerary</h4>
		{#if itins && itins.length > 0}
			{#each itins as item, i}
				<div
					class="rta-column rowgap200 accordion-item"
					class:accordionOpen={openedDay[i]}
					on:click={() => toggleDay(i)}
					on:keydown={fauxfake}
					use:autoAnimate
				>
					<div class="rta-row colgap100 xcenter-d" class:opened={openedDay[i]}>
						<div class="rta-column" class:rotated={openedDay[i]}>
							<ChevronDown color="#878787" />
						</div>
						<h6 class="hindiadobe">{item.name}</h6>
					</div>
					{#if openedDay[i]}
						<pre class="h5 ta-c-d hindiadobe">
						{item.content}
					</pre>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>
<!--end-->

<!--temples-->
<div class="rta-column outer-box rowgap100 p-top-64 p-bot-64">
	<div class="rta-column bord-top p-top-32 p-bot-32">
		<h4 class="bot-p-16 tt-u ta-c-d hindiadobe">
			Temples of {data.chapter}
		</h4>
		<small class="ta-c-d" style="color: var(--opposite)"
			>Use arrow keys/buttons to navigate, or drag/swipe</small
		>
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
							<h6 class="serif">{item.name}</h6>
							<pre class="serif">{item.content}</pre>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
<!--end-->

<!--faq-->
<div class="rta-column outer-box limit rowgap100 serif">
	<h4 class="bord-top p-bot-32 ta-c-d p-top-32 hindiadobe">FAQs</h4>
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
							<h6 class="hindiadobe faqs">{item.name}</h6>
						</div>
						{#if isFaqOpen[i]}
							<p class="hindiadobe faqs">{item.content}</p>
						{/if}
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<!--general-->
<div class="rta-column outer-box limit rowgap100 serif generales">
	{#if gens && gens.length > 0}
		{#each gens as item}
			{#if item.name === 'Profile of the Tour Lead'}
				<h4 class="bord-top ta-c-d p-top-32 hindiadobe">{item.name}</h4>
				<div class="rta-row colgap400 tourlead">
					<div class="rta-image">
						<img src={item.image} alt="pankaj saxena" />
					</div>
					<div class="rta-column">
						<pre class="serif">{item.content}</pre>
					</div>
				</div>
			{:else}
				<h4 class="bord-top ta-c-d p-top-32 hindiadobe">{item.name}</h4>
				<pre class="serif">{item.content}</pre>
			{/if}
		{/each}
	{/if}
</div>

<!--end-->

<style lang="sass">

.generales
	pre
		font-size: 20px

.templesgrid
	.rta-image
		width: 100%

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

p.hindiadobe.faqs
	font-size: 16px

.highlightsrow
	background: var(--contraster)
	padding: 8px
	border-radius: 8px
	align-items: center
	column-gap: 24px
	.rta-icons
		display: flex
		align-items: center
		width: 27px
		height: 27px
		img
			object-fit: contain
	h6
		margin: 0
		width: calc(100% - 56px)
		font-weight: 400
		line-height: 1.12

.highlightscolumn
	row-gap: 16px

pre
	box-sizing: border-box
	white-space: pre-line
	white-space: -moz-pre-line
	white-space: -pre-line
	white-space: -o-pre-line
	word-wrap: break-word
	word-break: break-word
	overflow: hidden


.iconsrow
	justify-content: center
	margin-top: 16px
	.rta-icon
		width: 104px

.rta-icon
	text-align: center
	row-gap: 8px
	img
		width: 40px
		height: 40px
		margin: auto
	p
		color: var(--opposite)
		font-size: 12px

#heading-image
	@media screen and (min-width: 1024px)
		img
			border-radius: 16px

#section1line2
	color: white
	padding: 2px 0
	max-width: 100%
	font-size: 14px
	width: max-content
	padding: 4px 8px
	align-self: center
	@media screen and (max-width: 1023px)
		padding: 4px 8px

.x0
	img
		object-fit: cover
	@media screen and (min-width: 1024px)
		height: 100vh
		justify-content: center
		align-items: center
		img
			width: 80%
			height: 80%
			margin-top: 64px
	@media screen and (max-width: 1023px)
		height: 40vh
		img
			height: 100%

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
