<script>
	import { spring } from 'svelte/motion';

	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);

	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.35
		}
	);

	let size = spring(12);

</script>

<svelte:window
	on:mousemove={(e) => {

		coords1.set({ x: e.clientX, y: e.clientY })
		coords2.set({ x: e.clientX, y: e.clientY })
	}}
	on:mousedown={(e) => {
		size.set(30);
	}}
	on:mouseup={(e) => {
		size.set(10);
	}}
/>
<svg
	class =" new-cursor w-full h-full"
>
	<circle cx={Math.abs($coords1.x)} cy={Math.abs($coords1.y)} r={$size} stroke="white" stroke-width="2" fill-opacity="0"/>
	<circle cx={Math.abs($coords2.x)} cy={Math.abs($coords2.y)} r={$size/4} fill="lightgray"/>
</svg>

<style>
	:global(body) {
		cursor: none;
	}
	
	.w-full {
		width: 100%;
	}
	
	.h-full {
		height: 100%;
	}
	
	svg {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
        z-index: 4;
		mix-blend-mode: difference;
		
	}

	@media (hover: none) or (pointer: coarse) {
		.new-cursor{
			display: none;
		}
	}

</style>