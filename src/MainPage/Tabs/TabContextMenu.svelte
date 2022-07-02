<script>
    import { MenuOption } from './../../ContextMenu/context_menu.js';
    import { nbr_screens, store_tabs, TypeFile} from './../../Utils/store.js';

    import { getContext } from 'svelte';
    import { TABS } from './Tabs.svelte';    

    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";

	const { registerTab } = getContext(TABS);
 
    function addScreen(){
        $nbr_screens += 1;
        console.log("NBR SCREENS", $nbr_screens);
        
        
        $store_tabs = [...$store_tabs, 
        [
            {
                type: TypeFile.FILE,
                filename:"Lemon",
                content:"LEMON",
                id:"panel-Lemon",
                mIndex: $nbr_screens - 1
            }
        ]];
    
        //registerTab({name: "Watermelon", panel_id:"panel-Watermelon"}, $nbr_screens - 1);
        console.log("Adding screen...");
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