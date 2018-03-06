//confirms game is ready
console.log("Up and Running!");

//set up object variable to store card attributes
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//created array to track number of cards flipped
var cardsInPlay = [];

//created class to identify flipped cards
var flippedCards = document.getElementsByClassName('flipped');

//variable to track score
var score = 0;

//function to confirm 2 cards have been flipped
//generate pop-up for player to see if a match
//was made or not, add 1 point for a match and
//update score showing on webpage
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Found a Match!");
		score += 1;
		document.getElementById('score').textContent = score;
	} else {
		alert("Sorry, Try Again!");
	}
};

//function created to identify which card was
//flipped, update game board to show card image
//assign a class to the flipped card, check to
//see if 2 cards have been flipped(if yes,
//run checkForMatch function), empty cardsInPlay
//array and console.log card rank, image & suit
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	this.setAttribute('class', "flipped");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
			if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};

//function to create 4 cards on game board,
//set card images to the back of the cards,
//and create event to listen for click
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

//function created to reset images on game board
//to the back of the cards, reset score variable
//and update score to 0 on webpage
var resetBoard = function() {
	for (i = 0; i < flippedCards.length; i++) {
		flippedCards[i].setAttribute('src', "images/back.png");
		score = 0;
		document.getElementById('score').textContent = 0;
	}
};

//Create board to start game
createBoard();