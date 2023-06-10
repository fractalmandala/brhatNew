<script lang="ts">
	import Header from '$lib/components/SubHeader.svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
</script>

<Header />

<div
	class="cont"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<slot />
</div>

<style lang="sass">

.cont
	min-height: 100vh

.light
	background: #FFFFFF

.dark
	background: #171717

</style>
