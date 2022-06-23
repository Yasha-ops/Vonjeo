<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoOptionsOutline from "svelte-icons-pack/io/IoOptionsOutline";

    export let name;
    export let drawer_id;
</script>

<div class="drawer" id={drawer_id}>
    <div class="relative flex w-auto h-9 items-center">
        <p class="text-xs text-white uppercase ml-3">{name}</p>
    </div>
</div>