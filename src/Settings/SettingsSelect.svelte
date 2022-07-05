<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let name;
    export let options;


    let selected_value = "Default";

    function bindValue(){
        dispatch('value_changed', {
            value : selected_value
        })
    }


</script>

<p class="text-white flex-none m-2">{name}</p>
<select class="flex-none bg-white w-40 h-5 rounded-lg hover:bg-gray-500 ml-2" bind:value={selected_value} on:change={bindValue}>
    <option selected >Default</option>
    {#each options as option}
            <option value={option}>
                {option}
            </option>
    {/each}
</select>