<script>
    import './home-logo-style.scss';

    export let logoClass='';
    export let logoType='full'
</script>
{#if logoType === 'full' }
<a href="./" class={logoClass}>
<img alt="logo-full" class="home-logo__full" src="./images/jr-nav-logo1.svg"/>
</a>
{:else}
<a href="./" class={logoClass}>
<img alt="logo-short" class="home-logo__short" src="./images/jr-web-symbol.svg"/>
</a>
{/if}