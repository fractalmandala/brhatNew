<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import AnveshiLinks from '$lib/links/AnveshiLinks.svelte'
	let onHead = true
	let sidebar = false

</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<AnveshiLinks flytime={onHead}></AnveshiLinks>
	</div>
</Header>
