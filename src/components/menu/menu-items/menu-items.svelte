<script>
    import "./menu-items-style.scss";
    export let isMenuOpen;
    export let option;
    export let index;  
</script>

<div class="menu-item">
    {#if option.link}
    <a href={option.link}>
        <button style="--index:{index}" class="menu-item-option {isMenuOpen?'active':'hidden'}">
            {option.text}
        </button>
    </a>
    {:else}
    <button on:click={option.handleClick} style="--index:{index}" class="menu-item-option {isMenuOpen?'active':'hidden'}">
        {option.text}
    </button>
    {/if}
</div>