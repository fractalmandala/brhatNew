<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { themeMode } from '$lib/stores/globalstores'
	let iW = 0
	let fake = false


	function fauxfake(){
		fake = !fake
	}

</script>

<svelte:window bind:innerWidth={iW} />

<Header>
</Header>

<div class="pagethemer" class:light={$themeMode} class:dark={!$themeMode}>
	<slot></slot>
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>
