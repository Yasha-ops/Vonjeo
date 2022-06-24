<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import IoClose from "svelte-icons-pack/io/IoClose";

    export let filename;

    function removeMe(){
        var tabs = document.getElementById("tabs_id").children;

        let index = 0;
        for (var tab of tabs){
            index++;

            let tab_filename = tab.children[0].innerText;
            
            if (tab_filename === filename){
                tab.parentNode.removeChild(tab);
            }
        }
    }
</script>

<div class="flex flex-none bg-zinc-800 border-solid border-r-2 border-zinc-900 w-auto h-full items-center justify-center">
    <h1 class="text-white flex-auto ml-2 mr-2 text-xs">
        {filename}
    </h1>

    <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear"  on:click|once={removeMe}>
        <Icon src={IoClose} size="15"/>
    </button>
</div> 