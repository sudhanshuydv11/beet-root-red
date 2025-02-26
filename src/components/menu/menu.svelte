<script>
    import {MENU_OPTIONS, SUB_MENU_OPTIONS} from "./constants";
    import "./menu-style.scss";
	import MainMenuSlider from "./menu-slider/main-menu-slider.svelte";
	import SubMenuSlider from "./menu-slider/sub-menu-slider.svelte";

    export let isMenuOpen;
    export let isSubMenuOpen;

    let currentSubMenuOptions=[];
    let currentClickedMenu;
    
    const handleOpenSubMenu=(clickedMenu)=>{
    const openSubMenu=() => {
        currentClickedMenu=clickedMenu;
        currentSubMenuOptions=SUB_MENU_OPTIONS[clickedMenu];
        isSubMenuOpen = true;
    };
      
    return openSubMenu;
}

const menuItems=[
    {text:MENU_OPTIONS.HOME, link:'./'},
    {text:MENU_OPTIONS.AUTOMOTIVE_ARMOURING, link:'./automotive-armouring.html'},
    {text:MENU_OPTIONS.BOMB_BLAST_PROTECTION,handleClick: handleOpenSubMenu(MENU_OPTIONS.BOMB_BLAST_PROTECTION)},
    {text:MENU_OPTIONS.BULLET_RESISTANT_PRODUCTS,handleClick: handleOpenSubMenu(MENU_OPTIONS.BULLET_RESISTANT_PRODUCTS)},
    {text:MENU_OPTIONS.ABOUT_US, link:'./about-us.html'},
    {text:MENU_OPTIONS.CONTACT_US, link:'./contact-us.html'}
    ];

const bodyElement = document.body;

    $:{
        if(isMenuOpen){
            bodyElement.style.overflowY='hidden';
        }
        else{

            bodyElement.style.overflowY='auto';

        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="menu-wrapper {isMenuOpen?'active':'hidden'}">
    <MainMenuSlider
     menuItems={ menuItems } 
     subMenuItems={currentSubMenuOptions} 
     isMenuOpen={isMenuOpen}
     subMenuHeading={currentClickedMenu} 
     bind:isSubMenuOpen={isSubMenuOpen}/>
    <!-- <SubMenuSlider isSubMenuOpen={isSubMenuOpen} currentSubMenuOptions={currentSubMenuOptions}/> -->
</div>