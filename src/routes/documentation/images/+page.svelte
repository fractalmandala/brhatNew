<script lang="ts">

	import { bucket, getImage } from '$lib/utils/supapulls'
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'

	let photos:any
	let folder:string = '01anveshi'
	let fake:boolean = false
	let imm:any
	let link:any = ''
	let showLightbox:boolean = false

	function setFolder(newFolder:string){
		folder = newFolder
	}

	function setImage(newlink:string){
		link = newlink
	}

	$: if (folder) {
		(async() => {
			photos = await bucket(folder)
		})()
	}

	$: if (link) {
		(async() => {
			imm = await getImage(link)
		})
	}

	function fauxfake(){
		fake = !fake
	}

	function lightB(){
		showLightbox = !showLightbox
	}

	onMount(async() => {
		photos = await bucket(folder)
		imm = await getImage(link)
	})

</script>

<div>
<div class="boxr type pads">
	<p on:click={() => setFolder('01anveshi')} on:keydown={fauxfake}>Anveshi</p>
	<p on:click={() => setFolder('02brhatlogos')} on:keydown={fauxfake}>Logos</p>
	<p on:click={() => setFolder('03content')} on:keydown={fauxfake}>Content</p>
	<p on:click={() => setFolder('04corpimages')} on:keydown={fauxfake}>Corporate</p>
	<p on:click={() => setFolder('05dhiti')} on:keydown={fauxfake}>Dhiti</p>
	<p on:click={() => setFolder('06drashta')} on:keydown={fauxfake}>Drashta</p>
	<p on:click={() => setFolder('07herocovers')} on:keydown={fauxfake}>Hero</p>
	<p on:click={() => setFolder('08icons')} on:keydown={fauxfake}>Icons</p>
	<p on:click={() => setFolder('09iks')} on:keydown={fauxfake}>IKS</p>
	<p on:click={() => setFolder('10mandala')} on:keydown={fauxfake}>Mandala</p>
	<p on:click={() => setFolder('11mrdanga')} on:keydown={fauxfake}>Mrdanga</p>
	<p on:click={() => setFolder('12rid')} on:keydown={fauxfake}>RID</p>
	<p on:click={() => setFolder('13scrolls')} on:keydown={fauxfake}>Scrolls</p>
	<p on:click={() => setFolder('14bol')} on:keydown={fauxfake}>BOL</p>
	<p on:click={() => setFolder('15partners')} on:keydown={fauxfake}>Partners</p>
	<p on:click={() => setFolder('15updates')} on:keydown={fauxfake}>Updates</p>
	<p on:click={() => setFolder('21wallpapers')} on:keydown={fauxfake}>Wallpapers</p>
</div>
<div class="imagegallery pads">
	{#if photos && photos.length > 0}
		{#each photos as item, i}
			{#if item.name && item.name.length > 0}
			<div class="box back" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/{folder}/{item.name}')" in:scale={{ delay: i * 50}} out:scale on:click={() => setImage(`${folder}/${item.name}`)} on:keydown={fauxfake} on:click={lightB}>
				<p>{item.name}</p>
			</div>
			{/if}
		{/each}
	{/if}
</div>
</div>
{#if showLightbox}
<div class="lightbox box">
	{#if imm && imm.length > 0}
		{#each imm as item}
			<h1>p</h1>
			<img src={item.data} alt={item.data}/>
		{/each}
	{/if}
</div>
{/if}

<style lang="sass">

.lightbox
	position: fixed
	top: 0
	left: 0
	height: 640px
	width: 640px
	z-index: 1000
	img
		object-fit: cover
		height: 100%
		width: 100%

.boxr
	padding-top: 64px
	justify-content: space-between
	background: white
	position: sticky
	top: 0
	border-bottom: 1px solid #ececec
	p
		text-transform: uppercase
		padding: 4px
		cursor: pointer
		&:hover
			background: #10D56C
			color: white
	@media screen and (max-width: 1023px)
		flex-wrap: wrap
		p
			width: 20%
			text-align: center

.imagegallery
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
	grid-template-rows: auto
	grid-template-areas: ". . . . . . . ."
	gap: 16px 16px
	padding-top: 64px
	padding-bottom: 64px
	@media screen and (max-width: 1023px)
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-areas: ". . . ."
		gap: 8px 8px
	
	
.box
	height: 120px
	width: 120px
	align-items: center
	justify-content: center
	p
		opacity: 0
		background: rgba(0,0,0,0.8)
		color: white
		padding: 4px 8px
	&:hover
		p
			opacity: 1
	@media screen and (max-width: 1023px)
		height: 88px
		width: 88px

</style>