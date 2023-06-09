<script lang="ts">
	import HeadComponent from '$lib/components/HeadComponent.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';
	$metaTitle = 'Ṛgveda Saṃhitā at Bṛhat Open Library';
	$metaDescription =
		'Explore Ṛgveda Saṃhitā at the open source library for Indic Knowledge Systems';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/07herocovers/bolherobrhat.webp';
	$metaUrl = 'https://www.brhat.in/openlibrary/discover/rigveda';
</script>

<HeadComponent
	title={$metaTitle}
	metaDescription={$metaDescription}
	metaUrl={$metaUrl}
	metaImage={$metaImage}
/>

<p>
	Tradition holds that the Ṛgvedic mantras are to be heard, not read. And while modernity allows us
	to view it as a "book" with "chapters," it is to our tradition a śruti- something to be heard.
	Accordingly, it descends to us thanks to an unbroken line of oral transmission that began with the
	original draṣṭās, thousands of years ago.
</p>
<p>
	Add to this that we read English-language translations, it becomes important to know that in doing
	so we engage with a text far removed from how it was intended. Further, no complete English
	translation exists that does justice to tradition and its interpretations. We possess at best the
	translations Shri Aurobindo left behind.
</p>
<p>
	Adding Shri Aurobindo's translations here, where they exist, is a work in progress. Short of that,
	we have elected to use the translations of Griffith and Basham. Neither are without their share of
	problematic interpretations, but of those available- including the most recent by
	Jamison-Brereton- they are on comparison the least egregious.
</p>
<p>For English works on the Vedas that are true to or representative of tradition, we recommend:</p>
<p>
	<a href="https://www.brhat.in/openlibrary/books/thesecretoftheveda">
		The Secret of the Veda - Shri Aurobindo
	</a>
</p>
<p>
	<a href="https://www.brhat.in/openlibrary/books/thevedas"
		>The Vedas - Pujya Swami Shri Chandrasekharendra Saraswati</a
	>
</p>
<p>
	<a href="https://www.brhat.in/openlibrary/books/theriks"> The Riks - Shri Paramasiva Iyer</a>
</p>
<p>
	<a href="https://www.brhat.in/openlibrary/books/treatiseonrigveda">
		Treatise on Ṛgveda - Vedāyana Bhāradvāja
	</a>
</p>
<p>
	For any historical analysis of the Ṛgveda that neither violates the Indian view of its own
	history, nor need distort the text for its conclusions, we see the works of Shri Srikant Talageri
	as epitomic. One could begin at
	<a href="https://www.brhat.in/openlibrary/books/rigvedahistoricalanalysis">
		Rigveda - A Historical Analysis.
	</a>
</p>

<style lang="sass">

a
	color: #fe4a49

</style>
