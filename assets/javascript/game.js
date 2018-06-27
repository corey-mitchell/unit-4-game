//Creating initial variables
var playerTotal= 0; 
var wins= 0;
var losses = 0;

//Creates random number to guess
var randomNumber=Math.floor(Math.random()*120+1)
  
//Displays variable
$("#wins").text(wins);
$("#losses").text(losses);
$('#scoreToMatch').text(randomNumber);
  
//Creates random number for each crystal
var redCrystal= Math.floor(Math.random()*12+1)
var blueCrystal= Math.floor(Math.random()*12+1)
var yellowCrystal= Math.floor(Math.random()*12+1)
var greenCrystal= Math.floor(Math.random()*12+1)

//Reset game
function reset(){
  randomNumber=Math.floor(Math.random()*120+1);
  $('#scoreToMatch').text(randomNumber);
  redCrystal= Math.floor(Math.random()*12+1);
  blueCrystal= Math.floor(Math.random()*12+1);
  yellowCrystal= Math.floor(Math.random()*12+1);
  greenCrystal= Math.floor(Math.random()*12+1);
  playerTotal= 0;
  $('#userScore').text(playerTotal);
} 

//Win scenerio
function win(){
  $("#scenerio").text("You Won!");
  wins++; 
  $("#wins").text(wins);
  reset();
}

//Loss scenerio
function lose(){
  $("#scenerio").text("You Lose :(");
  losses++;
  $("#losses").text(losses);
  reset()
}

//Clicking crystals

//Red Crystal
$('.red').on('click', function(){
  playerTotal = playerTotal + redCrystal;

  $('#userScore').text(playerTotal); 

  if (playerTotal === randomNumber){
    win();
  }

  else if (playerTotal > randomNumber){
    lose();
  }   

})  

//Blue Crystal
$('.blue').on('click', function(){
  playerTotal = playerTotal + blueCrystal;

  $('#userScore').text(playerTotal); 

    if (playerTotal === randomNumber){
      win();
    }

    else if (playerTotal > randomNumber){
      lose();
    } 
})  

//Yellow Crystal
$('.yellow').on('click', function(){
  playerTotal = playerTotal + yellowCrystal;

  $('#userScore').text(playerTotal);

  if (playerTotal === randomNumber){
      win();
  }

  else if (playerTotal > randomNumber){
    lose();
  } 
}) 
  
//Green Crystal
$('.green').on('click', function(){
  playerTotal = playerTotal + greenCrystal;

  $('#userScore').text(playerTotal); 
      
  if (playerTotal === randomNumber){
    win();
  }

  else if (playerTotal > randomNumber){
    lose();
  }
});   
