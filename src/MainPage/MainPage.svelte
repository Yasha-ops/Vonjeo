
<script>

	import { Tabs, TabList, TabPanel, Tab } from './Tabs/tabs.js';
    import PageTextZone from './PageTextZone.svelte';


	let tab_list = [
			{ name : "One", content:"HELLO"} ,
			{ name : "Two", content:"WORLD"} ,
			{ name : "Three", content:"HEY"} 
	]

    let h, w;
</script>

    
<Tabs>
	
	<TabList>
		{#each tab_list as tab}
			<Tab>{tab.name}</Tab>
		{/each}
	</TabList>

	{#each tab_list as tab}
	<TabPanel bind:clientHeight={h}>
        <div class="flex-1 h-full bg-green-500" bind:clientHeight={h} bind:clientWidth={w}>
            <PageTextZone h_parent={h} w_parent={w} text={h}/>
        </div>
	</TabPanel>
	{/each}

</Tabs>
