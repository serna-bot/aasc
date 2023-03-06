// inlcude functions for like button on change, searching change, and others
const expand_options = document.querySelector(".expand-options");
const xhttp = new XMLHttpRequest();
// start with css only
function expandAccord() {
  
}

function loadCat() {
    xhttp.open("POST", "./categories.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() { //Call a function when the state changes.
        if(xhttp.readyState == 4 && xhttp.status == 200) { // complete and no errors
            console.log(JSON.parse(xhttp.responseText)); // some processing here, or whatever you want to do with the response
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
            console.log(JSON.parse(xhttp.responseText)); // some processing here, or whatever you want to do with the response
        }
    };
    xhttp.send(`search=${search}`);
}