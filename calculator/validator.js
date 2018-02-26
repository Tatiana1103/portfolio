//window.onload = function() {
function gen(){
    var text = "";
    var text2 = "";
    var rez = "";
    var possible = "0123456789";
  for (var i = 0; i < 2; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  document.getElementById('short_link').value = text;
}
  for (var i = 0; i < 2; i++){
    text2 += possible.charAt(Math.floor(Math.random() * possible.length));
  document.getElementById('data').value = text2;
  }
}

function plus () {
  var num1, num2, num3;
  result = document.getElementById('rez').value;

  num1 = document.getElementById('short_link').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('data').value;
  num2 = parseInt(num2);

  num3 = num1+num2;

  if (result == num3){
    alert ("result true");
  } else {
    alert ("result false");
  }
}

function min () {
  var num1, num2, num3;
  result = document.getElementById('rez').value;

  num1 = document.getElementById('short_link').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('data').value;
  num2 = parseInt(num2);

  num3 = num1-num2;
if (num1 < num2){
  alert ("error");
} else {
  if (result == num3){
    alert ("result true");
  } else {
    alert ("result false");
  }
}
}



function mult () {
var num1, num2, num3;
result = document.getElementById('rez').value;

num1 = document.getElementById('short_link').value;
num1 = parseInt(num1);

num2 = document.getElementById('data').value;
num2 = parseInt(num2);

num3 = num1*num2;

if (result == num3){
  alert ("result true");
} else {
  alert ("result false");
}
}

function check () {
var
  f1 = document.getElementById('pluss').checked;
  f2 = document.getElementById('minuss').checked;
  if(f1){
    plus();
  }else if(f2){
    min ();
  }else {
    mult();
  }
}
