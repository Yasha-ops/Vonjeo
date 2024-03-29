<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { AceEditor } from "svelte-ace";
    import "brace/mode/c_cpp";
    import "brace/mode/javascript";
    import "brace/mode/golang";
    import "brace/theme/clouds_midnight";
    import "brace/theme/github";
    import "brace/theme/chaos";
    import "brace/theme/cobalt";
    import "brace/theme/twilight";
    import "brace/theme/dracula";
    import "brace/theme/dawn";
    import "brace/theme/clouds";
    import "brace/theme/monokai";
    import "brace/theme/tomorrow";
    import "brace/theme/idle_fingers";
    import "brace/theme/kuroir";
    import "brace/theme/gob";
    import "brace/theme/textmate";
    import "brace/theme/sorcier";
    import "brace/theme/tao";
    import "brace/theme/karim";
    import "brace/theme/raphael";
    import "brace/theme/eliott";
    import "brace/theme/yassine";
    import "brace/theme/param";
    import "brace/theme/pov";

    import ace from "brace";

    ace["define"]("ace/theme/custom");

    import "brace/ext/searchbox";
    import "brace/ext/language_tools";
    import "brace/keybinding/vim";

    import { FONTSIZE } from "./../../Utils/store.js";
    import { FONTTYPE } from "./../../Utils/store.js";
    import { THEME, store_tabs } from "./../../Utils/store.js";

    export let text = "";
    export let h_parent;
    export let name;
    export let language;

    function editor_init(editors) {}
    let optionObject = {
        fontSize: "20pt",
        fontFamily: "Consolas",
        theme: "ace/theme/clouds_midnight",
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    };

    $: fontSizeSet($FONTSIZE);
    function fontSizeSet(e) {
        optionObject.fontSize = `${$FONTSIZE}pt`;
        if (optionObject.fontSize == "Defaultpt") {
            optionObject.fontSize = "20pt";
        }
    }

    $: fontTypeSet($FONTTYPE);
    function fontTypeSet(e) {
        optionObject.fontFamily = `${$FONTTYPE}`;
        if (optionObject.fontFamily == "Default") {
            optionObject.fontFamily = "Cousine";
        }
    }

    $: themeSet($THEME);
    function themeSet(e) {
        optionObject.theme = `ace/theme/${$THEME}`;
        if (optionObject.theme == "ace/theme/Default") {
            optionObject.theme = "ace/theme/clouds_midnight";
        }
    }

    const dispatch = createEventDispatcher();

    $: textUpdated(text);
    function textUpdated(text) {
        dispatch("textUpdate", {
            value: text,
        });
    }

    function update_text(editor) {
        text = editor.detail;
    }
    function update_stats() {
        let fileStats = document.getElementById("tab_stats");

        let nbr_errors = document.getElementsByClassName("ace_error").length;
        let nbr_warning = document.getElementsByClassName("ace_warning").length;
        fileStats.innerText = "☠️ " + nbr_errors + " ⚠ " + nbr_warning;
    }

    console.log(text);
</script>

<div class="">
    <AceEditor
        on:selectionChange={(obj) => console.log(obj.detail)}
        on:focus={() => console.log("focus")}
        on:cut={() => console.log("cut")}
        on:cursorChange={() => console.log("cursor change")}
        on:copy={() => console.log("copy")}
        on:init={editor_init}
        on:commandKey={(obj) => console.log(obj.detail)}
        on:input={(obj) => {
            update_text(obj);
            update_stats();
        }}
        on:blur={() => console.log("blur")}
        width="100%"
        height={h_parent}
        lang={language}
        theme="github"
        options={optionObject}
        keybindings="vim"
        value={text}
        {name}
    />
</div>
