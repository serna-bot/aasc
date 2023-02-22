import './index.scss';
import IndivAccordian from './IndivAccordian';

function DrinkNames(props) {
    console.log("awooga", props.data);

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