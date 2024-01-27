<script lang="ts">

  export let color = 'var(--opposite)';
  export let dimension = 26

</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width={dimension} height={dimension} viewBox="0 0 24 24" stroke-width="3" stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>

<style lang="sass">

svg
  transform-origin: center center
  transition: transform 0.08s
  &:hover
    transform: scale(0.90)

</style>