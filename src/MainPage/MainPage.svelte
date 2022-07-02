<script>
	import Page from './Page/Page.svelte';
	import Debugger from './../Debuger/Debuger.svelte';

	import {Tabs, TabPanel, TabList, Tab} from './Tabs/tabs.js';
	import {DEBUG, store_tabs, TypeFile} from './../Utils/store.js';

	function onDrop(newItems) {
		$store_tabs[0] = newItems;	
		console.log(newItems);
	}	

	export let onePage;
	export let mIndex;
</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-zinc-900" id="main_files">   
	<!-- TabList/ -->
	<Tabs>
		<TabList itemsData={$store_tabs[mIndex]} itemComponent={Tab} onDrop={onDrop} onePage={onePage}/>
			{#each $store_tabs[mIndex] as tab}
				<TabPanel id={tab.id} mIndex={mIndex}>
					{#if tab.type === TypeFile.FILE }
						<Page text={tab.content} name={tab.panel_id}/>
					{:else}
						<Debugger/>
					{/if}
				</TabPanel>
			{/each}
	</Tabs>
</div>
