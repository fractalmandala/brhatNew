<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { themeMode } from '$lib/stores/globalstores'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	let onHead = true

</script>

<Header>
	<div slot="local" class="boxmidrow">
		<DrashtaLinks flytime={onHead}></DrashtaLinks>
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