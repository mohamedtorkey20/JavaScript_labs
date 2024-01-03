
 var Contacts=new Array();
while(true)
{
  var opation=prompt("Enter your opation(add/search)");
  
    if(opation==null)
    {
        break;
    }


    if(opation ==="add")
    {
        
        var contactname=prompt("Enter the Name of Contact:");
        var phonenumber=prompt("Enter the Phone Number:");
         if(isNaN(contactname) && isFinite(phonenumber)&& phonenumber.length === 11)
         {
           let contact={
            name:contactname,
            phone:phonenumber
           }
            Contacts.push(contact);
           
        
            alert("the contact added susseccfully");
         }else
         {
            alert("Invalid Data or length of phone is 11 digit");
         }

    }else if(opation ==="search")
    {
        var value=prompt("Enter the Name of value:");

        if(value === null)
        {
            break;
        }

        function findData(name) {
            return Contacts.find((contact) => contact.name === name);
        }
         
        var Data = findData(value);
           
        if (Data) {
            alert(`{name: ${Data.name} , phone: ${Data.phone} }`);
        } else {
            alert("Contact Doesn't Exit");
        }
        
    }else
    {
        alert("Invalid Opation");
    }




}





console.log(findContactByName("mohamed"))