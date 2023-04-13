<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte'
	import { BOLSelect } from '$lib/utils/supapulls'
	import { get, writable } from 'svelte/store'
	import supabase from '$lib/utils/db'
	import { fly } from 'svelte/transition'

	let y:number 
	let height:number
	let isInvisible:boolean = false
	let mouseY:number = 0
	let latestScrollY:number 


	let books:any
	let category:any = 'Essentials'
	let opencategory:boolean = false
	let fake = false
	let iconmobile = false
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

<div class="bolpaging">
	<div class="bolside" class:hiddenheader={isInvisible} class:expandhead={expandmenu}>
		<div class="mobileicon" on:click={toggleMenu} on:keydown={fauxfake}>
			<svg width="100%" height="100%" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.11328 9.24902L24.1133 33.249L48.1133 9.24902L39.1133 0.249022L24.1133 15.249L9.11328 0.249023L0.11328 9.24902Z" fill="white"/>
			</svg>
		</div>
		{#if visibility}
		<div class="filtration" class:filtrationborder={opencategory} style="display: flex; flex-direction: column; row-gap: 8px">
			<div class="visible" on:click={togglecategory} on:keydown={fauxfake}>Select Category:</div>
			{#if opencategory}
				<p transition:fly={{ delay: 50 }} on:click={() => newcategory('Essentials')} on:keydown={fauxfake} class="{ category === 'Essentials' ? 'cats' : ''}">Essentials</p>
				<p transition:fly={{ delay: 100 }} on:click={() => newcategory('Bodhas')} on:keydown={fauxfake} class="{ category === 'Bodhas' ? 'cats' : ''}">Two Bodhas</p>
				<p transition:fly={{ delay: 150 }} on:click={() => newcategory('IKS')} on:keydown={fauxfake} class="{ category === 'IKS' ? 'cats' : ''}">IKS</p>
				<p transition:fly={{ delay: 200 }} on:click={() => newcategory('Repository of Scripture')} on:keydown={fauxfake} class="{ category === 'Repository of Scripture' ? 'cats' : ''}">Scriptural</p>
				<p transition:fly={{ delay: 200 }} on:click={() => newcategory('search')} on:keydown={fauxfake} class="{ category === 'search' ? 'cats' : ''}">Search Collection</p>
			{/if}
		</div>
		{#if opensearchbar}
			<form class="bolform">
				<input type="text" bind:this={searchinput} on:input={(e) => {if(e && e.target) {searchStore.set(e.target.value)}}}>
				<button on:click={searchWord} on:keydown={fauxfake}>Find</button>
			</form>
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
		{:else}
		<div class="visiblation" style="display: flex; flex-direction: column; row-gap: 4px">
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
		</div>
		{/if}
		{/if}
	</div>
	<div class="bolmain">
		<slot></slot>
	</div>
</div>

<style lang="sass">

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

.bolpaging
	display: grid
	grid-auto-flow: row
	.bolside
		grid-area: bolside
	.bolmain
		grid-area: bolmain
	@media screen and (min-width: 1024px)
		grid-template-rows: auto
		grid-template-columns: 400px 1fr
		grid-template-areas: "bolside bolmain"
		gap: 0 64px
		.bolmain
			padding-right: 4vw
			padding-top: 64px
			padding-bottom: 64px
		.bolside
			padding-left: 48px
			padding-top: 48px
			padding-bottom: 48px
			.mobileicon
				display: none
		.bolside.hiddenheader
			transform: translateY(0px)
		.bolside.expandhead
			height: 100%
	@media screen and (max-width: 1023px)
		grid-template-rows: 64px auto
		grid-template-columns: 1fr
		grid-template-areas: "bolside" "bolmain"
		padding-top: 0px
		.bolside
			overflow-x: hidden
			height: 48px
			padding-left: 6vw
			padding-right: 6vw
			position: sticky
			top: 64px
			z-index: 999
			transition: 0.34s ease
			background: var(--tree)
			.mobileicon
				display: flex
				flex-direction: row
				width: 100%
				height: 48px
				justify-content: center
				align-items: center
				svg
					height: 24px
					object-fit: contain
					width: 24px
					transition: 0.34s ease
		.bolside.hiddenheader
			transform: translateY(-64px)
			&:hover
				transform: translateY(0px)
		.bolside.expandhead
			height: 100vh
			background: white
			.mobileicon
				svg
					transform: rotate(180deg)
					path
						fill: var(--tree)
		.bolmain
			padding-left: 6vw
			padding-right: 6vw
			padding-bottom: 64px

.filtration
	border-bottom: 1px solid #d7d7d7
	margin-bottom: 16px
	.visible
		border-left: 4px solid var(--tree)
		padding-left: 8px
		margin-bottom: 8px
		cursor: pointer
		&:hover
			text-decoration: underline
	p
		text-transform: uppercase
		font-size: 18px
		padding: 4px
		cursor: pointer
		&:hover
			background: var(--tree)
			color: white
	p.cats
		background: var(--tree)
		color: white
	@media screen and (max-width: 1023px)
		.visible
			border-left: 0
			padding-left: 0
			font-size: 20px
		p
			font-size: 20px

.filtrationborder
	padding-bottom: 16px

.visiblation
	p
		color: #878787
		font-size: 15px
		padding: 4px
		border-bottom: 1px solid #ececec
		&:hover
			color: var(--tree)

.searchitem
	color: #878787
	font-size: 15px
	padding: 4px
	border-bottom: 1px solid #ececec
	&:hover
		color: var(--tree)


</style>