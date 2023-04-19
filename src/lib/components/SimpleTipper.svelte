<script lang="ts">

	import { fly } from 'svelte/transition'
	export let showTip:boolean

</script>

<div class="simpletipper bdr">
	{#if showTip}
		<div class="tippy" in:fly={{ duration: 120, delay: 20, y: -120, x: 0, opacity: 0}} out:fly={{ duration: 50, y: -120}}>
			<slot name="flyitem"></slot>
		</div>
	{/if}
</div>

<style lang="sass">

.simpletipper
	display: flex
	flex-direction: column
	position: relative
	width: 100%
	.tippy
		position: absolute
		display: flex
		flex-direction: column
		top: 0
		left: 0
		width: 100%
		height: 100%


</style>