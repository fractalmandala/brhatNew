<script lang="ts">

	import { onMount } from 'svelte'
	import { entireRamayana } from '$lib/utils/synaptic'

	let lines:any
	let upperlimit:any = 5
	let lowerlimit:any = 1
	let fake:boolean = false
	let showPreviousButton:boolean = false
	let showNextButton:boolean = true

	$: if ( lowerlimit > 4 ) {
		showPreviousButton = true
	} else {
		showPreviousButton = false
	}

	$: if ( lowerlimit === 39755 ) {
		showNextButton = false
	} else {
		showNextButton = true
	}

		
	function fauxfake(){
		fake = !fake
	}

	function nextLimit(){
		lowerlimit += 5
		upperlimit += 5
		entireRamayanaNext()
	}

	function prevLimit(){
		lowerlimit -= 5
		upperlimit -= 5
		entireRamayanaNext()
	}

	async function entireRamayanaNext(){
		try {
			lines = await entireRamayana(upperlimit, lowerlimit)
		} catch (error) {
			console.error('fail', error)
		}
	}

	onMount(async() => {
		lines = await entireRamayana(upperlimit, lowerlimit)
	})

</script>

<div class="type">
	<div class="plain-one x3 pads">
		{#if lines && lines.length > 0}
			{#each lines as item, i}
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
	<div class="plain-one x4 pads">
		<div class="boxr">
			{#if showNextButton}
				<div class="pagin" on:click={nextLimit} on:keydown={fauxfake}>
					NEXT
				</div>
			{/if}
			{#if showPreviousButton}
				<div class="pagin" id="second" on:click={prevLimit} on:keydown={fauxfake}>
					PREV
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="sass">

.plain-one.x3
	row-gap: 16px
	border-top: 1px solid #ececec
	padding-top: 32px

.x4
	padding-top: 32px
	padding-bottom: 32px
	.boxr
		gap: 16px

.pagin
	background: var(--aryan)
	color: white
	padding: 4px 16px
	font-size: 14px
	cursor: pointer
	transform-origin: center center
	transition: var(--snap)
	&:hover
		transform: scale(0.9)

#second
	opacity: 0.8

</style>