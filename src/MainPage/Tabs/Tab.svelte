<script>	
    export let item;
	
    import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
    
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoClose from "svelte-icons-pack/io/IoClose";
	
    const tab = {name: item.filename};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
   

    // TODO Add removeMe Function
	registerTab(tab);
</script>
    <div name="tab" class:tab-actif="{$selectedTab === tab}" class:tab-passif="{$selectedTab !== tab}">
        <div class="flex-auto flex justify-center items-center h-full m-full" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}" id="tab-{item.filename}-button">
            <h1 class="text-white flex-auto ml-2 mr-2 text-xs">
                {item.filename}
            </h1>
        </div>

        <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear">
            <Icon src={IoClose} size="15"/>
        </button>
    </div> 
