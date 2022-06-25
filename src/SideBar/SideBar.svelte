<script>
    import SideBarIcons from './SideBarIcons.svelte';

    // Icons
    import BsFiles from "svelte-icons-pack/bs/BsFiles";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsBug from "svelte-icons-pack/bs/BsBug";
</script>

<div class="flex fixed top-0 left-0 h-screen w-14 m-0 flex-col bg-zinc-700">
    <SideBarIcons icon={BsFiles} drawer_id="drawer-files"/>
    <SideBarIcons icon={BsSearch} drawer_id="drawer-search"/>
    <SideBarIcons icon={BsBug} drawer_id="drawer-debug"/>
</div>
