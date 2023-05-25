<script lang="ts">


	import '$lib/styles/reader.sass';
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
    import SideRV from '$lib/reader/SideRV.svelte'
    import SelectorRV from '$lib/reader/SelectorRV.svelte'
    import SideRamayana from '$lib/reader/SideRamayana.svelte'
    import SelectorRamayana from '$lib/reader/SelectorRamayana.svelte'

    let url:string
    let para:string
    let isRV = false
    let isRam = false

    $: url = $page.url.pathname
    $: para = url.substr(32,5)
    $: if ( para === 'rigve') {
        isRV = true
    } else {
        isRV = false
    }

    $: if ( para === 'ramay' ) {
        isRam = true
    } else {
        isRam = false
    }

</script>

<div
	class="rta-grid grid2 left00"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
	<div class="rta-column sidebar">
		{#if $page.data.session}
            <p>Signed In</p>
		{:else}
			<p>Sign Up</p>
		{/if}
        {#if isRV}
            <SideRV/>
        {:else if isRam}
            <SideRamayana/>
        {/if}
	</div>
	<div class="rta-column mainbar"> 
        <div class="top-nav rta-row xend ybot p-bot-16 p-top-64">
            {#if isRV}
                <SelectorRV/>
            {:else if isRam}
                <SelectorRamayana/>
            {/if}
        </div>
		<slot />
	</div>
</div>

<style lang="sass">

.rta-grid.grid2.left00.levelzero
    padding-left: 32px
    padding-right: 32px
    min-height: 100vh
    .sidebar
        padding-right: 32px
        border-right: 1px solid var(--borderline)
        position: sticky
        top: 0
        padding-top: 128px
        display: flex
        flex-direction: column
    .mainbar
        display: flex
        flex-direction: column
        padding-left: 32px
        .top-nav
            height: 160px
            border-bottom: 1px solid var(--contraster)
            background: var(--background)
            position: sticky
            top: 0

.rta-grid.grid2.left00.levelone
    min-height: 100vh
    .sidebar
        padding: 64px 32px 0 32px
        position: sticky
        top: 0
        background: var(--background)
    .mainbar
        padding: 64px 32px
        .top-nav
            display: none

.rta-grid.grid2.left00.leveltwo
    min-height: 100vh
    padding: 0
    .sidebar
        padding: 64px 32px 0 32px
        position: sticky
        top: 0
        background: var(--background)
    .mainbar
        padding: 64px 32px
        .top-nav
            display: none

.rta-grid
    padding-bottom: 128px
    p
        font-family: 'Space Grotesk', sans-serif


</style>
