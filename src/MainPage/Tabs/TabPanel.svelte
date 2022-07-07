<script>
	import { getContext } from 'svelte';
	import { DEBUG } from '../../Utils/store';
	import { TABS } from './Tabs.svelte';
	export let id;
	const panel = {id: id};
	const { registerPanel, selectedPanel } = getContext(TABS);
	registerPanel(panel);
	
	$: onWatchSelected($selectedPanel);
	function onWatchSelected(event){
		if ($selectedPanel !== panel)
			return;
		
		console.log(DEBUG("onWatchSelected")("id"), id);
		let aceEditor = document.querySelector(`#${id} > div > div.flex-1.h-full > div > div`);
		if (aceEditor === null)
			return;
		aceEditor.click();
	}
</script>

<div class:panel-actif="{$selectedPanel === panel}" class:panel-passif="{$selectedPanel !== panel}" id={id}>
	<slot></slot>
</div>