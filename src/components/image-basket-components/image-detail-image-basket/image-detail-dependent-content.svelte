<script>
	import SliderCarousel from "../../carousel/slider-carousel/slider-carousel.svelte";
    import {fade} from 'svelte/transition';
    import './image-detail-image-basket-style.scss';

    export let content={};
    let intervalId=null;
    let changeTranslations;
    $:startCarousel=()=>{
        intervalId && clearInterval(intervalId);
        intervalId=setInterval(changeTranslations, 3000);
    }
    
    $:{
        clearInterval(intervalId)
        content.images?.length>1 && startCarousel();
    }

</script>

<div in:fade={{delay:1500, duration:1000}} class="image-detail-background-container">
    <div class="header">

    </div>
    <div class="info-container">
        <div class="text-content">
            <div class="type">
                    <!-- Armoured Back -->
                     {content.type}
            </div>
            <div class="name">
                <!-- Hoe Loader -->
                 {content.name}
            </div>
            <div class="model">
                <!-- // Model - Destroyer -->
                 {content.model}
             </div>
            <div class="manufacturing-place">
                {content.manufacturingPlace}
                <!-- // designed & made in India -->
            </div>
            <div class="description">
                {content.description}
                 <!-- blah blah blah blha blha -->
                </div>
        </div>
        <div class="carousel">
            <SliderCarousel bind:changeTranslations={changeTranslations} images={content.images}/>
        </div>
    </div>
    <div class="empty-row">
    </div>
</div>