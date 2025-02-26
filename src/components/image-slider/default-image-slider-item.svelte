<script>   
    import "./image-slider-style.scss";
    export let translationValues;
    export let index;
    export let image;
    export let itemClass='';
    export let ImageClass='';

    $:itemClass=`image-slider-item ${itemClass}`;
    $: ImageClass=`image-slider-item-image ${ImageClass}`;
</script>

<button style='--translate:{translationValues[index]}' 
class= {itemClass}>
<img class= {ImageClass} src={image.image} alt="{index}"/>   

</button> 