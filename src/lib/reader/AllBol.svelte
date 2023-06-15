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

<div class="rta-row colgap100">
	<input type="text" bind:value={inputWord} />
	<button on:click={handleSubmit} class="blank-button">
		<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M27.6736 24.7495L22.9998 20.0766C22.7889 19.8656 22.5029 19.7485 22.2029 19.7485H21.4388C22.7326 18.0939 23.5014 16.0129 23.5014 13.749C23.5014 8.36364 19.137 4 13.7507 4C8.36438 4 4 8.36364 4 13.749C4 19.1345 8.36438 23.4981 13.7507 23.4981C16.0149 23.4981 18.0963 22.7294 19.7512 21.4358V22.1998C19.7512 22.4998 19.8683 22.7857 20.0793 22.9966L24.7531 27.6696C25.1937 28.1101 25.9063 28.1101 26.3423 27.6696L27.6689 26.3431C28.1096 25.9026 28.1096 25.1901 27.6736 24.7495ZM13.7507 19.7485C10.4364 19.7485 7.75027 17.0675 7.75027 13.749C7.75027 10.4353 10.4317 7.74963 13.7507 7.74963C17.065 7.74963 19.7512 10.4306 19.7512 13.749C19.7512 17.0628 17.0697 19.7485 13.7507 19.7485Z"
				fill="var(--opposite)"
			/>
		</svg>
	</button>
	{#if results && results.length > 0}
		{#each results as item}
			<p>{item}</p>
		{/each}
	{/if}
</div>

<style lang="sass">

input
	border-radius: 8px
	border: none
	padding: 4px 8px

</style>
