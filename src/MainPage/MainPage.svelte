<script>

	import { Tabs, TabList, TabPanel, Tab } from './Tabs/tabs.js';
    import PageTextZone from './PageTextZone.svelte';
    import Debuger from '../Debuger/Debuger.svelte'

    import { store_tab_list, debug_on } from '../lib/Store.js'

    /*let tab_list = [
			{ name : "One", content:"HELLO"} ,
			{ name : "Two", content:"WORLD"} ,
			{ name : "Three", content:"HEY"} 
	]*/

    let check_debug;

    debug_on.subscribe(v => {
        check_debug = v;
    });

    let h, w;
</script>

    
<Tabs>
	
	<TabList>
		{#each $store_tab_list as tab}
			<Tab>{tab.name}</Tab>
		{/each}
	</TabList>

	{#each $store_tab_list as tab}
	<TabPanel bind:clientHeight={h}>
        <div class="flex-1 h-full" bind:clientHeight={h} bind:clientWidth={w}>
            {#if check_debug && tab.name === "Debug"}
                <Debuger/>
            {:else}
                <PageTextZone h_parent={h} w_parent={w} text={h}/>
            {/if}
        </div>
	</TabPanel>
	{/each}

</Tabs>
