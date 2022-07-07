<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let icon;
    export let drawer_id;
    export let tooltip = "! tip !";
    export let onClick = function() {
        console.log("Called showDrawer");
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
    let unfold = true
</script>

<div class="sidebar-icon" on:click={onClick}>
    <Icon src={icon} size="20"/>
    
    <span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</div>

