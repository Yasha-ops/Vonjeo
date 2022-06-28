<script>
    //import TabList from './TabList.svelte';
	import Page from './Page/Page.svelte';

	import {Tabs, TabPanel, TabList, Tab} from './Tabs/tabs.js';

	import {flip} from 'svelte/animate';

	let baskets = [{
      "items": [
		  {filename:"Orange", id:"panel-Orange"},
		  {filename:"Pineapple", id:"panel-Pineapple"},
		  {filename:"Peach", id:"panel-Peach"}]
    }];
	
	let hoveringOverBasket;
	
	function drop(event, basketIndex) {
		event.preventDefault();
    	const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);
		baskets[basketIndex].items.push(item);
		baskets = baskets;
		hoveringOverBasket = null;
	}


</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-red-200" id="main_files">   
	<!-- TabList/ -->
	<Tabs>

	{#each baskets as basket, basketIndex (basket)}
	  <div animate:flip>
	    <ul on:drop={event => drop(event, basketIndex)} ondragover="return false">
		
			<TabList>
		    {#each basket.items as item, itemIndex (item)}
			<div class="item" animate:flip>
				<Tab basketIndex={basketIndex} itemIndex={itemIndex} filename={item.filename}>
						{item.filename}
				</Tab>
			</div> 
		    {/each}
			</TabList>
	    </ul>
	  </div>
	{/each}


	{#each baskets[0]["items"] as tab}	
		<TabPanel id={tab.id}>
			<Page/>
		</TabPanel>
	{/each}

	</Tabs>
</div>



<style>
	.item {
		display: inline; /* required for flip to work */
	}
  ul {
		display: flex; /* required for drag & drop to work when .item display is inline */
		height: 30px; /* needed when empty */
	}
</style>