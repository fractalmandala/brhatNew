<script lang="ts">
	export let dimension = 20;
	export let color = '#FFFFFF';
	export let onToggle = false;
	export let toggleColor = 'var(--opposite)';
</script>

{#if onToggle}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={dimension}
		height={dimension}
		viewBox="0 0 24 24"
		fill="none"
		stroke={toggleColor}
		stroke-width="2"
		style="transform: rotate(-180deg)"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-chevron-down"
		class:onToggle><polyline points="6 9 12 15 18 9" /></svg
	>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={dimension}
		height={dimension}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-chevron-down"
		class:onToggle><polyline points="6 9 12 15 18 9" /></svg
	>
{/if}
