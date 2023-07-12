<script lang="ts">
	import { themeMode, breakOne, breakZero, breakTwo } from '$lib/stores/globalstores';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { showModal } from '$lib/stores/globalstores';
	import type { DragOptions } from '@neodrag/svelte';
	import Parallax from '$lib/components/ParallaxImage.svelte';
	import { slide } from 'svelte/transition';
	import Modal from '$lib/components/Modal.svelte';

	let isPart = Array(3).fill(false);
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function handleClick() {
		showModal(true);
	}

	function togglePart(index: number) {
		isPart[index] = !isPart[index];
		for (let i = 0; i < isPart.length; i++) {
			if (i !== index && isPart[i] === true) {
				isPart[i] = false;
			}
		}
	}

	$metaTitle = 'Ṛta in Design';
	$metaDescription =
		'Ṛta in Design is a new framework for design thinking, centred on the mind of the designer. Inspired by universal principles of Dharma.';
	$metaUrl = 'https://www.brhat.in/rta';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/ridhero1.webp';
	$metaType = 'webpage';

	let options: DragOptions = {
		axis: 'x',
		bounds: 'parent'
	};
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class="x0"
	data-lenis-scroll-snap-align="start"
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<Parallax
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/infinitywall.webp')"
	/>
</div>

<div class="rta-column stout minH p-top-128">
	<div class="instout rta-column rowgap200 newrta">
		<div class="rta-column">
			{#if $themeMode}
				<img
					class="thistheimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/transparent/rid%20black.png"
					alt="onwhite"
				/>
			{/if}
			{#if !$themeMode}
				<img
					class="thistheimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/02brhatlogos/transparent/rid%20white.png"
					alt="onblack"
				/>
			{/if}
			<p class="p-bot-16 ta-c-d ta-c-m">A model for approaching design, rooted to Dharma</p>
		</div>
		<div class="rta-column rowgap400 one-section glass-top p-top-64">
			<blockquote class="ta-c-d">
				“We are approaching the power of gods, without the wisdom of gods.”
				<br /><cite>Daniel Schmachtenberger</cite>
			</blockquote>
			<blockquote class="ta-c-d">
				“How are we collectively creating a world that none of us wants, individually?”
				<br /><cite>Daniel Christian Wahl</cite>
			</blockquote>
		</div>
		<div class="rta-column one-section p-top-32">
			<em>
				Never before in the history of humanity has there been such an urgent need of 'awareness of
				intent.’ No longer can we let our world be created by what The Conscilience Project calls
				values-agnostic nihilistic design. This is made urgent by the fact that we now exist, near
				constantly, within the design of someone else. From the social media platforms where we
				gather with friends, the black mirrors of silicon and lithium on our person at all times, to
				the policies, laws and mandates that determine not only our present but our futures as well-
				everything is the design, or intent, of another affecting salience upon us.
			</em>
			<em> The problem statement we thus face is two-fold. </em>
			<li class="em">
				1. How do we collectively create a world that each of us wants, individually? That is, how
				do we design ṛta - our shared and manifest reality.
			</li>
			<li class="em">
				2. How do I create the journey that I want for myself, as a designer and creator? That is,
				how do I shape the journey from smṛta to kṛta - intent to creation.
			</li>
			<h6>
				Ṛta in Design is a model for design thinking and execution that roots itself in Dharma. We
				believe the case to reorient design by Dharma is strong.
			</h6>
		</div>
		<div class="onpagelinks rta-column rowgap100">
			<button class="blank-button" on:click={() => togglePart(1)}>
				<h3>1 - Prologue</h3>
			</button>
			{#if isPart[1]}
				<div class="rta-column bord-bot p-bot-32" transition:slide>
					<div class="rta-column">
						<div class="rta-image">
							<img
								src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/05.webp"
								alt="first"
							/>
						</div>
					</div>
					<div class="rta-column">
						<h5>All human beings are creative.</h5>
						<p>
							Every single one of us. We are creative when we lie, and creative when we entertain.
							With that new plan at the workplace, or that deft jaywalking across the road. For the
							mothers among us, for countless generations, creativity has emerged atop cooking
							stoves, amid spice mixes, and in strategies to make a truant child eat his brocolli.
						</p>
						<p>
							In fact, creativity isn't even exclusive to our species. From apes, our closest
							cousins, to distant ones such as mice, creativity is characteristic to much of life
							itself.
						</p>
						<h5>But some things about human creativity are unique.</h5>
						<p>
							We are able to consciously pass on our creativity. Many animals learn behaviour and
							acquire intelligence from their parents. But the lioness cannot deliberate with her
							cub on which among the herd to target, nor the gorilla instruct a young one how to
							identify the sweetest fruits. In humans, we are able to compound this such that our
							young ones learn even at the lap of grandparents.
						</p>
						<h5>In other words, creativity among human beings can iterate.</h5>
						<p>
							Iterative creativity is a process with evolutionary force. It creates many branches
							that at discrete ends can be remarkably different. And like natural selection, when
							done with *conscious deliberation* it adapts for what works, against what doesn't.In a
							species that acquires the ability to iterate creativity across the generations, as
							ours did, through the long haul of deliberate selection emerges a plan, a purpose, a
							design.
						</p>
						<p>
							To design is to convert intent to manifestation, to bring to fruit the result of
							planned deliberation. When this result is what has emerged among us, through the
							collective churn of iterative creativity over manifold generations, we call it our
							design. The world of design has known this, which is why Fred Brooks- writer of The
							Design of Design advised:
						</p>
						<blockquote class="is-green">
							"Study your predecessors' works intently, to see how they solved problems. Try to
							figure out why they made the design choices they did; this is the most illuminating
							question to ask yourself."
						</blockquote>
						<p>
							Robert Peters, the CEO of Circle Design, put its more plainly- "Design creates
							culture. Culture shapes values. Values determine the future." Design is what gives
							agency to the natural and continuous phenomenon of creativity. It is how we can give
							an order to things. And the best design to emerge is one filtered through our
							collective iteration, over deep time. Of course, modern design isn't the first to
							comprehend the emergent mesh of iteration, creativity, intelligence and adaptation.
						</p>
						<p>
							It was well-known in ancient Bhārata as well. Which is why its very word for our
							design, for culture, was <b>saṃskṛti - our well-put-together creation</b>. How do we
							know their saṃskṛti was the output of iterative creativity? That it was what adapted
							and what worked over the long haul of time? We know through their other name for their
							culture. They literally referred to it as *that which has been practiced, what's
							worked, what bears ahead. They called it Dharma.
						</p>
						<h6>
							Ṛta in Design is a system for modern design thinking and creatorship, informed by the
							design principles of Dharma.
						</h6>
					</div>
				</div>
			{/if}
			<button class="blank-button" on:click={() => togglePart(2)}>
				<h3>2 - Dharma is Design</h3>
			</button>
			{#if isPart[2]}
				<div class="rta-column bord-bot p-bot-32" transition:slide>
					<div class="rta-column">
						<div class="rta-image">
							<img
								src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/12rid/06.webp"
								alt="twos"
							/>
						</div>
					</div>
					<div class="rta-column">
						<h5 style="font-weight: bold; color: var(--opposite)">Design</h5>
						<p>
							To design is to create with intent, deliberation, plan and purpose; Design is the
							implementation of a process with reflection-in-action. Design involves creating,
							constructing, conceptualising, planning, framing of intent and navigation of
							constraining boundaries.
						</p>
						<h5 style="font-weight: bold; color: var(--opposite)">Dharma</h5>
						<p>
							To establish, to practice a method or custom, to organize life and society in
							consonance with the natural flow is to establish dharma. That which is created with
							intent, deliberation, plan, purpose and reflection-in-action is dharma. Dharma is the
							dynamic cultural process of bearing and supporting a tradition of deliberate and
							planned consonance with the harmonics of reality.
						</p>
						<em class="bord-top p-top-32">
							“Science converts information into knowledge. Engineering converts knowledge into
							utility. Design converts utility into cultural behavior in context. Art takes that
							cultural behavior and questions our perception of the world.”
							<cite> - Neri Oxman, MIT Media Lab</cite>
						</em>
						<em>and in the distant past...</em>
						<em>
							The sound instruments of mental scientists converted information to knowledge,<br />
							And engineers of praxis and ritual converted knowledge to utility.<br />
							Dharma is the conversion and manifestation of utility in the cultural context, ie.
						</em>
						<h4>Dharma <span class="is-green">is Design</span></h4>
						<p>
							For what is dharma, if not the endeavor to conduct life and society in consonance with
							ṛta, the natural order? To bring dharma in design is to bring a ṛta-consciousness to
							the processes and methods of design. Dharma in design is effectively, Ṛta in Design.
						</p>
						<p>
							Ṛta in Design is our input at seed and root- at the very intent, reflection, planning
							and implementing of those that craft our world. It synthesizes key aspects of the
							dhārmika worldview and links it to general steps in the contemporary design process.
							This makes it possible for designers to use the fundamentals coded in the cultural
							identity of our grand civilization.
						</p>
					</div>
				</div>
			{/if}
			<button class="blank-button" on:click={handleClick}>
				<h3>3 - Introduction to Ṛta in Design</h3>
			</button>
		</div>
	</div>
	<Modal />
</div>

<style lang="sass">

.onpagelinks
	align-items: flex-start
	button
		width: 100%
		text-align: left
		&:hover
			h3
				color: #05AE5C

.light
	background: white

.dark
	background: #171717

.x0
	height: 100vh
	width: 100vw
	overflow: hidden
	@media screen and (max-width: 768px)
		height: 50vh

.is-green
	color: #10D56c


.one-section
	blockquote
		margin-left: 0
		margin-right: 0

.thistheimage
	width: 240px
	margin: auto

.rta-column
	row-gap: 20px


</style>
