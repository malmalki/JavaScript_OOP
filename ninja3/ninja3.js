
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.stringth = 3;
    }
        sayName() {
            console.log("My ninja name is" + this.name + "!");
        }
        showStats() {
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Stringth: " + this.stringth);
        }
        drinkSake() {
            this.health += 10;
        }
    }

class Sensei extends Ninja {
    constructor(name) {
        super(name )
        // this.name = name;
        this.health = 200;
        this.speed = 10;
        this.stringth = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}



var ninja1 = new Ninja("Hyabusa");


ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();



