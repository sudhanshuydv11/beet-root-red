<script>
	import ComponentWithText from '../component-with-text/component-with-text.svelte';
    import './nav-extended-style.scss';
    
    export let currentPageConfig;

    let isDropdownOpen=null;

    const DROPDOWN_SVG={
        COLLAPSE:'images/collapse-arrow.svg',
        EXPAND:'images/expand-arrow.svg'
    }
    const handleClick=()=> {
        isDropdownOpen=!isDropdownOpen;
    };
    
    $:selectedPageOptions = currentPageConfig?.options;
</script>
{#if selectedPageOptions }
<div class="nav-empty-space height-0-5 animate-disappear"/>
<div class="nav-extended-wrapper ">
<div class="nav-extended-head-wrapper">
    <button class="nav-extended-dropdown-button" on:click={handleClick}>
        <ComponentWithText buttonText={currentPageConfig.name.toUpperCase()}>
            <img class="collapse-arrow" slot="component" src={isDropdownOpen?DROPDOWN_SVG.COLLAPSE:DROPDOWN_SVG.EXPAND} alt="collapse-aarow"/>
        </ComponentWithText>
    </button>
</div>
<div class={`nav-extended-options ${ isDropdownOpen !== null && (isDropdownOpen?'open' : 'close')}`}>
    {#each selectedPageOptions as option, index (index) }
        <a class="nav-extended-options-item-container" href={option.link}>
            <button class="nav-extended-options-item {selectedPageOptions.length - 1 === index ? 'last':''}">
                {option.label}
            </button>
        </a>
    {/each}
</div>
</div>
{/if}