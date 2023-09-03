<script lang="ts">
	import Header from '$lib/components/NewHeader.svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
</script>

<Header />

<div class:light={!$themeMode} class:dark={$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: #FFFFFF

.dark
	background: #171717

</style>
