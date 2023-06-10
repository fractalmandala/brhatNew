<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	export let flytime: boolean;
</script>

{#if flytime}
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 0, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi">Anveṣī Home</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 30, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/chapter/karnataka">Karnataka</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 60, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/chapter/odisha">Odisha</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 90, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/chapter/chamba">Chamba</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 90, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/chapter/goa">Goa</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 90, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/chapter/gwalior">Gwalior</a
	>
	<a
		class="insidelink"
		in:fly={{ duration: 150, delay: 120, x: 128, y: 0, easing: quintIn }}
		out:fly={{ duration: 100, delay: 0, x: 128, y: 0, easing: quintIn }}
		href="/anveshi/#faqgrid">FAQs</a
	>
{/if}
