var result;
var result2;
function randomInteger() {
  var min = document.getElementById('short_link').value;
  var max = document.getElementById('data').value;
  var f1 = document.getElementById('pluss').checked;
  var f2 = document.getElementById('minuss').checked;
  var f3 = document.getElementById('multt').checked;
  
  var  rand = Math.floor(Math.random() * (max - min+1) + min);
  var  rand2 = Math.floor(Math.random() * (max - min+1) + min);
  //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  
 
if(f1){
    document.getElementById('rez').value = rand+ "+" + rand2;
  }else if(f2){
    document.getElementById('rez').value = rand+ "-" + rand2;
  }else if (f3) {
    document.getElementById('rez').value = rand+ "*" + rand2;
  }
  
  result = rand;
  result2 = rand2;

  
  
}


function plus() {
  var num1 = window.result;
  var num2 = window.result2;
  var res = document.getElementById('rez2').value;
  
  if (res == (num1+num2)){
    alert ("result true");
  } else {
    alert ("result false");
  }
 
}

function min () {
  var num1 = window.result;
  var num2 = window.result2;
  var res = document.getElementById('rez2').value;

if (num1 < num2){
  alert ("error");
} else {
  if (res == (num1-num2)){
    alert ("result true");
  } else {
    alert ("result false");
  }
}
}



function mult () {
var num1 = window.result;
  var num2 = window.result2;
  var res = document.getElementById('rez2').value;
  
  if (res == (num1*num2)){
    alert ("result true");
  } else {
    alert ("result false");
  }
 
}

function check () {
  var f1 = document.getElementById('pluss').checked;
  var f2 = document.getElementById('minuss').checked;
  var f3 = document.getElementById('multt').checked;
  if(f1){
    plus();
  }else if(f2){
    min ();
  }else if(f3) {
    mult();
  }
}
