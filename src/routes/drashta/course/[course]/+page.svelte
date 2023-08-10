<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { slide } from 'svelte/transition';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		drashtaDyn
	} from '$lib/stores/metastores';
	import { fly } from 'svelte/transition';
	import { backOut, backIn } from 'svelte/easing';
	import Shell from '$lib/components/PageShell.svelte';
	import {
		courseContents,
		juneCalendar,
		courseTakeaways,
		newSRG,
		courseInstructor,
		courseDetails,
		courseWhoFor,
		allCourses,
		coursePayment
	} from '$lib/utils/supapulls';
	let y: number;
	let iW: number;
	let breakPoint: boolean;
	let details: any;
	let conts: any;
	let takes: any;
	let junes: any;
	let pays: any;
	let instructor: any;
	let otherCourses: any;
	let schedules: any;
	let isFor: any;
	let area: any = Array(5).fill(false);
	area[1] = true;
	let fake = false;
	let expandMenu = false;
	let todayDate = new Date();
	let todayForm: any;

	export let data;

	$metaTitle = data.name + '| Bṛhat Draṣṭā';
	$metaDescription = data.excerpt;
	$metaUrl = `https://www.brhat.in/drashta/course/${data.dynamizer}`;
	$metaImage = data.image;
	$metaType = 'webpage';

	function toggleMenu() {
		expandMenu = !expandMenu;
	}

	function fauxfake() {
		fake = !fake;
	}

	function toggleArea(index: number) {
		area[index] = !area[index];
		for (let i = 0; i < area.length; i++) {
			if (i !== index && area[i] === true) {
				area[i] = false;
			}
		}
	}

	function formatDate(date: any) {
		let month = '' + (date.getMonth() + 1),
			day = '' + date.getDate(),
			year = date.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	todayForm = formatDate(todayDate);

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	$: if ($drashtaDyn) {
		(async () => {
			$metaTitle = data.name + '| Bṛhat Draṣṭā';
			$metaDescription = data.excerpt;
			$metaUrl = `/drashta/course/${data.dynamizer}`;
			$metaImage = data.image;
			conts = await courseContents($drashtaDyn);
			takes = await courseTakeaways($drashtaDyn);
			instructor = await courseInstructor($drashtaDyn);
			details = await courseDetails($drashtaDyn);
			isFor = await courseWhoFor($drashtaDyn);
			otherCourses = await allCourses();
			schedules = await newSRG($drashtaDyn);
			junes = await juneCalendar(todayForm);
			pays = await coursePayment($drashtaDyn);
		})();
	}

	onMount(async () => {
		$drashtaDyn = data.dynamizer;
		conts = await courseContents($drashtaDyn);
		takes = await courseTakeaways($drashtaDyn);
		instructor = await courseInstructor($drashtaDyn);
		details = await courseDetails($drashtaDyn);
		isFor = await courseWhoFor($drashtaDyn);
		otherCourses = await allCourses();
		schedules = await newSRG($drashtaDyn);
		junes = await juneCalendar(todayForm);
		pays = await coursePayment($drashtaDyn);
	});

	afterUpdate(() => {
		$drashtaDyn = data.dynamizer;
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW} />

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-grid grid2 colgap600 rowgap400 min100 ycenter" id="intro">
		<div class="rta-column rowgap400">
			<div id="heading" class="rta-column rowgap400 p-top-64 background">
				{#if data.status === 'open now'}
					<div class="statuslabel">Open Now</div>
				{/if}
				<h4 class="tt-c">{data.name}</h4>
				<p class="soft mid">
					{data.excerpt}
				</p>
			</div>
			<div class="rta-grid grid4 stay3 rowgap400 features">
				{#if details && details.length > 0}
					{#each details as item}
						<div class="rta-column xcenter rowgap100 bord-bot-m p-bot-16-m background iconboxes">
							<div class="rta-icon2 rta-column">
								<img src={item.image} alt={item.name} />
							</div>
							<small class="tt-u ta-c-d ta-c-m"><b>{item.content}</b></small>
						</div>
					{/each}
					{#if data.status === 'open now'}
						{#if pays && pays.length > 0}
							{#each pays as item}
								<div class="widening">
									<div class="rta-column rowgap100">
										<small>Indian Registrants:</small>
										<form>
											<script
												src="https://checkout.razorpay.com/v1/payment-button.js"
												data-payment_button_id={item.paymentindia}
												async
											>
											</script>
										</form>
									</div>
									<div class="rta-column rowgap100">
										<small>International Registrants:</small>
										<form>
											<script
												src="https://checkout.razorpay.com/v1/payment-button.js"
												data-payment_button_id={item.paymentintl}
												async
											>
											</script>
										</form>
									</div>
								</div>
							{/each}
						{/if}
					{/if}
				{/if}
			</div>
		</div>
		<div class="rta-column rta-image" id="heroimage">
			<img src={data.image} alt={data.name} />
		</div>
	</section>
	<section class="rta-column rowgap400 bord-top p-top-64 ytop">
		<div id="columnofbuttons" class="rta-column xcenter rowgap300 p-bot-32">
			{#if breakPoint}
				<button class="drawer-select" on:click={toggleMenu}>EXPAND DETAILS</button>
			{/if}
			{#if !breakPoint || expandMenu}
				<div class="rta-row colgap300" on:click={toggleMenu} on:keydown={fauxfake} transition:slide>
					<button class="drawer-item2" on:click={() => toggleArea(1)} class:selected={area[1]}>
						Introduction
					</button>
					<button class="drawer-item2" on:click={() => toggleArea(2)} class:selected={area[2]}>
						Course Contents
					</button>
					<button class="drawer-item2" on:click={() => toggleArea(3)} class:selected={area[3]}>
						Course Audience
					</button>
					<button class="drawer-item2" on:click={() => toggleArea(4)} class:selected={area[4]}>
						Learner Takeaways
					</button>
					<button class="drawer-item2" on:click={() => toggleArea(5)} class:selected={area[5]}>
						Instructor Profile
					</button>
					{#if schedules && schedules.length > 0}
						<button class="drawer-item2" on:click={() => toggleArea(6)} class:selected={area[6]}>
							Session Schedule
						</button>
					{/if}
				</div>
			{/if}
		</div>
		<div class="rta-column p-bot-64">
			{#if area[1]}
				<div
					class="rta-column bord-top p-top-32 carrier"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					<h3 class="p-bot-16">Course Introduction</h3>
					<pre>
				{data.content}
				</pre>
				</div>
			{/if}
			{#if area[2]}
				<div
					class="rta-column p-top-32 bord-top carrier"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					<h3 class="p-bot-16">Course Contents</h3>
					{#if conts && conts.length > 0}
						{#each conts as item}
							<div class="rta-column rowgap100 rowgap-8 bord-bot p-bot-16 p-top-16">
								<h6 class="tt-c title">{item.name}</h6>
								{#if item.content && item.content.length > 0}
									<pre>{item.content}</pre>
								{/if}
								{#if item.books && item.books.length > 0}
									<div class="rta-row stay colgap100">
										<div class="rta-image w32">
											<img src="/images/iconbooks.png" alt="books" />
										</div>
										<div class="rta-column w64">
											<small>Books Consulted:</small>
											<small style="color: #878787">{item.books}</small>
										</div>
									</div>
								{/if}
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if area[3]}
				<div
					class="rta-column bord-top p-top-32 carrier"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					<h3 class="p-bot-16">Who is the Course For</h3>
					{#if isFor && isFor.length > 0}
						{#each isFor as item}
							<pre class="bord-all all-p-16">
							{item.content}
						</pre>
						{/each}
					{/if}
				</div>
			{/if}
			{#if area[4]}
				<div
					class="rta-column bord-top p-top-32 carrier"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					<h3 class="p-bot-16">Learner Takeaways</h3>
					{#if takes && takes.length > 0}
						{#each takes as item}
							<div class="rta-column null rowgap100 bord-bot p-top-32 p-bot-16">
								<h6 class="title">{item.name}</h6>
								<pre>{item.content}</pre>
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if area[5]}
				<div
					class="rta-column bord-top p-top-32 carrier"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					<h3 class="p-bot-16">Course Instructor</h3>
					{#if instructor && instructor.length > 0}
						{#each instructor as item}
							<div class="rta-row row-col fixed rowgap300 colgap300 bord-bot p-bot-16">
								<div class="rta-image w32 height-30-3">
									<img src={item.image} alt={item.name} />
								</div>
								<div class="rta-column w64">
									<h6 class="title">{item.name}</h6>
									<pre>{item.content}</pre>
								</div>
							</div>
						{/each}
					{/if}
				</div>
			{/if}
			{#if area[6]}
				<div
					class="rta-column p-top-32 bord-top date-box"
					in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
					out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
				>
					{#if schedules && schedules.length > 0}
						<h3 class="p-bot-16">Session Schedule</h3>
						<div class="rta-grid grid7">
							{#if junes && junes.length > 0}
								{#each junes as item}
									<div
										class="rta-column datebox {item.isyes}"
										class:thiscourse={item.dyn === $drashtaDyn}
									>
										<small>{item.month} {item.data.slice(8)} | {item.day}</small>
										{#if item.isyes === 'yes'}
											<p>{item.title}</p>
										{/if}
									</div>
								{/each}
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-64 ytop">
		<h2 class="bord-top bord-bot p-top-32 p-bot-32">All Courses</h2>
		{#if otherCourses && otherCourses.length > 0}
			<div class="rta-grid grid3 colgap400 rowgap400">
				{#each otherCourses as item}
					<div class="rta-column rowgap100 bord-bot p-bot-16">
						{#if item.status === 'upcoming' || item.status === 'Upcoming'}
							<small class="label labelelse">{item.status}</small>
							<h6 class="title tt-c">{item.name}</h6>
							<p class="small">{item.datefrom} | with {item.ins}</p>
						{:else}
							<small class="label labelelse">{item.status}</small>
							<h6 class="title tt-c">
								<a href="/drashta/course/{item.course}">
									{item.name}
								</a>
							</h6>
							<p class="small">with {item.ins}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</section>
</Shell>

<style lang="sass">

.statuslabel
	background: #fe4a49
	padding: 2px 8px
	width: 120px
	color: white
	font-size: 20px
	text-transform: uppercase

.date-box
	@media screen and (min-width: 1024px)
		padding-left: 80px
		padding-right: 80px
		padding-bottom: 48px
	@media screen and (max-width: 1023px) and (min-width: 768px)
		padding-left: 48px
		padding-right: 48px
	@media screen and (max-width: 767px)
		padding-left: 0px
		padding-right: 0px
		padding-top: 32px
		padding-bottom: 32px

.iconboxes
	p
		color: var(--opposite)
	small
		color: var(--opposite)
	@media screen and (max-width: 1023px)
		p
			font-size: 12px
		small
			display: none

.widening
	small
		color: var(--opposite)
	@media screen and (max-width: 1023px)
		flex-direction: column
		row-gap: 32px

.rta-row.stay
	.rta-image
		height: 48px
		width: 48px

.label
	font-size: 12px
	background: var(--themer)
	color: white
	padding: 2px 6px
	border-radius: 4px
	max-width: 100%
	width: max-content

.drawer-select
	background: #0170B9
	color: white
	border: none
	font-size: 16px
	padding: 8px
	border-radius: 20px

#heroimage
	@media screen and (min-width: 1024px)
		height: 80vh

.is-blue
	color: #0170B9

#columnofbuttons
	@media screen and (min-width: 1024px)
		padding-right: 32px

.datebox.yes.thiscourse
	background: var(--borderline)
	border: 1px solid white
	small
		color: #fe4a49


.grid4.stay3
	@media screen and (min-width: 1024px)
		grid-template-areas: ". . ." "button button button"
		.widening
			grid-area: button
			display: flex
			column-gap: 16px
			justify-content: center
			padding: 8px
			text-align: center
			font-weight: bold
			row-gap: 8px	
			form
				border-radius: 32px
	@media screen and (max-width: 1023px)
		grid-template-areas: ". . ." "button button button"
		.widening
			display: flex
			column-gap: 32px
			grid-area: button
			align-self: center
			justify-self: center
			text-align: center
			font-weight: bold
			form
				border-radius: 16px

.datebox
	@media screen and (min-width: 1024px)
		min-height: 120px
		border: 1px solid var(--borderline)
		padding: 16px
		p
			font-size: 14px
			line-height: 1.2
			font-weight: bold
			color: var(--opposite)
	@media screen and (max-width: 1023px)
		min-height: 120px
		border: 1px solid var(--borderline)
		padding: 4px
		width: 100%
		p
			font-size: 12px
			line-height: 1.2
			font-weight: bold
			color: var(--opposite)
			word-break: break-word
		small
			font-size: 10px

.drawer-item2
	font-weight: bold
	font-size: 16px
	padding: 2px 6px
	&::after
		background: #0170B9
	@media screen and (max-width: 1023px)
		text-align: center
		padding: 4px 6px

#heroimage
	@media screen and (min-width: 1024px)
		justify-content: center
		img
			height: 80%
	@media screen and (max-width: 1023px)
		img
			object-fit: cover
			width: 100%

.rta-icon2
	img
		object-fit: cover
	@media screen and (min-width: 1024px)
		align-items: center
		img
			width: 80px
			height: 80px
	@media screen and (max-width: 1023px)
		img
			width: 48px
			height: 48px

h2
	text-transform: capitalize
	font-weight: bold
	line-height: 1.05

.drawer-item2.selected
	background: var(--betblue)
	color: white

</style>
