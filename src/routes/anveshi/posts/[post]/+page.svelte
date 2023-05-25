<script lang="ts">

	import { page } from '$app/stores'
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores'
	export let data

	$: $metaUrl = $page.url.pathname
	$: $metaTitle = data.title
	$: $metaDescription = data.about
	$: $metaType = 'article'

</script>

<div class="type">
	<h4>{data.title}</h4>
	<div class="pads">
		<svelte:component this={data.content}/>
	</div>
</div>