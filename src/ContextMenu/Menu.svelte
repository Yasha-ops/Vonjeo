<script>
	import { onMount, setContext, createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { key } from './menu.js';

	export let x;
	export let y;
	
	// whenever x and y is changed, restrict box to be within bounds
	$: (() => {
		if (!menuEl) return;
		
		const rect = menuEl.getBoundingClientRect();
		x = Math.min(window.innerWidth - rect.width, x);
		if (y > window.innerHeight - rect.height) y -= rect.height;
	})(x, y);
	
	const dispatch = createEventDispatcher();	
	
	setContext(key, {
		dispatchClick: () => dispatch('click')
	});
	
	let menuEl;
	function onPageClick(e) {
		if (e.target === menuEl || menuEl.contains(e.target))
			return;
		dispatch('clickoutside');
	}
</script>

<svelte:body on:click={onPageClick} />

<div  class="context-menu" transition:fade={{ duration: 100 }} bind:this={menuEl} style="top: {y}px; left: {x}px;" name="context-menu">
	<slot />
</div>