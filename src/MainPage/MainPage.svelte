
<script>
    import TabList from './TabList.svelte';
    import Page from './Page.svelte';
    import PageTextZone from './PageTextZone.svelte';

    let h;
</script>

<div class="flex-auto flex flex-col bg-red h-screen w-auto bg-zinc-900" id="main_files">
    <TabList/>
    <!--Page lines={20}/-->
    <div class= "flex-1"  bind:clientHeight={h}>
        <PageTextZone h_parent={h}/>
    </div>
</div>