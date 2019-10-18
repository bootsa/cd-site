<script>
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let duration = 2000;
  export let delay = 0;
  export let fill = 1;
  export let autorun = true;

  export let showControls = false;

  let drawit = false;

  const runDraw = () => {
    drawit = !drawit;
  };

  onMount(async () => {
    if (autorun) {
      runDraw();
    }
    setTimeout(() => {
      document.querySelectorAll("path").forEach(path => {
        path.style.fillOpacity = 1.0;
        path.style.transition = `${fill}s`;
      });
    }, duration + delay);
  });
</script>

<style>
  .control-layout {
    display: grid;
    border: 1px solid grey;
    padding: 10px;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 8px;
  }
  .control-layout > div {
    align-self: center;
    vertical-align: middle;
  }
  .control-submit {
    justify-self: center;
    align-self: center;
    grid-area: 1 / -2 / 3 / -1;
  }
  .control-submit > button {
    padding: 20px 10px;
  }
  header {
    height: inherit;
    display: grid;
    grid-template-columns: inherit 1fr;
    align-items: center;
  }

  .logo-container {
    grid-area: 1 / 1 / 1 / 1;
    height: inherit;
    width: 1fr;
  }
  svg {
    background-color: none;
  }
  path.c {
    stroke: #42b11b;
    fill: #42b11b;
    fill-opacity: 0;
    stroke-width: 0.01rem;
    stroke-linejoin: bevel;
    transition: 2s;
  }
  path.d {
    stroke: #174b05;
    fill: #174b05;
    fill-opacity: 0;
    stroke-width: 0.01rem;
    stroke-linejoin: bevel;
    transition: 2s;
  }
  .heading-container {
    grid-area: 1 / 2 / 2 / 3;
  }
</style>

<header>
  <div class="logo-container">
    <svg viewBox="0 0 110 134" xmlns="http://www.w3.org/2000/svg">
      {#if drawit}
        <path
          class="c"
          transition:draw={{ duration, delay }}
          d="M102 89.7544C101.459 93.3527 99.3952 96.2932 95.808 98.576C93.024
          100.4 89.424 101.984 85.008 103.328C80.592 104.768 75.504 105.488
          69.744 105.488C63.504 105.488 57.888 104.624 52.896 102.896C48 101.168
          43.824 98.672 40.368 95.408C37.008 92.144 34.416 88.256 32.592
          83.744C30.864 79.136 30 73.952 30 68.192C30 61.856 30.96 56.384 32.88
          51.776C34.8 47.072 37.44 43.184 40.8 40.112C44.256 37.04 48.24 34.784
          52.752 33.344C57.36 31.808 62.304 31.04 67.584 31.04C69.504 31.04
          71.376 31.232 73.2 31.616C75.024 31.904 76.512 32.288 77.664
          32.768V9.44C77.8014 9.39879 77.9505 9.35759 78.1114 9.31638C74.356
          8.57349 70.4735 8.18399 66.5 8.18399C33.6391 8.18399 7 34.823 7
          67.684C7 100.545 33.6391 127.184 66.5 127.184C79.8051 127.184 92.0901
          122.817 102 115.438V89.7544Z" />
        <path
          class="d"
          transition:draw={{ duration, delay }}
          d="M30 68.192C30 61.856 30.96 56.384 32.88 51.776C34.8 47.072 37.44
          43.184 40.8 40.112C44.256 37.04 48.24 34.784 52.752 33.344C57.36
          31.808 62.304 31.04 67.584 31.04C69.504 31.04 71.376 31.232 73.2
          31.616C75.024 31.904 76.512 32.288 77.664 32.768V9.44C78.624 9.152
          80.16 8.864 82.272 8.576C84.384 8.192 86.544 8 88.752 8C90.864 8
          92.736 8.144 94.368 8.43199C96.096 8.72 97.536 9.296 98.688
          10.16C99.84 11.024 100.704 12.224 101.28 13.76C101.856 15.2 102.144
          17.12 102.144 19.52V87.776C102.144 92.288 100.032 95.888 95.808
          98.576C93.024 100.4 89.424 101.984 85.008 103.328C80.592 104.768
          75.504 105.488 69.744 105.488C63.504 105.488 57.888 104.624 52.896
          102.896C48 101.168 43.824 98.672 40.368 95.408C37.008 92.144 34.416
          88.256 32.592 83.744C30.864 79.136 30 73.952 30 68.192ZM70.896
          50.192C65.712 50.192 61.728 51.68 58.944 54.656C56.16 57.632 54.768
          62.144 54.768 68.192C54.768 74.144 56.064 78.656 58.656 81.728C61.248
          84.704 64.992 86.192 69.888 86.192C71.616 86.192 73.152 85.952 74.496
          85.472C75.936 84.896 77.04 84.272 77.808 83.6V51.92C75.888 50.768
          73.584 50.192 70.896 50.192Z" />
      {/if}
    </svg>
  </div>
  <div class="heading-container">
    <slot />
  </div>
</header>

{#if showControls}
  <div class="control-layout">
    <div>
      <label>Duration:</label>
    </div>
    <div>
      <input type="number" bind:value={duration} min="0" max="10000" />
    </div>
    <div>
      <input type="range" bind:value={duration} min="0" max="10000" />
    </div>

    <div>
      <label>Delay:</label>
    </div>
    <div>
      <input type="number" bind:value={delay} min="0" max="10000" />
    </div>
    <div>
      <input type="range" bind:value={delay} min="0" max="10000" />
    </div>
    <div class="control-submit">
      <button on:click={runDraw}>Draw It!</button>
    </div>
  </div>
{/if}
