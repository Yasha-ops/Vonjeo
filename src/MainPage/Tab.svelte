<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';

    import IoClose from "svelte-icons-pack/io/IoClose";

    export let filename;

    let TAB_LISTS_ID = "tabs_list";

    function removeMe(){
        var tabs = document.getElementById(TAB_LISTS_ID).children;

        let index = 0;
        for (var tab of tabs){
            index++;

            let tab_filename = tab.children[0].innerText;
            
            if (tab_filename === filename){
                tab.parentNode.removeChild(tab);
            }
        }
    }

    function activeMe(){
        let tabs = document.getElementById(TAB_LISTS_ID).children;

        for (var tab of tabs){
            if (tab === this.parentElement){
                this.parentElement.classList.add("bg-zinc-900");
                this.parentElement.classList.remove("bg-zinc-800");
            }
            else
                tab.classList.add("bg-zinc-800");
        }
    }
</script>

<div class="flex flex-none border-solid border-r-2 border-zinc-900 w-auto h-full items-center justify-center bg-zinc-800">
    <div class="flex-auto flex justify-center items-center h-full m-full" on:click={activeMe}>
        <h1 class="text-white flex-auto ml-2 mr-2 text-xs">{filename}</h1>
    </div>

    <button class="flex-non w-auto ml-2 mr-2 rounded-xl hover:bg-white transition-all duration-300 ease-linear"  on:click|once={removeMe}>
        <Icon src={IoClose} size="15"/>
    </button>
</div> 