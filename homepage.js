var menu=document.getElementById("menu");
var side=document.getElementById("side");
side.style.right="-250px";
menu.onclick=function(){
    if(side.style.right=="-250px"){
        side.style.right="0px"
    }
    else{
        side.style.right="-250px"
    }
}
var scroll = new SmoothScroll('a[href*="#"]');
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}
var checkobj
function agreesubmit(el){
checkobj=el
if (document.all||document.getElementById){
for (i=0;i<checkobj.form.length;i++){  //hunt down submit button
var tempobj=checkobj.form.elements[i]
if(tempobj.type.toLowerCase()=="submit")
tempobj.disabled=!checkobj.checked
}
}
}
function formValid()                                    
{ 
var name = document.forms["RegForm"]["Name"];               
var email = document.forms["RegForm"]["EMail"];    
var phone = document.forms["RegForm"]["Telephone"];  
var what =  document.forms["RegForm"]["Subject"];  
var password = document.forms["RegForm"]["Password"];  
var age = document.forms["RegForm"]["age"];  
var ageregx=/^9[0-9]\d{2}$/;
var phoneno=/^9[0-9]\d{8}$/;
var nameregx=/^[A-Za-z]+$/;
var emailregx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passregx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if (name.value=="")                                  
{ 
window.alert("Please enter your name."); 
name.focus(); 
return false; 
} 
if (age.value == ""  )                               
{ 
window.alert("Please enter correct age."); 
age.focus(); 
return false; 
} 
if (email.value == "" )                                   
{ 
window.alert("Please enter a valid e-mail address."); 
email.focus(); 
return false; 
} 
if (password.value=="")                        
{ 
window.alert("enter password with between 7 to 15 characters which contain at least one numeric digit and a special character"); 
password.focus(); 
return false; 
} 
if (phone.value.match(phoneno) )                           
{
return true;
}
else
{
alert("enter correct phone number");
return false;
}
if(what.selectedIndex < 1)                  
{ 
alert("Please enter your gender."); 
what.focus(); 
return false; 
}
/*else{
 alert("please enter details")
} */
return true; 
}