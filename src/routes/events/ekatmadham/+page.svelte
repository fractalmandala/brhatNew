<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';

	$metaTitle = 'Ekatma Dham';
	$metaDescription = ' Ekatma Dham, the 108 feet high Statue of Oneness of Ādi Śaṅkarācāryā';
	$metaUrl = 'https://www.brhat.in/events/ekatmadham';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/ekatmadham.webp';
</script>

<div class="x0" data-lenis-scroll-snap-align="start">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/ekatmadham.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/ekatmadham.webp')"
	/>
</div>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 p-top-128 p-bot-32 xcenter">
		<h4 class="ta-c">Ekatma Dham</h4>
		<div class="rta-column rowgap200 contains-text">
			<p>
				Omkareshwar is being developed as a global center of Advaita Vedānta by the Madhya Pradesh
				government, with the aim of propounding the life and philosophy of Śrī Ādi Śaṅkarācāryā: the
				reviver of Sanātana Dharma, cultural unity and Advaita Vedānta darśana.
			</p>
			<p>
				Under this grand and divine <b>Ekatma Dham</b>, the 108 feet high <b>Statue of Oneness</b>
				of Ādi Śaṅkarācāryā, a museum named <b>Advaita Lok</b> and
				<b>Śaṅkarācāryā International Advaita Vedanta Institute</b> are being established.
			</p>
			<p>
				Omkareshwar is the sacred place where Śaṅkarācāryājī met his Guru, Govinda
				Bhagavatpādācāryā, and completed study of the śāstra under his guidance through a period of
				four years. At the age of 12, he left from Omkareshwar to spread the knowledge of Vedānta
				through Akhaṇḍa Bhārata. Therefore, the statue of 12-year-old Ādi Śaṅkarācāryā is being
				established on the Mandhata mountain of Omkareshwar. The Statue of Oneness will be unveiled
				as the first historic phase of this project on 21st September.
			</p>
			<p>
				This idol has been carved by the famous sculptor Śrī Bhagwan Rampure of Solapur,
				Maharashtra. The picture of Bāla Śaṅkarācāryā for the statue was made by Mumbai's renowned
				painter Śrī Vasudev Kamat in the year 2018. An Ekatma Yatra to raise public awareness and
				collect metal for the construction of the statue was carried out in the regions of Madhya
				Pradesh in the year 2017-18, across 27,000 grāma pancāyatas.
			</p>
			<p>
				<u>Under Shankar Museum, various galleries and major centers include:</u><br />
				- galleries on Śaṅkarācāryājī’s life, philosophy, and Sanātana Dharma <br />
				- a film on Ādi Śaṅkarācāryājī’s life <br />
				- Advaita Interpretation Center named ‘Srishti’ <br />
				- A serene place known as Advaita Narmada Vihar <br />
				- Annakṣetra <br />
				- Shankar Kalagram, a vibrant art space
			</p>
			<p>
				Apart from four research centers focusing on darśanas, science, social sciences and arts,
				there will also be a library, extension center, and a traditional gurukula under the
				Shankaracharya International Advaita Vedanta Institute.
			</p>
			<p>
				The entire construction is being done in the traditional Indian temple architectural style.
				This project will be environment friendly. Along with Advaita Lok, a compact forest named
				Advaita Van is being developed in a plot of thirty-six hectares.
			</p>
			<p>
				Sādhus and swāmins from across India have been invited to bless this event, which will be
				taking place at a huge scale. We look forward to this landmark event taking place this week
			</p>
		</div>
		<a href="https://www.oneness.org.in/" target="_blank" rel="noreferrer">
			<button class="newbutton red">Visit Site</button>
		</a>
	</section>
	<section class="rta-grid grid3 rowgap400 colgap400 bord-top p-top-32">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/Sankara1.jpg"
			alt="1"
		/>
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/Sankara2.jpg"
			alt="2"
		/>
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ekatmadham/Sankara3.jpg"
			alt="3"
		/>
	</section>
</Shell>

<style lang="sass">

.x0
	overflow: hidden
	@media screen and (min-width: 1024px)
		height: 100vh
	@media screen and (max-width: 1023px)
		height: 50vh


</style>
