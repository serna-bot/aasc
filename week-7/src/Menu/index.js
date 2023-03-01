import { useEffect, useState } from 'react';
import {categories} from "./categories";
import './index.scss';
import DrinkNames from './DrinkNames';
import DrinkNamesOnly from './DrinkNamesOnly';

//searching algorithm

//function to display the data/event handler

//return html/scss
function Menu() {
    useEffect(() => {
        handleData();
    }, []);
    const [data, setData] = useState(categories); 
    const [slash, setSlash] = useState(false);
    const [found, setFound] = useState(true);

    function partition (val, searchParam) {
        const minLen = 3;
        for (const word of val.split(" ")) {
            if (word.toLocaleLowerCase().startsWith(searchParam.toLocaleLowerCase())) {
                console.log("partitioning", val, true);
                return true;
            }
            else {
                if (word.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()) && searchParam.length >= minLen) {
                    console.log("partitioning by matching somewhere in the word", val, true);
                    return true;
                }
            }
        }
        return false;
    };

    const handleData = async (searchParam) => {
        //searching algorithm
        //display data based on the search input, else return all data
        setSlash(false); //default state to include categories and accordian
        setFound(true); //error checker, false means to throw an error


        //there is a search param
        if (searchParam) {
            //search by category
            console.log("searching for...", searchParam);
            if (categories.some(element => partition(element.type, searchParam))) {
                const matches = categories.filter(element => partition(element.type, searchParam));
                console.log("categories", matches);
                setData(matches);

                if (matches === undefined || matches.length === 0 || matches === null) {
                    console.log("no work");
                    setFound(false);
                }

                //there is at least one category that matches
                else {
                    let tempList = [];
                    //new format of data using the slashes, push to the list and set data to so
                    //push all items under found category into the return list
                    for (const item of matches) {
                        for (const val of item.value) {
                            const tempObj = {"type": item.type, "value" : val};
                            tempList.push(tempObj);
                        }
                        console.log("found items", tempList);
                        setSlash(true);
                        setData(tempList);
                    }
                }
            }
            //search by singular item
            else {
                //find all categories that contain at least one match
                const matches2 = categories.filter(element => element.value.some(el => partition(el, searchParam)));
                console.log("checking items", matches2);
                
                //if there are no categories that match with the searchParam
                if (matches2 === undefined || matches2.length === 0 || matches2 === null) {
                    console.log("no work");
                    setFound(false);
                }

                //there is at least one category that matches
                else {
                    let tempList = [];
                    //new format of data using the slashes, push to the list and set data to so
                    //manually searching through the matches to find the exact match
                    for (const item of matches2) {
                        for (const val of item.value) {
                            if (partition(val, searchParam)) {
                                const tempObj = {"type": item.type, "value" : val};
                                tempList.push(tempObj);
                            }
                        }
                        console.log("found items", tempList);
                        setSlash(true);
                        setData(tempList);
                    }
                }
            }
        }
        //no searchParam
        else setData(categories);
    };
    //function for searching/event handler
    const onSearchChange = async (e) => {
        handleData(e.target.value);
    };
    //html needs to show the search bar that changes searchParam based on event handler
    //also needs to display data
    return (
        <div className='entire'>
            <div className='header'><h1>boba menu</h1></div>
            <div className='content-container'>
             <input type = "text" placeholder='Search' onKeyUp={onSearchChange}></input>
            
             <div>
                { found
                    ? <> {
                        !slash ?
                        <DrinkNames data = {data}/>
                        : <DrinkNamesOnly data = {data}/>
                    }
                    </>
                    : <div>No search results found.</div>
                }
             </div>
            </div>
        </div>
    );
}

export default Menu;
