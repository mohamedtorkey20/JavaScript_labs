
var form=document.getElementById("form");
var email=document.getElementsByName("email-text")[0];
var password = document.getElementsByName("pass-text")[0];
var btn_login=document.getElementById("btn-login");
var error_email=document.getElementById("error-email");
var error_password=document.getElementById("error-password");

// function to validate email
function Validation_email(email)
{
    const reg_email=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,5}$/;

    return reg_email.test(email);
}

// function to validate password
function Validation_password(password)
{
   const reg_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

   return reg_password.test(password);
}








email.addEventListener("blur",function(e)
{
  if(!(Validation_email(email.value)))
  {
    change_status_valiate(email,error_email,true,"Invalid Email");
    email.focus();
    e.preventDefault();
  }else
  {
    change_status_valiate(email,error_email,false);
  }
})


password.addEventListener("blur",function(e)
{
  if(!(Validation_password(password.value)))
  {
    change_status_valiate(password,error_password,true,"Invalid Password");
    password.focus();
    e.preventDefault();
  }else
  {
    change_status_valiate(password,error_password,false);
  }
})




btn_login.addEventListener('click',function(e)
{

    flage=true;
  if(!(Validation_email(email.value)))
  {
   flage=false;
       
    change_status_valiate(email,error_email,true,"Invalid Email");
  
      e.preventDefault();
  }

  if(!(Validation_password(password.value)))
  {
       flage=false;
    change_status_valiate(password,error_password,true,"Invalid Password");
      e.preventDefault();
  }

  
  
  if(flage)
  {
    
    var nameOfUser=email.value.substring(0,email.value.indexOf("@"));
    form.innerHTML=`<h2>Welcome ${nameOfUser}`;
    form.classList.add("Welcome");
   }


}
  

)


function change_status_valiate(text_element,p_element,add=true,message='')
{
  if(add)
  {
      text_element.style.border="2px solid red";
      p_element.innerText=`${message}`;
      p_element.classList.add("error");
  }else{
     text_element.style.border="2px solid green";
      p_element.innerText=`${message}`;
      p_element.classList.remove("error");
  }
}


