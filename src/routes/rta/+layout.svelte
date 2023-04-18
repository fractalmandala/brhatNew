<script lang="ts">

	import { afterUpdate } from 'svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Header from '$lib/components/SubHeader.svelte'
	import RtaLinks from '$lib/links/RtaLinks.svelte'

	let sidebar = false
	let flytime = true


	afterUpdate(() => {
		sidebar = false
		flytime = true
	})

</script>

<svelte:head>
	<HeadComponent>
		Ṛta in Design at
	</HeadComponent>
</svelte:head>

<Header sidebar={sidebar}>
	<div slot="local" class="boxmidrow">
		<RtaLinks flytime={flytime}/>
	</div>
</Header>
<slot></slot>