<script>

    import CarsSlider from "../../../containers/cars-slider.svelte";
	import DaImageDetailContainer from "../../../containers/defense-armour-basket/da-image-detail-container.svelte";

    export let morchaDetails;

</script>

{#if morchaDetails==='features'}

<CarsSlider/>

{:else}

<DaImageDetailContainer/>

{/if}