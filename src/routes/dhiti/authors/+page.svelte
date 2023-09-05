<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Header from '$lib/components/DhitiHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		authorName,
		categoryName,
		dateBand,
		archiveFilter,
		tagName
	} from '$lib/stores/metastores';
	import { allAuths } from '$lib/utils/supapulls';
	import {
		latestDhitiFour,
		filterChosen,
		authorfiltered,
		authorGuest,
		allBodhas,
		completeDhiti,
		periodicDhiti,
		getAllTags,
		singleTagDhiti
	} from '$lib/utils/localpulls';
	import { themeMode } from '$lib/stores/globalstores';
	let nextthreeposts: string | any[];
	let fake: boolean = false;
	let writer: string = '';
	let showWriters = false;
	let showDefault = true;
	let writerNames = Array(4).fill(false);
	let limit = 12;
	let openCat = false;
	let allByAuth: any;
	let allByCat: any;
	let allByDate: any;
	let allauthor: any;
	let allByTag: any;
	let allBySingle: any;
	let isCut = Array(3).fill(false);
	isCut[0] = true;
	let isToggledOpen = false;

	let writers: any;
	let loadCount = 9;

	$metaUrl = 'https://www.brhat.in/dhiti/authors';
	$metaTitle = 'Dhīti Archive at Bṛhat';
	$metaDescription =
		'Archive for our blog, Dhīti, which is an attempt to decode the aesthetics of culture manifest in art and literature, in the intention they were originally perceived in.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/dhiti.webp';
	$metaType = 'webpage';

	$: anyWriterOpen = writerNames.some((item) => item);

	function toggleType(index: number) {
		isCut[index] = !isCut[index];
		for (let i = 0; i < isCut.length; i++) {
			if (i !== index && isCut[i] === true) {
				isCut[i] = false;
			}
		}
	}

	function loadMore() {
		loadCount += 10;
		(async () => {
			allByDate = await latestDhitiFour(loadCount);
		})();
	}

	function setFilter(name: string) {
		$archiveFilter = name;
	}

	function setWriter(name: string) {
		$authorName = name;
		window.scrollTo(0, 0);
	}

	function setCategory(name: string) {
		$categoryName = name;
		window.scrollTo(0, 0);
	}

	function setDateband(name: string) {
		$dateBand = name;
		window.scrollTo(0, 0);
	}

	function setTag(name: string) {
		$tagName = name;
		window.scrollTo(0, 0);
	}

	function fauxfake() {
		fake = !fake;
	}

	$: if ($archiveFilter === 'Tags') {
		(async () => {
			allByTag = await getAllTags();
		})();
	}

	$: if ($tagName) {
		(async () => {
			allBySingle = await singleTagDhiti($tagName);
		})();
	}

	$: if ($dateBand) {
		if ($dateBand === 'All Posts') {
			(async () => {
				allByDate = await latestDhitiFour(loadCount);
			})();
		} else {
			(async () => {
				allByDate = await periodicDhiti($dateBand);
			})();
		}
	}

	$: if ($categoryName) {
		if ($categoryName === 'The Two Bodhas') {
			(async () => {
				allByCat = await allBodhas();
			})();
		} else {
			(async () => {
				allByCat = await filterChosen($categoryName);
			})();
		}
	}

	$: if ($authorName) {
		if ($authorName === 'Guest') {
			(async () => {
				allByAuth = await authorGuest();
			})();
		} else {
			(async () => {
				allByAuth = await authorfiltered($authorName);
			})();
		}
	}

	function toggleMobileMenu() {
		isToggledOpen = !isToggledOpen;
	}

	onMount(async () => {
		allauthor = await allAuths();
		writers = await allAuths();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header opacitor={1400} />

<div
	id="top-panel"
	class="outer-box"
	class:light={!$themeMode}
	class:dark={$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-row topselection colgap200">
		{#if !$breakTwo}
			<h5>View Archive By:</h5>
		{/if}
		<button
			class="blank-button"
			class:activetype={$archiveFilter === 'Categories'}
			on:click={() => setFilter('Categories')}
		>
			<h6>Categories</h6>
		</button>
		<button
			class="blank-button"
			class:activetype={$archiveFilter === 'Writers'}
			on:click={() => setFilter('Writers')}
		>
			<h6>Writers</h6>
		</button>
		<button
			class="blank-button"
			class:activetype={$archiveFilter === 'Dates'}
			on:click={() => setFilter('Dates')}
		>
			<h6>Dates</h6>
		</button>
		<button
			class="blank-button"
			class:activetype={$archiveFilter === 'Tags'}
			on:click={() => setFilter('Tags')}
		>
			<h6>Tags</h6>
		</button>
	</div>
	<div class="rta-grid grid2 left000 bord-top m-top-16 p-top-32">
		<div class="rta-column rowgap100 sideguy">
			{#if $breakTwo}
				<div class="p-bot-16 rta-column toggler">
					<button class="blank-button ta-l" on:click={toggleMobileMenu}
						><h6>Expand All {$archiveFilter}</h6></button
					>
				</div>
			{/if}
			{#if !$breakTwo || isToggledOpen}
				<div
					class="rowgap100 rta-column allitems"
					on:click={toggleMobileMenu}
					on:keydown={fauxfake}
					transition:slide={{ axis: 'y' }}
				>
					{#if $archiveFilter === 'Categories'}
						<button
							class="blank-button ta-l"
							on:click={() => setCategory('Culture and Policy')}
							class:active={$categoryName === 'Culture and Policy'}
						>
							<p class="tt-c">Culture and Policy</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setCategory('Indian Knowledge Systems')}
							class:active={$categoryName === 'Indian Knowledge Systems'}
						>
							<p class="tt-c">Indian Knowledge Systems</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setCategory('Dharma Today')}
							class:active={$categoryName === 'Dharma Today'}
						>
							<p class="tt-c">Dharma Today</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setCategory('The Two Bodhas')}
							class:active={$categoryName === 'The Two Bodhas'}
						>
							<p class="tt-c">The Two Bodhas</p>
						</button>
					{/if}
					{#if $archiveFilter === 'Writers'}
						{#if writers && writers.length > 0}
							{#each writers as item, i}
								<button
									class="blank-button ta-l"
									on:click={() => setWriter(item.author)}
									class:active={$authorName === item.author}
								>
									<p class="tt-c">{item.author}</p>
								</button>
							{/each}
						{/if}
					{/if}
					{#if $archiveFilter === 'Dates'}
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('All Posts')}
							class:active={$dateBand === 'All Posts'}
						>
							<p class="tt-u">All</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('May, 2023')}
							class:active={$dateBand === 'May, 2023'}
						>
							<p class="tt-u">May 2023</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('April, 2023')}
							class:active={$dateBand === 'April, 2023'}
						>
							<p class="tt-u">April 2023</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('March, 2023')}
							class:active={$dateBand === 'March, 2023'}
						>
							<p class="tt-u">March 2023</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('February, 2023')}
							class:active={$dateBand === 'February, 2023'}
						>
							<p class="tt-u">February 2023</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('January, 2023')}
							class:active={$dateBand === 'January, 2023'}
						>
							<p class="tt-u">January 2023</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('December, 2022')}
							class:active={$dateBand === 'December, 2022'}
						>
							<p class="tt-u">December 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('November, 2022')}
							class:active={$dateBand === 'November, 2022'}
						>
							<p class="tt-u">November 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('November, 2022')}
							class:active={$dateBand === 'November, 2022'}
						>
							<p class="tt-u">November 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('October, 2022')}
							class:active={$dateBand === 'October, 2022'}
						>
							<p class="tt-u">October 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('September, 2022')}
							class:active={$dateBand === 'September, 2022'}
						>
							<p class="tt-u">September 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('August, 2022')}
							class:active={$dateBand === 'August, 2022'}
						>
							<p class="tt-u">August 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('July, 2022')}
							class:active={$dateBand === 'July, 2022'}
						>
							<p class="tt-u">July 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('June, 2022')}
							class:active={$dateBand === 'June, 2022'}
						>
							<p class="tt-u">June 2022</p>
						</button>
						<button
							class="blank-button ta-l"
							on:click={() => setDateband('May, 2022')}
							class:active={$dateBand === 'May, 2022'}
						>
							<p class="tt-u">May 2022</p>
						</button>
					{/if}
					{#if $archiveFilter === 'Tags'}
						{#if allByTag && allByTag.length > 0}
							{#each allByTag as item}
								<button
									class="blank-button ta-l"
									on:click={() => setTag(item)}
									class:active={$tagName === item}
								>
									<p class="tt-c">{item}</p>
								</button>
							{/each}
						{/if}
					{/if}
				</div>
			{/if}
		</div>
		<div class="postsbox rta-column">
			{#if $archiveFilter === 'Categories'}
				{#if allByCat && allByCat.length > 0}
					{#each allByCat as item}
						<div class="rta-dhiti rta-row">
							<div class="rta-column rowgap200">
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p>{item.meta.excerpt}</p>
								<div class="rta-column p-top-16 rowgap100">
									<p class="author" style="color: var(--onlyblack); margin: 0">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<div class="citetwo rta-row ycenter colgap200">
										{#each item.meta.tags as taggie}
											<div class="taggie">{taggie}</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="rta-image">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{:else if $archiveFilter === 'Writers'}
				{#if allByAuth && allByAuth.length > 0}
					{#each allByAuth as item}
						<div class="rta-dhiti rta-row">
							<div class="rta-column rowgap200">
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p>{item.meta.excerpt}</p>
								<div class="rta-column rowgap100">
									<p class="author" style="color: var(--onlyblack); margin: 0">
										{item.meta.category}
									</p>
									<div class="citetwo rta-row ycenter colgap200">
										{#each item.meta.tags as taggie}
											<div class="taggie">{taggie}</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="rta-image">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{:else if $archiveFilter === 'Dates'}
				{#if allByDate && allByDate.length > 0}
					{#each allByDate as item}
						<div class="rta-dhiti rta-row">
							<div class="rta-column rowgap200">
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p>{item.meta.excerpt}</p>
								<div class="rta-column p-top-16 rowgap100" style="width: 100%">
									<p class="author" style="color: var(--onlyblack); margin: 0">
										{item.meta.category} | <span />
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<div class="citetwo rta-row ycenter colgap200">
										{#each item.meta.tags as taggie}
											<div class="taggie">{taggie}</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="rta-image">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
				{#if $dateBand === 'All Posts'}
					<button class="genbutton" on:click={loadMore}>Load More</button>
				{/if}
			{:else if $archiveFilter === 'Tags'}
				{#if allBySingle && allBySingle.length > 0}
					{#each allBySingle as item}
						<div class="rta-dhiti rta-row">
							<div class="rta-column rowgap200">
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p>{item.meta.excerpt}</p>
								<div class="rta-column p-top-16 rowgap100">
									<p class="author" style="color: var(--onlyblack); margin: 0">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<div class="citetwo rta-row ycenter colgap200">
										{#each item.meta.tags as taggie}
											<div class="taggie">{taggie}</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="rta-image">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.topselection
	h5
		color: var(--contraster2)
		font-weight: bold
	@media screen and (max-width: 1023px)
		h5
			font-size: 16px

.outer-box
	@media screen and (min-width: 1024px)
		padding-left: 6vw
		padding-right: 6vw
		padding-top: 160px
		padding-bottom: 128px
		.rta-grid.grid2
			.postsbox
				row-gap: 64px
				.rta-dhiti
					column-gap: 48px
					height: 100%
					border-bottom: 1px solid var(--contraster)
					padding-bottom: 64px	
					.rta-column
						width: calc(60% - 16px)
					.rta-image
						width: calc(40% - 32px)
						height: 280px
		.sideguy
			position: sticky
			top: 240px
			height: 60vh
			overflow-y: scroll
	@media screen and (max-width: 1023px)
		padding-top: 120px
		padding-left: 4vw
		padding-right: 4vw
		min-height: 100vh
		.rta-grid.grid2
			.sideguy
				width: 100%
		.postsbox
			padding-top: 32px
			row-gap: 64px
		.toggler
			h6
				font-size: 18px

.blank-button
	&:hover
		p
			color: #fe4a49

.blank-button.active
	p
		color: var(--opposite)
		font-weight: bold

.topselection
	h6
		font-weight: 600
		font-size: 18px
	.blank-button
		h6
			color: var(--themer)
		&:hover
			h6
				color: #fe4a49
	.blank-button.activetype
		h6
			color: var(--opposite)
	@media screen and (max-width: 1023px)
		h6
			font-size: 18px

.rta-dhiti
	h5
		color: var(--opposite)
		font-weight: bold
		font-size: 32px
		&:hover
			a
				text-decoration: underline
	.author
		font-size: 14px
		font-weight: bold
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		row-gap: 24px
		h5
			font-size: 24px
		p
			font-size: 14px
			line-height: 1.4

.citetwo
	.taggie
		color: white
		background: #fe4a49
		font-size: 10px
		text-transform: uppercase
		font-weight: bold
		padding: 2px 4px

</style>
