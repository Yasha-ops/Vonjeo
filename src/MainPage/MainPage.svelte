<script>
	import Page from './Page/Page.svelte';
	import Debugger from './../Debuger/Debuger.svelte';
	import {Tabs, TabPanel, TabList, Tab} from './Tabs/tabs.js';
	import {DEBUG, store_tabs, TypeFile} from './../Utils/store.js';
	function onDrop(newItems) {
		$store_tabs = newItems;	
		console.log(DEBUG("ONDROP")(""));
		console.log(newItems);
	}

	function saveFile(obj){
		obj.detail.value.saved = true;
		// FIXME ADD THE FETCH COMMAND TO SAVE THE FILE TO THE BACK
	}


	function updateText(obj){
		let tab  = $store_tabs.find((n) => n === obj.detail.value);
		tab.content = obj.detail.text;
		tab.saved = false;
	}
	export let onePage = false;
</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-zinc-900" id="main_files">   
	<!-- TabList/ -->
	<Tabs>

		<TabList itemsData={$store_tabs} itemComponent={Tab} onDrop={onDrop}/>

		{#if ! onePage}
			{#each $store_tabs as tab}
				<TabPanel id={tab.id}>
					{#if tab.type === TypeFile.FILE }
						<Page text={tab.content} tab={tab} name={tab.panel_id} on:saveFile={saveFile} on:updateText={updateText}/>
					{:else}
						<Debugger/>
					{/if}
				</TabPanel>
			{/each}
		{:else}
				<Page text="// Splitted" name="Split"/>
		{/if}
	</Tabs>
</div>