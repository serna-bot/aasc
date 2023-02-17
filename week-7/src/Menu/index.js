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

    const handleData = async (searchParam) => {
        //searching algorithm
        //display data based on the search input, else return all data
        if (searchParam != "") {
            const matches = categories.drinks.filter(element => element.startsWith(searchParam));
            console.log(categories.drinks.filter(element => element.toLocaleLowerCase().startsWith(searchParam.toLocaleLowerCase())));
            setData(matches);
        }
        else setData(categories.drinks);
    };
    //function for searching/event handler
    const onSearchChange = async (e) => {
        handleData(e.target.value);
    };
    //html needs to show the search bar that changes searchParam based on event handler
    //also needs to display data
    return (
        <div>
            <input type = "text" placeholder='Search' onKeyUp={onSearchChange}></input>
            <div>
                {
                    data.map(drink => {
                        return <div>{drink}</div>
                    })
                }
            </div>
        </div>
    );
}

export default Menu;
