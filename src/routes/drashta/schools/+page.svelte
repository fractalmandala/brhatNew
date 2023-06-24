<script lang="ts">
	import { onMount } from 'svelte';
	import autoAnimate from '@formkit/auto-animate';
	import { page } from '$app/stores';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { fetchDarshanas, fetchDrashtas } from '$lib/utils/supapulls';
	import ParallaxImage from '$lib/components/ParallaxImage.svelte';
	let darshanas: any;
	let drashtas: any;
	let selectedDrashta: boolean[] = Array().fill(false);

	$metaUrl = '/drashta/schools';
	$metaTitle = 'Schools of Thought';
	$metaDescription = 'At Bṛhat Draṣṭā';
	$metaImage =
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp';
	$metaType = 'webpage';

	function toggleGenre(index: number) {
		selectedDrashta[index] = !selectedDrashta[index];
		for (let i = 0; i < selectedDrashta.length; i++) {
			if (i !== index && selectedDrashta[i] == true) {
				selectedDrashta[i] = false;
			}
		}
	}

	$: anyDrashtaOpen = selectedDrashta.some((item: any) => item);

	onMount(async () => {
		darshanas = await fetchDarshanas();
		drashtas = await fetchDrashtas();
	});
</script>

<div class="x0">
	<ParallaxImage
		--parallax="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp')"
		--parallaxresp="url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/schoolsofthought.webp')"
	>
		<div class="screen typ pads">
			<h1>Schools of Thought</h1>
		</div>
	</ParallaxImage>
</div>

<div class="rta-column minH outer-box limit ycenter">
	<div class="rta-column rowgap600">
		<h5 class="ta-c-d serif">
			At Bṛhat, we set big goals. And to achieve them we need to build on the foundation built by
			our great sages and scholars. We draw our vitality from some very important and select
			‘Schools of Thought’ which define our identity, inform our views, and guide our actions. These
			schools of thought come together in the ways in which we think and create and in the ways we
			seek to guide policy to culture. We seek to forge a unique path of culture-conducive policy in
			Bhāratavarṣa by building on the inspiration from these schools.<br /><br />These schools are:
		</h5>
		<div class="rta-grid grid3 colgap400 rowgap400">
			{#if darshanas && darshanas.length > 0}
				{#each darshanas as item}
					<div class="rta-column">
						<h6 class="ta-c-d">{item.name}</h6>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<div class="rta-column outer-box rowgap600 limit">
	<div class="rta-column rowgap100 p-top-32 bord-top p-bot-32 bord-bot">
		<h3 class="ta-c-d">Draṣṭās</h3>
		<p class="ta-c-d">Click on Draṣṭā names to expand.</p>
	</div>
	<div
		class="rta-grid grid4 colgap400 rowgap400 p-bot-64"
		class:calibrated={anyDrashtaOpen}
		use:autoAnimate
	>
		{#if drashtas && drashtas.length > 0}
			{#each drashtas as item, i}
				{#if selectedDrashta[i]}
					<div
						class="rta-column rowgap200 opentab point"
						on:click={() => toggleGenre(i)}
						on:keydown={() => toggleGenre(i)}
					>
						<h6 class="tt-c">{item.name}</h6>
						<p class="serif">{item.content}</p>
					</div>
				{:else}
					<div class="rta-column" on:click={() => toggleGenre(i)} on:keydown={() => toggleGenre(i)}>
						<h6 class="ta-c-d tt-c point hover-blue">{item.name}</h6>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.hover-blue
	transition: 0.08s
	&:hover
		color: #0170B9

.serif
	font-family: 'Adobe Devanagari', serif

p.serif
	font-size: 20px

.x0
	.screen
		height: 100%
		background: rgba(0,0,0,0.88)
		display: flex
		align-items: center
		justify-content: center
	@media screen and (min-width: 1024px)
		height: 100vh
		overflow: hidden
	@media screen and (max-width: 1023px)
		height: 60vh
		padding-top: 64px
		overflow: hidden
		h1
			line-height: 1.2

.grid4
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-areas: "."


.grid4.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab" ". . . ."
		grid-template-rows: auto
		align-items: start
		align-content: start
		.opentab
			grid-area: opentab
			border-bottom: 1px solid var(--borderline)
			padding-bottom: 16px

.screen.typ
	h1
		color: white


</style>
