<script>
    import Icon from "svelte-icons-pack";
    import ImWarning from "svelte-icons-pack/im/ImWarning";
    import { DEBUG, INFO } from './../Utils/store.js';

    function deleteFile(){
      console.log(INFO("FILE NOT SAVED")("CONTINUE"));
    }

</script>



<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-not-saved" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box bg-[#484E56] text-white">
    
    <h3 class="font-bold text-lg text-center">    
        File not saved !
    </h3>
    

    <div class="flex justify-center items-center text-yellow-500 mt-5 mb-2">
        <Icon src={ImWarning} size={70}/>
    </div>

    <p class="py-4">
        Please note! It looks like you are trying to close a file that has not been saved! Are you sure you want to continue at your own risk!
    </p>
    <div class="modal-action flex justify-center items-center">
      <button class="btn bg-red-500"  on:click={deleteFile}>Continue</button>
      <label for="my-modal-not-saved" class="btn">Cancel</label>
    </div>
  </div>
</div>
