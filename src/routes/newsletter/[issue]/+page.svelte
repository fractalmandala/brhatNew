<script lang="ts">
	import { onMount } from 'svelte';
	import { themeMode, breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import Social from '$lib/components/Social.svelte';
	import Header from '$lib/components/NewsHead.svelte';
	import { newsletterItems } from '$lib/utils/supapulls';
	export let data;

	let issueselector = data.issueno;
	let newsitems: any;

	onMount(async () => {
		newsitems = await newsletterItems(issueselector);
	});
</script>

<Header>
	<small slot="currentissue" class="sm12">
		Current Issue: Vol.{data.issueno} | {data.datefrom} - {data.dateto}
	</small>
</Header>

<div
	class="mainletter"
	class:light={$themeMode}
	class:dark={!$themeMode}
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-column rowgap200 side">
		<Social />
		<button class="genbutton"> Subscribe </button>
	</div>
	<div class="main">
		<div class="glass-bottom m-bot-32 ta-r stripp">
			<h6 class="thin">Bṛhat Fortnightly Dispatch Issue {data.issueno}</h6>
		</div>
		<div class="rta-column itemarea">
			{#if newsitems && newsitems.length > 0}
				{#each newsitems as item}
					<div class="rta-row between singleitem glass-bottom p-bot-32 m-bot-32">
						<div class="rta-column w64">
							{#if item.tag}
								<div class="tagger" style="background: {item.color}">{item.tag}</div>
							{/if}
							<h4 class="bord-bot p-bot-8">{item.header}</h4>
							<pre>
								{item.content}
							</pre>
							{#if item.link}
								<a href={item.link} target="_blank" rel="noreferrer">
									<button class="newbutton"> Visit </button>
								</a>
							{/if}
						</div>
						<div class="rta-image w32 height-40">
							<img src={item.image} alt="heroimage" />
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.tagger
	font-family: 'Authentic Sans', sans-serif
	text-transform: uppercase
	font-size: 12px
	color: white
	width: max-content
	max-width: 100%
	padding: 2px 6px
	margin-bottom: 12px

h6
	color: var(--themer)
	font-size: 16px
	padding-bottom: 8px

small.sm12
	font-family: 'Authentic Sans', sans-serif
	font-size: 10px

.mainletter
	min-height: 100vh
	display: grid
	grid-auto-flow: row
	.side
		grid-area: side
	.main
		grid-area: main

.levelzero.mainletter, .levelone.mainletter
	grid-template-columns: 200px 1fr
	grid-template-areas: "side main"
	padding-left: 32px
	padding-right: 32px
	align-items: stretch
	.side
		height: 100vh
		border-right: 1px solid var(--forline)
		padding-top: 96px
		padding-right: 32px
		position: sticky
		top: 0
	.main
		min-height: 100vh
		padding-top: 96px
		padding-left: 64px
		padding-bottom: 96px

.leveltwo.mainletter
	grid-template-columns: 1fr
	grid-template-areas: "side" "main"
	padding-left: 16px
	padding-right: 16px
	.side
		height: 32px
		border-bottom: 1px solid var(--forline)
		padding-top: 72px
	.main
		min-height: 100vh
		padding-top: 32px
		.stripp
			display: none
	
.mainletter
	h4
		color: var(--opposite)
		font-weight: bold

.dark
	.singleitem
		background-color: hsla(0,0%,9%,1)
		background-image: radial-gradient(at 1% 0%, hsla(0,0%,9%,1) 0px, transparent 50%), radial-gradient(at 99% 97%, hsla(0,81%,14%,1) 0px, transparent 50%)

.light
	.singleitem
		background-color:hsla(0,0%,100%,1)
		background-image: radial-gradient(at 1% 0%, hsla(0,0%,100%,1) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(0,100%,54%,1) 0px, transparent 50%)
	

</style>
