<script lang="ts">


	import { fly } from 'svelte/transition'
	import { backIn } from 'svelte/easing'
	export let showDropDown = false

	

	function toggleDropDown(){
		showDropDown = !showDropDown
	}	


</script>

<div class="dropdown">
	<div class="visiblepanel" style="background: var(--thisbackground)" class:reverse={showDropDown} on:click={toggleDropDown} on:keydown={toggleDropDown}>
		<slot name="visible"></slot>
		<div class="box">
			<svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19.8229 0.292328C9.21492 0.292328 0.622925 8.88433 0.622925 19.4923C0.622925 30.1003 9.21492 38.6923 19.8229 38.6923C30.4309 38.6923 39.0229 30.1003 39.0229 19.4923C39.0229 8.88433 30.4309 0.292328 19.8229 0.292328ZM19.8229 25.7323L11.7349 17.6443L14.2789 15.1003L19.8229 20.6443L25.3669 15.1003L27.9109 17.6443L19.8229 25.7323Z" fill="black"/>
			</svg>
		</div>
	</div>
		{#if showDropDown}
			<div class="absolute" in:fly={{ duration: 200, y: 100, x: 0, easing: backIn}} out:fly={{ duration: 100, y: 100, easing: backIn}}>
			<slot name="invisible"></slot>
			</div>
		{/if}
</div>

<style lang="sass">

svg
	object-fit: contain
	width: 28px
	height: 28px
	transition: all 0.43s var(--cubed)
	path
		fill: white

.visiblepanel
	display: flex
	align-items: center
	flex-direction: row
	@media screen and (max-width: 1023px)
		justify-content: space-between
		height: 36px
		padding-right: 4px
		border-radius: 18px
		padding-left: 12px

.dropdown
	position: relative
	.absolute
		position: absolute
		background: white
		padding: 24px
		top: 40px
		left: 0
		width: 100%


</style>