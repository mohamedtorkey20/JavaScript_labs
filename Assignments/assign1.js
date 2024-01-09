/*
 find(callback(element, index, array), thisArg):
  Returns the first element in an array that satisfies the provided testing function. 
If no element is found, it returns undefined.
*/ 

var numbers = [10, 20, 25, 30];
var result = numbers.find((element) => element > 10);
console.log(result); 

/*

forEach(callback(element, index, array)):
  Executes a provided function once for each array element.
 It does not return a new array.

*/ 

var Names = ['Mohamed', 'Ali', 'Omar'];
Names.forEach((Name, index) => {
  console.log(`the index of ${Name}:${index}`);
});


/*

map(callback(element, index, array))
   Creates a new array by applying a function to each element in the existing array.
 It returns a new array with the results.

*/ 

var numbers = [1, 2, 3, 4];
var squared = numbers.map((num) => num * 2);
console.log(squared); 

