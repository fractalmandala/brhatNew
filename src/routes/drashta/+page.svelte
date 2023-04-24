<script lang="ts">

	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import RevealH1 from '$lib/components/RevealH1.svelte'
	import RevealH2 from '$lib/components/RevealH1.svelte'
	import HeadComponent from '$lib/components/HeadComponent.svelte'
	import Button from '$lib/anims/ButtonBlue.svelte'
	import ButtonTwo from '$lib/anims/ButtonBlue.svelte'
	import ButtonThree from '$lib/anims/ButtonBlue.svelte'
	import ButtonFour from '$lib/anims/ButtonBlue.svelte'
	import { allCourses } from '$lib/utils/supapulls'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	let selectedCategory:boolean[] = Array(5).fill(false)
	selectedCategory[1] = true
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleCategory(index:number) {
		selectedCategory[index] = !selectedCategory[index]
		for ( let i = 0; i < selectedCategory.length; i++) {
			if ( i !== index && selectedCategory[i] === true ) {
				selectedCategory[i] = false
			}
		}		
	}

	let courses:string|any[]


	onMount(async() => {
		courses = await allCourses()
	})
</script>

<svelte:head>
	<HeadComponent>
		Bṛhat Draṣṭā at 
	</HeadComponent>
</svelte:head>


<div class="type">
	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/drashtaparallax.webp')"></ParallaxImage>
	</div>
	<div class="stickycols xz100 pads">
		<div class="holds-sticky">
			<h3>Bṛhat Draṣṭā</h3>
			<h5>
				is an offering in deep learning that extends courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśanas).
			</h5>
		</div>
		<div class="scrolls-sticky">
			{#if courses && courses.length > 0}
				{#each courses as item}
					<div class="anveshi-row">
						<div class="anveshi-image">
							<img src={item.image} alt={item.id}/>
						</div>
						<div class="anveshi-body">
							<RevealH1>
								<h5><a href="/drashta/course/{item.course}">{item.name}</a></h5>
							</RevealH1>
							<p>with {item.ins}</p>
							<div class="cardothers">
								<small style="color: var(--drash)">{item.status}</small>
								<small style="color: #878787">{item.datefrom}</small>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div> 
	<div class="stickycols alt xz101 pads">
		<div class="scrolls-sticky">
			{#if selectedCategory[1]}
				<div class="box" in:scale={{ duration: 200, delay: 200}} out:scale={{ duration: 100, delay: 0}}>
					<p>What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.</p>
					<p>
						This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – dṛṣya and darśana.
					</p>
					<p>
						The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
					</p>
					<h5>
						The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.
					</h5>
					<Button><a href="/drashta/schools">Read More</a></Button>
				</div>
			{/if}
			{#if selectedCategory[2]}
				<div class="box" in:scale={{ duration: 200, delay: 200}} out:scale={{ duration: 100, delay: 0}}>
						<p>	
							It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
						</p>
						<p>
							The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
						</p>
						<h5>
							One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
						</h5>
					<ButtonTwo><a href="/drashta/schools">Read More</a></ButtonTwo>
				</div>
			{/if}
			{#if selectedCategory[3]}
				<div class="box" in:scale={{ duration: 200, delay: 200}} out:scale={{ duration: 100, delay: 0}}>
						<p>
							Hindu civilization today navigates a precarious turn. Great thought churning is going on for necessary changes in our society, culture and civilization. It is imperative at this crucial juncture to learn from the ancient as well as contemporary fire keepers of civilization – the great men of knowledge and wisdom, jñāna and sādhanā, who kept the flame of our civilization burning.
						</p>
						<p>
							Civilization is an eternal yajña. And just as every yajña needs a yajamāna, the one who performs or protects dharma, so does the yajña of civilization. Agni, fire, is a symbol of civilization. It needs to be continuous for a civilization to be living. That is why at many places in Bhāratavarṣa, yajñās keep going incessantly.
						</p>
						<p>
							This motif is all pervasive in Hindu cosmos. Just as the yajña fire needs to keep burning, so did the fire in the rasoi, the kitchen of every house, until it was replaced by LPG. The fire embers were kept in the night so that they could once again produce fire in the morning. Hindus, in this way, were literally, the fire keepers of civilization. It gives to us our name- we are Bharatas, the ones who bear or carry forward.
						</p>
						<h5>
							On an intellectual and civilizational level, this work is done by great rṣīs, scholars, thinkers and dārśanikas. By keeping the fire of knowledge eternally burning by continuous learning and teaching, through the great gurū-śiṣya paramparā, they kept the flame of Indic Knowledge Traditions burning. Courses in this Program:
						</h5>
						<div class="card-row drash">
							<ButtonThree><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></ButtonThree>
							<ButtonFour><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></ButtonFour>
						</div>
				</div>
			{/if}
		</div>
		<div class="holds-sticky">
			<RevealH2>
				Programs
			</RevealH2>
			<div class="box" style="row-gap: 8px; margin-top: 32px">
				<h6 on:click={() => toggleCategory(1)} on:keydown={fauxfake} class:selectedhead={selectedCategory[1]}>Schools of Thought</h6>
				<h6 on:click={() => toggleCategory(2)} on:keydown={fauxfake} class:selectedhead={selectedCategory[2]}>Draṣṭās</h6>
				<h6 on:click={() => toggleCategory(3)} on:keydown={fauxfake} class:selectedhead={selectedCategory[3]}>Firekeepers of Civilization</h6>
			</div>
		</div>
	</div>
</div>

<style lang="sass">

.type
	padding--top: 64px

.x0
	height: 100vh
	overflow: hidden
	@media screen and (max-width: 1023px)
		height: 50vh
		margin-top: 64px

.xz101
	padding-top: 64px
	padding-bottom: 120px
	h6
		color: var(--drash)
		border: 1px solid var(--drash)
		&:hover
			color: white
			background: var(--drash)

</style>

