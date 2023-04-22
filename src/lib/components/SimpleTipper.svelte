<script lang="ts">

	import { fly } from 'svelte/transition'
	let showTip:boolean

	function toggleShow(){
		showTip = !showTip
	}

</script>

<div class="simpletipper bdr" on:mouseenter={toggleShow} on:mouseleave={toggleShow}>

		<div class="tippy" in:fly={{ duration: 120, delay: 20, y: -120, x: 0, opacity: 0}} out:fly={{ duration: 50, y: -120}}>
			<slot name="flyitem"></slot>
		</div>

</div>

<style lang="sass">

.simpletipper
	display: flex
	flex-direction: column
	position: relative
	align-items: stretch
	width: 100%
	overflow: visible
	min-width: 200px
	.tippy
		position: absolute
		display: flex
		flex-direction: column
		top: -64px
		left: 0
		min-width: 200px
		height: 56px
		background: #fe4a49
		z-index: 900

</style>