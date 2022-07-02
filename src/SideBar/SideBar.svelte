<script>
    import {store_tabs, TypeFile, INFO, ERROR, DEBUG, nbr_screens } from './../Utils/store.js';

    import SideBarIcons from './SideBarIcons.svelte';

    // Icons
    import Icon from 'svelte-icons-pack/Icon.svelte';
    
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsBug from "svelte-icons-pack/bs/BsBug";
    import RiLogoSpotifyLine from "svelte-icons-pack/ri/RiLogoSpotifyLine";


    // Functions
    const launchDebugger = () => {
        INFO("LAUNCH DEBUG")("Launching the debug panel");

        if ($nbr_screens === 0){
            $nbr_screens += 1;
        }

        $store_tabs[0] = [...$store_tabs[0], {
            type:TypeFile.DEBUG,
            filename:"Debugger",
            id:"panel-debug"
        }];
    }

    const launchSpotify = () => {
        const { exec } = require('child_process');

        exec('cd ~/src/spotify/server; npm start', (error, stdout, stderr) => {


          if (error) {
            console.error(`error: ${error.message}`);
            return;
          }
      
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }

        });
        exec('cd ~/src/spotify/client; npm start', (error, stdout, stderr) => {


        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }

        });
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
