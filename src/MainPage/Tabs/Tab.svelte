<script>


	import { getContext } from 'svelte';
	import { TABS, removeTab} from './Tabs.svelte';
    
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoClose from "svelte-icons-pack/io/IoClose";
	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
    
    function removeMe(){
        var tabs = document.getElementById("tab-list-files").children;
        console.log("Launching!!");
        for (var tab of tabs){
            if (tab === this){
                tab.parentNode.removeChild(tab);
            }
        }
    }
    // TODO Add removeMe Function
	registerTab(tab);
</script>


<div class:tab-actif="{$selectedTab === tab}" class:tab-passif="{$selectedTab !== tab}">
    <div class="flex-auto flex justify-center items-center h-full m-full" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
        <h1 class="text-white flex-auto ml-2 mr-2 text-xs">
	        <slot></slot>
        </h1>
    </div>

    <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear" on:click="{() => removeTab(tab)}">
        <Icon src={IoClose} size="15"/>
    </button>
</div> 