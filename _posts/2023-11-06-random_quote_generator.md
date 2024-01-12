---
layout: base
title: random quote generator
description: generates random quotes, want to have this for random problem generator
type: hacks
courses: { compsci: {week: 2} }
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Random Quote Generator!</title>
</head>
<body>
    <div class="container">
    <div class="quotes">
    <p id="quote">Hello World!</p> <!-- want to access later so have id-->
    <h3 id="author">Daisy</h3>
    </div>
    </div>
    <div style="text-align: center;">
    <button onclick="generate()" type="button" class="btn btn-primary">Generate Quote</button>
    </div>
</body>
</html>

<style>
body{
    background: #ffb6c1;    
}
.container{
    width: 95%;
    height: 100vh;
    display: flex;
    text-align: center;
}
.quotes{
    width: 900px;
    height: 450px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px; /*left to right padding*/
    color: gray;
    background-color: #f4edea;
    border: 10px solid #f4d1ae;
}
.quotes p, .quotes h3{
    font-size: 1.5rem;
}

@media(max-width: 480px){ /*can be seen on cell phone nicely*/
    .quotes p, .quotes h3{
        font-size: 1rem;
    }
}
</style>

<script>
function generate(){
    var quotes = {
        //data structure
        "- Confucius" : '"It does not matter how slowly you go as long as you do not stop."', //key and value
        "- Nelson Mandela" : '"It always seems impossible until it\'s done."', //single quotes to include the double quotes
        "- Thomas A. Edison" : '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
        "- St. Jerome" : '"Good, better, best. Never let it rest. \'Til you\'re good is better and your better is best"'
    }
    var authors = Object.keys(quotes);
    console.log(authors);
    var author = authors[Math.floor(Math.random()*authors.length)]
    var quote = quotes[author]; //using dictionary
    //access ids
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
</script>