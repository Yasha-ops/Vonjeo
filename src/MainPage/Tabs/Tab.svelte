<script>
	import {flip} from 'svelte/animate';
	
    import { draggable } from 'svelte-drag';
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
    
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoClose from "svelte-icons-pack/io/IoClose";
	
    let nodeRef;
    const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
    
    function removeMe(obj){
        var tabs = document.getElementById("tabs_id").children;
        
        console.log("Launching!!");
        
        console.log(obj.target);
        
        for (var tab of tabs){
            if (tab === this){
                tab.parentNode.removeChild(tab);
            }
        }
    }

    export let basketIndex;
    export let itemIndex;
	
	function dragStart(event, basketIndex, itemIndex) {
		const data = {basketIndex, itemIndex};
   		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}

    // TODO Add removeMe Function
	registerTab(tab);
</script>


    <div name="tab" draggable={true} bind:this={nodeRef} class:tab-actif="{$selectedTab === tab}" class:tab-passif="{$selectedTab !== tab}" on:dragstart={event => dragStart(event, basketIndex, itemIndex)}>
        <div class="flex-auto flex justify-center items-center h-full m-full" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
            <h1 class="text-white flex-auto ml-2 mr-2 text-xs">
    	        <slot></slot>
            </h1>
        </div>

        <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear" on:click="{() => nodeRef.parentNode.parentNode.removeChild(nodeRef.parentNode)}">
            <Icon src={IoClose} size="15"/>
        </button>
    </div> 