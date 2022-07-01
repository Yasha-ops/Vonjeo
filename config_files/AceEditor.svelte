<script lang="ts">
  import { createEventDispatcher, tick, onMount, onDestroy } from "svelte";
  import * as ace from "brace";
  import "brace/ext/emmet";
  const dispatch = createEventDispatcher<{
    init: ace.Editor;
    input: string;
    selectionChange: any;
    blur: void;
    changeMode: any;
    commandKey: { err: any; hashId: any; keyCode: any };
    copy: void;
    cursorChange: void;
    cut: void;
    documentChange: { data: any };
    focus: void;
    paste: string;
  }>();

  /**
   * translation of vue component to svelte:
   * @link https://github.com/chairuosen/vue2-ace-editor/blob/91051422b36482eaf94271f1a263afa4b998f099/index.js
   **/
  export let value: string = ""; // String, required
  export let lang: string = "json"; // String
  export let theme: string = "chrome"; // String
  export let height: string = "100%"; // null for 100, else integer, used as percent
  export let width: string = "100%"; // null for 100, else integer, used as percent
  export let options: any = {}; // Object
  export let readonly: boolean = false;
  export let keybindings: string = null;

  let editorElement: HTMLElement;
  let editor: ace.Editor;
  let contentBackup: string = "";

  const requireEditorPlugins = () => {};
  requireEditorPlugins();

  onDestroy(() => {
    if (editor) {
      editor.destroy();
      editor.container.remove();
    }
  });

  $: watchValue(value);
  function watchValue(val: string) {
    if (contentBackup !== val && editor && typeof val === "string") {
      editor.session.setValue(val);
      contentBackup = val;
    }
  }

  $: watchTheme(theme);
  function watchTheme(newTheme: string) {
    if (editor) {
      editor.setTheme("ace/theme/" + newTheme);
    }
  }

  $: watchMode(lang);
  function watchMode(newOption: any) {
    if (editor) {
      editor.getSession().setMode("ace/mode/" + newOption);
    }
  }

  $: watchOptions(options);
  function watchOptions(newOption: any) {
    if (editor) {
      editor.setOptions(newOption);
    }
  }

  $: watchReadOnlyFlag(readonly);
  function watchReadOnlyFlag(flag) {
    if (editor) {
      editor.setReadOnly(flag);
    }
  }

  const resizeOnNextTick = () =>
    tick().then(() => {
      if (editor) {
        editor.resize();
      }
    });

  $: if (height !== null && width !== null) {
    resizeOnNextTick();
  }

  onMount(() => {
    lang = lang || "text";
    theme = theme || "chrome";

    editor = ace.edit(editorElement);

    dispatch("init", editor);
    editor.$blockScrolling = Infinity;
    // editor.setOption("enableEmmet", true);
    editor.getSession().setMode("ace/mode/" + lang);
    editor.setTheme("ace/theme/" + theme);
    editor.setValue(value, 1);
    editor.setReadOnly(readonly)
    contentBackup = value;
    setEventCallBacks();
    if (options) {
      editor.setOptions(options);
    }
  });

  const ValidPxDigitsRegEx = /^\d*$/;
  function px(n: string): string {
    if (ValidPxDigitsRegEx.test(n)) {
      return n + "px";
    }
    return n;
  }

  function setEventCallBacks() {
    editor.onBlur = () => dispatch("blur");
    editor.onChangeMode = (obj) => dispatch("changeMode", obj);
    editor.onCommandKey = (err, hashId, keyCode) =>
      dispatch("commandKey", { err, hashId, keyCode });
    editor.onCopy = () => dispatch("copy");
    editor.onCursorChange = () => {
      

      console.log("popo");
      dispatch("cursorChange");
    }
  
    editor.onCut = () => {
      const copyText = editor.getCopyText();
      console.log("cut event : ", copyText);
      editor.insert("");
      dispatch("cut");
    };
    editor.onDocumentChange = (obj: { data: any }) =>
      dispatch("documentChange", obj);
    editor.onFocus = () => dispatch("focus");
    editor.onPaste = (text) => {
      console.log("paste event : ", text);
      editor.insert(text);
      dispatch("paste", text);
    };
    editor.onSelectionChange = (obj) => dispatch("selectionChange", obj);
    editor.on("change", function () {
      const content = editor.getValue();
      value = content;
      dispatch("input", content);
      contentBackup = content;
    });
    
    if (keybindings != null){
      editor.setKeyboardHandler("ace/keyboard/" + keybindings); 
    }

    // BREAKPOINTS 
    // 4. Attach an event listener to handle when the user clicks on some row of the gutter
    //    In this case, the breakpoint will be added in the clicked position of the document
    editor.on("guttermousedown", function(e) {
      console.log("Clicked !");
      var target = e.domEvent.target;

      if (target.className.indexOf("ace_gutter-cell") == -1){
          return;
      }

      if (!editor.isFocused()){
          return; 
      }

      if (e.clientX > 30 + target.getBoundingClientRect().left){
          return;
      }

      var breakpoints = e.editor.session.getBreakpoints(row, 0);
      var row = e.getDocumentPosition().row;


      // If there's a breakpoint already defined, it should be removed, offering the toggle feature
      if(typeof breakpoints[row] === typeof undefined){
          console.log("SETTING BREAKPOINT !");
          e.editor.session.setBreakpoint(row);
      }else{
          console.log("SETTING BREAKPOINT !");
          e.editor.session.clearBreakpoint(row);
      }

      e.stop();
    });

    editor.on("change", function (e) {
	if (e.lines.length > 1 && (e.action==='insert' || e.action==='remove')){
		const breakpointsArrayOld = editor.session.getBreakpoints();
		let breakpointsArrayNew = [];

		const amountOfLinesAffected = e.lines.length - 1;
		const startRow = e.start.row;
		const endRow = e.end.row;

		for (const key of Object.keys(breakpointsArrayOld)) {
			let breakpointRow = parseInt(key)

			if (e.action==='insert') {  // new lines
				if (breakpointRow > startRow ){
					// breakpoint forward
					breakpointsArrayNew[breakpointRow + amountOfLinesAffected] = "ace_breakpoint"
				}
				else {
					// unaffected by insert
					breakpointsArrayNew[breakpointRow] = "ace_breakpoint"
				}
			}
			else if (e.action==='remove') {  // removed lines
				if (breakpointRow > startRow && breakpointRow <= endRow ){
					// breakpoint removed
				}
				else if (breakpointRow >= endRow ){
					// breakpoint behind
					breakpointsArrayNew[breakpointRow - amountOfLinesAffected] = "ace_breakpoint"
				}
				else {
					// unaffected by remove
					breakpointsArrayNew[breakpointRow] = "ace_breakpoint"
				}
			}
		}

		// remove all old breakpoints
		for (const key of Object.keys(breakpointsArrayOld)) {
			let breakpointRow = parseInt(key)
			editor.session.clearBreakpoint(breakpointRow);
		}

		// add all new breakpoints
		for (const key of Object.keys(breakpointsArrayNew)) {
			let breakpointRow = parseInt(key)
			editor.session.setBreakpoint(breakpointRow);
		}
	}
})
}

function refreshEditor(){
  console.log("Ace Editor clicked !");
  if (editor === undefined)
    return;
  editor.resize(true);
  editor.insert("");
}
</script>


<div style="width:{px(width)};height:{px(height)}" on:click={refreshEditor} name="AceEditor">
  <div bind:this={editorElement} style="width:{px(width)};height:{px(height)}" />
</div>
