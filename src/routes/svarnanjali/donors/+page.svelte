<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import SVLogo from '$lib/logos/Svarnanjali2.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Youtuber from '$lib/components/Youtuber.svelte';
	import { metaTitle, metaDescription, metaUrl, metaImage } from '$lib/stores/metastores';

	$metaTitle = 'Svarṇāñjali';
	$metaDescription =
		'Svarṇāñjali is a weekly video series to discuss literature, arts, drama, architecture, sculpture, cinema and other fine arts from the point of view of rasikā, in Sanskṛta Niṣṭha Hindi.';
	$metaUrl = 'https://www.brhat.in/svarnanjali/donors';
	$metaImage = 'https://www.brhat.in/images/keys/ki-sv.png';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-column rowgap400 xcenter">
		<div class="logobox rta-column xcenter">
			<SVLogo />
		</div>
		<div class="contains-text rta-column rowgap300">
			<blockquote>
				Do you remember a lullaby in your mother tongue -<br />
				A song in a language your mother had sung,<br />
				The language that had words for your joy and pain,<br />
				Through which you could summon the summer rain,<br />
				The language that had always cradled you,<br />
				The one that could carry the old and new?<br />
			</blockquote>
			<p>
				Spare five minutes from your day. Observe how many non-native words you use in your
				communication. Can you try to consciously use only the words from your mother-tongue? Is it
				difficult? Do you struggle to remember words you may have once known? Or, do you realise
				that you don’t even know if those words exist? Do you feel a vacuum?
			</p>
			<h6>
				The colonizers colonize not just land, but also of the minds of people through a gradual
				epistemicide. The colonized lose their land, culture, and the ways of knowing. While the
				lands may become free, the minds take time.
			</h6>
			<p>
				<b>
					Language is not just a means of communication; it is the carrier of culture and
					civilization.</b
				> It contains the seeds of our history, the imprint of our philosophy, and the drape of our identity.
				Language reflects a culture's aspirations, its sense of duty and morality. It is at the root
				of the thought system and the creative agency of a people.
			</p>
			<img
				src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/exceptcentral.webp"
				alt="svarnanjali key visual"
				class="svkeyv"
			/>
			<p>
				One of the primary ways in which the colonizers impose their power is by replacing the
				languages of the natives with their own. What happens when the seeds of our languages change
				and are replaced by an alien seed? The Puruṣa principle, the Śiva tattva of our languages,
				changes - we as a people, as a civilization, change. Losing a language is not just losing a
				medium, but losing a way of life.
			</p>
			<p>
				What compounds this in our country in contemporary times is the issue of politicization of
				language in the name of democracy. This leads to the loss of the vital spirit of our land,
				of its culture and its people.
			</p>
			<p>
				However, there is a ray of hope. Hindu consciousness has slowly started resurfacing. The
				spark of Hindu renaissance is now turning into a burning flame. We are putting the Hindu eye
				to philosophy, society and politics. Time has come now for this Hindu consciousness to break
				into the realm of arts and literature.
			</p>
			<p>
				It is this belief in the power of language that has led to the genesis of Svarṇāñjali, our
				flagship fortnightly series, which looks at literature, art and culture through the lens of
				Hindu Darśana, in Saṃskṛta-niṣṭha Hindi ( and subsequently in other regional languages) by a
				rasikā or a nāgarika - a cultural connoisseur. The goal is to bring the audience to
				<b>saundarya bodha</b>, a level of elevated pleasure, while leading them, at the same time,
				to the core principles of Hindu darśana, through the age-old Hindu tradition of
				story-telling.
			</p>
			<p>Here is what we aim to achieve through:</p>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<img
					class="iconimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon01.png"
					alt="any"
				/>
				<p>
					<b>Create beauty –</b> So that the audience can experience rasa like a rasikā and a nāgarika.
				</p>
			</div>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<img
					class="iconimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon02.png"
					alt="any"
				/>
				<p>
					<b>Reestablish Saṃskṛta Niṣṭha Hindi –</b> So that the spirit of Saṃskṛta is reinfused into
					Hindi language and it becomes free of FAT words, in order to bring dhārmika awareness.
				</p>
			</div>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<img
					class="iconimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon03.png"
					alt="any"
				/>
				<p>
					<b>Look at Hindi literature and Indian arts from a Hindu perspective -</b>So that we
					revisit literature, arts, drama, architecture, sculpture and cinema from a deep Hindu
					perspective.
				</p>
			</div>
			<div class="rta-column rowgap100 bord-bot p-bot-32">
				<img
					class="iconimage"
					src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/icon04.png"
					alt="any"
				/>
				<p>
					<b>Aestheticize life –</b> So that we gain the ability to discuss individual problems and perspectives
					from the eye of Hindu aesthetics and in the process give them an elevating and uplifting experience
					which is cathartic.
				</p>
			</div>
			<p>
				So far we have produced 10, forty-forty five minute long episodes, on some of the best works
				in Hindi literature across genres such historical fiction, play, epic poetry, biographical
				novel, etc and two works of Hindi cinema. The list includes:
			</p>
			<ul>
				<li>Ram ki Shakti Puja by Ramdhari Singh Dinkar</li>
				<li>Ashadh Ka Ek Din - Mohan Rakesh</li>
				<li>Mrignayani - Vrindavan Lal Verma</li>
				<li>Aaj Bhi Khare Hain Talaab - Anupam Mishr</li>
				<li>Antim Aranya - Nirmal Verma</li>
				<li>Panchvati - Banwari</li>
				<li>Do Aankhein Baarah Haath/ Seema</li>
				<li>Maanas Ka Hans - Amritlal Nagar</li>
			</ul>
			<p>
				With these texts and films as a backdrop, we discussed some of the central ideas of the
				Sanātana philosophy and life - the importance of knowing and defining the self and the
				other, lending creative expression in the service of the universal truth in order to create
				beauty and joy, meaning making as an antidote to nihilism of the postmodern world, the
				difference between a duty-based and a rights-based world, Dharma as the anchor for
				ecological preservation etc.
			</p>
		</div>
		<div class="rta-grid grid3 colgap400 rowgap300 videocontainer p-top-32 bord-top bord-bot">
			<div class="boxi rta-column rowgap100">
				<Youtuber youTubeId={'jZ6YddYWH9U'} />
				<p class="small ta-c">E1 - Saundaryabodha - Bhasha, Kalaa aur Nagarika</p>
			</div>
			<div class="boxi rta-column rowgap100">
				<Youtuber youTubeId={'weF2xsunKOs'} />
				<p class="small ta-c">E3 - Ashadh Ka Ek Din</p>
			</div>
			<div class="boxi rta-column rowgap100">
				<Youtuber youTubeId={'Zt3Cd2oYvXw'} />
				<p class="small ta-c">E5 - Aaj Bhi Khare Hain Talab</p>
			</div>
		</div>
		<div class="contains-text rta-column rowgap300">
			<p>
				To bring Svarṇāñjali to people and invoke in them a sense of belonging and longing for a
				civilizational anchor has been deeply fulfilling. A movement becomes successful when it
				moves from the political to the cultural. Some of the feedback we have received has been
				overwhelming, not just in its support but also in the <b
					>potential of this series to rewire our neural pathways, and in its ability to move people
					and their consciousness.</b
				>
			</p>
			<p>
				We are ready with another season of this series which includes some more timeless works from
				Hindi literature:
			</p>
			<ul>
				<li>Saket - Maithili Sharan Gupt</li>
				<li>Mahadevi Verma</li>
				<li>Shekhar Ek Jeevani - Agyeya</li>
				<li>Rashmirathi</li>
				<li>Ananmath</li>
				<li>Nandan</li>
				<li>Short Stories of Jainendra Kumar</li>
				<li>Raag Darbari</li>
				<li>Somnath</li>
				<li>Godaan</li>
			</ul>
			<p>
				<b
					>We discovered language so that we could tell stories, to ourselves and to each other, of
					ourselves and of each other.</b
				>Stories have the power to make individuals rise above their individual consciousness
				towards the universal consciousness. From stories developed identity and culture. So, why
				don’t we contribute to this cultural offering called Svarṇāñjali and participate in this
				grand story of Bhāratavarṣa!
			</p>
			<h6>Svarṇāñjali needs your blessings and support.</h6>
		</div>
	</section>
</Shell>

<style lang="sass">

.logobox
	height: 100vh
	@media screen and (min-width: 769px)
		padding-top: 240px
	@media screen and (max-width: 768px)
		padding-top: 120px

.svkeyv
	@media screen and (min-width: 769px)
		object-fit: contain
		height: 400px

blockquote
	border-left: 4px solid #D47915
	margin-left: 0
	padding-left: 16px
	line-height: 1.4
	@media screen and (max-width: 768px)
		margin-right: 0
		font-size: 16px

.videocontainer
	width: 100%
	height: 280px
	@media screen and (max-width: 768px)
		height: 100%
		.boxi
			height: 240px

.iconimage
	object-fit: contain
	height: 48px
	width: 48px
	margin-right: auto


</style>
