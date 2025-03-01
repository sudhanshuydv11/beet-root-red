<script>
    import "../components/carousel-indicator/style.scss"
    export let quantity;
    export let currentIndex;
    export let indicatorClass;
    
    export let strokeColor = "white";
    export let fillColor = "white";   

  </script>
<div class={`${indicatorClass}`} style="--stroke-color: {strokeColor}; --fill-color: {fillColor};">
  {#each Array(quantity) as _, index (index) }
    <slot showTimer={index===currentIndex}
          strokeColor={strokeColor} 
          fillColor={fillColor}/>
  {/each}
</div>