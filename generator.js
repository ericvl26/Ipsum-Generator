// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Just when I think you couldn't possibly be any dumber, you go and do somethin' like this -- and totally redeem yourself!",
      "Hey look everybody! Billy peed his pants.",
      "God gave men brains larger than dogs' so they wouldn't hump women's legs at cocktail parties.",
      "Fat guy in a little coat, Fat guy in a little coat...",
      "The price is wrong, bitch.",
      "Mike. I'm tellin' ya, you're money. You're so f--kin' money!",
      "Hey, don't knock masturbation. It's sex with someone I love.",
      "Fat, drunk, and stupid is no way to go through life, son.",
      "Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man.",
      "Oh, and this one time, at band camp...",
      "I'm in a glass case of emotion!",
      "Do you know who I am?...I don't know how to put this, but, I'm kind of a big deal...People know me.",
      "I see you're drinkin' 1%. Is that 'cause you think you're fat? 'Cause you're not. You could be drinking whole if you wanted to.",
      "Hello? Hello? Anybody home? Hey! Think, McFly. Think!",
      "I'll have what she's having.",
      "Marriage is like an unfunny tense version of Everybody Loves Raymond, but it doesn't last 22 minutes. It lasts forever.",
      "Do not go in there. Whoa!",
      "I want to cut it off, chop it off, and make guacaMOLE!",
      "Yeah I called her up, she gave me a bunch of crap about me not listening to her, or something, I don't know, I wasn't really paying attention.",
      "Alrighty then.",
      "If peeing your pants is cool, consider me Miles Davis.",
      "Very nice, very nice! How much?",
      "A lot of people go to college for 7 years.",
      "Somebody help me, I'm being spontaneous!",
      "And that's the way the cookie crumbles.",
      "I expected the Rocky Mountains to be a little rockier than this.",
      "I'll bet you twenty bucks I can get you gambling before the end of the day!",
      "Hey, guys. Whoa, Big Gulps, huh? All right! Well, see you later.",
      "I got robbed by a sweet old lady on a motorized cart.",
      "If I'm not back in five minutes... just wait longer.", 
      "I'm ready to go in, coach, just give me a chance. I know there's a lot of riding on it, but it's all psychological. Just gotta stay in a positive frame of mind.", 
      "I would like to extend to you an invitation to the pants party.", 
      "I’m very important. I have many leather-bound books and my apartment smells of rich mahogany.",
      "Well if you were a man, I’d punch you. Punch you right in the mouth.", 
      "It’s so damn hot. Milk was a bad choice.",
      "Baxter, is that you? Baxter! Bark twice if you’re in Milwaukee.",
      "I don't understand the question and I won't respond to it.",
      "And that's why you always leave a note.",
      "I'm a monster.",
      "I've made a huge mistake.",
      "Frankly, my dear, I don't give a damn.",
      "E.T. phone home.",
      "Show me the money!",
      "You're gonna need a bigger boat.",
      "I see dead people",
      "I’ll be back",
      "Houston, we have a problem",
      "I love the smell of napalm in the morning."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 260;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

// module.exports.GenerateNewText = GenerateNewText;
module.exports = loremIpsum;
