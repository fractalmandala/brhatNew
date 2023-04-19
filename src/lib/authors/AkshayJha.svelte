<script lang="ts">

	import { onMount } from 'svelte'
	import { authorAkshay } from '$lib/utils/localpulls'

	let articles:any

	onMount(async() => {
		articles = await authorAkshay()
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
