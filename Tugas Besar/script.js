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


var fruits = ["Apple", "Avocado", "Banana", "Bluberry", "Cherry",
                "Grape", "Guava", "Kiwi", "Lemon", "Lime",
                "Lychee", "Mango", "Orange", "Papaya", "Peach",
                "Pineapple", "Pomegranate", "Strawberry", "Watermelon"];

function autocomplete(input, arr){
    var currentFocus;

    input.addEventListener("input", function (e){
        var container, matchelem, i, val = this.value;
        closeAllLists();
        if(!val){
            return false;
        }
        currentFocus = -1;
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "search-list");
        container.setAttribute("class", "search-items");
        this.parentNode.appendChild(container);
        for(i=0;i<arr.length;i++){
            if(arr[i].substr(0, val.length).toUpperCase()==val.toUpperCase()){
                matchelem = document.createElement("DIV");
                matchelem.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                matchelem.innerHTML += arr[i].substr(val.length);
                matchelem.innerHTML += "<input type='hidden' value='" + arr[i] +"'>";
                matchelem.addEventListener("click", function(e){
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                container.appendChild(matchelem);
            }
        }
    });

    input.addEventListener("keydown", function(e){
        var x = document.getElementById(this.id + "search-list");
        if(x){
            x = x.getElementsByTagName("div");
        }
        if(e.keyCode == 40){
            currentFocus++;
            addActive(x);
        }
        else if(e.keyCode == 38){
            currentFocus--;
            addActive(x);
        }
        else if(e.keyCode == 13){
            e.preventDefault();
            if(currentFocus > -1){
                if(x){
                    x[currentFocus].click();
                }
            }
        }
    });

    function addActive(x){
        if(!x){
            return false;
        }
        removeActive(x);
        if(currentFocus >= x.length){
            currentFocus = 0;
        }
        if(currentFocus < 0){
            currentFocus = (x.length - 1);
        }
        x[currentFocus].classListAdd("search-active");
    }

    function removeActive(x){
        for(var i=0;i<x.length;i++){
            x[i].classList.remove("search-active");
        }
    }

    function closeAllLists(elmnt){
        var x = document.getElementsByClassName("search-items");
        for(var i=0;i<x.length;i++){
            if(elmnt != x[i] && elmnt != input){
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e){
        closeAllLists(e.target);
    });

    
}
