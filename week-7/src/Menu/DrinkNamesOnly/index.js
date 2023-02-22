import {categories} from "../categories.js";
import './index.scss';

function DrinkNamesOnly(props) {
    console.log("waluigi", props.data);
    //map the singular drinks with their respective drink type
    return (
        <div>
            {
                props.data.map(element => {
                    return (
                        <div className="elem">
                            {element.type}/{element.value}
                        </div>
                    )
                })
            }
        </div>
    );
}
export default DrinkNamesOnly;