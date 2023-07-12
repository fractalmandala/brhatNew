<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import '$lib/styles/prism.css';
	export let data;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="doc-bar">
	<h2 class="bord-bot p-bot-16 m-bot-16">{data.title}</h2>
	<div class="doc-in">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="sass">

.doc-bar
	padding-top: 128px
	padding-bottom: 128px

.doc-bar
	@media screen and (min-width: 1024px)
		padding-left: 360px
		padding-right: 360px
		h2
			font-size: 48px
	@media screen and (max-width: 1023px)
		padding-left: 32px
		padding-right: 32px

</style>
