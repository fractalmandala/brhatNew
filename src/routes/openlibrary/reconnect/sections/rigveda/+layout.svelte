<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { SuktasofMandala } from '$lib/utils/synaptic'

	let suktas:any
	let selectedMandala:any
	let expand:boolean[] = Array(10).fill(false)

	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleMandala(index:number){
		expand[index] = !expand[index]
		selectedMandala = index
		for ( let i = 0; i < expand.length; i++) {
			if ( i !== index && expand[i] === true) {
				expand[i] = false
			}
		}
	}

	$: if ( selectedMandala ) {
		(async() => {
			suktas = await SuktasofMandala(selectedMandala)
		})()
	}

	onMount(async() => {
		suktas = await SuktasofMandala(selectedMandala)
	})

</script>

<div class="mainpage">
	<div class="mainside" data-lenis-prevent>
		<div class="sideitems" on:click={() => toggleMandala(1)} on:keydown={fauxfake} class:kandainview={expand[1]}>
			<h5>Maṇḍala 1</h5>
			{#if expand[1]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(2)} on:keydown={fauxfake} class:kandainview={expand[2]}>
			<h5>Maṇḍala 2</h5>
			{#if expand[2]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(3)} on:keydown={fauxfake} class:kandainview={expand[3]}>
			<h5>Maṇḍala 3</h5>
			{#if expand[3]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(4)} on:keydown={fauxfake} class:kandainview={expand[4]}>
			<h5>Maṇḍala 4</h5>
			{#if expand[4]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(5)} on:keydown={fauxfake} class:kandainview={expand[5]}>
			<h5>Maṇḍala 5</h5>
			{#if expand[5]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(6)} on:keydown={fauxfake} class:kandainview={expand[6]}>
			<h5>Maṇḍala 6</h5>
			{#if expand[6]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(7)} on:keydown={fauxfake} class:kandainview={expand[7]}>
			<h5>Maṇḍala 7</h5>
			{#if expand[7]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(8)} on:keydown={fauxfake} class:kandainview={expand[8]}>
			<h5>Maṇḍala 8</h5>
			{#if expand[8]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(9)} on:keydown={fauxfake} class:kandainview={expand[9]}>
			<h5>Maṇḍala 9</h5>
			{#if expand[9]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<div class="sideitems" on:click={() => toggleMandala(10)} on:keydown={fauxfake} class:kandainview={expand[10]}>
			<h5>Maṇḍala 10</h5>
			{#if expand[10]}
				<div class="sargatray" in:fly={{ duration: 400, x: -120, y: 0}} out:fly={{ duration: 200, x: -120, y: 0}}>
					{#if suktas && suktas.length > 0}
						{#each suktas as item}
							<p>{item.sukta}</p>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
	<slot></slot>
</div>

<style lang="sass">

.sideitems
	padding: 4px

.sargatray
	border: 1px solid #ececec
	padding: 16px
	margin: 8px 0
	p
		padding: 2px
		text-align: center
		cursor: pointer
		&:hover
			background: #fe4a49
			color: white

.sideitems
	h5
		font-size: 18px
	@media screen and (max-width: 1023px)
		h5
			font-size: 16px

.sideitems.kandainview
	h5
		color: #fe4a49
		font-size: 18px

.mainpage
	padding-bottom: 48px


</style>