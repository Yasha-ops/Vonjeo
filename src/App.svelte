<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    import { nbr_screens, LANGUAGE, LanguagesType } from './Utils/store.js';


    import SideBar from './SideBar/SideBar.svelte'
    import MainPage from './MainPage/MainPage.svelte';    
    import Drawer from './Drawer/Drawer.svelte';

    import SettingsModalMain from './Settings/SettingsModalMain.svelte';

    import TimerWrapper from './Timer/TimerWrapper.svelte';
    import TimerModal from './Timer/TimerModalSettings.svelte';
    import TimerModalPause from './Timer/TimerModalPause.svelte';
    
    import SpotifyWrapper from './Spotify/SpotifyWrapper.svelte';
    import SettingsDrawer from './Drawer/SettingsDrawer.svelte';

</script>
    
<TimerModalPause/>



<div class="flex h-screen w-screen">
    <SettingsModalMain/>
    <TimerModal/>
    <SpotifyWrapper/>
    <TimerWrapper/>

    
    <div class="flex-none h-screen w-14">
        <SideBar/>
    </div>
    
    <Drawer drawer_id={"drawer-files"} name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Files" : ($LANGUAGE === LanguagesType.FRENCH) ? "Fichiers" : "Rakitra"}></Drawer>
    
    <Drawer drawer_id={"drawer-search"} name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Search" : ($LANGUAGE === LanguagesType.FRENCH) ? "Chercher" : "Karohy"}>
        <input type="text" placeholder={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Search" : ($LANGUAGE === LanguagesType.FRENCH) ? "Chercher" : "Karohy"} 
            class="flex-1 ml-3 mb-1 input input-bordered input-xs max-w-xs w-32" />
        <input type="text" placeholder={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Replace" : ($LANGUAGE === LanguagesType.FRENCH) ? "Remplacer" : "Soloy"}
            class="flex-1 ml-3 input input-bordered input-xs max-w-xs w-32" />
    </Drawer>

    {#each Array($nbr_screens) as _, index(index)}
        <div animate:flip="{{ duration: 300 }}" out:scale="{{ duration: 250 }}" in:fly="{{ x: -20, duration: 250 }}" class="flex-auto flex">
            <MainPage onePage={index !== 0}/>
        </div>
    {/each}

</div>
