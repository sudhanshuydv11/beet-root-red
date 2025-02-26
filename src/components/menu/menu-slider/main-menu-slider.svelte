<script>
	import MenuSlider from "./menu-slider.svelte";

    export let isMenuOpen;
    export let isSubMenuOpen;
    export let subMenuHeading;
    export let menuItems;
    export let subMenuItems;

</script>
<MenuSlider isMenuOpen={isMenuOpen}
    subMenuHeading={subMenuHeading}
    subMenuItems={subMenuItems} 
    menuItems={menuItems} 
    bind:isSubMenuOpen={isSubMenuOpen}
/>