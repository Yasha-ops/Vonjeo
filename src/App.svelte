<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    import { nbr_screens } from './Utils/store.js';


    import SideBar from './SideBar/SideBar.svelte'
    import MainPage from './MainPage/MainPage.svelte';    
    import Drawer from './Drawer/Drawer.svelte';


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

    {#each Array($nbr_screens) as _, index(index)}
        <div animate:flip="{{ duration: 300 }}" out:scale="{{ duration: 250 }}" in:fly="{{ x: -20, duration: 250 }}" class="flex-auto flex">
            <MainPage onePage={index !== 0}/>
        </div>
    {/each}

</div>
