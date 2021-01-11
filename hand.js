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

console.log('Creating Hand');

class Hand {
    constructor(){
        this.hand = [];
    };
    addCard(card) {
        this.hand.push(card);
        return console.log(`Your Hand: ${JSON.stringify(this.hand)}`);
    };
    getPoints() {
        //Getting the points
        let cardPoints = this.hand.map(card => {
            let total = 0;
            total += card.point;
            return total;
        });
        let sum = 0;
        console.log(cardPoints);
        //Adding the point of an Arr
        for (let i = 0; i < cardPoints.length; i++) {
        sum = sum + cardPoints[i];
        };
        console.log('Points:' + sum);
    };
};

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds', 'images/5_of_diamonds.png'));
myHand.addCard(new Card(13, 'spades', 'images/13_of_spades.png'));
myHand.getPoints();