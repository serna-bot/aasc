// inlcude functions for like button on change, searching change, and others
const expand_options = document.querySelector(".expand-options");
const xhttp = new XMLHttpRequest();
// start with css only
function expandAccord() {
  
}

function updateDivs(jsonVal) {
    var iDiv = document.createElement('div');
    iDiv.id = 'bod-contain';
    iDiv.className = 'bod-contain';
    if (jsonVal.retAll) {
        for (const type of jsonVal.data) {
            var innerDiv = document.createElement('div');
            innerDiv.className = 'headtext';
            innerDiv.innerHTML = type.type;
            iDiv.appendChild(innerDiv);
        }
    }
    document.getElementsByTagName('body')[0].appendChild(iDiv);
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
            updateDivs(retVal);
        }
    };
    xhttp.send(`search=${search}`);
}