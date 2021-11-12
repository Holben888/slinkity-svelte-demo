<script>
  import { fade } from "svelte/transition";

  export let images = [];

  let index = 0;

  const next = () => {
    index = (index + 1) % images.length;
  };
</script>

<section>
  {#each [images[index]] as src (index)}
    <img transition:fade {src} alt="" />
  {/each}

  <button on:click={next}>Next</button>
</section>

<style>
  section {
    position: relative;
    height: 15rem;
    display: flex;
    justify-content: center;
  }
  button {
    position: absolute;
    bottom: 0;
  }
  img {
    position: absolute;
    height: 100%;
  }
</style>
