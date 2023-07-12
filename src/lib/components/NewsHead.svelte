<script lang="ts">
	import { onMount } from 'svelte';
	import { latestIssue } from '$lib/utils/supapulls';
	import { themeMode } from '$lib/stores/globalstores';
	import Social from '$lib/components/Social.svelte';
	import { authState } from '$lib/stores/globalstores';
	import { clickOutsideAction } from '$lib/utils/clickoutside';

	let y: number;
	let height: number;
	let isInvisible = false;
	let mouseY: number;
	let latestScrollY: number;
	let changer = false;
	let current: any;
	let letterTitle = 'Bṛhatadya';
	let signinWarn = false;

	function toggleWarn() {
		signinWarn = !signinWarn;
	}

	$: {
		if (y > 100 && y > latestScrollY) {
			isInvisible = true;
		}
		latestScrollY = y;
	}

	$: if (y >= 600) {
		changer = true;
	} else {
		changer = false;
	}

	onMount(() => {
		(async () => {
			current = await latestIssue();
		})();

		const handleMouse = (event: { clientY: number }) => {
			mouseY = event.clientY;
			if (mouseY <= 128) {
				isInvisible = false;
			}
		};

		window.addEventListener('mousemove', handleMouse);

		return () => {
			window.removeEventListener('mousemove', handleMouse);
		};
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div
	class="appheader"
	class:hiddenHeader={isInvisible}
	class:light={$themeMode}
	class:dark={!$themeMode}
>
	<div class="stripone">p</div>
	<div class="bigg p-top-16">
		<a href="/newsletter" class="pagetitle">
			{#each letterTitle.split('') as char, i}
				<span class="text-animation" style="animation-delay: {i * 0.04}s">{char}</span>
			{/each}
		</a>
		<div class="rta-row xcenter-d xcenter-m ycenter colgap100">
			<div class="thinline" />
			<div class="subtitle">Fortnightly Updates from the Culture Engine</div>
			<div class="thinline" />
		</div>
	</div>
	<div class="midrow">
		<div class="null partleft">
			<p><a href="/">Bṛhat Home</a></p>
		</div>
		<div class="isstagnull partcent">
			{#if current && current.length > 0}
				{#each current as item}
					{#if $authState}
						<p class="tt-u isstag">
							<b><a href="/newsletter/{item.issueno}">{item.header}</a></b>
						</p>
					{:else}
						<button class="blank-button null" on:click={toggleWarn}>
							<p class="tt-u isstag">
								<b>{item.header}</b>
							</p>
						</button>
					{/if}
				{/each}
			{/if}
		</div>
		<div class="partright xend rta-row ycenter colgap200">
			<Social />
			<slot name="allbuttons" />
		</div>
	</div>
</div>
{#if signinWarn}
	<div class="rta-modaloverlay">
		<div class="rta-modalinlay" use:clickOutsideAction on:clickOutside={toggleWarn}>
			<h6 class="nohemi" style="color: var(--background)">
				Please sign up or sign in to read the Issue.
			</h6>
		</div>
	</div>
{/if}

<style lang="sass">

.partleft
	p
		color: var(--opposite)

.isstagnull
	padding: 2px 4px
	border-radius: 2px
	p
		color: var(--opposite)
	
.appheader
	display: grid
	grid-auto-flow: row
	position: fixed
	z-index: 1000
	width: 100vw
	top: 0
	transition: 0.65s ease
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		grid-template-areas: "stripone" "bigg" "midrow"
		align-content: center
		align-items: center
		gap: 0 12px
		border-bottom: 1px solid #272727
		.stripone
			grid-area: stripone
			height: 64px
		.bigg
			grid-area: bigg
			display: flex
			flex-direction: column
			margin-bottom: 32px
			.pagetitle
				text-align: center
				font-size: 120px
				color: var(--opposite)
			.subtitle
				text-align: center
				color: var(--themer)
				font-size: 12px
			.thinline
				height: 1px
				width: 32px
				background: var(--opposite)
		.midrow
			display: flex
			flex-direction: row
			justify-content: space-between
			align-items: center
			border-top: 1px solid #272727
			column-gap: 16px
			padding-top: 8px
			padding-bottom: 8px
			padding-left: 32px
			padding-right: 32px
			.partleft, .partright
				min-width: 160px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "bigg" "midrow"
		align-content: center
		align-items: center
		min-height: 48px
		.bigg
			grid-area: bigg
			display: flex
			flex-direction: column
			margin-bottom: 32px
			.pagetitle
				text-align: center
				font-size: 56px
				color: var(--opposite)
			.subtitle
				text-align: center
				color: var(--themer)
				font-size: 12px
			.thinline
				height: 1px
				width: 32px
				background: var(--opposite)
		.midrow
			display: flex
			flex-direction: row
			justify-content: space-between
			align-items: center
			border-top: 1px solid var(--opposite)
			column-gap: 16px
			padding-top: 4px
			padding-bottom: 4px
			padding-left: 16px
			padding-right: 16px
			.partleft, .partright
				min-width: 120px

.appheader.light
	background: #FFFFFF
	.stripone
		border-bottom: 16px solid #171717

.appheader.dark
	background: #171717
	.stripone
		border-bottom: 16px solid #272727

.appheader.hiddenHeader
	@media screen and (min-width: 1024px)
		transform: translateY(-264px)
	@media screen and (max-width: 1023px)
		transform: translateY(-128px)

.midrow
	p, p a
		margin: 0
		padding: 0
		font-size: 14px

.pagetitle
	font-weight: 700
	&:hover
		.text-animation
			animation: colorchange 2s infinite forwards

@keyframes colorchange
	0%
		color: var(--opposite)
	50%
		color: #fe4a49
	100%
		color: var(--opposite)

</style>
