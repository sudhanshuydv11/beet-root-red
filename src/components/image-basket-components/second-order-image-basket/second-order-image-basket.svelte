<script>
	import ImageSlider from "../../image-slider/image-slider.svelte";
    import "./second-order-image-basket-style.scss";
    import ImageBasket from "../image-basket/image-basket.svelte";
	import DefaultImageSliderItem from "../../image-slider/default-image-slider-item.svelte";
	import ImageBasketSliderItem from "../image-basket/image-basket-slider-item.svelte";
	import { getIsImagesLessThanViewport, handlePointerScroll, handleSliderWheel, touchHandler } from "../../../utils/image-slider-helper";

    export let images=[];
    export let dependentImages={};
    export let textContent;

    let scrollNode;
    let resetImagesPosition;
    let resetIBImagesPosition;
    let clickedItem=-1;

    let stopScroll=false;
    let timeOutId;
    let alterConstantValueImageBasket;
    let alterConstantValueImageSlider;

const translateValue=(value)=>{
        if(!stopScroll){
            alterConstantValueImageBasket(value);
            alterConstantValueImageSlider(value);
        }
}

const handleWheel=(e)=>{!stopScroll && handleSliderWheel(e, translateValue)}
const {handleTouchMove, handleTouchStart, handleTouchEnd} = touchHandler(translateValue);
const {handleMouseMove, handleStopPointerScroll} = handlePointerScroll(translateValue,scrollNode);


$:{
    const scrollNodeHeight=scrollNode?.clientHeight;
    scrollNode?.addEventListener('wheel',handleWheel);
    scrollNode?.addEventListener('mousemove', (e)=>handleMouseMove(e,scrollNodeHeight) )
    scrollNode?.addEventListener('mouseleave', handleStopPointerScroll)
    scrollNode?.addEventListener('touchmove',handleTouchMove);
    scrollNode?.addEventListener('touchstart',handleTouchStart);
    scrollNode?.addEventListener('touchend',handleTouchEnd);
}

    const setScrollReset=()=>{
        stopScroll=true;
        clearTimeout(timeOutId);
        timeOutId=setTimeout(()=>{
            stopScroll=false;
        },1000);
    };
    
    const getDependentImages=(clickedItem)=> {
      const clickedImageName=  images[clickedItem]?.name;
      return dependentImages[clickedImageName] ?? [];
    };

    const handleClick=(index)=>{
        if(clickedItem!=index){
            clickedItem=index;
            setScrollReset();
            resetIBImagesPosition();
        }
    }
    const handleSecondOrderIBReset=()=>{
        setScrollReset()
        resetIBImagesPosition();
        clickedItem= -1;
    }
    const getIndex=(index)=> clickedItem===index?0:index;

    $:imageSliderDependentImages=getDependentImages(clickedItem);
    $:newImages=getIsImagesLessThanViewport(imageSliderDependentImages) ? imageSliderDependentImages.concat(imageSliderDependentImages): imageSliderDependentImages;
    $: getSliderImageLength=()=>{
        return clickedItem=== -1
        ?images.length
        : newImages.length ? newImages.length: images.length;
    }
</script>

        <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->

<div bind:this={scrollNode} class="second-order-container">
{#key clickedItem}
<div class="second-order-item will-change-contents second-order-item-animate-appearance">
    <ImageSlider bind:resetImages={resetImagesPosition}
     bind:alterConstantValue={alterConstantValueImageSlider}
     images={newImages}
     stopScroll={stopScroll}
     maxItems={newImages.length }>
        <DefaultImageSliderItem slot="image-slider-component" 
        let:translationValues
        let:index
        let:image
        {translationValues}
        {index}
        {image}
        />
    </ImageSlider>
</div>
{/key}
<div class="second-order-item">
<ImageBasket bind:setclickedImagePosition={resetIBImagesPosition}
    bind:clickedItem={clickedItem}
    bind:alterConstantValue={alterConstantValueImageBasket}
    bind:stopScroll={stopScroll}
    textContent={textContent}
    images={images}
    sliderImagesLength={getSliderImageLength()}
    handleBackButtonClick={handleSecondOrderIBReset}>
    <ImageBasketSliderItem slot="image-basket-component" 
        let:translationValues
        let:index
        let:image
        let:getIsMiniVersion
        translationValues={translationValues}
        index={index}
        image={image}
        stopScroll={stopScroll}
        getIndex={getIndex}
        handleClick={handleClick}
        totalItems={images.length}
        getIsMiniVersion={getIsMiniVersion}/>
</ImageBasket>
</div>
</div>