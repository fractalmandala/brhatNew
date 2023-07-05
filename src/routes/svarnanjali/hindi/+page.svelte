<script lang="ts">
	import { onMount } from 'svelte';
	import { langMode, changeLanguage } from '$lib/stores/globalstores';
	import Head from '$lib/components/HeadComponent.svelte';
	import { breakOne, breakZero, breakTwo, themeMode } from '$lib/stores/globalstores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import supabase from '$lib/utils/db';
	import { showChip } from '$lib/stores/globalstores';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import P01 from '$lib/svpanels/hindi/panel01.svelte';
	import P02 from '$lib/svpanels/hindi/panel02.svelte';
	import P03 from '$lib/svpanels/hindi/panel03.svelte';
	import P04 from '$lib/svpanels/hindi/panel04.svelte';
	import P05 from '$lib/svpanels/hindi/panel05.svelte';
	import P06 from '$lib/svpanels/hindi/panel06.svelte';
	import '@splidejs/splide/css/core';
	import SVCar from '$lib/components/SVCar.svelte';

	let fake = false;
	let language = false;
	let y: number;
	let iW: number;
	let idv = 'OeCFCHwSpd0';
	let name: string;
	let submiturl: string;
	let email: string;
	let isValidEmail = false;

	$metaTitle = 'Svarṇāñjali';
	$metaDescription =
		'Svarṇāñjali is a weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.';
	$metaUrl = '/svarnanjali';
	$metaImage = 'https://www.brhat.in/images/keys/ki-sv.png';
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
	<div class="rta-column rowgap300 minH ycenter xcenter">
		<div class="video-container">
			<Youtuber youTubeId={idv} />
		</div>
		<div class="rta-row colgap300 xcenter-d textarea">
			<h5>हिंदी में जारी रखें, या</h5>
			<div class="rta-column ta-c-d">
				<a href="/svarnanjali" class="genbutton-l" on:click={changeLanguage}>
					Explore in English
				</a>
			</div>
		</div>
	</div>
</div>
<div class="rta-column rowgap200 outer-box limit ycenter minH engager">
	<h3 class="p-bot-32 p-top-64 hindiadobe">स्वर्णांजलि में जोड़िए अपने स्वर</h3>
	<h5 class="hindiadobe">
		क्या आप अपनी बोलचाल की भाषा (हिंदी अथवा मातृ भाषा) में विदेशी शब्दों का प्रयोग करते हैं ?
	</h5>
	<h5 class="hindiadobe">
		क्या आपने उनके स्थान पर शुद्ध हिंदी के शब्दों का प्रयोग करके देखा है ? कैसा रहा आपका अनुभव ?
		रोचक या चुनौतीपूर्ण? हम जानने के लिए उत्सुक हैं, हमें बताइए।
	</h5>
	<h5 class="hindiadobe">
		हिंदी साहित्य अथवा अन्य भारतीय प्रांतीय भाषाओँ के साहित्यों में आपकी सर्वाधिक प्रिय पुस्तक कौन
		सी है ?
	</h5>
	<h5 class="hindiadobe">
		हिंदी साहित्य अथवा अन्य भारतीय प्रांतीय भाषाओँ के साहित्यों में आपके सर्वाधिक प्रिय लेखक कौन हैं
		?
	</h5>
	<h4 class="bord-top p-top-32 hindiadobe">
		शुद्ध हिंदी का प्रयोग करते हुए एक मिनट से कम अवधि का वीडियो बनाएँ और हमें अपने वीडियो का लिंक
		भेजें। अनुकूल वीडियो को हम अपनी वेबसाइट और सोशल मीडिया पर साझा करेंगे।
	</h4>
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

.minH
	height: 100vh



</style>
