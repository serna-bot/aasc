import { useState } from 'react';
import './index.scss';
import IndivDrinks from './IndivDrinks/index.js';

function DrinkNames(props) {
    console.log("awooga", props.data);
    const [accordianOn, setAccordian] = useState(false);
    return (
        <div>
            <div>
                {
                    props.data.map(val => {
                        return (
                            <div className='container'>
                                <div className='head' onClick={() => setAccordian(!accordianOn)}>
                                    <div>{val.type}</div>
                                    <div>{accordianOn? '-' : '+'}</div>
                                </div>
                                <div>
                                    {accordianOn && <IndivDrinks data = {val}/>
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        
    )
}

export default DrinkNames;