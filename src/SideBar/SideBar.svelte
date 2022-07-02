<script>
    import {store_tabs, TypeFile, INFO, ERROR, DEBUG} from './../Utils/store.js';

    import SideBarIcons from './SideBarIcons.svelte';
    import { onMount } from 'svelte';


    // Icons
    import Icon from 'svelte-icons-pack/Icon.svelte';
    
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsBug from "svelte-icons-pack/bs/BsBug";
    import RiLogoSpotifyLine from "svelte-icons-pack/ri/RiLogoSpotifyLine";


    // Functions
    const launchDebugger = () => {
        INFO("LAUNCH DEBUG")("Launching the debug panel");
        $store_tabs = [...$store_tabs, {
            type:TypeFile.DEBUG,
            filename:"Debugger",
            id:"panel-debug"
        }];
    }

    const launchSpotify = () => {
            var r = new XMLHttpRequest();
            r.open("POST", "http://127.0.0.1:8001/kill", true);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) return;
            console.log("sent");
            };
            // Send data in below way from JS
             r.send(JSON.stringify({"input": "test"}));
             

}



</script>

<div class="flex fixed top-0 left-0 h-screen w-14 m-0 flex-col bg-zinc-700">
    <SideBarIcons icon={BsFiles} drawer_id="drawer-files" />
    <SideBarIcons icon={BsSearch} drawer_id="drawer-search" />

    <!-- Debug butt on -->
    <div class="sidebar-icon" on:click={launchDebugger}>
        <Icon src={BsBug} size="20" />
    </div>

    <!-- Spotify subproccess launcher-->
    <div class="sidebar-icon" on:click={launchSpotify}>
        <Icon src={RiLogoSpotifyLine} size="20"  color={"white"}/>
    </div>
</div>
