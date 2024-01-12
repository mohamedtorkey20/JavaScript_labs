//-------------------------Inheritance in Function Constructor------------------------------
/*
inheriting a constructor function in JavaScript. Constructor functions define the prototype of 
the properties an object will contain. Using the constructor function, we can create a new object after passing the required parameters.
Inheriting a previously defined constructor function means using the parameters of the previously defined function along with
adding some new parameters to the newly defined constructor function. For this, we need to use the call() function which allows 
us to call a function defined somewhere else in the current context

*/  


function Person(id, name,age) { 
	this.id = id; 
	this.name = name; 
	this.age = age; 
}; 

function Employee(id, name, age,salary) { 

	Person.call(this, id, name, age); 

	this.salary = salary; 
} 
var pers=new Person("mohamed",22,"male");
var emp=new Employee("mohamed",22,"male",12000);
console.log(pers); 
console.log(emp);
