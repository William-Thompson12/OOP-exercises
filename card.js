console.log('Starting Card');
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
// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.

// A card will be created thus:
let myCard = new Card(5, 'diamonds', 'images/5_of_diamonds.png');
console.log(myCard);
console.log(myCard.point);
console.log(myCard.suit);
myCard.getImageUrl();