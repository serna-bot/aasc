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
                            <div>
                                <div>{val.type}</div>
                                <div>
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