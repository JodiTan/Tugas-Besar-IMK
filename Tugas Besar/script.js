var myIndex = 0;
function openContent(obj, idContentContainer) {
    var i, x, tablinks;

    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-flat-peter-river", "");
    }

    document.getElementById(idContentContainer).style.display = "block";
    obj.className += " w3-flat-peter-river";
}

function showCont(id) {
    var x = document.getElementById(id);

    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    }
    else {
        x.className = x.className.replace(" w3-show", "");
    }
}

+ function ($) {
    'use strict';

    var dropZone = document.getElementById('drop-zone');

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-drop-zone dropped';
        $(this).html("File dropped");
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }

};

var films = ["2012", "A Beautiful Mind", "A Star is Born", "Annabelle", "Armageddon", "Avatar (2009)", "Avengers End Game", "Avengers Infinity War", "Barbie",
    "Batman The Dark Knight", "Beauty and The Beast", "Black Panther", "Boss Baby", "Bruce Almighty", "Bumblebee", "Captain America: The First Avenger",
    "Captain America: The Winter Soldier", "Cinderella", "Doctor Strange", "Dragon Ball", "Elysium", "Evan Almighty", "Extraterrestrial", "Fairy Tail",
    "Fast and Furious 7", "Final Destination 3", "Final Fantasy The Movie", "Five Minarets in New York", "Frontera", "Garfield The Movie", "Ghost Rider",
    "God Must Be Crazy", "Gran Torino", "Gravity", "Guardians of the Galaxy", "Hachiko", "Harry Potter", "Hellboy", "Honeymoon", "Inception",
    "Incredible Hulk", "Insidious", "John Wick 3", "Johnny English Reborn", "Kill Bill 1", "Kill Bill 2", "Life of Pi", "Maleficent",
    "Man in Black", "Man of Steel", "Mission Impossible", "Mr Bean Holiday", "Naruto Shippuden", "Need For Speed", "Now You See Me", "Noah",
    "Oblivion", "Outcast", "One Piece", "Pacific Rim", "Pearl Harbor", "Pirates of The Caribbean", "Pokemon", "Ragnarok", "Robin Hood", "Seven Deadly Sins",
    "Shaun The Sheep", "Shield Hero", "Star Wars", "Stealth", "The Da Vinci Code", "The Immitation Game", "The Conjuring", "The Fifth Estate", "Tom and Jerry",
    "The Theory of Everything", "Underworld", "Wrath of The Titans", "X-Men", "Zombieland"];

function autocomplete(input, arr) {
    var currentFocus;

    input.addEventListener("input", function (e) {
        var container, matchelem, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "autocomplete-list");
        container.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(container);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                matchelem = document.createElement("DIV");
                matchelem.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                matchelem.innerHTML += arr[i].substr(val.length);
                matchelem.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                matchelem.addEventListener("click", function (e) {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                container.appendChild(matchelem);
            }
        }
    });

    input.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) {
            x = x.getElementsByTagName("div");
        }
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        }
        else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        }
        else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) {
                    x[currentFocus].click();
                }
            }
        }
    });

    function addActive(x) {
        if (!x) {
            return false;
        }
        removeActive(x);
        if (currentFocus >= x.length) {
            currentFocus = 0;
        }
        if (currentFocus < 0) {
            currentFocus = (x.length - 1);
        }
        x[currentFocus].classListAdd("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });


}
autocomplete(document.getElementById("myInput"), films);

$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});



function changePageFromIndex() {
    var halaman = document.getElementById("myInput").value;
    window.location = "Film/" + halaman + ".html";
    document.getElementById("myInput").innerHTML("");
};

function changePage() {
    var halaman = document.getElementById("myInput").value;
    window.location = halaman + ".html";
    document.getElementById("myInput").innerHTML("");
};

(jQuery)