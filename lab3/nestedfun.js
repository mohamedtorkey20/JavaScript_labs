// -----

/*

we create function "outerFunction" take parameter Name and print message from outer function 
and we create anther function nested "outerFunction" called "innnerFunction" print message 
The outerFunction returns the innerFunction. This is crucial for creating a closure, as it allows the inner function to retain access to 
the variables of its outer function even after the outer function has completed execution
Closure Creation: When we call outerFunction('mohamed'), it returns the innerFunction and assigns it to the variable closure. At this point, the closure is created, 
and it includes the scope of the outerFunction with the specific value of outerParam set to 'OuterValue'.


*/ 
function outerFunction(Name) {
    
    console.log(`Hello ${Name} this Message from outer Function`);
  
    function innerFunction(age) {
      console.log(`Hello ${Name} your age is ${age}  and this message from inner Function `);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction('Mohamed');
  closure(23);
  