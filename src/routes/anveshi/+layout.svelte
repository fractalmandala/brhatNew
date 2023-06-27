<script lang="ts">
	import Header from '$lib/components/SubHeader.svelte';
	import { themeMode } from '$lib/stores/globalstores';
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte';
	let onHead = true;
	let sidebar = false;
</script>

<Header>
	<div slot="local" class="boxmidrow">
		<AnveshiLinks flytime={onHead} />
	</div>
</Header>
<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>
