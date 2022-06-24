<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let icon;
    export let drawer_id;

    let unfold = true;

    function showDrawer(){
        var drawers = document.getElementsByClassName("drawer");
        var main_files = document.getElementById("main_files");

        Array.prototype.forEach.call(drawers, function(element) {
            if (element.id == drawer_id){
                if (element.style.display != 'block') {    
                    element.style.display = 'block';
                    main_files.classList.add('')
                }
                else
                    element.style.display = 'none';
            }
            else
                element.style.display = 'none';
        });


    }

</script>

<div class="sidebar-icon" on:click={showDrawer}>
    <Icon src={icon} size="20"/>
</div>
