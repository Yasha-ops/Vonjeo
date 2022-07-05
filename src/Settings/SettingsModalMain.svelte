<script>
    import { scale } from 'svelte/transition';

    import {FONTSIZE, FONTTYPE , THEME, LANGUAGE, fontSizeOptions, 
            fontTypeOptions, themeOptions, languagesOptions, LanguagesType} from "./../Utils/store.js";

    import SettingsSelect from './SettingsSelect.svelte';

</script>


<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-settings" class="modal-toggle" />

<div class="modal modal-bottom sm:modal-middle" in:scale={{duration : 1000}} out:scale={{duration : 1000}}>
  <div class="modal-box bg-[#484E56] text-white">
    <h3 class="font-bold text-lg text-center">
        {#if $LANGUAGE === LanguagesType.ENGLISH}
            Settings
        {:else if $LANGUAGE === LanguagesType.FRENCH}
            Paramètres
        {:else}
            Fikirana
        {/if}
    </h3>

    <SettingsSelect name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Font Size" : ($LANGUAGE === LanguagesType.FRENCH) ? "Taille de police" : "Haben'ny endritsoratra"
        } options={fontSizeOptions} on:value_changed={(obj) => $FONTSIZE = obj.detail.value}/>
    
    <SettingsSelect name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Font Type" : ($LANGUAGE === LanguagesType.FRENCH) ? "Police" : "Karazana endritsoratra"
        } options={fontTypeOptions} on:value_changed={(obj) => $FONTTYPE = obj.detail.value}/>
    
    <SettingsSelect name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Theme" : ($LANGUAGE === LanguagesType.FRENCH) ? "Theme" : "Lohahevitra"
        } options={themeOptions} on:value_changed={(obj) => $THEME = obj.detail.value}/>
    
    <SettingsSelect name={
            ($LANGUAGE === LanguagesType.ENGLISH) ? "Language" : ($LANGUAGE === LanguagesType.FRENCH) ? "Langue" : "Fiteny"
        } options={languagesOptions} on:value_changed={(obj) => $LANGUAGE = obj.detail.value}/>

    <div class="modal-action flex justify-center items-center">
      <label for="my-modal-settings" class="btn">
            {($LANGUAGE === LanguagesType.ENGLISH) ? "Apply" : ($LANGUAGE === LanguagesType.FRENCH) ? "Appliquer" : "Ampiharo"}
        </label>
    </div>

  </div>
</div>
