<script>
    export let name;
    export let drawer_id;
</script>

<div class="flex-none drawer overflow-auto" id={drawer_id} style="display: none;">
    <div class="flex relative items-center w-auto h-9">
        <p class="ml-3 text-xs text-white uppercase">{name}</p>
    </div>
    <div class="px-2">
        <slot></slot>
    </div>
</div>