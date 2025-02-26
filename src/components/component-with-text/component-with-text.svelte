<script>
    import "./component-with-text-style.scss";
     
    export let  textPosition='right';
    export let buttonText;
    export let buttonClass='';
    export let containerClass='';
    // export let buttonLink='#';
</script>

<div class="svg-with-text-button {containerClass}">
    {#if textPosition==='right'}
    <slot name="component"/>
    <button class="svg-with-text-button-text {buttonClass}">
        { buttonText }
    </button>
    {:else}
    <button class="svg-with-text-button-text {buttonClass}">
        { buttonText }
    </button>
    <slot name="component"/>
    {/if}
</div>
