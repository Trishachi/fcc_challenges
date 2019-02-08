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

// Object Oriented Programming: Define a Constructor Function
// Create a constructor, Dog, with properties name, color, and numLegs
// that are set to a string, a string, and a number, respectively.
function Dog(name, color, numLegs){
  this.name = "Sandy";
  this.color = "Brown";
  this.numLegs = 4;
}
