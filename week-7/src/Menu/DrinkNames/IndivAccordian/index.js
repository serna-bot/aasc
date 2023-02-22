import { useState } from 'react';
import './index.scss'

function IndivAccordian(props) {
    const [accordianOn, setAccordian] = useState(false);
    return (
        <div className='container'>
            <div className='head' onClick={() => setAccordian(!accordianOn)}>
                <div>{props.data.type}</div>
                <div className='sign'>{accordianOn? '-' : '+'}</div>
            </div>
            <div>
                {accordianOn && props.data.value.map(el => {
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