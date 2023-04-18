<script lang="ts">

	import { onMount } from 'svelte'
	import { getCalendar } from '$lib/utils/supapulls'
	let calds:any

	onMount(async() => {
		calds = await getCalendar()
	})

</script>

{#if calds && calds.length > 0}
	<div class="gridof4">
	{#each calds as item}
		<div class="box">
		<h5>{item.event}</h5>		
		<p>{item.date}</p>
</div>
	{/each}
</div>
	
{/if}

<style lang="sass">

.box
	border: 1px solid #ececec

</style>