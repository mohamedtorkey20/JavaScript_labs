function Validation() {
    var data = {
        username: "admin",
        password: "123"
    };
    var form=document.getElementsByClassName("form")[0];
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var error=document.getElementsByClassName("form")[0].children[0];

    if (username.value !== "" && password.value !== "") {
        if (username.value === data.username) {
            if (password.value=== data.password) {
                error.style.display= "none"
                form.className="Welcome";
                form.innerHTML=`<p>Welcome ${data.username}<p>`;

            } else {
                username.style.border="2px solid green"
                form.children[0].innerText="Invalid Password "
                password.style.border="2px solid red"
                
            }
        } else {
            
            form.children[0].innerText="Invalid username "
            username.style.border="2px solid red"
            
        }
        
    } else {
         if(username.value == "")
         {
            username.style.border="2px solid red"
         }
         
         if(password.value =="")
         {
            password.style.border="2px solid red"
         }
        
        
        form.children[0].innerText="Invalid Inputs"
    }
}