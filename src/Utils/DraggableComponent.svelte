<script>
    import { showSpotify } from './store.js';
	export let left = 100;
	export let top = 100;
	let moving = false;	
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	function onMouseUp() {
		moving = false;
	}
	
</script>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable" class:visible={$showSpotify} class:unvisible={!$showSpotify}>
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.draggable {
		user-select: none;
		cursor: move;
		position: absolute;
		z-index: 2000; /* Usefull to create an overlay effect */
	}
    .visible {
        visibility: visible;
    }
    .unvisible{
        visibility: hidden;
    }
</style>