<script lang="ts">

	import { onMount } from 'svelte'
	import { searchitems } from '$lib/filed/searchindex'
	import IconChevron from '$lib/icons/IconChevron.svelte'

	let searchHelpOn = false
	let searchInput:any
	let inputValue:any
	let hiLiteIndex:any = null
	let dhat:any
	let filteredDhatus:any = []
	let input:HTMLInputElement

	const filterDhatus = () => {
		let storageArr:any = []
		if (inputValue) {
			searchitems.forEach(dhatu => {
				if ( dhatu.toLowerCase().startsWith(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(dhatu)]
				}
			})
		}
		filteredDhatus = storageArr
	}

	$: if (!inputValue) {
		filteredDhatus = []
		hiLiteIndex = null
		searchHelpOn = true
	}

	$: hiLitedDhatu = filteredDhatus[hiLiteIndex]; 	

	const setInputVal = (dhatuName:any) => {
			inputValue = removeBold(dhatuName)
			filteredDhatus = []
			hiLiteIndex = null
		}

	const makeMatchBold = (str:any) => {
	// replace part of (country name === inputValue) with strong tags
	let matched = str.substring(0, inputValue.length);
	let makeBold = `${matched}`;
	let boldedMatch = str.replace(matched, makeBold);
	return boldedMatch;
}

const removeBold = (str:any) => {
	return str.replace(/<(.)*?>/g, "");
}	

const navigateList = (e:any) => {
	if (e.key === "ArrowDown" && hiLiteIndex <= filteredDhatus.length-1) {
		hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
	} else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
		hiLiteIndex === 0 ? hiLiteIndex = filteredDhatus.length-1 : hiLiteIndex -= 1
	} else if (e.key === "Enter") {
		setInputVal(filteredDhatus[hiLiteIndex]);
	} else {
		return;
	}
} 

	function handleClickOutside(event:MouseEvent){
		const target = event.target as Element
		if( target && !target.closest('.row')){
			searchInput.value = ''
			searchHelpOn = false
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside)
	})

</script>

<svelte:window on:keydown={navigateList} />

<form class="row">
	<input type="text" placeholder="search" bind:this={searchInput} bind:value={inputValue} on:input={filterDhatus}>
	<button type="submit">
		<IconChevron/>
	</button>
</form>
{#if searchHelpOn && filteredDhatus.length > 0}
	<div id="items-list" data-lenis-prevent>
		{#each filteredDhatus as dhatu, i}
			<p>
				{dhatu}
			</p>
		{/each}			
	</div>
{/if}

<style lang="sass">

#items-list
	z-index: 999
	display: flex
	flex-direction: column
	border: 1px solid #d7d7d7
	min-width: 320px
	row-gap: 6px
	text-transform: capitalize
	position: absolute
	top: 62px
	right: -64px
	height: 400px
	overflow-y: scroll
	border-radius: 4px
	padding: 16px
	background: white
	p
		font-size: 12px
		line-height: 1.2

form
	background: white
	border-radius: 16px
	height: 32px
	padding: 2px

button
	background: none
	color: #ffffff
	border: none
	border-radius: 50%
	height: 30px
	width: 30px
	padding: 0
	display: flex
	align-items: center
	justify-content: center
	

input
	padding: 6px 8px
	border: none
	outline: none
	background: none
	width: 160px
	@media screen and (max-width: 899px)
		width: 120px
	@media screen and (max-width: 574px)
		width: 88px

.row
	display: flex
	flex-direction: row
	align-items: center
	justify-content: flex-end
	gap: 12px

</style>