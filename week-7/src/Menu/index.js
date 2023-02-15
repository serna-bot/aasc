import { useEffect, useState } from 'react';
import {categories} from "./categories";

//searching algorithm

//function to display the data/event handler

//return html/scss
function Menu() {
    useEffect(() => {
        handleData();
    }, []);
    //const [data, setData] = useState([]);
    const data = categories;

    const handleData = async () => {
        //searching algorithm
    }
    //function for searching/event handler
    //html needs to show the search that changes based on event handler
    //also needs to display data
    return (
        <div>Hello</div>
    );
}

export default Menu;
