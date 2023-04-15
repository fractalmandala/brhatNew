<script lang="ts">

	import { onMount } from 'svelte'
	import { allDhatus } from '$lib/utils/synaptic'

	let dhatus:any

	onMount(async() => {
		dhatus = await allDhatus()
	})

</script>

