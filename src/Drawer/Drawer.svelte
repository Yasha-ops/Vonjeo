<script>
    export let name;
    export let drawer_id;
</script>

<div class="drawer flex-none" id={drawer_id} style="display: none;">
    <div class="relative flex w-auto h-9 flex-col justify-items-start">
        <p class="text-xs flex-none text-white uppercase ml-3">{name}</p>
        <slot></slot>
    </div>
</div>