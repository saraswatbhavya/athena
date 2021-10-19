var email= document.forms['form1']['email'];
var password= document.forms['form1']['password'];
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var welcome = document.getElementById('welcome');

email.addEventListener('textInput',validateEmail);
password.addEventListener('textInput',validatePass);


function checkForm(form1){


    var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,20}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value == "") 
    {
        alert("Email cannot be blank.");
        email.focus();
        return false;
     }

    if(!mailformat.test(email.value))
    {   
        
        email.style.border="1px solid red";
        email_error.style.display = "block ";
        email.focus();
        return false;
        
    }
    else if(mailformat.test(email.value))
    {
        email.style.border="1px solid silver";
        email_error.style.display = "none";
        email.focus();
        
    }   
    
    if(password.value == "") 
    {
        alert("Password cannot be blank.");
        password.focus();
        return false;
    }

    if(!passw.test(password.value)) 
    {
        alert("Password must contain at least ten characters, one special symbol, one lowercase letter and one uppercase letter.");
        password.style.border="1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
      
    }
    
    else 
    {   
        password.style.border="1px solid silver";
        pass_error.style.display = "none ";
        password.focus();
        return true;
    
        
    }

   
}


function login(){
    if(checkForm(form1)==true)
    {
        welcome.style.display = "block";
    }
    else
    return false;
}

