<script>
import {defaultInitialPosition, handlePointerScroll, handleSliderWheel, touchHandler} from "../../utils/image-slider-helper.js";
	import InfoText from "../info-text/info-text.svelte";
import './image-slider-style.scss';

export let scrollNode;
export let stopScroll=false;
export let textContent;
export let offset=0;
export let images=[];
export let maxItems=0;
export let translationValues = [];
export let alterConstantValue=()=>{};
export let showInfo=true;

const getTranslationValue=(value)=> (value> (maxItems-1) * 100)? value - (maxItems*100) : value;

alterConstantValue=(value, speed=0.1 )=>{
    let firstValue=translationValues[0]-(value * speed);

    if(firstValue < -100){
            translationValues[0]=(maxItems-1)*100;
        }
        else if(firstValue> (maxItems-1) * 100){
            translationValues[0]=-100;
        }
        else{
            translationValues[0]=firstValue; 
        }

    for(let index=1;index<maxItems;index++){
        translationValues[index]=getTranslationValue(translationValues[index-1]+100);
    }
}
$:translationValues= defaultInitialPosition(images,offset);

const translateValue=(value)=>{
    !stopScroll && alterConstantValue(value);
}
const handleWheel=(e)=>{!stopScroll && handleSliderWheel(e, translateValue)}
const {handleTouchMove, handleTouchStart, handleTouchEnd} = touchHandler(translateValue);
const {handleMouseMove, handleStopPointerScroll} = handlePointerScroll(translateValue);


$:{
    const scrollNodeHeight=scrollNode?.clientHeight;
    scrollNode?.addEventListener('wheel',handleWheel);
    scrollNode?.addEventListener('mousemove', (e)=>handleMouseMove(e,scrollNodeHeight) );
    scrollNode?.addEventListener('mouseleave', handleStopPointerScroll)
    scrollNode?.addEventListener('touchmove',handleTouchMove);
    scrollNode?.addEventListener('touchstart',handleTouchStart);
    scrollNode?.addEventListener('touchend',handleTouchEnd);
}
</script>

<div class="image-slider-image-container">
    {#each images as image, index }
    <slot name="image-slider-component" {translationValues}
          {index}
          {image}/>
    {/each}
    {#if showInfo}
    <InfoText textContent={textContent}/>
    {/if}
</div>