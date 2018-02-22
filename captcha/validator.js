window.onload = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById('short_link').value = text;
}


function validatePassword(){
  var password = document.getElementById("short_link");
      confirm_password = document.getElementById("data");
	alert("len of first" + password.value.length);
	alert("len of second" + confirm_password.value.length);
	if(password.value.length !=confirm_password.value.length ) {
		alert("The length is't the same");
	}
	
	for (var i=0; i < password.value.length; i++) {
		alert("i = " + i);
		if (password.value.charAt(i) != confirm_password.value.charAt(password.value.lenght -i-1)) {
			alert("Something is wrong!");
			return;
		}	 
		}
	alert("Well Done!!!");
	
	
	 
  if(password.value != confirm_password.value) {
        alert("Letters are not the same!");
    } else {
        alert("Letters are the same!");
  }
}

