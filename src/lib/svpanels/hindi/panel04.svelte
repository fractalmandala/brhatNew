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
	<h3 class="hindiadobe">हमारे उद्देश्य</h3>
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
							<span style="color: #D47915"> सौंदर्यबोध</span>
						</h4>
						<h5 class="hindiadobe">
							सौन्दर्यानुभूति इस श्रृंखला का प्राथमिक उद्देश्य है।  दर्शक एक रसिक और एक नागरिक के
							रूप में रसानुभूति कर पायें।
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
							<span style="color: #D47915">संस्कृतनिष्ठ हिंदी </span>का पुनर्स्थापन
						</h4>
						<h5 class="hindiadobe">
							​हिंदी भाषा के चित्त में पुनः संस्कृत को स्थापित करना  ​जिससे वह फ़ारसी, अरबी एवं
							तुर्की शब्दों से मुक्त हो और  ​धार्मिक जागरण का माध्यम बन सके
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
							हिंदी साहित्य, कला, नाट्य, शिल्प एवं वास्तु को <span style="color: #D47915"
								>हिन्दू दृष्टिकोण
							</span>से देखने की क्षमता विकसित करना
						</h4>
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
							जीवन में <span style="color: #D47915">सौंदर्य से परिपूर्ण </span> करना
						</h4>
						<h5 class="hindiadobe">
							मानव जीवन की समस्याओं को हिन्दू सौंदर्य मूल्य के दृष्टिकोण से देखना जो सभी को  आशावान
							एवं उन्नत बनाने में सहायक हो।
						</h5>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="sass">

h3
	margin: 0


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
