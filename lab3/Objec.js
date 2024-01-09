//---------------------Use 10 of Objects predefined methods and explain them-------------------------

/*
1- Object.values(object_name)
  used to return an array whose elements are the enumerable property values found on the object
*/
var myobj = { id:12, Name: 'Mohamed torkey', track: 'open source' };
 values = Object.values(myobj);
 console.log(values); 


/*
2-Object.create(proto)
   Creates a new object with the specified prototype object and optional properties.
*/
var myobj1 = { id:12, Name: 'Mohamed torkey', track: 'open source' };
new_obj=Object.create(myobj1)
new_obj.age=22
console.log(new_obj); 

/*
3-Object.keys(object_name)
    Returns an array of a given object's own enumerable property names
*/
 Keys = Object.Keys(myobj);
 console.log(Keys); 

 /*
 4-Object.freeze(object_name):
     Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.
 */

     Object.freeze(myobj)
     myobj.id=23; //this won't update because we made myobj freezed

/*
 5-Object.is(obj1, obj2)
  Determines whether two values are the same value. Similar to the '===' operator, but with a few differences.
*/  
console.log(Object.is(12, '12')); // false

/*
 6-Object.defineProperty(object_name, prop, descriptor)
  we use it to add a new property or modify an existing property on an object with a specified descriptor. The descriptor includes attributes like configurable,
   enumerable, value, get, and set.
*/

var student = {};


Object.defineProperty(student, 'name', {
  value: 'mohamed',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person.name); 

/*
 7-Object.defineProperties(object_name, props)
  we use it to  add multiple properties or modify existing properties on an object with the specified descriptors. The descriptors include attributes like value,
   writable, enumerable, configurable, get, and set
*/

const person = {};

// Adding multiple properties with values
Object.defineProperties(person, {
  name: {
    value: 'ahmed',
  },
  id: {
    value: 13,
  },
});

console.log(person.name); 
console.log(person.id); 

/*
 8-Object.hasOwnProperty(prop)
 check if the object has the specified property as its own property.
*/ 
console.log(myobj.hasOwnProperty('name')); 
console.log(myobj.hasOwnProperty('fname')); 

/*
9-Object.entries(object_name):
  Returns an array of a given object's own enumerable property [key, value] pairs.
*/ 

var entries = Object.entries(myobj);
console.log(entries);


/*
10-Object.entries(object_name).length:
  Gets the number of enumerable properties in an object.
*/ 

var length=Object.entries(myobj).length;
console.log(length);