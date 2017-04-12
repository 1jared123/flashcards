var inquirer = require("inquirer");
var fs = require("fs");

switch(process.argv[2]) {
  case "create":
    createCards();
      break;

  case "display-cloze":
    displayCards();
      break;

  case "display-partial":
    console.log("Not created yet");
      break;

  case "card-fullText":
    console.log("Not created yet");
      break;
};

var giveMeQuestions = [];

function createCards() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter question: ",
      name: "question"
     },

     {
      type: "input",
      message: "Enter answer: ",
      name: "answer"
     }
    ]).then(function(data){
      var newcards = new BasicCard(data.question, data.answer);
      // var buttermilk = newcards.front;
      // var skimmilk = newcards.back;
      // var functionmilk = newcards.partial();
      // console.log(newcards);

      giveMeQuestions.push(newcards);

      inquirer.prompt([
        {
          type: "input",
          message: newcards.text + "What's the answer?",
          choices: "Press Enter to show answer."
          name: "name"
        },

        ]).then(function(info) {
          
        })

      // fs.appendFile("log.js", "[" + "'" + buttermilk + "'" + ", " + "'" + skimmilk + "'" + " " + "]" + "\n", function(error){
      // fs.appendFile("log.js", newcards + "\n", function(error){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("You added a card!");
      //   }        
      // });
    })
};

function displayCards() {
      console.log(giveMeQuestions);

  /*
  fs.readFile("log.js", "utf8", function(error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  })
  */
};


function BasicCard(front, back) {
  this.front = front;
  this.back = back;
};

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = function() {
    // if in the text is the text in cloze, then continue, if not throw error.
    if (text.search( cloze ) >= 0) {
     console.log(text.replace(cloze," ... "));
    } else {
     console.log("Error in the making of the card.");
    }
  };
  //console log the whole question
  this.fullText = function() {
    console.log(text);
  };
};

// var firstPresident = new BasicCard(
    // "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard( //"This shouldn't work...", "We shall see");
  // "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
// firstPresidentCloze.clozes; 

// " ... was the first president of the United States.
// firstPresidentCloze.partial(); 

// "George Washington was the first president of the United States.
// firstPresidentCloze.fullText();

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 

/*
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: firstPresidentCloze.partial(),
    name: "name"
  },

  {
    type: "confirm",
    message: "You want the answer?",
    name: "confirm",
    default: true

  }

  

]).then(function(user) {
  if (user.name === true) {
    firstPresidentCloze.cloze();
    inquirer.prompt([

    {
      type: "confirm",
      message: "Next question??",
      name:"forsure",
      default: true
    }

      ]).then(function(back) {
        console.log("next question should be here.");
    })
  }

})



window.onload = function() {
$(".question").append(firstPresident.front);
$(document).on("click", ".next-one", function() {
  // console.log(firstPresident.front); 
  $(".question").append(firstPresident.back);
});

}
*/