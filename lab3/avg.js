
var elements=new Array();

while (true) {
    var n = prompt("Enter your  number of elements:");

    if (n === null) {
        break;
    }

    n = parseInt(n);

    if (isFinite(n)) {

       for(let i=0;i<n;i++)
        {
           elements[i] =Number(prompt("Enter numbers:"));
        }
        
        let sum=0;
        for(let i=0;i<n;i++)
        {
           sum+=elements[i];
        }

        let avg=sum/n;

      alert("Sum of elements: "+sum +"and Avarge : "+ avg);
    } else {
        alert("Invalid Number");
    }
}


