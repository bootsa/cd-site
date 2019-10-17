<script>
  // import Nav from '../components/Nav.svelte';
  // import { stores } from "@sapper/app";
  // import { Icons, Icon, Nav, NavItem } from "@sveltejs/site-kit";

  export let segment;

  // const { page } = stores();
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

<!-- <Nav {segment} {page} logo="cd-logo-horizontal.svg">
  <NavItem segment="about">About</NavItem>
  <NavItem segment="projects">Projects</NavItem>
</Nav> -->

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>
