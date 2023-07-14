<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';

	export let typography = 'pagila';
	export let metaTitle = '';
	export let metaDescription = '';
	export let metaUrl = '';
	export let metaImage = '';
</script>

<HeadComponent title={metaTitle} {metaDescription} {metaUrl} {metaImage} />

<div class="pageShellOuter">
	<main class="pageShellInner {typography}">
		<slot />
	</main>
</div>

<style lang="sass">

.pageShellOuter
	width: 100vw
	height: 100%
	box-sizing: border-box
	display: flex
	flex-direction: column
	align-items: center
	min-height: 100vh
	padding-bottom: 128px
	.pageShellInner
		overflow: hidden
	@media screen and (min-width: 1200px)
		.pageShellInner
			width: 1072px
	@media screen and (min-width: 1024px) and (max-width: 1199px)
		.pageShellInner
			width: 896px
	@media screen and (min-width: 769px) and (max-width: 1023px)
		.pageShellInner
			width: 640px
	@media screen and (max-width: 768px) and (min-width: 576px)
		padding-top: 120px
		.pageShellInner
			width: 512px
	@media screen and (max-width: 575px)
		padding-top: 32px
		padding-left: 24px
		padding-right: 24px
		.pageShellInner
			width: 100%

</style>
