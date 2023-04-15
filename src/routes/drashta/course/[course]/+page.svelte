<script lang="ts">

	import { onMount } from 'svelte'
	import { courseContents, courseTakeaways, courseInstructor } from '$lib/utils/supapulls'
	let y:number
	let dynamizer:any
	let conts: any
	let takes: any
	let dhits:any

	onMount(async() => {
		conts = await courseContents(dynamizer)
		takes = await courseTakeaways(dynamizer)
		dhits = await courseInstructor(dynamizer)
		
	})
	export let data

	

</script>

<svelte:window bind:scrollY={y}/>

<div class="type">
	<div class="x0">
		<div class="boxc">
			<h2>
				{data.name}
			</h2>
		</div>
		<div class="ground" style="transform: translateY({y/4}px); background-image: url('{data.image}')">
		</div>
	</div>
	<div class="plain-one x1 pads">
		<h5>
			{data.content}
		</h5>
	</div>
</div>


<style lang="sass">

.x0
	display: flex
	overflow: hidden
	.boxc h2
		text-transform: capitalize
	@media screen and (min-width: 1024px)
		flex-direction: row
		.boxc
			width: 60%
		.ground
			width: 40%
	@media screen and (max-width: 1023px)
		flex-direction: column-reverse
		.boxc
			width: 100%
			height: 40vh
		.ground
			width: 100%
			height: 40vh
	
.x1
	min-height: 100vh
	@media screen and (min-width: 1024px)
		padding-left: 20vw
		padding-right: 24vw
		padding-top: 64px
		padding-bottom: 64px
	@media screen and (max-width: 1023px)
		padding-left: 6vw
		padding-right: 6vw

.ground
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	height: 100vh
	width: 50%

.boxc
	display: flex
	flex-direction: column
	justify-content: center
	padding-left: 6vw

</style>