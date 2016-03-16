// ====================================
// STRINGS
//  Ref link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ====================================

var str = 'I am ' + 'a' + ' string';
// A string can be appended like so.
// You can also print out the length of a given string.
console.log(str.length);

// ------------------------------------
// substring
// ------------------------------------
// substring(startIndex, Length);

'hello'.substring(0, 1);
// will return 'h'. Think of the 'substring' method like so...
// which means, mention the start index in the beginning, (starting from 0);
'hello'.substring(0, 0); // will return "", basically an empty string
// Also,
'hello'.substring(0, 235);
// will return the full string, if 2nd parameter is greater than the original
//   length of the string.

// REMEMBER: length = index + 1

// Just like the .substring method, there is another method, called .substr
'hello'.substr(0, 1);
'hello'.substr(0, 0);
'hello'.substr(0, 235);
// All these outputs would be exactly the same as what the .substring method would produce.
// The only difference is in the meaning of the 2nd argument.

// .substring(start_index, stop_index_but_dont_include)
// where as
// .substr(start_index, max_length)

// ------------------------------------
// lower and upper case
// ------------------------------------
// As you might have guessed, you can change the case of a string.
'hElL0'.toLowerCase();
// will output 'hell0'. Numbers will not change their case obviously
// Actually there is no method to alternate the case of the given text. The trick to check is,
if('E' == 'e'.toUpperCase()) { ... }
// But you might run into a problem when you try to do that in case of numbers. Try it out :-)
// Do note that, these methods will return a value and will not change the string itself.
// You can also check out 'toLocaleUpperCase' and 'toLocaleLowerCase' for different languages.

// ------
// charAt
// ------
// Helps you know where a particular character you are looking for, if exists.
'hello'.charAt(5);
// will return a '', since there is nothing that exists there. For that matter even
'hello'.charAt(235);  // will return a ''. Try inputting a negative number.
// Basically the index of the character you just entered. Inputting any other data type
//  other than a number, will return the first character. But wait, try out - 'hello'.charAt(true)

// Very similar to this, another function called 'charCodeAt' will return the character code at that
//  index, or NaN for something that doesn't exist. Try out.

// ------------------------------------
// replace
// ------------------------------------
// You can match characters or set of characters to replace within a string and get it returned as
//  a new string, using the .replace method. So,
'hello'.replace('l', 123);
// will return 'he123lo'. As you see, it will only replace the 1st occurance of 'l' and not the 2nd.
// You can also replace two 'll's together
'hello'.replace('ll', 123);
// Trying to replace something that doesn't exist, will return the original string as is.
'hello'.replace('', 123);       // will return '123hello'
// will insert 123 at the beginning of the string. This can be used more like a pre-pend method.
// You can also use regular expression to match patterns and replace them.
var str = 'Twas the night before Xmas...';
str.replace(/xmas/i, 'Christmas');
// This is an excellent link to learn more about regular expressions: http://regexr.com/

