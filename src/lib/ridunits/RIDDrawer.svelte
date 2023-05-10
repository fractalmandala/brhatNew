<script lang="ts">

	import visibilityMode from '$lib/stores/visibility'
	import { fly } from 'svelte/transition'
	import { quintIn, quintOut } from 'svelte/easing'

	let iW:number
	let breakPoint:boolean
	let fake = false
	let expandMenu = false
	let inDuration = 80
	let inDelay = 80
	let outDuration = 80
	let selectedItem = Array(6).fill(false)

	function fauxfake(){
		fake = !fake
	}

	function toggleMenu(){
		expandMenu = !expandMenu
	}

	function toggleItem(index:number){
		selectedItem[index] = !selectedItem[index]
		for ( let i = 0; i < selectedItem.length; i ++ ) {
			if ( i !== index && selectedItem[i] === true ) {
				selectedItem[i] = false
			} 
		}
	}

	$: anyItemOpen = selectedItem.some(item => item)

	$: if ( iW <= 1023 ) {
		breakPoint = true
	} else {
		breakPoint = false
	}

</script>

<svelte:window bind:innerWidth={iW}/>

<div class="rta-dropdown" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	{#if breakPoint}
		<div class="dropdown-selector point rta-row ycenter between" on:click={toggleMenu} on:keydown={toggleMenu}>
			<button class="blank-button">
				{#if expandMenu}
					Close Menu
				{:else}
					Expand Menu
				{/if}
			</button>
			<div class="icon-chevron" class:rotated={expandMenu}>
				<svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.5135 0.716924C10.8441 0.0474836 9.75894 0.0474835 9.0895 0.716924L6.01573 3.78983L2.94196 0.716924C2.27252 0.0474832 1.18736 0.0474831 0.51792 0.716924C0.182771 1.05122 0.0156245 1.49008 0.0156245 1.92894C0.0156245 2.36781 0.182771 2.80667 0.51792 3.14097L6.01573 8.63964L11.5135 3.14097C12.183 2.47238 12.183 1.38551 11.5135 0.716924Z" fill="black"/>
				</svg>
			</div>
		</div>
	{/if}
	{#if expandMenu || !breakPoint}
		<div class="items-area rta-row colgap400 bord-bot p-bot-16" class:row-col={breakPoint} in:fly={{ duration: inDuration, delay: 0, y: 48, easing: quintIn}} out:fly={{ duration: inDuration, delay: 0, easing: quintOut}}>
			<div class="tab-item" on:click={() => toggleItem(1)} on:keydown={fauxfake} class:selected={selectedItem[1]}>Label 1</div>
			<div class="tab-item" on:click={() => toggleItem(2)} on:keydown={fauxfake} class:selected={selectedItem[2]}>Label 2</div>
			<div class="tab-item" on:click={() => toggleItem(3)} on:keydown={fauxfake} class:selected={selectedItem[3]}>Label 3</div>
			<div class="tab-item" on:click={() => toggleItem(4)} on:keydown={fauxfake} class:selected={selectedItem[4]}>Label 4</div>
			<div class="tab-item" on:click={() => toggleItem(5)} on:keydown={fauxfake} class:selected={selectedItem[5]}>Label 5</div>
			<div class="tab-item" on:click={() => toggleItem(6)} on:keydown={fauxfake} class:selected={selectedItem[6]}>Label 6</div>
		</div>
	{/if}
	<div id="comp-tab" class="content-area rta-column p-top-32">
		{#if !anyItemOpen}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<p>Click on any label above to change the content here.</p>
			</div>
		{/if}
		{#if selectedItem[1]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<p>This is the content of Label 1</p>
			</div>
		{/if}
		{#if selectedItem[2]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<cite>This is the content of Label 2</cite>
			</div>
		{/if}
		{#if selectedItem[3]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<h4>This is the content of Label 3</h4>
			</div>
		{/if}
		{#if selectedItem[4]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<h6>This is the content of Label 4</h6>
			</div>
		{/if}
		{#if selectedItem[5]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<p>This is the content,</p>
				<p>of Label 5</p>
			</div>
		{/if}
		{#if selectedItem[6]}
			<div in:fly={{ duration: inDuration, delay: inDelay, y: 48, easing: quintOut}} out:fly={{ duration: outDuration, delay: 0, y: 64, easing: quintIn}}>
				<p>This is the content of Label 6</p>
			</div>
		{/if}
	</div>
</div>

<style lang="sass">

.rta-dropdown
	@media screen and (max-width: 1023px)
		position: relative
		.items-area
			position: absolute
			top: 80px
			left: 0
			z-index: 1000
			min-width: 240px
			padding: 16px

.tab-item
	font-weight: 700
	border: 1px solid transparent
	cursor: pointer
	line-height: 1.5
	border-radius: 4px
	transition: 0.04s cubic-bezier(0.170, 0.570, 0.725, 1.115)
	transform-origin: center center
	&:active
		transform: scale(0.88)
	@media screen and (min-width: 1024px)
		font-size: 16px
		padding: 2px 8px 0 8px

.icon-chevron
	transition: 0.08s cubic-bezier(0.170, 0.570, 0.725, 1.115)
	transform-origin: center center
	display: flex
	justify-content: center
	align-items: center
.icon-chevron.rotated
	transform: rotate(180deg)

.items-area
	border-radius: 6px

.dropdown-selector
	padding: 8px 16px
	border-radius: 6px

.dark
	.tab-item
		color: #676767
		&:hover
			color: #FFFFFF
			border: 1px solid #474747
			box-shadow: 3px 4px 5px #070707
	.tab-item.selected
		background: #fe4a49
		color: white
		border: 1px solid white
	.dropdown-selector
		border: 1px solid var(--borderline)
		&:hover
			border: 1px solid #676767
		button
			color: white
			font-size: 16px
	.icon-chevron svg
		path
			fill: white
	.items-area.row-col
		background: white

.light
	.tab-item
		color: #474747
		&:hover
			color: #272727
			border: 1px solid #272727
			box-shadow: 3px 4px 5px #d1d1d1
	.tab-item.selected
		background: #fe4a49
		color: white
		border: 1px solid #fe4a49


</style>