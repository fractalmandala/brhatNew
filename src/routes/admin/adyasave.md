---
title: Adyasave
---

```html
<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Head from '$lib/components/HeadComponent.svelte';
	import { newsletterItems, newsletterIssues, newsletterVideos } from '$lib/utils/supapulls';
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

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let themessage = '';

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat Fortnightly Newsletter Issue No.' + data.issueData.issueno;
	$metaDescription =
		'A fortnightly dispatch updating you on latest actions, events, launches and more at the Culture Engine.';
	$metaUrl = `https://www.brhat.in/newsletter/${data.issueData.issueno}`;
	$metaImage = data.issueData.image;

	onMount(async () => {
		newsitems = await newsletterItems(issueselector);
		newsissues = await newsletterIssues();
		newsvideos = await newsletterVideos(issueselector);
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
	<div class="main">
		{#if data.user !== 'none'}
			<div class="rta-column itemarea outer-box">
				{#if newsitems && newsitems.length > 0}
					{#each newsitems as item}
						{#if item.tag === 'Featured'}
							<div class="rta-row row-col-rev rowgap300 featured between p-bot-64">
								<div class="rta-column w64 rowgap200">
									<div class="feat-tag">{item.tag}</div>
									<div class="feat-head p-bot-16"><h1>{item.header}</h1></div>
									<div class="feat-text"><pre>{item.content}</pre></div>
									<a href={item.link} target="_blank" rel="noreferrer"
										><button class="newbutton big">Read Now</button></a
									>
								</div>
								<div class="rta-image w32">
									<img src={item.image} alt="featuredhero" />
								</div>
							</div>
						{:else}
							<div class="singleitem p-top-64">
								{#if item.tag}
									<div class="tagger" style="background: {item.color}">{item.tag}</div>
								{/if}
								<h3 class="p-bot-8">{item.header}</h3>
								<div class="rta-row stay colgap300 bord-top m-top-16 p-top-16">
									<div class="rta-image w32">
										<img src={item.image} alt="heroimage" />
									</div>
									<div class="rta-column w64">
										<pre>
													{item.content}
												</pre>
										{#if item.link}
											<a href={item.link} target="_blank" rel="noreferrer">
												<button class="newbutton big"> Visit </button>
											</a>
										{/if}
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</div>
			<div class="outer-box glass-top p-top-32">
				<h3 class="authentic p-bot-8 bord-bot">Video Highlights</h3>
				{#if newsvideos && newsvideos.length > 0}
					<div class="rta-grid grid3 colgap300 rowgap600 p-top-32">
						{#each newsvideos as item}
							<div class="rta-column rowgap100">
								<Youtuber youTubeId={item.content} />
								<small>
									<a href={item.link} target="_blank" rel="noreferrer">
										{item.header}
									</a>
								</small>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style lang="sass">

.tagger
	text-transform: uppercase
	font-size: 12px
	color: white
	width: max-content
	max-width: 100%
	padding: 2px 6px
	margin-bottom: 12px


.mainletter
	min-height: 100vh
	display: flex
	flex-direction: column

.levelzero.mainletter, .levelone.mainletter
	padding-left: 32px
	padding-right: 32px
	.main
		min-height: 100vh
		padding-top: 280px
		padding-bottom: 96px
		.featured
			width: 100%
			.rta-image
				img
					object-fit: cover
					width: 100%
			.feat-head
				border-bottom: 1px solid #e7e7e7
			.feat-tag
				font-size: 16px
				padding: 4px 8px
				width: max-content
				max-width: 100%
			h1
				font-size: 56px

.leveltwo.mainletter
	.feat-tag
		font-size: 14px
		padding: 4px 6px

.feat-tag
	background: #fe4a49
	color: white
	text-transform: uppercase
	width: max-content
	max-width: 100%


.leveltwo.mainletter
	h1
		font-size: 40px
	pre
		font-size: 14px

.levelzero, .levelone
	.singleitem
		.rta-row
			border-top: 1px solid var(--forline)
		.rta-image
			min-height: 200px
			height: 280px
			img
				min-height: 200px
				object-fit: cover
				height: 100%

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "main"
	.main
		min-height: 100vh
		padding-top: 160px
		padding-left: 0
		padding-right: 0
	
	
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
		border-bottom: 1px solid var(--forline)
		padding-bottom: 24px
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

.singleitem
	pre
		line-height: 1.4
		font-size: 16px

</style>
```