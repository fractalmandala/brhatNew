<script lang="ts">
	import { elementVisibilityStore } from '$lib/stores/elementvisibility';
	let ref: HTMLElement | null = null;
	let y: number;
	let opa: number;

	$: if ($isVisible) {
		opa = y / 100;
	}

	$: ({ isVisible } = elementVisibilityStore(ref));
</script>

<svelte:window bind:scrollY={y} />

<div bind:this={ref} class:timetogo={$isVisible} class:notime={!$isVisible}>
	<div style="opacity: {y}" class="insidevis">
		<h4>{y / 100}</h4>
		<slot />
	</div>
</div>

<style lang="sass">


.insidevis
	height: 400px
	width: 100%
	background: black

</style>
