<script>
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    padding: var(--nav-h) 0 0 0;
    overflow-x: hidden;
  }
</style>

<main>
  <slot />
</main>
