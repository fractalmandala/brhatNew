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
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/2ndrow2ndfire.webp')"
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
							<span style="color: #D47915"> रस निष्पत्ति</span>
						</h4>
						<h5 class="hindiadobe">
							यह कार्यक्रम मुख्यतः सौंदर्य की अनुभूति के लिए बनाया गया है और दर्शकों को एक रसिक 
							और एक नागरिक की भाँती सौन्दर्यानुभूति कराना ही इसका परम लक्ष्य है|
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
							<span style="color: #D47915">संस्कृतगम्य हिंदी</span> की पुनर्स्थापना
						</h4>
						<h5 class="hindiadobe">
							​हिंदी की अभिव्यक्ति में संस्कृत के शब्द और सिद्धांतों की पुनर्स्थापना स्वर्णांजलि का दूसरा लक्ष्य है|
						</h5>
					</div>
				{/if}
			</div>
		</div>

		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/svo4.webp')"
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
							हिंदी साहित्य और भारतीय कला को <span style="color: #D47915">हिन्दू दृष्टि से देखना</span>
						</h4>
						<h5 class="hindiadobe">
							साहित्य, कला, नाट्य, वास्तु, शिल्प और सिनेमा का हिन्दू दृष्टि से पुनर्वलोकन जिससे कि इन सभी विषयों 
							का आंकलन हिन्दू दर्शन और दृष्टि में कैसा हो हमारे दर्शकों को पता लग सके|
						</h5>
					</div>
				{/if}
			</div>
		</div>

		<div
			class="acco-column back"
			style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/16svarnanjali/web/onlyganny.webp')"
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
							सौंदर्य और ज्ञान की <span style="color: #D47915">दृष्टि का उदय करना</span>
						</h4>
						<h5 class="hindiadobe">
							कला मानव जीवन के सबसे महत्वपूर्ण आयामों में से एक है|स्वर्णांजलि का अंतिम रंग लक्ष्य 
							होगा दर्शकों को कला के माध्यम से वैयक्तिक परन्तु प्रेरक अनुभूति कराना|
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
