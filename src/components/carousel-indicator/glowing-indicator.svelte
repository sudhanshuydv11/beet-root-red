  
  <script>
    import DumbIndicator from "./dumb-indicator.svelte";
import "./style.scss";
    export let quantity;
    export let currentIndex;
  </script>

  {#each Array(quantity) as _, index (index) }
  <svg class="glowing-indicator">
    <slot/>
    <DumbIndicator/>
  </svg>
  {/each}