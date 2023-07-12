<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import {
		themeMode,
		breakZero,
		breakOne,
		breakTwo,
		authState,
		showAuth
	} from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Head from '$lib/components/HeadComponent.svelte';
	import Close from '$lib/icons/close.svelte';
	import { newsletterIssues } from '$lib/utils/supapulls';
	import supabase from '$lib/utils/db';
	export let form: ActionData;
	let loading = false;

	let newsissues: any;
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

	$metaTitle = 'Bṛhatadya';
	$metaDescription =
		'A fortnightly dispatch updating you on latest actions, events, launches and more at the Culture Engine.';
	$metaUrl = 'https://www.brhat.in/newsletter';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';

	function toggleSubscribe() {
		submodal = !submodal;
	}

	function toggleLogout() {
		showAuth(true);
	}

	function focusName() {
		signupName = '';
	}

	function focusEmail() {
		signupEmail = '';
	}

	function focusPass1() {
		password = '';
	}

	function focusPass2() {
		repeatPass = '';
	}

	function handleOverlayClick(e: any) {
		if (e.target === e.currentTarget) {
			submodal = false;
			signupName = 'Full Name';
			signupEmail = 'Email ID';
			password = 'Password';
			repeatPass = 'Confirm Password';
		}
	}

	async function letSignup() {
		const { error } = await supabase.auth.signUp({
			email: signupEmail,
			password: password,
			options: { emailRedirectTo: 'https://www.brhat.in/newsletter' }
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
		newsissues = await newsletterIssues();
	});
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class="rta-column rowgap300"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<h3 class="h3-big bord-bot p-bot-16">Bṛhatadya</h3>
	<div class="rta-column rowgap200">
		<p>
			Bṛhatadya is your fortnightly update on the latest actions, events, launches, program
			registrations, essays at Bṛhat. Use this as your reference point for course registrations,
			calendar of upcoming tours, the latest content at Svarñānjali and more. To access it, or to
			receive it fortnightly in your inbox, please sign up or sign in.
		</p>
		{#if !$authState}
			<button class="newbutton red" on:click={toggleSubscribe}>Sign Up</button>
		{/if}
		{#if $authState}
			<h6 class="bord-top p-top-16 bord-bot p-bot-16">
				<a href="/newsletter/1">Read the </a>Current Issue: Issue 1.1 - July
			</h6>
		{:else}
			<h6 class="bord-top p-top-16 bord-bot p-bot-16">Current Issue: Issue 1.1 - July</h6>
		{/if}
	</div>
	<div class="rta-grid grid2 left rowgap300 colgap400" class:flatt={$authState}>
		{#if !$authState}
			<div class="rta-column rowgap200 first">
				<small class="oppositer tt-c">Already signed up? Sign in below:</small>
				<form class="thisforms" method="post" action="?/login">
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

						<button disabled={loading} class="newbutton red">Sign in</button>
					</div>
				</form>
				<!--
		<div class="rta-row ycenter colgap100">
			<p>Or,</p>
			<button
				class="blank-button rta-row ycenter colgap100"
				on:click={() => {
					supabase.auth.signInWithOAuth({
						provider: 'google',
						options: {
							scopes: 'https://www.googleapis.com/auth/userinfo.email',
							redirectTo: window.location.href
						}
					});
				}}
			>
				<p>Sign In with Google</p>
				<img class="iconimage" src="/images/icongoogle.png" alt="google" />
			</button>
		</div>
		-->
			</div>
		{/if}
		<div class="rta-column rowgap200 second">
			<p>
				"Adya," meaning 'today, this day, now, at present', combines with Bṛhat to denote 'Bṛhat
				Today,' or 'Bṛhat Now'- a fair name for a periodic newsletter that updates recent events and
				activities at Bṛhat.
			</p>
			<p>
				A second meaning lends deeper significance. With 'bṛhat' meaning 'great, formidable, large,
				growing,' 'Bṛhat-Adya' means the "Great Now," or the "Great Moment," ie- the civilizational
				moment we are currently in. Read more about this moment, and what it means for all of us,
				<a
					style="color: #fe4a49"
					href="https://www.brhat.in/about/anatomy"
					target="_blank"
					rel="noreferrer">here.</a
				>
			</p>
		</div>
		{#if $authState}
			<button class="newbutton red" on:click={toggleLogout}>Log Out</button>
		{/if}
	</div>
</div>
{#if submodal}
	<div
		class="subscribemodal"
		on:click={handleOverlayClick}
		on:keydown={handleOverlayClick}
		transition:slide
	>
		<div class="insubmodal">
			<div class="rta-row">
				<button class="blank-button" on:click={toggleSubscribe}>
					<Close />
				</button>
			</div>
			<div class="rta-column null p-bot-16">
				<h5>Subscribe to Bṛhat</h5>
				<small>Subscribe button will appear if all fields are filled correct. </small>
			</div>
			<form class="rta-column rowgap100">
				<input type="text" placeholder={signupName} bind:value={signupName} on:focus={focusName} />
				<input
					type="text"
					placeholder={signupEmail}
					bind:value={signupEmail}
					on:focus={focusEmail}
				/>
				<input type="text" placeholder={password} bind:value={password} on:focus={focusPass1} />
				<input type="text" placeholder={repeatPass} bind:value={repeatPass} on:focus={focusPass2} />
				{#if passCheck}
					<button class="newbutton red" on:click={letSignup}>Sign Up</button>
				{/if}
				<p>
					{themessage}
				</p>
			</form>
		</div>
	</div>
{/if}

<style lang="sass">

.rta-grid.grid2.left.flatt
	display: flex
	flex-direction: column
	.second
		width: 100%
	.first
		display: none

// .iconimage
//	object-fit: contain
//	width: 24px
//	height: 24px

h3
	color: var(--opposite)
	letter-spacing: 0

h6
	a
		color: #fe4a49

p
	line-height: 1.8

.second
	p
		font-size: 14px

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
			padding-bottom: 0
		h5
			font-weight: bold
			font-size: 20px
		small
			text-transform: none
			color: var(--themer)
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

form.thisforms
	input
		font-size: 12px
		padding: 4px 8px
		border-radius: 4px
		background: none
		outline: none
		border: none
		@media screen and (min-width: 1024px)
			width: 80%

.levelzero, .levelone
	padding-bottom: 96px
	align-items: stretch

.levelzero
	min-height: calc(100vh - 320px)
	padding-top: 112px
	padding-left: 360px
	padding-right: 360px
	padding-bottom: 64px

.levelone
	padding-top: 240px
	padding-left: 32px
	padding-right: 32px
	padding-bottom: 64px

.leveltwo
	margin-top: 160px
	padding-left: 32px
	padding-right: 32px
	padding-bottom: 64px
	
.dark
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.insubmodal
		input
			border: 1px solid #272727


</style>
