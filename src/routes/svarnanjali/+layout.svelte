<script lang="ts">
	import Header from '$lib/components/SubHeader.svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import SvarLinks from '$lib/links/SvarnanjaliLinks.svelte';
	import { userLang } from '$lib/stores/metastores';
	let onHead = true;

	function setHindi() {
		$userLang = 'Hindi';
	}

	function setEnglish() {
		$userLang = 'English';
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header>
	<div slot="local" class="boxmidrow">
		<button class="blank-button" class:activated={$userLang === 'Hindi'} on:click={setHindi}
			>Hindi</button
		>
		<button class="blank-button" class:activated={$userLang === 'English'} on:click={setEnglish}
			>English</button
		>
	</div>
</Header>
<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.type
	width: 100vw

.light
	background: white

.dark
	background: #171717

.boxmidrow
	.blank-button
		color: #575757
	.blank-button.activated
		color: white

</style>
