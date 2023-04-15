<script lang="ts">
	
 	import { page } from '$app/stores';
	import { onMount } from 'svelte'
	import PageTrans from '$lib/reader/PageTrans.svelte'
	import InputModal from '$lib/reader/InputModal.svelte'
	import ModalAmarakosha from '$lib/reader/ModalAmarakosha.svelte'
	import ModalDhatu from '$lib/reader/ModalDhatu.svelte'
	import ModalIAST from '$lib/reader/ModalIAST.svelte'

	import '$lib/styles/reader.sass'

	let modalone:boolean = false
	let modaldhatu = false
	let modalamar = false
	let modaliast = false
	let dropper = false
	let fake = false
	let link:any

	function toggleDropper(){
		dropper = !dropper
	}

	function toggleIAST(){
		modaliast = !modaliast
	}

	function toggleDhatupatha(){
		modaldhatu = !modaldhatu
	}

	function toggleModalOne(){
		modalone = !modalone
	}

	function toggleAmarakosha(){
		modalamar = !modalamar
	}

	function fauxfake(){
		fake = !fake
	}

	onMount(async() => {
		link = $page.url
	})


</script>

<svelte:head>
<title>Discover and Reconnect at Bṛhat Open Library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="readingcontainer type">
  <div class="learninghead">
    <div class="learningheadmain">
			<h5 style="font-weight: bold"><a data-sveltekit-reload href="/openlibrary/reconnect">
				RECONNECT @ BṚHAT OPEN LIBRARY</a>
			</h5>
		</div>
    <div class="learningheadrest">
			<div class="headrestitems">
				<h6>
					<a href="/openlibrary/reconnect/sections/puranas" data-sveltekit-reload>
						Pauraṇika
					</a>
				</h6>
			</div>
			<div class="headrestitems" on:click={toggleIAST} on:keydown={fauxfake}>
				<h6>IAST</h6>
			</div>
			<div class="headrestitems" on:click={toggleModalOne} on:keydown={fauxfake}>
				<h6>Dictionary</h6>
			</div>
			<div class="headrestitems" on:click={toggleAmarakosha} on:keydown={fauxfake}>
				<h6>Amarakośaḥ</h6>
			</div>
			<div class="headrestitems">
				<h6>
					<a href="/openlibrary/reconnect/sections/dhatus" data-sveltekit-reload>
						Dhātupāṭha
					</a>
				</h6>
			</div>
			<div class="headrestitems dropper" on:click={toggleDropper} on:keydown={fauxfake}>
				<h6>TEXTS</h6>
				<div class="droppericon">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.1715 19.1722C9.6095 20.7322 9.6095 23.2682 11.1715 24.8282L23.9995 37.6582L36.8275 24.8282C37.6095 24.0482 37.9995 23.0242 37.9995 22.0002C37.9995 20.9762 37.6095 19.9522 36.8275 19.1722C35.2655 17.6102 32.7335 17.6102 31.1715 19.1722L23.9995 26.3422L16.8275 19.1722C15.2655 17.6102 12.7335 17.6102 11.1715 19.1722Z" fill="#474747"/>
					</svg>
				</div>
			</div>
			{#if dropper}
				<div class="dropped" on:click={toggleDropper} on:keydown={fauxfake}>
					<p><a href="/openlibrary/reconnect/sections/ramayana" data-sveltekit-reload>Rāmāyaṇa</a></p>
					<p><a href="/openlibrary/reconnect/sections/rigveda" data-sveltekit-reload>Ṛgveda</a></p>
				</div>
			{/if}
		</div>
  </div>
  <div class="learningrest">
		<slot></slot>
  </div>
</div>
{#if modalone}
		<InputModal>
			<button slot="close" class="formbutton" on:click={toggleModalOne} on:keydown={fauxfake}>
				Close
			</button>
		</InputModal>
{/if}
{#if modalamar}
	<ModalAmarakosha>
		<button slot="close" class="formbutton" on:click={toggleAmarakosha} on:keydown={fauxfake}>
			Close
		</button>
	</ModalAmarakosha>
{/if}
{#if modaldhatu}
	<ModalDhatu>
		<button slot="close" class="formbutton" on:click={toggleDhatupatha} on:keydown={fauxfake}>
			Close
		</button>  
	</ModalDhatu>
{/if}
{#if modaliast}
	<ModalIAST>
		<button slot="close" class="formbutton" on:click={toggleIAST} on:keydown={fauxfake}>
			Close
		</button>  
	</ModalIAST>
{/if}


<style lang="sass">

.learningheadmain
	h5
		margin: 0
		position: relative
		padding: 4px 8px
		&:hover
			animation: growred 1.4s ease forwards
			&::before
				animation: growwide 1.4s ease forwards
		&::before
			position: absolute
			top: 0
			left: 0
			content: ''
			width: 0%
			height: 100%
			background: #fe4a49
			z-index: -1
	@media screen and (max-width: 1023px)
		h5
			font-size: 32px

.headrestitems
	transition: 0.05s ease
	cursor: pointer
	padding: 4px 8px
	h6
		text-transform: uppercase
		font-weight: 400
	&:hover
		background: #fe4a49
		h6
			color: white

.headrestitems.dropper
	&:hover
		background: none
		h6
			color: #272727

.learningheadrest
	postion: relative
	.dropped
		position: absolute
		top: 144px
		right: 48px

@keyframes growwide
	0%
		width: 0
	100%
		width: 100%

@keyframes growred
	0%
		color: #272727
	100%
		color: white
		

</style>

