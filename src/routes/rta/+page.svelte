<script lang="ts">
	import { themeMode, breakOne, breakZero, breakTwo } from '$lib/stores/globalstores';
	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import type { DragOptions } from '@neodrag/svelte';

	export let data;

	$metaUrl = $page.url.pathname;
	$metaTitle = data.name;
	$metaDescription = data.shorts;
	$metaImage = data.image;
	$metaType = 'webpage';

	let options: DragOptions = {
		axis: 'x',
		bounds: 'parent'
	};
</script>

<div
	class="rta-column minH p-bot-64"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-column holding">
		<div class="rta-column">
			<h3 class="m-bot-4">Ṛta in Design</h3>
			<p class="p-bot-16">A model for approaching design, rooted to Dharma</p>
		</div>
		<div class="greenline" />
		<div class="rta-column rowgap400 one-section p-top-64">
			<blockquote>
				“We are approaching the power of gods, without the wisdom of gods.”
				<br /><cite>Daniel Schmachtenberger</cite>
			</blockquote>
			<blockquote>
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
		<div class="rta-column one-section p-top-64">
			<h4 class="glass-top p-top-64 p-bot-16">1 - Prologue</h4>
			<h5>All human beings are creative.</h5>
			<p>
				Every single one of us. We are creative when we lie, and creative when we entertain. With
				that new plan at the workplace, or that deft jaywalking across the road. For the mothers
				among us, for countless generations, creativity has emerged atop cooking stoves, amid spice
				mixes, and in strategies to make a truant child eat his brocolli.
			</p>
			<p>
				In fact, creativity isn't even exclusive to our species. From apes, our closest cousins, to
				distant ones such as mice, creativity is characteristic to much of life itself.
			</p>
			<h5>But some things about human creativity are unique.</h5>
			<p>
				We are able to consciously pass on our creativity. Many animals learn behaviour and acquire
				intelligence from their parents. But the lioness cannot deliberate with her cub on which
				among the herd to target, nor the gorilla instruct a young one how to identify the sweetest
				fruits. In humans, we are able to compound this such that our young ones learn even at the
				lap of grandparents.
			</p>
			<h5>In other words, creativity among human beings can iterate.</h5>
			<p>
				Iterative creativity is a process with evolutionary force. It creates many branches that at
				discrete ends can be remarkably different. And like natural selection, when done with
				*conscious deliberation* it adapts for what works, against what doesn't.In a species that
				acquires the ability to iterate creativity across the generations, as ours did, through the
				long haul of deliberate selection emerges a plan, a purpose, a design.
			</p>
			<p>
				To design is to convert intent to manifestation, to bring to fruit the result of planned
				deliberation. When this result is what has emerged among us, through the collective churn of
				iterative creativity over manifold generations, we call it our design. The world of design
				has known this, which is why Fred Brooks- writer of The Design of Design advised:
			</p>
			<blockquote class="is-green">
				"Study your predecessors' works intently, to see how they solved problems. Try to figure out
				why they made the design choices they did; this is the most illuminating question to ask
				yourself."
			</blockquote>
			<p>
				Robert Peters, the CEO of Circle Design, put its more plainly- "Design creates culture.
				Culture shapes values. Values determine the future." Design is what gives agency to the
				natural and continuous phenomenon of creativity. It is how we can give an order to things.
				And the best design to emerge is one filtered through our collective iteration, over deep
				time. Of course, modern design isn't the first to comprehend the emergent mesh of iteration,
				creativity, intelligence and adaptation.
			</p>
			<p>
				It was well-known in ancient Bhārata as well. Which is why its very word for our design, for
				culture, was <b>saṃskṛti - our well-put-together creation</b>. How do we know their saṃskṛti
				was the output of iterative creativity? That it was what adapted and what worked over the
				long haul of time? We know through their other name for their culture. They literally
				referred to it as *that which has been practiced, what's worked, what bears ahead. They
				called it Dharma.
			</p>
			<h6>
				Ṛta in Design is a system for modern design thinking and creatorship, informed by the design
				principles of Dharma.
			</h6>
		</div>
		<div class="rta-column one-section p-top-64">
			<h4 class="glass-top p-top-64 p-bot-16">2 - Dharma is Design</h4>
			<div class="rta-grid grid2 colgap600 p-bot-32">
				<div class="rta-column">
					<h5>Design</h5>
					<p>
						To design is to create with intent, deliberation, plan and purpose; Design is the
						implementation of a process with reflection-in-action. Design involves creating,
						constructing, conceptualising, planning, framing of intent and navigation of
						constraining boundaries.
					</p>
				</div>
				<div class="rta-column">
					<h5>Dharma</h5>
					<p>
						To establish, to practice a method or custom, to organize life and society in consonance
						with the natural flow is to establish dharma. That which is created with intent,
						deliberation, plan, purpose and reflection-in-action is dharma. Dharma is the dynamic
						cultural process of bearing and supporting a tradition of deliberate and planned
						consonance with the harmonics of reality.
					</p>
				</div>
			</div>
			<em class="bord-top p-top-32">
				“Science converts information into knowledge. Engineering converts knowledge into utility.
				Design converts utility into cultural behavior in context. Art takes that cultural behavior
				and questions our perception of the world.”
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
				For what is dharma, if not the endeavor to conduct life and society in consonance with ṛta,
				the natural order? To bring dharma in design is to bring a ṛta-consciousness to the
				processes and methods of design. Dharma in design is effectively, Ṛta in Design.
			</p>
			<p>
				Ṛta in Design is our input at seed and root- at the very intent, reflection, planning and
				implementing of those that craft our world. It synthesizes key aspects of the dhārmika
				worldview and links it to general steps in the contemporary design process. This makes it
				possible for designers to use the fundamentals coded in the cultural identity of our grand
				civilization.
			</p>
		</div>
		<div class="rta-column one-section p-top-64">
			<h4 class="bord-top p-top-64 p-bot-16">3 - What Do We Call Design?</h4>
			<em>...to be continued</em>
		</div>
	</div>
</div>

<style lang="sass">

.is-green
	color: #10D56c

.greenline
	height: 1px
	background: #10D56C
	width: 100%

.dark
	p
		color: white
	h5
		color: #676767

.one-section
	blockquote
		margin-left: 0
		margin-right: 0

.levelzero
	align-items: flex-start
	padding-left: 128px

.holding
	@media screen and (min-width: 1024px)
		width: 600px
	@media screen and (min-width: 900px) and (max-width: 1023px)
		width: 520px

.rta-column
	row-gap: 20px


</style>
