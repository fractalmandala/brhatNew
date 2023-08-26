<script lang="ts">
	import { onMount } from 'svelte';
	import { soaJanapadas } from '$lib/utils/supapulls';
	import Shell from '$lib/components/PageShell.svelte';
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

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
>
	<section class="rta-column">
		{#if places && places.length > 0}
			{#each places as item}
				<div class="fullscreenimage min100 rta-column">
					<img src={item.link} alt={item.name} />
				</div>
			{/each}
		{/if}
	</section>
	<div class="rta-column rowgap400 p-top-32 bord-top" id="nexter">
		<h5 class="ta-c title"><a href="/aryavarta/kashyapaslament">Next - Kaśyapa's Lament</a></h5>
	</div>
</Shell>

<style lang="sass">

.fullscreenimage
	justify-content: center
	border-bottom: 1px solid var(--contraster)
	img
		border-radius: 8px
	@media screen and (min-width: 769px)
		img
			border-radius: 16px

#nexter
	h5
		&:hover
			a
				color: #fe4a49

</style>
