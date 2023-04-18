<script lang="ts">

	import { fly } from 'svelte/transition'
	import { quintIn } from 'svelte/easing'
	export let flytime:boolean

	const LinkNames = [
		"prologue",
		"introduction",
		"dharma is design",
		"design at bṛhat",
	]

</script>

{#if flytime}
{#each LinkNames as name, i}
	<a in:fly={{ duration: 150, delay: i*50, x: 128, y: 0, easing: quintIn}} out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn}} href="/about/svatahsiddha">{name}</a>
{/each}
{/if}

