<script lang="ts">

  export let color = 'var(--opposite)';
  export let dimension = 23

</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width={dimension} height={dimension} viewBox="0 0 24 24" stroke-width="2" stroke={color} fill={color} stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>

<style lang="sass">

svg
  transform-origin: center center
  transition: transform 0.08s
  &:hover
    transform: scale(0.90)

</style>