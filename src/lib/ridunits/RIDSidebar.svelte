<script lang="ts">
	import { onMount } from 'svelte';
	import {
		themeMode,
		sideMode,
		breakZero,
		breakOne,
		breakTwo,
		showChip,
		chipStore
	} from '$lib/stores/globalstores';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import type { SearchItem } from '$lib/types/SearchItem';
	import { searchitems } from '$lib/filed/searchindex';
	import { slide } from 'svelte/transition';
	import CompToggle from '$lib/ridunits/CompToggle.svelte';
	import AboutLinks from '$lib/links/AboutLinks.svelte';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';
	import AryavartaLinks from '$lib/links/AryavartaLinks.svelte';
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte';
	import MandalaLinks from '$lib/links/MandalaLinks.svelte';
	import RtaLinks from '$lib/links/RtaLinks.svelte';

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

	function toggleVisibility() {
		if (browser) {
			themeMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('themeMode', JSON.stringify(newMode));
				return newMode;
			});
		}
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

	function handleThemeAndClose() {
		toggleVisibility();
		toggleSideBar();
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
			<div class="hidethis" on:click={toggleVisibility} on:keydown={fauxfake}>
				<CompToggle />
			</div>
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
			<h5><a href="/drashta">Bṛhat Draṣṭā</a></h5>
			<DrashtaLinks flytime={$sideMode} />
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/anveshi">Bṛhat Anveṡī</a></h5>
			<AnveshiLinks flytime={$sideMode} />
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
			<h5><a href="/rta">Ṛta in Design</a></h5>
		</div>
		<div class="linksbox ta-r" on:click={toggleSideBar} on:keydown={fauxfake}>
			<h5><a href="/about">About</a></h5>
			<AboutLinks flytime={$sideMode} />
		</div>
	</div>
{/if}

<style lang="sass">

.hidethis
	@media screen and (min-width: 900px)
		display: none

#searcharea
	position: relative
	input
		padding: 4px 8px
		border-radius: 10px
		font-size: 14px
		width: 100%

#searcharea
	input
		border: none

.right
	display: flex
	flex-direction: row
	align-items: center
	@media screen and (min-width: 1024px)
		padding: 8px 32px
		justify-content: flex-end
	@media screen and (max-width: 1023px)
		padding: 8px 32px
		.rta-row
			width: calc(100% - 56px)

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
	width: 40vw
	overflow-x: hidden
	z-index: 1000
	position: fixed
	overflow-y: scroll
	@media screen and (min-width: 1024px)
		padding-top: 96px
	@media screen and (max-width: 1023px)
		width: 100vw
		z-index: 899
		padding-top: 88px

.appsidebar.dark
	background: #171717

.appsidebar.light
	background: #171717

.appsidebar::-webkit-scrollbar
	width: 2px

.appsidebar::-webkit-scrollbar-thumb
	background: #fe4a49

.linksbox
	display: flex
	flex-direction: column
	padding: 16px 32px
	position: relative
	border-bottom: 1px solid #272727
	h5, h5 a
		margin: 0
		text-align: right
		text-transform: uppercase
		padding-bottom: 8px
		cursor: pointer
		color: white
	&:hover
		h5, h5 a
			color: #fe4a49
		&::after
			animation: lineforward 0.32s var(--cubeb) forwards
	&::after
		position: absolute
		bottom: 0
		right: 0
		content: ''
		height: 1px
		background: #474747
		width: 0
	@media screen and (min-width: 1024px)
		h5
			font-size: 32px
			font-weight: 700
	@media screen and (max-width: 1023px)
		h5
			font-size: 32px
			font-weight: 700

@keyframes lineforward
	0%
		width: 0
	100%
		width: 100%


</style>
