import { useState } from 'react';
import './index.scss';
import IndivAccordian from './IndivAccordian';

function DrinkNames(props) {
    console.log("awooga", props.data);
    const [accordInd, setAccordInd] = useState(-1)

    //for each category render an accordian

    return (
        <div>
            <div>
                {
                    props.data.map(val => {
                        return (
                            <IndivAccordian data={val}/>
                        );
                    })
                }
            </div>
        </div>
        
    )
}

export default DrinkNames;