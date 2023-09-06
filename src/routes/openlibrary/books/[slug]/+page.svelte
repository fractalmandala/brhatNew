<script lang="ts">
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Library from '$lib/components/Library.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	let height: number;

	$: if ($breakZero || $breakOne) {
		height = 720;
	} else {
		height = 600;
	}

	export let data;

	$metaUrl = `https://www.brhat.in/openlibrary/books/${data.slug}`;
	$metaTitle = data.Text;
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaType = 'webpage';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
>
	<section class="rta-column rowgap200 p-bot-16 bord-bot xcenter m-bot-32">
		<h4 class="p-top-16 ta-c bord-top">
			{data.Text}
		</h4>
		<p class="ta-c soft">{data.author}</p>
		{#if data.Description && data.Description.length > 0}
			<p class="small soft">
				{data.Description}
			</p>
		{/if}
		<a href="/openlibrary">
			<button class="newbutton tt-u">Return</button>
		</a>
	</section>
	<section class="rta-column xcenter">
		<div class="carrier">
			<iframe title={data.Text} src={data.Extract} width="100%" {height} allow="autoplay" />
		</div>
	</section>
	<section class="rta-column">
		<Library />
	</section>
</Shell>

<style lang="sass">

.carrier
	border-radius: 8px
	padding: 16px
	background: var(--opposite)
	iframe
		border-radius: 8px
		border: none
	@media screen and (max-width: 768px)
		padding: 0
		width: 88%
	


</style>
