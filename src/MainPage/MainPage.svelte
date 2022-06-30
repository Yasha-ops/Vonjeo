<script>
    import Debugger from './../Debuger/Debuger.svelte';
	import Page from './Page/Page.svelte';

	import {Tabs, TabPanel, TabList, Tab} from './Tabs/tabs.js';
	import {store_tabs, TypeFile} from './../Utils/store.js';

</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-zinc-900" id="main_files">   
	<!-- TabList/ -->
	<Tabs>		
		<TabList>
		   {#each $store_tabs as tab, itemIndex (tab)}
			<Tab basketIndex={0} itemIndex={itemIndex} filename={tab.filename}>
					{tab.filename}
			</Tab>
		   {/each}
		</TabList>


		{#each $store_tabs as tab}
			<TabPanel id={tab.id}>
				{#if tab.type === TypeFile.FILE }
					<Page/>
				{:else}
					<Debugger/>
				{/if}
			</TabPanel>
		{/each}
	</Tabs>
</div>