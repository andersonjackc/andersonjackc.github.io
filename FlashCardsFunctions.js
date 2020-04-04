
var num1, num2, symbolVal, numCorrect=0, totalProblems=0, percentCorrect=0, newProblem=false, flipNum=0;


function initVals(){
	numCorrect = 0;
	totalProblems = 0;
	percentCorrect = 0;
	newProblem = false;
	document.getElementById("numCorrect").innerHTML = "";
	flipNum = 0;
}

function genEquation(){
	document.getElementById("error").innerHTML = "";
	document.getElementById("answer").value = "";
	newProblem = true;
	if((document.getElementById("add").checked || document.getElementById("sub").checked || document.getElementById("mult").checked || document.getElementById("div").checked) && (document.getElementById("max").value!="") && !isNaN(document.getElementById("max").value)){
		var max = parseInt(document.getElementById("max").value);
		
		var symbol, symbol1, symbol2, symbol3, symbol4;
		
		var randSymVal;
		
		var count = 0;
		
		var add, sub, mult, div;
		totalProblems++;
		document.getElementById("correct").innerHTML = "";
		document.getElementById("incorrect").innerHTML = "";
		
		add = document.getElementById("add").checked;
		sub = document.getElementById("sub").checked;
		mult = document.getElementById("mult").checked;
		div = document.getElementById("div").checked;
		
		symbol = "";
		symbol1 = "+";
		symbol2 = "-";
		symbol3 = "&times";
		symbol4 = "&divide";
		
		if(add){
			count=1;
		}
		
		if(sub){
			count=2;
		}
		
		if(mult){
			count=3;
		}
		
		if(div){
			count=4;
		}
		
		randSymVal = Math.floor(Math.random() * (count))+1;
		
		while(symbol==""){
			
			if(randSymVal == 1 && add){
				symbol = symbol1;
				symbolVal = 1;
			}else if(randSymVal == 1 && !add){
				randSymVal++;
			}else if(randSymVal == 2 && sub){
				symbol = symbol2;
				symbolVal = 2;
			}else if(randSymVal == 2 && !sub){
				randSymVal++;
			}else if(randSymVal == 3 && mult){
				symbol = symbol3;
				symbolVal = 3;
			}else if(randSymVal == 3 && !mult){
				randSymVal++;
			}else if(randSymVal == 4 && div){
				symbol = symbol4;
				symbolVal = 4;
			}else if(randSymVal == 4 && !div){
				randSymVal = 1;
			}
		}
		
		num1 = Math.floor(Math.random() * (max+1));
		
		num2 = Math.floor(Math.random() * (max+1));
		
		if(symbol == symbol4 && num2 == 0){
			num2++;
		}
		
		
		
		document.getElementById("equation").innerHTML = num1 + "" + symbol + "" + num2;
	}else{
		document.getElementById("error").innerHTML = "Please select an operation or enter a valid max value.";
	}
}

function check(){
	
	var answer, correctAnswer;
	
	if(totalProblems==0){
		totalProblems++;
	}
	
	if(newProblem){
		
		answer = document.getElementById("answer").value;
		
		if(symbolVal==1){
			correctAnswer = num1 + num2;
		}else if(symbolVal == 2){
			correctAnswer = num1 - num2;
		}else if(symbolVal == 3){
			correctAnswer = num1 * num2;
		}else if(symbolVal == 4){
			correctAnswer = num1 / num2;
			
			if(correctAnswer>Math.floor(correctAnswer) && correctAnswer< Math.ceil(correctAnswer)){
				correctAnswer = parseFloat(correctAnswer.toFixed(2));
			}
			
		}
		
		if(answer == correctAnswer){
			numCorrect++;
			document.getElementById("correct").innerHTML = "Correct!";
			document.getElementById("incorrect").innerHTML = "";
		}else if(answer != correctAnswer){
			document.getElementById("correct").innerHTML = "";
			document.getElementById("incorrect").innerHTML = "Incorrect. Please try again.";
		}
		
		percentCorrect = (numCorrect/totalProblems)*100;
		percentCorrect = percentCorrect.toFixed(2);
		document.getElementById("numCorrect").innerHTML = "You have " + numCorrect + " problems correct out of " + totalProblems + ". That is " + percentCorrect + "%!";
		newProblem=false;
	}
}

function getAnswer(){
	
	var correctAnswer;
	
	if(symbolVal==1){
		correctAnswer = num1 + num2;
	}else if(symbolVal == 2){
		correctAnswer = num1 - num2;
	}else if(symbolVal == 3){
		correctAnswer = num1 * num2;
	}else if(symbolVal == 4){
		correctAnswer = num1 / num2;
		
		if(correctAnswer>Math.floor(correctAnswer) && correctAnswer< Math.ceil(correctAnswer)){
			correctAnswer = parseFloat(correctAnswer.toFixed(2));
		}
		
	}
	
	
	setTimeout(function() {
		document.getElementById("solution").innerHTML = correctAnswer;
	}, 1000);
	
}



function flip() {
	
	flipNum++;
	
	
	$('.flip-card-inner').toggleClass('flipped');
	
}

function reflip() {
	
	if(totalProblems!=0 && flipNum%2==1){
		$('.flip-card-inner').toggleClass('flipped');
	}
}






