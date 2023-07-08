<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import {
		BOLEssentials,
		BOLBodhas,
		BOLIKS,
		BOLROS,
		BOLOthers,
		AryanTag
	} from '$lib/utils/supapulls';

	let isPDF = Array(6).fill(false);
	let essentials: string | any[];
	let bodhas: string | any[];
	let ikss: string | any[];
	let ross: string | any[];
	let others: string | any[];
	let aryans: string | any[];
	let selectedCategory: boolean[] = Array(5).fill(false);
	selectedCategory[1] = true;
	let tag: string = 'Core Material';
	let limit = 100;

	function togglePDF(index: number) {
		isPDF[index] = !isPDF[index];
		for (let i = 0; i < isPDF.length; i++) {
			if (i !== index && isPDF[i] === true) {
				isPDF[i] = false;
			}
		}
	}

	function toggleCategory(index: number) {
		selectedCategory[index] = !selectedCategory[index];
		for (let i = 0; i < selectedCategory.length; i++) {
			if (i !== index && selectedCategory[i] === true) {
				selectedCategory[i] = false;
			}
		}
	}

	function setTag(newTag: string) {
		tag = newTag;
	}

	$: if (tag) {
		(async () => {
			aryans = await AryanTag(tag);
		})();
	}

	onMount(async () => {
		essentials = await BOLEssentials(limit);
		bodhas = await BOLBodhas(limit);
		ikss = await BOLIKS(limit);
		ross = await BOLROS(limit);
		others = await BOLOthers();
		aryans = await AryanTag(tag);
	});
</script>

<div
	class="rta-column rowgap100 stickyboi"
	class:levelone={$breakOne}
	class:levelzero={$breakZero}
	class:leveltwo={$breakTwo}
>
	{#if $breakTwo}
		<slot name="closebutton" />
	{/if}
	<p class="authentic oppositer"><b>Discover</b></p>
	<p><a href="/openlibrary/discover/dhatupatha">Dhātupāṭhaḥ</a></p>
	<p><a href="/openlibrary/discover/puranaindex">Puranic Index</a></p>
	<p><a href="/openlibrary/discover/rigveda">Ṛgveda</a></p>
	<p><a href="/openlibrary/discover/ramayana">Vālmīki Rāmāyaṇa</a></p>
	<p><a href="/openlibrary/discover/concordance">Vedic Concordance</a></p>
	<p class="authentic oppositer p-top-16"><b>PDFs</b></p>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(1)} class:openbutton={isPDF[1]}
			><p>Essentials</p></button
		>
		{#if isPDF[1]}
			{#if essentials && essentials.length > 0}
				<div class="rta-column innermost rowgap100" transition:slide>
					{#each essentials as item}
						<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(2)} class:openbutton={isPDF[2]}
			><p>Two Bodhas</p></button
		>
		{#if isPDF[2]}
			{#if bodhas && bodhas.length > 0}
				<div class="rta-column innermost rowgap100" transition:slide>
					{#each bodhas as item}
						<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(3)} class:openbutton={isPDF[3]}
			><p>Indian Knowledge Systems</p></button
		>
		{#if isPDF[3]}
			{#if ikss && ikss.length > 0}
				<div class="rta-column innermost rowgap100" transition:slide>
					{#each ikss as item}
						<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(4)} class:openbutton={isPDF[4]}
			><p>Repository of Scripture</p></button
		>
		{#if isPDF[4]}
			{#if ross && ross.length > 0}
				<div class="rta-column innermost rowgap100" transition:slide>
					{#each ross as item}
						<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(5)} class:openbutton={isPDF[5]}
			><p>Others</p></button
		>
		{#if isPDF[5]}
			{#if others && others.length > 0}
				<div class="rta-column innermost rowgap100" transition:slide>
					{#each others as item}
						<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-column innerbox rowgap100">
		<button class="blank-button" on:click={() => togglePDF(6)} class:openbutton={isPDF[6]}
			><p>The Aryan Issue</p></button
		>
		{#if isPDF[6]}
			<div class="rta-column innermost rowgap100" transition:slide>
				<p>Core</p>
				<p>Indology</p>
				<p>Linguistics</p>
				<p>History</p>
				<p>Genetics</p>
				<p>Archaeology</p>
				<p>Chronology</p>
				<p>Philology</p>
				<p>Geology</p>
			</div>
		{/if}
	</div>
</div>

<style lang="sass">

.levelone.stickyboi, .levelzero.stickyboi
	position: sticky
	top: 128px
	align-items: flex-start

.leveltwo.stickyboi
	position: fixed
	top: 0
	left: 0
	height: 100vh
	overflow-y: scroll
	width: 100vw
	z-index: 3000
	background: var(--background)
	padding: 80px 32px
	

.blank-button
	text-align: left
	&:hover
		p
			color: var(--mand)

p
	&:hover
		a
			color: var(--mand)

.blank-button.openbutton
	p
		color: var(--opposite)

.innermost
	p
		font-size: 14px
		line-height: 1.1
		&:hover
			color: var(--mand)

</style>
