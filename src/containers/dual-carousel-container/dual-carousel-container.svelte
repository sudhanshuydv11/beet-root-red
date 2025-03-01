<script>
    import DualCarousel from "../../components/dual-carousel/dual-carousel.svelte";
	import Indicator from "../indicator.svelte";
    import ProgressIndicator from "../../components/carousel-indicator/progress-indicator.svelte";
	import MiddleContent from "../../components/dual-carousel/middle-content.svelte";
	import ComponentWithText from "../../components/component-with-text/component-with-text.svelte";
	import SliderCarousel from "../../components/carousel/slider-carousel/slider-carousel.svelte";
	import {FLY_DISTANCE_IN, FLY_DISTANCE_OUT, LEFT_CAROUSEL_SLIDE_DELAY, MIDDLE_CONTENT_DELAY, MIDDLE_CONTENT_DURATION, MIDDLE_CONTENT_OUT_DURATION, SLIDE_CHANGE_TIME} from "./dual-carousel-constants";
	import "./dual-carousel-container-style.scss";
	import { fade, fly } from "svelte/transition";

	import arrowCursor from '/images/learn-more-btn1.svg';

	const nextButton = {
		text:'NEXT',
		imgSrc:""
	};

	const previousButton={
		text:'PREVIOUS',
		imgSrc:''
	};

	const getSlideIndex=(index, diff)=> (items.length + index + diff) % items.length;
    const items=[
	{
		image:'images/JR-bomb-baslet.jpg',
		heading:'BOMB BASKET',
		desc:'JR Defense Bomb Basket is designed & developed to mitigate the blast impact of 2 kgs TNT or Equivalent explosives without affecting the surroundings and human lives.',
		link: './bomb-basket-with-trolley.html'
	},
	{
		image:'images/JR-Bomb-inhibitor.jpg',
		heading:'BOMB INHIBITOR',
		desc: 'JR Defense Technologies indiginiously developed  Bomb Inhibitor (MATRIX), specially adapted to be  used for reducing the deleterious effect of a bomb  blast of upto 1.5 kg TNT...',
		link: './bomb-inhibitor.html'
	},
	{
		image:'images/lexus-back.png',
		heading:'AUTOMOTIVE ARMOURING',
		desc: 'Armoured vehicle offers increased safety. it is not an impenetrable vault. But what you really buy is time, to react and make the right decision.',
		link: "./automotive-armouring.html"
	}
	];
	const [firstItem,...restItems]=items;
	const rightCarouselItems=restItems.concat(firstItem);

	let currentSlideItem=0;
	let changeIndexIntervalId;
	let changeTranslationsLeft=null;
	let changeTranslationsRight=null;

	const resetInterval=(id, intervalFn)=>{
		clearInterval(id);
		changeIndexIntervalId=setInterval(intervalFn, SLIDE_CHANGE_TIME);
	}

	const handleSlideChange=(difference)=>{
		currentSlideItem=getSlideIndex(currentSlideItem, difference);
	}
	const handleNextClick=()=>{
		resetInterval(changeIndexIntervalId, handleNextClick);
		handleSlideChange(1);
	};
	const handlePreviousClick=()=>{
		resetInterval(changeIndexIntervalId, handleNextClick);
		handleSlideChange(-1);
	};
	// changeIndexIntervalId=setInterval(handleNextClick,SLIDE_CHANGE_TIME);

	const handleRightSlideChange=()=>{
		handleSlideChange(1);
		changeTranslationsRight()
	}

	$:{
		if(changeTranslationsRight && changeTranslationsLeft ){
			setTimeout(()=> setInterval(changeTranslationsLeft,SLIDE_CHANGE_TIME),LEFT_CAROUSEL_SLIDE_DELAY);
			setInterval(handleRightSlideChange,SLIDE_CHANGE_TIME);

		}
	}

</script>
<div class="background-carousel">
	<div class="spacer-dual-carousel">&nbsp;</div>

	<h2 class="dual-carousel-heading">
		LATEST PRODUCTS
	</h2>
<DualCarousel dualCarouselWrapperClass="background-red">
	<div slot="left-carousel" class="dual-carousel-container-left">
		<SliderCarousel bind:changeTranslations={changeTranslationsLeft} images={items}/>
	</div>
	<div slot='indicator' class="indicator-container">
	<Indicator currentIndex={currentSlideItem}
		quantity={items.length}
		indicatorClass={'dual-carousel-indicator'}
		let:showTimer>
	<ProgressIndicator progressIndicatorClass='dual-carousel-progress-indicator'
		duration={SLIDE_CHANGE_TIME}
		showTimer={showTimer}/>
</Indicator>
</div>
<div class="dual-carousel-middle-content-container" slot="middle-content">
{#key currentSlideItem }
<div class="dual-carousel-middle-content" in:fly={{x:FLY_DISTANCE_IN, duration: MIDDLE_CONTENT_DURATION, delay:MIDDLE_CONTENT_DELAY}} out:fly={{x:-(FLY_DISTANCE_OUT) , duration: MIDDLE_CONTENT_OUT_DURATION}}>
<div out:fade={{duration:MIDDLE_CONTENT_OUT_DURATION}} in:fade={{duration:MIDDLE_CONTENT_DURATION}}>
<MiddleContent  currentIndex={currentSlideItem}
	slides={items}/>
</div>
</div>
{/key}
</div>

	<div slot="right-carousel" class="dual-carousel-container-right" style={`--custom-cursor: url('${arrowCursor}')`}>
		<SliderCarousel  bind:changeTranslations={changeTranslationsRight} images={rightCarouselItems}/>
	</div>
	<button slot="previous-button"
	class="dual-carousel-change-button"
	on:click={handlePreviousClick}>
	    <ComponentWithText buttonText={previousButton.text} textPosition=right>
            <img slot="component" src={previousButton.imgSrc} alt={previousButton.text}>
        </ComponentWithText>
   </button>
	<button slot="next-button"
	 class="dual-carousel-change-button"
	 on:click={handleNextClick}>
	 <ComponentWithText buttonText={nextButton.text} textPosition=right>
		<img slot="component" src={nextButton.imgSrc} alt={nextButton.text}>
	</ComponentWithText>
	</button>
</DualCarousel>
<div class="spacer-dual-carousel">&nbsp;</div>
</div>



<style>
	.dual-carousel-container-right:hover{
		cursor: var(--custom-cursor), auto;
	}
</style> 