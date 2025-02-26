<script>
    export let imageSrc;
    export let wrapperClass = "";
    export let imageClass = "" ;
    let containerNode;
    let ImageNode;
    let isIntersecting=false;
    let clippingDistance=0;
    const HEIGHT_INSET=12;
    const WIDTH_INSET=15;
    let currentHeightInset=HEIGHT_INSET;
    let currentWidthInset=WIDTH_INSET;
    let scrollHeight=0;

    let widthInsetStep=0;
    let heightInsetStep=0;
    let isGoingDown=true;


    const observer=new IntersectionObserver(([entry])=>{

        isIntersecting=entry.isIntersecting;
        clippingDistance=entry.boundingClientRect.height / 2;

        widthInsetStep=WIDTH_INSET/clippingDistance;
        heightInsetStep=HEIGHT_INSET/clippingDistance;
        scrollHeight=document.documentElement.scrollTop;
        isGoingDown=(clippingDistance/2 > Math.abs(entry.boundingClientRect.top)) && isIntersecting;
    },{threshold:0.5});
    $:{
        if(containerNode){
        observer.observe(containerNode);
        }
    }

    document.addEventListener('scroll', ()=>{

        if(isIntersecting && (!(currentHeightInset <0) || !(currentWidthInset <0))){
            const newScrollHeight= document.documentElement.scrollTop;
            const scrollStep=scrollHeight - newScrollHeight;
            const thresholdHeight = isGoingDown ? HEIGHT_INSET: 0;
            const thresholdWidth = isGoingDown ? WIDTH_INSET: 0;
            currentHeightInset=thresholdHeight + ( scrollStep * heightInsetStep);
            currentWidthInset= thresholdWidth + (scrollStep * widthInsetStep);
            ImageNode.style.clipPath=`inset(${currentHeightInset}% ${currentWidthInset}% ${currentHeightInset}% ${currentWidthInset}%)`
        }
        else if((currentHeightInset <0) || (currentWidthInset <0)){
            currentHeightInset=0;
            currentWidthInset=0;
        }
    });
</script>
    
        <div bind:this={containerNode} class={`expand-image-wrapper ${wrapperClass}`}>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img bind:this={ImageNode} class={`clipped-image ${imageClass}`} src={imageSrc}>
        </div>
    
    <style>
        @keyframes un-clip{
            from{
                clip-path: inset(12% 15% 12% 15%);
            }
            to{
                clip-path: inset(0 0 0 0);
            }
        }
        .expand-image-wrapper{
            position:relative;
            height:180vh;
            width:100%;
            
        }
        .clipped-image{
            position: sticky;
            top:0;
            left: 0;
            clip-path: inset(12% 15% 12% 15%);
            width: 100%;
            object-fit: cover;
            padding: 0;
            min-height: 100vh;
        }
    </style>