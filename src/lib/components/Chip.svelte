<script lang="ts">

    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'
    import { clickOutsideAction } from '$lib/utils/clickoutside'
    import { chipStore, hideChip } from '$lib/stores/globalstores';

    let isShown:any, title:string, component:any, color:string
    let dimension = 32

    const unsubscribe = chipStore.subscribe(value => {
        ({ isShown, title, color } = value);
    });

    function handleCloseClick() {
        hideChip();
    }

    function handleOverlayClick(e:any) {
        if (e.target === e.currentTarget) {
        hideChip();
        }
    }

    $: if ( isShown === true ) {
        setTimeout(() => {
            isShown = false
        }, 2000)
    }


  onMount(() => {
    return unsubscribe;
  });

</script>

{#if isShown}
<div class="chip rta-column rowgap100 null" transition:fly={{ y: -160 }} use:clickOutsideAction on:clickOutside={handleCloseClick}>
        <div class="rta-column rowgap50 xcenter actualchip ycenter">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7333 23.0334H17.4667V14.6667H14.7333V23.0334ZM16.0023 12.7C16.4563 12.7 16.8361 12.5499 17.1417 12.2496C17.4472 11.9493 17.6 11.5773 17.6 11.1334C17.6 10.6456 17.4467 10.2514 17.1402 9.95088C16.8336 9.65033 16.4538 9.50005 16.0006 9.50005C15.5224 9.50005 15.1361 9.65033 14.8417 9.95088C14.5472 10.2514 14.4 10.64 14.4 11.1167C14.4 11.5745 14.5536 11.9528 14.8607 12.2517C15.1678 12.5506 15.5483 12.7 16.0023 12.7ZM16.0135 30.1667C14.0385 30.1667 12.1927 29.7991 10.476 29.0639C8.75921 28.3287 7.25717 27.3175 5.96986 26.0302C4.68255 24.7429 3.67131 23.2415 2.93613 21.5262C2.20093 19.8109 1.83333 17.9648 1.83333 15.988C1.83333 14.0112 2.20093 12.1635 2.93613 10.4451C3.67131 8.72675 4.68081 7.22887 5.96463 5.95152C7.24845 4.67414 8.74885 3.66288 10.4658 2.91775C12.1828 2.17262 14.0306 1.80005 16.0093 1.80005C17.988 1.80005 19.8378 2.17176 21.5588 2.91518C23.2799 3.65858 24.7782 4.66749 26.0539 5.94192C27.3296 7.21634 28.3396 8.71497 29.0838 10.4378C29.8279 12.1606 30.2 14.0118 30.2 15.9912C30.2 17.9692 29.8274 19.8164 29.0823 21.5328C28.3372 23.2491 27.3259 24.7476 26.0485 26.0281C24.7712 27.3086 23.2731 28.3185 21.5542 29.0578C19.8353 29.7971 17.9884 30.1667 16.0135 30.1667Z" fill="{color}"/>
</svg>
            <small>{title}</small>
        </div>
</div>
{/if}

<style lang="sass">

.chip
    position: fixed
    top: 0
    height: 128px
    left: 0
    width: 100vw
    background: transparent
    align-items: center
    justify-content: center
    text-align: center



</style>
