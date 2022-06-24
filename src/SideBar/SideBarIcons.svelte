<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let icon;
    export let drawer_id;

    let unfold = true;

    function showDrawer(){
        var drawers = document.getElementsByClassName("drawer");

        Array.prototype.forEach.call(drawers, function(element) {
            if (element.id === drawer_id){
                console.log("FOUND !");
                console.log(element.style.display);
                 element.style.display = (element.style.display != 'block') ? 'block' : 'none';
            }
            else
                element.style.display = 'none';
        });


    }

</script>

<div class="sidebar-icon" on:click={showDrawer}>
    <Icon src={icon} size="20"/>
</div>
