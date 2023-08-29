<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/DhitiHeader.svelte';
	import Shell from '$lib/components/PageShell.svelte';
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

<Header />
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 ytop topper">
		<h3 class="bord-bot p-bot-16">Posts by {data.author}</h3>
		<SocialShare --socialcolor="#5A3261" />
		{#if allposts && allposts.length > 0}
			{#each allposts as item}
				<div class="rta-row colgap300 rowgap200 bord-bot p-bot-32">
					<div class="rta-image w32">
						<img src={item.meta.image} alt={item.meta.title} />
					</div>
					<div class="rta-column w64">
						<div class="rta-row colgap200">
							{#each item.meta.tags as tag}
								<cite>{tag}</cite>
							{/each}
						</div>
						<h5 class="title p-bot-8 p-top-8"><a href={item.path}>{item.meta.title}</a></h5>
						<p class="mid soft">{item.meta.excerpt}</p>
						<p class="small p-top-8">
							{item.meta.author}
							{#if item.meta.authortwo && item.meta.authortwo.length > 0}
								and {item.meta.authortwo}{/if}
						</p>
					</div>
				</div>
			{/each}
		{/if}
	</section>
</Shell>

<style lang="sass">

.topper
	@media screen and (min-width: 769px)
		padding-top: 144px
	@media screen and (max-width: 768px)
		padding-top: 96px

</style>
