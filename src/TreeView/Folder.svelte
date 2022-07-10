<script>
	import File from "./File.svelte";

	import Icon from "svelte-icons-pack/Icon.svelte";
	import AiFillFolder from "svelte-icons-pack/ai/AiFillFolder";
	import AiFillFolderOpen from "svelte-icons-pack/ai/AiFillFolderOpen";

	export let expanded = false;
	export let label;
	export let files;

	function toggle() {
		expanded = !expanded;
	}
</script>

<span class="px-1 rounded-sm" on:click={toggle}>
	<span class="pl-1 pt-2" style="float:left">
		{#if expanded}
			<Icon src={AiFillFolderOpen} size="10" color="white" />
		{:else}
			<Icon src={AiFillFolder} size="10" color="grey" />
		{/if}
	</span>
	<span>{label.split('/').pop() + '/'}/</span>
</span>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.files}
					<svelte:self {...file} />
				{:else}
					<File {...file} on:fileClick={(msg) => console.log(msg)} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		font-weight: bold;
		cursor: pointer;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		border-left: 1px solid #999;
	}
</style>
