<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="Time_Style.css" />
    <link href="https://fonts.googleapis.com/css?family=Rubik:300" rel="stylesheet">
    
</head>
<body>
    <div class="nav">
        <ul>
            <li><a href="Clock.php" id = "active">Clock</a></li>
            /
            <li><a href="Timer.php">Timer</a></li>
            /
            <li><a href="Stopwatch.php">StopWatch</a></li>
        </ul>
    </div>
    <div class="container">
        <div id = "timezone">
            America / New York
        </div>
        <br>
        <div id="time"></div>
        <br>
        <div id="date">
        </div>
    </div>
</body>
</html>

<script>
    setInterval(function() {
        let date = new Date();    

        let currentHours = date.getHours();   
        let currentMinutes = date.getMinutes();   
        let currentSeconds = date.getSeconds();
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;   
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;    
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;    
        let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
        document.getElementById("time").innerHTML = currentTimeString;

        let options = {weekday: 'long', month: 'long', day: 'numeric' }
        document.getElementById("date").innerHTML = date.toLocaleDateString('en-US',options);
    }, 1000);
</script>
