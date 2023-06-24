<script lang="ts">
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	let height: number;

	$: if ($breakZero || $breakOne) {
		height = 720;
	} else {
		height = 600;
	}

	export let data;

	$metaUrl = `/openlibrary/${data.slug}`;
	$metaTitle = data.Text;
	$metaDescription =
		'Bṛhat Open Library is an online repository of Books, Papers, Texts and Scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaType = 'webpage';
</script>

<div
	class="bookpage rta-column"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-row colgap100 glass-bottom p-bot-16 outer-box limit">
		<div class="rta-column lib">
			<small><a href="/openlibrary">Return</a></small>
		</div>
		<div class="rta-column genre">
			<small>{data.Type}</small>
		</div>
	</div>
	<h2 class="p-top-16 outer-box limit ta-c">
		{data.Text}
	</h2>
	<div class="rta-column p-bot-32 rowgap200 outer-box limit">
		<h5 style="color: var(--mand)" class="glass-bottom p-bot-16">{data.author}</h5>
		{#if data.Description && data.Description.length > 0}
			<p>{data.Description}</p>
		{/if}
	</div>
	<div class="rta-column carrier">
		<iframe title={data.Text} src={data.Extract} width="100%" {height} allow="autoplay" />
	</div>
</div>

<style lang="sass">

.genre
	background: var(--mand)
	width: max-content
	max-width: 80%
	padding: 4px 12px
	border-radius: 4px
	small
		color: white

.lib
	background: var(--themer)
	width: max-content
	max-width: 80%
	padding: 4px 12px
	border-radius: 4px
	small
		color: white
	&:hover
		background: #fe4a49

.bookpage.levelzero
	padding-top: 0
	align-items: center
	h2
		text-align: center
		line-height: 1.2
	h5, p
		text-align: center

.bookpage.leveltwo
	padding: 0
	align-items: stretch

.carrier
	border-radius: 8px
	padding: 16px
	background: var(--opposite)
	iframe
		border-radius: 8px
		border: none
	


</style>
