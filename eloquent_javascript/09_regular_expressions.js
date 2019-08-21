/** 01

For each of the following items, write a regular expression to test whether any of
the given substrings occur in a string. The regular expression should match only strings
containing one of the substrings described. Do not worry about word boundaries unless explicitly
mentioned. When your expression works, see whether you can make it any smaller.

1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)

**/

// 1. car and cat
let reg1 = /ca[rt]/g
console.log(reg1.test("car"))
console.log(reg1.test("cat"))


// 2. pop and prop
let reg2 = /pr?op/g
console.log(reg1.test("pop"))
console.log(reg1.test("prop"))


// 3. ferret, ferry, and ferrari
let reg3 = /ferr[et|y|ari]/g
console.log(reg1.test("ferrari"))
console.log(reg1.test("ferret"))
console.log(reg1.test("ferry"))


// 4. Any word ending in ious
let reg4 = /(ious)$/g


// 5. A whitespace character followed by a period, comma, colon, or semicolon
let reg5 = /\s[,;:.]/g


// 6. A word longer than six letters
let reg6 = /\w{7}/g


// 7. A word without the letter e (or E)
let reg7 = /\b[^\WeE]+\b/g





/** 02

Imagine you have written a story and used single quotation marks throughout to mark
pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes,
while keeping the single quotes used in contractions like `aren’t`.

Think of a pattern that distinguishes these two kinds of quote usage and craft a
call to the replace method that does the proper replacement.

**/
let text = "'I'm the cook,' he said, 'it's my job.'";
// → "I'm the cook," he said, "it's my job."
console.log(text.replace(/\B'/g, "\""));











