<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { themeMode } from '$lib/stores/globalstores'
	import SvarLinks from '$lib/links/SvarnanjaliLinks.svelte'	
	let onHead = true



</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

<Header>
	<div slot="local" class="boxmidrow">
		<SvarLinks flytime={onHead}></SvarLinks>
	</div>
</Header>
<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot></slot>
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>