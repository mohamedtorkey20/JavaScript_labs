
alert("calc data")
function Calc(x, y, op) {
    var result;
    switch (op) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        default:
            alert("Invalid input");
          
    }
    return result;
}

while (true) {
    var firstNumber = prompt("Enter your first number:");

    if (firstNumber === null) {
        break;
    }

    firstNumber = parseInt(firstNumber);

    if (isFinite(firstNumber)) {
        var operation = prompt("Enter your operation:");
        if (operation === null) {
            break;
        }

        
        if (operation !== "+" && operation !== "*" && operation !== "-" && operation !== "/" && operation !== "%") {
            alert("Invalid operation");
            continue; 
        }

        var secondNumber = prompt("Enter your second number:");
        if (secondNumber === null) {
            break;
        }
        secondNumber = parseInt(secondNumber);

        if (isNaN(secondNumber)) {
            alert("Invalid second number");
            continue; 
        }

        var result = Calc(firstNumber, secondNumber, operation);
        alert("The result: " + result);
    } else {
        alert("Invalid first number");
    }
}
