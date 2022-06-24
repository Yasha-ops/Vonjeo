<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/mode/c_cpp";
    import "brace/theme/clouds_midnight";
    
    import "brace/keybinding/vim";

    let text = "";
    export let h_parent;



    console.log("Parent height : " + h_parent);

    function editor_init(editors){
    }
</script>
  

<!--
    on:input={(obj) => console.log(obj.detail)}
    on:paste={(obj) => console.log(obj.detail)}
-->
  
<div class="">
  <AceEditor
    on:selectionChange={(obj) => console.log(obj.detail)}
 
    on:focus={() => console.log('focus')}
    on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
    on:cut={() => console.log('cut')}
    on:cursorChange={() => console.log('cursor change')}
    on:copy={() => console.log('copy')}
    on:init={editor_init}
    on:commandKey={(obj) => console.log(obj.detail)}
    
    on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}

    on:blur={() => console.log('blur')}
    width='100%'
    height={h_parent}
    lang="c_cpp"
    theme="clouds_midnight"
    fontSize='50pt'
    keybindings='vim'
    value={text} />
</div>