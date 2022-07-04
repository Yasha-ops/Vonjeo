<script>
    import { MenuOption } from './../../ContextMenu/context_menu.js';
    import { nbr_screens, store_tabs, tabs, deepEquality, DEBUG, INFO } from './../../Utils/store.js';

    import { getContext } from 'svelte';
    import { TABS } from './Tabs.svelte';    

    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";


    export let currentItem;
    
    export let currentTab;

	const { registerTab } = getContext(TABS);
 
    let log = DEBUG("ADD SCREEN");
    
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async  function addScreen(){
        // tabs
        let tempTabs = $tabs;
        let tabIndex = tempTabs[$nbr_screens - 1].indexOf(currentTab);

        console.log(log("tabs START"), tempTabs);
        
        tempTabs[$nbr_screens - 1].splice(tabIndex, 1); 

        
        // Store Tabs
        let storeTabs = $store_tabs;
        storeTabs[$nbr_screens - 1] = storeTabs[$nbr_screens - 1].filter((n) => !deepEquality(n, currentItem));
        
        currentItem.mIndex += 1;
        storeTabs = [...storeTabs, [currentItem]];
        
        $nbr_screens += 1; 

        store_tabs.set(storeTabs);
        console.log(log("tabs END END"), tempTabs);
        tabs.set(tempTabs);
        // $store_tabs[$nbr_screens - 2] = $store_tabs[$nbr_screens - 2].filter((n) => !deepEquality(n, currentItem));
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