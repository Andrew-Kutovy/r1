import React, {useContext} from 'react';
import {Context} from "../CarContainer";

const Car = ({car}) => {
    const {id, brand, price, year} = car
    const {setCarForUpdate} = useContext(Context)
    return (
        <div>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={setCarForUpdate(car)}>update</button>
            <button>delete</button>
        </div>
    );
};

export default Car;