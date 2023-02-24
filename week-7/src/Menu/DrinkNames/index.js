import { useState } from 'react';
import './index.scss';
import IndivAccordian from './IndivAccordian';

function DrinkNames(props) {
    console.log("awooga", props.data);
    const [state, setState] = useState()
    const [expand, setExpand] = useState(false)

    const expandOne = index => {
        setState(state !== index ? index : -1)
    };

    const expandAll = async() => {
        setExpand(!expand);
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