<script lang="ts">

	import { onMount } from 'svelte'
	import { latestDhitiPost, latestDhitiThree, allFeaturedPosts, allBodhas, allCandP, allDharmaToday, allIKS } from '$lib/utils/localpulls'

	let latestpost:string|any[]
	let nextthreeposts:string|any[]
	let featuredposts:string|any[]

	onMount(async() => {
		latestpost = await latestDhitiPost()
		nextthreeposts = await latestDhitiThree()
		featuredposts = await allFeaturedPosts()
	})

</script>