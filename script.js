function togglePassword(){

let pass=document.getElementById("pass");

if(pass.type==="password")
pass.type="text";
else
pass.type="password";

}

function register(){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let age=document.getElementById("age").value;

let dob=document.getElementById("dob").value;

let country=document.getElementById("country").value;

let pass=document.getElementById("pass").value;

let cpass=document.getElementById("cpass").value;

let terms=document.getElementById("terms").checked;

let msg=document.getElementById("msg");

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name=="" || email=="" || phone=="" || age=="" || dob==""){

msg.innerHTML="⚠ Please fill all required fields.";
msg.style.color="yellow";
return;

}

if(!emailPattern.test(email)){

msg.innerHTML="❌ Invalid Email Address.";
msg.style.color="orange";
return;

}

if(phone.length!=10 || isNaN(phone)){

msg.innerHTML="❌ Phone number must be exactly 10 digits.";
msg.style.color="orange";
return;

}

if(age<10 || age>100){

msg.innerHTML="❌ Enter a valid age.";
msg.style.color="orange";
return;

}

if(country=="Select Country"){

msg.innerHTML="❌ Please select your country.";
msg.style.color="orange";
return;

}

if(pass.length<8){

msg.innerHTML="❌ Password must contain at least 8 characters.";
msg.style.color="orange";
return;

}

if(pass!==cpass){

msg.innerHTML="❌ Passwords do not match.";
msg.style.color="red";
return;

}

if(!terms){

msg.innerHTML="⚠ Please accept Terms & Conditions.";
msg.style.color="yellow";
return;

}

msg.innerHTML="🎵 Registration Successful! Welcome to our Music Club.";

msg.style.color="lightgreen";

}

