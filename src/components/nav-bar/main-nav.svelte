<script>

	import ComponentWithText from "../component-with-text/component-with-text.svelte";
	import HomeLogo from "../home-logo/home-logo.svelte";
	import ContactMenuDemo from "../menu/contact-menu-demo.svelte";
	import NavBarExtended from "./nav-bar-extended.svelte";

    export let contactButton;
    export let currentPageConfig;

</script>
<div class="nav-bar animate-blur ">
    <div class="nav-wrapper ">
    <div class="nav-container">
        <div class="nav-empty-space height-1 animate-disappear"></div>
        <div class="space-between-row">
        <div class="menu-icon-placeholder"/>
        <div class="nav-logo-wrapper">
        <HomeLogo logoClass="nav-logo-image animate-opacity-to-zero" logoType="full"/>
        <HomeLogo logoClass="nav-logo-image second invisible animate-opacity-to-one" logoType='short' />
        </div>
        <a class="nav-contact-us-wrapper" href="./contact-us.html">
        <ComponentWithText buttonText={contactButton.text}/>
        </a>
        </div>
        <div class="nav-empty-space height-3 animate-disappear"/>
        <hr class="animate-disappear nav-hr"/>
    </div>
    </div>
    <NavBarExtended currentPageConfig={currentPageConfig}/>
    </div>