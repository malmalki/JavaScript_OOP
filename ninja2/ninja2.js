function Ninja (name, health){

    this.name = name;
    this.health = 100;

    var speed = 3;
    var stringth = 3;
    
    this.sayName =  function(){
        console.log("My ninja name is"+this.name+"!");
    }

    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Stringth: "+stringth );
    }

    this.drinkSake = function(){
        this.health += 10;
    }

    this.punch = function (enemy){
        enemy.health -=10
    } 
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Nawaf");


ninja2.punch(ninja1)
ninja1.showStats();
ninja2.showStats();
