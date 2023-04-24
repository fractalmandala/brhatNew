<script lang="ts">

	import { onMount } from 'svelte'
	import Lenis from '@studio-freight/lenis'
	import { fly } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'

		onMount(() => {
		const lenis = new Lenis({
			duration: 0.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			wheelMultiplier: 0.55,
			smoothWheel: true,
			touchMultiplier: 1,
			infinite: false,
		})
		function raf(time: any){
		lenis.raf(time)
		requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	})

</script>

<div class="lenisbox">
	<div class="lenismove">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.lenisbox, .lenismove
	box-sizing: border-box

</style>