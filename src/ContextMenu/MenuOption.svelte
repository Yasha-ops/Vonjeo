<script>
	import { getContext } from 'svelte';
	import { key } from './menu.js';
	
	export let isDisabled = false;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();	
	
	const { dispatchClick } = getContext(key);
	
	const handleClick = e => {
		if (isDisabled) return;
		
		dispatch('click');
		dispatchClick();
	}
</script>

<div class="context-menu-item" class:disabled={isDisabled} on:click={handleClick} >
	<slot></slot>
</div>
