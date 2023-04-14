<script lang="ts">

	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import supabase from '$lib/utils/db'
	import { sargasofRamayana } from '$lib/utils/synaptic'

	let selectKanda:any = ''
	let selectSarga:any
	let selectVerse:any
	let selectPada:any
	let filteredKanda:number = 0
	let visiblesargas:any
	let fake:boolean = false

	let kandas = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' },
		{ value: 6, label: '6' },
		{ value: 7, label: '7' },
	]
	let sargas:any = []
	let verses:any = []
	let padas:any = []

	function filterKanda(newFilter:number){
		filteredKanda = newFilter
	}

	function fauxfake(){
		fake = !fake
	}

	$: if (filteredKanda) {
		(async() => {
			visiblesargas = await sargasofRamayana(filteredKanda)
		})()
	}

	export async function getSargas(){
		const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',`${selectKanda}`)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		sargas = data
	}

	export async function getVerses(){
		const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',`${selectKanda}`)
		.eq('sarga',`${selectSarga}`)
		.eq('type','sargaverse')
		.order('id')
		if (error) throw new Error(error.message)
		verses = data
	}

	export async function getPadas(){
		const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',`${selectKanda}`)
		.eq('sarga',`${selectSarga}`)
		.eq('verse',`${selectVerse}`)
		.eq('type','verseslug')
		.order('id')
		if (error) throw new Error(error.message)
		padas = data
	}

	function gotoPada(){
		window.location.href=`/openlibrary/learn/ramayana/${selectKanda}/${selectSarga}/${selectVerse}/${selectPada}`
		selectKanda = ''
	}

	onMount(async() => {
		visiblesargas = await sargasofRamayana(filteredKanda)
	})

</script>

<div class="gridof7">
	<p class="box1" on:click={() => filterKanda(1)} on:keydown={fauxfake}>1</p>
	<p class="box2" on:click={() => filterKanda(2)} on:keydown={fauxfake}>2</p>
	<p class="box3" on:click={() => filterKanda(3)} on:keydown={fauxfake}>3</p>
	<p class="box4" on:click={() => filterKanda(4)} on:keydown={fauxfake}>4</p>
	<p class="box5" on:click={() => filterKanda(5)} on:keydown={fauxfake}>5</p>
	<p class="box6" on:click={() => filterKanda(6)} on:keydown={fauxfake}>6</p>
	<p class="box7" on:click={() => filterKanda(7)} on:keydown={fauxfake}>7</p>
</div>
<div class="gridof7">
	{#if visiblesargas && visiblesargas.length > 0}
		{#each visiblesargas as item, i}
			<div class="singlesarga" in:scale={{ delay: i * 5 }} out:scale={{ delay: 0, duration: 10}}>
				<a href="/openlibrary/learn/ramayana/{item.kanda}/{item.sarga}" target="_self">
					<p>{item.sarga}</p>
				</a>
			</div>
		{/each}
	<div class="singlesarga" on:click={() => filterKanda(8)} on:keydown={fauxfake}>
		<p>CLOSE</p>
	</div>
	{/if}
</div>

<style lang="sass">

.gridof7
	display: grid
	width: 100%
	grid-auto-flow: row
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr
	grid-template-rows: auto
	grid-template-areas: "box1 box2 box3 box4 box5 box6 box7"
	justify-items: center
	row-gap: 8px
	padding-bottom: 8px
	.box1
		grid-area: box1
	.box2
		grid-area: box2
	.box3
		grid-area: box3
	.box4
		grid-area: box4
	.box5
		grid-area: box5
	.box6
		grid-area: box6
	.box7
		grid-area: box7

.box1, .box2, .box3, .box4, .box5, .box6, .box7
	text-align: center
	line-height: 1
	margin: 0
	padding: 4px 20px
	font-size: 18px
	font-weight: bold
	color: #272727
	transition: var(--snap)
	cursor: pointer
	&:hover
		background: var(--aryan)
		color: white

.singlesarga
	text-align: center
	cursor: pointer
	padding: 6px 10px
	&:hover
		background: var(--aryan)
		color: white
		p
			color: white

</style>