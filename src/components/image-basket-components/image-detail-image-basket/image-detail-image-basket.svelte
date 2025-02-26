<script>
    import ImageBasket from "../image-basket/image-basket.svelte";
    import {fade} from 'svelte/transition';
	import ImageBasketSliderItem from '../image-basket/image-basket-slider-item.svelte';
    import './image-detail-image-basket-style.scss';
	import ImageDetailDependentContent from './image-detail-dependent-content.svelte';

    export let productImages;
    export let productsContentMapper;
    let stopScroll=false;
    let timeOutId;

    const setScrollReset=()=>{
        stopScroll=true;
        clearTimeout(timeOutId);
        timeOutId=setTimeout(()=>{
            stopScroll=false;
        },1000);
    }
    
    let clickedItem=-1;
    let resetIBImagesPosition;
    let scrollNode;
    let firstTimeClicked=null;
    const handleClick=(index)=>{
        stopScroll=true;
        const normalizedIndex=index % productImages.length;
        clickedItem=normalizedIndex;
        firstTimeClicked=firstTimeClicked===null? true: false;
    }

    const handleBackButtonClick=()=>{
        setScrollReset();
        resetIBImagesPosition();
        clickedItem=-1;
        firstTimeClicked=null;
    }

    $:dependentContent=productsContentMapper[productImages[clickedItem]?.desc];
</script>

<div bind:this={scrollNode} class="image-detail-container">
<div class={clickedItem===-1?"image-detail-background-key-wrapper__hide":'image-detail-background-key-wrapper'}>
{#if clickedItem!== -1}
    <ImageDetailDependentContent content={dependentContent ?? {}} />
{/if}
</div>
<div class="image-detail-image-basket-container">
<ImageBasket bind:setclickedImagePosition={resetIBImagesPosition}
    bind:clickedItem={clickedItem}
    clickedImageClass='image-detail-clicked-item mini-version {firstTimeClicked ? 'delay-border':''}'
    images={productImages}
    stopScroll={stopScroll}
    scrollNode={scrollNode}
    sliderImagesLength={productImages.length}
    handleBackButtonClick={ handleBackButtonClick }>
    <ImageBasketSliderItem slot="image-basket-component" 
        let:translationValues
        let:index
        let:image
        let:getIsMiniVersion
        translationValues={translationValues}
        index={index}
        image={image}
        stopScroll={stopScroll}
        getIndex={(index)=> index}
        handleClick={handleClick}
        totalItems={productImages.length}
        miniVersionItemOffset={30}
        getIsMiniVersion={getIsMiniVersion}/>
</ImageBasket>
</div>
</div>

