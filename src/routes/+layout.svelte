<script lang="ts">

	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
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

	function closeSidebar(){
		if ( navopen === true ) {
			navopen = false
		}
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
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
</svelte:head>

<div class="sidemenu type" id="sidemenu" class:opened={navopen} data-lenis-prevent on:mouseleave={closeSidebar}>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 100, x: 64, y: 0}}><a href="/dhiti" target="_self">Dhīti</a></h5>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 150, x: 64, y: 0}}><a href="/openlibrary" target="_self">Bṛhat Open Library</a></h5>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 200, x: 64, y: 0}}><a href="/mrdanga" target="_self">Bṛhad Mṛdaṅga</a></h5>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 250, x: 64, y: 0}}><a href="/anveshi" target="_self">Bṛhat Anveṣī</a></h5>
			<AnveshiLinks></AnveshiLinks>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 300, x: 64, y: 0}}><a href="/drashta" target="_self">Bṛhat Draṣṭā</a></h5>
			<DrashtaLinks></DrashtaLinks>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 350, x: 64, y: 0}}><a href="/mandala" target="_self">Fractal Maṇḍala</a></h5>
			<MandalaLinks></MandalaLinks>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 400, x: 64, y: 0}}><a href="/aryavarta" target="_self">Scrolls of Āryavarta</a></h5>
			<AryavartaLinks></AryavartaLinks>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 450, x: 64, y: 0}}><a href="/rta" target="_self">Ṛta in Design</a></h5>
			<RtaLinks></RtaLinks>
		{/if}
	</div>
	<div class="linkbox" on:click={closeSidebar} on:keydown={navKey}>
		{#if navopen}
			<h5 in:fly={{ duration: 300, delay: 500, x: 64, y: 0}}><a href="/about" target="_self">About Bṛhat</a></h5>
			<AboutLinks></AboutLinks>
		{/if}
	</div>
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
	overflow-y: scroll
	z-index: 999

.sidemenu.opened
	overflow-y: scroll
	z-index: 999
	@media screen and (min-width: 1024px)
		width: 32%
		padding-right: 16px
		padding-left: 32px
		padding-top: 64px
	@media screen and (max-width: 1023px)
		width: 100vw
		padding: 64px 32px

#appbox
	transition: 0.45s

.linkbox
	display: flex
	flex-direction: column
	padding-bottom: 8px


.linkbox
	h5
		text-align: right
		color: white
		text-transform: uppercase
		font-weight: 600
		border-top: 1px solid #272727
		padding-top: 16px
		position: relative
		&::after
			position: absolute
			top: 0
			right: 0
			content: ''
			height: 1px
			background: #fe4a49
			width: 0
		
.linkbox
	&:hover
		h5
			&::after
				animation: boxlining 0.34s ease forwards

@keyframes boxlining
	0%
		width: 0
	100%
		width: 100%

</style>