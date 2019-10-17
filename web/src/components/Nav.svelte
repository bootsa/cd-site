<script>
  import AnimatedLogo from "../components/AnimatedLogo.svelte";
  export let segment;
</script>

<style>
  nav {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  .logo-container {
    grid-area: 1 / 1 / -1 / -1;
    /* border: 1px solid red; */
    height: 100px;
  }

	.menu-container {
    grid-area: 1 / -1 / -1 / -1;
	}

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <span class="logo-container">
    <AnimatedLogo>
      <h1>Carolina Doran</h1>
      <h2>Collective Animal Behaviour | Science Outreach | Gender Equality</h2>
    </AnimatedLogo>
  </span>
  <span class="menu-container">
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="blog">
          blog
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          class={segment === 'project' || segment === 'projects' ? 'selected' : ''}
          href="projects">
          projects
        </a>
      </li>
    </ul>
  </span>
</nav>
