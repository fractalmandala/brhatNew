<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, sideMode } from '$lib/stores/globalstores';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import type { SearchItem } from '$lib/types/SearchItem';
	import { searchitems } from '$lib/filed/searchindex';
	import { slide } from 'svelte/transition';
	import AboutLinks from '$lib/links/AboutLinks.svelte';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte';

	let iW: number;
	let breakPoint: boolean;
	let fake = false;
	let xaxis: number;
	let yaxis: number;
	let inputElement: HTMLInputElement;
	let inputValue = '';
	let searchResults: SearchItem[] = [];
	let isFocused = false;
	let showResults = false;
 let expandDrashta = false
 let expandAnveshi = false
 let expandAbout = false

 function toggleAbout(){
  expandAbout = !expandAbout
 }

 function toggleDrashta(){
  expandDrashta = !expandDrashta
 }

 function toggleAnveshi(){
  expandAnveshi = !expandAnveshi
 }

	function fauxfake() {
		fake = !fake;
	}

	async function handleInput() {
		if (inputValue.length > 2) {
			searchResults = searchitems.filter(
				(item) => item.heading.toLowerCase().includes(inputValue.toLowerCase()),
				(showResults = true)
			);
		} else {
			searchResults = [];
		}
	}

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		inputValue = '';
		isFocused = false;
	}

	function toggleSideBar() {
		if (browser) {
			sideMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('sideMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function handleMouseLeave() {
		if ($sideMode) {
			sideMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('sideMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	$: if (breakPoint === true) {
		xaxis = 0;
		yaxis = -600;
	} else {
		xaxis = 480;
		yaxis = 0;
	}

	onMount(() => {
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:innerWidth={iW} />

{#if $sideMode}
	<div
		class="appsidebar modal"
		class:light={$themeMode}
		class:dark={!$themeMode}
		in:fly={{ x: xaxis, y: yaxis, duration: 650, easing: expoInOut }}
		out:fly={{ x: xaxis, y: yaxis, duration: 650, easing: expoInOut }}
		data-lenis-prevent
		on:mouseleave={handleMouseLeave}
	>
		<div class="right colgap200" id="searcharea">
			<form class="rta-row colgap200 xend">
				<input
					type="text"
					placeholder="Search..."
					bind:value={inputValue}
					bind:this={inputElement}
					on:blur={handleBlur}
					on:input={handleInput}
					on:focus={handleFocus}
				/>
			</form>
		</div>
		{#if searchResults.length && showResults}
			<div class="search-results rta-column all-p-16 rowgap100" transition:slide>
				<h6 class="ta-r">Results:</h6>
				{#each searchResults as result}
					<a href={result.url} on:click={toggleSideBar} on:keydown={fauxfake}>
						<p class="tt-c ta-r">
							{result.heading}
						</p>
					</a>
				{/each}
			</div>
		{/if}
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/newsletter">Bṛhat Adya</a></h5>
		</div>
		<div class="linksbox ta-r">
			<h5 on:click={toggleSideBar} on:keydown={fauxfake}><a href="/drashta">Bṛhat Draṣṭā</a></h5>
   <button class="blank-button rta-column xright" on:click={toggleDrashta} style="color: var(--greyish)">{#if expandDrashta}Close Courses{:else}Expand All Courses{/if}</button>
			{#if expandDrashta}
    <div on:click={toggleSideBar} on:keydown={fauxfake} class="rta-column ta-r rowgap100">
    <DrashtaLinks flytime={$sideMode} />
    </div>
   {/if}
		</div>
		<div class="linksbox ta-r">
			<h5 on:click={toggleSideBar} on:keydown={fauxfake}><a href="/anveshi">Bṛhat Anveṣī</a></h5>
   <button class="blank-button rta-column xright" on:click={toggleAnveshi} style="color: var(--greyish)">{#if expandAnveshi}Close Chapters{:else}Expand All Chapters{/if}</button>
   {#if expandAnveshi}
    <div on:click={toggleSideBar} on:keydown={fauxfake} class="rta-column ta-r rowgap100">
     <AnveshiLinks />
    </div>
   {/if}
		</div>
  <div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
   <h5><a href="/bodha">Bodha</a></h5>
  </div> 
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/svarnanjali">Svarṇāñjali</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/mrdanga">Bṛhad Mṛdaṅga</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/dhiti">Dhīti</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/openlibrary">Bṛhat Open Library</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/mandala">Fractal Maṇḍala</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/rta">Ṛta in Design</a></h5>
		</div>
		<div class="linksbox ta-r">
			<h5 on:click={toggleSideBar} on:keydown={fauxfake}><a href="/about">About</a></h5>
   <button class="blank-button rta-column xright" on:click={toggleAbout} style="color: var(--greyish)">{#if expandAbout}Close About Us{:else}Expand All About Us{/if}</button>
			{#if expandAbout}
    <div on:click={toggleSideBar} on:keydown={fauxfake} class="rta-column ta-r rowgap100">
     <AboutLinks flytime={$sideMode} />
    </div>
   {/if}
		</div>
  <div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
   <h5><a href="/members">Members</a></h5>
  </div>
	</div>
{/if}

<style lang="sass">

#searcharea
	position: relative
	input
		padding: 4px 8px
		border-radius: 10px
		font-size: 14px
		width: 100%

#searcharea
	input
		border: 1px solid var(--contraster2)

.right
	display: flex
	flex-direction: row
	align-items: center
	@media screen and (min-width: 1024px)
		padding: 8px 32px
		justify-content: flex-end
		form
			width: 64%
	@media screen and (max-width: 1023px)
		padding: 8px 32px
		.rta-row
			width: 100%

.search-results
	@media screen and (min-width: 1024px)
		padding: 16px 32px
		a
			&:hover
				p
					color: #fe4a49
	@media screen and (max-width: 1023px)
		padding: 16px 32px
		border-bottom: 1px solid var(--contraster)

.ta-r
	text-align: right

.appsidebar
	right: 0
	top: 0
	display: flex
	flex-direction: column
	height: 100vh
	overflow-x: hidden
	z-index: 1000
	position: fixed
	overflow-y: scroll
	backdrop-filter: blur(8px)
	@media screen and (min-width: 1024px)
		width: 480px
		padding-top: 64px
	@media screen and (max-width: 1023px)
		width: 100vw
		z-index: 899
		padding-top: 88px

.appsidebar.dark
	background: #111111

.appsidebar.light
	background: #fafafa

.appsidebar::-webkit-scrollbar
	width: 8px

.appsidebar::-webkit-scrollbar-thumb
	background: #fe4a49

.linksbox
	display: flex
	flex-direction: column
	padding: 12px 32px
	position: relative
	border-bottom: 1px solid var(--contraster2)
	h5, h5 a
		margin: 0
		text-align: right
		text-transform: uppercase
		padding-bottom: 0px
		cursor: pointer
		color: var(--opposite)
		letter-spacing: -1px
		&:hover
			color: #fe4a49
	@media screen and (min-width: 1024px)
		row-gap: 8px
		h5
			font-size: 30px
			font-weight: 500
	@media screen and (max-width: 1023px)
		padding: 12px 24px
		row-gap: 4px
		h5
			font-size: 32px
			font-weight: 500

</style>
