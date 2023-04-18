<script lang="ts">

	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { fly } from 'svelte/transition'
	import { rvrishis } from '$lib/filed/rvrshis'
	import { SuktasofMandala, RcasofSukta } from '$lib/utils/synaptic'

	let suktas:any
	let richas:any
	let sidefilter:any
	let selectedMandala:any
	let expand:boolean[] = Array(10).fill(false)
	let filterMandala:any
	let filterSukta:any
	let filteredRcas:any
	let linkingMandala:any
	let linkingSukta:any
	let linkingRca:any
	let navigate:any
	let chained:any
	let allrishis:any
	let breadc = false

	function toggleBreadC(){
		breadc = !breadc
	}

	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleField(index:number){
		expand[index] = !expand[index]
		for ( let i = 0; i < expand.length; i++) {
			if ( i !== index && expand[i] === true) {
				expand[i] = false
			}
		}
	}



	$: if ( selectedMandala ) {
		(async() => {
			suktas = await SuktasofMandala(selectedMandala)
		})()
	}

	$: if ( filterMandala) {
		(async() => {
			sidefilter = await SuktasofMandala(filterMandala)
		})()
	}

	$: if ( filterSukta) {
		(async() => {
			filteredRcas = await RcasofSukta(filterMandala, filterSukta)
		})()
	}

	function goToRca(){
		window.location.href=`/openlibrary/reconnect/sections/rigveda/${filterMandala}/${filterSukta}/${navigate}`
	}

	onMount(async() => {
		linkingMandala = $page.url.pathname.substr(40,1)
		linkingSukta = $page.url.pathname.substr(42,1)
		linkingRca = $page.url.pathname.substr(44,3)
		suktas = await SuktasofMandala(selectedMandala)
		richas = await RcasofSukta(linkingMandala,linkingSukta)
	})

</script>

<div class="mainpage type pads">
	<div class="mainside" data-lenis-prevent>
		<h5 style="font-weight: bold;">
			<a href="/openlibrary/reconnect/sections/rigveda" data-svelekit-reload>
			Ṛgveda Saṃhitā
			</a>
		</h5>
		<form class="formgrid">
			<div class="label1">Maṇḍala:</div>
			<div class="label2">Sūkta:</div>
			<div class="label3">Ṛca:</div>
			<select bind:value={filterMandala} class="select1">
				<option value="0">{linkingMandala}</option>
				<option value="1">1</option>	
				<option value="2">2</option>	
				<option value="3">3</option>	
				<option value="4">4</option>	
				<option value="5">5</option>	
				<option value="6">6</option>	
				<option value="7">7</option>	
				<option value="8">8</option>	
				<option value="9">9</option>	
				<option value="10">10</option>				
			</select>
			<select bind:value={filterSukta} class="select2">
				<option value="0">{linkingSukta}</option>
				{#if sidefilter && sidefilter.length > 0}
					{#each sidefilter as item, i}
						<option value={i}>{item.sukta}</option>
					{/each}
				{/if}
			</select>
			<select bind:value={navigate} on:change={goToRca} class="select3">
				<option value="0">{linkingRca}</option>
				{#if filteredRcas && filteredRcas.length > 0}
					{#each filteredRcas as item, i}
						<option value={i}>{item.rca}</option>
					{/each}
				{/if}
			</select>
		</form>
		<div class="sideitems">
			<h5 on:click={() => toggleField(1)} on:keydown={fauxfake}>Maṇḍalas</h5>
				{#if expand[1]}
				<a href="/openlibrary/reconnect/sections/rigveda/{1}">Maṇḍala 1</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{2}">Maṇḍala 2</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{3}">Maṇḍala 3</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{4}">Maṇḍala 4</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{5}">Maṇḍala 5</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{6}">Maṇḍala 6</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{7}">Maṇḍala 7</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{8}">Maṇḍala 8</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{9}">Maṇḍala 9</a>
				<a href="/openlibrary/reconnect/sections/rigveda/{10}">Maṇḍala 10</a>
				{/if}
		</div>
		<div class="sideitems">
			<h5 on:click={() => toggleField(2)} on:keydown={fauxfake}>Draṣṭās</h5>
			{#if expand[2]}
			{#each rvrishis as item}
				<p>{item}</p>
			{/each}
			{/if}
		</div>
		{#if richas && richas.length > 0}
							{#each richas as item}
								<p>{item.rca}</p>
							{/each}	
		{/if}
	</div>
	{#key $page.url}
	<div class="mainmain" in:fly={{ delay: 500 }} out:fly={{ duration: 250}}>
		<div class="boxr" id="pagebar">
			<div class="boxr toggler"><p>Devanāgarī</p>
				<div class="boxr switch">
			  	<div class="slider">
						<div class="ball"></div>
					</div>
				</div><p>
				IAST</p>
			</div>
			<div class="boxr bread">
				<div class="box">
					RV
				</div>
				{#if linkingMandala && linkingMandala.length > 0}
					<p> - Maṇḍala {linkingMandala}</p>
				{/if}
				{#if linkingSukta && linkingSukta.length > 0}
					<p> - Sūkta {linkingSukta}</p>
				{/if}
				{#if linkingRca && linkingRca.length > 0}
				<div class="box breaditem" on:click={toggleBreadC} on:keydown={fauxfake}>
					<p> - Ṛca {linkingRca}</p>
					{#if breadc}
						{#if richas && richas.length > 0}
							<div class="breaddrop">
							{#each richas as item}
								<p>{item.rca}</p>
							{/each}
							</div>
						{/if}
					{/if}
				</div>
				{/if}
			</div>
		</div>
		<slot></slot>
	</div>
	{/key}
</div>

<style lang="sass">

.bread
	justify-content: flex-end
	align-items: center


#pagebar
	justify-content: space-between
	align-items: center
	p
		color: #272727


.mainpage
	padding-bottom: 48px
	form
		padding-top: 64px

.sideitems
	max-height: 400px
	overflow-y: scroll
	position: relative
	padding-top: 0
	a, p
		text-transform: capitalize
	h5
		position: sticky
		top: 0
		background: white


.formgrid
	display: grid
	grid-auto-flow: row
	@media screen and (min-width: 1024px)
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "label1 label2 label3" "select1 select2 select3"
		gap: 8px 16px
		justify-content: start
		.label1
			grid-area: label1
		.label2
			grid-area: label2
		.label3
			grid-area: label3
		.select1
			grid-area: select1
		.select2
			grid-area: select2
		.select3
			grid-area: select3
		font-size: 12px

.toggler
	p.toggled
		color: #fe4a49

.toggler
	align-items: center
	justify-content: flex-start
	gap: 12px
	color: #878787
	cursor: pointer
	p
		&:hover
			color: #fe4a49
.switch
	height: 29px
	width: 64px
	background: #d7d7d7
	border-radius: 13px
	padding-top: 1px
	padding-left: 2px
	padding-right: 2px
	.ball
		height: 24px
		width: 24px
		background: white
		border-radius: 12px
		transition: 0.15s

.ball.balltag
	transform: translateX(35px)

.switch
	&:hover
		background: #fe4a49

</style>