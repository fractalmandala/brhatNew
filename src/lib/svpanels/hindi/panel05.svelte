<script lang="ts">
	import SvarLogo2 from '$lib/logos/Svarnanjali2.svelte';
</script>

<div class="rta-column ycenter rowgap400 outer-box minH">
	<div class="contain rta-column">
		<SvarLogo2 dimension={220} />
	</div>
	<h4 class="hindiadobe">
		यह चर्चा करने का समय आ गया है कि कला और साहित्य पर हिन्दू दर्शन के क्या विचार हैं।   प्रांतीय
		भाषाओं में अपनी कथाओं के माध्यम से भारत के कोने-कोने में हिन्दू चेतना को प्रस्थापित करने का  समय
		आ गया है।
	</h4>
	<div class="rta-column rowgap200 this">
		<p class="hindiadobe">जल्द ही आ रहा है</p>
		<a href="www.youtube.com/@brhat" target="_blank" rel="noreferrer" class="genbutton">
			Youtube
		</a>
	</div>
	<div class="mygrid ycenter">
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/MohanRakesh.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/AntimAranya.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/MrignayaniVrindavanlalVerma.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/AajBhiKhareHainTalabAnupamMishra.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/ManasKaHansaAmritlalNagar.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/PanchavatiBanwari.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/RamKiShaktiSuryakantTripathi.jpg"
				alt="one"
			/>
		</div>
		<div class="rta-image">
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/books/DoAankhenBarahHaath(957).jpg"
				alt="one"
			/>
		</div>
	</div>
</div>

<style lang="sass">

.mygrid
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr
	padding-top: 32px
	padding-bottom: 128px
	padding-left: 0
	margin-left: 0
	gap: 24px
	img
		border-radius: 24px
		height: 30vh
	width: 60%
	height: 64vh

.genbutton
	text-align: center
	letter-spacing: 0
	text-transform: uppercase

.outer-box
	padding-bottom: 128px
	@media screen and (min-width: 1024px)
		h4
			width: 70%
	@media screen and (max-width: 1023px)
		padding-top: 64px
		text-align: center
		.mygrid
			width: 100%
			gap: 8px
		.contain
			height: 220px
		.this
			align-items: center

</style>
