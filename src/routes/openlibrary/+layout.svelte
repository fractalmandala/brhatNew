<script lang="ts">

	import { onMount } from 'svelte'
 	import { page } from '$app/stores'
	import Header from '$lib/components/SubHeader.svelte'

	let dropdown = false
	let fake = false
	let link:any
	let sidebar = false

	function toggleDropdown(){
		dropdown = !dropdown
	}

	function fauxfake(){
		fake = !fake
	}

	onMount(() => {
		link = $page.url
	})

</script>

<svelte:head>
<title>Discover and Reconnect at Bṛhat Open Library</title>
</svelte:head>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<p><a href="/openlibrary">Library Home</a></p>
		<div class="box" id="dropper" on:click={toggleDropdown} on:keydown={fauxfake}>
			<p class="dropperp">Texts</p>
			{#if dropdown}
				<div class="box">
					<a href="/openlibrary/reconnect/sections/ramayana">Rāmāyaṇa</a>
					<a href="/openlibrary/reconnect/sections/rigveda">Ṛgveda</a>
				</div>
			{/if}
		</div>
		<p><a href="/openlibrary/reconnect/sections/dhatus">Dhātus</a></p>
		<p><a href="/openlibrary/reconnect/sections/amarakosha">Amarakośaḥ</a></p>
		<p><a href="/openlibrary/reconnect/sections/dictionary">Dictionary</a></p>
		<p><a href="/openlibrary/reconnect/sections/puranas">Purāṇas</a></p>
	</div>
</Header>
<slot></slot>