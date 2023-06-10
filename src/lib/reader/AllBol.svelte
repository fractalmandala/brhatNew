<script lang="ts">
	import supabase from '$lib/utils/db';
	let loading = false;
	let inputWord = '';
	let results: any = [];
	async function searchAllTables(query: string, tables: string[]) {
		loading = true;

		for (const table of tables) {
			const { data, error } = await supabase.from(table).select().textSearch('concatext', query);

			if (error) {
				loading = false;
				throw new Error(error.message);
			}

			results.push(...data);
		}

		loading = false;
		results = results.sort((a: any, b: any) => a.word.localeCompare(b.word));
	}

	function handleSubmit() {
		searchAllTables(inputWord, [
			'db-dictionary',
			'db-dhatupatha',
			'db-puranaindex',
			'vedicconcordance2'
		]);
	}
</script>

<div class="rta-column">
	<input type="text" bind:value={inputWord} />
	<button on:click={handleSubmit}>Send</button>
	{#if results && results.length > 0}
		{#each results as item}
			<p>{item}</p>
		{/each}
	{/if}
</div>
