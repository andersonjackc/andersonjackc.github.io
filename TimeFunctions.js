function Time(){
	
	var TotalTime = new Date();
	var hours = TotalTime.getHours();
	var minutes = TotalTime.getMinutes();
	var seconds = TotalTime.getSeconds();
	var day = TotalTime.getDate();
	var month = TotalTime.getMonth()+1;
	var year = TotalTime.getFullYear();
	
	hours = checkHours(hours);
	minutes = checkOthers(minutes);
	seconds = checkOthers(seconds);
	
	document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
	
	if(document.getElementById("12").checked && TotalTime.getHours()<12){
		document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " A.M.";
	}else if(document.getElementById("12").checked && TotalTime.getHours()>=12){
		document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " P.M.";
	}else{
		document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;
	}
	
	
	var t = setTimeout(Time, 1);
	
}

function checkHours(h){
	
	if(h<10){
		h = "0" + h;
		
	}else if( h<=12){
		
	}else if(document.getElementById("12").checked){
		if(h==0){
			h = 12;
		}else if( h>12){
			h = h - 12;
		}
	}
		
	return h;
	
}

function checkOthers(o){
	
	if(o<10){
		o = "0" + o;
	}
	
	return o;
	
	
}

function standard(){
	document.getElementById("24").checked = false;
	
}

function military(){
	document.getElementById("12").checked = false;
	
}