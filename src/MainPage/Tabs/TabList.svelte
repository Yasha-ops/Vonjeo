<script>
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';
 
	import { DEBUG, tabs } from './../../Utils/store.js'

	
    export let itemsData;
	export let itemComponent;
	
    export let onDrop;
	export let onePage;	
    export let idPropertyName = "id";
	export let flipDurationMs = 300;

	function handleConsider(e) {
		itemsData = e.detail.items;
	}

	function handleFinalize(e) {    
		onDrop(e.detail.items);
	}

	let logger = DEBUG("TABLIST");
</script>


{console.log(logger("tabs"), $tabs)}
{#if ! onePage}
	<section use:dndzone={{items: itemsData, flipDurationMs}} on:consider={handleConsider} on:finalize={handleFinalize}  class="flex-none flex bg-zinc-600 h-8 w-full" id="tabs_id">
		{console.log(logger("tabs"), $tabs)}
		{#each itemsData as item(item[idPropertyName])}
			<div animate:flip={{duration: flipDurationMs}}>
				<svelte:component this={itemComponent} {item}/>
			</div>
		{/each}
	</section>
{:else}
	<div class="flex-none flex bg-zinc-600 h-8 w-full" id="tabs_id">
		{console.log(logger("tabs"), tabs)}
		{#each itemsData as item(item[idPropertyName])}
			<div animate:flip={{duration: flipDurationMs}}>
				<svelte:component this={itemComponent} {item}/>
			</div>
		{/each}
	</div>
{/if}
