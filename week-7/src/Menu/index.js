import { useEffect, useState } from 'react';
import {categories} from "./categories";

//searching algorithm

//function to display the data/event handler

//return html/scss
function Menu() {
    useEffect(() => {
        handleData();
    }, []);
    const [data, setData] = useState(categories.drinks); //move to backend if there is time
    const [searchEntry, setSearchEntry] = useState("honey");

    const handleData = async () => {
        //searching algorithm
        //display data based on the search input, else return all data
        if (searchEntry != "") {
            const matches = categories.drinks.filter(element => element.startsWith(searchEntry));
            console.log(categories.drinks.filter(element => element.startsWith(searchEntry)));
            setData(matches);
        }
        else setData(categories.drinks);
    };
    //function for searching/event handler
    const onSearchChange = async () => {
        setSearchEntry("hi"); //set the search entry based on what the user is typing, async updating it each time
    };
    //html needs to show the search bar that changes searchParam based on event handler
    //also needs to display data
    return (
        <div></div>
    );
}

export default Menu;
