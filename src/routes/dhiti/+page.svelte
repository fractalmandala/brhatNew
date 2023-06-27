<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import {
		latestDhitiFour,
		allFeaturedPosts,
		filterChosen,
		authorfiltered,
		allBodhas,
		allCandP,
		allIKS,
		allDharmaToday
	} from '$lib/utils/localpulls';
	import { themeMode } from '$lib/stores/globalstores';
	import CompDrawer from '$lib/ridunits/CompDrawer.svelte';
	import Button from '$lib/ridunits/CompButton.svelte';
	import RIDDropdown from '$lib/ridunits/RIDDropdown.svelte';
	import SocialShare from '$lib/ridunits/RIDSocialShare.svelte';
	import autoAnimate from '@formkit/auto-animate';
	let nextthreeposts: string | any[];
	let featuredposts: string | any[];
	let filteredposts: string | any[];
	let category: string = '';
	let fake: boolean = false;
	let writer: string = '';
	let authorposts: string | any[];
	let showWriters = false;
	let searchFocus = false;
	let showDefault = true;
	let categoryItems = Array(4).fill(false);
	let bodhas: any;
	let caps: any;
	let knows: any;
	let dharmas: any;
	let openDrawer = false;
	let limit = 6;
	let openCat = false;

	function toggleCatOpen() {
		openCat = !openCat;
	}

	$metaUrl = '/dhiti';
	$metaTitle = 'Schools of Thought';
	$metaDescription = 'At Bṛhat Draṣṭā';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp';
	$metaType = 'webpage';

	$: anyCategoryOpen = categoryItems.some((item) => item);

	$: if (writer === '') {
		showWriters = false;
	} else {
		showWriters = true;
	}

	$: if (anyCategoryOpen === true) {
		showDefault = false;
	} else {
		showDefault = true;
	}

	function toggleCategory(index: number) {
		categoryItems[index] = !categoryItems[index];
		for (let i = 0; i < categoryItems.length; i++) {
			if (i !== index && categoryItems[i] === true) {
				categoryItems[i] = false;
			}
		}
	}

	function offWriters() {
		writer = '';
	}

	function fauxfake() {
		fake = !fake;
	}

	function setAuthor(newAuthor: string) {
		writer = newAuthor;
	}

	$: if (writer) {
		(async () => {
			authorposts = await authorfiltered(writer);
		})();
	}

	function handleMore() {
		limit += 6;
	}

	$: if (limit) {
		(async () => {
			nextthreeposts = await latestDhitiFour(limit);
		})();
	}

	onMount(async () => {
		nextthreeposts = await latestDhitiFour(limit);
		featuredposts = await allFeaturedPosts();
		filteredposts = await filterChosen(category);
		authorposts = await authorfiltered(writer);
		bodhas = await allBodhas();
		caps = await allCandP();
		knows = await allIKS();
		dharmas = await allDharmaToday();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	id="top-panel"
	class="rta-grid grid2 right outer-box minH"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-column bord-right-d main-area">
		<div id="topsticky" class="rta-column bord-bot p-bot-32 p-top-64">
			<div class="rta-row between colgap100 ytop top-row">
				<div class="strip rta-row colgap100 rowgap50 ct">
					<div class="rta-row">
						<button class="blank-button iconfilter" on:click={toggleCatOpen}>
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_2422_105)">
									<path
										d="M9.57895 13.8947L2 2.52632V0H22.2105V2.52632L14.6316 13.8947V21.4737L9.57895 24V13.8947Z"
										fill="#272727"
									/>
								</g>
								<defs>
									<clipPath id="clip0_2422_105">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(0.246094 0.475586)"
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
						{#if showDefault}
							<small><strong>Filter Categories:</strong></small>
						{:else}
							<small><strong>Deselect to Return</strong></small>
						{/if}
					</div>
					{#if $breakZero || $breakOne || openCat}
						<div
							class="categories rta-row row-col colgap100"
							use:autoAnimate
							on:click={toggleCatOpen}
							on:keydown={fauxfake}
						>
							<button
								class="drawer-item"
								class:light={$themeMode}
								class:dark={!$themeMode}
								on:click={() => toggleCategory(1)}
								class:selected={categoryItems[1]}>Two Bodhas</button
							>
							<button
								class="drawer-item"
								class:light={$themeMode}
								class:dark={!$themeMode}
								on:click={() => toggleCategory(2)}
								class:selected={categoryItems[2]}>Dharma Today</button
							>
							<button
								class="drawer-item"
								class:light={$themeMode}
								class:dark={!$themeMode}
								on:click={() => toggleCategory(3)}
								class:selected={categoryItems[3]}>IKS</button
							>
							<button
								class="drawer-item"
								class:light={$themeMode}
								class:dark={!$themeMode}
								on:click={() => toggleCategory(4)}
								class:selected={categoryItems[4]}
								>Culture and Policy
							</button>
						</div>
					{/if}
				</div>
				<div class="rta-column rowgap50 wt">
					{#if !showWriters}
						<RIDDropdown --dropdownbackground="var(--dhiticolor)">
							<div slot="visible" class="rta-row filter">
								<small>Filter Writers</small>
								<div class="iconfilter">
									<svg
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_2422_105)">
											<path
												d="M9.57895 13.8947L2 2.52632V0H22.2105V2.52632L14.6316 13.8947V21.4737L9.57895 24V13.8947Z"
												fill="#272727"
											/>
										</g>
										<defs>
											<clipPath id="clip0_2422_105">
												<rect
													width="24"
													height="24"
													fill="white"
													transform="translate(0.246094 0.475586)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div slot="invisible" class="rta-column drops">
								<div
									class="authors {writer === 'Akshay Jha' ? 'written' : ''}"
									on:click={() => setAuthor('Akshay Jha')}
									on:keydown={fauxfake}
								>
									<p>Akshay Jha</p>
								</div>
								<div
									class="authors {writer === 'Amritanshu Pandey' ? 'written' : ''}"
									on:click={() => setAuthor('Amritanshu Pandey')}
									on:keydown={fauxfake}
								>
									<p>Amritanshu Pandey</p>
								</div>
								<div
									class="authors {writer === 'Anshuman Panda' ? 'written' : ''}"
									on:click={() => setAuthor('Anshuman Panda')}
									on:keydown={fauxfake}
								>
									<p>Anshuman Panda</p>
								</div>
								<div
									class="authors {writer === 'Anurag Shukla' ? 'written' : ''}"
									on:click={() => setAuthor('Anurag Shukla')}
									on:keydown={fauxfake}
								>
									<p>Anurag Shukla</p>
								</div>
								<div
									class="authors {writer === 'Kavita Krishna Meegama' ? 'written' : ''}"
									on:click={() => setAuthor('Kavita Krishna Meegama')}
									on:keydown={fauxfake}
								>
									<p>Kavita Krishna Meegama</p>
								</div>
								<div
									class="authors {writer === 'Nivedita Tiwari' ? 'written' : ''}"
									on:click={() => setAuthor('Nivedita Tiwari')}
									on:keydown={fauxfake}
								>
									<p>Nivedita Tiwari</p>
								</div>
								<div
									class="authors {writer === 'Pankaj Saxena' ? 'written' : ''}"
									on:click={() => setAuthor('Pankaj Saxena')}
									on:keydown={fauxfake}
								>
									<p>Pankaj Saxena</p>
								</div>
								<div
									class="authors {writer === 'Raghava Krishna' ? 'written' : ''}"
									on:click={() => setAuthor('Raghava Krishna')}
									on:keydown={fauxfake}
								>
									<p>Raghava Krishna</p>
								</div>
								<div
									class="authors {writer === 'Sai Priya Chodavarapu' ? 'written' : ''}"
									on:click={() => setAuthor('Sai Priya Chodavarapu')}
									on:keydown={fauxfake}
								>
									<p>Sai Priya Chodavarapu</p>
								</div>
								<div
									class="authors {writer === 'Sushant Gangoli' ? 'written' : ''}"
									on:click={() => setAuthor('Sushant Gangoli')}
									on:keydown={fauxfake}
								>
									<p>Sushant Gangoli</p>
								</div>
								<div class="spaced">
									<p><strong>Guests:</strong></p>
								</div>
								<div
									class="authors {writer === 'Shri Ramachandra Roddam' ? 'written' : ''}"
									on:click={() => setAuthor('Shri Ramachandra Roddam')}
									on:keydown={fauxfake}
								>
									<p>Shri Ramachandra Roddam</p>
								</div>
								<div
									class="authors {writer === 'Akshay Shankar' ? 'written' : ''}"
									on:click={() => setAuthor('Akshay Shankar')}
									on:keydown={fauxfake}
								>
									<p>Akshay Shankar</p>
								</div>
								<div
									class="authors {writer === 'Deepak Srinivasan' ? 'written' : ''}"
									on:click={() => setAuthor('Deepak Srinivasan')}
									on:keydown={fauxfake}
								>
									<p>Deepak Srinivasan</p>
								</div>
								<div
									class="authors {writer === 'Jash Dholani' ? 'written' : ''}"
									on:click={() => setAuthor('Jash Dholania')}
									on:keydown={fauxfake}
								>
									<p>Jash Dholani</p>
								</div>
								<div
									class="authors {writer === 'Kate Herse' ? 'written' : ''}"
									on:click={() => setAuthor('Kate Herse')}
									on:keydown={fauxfake}
								>
									<p>Kate Herse</p>
								</div>
								<div
									class="authors {writer === 'Ghora Angirasa' ? 'written' : ''}"
									on:click={() => setAuthor('Ghora Angirasa')}
									on:keydown={fauxfake}
								>
									<p>Ghora Angirasa</p>
								</div>
								<div
									class="authors {writer === 'Samyak Dixit' ? 'written' : ''}"
									on:click={() => setAuthor('Samyak Dixit')}
									on:keydown={fauxfake}
								>
									<p>Samyak Dixit</p>
								</div>
								<div
									class="authors {writer === 'Prabhav Paturi' ? 'written' : ''}"
									on:click={() => setAuthor('Prabhav Paturi')}
									on:keydown={fauxfake}
								>
									<p>Prabhav Paturi</p>
								</div>
							</div>
						</RIDDropdown>
					{:else}
						<small class="point" on:click={offWriters} on:keydown={fauxfake}>Clear Filter</small>
					{/if}
				</div>
			</div>
			<div class="rta-column bottom-row p-top-32">
				{#if showWriters}
					<em>Posts by</em>
					<h4 class="serif">{writer}</h4>
				{:else}
					{#if categoryItems[1]}
						<h4 class="serif">Svayambodha and Śatrubodha</h4>
					{/if}
					{#if categoryItems[2]}
						<h4 class="serif">Dharma Today</h4>
					{/if}
					{#if categoryItems[3]}
						<h4 class="serif">Indian Knowledge System</h4>
					{/if}
					{#if categoryItems[4]}
						<h4 class="serif">Culture and Policy</h4>
					{/if}
					{#if !anyCategoryOpen}
						<h3 class="serif black">Latest Posts</h3>
					{/if}
				{/if}
			</div>
		</div>
		<div class="rta-column p-top-64" use:autoAnimate>
			{#if showWriters}
				<div class="rta-column articlesarea">
					{#if authorposts && authorposts.length > 0}
						{#each authorposts as item, i}
							<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
								<div class="rta-column w70 rowgap200">
									<small class="citeone">{item.meta.category}</small>
									<h5 class="serif heading" class:light={$themeMode} class:dark={!$themeMode}>
										<a href={item.path}>{item.meta.title}</a>
									</h5>
									<p class="serif">{item.meta.excerpt}</p>
									<div class="rta-column p-top-16">
										<p class="author">
											{item.meta.author}
											{#if item.meta.authortwo && item.meta.authortwo.length > 0}
												<span> and {item.meta.authortwo}</span>
											{/if}
										</p>
										<cite class="citetwo">{item.meta.tags}</cite>
									</div>
								</div>
								<div class="rta-image rta-column ytop w32 height-24">
									<img src={item.meta.image} alt={item.meta.title} />
								</div>
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if showDefault}
				{#if nextthreeposts && nextthreeposts.length > 0}
					{#each nextthreeposts as item}
						<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
							<div class="rta-column w70 rowgap200">
								<small class="citeone">{item.meta.category}</small>
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p class="serif">{item.meta.excerpt}</p>
								<div class="rta-column p-top-16">
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<cite class="citetwo">{item.meta.tags}</cite>
								</div>
							</div>
							<div class="rta-image rta-column ytop w32 height-24">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
					<button class="blank-button m-top-32" on:click={handleMore}>
						<Button>Load More</Button>
					</button>
				{/if}
			{/if}
			{#if categoryItems[1]}
				{#if bodhas && bodhas.length > 0}
					{#each bodhas as item}
						<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
							<div class="rta-column w70 rowgap200">
								<small class="citeone">{item.meta.category}</small>
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p class="serif">{item.meta.excerpt}</p>
								<div class="rta-column p-top-16">
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<cite class="citetwo">{item.meta.tags}</cite>
								</div>
							</div>
							<div class="rta-image rta-column ytop w32 height-24">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[2]}
				{#if dharmas && dharmas.length > 0}
					{#each dharmas as item}
						<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
							<div class="rta-column w70 rowgap200">
								<small class="citeone">{item.meta.category}</small>
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p class="serif">{item.meta.excerpt}</p>
								<div class="rta-column p-top-16">
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<cite class="citetwo">{item.meta.tags}</cite>
								</div>
							</div>
							<div class="rta-image rta-column ytop w32 height-24">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[3]}
				{#if knows && knows.length > 0}
					{#each knows as item}
						<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
							<div class="rta-column w70 rowgap200">
								<small class="citeone">{item.meta.category}</small>
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p class="serif">{item.meta.excerpt}</p>
								<div class="rta-column p-top-16">
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<cite class="citetwo">{item.meta.tags}</cite>
								</div>
							</div>
							<div class="rta-image rta-column ytop w32 height-24">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{/if}
			{#if categoryItems[4]}
				{#if caps && caps.length > 0}
					{#each caps as item}
						<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
							<div class="rta-column w70 rowgap200">
								<small class="citeone">{item.meta.category}</small>
								<h5 class="heading" class:light={$themeMode} class:dark={!$themeMode}>
									<a href={item.path}>{item.meta.title}</a>
								</h5>
								<p class="serif">{item.meta.excerpt}</p>
								<div class="rta-column p-top-16">
									<p class="author">
										{item.meta.author}
										{#if item.meta.authortwo && item.meta.authortwo.length > 0}
											<span> and {item.meta.authortwo}</span>
										{/if}
									</p>
									<cite class="citetwo">{item.meta.tags}</cite>
								</div>
							</div>
							<div class="rta-image rta-column ytop w32 height-24">
								<img src={item.meta.image} alt={item.meta.title} />
							</div>
						</div>
					{/each}
				{/if}
			{/if}
		</div>
	</div>
	<div class="rta-column featured rowgap200 p-top-32">
		{#if !$breakTwo}
			<div class="rta-column introbox">
				<small class="serif is-black"><b>Dharma</b></small>
				<cite class="serif"
					>The vast pool of culture we draw from, working for its furtherance.</cite
				>
				<small class="serif is-black"><b>Policy</b></small>
				<cite class="serif">The instrument of activating Dharma, providing it with affordance.</cite
				>
				<small class="serif is-black"><b>Leadership</b></small>
				<cite class="serif"
					>The bearing forward and sustaining, that will take us to deliverance.</cite
				>
				<small class="serif is-black"
					><b>Dhīti - a blog ranging all three through essays, research pieces and commentary.</b
					></small
				>
			</div>
			<SocialShare --socialcolor="#5A3261" />
			<div class="rta-column"><div class="line" /></div>
		{/if}
		<h4 class="serif p-top-32 p-bot-16"><strong>Featured Posts:</strong></h4>
		{#if featuredposts && featuredposts.length > 0}
			{#each featuredposts as item}
				<div class="rta-column rowgap100 bord-bot p-bot-32 p-top-16">
					<h6 class="serif hover-purple"><a href={item.path}>{item.meta.title}</a></h6>
					<p class="cutheight serif tt-no">{item.meta.excerpt}</p>
					<div class="rta-column">
						<small class="is-purple">
							<strong>
								{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</strong>
						</small>
						<cite class="citetwo">{item.meta.tags}</cite>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.leveltwo
	.strip
		position: relative
		.categories
			position: absolute
			border-radius: 4px
			top: 18px
			left: 0


.top-row
	@media screen and (min-width: 1024px)
		.ct
			width: 85%
		.wt
			width: 18%
		

.authors, .spaced
	padding-right: 16px
	padding-left: 16px


.authors p, .spaced p
	color: white

.authors
	cursor: pointer
	&:hover
		background: white
		p
			color: var(--dhiticolor)

.spaced
	margin-top: 32px

.iconfilter svg
	height: 16px

.filter
	cursor: pointer
	&:hover
		svg path
			fill: var(--dhiticolor)

.is-purple
	color: var(--teal)

.hover-purple
	transition: 0.08s
	&:hover
		color: var(--dhiticolor)

.introbox
	cite
		line-height: 1.12
	small.is-black
		padding-top: 12px
		padding-bottom: 2px
		color: var(--opposite)

#top-panel
	@media screen and (min-width: 1024px)
		padding-left: 104px
		padding-right: 104px
		.main-area
			padding-right: 80px
		.featured
			padding-left: 80px
	@media screen and (max-width: 1023px)
		padding-top: 80px

.rta-dhiti
	.rta-image
		img
			border-radius: 4px

.rta-dhiti
	h5
		transition: 0.08s
		&:hover
			color: var(--dhiticolor)

.rta-dhiti
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		.w70, .w32
			width: 100%

.w70
	@media screen and (min-width: 1024px)
		width: 64%

.author
	position: relative
	padding-top: 16px
	padding-bottom: 0
	color: var(--opposite)
	&::after
		position: absolute
		top: 0
		left: 0
		content: ''
		height: 1px
		background: var(--borderline)
		width: 50%

small.citeone
	text-transform: uppercase
	font-size: 14px
	color: var(--teal)
	font-weight: bold
	@media screen and (min-width: 1024px)
		width: max-content
		text-align: center
	@media screen and (max-width: 1023px)
		font-size: 12px
		width: max-content


.drawer-item
	text-decoration: none
	transition: 0.08s
	@media screen and (min-width: 1024px)
		font-size: 12px
		padding: 2px 8px
		border-radius: 4px
		color: white
		text-transform: uppercase
		font-weight: bold
	@media screen and (max-width: 1023px)
		text-align: left
		border: none
		padding: 8px
		font-size: 16px

.light.drawer-item
	@media screen and (min-width: 1024px)
		background: #676767
		border: 2px solid #676767
		&:hover
			border: 2px solid var(--dhiticolor)
			background: white
			color: var(--dhiticolor)
	@media screen and (max-width: 1023px)
		background: var(--dhiticolor)
		color: #FFFFFF

.dark.drawer-item
	@media screen and (min-width: 1024px)
		background: #474747
		border: 2px solid #474747
		&:hover
			border: 2px solid var(--dhiticolor)
			background: #171717
			color: var(--dhiticolor)
	@media screen and (max-width: 1023px)
		background: var(--dhiticolor)
		color: #FFFFFF

.light.drawer-item.selected
	background: var(--dhiticolor)
	color: white
	border: 2px solid var(--dhiticolor)

.dark.drawer-item.selected
	background: var(--dhiticolor)
	color: white
	border: 2px solid var(--dhiticolor)

#top-panel
	@media screen and (min-width: 1024px)
		padding-top: 128px

.heading
	font-family: 'Adobe Devanagari', serif

h5.heading
	font-weight: bold
	font-size: 2rem
	line-height: 1.12

h5.heading.light
	color: #272727

h5.heading.dark
	color: white

</style>
