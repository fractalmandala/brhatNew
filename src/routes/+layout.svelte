<script lang="ts">
	import '$lib/styles/global.sass'
	import '$lib/styles/types.sass'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import IconMenu from '$lib/icons/IconMenu.svelte'
	import IconMenu2 from '$lib/icons/IconMenu.svelte'
	import AboutLinks from '$lib/links/AboutLinks.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte'
	import BrhadMrdanga from '$lib/links/BrhadMrdanga.svelte'
	import DhitiLink from '$lib/links/DhitiLink.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	import MandalaLinks from '$lib/links/MandalaLinks.svelte'
	import OpenLibLink from '$lib/links/OpenLibLink.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'
	let navopen:boolean = false

	function openNav(){
		navopen = !navopen
	}

	function navKey(e: {code: string;}){
		if ( e.code === "F1") {
			navopen = !navopen
		}
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
</svelte:head>

<div class="sidemenu" id="sidemenu" class:opened={navopen}>
	<div class="box icontray">
		<div class="box iconholder" on:click={openNav} on:keydown={navKey}>
			<IconMenu2></IconMenu2>
		</div>
	</div>
	<div class="linkbox"></div>
</div>

<div id="appbox" class:pushed={navopen}>
	<Header>
		<div class="box" on:click={openNav} on:keydown={navKey}>
			<IconMenu></IconMenu>
		</div>
	</Header>
	<slot></slot>
	<Footer></Footer>
</div>

<style lang="sass">

.sidemenu
	width: 0
	height: 100%
	position: fixed
	top: 0
	right: 0
	background: var(--beau)
	overflow-x: hidden
	transition: 0.45s
	display: flex
	flex-direction: column

.sidemenu.opened
	@media screen and (min-width: 1024px)
		width: 40%
	@media screen and (max-width: 1023px)
		width: 100vw

#appbox
	transition: 0.45s

.pushed
	@media screen and (min-width: 1024px)
		margin-right: 40%
	@media screen and (max-width: 1023px)
		margin-right: 100%

.icontray
	height: 64px
	align-items: flex-end
	justify-content: center
	padding-right: 16px

.iconholder
	width: 22px
	height: 20px

.linkbox
	display: flex
	flex-direction: column

</style>