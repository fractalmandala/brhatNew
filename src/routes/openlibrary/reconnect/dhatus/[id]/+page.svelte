<script lang="ts">

    import { onMount } from 'svelte'
    import { dhatuForms, dhatuStore } from '$lib/utils/supapulls'
	import { breakZero, breakOne, breakTwo } from '$lib/stores/globalstores';
    let forms: any
    
    
    export let data

    onMount(async() => {
        forms = await dhatuForms(data.baseindex)
    })

</script>

<div class="rta-column minH"
    class:levelzero={$breakZero}
    class:levelone={$breakOne}
    class:leveltwo={$breakTwo}
>
    <div class="heading">
    <div class="rta-row between">
        <h3>{data.dhatu} - {data.dhatuiast}</h3>
        <div class="legend">
            <h5>Legend</h5>
        </div>
    </div>
    <div class="rta-column rowgap100 p-bot-32">
        <h5>{data.artha} | {data.arthaiast}</h5>
        <h5>{data.artha_english}</h5>
        <h5>{data.artha_hindi}</h5>
    </div>
    </div>
    <div class="rta-grid grid5 rowgap300 colgap300">
        {#if forms && forms.length > 0}
            {#each forms as item}
                {#if item.iast !== null}
                <div class="rta-column thisbox">
                    <h5>{item.type.slice(0,1)} | {item.type.slice(1)}</h5>
                    <pre>{item.iast.replace(/;/g,'\n')}</pre>
                </div>
                {/if}
            {/each}
        {/if} 
    </div>
</div>


<style lang="sass">



h5, pre
    font-family: 'Space Grotesk', sans-serif
    font-weight: 400

h3
    font-family: 'Space Grotesk', sans-serif

.levelzero
    pre
        font-size: 18px
    .thisbox
        border: 1px solid var(--borderline)
        padding: 16px
        border-radius: 6px
        transition: 0.04s ease
        &:hover
            background: var(--contraster)
            border: 1px solid var(--contraster)
            box-shadow: 4px 7px 8px var(--shadowline)
    .heading
        padding-top: 80px

</style>