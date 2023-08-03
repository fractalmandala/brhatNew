<script lang="ts">
	import { onMount } from 'svelte';
	import { soaJanapadas } from '$lib/utils/supapulls';

	let places: any;

	onMount(async () => {
		places = await soaJanapadas();
	});
</script>

<div class="rta-column">
	{#if places && places.length > 0}
		{#each places as item}
			<div class="fullscreenimage">
				<img src={item.link} alt={item.name} />
			</div>
		{/each}
	{/if}
</div>
