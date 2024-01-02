
function convertTo12hSystem(hour) {

    if (isNaN(hour) | hour < 0 | hour > 23) {
        return "Pelease Enter the Valid Data";
    }

    

    if(hour % 12 ===0)
    {
        hour=12;
    }else
    {
        hour %=12;
    }

    let period;
    if(hour >12)
    {
        period="PM";
    }else
    {
        period="AM";
    }

    // Combine the formatted hour and period
    let result = `${hour} ${period}`;

    return result;
}



while (true) {

    alert("This Task Number Three");
    let input = prompt("enter The Hour by 24h System:");

    if (input === null) {
        break;
    }

    
  alert(`${convertTo12hSystem(input)}`);

}




