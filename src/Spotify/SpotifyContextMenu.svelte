<script>
    import { MenuOption } from './../ContextMenu/context_menu';
    import { nbr_screens, LANGUAGE, LanguagesType } from './../Utils/store';
    

    // Icon
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscChromeClose from "svelte-icons-pack/vsc/VscChromeClose";
    import VscSplitHorizontal from "svelte-icons-pack/vsc/VscSplitHorizontal";
    import BsStop from "svelte-icons-pack/bs/BsStop";
    import VscDebugStart from "svelte-icons-pack/vsc/VscDebugStart";
    import BsGear from "svelte-icons-pack/bs/BsGear";



    function addScreen(){
        $nbr_screens += 1;
        console.log("Adding screen...");
    }

    let launched = false;


</script>


<MenuOption>
    <div class="icon-option">
        {#if launched}
            <Icon src={BsStop} size={20}/>
        {:else}
            <Icon src={VscDebugStart} size={20}/>
        {/if}

    </div>
    {#if launched}
        {($LANGUAGE === LanguagesType.ENGLISH) ? "Stop" : ($LANGUAGE === LanguagesType.FRENCH) ? "Arrêter" : "Mijanòna"}
    {:else}
        {($LANGUAGE === LanguagesType.ENGLISH) ? "Start" : ($LANGUAGE === LanguagesType.FRENCH) ? "Commencer" : "Fanombohana"}
        Start
    {/if}
</MenuOption>

<MenuOption> 
    <div class="icon-option">
        <Icon src={BsGear} size={20}/>
    </div>
    {($LANGUAGE === LanguagesType.ENGLISH) ? "Settings" : ($LANGUAGE === LanguagesType.FRENCH) ? "Paramètres" : "Fikirana"}
</MenuOption> 