<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Ṛgveda Saṃhitā at Bṛhat Open Library';
	$metaDescription =
		'Explore Ṛgveda Saṃhitā at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/rigveda';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
>
	<section class="rta-grid grid2 left0 rowgap200 p-top-64">
		<div class="rta-column sidebar p-top-32">
			<div class="insection rta-column p-bot-16">
				<small class="bord-bot p-bot-8 m-bot-8"><b>Quick Navigate:</b></small>
				<div class="rta-row stay colgap100">
					<div class="rta-column rowgap50" style="width: 30%">
						<cite>Maṇḍala</cite>
						<select>Mandala</select>
					</div>
					<div class="rta-column rowgap50" style="width: 30%">
						<cite>Sūkta</cite>
						<select>sukta</select>
					</div>
					<div class="rta-column rowgap50" style="width: 30%">
						<cite>Ṛca</cite>
						<select>rca</select>
					</div>
				</div>
			</div>
			<div class="insection rta-column p-bot-16 p-top-8">
				<small class="bord-top p-top-16 p-bot-8"><b>Select Ṛṣi:</b></small>
				<select>rishi</select>
			</div>
			<div class="insection rta-column p-bot-16 p-top-8">
				<small class="bord-top p-top-16 p-bot-8"><b>Select Devatā:</b></small>
				<select>dev</select>
			</div>
		</div>
		<div class="rta-column rowgap200 main p-top-32">
			<slot />
		</div>
	</section>
</Shell>

<style lang="sass">

.rta-grid
	min-height: 100vh

select
	border: 1px solid var(--forline)
	border-radius: 3px
	padding: 4px
	background: var(--forline)

.sidebar
	@media screen and (min-width: 1024px)
		border-right: 1px solid var(--contraster2)
		padding-right: 32px
		position: sticky
		top: 0

.main
	@media screen and (min-width: 1024px)
		padding-left: 64px

</style>
