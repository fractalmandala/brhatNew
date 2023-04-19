<script lang="ts">

	import { spring } from 'svelte/motion'
	import { pannable } from '$lib/utils/Pannable'	

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event:any) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event:any) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

	let level1 = false
	let level2 = false
	let level3 = false
	let counter:number
	let state1:boolean
	let state2:boolean

	$: if ( counter === 2 ){
		state2 = true 
	} else {
		if ( counter === 1) {
			state1 = true
		}	
	}

	let fake = false

	$: if ( level1 === true ) {
		counter = 1 
	} else {
		if ( level2 === true ) {
			counter = 2
		}
	}

	function moveLevel1(){
		counter += 1
	}
	
	function fauxfake(){
		fake = !fake
	}

</script>


<div class="grab">
<div class="leftcircle"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({$coords.x * 0.2}deg)"	
	>
	</div>
</div>

<style lang="sass">

.grab
	padding-top: 160px
	padding-left: 200px

.fivelevels
	display: flex
	flex-direction: row
	align-items: center
	height: 26px
	border-radius: 13px
	padding: 2px
	width: 200px
	background: white
	position: relative
	border: 1px solid #d7d7d7
	&::before
		content: ''
		height: 100%
		border-radius: 11px
		background: var(--yellow)
		width: 22px
		height: 22px
		transition: 0.16s var(--cubec)

.rightcircle
	position: absolute
	top: 1px
	right: 1px
	height: 22px
	width: 22px
	border-radius: 11px
	background: var(--yellow)
	transform-origin: center center
	transform: scale(0.25)
	cursor: pointer

.leftcircle
	width: 22px
	height: 22px
	border-radius: 11px
	background: var(--yellow)

.fivelevels.state1
	&::before
		width: 52px

.rightcircle.state1
	transform: scale(0.5)

.fivelevels.state1.state2
	&::before
		width: 82px

.rightcircle.state1.state2
	transform: scale(0.75)

</style>