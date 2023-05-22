<script lang="ts">

	import '$lib/styles/reader.sass'
    import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores'
    import DhatuSearch from '$lib/reader/DhatuSearch.svelte'
    import Dictionary from '$lib/reader/Dictionary.svelte'

</script>

<svelte:head>
<title>Discover and Reconnect at Bṛhat Open Library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Martel:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="rta-grid grid2 left00 p-top-64"
    class:levelzero={$breakZero}
    class:levelone={$breakOne}
    class:leveltwo={$breakTwo}
    >
    <div class="rta-column sidebar p-top-64">
        <div class="rta-column rowgap200">
            <DhatuSearch/>
            <Dictionary/>
            <cite>
                Enter a journey of discovery and reconnection.
		    	Search any word from the fields at top of page, or dive into one of the texts below.
            </cite>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/dhatus">
		    			Dhātupāṭha
		    		</a>
            </h6>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/dictionary">
		    			Dictionary
		    		</a>
            </h6>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/puranaindex">
		    			Paurāṇika Index
		    		</a>
            </h6>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/concordance">
		    			Vedic Concordance
		    		</a>
            </h6>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/sections/rigveda">
		    			Ṛgveda Saṃhitā
		    		</a>
            </h6>
            <h6 class="thin">
		    		<a href="/openlibrary/reconnect/sections/ramayana">
		    			Vālmīki Rāmāyaṇa
		    		</a>
            </h6>
        </div>
    </div>
    <div class="rta-column mainbar">
        <slot></slot>
    </div>
</div>

<style lang="sass">

.levelzero
    padding-left: 32px
    padding-right: 32px
    .sidebar
        padding-right: 32px
        border-right: 1px solid var(--borderline)
    .mainbar
        padding-left: 64px

</style>