<script lang="ts">

	import { fly } from 'svelte/transition'
	import { quadOut } from 'svelte/easing'
	import IconClose from '$lib/icons/IconClose.svelte'
	let modalOpen:boolean = true

	function closeModal(){
		if ( modalOpen === true ) {
			modalOpen = false
		}
	}

</script>

{#if modalOpen}
<div class="modal" in:fly={{ duration: 500, delay: 50, x: 0, y: -600, easing: quadOut}} out:fly={{ duration: 300, delay: 0, x: 0, y: -600, easing: quadOut}}>
	<div class="box extra">
		<div class="closebutton">
			<div on:click={closeModal} on:keydown={closeModal}>
				<IconClose></IconClose>
			</div>
		</div>
		<slot></slot>
	</div>
</div>
{/if}


<style lang="sass">

.modal
	position: fixed
	top: 0
	left: 0
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	width: 100%
	height: 100%
	backdrop-filter: blur(8px)
	.extra
		width: 60%
		height: 80%
		background: white
		border: 1px solid #ececec
		border-radius: 3px
		padding: 24px

.closebutton
	display: flex
	flex-direction: column
	align-items: flex-end
	height: 32px
	width: 100%

</style>