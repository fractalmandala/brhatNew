<script lang="ts">
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
</script>

<div class="official" class:lzero={$breakZero} class:lone={$breakOne} class:ltwo={$breakTwo}>
	<div class="p-bot-32 rta-column rowgap200">
		<p>
			Tradition holds that the Ṛgvedic mantras are to be heard, not read. And while modernity allows
			us to view it as a "book" with "chapters," it is to our tradition a śruti- something to be
			heard. Accordingly, it descends to us thanks to an unbroken line of oral transmission that
			began with the original draṣṭās, thousands of years ago.
		</p>
		<p>
			Add to this that we read English-language translations, it becomes important to know that in
			doing so we engage with a text far removed from how it was intended. Further, no complete
			English translation exists that does justice to tradition and its interpretations. We possess
			at best the translations Shri Aurobindo left behind.
		</p>
		<p>
			Adding Shri Aurobindo's translations here, where they exist, is a work in progress. Short of
			that, we have elected to use the translations of Griffith and Basham. Neither are without
			their share of problematic interpretations, but of those available- including the most recent
			by Jamison-Brereton- they are on comparison the least egregious.
		</p>
		<p>
			For English works on the Vedas that are true to or representative of tradition, we recommend:
		</p>
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
			history, nor need distort the text for its conclusions, we see the works of Shri Srikant
			Talageri as epitomic. One could begin at
			<a href="https://www.brhat.in/openlibrary/books/rigvedahistoricalanalysis">
				Rigveda - A Historical Analysis.
			</a>
		</p>
	</div>
	<div class="pagesider">
		<p>p</p>
	</div>
</div>

<style lang="sass">

.official
	display: flex
	p
		line-height: 1.5
		color: var(--textone)
		a 
			color: var(--mand)

.official.lzero, .official.lone
	flex-direction: row

.official.lzero
	.pagesider
		width: 320px
		padding-left: 48px
	.rta-column
		width: calc(100% - 320px)
		border-right: 1px solid var(--contraster)
		padding-right: 64px

.official.lone
	.pagesider
		max-width: 240px
		min-width: 200px
		padding-left: 32px
	.rta-column
		max-width: calc(100% - 240px)
		min-width: calc(100% - 200px)
		border-right: 1px solid var(--contraster)
		padding-right: 48px

.official.ltwo
	flex-direction: column-reverse
	.pagesider
		width: 100%
		height: 40px
		border-bottom: 1px solid var(--contraster)
	.rta-column
		width: 100%

</style>
