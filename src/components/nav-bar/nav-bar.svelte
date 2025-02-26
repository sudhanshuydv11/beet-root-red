<script>
    import Menu from "../menu/menu.svelte";
	import MainNav from "./main-nav.svelte";
	import NavMenu from "./nav-menu.svelte";
    import './nav-bar.scss';

    export let currentPageConfig;

    let isMenuOpen = false;
    let isSubMenuOpen=false;
    const toggleMenu=()=>{
        isSubMenuOpen = false;
        isMenuOpen=!isMenuOpen;
    }
    
    const BUTTONS_MAPPER={
        menu:{
            text: 'MENU',
            imgSrc:"./images/menu.svg"
        },
        close:{
            text:'CLOSE',
            imgSrc:'./images/close.svg'
        },
        contact:{
            text:"ENQUIRE",
            imgSrc:'./images/Call.svg'
        }
    }
    
    let leftButton=BUTTONS_MAPPER.menu;
    let contactButton=BUTTONS_MAPPER.contact;
    
    $:{
        leftButton=isMenuOpen ? BUTTONS_MAPPER.close :BUTTONS_MAPPER.menu;
    }
    
    </script>
<div class="nav-component display-above-all">
<MainNav currentPageConfig={currentPageConfig} contactButton={ contactButton }/>

<Menu isMenuOpen={isMenuOpen} bind:isSubMenuOpen={isSubMenuOpen}/>

<NavMenu isMenuOpen={isMenuOpen} leftButton={leftButton} toggleMenu={toggleMenu}/>
</div>