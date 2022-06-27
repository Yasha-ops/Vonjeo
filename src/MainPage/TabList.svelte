<script>
    import Tab from './Tab.svelte';
    let tabs = [];/* [
        {filename : "main.c"},
        {filename : "test.h"},
        {filename : "Makefile"}
    ];*/
</script>


<div class="flex-none flex bg-zinc-600 h-8 w-screen" id="tabs_id">
    {#each tabs as tab}
        <Tab filename={tab.filename}/>
    {/each}    
</div>
