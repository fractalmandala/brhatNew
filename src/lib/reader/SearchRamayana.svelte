<script lang="ts">

	import supabase from '$lib/utils/db'
	import IconLoading from '$lib/icons/IconLoading.svelte'
	let inputValue = 'search...'
	let results:any
	let loading = false
	let showResults = false
	let fake = false

	function toggleRes(){
		showResults = !showResults
		handleBlur();
	}

	function handleBlur(){
		inputValue = 'search...'
	}

	function fauxfake(){
		fake = !fake
	}

	function handleFocus(){
		inputValue = ''
	}

	export async function searchRV(){
		loading = true
		const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.textSearch('ftsmain',inputValue)
		.order('id')
		if ( error ) throw new Error(error.message)
		loading = false
		showResults = true
		results = data
	}

</script>


<form class="rta-row bol-search" on:submit|preventDefault={searchRV}>
	<input type="text" bind:value={inputValue} on:focus={handleFocus}/>
	<button class="blank-button" type="submit" on:submit|preventDefault={searchRV}>
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.6736 24.7495L22.9998 20.0766C22.7889 19.8656 22.5029 19.7485 22.2029 19.7485H21.4388C22.7326 18.0939 23.5014 16.0129 23.5014 13.749C23.5014 8.36364 19.137 4 13.7507 4C8.36438 4 4 8.36364 4 13.749C4 19.1345 8.36438 23.4981 13.7507 23.4981C16.0149 23.4981 18.0963 22.7294 19.7512 21.4358V22.1998C19.7512 22.4998 19.8683 22.7857 20.0793 22.9966L24.7531 27.6696C25.1937 28.1101 25.9063 28.1101 26.3423 27.6696L27.6689 26.3431C28.1096 25.9026 28.1096 25.1901 27.6736 24.7495ZM13.7507 19.7485C10.4364 19.7485 7.75027 17.0675 7.75027 13.749C7.75027 10.4353 10.4317 7.74963 13.7507 7.74963C17.065 7.74963 19.7512 10.4306 19.7512 13.749C19.7512 17.0628 17.0697 19.7485 13.7507 19.7485Z" fill="var(--background)"/>
</svg>
	</button>
</form>
{#if loading}
<div class="rta-column">
	<IconLoading/>
</div>
{/if}

{#if showResults && results && results.length > 0}
<div class="rta-column resultsarea" data-lenis-prevent>
	<small>Results:</small>
	{#each results as item}
		<p on:click={toggleRes} on:keydown={fauxfake}>
			<a href="/openlibrary/reconnect/sections/ramayana/{item.slugminuspada}">
				{item.slugminuspada}
			</a>
		</p>
	{/each}
</div>
{/if}
