<script>    
    import { createEventDispatcher } from 'svelte';

    import InfoTab from './InfoTab.svelte'; 
    import PageTextZone from './PageTextZone.svelte';

    export let text = "";
    export let name;
    export let h;
    export let tab;

    const dispatch = createEventDispatcher();

    function saveFile(){
        dispatch("saveFile", {
            value: tab
        }); 
    }

    function updateText(obj){
        dispatch("updateText", {
            value: tab,
            text: obj.detail.text
        });
    }

</script>

<div class="flex-1 flex flex-col h-full" name="page">

    <InfoTab on:saveFile={saveFile} />

    <div class= "flex-1 h-full" name="editor-div" bind:clientHeight={h}>
        <PageTextZone h_parent={h} text={text} name={name} on:textUpdate={updateText}/>
    </div>

</div>

 