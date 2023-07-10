<script lang="ts">
	import { fly } from 'svelte/transition';
	import { themeMode } from '$lib/stores/globalstores';
	export let keyTrigger: any;
	let duration = 600;
</script>

{#key keyTrigger}
	<div
		class="pageTransistor"
		in:fly={{ delay: duration, duration: duration, y: 900 }}
		out:fly={{ duration: duration, y: -900 }}
	>
		<slot />
	</div>
{/key}
