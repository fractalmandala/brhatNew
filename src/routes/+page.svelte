<script lang="ts">

	import { onMount } from 'svelte'
	import { createCurateConsult, brhatUpdates, latestVidsVar } from '$lib/utils/supapulls'

	let threeactions: string|any[]
	let updates: string|any[]
	let count:number = 4
	let videos: string|any[]

	onMount(async() => {
		threeactions = await createCurateConsult()
		updates = await brhatUpdates()
		videos = await latestVidsVar(count)
	})	

</script>

<div class="type">
	<div class="type-three x1 pads">
		<div class="a-title">
			<h1><span style="color: #fe4a49">Bṛhat</span><br>is a culture engine</h1>
		</div>
		<div class="a-mid">
			<h5>
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h5>
			<button class="redbutton"><a href="/">Know More</a></button>
		</div>
		<div class="a-box">
			{#if threeactions && threeactions.length > 0}
				{#each threeactions as item}
					<div class="box">
						<h6>{item.name}</h6>
						<pre>{item.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="type-a x2 pads">
		<div class="a-title">
			<h3>New and Recent</h3>
		</div>
		<div class="a-box">
			{#if updates && updates.length > 0}
				{#each updates as item}
					<div class="card-a">
						<div class="card-image">
							<img src={item.image} alt={item.id} />
						</div>
						<div class="card-body">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}...<span style="color: #fe4a49; font-weight: bold; text-transform: capitalize"><a href={item.link} target="_blank" rel="noreferrer">{item.buttontext}</a></span></p>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="type-three x3 pads">
		<div class="a-title">
			<h3>Explore Visual Content</h3>
		</div>
		<div class="a-mid">
			<h5>
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. View the latest videos below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					style="color: #fe4a49"
					rel="noreferrer">YouTube channel</a
				>
			</h5>
			<button class="redbutton"><a href="/">Visit Bṛhadmṛdaṅga</a></button>
		</div>
		<div class="a-box four bytwo">
			{#if videos && videos.length > 0}
				{#each videos as item}
					<div class="card-video">
						<iframe width=100% height=100% loading="lazy" src="https://www.youtube.com/embed/{item.videoid}" title={item.name}></iframe>
						<p>{item.name}</p>						
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="type-a x4 pads">
		<div class="a-title">
			<h3>Latest at Dhīti</h3>
		</div>
		<div class="a-box">
			
		</div>
	</div>
</div>

<style lang="sass">

.x1, .x2, .x3
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.x1, .x2, .x3
	@media screen and (max-width: 1023px)
		margin-bottom: 48px

</style>
