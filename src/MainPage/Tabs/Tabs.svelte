<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable, derived } from 'svelte/store';

	import { tabs, panels, store_tabs, DEBUG, INFO} from  './../../Utils/store.js';

	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	function onChangeTabs(elt){
		var sortingArr = $store_tabs;
		var sortingTabs = $tabs;

		sortingArr = sortingArr.map( n => n.filename);

		sortingTabs.sort(function(a,b){
		    return sortingArr.indexOf(a.name) - sortingArr.indexOf(b.name);
		});

		tabs.set(sortingTabs);

		var selectedTabSimple = $selectedTab;

		if (selectedTabSimple === null)
			return ;

		document.getElementById(`tab-${selectedTabSimple.name}-button`).click();
		document.getElementById(`tab-${selectedTabSimple.name}-button`).click();
		document.getElementById(`tab-${selectedTabSimple.name}-button`).click();
	}

	$: onChangeTabs($store_tabs);

	setContext(TABS, {
		registerTab: tab => {
			var tabsSimple = $tabs;

			tabsSimple.push(tab);

			selectedTab.update(current => current || tab);
			
			$tabs = tabsSimple;
			$tabs = $tabs;

			onDestroy(() => {
				var tabsSimple = $tabs;
				const i = tabsSimple.indexOf(tab);
				tabsSimple.splice(i, 1);
				
				$tabs = tabsSimple;
				$tabs = $tabs;
				
				selectedTab.update(current => current === tab ? (tabsSimple[i] || tabsSimple[tabs.length - 1]) : current);
			});
		},

		registerPanel: panel => {
			panels.push(panel);
			selectedPanel.update(current => current || panel);
			
			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);
				selectedPanel.update(current => current === panel ? (panels[i] || panels[panels.length - 1]) : current);
			});
		},

		selectTab: tab => {
			var tabsSimple = $tabs;
			const i = tabsSimple.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
			

			$tabs = tabsSimple;
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