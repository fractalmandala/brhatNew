<script lang="ts">

	import { onMount } from 'svelte'
	import { authorPankaj } from '$lib/utils/localpulls'

	let articles:any

	onMount(async() => {
		articles = await authorPankaj()
	})

</script>

<div class="authormodal type">
	{#if articles && articles.length > 0}
		{#each articles as item}
			<div class="listing">
				<h6>
					<a href="{item.path}">{item.meta.title}</a>
				</h6>
			</div>
		{/each}
	{/if}
</div>
