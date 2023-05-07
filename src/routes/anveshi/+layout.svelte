<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import { browser } from '$app/environment'
	import visibilityMode from '$lib/stores/visibility'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	let onHead = true
	let sidebar = false
	let fake = false


</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<AnveshiLinks flytime={onHead}></AnveshiLinks>
	</div>
</Header>
<div class="type" class:light={$visibilityMode} class:dark={!$visibilityMode}>
	<slot></slot>
</div>

<style lang="sass">

.light
	background: white

.dark
	background: #171717

</style>