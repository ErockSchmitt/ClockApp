<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="Time_Style.css" />
    <script src="timer.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Rubik:300" rel="stylesheet">
</head>
<body>
    <div class="nav">
        <ul>
            <li><a href="Clock.php">Clock</a></li>
            /
            <li><a href="Timer.php"  id = "active">Timer</a></li>
            /
            <li><a href="Stopwatch.php">StopWatch</a></li>
        </ul>
    </div>
    <div class="container">
        <div id="stopwatch"></div>
    </div>
    <div class="input">
        <input id = "hour" type="number" min="0"value = "0" >
        <input id = "minute" type="number" min="0" max = "59" value = "0">
        <input id = "second" type="number" min="0" max = "59" value = "0">
    </div>
    <div id="buttons">
        <button id = "start">Start/Resume</button>
        <button id = "pause">Pause</button>
        <button id = "reset">Reset</button>
    </div>
</body>
</html>

