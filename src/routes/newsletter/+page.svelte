<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
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

	async function navigateToLink() {
		await goto('/');
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
	class="rta-grid grid2 colgap400 rowgap300 outer-box limit"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-column rowgap200">
		<p>
			Bṛhatadya is a newsletter featuring the latest actions, events, launches, program
			registrations, essays and more at Bṛhat. To access it, or to receive it fortnightly in your
			inbox, please sign up.
		</p>
		<button class="newbutton red" on:click={toggleSubscribe}>Sign Up</button>
		<p class="bord-top p-top-16">Already signed up? Sign in below:</p>
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

	<div
		class="rta-column aboutstrip back"
		style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/17newsletter/brhatadya.webp')"
	>
		<div class="stripscreen">
			<h4 class="hindiadobe">बृहतद्यः</h4>
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

// .iconimage
//	object-fit: contain
//	width: 24px
//	height: 24px

.aboutstrip
	.stripscreen
		background: rgba(0,0,0,0.57)
		height: 100%
		h4
			font-weight: bold
			color: #FFFFFF
			margin-bottom: 16px
		p
			margin-bottom: 16px
			line-height: 1.4
			color: #FFFFFF

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

.thisforms
	input
		font-family: 'Authentic Sans', sans-serif
		font-size: 12px
		padding: 4px 8px
		outline: none
		border: 1px solid var(--forline)
	@media screen and (min-width: 1024px)
		width: 32%

.levelzero.rta-grid.grid2, .levelone.rta-grid.grid2
	padding-bottom: 96px
	align-items: stretch
	.aboutstrip
		.stripscreen
			padding: 24px

.levelzero
	height: calc(100vh - 320px)
	padding-top: 320px

.levelone
	padding-top: 240px

.leveltwo.rta-grid.grid2
	margin-top: 200px
	.aboutstrip
		.stripscreen
			padding: 32px
	
.dark
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.insubmodal
		input
			border: 1px solid #272727


</style>
