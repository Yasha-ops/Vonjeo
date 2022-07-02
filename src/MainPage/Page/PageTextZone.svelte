<script lang="ts">
    import { AceEditor} from "svelte-ace";
    import "brace/mode/c_cpp";
    import "brace/mode/javascript";
    import "brace/mode/golang";
    import "brace/theme/clouds_midnight";

    import "brace/ext/searchbox";

    import "brace/ext/language_tools";
    import "brace/keybinding/vim";

    import { FONTSIZE } from "./../../Utils/store.js";

    export let text = "";
    export let h_parent;
    export let name;

    function editor_init(editors){
    }

    let optionObject = {
        fontSize: "20pt",
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    }

    $: fontSet($FONTSIZE);
    function fontSet(e) {
        optionObject.fontSize = `${$FONTSIZE}pt`;
        if (optionObject.fontSize == "Defaultpt") {
            optionObject.fontSize = "20pt"
        }
    }

    function update_text(editor){
        text = editor.detail;
    }

    function update_stats(){
        let fileStats = document.getElementById("tab_stats");
        
        let nbr_errors = document.getElementsByClassName("ace_error").length;
        let nbr_warning = document.getElementsByClassName("ace_warning").length;
        fileStats.innerText = '☠️ ' + nbr_errors + ' ⚠ ' + nbr_warning; 
    }

</script>
   
<div class="">
  <AceEditor
    on:selectionChange={(obj) => console.log(obj.detail)}
 
    on:focus={() => console.log('focus')}
    on:cut={() => console.log('cut')}
    on:cursorChange={() => console.log('cursor change')}
    on:copy={() => console.log('copy')}
    on:init={editor_init}
    on:commandKey={(obj) => console.log(obj.detail)}
    
    on:input={(obj) => {
        update_text(obj);
        update_stats();
    }}
    
    on:blur={() => console.log('blur')}
    width='100%'
    height={h_parent}

    lang="javascript"
     
    theme="clouds_midnight"
  
    options = {optionObject}
    
    keybindings='vim'

    value={text} 

    name={name}
    />
</div>