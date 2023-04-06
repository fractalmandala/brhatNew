<script lang="ts">

	import { onMount } from 'svelte'
	import { allCourses } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import Modal from '$lib/components/Modal.svelte'

	let courses:string|any[]


	onMount(async() => {
		courses = await allCourses()
	})
</script>


<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"></ParallaxImage>
	</div>
	<div class="title-box x1 pads">
		<div class="a-title">
			<h3>Bṛhat Draṣṭā</h3>
		</div>
		<div class="a-box box extra">
			<h5>
				is an offering in deep learning that extends courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</h5>
		</div>
	</div>
	<div class="title-box x2 pads">
		<div class="a-title">
			<h4>Courses</h4>
		</div>
		<div class="a-box gridof2">
			{#if courses && courses.length > 0}
				{#each courses as item}
					<div class="card-b">
						<div class="card-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="card-body">
							<h6><a href="/drashta/course/{item.course}" target="_self">{item.name}</a></h6>
							<p>with {item.ins}</p>
							<div class="card-meta boxr">
								<small>{item.status}</small>
								<small>{item.datefrom}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="title-box x3 pads">
		<div class="a-title">
			<h4>Programs</h4>
		</div>
		<div class="a-box gridof3">
			<div class="card-c">
				<h6>Schools of Thought</h6>
			</div>
			<div class="card-c">
				<h6>Draṣṭās</h6>
			</div>
			<div class="card-c">
				<h6>Firekeepers of Civilization</h6>
			</div>
		</div>
	</div>
	<Modal></Modal>
</div>

<style lang="sass">

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 60vh

.x1
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center
	@media screen and (max-width: 1023px)
		padding-top: 64px
		padding-bottom: 64px

.x2
	padding-bottom: 64px
	.card-b
		h6
			text-transform: capitalize

.x3
	padding-bottom: 64px


</style>

