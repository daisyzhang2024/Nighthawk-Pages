---
layout: base
title: Digital clock
description: digital clock
type: hacks
courses: { compsci: {week: 2} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <title>Digital Clock</title>
</head>
<body>
<div class="container">
<div class="digitalClock">
<h1 id="day">MON</h1>
<h1 id="hour">04</h1>
<h1 id="bar1">|</h1>
<h1 id="minute">20</h1>
<h1 id="bar2">|</h1>
<h1 id="ampm">PM</h1>
</div>
</div>
</body>
</html>

<style>
@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Bonbon&family=Borel&family=Chilanka&display=swap');

body{
    font-family: "Chilanka";
    overflow: hidden;
    background: conic-gradient(at 60% 45%, red, yellow, green);
}

.container{
    width: 95%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.digitalClock{
    width: fit-content;
    margin: auto;
    padding: 10px;
    border-radius: 2px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
}
.digitalClock h1{
    display: inline-block;
    margin: 25px 10px 10px 10px; /*top right bottom left*/
    font-weight: bold;
    font-size: 5rem;
}
@media(max-width: 768px){
    #bar1, #bar2{
        display: none;
    }

    .digitalClock{
        text-align: center;
        width: 100%;
    }

    .digitalClock h1{
        display: block;
    }
}

@media(max-width: 480px){
    .digitalClock h1{
        font-size: 4rem;
    }
}
</style>

<script>
window.addEventListener("load", calculateTime) //as soon as load calculate time
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? "PM" : "AM" //if hour is greater than or equal to 12, if it is then store in PM but if its not then store in AM
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    hour = hour % 12; //if mod 12 the 6pm instead of 18:00
    hour = hour ? hour : "12"; //if hours are equal, change to twelve
    hour = hour < 10 ? "0" + hour: hour;
    minute = minute < 10 ? "0" + minute : minute;
    
    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}

</script>

