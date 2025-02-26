<script>
    import "./image-basket-style.scss";
    export let totalItems;
    export let image;
    export let stopScroll;
    export let index;
    export let translationValues;
    export let handleClick;
    export let getIsMiniVersion;
    export let getIndex;
    export let miniVersionItemOffset = 50;
</script>

<button on:click={()=> handleClick(index)} 
    style='--translate:{translationValues[getIndex(index)]}; --index:{getIndex(index)};--totalItems:{totalItems};--offset:{miniVersionItemOffset}' 
    class="image-basket-item image-slider-item {getIsMiniVersion(index)} {stopScroll?'image-basket-allow-transition':''}">
    <img class="image-slider-item-image" src={image.image} alt="{index}"/>
</button>
 