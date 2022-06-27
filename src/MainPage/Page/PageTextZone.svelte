<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/mode/c_cpp";
    import "brace/mode/javascript";
    import "brace/theme/clouds_midnight";

    import "brace/ext/searchbox";

    import "brace/ext/language_tools";
    import "brace/keybinding/vim";



    let text = "";

    export let h_parent;

    function editor_init(editors){
    }

    let optionObject = {
        fontSize: "20pt",
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    }

    function update_text(editor){
        console.log(editor.detail);
        text = editor.detail;
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
    
    on:input={update_text}
    
    on:blur={() => console.log('blur')}
    width='100%'
    height={h_parent}

    lang="javascript"
    
    theme="clouds_midnight"
  
    options = {optionObject}
    
    keybindings='vim'

    value={text} />
</div>