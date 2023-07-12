<script lang="ts">
	import { onMount } from 'svelte';
	import { authorAnurag } from '$lib/utils/localpulls';

	let articles: any;

	onMount(async () => {
		articles = await authorAnurag();
	});
</script>

{#if articles && articles.length > 0}
	{#each articles as item}
		<p>
			<a href={item.path}>{item.meta.title}</a>
		</p>
	{/each}
{/if}

<style lang="sass">

p
	font-size: 12px

</style>
