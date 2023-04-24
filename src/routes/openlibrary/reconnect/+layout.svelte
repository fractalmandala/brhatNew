<script lang="ts">

	import '$lib/styles/reader.sass'

	let modalone:boolean = false
	let modaldhatu = false
	let modalamar = false
	let modaliast = false
	let dropper = false
	let fake = false

	function toggleDropper(){
		dropper = !dropper
	}

	function toggleIAST(){
		modaliast = !modaliast
	}

	function toggleDhatupatha(){
		modaldhatu = !modaldhatu
	}

	function toggleModalOne(){
		modalone = !modalone
	}

	function toggleAmarakosha(){
		modalamar = !modalamar
	}

	function fauxfake(){
		fake = !fake
	}

</script>

<svelte:head>
<title>Discover and Reconnect at Bṛhat Open Library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<slot></slot>