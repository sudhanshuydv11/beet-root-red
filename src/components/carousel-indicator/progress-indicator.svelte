<script>
    import DumbIndicator from "./dumb-indicator.svelte";
    export let showTimer=false;
    export let duration=1000;
    export let progressIndicatorClass;
    export let svgAttributes={};
</script>
<svg {...svgAttributes} class={progressIndicatorClass}>
    <circle style="--indicator-duration:{duration}" stroke-dasharray=450 stroke-dashoffset=120 class="progress-indicator{showTimer?"--active":''}" cx='50%' cy="50%" r=20 />
    <DumbIndicator/>
</svg>