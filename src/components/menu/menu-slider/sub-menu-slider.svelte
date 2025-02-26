<script>
	import MenuSlider from "./menu-slider.svelte";
    export let currentSubMenuOptions;
    export let isSubMenuOpen;
</script>
<div>
<MenuSlider isMenuOpen={isSubMenuOpen} menuItems={currentSubMenuOptions}/>
</div>