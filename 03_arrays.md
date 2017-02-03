# ARRAYS

```javascript
var arr = [1, 5, 3, 6];
```

This is a very simply array.
You can check the length of an array by using the `.length` property

```javascript
console.log(arr.length);  // 4, since there are 4 elements.
```

Remember, the indexes of an array always start from 0.
Let us print out a single element of an array, by using its index

```javascript
console.log(arr[2]); // '3', since the indexes start from 0;
```

Thus, print out

```javascript
console.log(arr[5]);
```

will obviously print out `undefined`, since that index doesnt exist.
Yes, JS is smart :)

Arrays are basically literals. They are literally whetever you define them to be.

```javascript
var arr = [4, 5, , 9];
```

Here, the array has 4 elements, `arr[2]` is `undefined`



