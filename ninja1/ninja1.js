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
}

var ninja1 = new Ninja("Hyabusa");


ninja1.showStats();
