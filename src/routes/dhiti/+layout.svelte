
<script lang="ts">

	import SubHeader from '$lib/components/SubHeader.svelte'
	import Logo from '$lib/anims/LogoDhiti.svelte'

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<SubHeader>
	<div slot="logo">
		<a href="/dhiti">
			<Logo></Logo>
		</a>
	</div>
	<div slot="links" class="boxr inlinks">
		<p>Featured</p>
		<p>Two Bodhas</p>
		<p>Culture and Policy</p>
		<p>Dharma Today</p>
		<p>IKS</p>
	</div>
</SubHeader>

<slot></slot>


<style lang="sass">

.inlinks
	gap: 16px
	margin-right: 16px

</style>