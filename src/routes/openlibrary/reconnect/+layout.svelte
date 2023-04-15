<script lang="ts">
	
	import InputModal from '$lib/reader/InputModal.svelte'

	import '$lib/styles/reader.sass'

	let modalone:boolean = false
	let dropper = false
	let fake = false

	function toggleDropper(){
		dropper = !dropper
	}

	function toggleModalOne(){
		modalone = !modalone
	}

	function fauxfake(){
		fake = !fake
	}
	

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="readingcontainer type">
  <div class="learninghead">
    <div class="learningheadmain">
			<h3><a href="/openlibrary/reconnect">
				the Learning Center</a>
			</h3>
		</div>
    <div class="learningheadrest">
			<div class="headrestitems" on:click={toggleModalOne} on:keydown={fauxfake}>
				<h6>IAST</h6>
			</div>
			<div class="headrestitems">
				<h6>Dictionary</h6>
			</div>
			<div class="headrestitems">
				<h6>Amarakośaḥ</h6>
			</div>
			<div class="headrestitems">
				<h6>Dhātupāṭha</h6>
			</div>
			<div class="headrestitems dropper" on:click={toggleDropper} on:keydown={fauxfake}>
				<h6>TEXTS</h6>
				<div class="droppericon">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.1715 19.1722C9.6095 20.7322 9.6095 23.2682 11.1715 24.8282L23.9995 37.6582L36.8275 24.8282C37.6095 24.0482 37.9995 23.0242 37.9995 22.0002C37.9995 20.9762 37.6095 19.9522 36.8275 19.1722C35.2655 17.6102 32.7335 17.6102 31.1715 19.1722L23.9995 26.3422L16.8275 19.1722C15.2655 17.6102 12.7335 17.6102 11.1715 19.1722Z" fill="#474747"/>
					</svg>
				</div>
			</div>
			{#if dropper}
				<div class="dropped" on:click={toggleDropper} on:keydown={fauxfake}>
					<p><a href="/openlibrary/reconnect/sections/ramayana">Rāmāyaṇa</a></p>
					<p><a href="/openlibrary/reconnect/sections/rigveda">Ṛgveda</a></p>
				</div>
			{/if}
		</div>
  </div>
  <div class="learningrest">
		<slot></slot>
  </div>
</div>
{#if modalone}
<InputModal modalone={modalone}></InputModal>
{/if}

<style lang="sass">

.learningheadmain
	h3
		margin: 0
	@media screen and (max-width: 1023px)
		h3
			font-size: 32px

.headrestitems
	transition: 0.05s ease
	cursor: pointer
	padding: 4px 8px
	h6
		text-transform: uppercase
		font-weight: 400
	&:hover
		background: #fe4a49
		h6
			color: white

.headrestitems.dropper
	&:hover
		background: none
		h6
			color: #272727

.learningheadrest
	postion: relative
	.dropped
		position: absolute
		top: 144px
		right: 48px
		

</style>

