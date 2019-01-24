document.addEventListener('DOMContentLoaded', function(){

    /*------------ Variables ------------*/

    //Once document loads... 
    //Set initialize and set all values to default
    // current* are the values being presented on the page
    let currentHours = currentMinutes = currentSeconds = "00"; 
    updateTimer();

    //variable that will tell the program if the Timer is paused
    let paused;

    //Will be used to start the countdown at an interval
    let startInterval;

    /*------------ End Variables ------------*/


    /*------------ Listeners ------------*/

    //Add event listeners to the buttons in the HTML
    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
    document.getElementById("pause").addEventListener("click", pauseTimer);

    /*------------ End Listeners ------------*/


    /*------------ Functions ------------*/

    //updateTimer()
    //updates the Timer with the values of currentHours, currentMinutes, and currentSeconds
    function updateTimer()
    {
        document.getElementById("stopwatch").innerHTML  
            = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    }

    //startTimer()
    //Will be fired at 'start' button click
    function startTimer(){
        if(!paused)
        {
            //if the timer isnt paused
            //Grabs values located in the spinners under the timer and parses them to be uniform
            currentHours = document.getElementById("hour").value
            currentMinutes = document.getElementById("minute").value
            currentSeconds = document.getElementById("second").value
            currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
            currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
            currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
        
            //overwrites the values in the timer to match the user entered values
            updateTimer();
        }
        
        //starts the count so it isnt paused
        paused = false;

        //starts countDown() at an interval of 1 second
        startInterval = setInterval(countDown, 1000);
        //disables the startbutton since it has already started
        document.getElementById("start").disabled = true;
    }

    //pauseTimer()
    //clears the interval started by startTimer()
    //enables the start button again
    function pauseTimer(){
        paused = true;

        clearInterval(startInterval);
        document.getElementById("start").disabled = false;
    }

    //resetTimer
    //pauses the timer using pauseTimer()
    //sets paused to false
    //Sets values of the Timer back to default and updatesTimer ('00:00:00')
    function resetTimer(){
        pauseTimer();

        paused = false;
        
        currentHours = currentMinutes = currentSeconds = "00";
        updateTimer();         
    }

    
    //countDown()
    function countDown() { 
        if(document.getElementById("stopwatch").innerText == "00:00:00")
        {
            pauseTimer();
            return 0;  
        }

        if(currentSeconds > 0)
        {
            currentSeconds--
            currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
        }

        if(currentSeconds <= 0)
            {
               if(currentMinutes == 0)
                    {
                        currentMinutes = "0";
                    }
                else
                    {
                        currentSeconds = 59;
                        currentMinutes--;
                    }
                currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes; 
            }

        if(currentMinutes <= 0)
            {
                if(currentHours == 0)
                    {
                        currentHours = "0";
                    }
                else
                    {
                        currentMinutes = 59;
                        currentSeconds = 59;
                        currentHours--;
                    }
                currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
            }

        updateTimer();
    }

    /*------------ End Functions ------------*/
});