class Card {
    constructor(point, suit, img) {
        this.point = point;
        this.suit = suit;
        this.img = img;
    };
    getImageUrl(){
        console.log('Image Url:' + this.img);
    };
};

console.log('Creating Deck');

class Deck {
    constructor(){
        this.cards = [] 
    }
    addCard(card) {
        card['id'] = this.cards.length + 1
        this.cards.push(card);
    };
    draw() {
        console.log('Card you drew is' + JSON.stringify(this.cards[randomInteger(0, this.cards.length - 1)]));
    };
    shuffle() {
        console.log(`Deck before shuffle: ${JSON.stringify(this.cards)}`)
        console.log('Deck after shuffle:' + JSON.stringify(shuffleArr(this.cards))) 
    }
    numCardsLeft() {
        console.log('' + this.cards.length)
    }
};

function shuffleArr(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var myDeck = new Deck()

console.log('Filling deck with new cards')
myDeck.addCard(new Card(4, 'diamonds', 'images/4_of_diamonds.png'));
myDeck.addCard(new Card(8, 'clubs', 'images/8_of_clubs.png'));
myDeck.addCard(new Card(5, 'hearts', 'images/5_of_hearts.png'));
myDeck.addCard(new Card(13, 'spades', 'images/13_of_spades.png'));
myDeck.addCard(new Card(5, 'diamonds', 'images/5_of_diamonds.png'));
myDeck.addCard(new Card(11, 'hearts', 'images/11_of_hearts.png'));

myDeck.draw();
myDeck.draw();
myDeck.shuffle();
myDeck.numCardsLeft();