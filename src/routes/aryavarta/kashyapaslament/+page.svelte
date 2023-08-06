<script lang="ts">
	import { onMount } from 'svelte';
	import { soaChapter1 } from '$lib/utils/supapulls';
	import Shell from '$lib/components/PageShell.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';

	let panels: any;

	$metaUrl = 'https://www.brhat.in/aryavarta/kashyapaslament';
	$metaTitle = `Kaśyapa's Lament - Scrolls of Āryavarta`;
	$metaDescription =
		'A collaboration with The Emissary to explore the visions of a Kaśyapa Ṛṣi, in the lost past.';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/website/soakey.webp';
	$metaType = 'webpage';

	onMount(async () => {
		panels = await soaChapter1();
	});
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<div class="rta-column rowgap400 min100" id="intro">
		<h3 use:reveal>1 - Kaśyapa's Lament</h3>
		<h5 use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
			This series is a collaboration with <a
				href="https://twitter.com/TheEmissaryCo"
				target="_blank"
				rel="noreferrer">The Emissary</a
			>, an eminently followable handle on Twitter that routinely experiments with AI-generated art
			in Dhārmika/Bhāratīya themes. We are thankful to The Emissary for all the images used in this
			chapter.
		</h5>
		<h5 use:reveal={{ delay: 150, duration: 300, transition: 'fade' }}>
			Kaśyapa's Lament takes us into the mind of a familiarly named ṛṣi, who is receiving concerning
			visions of a time he cannot quite place.
		</h5>
	</div>
	{#if panels && panels.length > 0}
		{#each panels as item}
			<div class="rta-grid grid2 right colgap400 min100">
				<div class="rta-image p-top-32 p-bot-32">
					<img src={item.image} alt={item.newid} />
				</div>
				<div class="rta-column rowgap200">
					<pre class="mid">{item.text}</pre>
				</div>
			</div>
		{/each}
	{/if}
	<div class="rta-column rowgap400 p-top-32 bord-top" id="nexter">
		<h4 class="ta-c"><a href="/aryavarta/sutaandsuda">Next - Sūta and Sudā</a></h4>
	</div>
</Shell>

<style lang="sass">

#nexter
	h4
		&:hover
			a
				color: #fe4a49

</style>
