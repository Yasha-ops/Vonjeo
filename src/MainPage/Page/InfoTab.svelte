<script>
    $: nbr_error = document.getElementsByClassName("ace_error").length;

    import { createEventDispatcher } from 'svelte';


    const dispatch = createEventDispatcher();

    function saveFile(){
        dispatch("saveFile");
    }

</script>


<div class="flex flex-none bg-tab-color h-8 w-full items-center justify-center" id="tab_info">
   
    
    <div class="flex-none w-auto h-auto ml-2">
        <button class="border border-white text-white rounded-lg" on:click={saveFile}>
            <h1 class="mr-2 ml-2">
                Save
            </h1>
        </button>
    </div>

    <div class="flex-none w-auto h-auto ml-2 mr-2" id="tab_stats">
         ☠️ 0 ⚠ 0 
    </div>
    
    <div class ="flex-none w-auto h-auto" name="mode" id="tab_mode">
        Mode
    </div>
    <div class="flex-1 ">

    </div>
</div>