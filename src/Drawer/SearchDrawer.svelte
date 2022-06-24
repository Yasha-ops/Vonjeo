<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoOptionsOutline from "svelte-icons-pack/io/IoOptionsOutline";
</script>

<div class="drawer" id="drawer-search" style="display: none;">
    <div class="relative flex w-auto h-9 items-center">
        <p class="text-xs text-white uppercase ml-3">Search</p>
    </div>
    <input type="text" placeholder="Search" class="ml-3 mb-1 input input-bordered input-xs max-w-xs w-32" />
    <input type="text" placeholder="Replace" class="ml-3 input input-bordered input-xs max-w-xs w-32" />
</div>