<script>
    import SideBar from './SideBar/SideBar.svelte'
    import MainPage from './MainPage/MainPage.svelte';    
    import Drawer from './Drawer/Drawer.svelte';
    import SettingsDrawer from './Drawer/SettingsDrawer.svelte';

</script>



<div class="flex h-screen w-screen">
    
    <div class="flex-none h-screen w-14">
        <SideBar/>
    </div>
    
    <Drawer drawer_id={"drawer-files"} name={"Files"}></Drawer>
    
    <Drawer drawer_id={"drawer-search"} name={"Search"}>
        <input type="text" placeholder="Search" class="flex-1 ml-3 mb-1 input input-bordered input-xs max-w-xs w-32" />
        <input type="text" placeholder="Replace" class="flex-1 ml-3 input input-bordered input-xs max-w-xs w-32" />
    </Drawer>
    
    <Drawer drawer_id={"drawer-settings"} name={"Settings"}>
        <SettingsDrawer/>
    </Drawer>

    <MainPage/>
</div>
