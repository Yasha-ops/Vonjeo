<script>
    import {store_tabs, TypeFile, INFO, ERROR, DEBUG, nbr_screens, showSpotify } from './../Utils/store.js';
    import SpotifyWrapper from './../Spotify/SpotifyWrapper.svelte';
    import SideBarIcons from './SideBarIcons.svelte';
    // Icons
    import Icon from 'svelte-icons-pack/Icon.svelte';
    
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsBug from "svelte-icons-pack/bs/BsBug";
    import ImSpotify from "svelte-icons-pack/im/ImSpotify";
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
    }
    function toggleSpotify(){
        showSpotify.set(! $showSpotify); 
    }
</script>



<SpotifyWrapper/>


<div class="flex fixed top-0 left-0 h-screen w-14 m-0 flex-col bg-zinc-700">
    <SideBarIcons icon={BsFiles} drawer_id="drawer-files" />
    <SideBarIcons icon={BsSearch} drawer_id="drawer-search" />

    <!-- Debug butt on -->
    <div class="sidebar-icon" on:click={launchDebugger}>
        <Icon src={BsBug} size="20" />
    </div>

    <!-- Spotify subproccess launcher-->
    <div class="sidebar-icon" on:click={toggleSpotify}>
        <Icon src={ImSpotify} size="20"/>
    </div>
</div>