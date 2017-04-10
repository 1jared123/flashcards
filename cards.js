function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  this.makeCards = function() {
    if (this.front === true) {
      console.log(this.back);
    }
  };
}

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.cloze = function() {
    console.log(cloze);
  };
  this.partial = function() {
    try {
     console.log(text.replace(cloze," ... "));
    } catch (error) {
     console.log("Error in the making of the card.")
    }
  };
  this.fullText = function() {
    console.log(text);
  };
}


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// "George Washington"
// console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard( //"This shouldn't work...", "We shall see");
   "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
// firstPresidentCloze.cloze(); 

// " ... was the first president of the United States.
firstPresidentCloze.partial(); 

// "George Washington was the first president of the United States.
// firstPresidentCloze.fullText();

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 

