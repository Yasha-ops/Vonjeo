<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/mode/c_cpp";
    import "brace/theme/clouds_midnight";
    
    import "brace/keybinding/vim";

    export let h_parent;
    export let w_parent;

    console.log(h_parent);

    console.log("Parent height : " + h_parent);


    let options_editor = {
        fontSize: "20pt"
    }
    
    let innerWidth = 0
    let innerHeight = 0
    

    console.log("Screen : " + innerHeight); 
    let text = "// Write Text";
</script>

<svelte:window bind:innerWidth bind:innerHeight />
  

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
    on:commandKey={(obj) => console.log(obj.detail)}
    
    on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}

    on:blur={() => console.log('blur')}
    width='100%'
    height={h_parent}
    lang="c_cpp"
    theme="clouds_midnight"
    options = {options_editor}
    keybindings="vim"
    value={text + " " + innerHeight} />
</div>