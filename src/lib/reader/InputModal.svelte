<script lang="ts">

	import { clickOutsideAction } from 'svelte-legos'
	export let modalone:boolean

	function handleClickOutside(){
		 modalone = !modalone
	}

</script>

{#if modalone}
<div class="inputmodal">
	<div class="inputtab modal" use:clickOutsideAction on:clickoutside={handleClickOutside}>
		<slot name="describe"></slot>
		<div class="modalform">
			<textarea/>
			<button>Submit</button>
		</div>
	</div>
</div>
{/if}

<style lang="sass">

.inputmodal
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	width: 100vw
	height: 100%
	position: fixed
	top: 0
	left: 0
	backdrop-filter: blur(20px)
	z-index: 888

.inputtab
	display: flex
	flex-direction: column
	width: 32%
	background: white

</style>