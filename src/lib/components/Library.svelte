<script lang="ts">
	import { onMount } from 'svelte';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { slide } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';
	import {
		BOLEssentials,
		BOLBodhas,
		BOLIKS,
		BOLROS,
		BOLLatest,
		AryanIssue
	} from '$lib/utils/supapulls';

	let limit = 200;
	let ess: any;
	let all: any;
	let bodhs: any;
	let iks: any;
	let ros: any;
	let aryan: any;
	let isOpen = Array(7).fill(false);
	isOpen[1] = true;
	let expanded = false;
	let fake = false;

	function toggleOpen(index: number) {
		isOpen[index] = !isOpen[index];
		for (let i = 0; i < isOpen.length; i++) {
			if (i !== index && isOpen[i] === true) {
				isOpen[i] = false;
			}
		}
	}

	function toggleExpanded() {
		expanded = !expanded;
	}

	function fauxfake() {
		fake = !fake;
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

<section class="library">
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
			<!--
			<button class="blank-button" on:click={() => toggleOpen(7)} class:selected={isOpen[7]}>
				Discover
			</button>
			-->
			<!--
			<button class="blank-button" on:click={() => toggleOpen(0)} class:selected={isOpen[0]}>
				Search
			</button>
			-->
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
	{:else if isOpen[7]}
		<div class="rta-column rowgap400 p-top-32">
			<h5 class="title p-bot-16 bord-bot">
				<a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a>
			</h5>
			<h5 class="title p-bot-16 bord-bot">
				<a href="/openlibrary/discover/puranaindex">Purana Encyclopaedia</a>
			</h5>
			<h5 class="title p-bot-16 bord-bot">
				<a href="/openlibrary/discover/rigveda">Ṛgveda Saṃhitā</a>
			</h5>
			<h5 class="title p-bot-16 bord-bot">Sanskrit Dictionary</h5>
			<h5 class="title p-bot-16 bord-bot">
				<a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a>
			</h5>
			<h5 class="title p-bot-16 bord-bot">
				<a href="/openlibrary/discover/concordance">Vedic Concordance</a>
			</h5>
		</div>
	{:else if isOpen[0]}
		<div class="rta-column searchmodal p-top-32">
			<form class="searchform">
				<input type="text" placeholder="enter search term..." />
			</form>
		</div>
	{/if}
</section>
