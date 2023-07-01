<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Social from '$lib/components/Social.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Header from '$lib/components/NewsHead.svelte';
	import Close from '$lib/icons/close.svelte';
	import { newsletterItems, newsletterIssues } from '$lib/utils/supapulls';
	import { showChip } from '$lib/stores/globalstores';
	import supabase from '$lib/utils/db';
	export let data;
	export let form: ActionData;
	let loading = false;

	let issueselector = data.issueData.issueno;
	let newsitems: any;
	let newsissues: any;
	let met: any;
	let submodal = false;
	let passCheck = true;

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let themessage = '';

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat Fortnightly Newsletter Issue No.' + data.issueData.issueno;
	$metaDescription =
		'A fortnightly dispatch updating you on latest actions, events, launches and more at the Culture Engine.';
	$metaUrl = `https://www.brhat.in/newsletter/${data.issueData.issueno}`;
	$metaImage = data.issueData.image;

	function toggleSubscribe() {
		submodal = !submodal;
	}

	function handleOverlayClick(e: any) {
		if (e.target === e.currentTarget) {
			submodal = false;
		}
	}

	async function navigateToLink() {
		await goto('/');
	}

	async function letSignup() {
		const { error } = await supabase.auth.signUp({
			email: signupEmail,
			password: password,
			options: { emailRedirectTo: 'https://www.brhat.in/newsletter/1' }
		});
		if (error) {
			themessage = 'Error, please try again.';
		} else {
			themessage = 'Success! Please check your email ID for confirmation.';
			signupName = 'Full Name';
			signupEmail = 'Email ID';
			password = 'Password';
			repeatPass = 'Confirm Password';
		}
	}

	onMount(async () => {
		newsitems = await newsletterItems(issueselector);
		newsissues = await newsletterIssues();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header>
	<div slot="allbuttons">
		{#if data.user !== 'none'}
			<form class="thisform" method="post" action="?/signout">
				<button class="newbutton"> Log Out </button>
			</form>
		{/if}
	</div>
</Header>

<div
	class="mainletter"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="main">
		{#if data.user !== 'none'}
			{#if $breakZero || $breakOne}
				<div class="rta-column itemarea outer-box">
					{#if newsitems && newsitems.length > 0}
						{#each newsitems as item}
							{#if item.tag === 'Featured'}
								<div class="rta-row featured between p-bot-64">
									<div class="rta-column w64">
										<div class="feat-tag">{item.tag}</div>
										<div class="feat-head p-bot-16"><h1>{item.header}</h1></div>
										<div class="feat-text"><pre>{item.content}</pre></div>
										<a href={item.link} target="_blank" rel="noreferrer"
											><button class="newbutton">Read Now</button></a
										>
									</div>
									<div class="rta-image w32">
										<img src={item.image} alt="featuredhero" />
									</div>
								</div>
							{/if}
						{/each}

						<div class="rta-grid grid2 colgap400 rowgap400 m-top-32">
							{#each newsitems as item}
								{#if item.tag !== 'Featured'}
									<div class="rta-column singleitem">
										{#if item.tag}
											<div class="tagger" style="background: {item.color}">{item.tag}</div>
										{/if}
										<h4 class="p-bot-8">{item.header}</h4>
										<div class="rta-row between bord-top m-top-16 p-top-16">
											<div class="rta-column w64">
												<pre>
													{item.content}
												</pre>
												{#if item.link}
													<a href={item.link} target="_blank" rel="noreferrer">
														<button class="newbutton"> Visit </button>
													</a>
												{/if}
											</div>
											<div class="rta-image w32">
												<img src={item.image} alt="heroimage" />
											</div>
										</div>
									</div>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			{:else}
				<div class="rta-column outer-box">
					{#if newsitems && newsitems.length > 0}
						{#each newsitems as item}
							{#if item.tag === 'Featured'}
								<div class="rta-column mobfeatured rowgap200 between p-bot-64">
									<div class="rta-image">
										<img src={item.image} alt="featuredhero" />
									</div>
									<div class="rta-column rowgap200">
										<div class="feat-tag">{item.tag}</div>
										<div class="feat-head"><h1>{item.header}</h1></div>
										<div class="feat-text"><pre>{item.content}</pre></div>
										<a href={item.link} target="_blank" rel="noreferrer"
											><button class="newbutton">Read Now</button></a
										>
									</div>
								</div>
							{/if}
						{/each}

						<div class="rta-grid grid2 colgap400 rowgap400 m-top-32">
							{#each newsitems as item}
								{#if item.tag !== 'Featured'}
									<div class="rta-column singleitem">
										{#if item.tag}
											<div class="tagger" style="background: {item.color}">{item.tag}</div>
										{/if}
										<h4 class="p-bot-8">{item.header}</h4>
										<div class="rta-row stay between">
											<div class="rta-column w64">
												<pre>
													{item.content}
												</pre>
												{#if item.link}
													<a href={item.link} target="_blank" rel="noreferrer">
														<button class="newbutton"> Visit </button>
													</a>
												{/if}
											</div>
											<div class="rta-image w32">
												<img src={item.image} alt="heroimage" />
											</div>
										</div>
									</div>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		{:else}
			<div class="outer-box rta-column rowgap200 subsign">
				<h5>Please subscribe to access the newsletter.</h5>
				<button class="genbutton" on:click={toggleSubscribe}> Subscribe </button>
				<p class="bord-top p-top-16">Already subscribed? Sign In below:</p>
				<form class="thisform" method="post" action="?/login">
					<div class="rta-column rowgap100 null">
						<input
							id="email"
							name="email"
							value={form?.values?.email ?? ''}
							class="input"
							type="email"
							placeholder="Email"
							required
						/>

						<input
							id="password"
							name="password"
							class="input"
							type="password"
							placeholder="Password"
							required
						/>

						<button disabled={loading} class="genbutton">Sign in</button>
					</div>
				</form>
			</div>
		{/if}
		<div class="outer-bo">
			<div class="aboutstrip">
				<h5>About Bṛhatadya</h5>
				<p>
					"Adya," meaning 'today, this day, now, at present', combines with Bṛhat to denote 'Bṛhat
					Today,' or 'Bṛhat Now'- a fair name for a periodic newsletter that updates recent events
					and activities at Bṛhat.
				</p>
				<p>
					A second meaning lends deeper significance. With 'bṛhat' meaning 'great, formidable,
					large, growing,' 'Bṛhat-Adya' means the "Great Now," or the "Great Moment," ie- the
					civilizational moment we are currently in. Read more about this moment, and what it means
					for all of us,
					<a
						style="color: #fe4a49"
						href="https://www.brhat.in/about/anatomy"
						target="_blank"
						rel="noreferrer">here.</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
{#if submodal}
	<div class="subscribemodal" on:click={handleOverlayClick} on:keydown={handleOverlayClick}>
		<div class="insubmodal">
			<div class="rta-row">
				<button class="blank-button" on:click={toggleSubscribe}>
					<Close />
				</button>
			</div>
			<div class="rta-column null p-bot-16">
				<h5>Subscribe to Bṛhat</h5>
				<small>Subscribe button will appear if all fields are filled correct.</small>
			</div>
			<form class="rta-column rowgap100">
				<input type="text" placeholder={signupName} bind:value={signupName} />
				<input type="text" placeholder={signupEmail} bind:value={signupEmail} />
				<input type="text" placeholder={password} bind:value={password} />
				<input type="text" placeholder={repeatPass} bind:value={repeatPass} />
				{#if passCheck}
					<button class="genbutton" on:click={letSignup}>Sign Up</button>
				{/if}
				<p>
					{themessage}
				</p>
			</form>
		</div>
	</div>
{/if}

<style lang="sass">

.outer-bo
	@media screen and (max-width: 1023px)
		margin-bottom: 64px

.aboutstrip
	display: flex
	flex-direction: column
	align-self: center
	place-self: center
	justify-self: center
	border: 1px solid var(--forline)
	padding: 24px
	h5
		font-weight: bold
		color: var(--opposite)
		margin-bottom: 16px
		font-family: 'Gandhi', serif
	p
		margin-bottom: 16px
		line-height: 1.4
	margin-left: auto
	margin-right: auto
	border-radius: 6px

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
		h5, small
			color: var(--background)
			font-family: 'Authentic Sans', sans-serif
			padding-bottom: 0
		h5
			font-weight: bold
			font-size: 20px
		small
			text-transform: none
			color: var(--themer)
		p
			font-family: 'Authentic Sans', sans-serif
		form
			input
				font-family: 'Authentic Sans', sans-serif
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

.thisform
	input
		font-family: 'Authentic Sans', sans-serif
		font-size: 12px
		padding: 4px 8px
		outline: none


.tagger
	font-family: 'Authentic Sans', sans-serif
	text-transform: uppercase
	font-size: 12px
	color: white
	width: max-content
	max-width: 100%
	padding: 2px 6px
	margin-bottom: 12px


.mainletter
	min-height: 100vh
	display: flex
	flex-direction: column

.levelzero.mainletter, .levelone.mainletter
	padding-left: 32px
	padding-right: 32px
	.main
		min-height: 100vh
		padding-top: 320px
		padding-bottom: 96px
		.featured
			width: 100%
			.rta-image
				img
					object-fit: cover
					width: 100%
			.feat-head
				border-bottom: 1px solid #e7e7e7
			.feat-tag
				background: #fe4a49
				color: white
				text-transform: uppercase
				font-size: 16px
				padding: 4px 8px
				width: max-content
				max-width: 100%
			h1
				font-family: 'Gandhi', serif
				font-size: 56px


.leveltwo.mainletter
	h1
		font-family: 'Gandhi', serif
		font-size: 40px
	pre
		font-size: 14px
	.mobfeatured
		margin-top: 64px
		border-bottom: 1px solid var(--forline)
		.feat-tag
			background: #fe4a49
			color: white
			text-transform: uppercase
			font-size: 12px
			padding: 4px 8px
			width: max-content
			max-width: 100%
		.feat-head
			border-bottom: none

.levelzero, .levelone
	.subsign
		width: 560px
		h5
			font-weight: bold
			color: var(--opposite)
	.singleitem
		padding: 48px
		border: 1px solid var(--forline)
		border-radius: 6px
		.rta-row
			border-top: 1px solid var(--forline)
		.rta-image
			min-height: 200px
			img
				min-height: 200px
				object-fit: cover

.leveltwo
	.subsign
		margin-top: 160px

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "main"
	.main
		min-height: 100vh
		padding-top: 32px
		padding-left: 0
		padding-right: 0
		h5
			font-size: 27px
			font-weight: bold
			color: var(--opposite)
	
	
.mainletter
	h4
		color: var(--opposite)
		font-weight: bold

.dark
	.singleitem
		background: #171717
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.singleitem
		background: white
	.insubmodal
		input
			border: 1px solid #272727
	
.leveltwo
	.singleitem
		border-bottom: 1px solid var(--forline)
		padding-bottom: 24px
		.rta-row
			padding-top: 16px
			pre
				margin-top: 0
				padding-top: 0
		img
			object-fit: cover
			height: 100%
			height: 160px

.singleitem
	pre
		font-family: 'Authentic Sans', sans-serif
		line-height: 1.4
		font-size: 14px

</style>
