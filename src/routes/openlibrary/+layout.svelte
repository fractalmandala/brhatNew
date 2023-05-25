<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { themeMode } from '$lib/stores/globalstores'

</script>

<Header>
</Header>

<div class="type" class:light={$themeMode} class:dark={!$themeMode}>
	<slot></slot>
</div>

<style lang="sass">


.light
	background: #FFFFFF

.dark
	background: #171717

</style>