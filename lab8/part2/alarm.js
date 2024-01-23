var parent=document.getElementById("days");
var btn_exit=document.getElementById("rmove_alarm");
var btn_show=document.getElementById("show_alarm");
var btn_set=document.getElementById("set-alarm");
var btn_clear=document.getElementById("clear-alarm");


    var now = new Date();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var Today = days[now.getDay()];
        for(i=0;i<6;i++)
        {
            var  day=document.createElement("span");
            day.classList.add("span");
            day.innerText=`${days[i]}`;
            if(days[i]===Today)
            {
                day.classList.add("today");
            }
            parent.appendChild(day);

        }

    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var apm;

        if(hours >=12)
        {
            apm='PM'
        }else
        {
            apm='AM'
        }

        if(hours%12 !==0)
        {
            hours%=12;
        }
    
        document.getElementById('digital-watch').innerText=
        `${hours}:${minutes}:${seconds} ${apm}`;
    }


    

    function alarm_show(){
        document.getElementById("alarm").style.display="flex";
    }
    function alarm_remove(){
        document.getElementById("alarm").style.display="none";
    }
      

 




 function setAlarm() {
    var Hours = document.getElementById('alarmHours').value;
    var Minutes = document.getElementById('alarmMinutes').value;
    var Seconds = document.getElementById('alarmSeconds').value;

    setInterval(() => {
      const now = new Date();
      var currentHours = now.getHours().toString().padStart(2, '0');
      var currentMinutes = now.getMinutes().toString().padStart(2, '0');
      var currentSeconds = now.getSeconds().toString().padStart(2, '0');
      if(currentHours% 12 !==0)
    {
        currentHours%=12;
    }
    

      if (currentHours == Hours && currentMinutes == Minutes && currentSeconds == Seconds) {
        alert('Alarm! Wake up!');

      }
    
    }, 1000);
  }

  function clear_alarm()
  {
    var Hours = document.getElementById('alarmHours').value='';
    var Minutes = document.getElementById('alarmMinutes').value='';
    var Seconds = document.getElementById('alarmSeconds').value='';

    
  }

 
 btn_exit.addEventListener("click",alarm_remove);
 btn_show.addEventListener("click",alarm_show);
 btn_set.addEventListener("click",setAlarm);
 btn_clear.addEventListener("click",clear_alarm);

 setInterval(updateClock, 1000);
 updateClock();
