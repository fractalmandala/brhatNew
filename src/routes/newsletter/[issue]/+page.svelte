<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import Head from '$lib/components/HeadComponent.svelte';
	import Close from '$lib/icons/close.svelte';
	import { newsletterItems, newsletterIssues } from '$lib/utils/supapulls';
	import supabase from '$lib/utils/db';
	export let data;

	let issueselector = data.issueData.issueno;
	let newsitems: any;
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
									<div class="rta-column w64 rowgap200">
										<div class="feat-tag">{item.tag}</div>
										<div class="feat-head p-bot-16"><h1>{item.header}</h1></div>
										<div class="feat-text"><pre>{item.content}</pre></div>
										<a href={item.link} target="_blank" rel="noreferrer"
											><button class="newbutton big">Read Now</button></a
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
														<button class="newbutton big"> Visit </button>
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
											><button class="newbutton big">Read Now</button></a
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
														<button class="newbutton big"> Visit </button>
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
		{/if}
	</div>
</div>

<style lang="sass">

.tagger
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
		padding-top: 280px
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
				font-size: 56px


.leveltwo.mainletter
	h1
		font-size: 40px
	pre
		font-size: 14px
	.mobfeatured
		margin-top: 144px
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

.feat-head
	h1
		font-weight: 600
		font-family: 'Nohemi', sans-serif
		letter-spacing: 0.5px

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "main"
	.main
		min-height: 100vh
		padding-top: 32px
		padding-left: 0
		padding-right: 0
	
	
.mainletter
	h4
		color: var(--opposite)
		font-weight: 600

.dark
	.singleitem
		background: #171717

.light
	.singleitem
		background: white
	
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
		line-height: 1.4
		font-size: 14px

</style>
