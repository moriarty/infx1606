/** Assignment 4 required an alert. **/
function alertA4() {
	alert('Work for this course, including this page are kept in git.\ngithub.com/moriarty');
}

/** Assignment 5 code **/
function graduationA5(){
	var foo = document.getElementById("graduation").selectedIndex;
	var gdate = document.getElementById("graduation").options[foo].value;
	if (gdate==''){alert("Please select a graduation year.");}
	else {
		document.getElementById('gradout').innerHTML = "Expected Graduation: "+gdate;	
	}
}
function coursesA5(){
	var a=document.getElementById("courseinfo").elements["course"];
	var retstr="";
	for (var i = a.length - 1; i >= 0; i--) {
		if(a[i].checked){
			if(a[i].value == "csci4155"){retstr+="<li>CSCI 4155: Machine Learning</li>";}
			else if(a[i].value =="csci3110"){retstr+="<li>CSCI 3110: Algorithms</li>";}
			else if(a[i].value =="csci3101"){retstr+="<li>CSCI 3101: Computer Ethics</li>";}
			else if(a[i].value =="csci2141"){retstr+="<li>CSCI 2141: Databases</li>";}
			else if(a[i].value =="infx1606"){retstr+="<li>INFX 1606: Website Creation</li>";}
		}
	}
	if (retstr.match(/<li>/g).length >=2){
		document.getElementById("coursesout").innerHTML=retstr;
	} else {
		alert("Please select at least two courses.");
	}
}
function degreeA5(){
	var retstr = "";
	if (document.getElementById('bcsci').checked){retstr="Bachelor of Computer Science";}
	else if (document.getElementById('binfx').checked){retstr="Bachelor of Informatics";}
	else if (document.getElementById('beced').checked){retstr="Bachelor of Electrical Engineering";}
	else if (document.getElementById('masys').checked){retstr="Masters of Autonomous Systems";}
	document.getElementById("degreeout").innerHTML=retstr;
}
function bannerA5(){
	var banner = document.getElementById('bannerid').value;
	if (isNaN(banner)){
		alert("Please enter a valid banner ID.");
	} else if (banner != "") {
		document.getElementById('bannerout').innerHTML = "B00"+banner;
	}
}
function studentnameA5(){
	var name = document.getElementById("studentname").value
	if (name==""){
		alert("Please enter your name")
	} else {
		document.getElementById("nameout").innerHTML=name;
	}

}
