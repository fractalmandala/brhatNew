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

<div class="type dhiti">
	<div class="x0 pads">
		<div class="latestsingle bdr">
			{#if latestpost && latestpost.length > 0}
				{#each latestpost as item}
					<div class="card-image">
						<img src={item.meta.image} alt={item.meta.title}/>
					</div>
					<div class="card-body">
						<h3><a href="{item.path}">{item.meta.title}</a></h3>
						<p>{item.meta.author}
							{#if item.meta.authortwo && item.meta.authortwo.length > 0}
							<span> and {item.meta.authortwo}</span>
							{/if}
						</p>
						<small>{item.meta.category}</small>
						<cite>{item.meta.tags}</cite>
					</div>
				{/each}
			{/if}
		</div>
		<div class="latestthree">
			{#if nextthreeposts && nextthreeposts.length > 0}
				{#each nextthreeposts as item}
					<div class="card-b">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href="{item.path}">{item.meta.title}</a></h6>
							<p>{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<small>{item.meta.category}</small>
							<cite>{item.meta.tags}</cite>
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="featured">
			{#if featuredposts && featuredposts.length > 0}
				{#each featuredposts as item}
					<div class="card-row">
						<div class="card-image">
							<img src={item.meta.image} alt={item.meta.title}/>
						</div>
						<div class="card-body">
							<h6><a href={item.path}>{item.meta.title}</a></h6>
							<p>{item.meta.author}
								{#if item.meta.authortwo && item.meta.authortwo.length > 0}
									<span> and {item.meta.authortwo}</span>
								{/if}
							</p>
							<div class="boxr card-meta">
								<small>{item.meta.tags}</small>
								<small>{item.meta.category}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>

</div>


<style lang="sass">

.x0
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto auto
	@media screen and (min-width: 1024px)
		align-content: start
		gap: 0 32px
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-areas: "latestsingle latestsingle latestsingle featured" "latestthree latestthree latestthree featured"


.latestsingle
	grid-area: latestsingle
	display: flex
	@media screen and (min-width: 1024px)
		flex-direction: row
		.card-image
			width: 33.33%
			height: 360px
		.card-body
			width: 66.66%

.featured
	grid-area: featured

.latestthree
	grid-area: latestthree
	display: grid
	grid-auto-flow: row
	grid-template-rows: auto
	@media screen and (min-width: 1024px)
		gap: 0 32px
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."

</style>