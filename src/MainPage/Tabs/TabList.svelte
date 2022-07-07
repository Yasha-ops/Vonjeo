<script>
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';
	
	import Tab from './Tab.svelte';
    import { DEBUG } from '../../Utils/store.js';

    export let itemsData;
	export let itemComponent;
	
	
    export let onDrop;
	
    export let idPropertyName = "id";
	export let flipDurationMs = 300;
	
	function handleConsider(e) {
		itemsData = e.detail.items;
	}

	function handleFinalize(e) {    
		onDrop(e.detail.items);
	}

	function removeTab(obj){
        console.log(DEBUG("TABLIST")("removeTab"));
		itemsData = itemsData.filter((n) => n !== obj.detail.valueTab);
         console.log(DEBUG("TABLIST")("removeTab"), obj.detail.valueTab);
        console.log(DEBUG("TABLIST")("removeTab"), obj.detail.valueTab);
	}
</script>


<section use:dndzone={{items: itemsData, flipDurationMs}} on:consider={handleConsider} on:finalize={handleFinalize}  class="flex-none flex bg-zinc-600 h-8 w-full" id="tabs_id">
	{#each itemsData as item(item[idPropertyName])}
		<div animate:flip={{duration: flipDurationMs}}>
			<Tab bind:this={itemComponent} item={item} on:deleteTab={removeTab} />	
		</div>
	{/each}
</section>
