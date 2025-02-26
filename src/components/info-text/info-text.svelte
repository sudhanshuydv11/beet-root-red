<script>
    import "./info-text-style.scss";
    
    export let textContent;
    const DEFAULT_TEXT="'Move your cursor left or right to scroll. The farther you go, the faster it moves.'";
</script>
<div class="info-text-container">
<button class="info-text-icon-wrapper">
    <img class="info-text-icon-image" src="./images/question_yellow.png" />
</button>
<div class="info-text-description">
    <i>{textContent ?? DEFAULT_TEXT}</i>
</div>
</div>