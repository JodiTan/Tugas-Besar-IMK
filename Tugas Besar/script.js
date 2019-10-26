function openContent(obj, idContentContainer){
	var i, x, tablinks;
	
	x= document.getElementsByClassName("tabs");
	for (i=0;i<x.length;i++){
		x[i].style.display="none";
	}
	
	tablinks= document.getElementsByClassName("tablink");
	for (i=0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace(" w3-flat-peter-river","");
	}
	
	document.getElementById(idContentContainer).style.display = "block";
	obj.className += " w3-flat-peter-river";
}

function showCont(id){
	var x = document.getElementById(id);
	
	if(x.className.indexOf("w3-show") == -1){
		x.className += " w3-show";
	}
	else{
		x.className = x.className.replace(" w3-show","");
	}
}