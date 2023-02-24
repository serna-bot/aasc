import { useState } from 'react';
import './index.scss'

function IndivAccordian(props) {
    
    //return styling based on props
    //on click passes its index to parent
    //expands only based on the props.open passed in from the parent
    return (
        <div className='container'>
            <div className='head' onClick={() => props.expandOne(props.index)}>
                <div>{props.data.type}</div>
                <div className='sign'>{props.open? '-' : '+'}</div>
            </div>
            <div>
                {props.open && props.data.value.map(el => {
                        return (
                            <div className='content'>
                                {el}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default IndivAccordian;