<script lang="ts">
	import { clickOutsideAction } from '$lib/utils/clickoutside';
	import { browser } from '$app/environment';
	import { userLang, fontSize } from '$lib/stores/metastores';
	import { themeMode, authStore, authState, configMode } from '$lib/stores/globalstores';
	import CloseIcon from '$lib/icons/close.svelte';
	import IconSun from '$lib/icons/sun.svelte';
	import IconMoon from '$lib/icons/moon.svelte';
	import IconEng from '$lib/icons/english.svelte';
	import IconHin from '$lib/icons/hindi.svelte';
	import IconUp from '$lib/icons/arrowup.svelte';
	import IconDown from '$lib/icons/arrowdown.svelte';
	let loading = false;
	let signUpIs = false;
	let fsize = Array(3).fill(false);
	fsize[1] = true;
	export let form: any;

	function toggleConfig() {
		if (browser) {
			configMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('configMode', JSON.stringify(newMode));
				return newMode;
			});
		}
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

	function toggleSignupIs() {
		signUpIs = !signUpIs;
	}

	$: if (fsize[2] === true) {
		$fontSize = 'big';
	} else {
		if (fsize[3] === true) {
			$fontSize = 'small';
		} else $fontSize = 'std';
	}
</script>

{#if $configMode}
	<div class="userconfigoverlay" class:light={$themeMode} class:dark={!$themeMode}>
		<div class="userconfigmodal">
			<div class="rta-row between ycenter null p-bot-8">
				<h6><strong>User Site Settings</strong></h6>
				<button class="blank-button" on:click={toggleConfig}>
					<CloseIcon dimension={26} />
				</button>
			</div>
			<p class="small thinwide">
				Use This section to configure global site settings for theme, font size, language etc.
			</p>
			<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
				{#if $authState}
					<form class="thisform" method="post" action="?/signout">
						<button class="newbutton red">Sign Out</button>
					</form>
				{:else if signUpIs}
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
						<p class="small thinwide">Not subscribed? Sign up now.</p>
					</button>
				{/if}
			</div>
			<div class="rta-grid grid2 colgap300">
				<div class="rta-column rowgap100 firstrow p-top-32 p-bot-16">
					<p class="small">Toggle Between Light and Dark Modes:</p>
					<small class="tt-l"
						>Current Mode is <span style="color: var(--background)"
							><strong
								>{#if $themeMode} Light {:else if !$themeMode} Dark {/if}</strong
							></span
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
						Current Language is <span style="color: var(--background)"
							><strong>
								{#if $userLang === 'English'} English {:else if $userLang === 'Hindi'} Hindi {/if}
							</strong></span
						>
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
					<small class="tt-l"
						>Current Font Size is <span style="color: var(--background)"
							><strong>{$fontSize}</strong></span
						></small
					>
					<button
						class="blank-button ta-l m-top-16 {$fontSize}"
						style="font-family: 'Adobe Devanagari'"
					>
						<p>This is the current text size.</p>
					</button>
					<div class="rta-row ycenter xleft colgap200">
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

<style lang="sass">

#texttored
	&:hover
		p
			color: #fe4a49

form
	@media screen and (min-width: 1024px)
		input
			padding: 0px 8px
			border-radius: 4px
			border: 1px solid var(--background)

.userconfigoverlay
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	position: fixed
	top: 0
	left: 0
	width: 100vw
	height: 100vh
	overflow: hidden
	backdrop-filter: blur(4px)
	z-index: 3000
	.userconfigmodal
		display: flex
		flex-direction: column
		background: var(--opposite)
		h6
			margin: 0
			color: var(--background)
		p.thinwide
			color: var(--themer)
		.blank-button
			display: flex
			align-items: center

@media screen and (min-width: 1024px)
	.userconfigmodal
		padding: 32px
		border-radius: 5px
		>.rta-row
			column-gap: 32px
		.thinwide
			width: 72%
			color: var(--textone)

@media screen and (max-width: 1023px) and (min-width: 769px)
	.userconfigmodal
		padding: 24px
		border-radius: 5px
		>.rta-row
			column-gap: 24px
		.thinwide
			width: 88%
			color: var(--textone)

@media screen and (max-width: 768px)
	.userconfigmodal
		padding: 16px
		border-radius: 4px
		width: calc(100vw - 32px)
		height: calc(100vh - 32px)
		>.rta-row
			column-gap: 24px
		.thinwide
			width: 100%
			color: var(--textone)

.firstrow
	border-bottom: 1px solid var(--texttwo)


</style>
