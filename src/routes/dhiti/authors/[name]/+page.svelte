<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { authorfiltered, authorGuest } from '$lib/utils/localpulls';
	import { breakZero, breakOne, breakTwo, themeMode } from '$lib/stores/globalstores';
	import SocialShare from '$lib/ridunits/RIDSocialShare.svelte';
	import { allAuths } from '$lib/utils/supapulls';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		authorName
	} from '$lib/stores/metastores';
	export let data;
	let allposts: any;
	let allauthor: any;
	$metaUrl = $page.url.pathname;
	$metaTitle = 'Author Posts at Dhīti';
	$metaDescription = 'All writings by ' + data.author;
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/dhiti.webp';
	$metaType = 'webpage';
	$authorName = data.author;

	$: if ($authorName) {
		$authorName = data.author;
		if ($authorName === 'Guest') {
			(async () => {
				allposts = await authorGuest();
			})();
		} else {
			(async () => {
				allposts = await authorfiltered($authorName);
			})();
		}
	}

	onMount(async () => {
		if ($authorName === 'Guest') {
			allposts = await authorGuest();
		} else {
			allposts = await authorfiltered($authorName);
		}
		allauthor = await allAuths();
	});
</script>

<div
	id="top-panel"
	class="rta-grid grid2 right outer-box minH"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="bord-right-d main-area">
		<div class="rta-row p-top-64 bord-bot p-bot-32 ycenter between">
			<h3 class="serif black">Posts by {data.author}</h3>
			<SocialShare --socialcolor="#5A3261" />
		</div>
		{#if allposts && allposts.length > 0}
			{#each allposts as item}
				<div class="rta-dhiti rta-row rowgap300 ytop between bord-bot p-bot-32 p-top-32">
					<div class="rta-column w70 rowgap200">
						<small class="citeone">{item.meta.category}</small>
						<h4 class="serif heading" class:light={$themeMode} class:dark={!$themeMode}>
							<a href={item.path}>{item.meta.title}</a>
						</h4>
						<p class="serif">{item.meta.excerpt}</p>
						<div class="rta-column p-top-16">
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
	<div class="featured rowgap200 p-top-32">
		<h4 class="serif p-top-32 p-bot-16"><strong>Other Authors:</strong></h4>
		{#if allauthor && allauthor.length > 0}
			{#each allauthor as item}
				{#if item.author !== $authorName}
					<p class="serif">
						<a href="/dhiti/authors/{item.name}">
							{item.author}
						</a>
					</p>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">


h3.serif.black
	line-height: 1
	@media screen and (max-width: 768px)
		padding-bottom: 8px	

.featured
	display: flex
	flex-direction: column
	justify-content: flex-start
	height: 100%

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
	h4
		transition: 0.08s
		line-height: 1
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


#top-panel
	@media screen and (min-width: 1024px)
		padding-top: 128px

.heading
	font-family: 'Adobe Devanagari', serif



</style>
