<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	import { tabs, panels, store_tabs, DEBUG, INFO} from  './../../Utils/store.js';

	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	function sortTabs(tabs, storeTabs){
		for (let i = 0; i < tabs.length; i++){
			var sortingArr = storeTabs[i];
			sortingArr = sortingArr.map(n => n.filename);
			
			tabs[i] = tabs[i].sort((a, b) => {
				return sortingArr.indexOf(a.name) - sortingArr.indexOf(b.name);
			});		
		}
		return tabs;
	}

	function onChangeTabs(elt){
		console.log(DEBUG("ON CHANGE TABS")("tabs"), $tabs);
		$tabs = sortTabs($tabs, $store_tabs);
		$tabs = $tabs
		console.log(DEBUG("ON CHANGE TABS")("tabs"), $tabs);

		var selectedTabSimple = $selectedTab;

		if (selectedTabSimple === null)
			return ;

		document.getElementById(`tab-${selectedTabSimple.name}-button`).click();
	}

	$: onChangeTabs($store_tabs);

	setContext(TABS, {
		registerTab: (tab, mIndex) => {
		
			if ($tabs.length <= mIndex)
				$tabs = [...$tabs, []];
			
			var tabsSimple = $tabs[mIndex];

			tabsSimple.push(tab);

			selectedTab.update(current => current || tab);
			
			$tabs[mIndex] = tabsSimple;
			$tabs = $tabs;

			onDestroy(() => {
				var tabsSimple = $tabs[mIndex];
				const i = tabsSimple.indexOf(tab);
				tabsSimple.splice(i, 1);
				
				$tabs[mIndex] = tabsSimple;
				$tabs = $tabs;
				
				selectedTab.update(current => current === tab ? (tabsSimple[i] || tabsSimple[tabs.length - 1]) : current);
			});
		},

		registerPanel: (panel, mIndex) => {
			if (panels.length <= mIndex)
				panels.push([]);

			panels[mIndex].push(panel);

			selectedPanel.update(current => current || panel);
			
			onDestroy(() => {
				const i = panels[mIndex].indexOf(panel);
				panels[mIndex].splice(i, 1);
				selectedPanel.update(current => current === panel ? (panels[mIndex][i] || panels[mIndex][panels.length - 1]) : current);
			});
		},

		selectTab: (tab, mIndex) => {
			var tabsSimple = $tabs[mIndex];
			const i = tabsSimple.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[mIndex][i]);
			
			console.log(DEBUG("SELECT TAB")("tabs"), $tabs);
			console.log(DEBUG("SELECT TAB")("panels"), panels);

			$tabs[mIndex] = tabsSimple;
			$tabs = $tabs;
		},

		selectedTab,
		selectedPanel
	}); 

</script>

<script context="module">
	export const TABS = {};
</script>

<div class="flex flex-col flex-auto h-full w-full" name="tabs">
	<slot></slot>
</div>