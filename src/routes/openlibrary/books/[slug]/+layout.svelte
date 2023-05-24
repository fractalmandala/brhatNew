<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte'
	import { breakOne, breakZero, breakTwo } from '$lib/stores/globalstores'
	import { BOLSelect } from '$lib/utils/supapulls'
	import { get, writable } from 'svelte/store'
	import supabase from '$lib/utils/db'
	import { fly } from 'svelte/transition'
	import DropDown from '$lib/components/DropDownNested.svelte'

	let y:number 
	let height:number
	let isInvisible:boolean = false
	let mouseY:number = 0
	let latestScrollY:number 


	let books:any
	let category:any = 'Essentials'
	let opencategory:boolean = false
	let fake = false
	let iconmobile = true
	let expandmenu = false
	let visibility = true

	let opensearchbar = false
	const searchStore = writable('')
	let searchinput
	const resultsStore = writable([])
	let showResults = false
	let loadingStore = false
	let width:number

	function toggleMenu(){
		expandmenu = !expandmenu
	}

	function newcategory(newCategory:any){
		category = newCategory
		if ( opensearchbar === true ) {
			opensearchbar = false
		}
	}

	function fauxfake(){
		fake = !fake
	}

	function togglecategory(){
		opencategory = !opencategory
	}

		const searchWord = async() => {
			loadingStore = true
			showResults = true
			const searchTerm = get(searchStore)
			let results: any[] = []
			const { data: dataone, error: errorone } = await supabase
				.from('brhat-openlibrary')
				.select()
				.textSearch('fts', searchTerm)
				.order('id')
				if (errorone) throw new Error(errorone.message)
				results = results.concat(dataone)
				// @ts-ignore
				resultsStore.set(results)
				loadingStore = false
				searchinput = ''
			}	

	$: if (category) {
		(async() => {
			books = await BOLSelect(category)
		})()
	}

	$: if (category === 'search') {		
			opensearchbar = !opensearchbar
		}

	$: if ( width <= 1023 ) {
		visibility = expandmenu
	} else {
		visibility = true
	}

	$: {
		if ( y > 100 && y > latestScrollY ) {
			isInvisible = true
		} else {
			isInvisible = false
		}
		latestScrollY = y
	}



	onMount(async() => {
		books = await BOLSelect(category)
		height = document.body.scrollHeight
		const handleMouse = (event: {clientY: number;}) => {
			mouseY = event.clientY
			if ( mouseY <= 128 ) {
				isInvisible = false
			}
		}
		window.addEventListener('mousemove', handleMouse)
		return() => {
			window.removeEventListener('mousemove', handleMouse)
		}
	})

</script>

<svelte:window bind:innerWidth={width} bind:scrollY={y} bind:outerHeight={height}/>


<div class="docugrid"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	>
	<div class="docuside">
		<h6 style="color: white">CATEGORY MENU</h6>
		{#if $breakZero}
		<div class="maincategories rta-column">
				<h5 transition:fly={{ delay: 50 }} on:click={() => newcategory('Essentials')} on:keydown={fauxfake} class="{ category === 'Essentials' ? 'cats' : ''}">Essentials</h5>
				<h5 transition:fly={{ delay: 100 }} on:click={() => newcategory('Bodhas')} on:keydown={fauxfake} class="{ category === 'Bodhas' ? 'cats' : ''}">Two Bodhas</h5>
				<h5 transition:fly={{ delay: 150 }} on:click={() => newcategory('IKS')} on:keydown={fauxfake} class="{ category === 'IKS' ? 'cats' : ''}">IKS</h5>
				<h5 transition:fly={{ delay: 200 }} on:click={() => newcategory('Repository of Scripture')} on:keydown={fauxfake} class="{ category === 'Repository of Scripture' ? 'cats' : ''}">Scriptural</h5>
				<h5 transition:fly={{ delay: 200 }} on:click={() => newcategory('search')} on:keydown={fauxfake} class="{ category === 'search' ? 'cats' : ''}">Search Collection</h5>
		</div>
		<div class="searcher rta-column">
						{#if opensearchbar}
					<form class="bolform" style="margin-top: 16px">
						<input type="text" bind:this={searchinput} on:input={(e) => {if(e && e.target) {searchStore.set(e.target.value)}}}>
						<button on:click={searchWord} on:keydown={fauxfake}>Find</button>
					</form>
				{/if}
		</div>
				<div class="visiblation rta-column">
					{#if books && books.length > 0}
						{#each books as item, i}
							<div transition:fly={{delay: i * 25}} on:click={toggleMenu} on:keydown={fauxfake}>
								<p>
									<a href="/openlibrary/books/{item.slug}">
										{item.Text}
									</a>
								</p>
							</div>
						{/each}
					{/if}
					{#if loadingStore}
						<p>Loading...</p>
					{/if}
					{#if showResults}
						{#if $resultsStore.length>0}
							{#each $resultsStore as item, i}
								<div transition:fly={{delay: i * 25}} on:click={toggleMenu} on:keydown={fauxfake}>
									<p class="searchitem">
										<a href="/openlibrary/books/{item.slug}">
											{item.Text}
										</a>
									</p>
								</div>
							{/each}
						{/if}
					{/if}
				</div>	
		{/if	}
	</div>
	<div class="documain">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.docugrid
	h6, h5, p
		font-family: 'Space Grotesk', sans-serif
	h5
		font-weight: bold
		border-bottom: 1px solid var(--borderline)
		padding-bottom: 8px
		cursor: pointer
	h5.cats
		color: #fe4a49

.bolform
	display: flex
	flex-direction: row
	column-gap: 16px
	margin-bottom: 24px
	input[type=text]
		width: 75%
		padding: 8px
		border: 1px solid #d7d7d7
		outline: none
	button
		width: calc(25% - 16px)
		background: var(--tree)
		border: 1px solid var(--tree)
		color: white
		cursor: pointer
		border-radius: 3px
		&:hover
			background: white
			color: var(--tree)

.docugrid
	display: grid
	grid-auto-flow: row
	.docuside
		grid-area: docuside
	.documain
		grid-area: documain
	@media screen and (min-width: 1024px)
		grid-template-rows: auto
		grid-template-columns: 320px 1fr
		grid-template-areas: "docuside documain"
		gap: 0 64px
		padding-top: 128px
		padding-bottom: 128px
		.documain
			padding-right: 4vw
		.docuside
			padding-left: 48px
	@media screen and (max-width: 1023px)
		grid-template-rows: 64px auto
		grid-template-columns: 1fr
		grid-template-areas: "docuside" "documain"
		padding-top: 32px
		.docuside
			height: 48px
			padding-left: 6vw
			padding-right: 6vw
			top: 64px
			transition: 0.34s ease
		.documain
			padding-left: 6vw
			padding-right: 6vw
			padding-bottom: 64px

.visiblation
	a
		&:hover
			color: #fe4a49
	@media screen and (max-width: 1023px)
		padding-top: 16px
	

.searchitem
	color: #878787
	font-size: 15px
	padding: 4px
	border-bottom: 1px solid #ececec
	&:hover
		color: var(--tree)


</style>