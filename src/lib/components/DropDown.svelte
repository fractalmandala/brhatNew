<script lang="ts">


	import { fly } from 'svelte/transition'
	import { backIn, quintOut } from 'svelte/easing'
	let showDropDown:boolean
	let iW:number
	let breakPoint:boolean

	function toggleDropDown(){
		if ( breakPoint === true ) {
			showDropDown = !showDropDown
		} else {
			showDropDown = true
		}
	}	

	$: if ( iW >= 1024) {
		breakPoint = false
		showDropDown = true
	}
	$: if ( iW <= 1023) {
		breakPoint = true
	}

</script>

<svelte:window bind:innerWidth={iW}/>

<div class="dropdown">
	<div class="visiblepanel" style="background: var(--thisbackground)" class:reverse={showDropDown} on:click={toggleDropDown} on:keydown={toggleDropDown}>
		{#if breakPoint}
			<slot name="visible"></slot>
			<div class="box">
				<svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg" class:rotated={showDropDown}>
					<path d="M19.8229 0.292328C9.21492 0.292328 0.622925 8.88433 0.622925 19.4923C0.622925 30.1003 9.21492 38.6923 19.8229 38.6923C30.4309 38.6923 39.0229 30.1003 39.0229 19.4923C39.0229 8.88433 30.4309 0.292328 19.8229 0.292328ZM19.8229 25.7323L11.7349 17.6443L14.2789 15.1003L19.8229 20.6443L25.3669 15.1003L27.9109 17.6443L19.8229 25.7323Z" fill="black"/>
				</svg>
			</div>
		{/if}
	</div>
		{#if showDropDown}
			<div class="absolute" in:fly={{ duration: 320, y: 100, x: 0, easing: quintOut}} out:fly={{ duration: 320, y: 100, easing: backIn}} on:click={toggleDropDown} on:keydown={toggleDropDown} data-lenis-prevent>
			<slot name="invisible"></slot>
			</div>
		{/if}
</div>

<style lang="sass">

svg
	object-fit: contain
	width: 28px
	height: 28px
	transition: all 0.33s ease
	path
		fill: white

.rotated
	transform: rotate(180deg)

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
		width: 100%

.dropdown
	position: relative
	.absolute
		position: absolute
		background: white
		width: 100%
	@media screen and (max-width: 1023px)
		width: 100%
		.absolute
			z-index: 1000
			top: 40px
			left: 0
			max-height: 60vh
			overflow-y: scroll
			border: 1px solid #ececec
			border-radius: 4px
			padding: 24px
	@media screen and (min-width: 1024px)
		display: flex
		flex-direction: row
		width: 100%
		.absolute
			padding: 16px 0
			z-index: 0
		
.absolute::-webkit-scrollbar
	@media screen and (max-width: 1023px)
		width: 2px

.absolute::-webkit-scrollbar-track
	@media screen and (max-width: 1023px)
		background: var(--thisbackground)
		
.absolute::-webkit-scrollbar-thumb
	@media screen and (max-width: 1023px)
		background: white


</style>