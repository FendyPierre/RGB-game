var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("rgbText");
var randomNumber;
var resetButton = document.querySelector("#resetButton");
var h1 = document.querySelector("h1");
var answer = document.querySelector("#displayText");
var bgColor = "#232323"
var squareAmount = 6;

var easyButton = document.querySelector("#easyButton");
var mediumButton = document.querySelector("#mediumButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    mediumButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    squareAmount = 3;
    resetColors();
});
mediumButton.addEventListener("click", function(){
    mediumButton.classList.add("selected");
    hardButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    squareAmount = 6;
    resetColors();
});
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    mediumButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    squareAmount = 9;
    resetColors();
});

resetButton.addEventListener("click", function(){
    resetColors();
});

// resetColors();
clicker();

function clicker(){
    squares.forEach(function(square){
        square.addEventListener("click",function() {
            if(square.style.backgroundColor == pickedColor){
                correctAnswer(square);
            }
            else{
                incorrectAnswer(square);
            }
        });
    });
}

function setSquares(colors){
    squares.forEach(function(square, index){
        if(index < squareAmount){
            square.style.backgroundColor = colors[index];
        }
        else{
            console.log("setting to nun at index" + index);
            square.style.backgroundColor = bgColor;
        }
    });
}


function correctAnswer(square){

    console.log("Correct!");
    h1.style.backgroundColor = square.style.backgroundColor;
    resetButton.textContent = "Play Again?";
    answer.textContent = "Correct!";
    
}


function incorrectAnswer(square){
    square.style.backgroundColor = bgColor;
    console.log("Incorrect");
    answer.textContent = "Try Again!";

}
function randomRGB(){
    var list = [];
    for(var i = 0; i < squareAmount; i++){
        var ran1 = Math.floor((Math.random() * 255));
        var ran2 = Math.floor((Math.random() * 255));
        var ran3 = Math.floor((Math.random() * 255));
        var ranRGB = "rgb(" + ran1 + ", " + ran2 + ", " + ran3 + ")";
        list.push(ranRGB);
    }
    return list;
}

function resetColors(){
    colors = randomRGB();
    randomNumber = Math.floor((Math.random() * squareAmount));
    pickedColor = colors[randomNumber]
    displayColor.textContent = pickedColor;
    setSquares(colors);
    h1.style.backgroundColor = bgColor;
    resetButton.textContent = "New Color";

    answer.textContent = "";
    answer.disp = bgColor;
    h1.style.background = "steelblue";

}


function squareCount(amount){
    for(var i = 0; i < squareAmount; i++){
        if(i < amount){
            squares[i].style
        }
    }
}