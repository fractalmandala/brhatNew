<script lang='ts'>

	let sY:number
	let toggledClass = [ false, false, false]

	function toggleClass(index:number){
		toggledClass[index] = !toggledClass[index]
		for ( let i = 0; i < toggledClass.length ; i++) {
			if ( i !== index && toggledClass[i] === true ) {
				toggledClass[i] = false
			}
		}
	}

</script>


<svelte:window bind:scrollY={sY}/>
<div class="type">
	<div class="section s1">
		<div class="box heading">
			<h3>Three Pillars are Central to Describing Our Work</h3>
			<h5>Click on any to open:</h5>
			<div class="box arrow">
				<h6>Move to Next</h6>
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 20C0 8.9543 8.9543 0 20 0C31.0456 0 40 8.9543 40 20C40 31.0456 31.0456 40 20 40C8.9543 40 0 31.0456 0 20ZM16.8786 29.0606C17.4644 29.6464 18.4142 29.6464 19 29.0606L27 21.0606C27.5858 20.4748 27.5858 19.5252 27 18.9394L19 10.9393C18.4142 10.3536 17.4644 10.3536 16.8786 10.9393C16.2928 11.5251 16.2928 12.4749 16.8786 13.0607L23.818 20L16.8786 26.9394C16.2928 27.5252 16.2928 28.4748 16.8786 29.0606Z" fill="white"/>
				</svg>

			</div>
		</div>
		<div class="gridof3">
		<div class="box back" style="background-image: url('/images/cult.png')" class:afterone={toggledClass[1]} on:click={() => toggleClass(1)} on:keydown={() => toggleClass(1)}>
			<h4>Culture Creatives</h4>
			<h5>The root and the pool. This is what we draw from, it provides our very basis.</h5>
			<p>Drawing from reservoir; the consciousness, ie., dharma, <span class="makered">culture creatives</span> produce output to represent culture and civilization.</p>
		</div>
		<div class="box" style="background-image: url('/images/image 3.png')" class:afterone={toggledClass[2]} on:click={() => toggleClass(2)} on:keydown={() => toggleClass(2)}>
			<h4>Policy Research</h4>
			<h5>It is is krīyā or action in the material world that
					align civilization to culture and thus enmeshes sanskriti.</h5>
			<p><span class="makered">policy research</span> produces frameworks and studies to bring cultural operating systems to life</p>
		</div>
		<div class="box" style="background-image: url('/images/lead.png')" class:afterone={toggledClass[3]} on:click={() => toggleClass(3)} on:keydown={() => toggleClass(3)}>
			<h4>Leadership Development</h4>
			<h5>
			Not without crafting leaders for tomorrow; bearing it forward, ie., bharaṇa, for bhārata would our task be complete.
		</h5>

		<p><span class="makered">leadership development</span> works to embody cultural cognition with the rooting and vision needed to manifest it intergenerationally.</p>
		</div>
		</div>
	</div>
	<div class="section s2">
		<h3>The Pattern of Threes is Recurring...</h3>
		<div class="gridof3 firstone">
			<div class="box">
				<div class="line" style="height: {sY}px"></div>
			</div>
			<div class="box">
				<div class="line" style="height: {sY}px"></div>
			</div>
			<div class="box">
				<div class="line" style="height: {sY}px"></div>
			</div>
		</div>
		<div class="gridof3 secondone">
			<div class="box">
				<h5>Create</h5>
			</div>
			<div class="box">
				<h5>Curate</h5>
			</div>
			<div class="box">
				<h5>Consult</h5>
			</div>
		</div>
	</div>
</div>

<style lang="sass">

#midrings, #outerrings, #innerrings
	path
		opacity: 0

.s2
	.firstone
		justify-content: stretch
		justify-items: stretch
		gap: 400px !important
		.box
			height: 10px
			width: 100%
			margin-top: -256px
			.line
				width: 1px
				height: 100px
				background: #474747

.heading
	align-items: center
	position: relative
	.arrow
		position: absolute
		display: flex
		flex-direction: column
		align-items: flex-end
		top: 0
		right: 0
		h6
			color: #fe4a49
			font-weight: 500
			text-align: right
		svg
			width: 27px
			height: 27px
			cursor: pointer
			path
				fill: #676767
		&:hover
			path
				fill: #fe4a48

.makered
	color: #fe4a49

.section
	box-sizing: border-box
	height: 100vh
	padding: 32px
	background: #171717
	display: flex
	flex-direction: column
	align-items: center
	h3, h5
		text-align: center
	h3
		color: white
		width: 60%
	h5
		color: #fe4a49
		font-weight: bold
		margin-top: 16px
		background: white
		padding: 16px
	.gridof3
		height: 100%
		gap: 32px
		.box
			height: 100%
			padding: 32px
			transition: 0.4s var(--cubec)
			background-position: top center
			object-fit: cover
			h4, h5, p
				opacity: 0
		.box.afterone
			h4, h5, p
				opacity: 1

.box.afterone
	position: relative
	transition: 0.4s var(--cubec)
	&::after
		position: absolute
		transition: 0.4s var(--cubec)
		top: 0
		left: 0
		content: ''
		width: 100%
		height: 100%
		background: white
		z-index: 0
	h4, h5, p
		z-index: 1
		opacity: 1
		text-align: left
	h5
		color: #474747


</style>