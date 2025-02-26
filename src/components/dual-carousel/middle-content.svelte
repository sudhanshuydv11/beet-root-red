<script>
    import "./middle-content-style.scss"
	import ComponentWithText from "../component-with-text/component-with-text.svelte";

    export let slides;
    export let currentIndex;
    let currentSlideItem=slides[currentIndex];
    const button = {
        text: 'LEARN MORE',
        imgSrc: 'images/learn-more-btn1.svg'
    };

</script>
<div class="middle-content">
    <h2 class="middle-content-heading">
        {currentSlideItem.heading}
    </h2>
    <div class="middle-content-text">
        {currentSlideItem.desc}
    </div>
    <a class="middle-content-learn-more-link" href={currentSlideItem.link}>
    <ComponentWithText buttonText={button.text} buttonClass='middle-content-learn-more-button' containerClass={'middle-content-learn-more-container-mobile'}>
        <img slot="component" class="middle-content-learn-more-img" src={button.imgSrc} alt={button.text}>
    </ComponentWithText>
    </a>
</div>