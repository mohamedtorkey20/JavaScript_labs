
document.body.classList.add("parent");

async function getData()
{

 var data= await fetch("https://dummyjson.com/users");
 var data_arr=await data.json();

    data_arr['users'].forEach(item=>
        {

    var div=document.createElement("div");
    var img=document.createElement("img");
    var email=document.createElement("p");

    img.src=item.image;
    img.alt='image';
    email.textContent=item.email;

    document.body.classList.add("div")
    
    div.appendChild(img);
    div.appendChild(email);
    document.body.appendChild(div);


       });


}

addEventListener("load", getData);