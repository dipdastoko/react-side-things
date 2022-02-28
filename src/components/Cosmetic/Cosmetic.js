import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }

    const handleRemove = id => {
        removeFromDb(id);
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <h4>id:{id}</h4>
            <p>Price: {price} Taka</p>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
            <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;