<script lang="ts">
	import { onMount } from 'svelte';
	import { authorSai } from '$lib/utils/localpulls';

	let articles: any;

	onMount(async () => {
		articles = await authorSai();
	});
</script>

<div class="authormodal type">
	{#if articles && articles.length > 0}
		{#each articles as item}
			<div class="listing">
				<h6 class="nohemi thinner">
					<a href={item.path}>{item.meta.title}</a>
				</h6>
			</div>
		{/each}
	{/if}
</div>
