<script lang="ts">
	import SvarLogo2 from '$lib/logos/Svarnanjali2.svelte';
</script>

<div class="rta-column ycenter rowgap400 outer-box minH">
	<div class="contain rta-column">
		<SvarLogo2 dimension={220} />
	</div>
	<h4 class="hindiadobe">
		To mainstream what does Hindū darśana says about arts and literature, and to enable Hindū
		consciousness to take the next leap and reach each nook and corner of Hindū society, through our
		great tradition of story-telling, in regional languages.
	</h4>
	<div class="rta-column rowgap200 this">
		<p class="hindiadobe">Coming Soon to</p>
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
