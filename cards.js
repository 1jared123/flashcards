var inquirer = require("inquirer");
var fs = require("fs");

//heres the basic card constructor that we don't need to use but we can to keep the simpletons entertained. 
/*
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
};
*/

function ClozeCard(text, cloze) {
  //put the first value as the whole question
  this.text = text;
  //second value as the answer
  this.cloze = cloze;
  //function to render the question specially
  this.partial = function() {
    // if in the text is the text in cloze, then continue, if not throw error.
    if (text.search(cloze) >= 0) {
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

//Here is the made constructors with their questions and answers parts.
var firstPresidentCloze = new ClozeCard( 
  "George Washington was the first president of the United States.", "George Washington");

var questionOne = new ClozeCard(
  "Steve Jobs invented the internet", "Steve Jobs");

var questionTwo = new ClozeCard(
  "Bill Gates invented the computer", "Bill Gates");

var questionThree = new ClozeCard(
  "Obama destroyed the internet.", "Obama");

var questionFour = new ClozeCard(
  "This Coding Boot Camp is fun and hard at the same time", "Coding Boot Camp")

var questionFive = new ClozeCard(
  "Randy is the best teacher I've ever had", "Randy");

//here is where we have the partial question show in the console.
firstPresidentCloze.partial(); 
questionOne.partial();
questionTwo.partial();
questionThree.partial();
questionFour.partial();
questionFive.partial();

inquirer.prompt([
  // Here we have them read the question, then have the option to see the answers upon hitting the enter key.
  {
    type: "confirm",
    message: "You want the answers?",
    name: "confirm",
    default: true

  }  

]).then(function(user) {
  if (user.confirm === true) {
    //here we just display all the answers cuz we can.
    console.log(firstPresidentCloze.cloze);
    console.log("-------------------------");
    console.log(questionOne.cloze);
    console.log("-------------------------");
    console.log(questionTwo.cloze);
    console.log("-------------------------");
    console.log(questionThree.cloze);
    console.log("-------------------------");
    console.log(questionFour.cloze);
    console.log("-------------------------");
    console.log(questionFive.cloze);
  }

})
