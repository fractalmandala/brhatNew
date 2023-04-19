<script lang="ts">

	import { onMount } from 'svelte'
	import { authorRaghav } from '$lib/utils/localpulls'

	let articles:any

	onMount(async() => {
		articles = await authorRaghav()
	})

</script>

<div class="authormodal type">
	{#if articles && articles.length > 0}
		{#each articles as item}
			<div class="listing">
				<h5>
					<a href="{item.path}">{item.meta.title}</a>
				</h5>
			</div>
		{/each}
	{/if}
</div>
