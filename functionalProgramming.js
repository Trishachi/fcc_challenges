//Notes

// Functional programming is an approach to software development based around the evaluation of functions.
// The functional programming software development approach breaks a program into small, testable parts.
//Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.

// in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
//A function, ideally, should be a pure function, meaning that it does not cause any side effects
//Hence - Try not to alter any variable or object in our code.

// map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
//A side effect of the sort method is that it changes the order of the elements in the original array. In other words,
// it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted
// (remember that concat returns a new array), then run the sort method.

//The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.


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

// // the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
// // Add your code below this line
// var rating = [];
// var newArr = watchList.map(item => rating.push({title: item.Title, rating: item.imdbRating}));
// // Add your code above this line
// console.log(rating);


// Functional Programming: Implement map on a Prototype
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You may use a for loop or the forEach method
// the global Array
// var s = [23, 65, 98, 5];
// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(num => newArray.push(callback(num)));
//   // Add your code above this line
//   return newArray;
// };
// var new_s = s.myMap(function(item){
//   return item * 2;
// });
// console.log(new_s);

// Functional Programming: Use the filter Method to Extract Data from an Array
//The variable watchList holds an array of objects with information on several
//movies. Use a combination of filter and map to return a new array of objects
//with only title and rating keys, but where imdbRating is greater than or equal
//to 8.0. Note that the rating values are saved as strings in the object and you
//may want to convert them into numbers to perform mathematical operations on them.

// the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
// // Add your code below this line
// var filteredList = watchList.map(function(item){
//   return {title: item.Title, rating: item.imdbRating }
// }).filter((item) => item.rating >= 8);
// // Add your code above this line
// console.log(filteredList);

// Functional Programming: Implement the filter Method on a Prototype
//Write your own Array.prototype.myFilter(),
//which should behave exactly like Array.prototype.filter().
//You may use a for loop or the Array.prototype.forEach() method.

// the global Array
// var s = [23, 65, 98, 5];
// Array.prototype.myFilter = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(num => {
//     if(callback(num) == true) {
//       return newArray.push(num);
//     }
//   });
//   // Add your code above this line
//   return newArray;
// };
// var new_s = s.myFilter(function(item){
//   return item % 2 === 1;
// });
// console.log(new_s);

// Functional Programming: Return Part of an Array Using the slice Method
// Use the slice method in the sliceArray function to return part of the anim
// array given the provided beginSlice and endSlice indices. The function should return an array
// function sliceArray(anim, beginSlice, endSlice) {
//   // Add your code below this line
//   return anim.slice(beginSlice, endSlice)
//   // Add your code above this line
// }
// var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// console.log(sliceArray(inputAnim, 1, 4));

// Functional Programming: Remove Elements from an Array Using slice Instead of splice
// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit
// the provided cities array to a length of 3, and return a new array with only the first three items.
// Do not mutate the original array provided to the function.
//
// function nonMutatingSplice(cities) {
//   // Add your code below this line
//   return cities.slice(0, 3);
//   // Add your code above this line
// }
// var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// console.log(nonMutatingSplice(inputCities));

// Functional Programming: Combine Two Arrays Using the concat Method
// Use the concat method in the nonMutatingConcat function to concatenate
// attach to the end of original. The function should return the concatenated array.
// function nonMutatingConcat(original, attach) {
//   // Add your code below this line
//     // return [...first, ...second]; //This also works
//     return first.concat(second);
//   // Add your code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// console.log(nonMutatingConcat(first, second));

// Functional Programming: Add Elements to the End of an Array Using concat Instead of push
// Change the nonMutatingPush function so it uses concat to add newItem to the end of original
// instead of push. The function should return an array.
// function nonMutatingPush(original, newItem) {
//   // Add your code below this line
//   return original.concat(newItem);
//   // Add your code above this line
// }
// var first = [1, 2, 3];
// var second = [4, 5];
// console.log(nonMutatingPush(first, second));

// Functional Programming: Use the reduce Method to Analyze Data
// The variable watchList holds an array of objects with information on several movies.
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.

// the global variable
// var watchList = [
//                  {
//                    "Title": "Inception",
//                    "Year": "2010",
//                    "Rated": "PG-13",
//                    "Released": "16 Jul 2010",
//                    "Runtime": "148 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Christopher Nolan",
//                    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//                    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//                    "Language": "English, Japanese, French",
//                    "Country": "USA, UK",
//                    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.8",
//                    "imdbVotes": "1,446,708",
//                    "imdbID": "tt1375666",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Interstellar",
//                    "Year": "2014",
//                    "Rated": "PG-13",
//                    "Released": "07 Nov 2014",
//                    "Runtime": "169 min",
//                    "Genre": "Adventure, Drama, Sci-Fi",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan, Christopher Nolan",
//                    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//                    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//                    "Language": "English",
//                    "Country": "USA, UK",
//                    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//                    "Metascore": "74",
//                    "imdbRating": "8.6",
//                    "imdbVotes": "910,366",
//                    "imdbID": "tt0816692",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "The Dark Knight",
//                    "Year": "2008",
//                    "Rated": "PG-13",
//                    "Released": "18 Jul 2008",
//                    "Runtime": "152 min",
//                    "Genre": "Action, Adventure, Crime",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//                    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//                    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//                    "Language": "English, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//                    "Metascore": "82",
//                    "imdbRating": "9.0",
//                    "imdbVotes": "1,652,832",
//                    "imdbID": "tt0468569",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Batman Begins",
//                    "Year": "2005",
//                    "Rated": "PG-13",
//                    "Released": "15 Jun 2005",
//                    "Runtime": "140 min",
//                    "Genre": "Action, Adventure",
//                    "Director": "Christopher Nolan",
//                    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//                    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//                    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//                    "Language": "English, Urdu, Mandarin",
//                    "Country": "USA, UK",
//                    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//                    "Metascore": "70",
//                    "imdbRating": "8.3",
//                    "imdbVotes": "972,584",
//                    "imdbID": "tt0372784",
//                    "Type": "movie",
//                    "Response": "True"
//                 },
//                 {
//                    "Title": "Avatar",
//                    "Year": "2009",
//                    "Rated": "PG-13",
//                    "Released": "18 Dec 2009",
//                    "Runtime": "162 min",
//                    "Genre": "Action, Adventure, Fantasy",
//                    "Director": "James Cameron",
//                    "Writer": "James Cameron",
//                    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//                    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//                    "Language": "English, Spanish",
//                    "Country": "USA, UK",
//                    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//                    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//                    "Metascore": "83",
//                    "imdbRating": "7.9",
//                    "imdbVotes": "876,575",
//                    "imdbID": "tt0499549",
//                    "Type": "movie",
//                    "Response": "True"
//                 }
// ];
// // Add your code below this line
// var averageRating = watchList.filter(item => item.Director === "Christopher Nolan").map(num => Number(num.imdbRating)).reduce((acc, cur) => acc + cur)/ watchList.filter(item => item.Director === "Christopher Nolan").length;
// // Add your code above this line
// console.log(averageRating);


// Functional Programming: Sort an Array Alphabetically using the sort Method
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
// function alphabeticalOrder(arr) {
//   // Add your code below this line
//   return arr.sort(function(a,b){
//     // return a > b;
//     return a > b ? 1 : -1
//   });
//   // Add your code above this line
// }
// console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));


// Functional Programming: Return a Sorted Array Without Changing the Original Array
//Use the sort method in the nonMutatingSort function to sort the elements of an array
//in ascending order. The function should return a new array, and not mutate the globalArray variable.
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
//   var newArray = [];
//   return arr.concat(newArray).sort(function(a,b){
//     return a - b;
//   });
//   // Add your code above this line
// }
// console.log(nonMutatingSort(globalArray));
// console.log(globalArray);

// Functional Programming: Split a String into an Array Using the split Method
//Use the split method inside the splitify function to split str into an array
//of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
// function splitify(str) {
//   // Add your code below this line
//   return str.split(/\W/);
//   // Add your code above this line
// }
// console.log(splitify("Hello World,I-am code"));

// Functional Programming: Combine an Array into a String Using the join Method
// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
// function sentensify(str) {
//   // Add your code below this line
//   return str.split(/\W/).join(" ");
//   // Add your code above this line
// }
// console.log(sentensify("May-the-force-be-with-you"));


// Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs
//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
//You can use any of the methods covered in this section, and don't use replace.
// the global variable
// var globalTitle = " Winter Is  Coming";
// // Add your code below this line
// function urlSlug(title) {
//   var result = title.toLowerCase().trim().split(/\s+/).join("-");
//   return result;
// }
// // Add your code above this line
// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
// console.log(winterComing);

// Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria
// Use the every method inside the checkPositive function to check if every element in arr is positive.
// The function should return a Boolean value.
// function checkPositive(arr) {
//   // Add your code below this line
//   return arr.every(num => num > 0);
//   // Add your code above this line
// }
// console.log(checkPositive([1, 2, 3, 4, 5]));


// Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria
// Use the some method inside the checkPositive function to check if any element in arr is positive.
// The function should return a Boolean value.
// function checkPositive(arr) {
//   // Add your code below this line
//   return arr.some(num => num > 0);
//   // Add your code above this line
// }
// console.log(checkPositive([-1, -2, -3, -4, -5]));

// Functional Programming: Introduction to Currying and Partial Application
//Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
  // Add your code below this line
    return function(y){
      return function(z){
        return x + y + z;
      }
    }
  // Add your code above this line
}
console.log(add(11)(22)(33));
