function matchpass(){  


var firstpassword=document.captcha.firstT.value;  
	
		alert("!!" + firstpassword);
//var secondpassword=document.registrationForm.password2.value;  
	
	alert("777");
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  

document.getElementById('confirmError').innerText = "Password and Confirm password should be the same";
document.getElementById("confirmError").classList.add('invalid');
document.getElementById("password").classList.add('errorBorder');
document.getElementById("password2").classList.add('errorBorder');


//alert("password must be same!");  
return false;  
}  
}  