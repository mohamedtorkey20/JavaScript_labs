//---------------------Abstract VS interface--------------------------
/*
 In JavaScript, there is no direct implementation of abstract classes or interfaces 
 like in some other programming languages such as Java or C#. However,
 you can achieve similar functionalities using prototypes and object-oriented
 programming principles
*/ 
/*

Abstract Class
-Abstract classes are meant to be inherited by other classes.They cannot be instantiated on their own.
-They may contain abstract methods, which are methods without a defined implementation.
*/
 
class Person {
    constructor(name,age)
    {
       this.name=name;
       this.age=age;
    }
 
   // Abstract method without implementation
   PrintData() {
   }
 }
 
 class Employee extends Person {
   constructor(name,age,salary) {
     super(name,age);
     this.salary = salary;
   }
     
   PrintData() {
     return `welcome ${this.name} ,your age : ${this.age} and your salary : ${this.salary}`;
   }
 }
 
 const Emp = new Employee("mohamed torkey",22,20000);
 console.log(Emp.PrintData()); 

//---------------------------------interface-----------------------------------------
/*
Interface
 Interfaces define a contract for classes, specifying methods that must be implemented by any class that implements the interface.
 Unlike abstract classes, interfaces don't contain any implementation.
*/ 

// Interface 
const Shape = {
   calculateArea() {
   },
 };
 
 // Class implementing the interface
 class Rectangle {
   constructor(width, height) {
     this.width = width;
     this.height = height;
   }
 
   calculateArea() {
     return this.width * this.height;
   }
 }
   
 const rec = new Rectangle(5, 2);
 console.log(rec.calculateArea()); 
 
