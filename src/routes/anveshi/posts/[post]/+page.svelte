<script lang="ts">
	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import Shell from '$lib/components/PageShell.svelte';
	export let data;

	$metaTitle = 'Bṛhat Anveṣī Travel Diaries';
	$metaDescription =
		'Bṛhat Anveṣī is our culture experience and discovery travel program, through curated and guided temple tours throughout India.';
	$metaUrl = $page.url.pathname;
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/brhatanveshi.webp';
	$metaType = 'webpage';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap200 p-top-128 xcenter">
		<h4 class="ta-c contains-text p-bot-32 bord-bot">{data.title}</h4>
		<p class="mid soft">by {data.author}</p>
		<div class="contains-text p-top-32 rta-column rowgap300 p-bot-32 bord-bot m-bot-16">
			<svelte:component this={data.content} />
		</div>
		<a href="/anveshi">
			<button class="newbutton big">Return to Anveṣī</button>
		</a>
	</section>
</Shell>
