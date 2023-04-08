<script lang="ts">

	import { onMount } from 'svelte'
	import IconSubMenu from '$lib/icons/IconSubMenu.svelte'
	let yy:number
	let isInvisible:boolean = false
	let mobileVisibility:boolean = false
	let mouseY:number = 0
	let latestScrollY:number 
	let height:number
	let wone:number
	let wtwo:number
	let mobileExpanded:boolean = false

	function toggleSubMenu(){
		mobileExpanded = !mobileExpanded
	}

	function subMenuKey(e: {code: string;}){
		if ( e.code === "F2") {
			mobileExpanded = !mobileExpanded
		}
	}

	onMount(() => {
		if ( wone <= 1023 ) {
			mobileVisibility = true
		} else {
			mobileVisibility = false
		}
		height = document.body.scrollHeight
		const handleMouse = (event: {clientY: number;}) => {
			mouseY = event.clientY
			if ( mouseY <= 128 ) {
				isInvisible = false
			}
		}
		window.addEventListener('mousemove', handleMouse)
		return() => {
			window.removeEventListener('mousemove', handleMouse)
		}
	})

	$: {
		if ( yy > 100 && yy > latestScrollY ) {
			isInvisible = true
		} else {
			isInvisible = false
		}

		latestScrollY = yy
	}

</script>

<svelte:window bind:scrollY={yy} bind:innerWidth={wone} bind:outerWidth={wtwo}/>

<div class="subheader" class:transformedheader={isInvisible} class:expandedheader={mobileExpanded}>
	<div class="subicon" on:click={toggleSubMenu} on:keydown={subMenuKey}>
		<IconSubMenu></IconSubMenu>
	</div>
	<div class="sublinks">
		<slot name="links"></slot>
	</div>
	<div class="sublogo">
		<slot name="logo"></slot>
	</div>
</div>

<style lang="sass">

.subheader
	display: flex
	transition: 0.34s ease
	z-index: 899
	@media screen and (min-width: 1024px)
		flex-direction: row
		align-items: center
		justify-content: flex-end
		width: 100%
		height: 48px
		top: 64px
		padding: 0 40px
		position: sticky
		background: rgba(255,255,255,0.7)
		backdrop-filter: blur(15px)
		column-gap: 16px
		.sublogo
			height: 24px
		.subicon
			display: none
	@media screen and (max-width: 1023px)
		height: 32px
		top: 64px
		position: sticky
		background: white
		border-bottom: 1px solid #f1f1f1
		width: 100%
		flex-direction: column
		align-items: flex-end
		justify-content: flex-start
		padding: 0 16px
		.sublogo
			display: none
		.subicon
			display: flex
			flex-direction: column
			margin-top: 4px
			cursor: pointer

.subheader
	.sublinks
		@media screen and (max-width: 1023px)
			display: none

.subheader.expandedheader
	.sublinks
		@media screen and (max-width: 1023px)
			display: block

.transformedheader
	transform: translateY(-64px)

.expandedheader
	height: calc(100vh - 64px)
	overflow-y: hidden

.transformedheader.expandedheader
	height: calc(100vh - 32px)
	overflow-y: hidden


</style>