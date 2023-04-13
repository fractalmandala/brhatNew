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

<div class="toppara type">
	<div class="boxc">
		<h2>
			{data.name}
		</h2>
	</div>
	<div class="ground" style="transform: translateY({y/4}px); background-image: url('{data.image}')"></div>
</div>
<div class="plain-one x1 pads">
	<h6>
		{data.content}
	</h6>
</div>


<style lang="sass">

.toppara
	height: 100vh
	overflow: hidden
	display: flex
	flex-direction: row


.x1
	height: 100vh
	h6
		font-size: 27px
		font-weight: 400
	padding-left: 20vw
	padding-right: 24vw
	padding-top: 64px
	padding-bottom: 64px

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