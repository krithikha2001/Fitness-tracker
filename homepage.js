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
    var name = document.getElementById('name').value;               
    var email = document.getElementById('email').value;    
    var phone = document.getElementById('phone').value;  
    var password =document.getElementById('password').value ;  
    var age = document.getElementById('age').value;  
    var ageregx=/^[0-9]{2}$/;
    var phoneno=/^[9][0-9]{9}$/;
    var nameregx=/^[A-Za-z]{3,30}$/;
    var emailregx=/^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passregx=/^(?=.*[0,9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
    if(nameregx.test(name)){
         document.getElementById('username').innerHTML=" ";
    }
    else{
     document.getElementById('username').innerHTML="**enter correct name**";
     return false; 
    }
    if(ageregx.test(age)){
         document.getElementById('agecheck').innerHTML=" ";
    }
    else{
     document.getElementById('agecheck').innerHTML="**enter correct age**";
     return false; 
    }
    
    if(emailregx.test(email)){
         document.getElementById('emailcheck').innerHTML=" ";
    }
    else{
     document.getElementById('emailcheck').innerHTML="**enter correct email**";
     return false; 
    }
    if(phoneno.test(phone)){
         document.getElementById('phonecheck').innerHTML=" ";
    }
    else{
     document.getElementById('phonecheck').innerHTML="**enter correct phone number**";
     return false; 
    }
    if(passregx.test(password)){
         document.getElementById('passwords').innerHTML=" ";
    }
    else{
     document.getElementById('passwords').innerHTML="**enter correct password with atleast characters between 8 to 16 and with one upper character and a number and a special character**";
     return false; 
    }
}