<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import { fly } from 'svelte/transition'
	let sidebar = false
	let dropdown = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

</script>

<svelte:head>
	<HeadComponent>
		Fractal Maṇḍala at
	</HeadComponent>
</svelte:head>

<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/mandala/aphorisms">Caturasūtra</a>
		<a href="/mandala/ancestors">Ancestors Outside of Time</a>
		<a href="/mandala/synrec">Synaptic Reconnection</a>
		<a href="/mandala/indiancivcon">Consciousness</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}><p class="dropperp">Core Essays</p>
			{#if dropdown}
				<a id="link11" href="/mandala/macrohistoriccase" in:fly={{ duration: 100, delay: 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Macrohistoric Case</a>
				<a id="link22" href="/mandala/historyvsitihasa" in:fly={{ duration: 100, delay: 100, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>History vs. Itihāsa</a>
				<a id="link33" href="/mandala/rathaasbija" in:fly={{ duration: 100, delay: 150, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Ratha as a Bīja</a>
				<a id="link44" href="/mandala/ramasjourney" in:fly={{ duration: 100, delay: 200, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>Avatāra in You</a>
			{/if}
		</div>
	</div>
</Header>
<slot></slot>

<style lang="sass">

#dropper
	position: relative
	a
		position: absolute
		text-align: right
		min-width: 200px
		right: 0
		background: var(--beau)
		padding: 4px 8px
		&:hover
			background: #ffffff
	#link11
		top: 32px
	#link22
		top: 56px
	#link33
		top: 80px
	#link44
		top: 104px

</style>