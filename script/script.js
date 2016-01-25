var score = 0;
var highScore = 0;
var lives = 3;
var countdown = 50;
var countdownLevel = 50;
var idArray = ['s1','s2','s3','s4','s5','s6','s7','s8','s9'];


function display (documentId,displayMessage){
    document.getElementById(documentId).innerHTML = displayMessage;
}

function startTimer(){
    var interval = setInterval(function(){
    countdown = countdown - 1;
    display("display_message","Timer: "+countdown);
        
    if(countdown == 0){
        clearInterval(interval);
        display("display_message","Game Over!");
        if (score>highScore){highScore=score};
        score = 0;
        countdownLevel = 50;
        display("id_highScore",highScore);
        display("id_score",score);
        for (var i = 0; i<idArray.length; i++){
        document.getElementById(idArray[i]).innerHTML = '<img src="img/Squirrel.png" class="img img-responsive">';
        }
    }     
    if (score == 5){countdownLevel = 30}
    if (score == 10){countdownLevel = 20}
    if (score == 15){countdownLevel = 15}
    if (score == 20){countdownLevel = 10}
    if (score == 25){countdownLevel = 8}
    if(score == 30){countdownLevel = 5}    
    }, 100)
}

function randomize (){        
        var randomId = '';
        // sets each box to the base squirrel img
        for (var w = 0; w<idArray.length; w++){
        document.getElementById(idArray[w]).innerHTML = '<img src="img/Squirrel.png" class="img img-responsive">';
        };
        //grabs a random id for the squirrels and sets it to the evil squirrel img
        randomId = idArray[Math.floor(Math.random()*9)];
        document.getElementById(randomId).innerHTML = '<img onclick="randomize()" src="img/evilSquirrel.png" class="img img-responsive">';
        score++;
        display("id_score",score);
        countdown = countdownLevel;
}

document.getElementById('start_game').onclick = function(){
    setTimeout(function(){display("display_message","Ready to Start??")},100);
    setTimeout(function(){display("display_message","3")},1000);
    setTimeout(function(){display("display_message","2")},2000);
    setTimeout(function(){display("display_message","1")},3000);
    setTimeout(function(){display("display_message","GO!")},4000);
    setTimeout(randomize, 4000);
    setTimeout(startTimer, 4000);
}
