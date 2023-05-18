<script lang="ts">

	export let data
	let widD:number = 800
	let widM:number
	let width:number
	let iframeWidth = widD

	$: widM = 0.9*width

	$: if ( width <= 1023 ) {
		iframeWidth = widM 
	} else {
		iframeWidth = widD
	}

</script>

<svelte:window bind:innerWidth={width}/>
<div class="type">
	<h3>
		{data.Text}
	</h3>
	<div class="boxr">
		<p>{data.Description}</p>
		<h5>{data.author}</h5>
	</div>
</div>
<div class="boxc frameholder" data-lenis-prevent>
	<iframe 
		title={data.Text}
		src={data.Extract} 
		width={iframeWidth}
		height="720" 
		allow="autoplay">
</iframe>
</div>