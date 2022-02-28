import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h4>id:{id}</h4>
            <p>Price: {price} Taka</p>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;