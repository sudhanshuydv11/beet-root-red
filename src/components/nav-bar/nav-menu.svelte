<script>

	import ComponentWithText from "../component-with-text/component-with-text.svelte";
	import HamburgerDemo from "../menu/hamburger-demo.svelte";

    export let leftButton;
    export let isMenuOpen;
    export let toggleMenu;

</script>
<div class="nav-bar nav-bar__click-through">
    <div class="nav-wrapper">
    <div class="nav-container">
        <div class="nav-empty-space height-1 animate-disappear"></div>
        <div class="space-between-row">
        <button class="menu-icon menu-icon-button" on:click={toggleMenu}>
            <ComponentWithText buttonText={leftButton.text}>
                <HamburgerDemo isMenuOpen={isMenuOpen} slot="component" />
            </ComponentWithText>
        </button>
        </div>
        <div class="nav-empty-space height-3 animate-disappear"></div>
    </div>
    </div>
    </div>