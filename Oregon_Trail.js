(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            var successfulHunt = ((getRandomIntInclusive(0, 1)) * 100);
            this.food = this.food + successfulHunt;
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
                return this.food;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "Passenger added";
            }
            else {
                return "Passenger cannot be added";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };
        Wagon.prototype.getFood = function () {
            var total = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                total = total + this.passengerArray[i].food;
            }
            return total;
        };
        return Wagon;
    }());
    var traveler1 = new Traveler(getRandomIntInclusive(1, 100), "Amanda", true);
    var traveler2 = new Traveler(getRandomIntInclusive(1, 100), "Matt", true);
    var traveler3 = new Traveler(getRandomIntInclusive(1, 100), "Christina", true);
    var traveler4 = new Traveler(getRandomIntInclusive(1, 100), "Emily", true);
    var traveler5 = new Traveler(getRandomIntInclusive(1, 100), "David", true);
    var myWagon = new Wagon(4);
    // traveler1.eat();
    // traveler2.eat();
    // traveler3.eat();
    // traveler4.hunt();
    // traveler5.hunt();
    var travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (var i = 0; i < travelerArray.length; i++) {
        var randomNumber = getRandomIntInclusive(2, 100);
        if (randomNumber % 2 == 0) {
            myWagon.addPassenger(travelerArray[i]);
            console.log(travelerArray[i].name + " was added to the wagon");
        }
        else {
            console.log(travelerArray[i].name + " can't be added to the wagon");
        }
    }
    console.log("Traveler 1's name is " + traveler1.name + ". His/her food count before eating is: " + traveler1.food + ". Is the traveler healthy:" + traveler1.eat());
    console.log("Traveler 2's name is " + traveler2.name + ". His/her food count before eating is: " + traveler2.food + ". Is the traveler healthy: " + traveler2.eat());
    console.log("Traveler 3's name is " + traveler3.name + ". His/her food count before eating is: " + traveler3.food + ". Is the traveler healthy: " + traveler3.eat());
    console.log("Traveler 4's name is " + traveler4.name + ". His/her food count after hunting is: " + traveler4.hunt() + ".");
    console.log("Traveler 5's name is " + traveler5.name + ". His/her food count after hunting is: " + traveler5.hunt() + ".");
    console.log("Is someone in the wagon unhealthy?: " + myWagon.isQuarantined());
    console.log("The wagon has " + myWagon.getFood() + " amount of food.");
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
