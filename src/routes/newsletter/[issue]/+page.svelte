<script lang="ts">
	import { onMount } from 'svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Shell from '$lib/components/PageShell.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		newsFilter
	} from '$lib/stores/metastores';
	import { newsletterItems, newsletterIssues, filteredNews } from '$lib/utils/supapulls';
	import { periodicDhiti } from '$lib/utils/localpulls';
	import { slide } from 'svelte/transition';
	import '@splidejs/splide/css/core';
	import Youtuber from '$lib/components/Youtuber.svelte';
	export let data;

	let newsitems: any;
	let newsissues: any;
	let allitems: any;
	let allorfilter = true;
	let passCheck = true;
	let fake = false;

	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let recentDhiti: any;
	let recentDhiti2: any;
	let expandedMenu = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleAllOrFilter() {
		allorfilter = !allorfilter;
	}

	function toggleExpanded() {
		expandedMenu = !expandedMenu;
	}

	function setFilter(name: string) {
		$newsFilter = name;
	}

	$: if ($newsFilter === '') {
		allorfilter = true;
	} else {
		allorfilter = false;
	}

	$: if ($newsFilter) {
		(async () => {
			newsitems = await filteredNews($newsFilter, data.issueData.issueno);
		})();
	}

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat Monthly Newsletter Issue No.' + data.issueData.issueno;
	$metaDescription =
		'A monthly dispatch updating you on latest actions, events, launches and more at the Culture Engine.';
	$metaUrl = `https://www.brhat.in/newsletter/${data.issueData.issueno}`;
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/17newsletter/brhatadyawall.png';

	onMount(async () => {
		allitems = await newsletterItems(data.issueData.issueno);
		newsissues = await newsletterIssues();
		newsitems = await filteredNews($newsFilter, data.issueData.issueno);
		recentDhiti = await periodicDhiti('October, 2023');
		recentDhiti2 = await periodicDhiti('September, 2023');
	});
</script>

<div class="letterstrip ta-c bord-bot p-bot-16 p-top-128 rowgap200">
	<h4>Bṛhatadya {data.issueData.header}</h4>
	<small>{data.issueData.datefrom} | {data.issueData.dateto}</small>
</div>
<div class="filterstrip colgap100">
	{#if $breakOne || $breakZero || expandedMenu}
		<div class="stripinsidestrip" on:click={toggleExpanded} on:keydown={fauxfake} transition:slide>
			<button class="blank-button" class:activated={allorfilter} on:click={toggleAllOrFilter}>
				<p>All</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Featured' && !allorfilter}
				on:click={() => setFilter('Featured')}
			>
				<p>Featured</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Bṛhat Draṣṭā' && !allorfilter}
				on:click={() => setFilter('Bṛhat Draṣṭā')}
			>
				<p>Draṣṭā</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Bṛhat Anveṣī' && !allorfilter}
				on:click={() => setFilter('Bṛhat Anveṣī')}
			>
				<p>Anveṣī</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Dhīti' && !allorfilter}
				on:click={() => setFilter('Dhīti')}
			>
				<p>Dhīti</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Events and Actions' && !allorfilter}
				on:click={() => setFilter('Events and Actions')}
			>
				<p>Events</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'New Launch' && !allorfilter}
				on:click={() => setFilter('New Launch')}
			>
				<p>New</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'IKS' && !allorfilter}
				on:click={() => setFilter('IKS')}
			>
				<p>IKS</p>
			</button>
			<button
				class="blank-button"
				class:activated={$newsFilter === 'Video' && !allorfilter}
				on:click={() => setFilter('Video')}
			>
				<p>Video</p>
			</button>
		</div>
	{/if}
	{#if $breakTwo}
		<button class="blank-button onbreak m-bot-8" on:click={toggleExpanded}>
			<small class="ta-c">Click to Filter Updates</small>
		</button>
	{/if}
</div>
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	{#if allorfilter}
		<section class="rta-column rowgap400 min100 ytop p-top-64">
			<div class="rta-column rowgap100">
				{#if allitems && allitems.length > 0}
					{#each allitems as item}
						<div
							class="singleitem"
							class:typesecond={$newsFilter === 'Featured'}
							class:typevideo={$newsFilter === 'Video'}
						>
							<div class="rta-image">
								{#if item.image}
									<img src={item.image} alt={item.header} />
								{/if}
								{#if $newsFilter === 'Video'}
									<Youtuber youTubeId={item.content} />
								{/if}
							</div>
							<div class="rta-column body">
								<div
									class="stick"
									style="background: {item.color}; color: white; width: max-content; padding: 4px; max-width: 80%; font-size: 12px; margin-bottom: 8px; text-transform: uppercase"
								>
									{item.tag}
								</div>
								{#if $newsFilter === 'Featured'}
									<h3>{item.header}</h3>
									<pre>{item.content}</pre>
									<a href={item.link} target="_blank" rel="noreferrer"
										><button class="newbutton">See More</button></a
									>
								{:else if $newsFilter === 'Video'}
									<h6 class="title">{item.header}</h6>
								{:else}
									<h6 class="title">{item.header}</h6>
									<pre>{item.content}</pre>
									<a href={item.link} target="_blank" rel="noreferrer"
										><button class="newbutton">See More</button></a
									>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</section>
	{:else}
		<section
			class="rta-column rowgap400 min100 ytop p-top-64"
			id="intro"
			class:outer={$newsFilter === 'Featured'}
		>
			{#if data.user !== 'none'}
				{#if $newsFilter === 'Dhīti'}
					{#if recentDhiti && recentDhiti.length > 0}
						{#each recentDhiti as item}
							<div class="singleitem">
								<div class="rta-image">
									{#if item.meta.image}
										<img src={item.meta.image} alt={item.meta.title} />
									{/if}
								</div>
								<div class="rta-column body">
									<div class="rta-column dhitistuff">
										<small>{item.meta.category}</small>
										<div class="rta-row ycenter">
											{#each item.meta.tags as taggie}
												<cite>{taggie}</cite>
											{/each}
										</div>
									</div>
									<h6 class="title">
										<a href={item.linkpath} target="_blank" rel="noreferrer">{item.meta.title}</a>
									</h6>
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<pre class="small">{item.meta.excerpt}</pre>
								</div>
							</div>
						{/each}
					{/if}
					{#if recentDhiti2 && recentDhiti2.length > 0}
						{#each recentDhiti2 as item}
							<div class="singleitem">
								<div class="rta-image">
									{#if item.meta.image}
										<img src={item.meta.image} alt={item.meta.title} />
									{/if}
								</div>
								<div class="rta-column body">
									<div class="rta-column dhitistuff">
										<small>{item.meta.category}</small>
										<div class="rta-row ycenter">
											{#each item.meta.tags as taggie}
												<cite>{taggie}</cite>
											{/each}
										</div>
									</div>
									<h6>
										<a href={item.linkpath} target="_blank" rel="noreferrer">{item.meta.title}</a>
									</h6>
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<pre class="excerpt">{item.meta.excerpt}</pre>
								</div>
							</div>
						{/each}
					{/if}
				{:else if newsitems && newsitems.length > 0}
					{#each newsitems as item}
						<div
							class="singleitem"
							class:typesecond={$newsFilter === 'Featured'}
							class:typevideo={$newsFilter === 'Video'}
						>
							<div class="rta-image">
								{#if item.image}
									<img src={item.image} alt={item.header} />
								{/if}
								{#if $newsFilter === 'Video'}
									<Youtuber youTubeId={item.content} />
								{/if}
							</div>
							<div class="rta-column body">
								{#if $newsFilter === 'Featured'}
									<h3 style="line-height: 1.1">{item.header}</h3>
									<pre>{item.content}</pre>
									<a href={item.link} target="_blank" rel="noreferrer"
										><button class="newbutton">See More</button></a
									>
								{:else if $newsFilter === 'Video'}
									<h6 class="title">{item.header}</h6>
								{:else}
									<h6 class="title">{item.header}</h6>
									<pre>{item.content}</pre>
									<a href={item.link} target="_blank" rel="noreferrer"
										><button class="newbutton">See More</button></a
									>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			{/if}
		</section>
	{/if}
	<section class="rta-column rowgap200 min100" id="meaning">
		<p class="small">
			"Adya," meaning 'today, this day, now, at present', combines with Bṛhat to denote 'Bṛhat
			Today,' or 'Bṛhat Now'- a fair name for a periodic newsletter that updates recent events and
			activities at Bṛhat.
		</p>
		<p class="small">
			A second meaning lends deeper significance. With 'bṛhat' meaning 'great, formidable, large,
			growing,' 'Bṛhat-Adya' means the "Great Now," or the "Great Moment," ie- the civilizational
			moment we are currently in. Read more about this moment, and what it means for all of us,
			<a
				style="color: #fe4a49"
				href="https://www.brhat.in/about/anatomy"
				target="_blank"
				rel="noreferrer">here.</a
			>
		</p>
	</section>
</Shell>

<style lang="sass">

@media screen and (min-width: 1024px)
	.stripinsidestrip
		display: flex
		flex-direction: row
		align-items: center
		column-gap: 24px

@media screen and (min-width: 769px) and (max-width: 1023px)
	.stripinsidestrip
		display: flex
		flex-direction: row
		align-items: center
		column-gap: 16px

@media screen and (max-width: 768px)
	.stripinsidestrip
		display: flex
		flex-direction: column
		align-items: center
		row-gap: 12px
		background: var(--background)

.dhitistuff
	row-gap: 4px
	padding-bottom: 12px
	border-bottom: 1px solid var(--contraster)
	.rta-row
		column-gap: 12px
	small
		color: white
	cite
		color: var(--onlyblack)
		padding: 0
		margin: 0
	margin-bottom: 16px

@media screen and (max-width: 768px)
	.dhitistuff
		row-gap: 0
		justify-content: flex-start

.author
	padding-top: 16px

pre.excerpt
	font-size: 14px
	color: var(--onlyblack)

.newbutton
	font-weight: 600

@media screen and (min-width: 769px)
	.filterstrip
		display: flex
		flex-direction: row
		align-items: center
		padding-top: 16px
		column-gap: 24px
		padding-bottom: 16px
		border-bottom: 1px solid var(--contraster)
		width: 100%
		justify-content: center
		.blank-button
			p
				font-weight: 500
				color: var(--onlyblack)
				&:hover
					color: #fe4a49
		.blank-button.activated
			p
				font-weight: bold
				color: var(--opposite)

@media screen and (max-width: 768px)
	.letterstrip
		h4
			font-size: 24px
	.filterstrip
		display: flex
		flex-direction: column
		padding-top: 16px
		column-gap: 24px
		padding-bottom: 16px
		border-bottom: 1px solid var(--contraster)
		width: 100%
		justify-content: center
		position: relative
		.blank-button.onbreak
			p
				font-weight: bold
				color: var(--opposite)
				font-size: 18px
		.stripinsidestrip
			position: absolute
			z-index: 800
			top: 72px
			left: 0
			width: 100vw
			padding-bottom: 32px
			border-bottom: 1px solid var(--contraster)
			padding-top: 16px
			.blank-button
				p
					font-size: 24px

.singleitem
	.rta-image
		img
			object-fit: cover
			height: 100%
			width: 100%

</style>
