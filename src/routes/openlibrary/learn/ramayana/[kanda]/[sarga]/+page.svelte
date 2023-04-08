<script lang="ts">

	export let data
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { versesofRamayana } from '$lib/utils/synaptic'

	let url:any
	let kanda:any
	let verses:any
	let sarga:any

	onMount(async() => {
		url = $page.url.pathname
		kanda = url.substr(28,1)
		sarga = data.sarga
		verses = await versesofRamayana(kanda, sarga)
	})

</script>

<div class="x0 pads">
	<div class="boxr">
		<div class="chevicon">
			<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375L3.81916 7.5L10 1.7625Z" fill="#B7B7B7"/>
			</svg>
		</div>
		<div class="kandabox levelbox">
			<p>
				<a href="/openlibrary/learn/ramayana/{kanda}" target="_self">
					Kāṇḍa {kanda}
				</a>
			</p>
		</div>
		<div class="chevicon">
			<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375L3.81916 7.5L10 1.7625Z" fill="#B7B7B7"/>
			</svg>
		</div>
		<div class="sargabox levelbox">
			<p>Sarga {data.sarga}</p>
		</div>
	</div>
</div>
<div class="x1 pads">
	{#if verses && verses.length > 0}
		{#each verses as item}
			<div class="card-ramayana">
					<small style="text-transform: uppercase; color: #b7b7b7; font-size: 10px">{item.index}</small>
					<p style="font-family: 'Martel', serif;">
						<a href="/openlibrary/learn/ramayana/{item.kanda}/{item.sarga}/{item.verse}/{item.pada}" target="_self">
							<span style="font-weight: 600; font-size: 20px">{item.devanagari}</span><br><span style="font-family: 'Vazirmatn', sans-serif; font-size: 16px; color: #878787">{item.iast}</span>
						</a>
					</p>
			</div>
		{/each}
	{/if}
</div>

<style lang="sass">

.x0
	.boxr
		gap: 12px
		padding: 0 8px
		align-items: center
		.chevicon
			height: 15px
		p
			margin: 0
			line-height: 1
			text-transform: uppercase
		.levelbox
			padding: 8px 8px 4px 8px
			transition: var(--snap)
			&:hover
				p
					color: white
		.kandabox
			&:hover
				background: var(--aryan)
		.sargabox
			&:hover
				background: #474747

.x0
	.boxr
		@media screen and (max-width: 1023px)
			padding-top: 8px
			padding-bottom: 8px

.x1
	margin-top: 8px
	border-top: 1px solid #ececec
	padding-top: 16px
	display: flex
	flex-direction: column


</style>