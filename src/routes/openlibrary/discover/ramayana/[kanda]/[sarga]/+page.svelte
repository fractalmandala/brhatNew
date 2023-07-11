<script lang="ts">
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { page } from '$app/stores';
	import { versesofRamayana } from '$lib/utils/synaptic';
	import GenCard from '$lib/reader/GenCard.svelte';
	import ReaderNav from '$lib/reader/ReaderNav.svelte';
	let verseSarga: any;
	let currentKanda: any;
	let url: any;
	let start = 0;
	let end = 9;
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function isNext() {
		start += 10;
		end += 10;
	}

	function isPrev() {
		start -= 10;
		end -= 10;
	}

	$: if (start) {
		(async () => {
			verseSarga = await versesofRamayana(data.kanda, data.sarga, start, end);
		})();
	}

	$: currentKanda = data.kanda;
	$metaTitle = 'Vālmīki Rāmāyaṇa at Bṛhat Open Library';
	$metaDescription =
		'Explore Vālmīki Rāmāyaṇa at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/ramayana';

	onMount(async () => {
		url = $page.url.pathname;
		currentKanda = data.kanda;
		verseSarga = await versesofRamayana(data.kanda, data.sarga, start, end);
	});

	export let data;
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="rta-row colgap200 forlegend">
	<small><a href="/openlibrary/ramayana/{data.kanda}">Kāṇḍa {data.kanda}</a></small>
	<h3 class="hindiadobe p-bot-32 bord-bot">Sarga {data.sarga}</h3>
</div>
<div class="rta-column rowgap300 p-top-16 thekey">
	{#if verseSarga && verseSarga.length > 0}
		{#each verseSarga as item}
			<GenCard>
				<div slot="small">
					{item.sarga} - {item.verse}
				</div>
				<div slot="header5">
					<a href="/openlibrary/reconnect/sections/ramayana/{data.kanda}/{item.sarga}/{item.verse}">
						{item.devanagari}
					</a>
				</div>
				<div slot="header6">
					{item.iast}
				</div>
			</GenCard>
		{/each}
	{/if}
</div>
<ReaderNav>
	<button slot="prev" on:click={isPrev}>Prev</button>
	<button slot="next" on:click={isNext}>Next</button>
</ReaderNav>
