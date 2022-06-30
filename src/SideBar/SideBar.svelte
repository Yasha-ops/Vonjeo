<script>
    import {store_tabs, TypeFile, INFO, ERROR, DEBUG} from './../Utils/store.js';

    import SideBarIcons from './SideBarIcons.svelte';

    // Icons
    import Icon from 'svelte-icons-pack/Icon.svelte';
    
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsBug from "svelte-icons-pack/bs/BsBug";

    // Functions
    const launchDebugger = () => {
        INFO("LAUNCH DEBUG")("Launching the debug panel");
        $store_tabs = [...$store_tabs, {
            type:TypeFile.DEBUG,
            filename:"Debugger",
            id:"panel-debug"
        }];
    }

</script>

<div class="flex fixed top-0 left-0 h-screen w-14 m-0 flex-col bg-zinc-700">
    <SideBarIcons icon={BsFiles} drawer_id="drawer-files"/>
    <SideBarIcons icon={BsSearch} drawer_id="drawer-search"/>

    <!-- Debug button -->
    <div class="sidebar-icon" on:click={launchDebugger}>
        <Icon src={BsBug} size="20"/>
    </div>
</div>
