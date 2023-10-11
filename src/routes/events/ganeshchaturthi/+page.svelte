<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	import { slide } from 'svelte/transition';

	$metaTitle = 'Ganesh Chaturthi';
	$metaDescription = 'Scenes from Ganesh Chaturthi 2023';
	$metaUrl = 'https://www.brhat.in/events/ganeshchaturthi';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi.webp';

	let expandWriteup = false;

	function toggleWriteup() {
		expandWriteup = !expandWriteup;
	}
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 p-top-128">
		<h4>Gaṇeśa Caturthī 2023</h4>
		<div class="rta-column rowgap200 bord-top bord-bot p-top-32 p-bot-32">
			<h5 class="title">
				This Gaṇeśa Caturthī, we invited participation from all Gaṇeśa bhaktas to send in videos and
				photos pertaining to the celebration of one of sanātana dharma’s most iconic community based
				festivals. Participants were encouraged to submit any of the following:
			</h5>
			<p>
				- Interview the mūrti makers, on their process, how long does it take, what type of sādhanā
				do they do before starting on this sacred project etc.
			</p>
			<p>- Chant a śloka, a stotram pertaining to the festival, and/ or sing a relevant bhajan</p>
			<p>- Share photos from their celebration at home/community</p>
			<p>
				- Capture moments of their kids making their own DIY clay Gaṇeśa or encourage them to share
				their own favourite stories, anecdotes, sing bhajans on Gaṇeśa
			</p>
			<p>
				- Write about how and why this festival is important to them or share any unique tradition
				in their family/community
			</p>
		</div>
		<div class="rta-column rowgap100">
			<h5 class="title">The submitted videos, photos and writeups are featured here:</h5>
			<p class="mid soft">Right click/long press on images to open in new tab</p>
		</div>
	</section>
	<section class="rta-column rowgap400 p-top-64">
		<div class="rta-column rowgap300">
			<h5 class="title">Making Gaṇeśa</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/6.jpeg"
					alt="6"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/7.jpeg"
					alt="7"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/8.jpeg"
					alt="8"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/9.jpeg"
					alt="9"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/brhat/10.jpeg"
					alt="10"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Welcoming Gaṇeśa</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/6.jpeg"
					alt="6"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/7.jpeg"
					alt="7"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/8.jpeg"
					alt="8"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/9.jpeg"
					alt="9"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/welcoming/10.jpeg"
					alt="10"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Gaṇeśa Visarjana, AVG Rishikesh</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/6.jpeg"
					alt="6"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/7.jpeg"
					alt="7"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/8.jpeg"
					alt="8"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/9.jpeg"
					alt="9"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/10.jpeg"
					alt="10"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/11.jpeg"
					alt="11"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/12.jpeg"
					alt="12"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/visarjan/13.jpeg"
					alt="13"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Bhadange Family - Virginia, USA</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/bhadangefamily/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/bhadangefamily/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/bhadangefamily/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/bhadangefamily/4.jpeg"
					alt="4"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<div class="rta-column rowgap100">
				<h5 class="title">Kate Herse - Oregon, USA</h5>
				<p class="small">
					Also read Kate Herse's essay on our blog, Dhīti - <a
						href="/dhiti/conversiontohindudharma2"
						target="_blank"
						rel="noreferrer">Conversion to Hindu Dharma, 2</a
					>
				</p>
			</div>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/kateherse/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/kateherse/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/kateherse/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/kateherse/4.jpeg"
					alt="4"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">C. Annapurna, Yapral, Bhagyanagar</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/yapral/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/yapral/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/yapral/4.jpeg"
					alt="4"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Ritupriya Chakraborty - Lisbon, Portugal</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/portugal/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/portugal/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/portugal/3.jpeg"
					alt="3"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Rishabh Pratap Singh, Etah</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/etah/6.jpeg"
					alt="6"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Ganeshotsav Celebrations - Accra, Ghana</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/accra/6.jpeg"
					alt="6"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Shree Sanatan Dharma Sabha Temple - Dar-es-Salaam, Tanzania</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/dares/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/dares/2.jpeg"
					alt="2"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Suma and Pavan - Sydney, Australia</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/sydney/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/sydney/2.jpeg"
					alt="2"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">
				Mulund, Matunga, Kalyan and Powai from Simran Parmar and Lakshmi Sivaraman
			</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/5.jpeg"
					alt="5"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/6.jpeg"
					alt="6"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/7.jpeg"
					alt="7"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/8.jpeg"
					alt="8"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/9.jpeg"
					alt="9"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/10.jpeg"
					alt="10"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/11.jpeg"
					alt="11"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/12.jpeg"
					alt="12"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/13.jpeg"
					alt="13"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/14.jpeg"
					alt="14"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/15.jpeg"
					alt="15"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/16.jpeg"
					alt="16"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/mumbai/17.jpeg"
					alt="17"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Photos from a Bhagyanagar Residential Complex</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/4.jpeg"
					alt="4"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/balagokulam/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/balagokulam/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/balagokulam/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/5.jpeg"
					alt="55"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">Paintings by Sneha Subramanian</h5>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/painting/1.jpg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/painting/2.jpg"
					alt="2"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">All Videos</h5>
			<div class="rta-grid grid3 rowgap300 colgap300 bord-bot p-bot-32 resizer">
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid1.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Shree Sanatan Dharma Sabha Temple, Dar-es-Salaam</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid2.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Ahaana Singh, Hospet</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid3.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Bhavana Mohanasundaram, Chennai</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid4.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Pratibha Chauhan, Bhopal</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid5.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Youth Camp at CIF, Kochi</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid6.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Community Celebrations, Bhagyanagar</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid7.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Ganeshotsav Celebrations in Accra, Ghana</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid8.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Ganeshotsav Celebrations in Accra, Ghana</p>
				</div>
				<div class="rta-column rowgap100">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video width="100%" height="200" controls>
						<source
							src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/vids/vid9.mp4"
							type="video/mp4"
						/>
					</video>
					<p class="mid soft ta-c">Ganeshotsav Celebrations in Accra, Ghana</p>
				</div>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h5 class="title">All Writeups</h5>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<h6>What Ganesha Means to Me, Sneha Subramanian</h6>
				<button class="newbutton red" on:click={toggleWriteup}
					>{#if expandWriteup}Close{:else}Read{/if}</button
				>
				{#if expandWriteup}
					<div class="rta-column rowgap200 contains-text p-top-32" transition:slide>
						<h5>
							वक्रतुण्ड महाकाय सयू कोटि समप्रभ ।<br />
							निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
						</h5>
						<p>
							The word Ganesha is an amalgam of two words , Gan meaning a large group of people or
							horde and Esha meaning the ultimate ruler or leader. True to the meaning of the
							derivatives of his name, Ganesha is the one who always leads us forward and not just
							us but also the troop of celestial energies. There have been many scripts translating
							the importance of Ganesha , his existence , symbolism and the deeper meaning of his
							name. I prefer not dwelling into the known facts but I would definitely love to talk
							about what Ganesha means to me based on my experience and observations from years.
						</p>
						<p>
							As a young girl me and my brother always waited eagerly for the most joyous festival
							we knew during our period, the Ganesha Chaturthi. Yes you heard it right , it is not
							Diwali but Ganesh Chaturthi. Unlike many kids who loved Diwali more than any other
							festival for all the right reasons like sweets , crackers , gifts and many more, we
							always looked forward to Ganeshotsava for many reasons. It started from the colorful
							idol shopping, making small mandap setups for our dear Deva, flower decorations, the
							unforgettable modak treats, the spirit of dhols on the road before every Ganesha
							Pandal , the screams of Ganapati Bappa Morya , the theatricals performed by several
							artists with huge idols crafted with amazing themes to the final day of saying bye
							with tears in our eyes. It touched us in just so many ways that I can't list out all.
						</p>
						<p>
							The coming of this festival just brought in so much happiness in us which is
							unexplainable. A small town like Hubli witnessed one of the best theatricals with
							Ganesha stories on the streets and that for many reasons has contributed to awakening
							the artist in me. A day before the Pooja my mother often took us for the idol shopping
							and we literally found it difficult to choose one from the impeccable creativity the
							artisans always showcased. I do respect the environmental consciousness for having a
							clay Ganesha but nothing made me more happier when we chose the most colorful Ganesha
							made of POP. The Varna devata was our chief element of attraction as kids. Not to
							forget the 21patris we went in search of to display in front of our chief with various
							handmade jewellery that we fondly remember making for our Bappa.
						</p>
						<p>
							I recollect waiting with my mum for a little girl (Reshma) who came to our house every
							Ganesha Chaturthi to offer flowers from her little garden and to eat the special
							kozhakattais ( modaks). Little things like these made the celebration so special in
							many ways.
						</p>
						<p>
							Something about Ganesha is deeply moving when it comes to art. He is the only deity
							you can get the most creative with. I have seen him taking forms of a figurative art ,
							a sculpture, a leaf art, an abstract , caricatures and even written forms of art , the
							list is endless. There has not been so much experiment done with any other deity form
							till date. People have their own perceptions to his form and color and that is very
							intriguing to me. I have sculpted many Ganeshas for my Pooja and everytime I have done
							it I have not realised time passby.
						</p>
						<p>
							The beauty of Shaadu clay, its importance and ease of sculpting has made it the most
							favorable medium for many sculptors across the cities. To be able to rejoice the
							process when it is made at every step gives me not only inner satisfaction but teaches
							me patience and perspective.
						</p>
						<p>
							Ganesha as a whole has taught me several things, a few important ones to mention are
							adaptability (the large trunk that can hold anything and can twist and turn symbolises
							this), the importance of good listening (large ears), sharp sight and focus (small yet
							magnifying eyes), leadership (his inaate ability to be able to convince and lead his
							army) and faithfulness (the episode of Ganesha guarding the gates for Maa Shakti
							during her bath is proof to this).
						</p>
						<p>
							Every year we welcome him with our open arms , we also immerse him with a special
							prasadam of curd rice to send him with peace into water just to be able to bring him
							back again with new values and shiksha to our future generations.
						</p>
						<h5>Om Ganeshaya Namah</h5>
						<button class="newbutton thinbutton" on:click={toggleWriteup}>Close</button>
					</div>
				{/if}
			</div>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<h6>
					Śrī Gaṇeśa: The Hidden Messages In His Form, Padmavathy Manavazhahan and Lakshmi Sivaraman
				</h6>
				<a href="/dhiti/ganesha" target="_blank" rel="noreferrer"
					><button class="newbutton red">Read</button></a
				>
			</div>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<h6>Recreation of Hidden Treasure of Ghazni Ganpati, Anushree Sunil Ghisad</h6>
				<a href="/anveshi/posts/hiddentreasure" target="_blank" rel="noreferrer">
					<button class="newbutton red">Read</button>
				</a>
			</div>
		</div>
	</section>
</Shell>

<style lang="sass">

.thinbutton
	width: max-content
	max-width: 100%

h5.title
	text-transform: none

.resizer
	img
		object-fit: cover
		width: 100%
		height: 280px
		object-position: center center
		@media screen and (max-width: 768px)
			height: 160px
	video
		border-radius: 8px

p
	a
		color: #fe4a49

</style>
