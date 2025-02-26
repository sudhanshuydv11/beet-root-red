<script>
import { fly } from 'svelte/transition';
import ImageSlider from '../../image-slider/image-slider.svelte';
import './image-basket-style.scss';

export let scrollNode;
export let stopScroll=false;
export let textContent;
export let images=[];
export let clickedItem=-1;
export let setclickedImagePosition;
export let sliderImagesLength=images.length;
export let clickedImageClass="image-basket-clicked-image";
export let handleBackButtonClick;
export let alterConstantValue;

let translationValues=[];
let disableInfiniteScroll=false;

let IMAGE_SLIDER_ITEM_WIDTH_PERCENT=30;
$: itemsTotalWidth= images.length * IMAGE_SLIDER_ITEM_WIDTH_PERCENT;
let offset=0;

$:isMobileView=window.innerHeight > window.innerWidth;


$:if(itemsTotalWidth<=100 && !isMobileView){
    disableInfiniteScroll= true;
    offset=((100 - itemsTotalWidth))* (100/IMAGE_SLIDER_ITEM_WIDTH_PERCENT)/2;
}

setclickedImagePosition=()=>{
    for(let index=0;index<images.length;index++){
        translationValues[index]=offset + (index*100);
    }
}

$:getIsMiniVersion=(index)=> {
    if(clickedItem!==-1){
        if((clickedItem!== index)){
            return 'mini-version';
        }
        else{
        return clickedImageClass ;
        }
    }

    return "" ;
}

</script>
<div class="image-basket-container">
    <ImageSlider 
     bind:translationValues={translationValues} 
     bind:alterConstantValue={alterConstantValue}  
     textContent={textContent}
     images={ images } 
     stopScroll={stopScroll || disableInfiniteScroll}
     offset={offset}
     scrollNode={scrollNode} 
     maxItems={sliderImagesLength}>
        <svelte:fragment slot="image-slider-component"
            let:index
            let:image>
            <slot name="image-basket-component" 
                {index}
                {image}
                {getIsMiniVersion}
                translationValues={translationValues}
            />
        </svelte:fragment>
    </ImageSlider>
<div class="image-basket-item-description">
        {images[clickedItem]?.name ?? ''}
</div>
  {#if clickedItem !== -1 }
  <div class="image-basket-reset-button-wrapper">
    <button in:fly={{x:-100 , duration: 500, delay:1000 }}  style="--clickedItem:{clickedItem}" class="image-basket-reset-button" on:click={handleBackButtonClick}>Back</button>
</div>
  {/if}
</div>