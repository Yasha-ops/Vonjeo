<script>
    import TabList from './TabList.svelte';
    import PageTextZone from './PageTextZone.svelte';
    import InfoTab from './InfoTab.svelte';

    let h;
</script>

<div class="flex-1 flex flex-col bg-red h-full w-auto bg-red-200" id="main_files">
    
    <TabList/>
    
    <InfoTab/>

    <div class= "flex-1 h-full" name="editor-div" bind:clientHeight={h}>
        <PageTextZone h_parent={h}/>
    </div>

</div>