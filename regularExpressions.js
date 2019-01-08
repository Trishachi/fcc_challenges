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

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
// This can be useful when you want to search for multiple patterns over the same string.
// There are two kinds of lookaheads: positive lookahead (?=...) and negative lookahead(?!...).
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
// The rest of the pattern is returned if the negative lookahead part is not present.


//Regular expressions modifiers and patterns
//i	- Perform case-insensitive matching
//g - Perform a global match (find all matches rather than stopping after the first match)
//m	- Perform multiline matching
//. - The wildcard character . will match any one character. eg /hu./
//n+ -	Matches any string that contains at least one n
//n* -	Matches any string that contains zero or more occurrences of n
//n? - Lazy matching - Matches any string that contains zero or one occurrences of n
//[^] - ^ inside a character set = negated character set = Finds things that will not be matched
//^ - ^ outside a character set = Finds patterns at the beginning of strings
//$ - Finds patterns at the end of a string
//(x|y)	- Find any of the alternatives specified
// \w	- Find a word character (/[A-Za-z0-9]_/ == /\w/)
// \W	- Find a non-word character (/[^A-Za-z0-9_]/ == /\W/)
// \d == /[0-9]/ - Matches numbers/digits
// \D == /[^0-9]/ - Matches non-digits/non-numbers
// n{X}	- Matches any string that contains a sequence of X n's
// n{X,Y} - Matches any string that contains a sequence of X to Y n's
// n{X,} -	Matches any string that contains a sequence of at least X n's
// \s - 	Find a whitespace character  == [\r\t\f\n\v] == carriage return, tab (horizntal), form feed, new line characters and vertical tab
// \S - 	Find a non-whitespace character ==  [^ \r\t\f\n\v]
//quantity specifiers - {lower limit, upper limit}


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
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// Regular Expressions - 12: Find One or More Criminals in a Hunt
// Write a greedy regex that finds one or more criminals within a group of other people.
// A criminal is represented by the capital letter C.
// example crowd gathering
// let crowd = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';
// let reCriminals = /c+/gi; // Change this line
//
// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals + " Number of Criminals: " + String(matchedCriminals).length);

// Regular Expressions - 13: Match Beginning String Patterns
//Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result);

// Regular Expressions - 13: Match Ending String Patterns
//Use the anchor character ($) to match the string "caboose" at the end of the string caboose.
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log(result);

// Regular Expressions - 13: Match All Letters and Numbers
//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

// Regular Expressions - 14: Match Everything But Letters and Numbers
//Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// let quoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

//Regular Expressions - 15: Match All Non-Numbers
//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
// let numString = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = numString.match(noNumRegex).length;
// console.log(result);

// Regular Expressions - 16: Restrict Possible Usernames
//Change the regex userCheck to fit the constraints listed
// 1) The only numbers in the username have to be at the end.
// There can be zero or more of them at the end.
// 2) Username letters can be lowercase and uppercase.
// 3) Usernames have to be at least two characters long.
// A two-letter username can only use alphabet letter characters.
// let username = "RegexGuru";
// let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
// let result = userCheck.test(username);
// console.log(result);

// Regular Expressions - 17: Specify Upper and Lower Number of Matches
// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
// let ohStr = "ohhhhhh no";
// let ohRegex = /Oh{3,6}\sno/i; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result);

// Regular Expressions - 18: Specify Only the Lower Number of Matches
// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
// let haStr = "Hazzzzzzah";
// let haRegex = /Haz{4,30}ah/i; // Change this line
// let result = haRegex.test(haStr);
// console.log(result);

// Regular Expressions - 19: Check for All or None
// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// console.log(result);

// Regular Expressions - 20: Positive and Negative Lookahead
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
// let sampleWord = "123";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/i; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);


// Regular Expressions - 22: Use Capture Groups to Search and Replace
// Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".
// let huhText = "This sandwich is good.";
// let fixRegex = /good/; // Change this line
// let replaceText = "okey-dokey"; // Change this line
// let result = huhText.replace(fixRegex, replaceText);
// console.log(result);

// Regular Expressions - 22: Remove Whitespace from Start and End
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line
// console.log(hello.trim()); // can also be achiveved using the trim() method
// console.log(result);

// Regular Expressions - 21: Reuse Patterns Using Capture Groups
// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42 42";
//the caret (^) and dollar sign ($) tells the regex where to star and where to stop
// ie it must start at the beggining and stop after 3 occurences
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);
console.log(repeatNum.match(reRegex));
