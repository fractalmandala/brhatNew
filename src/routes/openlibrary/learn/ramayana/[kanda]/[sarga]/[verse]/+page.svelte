<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { versesofRamayana } from '$lib/utils/synaptic'

	let url:any
	let kanda:any
	let verses:any
	let sarga:any

	onMount(async() => {
		url = $page.url.pathname
		kanda = url.substr(28,1)
		sarga = data.sarga
		verses = await versesofRamayana(kanda, sarga)
	})

	export let data

</script>


<div>
{data.id}
</div>