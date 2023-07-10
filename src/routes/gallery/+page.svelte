<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Header from '$lib/components/SubHeader.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Close from '$lib/icons/close.svelte';
	import { imageGallery } from '$lib/utils/supapulls';
	import supabase from '$lib/utils/db';
	export let form: ActionData;
	export let data;
	let loading = false;

	let newsissues: any;
	let submodal = false;
	let passCheck = true;
	let limit = 23;

	let signupName: string = 'Full Name';
	let signupEmail: string = 'Email ID';
	let password: string = 'Password';
	let repeatPass: string = 'Confirm Password';
	let themessage = '';
	let imageModal = Array(700).fill(false);
	let hover = Array(700).fill(false);

	function toggleHover(index: number) {
		hover[index] = !hover[index];
		for (let i = 0; i < hover.length; i++) {
			if (i !== index && hover[i] === true) {
				hover[i] = false;
			}
		}
	}

	function toggleModal(index: number) {
		imageModal[index] = !imageModal[index];
		for (let i = 0; i < imageModal.length; i++) {
			if (i !== index && imageModal[i] === true) {
				imageModal[i] = false;
			}
		}
	}

	function moreImage() {
		limit += 24;
		(async () => {
			newsissues = await imageGallery(limit);
		})();
	}

	function lessImage() {
		if (limit >= 23) {
			limit -= 24;
			(async () => {
				newsissues = await imageGallery(limit);
			})();
		}
	}

	$: if (password === repeatPass) {
		passCheck = true;
	} else passCheck = false;

	$metaTitle = 'Bṛhat';
	$metaDescription = 'the Culture Engine';
	$metaUrl = 'https://www.brhat.in';
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
		newsissues = await imageGallery(limit);
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
	class="rta-column rowgap300 outer-box limit"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	{#if data.in}
		<div class="rta-grid grid4 stay2 colgap300 rowgap300">
			{#if newsissues && newsissues.length > 0}
				{#each newsissues as item, i}
					<div
						class="rta-image"
						on:click={() => toggleModal(i)}
						on:keydown={() => toggleModal(i)}
						on:mouseenter={() => toggleHover(i)}
						on:mouseleave={() => toggleHover(i)}
					>
						<img src={item.link} alt={item.name} />
						{#if hover[i]}
							<p class="imagecenter">{item.id}</p>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
		<div class="rta-row ycenter xcenter-d xcenter-m colgap100">
			{#if limit > 23}
				<button class="newbutton" on:click={lessImage}>Load Less</button>
			{/if}
			<button class="newbutton" on:click={moreImage}>Load More</button>
		</div>
	{:else}
		<div class="rta-grid grid2 left rowgap300 colgap400">
			<div class="rta-column rowgap200">
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
			</div>
		</div>
	{/if}
</div>
{#if newsissues && newsissues.length > 0}
	{#each newsissues as item, i}
		{#if imageModal[i]}
			<div
				class="subscribemodal"
				on:click={() => toggleModal(i)}
				on:keydown={() => toggleModal(i)}
				transition:slide
			>
				<div class="insubmodal">
					<img src={item.link} alt={item.name} />
				</div>
			</div>
		{/if}
	{/each}
{/if}

<style lang="sass">

.rta-image
	position: relative
	.imagecenter
		position: absolute
		top: 50%
		left: 50%
		z-index: 200
		background: #171717
		color: white
		padding: 4px 8px

// .iconimage
//	object-fit: contain
//	width: 24px
//	height: 24px

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
		@media screen and (min-width: 1024px)
			width: calc(100vw - 64px)
			height: calc(100vh - 128px)
		@media screen and (max-width: 1023px)
			width: calc(100vw - 32px)
			min-height: 200px
			padding: 16px

.thisforms
	input
		font-family: 'Hubot-Sans', sans-serif
		font-size: 12px
		padding: 4px 8px
		outline: none
		border: 1px solid var(--forline)
		@media screen and (min-width: 1024px)
			width: 56%

.levelzero, .levelone
	padding-bottom: 96px
	align-items: stretch
	.rta-image
		height: 36vh
		img
			object-fit: cover
			height: 100%
			width: 100%

.levelzero
	min-height: calc(100vh - 320px)
	padding-top: 128px

.levelone
	padding-top: 240px

.leveltwo
	margin-top: 160px
	.rta-image
		height: 24vh
		img
			object-fit: cover
			height: 100%
			width: 100%
	
.dark
	.insubmodal
		input
			border: 1px solid #e7e7e7

.light
	.insubmodal
		input
			border: 1px solid #272727


</style>
