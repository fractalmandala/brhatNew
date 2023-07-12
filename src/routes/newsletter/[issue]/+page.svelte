<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		newsFilter
	} from '$lib/stores/metastores';
	import Head from '$lib/components/HeadComponent.svelte';
	import {
		newsletterItems,
		newsletterIssues,
		newsletterVideos,
		filteredNews
	} from '$lib/utils/supapulls';
	import { periodicDhiti } from '$lib/utils/localpulls';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css/core';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import supabase from '$lib/utils/db';
	export let data;

	let issueselector = data.issueData.issueno;
	let newsitems: any;
	let newsissues: any;
	let newsvideos: any;
	let submodal = false;
	let passCheck = true;
	let fake = false;

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let themessage = '';
	let recentDhiti: any;
	let recentDhiti2: any;
	let expandedMenu = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleExpanded() {
		expandedMenu = !expandedMenu;
	}

	function setFilter(name: string) {
		$newsFilter = name;
	}

	$: if ($newsFilter) {
		(async () => {
			newsitems = await filteredNews($newsFilter);
		})();
	}

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat Fortnightly Newsletter Issue No.' + data.issueData.issueno;
	$metaDescription =
		'A fortnightly dispatch updating you on latest actions, events, launches and more at the Culture Engine.';
	$metaUrl = `https://www.brhat.in/newsletter/${data.issueData.issueno}`;
	$metaImage = data.issueData.image;

	onMount(async () => {
		newsissues = await newsletterIssues();
		newsitems = await filteredNews($newsFilter);
		recentDhiti = await periodicDhiti('July, 2023');
		recentDhiti2 = await periodicDhiti('June, 2023');
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class="mainletter"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="letterstrip ta-c bord-bot p-bot-16">
		<h4>Bṛhatadya {data.issueData.header}</h4>
		<small>{data.issueData.datefrom} | {data.issueData.dateto}</small>
	</div>
	<div class="filterstrip colgap100">
		{#if !$breakTwo || expandedMenu}
			<div class="stripinsidestrip" on:click={toggleExpanded} on:keydown={fauxfake}>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Featured'}
					on:click={() => setFilter('Featured')}
				>
					<p>Featured</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Bṛhat Draṣṭā'}
					on:click={() => setFilter('Bṛhat Draṣṭā')}
				>
					<p>Draṣṭā</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Bṛhat Anveṣī'}
					on:click={() => setFilter('Bṛhat Anveṣī')}
				>
					<p>Anveṣī</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Dhīti'}
					on:click={() => setFilter('Dhīti')}
				>
					<p>Dhīti</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Events and Actions'}
					on:click={() => setFilter('Events and Actions')}
				>
					<p>Events</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'New Launch'}
					on:click={() => setFilter('New Launch')}
				>
					<p>New</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'IKS'}
					on:click={() => setFilter('IKS')}
				>
					<p>IKS</p>
				</button>
				<button
					class="blank-button"
					class:activated={$newsFilter === 'Video'}
					on:click={() => setFilter('Video')}
				>
					<p>Video</p>
				</button>
			</div>
		{/if}
		{#if $breakTwo}
			<button class="blank-button onbreak m-bot-8" on:click={toggleExpanded}>
				<p>{$newsFilter}</p>
			</button>
			<small class="ta-c">Click to Filter Updates</small>
		{/if}
	</div>
	<div class="main colgap500 rowgap600" class:outer={$newsFilter === 'Featured'}>
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
								<h3>{item.header}</h3>
								<pre>{item.content}</pre>
								<a href={item.link} target="_blank" rel="noreferrer"
									><button class="newbutton">See More</button></a
								>
							{:else if $newsFilter === 'Video'}
								<h6>{item.header}</h6>
							{:else}
								<h6>{item.header}</h6>
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
	</div>
	<div class="rta-column glass-top p-top-32 ta-c rowgap200 outer-box">
		<p style="font-size: 14px">
			"Adya," meaning 'today, this day, now, at present', combines with Bṛhat to denote 'Bṛhat
			Today,' or 'Bṛhat Now'- a fair name for a periodic newsletter that updates recent events and
			activities at Bṛhat.
		</p>
		<p style="font-size: 14px">
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
	</div>
</div>

<style lang="sass">

.levelzero
	.stripinsidestrip
		display: flex
		flex-direction: row
		align-items: center
		column-gap: 24px

.levelone
	.stripinsidestrip
		display: flex
		flex-direction: row
		align-items: center
		column-gap: 16px

.leveltwo
	.stripinsidestrip
		display: flex
		flex-direction: column
		align-items: center
		row-gap: 12px

.dhitistuff
	row-gap: 4px
	padding-bottom: 12px
	border-bottom: 1px solid var(--contraster)
	.rta-row
		column-gap: 12px
	small
		color: var(--opposite)
	cite
		color: var(--onlyblack)
		padding: 0
		margin: 0
	margin-bottom: 16px

.leveltwo
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

.levelone, .levelzero
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
				font-weight: bold
				color: var(--onlyblack)
				&:hover
					color: #fe4a49
		.blank-button.activated
			p
				font-weight: bold
				color: var(--opposite)

.leveltwo
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
			top: 72px
			left: 0
			width: 100%
			padding-bottom: 32px
			border-bottom: 1px solid var(--contraster)
			padding-top: 16px
			.blank-button
				p
					font-size: 24px


.dark
	.stripinsidestrip
		background: #171717


.light
	.stripinsidestrip
		background: #FFFFFF

.mainletter
	min-height: 100vh
	display: flex
	flex-direction: column

.levelzero.mainletter, .levelone.mainletter
	padding-left: 32px
	padding-right: 32px
	padding-top: 120px
	padding-bottom: 96px
	.letterstrip
		width: 100%
	.main
		padding-top: 64px
		padding-left: 280px
		padding-right: 280px
	.main.outer
		padding-left: 128px
		padding-right: 128px
	.body
		h3
			font-size: 48px
		h6
			&:hover
				a
					text-decoration: underline


.leveltwo.mainletter
	padding-top: 80px
	.letterstrip
		h4
			font-size: 20px
		small
			font-size: 10px
	pre
		font-size: 14px

.levelzero, .levelone
	.singleitem
		display: flex
		flex-direction: row
		width: 100%
		margin-bottom: 64px
		.rta-image
			width: 32%
			height: 280px
			img
				object-fit: cover
				width: 100%
		.body
			width: 64%
			padding-left: 32px
	.singleitem.typevideo
		.rta-image
			width: 64%
		.body
			width: 32%
			padding-left: 24px

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "main"
	.main
		min-height: 100vh
		padding-top: 0
		padding-left: 24px
		padding-right: 24px
	
	
.mainletter
	h3
		color: var(--opposite)

.dark
	.singleitem
		background: #171717

.light
	.singleitem
		background: white
	
.leveltwo
	.singleitem
		display: flex
		flex-direction: column
		border-bottom: 1px solid var(--forline)
		padding-bottom: 24px
		.rta-image
			margin-bottom: 16px
		.rta-row
			padding-top: 16px
			pre
				margin-top: 0
				padding-top: 0
		img
			object-fit: cover
			height: 100%
			height: 160px
		h3
			font-size: 32px
		h6
			font-size: 24px
		.dhitistuff
			small
				background: #fe4a49
				color: white
				font-size: 12px
				font-weight: bold
				padding: 2px 4px
				width: max-content

.singleitem
	pre
		line-height: 1.4

.levelzero
	.singleitem.typesecond
		display: flex
		flex-direction: row
		width: 100%
		.rta-image
			width: 40%
			img
				object-fit: cover
				width: 100%
		.body
			width: 56%
			padding-left: 48px

</style>
