<script lang="ts">
	import { onMount } from 'svelte';
	import { nitividhana } from '$lib/utils/supapulls';
	import { slide } from 'svelte/transition';
	import Header from '$lib/components/NewHeader.svelte';
	import Shell from '$lib/components/PageShell.svelte';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';

	$metaTitle = 'Nitividhana';
	$metaDescription = 'Culture Compatible Public Policy';
	$metaUrl = 'https://www.brhat.in/nitividhana';
	$metaImage = '/images/nitividhanahero.png';

	let details: any;
	let section = Array(4).fill(false);
	let expansion: boolean = false;
	section[0] = true;
	let answer = Array(20).fill(false);
	let fake = false;

	function fauxfake() {
		fake = !fake;
	}

	function toggleExpansion() {
		expansion = !expansion;
	}

	function toggleSection(index: number) {
		section[index] = !section[index];
		for (let i = 0; i < section.length; i++) {
			if (i !== index && section[i] === true) {
				section[i] = false;
			}
		}
	}

	function toggleAnswer(index: number) {
		answer[index] = !answer[index];
		for (let i = 0; i < answer.length; i++) {
			if (i !== index && answer[i] === true) {
				answer[i] = false;
			}
		}
	}

	onMount(async () => {
		details = await nitividhana();
	});
</script>

<Header isSwitch={false} />
<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('/images/nitividhanahero.png')"
		--parallaxresp="url('/images/nitividhanahero.png')"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400">
		{#if details && details.length > 0}
			{#each details as item}
				{#if item.type === 'Total Course Duration'}
					<h5 class="ta-c bord-bot bord-top p-bot-8 p-top-8 title">{item.content}</h5>
				{/if}
			{/each}
		{/if}
		{#if details && details.length > 0}
			<div class="rta-grid grid3 rowgap400 colgap400">
				{#each details as item}
					{#if item.type === 'Duration' || item.type === 'Days' || item.type === 'Fees'}
						<div class="rta-column rowgap100 boxes">
							<p class="mid ta-c">{item.content}</p>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 p-top-64 p-bot-32">
		<div class="rta-column xcenter">
			<div class="rta-column rowgap200 p-bot-32">
				<h6 class="contains-text">
					This online policy learning program offered by Chinmaya International Foundation and Brhat
					is an intensive immersive program in today's burning issues.
				</h6>
				<p class="contains-text">
					It is intended as an introduction to Public Policy, its roots in Political Philosophy
					(राजनैतिक दर्शन) as seen through an examination of some of the major texts and thinkers of
					both the Eastern and Western traditions.
				</p>
				<p class="contains-text">
					It attempts to provide a global overview of Political Philosophy and how these
					philosophical traditions developed and evolved within a context, and how the politics of
					those times played a role in establishing some traditions as dominant.
					<b
						>As public policy texts and practices draw heavily from these intellectual traditions,
						it is necessary to place them in a context and retool for a fast-evolving world (and its
						problems).</b
					>
				</p>
				<p class="contains-text">
					Designed to foster fact-based critical thinking on the most important policy issues,
					participants will have a <b
						>unique chance to look at policymaking from a worldview emerging from the Indian
						Knowledge Systems.</b
					> The program intends to build understanding among participants that the policy problems are
					not merely economic problems, but complex socio-cultural problems.
				</p>
				<p class="contains-text">
					The program challenges its participants to take the risk of thinking not just differently,
					but more holistically. <b
						>The course covers topics such as ancient Indian sciences, Ayurveda, yoga, ethical
						frameworks, and indigenous knowledge systems.</b
					>
					Participants will engage in interactive online sessions, collaborative discussions, self-paced
					learning, and practical applications to enhance their understanding and application of Indian
					knowledge systems in governance.
				</p>
			</div>
			<div class="rta-column rowgap300 p-bot-32">
				<h5 class="title ta-c bord-top p-top-32 p-bot-16">Who is the Program For?</h5>
				<div class="icons contains-text p-bot-24">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/icon-policy.png"
						alt="students"
					/>
					<div>
						<p>
							<b>1. Students and Policy Enthusiasts</b>
						</p>
						<p class="mid soft">
							who seek a more coherent worldview, beyond ideological headlines.
						</p>
					</div>
				</div>
				<div class="icons contains-text p-bot-24">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/icon-professional.png"
						alt="professionals"
					/>
					<div>
						<p>
							<b>2. Working Professionals</b>
						</p>
						<p class="mid soft">
							wishing to acquire a richer lens to locate their work and expand their area of
							influence.
						</p>
					</div>
				</div>
				<div class="icons contains-text p-bot-24">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/icon-writer.png"
						alt="writers"
					/>
					<div>
						<p>
							<b>3. Writers and Artists</b>
						</p>
						<p class="mid soft">looking to bring the power of art towards societal outcomes.</p>
					</div>
				</div>
				<div class="icons contains-text p-bot-24">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/icon-politician.png"
						alt="politician"
					/>
					<div>
						<p>
							<b>4. Practicing and Aspiring Political Leaders</b>
						</p>
						<p class="mid soft">
							who want to distinguish themselves and rise above a purely electoral understanding of
							politics.
						</p>
					</div>
				</div>
			</div>
			<div class="rta-column rowgap200 xcenter bord-top p-top-32">
				<a href="https://rzp.io/l/nitividhana" target="_blank" rel="noreferrer">
					<button class="newbutton big red">Apply Now</button>
				</a>
				<p class="small">Clicking on this button will open the payment page in a new tab.</p>
			</div>
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-32 bord-top bord-bot p-bot-32">
		{#if $breakTwo}
			<div class="drawer rta-column xcenter">
				<button on:click={toggleExpansion}>Expand Course Details</button>
			</div>
		{/if}
		{#if $breakZero || $breakOne || expansion}
			<div class="drawer" transition:slide on:click={toggleExpansion} on:keydown={fauxfake}>
				<button on:click={() => toggleSection(0)} class:selected={section[0]}> Principles </button>
				<button on:click={() => toggleSection(1)} class:selected={section[1]}> Pedagogy </button>
				<button on:click={() => toggleSection(2)} class:selected={section[2]}> Eligibility </button>
				<button on:click={() => toggleSection(3)} class:selected={section[3]}> Takeaways </button>
			</div>
		{/if}
		<div class="rta-column xcenter rowgap200">
			{#if section[0]}
				<p class="contains-text">
					In designing a pedagogical philosophy rooted in Dharma, Drishti, and Disha, we at Brhat,
					draw upon the profound wisdom of ancient Indian traditions, where knowledge is not merely
					an intellectual pursuit but a holistic journey encompassing all dimensions; intellectual,
					ethical, spiritual, and practical. This philosophy is deeply aligned with our cultural
					heritage.
				</p>
				<p class="contains-text">
					<b>Dharma - Moral and Ethical Foundation</b><br />
					Dharma is at the core of our pedagogical philosophy. We believe that participants must be not
					just introduced to the "what" of governance but the "why" in a manner that upholds the principles
					of interconnectedness, interdependence, creation of surplus and universal well-being.
				</p>
				<p class="contains-text">
					<b>Dṛṣṭi - Vision and Perspective</b><br />The development of a discerning gaze which is
					anchored in a dhārmika vision of the self and world. In debates and discussions,
					participants will learn to analyze issues from multiple viewpoints, encouraging them to
					develop a broad and inclusive perspective.
				</p>
				<p class="contains-text">
					<b>Diśā - Direction and Purpose</b><br /> A sense of purpose and direction instilled through
					study, reflective projects, case study applications and long-term engagements.
				</p>
			{:else if section[1]}
				<p class="contains-text">
					Rooted in the principles of Dharma, Dṛṣṭi, and Diśā, learners will be taken through a
					carefully curated journey entailing a deeper understanding of oneself and one's role in
					the world of public policy.
					<br /><br />
					<b>Pre-Workshop Components -</b><br />

					1. Know Yourself better through a simple Ayurvedic analysis of your svabhava (your
					inherent nature) and svadharma (policy roles that suit you the most).<br />
					2. An orientation to the Content, Pedagogy and Structure of the Indian Knowledge Systems and
					their role in policy and governance. <br /><br />
					<b>Sādhanā</b><br />
					Develop yourself through a set of reflective activities<br /><br />
					<b> Svādhyāya</b><br />
					Discover deeper engagement through immersive in-course policy challenges; continuous synthesis
					of learnings; in-depth orientation to a preferred policy area in Week 7.<br /><br />
					<b>Samvāda</b><br />
					Group-based projects; dialogoes and discussions; QnAs with subject experts/mentors<br
					/><br />
					<b>Sṛjanā</b><br />
					Networking; integral/alternative frameworks for policy thinking; long-term engagements for
					competency creation<br /><br />
					<b>Post-Workshop Engagement Components</b><br />
					1. Solve Policy Grand Challenges in a stimulated environment<br />
					2. Monthly Webinars with Mentors<br />
					3. Engaged community for robust debates and discussions<br />
					4. Sign Up for a set of Brhat courses on an exclusive offer
				</p>
			{:else if section[2]}
				<p class="contains-text">
					This learning camp requires 100% time commitment for the duration of the 8-week program,
					including participating in activities, games and collaboration with study groups outside
					of class.<br /><br />
					This policy learning camp does not offer participants academic credit or grades.<br /><br
					/>

					Use the same email for both application and payment. The following is mandatory for course
					completion and certification:<br /><br />
					1. Attend all sessions.<br />
					2. Complete assignments and projects.<br />
					3. Collaborate with fellow participants in class discussions.
				</p>
			{:else if section[3]}
				<p class="contains-text">
					<b>Personal Growth and Transformation:</b><br />
					Develop a deeper sense of purpose, aligning your professional roles with the values and principles
					that resonate with your own identity and aspirations.<br /><br />
					<b>Critical & Clear Thinking:</b><br />
					Ability to formulate a critical comparative analysis of Western and Indian perspectives on
					public policy and analyze gaps in existing policies in different domains to ideate possible
					solution pathways.<br /><br />
					<b>Innovative Approaches:</b><br />
					Indian civilizational values and knowledge systems can provide alternative perspectives and
					innovative approaches to problem-solving. Leverage these insights to think creatively, challenge
					conventional practices, and develop innovative solutions to complex governance challenges.<br
					/><br />
					<b>Strengthen Policy Thinking:</b><br />
					Develop a concrete understanding of the roles of the State, bureaucracy, etc in the working
					of policy. Study successful culture-compatible policy implementations and identify/ideate for
					more in relevant areas.<br /><br />
					<b>Sustainable Development:</b><br />
					Incorporate ecological wisdom from Indian knowledge systems to contribute to sustainable socio-cultural
					and natural systems in governance and nation-building.
				</p>
				<h6 class="contains-text">
					Successful participants receive a certificate of completion endorsed by Chinmaya
					International Foundation and Brhat.
				</h6>
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-32 bord-bot p-bot-32">
		<div class="rta-column rowgap100">
			<h4 class="ta-c">FAQs</h4>
			<small class="ta-c">Click on Questions to Expand</small>
		</div>
		{#if details && details.length > 0}
			<div class="rta-column rowgap400 xcenter">
				{#each details as item, i}
					{#if item.type === 'FAQ'}
						<div class="rta-column rowgap200 contains-text">
							<p
								on:click={() => toggleAnswer(i)}
								on:keydown={fauxfake}
								style="cursor: pointer"
								class:bold={answer[i]}
							>
								{item.content}
							</p>
							{#if answer[i]}
								<p class="mid soft bord-bot p-bot-32" transition:slide>{item.answer}</p>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 p-top-32">
		<h4 class="ta-c">Schedule</h4>
		{#if details && details.length > 0}
			<div class="rta-column rowgap400 xcenter">
				{#each details as item}
					{#if item.type === 'schedule'}
						<div class="rta-column contains-text bord-bot p-bot-16">
							<p><b>{item.content}</b></p>
							<pre style="color: var(--opposite)">{item.answer}</pre>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
	<section class="rta-column rowgap400 p-top-32">
		<h4 class="ta-c">Speakers</h4>
		{#if details && details.length > 0}
			<div class="rta-column rowgap400 xcenter">
				{#each details as item}
					{#if item.type === 'speaker'}
						<div class="rta-row colgap300 rowgap200 contains-text">
							<div class="rta-image w32">
								<img src={item.image} alt={item.content} />
							</div>
							<div class="rta-column rowgap100 w64">
								<p class="mid"><b>{item.content}</b></p>
								<p class="small">{item.answer}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
		<div class="rta-column rowgap200 xcenter bord-top p-top-32">
			<a href="https://rzp.io/l/nitividhana" target="_blank" rel="noreferrer">
				<button class="newbutton big red">Apply Now</button>
			</a>
			<p class="small">Clicking on this button will open the payment page in a new tab.</p>
		</div>
	</section>
</Shell>

<style lang="sass">

.icons
	display: flex
	flex-direction: row
	@media screen and (min-width: 769px)
		column-gap: 24px
		img
			width: 64px
			height: 64px
	@media screen and (max-width: 768px)
		column-gap: 16px
		img
			width: 56px
			height: 56px

.rta-image
	height: 200px
	width: 200px
	display: flex
	align-items: center
	justify-content: center
	img
		object-fit: cover
		width: 100%
		border-radius: 25px

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 40vh


.boxes
	border: 1px solid #CC4C3E
	border-radius: 4px
	padding: 12px
	background: #712E32
	p
		color: white

.drawer
	display: flex
	@media screen and (min-width: 769px)
		flex-direction: row
		align-items: center
		align-self: center
		column-gap: 24px
	@media screen and (max-width: 768px)
		flex-direction: column
		justify-content: center
		row-gap: 16px

.drawer
	button
		border: 1px solid var(--contraster2)
		background: none
		border-radius: 3px
		padding: 8px 16px
		text-transform: uppercase
		font-weight: bold
		cursor: pointer
		transition: 0.04s
		&:hover
			border: 1px solid #fe4a49
			color: #fe4a49
	button.selected
		background: #fe4a49
		color: white
		border: 1px solid #fe4a49
		cursor: none

.bold
	font-weight: bold

</style>
