<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { allDharmaToday } from '$lib/utils/localpulls';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';

	let posts: any;

	$metaUrl = 'https://www.brhat.in/dhiti/category/dharmatoday';
	$metaTitle = 'Dharma Today | Dhīti at Bṛhat';
	$metaDescription =
		'Contemporary issues of culture, media events, books, cinema and more at our blog, Dhīti.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/dhiti.webp';
	$metaType = 'webpage';

	onMount(async () => {
		posts = await allDharmaToday(200);
	});
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
>
	<section class="rta-column rowgap400 ytop topper">
		<h3 class="bord-bot p-bot-16 p-top-16">Dharma Today</h3>
		{#if posts && posts.length > 0}
			<div class="rta-column rowgap400">
				{#each posts as item}
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
			</div>
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
