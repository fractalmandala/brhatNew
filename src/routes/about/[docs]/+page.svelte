<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { mandalaAll } from '$lib/utils/localpulls';
	import { metaTitle, metaDescription, metaUrl, metaImage, metaType } from '$lib/stores/metastores';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';

	let fractals: any;
	let wide: number;
	let mobileView: boolean = false;
	export let data;

	$metaUrl = $page.url.pathname;
	$metaTitle = data.title;
	$metaDescription = data.about;
	$metaType = 'webpage';

	$: if (wide <= 1023) {
		mobileView = true;
	} else {
		mobileView = false;
	}

	onMount(async () => {
		$metaUrl = $page.url.pathname;
		$metaTitle = data.title;
		$metaDescription = data.about;
		fractals = await mandalaAll();
	});
</script>

<svelte:window bind:innerWidth={wide} />

<div
	class="container-blog outer-box limit"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="svgbox rta-column xcenter">
		<svg
			width="210"
			height="126"
			viewBox="0 0 210 126"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M101.091 105.925C101.104 105.913 101.117 105.901 101.13 105.889C101.141 105.879 101.153 105.868 101.164 105.858C101.186 105.838 101.208 105.817 101.23 105.797C101.184 105.755 101.138 105.712 101.091 105.67C83.0197 104.639 66.6016 97.4177 53.9162 86.0891C34.6891 85.2513 15.2003 91.8207 0.0751953 105.797C15.2003 119.774 34.6891 126.343 53.9163 125.505C66.6017 114.177 83.0197 106.955 101.091 105.925Z"
				fill="#FE4A49"
			/>
			<path
				d="M82.8982 56.2147C69.979 41.8586 51.6831 32.6048 31.2598 31.7627C32.0865 52.5659 41.1714 71.202 55.2654 84.3615C72.1185 85.3488 88.7144 91.9399 102.132 104.135C102.194 104.138 102.256 104.14 102.318 104.143C102.318 104.127 102.317 104.112 102.317 104.096C102.315 104.048 102.313 104.001 102.311 103.953C90.3382 90.2859 83.8674 73.3813 82.8982 56.2147Z"
				fill="#FE4A49"
			/>
			<path
				d="M104.961 100.976C105.973 82.9626 113.064 66.5973 124.189 53.9527C125.011 34.7873 118.56 15.3612 104.836 0.284668C91.1111 15.3612 84.6602 34.7873 85.4829 53.9526C96.6074 66.5973 103.699 82.9627 104.711 100.976C104.752 101.022 104.794 101.068 104.836 101.114C104.85 101.098 104.865 101.082 104.88 101.066C104.907 101.036 104.934 101.006 104.961 100.976Z"
				fill="#FE4A49"
			/>
			<path
				d="M154.463 84.4052C168.64 71.2347 177.778 52.5831 178.609 31.7627C158.066 32.6055 139.663 41.867 126.668 56.235C125.693 73.4159 119.185 90.3345 107.142 104.013C107.141 104.047 107.139 104.082 107.138 104.117C107.137 104.134 107.136 104.151 107.136 104.168C107.135 104.179 107.135 104.191 107.134 104.203C107.197 104.2 107.259 104.198 107.322 104.195C120.818 91.9898 137.511 85.3932 154.463 84.4052Z"
				fill="#FE4A49"
			/>
			<path
				d="M108.46 105.469C108.413 105.512 108.367 105.554 108.321 105.597C108.367 105.639 108.413 105.682 108.46 105.724C126.531 106.755 142.949 113.976 155.635 125.305C174.862 126.142 194.351 119.573 209.476 105.597C194.351 91.6202 174.862 85.0509 155.635 85.8887C142.949 97.2173 126.531 104.439 108.46 105.469Z"
				fill="#FE4A49"
			/>
		</svg>
	</div>
	<h2 class="p-top-64 p-bot-32 glass-bottom ta-c-d">
		{data.title}
	</h2>
	<div class="in-blog p-top-64 p-bot-64">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="sass">

=animate-path($i)
	path:nth-child(#{$i})
		animation: fill-color 16s linear infinite
		animation-delay: 16s / 5 * ($i - 1)
		fill: #878787

.svgbox
	svg
		object-fit: contain
		@for $i from 1 through 5
			+animate-path($i)
	@media screen and (min-width: 1024px)
		svg
			width: 50%
			height: 80px
	@media screen and (max-width: 1023px)
		padding-top: 64px
		svg
			width: 50%
			height: 40px

@keyframes fill-color
	0%
		fill: #878787
	100%
		fill: #fe4a49


.container-blog
	@media screen and (min-width: 769px)
		padding-top: 128px
		display: flex
		flex-direction: column
		align-items: center

.levelzero
	.in-blog, .svgbox
		width: 680px

.levelone
	.in-blog, .svgbox
		width: 680px


</style>
