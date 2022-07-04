<script>
    export let state;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let color = {
        "Connect" : "bg-[#1DB954]",
        "Waiting..." : "bg-[#B9971D]",
        "Select device" : "bg-[#1D6EB9]",
        "Error" : "bg-[#B91D1D]"
    }

    function click(){
        dispatch("onclick");
    }
</script>


<div class="flex w-auto h-auto bg-[#191414] rounded-full" on:click={click}>
    <div class="flex-none rounded-full h-10 w-10 flex items-center justify-center ml-1 mt-1 mb-1 {color[state]}"></div>
    <div class="flex-none flex justify-center items-center">
    <h1 class="flex-none font-Spotify_win ml-5 mr-5 text-white">
        {state}
    </h1>

    </div>
</div>