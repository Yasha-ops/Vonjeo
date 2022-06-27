<script>    
    import InfoTab from './InfoTab.svelte'; 
    import PageTextZone from './PageTextZone.svelte';

    let h;
</script>

<div class="flex-1 flex flex-col" name="page">

    <InfoTab/>

    <div class= "flex-1 h-full" name="editor-div" bind:clientHeight={h}>
        <PageTextZone h_parent={h}/>
    </div>

</div>

 