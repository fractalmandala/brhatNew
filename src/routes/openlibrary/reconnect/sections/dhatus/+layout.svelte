<script lang="ts">

	import { onMount } from 'svelte'
	import { dhatus } from '$lib/filed/dhatus'
	import { allDhatus } from '$lib/utils/synaptic'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	let fake = false
	let dhatuitems:any
	let searchInput:any
	let inputValue:any
	let hiLiteIndex:any = null;
	let hidden = false
	let url:any
	let dhat:any

	let filteredDhatus:any = []

	const filterDhatus = () => {
		let storageArr:any = []
		if (inputValue) {
			dhatus.forEach(dhatu => {
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
	}

	$: hiLitedDhatu = filteredDhatus[hiLiteIndex]; 	

	function clearInput(){
		inputValue = ""
	}

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

	onMount(async() => {
		url = $page.url.pathname
		dhat = url.substr(39, 40)
		dhatuitems = await allDhatus()
	})

</script>

<svelte:window on:keydown={navigateList} />

<div class="mainpage">
	<div class="mainside" data-lenis-prevent>
		<form autocomplete="off" id="actualform" on:mouseleave={clearInput}>
    	<input id="dhatu-input" 
				type="text" 
				placeholder="search dhatus" 
				bind:this={searchInput}
				bind:value={inputValue} 
				on:input={filterDhatus}
				/>
				{#if filteredDhatus.length > 0}
					<div id="items-list" data-lenis-prevent>
						{#each filteredDhatus as dhatu, i}
							<p>
								<a data-sveltekit-reload href="/openlibrary/reconnect/sections/dhatus/{dhatu}">
									{dhatu}
								</a>
							</p>
						{/each}			
					</div>
				{/if}
		</form>
		{#if dhatuitems && dhatuitems.length > 0}
				{#each dhatuitems as item}
					<div class="sideitems">
						<h5>
							<a data-sveltekit-reload href="/openlibrary/reconnect/sections/dhatus/{item.dhatu}">
								{item.dhatu}
							</a>
						</h5>
					</div>
				{/each}
			{/if}
	</div>
	<slot></slot>
</div>

<style lang="sass">

.mainpage
	padding-bottom: 32px

.mainside
	position: relative
	#items-list
		position: absolute
		left: 0
		top: 32px
		padding: 16px
		height: 320px
		overflow-y: scroll
		overflow-x: hidden
		background: white
		width: 88%
		border-bottom: 1px solid #ececec
		border-left: 1px solid #ececec
		border-right: 1px solid #ececec
		border-top: none
		border-radius: 0 0 4px 4px
		p
			font-size: 14px
			text-transform: uppercase
			color: #272727
			cursor: pointer
			padding: 2px

#actualform
	position: sticky
	top: 0

#items-list p
	&:hover
		background: #fe4a49
		color: white

#dhatu-input
	width: 88%
	outline: none
	border-left: 1px solid #ececec
	border-right: 1px solid #ececec
	border-top: 1px solid #ececec
	border-bottom: 1px solid #ececec
	border-radius: 4px 4px 0 0
	padding: 8px
	margin-bottom: 8px



.sideitems
	padding: 2px

.sideitems
	h5
		font-size: 16px
	@media screen and (max-width: 1023px)
		h5
			font-size: 16px

.mainside
	@media screen and (min-width: 1024px)
		height: calc(100vh - 368px)
		padding-bottom: 32px
		overflow-y: scroll


</style>