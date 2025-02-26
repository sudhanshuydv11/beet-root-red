<script>
  
  import {slide, fade, fly} from 'svelte/transition'; 
  import {linear} from 'svelte/easing';
  import "./carousel-styles.scss";

  export let gallery_items;
  export let currentSlideItem;
  export let carouselContainerClass;
  export let imageWrapperClass="";
  export let imageClass;
  let item;
  $:item=gallery_items[currentSlideItem];
</script>
<div class={`carousel-container ${carouselContainerClass}`}>
{#key currentSlideItem}
<div class={`${imageWrapperClass}`} in:slide={{axis:"x",duration:500,easing: linear}} out:slide={{axis:"x",duration:500,easing: linear}}>
<img class={`${imageClass}`} src={item.url} alt={item.desc} />
</div>
{/key}
</div>