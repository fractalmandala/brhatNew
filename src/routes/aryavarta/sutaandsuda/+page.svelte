<script lang="ts">
	import { onMount } from 'svelte';
	import { soaChapter2 } from '$lib/utils/supapulls';
	import Head from '$lib/components/HeadComponent.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';

	let panels: any;

	$metaUrl = 'https://www.brhat.in/aryavarta/sutaandsuda';
	$metaTitle = `Sūta and Sudā Part 1 - Scrolls of Āryavarta`;
	$metaDescription =
		'Part 1 of the Battle of Ten Kings, explored through the eyes of a sūta who fought in it.';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/sutaandsuda/01.png';
	$metaType = 'webpage';

	onMount(async () => {
		panels = await soaChapter2();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
/>

{#if panels && panels.length > 0}
	{#each panels as item}
		<div class="rta-column min100">
			<img src={item.image} alt={item.newid} />
		</div>
	{/each}
{/if}
<div class="rta-column rowgap400 p-top-32 bord-top" id="nexter">
	<h4 class="ta-c"><a href="/aryavarta/places">Next - Nagara, Nadī, Janapada</a></h4>
</div>

<style lang="sass">

#nexter
	h4
		&:hover
			a
				color: #fe4a49

</style>
