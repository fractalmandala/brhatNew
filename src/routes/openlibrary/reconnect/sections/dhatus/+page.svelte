<script lang="ts">

	import { onMount } from 'svelte'
	import tippy from 'tippy.js'
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/scale.css'
	import { writable, get } from 'svelte/store'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { dbDhatus } from '$lib/utils/synaptic'
	import { count } from '$lib/utils/stores'
 	import { tooltipAction } from 'svelte-legos'
	import FiveLevels from '$lib/components/FiveLevels.svelte'
	import SimpleTipper from '$lib/components/SimpleTipper.svelte'
	import IconClose from '$lib/icons/IconClose.svelte'
	import { scale } from 'svelte/transition'
	import { backOut, backIn } from 'svelte/easing'
	import { page } from '$app/stores'
	import { dhatuReference } from '$lib/utils/synaptic'
	let fake = false
	let dhatuitems:any
	let url:any
	let limit = 25
	let alignGrid = false
	let expand:any = Array(300).fill(false)
	let prayogas:any
	let levelnext = false
	let level3 = false
	let idx:any
	let idy:any
	let countValue:number = 1
	let toggleStep = Array(5).fill(false)
	let tracking:number
	let mini:number
	
		const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	function toggleSteps(index:number){
		toggleStep[index] = !toggleStep[index]
	}

	$: tracking = Math.max(countValue)
	$: mini = Math.min(countValue)
	$: perce = tracking/5

	function increment(){
			count.update(n => n + 1)
	}

	function decrement(){
			count.update(n => n - 1)
	}

	const unsubscribe = count.subscribe(value => {
		countValue = value;
	});

	function toggleField(index:number){
		expand[index] = !expand[index]
		for ( let i = 0; i < expand.length; i++) {
			if ( i !== index && expand[i] === true) {
				expand[i] = false
			}
		}
		countValue = 1
		if ( alignGrid === false ) {
			alignGrid = true
		}
		if ( levelnext === true ) {
			levelnext = false
		}
	}


	$: if ( idx && idy ){
		(async() => {
			prayogas = await dhatuReference(idx,idy)
		})()
	}
	
	function toggleGrid(){
		alignGrid = !alignGrid
	}
	
	function fauxfake(){
		fake = !fake
	}

	onMount(async() => {
		url = $page.url.pathname
		dhatuitems = await dbDhatus(limit)
		prayogas = await dhatuReference(idx,idy)
		tippy('[data-tippy-content]')
	})

</script>

<div class="gridof5 type" class:calibrated={alignGrid}>
	{#if dhatuitems && dhatuitems.length > 0}
		{#each dhatuitems as item, i}
			{#if expand[i]}
				<div class="dhatubox opentab" in:scale={{ duration: 400, delay: 200, easing: backOut }} out:scale={{ duration: 200, delay: 200, easing: backOut }}>
					<div class="boxr">
						<small>{item.xaxis}.{item.yaxis} | {#if item.karma === 'A'} Akarmaka {:else} Sakarmaka {/if}</small>
						<div on:click={() => toggleField(i)} on:keydown={fauxfake}>
							<IconClose/>
						</div>
					</div>
					<div class="boxr">
						<div class="box">
							<h4 class="dev">√{item.dhatu}</h4>
							<h5>√{item.dhatuiast}</h5>
							<h6>{item.arthaiast} - <br><span style="font-weight: 400">{item.artha_english}</span></h6>
							<progress value={perce}></progress>
						</div>
						<div class="boxr">
							<div class="goggles gog1" data-tippy-content="Discovery Phase 1!">1</div>
							<div class="goggles gog2">2</div>
							<div class="goggles gog3">3</div>
							<div class="goggles gog4">4</div>
						</div>
					</div>
				</div>

				{#if levelnext}
					<div class="level2tab">
							<p>the spread of <span style="text-transform: uppercase">√{item.dhatuiast}</span></p>
							<p>the root √{item.dhatuiast} lends itself to words found in:</p>
							{#if prayogas && prayogas.length > 0}
								{#each prayogas as item}
									<h6>{item.referenceiast}</h6>
								{/each}
							{/if}
					</div>
				{/if}
			{:else}
			<div class="dhatubox" on:click={() => toggleField(i)} on:keydown={fauxfake} in:scale={{ duration: 200, delay: 200, easing: backIn}} out:scale={{ duration: 200, delay: 0, easing: backIn}}>
				<cite>{item.xaxis}.{item.yaxis}</cite>
				<h5 class="dev">{item.dhatu}</h5>
				<h6>{item.dhatuiast}</h6>
				<p><strong>{item.arthaiast} - </strong>{item.artha_english}</p>
				<div class="bottomstrip">
					<div class="ball atm"></div>
						{#if item.pada === 'A'}
						<small>ātmanepada</small>
						{:else if item.pada === 'P'}
						<small>parasmaipada</small>
						{:else}
							<small>{item.pada}</small>
						{/if}
					<div class="ball par"></div>
				</div>
			</div>
			{/if}
		{/each}
	{/if}
</div>

<style lang="sass">

.goggles
	width: 28px
	height: 28px
	background: #b7b7b7
	border-radius: 16px
	display: flex
	align-items: center
	justify-content: center
	color: white
	font-weight: bold
	cursor: pointer
	margin-left: 8px
	align-self: end
	transition: 0.32s var(--cubeb)
	transform-origin: center centr
	&:hover
		transform: scale(0.8)
		background: var(--yellow)

.dhatubox.opentab
	progress
		-webkit-appearance: none
		border: 1px solid #ececec
		border-radius: 14px
		height: 24px
		width: 240px
	progress[value]::-webkit-progress-bar
		background: white
		border-radius: 13px
	progress[value]::-webkit-progress-value
		background: var(--yellow)
		border-radius: 13px
		

.level2tab
	h6
		font-weight: 400
		font-size: 20px
		padding: 8px 0
		text-transform: capitalize
		border-bottom: 1px solid #ececec

.boxtoggle
	height: 24px
	border-radius: 12px
	width: 200px
	background: white
	transition: 0.14s var(--cubea)
	border: 1px solid #d7d7d7
	cursor: pointer
	display: flex
	flex-direction: row
	justify-content: space-between
	align-items: center
	padding: 0 2px
	position: relative
	color: white
	.boxball
		position: absolute
		top: 1px
		right: 0
		text-align: center
		height: 20px
		background: var(--yellow)
		border-radius: 10px
		transition: 0.13s ease
		transform-origin: center center
	.boxball2
		text-align: center
		height: 20px
		width: 20px
		background: white
		border-radius: 10px
		position: absolute
		top: 0
		left: 0

.boxtoggle.toggledtoggle
	background: var(--yellow)
	.boxball
		transform: translateX(-32px)
		p
			opacity: 1
			color: #272727

.boxtoggle.toggledtoggle.toggledthree
	.boxball
		transform: translateX(-56px)
		p
			opacity: 2
			color: #272727


.type
	@media screen and (min-width: 1024px)
		padding-left: 48px
		padding-right: 48px
		padding-top: 120px
		padding-bottom: 48px

.gridof5.calibrated
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab opentab" ". . . . ."
		grid-template-rows: auto auto
		.dhatubox.opentab
			grid-area: opentab
			small
				text-transform: uppercase
				font-size: 12px
			.boxr
				justify-content: space-between

.gridof5.calibrated.leveltwo
	@media screen and (min-width: 1024px)
		grid-template-areas: "opentab opentab opentab opentab opentab" "level2tab level2tab . . ." "level2tab level2tab . . ." ". . . . ."
		grid-template-rows: auto auto auto
		.dhatubox.opentab
			grid-area: opentab
			small
				text-transform: uppercase
				font-size: 12px
			.boxr
				justify-content: space-between
		.level2tab
			grid-area: level2tab

.level2tab
	display: flex
	flex-direction: column
	background: #f3f3f3
	padding: 24px
	

.dhatubox
	box-sizing: border-box
	padding: 20px 12px
	border-radius: 4px
	transition: all 0.13s var(--cubec)
	box-shadow: 5px 4px 9px #e7e7e7, -4px -6px 10px #f1f1f1
	display: flex
	flex-direction: column
	row-gap: 12px
	position: relative
	h5
		font-weight: 700
		border-bottom: 1px solid #ececec
		padding-bottom: 8px
	h5, h6, p
		white-space: pre-line
		margin: 0
	cite
		font-style: normal
		background: var(--yellow)
		color: white
		padding: 3px
		width: max-content
		border-radius: 8px
	&:hover
		box-shadow: 0px 0px 0px #FFFFFF, 0px 0px 0px #FFFFFF

.bottomstrip
	display: flex
	flex-direction: row
	align-items: center
	column-gap: 2px
	position: absolute
	bottom: 4px
	right: 4px
	.ball
		background: var(--yellow)
		width: 8px
		height: 8px
		border-radius: 4px
	.par
		transform-origin: center center
		transform: scale(0)
		transition: 0.32s var(--cubec)
	.atm
		opacity: 0
	small
		margin: 0
		padding: 0
		color: #878787
		transform: translateX(64px)
		opacity: 0
		transition: 0.32s var(--cubec)
		width: 0

.dhatubox
	&:hover
		.par
			transform: scale(1.0)
		.atm
			animation: transback 0.32s var(--cubec) forwards
		.bottomstrip small
			transform: translateX(0)
			opacity: 1
			width: 100%

.dhatubox.opentab
	box-shadow: none
			

@keyframes transback
	0%
		transform: translateX(0px)
		opacity: 0
	50%
		transform: translateX(-120px)
		opacity: 1
	100%
		transform: translateX(-160px)
		opacity: 0
		

</style>