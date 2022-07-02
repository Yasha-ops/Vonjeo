<script>
    import { MenuOption } from './../../ContextMenu/context_menu.js';
    import { nbr_screens, store_tabs, TypeFile, deepEquality, DEBUG, INFO } from './../../Utils/store.js';

    import { getContext } from 'svelte';
    import { TABS } from './Tabs.svelte';    

    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";


    export let currentTab;

    console.log("CURRENT TAB", currentTab);

	const { registerTab } = getContext(TABS);
 
    function addScreen(){
        $nbr_screens += 1;
        
        console.log("NBR SCREENS", currentTab);
        
        $store_tabs = [...$store_tabs, [currentTab]];
        console.log(INFO("ADD SCREEN")("store tabs"), $store_tabs);
        $store_tabs[$nbr_screens - 2] = $store_tabs[$nbr_screens - 2].filter((n) => !deepEquality(n, currentTab)); 
        console.log(INFO("ADD SCREEN")("store tabs"), $store_tabs);
    }

</script>


<MenuOption>
    <div class="icon-option">
        <Icon src={VscChromeClose} size={20}/>  
    </div>
    Close
</MenuOption>

<MenuOption on:click={addScreen}> 
    <div class="icon-option">
        <Icon src={VscSplitHorizontal} size={20}/>
    </div>
    Split right
</MenuOption> 