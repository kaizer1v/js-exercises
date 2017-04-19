# STRINGS

[Ref link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


```javascript
var str = 'I am ' + 'a' + ' string';
```

A string can be appended like so. You can also print out the length of a given string.

```javascript
console.log(str.length);
```

## substring

**Syntax: substring(startIndex, Length);**

```javascript
'hello'.substring(0, 1);
```

will return `h`. Think of the `substring` method, mention the start index in the beginning, (starting from 0);


```javascript
'hello'.substring(0, 0); // will return "", basically an empty string
// Also,
'hello'.substring(0, 235);
// will return the full string, if 2nd parameter is greater than the original
//   length of the string.
```

**REMEMBER: `length = index + 1`**

Just like the .substring method, there is another method, called .substr

```javascript
'hello'.substr(0, 1);
'hello'.substr(0, 0);
'hello'.substr(0, 235);
```

All these outputs would be exactly the same as what the .substring method would produce. The only difference is in the meaning of the 2nd argument.

```javascript
.substring(start_index, stop_index_but_dont_include)
// where as
.substr(start_index, max_length)
```

## lowerCase and upperCase

As you might have guessed, you can change the case of a string.

```javascript
'hElL0'.toLowerCase();
```
will output 'hell0'. Numbers will not change their case obviously. Actually there is no method to alternate the case of the given text. The trick to check is,

```javascript
if('E' == 'e'.toUpperCase()) { ... }
```

But you might run into a problem when you try to do that in case of numbers. Try it out :-)
Do note that, these methods will return a value and will not change the string itself.
You can also check out `toLocaleUpperCase` and `toLocaleLowerCase` for different languages.


## charAt

Helps you know where a particular character you are looking for, if exists.

```javascript
'hello'.charAt(5);
```

will return a '', since there is nothing that exists there. For that matter even

```javascript
'hello'.charAt(235);
```
will return a `''`. Try inputting a negative number.
Basically the index of the character you just entered. Inputting any other data type
 other than a number, will return the first character. But wait, try out - `'hello'.charAt(true)`

Very similar to this, another function called `charCodeAt` will return the character code at that
 index, or `NaN` for something that doesnt exist. Try out.


## replace

You can match characters or set of characters to replace within a string and get it returned as
 a new string, using the .replace method. So,

```javascript
'hello'.replace('l', 123);
```

will return `he123lo`. As you see, it will only replace the 1st occurance of 'l' and not the 2nd.
You can also replace two 'll's together

```javascript
'hello'.replace('ll', 123);
```

Trying to replace something that doesnt exist, will return the original string as is.

```javascript
'hello'.replace('', 123);       // will return '123hello'
```

will insert 123 at the beginning of the string. This can be used more like a pre-pend method.
You can also use regular expression to match patterns and replace them.

```javascript
var str = 'Twas the night before Xmas...';
str.replace(/xmas/i, 'Christmas');
```

This is an excellent link to learn more about regular expressions [over here](http://regexr.com/)

The `replace` method can also accept a callback function as the 2nd parameter.
Example: Here is a function that takes a 'camelCasing' string and converts it to 'camel-casing' like text.

```javascript
function styleHyphenFormat(propertyName) {
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
}
```

## slice

Slice method extracts a section of a string and returns a new string.

```javascript
'hello'.slice(2, 4);
```

will return the characters from `[2, 4)` i.e. including at index 2 till 4 but excluding 4.
if no 2nd parameter is mentioned, then it will return from 2 until the length of the string.

You can also enter negative numbers as parameters, the negative numbers will start from the end of the string instead
 of the beginning.

 ```javascript
'hello'.slice(-2);
```

will return the string 'lo' i.e. 2 from the end, until the end (__because 2nd parameter isnt mentioned__).
will be the same as writing

```javascript
'hello'.slice('hello'.length - 2);
```