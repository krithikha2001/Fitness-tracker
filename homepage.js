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
  window.onload = () => {
  let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds = 0;
  let intervalId = null;
  function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
    document.getElementById("hour").innerHTML =hour;
    document.getElementById("minute").innerHTML =minute;
    document.getElementById("seconds").innerHTML =seconds;
  }
  document.getElementById('start-btn').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
  })
  document.getElementById('stop-btn').addEventListener('click', () => {
    if (intervalId)
      clearInterval(intervalId);
  });
  document.getElementById('reset-btn').addEventListener('click', () => {
     totalSeconds = 0;
     document.getElementById("hour").innerHTML = '0';
     document.getElementById("minute").innerHTML = '0';
     document.getElementById("seconds").innerHTML = '0';
  });
}
    function bmi () {
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var result = (weight / (height * height)*10000);
result=Math.round(result*100)/100;
document.getElementById("result").innerHTML = "Your bmi score is : " + result;

if(result<16)
document.getElementById("concl").innerHTML = "You are underweight--severe thinness";
else if(result>=16 && result<=17)
  document.getElementById("concl").innerHTML = "You are underweight--moderate thinness";
else if(result>17 && result<=18.5)
document.getElementById("concl").innerHTML = "You are underweight--mild thinness";
else if(result>18.5 && result <=25)
document.getElementById("concl").innerHTML = "You are Normal";
else if(result>25 && result <=30)
document.getElementById("concl").innerHTML = "You are Overweight";
else if(result>30 && result<=35)
document.getElementById("concl").innerHTML = "You are Obese Class I";
else if (result>35 && result <=40)
document.getElementById("concl").innerHTML = "You are Obese Class II";
else if(result>40)
document.getElementById("concl").innerHTML = "You are Obese Class III";
else
document.getElementById("concl").innerHTML = "Please enter correct input";
}
