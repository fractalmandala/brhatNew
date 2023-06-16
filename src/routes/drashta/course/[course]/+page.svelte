<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
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
	import CompButton from '$lib/ridunits/RIDButton.svelte';
	import {
		courseContents,
		juneCalendar,
		courseTakeaways,
		newSRG,
		courseInstructor,
		courseDetails,
		courseWhoFor,
		allCourses
	} from '$lib/utils/supapulls';
	let y: number;
	let iW: number;
	let breakPoint: boolean;
	let details: any;
	let conts: any;
	let takes: any;
	let junes: any;
	let instructor: any;
	let otherCourses: any;
	let schedules: any;
	let isFor: any;
	let area: any = Array(5).fill(false);
	area[0] = true;
	let fake = false;
	let expandMenu = false;
	let todayDate = new Date();
	let todayForm: any;

	export let data;

	$metaUrl = $page.url.pathname;
	$metaTitle = data.name;
	$metaDescription = data.excerpt;
	$metaType = 'course';
	$drashtaDyn = data.dynamizer;

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
		$metaUrl = $page.url.pathname;
		$metaTitle = data.name;
		$metaDescription = data.excerpt;
		(async () => {
			conts = await courseContents($drashtaDyn);
			takes = await courseTakeaways($drashtaDyn);
			instructor = await courseInstructor($drashtaDyn);
			details = await courseDetails($drashtaDyn);
			isFor = await courseWhoFor($drashtaDyn);
			otherCourses = await allCourses();
			schedules = await newSRG($drashtaDyn);
			junes = await juneCalendar(todayForm);
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
	});

	afterUpdate(() => {
		$drashtaDyn = data.dynamizer;
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW} />

<!--page header with title and icons-->
<div
	id="headersection"
	class="rta-column outer-box minH rowgap600 p-top-64"
	data-lenis-scroll-snap-align="start"
>
	<div class="rta-grid colgap600 grid2 right2 glass-bottom p-bot-64" id="headersectionmaingrid">
		<div class="rta-column rowgap400">
			<div id="heading" class="rta-column rowgap400 p-top-64 background">
				<h2 class="heading">{data.name}</h2>
				<h6 class="serif">
					{data.excerpt}
				</h6>
			</div>
			<div class="rta-grid grid4 stay3 colgap400 rowgap400">
				{#if details && details.length > 0}
					{#each details as item}
						<div class="rta-column xcenter rowgap100 bord-bot-m p-bot-16-m background iconboxes">
							<div class="rta-icon2 rta-column">
								<img src={item.image} alt={item.name} />
							</div>
							<p class="tt-uc ta-c-d ta-c-m"><b>{item.content}</b></p>
							<small class="tt-uc ta-c-d"><b>{item.name}</b></small>
						</div>
					{/each}
					{#if data.status === 'open now'}
						<div class="widening">
							<form>
								<p class="ta-c" style="color: var(--opposite); margin-bottom: 4px">
									Indian Registrants:
								</p>
								<script
									src="https://checkout.razorpay.com/v1/payment-button.js"
									data-payment_button_id="pl_LzqAZVTLio5DOc"
									async
								>
								</script>
							</form>
							<form>
								<p class="ta-c" style="color: var(--opposite); margin-bottom: 4px">
									International Registrants:
								</p>
								<script
									src="https://checkout.razorpay.com/v1/payment-button.js"
									data-payment_button_id="pl_LrRM691C2bz2zB"
									async
								>
								</script>
							</form>
						</div>
					{/if}
				{/if}
			</div>
		</div>
		<div class="rta-column rta-image" id="heroimage">
			<img src={data.image} alt={data.name} />
		</div>
	</div>
</div>
<!--end-->

<!--all course details area-->
<div class="rta-column outer-box x000" data-lenis-scroll-snap-align="start">
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
	<div class="rta-column glass-top p-bot-64">
		{#if area[1]}
			<div
				class="rta-column p-top-32 carrier"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				<h4 class="serif p-bot-16">Course Introduction</h4>
				<pre class="serif">
				{data.content}
				</pre>
			</div>
		{/if}
		{#if area[2]}
			<div
				class="rta-column p-top-32 carrier"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				<h4 class="serif p-bot-16">Course Contents</h4>
				{#if conts && conts.length > 0}
					{#each conts as item}
						<div class="rta-column rowgap100 rowgap-8 bord-bot p-bot-16 p-top-16">
							<h6 class="tt-c heading">{item.name}</h6>
							{#if item.content && item.content.length > 0}
								<pre class="serif">{item.content}</pre>
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
				class="rta-column p-top-32 carrier"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				<h4 class="serif">Who is the Course For</h4>
				{#if isFor && isFor.length > 0}
					{#each isFor as item}
						<pre class="serif bord-all all-p-16">
							{item.content}
						</pre>
					{/each}
				{/if}
			</div>
		{/if}
		{#if area[4]}
			<div
				class="rta-column p-top-32 carrier"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				<h4 class="serif p-bot-16">Learner Takeaways</h4>
				{#if takes && takes.length > 0}
					{#each takes as item}
						<div class="rta-column null rowgap100 bord-bot p-top-32 p-bot-16">
							<h6 class="heading">{item.name}</h6>
							<pre class="serif">{item.content}</pre>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
		{#if area[5]}
			<div
				class="rta-column p-top-32 carrier"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				<h4 class="serif p-bot-16">Course Instructor</h4>
				{#if instructor && instructor.length > 0}
					{#each instructor as item}
						<div class="rta-row row-col fixed rowgap300 colgap300 bord-bot p-bot-16">
							<div class="rta-image w32 height-30-3">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="rta-column w64">
								<h6 class="heading">{item.name}</h6>
								<pre class="serif">{item.content}</pre>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
		{#if area[6]}
			<div
				class="rta-column p-top-32 outer-box"
				in:fly={{ duration: 500, delay: 400, x: -500, easing: backOut }}
				out:fly={{ duration: 350, delay: 0, x: 500, easing: backIn }}
			>
				{#if schedules && schedules.length > 0}
					<h4 class="serif p-bot-16">Session Schedule</h4>
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
</div>
<!--end-->
<!--all other courses list-->
<div class="rta-column rowgap400 outer-box p-top-64" data-lenis-scroll-snap-align="start">
	<div class="rta-column glass-y p-top-32 p-bot-32">
		<h3 class="serif">All Courses</h3>
	</div>
	<div class="rta-grid grid3 colgap400 rowgap400 p-bot-64">
		{#if otherCourses && otherCourses.length > 0}
			{#each otherCourses as item}
				<div class="rta-column rowgap100 bord-bot p-bot-16">
					{#if item.status === 'upcoming' || item.status === 'Upcoming'}
						<small class="label labelelse">{item.status}</small>
						<h6 class="heading tt-c">{item.name}</h6>
						<p>{item.datefrom} | with {item.ins}</p>
					{:else}
						<small class="label labelelse">{item.status}</small>
						<h6 class="heading tt-c">
							<a href="/drashta/course/{item.course}">
								{item.name}
							</a>
						</h6>
						<p>with {item.ins}</p>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>

<!--end-->

<style lang="sass">

.iconboxes
	p
		color: var(--opposite)

.x000
	@media screen and (max-width: 1023px)
		padding-top: 0
		.drawer-select
			width: 100%

.rta-row.stay
	.rta-image
		height: 48px
		width: 48px

.label
	font-size: 12px
	background: var(--themer)
	color: white
	padding: 2px 6px
	border-radius: 5px
	max-width: 100%
	width: max-content

.drawer-select
	background: #0170B9
	color: white
	border: none
	font-size: 18px
	padding: 8px
	border-radius: 20px


#heading
	h2
		@media screen and (max-width: 1023px)
			font-size: 2.7rem

#headersectionmaingrid
	h6
		font-weight: 400
	@media screen and (max-width: 1023px)
		grid-template-areas: "hero" "."
		#heroimage
			grid-area: hero

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
			border: 1px solid var(--opposite)
			padding: 8px
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
			form
				border-radius: 16px

.datebox
	@media screen and (min-width: 1024px)
		height: 120px
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
		padding: 8px
		width: 100%
		p
			font-size: 14px
			line-height: 1.2
			font-weight: bold
			color: var(--opposite)

.drawer-item2
	font-weight: bold
	font-size: 18px
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
			width: 80px
			height: 80px

h2
	text-transform: capitalize
	font-weight: bold
	line-height: 1.05
	@media screen and (min-width: 1024px)
		letter-spacing: -2px
	@media screen and (max-width: 1023px)
		letter-spacing: -1px

.serif
	font-family: 'Adobe Devanagari', serif

.heading
	font-family: 'Adobe Devanagari', serif

h6.heading
	line-height: 1.2
	font-size: 22px

pre.serif
	font-weight: 400
	font-size: 22px
	font-family: 'Adobe Devanagari', serif
	color: var(--opposite)

.drawer-item2.selected
	background: var(--betblue)
	color: white

</style>
