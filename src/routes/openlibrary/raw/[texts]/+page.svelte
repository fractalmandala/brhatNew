<script lang="ts">
	import { onMount } from 'svelte';
	import Sanscript from '@indic-transliteration/sanscript';
	import { marked } from 'marked';
	import Head from '$lib/components/HeadComponent.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		fontSize
	} from '$lib/stores/metastores';
	import PageProgress from '$lib/components/PageProgress.svelte';
	export let data;
	let preparsed: any;
	let converted: any;
	let texta: any;
	let deva: any;
	let att = false;
	let ist = true;
	let atttext: any;
	let ref: HTMLElement | null = null;

	$metaUrl = `https://www.brhat.in/openlibrary/raw/${data.slug}`;
	$metaTitle = data.name + 'at Bṛhat Open Library';
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';

	function toggleLang() {
		ist = !ist;
	}

	function toggleAtt() {
		att = !att;
	}

	onMount(async () => {
		preparsed = data.content.replace(/\//g, '<br>');
		converted = marked.parse(preparsed);
		atttext = marked.parse(data.attribution);
		texta = Sanscript.t(data.content, 'iast', 'devanagari');
		deva = texta.replace(/।/g, '<br>');
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<PageProgress --thispagebackground="#fe4a49" --thispageheight="4px" {ref} />

<div class="rta-column outer-box limit boltext">
	<div class="rta-row colgap200">
		<div class="islabel">{data.type}</div>
		<div class="disclaimer">
			RAW TEXT - taken from <a
				href="https://gretil.sub.uni-goettingen.de/gretil.html"
				target="_blank"
				rel="noreferrer">GRETIL</a
			> as is, and unformatted.
		</div>
	</div>
	<h3>{data.name}</h3>
	<div class="rta-row colgap200">
		<button class="genbutton attributton" on:click={toggleAtt}>GRETIL Attributions</button>
		{#if ist}
			<button class="genbutton" on:click={toggleLang}>View in Devanāgarī</button>
		{:else}
			<button class="genbutton" on:click={toggleLang}>View in IAST</button>
		{/if}
	</div>
	<div class="attribution" class:openatt={att}>
		<pre>
			{@html atttext}
		</pre>
	</div>
	<div class="boltexts glass-top p-top-64" class:attopen={att} bind:this={ref}>
		{#if ist}
			<pre>
				{@html converted}
			</pre>
		{:else}
			<pre class="bolhindideva">
				{@html deva}
			</pre>
		{/if}
	</div>
</div>

<style lang="sass">

.limit
	padding-top: 128px
	h3
		color: var(--opposite)
		margin-bottom: 12px
	.islabel
		color: #FFFFFF
		background: #fe4a49
		font-size: 12px
		text-transform: uppercase
		padding: 2px 6px
		border-radius: 2px
		max-width: 100%
		width: max-content
		margin-bottom: 12px
	.disclaimer
		color: var(--themer)
		font-size: 12px
		a
			color: #fe4a49
	.genbutton
		margin-bottom: 32px

.boltexts
	display: flex
	flex-direction: column
	align-items: center

</style>
