<script>
import JrButtonOutline from "../../jr-button-outline.svelte";
import ScrollElementInView from "../scroll-element-in-view.svelte";
import WhiteButton from "../buttons/white-button.svelte";
export let onSlideInView;
import ScrollDownIndicator from "../scroll-down-indicator/scroll-down-indicator.svelte";
export let slides;
import WhiteButtonNew from "../buttons/white-button-new.svelte";

</script>

<div class="carousel-wrapper">
{#each slides as slide, index (index)}
<div class="slide-wrapper">
{#if index===0}
<div class="scroll-indicator-home">
    <ScrollDownIndicator/>
</div>
{/if}
<ScrollElementInView triggerInView={onSlideInView} index={index}>
    <video class="img-fullscreen" src={slide.src} autoplay loop muted/>
</ScrollElementInView>
<WhiteButton buttonHeading={slide.heading} buttonName={"DISCOVER NOW"} buttonLink={slide.link}/>
</div>
{/each}
</div >
<style>
    .img-fullscreen{
        
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }


    .carousel-wrapper{
        position: relative;
        width: 100%;

        
    }

    .slide-wrapper{
        position: relative;
    }

    .scroll-indicator-home{
        margin-top: 40rem;
        position: absolute;
        width: 100%;
        margin-inline: auto;
    }
</style>