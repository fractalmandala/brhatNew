<script lang="ts">

	import { afterUpdate } from 'svelte'
	import { reveal } from 'svelte-reveal'
	import type { RevealOptions } from 'svelte-reveal'

	let show = false	

	afterUpdate(() => {
		show = true
	})

</script>

{#if show}
<h4
	use:reveal={{
		transition: "fly",
		duration: 400,
		y: 16,
		easing: "easeInOutCirc",
		threshold: 0.2,
		delay: 300,
		blur: 1
	}}
>
<slot></slot>
</h4>
{/if}
