<script lang="ts">

	import autoAnimate from '@formkit/auto-animate'
	import { ChevronDown } from 'lucide-svelte'
	let arrayItem = Array(20).fill(false)
	let fake = false
	
	function toggleItem(index:number){
		arrayItem[index] = !arrayItem[index]
		for ( let i = 0; i < arrayItem.length; i++ ) {
			if ( i !== index && arrayItem[i] === true ) {
				arrayItem[i] = false
			}
		}
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<div class="rta-column rowgap-16 col-y-top comp-accordion">

	<div class="rta-in-col col-y-top rowgap-16 accordion-item bord-bot bot-p-16" on:click={() => toggleItem(1)} on:keydown={fauxfake} use:autoAnimate>
		<div class="rta-row row-between" class:opened={arrayItem[1]}>
			<h6>Item 1</h6>
			<div class="rta-in-col">
				<ChevronDown/>
			</div>
		</div>
		{#if arrayItem[1]}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
		{/if}
	</div>

	<div class="rta-in-col col-y-top rowgap-16 accordion-item bord-bot bot-p-16" on:click={() => toggleItem(2)} on:keydown={fauxfake} use:autoAnimate>
		<div class="rta-row row-between" class:opened={arrayItem[2]}>
			<h6>Item 2</h6>
			<div class="rta-in-col">
				<ChevronDown/>
			</div>
		</div>
		{#if arrayItem[2]}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
		{/if}
	</div>

	<div class="rta-in-col col-y-top rowgap-16 accordion-item bord-bot bot-p-16" on:click={() => toggleItem(3)} on:keydown={fauxfake} use:autoAnimate>
		<div class="rta-row row-between" class:opened={arrayItem[3]}>
			<h6>Item 3</h6>
			<div class="rta-in-col">
				<ChevronDown/>
			</div>
		</div>
		{#if arrayItem[3]}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
		{/if}
	</div>

	<div class="rta-in-col col-y-top rowgap-16 accordion-item bord-bot bot-p-16" on:click={() => toggleItem(4)} on:keydown={fauxfake} use:autoAnimate>
		<div class="rta-row row-between" class:opened={arrayItem[4]}>
			<h6>Item 4</h6>
			<div class="rta-in-col">
				<ChevronDown/>
			</div>
		</div>
		{#if arrayItem[4]}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
		{/if}
	</div>

</div>


<style lang="sass">

.accordion-item
	.rta-row
		cursor: pointer
		.rta-in-col
			transition: 0.2s ease
	.rta-row.opened
		.rta-in-col
			transform: rotate(180deg)
		h6
			color: #10D56C

.rta-column
	h6, p
		margin: 0

.rta-column
	p
		color: var(--primary)

</style>
