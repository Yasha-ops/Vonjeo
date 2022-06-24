<script>
    import PageLine from './PageLine.svelte';
    export let lines;
</script>

<div class="flex">
    <div class="flex-none w-10 bg-red-500 h-screen justify-center items-center">
        {#each {length: lines} as _, i}
            <PageLine nbr={i + 1}/> 
        {/each}
    </div>
</div>

