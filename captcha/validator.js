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
  if(password.value != confirm_password.value) {
        alert("Letters not same!");
    } else {
        alert("Letters same!");
  }
}
