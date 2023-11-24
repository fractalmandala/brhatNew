<script lang="ts">
	import { onMount } from 'svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import Header from '$lib/components/NewHeader.svelte';
	import { samThemes, samDates } from '$lib/utils/supapulls';
	import { slide } from 'svelte/transition';
	import { breakTwo, authState, showChip } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';
	import supabase from '$lib/utils/db';
	import Close from '$lib/icons/close.svelte';

	let isOpen = Array(7).fill(false);
	isOpen[1] = true;
	let menuOpen: boolean;
	let fake = false;
	let thems: any;
	let dates: any;
	let bio1 = Array(40).fill(false);
	let bio2 = Array(40).fill(false);
	let bio3 = Array(40).fill(false);
	let bio4 = Array(40).fill(false);
	let bio5 = Array(40).fill(false);
	let submodal = false;
	let showBro = false;

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let phone: string = 'Phone';

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

	function toggleBio1(index: number) {
		bio1[index] = !bio1[index];
		for (let i = 0; i < bio1.length; i++) {
			if (i !== index && bio1[i] === true) {
				bio1[i] = false;
			}
		}
	}

	function toggleBio2(index: number) {
		bio2[index] = !bio2[index];
		for (let i = 0; i < bio2.length; i++) {
			if (i !== index && bio2[i] === true) {
				bio2[i] = false;
			}
		}
	}

	function toggleBio3(index: number) {
		bio3[index] = !bio3[index];
		for (let i = 0; i < bio3.length; i++) {
			if (i !== index && bio3[i] === true) {
				bio3[i] = false;
			}
		}
	}

	function toggleBio4(index: number) {
		bio4[index] = !bio4[index];
		for (let i = 0; i < bio4.length; i++) {
			if (i !== index && bio4[i] === true) {
				bio4[i] = false;
			}
		}
	}

	function toggleBio5(index: number) {
		bio5[index] = !bio5[index];
		for (let i = 0; i < bio5.length; i++) {
			if (i !== index && bio5[i] === true) {
				bio5[i] = false;
			}
		}
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function fauxfake() {
		fake = !fake;
	}

	function toggleSubscribe() {
		submodal = !submodal;
	}

	function focusName() {
		signupName = '';
	}

	function focusEmail() {
		signupEmail = '';
	}

	function focusPass1() {
		phone = '';
	}

	async function submitDetails() {
		const { error } = await supabase
			.from('form-samikshana')
			.insert([{ name: signupName, email: signupEmail, phone: phone }])
			.select();
		if (error) {
			showChip('Error! Please sumit again.', '#FE4a49');
		} else {
			showChip('Thank you, please access brochure.', '#10D56C');
			showBro = true;
		}
	}

	onMount(async () => {
		thems = await samThemes();
		dates = await samDates();
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
	<section class="rta-column rowgap400" id="topguy">
		<img src="/images/samlogo.png" alt="samikshana" />
		<h6>
			Exploring Why Are We, The Way We Are!<br />
			Orient and Occident Perspectives to Human Evolution and Counselling
		</h6>
	</section>
	<section class="rta-column rowgap400 p-top-64" id="newintro">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Course in Brief</h2>
		</div>
		<h5>
			“What is the purpose in knowing everything without knowing your own Self?” - Pravrājika
			Divyanandaprāṇa
		</h5>
		<h5>
			Time and again, scientists from the Orient as well as the Occident have believed that human
			nature is kaleidoscopic. The study of Human Evolution and Counselling is witnessing an
			exciting phase of growth; moving beyond the Euro-American theories and thus further exploring
			culturally rooted perspectives.
		</h5>
		<h6 class="ta-c" id="bannerdate">2 December 2023 - 21 April 2024 | Saturdays and Sundays</h6>
		<div class="rta-grid grid4 stay2 rowgap300 ta-c bord-bot p-bot-32" id="ico">
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
				<p class="small">3 Sessions Every Weekend</p>
			</div>
			<div class="rta-column xcenter rowgap100">
				<img src="/images/icon-rupee.png" alt="fees" />
				<div class="rta-column xcenter">
					<p class="small ta-c">₹73,750 | $1100</p>
					<small class="ta-c">Including 18% GST</small>
				</div>
			</div>
		</div>

		<div class="rta-row colgap200 rowgap200 xcenter-d xcenter-m" style="align-items: center">
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLScWmM5Wa2sP3Ayrxg1FeAX1wuPs4XxzSzN9Ukbd7cNKbwTKyA/viewform"
				target="_blank"
				rel="noreferrer"
				><button class="newbutton big red">APPLY NOW</button>
			</a>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSfXooD5I_Xu4V8Q_OK7EiiQICpJedY5LHfyQNx10h_B4q6vFQ/viewform"
				target="_blank"
				rel="noreferrer"><button class="newbutton big red">REGISTER FOR WEBINAR</button></a
			>
			<button class="newbutton big red" on:click={toggleSubscribe}>VIEW BROCHURE</button>
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-64" id="newsecond">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>The Principles</h2>
		</div>
		<div class="rta-grid grid2 colgap300 rowgap300">
			<div class="rta-column rowgap300">
				<h6 class="title">Orient (Vedic Perspectives)</h6>
				<p class="mid soft">
					The Indian conceptualization of human nature reveals, interesting observations about the
					doctrines of mind, personality and Self. The analysis of various sources like the Atharva
					veda, the upaniṣads, the yogasūtras, the Mahābhārata and others reveal the finer aspects
					of human nature. Indian tradition has much to offer by way of theoretical models and
					practical techniques in enhancing human potential and optimal well-being.
				</p>
			</div>
			<div class="rta-column rowgap300">
				<h6 class="title">Occident (Modern Perspectives)</h6>
				<p class="mid soft">
					The centrality of the Western paradigm is the creation of an environment where people can
					‘live lives they value’, with the freedom of choice and opportunities. Countries achieve
					great progress in economic development as conventionally measured; yet along the way
					succumb to new crises of obesity, smoking, diabetes and other ills of modern life.
					However, amidst these paradoxes, the western cosmology has a lot to offer in the
					understanding of human evolution.
				</p>
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-64" id="intro">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Why Samīkṣaṇā</h2>
		</div>
		<p>
			Each individual life is a distinct biography. With the same circumstances, opportunities, and
			resources, we see different people making different choices, which leads to the infinite
			stories of every human life.<br />
			<br />
			1. What is the role of samskāras in an individual's evolution?<br />
			2. How do we factor in multiple facets of human evolution?<br />
			3. Is development a co-construction of biology, cultural and individual factors?<br />
			4. How does our relationship with family/friends impact our thoughts and emotions?<br />
			5. Do we have a holistic understanding of human nature?
		</p>
	</section>
	<section class="rta-column rowgap400 p-top-64" id="intro">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Adhyayana (the Study)</h2>
		</div>
		<p>
			This ground-breaking, multidisciplinary, and innovative study integrates the perspectives of
			the Orient (vedic) and the Occident (Modern) to examine the ‘HUMAN’ in its entirety. It
			combines fundamental principles from the fields of Psychology, Philosophy, Embryology,
			vedānta, yoga, āyurveda, Political Science, Musicology, Economics, Neuroscience, Naturopathy,
			and other related disciplines. The study will also introduce various facets of Counselling,
			which encompass a broad range of culturally-sensitive practices. These practices aim to enable
			individuals to enhance their well-being, alleviate distress and maladjustments, resolve crises
			and improve their overall functioning in life.
		</p>
	</section>
	<section class="rta-column rowgap400 p-top-64 p-bot-64" id="intro">
		<div class="rta-column rowgap100 bord-top bord-bot p-top-16 p-bot-24" use:reveal>
			<h2>Darśana (Study Philosophy)</h2>
		</div>
		<p>
			In today’s fast-paced life, stress and emotional issues are on the rise. Addressing ‘Mental
			Health’ perhaps ranks the least on one’s priority list. Therefore, Samīkṣaṇā - Why Are We The
			Way We Are! - with twenty trans-disciplinary perspectives from the Orient and the Occident is
			the need of the hour. This study is aligned with the vision of Bṛhat, anchored on Indian
			Knowledge Systems (IKS). IKS is considered a universal episteme, rooted in and derived from
			our millennia-long civilizational knowledge and values. Bṛhat believes that a deep dive into
			Human Consciousness has to be culturally sensitive, inter-disciplinary and multi-faceted.
		</p>
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
					<p class="mid">Course Themes</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(2)}
					class:selectedbutton={isOpen[2]}
				>
					<p class="mid">Learner Takeaways</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(3)}
					class:selectedbutton={isOpen[3]}
				>
					<p class="mid">Key Details</p>
				</button>
				<button
					class="blank-button"
					on:click={() => toggleOpen(4)}
					class:selectedbutton={isOpen[4]}
				>
					<p class="mid">Course Eligibility</p>
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
					on:click={() => toggleOpen(7)}
					class:selectedbutton={isOpen[7]}
				>
					<p class="mid">FAQs</p>
				</button>
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 min100 p-top-64" id="fourth">
		{#if isOpen[2]}
			<div class="rta-grid grid2 colgap600 rowgap600 take">
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/connectingdots.png"
						alt="one"
					/>
					<h6>Connecting dots: body, mind, spirit and beyond.</h6>
				</div>
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/understandingelements.png"
						alt="two"
					/>
					<h6>Understanding the elements that constitute the mental makeup of an individual.</h6>
				</div>
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/professionalinsights.png"
						alt="three"
					/>
					<h6>Deepening professional insights on living life effectively.</h6>
				</div>
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/culturing.png"
						alt="four"
					/>
					<h6>
						Culturing and enhancing soft skills including intra and inter-personal relationships.
					</h6>
				</div>
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/diverseindividuals.png"
						alt="five"
					/>
					<h6>
						Dealing with diverse individuals, families, and groups in order to accomplish mental
						health, wellness, education, career goals, etc.
					</h6>
				</div>
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/18samikshana/selfempowerment.png"
						alt="six"
					/>
					<h6>
						Self-empowerment insights across multiple dimensions of human existence and a range of
						interdisciplinary perspectives.
					</h6>
				</div>
			</div>
		{:else if isOpen[4]}
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
			<div class="rta-column rowgap200">
				<h5 class="title bord-bot p-bot-16 bord-top p-top-16">Selection Criteria:</h5>
				<p>
					<b>A. Online Entrance Exam:</b><br />
					• 25 November, 2023 (Saturday); 09:30 hrs - 11:00 hrs<br />
					• Multiple Choice Questions (MCQ format) with <br />
					- 50% weightage on areas related to English Comprehension, Aptitude, Logical Reasoning & General
					Knowledge <br />
					- 50 % weightage on Basic Knowledge wrt to the core perspectives to be dealt in this certificate
					course
				</p>
				<p>
					<b>B. Online Interview:</b><br />
					• 26 November, 2023 (Sunday); 08:00 hrs to 15:00 hrs (only for candidates shortlisted in the
					online entrance examination)
				</p>
				<p>
					<b>How to prepare? What to expect?</b><br />
					Basic concepts pertaining to yoga, āyurveda, Counselling, Astrology, Psychology, Political
					Science, vedānta, Embryology etc. (refer to the preceding sections of the brochure on the core
					perspectives of the course). In addition, practice attempting a few sample MCQs based on Logical
					Reasoning, Aptitude, English Comprehension, General Knowledge - available online/offline (e.g.
					you may refer to model MCQs based on Bank PO/UPSC/CAT/MAT examinations).
				</p>
			</div>
		{:else if isOpen[5]}
			<p class="mid">
				<b>Disclaimer: </b><span class="soft">Contents subject to last minute changes</span>
			</p>
			<div class="rta-grid grid2 colgap600 rowgap300">
				{#if dates && dates.length > 0}
					{#each dates as item}
						<div class="rta-column colgap300 rowgap100 bord-bot p-bot-32">
							<h6>{item.date}</h6>
							<p class="mid soft">{item.course}</p>
						</div>
					{/each}
				{/if}
			</div>
		{:else if isOpen[1]}
			{#if thems && thems.length > 0}
				<p class="mid">
					<b>Disclaimer: </b><span class="soft">Contents subject to last minute changes</span>
				</p>
				<div class="rta-grid grid2 colgap600 rowgap600">
					{#each thems as item, i}
						<div class="rta-column rowgap200 bord-bot p-bot-32" style="cursor: pointer">
							<h6 class="title">{item.theme}</h6>
							<pre class="mid" style="margin-top: 0">{item.description}</pre>
							<div
								class="rta-row stay colgap300"
								id="photos"
								on:click={() => toggleBio1(i)}
								on:keydown={fauxfake}
							>
								{#if item.photo1 && item.photo1.length > 0}
									<div class="rta-image">
										<img src={item.photo1} alt={item.instructor} />
									</div>
								{/if}
								<div class="rta-column">
									<pre class="small">{item.instructor}</pre>
								</div>
							</div>
							{#if item.photo2 && item.photo2.length > 0}
								<div
									class="rta-row stay colgap300"
									id="photos2"
									on:click={() => toggleBio2(i)}
									on:keydown={fauxfake}
								>
									<div class="rta-image">
										<img src={item.photo2} alt={item.inst2} />
									</div>
									<div class="rta-column">
										<pre class="small">{item.inst2}</pre>
									</div>
								</div>
							{/if}
							{#if item.inst3 && item.inst3.length > 0}
								<div
									class="rta-row stay colgap300"
									id="photos3"
									on:click={() => toggleBio3(i)}
									on:keydown={fauxfake}
								>
									<div class="rta-image">
										<img src={item.photo3} alt={item.inst3} />
									</div>
									<div class="rta-column">
										<pre class="small">{item.inst3}</pre>
									</div>
								</div>
							{/if}
							{#if item.inst4 && item.inst4.length > 0}
								<div
									class="rta-row stay colgap300"
									id="photos4"
									on:click={() => toggleBio4(i)}
									on:keydown={fauxfake}
								>
									<div class="rta-image">
										<img src={item.photo4} alt={item.inst4} />
									</div>
									<div class="rta-column">
										<pre class="small">{item.inst4}</pre>
									</div>
								</div>
							{/if}
							{#if item.inst5 && item.inst5.length > 0}
								<div
									class="rta-row stay colgap300"
									id="photos5"
									on:click={() => toggleBio5(i)}
									on:keydown={fauxfake}
								>
									<div class="rta-image">
										<img src={item.photo5} alt={item.inst5} />
									</div>
									<div class="rta-column">
										<pre class="small">{item.inst5}</pre>
									</div>
								</div>
							{/if}
						</div>
						{#if bio1[i]}
							<div
								class="bio-overlay rta-column"
								on:click={() => toggleBio1(i)}
								on:keydown={fauxfake}
							>
								<p>{item.bio1}</p>
							</div>
						{/if}
						{#if bio2[i]}
							<div
								class="bio-overlay rta-column"
								on:click={() => toggleBio2(i)}
								on:keydown={fauxfake}
							>
								<p>{item.bio2}</p>
							</div>
						{/if}
						{#if bio3[i]}
							<div
								class="bio-overlay rta-column"
								on:click={() => toggleBio3(i)}
								on:keydown={fauxfake}
							>
								<p>{item.bio3}</p>
							</div>
						{/if}
						{#if bio4[i]}
							<div
								class="bio-overlay rta-column"
								on:click={() => toggleBio4(i)}
								on:keydown={fauxfake}
							>
								<p>{item.bio4}</p>
							</div>
						{/if}
						{#if bio5[i]}
							<div
								class="bio-overlay rta-column"
								on:click={() => toggleBio5(i)}
								on:keydown={fauxfake}
							>
								<p>{item.bio5}</p>
							</div>
						{/if}
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
		{:else if isOpen[3]}
			<p>
				Applications Close: 30 November, 2023 (Thursday)<br />
				Online Exam: 25 November, 2023 (Saturday) <br />
				Interview: 26 November, Sunday 2023
			</p>
			<p>
				<b>Lecture Days: Saturdays and Sundays</b><br />
				• 16:00 hrs to 21:00 hrs [IST]<br />
				• Total Lectures [L] : 03 [Saturdays; 1L = 1.5 hrs each]; <br />
				• 03 [Sundays; 1L = 1.5 hrs each]<br />
				• 15 minutes break between L1 & L2, L2 & L3 [on Saturdays & Sundays]
			</p>
			<p>
				<b>First Cut off List for Shortlisted Students:</b><br />
				• 28 November, 2023 (Tuesday) <br />
				• Full fee payment between 12:00 noon on 28 November (Tuesday) till 16:00 hrs on 29 November,
				2023 (Wednesday)
			</p>
			<p>
				<b>Second Cut off List for Shortlisted Students:</b><br />
				• 30 November, 2023 (Thursday) <br />
				• Full fee payment between 12:00 noon on 30 November, 2023 (Thursday) till 16:00 hrs on 1 December,
				2023 (Friday)
			</p>
			<p>
				• Total Seats - 60 (subject to change)<br />
				<br />
				• Certificate Awarded By - Bṛhat Culture Creatives LLP<br />
				<br />
				<b>Study Methodology</b><br />
				A. Online lectures<br />
				B. Case studies<br />
				C. Study tour - Central Institute of Psychiatry, Ranchi / NIMHANS, āśramas, etc. Bengaluru /
				NDDTC, AIIMS Delhi, āṣrama etc.
			</p>
		{/if}
	</section>
	<section class="rta-column p-top-64">
		<div class="rta-row colgap200 rowgap200 xcenter-d xcenter-m" style="align-items: center">
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLScWmM5Wa2sP3Ayrxg1FeAX1wuPs4XxzSzN9Ukbd7cNKbwTKyA/viewform"
				target="_blank"
				rel="noreferrer"
				><button class="newbutton big red">APPLY NOW</button>
			</a>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSfXooD5I_Xu4V8Q_OK7EiiQICpJedY5LHfyQNx10h_B4q6vFQ/viewform"
				target="_blank"
				rel="noreferrer"><button class="newbutton big red">REGISTER FOR WEBINAR</button></a
			>
			<button class="newbutton big red" on:click={toggleSubscribe}>VIEW BROCHURE</button>
		</div>
	</section>
</Shell>

{#if submodal}
	<div class="subscribemodal" transition:slide>
		<div class="insubmodal">
			<div class="rta-row">
				<button class="blank-button" on:click={toggleSubscribe}>
					<Close />
				</button>
			</div>
			<div class="rta-column null p-bot-16">
				<h5>Please Enter Details to Access Brochure</h5>
			</div>
			<form class="rta-column rowgap100 bord-bot p-bot-16">
				<input type="text" placeholder={signupName} bind:value={signupName} on:focus={focusName} />
				<input
					type="text"
					placeholder={signupEmail}
					bind:value={signupEmail}
					on:focus={focusEmail}
				/>
				<input type="text" placeholder={phone} bind:value={phone} on:focus={focusPass1} />
				<button class="newbutton red" on:click={submitDetails}>Submit</button>
				{#if showBro}
					<a
						href="https://drive.google.com/file/d/1ghuCCBa_F4lrHUnmbNBvor2VKu2Fgfwc/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						<div class="newbutton big red">VIEW BROCHURE</div>
					</a>
				{/if}
			</form>
		</div>
	</div>
{/if}

<style lang="sass">

#topguy
	@media screen and (min-width: 769px)
		align-items: center
		text-align: center
		padding-top: 64px
		padding-bottom: 32px
		img
			object-fit: contain
			width: 48%
			margin-bottom: -24px
	@media screen and (max-width: 768px)
		align-items: center
		text-align: center
		padding-top: 32px
		padding-bottom: 32px
		img
			object-fit: contain
			width: 64%
			margin-bottom: -24px
		h6
			font-size: 16px

.bio-overlay
	position: fixed
	top: 0
	left: 0
	width: 100vw
	min-height: 100vh
	backdrop-filter: blur(2px)
	align-items: center
	justify-content: center
	p
		background: white
	@media screen and (min-width: 769px)
		p
			width: 50%
			padding: 32px
	@media screen and (max-width: 768px)
		p
			width: 88%
			padding: 16px

#photos, #photos2, #photos3, #photos4, #photos5
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

#bannerdate
	background: #6c1039
	color: white
	@media screen and (max-width: 768px)
		font-size: 16px

#ico
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

#fourth
	@media screen and (min-width: 1024px)
		.take
			img
				object-fit: contain
				height: 96px
				border-radius: 48px
		.take
			h6
				text-align: center
	@media screen and (max-width: 1023px)
		.take
			img
				object-fit: contain
				height: 80px
				border-radius: 40px
		.take
			h6
				text-align: center

.headimage
	width: 100vw
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@media screen and (max-width: 768px)
		height: 50vh
		margin-top: 16px


.subscribemodal
	display: flex
	align-items: center
	justify-content: center
	width: 100vw
	height: 100vh
	position: fixed
	top: 0
	left: 0
	z-index: 2000
	background: transparent
	backdrop-filter: blur(5px)
	.insubmodal
		border: 1px solid var(--forline)
		background: var(--opposite)
		h5
			color: var(--background)
			padding-bottom: 0
		h5
			font-weight: 500
			font-size: 20px
		form
			input
				font-size: 12px
				padding: 4px 8px
				outline: none
		@media screen and (min-width: 1024px)
			width: 400px
			min-height: 200px
			padding: 16px
			.rta-row
				justify-content: flex-end
		@media screen and (max-width: 1023px)
			width: calc(100vw - 32px)
			min-height: 200px
			padding: 16px

.dark
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.insubmodal
		input
			border: 1px solid #272727


</style>
