   alert("login admin")
while (true) {
    var username = prompt("Enter Username:");

    if (username === null) {
        break;
    }

    if (username === "admin") { 
        var password = prompt("Enter password:");

        if (password === null) {
            break;
        }

        if (password === "421$$") {
            alert("Welcome login successful!");
            break;
        } else {
            alert("Invalid password");
        }
    } else {
        alert("Invalid username");
    }
}


    