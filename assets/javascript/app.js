var timer = 30
var noAnswers = 0
var wins = 0
var losses = 0
var questions = ["The index fingernail grows the fastest.",
    // False
     "Water boils at 100 degrees celcius.",
    // true
    "Ernest Rutherford discovered penicillin.",
    // False
    "Salvador Dali said he would eat his wife when she died.",
    // True
    "The crocodile in Peter Pan swallowed a tea pot.",
    // False
    "The Manzanares river passes through Madrid",
    // True
    "Joseph Priesley discovered Oxygen in 1774",
    // True
    "A rhino is the only mammal that can’t jump.",
    // False
    "The roman numeral C represent 1000.",
    // False
    "Sherlock Holmes lived at 221B, Baker Street, London."
    // True
]
var answers = ["false", "true", "false", "true", "false", "true", "true", "false", "false", "true"]


function gameOver(){
    var newDiv = $("<div>")
    newDiv.addClass("endgamebox")
    
    $("#questionwrapper").html("");
    
    var winsText = $("<p>");
    var lossesText = $("<p>");
    var noAnswersText = $("<p>");

    winsText.addClass("wins")
    lossesText.addClass("losses")
    noAnswersText.addClass("noanswer")

    winsText.text("Correct Answers: " + wins);
    lossesText.text("Incorrect Answers: " + losses);
    noAnswersText.text("Unanswered Questions: " + noAnswers);

    newDiv.append(winsText);
    newDiv.append(lossesText);
    newDiv.append(noAnswersText);
    $("#questionwrapper").append(newDiv)
}


function newGame(){
    
for (i = 0; i < questions.length; i++ ){
    var questionContainer = $("<div>")
    var trueInput = $("<input>")
    var falseInput = $("<input>")
    var questionText = $("<p>")
    
    trueText = $("<p>")
    falseText = $("<p>")
    
    trueInput.addClass("true" + i);
    falseInput.addClass("false" + i);
    falseInput.attr("type", "checkbox");
    trueInput.attr("type", "checkbox");
    falseInput.addClass("truefalsebox");
    trueInput.addClass("truefalsebox");
    
    
    questionText.addClass("questiontext");
    questionText.text(questions[i]);
    
    trueText.text("True");
    falseText.text("False");
    trueText.addClass("truefalsetext");
    falseText.addClass("truefalsetext");
    
    questionContainer.append(questionText);
    questionContainer.append(trueText);
    questionContainer.append(trueInput);
    questionContainer.append(falseText);
    questionContainer.append(falseInput);
    $("#questions").append(questionContainer)
    
    }
    var stopButton = $("<div>")
    stopButton.html("<button id='stopbutton'>Finnished</button>")
    $("#questions").append(stopButton)
    stopButton.on("click", function(){
        checkAnswers();
        gameOver();
       
})
}

function checkAnswers(){
    for (i = 0; i < questions.length; i++) {
        if ($(".true" + i).is(":checked") === $(".false" + i).is(":checked")){
            noAnswers++;
        }
        else if ($(".true" + i).is(":checked") === "true" || answers[i] === "true") {
            wins++;
        }
        else if ($(".true" + i).is(":checked") === "true" || answers[i] === "false"){
            losses++;
        }
        else if ($(".false" + i).is(":checked") === "true" || answers[i] === "false"){
            wins++;
        }
        else if ($(".false" + i).is(":checked") === "true" || answers[i] === "true"){
            losses++;
        }
    }
}





$("#startbutton").on("click", function(){
    var gameTimer = setInterval(function(){
        // console.log(timer)
        timer = timer -1;
        $("#timer").text("Time Left: " + timer);
        if (timer == 0){
            clearInterval(gameTimer);
            checkAnswers();
            gameOver();
            
        }
        
    }, 1000)
    newGame()
})


console.log("it works")







// else if ($("true){


// }