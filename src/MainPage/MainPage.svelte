<script>
	import Page from "./Page/Page.svelte";
	import Debugger from "./../Debuger/Debuger.svelte";
	import { Tabs, TabPanel, TabList, Tab } from "./Tabs/tabs.js";
	import { DEBUG, store_tabs, TypeFile } from "./../Utils/store.js";
	function onDrop(newItems) {
		let str = JSON.stringify($store_tabs);
		console.log("oh no: " + str);
		$store_tabs = newItems;
	}

	async function saveFile(obj) {
		obj.detail.value.saved = true;

		let requestBody = JSON.stringify({ content: obj.detail.value.content });
		console.log(requestBody);

		await fetch(
			"http://localhost:8000/save?path=" +
				obj.detail.value.filename.replace("/", "%2F"),
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: requestBody,
			}
		)
			.then((response) => response.json())
			.catch((err) => console.log(err));
	}

	function updateText(obj) {
		let tab = $store_tabs.find((n) => n === obj.detail.value);
		tab.content = obj.detail.text;
		tab.saved = false;
	}
	export let onePage = false;

	const languages = {
		"c": "c_cpp",
		"cpp": "c_cpp",
		"h": "c_cpp",
		"hpp": "c_cpp",
		"js": "javascript",
	}
</script>

<div
	class="flex-1 flex flex-col bg-red h-full w-auto bg-zinc-900"
	id="main_files"
>
	<!-- TabList/ -->
	<Tabs>
		<TabList itemsData={$store_tabs} itemComponent={Tab} {onDrop} />

		{#key $store_tabs}
			{#if !onePage}
				{#each $store_tabs as tab}
					{console.log(tab)}
					<TabPanel id={tab.id}>
						{#if tab.type === TypeFile.FILE}
							<Page
								text={tab.content}
								{tab}
								name={tab.id}
								on:saveFile={saveFile}
								on:updateText={updateText}
								language={languages[tab.id.split('.').pop() ?? 0] ?? "c_cpp"}
							/>
						{:else}
							<Debugger />
						{/if}
					</TabPanel>
				{/each}
			{:else}
				<Page text="// Splitted" name="Split" />
			{/if}
		{/key}
	</Tabs>
</div>
