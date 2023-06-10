<script lang="ts">
	import { onMount } from 'svelte';
	import { dbDhatus } from '$lib/utils/synaptic';
	import type { DhatuSearch } from '$lib/types/BOLTypes';

	let dhatus: any;

	onMount(async () => {
		dhatus = await dbDhatus(10);
	});
</script>

<div class="rta-column">
	{#if dhatus && dhatus.length > 0}
		{#each dhatus as item}
			<div class="rta-column">
				<h5 class="hindiadobe serif">
					<a href="/openlibrary/dhatus/{item.id}">
						{item.dhatu}
					</a>
				</h5>
			</div>
		{/each}
	{/if}
</div>

<style lang="sass">

h5
	color: var(--opposite)

</style>
