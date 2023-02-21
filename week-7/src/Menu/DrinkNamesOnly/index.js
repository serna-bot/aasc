import {categories} from "../categories.js";
import './index.scss';

function DrinkNamesOnly(props) {
    console.log("waluigi", props.data);
    return (
        <div>
            {
                props.data.map(element => {
                    return (
                        <div>
                            {element.type}/{element.value}
                        </div>
                    )
                })
            }
        </div>
    );
}
export default DrinkNamesOnly;