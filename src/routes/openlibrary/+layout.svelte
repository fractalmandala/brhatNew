<script lang="ts">

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import Header from '$lib/components/SubHeader.svelte'
 	import { page } from '$app/stores'
	import visibilityMode from '$lib/stores/visibility'

	let dropdown = false
	let fake = false
	let link:any
	let sidebar = false

	function toggleVisibility() {
	  if (browser) {
	    visibilityMode.update((mode) => {
	      const newMode = !mode;
	      localStorage.setItem('visibilityMode', JSON.stringify(newMode));
	      return newMode;
	    });
	  }
	}

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
	<div class="rta-row colgap-8" slot="modeswitch" on:click={toggleVisibility} on:keydown={fauxfake}>
		<div class="togglemode" class:dark={!$visibilityMode} class:general={$visibilityMode}>
			<div class="togglemodeball"></div>
		</div>	
	</div>
</Header>

<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>