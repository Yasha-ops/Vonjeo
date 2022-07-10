<script>
    import { fade, fly, scale } from "svelte/transition";
    import { flip } from "svelte/animate";

    import {
        nbr_screens,
        LANGUAGE,
        LanguagesType,
        file_tree,
        store_tabs,
        TypeFile,
    } from "./Utils/store.js";

    import SideBar from "./SideBar/SideBar.svelte";
    import MainPage from "./MainPage/MainPage.svelte";
    import Drawer from "./Drawer/Drawer.svelte";
    import FileNotSaved from "./Notification/FileNotSaved.svelte";

    import SettingsModalMain from "./Settings/SettingsModalMain.svelte";

    import TimerWrapper from "./Timer/TimerWrapper.svelte";
    import TimerModal from "./Timer/TimerModalSettings.svelte";
    import TimerModalPause from "./Timer/TimerModalPause.svelte";

    import SpotifyWrapper from "./Spotify/SpotifyWrapper.svelte";

    import Folder from "./TreeView/Folder.svelte";

    async function givePath() {
        var form = document.getElementById("file_input");
        console.log(`Loading project ${form.value}`);

        let path =
            "http://localhost:8000/project?dir=" +
            form.value.replaceAll("/", "%2F");

        file_tree.set(
            await fetch(path)
                .then((response) => response.json())
                .catch((err) => console.log(err))
        );
        console.log(`Loaded project ${form.value}`);
        console.log(file_tree);
    }

    function openFile(obj) {
        store_tabs.update((tabs) => {
            tabs = [
                ...tabs,
                {
                    type: TypeFile.FILE,
                    filename: obj.detail.label,
                    content: obj.detail.content,
                    id: `panel-${obj.detail.label}`,
                    saved: false,
                },
            ];
            return tabs;
        });

        $store_tabs = $store_tabs;

        console.log($store_tabs);
    }
</script>

<TimerModalPause />

<div class="flex h-screen w-screen">
    <SettingsModalMain />

    <FileNotSaved />
    <TimerModal />
    <SpotifyWrapper />
    <TimerWrapper />

    <div class="flex-none h-screen w-14">
        <SideBar />
    </div>

    <Drawer
        drawer_id={"drawer-search"}
        name={$LANGUAGE === LanguagesType.ENGLISH
            ? "Search"
            : $LANGUAGE === LanguagesType.FRENCH
            ? "Chercher"
            : "Karohy"}
    >
        <input
            type="text"
            placeholder={$LANGUAGE === LanguagesType.ENGLISH
                ? "Search"
                : $LANGUAGE === LanguagesType.FRENCH
                ? "Chercher"
                : "Karohy"}
            class="flex-1 ml-3 mb-1 input input-bordered input-xs max-w-xs w-32"
        />
        <input
            type="text"
            placeholder={$LANGUAGE === LanguagesType.ENGLISH
                ? "Replace"
                : $LANGUAGE === LanguagesType.FRENCH
                ? "Remplacer"
                : "Soloy"}
            class="flex-1 ml-3 input input-bordered input-xs max-w-xs w-32"
        />
    </Drawer>

    <Drawer
        drawer_id={"drawer-files"}
        name={$LANGUAGE === LanguagesType.ENGLISH
            ? "Files"
            : $LANGUAGE === LanguagesType.FRENCH
            ? "Fichiers"
            : "Rakitra"}
    >
        {#key $file_tree}
            <div class="flex flex-auto flex-shrink w-full">
                <span class="flex flex-auto float-left flex-shrink">
                    <input
                        class="input w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="text"
                    />
                </span>
                <span class="flex flex-auto">
                    <label for="load_project_button" class="btn">Load</label>
                    <button id="load_project_button" on:click={givePath} />
                </span>
            </div>
            {#if $file_tree && Array.isArray($file_tree.files)}
                <Folder
                    label={$file_tree.label}
                    files={$file_tree.files}
                    expanded
                    on:fileClick={(obj) => openFile(obj)}
                />
            {/if}
        {/key}
    </Drawer>

    {#each Array($nbr_screens) as _, index (index)}
        <div
            animate:flip={{ duration: 300 }}
            out:scale={{ duration: 250 }}
            in:fly={{ x: -20, duration: 250 }}
            class="flex flex-auto"
        >
            <MainPage onePage={index !== 0} />
        </div>
    {/each}
</div>
