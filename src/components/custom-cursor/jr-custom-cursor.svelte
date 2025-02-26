<script>

import "./jr-custom-cursor-style.scss";

let cursorDot;
let cursorOutline;

document.addEventListener( `mousemove`, function (e){

    const posX = e.offsetX;
    const posY = e.offsetY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;


    cursorOutline.animate({

        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards"});

});


</script>

<div class="cursor-container">

<div bind:this={cursorDot} class="cursor-dot" data-cursor-dot></div>
<div bind:this={cursorOutline} class="cursor-outline" data-cursor-outline></div>


</div>

