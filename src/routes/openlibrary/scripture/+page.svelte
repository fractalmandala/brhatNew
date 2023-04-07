<script lang="ts">

	import { onMount } from 'svelte'
	import { bolFiles } from '$lib/utils/localpulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'

	let files:string|any[]

	onMount(async() => {
		files = await bolFiles()
	})
</script>

<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/14bol/synrec2023.webp')"></ParallaxImage>
	</div>
	<div class="title-box x1 pads">
		<div class="a-title">
			{#if files && files.length > 0}
				{#each files as item}
					<h5>{item.meta.title}</h5>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden

.x1
	min-height: 100vh

</style>