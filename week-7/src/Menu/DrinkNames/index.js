import { useState } from 'react';
import './index.scss';
import IndivAccordian from './IndivAccordian';

function DrinkNames(props) {
    console.log("awooga", props.data);
    const [state, setState] = useState()
    const [expand, setExpand] = useState(false)

    const expandOne = index => {
        setExpand(false); //resets the expand all so only one shows up at a time
        setState(state !== index ? index : -1); 
        //if the saved index is different than the index of the accordian that called the function, 
        //change saved index to current else make it -1 to close it
    };

    const expandAll = async() => {
        setExpand(!expand);
        //button to set whether to expand all
    }

    //for each category render an accordian

    return (
        <div>
            <button onClick={expandAll}>Expand all</button>
            <div>
                {
                    props.data.map( (val, index) => {
                        return (
                            <IndivAccordian data={val} index={index} expandOne={expandOne} open={expand ? true : state === index}/>
                        );
                    })
                }
            </div>
        </div>
        
    )
}

export default DrinkNames;