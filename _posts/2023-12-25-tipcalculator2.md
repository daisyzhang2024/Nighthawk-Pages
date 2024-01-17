---
layout: base
title: Tip Calculator 2 
description: tip calculator loloosl cause I failed the first time
type: hacks
courses: { compsci: {week: 2} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Tip Calculator 2</title>
</head>
<body>
    <div class="container">
        <div class="calculator">
            <h3 style="text-align: center;font-weight: bold;">Tip Calculator</h3>
            <p style="border-bottom: 2px solid rgba(211, 211, 211, 0.5);"></p>
            <br>
            <label for="amount">Bill Amount</label>
            <br>
            <button><i class="fa-solid fa-dollar-sign"></i></button><input id="amount" type="number">
            <br>
            <br>
            <label for="guest">Number of Guests</label>
            <br>
            <button><i class="fa-solid fa-person"></i></button><input id="guest" type="number">
            <br>
            <br>
            <label for="quality">Service Quality</label>
            <br>
            <select id="quality">
                <option disabled selected value='0'>Choose...</option>
                <option value="0.3">30% - Outstanding 🤩</option>
                <option value="0.2">20% - Good 😃</option>
                <option value="0.15">15% - It was ok 🙂</option>
                <option value="0.10">10% - Bad 🙁</option>
                <option value="0.05">5% - Terrible 😤</option>
            </select>
            <div style="text-align: center;">
                <p style="border-top: 2px solid rgba(211, 211, 211, 0.5);"></p>
                <button onclick= 'calculate()' style="border-radius: 5px; width: fit-content;">Calculate</button>
            </div>
        </div>
        <div id="tip-amount"></div>
    </div>
</body>
</html>

<style>
body{
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background: conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7);
}

.container{
    width: 95%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculator{
    border: 1px solid lightgray;
    background-color: whitesmoke;
    border-radius: 5px;
    width: 400px;
    margin: auto;
    padding: 0 25px; /*left to right padding is 25px*/
    font-size: 1rem;
    font-weight: 100;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.calculator input{
    box-sizing: border-box;
    width: 90%;
    padding: 8px;
    outline: none;
    border-radius: 5px;
    border: 1px solid lightpink;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.calculator button{
    width: 10%;
    padding: 8px;
    outline: none;
    cursor: pointer;
    border: 1px solid lightpink;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: whitesmoke;
}

.calculator button:hover{
    background-color: pink;
}

#quality{
    width: 100%;
    padding: 8px;
    outline: none;
    border-radius: 5px;
    border: 1px solid lightpink;
}

#tip-amount{
    visibility: hidden;
    min-width: 250px;
    margin: auto;
    background-color: lightpink;
    color: white;
    bottom: 30px;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;

}
/*creating class with javascript*/
#tip-amount.show{
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein{
    from{bottom:0; opacity: 0;}
    to{bottom: 30px; opacity1;}
}

@keyframes fadein{
    from{bottom:0; opacity: 0;}
    to{bottom: 30px; opacity1;}
}

@-webkit-keyframes fadeout{
    from{bottom: 30px; opacity: 1;}
    to{bottom:0; opacity: 0;}
}

@keyframes fadeout{
    from{bottom: 30px; opacity: 1;}
    to{bottom:0; opacity: 0;}
}

@media(max-width: 480px){
    .calculator input{
        width: 85%;
    }

    .calculator button{
        width: 85%;
    }
}

@media(max-width: 320px){
    .calculator input{
        width: 80%;
    }
}
</style>

<script>
const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

function calculate(){
    console.log('hi');
    console.log((quality.value*amount.value)/guest.value);
    const tip = ((amount.value * quality.value)/(guest.value)).toFixed(2); // two decimal places
    console.log(tip);
    // clear values
    amount.value = '';
    guest.value = '';
    quality.value = '';
    //check if user has filled input fields
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

function showTipAmount(){
    var x = tipAmount;
    x.className = 'show'; // change class name to show
    //only want to last 3 secs
    setTimeout(function(){x.className = x.className.replace('show','');}, 3000); //replace show with an empty string
}
</script>

