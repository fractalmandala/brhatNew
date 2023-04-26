<script lang="ts">

	let modeOne = true
	let fake = false

	function fauxfake(){
		fake = !fake
	}

	function toggleMode(){
		modeOne = !modeOne
	}

</script>

<div class="togglemode" class:general={modeOne} class:dark={!modeOne} on:click={toggleMode} on:keydown={fauxfake}>
	{modeOne}
	<div class="togglemodeball"></div>
</div>