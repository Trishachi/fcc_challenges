//Notes

// Functional programming is an approach to software development based around the evaluation of functions.
// The functional programming software development approach breaks a program into small, testable parts.
//Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.

// in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
//A function, ideally, should be a pure function, meaning that it does not cause any side effects
//Hence - Try not to alter any variable or object in our code.


//Codes

//Functional Programming: Learn About Functional Programming
// In the code editor, the prepareTea and getTea functions are already defined for you.
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => 'greenTea';
// // /**
// //  * Get given number of cups of tea.
// //  * @param {number} numOfCups Number of required cups of tea.
// //  * @return {Array<string>} Given amount of tea cups.
// //  **/
// const getTea = (numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };
// // Add your code below this line
//
// const tea4TeamFCC = getTea(40);
//
// // Add your code above this line
// console.log(tea4TeamFCC);


//Functional Programming: Understand Functional Programming Terminology
// Prepare 27 cups of green tea and 13 cups of black tea and store them in
// tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
// Note that the getTea function has been modified so it now takes a function as the first argument.


// A long process to prepare green tea.
// @return {string} A cup of green tea.
//
// const prepareGreenTea = () => 'greenTea';
//
// /**
//  * A long process to prepare black tea.
//  * @return {string} A cup of black tea.
//  **/
// const prepareBlackTea = () => 'blackTea';
//
// /**
//  * Get given number of cups of tea.
//  * @param {function():string} prepareTea The type of tea preparing function.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];
//
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//
//   return teaCups;
// };
//
// // Add your code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(
//
// // Add your code above this line
// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );


// Functional Programming: Avoid Mutations and Side Effects Using Functional Programming
//Fill in the code for the function incrementer so it returns the value of the global
//variable fixedValue increased by one.

// // the global variable
// var fixedValue = 4;
// function incrementer () {
//   // Add your code below this line
//   var newV = fixedValue + 1;
//   return newV;
//   // Add your code above this line
// }
// var newValue = incrementer();
// console.log(newValue); // Should equal 5
// console.log(fixedValue); // Should print 4

//Functional Programming: Pass Arguments to Avoid External Dependence in a Function
//Write the incrementer function so it takes an argument, and then increases the value by one.
// the global variable
// var fixedValue = 4;
// // Add your code below this line
// function incrementer (arg) {
//   var newV = arg + 1;
//   return newV;
//   // Add your code above this line
// }
// var newValue = incrementer(fixedValue); // Should equal 5
// console.log(newValue);
// console.log(fixedValue); // Should print 4

//Functional Programming: Refactor Global Variables Out of Functions
//Refactor (rewrite) the code so the global array bookList is not changed
// inside either function. The add function should add the given bookName
//to the end of an array. The remove function should remove the given
//bookName from an array. Both functions should return an array, and any
//new parameters should be added before the bookName one.

// the global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
//
// /* This function should add a book to the list and return the list */
// // New parameters should come before the bookName one
// // Add your code below this line
// function add (arr, bookName) {
//   var newArr = [...arr];
//   newArr.push(bookName);
//   return newArr;
//   // Add your code above this line
// }
//
// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one
// // Add your code below this line
// function remove (arr, bookName) {
//   var newArr = [...arr];
//   if (newArr.indexOf(bookName) >= 0) {
//       var n = newArr.indexOf(bookName)
//       newArr.splice(n, 1);
//       return newArr;
//     // Add your code above this line
//     }
// }
//
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//
// console.log(newestBookList);

// Functional Programming: Use the map Method to Extract Data from an Array
//The watchList array holds objects with information on several movies.
//Use map to pull the title and rating from watchList and save the new
//array in the rating variable. The code in the editor currently uses a
//for loop to do this, replace the loop functionality with your map expression.

// the global variable
var watchList = [
                 {
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line
var rating = [];
var newArr = watchList.map(item => rating.push({title: item.Title, rating: item.imdbRating}));
// Add your code above this line

console.log(rating);
