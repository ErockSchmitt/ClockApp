document.addEventListener('DOMContentLoaded', function(){

    let currentHours = currentMinutes = currentSeconds = currentMilliseconds = "00"; 
    document.getElementById("stopwatch").innerHTML  
            = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + currentMilliseconds;

    let count;

    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
    document.getElementById("pause").addEventListener("click", pauseTimer);

    function startTimer(){
        count = setInterval(countSeconds, 100);
        document.getElementById("start").disabled = true;
    }

    function pauseTimer(){
        clearInterval(count);
        document.getElementById("start").disabled = false;
    }

    function resetTimer(){
        currentHours = currentMinutes = currentSeconds = currentMilliseconds = "00";  
        document.getElementById("stopwatch").innerHTML  
            = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + currentMilliseconds;       
    }

    function countSeconds() { 
            currentMilliseconds++;
            currentMilliseconds = ( currentMilliseconds < 10 ? "0" : "" ) + currentMilliseconds; 
            
            if(currentMilliseconds >= 10)
                {
                    currentMilliseconds = 0;
                    currentSeconds++;
                    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds; 
                }
            if(currentSeconds >= 60)
                {
                    currentSeconds = 0;
                    currentMinutes++;
                    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes; 
                }
            if(currentMinutes >= 60)
                {
                    currentMinutes = 0;
                    currentHours++;
                    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;  
                }
            

            document.getElementById("stopwatch").innerHTML 
                = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + currentMilliseconds * 10;
                
    }
});