<script lang="ts">

	import Header from '$lib/components/SubHeader.svelte'
	import DrashtaLinks from '$lib/links/DrashtaLinks.svelte'
	let onHead = true
	let sidebar = false

</script>


<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<DrashtaLinks flytime={onHead}></DrashtaLinks>
	</div>
</Header>
<slot></slot>