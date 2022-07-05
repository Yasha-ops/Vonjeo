<script>
    import { MenuOption } from './../../ContextMenu/context_menu.js';
    import { nbr_screens } from './../../Utils/store.js';
    
    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";
    function addScreen(){
        $nbr_screens += 1;
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