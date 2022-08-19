
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userChosenColour;

var userClickedPattern = [];

var keyPressCount = 0;

var level = 0;

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
})

function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


document.addEventListener("keydown", function (event) {

    if (keyPressCount === 0)
    {
        nextSequence();
        $("h1")[0].innerHTML = "Level0";
        keyPressCount = keyPressCount + 1;
    }
    else
    {
        $("h1")[0].innerHTML = "Level" + keyPressCount;
        keyPressCount = keyPressCount + 1;
    }
})

function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else
    {
        setTimeout(function() {
            $("body").addClass("game-over");
        }, 200);
        $("h1")[0].innerHTML = "Game Over, Press any key to restart";
        console.log("wrong");
        startOver();
    }
    
}

function startOver()
{
    level = 0;
    gamePattern = [];
    keyPressCount = 0;
    userClickedPattern = [];
}
