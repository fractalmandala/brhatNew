<script lang="ts">

	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import SubHeader from '$lib/components/SubHeader.svelte'
	import Logo from '$lib/anims/LogoAnveshi.svelte'

</script>

<svelte:head>
	<HeadComponent>
		Bṛhat Anveṣī at 
	</HeadComponent>
</svelte:head>

<slot></slot>

<style lang="sass">

.inlinks
	display: flex
	column-gap: 16px
	@media screen and (min-width: 1024px)
		flex-direction: row
	@media screen and (max-width: 1023px)
		flex-direction: column

</style>