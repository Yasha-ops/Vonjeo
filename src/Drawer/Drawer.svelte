<script>
    export let name;
    export let drawer_id;
</script>

<div class="drawer flex-none" id={drawer_id} style="display: none;">
    <div class="relative flex w-auto h-9 items-center">
        <p class="text-xs text-white uppercase ml-3">{name}</p>
    </div>
</div>