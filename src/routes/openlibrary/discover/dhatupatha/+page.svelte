<script lang="ts">
	import { onMount } from 'svelte';
	import { dbDhatus } from '$lib/utils/synaptic';
	import type { DhatuSearch } from '$lib/types/BOLTypes';

	let dhatus: any;
	let start = 0;
	let end = 9;

	function nextSet() {
		start += 10;
		end += 10;
	}

	function prevSet() {
		start -= 10;
		end -= 10;
	}

	$: if (start || end) {
		(async () => {
			dhatus = await dbDhatus(start, end);
		})();
	}

	onMount(async () => {
		dhatus = await dbDhatus(start, end);
	});
</script>

<div class="rta-column official">
	<div class="p-bot-32">
		<p class="p-bot-16">
			The Dhātupāṭha is a key text associated with Pāṇini's Aṣṭadhyāyī. It is a lexicon of verbal
			roots- dhātus- with their properties and meanings. Pāṇini lists around ~2300 dhātus, and
			organizes them into 10 classes of 'present tense'. These dhātus are listed here in the order
			they occur. Click on any to navigate to its respective page. You could also use the search
			bar.
		</p>
		<small style="color: var(--opposite)">
			All Dhātupāṭha data is credited to Ashtadhyayi.com, through their repository at <a
				href="https://github.com/ashtadhyayi"
				target="_blank"
				rel="noreferrer">Github.</a
			>
		</small>
	</div>
	<div class="p-top-32 bord-top rta-column rowgap200">
		{#if dhatus && dhatus.length > 0}
			{#each dhatus as item}
				<div class="rta-column">
					<h6 class="hindiadobe serif">
						<a href="/openlibrary/discover/dhatupatha/{item.id}">
							{item.dhatu}
						</a>
					</h6>
				</div>
			{/each}
		{/if}
		<div class="rta-row colgap100 bord-top m-top-16 p-top-16">
			{#if start >= 9}
				<button class="newbutton" on:click={prevSet}>Previous</button>
			{/if}
			<button class="newbutton" on:click={nextSet}>Next</button>
		</div>
	</div>
</div>

<style lang="sass">

small
	a
		color: #fe4a49

h6
	&:hover
		a
			color: #fe4a49

.official
	@media screen and (min-width: 1024px)
		padding-right: 256px
		p
			line-height: 1.5
		h6
			font-weight: 400

</style>
