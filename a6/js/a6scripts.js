function setLocation(local){
	$.cookie('myLocal',local)
	if(local=="tl"){
		$("#selector").removeClass()
		$("#selector").addClass("tl")
	}else if(local=="tr"){
		$("#selector").removeClass()
		$("#selector").addClass("tr")

	}else if(local=="bl"){
		$("#selector").removeClass()
		$("#selector").addClass("bl")

	}else if(local=="br"){
		$("#selector").removeClass()
		$("#selector").addClass("br")
	}else{
		$("#selector").removeClass()
		$("#selector").addClass("df")
		$.cookie('myLocal','df')
	}
}

function changeLocation(){
	var foo = document.getElementById("locationSelector").selectedIndex;
	var local = document.getElementById("locationSelector").options[foo].value;

	setLocation(local);	
}

function hideSelector(){
	$("#selector").toggle();
}
$(document).ready(function () {
	cVal = $.cookie('myLocal');
	if (cVal != ''){
		setLocation(cVal);
	}
});
