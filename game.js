
var buttonColors=["red","yellow","blue","green"];

var gamePattern=[];

var userClickedPattern=[];

var level=0;
var started=false;


$(document).keypress(function()
{
  if(!started){

    $("#level-title").text("level "+level);
    nextSequence();
    started=true;

  }
});

$(".btn").click(function()
{
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
//  nextSequence();
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

 function checkAnswer(currentlevel)
 {
   if(gamePattern[currentlevel] === userClickedPattern[currentlevel])
  {
    console.log("sucess");

  if(userClickedPattern.length===gamePattern.length)
  {
    setTimeout(function()
  {
    nextSequence();
  },1000);

  }
}

  else
  {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
     startOver();

     
  }
}

function nextSequence()
{

  userClickedPattern=[];

  level++;
  $("#level-title").text("level "+level);

  var  randomNumber=Math.floor(Math.random()*4);

var randomColorChosen=buttonColors[randomNumber];

gamePattern.push(randomColorChosen);

$("#" + randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
}


function  playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor)
{
$("#"+currentColor).addClass("pressed");
setTimeout(function()
{
  $("#"+currentColor).removeClass("pressed");
},100);
}


function startOver()
{
  gamePattern=[];
  level=0;
  started=false;

}
