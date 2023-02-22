import "./index.scss";

function IndivDrinks(props) {

    return (
        props.data.value.map(el => {
            return (
                <div className='content'>
                    {el}
                </div>
            );
        })
    );
}

export default IndivDrinks;