//Notes
// Regular expressions are special strings that represent a search pattern.
// Also known as "regex" or "regexp", they help programmers match, search, and
// replace text. Regular expressions can appear cryptic because a few characters
// have special meaning. The goal is to combine the symbols and text into a pattern
// that matches what you want, but only what you want

// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),
// and returns true or false if your pattern finds something or not.

//In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern
//and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the
//string that satisfies the regex pattern.

//Regular expressions modifiers and patterns
//i	- Perform case-insensitive matching
//g - Perform a global match (find all matches rather than stopping after the first match)
//m	- Perform multiline matching
//. - The wildcard character . will match any one character. eg /hu./
//n+ -	Matches any string that contains at least one n
//n* -	Matches any string that contains zero or more occurrences of n
//n? - Lazy matching - Matches any string that contains zero or one occurrences of n



//Codes
// Regular Expressions - 1: Using the Test Method
// Apply the regex myRegex on the string myString using the .test() method.
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);

// Regular Expressions - 2: Match a Literal String with Different Possibilities
// Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// console.log(result);

// Regular Expressions - 3: Ignore Case While Matching
// Write a regex fccRegex to match "freeCodeCamp", no matter its case.
// Your regex should not match any abbreviations or variations with spaces.
// let myString = "Free Code Camp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result);

// Regular Expressions - 4: Extract Matches
// Apply the .match() method to extract the word coding
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/i; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result);

// Regular Expressions - 5: Find More Than the First Match
// Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);

// Regular Expressions - 6 : Match Single Character with Multiple Possibilities
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find
// all the vowels in the string quoteSample.
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);

// Regular Expressions - 7: Match Letters of the Alphabet
// Match all the letters in the string quoteSample.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

// Regular Expressions - 8: Match Numbers and Letters of the Alphabet
// Create a single regex that matches a range of letters between h and s, and
// a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

// Regular Expressions - 9: Match Single Characters Not Specified == negated character sets
// Create a single regex that matches all characters that are not a number or a vowel.
// Remember to include the appropriate flags in the regex.
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

// Regular Expressions - 10: Match Characters that Occur Zero or More Times
// Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your
// regex does not need flags, and it should not match any of the other quotes.
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// Regular Expressions - 11: Find Characters with Lazy Matching
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
// Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
