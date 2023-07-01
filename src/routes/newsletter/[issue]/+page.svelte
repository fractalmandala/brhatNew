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

<Header />

<div
	class="mainletter"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="side">
		<Social />
		{#if data.user !== 'none'}
			<form class="thisform" method="post" action="?/signout">
				<button class="genbutton"> Log Out </button>
			</form>
			<div class="listofissues p-top-32 bord-top">
				{#if newsissues && newsissues.length > 0}
					<h6>All Issues</h6>
					{#each newsissues as item}
						<p>
							<a href="/newsletter/{item.issueno}">
								Issue No. {item.issueno}
							</a>
						</p>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
	<div class="main">
		<div class="glass-bottom m-bot-32 ta-r stripp">
			<h6 class="thin">
				Issue {data.issueData.issueno} | {data.issueData.datefrom} - {data.issueData.dateto}
			</h6>
		</div>
		{#if data.user !== 'none'}
			<div class="rta-column itemarea">
				{#if newsitems && newsitems.length > 0}
					{#each newsitems as item}
						{#if $breakZero || $breakOne}
							<div class="rta-row between singleitem glass-bottom p-bot-32 m-bot-32">
								<div class="rta-column w64">
									{#if item.tag}
										<div class="tagger" style="background: {item.color}">{item.tag}</div>
									{/if}
									<h4 class="bord-bot p-bot-8">{item.header}</h4>
									<pre>
								{item.content}
							</pre>
									{#if item.link}
										<a href={item.link} target="_blank" rel="noreferrer">
											<button class="newbutton"> Visit </button>
										</a>
									{/if}
								</div>
								<div class="rta-image w32 height-40">
									<img src={item.image} alt="heroimage" />
								</div>
							</div>
						{:else}
							<div class="rta-column singleitem glass-bottom p-bot-32 m-bot-32">
								<div class="rta-column">
									{#if item.tag}
										<div class="tagger" style="background: {item.color}">{item.tag}</div>
									{/if}
									<h5 class="bord-bot p-bot-8">{item.header}</h5>
								</div>
								<div class="rta-row stay colgap300 p-top-16">
									<div class="rta-column rowgap200 w50">
										<pre>
								{item.content}
							</pre>
										{#if item.link}
											<a href={item.link} target="_blank" rel="noreferrer">
												<button class="newbutton"> Visit </button>
											</a>
										{/if}
									</div>
									<div class="rta-image w50 height-40-30">
										<img src={item.image} alt="heroimage" />
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</div>
		{:else}
			<div class="rta-column rowgap200 subsign">
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

.thisform
	input
		font-family: 'Authentic Sans', sans-serif
		font-size: 12px
		padding: 4px 8px
		outline: none

.listofissues
	p
		font-size: 14px
		&:hover
			a
				color: #fe4a49

.tagger
	font-family: 'Authentic Sans', sans-serif
	text-transform: uppercase
	font-size: 12px
	color: white
	width: max-content
	max-width: 100%
	padding: 2px 6px
	margin-bottom: 12px

h6
	color: var(--themer)
	font-size: 16px
	padding-bottom: 8px

.mainletter
	min-height: 100vh
	display: grid
	grid-auto-flow: row
	.side
		grid-area: side
	.main
		grid-area: main

.levelzero.mainletter, .levelone.mainletter
	grid-template-columns: 200px 1fr
	grid-template-areas: "side main"
	padding-left: 32px
	padding-right: 32px
	align-items: stretch
	.side
		display: flex
		flex-direction: column
		row-gap: 8px
		height: 100vh
		border-right: 1px solid var(--forline)
		padding-top: 96px
		padding-right: 32px
		position: sticky
		top: 0
	.main
		min-height: 100vh
		padding-top: 96px
		padding-left: 64px
		padding-bottom: 96px

.levelzero
	.subsign
		width: 560px
	.thisform
		width: 240px

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "side" "main"
	padding-left: 16px
	padding-right: 16px
	.side
		min-height: 32px
		border-bottom: 1px solid var(--forline)
		padding-top: 72px
		margin-bottom: 16px
		padding-bottom: 8px
	.main
		min-height: 100vh
		padding-top: 32px
		h5
			font-size: 27px
			font-weight: bold
			color: var(--opposite)
		.stripp
			display: none
	
	
.mainletter
	h4
		color: var(--opposite)
		font-weight: bold

.dark
	.singleitem
		background-color: hsla(0,0%,9%,1)
		background-image: radial-gradient(at 1% 0%, hsla(0,0%,9%,1) 0px, transparent 50%), radial-gradient(at 99% 97%, hsla(0,81%,14%,1) 0px, transparent 50%)
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.singleitem
		background-color: hsla(0,0%,100%,1)
		background-image: radial-gradient(at 1% 0%, hsla(0,0%,100%,1) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(0,100%,54%,1) 0px, transparent 50%)
	.insubmodal
		input
			border: 1px solid #272727
	
.leveltwo
	.singleitem
		img
			object-fit: cover
			height: 100%

</style>
