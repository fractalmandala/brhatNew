<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import Header from '$lib/components/SubHeader.svelte'
	import { loreAll } from '$lib/utils/localpulls'

	let lores:any
	let sidebar = false
	let dropdown = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

	onMount(async() => {
		lores = await loreAll()
	})


</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<a href="/aryavarta">Āryavarta Main</a>
		<a href="/aryavarta/chapter/01">Kaśyapa's Lament</a>
		<a href="/aryavarta/chapter/02">Sūta and Sudā</a>
		<a href="/aryavarta/chapter/03">Nasadīya Across Space and Time</a>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={toggleDropdown}>
			<p class="dropperp">All Lore</p>
				{#if dropdown}
					{#if lores && lores.length > 0}
						<div class="box dropped" data-lenis-prevent>
						{#each lores as item, i}
							<a href={item.path} in:fly={{ duration: 100, delay: i * 50, x: 0, y: 32}} out:fly={{ duration: 100, delay: 0, x: 0, y: 32}}>{item.meta.title}</a>
						{/each}
						</div>
					{/if}
				{/if}
		</div>
	</div>
</Header>
<slot></slot>

<style lang="sass">

#dropper
	position: relative
	.dropped
		position: absolute
		text-align: right
		min-width: 200px
		right: 0
		top: 32px
		background: var(--beau)
		padding: 4px 8px
		row-gap: 4px
		height: 40vh
		overflow-y: scroll
		a
			&:hover
				background: #fe4a49


</style>