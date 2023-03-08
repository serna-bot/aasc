// inlcude functions for like button on change, searching change, and others
const xhttp = new XMLHttpRequest();
// start with css only
var expand  = false;


//button on change for the expand all
function expandAll(el) {
    //get the stored value in the button
    var val = el.getAttribute('value');
    //getting the accordian
    var accord = document.getElementsByClassName("headtext");
    if (val === "1") { //currently expand all is false, want to make it true
        el.setAttribute('value', "0");
        expand = true;

        //loop through the accord list and check if it is currently closed, if it is open it
        for (var i = 0; i < accord.length; i++) {
            const curr = accord[i].classList;
            if (!curr.contains("collapsed")) {
                curr.toggle("collapsed");
                var cont = accord[i].nextElementSibling;
                if (cont.style.maxHeight) cont.style.maxHeight = null;
                else cont.style.maxHeight = cont.scrollHeight+"px";
            }
        }
    }
    // close all the divs
    else {
        el.setAttribute('value', "1");
        expand = false;
        closeAllDivs();
    }
}

function clearDivs() {
    const elements = document.getElementsByClassName("bod-contain");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//loading the menu vals

function loadDivs(jsonVal, _callback) {
    var iDiv = document.createElement('div');
    iDiv.id = 'bod-contain';
    iDiv.className = 'bod-contain';
    //return the accordian
    if (jsonVal.retAll) {
        for (const type of jsonVal.data) {
            var innerDiv = document.createElement('div');
            innerDiv.className = 'headtext';
            innerDiv.innerHTML = type.type;
            var drinksDiv = document.createElement('div');
            drinksDiv.className = 'collapse';
            for (const drink of type.drinks) {
                var drinkDiv = document.createElement('div');
                drinkDiv.className = "drink";
                drinkDiv.innerHTML = drink;
                drinksDiv.appendChild(drinkDiv);
            }
            iDiv.appendChild(innerDiv);
            iDiv.appendChild(drinksDiv);
        }
    }
    //return individual search values or error
    else {
        //no error
        if (jsonVal.data !== "No results") {
            var drinksDiv = document.createElement('div');
            for (const drink of jsonVal.data) {
                var drinkDiv = document.createElement('div');
                drinkDiv.className = "searchDrink";
                drinkDiv.innerHTML = `${drink.type}/${drink.drink}`;
                drinksDiv.appendChild(drinkDiv);
            }
            iDiv.appendChild(drinksDiv);
        }
        //error 
        else {
            var error = document.createElement('div');
            error.className = "error";
            error.innerHTML = "No Results Found.";
            iDiv.appendChild(error);
        }
    }
    document.getElementsByTagName('body')[0].appendChild(iDiv); //append the whole divs we created to the body
    _callback();
}

function updateDivs(jsonVal) {
    loadDivs(jsonVal, function() {
        var accord = document.getElementsByClassName("headtext");
        for (var i = 0; i < accord.length; i++) {
            // adding an event listener to each accordian tab
            accord[i].addEventListener("click", function(e) {
                const curr = e.target.classList;
                //if we already expanded all of them, we want it to close on click
                if (curr.contains("collapsed") && expand) {
                    var expandAll = document.getElementsByClassName("expandAll");
                    expandAll[0].setAttribute('value', "1");
                    expand = false;
                    closeAllDivs();
                }
                //else if its open, so close it
                else if (curr.contains("collapsed")) {
                    e.target.classList.remove("collapsed");
                    var cont = e.target.nextElementSibling;
                    cont.style.maxHeight = null;
                }
                //else it is not open, loop through to close all the other ones, then set it to be open
                else {
                    for (var j = 0; j < accord.length; j++) {
                        accord[j].classList.remove("collapsed");
                        accord[j].nextElementSibling.style.maxHeight = null;
                    }
                    this.classList.toggle("collapsed");
                    var cont = this.nextElementSibling;
                    if (cont.style.maxHeight) cont.style.maxHeight = null;
                    else cont.style.maxHeight = cont.scrollHeight+"px";
                }
            });
        }
    });
}

function closeAllDivs() {
    var accord = document.getElementsByClassName("headtext");
    //loop through and remove all the open tabs
    for (var i = 0; i < accord.length; i++) {
        const curr = accord[i].classList;
        curr.remove("collapsed");
        var cont = accord[i].nextElementSibling;
        cont.style.maxHeight = null;
    }
}


function loadCat() {
    xhttp.open("POST", "./categories.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() { //Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) { // complete and no errors
            const retVal = JSON.parse(xhttp.responseText);
            console.log(retVal); // some processing here, or whatever you want to do with the response
            updateDivs(retVal);
        }
    };
    xhttp.send("search=");
}

function onSearchChange() {
    const search = document.getElementById("search").value;
    xhttp.open("POST", "./categories.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() { //Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) { // complete and no errors
            const retVal = JSON.parse(xhttp.responseText);
            console.log(retVal); // some processing here, or whatever you want to do with the response
            clearDivs();
            updateDivs(retVal);
        }
    };
    xhttp.send(`search=${search}`);
}