<script>
import { playTimeToStop, showTrippyScreen, timerSettings, TimerDate} from "../Utils/store.js"
var soundOn = true;
//how do i check that the toggle button was turned on?
var screenOn = true;

function toggleSound(){
  soundOn = !soundOn;
  playTimeToStop.set(soundOn);
    }

function toggleScreen(){
  screenOn = !screenOn;
    showTrippyScreen.set(screenOn);
  }




  function apply()
  {
    var form = document.getElementById("date_id");
    if (form.value !== null)
    {
      var datetime = form.value;
      var hours = 0;
      var mins = 0;
      var sec = 0;
      hours = (parseInt(datetime[0]) * 10) + parseInt(datetime[1]);
      mins = (parseInt(datetime[3]) * 10) + parseInt(datetime[4]);
      sec = (parseInt(datetime[6]) * 10) + parseInt(datetime[7]);
      timerSettings.set(new TimerDate(hours, mins, sec));
      
    }
  }



</script>








<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box bg-[#484E56] text-white">
    <h3 class="font-bold text-lg text-center">Timer settings</h3>
    
      <div class="form-control" id="SoundSwitch" on:click={toggleSound}>
        <label class="label cursor-pointer text-blue-300">
          <span class="label-text text-lg text-blue-300">Sound</span> 
          <input type="checkbox" class="toggle toggle-accent" checked />
        </label>
      </div>

      <div class="form-control" id="ScreenSwitch" on:click={toggleScreen}>
        <label class="label cursor-pointer text-blue-300">
          <span class="label-text text-lg text-blue-300">Trippy Screen</span> 
          <input type="checkbox" class="toggle toggle-accent" checked />
        </label>
      </div>

      <div class="input-time">
        <label class="label cursor-text text-blue-300" >
          <span class="label-text text-lg text-blue-300"> Input Awaited Time</span>
          <input type="text" id="date_id" placeholder="00:00:00" class="input input-bordered input-info w-full max-w-xs" />
        </label>
      </div>
      <div class="modal-action flex justify-center items-center">
        <button on:click={apply}>
        <label for="my-modal-6" class="btn">Apply</label>
      </button>
      </div>
    </div>
      </div>




<style>
  .glass {
    background: rgb(85, 85, 84);
    backdrop-filter: blur(5px);
    border-radius: 10px;
  }
  </style>