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

</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-zinc-900" id="main_files">   
	<!-- TabList/ -->
	<Tabs>

		<TabList itemsData={$store_tabs} itemComponent={Tab} onDrop={onDrop}/>

		{#each $store_tabs as tab}
			<TabPanel id={tab.id}>
				{#if tab.type === TypeFile.FILE }
					<Page text={tab.content}/>
				{:else}
					<Debugger/>
				{/if}
			</TabPanel>
		{/each}
	</Tabs>
</div>