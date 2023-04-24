<script lang="ts">

	import { afterUpdate } from 'svelte'
	import { reveal } from 'svelte-reveal'

	let show = false	

	afterUpdate(() => {
		show = true
	})

</script>

{#if show}
<div
	use:reveal={{
		transition: "fly",
		duration: 400,
		y: 200,
		easing: "easeInOutQuad",
		threshold: 0.4,
		reset: true,
		delay: 100,
		blur: 1
	}}
>
<slot></slot>
</div>
{/if}
