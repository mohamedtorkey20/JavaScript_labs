
//-------------------------first Task-----------------------------------

var firstName = prompt("What's your first name?");
while (!firstName) {
    firstName = prompt("Please enter a valid first name. What's your first name?");
}


var lastName = prompt("What's your last name?");
while (!lastName) {
    lastName = prompt("Please enter a valid last name. What's your last name?");
}


var isFullNameConfirmed = confirm(firstName + " " + lastName + " is your full name?");
if (isFullNameConfirmed) {
   
    var age = prompt("What's your age?");
    
   
    while (isNaN(age) || age <= 0) {
        age = prompt("Please enter a valid age. What's your age?");
    }

    alert("Welcome, " + firstName + " " + lastName + "! You are " + age + " years old.");
} else {
    alert("You clicked Cancel. Please provide your correct name.");
}


//------------------------Second Task-------------------------------------

alert("Welcome to the First Release of our Calculator!\nThis version only supports summation.");

var firstNumber = Number(prompt("Enter the first number:"));


var secondNumber =Number(prompt("Enter the second number:"));


var sum = firstNumber + secondNumber;


alert(firstNumber + " + " + secondNumber + " = " + sum );


