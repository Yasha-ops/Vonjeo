<script>
    export let name;
    export let drawer_id;
</script>

<div class="drawer flex-none flex flex-col w-auto" id={drawer_id} style="display: none;">
    <div class="flex-none w-auto h-9 items-center justify-center">
        <p class="text-xs text-white uppercase ml-3 mt-3">{name}</p>
    </div>
    <slot></slot>
</div>