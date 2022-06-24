<script>
    import SideBar from './SideBar/SideBar.svelte'
    import DisableScrollBar from './DisableScrollBar.svelte';
    import MainPage from './MainPage/MainPage.svelte';
    
    import SearchDrawer from './Drawer/SearchDrawer.svelte';
    import Drawer from './Drawer/Drawer.svelte';

</script>

<DisableScrollBar/>

<div class="flex h-screen w-screen">
    
    <div class="flex-none h-screen w-14">
        <SideBar/>
    </div>
    
    <Drawer drawer_id={"drawer-files"} name={"Files"}/>
    
    <SearchDrawer/>

    <MainPage/>
</div>