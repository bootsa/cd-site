<script>
  import { onMount } from "svelte";
  import { fly, fade } from 'svelte/transition'
  import AnimatedLogo from "../components/AnimatedLogo.svelte";

  // function typewriter(node, { speed = 50, delay = 0 }) {
  //   const valid =
  //     node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

  //   if (!valid) {
  //     throw new Error(
  //       `This transition only works on elements with a single text node child`
  //     );
  //   }

  //   const text = node.textContent;
  //   const duration = text.length * speed;

  //   return {
  //     duration,
  //     tick: t => {
  //       const i = ~~(text.length * t);
  //       node.textContent = text.slice(0, i);
  //     }
  //   };
  // }

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<style>

  :root {
    box-sizing: border-box;
  }

  main {
    margin: 2rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    line-height: 4rem;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 2rem;
    }
  }

  .title-container {
    width:auto;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    display: inline-block;
    text-decoration: none;
    padding: 1rem 2rem;
    margin: 1rem;
    border: dotted lightgrey 0.1rem;
    border-radius: 15px;
    box-shadow: 4px 4px 6px lightgrey;
  }
  a:hover {
    background-color: #eee;
  }
  a:focus {
    background-color: rgb(255, 184, 184);
    outline: none;
  }
  a:active {
    background-color: rgb(184, 184, 255);
    outline: none;
  }
</style>

<svelte:head>
  <title>Carolina Doran</title>
</svelte:head>


<main>
  <AnimatedLogo>
    <div class="title-container">
      {#if mounted}
        <h1 in:fly={{ y: 50, duration: 1000, delay: 2000 }}>Carolina Doran</h1>
        <h2 in:fly={{ y: 50, duration: 1000, delay: 2500 }}>collective animal behaviour</h2>
        <h2 in:fly={{ y: 50, duration: 1000, delay: 3000 }}>science outreach</h2>
        <h2 in:fly={{ y: 50, duration: 1000, delay: 3500 }}>gender equality & inclusion</h2>
      {/if}
    </div>
  </AnimatedLogo>
  {#if mounted}
    <div in:fade={{ duration: 1000, delay: 4500 }}>
      <p>Site in development...</p>
      <p>
        In the meantime - find me on twitter:
      </p>
      <p>
        <a href="https://twitter.com/carolinadoran">@carolinadoran</a>
      </p>
    </div>
  {/if}
</main>
