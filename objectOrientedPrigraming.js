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
