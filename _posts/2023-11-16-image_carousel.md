---
layout: base
title: image carosuel
description: image carosuel
type: hacks
courses: { compsci: {week: 2} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <title>Image Carosuel</title>
</head>
<body>
    <div class="container">
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby1.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby2.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby3.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby4.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby5.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby6.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby7.jpg" alt = "asian baby image" width = "100%">
    </div>
    <div class="image fade">
    <img src = "{{site.baseurl}}/images/asianbaby8.jpg" alt = "asian baby image" width = "100%">
    </div>
    <i id="prev" onclick="show_image(-1)" class="fa-solid fa-chevron-left"></i>
    <i id="next" onclick="show_image(1)"
    class="fa-solid fa-chevron-right"></i>
    <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>   
    </div>
</body>
</html>

<style>
.container{
    border: 1px solid black;
    width: 95%;
    height: 100vh;
    margin: auto; /*container in center*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /*for dots*/
    position: relative;
}

.image{
    display: none;
}

#prev{
    position: absolute;
    color: white;
    background-color: black;
    top: 43%;
    left: 0; /*on edge*/
    cursor: pointer;
    padding: 16px;
    font-weight: bold; 
    font-size: 1rem; /*each rem 16 px*/
    transition: 0.6s ease; /*take 0.6 secs when hover over button, with ease*/
    border: radius: 0 3px 3px 0;
    user-select: none;
}

#next{
    position: absolute;
    color: white;
    background-color: black;
    top: 43%;
    right: 0; /*on edge*/
    cursor: pointer;
    padding: 16px;
    font-weight: bold; 
    font-size: 1rem; /*each rem 16 px*/
    transition: 0.6s ease; /*take 0.6 secs when hover over button, with ease*/
    border: radius: 0 3px 3px 0;
    user-select: none;
}

#prev:hover, #next:hover{
    background-color: rgba(0, 0, 0, 0.5);
}

.dots{
    text-align: center;
    margin: 2%;
}

.dot{
    height: 15px;
    width: 15px;
    background-color: #bbb;
    display: inline-block;
    border-radius: 50%;
    margin: 0 2px;
    transition: background-color 0.6s ease;
}

.active{
    background-color: #717171;
}

.fade{
    animation: fade 1.5s;
}

@keyframes fade{
    from {opacity: .4}
    to {opacity: 1}
}
@media(max-width: 600px){
    .container{
        width: 100%;
    }
}
</style>

<script>
var index = 0;
show_image(index);
function show_image(i){
    index += i;
    var images = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");
    for(i = 0; i < images.length; i++)
        images[i].style.display = "none";
    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
    if(index > images.length - 1) /*at last image, then send back to beginning*/
        index = 0;
    if(index < 0) /*if user at first image, click on previous button then send to last image*/
        index = images.length - 1;
    /*display the image*/
    images[index].style.display = "block";
    dots[index].classNames += " active";
}
</script>