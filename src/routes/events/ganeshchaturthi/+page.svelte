<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

	$metaTitle = 'Ganesh Chaturthi';
	$metaDescription = 'Scenes from Ganesh Chaturthi 2023';
	$metaUrl = 'https://www.brhat.in/events/ganeshchaturthi';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi.webp';
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
				This Gaṇeśa Caturthī, we invite participation from all Gaṇeśa bhaktas to send in videos and
				photos pertaining to the celebration of one of sanātana dharma’s most iconic community based
				festivals. To participate, you could do any of the following:
			</h5>
			<p>
				- Interview the mūrti makers, on their process, how long does it take, what type of sādhanā
				do they do before starting on this sacred project etc.
			</p>
			<p>- Chant a śloka, a stotram pertaining to the festival, and/ or sing a relevant bhajan</p>
			<p>- Share photos from your celebration at home/community</p>
			<p>
				- Capture moments of your kids making their own DIY clay Gaṇeśa or encourage them to share
				their own favourite stories, anecdotes, sing bhajans on Gaṇeśa
			</p>
			<p>
				- Write about how and why this festival is important to you or share any unique tradition in
				your family/community
			</p>
		</div>
		<h5 class="title">
			The top 5 videos, photos and writeups will be featured here. Videos can be a maximum of 2
			minutes, and writeups of 500 words.
		</h5>
		<h5 class="title bord-bot p-bot-32" style="color: #fe4a49">
			Do send in your entries by 27th September 2023 to contact@brhat.in, or tag us on Twitter
			@brhat_in
		</h5>
	</section>
	<section class="rta-column rowgap400 p-top-64">
		<h4 class="p-bot-32 bord-bot">Current Entries</h4>
		<div class="rta-column rowgap300">
			<h6 class="title">Photos from Bṛhat</h6>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32">
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
			<h6 class="title">Photos from a Bhagyanagar Residential Complex</h6>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32">
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/1.jpeg"
					alt="1"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/2.jpeg"
					alt="2"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/3.jpeg"
					alt="3"
				/>
				<img
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/complex/4.jpeg"
					alt="4"
				/>
			</div>
		</div>
		<div class="rta-column rowgap300">
			<h6 class="title">Photos from Balagokulam</h6>
			<div class="rta-grid grid4 stay2 rowgap300 colgap300 bord-bot p-bot-32">
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
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/19events/ganeshchaturthi/balagokulam/4.jpeg"
					alt="4"
				/>
			</div>
		</div>
	</section>
</Shell>
