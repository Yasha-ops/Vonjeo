<script>
    import { MenuOption } from './../ContextMenu/context_menu';
    import { launchedTimer, LANGUAGE, LanguagesType } from './../Utils/store';
    

    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";
    import BsStop from "svelte-icons-pack/bs/BsStop";
    import VscDebugStart from "svelte-icons-pack/vsc/VscDebugStart";
    import BsGear from "svelte-icons-pack/bs/BsGear";

    function toggleLaunch(){
        launchedTimer.set(! $launchedTimer);
    }

</script>

<MenuOption on:click={toggleLaunch}>
        {#if $launchedTimer }
            <div class="icon-option">
                <Icon src={BsStop} size={20}/>
            </div>
                {($LANGUAGE === LanguagesType.ENGLISH) ? "Stop" : ($LANGUAGE === LanguagesType.FRENCH) ? "Arrêter" : "Mijanòna"}
        {:else}
            <div class="icon-option">
                <Icon src={VscDebugStart} size={20}/>
            </div>
                {($LANGUAGE === LanguagesType.ENGLISH) ? "Start" : ($LANGUAGE === LanguagesType.FRENCH) ? "Commencer" : "Fanombohana"}
        {/if}
</MenuOption>

<MenuOption> 
    <div  for="my-modal-6" class="icon-option modal-button">
        <Icon src={BsGear} size={20}/>
    </div>
    
    <!-- The button to open modal -->
    <label for="my-modal-6" class="modal-button">
        {($LANGUAGE === LanguagesType.ENGLISH) ? "Settings" : ($LANGUAGE === LanguagesType.FRENCH) ? "Paramètres" : "Fikirana"}
    </label>
</MenuOption> 