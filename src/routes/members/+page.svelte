<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Header from '$lib/components/SubHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { userLang, fontSize } from '$lib/stores/metastores';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { themeMode, authStore, authState, configMode } from '$lib/stores/globalstores';
	import IconSun from '$lib/icons/sun.svelte';
	import IconMoon from '$lib/icons/moon.svelte';
	import IconEng from '$lib/icons/english.svelte';
	import IconHin from '$lib/icons/hindi.svelte';
	import IconUp from '$lib/icons/arrowup.svelte';
	import IconDown from '$lib/icons/arrowdown.svelte';

	export let data;
	export let form: any;
	let fsize = Array(3).fill(false);
	fsize[1] = true;
	let signUpIs = false;

	let { session, supabase, profile, inner } = data;
	$: ({ session, supabase, profile, inner } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';
	let website: string = profile?.website ?? '';
	let avatarUrl: string = profile?.avatar_url ?? '';

	$metaTitle = 'Member Page at Bṛhat';
	$metaDescription = 'Member pages for their own settings and global site config';
	$metaUrl = 'https://www.brhat.in/members';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/04corpimages/brhatheadcard.webp';
	$metaType = 'webpage';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
	function toggleConfig() {
		if (browser) {
			configMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('configMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

	function toggleSignupIs() {
		signUpIs = !signUpIs;
	}

	function toggleFont(index: number) {
		fsize[index] = !fsize[index];
		for (let i = 0; i < fsize.length; i++) {
			if (i !== index && fsize[i] === true) {
				fsize[i] = false;
			}
		}
	}

	function toggleThemeMode() {
		$themeMode = !$themeMode;
	}

	function toggleLanguage() {
		if ($userLang === 'English') {
			$userLang = 'Hindi';
		} else {
			if ($userLang === 'Hindi') {
				$userLang = 'English';
			}
		}
	}

	$: if (fsize[2] === true) {
		$fontSize = 'big';
	} else {
		if (fsize[3] === true) {
			$fontSize = 'small';
		} else $fontSize = 'std';
	}
</script>

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<Header />

<div class="rta-column stout p-top-128">
	{#if inner}
		<div class="rta-column instout rowgap400 pagila">
			<div class="rta-column rowgap100">
				<h4>Members Area for:</h4>
				<p class="small">email: {session.user.email}</p>
				<form method="post" action="?/signout" use:enhance={handleSignOut}>
					<div>
						<button class="newbutton" disabled={loading}>Sign Out</button>
					</div>
				</form>
			</div>
			<div class="form-widget rta-column rowgap200">
				<form
					class="form-widget rta-column rowgap200 xleft"
					method="post"
					action="?/update"
					use:enhance={handleSubmit}
					bind:this={profileForm}
				>
					<div class="rta-grid grid2" style="gap: 16px">
						<div class="rta-column rowgap50">
							<label for="email">Email</label>
							<input id="email" type="text" value={session.user.email} disabled />
						</div>

						<div class="rta-column rowgap50">
							<label for="fullName">Full Name</label>
							<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
						</div>

						<div class="rta-column rowgap50">
							<label for="username">Username</label>
							<input id="username" name="username" type="text" value={form?.username ?? username} />
						</div>

						<div class="rta-column rowgap50">
							<label for="website">Website</label>
							<input id="website" name="website" type="url" value={form?.website ?? website} />
						</div>
					</div>

					<button type="submit" class="newbutton" disabled={loading}>
						{#if loading}
							Loading
						{:else}
							Update
						{/if}
					</button>
				</form>
			</div>
			<div class="rta-column rowgap100 p-top-32 bord-top">
				<h6>
					Use This section to configure global site settings for theme, font size, language etc.
				</h6>
				<div class="rta-column xcenter ta-c rowgap100">
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Toggle Between Light and Dark Modes:</p>
						<small class="tt-l"
							>Current Mode is <strong
								>{#if $themeMode} Light {:else if !$themeMode} Dark {/if}</strong
							></small
						>
						<button class="blank-button m-top-8" on:click={toggleThemeMode}>
							{#if $themeMode}
								<IconMoon color={'var(--darkseven'} />
							{:else if !$themeMode}
								<IconSun color={'var(--darkseven'} />
							{/if}
						</button>
					</div>
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Toggle Between English and Hindi: only for Svarṇāñjali pages.</p>
						<small class="tt-l">
							Current Language is <strong>
								{#if $userLang === 'English'} English {:else if $userLang === 'Hindi'} Hindi {/if}
							</strong>
						</small>
						<button class="blank-button m-top-8" on:click={toggleLanguage}>
							{#if $userLang === 'English'}
								<IconHin color={'var(--darkseven'} />
							{:else if $userLang === 'Hindi'}
								<IconEng color={'var(--darkseven'} />
							{/if}
						</button>
					</div>
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Select Font Size: only for Dhīti Blog Posts.</p>
						<small class="tt-l">Current Font Size is <strong>{$fontSize}</strong></small>
						<button
							class="blank-button m-top-16 {$fontSize}"
							style="font-family: 'Adobe Devanagari'"
						>
							<p>This is the current text size.</p>
						</button>
						<div class="rta-row ycenter xcenter-d xcenter-m colgap200">
							{#if fsize[1]}
								<button class="blank-button" on:click={() => toggleFont(3)}><IconDown /></button>
								<button class="blank-button" on:click={() => toggleFont(2)}><IconUp /></button>
							{:else if fsize[2]}
								<button class="blank-button" on:click={() => toggleFont(1)}><IconDown /></button>
							{:else if fsize[3]}
								<button class="blank-button" on:click={() => toggleFont(1)}><IconUp /></button>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="rta-column instout rowgap400 pagila">
			<div class="rta-column rowgap100">
				{#if signUpIs}
					<p class="small"><strong>Sign Up at Bṛhat:</strong></p>
					<form method="post" action="?signup">
						<div class="rta-column xleft rowgap100 null">
							<div class="rta-row ycenter colgap100">
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
							</div>
							<button disabled={loading} class="newbutton">Sign Up</button>
						</div>
					</form>

					<button class="blank-button ta-l" id="texttored" on:click={toggleSignupIs}>
						<p class="small thinwide">Already subscribed? Sign in here.</p>
					</button>
				{:else}
					<p class="small"><strong>Sign into Bṛhat:</strong></p>
					<form method="post" action="?/login">
						<div class="rta-column xleft rowgap100 null">
							<div class="rta-row ycenter colgap100">
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
							</div>
							<button disabled={loading} class="newbutton">Sign in</button>
						</div>
					</form>
					<button class="blank-button ta-l" id="texttored" on:click={toggleSignupIs}>
						<p class="small thinwide">Not subscribed? Sign up here.</p>
					</button>
				{/if}
			</div>
			<div class="rta-column rowgap100 p-top-32 bord-top">
				<h6 class="ta-c">
					Use This section to configure global site settings for theme, font size, language etc.
				</h6>
				<div class="rta-column xcenter ta-c rowgap100">
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Toggle Between Light and Dark Modes:</p>
						<small class="tt-l"
							>Current Mode is <strong
								>{#if $themeMode} Light {:else if !$themeMode} Dark {/if}</strong
							></small
						>
						<button class="blank-button m-top-8" on:click={toggleThemeMode}>
							{#if $themeMode}
								<IconMoon color={'var(--darkseven'} />
							{:else if !$themeMode}
								<IconSun color={'var(--darkseven'} />
							{/if}
						</button>
					</div>
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Toggle Between English and Hindi: only for Svarṇāñjali pages.</p>
						<small class="tt-l">
							Current Language is <strong>
								{#if $userLang === 'English'} English {:else if $userLang === 'Hindi'} Hindi {/if}
							</strong>
						</small>
						<button class="blank-button m-top-8" on:click={toggleLanguage}>
							{#if $userLang === 'English'}
								<IconHin color={'var(--darkseven'} />
							{:else if $userLang === 'Hindi'}
								<IconEng color={'var(--darkseven'} />
							{/if}
						</button>
					</div>
					<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
						<p class="small">Select Font Size: only for Dhīti Blog Posts.</p>
						<small class="tt-l">Current Font Size is <strong>{$fontSize}</strong></small>
						<button
							class="blank-button m-top-16 {$fontSize}"
							style="font-family: 'Adobe Devanagari'"
						>
							<p>This is the current text size.</p>
						</button>
						<div class="rta-row ycenter xcenter-d xcenter-m colgap200">
							{#if fsize[1]}
								<button class="blank-button" on:click={() => toggleFont(3)}><IconDown /></button>
								<button class="blank-button" on:click={() => toggleFont(2)}><IconUp /></button>
							{:else if fsize[2]}
								<button class="blank-button" on:click={() => toggleFont(1)}><IconDown /></button>
							{:else if fsize[3]}
								<button class="blank-button" on:click={() => toggleFont(1)}><IconUp /></button>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="sass">

form
	@media screen and (min-width: 1024px)
		input
			border-radius: 5px
			border: 1px solid var(--contraster2)
			font-size: 12px
			padding: 4px 8px

.firstrow
	border-bottom: 1px solid var(--contraster2)

.form-widget
	label
		font-size: 12px
		color: var(--onlyblack)
	input
		border-radius: 5px
		border: 1px solid var(--contraster2)
		font-size: 12px
		padding: 4px 8px

</style>
