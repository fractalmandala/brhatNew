<script lang="ts">


	import { get, writable } from 'svelte/store'
	import supabase from '$lib/utils/db'
	import IconLoading from '$lib/icons/IconLoading.svelte'
	const searchStore = writable('')
	let searchinput:any
	const resultsStore = writable([])
	let showResults = false
	let loadingStore = false;
	let fake = false
	let word:any

	const searchWord = async() => {
		loadingStore = true
		showResults = true
		const searchTerm = get(searchStore)
		searchinput = searchTerm
		let results: any[] = []
		const { data, error } = await supabase
			.from('db-amarakosha')
			.select()
			.textSearch('word', searchTerm)
			.order('primvalue')
			if (error) throw new Error(error.message)
			results = results.concat(data)
	// @ts-ignore
		resultsStore.set(results)
		loadingStore = false
		word = ''
}


</script>


<div class="inputmodal type">
	<div class="inputtab">
		<h5 style="font-weight: 600; text-align: center">Amarakośaḥ Search</h5>
		<slot name="describe"></slot>
		<div class="modalform">
			<input type="text" placeholder="enter word"
				bind:this={word}
				on:input={(e) => searchStore.set(e.target.value)} 
				/>
			<div class="boxr">
				<button class="formbutton" on:click={searchWord}>Submit</button>
				<slot name="close"></slot>
			</div>
			<small>Enter your search in Devanāgarī, IAST, or regular English.</small>
		</div>
		<div class="output">
			{#if searchinput && searchinput.length > 0}
			<h5 style="text-align: center; border-bottom: 1px solid #d7d7d7; margin-bottom: 16px">
				<a href="/openlibrary/reconnect/sections/dictionary/{searchinput}" target="_self">
					{searchinput}
				</a>
			</h5>
			{/if}
			{#if loadingStore}
				<IconLoading></IconLoading>
			{/if}
			{#if showResults && $resultsStore.length>0}
				<div class="searchresults">
					{#each $resultsStore as item, i}
						<h6 style="text-align: center">{item.word}</h6>
						<p style="text-align: center">Form: {item.form} <span> | </span>Varga: {item.varga} <span> | </span>Categories: {item.ontology}</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>


<style lang="sass">

.inputmodal
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	width: 100vw
	height: 100%
	position: fixed
	top: 0
	left: 0
	backdrop-filter: blur(6px)
	background: rgba(0,0,0,0.8)
	z-index: 888

.inputtab
	display: flex
	flex-direction: column
	align-items: center
	width: 32%
	background: white
	height: 60%
	row-gap: 32px
	padding: 32px
	border: 1px solid #ececec
	border-radius: 4px

.modalform
	display: flex
	flex-direction: column
	align-items: center
	input[type=text]
		width: 60%
		margin-bottom: 8px
	.boxr
		margin-bottom: 16px
		gap: 16px

.searchresults h6
	padding-top: 8px

.searchresults p
	border-bottom: 1px solid #ececec
	padding-bottom: 16px
	

</style>