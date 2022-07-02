<script>
    import {FONTSIZE} from "./../Utils/store.js"
    let fontSizeOptions = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let fontSizeSelected = "Default";
    let fontSizePH = "Font Size"
    $: $FONTSIZE = fontSizeSelected

</script>

<p class="text-white">Font Size</p>
<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2" bind:value={fontSizeSelected}>
    <option selected >Default</option>
    {#each fontSizeOptions as fontSize}
			<option value={fontSize}>
				{fontSize}
			</option>
		{/each}
</select>

<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2">
    <option disabled selected>Font</option>
    <option>Font1</option>
    <option>Font2</option>
    <option>Font3</option>
    <option>Font4</option>
    <option>Font5</option>
    <option>Font6</option>
</select>

<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2">
    <option disabled selected>Theme</option>
    <option>Theme1</option>
    <option>Theme2</option>
    <option>Theme3</option>
    <option>Theme4</option>
    <option>Theme5</option>
    <option>Theme6</option>
</select>