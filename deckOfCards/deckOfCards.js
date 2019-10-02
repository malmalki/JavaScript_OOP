class Card{
    constructor(suit, num){
        this.suit = suit;
        this.num = num;

        if(this.num == 0 ){
            this.num = 13;
        }

        if(this.num == "1"){
            this.str = "Ace"
        }else if (this.num =="2"){
            this.str = "Two";
        }
        else if (this.num =="3"){
            this.str = "Three";
        }
        else if (this.num =="4"){
            this.str = "Four";
        }
        else if (this.num =="5"){
            this.str = "Five";
        }
        else if (this.num =="6"){
            this.str = "Six";
        }
        else if (this.num =="7"){
            this.str = "Seven";
        }
        else if (this.num =="8"){
            this.str = "Eight";
        }
        else if (this.num =="9"){
            this.str = "Nine";
        }
        else if (this.num =="10"){
            this.str = "Ten";
        }
        else if (this.num =="11"){
            this.str = "Jack";
        }
        else if (this.num =="12"){
            this.str = "Quean";
        }
        else if (this.num =="13"){
            this.str = "King";
        }
    }
    show (){
        console.log(`Suit: ${this.suit} num ${this.num} String ${this.str}`);
    }
}

class Deck{

    constructor(){
        this.cards = [];
        for(var i=1; i<53;i++){
            if(i < 14){
                this.cards.push(new Card("Spades",i))
            }
            else if(i < 27){
                this.cards.push(new Card("Dimonds",i % 13 ))
            }
            else if(i < 40){
                this.cards.push(new Card("Clubs",i % 13 ))
            }
            else if(i<53){
                this.cards.push(new Card("Hearts",i % 13 ))
            }
        }

    }
    reset(){
        this.cards = [];
    }

    shuffle() {
        var m = this.cards.length  , t, i;

        while (m) {

            
            i = Math.floor(Math.random() * m--);

            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this;
    }

    deal(){
        var ranNum = Math.floor(Math.random() * this.cards.length);
        var deltCard = this.cards[ranNum];
        this.cards.splice(ranNum,1);
        return deltCard;
    }
}

class Player{
    constructor(name, deck){
        this.name = name;
        this.hand = [];
    
        for (var i =0;i<8;i++){
            this.hand.push(deck.deal());
        }
    }

    take(deck){
        this.hand.push(deck.deal());
    }

    discard(num){
        this.hand.splice(num , 1)
    }
   
 
}


var deck1 = new Deck();



card1 = new Card("Dimonds" , 13 );

moha = new Player("Mhammed" , deck1);


console.log(moha.hand);
console.log("==========")
moha.take(deck1);
moha.discard(0);
console.log(moha.hand);



