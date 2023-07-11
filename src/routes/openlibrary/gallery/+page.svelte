<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		dictionaryInput,
		searchInput
	} from '$lib/stores/metastores';
	import Header from '$lib/components/SubHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Close from '$lib/icons/close.svelte';
	import { apteDevanagari, apteIAST, apteITRANS, apteRomanized } from '$lib/utils/synaptic';
	import supabase from '$lib/utils/db';
	export let form: ActionData;
	export let data;
	let loading = false;

	let devs: any;
	let iasts: any;
	let itranss: any;
	let romans: any;
	let results: any;
	let submodal = false;
	let passCheck = true;
	let searchLang = '';
	let searching = false;

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let themessage = '';
	let imageModal = Array(700).fill(false);
	let hover = Array(700).fill(false);

	async function searchDeva() {
		searching = true;
		results = await apteDevanagari($searchInput);
		searching = false;
	}

	async function searchIAST() {
		searching = true;
		results = await apteIAST($searchInput);
		searching = false;
	}

	async function searchITRANS() {
		searching = true;
		results = await apteITRANS($searchInput);
		searching = false;
	}

	async function searchRomanized() {
		searching = true;
		results = await apteRomanized($searchInput);
		searching = false;
	}

	function setInput() {
		$dictionaryInput = searchLang;
	}

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';

	function handleOverlayClick(e: any) {
		if (e.target === e.currentTarget) {
			submodal = false;
			signupName = 'Full Name';
			signupEmail = 'Email ID';
			password = 'Password';
			repeatPass = 'Confirm Password';
		}
	}

	async function letSignup() {
		const { error } = await supabase.auth.signUp({
			email: signupEmail,
			password: password,
			options: { emailRedirectTo: 'https://www.brhat.in/newsletter' }
		});
		if (error) {
			themessage = 'Error, please try again.';
		} else {
			themessage = 'Success! Please check your email ID for confirmation.';
			signupName = 'Full Name';
			signupEmail = 'Email ID';
			password = 'Password';
			repeatPass = 'Confirm Password';
		}
	}
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header />

<div
	class="outer-box limit"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	{#if data.in}
		<div class="rta-row ytop colgap200">
			<div class="rta-column selection rowgap100">
				<select name="this" bind:value={searchLang} on:change={setInput}>
					<option value="देवनागरी">देवनागरी</option>
					<option value="IAST">IAST</option>
					<option value="iTRANS">iTRANS</option>
					<option value="Romanized">Generic Romanized</option>
				</select>
				<p>Set Search Input Type</p>
			</div>
			{#if $dictionaryInput === 'देवनागरी'}
				<div class="rta-row ytop colgap100">
					<form class="searchform rta-column rowgap100">
						<input type="text" placeholder="Search in Devanagari" bind:value={$searchInput} />
						<p>Example: आशीर्वाद</p>
					</form>
				</div>
			{:else if $dictionaryInput === 'IAST'}
				<form class="searchform rta-column rowgap100 xleft">
					<input type="text" placeholder="Search in IAST" bind:value={$searchInput} />
					<p>Example: āśīrvāda</p>
				</form>
			{:else if $dictionaryInput === 'iTRANS'}
				<form class="searchform rta-column rowgap100 xleft">
					<input type="text" placeholder="Search in iTRANS" bind:value={$searchInput} />
					<p>Example: aashiirvaada</p>
				</form>
			{:else if $dictionaryInput === 'Romanized'}
				<form class="searchform rta-column rowgap100 xleft">
					<input type="text" placeholder="Search in Romanized" bind:value={$searchInput} />
					<p>Example: ashirvad</p>
				</form>
			{:else}
				<div class="searchform rta-column rowgap100 null" />
			{/if}
			<div class="rta-row ytop">
				{#if $searchInput !== '' && $dictionaryInput === 'देवनागरी'}
					<button class="newbutton" on:click={searchDeva}>Search</button>
				{:else if $searchInput !== '' && $dictionaryInput === 'IAST'}
					<button class="newbutton" on:click={searchIAST}>Search</button>
				{:else if $searchInput !== '' && $dictionaryInput === 'iTRANS'}
					<button class="newbutton" on:click={searchITRANS}>Search</button>
				{:else if $searchInput !== '' && $dictionaryInput === 'Romanized'}
					<button class="newbutton" on:click={searchRomanized}>Search</button>
				{/if}
			</div>
		</div>
		<div class="rta-column searchresultsarea bord-top m-top-16 p-top-32">
			{#if searching}
				<p>Searching...</p>
			{/if}
			{#if results && results.length > 0}
				{#each results as item}
					<div class="rta-column">
						<h4>
							{item.line1devanagari} | {item.line1iast} | {item.line1romanized} | {item.itrans}
						</h4>
						<pre>{item.meaning}</pre>
					</div>
				{/each}
			{/if}
		</div>
	{:else}
		<div class="rta-grid grid2 left rowgap300 colgap400">
			<div class="rta-column rowgap200">
				<form class="thisforms" method="post" action="?/login">
					<div class="rta-column rowgap100 null">
						<input
							id="email"
							name="email"
							value={form?.values?.email ?? ''}
							class="input"
							type="email"
							placeholder="Email"
							required
						/>

						<input
							id="password"
							name="password"
							class="input"
							type="password"
							placeholder="Password"
							required
						/>

						<button disabled={loading} class="newbutton red">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
</div>

<style lang="sass">

.searchresultsarea
	h4
		font-weight: 500

.selection
	height: 64px
	select
		padding: 2px 12px
		border-radius: 5px
		border: none
		outline: none
		font-size: 14px
		option
			font-size: 14px
	p
		font-size: 14px

.searchform
	height: 64px
	input
		border-radius: 4px
		border: none
		outline: none
		padding: 3px 12px
		font-size: 14px
	p
		font-size: 14px

// .iconimage
//	object-fit: contain
//	width: 24px
//	height: 24px

.subscribemodal
	display: flex
	align-items: center
	justify-content: center
	width: 100vw
	height: 100vh
	position: fixed
	top: 0
	left: 0
	z-index: 2000
	background: transparent
	backdrop-filter: blur(5px)
	.insubmodal
		border: 1px solid var(--forline)
		background: var(--opposite)
		@media screen and (min-width: 1024px)
			width: calc(100vw - 64px)
			height: calc(100vh - 128px)
		@media screen and (max-width: 1023px)
			width: calc(100vw - 32px)
			min-height: 200px
			padding: 16px

.thisforms
	input
		font-family: 'Hubot-Sans', sans-serif
		font-size: 12px
		padding: 4px 8px
		outline: none
		border: 1px solid var(--forline)
		@media screen and (min-width: 1024px)
			width: 56%

.levelzero
	min-height: calc(100vh - 320px)
	padding-top: 128px

.levelone
	padding-top: 240px

.leveltwo
	margin-top: 160px
	
.dark
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.insubmodal
		input
			border: 1px solid #272727


</style>
