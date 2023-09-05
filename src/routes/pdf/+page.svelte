<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import { slide } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	import {
		BOLEssentials,
		BOLLatest,
		BOLBodhas,
		BOLIKS,
		BOLROS,
		AryanIssue
	} from '$lib/utils/supapulls';
	import { breakOne, breakTwo, breakZero } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';

	let limit = 200;
	let ess: any;
	let all: any;
	let bodhs: any;
	let iks: any;
	let ros: any;
	let aryan: any;
	let isOpen = Array(7).fill(false);
	let expanded = false;
	let fake = false;
	isOpen[1] = true;

	$metaUrl = 'https://www.brhat.in/openlibrary';
	$metaTitle = 'Bṛhat Open Library';
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaType = 'webpage';

	function toggleExpanded() {
		expanded = !expanded;
	}

	function fauxfake() {
		fake = !fake;
	}

	function toggleOpen(index: number) {
		isOpen[index] = !isOpen[index];
		for (let i = 0; i < isOpen.length; i++) {
			if (i !== index && isOpen[i] === true) {
				isOpen[i] = false;
			}
		}
	}

	onMount(async () => {
		ess = await BOLEssentials(limit);
		all = await BOLLatest(limit);
		bodhs = await BOLBodhas(limit);
		iks = await BOLIKS(limit);
		ros = await BOLROS(limit);
		aryan = await AryanIssue();
	});
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	{#if $breakOne || $breakTwo}
		<div class="rta-column p-bot-16 bord-bot" style="align-items: stretch">
			<button class="blank-button expander" on:click={toggleExpanded}>
				{#if expanded}Close All{:else}Expand All{/if}
			</button>
		</div>
	{/if}
	{#if $breakZero || expanded}
		<nav
			class="sections bord-bot p-bot-32"
			in:slide={{ easing: quintOut }}
			out:slide={{ easing: quintIn }}
			on:click={toggleExpanded}
			on:keydown={fauxfake}
		>
			<button class="blank-button" on:click={() => toggleOpen(1)} class:selected={isOpen[1]}>
				All</button
			>
			<button class="blank-button" on:click={() => toggleOpen(2)} class:selected={isOpen[2]}>
				Essentials
			</button>
			<button class="blank-button" on:click={() => toggleOpen(3)} class:selected={isOpen[3]}>
				Bodhas
			</button>
			<button class="blank-button" on:click={() => toggleOpen(4)} class:selected={isOpen[4]}>
				IKS
			</button>
			<button class="blank-button" on:click={() => toggleOpen(5)} class:selected={isOpen[5]}>
				Scriptural
			</button>
			<button class="blank-button" on:click={() => toggleOpen(6)} class:selected={isOpen[6]}>
				Āryan Issue
			</button>
			<button class="blank-button" on:click={() => toggleOpen(7)} class:selected={isOpen[7]}>
				Discover
			</button>
		</nav>
	{/if}
	{#if isOpen[1]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if all && all.length > 0}
				{#each all as item}
					<div class="rta-column rowgap100 book">
						<small class="cat">{item.Type}</small>
						<h6 class="title">
							<a href="/openlibrary/books/{item.slug}">
								{item.Text}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{:else if isOpen[2]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if ess && ess.length > 0}
				{#each ess as item}
					<div class="rta-column rowgap100 book">
						<h6 class="title">
							<a href="/openlibrary/books/{item.slug}">
								{item.Text}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{:else if isOpen[3]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if bodhs && bodhs.length > 0}
				{#each bodhs as item}
					<div class="rta-column rowgap100 book">
						<h6 class="title">
							<a href="/openlibrary/books/{item.slug}">
								{item.Text}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{:else if isOpen[4]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if iks && iks.length > 0}
				{#each iks as item}
					<div class="rta-column rowgap100 book">
						<h6 class="title">
							<a href="/openlibrary/books/{item.slug}">
								{item.Text}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{:else if isOpen[5]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if ros && ros.length > 0}
				{#each ros as item}
					<div class="rta-column rowgap100 book">
						<h6 class="title">
							<a href="/openlibrary/books/{item.slug}">
								{item.Text}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{:else if isOpen[6]}
		<div class="rta-grid grid3 stay2 colgap600 p-top-32 bookgrid">
			{#if aryan && aryan.length > 0}
				{#each aryan as item}
					<div class="rta-column rowgap100 book">
						<small class="cat">{item.tag}</small>
						<h6 class="title">
							<a href={item.sourcelink} rel="noreferrer" target="_blank">
								{item.paper}
							</a>
						</h6>
						<p class="small">{item.author}</p>
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</Shell>
