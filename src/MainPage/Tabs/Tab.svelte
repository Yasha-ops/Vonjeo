<script>	
    export let item;
    import { Menu } from './../../ContextMenu/context_menu.js';
    import TabContextMenu from './TabContextMenu.svelte';
    
    import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
    
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoClose from "svelte-icons-pack/io/IoClose";
	
    const tab = {name: item.filename, panel_id: item.id};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
   

    // TODO Add removeMe Function
	registerTab(tab);

    
    // Context Menu
	let pos = { x: 0, y: 0 };
	let showMenu = false;
	
	async function onRightClick(e) {
        if (document.getElementsByName("context-menu").length !== 0){
            document.body.click(); /* To disable all other context menu */
        }
        
		if (showMenu) {
			showMenu = false;
			await new Promise(res => setTimeout(res, 100));
		}
		
		pos = { x: e.clientX, y: e.clientY };
		showMenu = true;
	}
	
	function closeMenu() {
		showMenu = false;
	}
</script>

{#if showMenu}
	<Menu {...pos} on:click={closeMenu} on:clickoutside={closeMenu}>
        <TabContextMenu/>
	</Menu>
{/if}

<div name="tab" class:tab-actif="{$selectedTab === tab}" class:tab-passif="{$selectedTab !== tab}"  on:contextmenu|preventDefault={onRightClick}>
    <div class="flex-auto flex justify-center items-center h-full m-full" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}" id="tab-{item.filename}-button">
        <h1 class="text-white flex-auto ml-2 mr-2 text-xs">
            {item.filename}
        </h1>
    </div>

    <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear">
        <Icon src={IoClose} size="15"/>
    </button>
</div> 
