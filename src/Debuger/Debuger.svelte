<script>
    import Screen from './Screen.svelte'

    let debug_on = false;
    export let name;
    export let drawer_id;
</script>


<Screen title="Debug Console" drawer={debug_on} drawerTitle="Debug" tabs={["a.svelte", "b.svelte"]}></Screen>

<div class="drawer" id={drawer_id} style="display: none;">
    <div class="relative flex w-auto h-9 items-center">
        <p class="text-xs text-white uppercase ml-3">{name}</p>
    </div>
</div>


<div class="flex-none drawer flex" id="drawer-debug" style="display: none;">
    <div class="relative flex w-auto h-9 items-center">
        <p class="text-xs text-white uppercase ml-3">Search</p>
    </div>
    <input type="text" placeholder="oui oui" class="flex-1 ml-3 mb-1 input input-bordered input-xs max-w-xs w-32" />
    <input type="text" placeholder="aller" class="flex-1 ml-3 input input-bordered input-xs max-w-xs w-32" />
</div>