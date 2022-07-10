<script>
	import Icon from "svelte-icons-pack/Icon.svelte";
	import AiFillFile from "svelte-icons-pack/ai/AiFillFile";

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let label;
	// $: type = label.slice(label.lastIndexOf('.') + 1);

	function handleClick() {
		console.log("Clicked file ${label} in file tree");
		dispatch('fileClick', {
			test: label,
		});
	}
</script>

<span class="pl-1 pt-2" style="float:left">
	<Icon src={AiFillFile} size="10" color="grey" />
</span>
<span class="pl-1">
	<button on:click={handleClick}>
		{label.split('/').pop()}
	</button>
</span>
