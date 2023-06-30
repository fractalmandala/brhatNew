<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Header from '$lib/components/SubHeader.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		anveshiChapter
	} from '$lib/stores/metastores';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import { chapterItinerary, allFaq } from '$lib/utils/supapulls';
	import {
		chapterTemples,
		chapterHighlight,
		chapterFaq,
		anveshiGeneral
	} from '$lib/utils/supapulls';
	import { EventInterface } from '@splidejs/splide';
	import '@splidejs/splide/css/core';

	let p: number;
	let alignGrid = false;
	let faqs: string | any[];
	let gens: string | any[];
	let cfaqs: string | any[];
	let highlights: any;
	let itins: string | any[];
	let openedDay: boolean[] = Array(5).fill(false);
	let temp: any;
	let area: any = Array(2).fill(false);
	area[1] = true;
	let fake = false;

	export let data;

	$metaUrl = 'https://www.brhat.in/bhairavadharana';
	$metaTitle = 'Bhairava Dhāraṇā';
	$metaDescription =
		'Bhairava Dhāraṇā is a three day sādhanā retreat designed to help participants learn about the basics of Bhairava upāsanā.';
	$metaImage = data.image;
	$metaType = 'webpage';

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

	$: if ($anveshiChapter) {
		(async () => {
			itins = await chapterItinerary($anveshiChapter);
			temp = await chapterTemples($anveshiChapter);
			highlights = await chapterHighlight($anveshiChapter);
			cfaqs = await chapterFaq($anveshiChapter);
			gens = await anveshiGeneral();
		})();
	}

	onMount(async () => {
		$anveshiChapter = data.chapter;
		itins = await chapterItinerary($anveshiChapter);
		temp = await chapterTemples($anveshiChapter);
		highlights = await chapterHighlight($anveshiChapter);
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

<Header />

<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage --parallax="url('{data.image}')" --parallaxresp="url('{data.image}')" />
</div>

<!--header and metadetails-->
<div class="rta-column outer-box limit rowgap100 serif p-top-64" id="section1">
	<div class="rta-column rowgap200">
		<h3 class="hindiadobe tt-u ta-c-d ta-c-m p-bot-16">{data.name}</h3>
		<em class="tt-u ta-c rta-column" id="section1line2" style="background: #fe4a49"
		<h5 class="hindiadobe">{data.excerpt}</h5>
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
			<div class="rta-column rta-icon">
				<img src="/images/icon-tent.png" alt="tenticon" />
				<p>{data.brochure}</p>
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
							<h5 class="hindiadobe">{item.content}</h5>
						</div>
					{/if}
					{#if item.name === 'activity'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h5 class="hindiadobe">{item.content}</h5>
						</div>
					{/if}
					{#if item.name === 'person'}
						<div class="rta-row highlightsrow">
							<div class="rta-icons">
								<img src={item.image} alt="icons" />
							</div>
							<h5 class="hindiadobe">{item.content}</h5>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
<!--end-->

<!--detailed content and itinerary-->
<div class="rta-column outer-box limit rowgap200 p-top-64">
	<pre class="h5 hindiadobe">
			{data.content}
		</pre>
</div>
<div class="rta-column outer-box rowgap200 limit p-top-32">
	<div class="rta-column p-top-32 glass-top rowgap300">
		<h4 class="tt-u ta-c-d hindiadobe glass-bottom p-bot-32">Schedule</h4>
	</div>
	<div class="rta-grid grid4 colgap300 p-top-16">
		{#if itins && itins.length > 0}
			{#each itins as item, i}
				<div class="rta-column itin">
					<h6 class="hindiadobe">{item.name}</h6>
					<pre class="hindiadobe adobes">
						{item.content}
					</pre>
				</div>
			{/each}
		{/if}
	</div>
</div>

<!--end-->

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 100vh


pre.hindiadobe.adobes
	display: flex
	flex-direction: column
	row-gap: 12px

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
	h5
		color: var(--opposite)
		margin: 0
		width: calc(100% - 56px)

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
		font-family: 'Space Grotesk', sans-serif
		color: var(--opposite)
		font-size: 12px

#section1line2
	color: white
	padding: 2px 0
	max-width: 100%
	font-size: 14px
	width: max-content
	padding: 4px 8px
	align-self: center
	font-family: 'Space Grotesk', sans-serif
	@media screen and (max-width: 1023px)
		padding: 4px 8px


</style>
