<script lang="ts">

  import { page } from '$app/stores';
	import { quintIn, quintOut } from 'svelte/easing'
  import { fly } from 'svelte/transition';
	export let link:any

</script>


{#key link}
	<div in:fly={{ delay: 350, duration: 600, x: -900, opacity: 0, easing: quintOut }} out:fly={{ duration: 300, delay: 0, x: 600, opacity: 1, easing: quintIn }}>
		<slot></slot>
	</div>
{/key}