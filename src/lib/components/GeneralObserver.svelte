<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	export let threshold: number = 0.5
	export let disable_observer: boolean = false

	let loaded = disable_observer
	let root: HTMLElement

	const hasIntersectionObserver =
		typeof IntersectionObserver !== 'undefined'
	let observer: IntersectionObserver | null =
		hasIntersectionObserver && !disable_observer
			? new IntersectionObserver(
					entries => {
						entries.forEach(entry => {
							if (entry.intersectionRatio >= threshold) {
								loaded = true
								observer!.disconnect()
							}
						})
					},
					{
						rootMargin: '0px',
						threshold,
					}
			  )
			: null

	onMount(() => {
		if (observer) {
			observer.observe(root)
		}
	})

	onDestroy(() => {
		if (observer) {
			observer.disconnect()
		}
	})
</script>

<div bind:this={root} data-testid="general-observer">
	{#if disable_observer}
		<div transition:fade>
			<slot />
		</div>
	{:else if loaded}
		<div transition:fade>
			<slot />
		</div>
	{/if}
</div>