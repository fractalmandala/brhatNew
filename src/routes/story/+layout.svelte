<script lang="ts">

	import { afterUpdate} from 'svelte'
	import { fly} from 'svelte/transition'
	import { page } from '$app/stores'
		
	let theLink:any
	let key = theLink

	afterUpdate(async() => {
		theLink = $page.url.pathname
	})
	

</script>

{#key theLink}
<div in:fly={{ duration: 1200, delay: 1200}} out:fly={{duration: 1000, delay: 0}}>
	<slot></slot>
</div>
{/key}