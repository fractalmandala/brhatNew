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
	<section class="rta-column rowgap400 p-top-64 intro">
		<div class="rta-column rowgap200 main p-top-32">
			<slot />
		</div>
		<div class="rta-row ycenter colgap200 xcenter-d">
			<div class="insection rta-column p-bot-16">
				<div class="rta-row stay colgap200 ycenter">
					<div class="rta-column rowgap50">
						<cite>Maṇḍala</cite>
						<select>Mandala</select>
					</div>
					<div class="rta-column rowgap50">
						<cite>Sūkta</cite>
						<select>sukta</select>
					</div>
					<div class="rta-column rowgap50">
						<cite>Ṛca</cite>
						<select>rca</select>
					</div>
				</div>
			</div>
			<div class="insection rta-column p-bot-16 rowgap50">
				<cite>Ṛṣi</cite>
				<select>rishi</select>
			</div>
			<div class="insection rta-column p-bot-16 rowgap50">
				<cite>Devatā</cite>
				<select>dev</select>
			</div>
		</div>
	</section>
</Shell>

<style lang="sass">

.intro
	min-height: 100vh

select
	border: 1px solid var(--forline)
	border-radius: 3px
	padding: 4px
	background: var(--forline)

.main
	@media screen and (min-width: 1024px)
		padding-left: 64px

</style>
