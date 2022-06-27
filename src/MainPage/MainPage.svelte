<script>
    //import TabList from './TabList.svelte';
	import Page from './Page/Page.svelte';

	import {Tabs, TabPanel, TabList, Tab} from './Tabs/tabs.js';

	let tabs = [
		{name : "one"},
		{name : "two"},
		{name : "three"}];

</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-red-200" id="main_files">   
	<!-- TabList/ -->
	<Tabs>
		<TabList>
			{#each tabs as tab}
				<Tab>{tab.name}</Tab>
			{/each}
		</TabList>

		{#each tabs as tab}
			<TabPanel>
				<Page/>
			</TabPanel>
		{/each}
	</Tabs>
	<!-- Page/ -->
</div>