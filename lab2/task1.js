
while (true) {

    alert("This Task Number one");
    let input = prompt("enter your age:");

   
    if (input === null) {
        break;
    }

    let age = parseInt(input);

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid positive number for age.");
    } else {
        let result;
        if (age >= 1 && age <= 10) {
            result = "Child";
        } else if (age >= 11 && age <= 18) {
            result = "Teenager";
        } else if (age >= 19 && age <= 50) {
            result = "Grown up";
        } else {
            result = "Old";
        }

        alert(`your age is ${age}, you are a ${result}.`);
    }
}



