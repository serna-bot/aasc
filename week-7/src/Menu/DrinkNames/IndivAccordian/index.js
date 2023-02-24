import { useState } from 'react';
import './index.scss'

function IndivAccordian(props) {
    //three things to add
    // 1. if no search results then add some message [done]
    // 2. when getting search results the tea and smootie shoud disappear [done]
    // 3. if you opne one it should close the other
    // 4. a button that expands all
    //return styling based on above
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