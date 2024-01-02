
alert("This Task Number Two");

let value = prompt("Enter a string:");

if (value === null) {
    alert("You clicked cancel.");
} else {
    value = value.toLowerCase();

    let counter = 0;

    for (let char of value) {
        
        if(char=='a'|char=='b'|char=='i'|char=='e'|char=='u'|char=='o')
        {
            counter+=1;
        }
    }

    alert(`The number of vowels Letters is: ${counter}`);
}
