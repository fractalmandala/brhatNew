<script lang="ts">
	
 	import { page } from '$app/stores';
	import { onMount } from 'svelte'
	import Header from '$lib/components/SubHeader.svelte'
	import PageTrans from '$lib/reader/PageTrans.svelte'
	import InputModal from '$lib/reader/InputModal.svelte'
	import ModalAmarakosha from '$lib/reader/ModalAmarakosha.svelte'
	import ModalDhatu from '$lib/reader/ModalDhatu.svelte'
	import ModalIAST from '$lib/reader/ModalIAST.svelte'

	import '$lib/styles/reader.sass'

	let modalone:boolean = false
	let dropdown = false
	let sidebar = false
	let modaldhatu = false
	let modalamar = false
	let modaliast = false
	let dropper = false
	let fake = false
	let link:any

	function toggleDropdown(){
		dropdown = !dropdown
	}

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

<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<p>Dhātus</p>
		<p>Amarakośaḥ</p>
		<p>Dictionary</p>
		<p>Purāṇas</p>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={fauxfake}>
			<p class="droppperp">Texts</p>
			{#if dropdown}
				<div class="box">
					<a href="/openlibrary/reconnect/sections/ramayana">Rāmāyaṇa</a>
					<a href="/openlibrary/reconnect/sections/rigveda">Ṛgveda</a>
				</div>
			{/if}
		</div>
		<a href="/openlibrary">Library Home</a>
	</div>
</Header>

<slot></slot>