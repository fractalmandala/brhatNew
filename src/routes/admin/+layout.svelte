<script lang="ts">
	import Header from '$lib/components/SubHeader.svelte';
	import { themeMode } from '$lib/stores/globalstores';
</script>

<Header>
	<div slot="local" class="boxmidrow">
		<a href="/admin">Admin</a>
	</div>
</Header>

<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot />
</div>

<style lang="sass">

.light
	background: #ffffff

.dark
	background: #171717

</style>
