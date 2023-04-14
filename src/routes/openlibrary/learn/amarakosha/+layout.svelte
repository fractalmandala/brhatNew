<script lang="ts">

	import { onMount } from 'svelte'
	import { vargaGroups, dbDictionary } from '$lib/utils/synaptic'
	let fake = false
	let vargas:any
	let words:any
	let word = ''
	let varga = ''

	function fauxfake(){
		fake = !fake
	}

	function selectVarga(newVarga:any){
		varga = newVarga
	}

	$: if ( varga ) {
		(async() => {
		vargas = await vargaGroups(varga)
		})()
	}

	onMount(async() => {
		vargas = await vargaGroups(varga)
	})

</script>

<div class="type">
	<div class="plain-one x1 pads">
		<h4 style="font-family: 'Old Standard TT', serif; font-weight: 700; letter-spacing: -2px">
			<a href="/openlibrary/learn/amarakosha">Amarakośaḥ</a>
		</h4>
	</div>
	<div class="gridof2 x2 pads">
		<div class="boxc left">
			<form class="boxr formsearch">
				<input type="text" placeholder="search Amarakośaḥ"/>
				<button class="bolbutton">Search</button>
			</form>
			<div class="boxc stripvargas">
				<h6>Vargas</h6>
				<div class="boxc">
					<p on:click={() => selectVarga('avyaya')} on:keydown={fauxfake} class="{varga === 'avyaya' ? 'intag' : ''}">avyaya</p>
					<p on:click={() => selectVarga('bhūmi')} on:keydown={fauxfake} class="{varga === 'bhūmi' ? 'intag' : ''}">bhūmi</p>
					<p on:click={() => selectVarga('bhūmi')} on:keydown={fauxfake} class="{varga === 'bhūmi' ? 'intag' : ''}">brahma</p>
					<p on:click={() => selectVarga('brahma')} on:keydown={fauxfake} class="{varga === 'brahma' ? 'intag' : ''}">dhī</p>
					<p on:click={() => selectVarga('dhī')} on:keydown={fauxfake} class="{varga === 'dhī' ? 'intag' : ''}">dig</p>
					<p on:click={() => selectVarga('kāla')} on:keydown={fauxfake} class="{varga === 'kāla' ? 'intag' : ''}">kāla</p>
					<p on:click={() => selectVarga('kṣatriya')} on:keydown={fauxfake} class="{varga === 'kṣatriya' ? 'intag' : ''}">kṣatriya</p>
					<p on:click={() => selectVarga('manuṣya')} on:keydown={fauxfake} class="{varga === 'manuṣya' ? 'intag' : ''}">manuṣya</p>
					<p on:click={() => selectVarga('nānārtha')} on:keydown={fauxfake} class="{varga === 'nānārtha' ? 'intag' : ''}">nānārtha</p>
					<p on:click={() => selectVarga('naraka')} on:keydown={fauxfake} class="{varga === 'naraka' ? 'intag' : ''}">naraka</p>
					<p on:click={() => selectVarga('nāṭya')} on:keydown={fauxfake} class="{varga === 'nāṭya' ? 'intag' : ''}">nāṭya</p>
					<p on:click={() => selectVarga('pātālabhogi')} on:keydown={fauxfake} class="{varga === 'pātālabhogi' ? 'intag' : ''}">pātālabhogi</p>
					<p on:click={() => selectVarga('pura')} on:keydown={fauxfake} class="{varga === 'pura' ? 'intag' : ''}">pura</p>
					<p on:click={() => selectVarga('śabdādi')} on:keydown={fauxfake} class="{varga === 'śabdādi' ? 'intag' : ''}">śabdādi</p>
					<p on:click={() => selectVarga('śaila')} on:keydown={fauxfake} class="{varga === 'śaila' ? 'intag' : ''}">śaila</p>
					<p on:click={() => selectVarga('saṅkīrṇa')} on:keydown={fauxfake} class="{varga === 'saṅkīrṇa' ? 'intag' : ''}">saṅkīrṇa</p>
					<p on:click={() => selectVarga('siṃhādi')} on:keydown={fauxfake} class="{varga === 'siṃhādi' ? 'intag' : ''}">siṃhādi</p>
					<p on:click={() => selectVarga('śūdra')} on:keydown={fauxfake} class="{varga === 'śūdra' ? 'intag' : ''}">śūdra</p>
					<p on:click={() => selectVarga('svarga')} on:keydown={fauxfake} class="{varga === 'svarga' ? 'intag' : ''}">svarga</p>
					<p on:click={() => selectVarga('vaiśya')} on:keydown={fauxfake} class="{varga === 'vaiśya' ? 'intag' : ''}">vaiśya</p>
					<p on:click={() => selectVarga('vanauṣadhi')} on:keydown={fauxfake} class="{varga === 'vanauṣadhi' ? 'intag' : ''}">vanauṣadhi</p>
					<p on:click={() => selectVarga('vanau��adhi')} on:keydown={fauxfake} class="{varga === 'vanau��adhi' ? 'intag' : ''}">vanau��adhi</p>
					<p on:click={() => selectVarga('varga')} on:keydown={fauxfake} class="{varga === 'varga' ? 'intag' : ''}">varga</p>
					<p on:click={() => selectVarga('vāri')} on:keydown={fauxfake} class="{varga === 'vāri' ? 'intag' : ''}">vāri</p>
					<p on:click={() => selectVarga('viśeṣyanighna')} on:keydown={fauxfake} class="{varga === 'viśeṣyanighna' ? 'intag' : ''}">viśeṣyanighna</p>
					<p on:click={() => selectVarga('vyoma')} on:keydown={fauxfake} class="{varga === 'vyoma' ? 'intag' : ''}">vyoma</p>
				</div>
			</div>
		</div>
		<div class="right">
			{#if vargas && vargas.length > 0}
				{#each vargas as item}
					<div class="boxc">
						<textarea bind:value={word} placeholder={item.word}/>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="x3">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.boxc
	textarea
		border: none
		outline: none

.stripvargas
	.boxc p
		padding: 4px
		cursor: pointer
		&:hover
			background: var(--aryan)
			color: white

.bolbutton
	padding: 4px 15px
	border: 2px solid var(--aryan)
	border-radius: 2px
	background: white
	color: var(--aryan)
	font-weight: 600
	cursor: pointer
	transform-origin: center center
	transition: all 0.09s ease
	&:hover
		background: var(--aryan)
		color: white
		transform: scale(0.9)

.boxr.formsearch
	padding-top: 16px
	gap: 16px
	input
		padding: 6px
		border: 2px solid #d7d7d7
		border-radius: 4px

.x2
	padding-bottom: 32px
	padding-top: 32px
	grid-template-columns: 280px 1fr
	grid-template-areas: "left right"
	.left
		grid-area: left
	.right
		grid-area: right
	h6
		padding-top: 24px
	.left
		width: 280px
	.right
		display: grid
		grid-auto-flow: row
		grid-template-rows: auto
		grid-template-columns: 1fr 1fr 1fr
		grid-template-areas: ". . ."
		width: 100%

.x2
	.box
		padding: 0

.x1
	h4
		border-bottom: 1px solid #ececec
		padding-bottom: 8px
		&:hover
			color: var(--aryan)

.x2
	p
		padding-top: 8px

.type
	width: calc(100% - 12vw)
	margin-left: 6vw
	border: 1px solid #d7d7d7
	padding-top: 6vw
	border-radius: 4px
	margin-bottom: 64px


</style>