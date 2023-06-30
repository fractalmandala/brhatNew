<script lang="ts">
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Head from '$lib/components/HeadComponent.svelte';
	let height: number;

	$: if ($breakZero || $breakOne) {
		height = 720;
	} else {
		height = 600;
	}

	export let data;

	$metaUrl = `https://www.brhat.in/pdf/${data.slug}`;
	$metaTitle = data.name;
	$metaDescription = '';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
	$metaType = 'webpage';
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class="bookpage rta-column p-bot-64"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<h3 class="p-top-16 outer-box limit ta-c">
		{data.name}
	</h3>
	<div class="rta-column carrier">
		<iframe title={data.name} src={data.file} width="100%" {height} allow="autoplay" />
	</div>
</div>

<style lang="sass">

.bookpage.leveltwo
	padding: 0
	align-items: stretch

.carrier
	border-radius: 8px
	padding: 16px
	background: var(--opposite)
	iframe
		border-radius: 8px
		border: none
	


</style>
