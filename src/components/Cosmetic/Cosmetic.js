import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, price } = props.cosmetic;
    return (
        <div>
            <h2>name: {name}</h2>
            <p>Price: {price} Taka</p>
        </div>
    );
};

export default Cosmetic;