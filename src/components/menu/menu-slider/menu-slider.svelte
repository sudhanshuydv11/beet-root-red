<script>
	import MenuItems from "../menu-items/menu-items.svelte";
    import "./menu-slider-style.scss";
   
    export let isMenuOpen;
    export let isSubMenuOpen;
    export let subMenuHeading;
    export let menuItems;
    export let subMenuItems;

    const handleSubMenuHeadingClick=()=>{
        isSubMenuOpen=false;        
    }

</script>

<div class="menu-slider {isMenuOpen?'active':'hidden'}">
<div class="menu-slider-main-menu menu-slider-sub-menu{isSubMenuOpen?'--opened':'--closed'}">
    <div class="menu-slider-items-wrapper">
        {#each menuItems as option , index }
            <MenuItems isMenuOpen={isMenuOpen} {option} {index}/>
        {/each}
    </div>
</div>

<div class="menu-slider-sub-menu {isSubMenuOpen?'active':'hidden'} ">
        <div class="menu-slider-sub-menu-heading {isSubMenuOpen?'active':'hidden'}">
            <button class="menu-slider-sub-menu-heading-button" on:click={handleSubMenuHeadingClick}>
                <span class="menu-slider-sub-menu-back-arrow">
                    <img src="./images/sub-menu-back-arrow.svg" alt="">
                </span>
                {subMenuHeading}
            </button>
        </div>
        <div id='empty-div-for-minimum-top-space'></div>
        <div class="menu-slider-sub-menu-items-wrapper {isSubMenuOpen?'':'hidden'} ">
            {#each subMenuItems as option , index }
                <MenuItems isMenuOpen={isSubMenuOpen} {option} {index}/>
            {/each}
        </div>
        <div id='empty-div-for-flex-space-between'></div>
    </div>

</div>