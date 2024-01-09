//---------------Use 10 of Arrays predefined methods and explain them---------------------

/*
 1-push(element1, ..., elementN):
  Adds one or more elements to the end of an array and returns the new length of the array.

*/
var Names = ['Mohamed', 'Ahmed'];
var newLength = Names.push('Ali', 'Belal');
console.log(Names); 
console.log(newLength); 

/*
 2-pop()
   Removes the last element from an array and returns that element.
*/
var removedElement = Names.pop();
console.log(Names); 
console.log(removedElement); 

/*
3-slice(start, end)
 Returns a shallow copy of a portion of an array into a new array.
  The original array is not modified.
*/ 

var slicedNames = Names.slice(0,2);
console.log(slicedNames); 

/*
4-indexOf(searchElement, fromIndex)
 Returns the first index at which a given element is found in the array, or -1 if it is not present.
*/ 
var index = Names.indexOf('Mohamed');
console.log(index); 

/*
5-shift()
  Removes the first element from an array and returns that element. Shifts the remaining elements to a lower index.

*/ 

var removedElement = Names.shift();
console.log(Names); 
console.log(removedElement); 

/*
6-unshift(element1, ..., elementN)
  Adds one or more elements to the beginning of an array and returns the new length of the array.
*/ 

var newLength = Names.unshift('karim', 'Mona');
console.log(Names); 
console.log(newLength); 


/*
7-includes(element, fromIndex)
  Determines whether an array includes a certain element, returning true or false.
*/ 
var isIncluded1 = Names.includes('Mohamed');
var isIncluded2 = Names.includes('karim');
console.log(isIncluded1); 
console.log(isIncluded2); 

/*
8-find(callback(element, index, array), thisArg)
  Returns the first element in the array that satisfies the provided testing function.
   Otherwise, it returns undefined.

*/ 

var numbers = [10, 20, 30, 40, 50];
var result = numbers.find((element) => element > 40);

console.log(result);

/*
9-concat(array1, ..., arrayN)
 Combines two or more arrays and returns a new array.
*/ 
var fnames = ['Mohamed', 'Ahmed'];
var lnames = ['ALi', 'Omar'];
var result = fnames.concat(lnames);
console.log(result); 

/*
10-filter(callback(element, index, array))
    Creates a new array with elements that pass the test implemented by the provided function.
*/ 
var numbers = [10, 15, 20, 25, 30];
var evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); 

