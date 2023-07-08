<script lang="ts">
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import BOLSidebar from '$lib/reader/BOLSidebar.svelte';
</script>

<div
	class="rta-row"
	class:lzero={$breakZero}
	class:lone={$breakOne}
	class:ltwo={$breakTwo}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="row-side">
		{#if !$breakTwo}
			<BOLSidebar />
		{/if}
	</div>
	<div class="row-main rta-column">
		<slot />
	</div>
</div>

<style lang="sass">

.rta-row.lzero
	min-height: 100vh
	padding-top: 128px
	width: 100%
	padding-left: 32px
	padding-right: 32px
	.row-side
		width: 256px
	.row-main
		width: calc(100% - 256px)
		padding-left: 64px
		padding-bottom: 80px

.rta-row.lone
	min-height: 100vh
	padding-top: 128px
	width: 100%
	padding-left: 32px
	padding-right: 32px
	.row-side
		width: 256px
	.row-main
		width: calc(100% - 256px)
		padding-left: 64px
		padding-bottom: 80px

.rta-row.ltwo
	min-height: 100vh
	padding-top: 88px
	width: 100%
	padding-left: 16px
	padding-right: 16px
	.row-main
		padding-bottom: 64px


</style>
