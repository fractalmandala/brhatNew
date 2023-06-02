<script lang="ts">
	import { fly } from 'svelte/transition';
	let isOn = Array(4).fill(false);

	function toggleOn(index: number) {
		isOn[index] = !isOn[index];
		for (let i = 0; i < isOn.length; i++) {
			if (i !== index && isOn[i] === true) {
				isOn[i] = false;
			}
		}
	}
</script>

<div class="rta-column rowgap200 minH p-top-64 outer-box">
	<h3 class="hindiadobe p-bot-32">Our Aims</h3>
	<div class="rta-row row-of-acco">
		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/womanmedi.webp')"
		>
			<div
				class="screen rta-column"
				on:mouseenter={() => toggleOn(1)}
				on:mouseleave={() => toggleOn(1)}
			>
				{#if isOn[1]}
					<div
						class="box"
						in:fly={{ duration: 600, delay: 200, y: 400 }}
						out:fly={{ delay: 0, duration: 100, y: 400 }}
					>
						<h4 class="hindiadobe">
							the Creation of <span style="color: #D47915">Beauty</span>
						</h4>
						<h5 class="hindiadobe">
							is the primary goal of the series. It wants its audience to experience rasa like a
							rasika and a nāgarika
						</h5>
					</div>
				{/if}
			</div>
		</div>

		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/monkwriting.webp')"
		>
			<div
				class="screen rta-column"
				on:mouseenter={() => toggleOn(2)}
				on:mouseleave={() => toggleOn(2)}
			>
				{#if isOn[2]}
					<div
						class="box"
						in:fly={{ duration: 600, delay: 200, y: 400 }}
						out:fly={{ delay: 0, duration: 100, y: 400 }}
					>
						<h4 class="hindiadobe">
							Reestablishment of <span style="color: #D47915">Sanskṛta Niṣṭha Hindī</span>
						</h4>
						<h5 class="hindiadobe">
							our second goal is to re-infuse the spirit of Sanskṛta into Hindī language and to free
							it from FATE words, in order to bring dhārmic awareness.
						</h5>
					</div>
				{/if}
			</div>
		</div>

		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/praying.webp')"
		>
			<div
				class="screen rta-column"
				on:mouseenter={() => toggleOn(3)}
				on:mouseleave={() => toggleOn(3)}
			>
				{#if isOn[3]}
					<div
						class="box"
						in:fly={{ duration: 600, delay: 200, y: 400 }}
						out:fly={{ delay: 0, duration: 100, y: 400 }}
					>
						<h4 class="hindiadobe">
							Hindī literature and Indian arts from a <span style="color: #D47915"
								>Hindū perspective</span
							>
						</h4>
						<h5 class="hindiadobe">
							the third goal of Svarṇānjali is to revisit literature, arts, drama, architecture,
							sculpture and cinema from a deep Hindū perspective.
						</h5>
					</div>
				{/if}
			</div>
		</div>

		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/painting.webp')"
		>
			<div
				class="screen rta-column"
				on:mouseenter={() => toggleOn(4)}
				on:mouseleave={() => toggleOn(4)}
			>
				{#if isOn[4]}
					<div
						class="box"
						in:fly={{ duration: 600, delay: 200, y: 400 }}
						out:fly={{ delay: 0, duration: 100, y: 400 }}
					>
						<h4 class="hindiadobe">
							to <span style="color: #D47915">Aestheticize</span> Life
						</h4>
						<h5 class="hindiadobe">
							the last goal is to discuss individual problems and perspectives from the eye of Hindū
							aesthetics and in the process give them an elevating and uplifting experience which
							will also be cathartic.
						</h5>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="sass">

.box
	display: flex
	flex-direction: column
	gap: 12px
	padding: 16px
	background: rgba(0,0,0,0.7)

.screen
	background: rgba(0,0,0,0.7)
	&:hover
		background: rgba(0,0,0,0.1)

h3
	text-align: left
	margin: 0


h4
	color: white

h5
	color: white

.rta-column
	gap: 16px
	justify-content: center
	text-align: center

</style>
