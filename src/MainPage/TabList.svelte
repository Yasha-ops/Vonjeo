<script>
    import Tab from './Tab.svelte';
    let tabs = [
        {filename : "main.c"},
        {filename : "test.h"},
        {filename : "Makefile"}
    ];
</script>


<div class="flex bg-green-300 h-12 w-screen" id="tabs_id">
    {#each tabs as tab}
        <Tab filename={tab.filename}/>
    {/each}    
</div>
