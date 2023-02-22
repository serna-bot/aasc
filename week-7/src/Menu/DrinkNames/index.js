import { useEffect, useState } from 'react';
import {categories} from "../categories.js";
import './index.scss';

function DrinkNames(props) {
    console.log("awooga", props.data);
    return (
        <div>
            <div>
                {
                    props.data.map(val => {
                        return (
                            <div className='container'>
                                <div className='head'>{val.type}</div>
                                <div className='content'>
                                    {
                                        val.value.map(el => {
                                            return (
                                                <div>
                                                    {el}
                                                </div>
                                            );
                                        })
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