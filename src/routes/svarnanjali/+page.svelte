<script lang="ts">
	import { onMount } from 'svelte';
	import { langMode, changeLanguage } from '$lib/stores/globalstores';
	import supabase from '$lib/utils/db';
	import { showChip } from '$lib/stores/globalstores';
	import '@splidejs/splide/css/core';
	import { breakOne, breakZero, breakTwo, themeMode } from '$lib/stores/globalstores';
	import { getSvarnanjali } from '$lib/utils/supapulls';
	import SVCar from '$lib/components/SVCar.svelte';
	import SVLogo from '$lib/logos/Svarnanjali2.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { testimonialsSvarn } from '$lib/utils/supapulls';
	import '@splidejs/splide/css/core';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import SVTemple from '$lib/anims/SVTemple.svelte';
	import Head from '$lib/components/HeadComponent.svelte';
	import Youtuber2 from '$lib/components/Youtuber.svelte';
	import Prev1 from '$lib/icons/IconPrev.svelte';
	import Prev2 from '$lib/icons/IconPrev.svelte';
	import Next1 from '$lib/icons/IconNext.svelte';
	import Next2 from '$lib/icons/IconNext.svelte';
	import P01 from '$lib/svpanels/english/panel01.svelte';
	import P02 from '$lib/svpanels/english/panel02.svelte';
	import P03 from '$lib/svpanels/english/panel03.svelte';
	import P04 from '$lib/svpanels/english/panel04.svelte';
	import P05 from '$lib/svpanels/english/panel05.svelte';
	import P06 from '$lib/svpanels/english/panel06.svelte';
	import {
		metaTitle,
		metaDescription,
		metaUrl,
		metaImage,
		metaType,
		userLang
	} from '$lib/stores/metastores';

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
	let goF = false;
	let tests: any;

	function toggleGo() {
		goF = !goF;
	}

	function setHindi() {
		$userLang = 'Hindi';
	}

	function setEnglish() {
		$userLang = 'English';
	}

	$metaTitle = 'Svarṇāñjali';
	$metaDescription =
		'Svarṇāñjali is a weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.';
	$metaUrl = 'https://www.brhat.in/svarnanjali';
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

	onMount(async () => {
		vids = await getSvarnanjali();
		tests = await testimonialsSvarn();
	});
</script>

<svelte:window bind:innerWidth={iW} bind:scrollY={y} />

<Head
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<div class="rta-column p-top-128 stout">
	<div class="rta-column rowgap400 instout pagila">
		<div class="rta-column rowgap400 p-bot-32">
			<div class="logobox rta-column xcenter">
				<SVLogo />
			</div>
			{#if $userLang === 'English'}
				<h5 class="ta-c">
					A weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema
					and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.
				</h5>
			{:else if $userLang === 'Hindi'}
				<h5 class="ta-c">
					एक साप्ताहिक कार्यक्रम जिसमें हम साहित्य, कला, नाट्य, वास्तु, शिल्प, सिनेमा आदि पर एक रसिक
					की दृष्टि से, शुद्ध किन्तु सरल हिंदी में चर्चा करेंगे|
				</h5>
			{/if}
		</div>
		<div class="rta-column rowgap200 p-top-64 bord-top">
			<Splide
				hasTrack={false}
				options={{
					drag: true,
					keyboard: 'global',
					waitForTransition: true,
					type: 'loop',
					gap: '20px',
					wheelMinThreshold: 1.1,
					speed: 900,
					direction: 'ltr',
					perPage: 1,
					pagination: false,
					breakpoints: {
						1023: {
							perPage: 1
						}
					}
				}}
			>
				<SplideTrack>
					<SplideSlide>
						<div class="rta-column rowgap100">
							<Youtuber youTubeId={'jZ6YddYWH9U'} />
							<p class="ta-c">
								<a href="https://youtu.be/jZ6YddYWH9U" target="_blank" rel="noreferrer">
									E1 - Saundaryabodha - Bhasha, Kalaa aur Nagarika (Intro) - सौंदर्यबोध - भाषा, कला
									और नागरिक
								</a>
							</p>
						</div>
					</SplideSlide>

					<SplideSlide>
						<div class="rta-column rowgap100">
							<Youtuber youTubeId={'gkAaT9XBURE'} />
							<p class="ta-c">
								<a href="https://youtu.be/gkAaT9XBURE" target="_blank" rel="noreferrer">
									E2 - Ram Ki Shakti Puja - राम की शक्ति पूजा
								</a>
							</p>
						</div>
					</SplideSlide>

					<SplideSlide>
						<div class="rta-column rowgap100">
							<Youtuber youTubeId={'weF2xsunKOs'} />
							<p class="ta-c">
								<a href="https://youtu.be/weF2xsunKOs" target="_blank" rel="noreferrer">
									E3 - Ashadh Ka Ek Din
								</a>
							</p>
						</div>
					</SplideSlide>
				</SplideTrack>
				<div
					class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 p-top-16 m-top-16 bord-top"
				>
					<button
						class="splide__arrow splide__arrow--prev newbutton"
						type="button"
						aria-label="Previous slide"
						aria-controls="splide01-track"
					>
						PREV
					</button>
					<button
						class="splide__arrow splide__arrow--next newbutton"
						type="button"
						aria-label="Next slide"
						aria-controls="splide01-track"
					>
						NEXT
					</button>
					<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer">
						<button class="newbutton svar"> Youtube </button>
					</a>
				</div>
			</Splide>
			<div class="rta-column rowgap50 xcenter bord-bot p-bot-16">
				<small>Subscribe:</small>
				<div
					class="g-ytsubscribe"
					data-channelid="UCpmTZwM36xdAuHbBaaE2asg"
					data-layout="default"
					data-count="hidden"
				/>
			</div>
		</div>
		<div class="rta-column rowgap200 p-top-32 ycenter">
			{#if tests && tests.length > 0}
				<Splide
					hasTrack={false}
					options={{
						drag: true,
						keyboard: 'global',
						waitForTransition: true,
						type: 'loop',
						gap: '32px',
						autoPlay: true,
						wheelMinThreshold: 1.1,
						speed: 900,
						direction: 'ltr',
						perPage: 1,
						pagination: false,
						breakpoints: {
							1023: {
								perPage: 1
							}
						}
					}}
				>
					<SplideTrack>
						{#each tests as item}
							<SplideSlide>
								<div class="rta-column ta-c quotes">
									<h5>"{item.content}"</h5>
								</div>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div
						class="splide__arrows splide__arrows--ltr rta-row xcenter-d xcenter-m colgap200 p-top-16 m-top-16 bord-top"
					>
						<button
							class="splide__arrow splide__arrow--prev blank-button"
							type="button"
							aria-label="Previous slide"
							aria-controls="splide01-track"
						>
							<Prev1 />
						</button>
						<button
							class="splide__arrow splide__arrow--next blank-button"
							type="button"
							aria-label="Next slide"
							aria-controls="splide01-track"
						>
							<Next1 />
						</button>
					</div>
				</Splide>
			{/if}
		</div>
		<div class="rta-column rowgap100 xcenter p-top-64">
			{#if $userLang === 'Hindi'}
				<h4>हिंदी में आगे बढ़ें, अथवा,</h4>
				<button class="newbutton big" on:click={setEnglish}> Read in English </button>
			{/if}
			{#if $userLang === 'English'}
				<h4>Continue in English, or,</h4>
				<button class="newbutton big" on:click={setHindi}>हिन्दी में पढ़ें</button>
			{/if}
		</div>
		{#if $userLang === 'English'}
			<div class="rta-column rowgap300 p-top-64 schedule1 xcenter ta-c">
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/svo1.webp"
						alt="dancers"
					/>
				</div>
				<div class="rta-column rowgap200">
					<h4>Svarṇāñjali is a weekly video series</h4>
					<p>
						to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts
						from the point of view of rasikā, in Sanskṛta Niṣṭha Hindī.
					</p>
					<p>
						It will venture into feelings, experiences and problems which we all have, and will look
						at them from a dhārmic point of view, through the lens of art, language, literature and
						aesthetics.
					</p>
					<p>
						Rigorous research combined with classical aesthetics and a human presentation, we hope
						to rekindle the cultural confidence.
					</p>
					<p>
						50 premium video productions featuring the uniquely innate cultural lens of Pankaj
						Saxena and Nivedita Tiwari.
					</p>
					<h5>
						<strong>
							<span style="color: #D47915"
								>With Bṛhat's distinct aesthetic and visual presence.</span
							></strong
						>
					</h5>
				</div>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter">
				<h4>Add Your Voice to Svarṇāñjali</h4>
				<p>
					Have you observed your use of foreign words in your conversations in Hindi (and/or your
					regional language)?
				</p>
				<p>
					Have you tried replacing them? How was that experience? Fun, Daunting? We'd love to hear,
					share it with us.
				</p>
				<h6>What is your favorite book in Hindi and/or Regional Literature?</h6>
				<h6>Who is your favorite Author in Hindi and/or Regional Literature?</h6>
				<h5>
					<strong> <span style="color: #D47915">Here is a fun challenge:</span></strong>
				</h5>
				<p>
					Speak anything in Hindi for atleast 30 seconds (max 1 minute) without using a single word
					of FATE (Farsi, Arabic, Turkish, English) languages.<br />
					Share the link of your video with us, we will put the most interesting ones on our Youtube
					channel :)
				</p>
				<form class="rta-column submitform rowgap100" on:submit|preventDefault>
					<input type="text" placeholder="Full Name" bind:value={name} />
					<input type="email" placeholder="Email ID" bind:value={email} />
					<input type="URL" placeholder="Link to Video" bind:value={submiturl} />
					{#if isValidEmail}
						<button type="submit" class="genbutton" on:click={handleSubmit}>Send</button>
					{/if}
				</form>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter schedule1">
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/svo2.webp"
						alt="people"
					/>
				</div>
				<h4>Why Svarṇāñjali</h4>
				<p>
					Language reflects a culture's aspirational value to society. It is at the root of creative
					agency of a people.<br /><br />
					But today, this role has been outsourced to the market. This stunts 'cultural confidence'.
					Languages are evaluated not on the worth of their cultural importance but on the utility to
					get jobs and join a specific cultural paradigm.<br /><br />
					Compounding this is the issue of politicization of language in the name of democracy.
				</p>
				<h6>
					All of this leads to <span style="color: #D47915">loss of the vital spirit</span> of a land,
					of its culture and its people.
				</h6>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter schedule1">
				<h5>
					But the Hindū consciousness is no longer underground. It has started surfacing. The spark
					of Hindū renaissance is now turning into a huge flame. We are putting the Hindū eye to
					philosophy, society and politics.
				</h5>
				<h6>
					Time has come now for this Hindū consciousness to <span style="color: #D47915"
						>break into the level of arts and literature.</span
					>
				</h6>
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/exceptcentral.webp"
						alt="story"
					/>
				</div>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter p-bot-64">
				<h4>Our Aims</h4>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon01.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						the Creation of <span style="color: #D47915">Beauty</span>
					</h6>
					<p>
						is the primary goal of the series. It wants its audience to experience rasa like a
						rasika and a nāgarika
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon02.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						Reestablishment of <span style="color: #D47915">Sanskṛta Niṣṭha Hindī</span>
					</h6>
					<p>
						our second goal is to re-infuse the spirit of Sanskṛta into Hindī language and to free
						it from FATE words, in order to bring dhārmic awareness.
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon03.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						Hindī literature and Indian arts from a <span style="color: #D47915"
							>Hindū perspective</span
						>
					</h6>
					<p>
						the third goal of Svarṇānjali is to revisit literature, arts, drama, architecture,
						sculpture and cinema from a deep Hindū perspective.
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon04.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						to <span style="color: #D47915">Aestheticize</span> Life
					</h6>
					<p>
						the last goal is to discuss individual problems and perspectives from the eye of Hindū
						aesthetics and in the process give them an elevating and uplifting experience which will
						also be cathartic.
					</p>
				</div>
				<h5 class="p-top-32">
					To mainstream what does Hindū darśana says about arts and literature, and to enable Hindū
					consciousness to take the next leap and reach each nook and corner of Hindū society,
					through our great tradition of story-telling, in regional languages.
				</h5>
				<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer">
					<button class="newbutton svar">On Youtube Now</button>
				</a>
			</div>
			<P05 />
		{/if}
		{#if $userLang === 'Hindi'}
			<div class="rta-column rowgap300 p-top-64 schedule1 xcenter ta-c">
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/svo1.webp"
						alt="dancers"
					/>
				</div>
				<div class="rta-column rowgap200">
					<h4>स्वर्णांजलि एक साप्ताहिक कार्यक्रम है</h4>
					<p>
						जिसमें हम साहित्य, कला, नाट्य, वास्तु, शिल्प, सिनेमा आदि पर एक रसिक की दृष्टि से, शुद्ध
						किन्तु सरल हिंदी में चर्चा करेंगे|
					</p>
					<p>
						स्वर्णांजलि आपके और हमारे जीवन के निजी एवं सामजिक पहलुओं को कला के माध्यम से और धर्म की
						दृष्टि से देखेगी|
					</p>
					<p>
						स्वर्णांजलि के सृजन में योगदान है इसके पीछे लगा गहन शोध, सनातन धर्म की दृष्टि से निकला
						हुआ सौन्दर्यबोध, और समसामयिक जीवन से सरोकार रखने वाले एक जीवंत चित्रण का।
					</p>
					<p>
						स्वर्णांजलि के ५० एपिसोड ​पंकज सक्सेना की विशिष्ठ किन्तु पारंपरिक सांस्कृतिक दृष्टि से
						और निवेदिता तिवारी की मधुर वाणी में, सौन्दर्यबोध के अनुभव के साथ|​
					</p>
					<h5>
						<strong>
							<span style="color: #D47915">साथ में बृहत् की विशिष्ठ जीवनदृष्टि|</span></strong
						>
					</h5>
				</div>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter">
				<h4>स्वर्णांजलि में जोड़िए अपने स्वर</h4>
				<p>
					क्या आप अपनी बोलचाल की भाषा (हिंदी अथवा मातृ भाषा) में विदेशी शब्दों का प्रयोग करते हैं ?
				</p>
				<p>
					क्या आपने उनके स्थान पर शुद्ध हिंदी के शब्दों का प्रयोग करके देखा है ? कैसा रहा आपका अनुभव
					? रोचक या चुनौतीपूर्ण? हम जानने के लिए उत्सुक हैं, हमें बताइए।
				</p>
				<h6>
					हिंदी साहित्य अथवा अन्य भारतीय प्रांतीय भाषाओँ के साहित्यों में आपकी सर्वाधिक प्रिय पुस्तक
					कौन सी है ?
				</h6>
				<h6>
					हिंदी साहित्य अथवा अन्य भारतीय प्रांतीय भाषाओँ के साहित्यों में आपके सर्वाधिक प्रिय लेखक
					कौन हैं ?
				</h6>
				<h5>
					<strong>
						<span style="color: #D47915">
							शुद्ध हिंदी का प्रयोग करते हुए एक मिनट से कम अवधि का वीडियो बनाएँ और हमें अपने वीडियो
							का लिंक भेजें। अनुकूल वीडियो को हम अपनी वेबसाइट और सोशल मीडिया पर साझा करेंगे।</span
						></strong
					>
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
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter schedule1">
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/svo2.webp"
						alt="people"
					/>
				</div>
				<h4>स्वर्णांजलि क्यों</h4>
				<p>
					भाषा हमारी सांस्कृतिक आकांक्षा की परिचायक है| सृजनात्मकता का मूल है|  
					<br /><br />
					परन्तु आज भाषा के इस आयाम को बाज़ार में बेच दिया गया है| इससे हमारा सांस्कृतिक वैभव और गरिमा
					कम होती है| आजकल भाषाओं को इस तराजू पर तौला जाता है कि किस भाषा से व्यवसाय में वृद्धि होगी
					और किसको सीखने से नहीं| इसके साथ ही समस्या है जनतंत्र के नाम पर भाषा का राजनीतिकरण|
				</p>
				<h6>
					ऐसा होने पर किसी <span style="color: #D47915">संस्कृति की आत्मा और सृजनात्मकता</span>,
					मरने लगती है|
				</h6>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter schedule1">
				<h5>
					हिन्दू चेतना अब भूमिगत नहीं रही| यह सतह पर आने लगी है| हिन्दू पुनर्जागरण की ज्योति अब
					ज्वाला में परिवर्तित होने लगी है| विश्व के दर्शन, समाज और राजनीती को हिन्दू दृष्टि से देखा
					जाने लगा है।
				</h5>
				<h6>
					समय आ गया है कि दर्शन, राजनीति और अकादमी से निकलकर यह हिन्दू चेतना साहित्य और कला में
					प्रवेश करे|
				</h6>
				<div class="rta-image">
					<img
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/exceptcentral.webp"
						alt="story"
					/>
				</div>
			</div>
			<div class="rta-column rowgap400 p-top-64 bord-top ta-c xcenter p-bot-64">
				<h4>हमारे उद्देश्य</h4>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon01.png"
						alt="any"
					/>
					<h6 class="p-top-16">रस निष्पत्ति</h6>
					<p>
						यह कार्यक्रम मुख्यतः सौंदर्य की अनुभूति के लिए बनाया गया है और दर्शकों को एक रसिक और एक
						नागरिक की भाँती सौन्दर्यानुभूति कराना ही इसका परम लक्ष्य है|
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon02.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						<span style="color: #D47915">संस्कृतगम्य हिंदी</span> की पुनर्स्थापना
					</h6>
					<p>
						​हिंदी की अभिव्यक्ति में संस्कृत के शब्द और सिद्धांतों की पुनर्स्थापना स्वर्णांजलि का
						दूसरा लक्ष्य है|
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon03.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						हिंदी साहित्य और भारतीय कला को <span style="color: #D47915">हिन्दू दृष्टि से देखना</span
						>
					</h6>
					<p>
						साहित्य, कला, नाट्य, वास्तु, शिल्प और सिनेमा का हिन्दू दृष्टि से पुनर्वलोकन जिससे कि इन
						सभी विषयों का आंकलन हिन्दू दर्शन और दृष्टि में कैसा हो हमारे दर्शकों को पता लग सके|
					</p>
				</div>
				<div class="rta-column xcenter">
					<img
						class="iconimage"
						src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon04.png"
						alt="any"
					/>
					<h6 class="p-top-16">
						सौंदर्य और ज्ञान की <span style="color: #D47915">दृष्टि का उदय करना</span>
					</h6>
					<p>
						कला मानव जीवन के सबसे महत्वपूर्ण आयामों में से एक है|स्वर्णांजलि का अंतिम रंग लक्ष्य
						होगा दर्शकों को कला के माध्यम से वैयक्तिक परन्तु प्रेरक अनुभूति कराना|
					</p>
				</div>
				<h5 class="p-top-32">
					हिन्दू दर्शन कला और साहित्य के बारे में क्या कहता है, इसे भारतीय भाषाओं में, उनकी
					क्षेत्रीय विविधता और सुन्दरता के साथ प्रस्तुति। जन सामान्य में कहानियों एवं भारत की पुरातन
					कथा-प्रवचन परम्परा द्वारा हिन्दू चेतना की प्रस्थापना।
				</h5>
				<a href="https://youtu.be/OeCFCHwSpd0" target="_blank" rel="noreferrer">
					<button class="newbutton svar">यूट्यूब पे</button>
				</a>
			</div>
			<P05 />
		{/if}
	</div>
</div>

<style lang="sass">

.iconimage
	width: 48px
	height: 48px

.schedule1
	@media screen and (min-width: 769px)
		.rta-image
			img
				width: 360px
				height: 360px
				text-align: center
				margin: auto
	@media screen and (max-width: 768px)
		.rta-image
			img
				width: 240px
				height: 240px
				text-align: center
				margin: auto


.quotes
	background: #D47915
	border-radius: 5px
	h5
		color: white
	@media screen and (min-width: 1024px)
		padding: 32px
	@media screen and (max-width: 1023px)
		padding: 24px

.submitform
	@media screen and (min-width: 1024px)
		width: 240px
		input
			font-size: 12px
			padding: 4px 8px

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
