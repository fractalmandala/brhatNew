<script lang="ts">

	import Header from '$lib/components/DhitiHeader.svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import LogDhiti from '$lib/logos/LogDhiti.svelte'
	let sidebar = false

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<Header sidebar={sidebar}>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</Header>

<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>

<style lang="sass">

.light
	background: #ffffff

.dark
	background: #171717

</style>
