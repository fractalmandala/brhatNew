<script lang="ts">
	import { onMount } from 'svelte';
	import { langMode, changeLanguage } from '$lib/stores/globalstores';
	import supabase from '$lib/utils/db';
	import { showChip } from '$lib/stores/globalstores';
	import '@splidejs/splide/css/core';
	import { breakOne, breakZero, breakTwo, themeMode } from '$lib/stores/globalstores';
	import { getSvarnanjali } from '$lib/utils/supapulls';
	import SVCar from '$lib/components/SVCar.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import Youtuber2 from '$lib/components/Youtuber.svelte';
	import P01 from '$lib/svpanels/english/panel01.svelte';
	import P02 from '$lib/svpanels/english/panel02.svelte';
	import P03 from '$lib/svpanels/english/panel03.svelte';
	import P04 from '$lib/svpanels/english/panel04.svelte';
	import P05 from '$lib/svpanels/english/panel05.svelte';
	import P06 from '$lib/svpanels/english/panel06.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';

	let fake = false;
	let language = false;
	let y: number;
	let iW: number;
	let idv = 'OeCFCHwSpd0';
	let vids: any;
	let name: string;
	let submiturl: string;
	let email: string;
	let isValidEmail = false;

	$metaTitle = 'Svarṇāñjali';
	$metaDescription =
		'Svarṇāñjali is a weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.';
	$metaUrl = '/svarnanjali';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/keys/ki-sv.png';
	$metaType = 'webpage';

	$: isValidEmail = Boolean(email && email.includes('@'));

	async function handleSubmit() {
		const { error } = await supabase
			.from('forms-svarn')
			.insert({ name: name, email: email, url: submiturl });
		if (error) {
			showChip('Error. Please check if you have filled all fields.', '#fe4a49');
		} else showChip('Form Submitted! Dhanyavāda.', '#10D56C');
	}

	function toggleLanguage() {
		language = !language;
	}

	function fauxfake() {
		fake = !fake;
	}

	onMount(async () => {
		vids = await getSvarnanjali();
	});
</script>

<svelte:window bind:innerWidth={iW} bind:scrollY={y} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class="back p-top-64 minH firstone"
	style="background-image: url('https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/batch1/522.webp')"
>
	<div class="rta-column rowgap300 p-top-64 p-bot-64 ycenter xcenter">
		<div class="video-container">
			<Youtuber youTubeId={idv} />
		</div>
		<div class="rta-row colgap300 xcenter-d ycenter textarea">
			<h5>Continue in English, or</h5>
			<div class="rta-column ta-c-d">
				<a href="/svarnanjali/hindi" class="genbutton-l" on:click={changeLanguage}>
					हिन्दी में पढ़े
				</a>
			</div>
		</div>
	</div>
</div>
<div class="rta-column rowgap200 outer-box limit ycenter minH engager">
	<h3 class="p-bot-32 p-top-64">Add Your Voice to Svarṇāñjali</h3>
	<h5>
		Have you observed your use of foreign words in your conversations in Hindi (and/or your regional
		language)?
	</h5>
	<h5>
		Have you tried replacing them? How was that experience? Fun, Daunting? We'd love to hear, share
		it with us.
	</h5>
	<h5>What is your favorite book in Hindi and/or Regional Literature?</h5>
	<h5>Who is your favorite Author in Hindi and/or Regional Literature?</h5>
	<h5 class="bord-top p-top-32">
		<span style="color: #fe4a49">Here is a fun challenge:</span><br /> Speak anything in Hindi for
		atleast 30 seconds (max 1 minute) without using a single word of FATE (Farsi, Arabic, Turkish,
		English) languages.<br />
		Share the link of your video with us, we will put the most interesting ones on our Youtube channel
		:)
	</h5>
	<form class="rta-column submitform rowgap100" on:submit|preventDefault>
		<input type="text" placeholder="Full Name" bind:value={name} />
		<input type="email" placeholder="Email ID" bind:value={email} />
		<input type="URL" placeholder="Link to Video" bind:value={submiturl} />
		{#if isValidEmail}
			<button type="submit" class="genbutton" on:click={handleSubmit}>Send</button>
		{/if}
	</form>
</div>

<SVCar />
<div class="rta-grid grid3 p-top-64 rowgap300 colgap300 outer-box ycenter">
	{#if vids && vids.length > 0}
		{#each vids as item}
			<Youtuber2 youTubeId={item.videoid} />
		{/each}
	{/if}
</div>

<div class="rta-column holdsbutton">
	<a class="genbutton" href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer">
		View on YouTube
	</a>
</div>
<div
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
	class:lightmode={$themeMode}
	class:darkmode={!$themeMode}
>
	<P01 />
	<P02 />
	<P03 />
	<P04 />
	<P05 />
</div>

<style lang="sass">

.firstone
	height: 100vh
	@media screen and (max-width: 1023px)
		display: flex
		flex-direction: column
		justify-content: center

.submitform
	@media screen and (min-width: 1024px)
		width: 240px
		input
			font-size: 12px
			padding: 4px 8px

.engager
	h3, h5
		color: var(--opposite)

.holdsbutton
	align-items: center

.textarea
	background: rgba(0,0,0,0.8)
	padding: 16px
	h5
		color: white
	

.genbutton-l
	font-size: 24px
	width: max-content
	
.levelzero
	.video-container
		width: 100%
		max-width: 720px
		height: 400px
		border-radius: 24px
	.rta-row.xcenter-d
		width: 720px
		column-gap: 128px
		text-align: center

.leveltwo
	.video-container
		width: 88%

@keyframes fading2
	0%
		opacity: 1
	100%
		opacity: 0

@keyframes fading
	0%
		background: rgba(255, 255, 255, 1)
	100%
		background: rgba(255, 255, 255, 0)


.rta-column
	overflow: hidden


</style>
