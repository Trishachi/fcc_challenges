//Notes
//object oriented programming organizes code into object definitions sometimes called classes
//The data is an object's attributes, and the behavior (or functions) are methods

//Properties - Classes, Instances, Inheritance
// Methods are properties that are functions. This adds different behavior to an object.

//Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.
//Think of them as a blueprint for the creation of new objects.

// Constructors follow a few conventions:
//
// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
// Syntax - object instanceof constructor

//own properties - are defined directly on the instance object.
// The prototype is an object that is shared among ALL instances of an object.


// The constructor property is a reference to the constructor function that created the instance.
//The constructor property  to check a property to find out what kind of object it is.
// Since the constructor property can be overwritten it’s generally better to use the instanceof method to check the type of an object.

// whenever a prototype is manually set to a new object, remember to define the constructor property
//For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

//The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor
//function versus available globally. This way, the property can only be accessed and changed by methods also within the constructor function.

//Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

//Codes
//Object Oriented Programming: Create a Basic JavaScript Object
//Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
// let dog = {
//   name: "Puma",
//   numLegs: 4
// };
// console.log(dog.name);

// Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
// Print both properties of the dog object below to your console.
// let dog = {
//   name: "Spot",
//   numLegs: 4
// };
// // Add your code below this line
// console.log(dog.name + " has " + dog.numLegs + " legs");

// Advanced Web Bootcamp OOP Challenge
//create a constructor function for a dog
// your constructor function goes here and code should work properly if function is correct
// function Dog(name, age){
//   this.name = name;
//   this.age = age;
//   this.bark = function(){
//     console.log(this.name + " just barked!")
//   }
// }
// var rusty = new Dog('Rusty', 3);
// var fido = new Dog('Fido', 1);
//
// rusty.bark();  //Rusty just barked
// fido.bark();  //Fido just barked

// Object Oriented Programming: Create a Method on an Object
// Using the dog object, give it a method called sayLegs.
// The method should return the sentence "This dog has 4 legs."
// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function (){
//     return "This dog has " + dog.numLegs + " legs."
//   }
// };
//
// console.log(dog.sayLegs());

// Object Oriented Programming: Make Code More Reusable with the this Keyword
// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
// };
//
// console.log(dog.sayLegs());

// // Object Oriented Programming: Define a Constructor Function
// // Create a constructor, Dog, with properties name, color, and numLegs
// // that are set to a string, a string, and a number, respectively.
// function Dog(name, color, numLegs){
//   this.name = "Sandy";
//   this.color = "Brown";
//   this.numLegs = 4;
// }

// Object Oriented Programming: Use a Constructor to Create Objects
// Use the Dog constructor from the last lesson to create a new instance of Dog,
// assigning it to a variable hound.
// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }
// // Add your code below this line
// var hound = new Dog();
// console.log(hound);

// Object Oriented Programming: Extend Constructors to Receive Arguments
// Create another Dog constructor. This time, set it up to take the parameters name and color,
// and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier.
// Pass it two strings as arguments for the name and color properties.
// function Dog(name, color, numLegs) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }
//
// let terrier = new Dog('Chloe', 'Black');
// console.log(terrier);

// Object Oriented Programming: Verify an Object's Constructor with instanceof
// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.
// Then, use instanceof to verify that it is an instance of House.
/* jshint expr: true */

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }
//
// // Add your code below this line
// let myHouse = new House(5);
// console.log(myHouse instanceof House);

// Object Oriented Programming: Understand Own Properties
// Add the own properties of canary to the array ownProps.
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }
//
// let canary = new Bird("Tweety");
// let ownProps = [];
// // Add your code below this line
// for(let property in canary){
//   if(canary.hasOwnProperty(property)){
//     ownProps.push(property);
//   }
// }
// console.log(ownProps);

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
// Add a numLegs property to the prototype of Dog
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;
//
// // Add your code above this line
// let beagle = new Dog("Snoopy");
// console.log(beagle.numLegs);


// Object Oriented Programming: Iterate Over All Properties
// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");
//
// let ownProps = [];
// let prototypeProps = [];
// // Add your code below this line
// for(let property in beagle){
//   if(beagle.hasOwnProperty(property)){
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }
// console.log(ownProps);
// console.log(prototypeProps);

// Web Bootcamp - Refactoring with Multiple Constructors
// function Car(make, model, year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.numWheels = 4;
// }
// function Motocycle(make, model, year){
//   //using call
//   Car.call(this, make, model, year);
//   this.numWheels = 2;
// }
// // OR
// function Motocycle(make, model, year){
//   //using apply
//   Car.apply(this, [make, model, year]);
//   this.numWheels = 2;
// }
// // OR
// function Motocycle(make, model, year){
//   //using apply
//   Car.apply(this, arguments);
//   this.numWheels = 2;
// }

// Object Oriented Programming: Understand the Constructor Property
// Write a joinDogFraternity function that takes a candidate parameter and,
// using the constructor property, return true if the candidate is a Dog, otherwise return false.
// function Dog(name) {
//   this.name = name;
// }
//
// // Add your code below this line
// function joinDogFraternity(candidate) {
//     if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Object Oriented Programming: Change the Prototype to a New Object
// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
// function Dog(name) {
//   this.name = name;
// }
//
// Dog.prototype = {
//   // Add your code below this line
//   numLegs: 4,
//   eat: function(){
//     console.log("bone");
//   },
//   describe: function(){
//     console.log("I am " + this.name);
//   }
// };

// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype
// Define the constructor property on the Dog prototype.
// function Dog(name) {
//   this.name = name;
// }
// // Modify the code below this line
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   eat: function() {
//     console.log("bones");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

//Object Oriented Programming: Understand Where an Object’s Prototype Comes From
//Use isPrototypeOf to check the prototype of beagle.
// function Dog(name) {
//   this.name = name;
// }
//
// let beagle = new Dog("Snoopy");
// // Add your code below this line
// console.log(Dog.prototype.isPrototypeOf(beagle));

//Object Oriented Programming: Understand the Prototype Chain
//Modify the code to show the correct prototype chain.
// function Dog(name) {
//   this.name = name;
// }
//
// let beagle = new Dog("Snoopy");
// console.log(Dog.prototype.isPrototypeOf(beagle));  // => true
// // Fix the code below so that it evaluates to true
// console.log(Object.prototype.isPrototypeOf(Dog.prototype));

//Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself
//DRY - Don't Repeat Yourself
//The eat method is repeated in both Cat and Bear. Edit the code in the
//spirit of DRY by moving the eat method to the Animal supertype.

// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype = {
//   constructor: Cat
// };
//
// function Bear(name) {
//   this.name = name;
// }
//
// Bear.prototype = {
//   constructor: Bear
// };
//
// function Animal() { }
//
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

//Object Oriented Programming: Inherit Behaviors from a Supertype
//Use Object.create to make two instances of Animal named duck and beagle

// function Animal() { }
//
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// // Add your code below this line
// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line
//
// console.log(duck.eat()); // Should print "nom nom nom"
// console.log(beagle.eat()); // Should print "nom nom nom"

//Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
//Modify the code so that instances of Dog inherit from Animal.
// function Animal() { }
//
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
//
// function Dog() { }
// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);
//
// let beagle = new Dog();
// console.log(beagle.eat());  // Should print "nom nom nom"

// Object Oriented Programming: Reset an Inherited Constructor Property
//Fix the code so duck.constructor and beagle.constructor return their respective constructors.
// function Animal() { }
// function Bird() { }
// function Dog() { }
//
// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
//
// // Add your code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;
// let duck = new Bird();
// let beagle = new Dog();

//Object Oriented Programming: Add Methods After Inheritance
//Add all necessary code so the Dog object inherits from Animal and
//the Dog's prototype constructor is set to Dog. Then add a bark()
//method to the Dog object so that beagle can both eat() and bark().
//The bark() method should print "Woof!" to the console.

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };
//
// function Dog() { }
// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() { console.log("Woof"); };
// // Add your code above this line
//
// let beagle = new Dog();
// beagle.eat(); // Should print "nom nom nom"
// beagle.bark(); // Should print "Woof!"

// Object Oriented Programming: Override Inherited Methods
//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
// function Bird() { }
// Bird.prototype.fly = function() { return "I am flying!"; };
//
// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
//
// // Add your code below this line
// Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."};
// // Add your code above this line
//
// let penguin = new Penguin();
// console.log(penguin.fly());

//Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
//Create a mixin named glideMixin that defines a method named glide. Then use
//the glideMixin to give both bird and boat the ability to glide.
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };
//
// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };
// // Add your code below this line
// let glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("Gliding, gliding!");
//   }
// };
// glideMixin(bird);
// glideMixin(boat);
// bird.glide();
// boat.glide();

//Object Oriented Programming: Use Closure to Protect
// Properties Within an Object from Being Modified Externally
//In JavaScript, a function always has access to the context in which it was created.
//This is called closure.

//Change how weight is declared in the Bird function so it is a private variable.
//Then, create a method getWeight that returns the value of weight.
// function Bird() {
//   let weight = 15;
//
//   this.getWeight = function() {
//     return weight;
//   };
// }
// let canary = new Bird();
// console.log(canary.getWeight());

//Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)
//The two parentheses () at the end of the function expression cause it to be immediately executed or invoked.
//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

// (function () {
//   console.log("A cozy nest is ready");
// })();


//Object Oriented Programming: Use an IIFE to Create a Module
//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
