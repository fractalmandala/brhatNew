<script lang="ts">
	import { onMount } from 'svelte';
	import { soaJanapadas } from '$lib/utils/supapulls';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

	let places: any;
	$metaTitle = 'Nagara, Nadi and Janapadas at Scrolls of Āryavarta';
	$metaDescription =
		'Travel through time and space to the great lands and cities of ancient Āryavarta.';
	$metaUrl = 'https://www.brhat.in/aryavarta/places';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/janapadas/00.webp';

	onMount(async () => {
		places = await soaJanapadas();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="rta-column">
	{#if places && places.length > 0}
		{#each places as item}
			<div class="fullscreenimage">
				<img src={item.link} alt={item.name} />
			</div>
		{/each}
	{/if}
</div>
<div class="rta-column rowgap400 p-top-32 bord-top" id="nexter">
	<h4 class="ta-c"><a href="/aryavarta/kashyapaslament">Next - Kaśyapa's Lament</a></h4>
</div>

<style lang="sass">

#nexter
	h4
		&:hover
			a
				color: #fe4a49

</style>
