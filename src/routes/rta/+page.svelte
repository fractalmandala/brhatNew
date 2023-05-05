<script lang="ts">

	import { onMount } from 'svelte'
	import { draggable } from '@neodrag/svelte'
	import type { DragOptions } from '@neodrag/svelte'
	import Animations from 'textify.js'
	import ParallaxImage from '$lib/components/ParallaxImage.svelte'
	import LogRid from '$lib/logos/LogRid.svelte'

	let options: DragOptions = {
		axis: 'x',
		bounds: 'parent'
	}

	let sY:number

	onMount(() => {
		const { Textify } = Animations
		new Textify({
			selector: '.typett',
			duration: 800,
			fade: false,
			top: false,
			reveal: true,
			delay: 800,
			threshold: 0.8,
			once: false,
			easing: "circInOut",
			scale: 3
		})
	})

</script>

<svelte:window bind:scrollY={sY}/>

<div class="type">


	<div class="x0">
		<ParallaxImage --parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')" --parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')"></ParallaxImage>
	</div>

<!--section 1 with quote by robert peters-->
	<div id="panel1" class="rta-column rowgap-24 is-padded minH all-cc back">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/ridwall2.webp" alt="design technology"/>
			<h4 class="typett">
				"Design creates culture; Culture shapes values; Values determine the future."
			</h4>
			<p style="color: var(--green)">-Robert Peters, Co Founder - Circle Design</p>
			<h5 class="typett">
				From user flows to adoption curves, learning paths to zoning regulations, we live in a world of design.
			</h5>
			<h5 class="wide-60-100 typett">
				But human creation is breaking the planet, and bringing the ruin of life and species. Introspection and a radical recalibration are our only chance of reversing the situation.
			</h5>
	</div>	
<!--end-->

<!--section2 with quote by fred brooks-->
	<div id="panel2" class="rta-column rowgap-24 is-padded minH min all-cc back ta-r">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/ridwall1.webp" alt="temple design"/>
		<h4 class="typett">
			"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did; this is the most illuminating question to ask yourself."
		</h4>
		<p style="color: var(--green)">- Fred Brooks, Author - The Design of Design</p>
		<div class="rta-icon2">
			<img id="theball" src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinityball.png" alt="ball" use:draggable={options}/>
		</div>
		<h5 class="typett">
			What’s needed is a “wisdom of gods,” found encoded across culture- or dharma. Through culture, we have a shot. The evolution needed in design is that of culture-rooting. 
		</h5>
	</div>
<!--end-->


<!--rid intro section with logo and motif-->
	<div id="logosection" class="rta-column is-padded minH rowgap-24">
		<LogRid></LogRid>
		<h5 class="typett"> 
			A framework for modern design that derives from dharma for its principles, mindsets and processes.
		</h5>
		<div class="rta-image" style="transform: rotate({-sY/4}deg)">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/03.webp" alt="rid motif"/>
		</div>
	</div>
<!--end-->

<!--prologue text-->
	<div id="panel3" class="rta-column rowgap-32 is-padded minH min">
		<div class="rta-grid grid2 colgap-64 top-p-32">
			<div class="rta-in-col rowgap-24 dark-text">
				<h6>All human beings are creative.</h6>
				<p>
					Every single one of us. We are creative when we lie, and creative when we entertain. With that new plan at the workplace, or that deft jaywalking across the road. For the mothers among us, for countless generations, creativity has emerged atop cooking stoves, amid spice mixes, and in strategies to make a truant child eat his brocolli. 
				</p>
				<p>
					In fact, creativity isn't even exclusive to our species. From apes, our closest cousins, to distant ones such as mice, creativity is characteristic to much of life itself.
				</p>
				<h6>
					But some things about human creativity are unique.
				</h6>
				<p>
					We are able to consciously pass on our creativity. Many animals learn behaviour and acquire intelligence from their parents. But the lioness cannot deliberate with her cub on which among the herd to target, nor the gorilla instruct a young one how to identify the sweetest fruits. In humans, we are able to compound this such that our young ones learn even at the lap of grandparents.
				</p>
				<h6>
					In other words, creativity among human beings can iterate.
				</h6>
				<p>
					Iterative creativity is a process with evolutionary force. It creates many branches that at discrete ends can be remarkably different. And like natural selection, when done with conscious deliberation it adapts for what works, against what doesn't. In a species that acquires the ability to iterate creativity across the generations, as ours did, through the long haul of deliberate selection emerges a plan, a purpose,a design.
				</p>
			</div>
			<div class="rta-in-col rowgap-24 dark-text">
				<p>
					To design is to convert intent to manifestation, to bring to fruit the result of planned deliberation. When this result is what has emerged among *us*, through the collective churn of iterative creativity over manifold generations, we call it our design. The world of design has known this, which is why Fred Brooks- writer of The Design of Design advised as quoted in the previous panel.
				</p>
				<p>
					Design is what gives agency to the natural and continuous phenomenon of creativity. It is how we can give an order to things. And the best design to emerge is one filtered through our collective iteration, over deep time. Of course, modern design isn't the first to comprehend the emergent mesh of iteration, creativity, intelligence and adaptation.
				</p>
				<p>
					It was well-known in ancient Bhārata as well. Which is why its very word for our design, for culture, was saṃskṛti - our well-put-together creation. How do we know their saṃskṛti was the output of iterative creativity? That it was what adapted and what worked over the long haul of time? We know through their other name for their culture. They literally referred to it as that which has been practiced, what's worked, what bears ahead. They called it Dharma. 
				</p>
				<h5>
					 Ṛta in Design is a system for modern design thinking and creatorship, informed by the design principles of Dharma.
				</h5>
				<div class="rta-icon2">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinity.png" alt="trinfinity"/>
				</div>
			</div>
		</div>
	</div>
<!--end-->

<!--what do we call design-->
	<div id="panel4" class="rta-column rowgap-32 top-p-32 bot-p-64 is-padded minH min">
		<div class="rta-in-col top-p-32">
			<h4 class="typett">What do we call Design?</h4>
		</div>
		<div class="rta-grid grid2 colgap-64 rowgap-24">
			<div class="rta-in-col rowgap-24 dark-text">
				<p>
					Firing up a search for the Sanskrit translation of ‘design’ will yield a list of words as disparate as anusaṃdhāna, anubandha, cikīrṣita, mantra and more. When we understand design to be a process of deliberation and reflection-in-action that ends with an implementation, it should not be surprising that a culture built upon deliberation to everything should throw up so many options for the word ‘design.’ It should in fact make sense that a syntactically deliberate instrument of mind- mantra- is also a design.
				</p>
				<p>
					What this gets at is the subtle but profound difference between creating and designing, as understood by the dhārmika mind. In this framework the matter always begins with the agent- the doer. Whether it is creation or design, it is something the doer does. All of reality is artifacts of the mind manifest through an agent’s will, and so the Sanskrit root of √kṛ (कृ) which means ‘to do,’ takes center-stage.
				</p>
				<p>
					This is as true at the level of grammar as it is on the level of ontology- karma is one of the strongest binding operators in ṛta under the dhārmika worldview. Without action there would be no reality, and reality itself is understood as “coming into being,” or bhavati- happens, becomes.
				</p>
				<p>
					To ‘design something’ most accurately means to do it with a process of deliberation and planning, through an outcome of deep-thinking, reflection and crystallization of intent. In other words, design is action when done by a self-reflective consciousness. Dhārmika design thinking requires that we realize that every action, every deed ought to be by design. What is done or accomplished through such a process is consequently “well-done,” or “well-effected,” “refined.” There is a word to describe exactly this.
				</p>
				<h6>
					Since it is done, it is a ‘kṛta’ (has been done), and since it is well done, it is ‘samyak.’ Well designed and well effected is thus something that is ‘saṃskṛta.’ The genuine word for design is saṃskaraṇa, and design as the output is saṃskṛti. 
				</h6>
			</div>
			<div class="rta-in-col rowgap-24 dark-text">
				<p>
					One must take pause to internalize the implications:
				</p>
				<p>
					- Whenever designers encounter skeptics to the claim that design impacts culture, they ought to be pointed to Indian culture, where the word for design and culture is in fact the same. They are both ‘saṃskṛtis’. Indian culture is the perfected design of our civilization.<br>
					- The process of design is samṣkaraṇa, and designers are would-be saṃskartṛs. What is well designed and perfected enough to be seeded through the culture is thus called saṃskāra - great designs.
				</p>
				<p>
					Modern design aspires to be a reflection of nature. To be in perfect harmony with it. To respect through man-made design the perfected designs of reality. This is not the first instance of such a drive in our species. Thousand of years ago there were people that understood nature as prakṛti - the original or preceding design- and had the imperative to be in harmony with is as cardinal principle of their own design- their saṃskṛti.
				</p>
				<p>
					Under this light, ‘dhārmika design thinking‘ is arguably a redundancy of articulation. If dharma is design as we’ve established, then what does design of design thinking mean? Designers will be the first to confess- it means quite a bit. It is why a book titled ‘Design of Design’ makes sense. There is always a process to even ‘doing’ the process; a way of working behind a way that is working, a pra-kriyā before the kriyā. This is bound to happen when what we speak of involves continuous self-reflection or ping-back. This ping-back, or cintana, is what design seeks to shape over the long term.
				</p>
				<div class="rta-row colgap-8">
					<div class="rta-icon2">
						<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/trinfinity.png" alt="trinfinity"/>
					</div>
					<button class="sideways-button green">
						<span>
							<a href="https://drive.google.com/file/d/1B_bfFNmEH6Tpq-si-QaWHfepVTXkbKpc/view" target="_blank" rel="noreferrer">
							Download Introduction Guide
							</a>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
<!--end-->

</div>


<style lang="sass">

#panel1
	position: relative
	>img
		position: absolute
		top: 0
		left: 0
		object-fit: cover
		width: 100%
		height: 100%
		filter: grayscale(100%) saturate(0.01) opacity(0.1)
	h4
		line-height: 1.2

#panel2
	position: relative
	>img
		position: absolute
		top: 0
		left: 0
		object-fit: cover
		width: 100%
		height: 100%
		filter: grayscale(100%) saturate(0.01) opacity(0.1)
	@media screen and (min-width: 1024px)
		h5
			padding-left: 40%

#panel3
	h6
		color: var(--green)
	h5
		font-weight: bold
		color: var(--black)
		line-height: 1.4
	@media screen and (min-width: 1024px)
		padding-right: 384px

#panel4
	h6
		color: var(--green)
	@media screen and (min-width: 1024px)
		padding-left: 384px

#logosection
	.rta-image
		transform-origin: center center
		img
			object-fit: contain
	@media screen and (min-width: 1024px)
		.rta-image
			width: 280px
			height: 280px
	@media screen and (max-width: 1023px)
		.rta-image
			width: 200px
			height: 200px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
		margin-top: 64px
	@media screen and (max-width: 1023px)
		height: 60vh

</style>