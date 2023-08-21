<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import Header from '$lib/components/NewHeader.svelte';
	import { samThemes } from '$lib/utils/supapulls';
	import { slide } from 'svelte/transition';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	let isOpen = Array(7).fill(false);
	isOpen[1] = true;
	let menuOpen: boolean;
	let fake = false;
	let thems: any;

	$metaTitle = 'Samikṣaṇā';
	$metaDescription =
		'Exploring Why Are We, The Way We Are! Orient and Occident Perspectives to Human Evolution and Counselling';
	$metaUrl = 'https://www.brhat.in/samikshana';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/samikshanawall.webp';

	function toggleOpen(index: number) {
		isOpen[index] = !isOpen[index];
		for (let i = 0; i < isOpen.length; i++) {
			if (i !== index && isOpen[i] === true) {
				isOpen[i] = false;
			}
		}
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function fauxfake() {
		fake = !fake;
	}

	onMount(async () => {
		thems = await samThemes();
	});
</script>

<Header />
<div
	class="headimage"
	style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/samikshanawall.webp')"
/>
<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 min100" id="intro">
		<h5>
			The study of human evolution and counseling is a fascinating and ever-evolving field that
			seeks to understand the complex forces that shape our lives. Each individual life is a unique
			and intricate tapestry, woven from the threads of biology, culture, and experience. In recent
			years, there has been a growing movement to move beyond Euro-American theories and explore
			culturally rooted Eastern perspectives on human development and well-being. Samīkṣaṇā opens a
			window into the collective journey of the human species – a distinctive invitation and rare
			opportunity to explore your own path and the journeys of fellow beings under the guidance of
			pioneering scholars in the field.
		</h5>
		<h6>2 December 2023 - 21 April 2024 | Saturdays and Sundays</h6>
		<div class="rta-grid grid4 stay2">
			<div class="rta-column xcenter rowgap100">
				<img src="/images/icon-timing.png" alt="timings" />
				<p class="small">4 PM to 9 PM IST</p>
			</div>
			<div class="rta-column xcenter rowgap100">
				<img src="/images/icon-duration.png" alt="duration" />
				<p class="small">1.5 Hours each</p>
			</div>
			<div class="rta-column xcenter rowgap100">
				<img src="/images/icon-number.png" alt="number" />
				<p class="small">4 Sessions Every Weekend</p>
			</div>
			<div class="rta-column xcenter rowgap100">
				<img src="/images/icon-rupee.png" alt="fees" />
				<div class="rta-column xcenter">
					<p class="small ta-c">₹62500 | $1100</p>
					<small class="ta-c">Excluding 18% GST</small>
				</div>
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 min100 ytop p-bot-64" id="second">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Why Samīkṣaṇā</h2>
		</div>
		<div class="rta-column rowgap200">
			<p>
				Samīkṣaṇā literally means an incisive, in-depth examination. Of what? The depths of human
				existence, consciousness, and evolution. Dive into the heart of comprehending human
				evolution, not just as a passive observer, but as an engaged participant.
			</p>
			<p>
				Embark on this remarkable exploration of self-discovery as we intertwine the wisdom of
				modern and traditional epistemes, seamlessly blending the insights of different eras with
				clarity and connection.
			</p>
			<p>
				Samīkṣaṇā draws from both the Orient and the Occident, forging an interdisciplinary approach
				that casts a brilliant light on the 'HUMAN' in its entirety. Central to our odyssey lies a
				profound curiosity about the rhythm and essence of people's lives. How do we decipher the
				enigma of our existence? This ground-breaking multidisciplinary study transcends
				conventional boundaries, weaving together threads from 20 trans-disciplines such as
				psychology, philosophy, embryology, political science, musicology, economics, naturopathy,
				Vedanta and beyond.
			</p>
			<p>
				Traditionally, the study of any practitioner within this field has equipped us with
				perspectives rooted in the Western worldview. Samīkṣaṇā offers an integrated and comparative
				study of the Indic and Western perspectives.
			</p>
			<p>
				The practitioner or the seeker is always encouraged to keep biases at bay in the process of
				learning. Then how does a singular, dominating worldview suffice to inform the way we
				understand human nature? The Indian episteme and theory of mind is therefore culturally
				critical and universally applicable in its offering of layered and contextually-rich
				perspectives on the human mind and spirit.
			</p>
			<p>
				We believe that through this in-depth study, the pattern-seeking and pattern-finding Indian
				mind will be enriched and strengthened in its capacity to hold two distinct views at their
				merit and be able to contemplate upon and apply the principles coherently for the benefit of
				the self and the world.
			</p>
		</div>
	</section>
	<section class="rta-column rowgap400 ytop bord-top p-top-32" id="third">
		{#if $breakTwo}
			<button class="newbutton big red" on:click={toggleMenu}>
				{#if menuOpen} Close {:else} Expand Details {/if}
			</button>
		{/if}
		{#if menuOpen || !$breakTwo}
			<div
				class="rta-row colgap300 xcenter-d ycenter p-top-8 p-bot-32 bord-bot rowgap100"
				on:click={toggleMenu}
				on:keydown={fauxfake}
			>
				<button
					class="blank-button"
					on:click={() => toggleOpen(1)}
					class:selectedbutton={isOpen[1]}
				>
					<p class="mid">Learner Takeaways</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(2)}
					class:selectedbutton={isOpen[2]}
				>
					<p class="mid">Course Eligibility</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(3)}
					class:selectedbutton={isOpen[3]}
				>
					<p class="mid">Selection Criteria</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(4)}
					class:selectedbutton={isOpen[4]}
				>
					<p class="mid">Important Dates</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(5)}
					class:selectedbutton={isOpen[5]}
				>
					<p class="mid">Course Schedule</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(6)}
					class:selectedbutton={isOpen[6]}
				>
					<p class="mid">Course Themes</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(7)}
					class:selectedbutton={isOpen[7]}
				>
					<p class="mid">FAQs</p>
				</button>
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 ytop p-top-64" id="fourth">
		{#if isOpen[1]}
			<div class="rta-grid grid2 colgap600 rowgap600">
				<div class="rta-column rowgap200">
					<h6 class="title">1. What is the role of samskaras in an individual's evolution?</h6>
					<p class="mid soft">
						While Western perspectives to human development and psychology abound, a structured
						study of the Indian episteme is rare. With frameworks from Vedanta, Yoga, Jyotisa, Nrtya
						and more - understand the interplay of karma-dharma-samskaras in the micro and macro
						cosmos in our lives.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">2. How do we factor in multiple facets of human evolution?</h6>
					<p class="mid soft">
						Have you wondered how understanding of Indian musicology can enhance how we practise
						psychotherapy? Or how theories from Yoga and Ayurveda can add to our practise in the
						domains of psychiatry and embryology? Immerse yourself in this interdisciplinary study
						and discover dimensions anew.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						3. Is development a co-construction of biology, cultural and individual factors?
					</h6>
					<p class="mid soft">
						The program is designed to give you a holistic overview of the bio-psycho-social
						theories of understanding yourself and the world around with the essential component of
						Eastern spiritual frameworks. Rest assured, this is a carefully curated rare package you
						will never find anywhere.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						4. How does our relationship with family/friends impact our thoughts and emotions?
					</h6>
					<p class="mid soft">
						As you move deeper into the program, you will introspect and gain the skills to deal
						with diverse individuals and groups in order to accomplish mental health, wellness,
						education, relationships, etc.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">5. Do we have a holistic understanding of human nature?</h6>
					<p class="mid soft">
						Perhaps the greatest takeaway is the opportunity to learn about human evolution from
						scholarly legends in this domain, be it child psychiatry, astrology, clinical psychology
						or the performing arts. Each mentor is here to give you their best and shape your vision
						of yourself and the world.
					</p>
				</div>
			</div>
		{:else if isOpen[2]}
			<p>
				Anyone between 18-70 years with a 10+2 or equivalent in any stream from a recognized
				university (min of 50%), interested in exploring diverse perspectives on human nature, and
				integrating those insights to improve one's well-being. It is particularly relevant for
				those who are interested in the following:
			</p>
			<ul>
				<li>Human evolution and development</li>
				<li>Mental health and well-being</li>
				<li>Counselling and psychotherapy</li>
				<li>Eastern and Western perspectives on the human mind</li>
				<li>The intersection of science and spirituality</li>
			</ul>
		{:else if isOpen[3]}
			<p>
				Online Entrance Exam (25 November 2023) followed by a round of Interview (26 November 2023)
				for shortlisted candidates
			</p>
		{:else if isOpen[4]}
			<p>
				Applications Close: 23 November, 2023 (Thursday)<br />
				Online Exam: 25 November, 2023 (Saturday)<br />
				Interview: 26 November, Sunday 2023
			</p>
			<div class="rta-column rowgap200 bord-top p-top-32">
				<h6>First Cut off List for Shortlisted Students:</h6>
				<ul>
					<li>28 November, 2023 (Tuesday)</li>
					<li>
						Full fee payment between 12:00 noon on 28 November (Tuesday) till 16:00 hrs on 29
						November, 2023 (Wednesday)
					</li>
				</ul>
			</div>
			<div class="rta-column rowgap200 bord-top p-top-32">
				<h6>Second Cut off List for Shortlisted Students:</h6>
				<ul>
					<li>30 November, 2023 (Thursday)</li>
					<li>
						Full fee payment between 12:00 noon on 30 November, 2023 (Thursday) till 16:00 hrs on 1
						December, 2023 (Friday)
					</li>
				</ul>
			</div>
		{:else if isOpen[5]}
			<div class="rta-grid grid2 colgap600 rowgap600">
				<div class="rta-column rowgap200">
					<h6 class="title">December 2023</h6>
					<pre class="mid">
• Dr. Aarti Chitkara;“Embryology, Paediatric Growth and Evolution”: 2 (Saturday) and 3 (Sunday)
• Pravrajika Divyanandaprana; “A Mind Management Manual -Philosophy from Patañjali’s Yogasūtras” : 9 (Saturday) and 10 (Sunday)
• Prof. Priyadarshi Patnaik; “Fundamentals of Psychology”: 16 (Saturday) and 17 (Sunday)
• Smt. Sarbani Rath and Sh.Sanjay Rath; “Jyotiṣa - The Kārmik Connect to Human Existence”: 23 (Saturday) and 24 (Sunday)
					</pre>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">January 2023</h6>
					<pre class="mid">
• Dr. Shekhar P Seshadri; “Children - Perspectives in Evolution”: 6 (Saturday) and 7 (Sunday)
• Dr. P Ram Manohar; “Āyurveda - Perspectives to Human Evolution”: 13 (Saturday) and 14 (Sunday)
• Dr. P.N. Ravindra; “Human Excellence - Neuroscience Perspectives”: 20 (Saturday) and 21 (Sunday)
• Prof. Jagjivan Kaur; “Life-span Development and Counselling - Occident Perspectives”: 27 (Saturday) and 28 (Sunday)
					</pre>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">February 2023</h6>
					<pre class="mid">
• Prof. Ganesh Rao; “Holistic Human Evolution through Yoga”: 3 (Saturday) and 4 (Sunday)
• Dr. Anuradha Choudry and Prof. Shrinivasa Varakhedi; “Saṃskṛta - A Key to Life Beautiful”: 10 (Saturday) and 11 (Sunday)
• Dr. Neena Bansal and Sh. Raghava Krishna; “The Politics of Human Development - Foundations of Indian Thought”: 17 (Saturday) and 18 (Sunday)
• “Existential Inquiry through Vedānta ”: 24 (Saturday) and 25 (Sunday)
					</pre>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">March 2023</h6>
					<pre class="mid">
• Mid-course Exam: 3 (Sunday) : 09:00 -11:00 hrs
• “Preventing Addictions through Counselling”: 9 (Saturday) and 10 (Sunday)
• Prof. Rasananda Panda; “Economics and Human Development”: 16 (Saturday)
• Prachee Shah Paandya and Sunil Sunkara; “Nṛtya-bhāva”:17 (Sunday)
• Dr. Shekhar P Seshadri; “Psychiatric Disorders and Counselling in Children”: 23 (Saturday) and 24 (Sunday)
• Dr. Richa Chopra; “Vyakti Vikāsa”: 30 (Saturday) and 31 (Sunday) 
					</pre>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">April 2023</h6>
					<pre class="mid">
• Dr. Tapaswini Pradhan; “Disease and Wellbeing”: 6 (Saturday)
• Dr. Surya Ramesh; “Food and Lifestyle - The Nature’s Way”: 7 (Sunday)
• Gautam Dabir and Malvica Chopra; "Rāga & Manas": 13 (Saturday) and 14 (Sunday)
					</pre>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">Final Certification Exam</h6>
					<pre class="mid">
21 April (Sunday); 0900 - 11.30 hrs (IST)
					</pre>
				</div>
			</div>
		{:else if isOpen[6]}
			{#if thems && thems.length > 0}
				<div class="rta-grid grid2 colgap600 rowgap600">
					{#each thems as item}
						<div class="rta-column rowgap200 bord-bot p-bot-32">
							<h6 class="title">{item.theme}</h6>
							<pre class="mid" style="margin-top: 0">{item.description}</pre>
							<div class="rta-row stay colgap300" id="photos">
								{#if item.photo1 && item.photo1.length > 0}
									<div class="rta-image">
										<img src={item.photo1} alt={item.instructor} />
										{#if item.photo2 && item.photo2.length > 0}
											<img src={item.photo2} alt={item.instructor} />
										{/if}
									</div>
								{/if}
								<div class="rta-column">
									<pre class="small">{item.instructor}</pre>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		{:else if isOpen[7]}
			<div class="rta-grid grid2 colgap600 rowgap600">
				<div class="rta-column rowgap200">
					<h6 class="title">1. What is Samīkṣaṇā?</h6>
					<p class="mid">
						Sāmikṣaṇā is an interdisciplinary course that explores human existence, consciousness,
						and evolution by blending ancient wisdom with contemporary insights.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						2. Why is the comparison between Western and Indian perspectives important?
					</h6>
					<p class="mid soft">
						The comparison between Western and Indian perspectives is important because it reveals
						different ways of understanding the human condition and enables us to gain a more
						nuanced understanding of the challenges that we face as individuals and as a society.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">3. Who is this course for?</h6>
					<p class="mid soft">
						The study on Human Evolution & Counselling is for anyone who is interested in learning
						more about the human condition and how to improve their well-being. It is particularly
						relevant for those who are interested in the following:
					</p>
					<ul>
						<li class="mid soft">Human evolution and development</li>
						<li class="mid soft">Mental health and well-being</li>
						<li class="mid soft">Counselling and psychotherapy</li>
						<li class="mid soft">Eastern and Western perspectives on the human mind</li>
						<li class="mid soft">The intersection of science and spirituality</li>
					</ul>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						4. Do you need prior qualifications in psychology to attend this course?
					</h6>
					<p class="mid soft">
						No prior qualifications are necessary to attend this course. The course is
						interdisciplinary and aims to build a basic understanding of human evolution and
						counselling. The minimum qualifications are mentioned in the brochure.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						5. Are the sessions recorded and for how long will one have access to them?
					</h6>
					<p class="mid soft">
						Yes, the sessions will be recorded and will be available for a year after the course.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">6. Will prior readings be provided?</h6>
					<p class="mid soft">
						Prior readings will be provided on a need basis and at the discretion of the instructor.
						However, the course is designed to be a comprehensive and engaging journey by itself.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">7. What is the application process?</h6>
					<p class="mid soft">
						Please click on the "Register Here" link and proceed to fill in your details. You will
						then receive an email from us confirming your registration with the entrance examination
						details that will be conducted on 25 November, 2023.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">8. What is the selection process?</h6>
					<p class="mid soft">
						The entrance examination will consist of 50% questions based on logical reasoning,
						aptitude, english comprehension and general knowledge and 50% questions on basic
						concepts pertaining to Ayurveda, Yoga, Counselling, Psychology, Vedanta, etc.
						Shortlisted candidates will receive information for the interview round. Once you clear
						that, you are onboard! Please refer to sections above for the dates.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">9. What is the fee payment process?</h6>
					<p class="mid soft">
						The fee payment is scheduled post the interview process and finalization of the cohort.
						We will be sending our emails to selected participants with the fee payment details and
						link in the last week of November, 2023. We request you to take this into due
						consideration when you plan to apply for the course.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">10. If I require financial aid, what should I do?</h6>
					<p class="mid soft">
						Scholarships will be available based on merit, performance in the examination rounds and
						the degree to which financial assistance is required. Please write to us at
						samikshana@brhat.in and we will take it forward from there.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">11. What is the cancellation/refund policy?</h6>
					<p class="mid soft">
						Because this is a premium course offering, we unfortunately cannot provide for a refund.
						In case you wish to cancel after paying the fee, you may do a one-time transfer of the
						program before it commences, to a friend who wishes to undertake the study.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						12. Whom should I contact for any form of assistance during the application process?
					</h6>
					<p class="mid soft">
						For any technical concerns and queries please write to us at samikshana@brhat.in or give
						us a call on +917506091706.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">13. How many hours should I be prepared to dedicate per week?</h6>
					<p class="mid soft">
						We will have a maximum of 10 lecture hours every weekend and a minimum of 5 hours. We
						also request you to set aside 2-3 hours during the week to assimilate your learnings and
						go through any study material. Therefore, the program demands an intensive commitment of
						12-13 hours per week.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">14. Is there any age limit for this study?</h6>
					<p class="mid soft">
						In this course, we undertake an intensive and incisive study into the course of human
						evolution, the goals of human life and diverse perspectives on human nature from two
						distinct domains - The East and West. Such a study will enrich anyone and everyone's
						minds when taken up with complete commitment. This program therefore accepts
						applications from 18-75 years of age. All you need to exhibit is an open, curious mind
						and the willingness to dedicate your hours to this once-in-a-lifetime opportunity of
						learning with 20 different stalwarts in the field of Human Evolution and Counselling.
					</p>
				</div>
				<div class="rta-column rowgap200">
					<h6 class="title">
						15. What will the design of the sessions be like? How will I integrate my learnings?
					</h6>
					<p class="mid soft">
						The fee payment is scheduled post the interview process and finalization of the cohort.
						We will have a team of facilitators who will effectively integrate session insights and
						maintain a continuous flow as we move from one week to the next. You will also have the
						opportunity to address your queries with each of the scholars. The sessions will be
						inclusive of theory and practical tools such as case studies and performative arts.
					</p>
				</div>
			</div>
		{/if}
	</section>
</Shell>

<style lang="sass">

#photos
	img
		object-fit: cover
		height: 104px
		width: 104px
		border-radius: 64px
		object-position: center center
	column-gap: 24px
	.rta-image
		width: 104px
	.rta-column
		width: calc(100% - 128px)
	@media screen and (max-width: 768px)
		img
			height: 88px
			width: 88px
		.rta-image
			width: 88px
		.rta-column
			width: calc(100% - 112px)

#intro
	h6
		border-top: 1px solid #6C1039
		border-bottom: 1px solid #6C1039
	img
		object-fit: contain
		height: 40px

#third
	.blank-button
		transition: 0.08s
		padding: 4px
		border-radius: 2px
		p
			transition: 0.08s
		&:hover
			outline: 1px solid #fe4a49
	.blank-button.selectedbutton
		background: #fe4a49
		p
			color: white
		&:hover
			outline: none
			cursor: none
	.newbutton
		width: 100%
	@media screen and (max-width: 768px)
		.rta-row
			flex-direction: column

.headimage
	width: 100vw
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center


</style>
