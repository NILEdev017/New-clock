function theTime(){
  setInterval(theTime, 1000); 
  // personal note: setInterval is for repeating a function at the specified time interval,
  // which is in milliseconds so 1000ms is 1 second.

  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();
  let day = date.getDay();

  let weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let ampm;
  
  if(hour > 12){
    hour -= 12;
    ampm = "PM";
  } else{
    ampm = "AM";
  }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(secs < 10){
        secs = "0" + secs;
    }

  let time = hour + ":" + min + ":" + secs;

  document.getElementById('weekdays').innerHTML = weekdays[day];
  document.getElementById('ampm').innerHTML = ampm;
  document.getElementById('numbers').innerHTML = time;
  // personal note: textContent can be used in place of innerHTML, 
  // just in case innerHTML does not work on a particular browser. 
  
}

theTime();
