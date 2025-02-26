<script>
    import "./dual-carousel-styles.scss";
    export let dualCarouselWrapperClass;
</script>
<div class={`dual-carousel-wrapper ${dualCarouselWrapperClass}`}>
    <div class="dual-carousel-container">
        <div class="left-carousel-content">
            <slot name="left-carousel"/>
            <div class="dual-carousel-indicator-wrapper">
                <slot name="indicator"/>
            </div>
        </div>
        <slot name="middle-content"/>
        <slot name="right-carousel"/>
    </div>
    <div class="control-buttons">
        <slot name="previous-button"/>
        <slot name="next-button"/>
    </div>
</div>

<style>

</style>