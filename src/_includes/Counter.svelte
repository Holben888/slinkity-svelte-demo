<script>
  let count = 0;

  function setCount() {
    count += 1;
  }
</script>

<button on:click={setCount}>It's Svelte!</button>
<p>Sveltified count: {count}</p>
