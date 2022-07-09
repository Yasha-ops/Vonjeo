<script>
    import { Menu } from './../ContextMenu/context_menu.js';

    import TimerContextMenu from '../Timer/TimerContextMenu.svelte';

    import {store_tabs, TypeFile, INFO, ERROR, DEBUG, nbr_screens, showSpotify, showTimer } from './../Utils/store.js';



    import SideBarIcons from './SideBarIcons.svelte';
    // Icons
    import Icon from 'svelte-icons-pack/Icon.svelte';
    
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import FiSettings from "svelte-icons-pack/fi/FiSettings";
    import BsBug from "svelte-icons-pack/bs/BsBug";
    import ImSpotify from "svelte-icons-pack/im/ImSpotify";
    import BsClockHistory from "svelte-icons-pack/bs/BsClockHistory";


    import { debug_on } from '../lib/Store'

    // Functions
    const launchDebugger = () => {
        INFO("LAUNCH DEBUG")("Launching the debug panel");

        if ($nbr_screens === 0){
            $nbr_screens += 1;
        }

        $store_tabs = [...$store_tabs, {
            type:TypeFile.DEBUG,
            filename:"Debugger",
            id:"panel-debug"
        }];

        debug_on.set(! $debug_on);
    }
    function toggleSpotify(){
        showSpotify.set(! $showSpotify); 
    }

    function toggleTimer(){
        console.log("TOGGLE TIMER");
        showTimer.set(! $showTimer);
    }

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
        <TimerContextMenu/>
	</Menu>
{/if}

<div class="flex fixed top-0 left-0 h-screen w-14 m-0 flex-col bg-zinc-700">
        <div class="flex-none"> 
        <SideBarIcons icon={BsFiles} drawer_id="drawer-files" />
        <SideBarIcons icon={BsSearch} drawer_id="drawer-search" />

          <!-- Debug butt on -->
        <div class="sidebar-icon" on:click={launchDebugger}>
            <Icon src={BsBug} size="20" />
        </div>
    
        <!-- Clock launcher -->
        <div class="sidebar-icon" on:contextmenu|preventDefault={onRightClick} on:click={toggleTimer}>
            <Icon src={BsClockHistory} size="20"/>
        </div>

        <!-- Spotify subproccess launcher-->
        <div class="sidebar-icon" on:click={toggleSpotify}>
            <Icon src={ImSpotify} size="20"/>
        </div>
    </div>


    <div class="flex-auto h-full w-full">
    </div>

    <div class="flex-none">
        <label for="my-modal-settings"  class="modal-button sidebar-icon">
            <Icon src={FiSettings} size="20"/>
        </label>
        <!--SideBarIcons icon={FiSettings} drawer_id="drawer-settings" class="flex space-x-5.5 "/-->
    </div>

</div>
