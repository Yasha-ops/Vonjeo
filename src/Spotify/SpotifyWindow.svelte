<script>
    export let state;
    import { LANGUAGE, LanguagesType } from './../Utils/store.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let color = {
        "Connect" : "bg-[#1DB954]",
        "Waiting..." : "bg-[#B9971D]",
        "Select device" : "bg-[#1D6EB9]",
        "Error" : "bg-[#B91D1D]"
    }
    let translate = {
        "Connect" :
        ($LANGUAGE === LanguagesType.ENGLISH) ? "Connect" : ($LANGUAGE === LanguagesType.FRENCH) ? "Se connecter" : "Hiditra", 
        "Waiting..." : 
        ($LANGUAGE === LanguagesType.ENGLISH) ? "Waiting..." : ($LANGUAGE === LanguagesType.FRENCH) ? "En attente..." : "Miandry...", 
        "Select device" : 
        ($LANGUAGE === LanguagesType.ENGLISH) ? "Select device" : ($LANGUAGE === LanguagesType.FRENCH) ? "Choisir ce dispositif" : "Mifidiana fitaovana", 
        "Error" : 
        ($LANGUAGE === LanguagesType.ENGLISH) ? "Error" : ($LANGUAGE === LanguagesType.FRENCH) ? "Erreur" : "Fahadisoana",
    }


    function click(){
        dispatch("onclick");
    }
</script>


<div class="flex w-auto h-auto bg-[#191414] rounded-full" on:click={click}>
    <div class="flex-none rounded-full h-10 w-10 flex items-center justify-center ml-1 mt-1 mb-1 {color[state]}"></div>
    <div class="flex-none flex justify-center items-center">
    <h1 class="flex-none font-Spotify_win ml-5 mr-5 text-white">
        {translate[state]}
    </h1>

    </div>
</div>