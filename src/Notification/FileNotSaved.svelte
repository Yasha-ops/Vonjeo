<script>
    import Icon from "svelte-icons-pack";
    import ImWarning from "svelte-icons-pack/im/ImWarning";
</script>



<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-not-saved" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box bg-[#484E56] text-white">
    
    <h3 class="font-bold text-lg text-center">    
        File not saved !
    </h3>
    
    <Icon src={ImWarning} size={20}/>

    <p class="py-4">
        Please note! It looks like you are trying to close a file that has not been saved! Are you sure you want to continue at your own risk!
    </p>
    <div class="modal-action flex justify-center items-center">
      <label for="my-modal-not-saved bg-red-500" class="btn">Continue</label>
      <label for="my-modal-not-saved" class="btn">Cancel</label>
    </div>
  </div>
</div>
