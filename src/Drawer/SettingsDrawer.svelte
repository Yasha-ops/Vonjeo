<script>
    import {FONTSIZE} from "./../Utils/store.js"
    import {FONTTYPE} from "./../Utils/store.js"
    import {THEME} from "./../Utils/store.js"

    let fontSizeOptions = [ 10, 11, 12, 13, 14, 15, 16, 24, 28, 32, 36, 40, 44, 48, 52, 56]
    let fontSizeSelected = "Default";
    $: $FONTSIZE = fontSizeSelected
    console.log(fontSizeOptions)

    let fontTypeOptions = ["Cousine", "Terminal", "Source Code Pro", "Major Mono Display", "Roboto Mono", "Nanum Gothic Coding",
                            "VT323", "Noto Sans Mono"];
    let fontTypeSelected = "Default";
    $: $FONTTYPE = fontTypeSelected

    let themeOptions = ["chaos", "clouds", "cobalt", "dawn", "dracula", "eliott", "github", "gob", "idle_fingers", "karim", "kuroir", "monokai", "param", "raphael", "sorcier", "tao", "textmate", "tomorrow", "twilight", "yassine"]
    let themeSelected = "Default"
    $: $THEME = themeSelected

</script>

<p class="text-white flex-none m-2">Font Size</p>
<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2" bind:value={fontSizeSelected}>
    <option selected >Default</option>
    {#each fontSizeOptions as fontSize}
			<option value={fontSize}>
				{fontSize}
			</option>
		{/each}
</select>

<p class="text-white flex-none m-2">Font Type</p>

<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2" bind:value={fontTypeSelected}>
    <option selected >Default</option>
    {#each fontTypeOptions as fontType}
			<option style='font-family:"{fontType}";' value={fontType}>
				{fontType}
			</option>
	{/each}
</select>

<p class="text-white flex-none m-2">Theme</p>

<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2" bind:value={themeSelected}>
    <option selected >Default</option>
    {#each themeOptions as theme}
			<option value={theme}>
				{theme}
			</option>
	{/each}
</select>