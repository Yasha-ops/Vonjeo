<script>
var soundOn = true;
//how do i check that the toggle button was turned on?


var screenOn = true;
//how do i check that the toggle button was turned on?




</script>








<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box bg-[#484E56] text-white">
    <h3 class="font-bold text-lg text-center">Timer settings</h3>
    
  
    <div class="glass width-2/3 h-64 p-4">
      <h1 class="mb-2 text-2xl text-blue-100 border-b border-white">
        Stop Watch Timer</h1>
    <div class="text-left">
    
      <div class="form-control" id="SoundSwitch" >
        <label class="label cursor-pointer text-blue-300">
          <span class="label-text">Sound</span> 
          <input type="checkbox" class="toggle toggle-accent" checked />
        </label>
      </div>

      <div class="form-control" id="ScreenSwitch" >
        <label class="label cursor-pointer text-blue-300">
          <span class="label-text">Trippy Screen</span> 
          <input type="checkbox" class="toggle toggle-accent" checked />
        </label>
      </div>

      <div class="input-time">
        <label class="label cursor-text text-blue-300" >
          <span class="label-text"> Input Awaited Time</span>
          <input type="text" placeholder="00:00:00" class="input input-bordered input-info w-full max-w-xs" />
        </label>
      </div>
    </div>
      </div>

    <div class="modal-action flex justify-center items-center">
      <label for="my-modal-6" class="btn">Apply</label>
    </div>
  </div>
</div>


<style>
  .glass {
    background: rgb(85, 85, 84);
    box-shadow: 0 8px 32px 0 rgba(94, 225, 248, 0.37);
    backdrop-filter: blur(5px);
    border-radius: 10px;
  }
  </style>