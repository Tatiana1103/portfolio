var result;
var result2;
function randomInteger() {
  var min = Number(document.getElementById('short_link').value);
  var max = Number(document.getElementById('data').value);
  
  result = Math.floor(Math.random() * (max - min)) + min;
  result2 = Math.floor(Math.random() * (max - min)) + min;
   
  document.getElementById('rez').value = result+ " " + getSign() + " " +result2;
  
  
}

function getSign(){
  
if(document.getElementById('pluss').checked)
    return "+";
if(document.getElementById('minuss').checked)
	return "-";
if (document.getElementById('multt').checked)
    return "*";
  }


function check2 (firstNumber, secondNumber, sign) {
	var userAnswer = Number(document.getElementById('rez2').value);
	
	switch(sign){
		case "*": return userAnswer === (firstNumber*secondNumber);  break;
		case "+": return userAnswer === (firstNumber+secondNumber); break;
		case "-": return userAnswer === (firstNumber-secondNumber); break;
	}
	
}


function check () {
  if (check2(result, result2, getSign())){
		alert ("result true");
	}
	else {
		alert ("result false");
	}
}
