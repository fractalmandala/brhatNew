<script lang="ts">
	import Shell from '$lib/components/PageShell.svelte';
	import { scale } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { reveal, defaultFullBox } from '$lib/reveal/exportReveal';

	let isOpen = Array(32).fill(false);
	let i: number;
	let fake = false;

	defaultFullBox({
		transition: 'fly',
		y: 120,
		opacity: 0,
		duration: 300
	});

	function fauxfake() {
		fake = !fake;
	}

	function toggleOpen(index: number) {
		isOpen[index] = !isOpen[index];
		for (let i = 0; i < isOpen.length; i++) {
			if (i !== index && isOpen[i] === true) {
				isOpen[i] = false;
			}
		}
	}

	function setImage(image: number) {
		i = image;
	}

	$metaUrl = 'https://www.brhat.in/aryavarta/itihasabharatadharma';
	$metaTitle = `Itihāsa, Bhārata, Dharma - Scrolls of Āryavarta`;
	$metaDescription =
		'A tie-in chapter with our video series Svarṇāñjali, exploring the aesthetics of Bhārata that once was.';
	$metaImage =
		'https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/1.webp';
	$metaType = 'webpage';
</script>

<Shell
	metaTitle={$metaTitle}
	metaDescription={$metaDescription}
	metaImage={$metaImage}
	metaUrl={$metaUrl}
>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>नगर और उनके नागरिक</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Nagaras and their Nāgarikas
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(1)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/1.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(2)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/2.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(3)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/3.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(4)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/4.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>नागरिकता</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Nāgarikatā
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(5)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/5.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(6)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/6.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(7)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/7.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(8)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/8.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>कला और कारीगरी</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Kalā and Kārīgarī
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(9)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/9.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(10)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/10.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(11)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/11.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(12)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/12.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>क्षेत्र और उत्सव</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Kṣetra and Utsava
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(13)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/13.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(14)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/14.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(15)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/15.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(16)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/16.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>नदी, वृक्ष और पशु</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Nadī, Vṛkṣa and Paśu
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(17)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/17.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(18)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/18.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(19)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/19.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(20)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/20.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>कष्ट, दुख, युद्ध</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Kaṣṭa, Dukha and Yuddha
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(21)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/21.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(22)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/22.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(23)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/23.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(24)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/24.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>इतिहास, भारत और धर्म</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Itihāsa, Bhārata and Dharma
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(25)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/25.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(26)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/26.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(27)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/27.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(28)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/28.webp"
				alt="4"
			/>
		</div>
	</section>
	<section class="rta-grid grid2 left0 rowgap400 colgap400 min100 p-bot-64 radii">
		<div class="rta-column rowgap50">
			<h5 class="title" use:reveal>देव, देवी, भगवान्</h5>
			<p class="small soft" use:reveal={{ delay: 100, duration: 300, transition: 'fade' }}>
				Deva, Devī and Bhagavān
			</p>
		</div>
		<div class="rta-grid grid2 colgap400 rowgap400">
			<img
				on:click={() => setImage(29)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 0, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/29.webp"
				alt="1"
			/>
			<img
				on:click={() => setImage(30)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 50, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/30.webp"
				alt="2"
			/>
			<img
				on:click={() => setImage(31)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 100, duration: 200, transition: 'fade' }}
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/31.webp"
				alt="3"
			/>
			<img
				on:click={() => setImage(32)}
				on:keydown={fauxfake}
				use:reveal={{ delay: 150, duration: 200, transition: 'fade' }}
				class="alt"
				src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/32.webp"
				alt="4"
			/>
		</div>
	</section>
	<div class="rta-column rowgap400 p-top-32 bord-top" id="nexter">
		<h5 class="ta-c title"><a href="/aryavarta/sutaandsuda">Next - Sūta and Sudā</a></h5>
	</div>
</Shell>

{#if i >= 1}
	<div
		class="overlay"
		on:click={() => setImage(0)}
		on:keydown={fauxfake}
		transition:scale={{ easing: quadIn, duration: 300 }}
	>
		<img
			src="https://wganhlzrylmkvvaoalco.supabase.co/storage/v1/object/public/images/utsav/{i}.webp"
			alt="1"
		/>
	</div>
{/if}

<style lang="sass">

#nexter
	h5
		&:hover
			a
				color: #fe4a49

.radii
	h5.title
		&:hover
			text-decoration: none

.overlay
	position: fixed
	z-index: 500
	top: 0
	left: 0
	height: 100vh
	width: 100vw
	padding: 64px
	img
		border-radius: 16px
	@media screen and (max-width: 768px)
		padding: 128px 24px
		backdrop-filter: blur(4px)
		img
			height: 28vh
			border-radius: 5px

.radii
	padding-top: 128px
	border-bottom: 1px solid var(--contraster)
	img
		border-radius: 5px
	@media screen and (max-width: 768px)
		align-content: center
		min-height: 100vh
		border-bottom: 1px solid var(--contraster)
		padding-top: 32px
		img
			height: 16vh
			width: 64%
		img.alt
			margin-left: 36%

</style>
