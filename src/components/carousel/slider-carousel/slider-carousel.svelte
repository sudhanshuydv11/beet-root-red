<script>
    import ImageSlider from "../../image-slider/image-slider.svelte";
    import DefaultImageSliderItem from "../../image-slider/default-image-slider-item.svelte";
    import "./slider-carousel-style.scss";
    export let images=[];
    export let changeTranslations;

    let scrollNode;
    let translationValues=[];

    const getTranslationValue=(value, totalItems)=>{
        if(value === -200){
            return (totalItems-2)*100;
        }
        return value;
    }

    changeTranslations=()=>{
        translationValues=translationValues.map((currentValue)=>{
            return getTranslationValue(currentValue-100, translationValues.length);
        });
    }
</script>

<div bind:this={scrollNode} class='slider-carousel-container'>
<ImageSlider bind:translationValues={translationValues}
images={images}
showInfo={false}
maxItems={images.length}
scrollNode={scrollNode}
stopScroll={ true }>
   <DefaultImageSliderItem slot="image-slider-component" 
   let:index
   let:image
   let:translationValues
   {translationValues}
   {index}
   {image}
   itemClass='slider-carousel-item {translationValues[index] === (translationValues.length-2)*100 ?'invisible':''}'
   ImageClass='slider-carousel-item-image' 
   />
</ImageSlider>
</div>
