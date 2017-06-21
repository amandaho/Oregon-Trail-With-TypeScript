(function(){
    
    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;
        
        


        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;
    }

    // // interface describing what the passenger array should look like
    interface IPassengerArray {
        [index:number]:Traveler
    }

    // food(wagon)
    // Return the total amount of food among all occupants of the wagon.

    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: IPassengerArray;

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;


        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number; // you don't need to include :number
        name: string;
        isHealthy: boolean; // can add isHealthy = true since all travelers start out as healthy

        constructor(food:number, name: string, isHealthy: boolean){
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }

        hunt(){
            let successfulHunt = ((getRandomIntInclusive(0, 1)) * 100);
            this.food = this.food + successfulHunt;
            return this.food;
        }
        eat(){
            if(this.food >= 20){
                this.food = this.food - 20;
            } else { this.isHealthy = false;
                } return this.isHealthy;
        }
    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray = [];

        constructor(capacity: number){
            this.capacity = capacity;
        }

        addPassenger(traveler: Traveler){
            if (this.passengerArray.length <= this.capacity) {
                this.passengerArray.push(traveler);
                return "Passenger added";
            } else {
                return "Passenger cannot be added";
            }
        }

        isQuarantined(){
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy == false) {
                    return true;
            }
            
        }
        return false;
    }
        

        getFood(){
            var total = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                total = total + this.passengerArray[i].food;
            }
            return total;

        }

        
    }

    let traveler1 = new Traveler(getRandomIntInclusive(1,100), "Amanda", true);
    let traveler2 = new Traveler(getRandomIntInclusive(1,100), "Matt", true);
    let traveler3 = new Traveler(getRandomIntInclusive(1,100), "Christina", true);
    let traveler4 = new Traveler(getRandomIntInclusive(1,100), "Emily", true);
    let traveler5 = new Traveler(getRandomIntInclusive(1,100), "David", true);

    let myWagon = new Wagon(4);


    let travelerArray= [traveler1, traveler2, traveler3, traveler4, traveler5];
    
    for(var i = 0; i < travelerArray.length; i++){
        let randomNumber = getRandomIntInclusive(2, 100);
        if(randomNumber % 2 == 0){
            myWagon.addPassenger(travelerArray[i]);
            console.log(travelerArray[i].name + " was added to the wagon")

        } else {
            console.log(travelerArray[i].name + " can't be added to the wagon");
        }
    }

    console.log(`Traveler 1's name is ${traveler1.name}. His/her food count before eating is: ${traveler1.food}. Is the traveler healthy:${traveler1.eat()}`);
    console.log(`Traveler 2's name is ${traveler2.name}. His/her food count before eating is: ${traveler2.food}. Is the traveler healthy: ${traveler2.eat()}`);
    console.log(`Traveler 3's name is ${traveler3.name}. His/her food count before eating is: ${traveler3.food}. Is the traveler healthy: ${traveler3.eat()}`);
    console.log(`Traveler 4's name is ${traveler4.name}. His/her food count after hunting is: ${traveler4.hunt()}.`);
    console.log(`Traveler 5's name is ${traveler5.name}. His/her food count after hunting is: ${traveler5.hunt()}.`);

    console.log(`Is someone in the wagon unhealthy?: ${myWagon.isQuarantined()}`);
    console.log(`The wagon has ${myWagon.getFood()} amount of food after everyone eats.`);


    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)++
    *   
    * Create wagon with an empty passenger list and a capacity of 4.++
    *
    * Make 3 of 5 the travelers eat by calling their eat methods ++
    *
    * Make the remaining 2 travelers hunt ++
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method. ++
    *
    * Run the isQuarantined method for the wagon ++
    *
    * Run the getFood method for the wagon ++
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects 
    *
    */

})();

